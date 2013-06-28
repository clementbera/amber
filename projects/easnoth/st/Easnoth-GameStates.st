Smalltalk current createPackage: 'Easnoth-GameStates'!
Object subclass: #CWState
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!

CWState class instanceVariableNames: 'default'!

!CWState class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWState subclass: #CWCellState
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!

!CWCellState methodsFor: 'cell state API'!

addSelector: aCell
	self subclassResponsibility
!

cell: aCell addMonster: aMonster
	self subclassResponsibility
!

cell: aCell canBeAttackedBy: side
	^ false
!

darken: cell
	"do nothing"
!

isFree
	^ false
!

isFreeSelected
	^ false
!

lighten: aCell
	"do nothing"
!

mouseClick: aCell context: gameContext
	self subClassResponsbility
!

mouseMove: cell context: gameContext
	cell root lighten.
!

removeMonster: aCell
	self subclassResponsibility
!

removeSelector: aCell
	aCell removeGameOverTile
!

showActiveMonster: aCell
	self subclassResponsibility
! !

CWCellState subclass: #CWFree
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWFree commentStamp!
I am the state of a cell that has no monsters on it and that has no game selector on it.!

!CWFree methodsFor: 'cell state API'!

addSelector: aCell
	aCell addGreenSelector.
	aCell changeState: CWFreeSelected
!

cell: aCell addMonster: aMonster
	aMonster parent: aCell.
	aCell monster: aMonster.
	aCell changeState: CWHasMonster
!

isFree
	^ true
!

mouseClick: aCell context: gameContext
	gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].
	aCell root showActiveMonsters
!

removeMonster: aCell
	self error: 'cannot remove a monster from a cell that has no monster on it'
!

showActiveMonster: aCell
! !

CWCellState subclass: #CWFreeSelected
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWFreeSelected commentStamp!
I am the state of a cell that has no monsters on it, that has a game selector on it.
The cell cannot be a wall.!

!CWFreeSelected methodsFor: 'cell state API'!

addSelector: aCell
	self error: 'cannot add a selector to a cell that has already a *green* selector'.
!

cell: aCell addMonster: aMonster
	self error: 'cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)'.
!

darken: aCell
	aCell gameOverTile darken
!

isFree
	^ true
!

isFreeSelected
	^ true
!

lighten: aCell
	aCell gameOverTile lighten
!

mouseClick: aCell context: gameContext
	gameContext currentMonster moveTo: aCell inContext: gameContext
!

mouseMove: cell context: gameContext
	| path |
	super mouseMove: cell context: gameContext.
	path := gameContext currentMonster pathTo: cell.
	path do: [ :c | c darken ].
!

removeMonster: aCell
		self error: 'cannot remove a monster from a cell that has no monster on it'
!

removeSelector: aCell
	super removeSelector: aCell.
	aCell changeState: CWFree
!

showActiveMonster: aCell
	self error: 'try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)'.
! !

CWCellState subclass: #CWHasMonster
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWHasMonster commentStamp!
I am the state of a cell that has some monsters on it and that has no game selector on it.!

!CWHasMonster methodsFor: 'cell state API'!

addSelector: aCell
	aCell addRedSelector.
	aCell changeState: CWHasMonsterSelected
!

cell: aCell addMonster: aMonster
	self error: 'cannot add a monster on a cell that has already one'.
!

cell: aCell canBeAttackedBy: side
	^ (aCell side = side) not
!

mouseClick: aCell context: gameContext
	aCell monster selectInContext: gameContext
!

removeMonster: aCell
	aCell monster: nil.
	aCell changeState: CWFree
!

showActiveMonster: aCell
	aCell monster showActiveMonster.
! !

CWCellState subclass: #CWHasMonsterSelected
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWHasMonsterSelected commentStamp!
I am the state of a cell that has a monsters on it and a game selector.
The monster has to be on the opposite side of the current playing monster.!

!CWHasMonsterSelected methodsFor: 'cell state API'!

addSelector: aCell
	self error: 'cannot add a selector to a cell that has already a *red* selector'.
!

cell: aCell addMonster: aMonster
	self error: 'cannot add a monster to a cell that has already a monster and a *red* selector'.
!

cell: aCell canBeAttackedBy: side
	"This method should be removed. but seems to have problem then with move + attack. Dont know why."
	^ (aCell side = side) not
!

mouseClick: aCell context: gameContext
	gameContext currentMonster attackTo: aCell inContext: gameContext
!

mouseMove: cell context: gameContext
	| path |
	super mouseMove: cell context: gameContext.
	(gameContext currentMonster cellToMoveBeforeAttack: cell context: gameContext) mouseMove: gameContext.
!

removeMonster: aCell
	self error: 'cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)'
!

removeSelector: aCell
	super removeSelector: aCell.
	aCell changeState: CWHasMonster
!

showActiveMonster: aCell
	self error: 'try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)'.
! !

CWState subclass: #CWMonsterState
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!

!CWMonsterState methodsFor: 'monster state API'!

activate: aMonster
	self error: 'cannot activate a non inactive monster'.
!

checkForNextTurn: aMonster
	self subclassResponsibility
!

desactivate: aMonster
	aMonster changeState: CWInactive.
	aMonster currentMove: 0
