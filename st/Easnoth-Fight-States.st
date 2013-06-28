Smalltalk current createPackage: 'Easnoth-Fight-States' properties: #{}!
State subclass: #CellState
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!

!CellState methodsFor: 'eventHandling'!

addSelector
	self subclassResponsibility
!

canAttack: aSidePlayed
	self subclassResponsibility
!

canMoveTo
	self subclassResponsibility
!

mouseClick
	self subclassResponsibility
!

removeSelector
	self object removeGameOverTile
! !

!CellState class methodsFor: 'instance creation'!

initializeStateFor: aCell
	aCell free ifTrue: [
		aCell state: (Free newFor: aCell)
	] ifFalse: [
		aCell state: (HasMonster newFor: aCell)
	]
! !

CellState subclass: #Free
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!Free commentStamp!
"no monster on it"!

!Free methodsFor: 'eventHandling'!

addSelector
	self object addSelectorColored: 'green'.
	self object changeState: (FreeSelected new).
!

canAttack: aSidePlayed
	^false
!

canMoveTo
	^self object tile isWall not
!

mouseClick: actionCell
	self object map showActiveMonsters
!

removeSelector
	super removeSelector.
! !

CellState subclass: #FreeSelected
	instanceVariableNames: 'prevCell'
	package: 'Easnoth-Fight-States'!
!FreeSelected commentStamp!
"free not wall selected"!

!FreeSelected methodsFor: 'accessing'!

prevCell
	^prevCell
!

prevCell: aCell
	prevCell := aCell
! !

!FreeSelected methodsFor: 'eventHandling'!

addSelector
	self error: 'shouldnt be possible to add selector on this cell'
!

canAttack: aSidePlayed
	^false
!

canMoveTo
	^false
!

mouseClick: actionCell
	actionCell monster moveTo: self object.
!

removeSelector
	super removeSelector.
	self object changeState: Free new
! !

!FreeSelected class methodsFor: 'instance creation'!

newPreviousCell: aCell
	^self new 
		prevCell: aCell;
		yourself
! !

CellState subclass: #HasMonster
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!HasMonster commentStamp!
"monster on it"!

!HasMonster methodsFor: 'eventHandling'!

addSelector
	|sidePlaying|
	sidePlaying := self object map actionMenu sidePlaying.
	(self object monster side = sidePlaying) ifTrue: [
		self error: 'shouldnt be able to select because friendly monster'
	] ifFalse: [
		self object addSelectorColored: 'red'.
		self object changeState: HasMonsterSelected new.
	].
!

canAttack: aSidePlayed
	^(self object map actionMenu sidePlaying = self object monster side) not
!

canMoveTo
	^false
!

mouseClick: actionCell
	self object monster select
!

removeSelector
	super removeSelector.
! !

CellState subclass: #HasMonsterSelected
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!HasMonsterSelected commentStamp!
"ennemy selected"!

!HasMonsterSelected methodsFor: 'eventHandling'!

addSelector
	self error: 'shouldnt be possible to add selector on this cell'
!

canAttack: aSidePlayed
	^false
!

canMoveTo
	^false
!

mouseClick: actionCell
	actionCell monster attackTo: self object.
!

removeSelector
	super removeSelector.
	self object changeState: HasMonster new
! !

State subclass: #MonsterState
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!

!MonsterState methodsFor: 'animation'!

animationMoveFrom: actionCell to: aCell callback: callback
	|monster path movin i|
	
	path := Array new.
	monster := actionCell monster.
	i := 0.

	path add: aCell.
	[actionCell = path last] whileFalse: [path add: path last prevCell].

	actionCell map removeSelection.
	1 to: path size - 1 do: [:k | (path at: k) addSelector].
	actionCell map update.

	movin := [
                (path at: path size - i - 1) monster: monster.
                (path at: path size - i) removeMonster.
              	i := i + 1.
                actionCell map update
	].

	1 to: path size - 1 do: [ :j |
		movin valueWithTimeout: 300*j
	].

	callback valueWithTimeout: 300 * (path size - 1)
! !

!MonsterState methodsFor: 'eventHandling'!