!

hasPlayed: aMonster
	^ true
!

isInactive
	^ false
!

monster: aMonster attackTo: aCell inContext: gameContext
	self subclassResponsibility
!

monster: aMonster moveTo: aCell inContext: gameContext
	aMonster moveTo: aCell inContext: gameContext callback: []
!

readyToPick: aMonster
	self error: 'cannot prepare a monster for picking if he is not Inactive'.
!

select: aMonster inContext: gameContext
	self subclassResponsibility
!

showActiveMonster: aMonster
	aMonster parent addWhiteSelector
! !

!CWMonsterState methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self subclassResponsibility
!

changeStateAfterMoving: aMonster
	self subclassResponsibility
! !

CWMonsterState subclass: #CWActive
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWActive commentStamp!
Monster can move and attack!

!CWActive methodsFor: 'monster state API'!

checkForNextTurn: aMonster
	"do nothing for now"
!

hasPlayed: aMonster
	^ (aMonster currentMove = aMonster move) not
!

monster: aMonster attackTo: aCell inContext: gameContext
	| toMoveCell |
	toMoveCell := aMonster cellToMoveBeforeAttack: aCell context: gameContext.
	aMonster moveTo: toMoveCell inContext: gameContext callback: [
		aMonster attack: aCell monster inContext: gameContext ]
!

select: aMonster inContext: gameContext
	aMonster selectActionCells.
	gameContext currentMonster: aMonster.
! !

!CWActive methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	aMonster changeState: CWHasAttacked
!

changeStateAfterMoving: aMonster
	aMonster currentMove = 0 
		ifTrue: [ aMonster changeState: CWHasMoved ]
! !

CWMonsterState subclass: #CWHasAttacked
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWHasAttacked commentStamp!
Monster can only move!

!CWHasAttacked methodsFor: 'monster state API'!

checkForNextTurn: aMonster
	"do nothing for now"
!

monster: aMonster attackTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen'.
!

select: aMonster inContext: gameContext
	aMonster selectMovableCells.
	gameContext currentMonster: aMonster
! !

!CWHasAttacked methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen'
!

changeStateAfterMoving: aMonster
	aMonster currentMove = 0 
		ifTrue: [ aMonster changeState: CWInactive ]
! !

CWMonsterState subclass: #CWHasMoved
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWHasMoved commentStamp!
The monster has moved its full moved there. (currentMove = 0)!

!CWHasMoved methodsFor: 'monster state public API'!

checkForNextTurn: aMonster
	| col |
	col := 	aMonster selectAttackableCells.
	col ifEmpty: [ aMonster announce: CWNextTurnEvent new ]
!

monster: aMonster attackTo: aCell inContext: gameContext
	aMonster attack: aCell monster inContext: gameContext
!

monster: aMonster moveTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen'.
!

select: aMonster inContext: gameContext
	aMonster selectAttackableCells.
	gameContext currentMonster: aMonster
! !

!CWHasMoved methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	aMonster changeState: CWInactive
!

changeStateAfterMoving: aMonster
	self error: 'seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen'
! !

CWMonsterState subclass: #CWInactive
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWInactive commentStamp!
Monster cannot do anything :)!

!CWInactive methodsFor: 'monster state API'!

activate: aMonster
	aMonster changeState: CWActive.
	aMonster currentMove: aMonster move
!

checkForNextTurn: aMonster
	aMonster announce: CWNextTurnEvent new
!

desactivate: aMonster
	"Do nothing already inactive"
!

isInactive
	^ true
!

monster: aMonster attackTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to attack whereas he is inactive. cannot happen'.
!

monster: aMonster moveTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to move whereas he is inactive. cannot happen'.
!

readyToPick: aMonster
	aMonster changeState: CWToPick
!

select: aMonster inContext: gameContext
	gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].
	aMonster root showActiveMonsters.
	gameContext currentMonster: aMonster.
!

showActiveMonster: aMonster
	"Just do nothing, this monster is not actve"
! !

!CWInactive methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'seemingly the monster has attacked whereas he is Inactive. cannot happen'.
!

changeStateAfterMoving: aMonster
	self error: 'seemingly the monster has moved whereas he is Inactive. cannot happen'.
! !

CWMonsterState subclass: #CWToPick
	instanceVariableNames: ''
	package: 'Easnoth-GameStates'!
!CWToPick commentStamp!
The player has to choice one of the toPick monster to activate them!

!CWToPick methodsFor: 'monster state public API'!

checkForNextTurn: aMonster
	self error: 'seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen'.
!

monster: aMonster attackTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen'.
!

monster: aMonster moveTo: aCell inContext: gameContext
	self error: 'seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen'.
!

select: aMonster inContext: gameContext
	aMonster root removeSelection.
	aMonster root desactivateMonsters.
	aMonster activate.
	aMonster selectInContext: gameContext
! !

!CWToPick methodsFor: 'private'!

changeStateAfterAttacking: aMonster
	self error: 'seemingly the monster has attacked whereas the game is in a picking phase. cannot happen'.
!

changeStateAfterMoving: aMonster
	self error: 'seemingly the monster has moved whereas the game is in a picking phase. cannot happen'.
! !