attackTo: aCell
	self subclassResponsibility
!

moveTo: aCell
	self subclassResponsibility
!

select
	self subclassResponsibility
! !

!MonsterState methodsFor: 'internal'!

attackTo: aCell toState: aState
	|actionCell monster diceRes|
	
	"variables"
	monster := self object.
	actionCell := monster cell.

	"animation"
	"TODO"

	"states"
        monster changeState: aState.
        "aCell changeState: Free new. -> moved to Monster>>removeHP"

        "selection"
        actionCell map removeSelection.
        "monster select."

	"attackCalcul"
	diceRes := monster rollDicesCallBack: [
		aCell monster removeHP: diceRes x.

                "selection"
                actionCell map removeSelection.
                monster select.

		actionCell map update.
	].
!

moveTo: aCell toState: aState
	self moveTo: aCell toState: aState callback: []
!

moveTo: aCell toState: aState callback: callback
	|actionCell monster|

	"variables"
	monster := self object.
	actionCell := monster cell.

	"selection"
	self object cell map removeSelection.
	monster select.

	"animation"
	self animationMoveFrom: actionCell to: aCell callback:[	
                "states"
                actionCell changeState: Free new.
                monster changeState: aState.
                aCell changeState: HasMonster new.

		"selection"
		self object cell map removeSelection.
		monster select.

		actionCell map update.

		callback value
	].
! !

MonsterState subclass: #Active
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!Active commentStamp!
"Monster can move and attack"!

!Active methodsFor: 'eventHandling'!

attackTo: aCell
	(aCell neighbours includes: self object cell) ifFalse: [
		self moveTo: ((aCell neighbours select: [:each | each state isKindOf: FreeSelected ]) asArray at: 1) toState: HasMoved new callback: [self object state attackTo: aCell].		
	] ifTrue: [
		self attackTo: aCell toState: HasAttacked new.
	]
!

moveTo: aCell
	self moveTo: aCell toState: HasMoved new
!

select
	|monster cell map|

	monster := self object.
	cell := monster cell.
	map := cell map.

	cell selectableNeighboursSide: monster side.
	map actionMenu actionCell: cell.
! !

MonsterState subclass: #HasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!HasAttacked commentStamp!
"Monster can only move"!

!HasAttacked methodsFor: 'eventHandling'!

attackTo: aCell
	self error:'has already attacked'
!

moveTo: aCell
	self moveTo: aCell toState: Inactive new
!

select
	|monster cell map|

	monster := self object.
	cell := monster cell.
	map := cell map.

	cell movableNeighbours ifEmpty:[map showActiveMonsters].
	map actionMenu actionCell: cell.
! !

MonsterState subclass: #HasMoved
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!HasMoved commentStamp!
"Monster can only attack"!

!HasMoved methodsFor: 'not yet classified'!

attackTo: aCell
	self attackTo: aCell toState: Inactive new.
!

moveTo: aCell
	self error:'has already moved'
!

select
	|monster cell map|

	monster := self object.
	cell := monster cell.
	map := cell map.

	(cell attackableNeighboursSide: monster side) ifEmpty:[map showActiveMonsters].
	map actionMenu actionCell: cell
! !

MonsterState subclass: #Inactive
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!Inactive commentStamp!
"monster can't move or attack"!

!Inactive methodsFor: 'eventHandling'!

attackTo: aCell
	self error:'inactive'
!

moveTo: aCell
	self error:'inactive'
!

select
	|cell|

	cell := self object cell.

	cell map showActiveMonsters.
	cell map actionMenu actionCell: cell.
! !

MonsterState subclass: #ToPick
	instanceVariableNames: ''
	package: 'Easnoth-Fight-States'!
!ToPick commentStamp!
"monster will be activated"!

!ToPick methodsFor: 'eventHandling'!

attackTo:aCell
	self error: 'topick monster'
!

moveTo:aCell
	self error: 'topick monster'
!

select
	(self object cell map monstersFromSide: self object side) do:[:each | each changeState: Inactive new].
	self object changeState: Active new.
	self object cell map actionMenu turnWatcher endPick.
! !

