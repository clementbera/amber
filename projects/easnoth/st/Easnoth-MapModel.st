Smalltalk current createPackage: 'Easnoth-MapModel'!
Object subclass: #CWComponent
	instanceVariableNames: 'parent'
	package: 'Easnoth-MapModel'!
!CWComponent commentStamp!
I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).

Game logic is implemented in my subclasses. For Displaying, look at CWDrawer.!

!CWComponent methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

children
	self subclassResponsibility
!

parent
	^ parent
!

parent: object
	parent := object
!

root
	^ self parent root
! !

!CWComponent methodsFor: 'event'!

announce: anEvent
	self announcer announce: anEvent
! !

!CWComponent methodsFor: 'rendering'!

updateMap
	self root updateMap
! !

!CWComponent methodsFor: 'selection'!

desactivateMonsters
	self children do: [ :child |
		child desactivateMonsters ]
!

lighten
	self children do: [ :child |
		child lighten ]
!

prefillCaches
	self children do: [ :child |
		child prefillCaches ]
!

removeSelection
	self children do: [ :child |
		child removeSelection ]
!

showActiveMonsters
	self children do: [ :child |
		child showActiveMonsters ]
!

unmark
	self children do: [ :child |
		child unmark ]
!

updateUI
	self children do: [ :child |
		child updateUI ]
! !

!CWComponent methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWComponent subclass: #CWComposite
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWComposite methodsFor: 'accessing'!

children
	self subclassResponsibility
! !

!CWComposite methodsFor: 'children management'!

childAt: index 
	^ self children at: index
!

childAt: index ifPresent: aBlock
	^ self children at: index ifPresent: aBlock
! !

!CWComposite methodsFor: 'factory'!

newChild: aClass
	^ aClass new parent: self
! !

!CWComposite methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWComposite subclass: #CWCell
	instanceVariableNames: 'neighboursCache background gameOverTile monster state prevCell mark firstCoods zIndex'
	package: 'Easnoth-MapModel'!
!CWCell commentStamp!
I represent an hexagon cell in the map.!

!CWCell methodsFor: 'accessing'!

background
	^ background ifNil: [ self error: 'should be initialized' ]
!

backgroundAdd: aBackground
	^ self background add: aBackground
!

backgroundAddAll: aCol
	^ self background addAll: aCol
!

changeState: stateClass
	state := stateClass default
!

children
	| children | 
	children := Array new.
	self monster ifNotNil: [ :var |
		children add: var ].
	children add: self gameOverTile.
	^ children
		addAll: self background;
		yourself
!

firstCoods
	^ firstCoods
!

firstCoods: aPoint
	firstCoods := aPoint
!

gameOverTile
	^ gameOverTile
!

gameOverTile: aGOT
	gameOverTile := aGOT
!

monster
	^ monster
!

monster: aMonster
	monster := aMonster
!

side
	^ self monster side
!

state
	^ state
!

zIndex
	^ zIndex
!

zIndex: anInt
	zIndex := anInt
! !

!CWCell methodsFor: 'accessing - pathfinding'!

isMarked
	^ mark
!

mark
	mark := true
!

neighbours
	^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]
!

prevCell
	^ prevCell
!

prevCell: aCell 
	prevCell := aCell
!

unmark
	mark := false
! !

!CWCell methodsFor: 'factory'!

gameOverTileClass
	^ CWGameOverTile
!

newGOT
	 ^ self gameOverTileClass new
!

newOverTile
	 ^ self newChild: self overTileClass
!

newTile
	 ^ self newChild: self tileClass
!

overTileClass
	^ CWOverTile
!

tileClass
	^ CWTile
! !

!CWCell methodsFor: 'forwarding optimization'!

desactivateMonsters
	"you can remove this method, but it makes the game faster."
	self monster ifNotNil: [ :m | m desactivateMonsters ]
!

updateUI
	"you can remove this method, but it makes the game faster."
	self monster ifNotNil: [ :m | m updateUI ]
! !

!CWCell methodsFor: 'initialize-release'!

initialize
	super initialize.
	mark := false.
	gameOverTile := self newGOT.
	self changeState: CWFree.
!

initializeFromJson: aJsonCell
    | elements ots |
    
    elements := aJsonCell keys.
    background := Array new.
	
	(elements includes: 'tile') 
    	ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].
	"replace match: with beginsWith: later ..."
	ots := aJsonCell keys select: [ :each | each match: 'overtile' ].
	ots do: [ :each |
		self backgroundAdd: (self newOverTile initializeFromKey: (aJsonCell at: each) ) ].
!

prefillCaches
	self neighbours.
! !

!CWCell methodsFor: 'printing'!

printOn: aStream
	"to debug only"

	| rowNumber row cellIndex |
	row := self parent.
	cellIndex := row cells indexOf: self.
	rowNumber := row parent rows indexOf: row.
	aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'
! !

!CWCell methodsFor: 'selection'!

addGreenSelector
	self gameOverTile green
!

addRedSelector
	self gameOverTile red
!

addWhiteSelector
	self gameOverTile white
!

darken
	self state darken: self
!

lighten
	self state lighten: self
!

removeGameOverTile
	self gameOverTile invis
! !

!CWCell methodsFor: 'state delegation'!

addMonster: aMonster
	self state cell: self addMonster: aMonster
!

addSelector
	self state addSelector: self
!

canBeAttackedBy: side
	^ self state cell: self canBeAttackedBy: side
!

hasMonster
	^ self isFree not
!

isFree
	"Answers true if cell free or freeselected"
	^ self state isFree
!

isFreeSelected
	"Answers true if cell free or freeselected"
	^ self state isFreeSelected
!

mouseClick: gameContext
	self state mouseClick: self context: gameContext.
!

mouseMove: gameContext
	self state mouseMove: self context: gameContext.
!

removeMonster
	self state removeMonster: self
!

removeSelection
	self state removeSelector: self
!

showActiveMonsters
	self state showActiveMonster: self.
! !

!CWCell methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitCell: self
! !

CWComposite subclass: #CWOneChildClass
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!
!CWOneChildClass commentStamp!
I am a standard composite except that all my children have the same class.!

!CWOneChildClass methodsFor: 'children management'!

addChild: object
	^ self children add: object
!

childAt: index put: object
	^ self children at: index put: object
!

removeChild: object
	^ self children remove: object
! !

!CWOneChildClass methodsFor: 'factory'!

childBasicClass
	self subclassResponsibility
!

newChild
	^ self newChild: self childBasicClass
! !

!CWOneChildClass methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWOneChildClass subclass: #CWMap
	instanceVariableNames: 'rows drawer cellsCache'
	package: 'Easnoth-MapModel'!
!CWMap commentStamp!
I represent the whole map in the game.!

!CWMap methodsFor: 'accessing'!

children
	^ self rows
!

drawer
	^ drawer
!

root
	^ self
!

rows
	^ rows
! !

!CWMap methodsFor: 'factory'!

childBasicClass
	^ CWRow
! !

!CWMap methodsFor: 'initialize-release'!

initializeDrawer
	self prefillCaches.
	drawer := CWMapDrawer new initializeForMap: self.
	self updateUI.
!

initializeFromJson: jsonMap
	"initialize the rows of the map, 
	the announcement is in case everything was already cached (page refresh for example)"
	
	| child rows1 |
	
	self announce: CWWaitForObject new.
	
	rows1 := jsonMap row.
	rows := Array new: rows1 size.

	rows1 withIndexDo: [:row :i |
		child := self newChild.
		self childAt: i put: child.
		child initializeFromJson: row ].
		
	self announce: CWObjectLoaded new.
!

prefillCaches
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache := Array new.
	self children do: [ :row |
		row children do: [ :cell |
			cellsCache add: cell.
			cell prefillCaches ] ].
! !

!CWMap methodsFor: 'neighbours'!

neighboursOf: row cellIndex: cellIndex
	| rowIndex neighbours |
	rowIndex :=  self rows indexOf: row.
	neighbours := Array new.
	rowIndex = 1 
		ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].
	rowIndex = self rows size 
		ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].
	^ neighbours
! !

!CWMap methodsFor: 'printing'!

printOn: aStream
	aStream
		nextPutAll: 'a Map (';
		nextPutAll: rows size printString;
		nextPutAll: ' rows)'
! !

!CWMap methodsFor: 'rendering'!

clean
	drawer clean
!

updateMap
	drawer updateMap
! !

!CWMap methodsFor: 'selection'!

desactivateMonsters
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache do: [ :each |
		each desactivateMonsters ]
!

lighten
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache do: [ :each |
		each lighten ]
!

removeSelection
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache do: [ :each |
		each removeSelection ]
!

showActiveMonsters
	self removeSelection.
	"just for speed ... If you play only on chrome put super showActiveMonsters"
	cellsCache do: [ :each |
		each showActiveMonsters ]
!

unmark
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache do: [ :each |
		each unmark ]
!

updateUI
	"just for speed ... If you play only on chrome remove that crap"
	cellsCache do: [ :each |
		each updateUI ]
! !

!CWMap methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitMap: self
! !

!CWMap class methodsFor: 'instance creation'!

newWithMapIndex: aMapIndex
	| map |
	
	map := self new.
    jQuery 
		getJSON: 'ressources/json/maps/map', aMapIndex, '.json' 
		onSuccess: [:data | 
			map initializeFromJson: data].

	^ map
! !

CWOneChildClass subclass: #CWRow
	instanceVariableNames: 'cells'
	package: 'Easnoth-MapModel'!
!CWRow commentStamp!
I represent a row of cells in the map.!

!CWRow methodsFor: 'accessing'!

cells
	^ cells
!

children
	^ self cells
! !

!CWRow methodsFor: 'factory'!

childBasicClass
	^ CWCell
! !

!CWRow methodsFor: 'initialize'!

initializeFromJson: jsonRow
	| cells1 child |

	cells1 := jsonRow cells.
	cells := Array new: cells1 size.
	
	cells1 withIndexDo: [:cell :i |
		child :=  self newChild.
		child initializeFromJson: cell. 
		self childAt: i put: child ].
! !

!CWRow methodsFor: 'neighbours'!

cellsNextToI: i j: j 
	| neighbours |
	neighbours := Array new.
	self childAt: j  ifPresent: [ :child | neighbours add: child ] .
	i \\ 2 = 0 ifFalse: [
		j < self cells size ifTrue: [ self childAt: j + 1 ifPresent: [ :child | neighbours add: child ] ].
	] ifTrue: [
		j > 1 ifTrue: [ self childAt: j - 1 ifPresent: [ :child | neighbours add: child ] ].
	].
	^ neighbours
!

neighboursOf: aCell
	"Here we give a Set to simplify game logic later (no twice the cell in the set)"

	| cellIndex neighbours |
	neighbours := Array new.
	cellIndex := self cells indexOf: aCell.
	cellIndex = 1 
		ifFalse: [ self childAt: cellIndex - 1 ifPresent: [ :child | neighbours add: child ] ].
	cellIndex = self cells size 
		ifFalse: [ self childAt: cellIndex + 1  ifPresent: [ :child | neighbours add: child ] ].
	neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).
	^ neighbours
! !

!CWRow methodsFor: 'printing'!

printString
	^ 'a Row (', cells size, ' cells)'
! !

!CWRow methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitRow: self
! !

CWComponent subclass: #CWLeaf
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWLeaf methodsFor: 'accessing'!

children
	^ #()
! !

!CWLeaf methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibility
! !

CWLeaf subclass: #CWImageLeaf
	instanceVariableNames: 'image'
	package: 'Easnoth-MapModel'!
!CWImageLeaf commentStamp!
I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph.!

!CWImageLeaf methodsFor: 'accessing'!

image
	^ image
!

image: anImage
	image := anImage
! !

!CWImageLeaf methodsFor: 'initialize-release'!

initializeFromKey: aKey
	image := self class imageCacheAt: aKey
! !

!CWImageLeaf methodsFor: 'testing'!

isLeaf
	^ true
! !

!CWImageLeaf methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

CWImageLeaf class instanceVariableNames: 'imageCache'!

!CWImageLeaf class methodsFor: 'accessing'!

folderName
	self subclassResponsibility
! !

!CWImageLeaf class methodsFor: 'caching'!

imageCache
	^ imageCache ifNil: [ imageCache := Dictionary new ]
!

imageCacheAt: aKey
	^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]
!

newImageFrom: aKey
	"Create a new image and cache it. Announce start and end of asynchronous task"
	
	| announcer image |
	
	announcer := CWEasnothAnnouncer current.
	image := NativeFunction constructor: 'Image'.
	self imageCache at: aKey put: image.
	announcer announce: CWWaitForObject new.
	image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].
    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.
	
	^ image
! !

CWImageLeaf subclass: #CWBackground
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!
!CWBackground commentStamp!
I represent an element of the background (tiles, overtiles, ...).!

!CWBackground methodsFor: 'visiting'!

accept: aVisitor
	self shouldNotImplement
! !

!CWBackground class methodsFor: 'accessing'!

folderName
	^ 'back'
! !

CWBackground subclass: #CWOverTile
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitOverTile: self
! !

!CWOverTile class methodsFor: 'accessing'!

folderName
	^ 'overtiles'
! !

CWBackground subclass: #CWTile
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWTile methodsFor: 'testing'!

isWall
	^ false
! !

!CWTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitTile: self
! !

!CWTile class methodsFor: 'accessing'!

folderName
	^ 'tiles'
! !

CWTile subclass: #CWWall
	instanceVariableNames: ''
	package: 'Easnoth-MapModel'!

!CWWall methodsFor: 'testing'!

isWall
	^ true
! !

!CWWall methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitWall: self
! !

CWImageLeaf subclass: #CWGameOverTile
	instanceVariableNames: 'htmlImage'
	package: 'Easnoth-MapModel'!
!CWGameOverTile commentStamp!
class side I have an image array to crete got faster as they are the most created / gc objects!

!CWGameOverTile methodsFor: 'accessing'!

htmlImage: aHTMLElem
	htmlImage := aHTMLElem asJQuery
!

image: anImage
	htmlImage attr: 'src' put: anImage src
! !

!CWGameOverTile methodsFor: 'coloring'!

darken
	self image: (self class imageArray at: self class darkGreenIndex)
!

green
	self image: (self class imageArray at: self class greenIndex)
!

invis
	self image: (self class imageArray at: self class invisIndex)
!

lighten
	self green
!

red
	self image: (self class imageArray at: self class redIndex)
!

white
	self image: (self class imageArray at: self class whiteIndex)
! !

!CWGameOverTile methodsFor: 'visiting'!

accept: aVisitor
	^ aVisitor visitGameOverTile: self
! !

CWGameOverTile class instanceVariableNames: 'imageArray'!

!CWGameOverTile class methodsFor: 'accessing'!

folderName
	^ 'gots'
! !

!CWGameOverTile class methodsFor: 'array'!

createImageArray
	imageArray := Array new: 5.
	imageArray 
		at: self greenIndex put: (self imageCacheAt: 'green');
		at: self darkGreenIndex put: (self imageCacheAt: 'darkGreen');
		at: self redIndex put: (self imageCacheAt: 'red');
		at: self whiteIndex put: (self imageCacheAt: 'white');
		at: self invisIndex put: (self imageCacheAt: 'invis').
	^ imageArray
!

imageArray
	^ imageArray ifNil: [ self createImageArray ]
! !

!CWGameOverTile class methodsFor: 'index'!

darkGreenIndex
	^ 5
!

greenIndex
	^ 1
!

invisIndex
	^ 4
!

redIndex
	^ 2
!

whiteIndex
	^ 3
! !

CWImageLeaf subclass: #CWMonster
	instanceVariableNames: 'currentMove move attack dices hp range state player special strategy typeStrategy canvas'
	package: 'Easnoth-MapModel'!
!CWMonster commentStamp!
I represent people on the map. My instances variables are the stats of the guy I represent.!

!CWMonster methodsFor: 'accessing'!

attack
	^ attack
!

attack: int
	attack := int
!

attackPotential
	"Answers the power of attack of the monster"
	^ attack * dices
!

attackPotentialFor: target
	"Answers the power of attack of the monster considering target weakness and strength"
	| adv |
	adv := typeStrategy bonusVS: target.
	^ (attack + 10 * adv) * (dices + adv)
!

bonusVSCavalry
	^ typeStrategy bonusVSCavalry
!

bonusVSRange
	^ typeStrategy bonusVSRange
!

bonusVSTroop
	^ typeStrategy bonusVSTroop
!

canvas
	^ canvas
!

canvas: aCanvas
	canvas := aCanvas
!

changeState: stateClass
	state := stateClass default
!

context
	^ canvas element getContext: '2d'
!

currentMove
	^ currentMove
!

currentMove: int
	currentMove := int.
	self announce: CWMonsterUpdateEvent new
!

defaultState
	"When map is initialized the monster will get this state by default"
	^ CWInactive
!

defensePotential
	"Answers the power of defense of the monster"
	^ hp * 100
!

dices
	^ dices
!

dices: int
	dices := int
!

hp
	^ hp
!

hp: int
	hp := int
!

move
	^ move
!

move: int
	move := int
!

player
	^ player
!

player: aPlayer
	player := aPlayer
!

range
	^ range
!

range: int
	range := int
!

side
	^ player side
!

special
	^ special
!

special: aString
	special := aString
!

state
	^ state
! !

!CWMonster methodsFor: 'fighting'!

attack: anotherMonster inContext: gameContext
	"Dispatch to type strategy for advantages of attacks and goes to attack:InContext:bonus:"
	
	^ typeStrategy monster: self attackNeighbour: anotherMonster inContext: gameContext
!

attack: anotherMonster inContext: gameContext bonus: int
	"int is for now -1 0 or 1 and represents the advantages / disadvantages of attacks"
	"Support is now commented, uncomment the big thing to put it back. But it needs some refactorings .."
	
	| ennemySupport ennemyHerosSupport ennemyUnitSupport support herosSupport unitSupport bonusDices bonusAttack |
	
	"ennemySupport := self support.
	ennemySupport := ennemySupport remove: anotherMonster parent ifAbsent: [""range attack""].
	ennemyHerosSupport := ( ennemySupport select: [ :each | each monster isHeros ] ) size.
	ennemyUnitSupport := ennemySupport size - ennemyHerosSupport.
	
	support := anotherMonster support.
	support := support remove: self parent ifAbsent: [""range attack""].
	herosSupport := ( support select: [ :each | each monster isHeros ] ) size.
	unitSupport := support size - herosSupport.
	
	bonusDices := int + herosSupport - ennemyHerosSupport.
	bonusAttack := ( int + unitSupport - ennemyUnitSupport ) * 10."
	
	bonusDices := int.
	bonusAttack := int * 10.
	
	bonusDices + self dices < 1 ifTrue: [ bonusDices := (self dices - 1) negated "1 dice min" ]. 
	
	self resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack
!

die
	self parent removeMonster.
	self player removeMonster: self.
!

isAttackedByCavalry: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByCavalry: aMonster inContext: gameContext
!

isAttackedByRange: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByRange: aMonster inContext: gameContext
!

isAttackedByTroop: aMonster inContext: gameContext
	^ typeStrategy monster: self isAttackedByTroop: aMonster inContext: gameContext
!

removeHP: anInt
     self hp: self hp - anInt.
     self hp < 1 
		ifTrue: [ self die. self cleanUI ]
		ifFalse: [ self updateUI ]
!

resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack

	self state changeStateAfterAttacking: self.
    self root removeSelection.

	self rollDicesCallBack: [ :diceRes |
		anotherMonster removeHP: diceRes kills.
        self selectInContext: gameContext.
		self checkForNextTurn ] bonusDices: bonusDices bonusAttack: bonusAttack
!

rollDicesCallBack: aBlock bonusDices: bonusDices bonusAttack: bonusAttack
	"roll the dices to attack an ennemy"
	
	| kill dicesRolledEvent |
	
	kill := (1 to: self dices + bonusDices) inject: 0 into: [ :acc :index | 
		100 atRandom < (self attack + bonusAttack)
			ifTrue: [ acc + 1 ] 
			ifFalse: [ acc ] ]. 
	dicesRolledEvent := CWDicesRolledEvent new
		kills: kill;
		dices: self dices + bonusDices;
		callback: aBlock;
		yourself.
	self announce: dicesRolledEvent
!

support	
	^ self parent neighbours select: [ :each | each canBeAttackedBy: self side ]
! !

!CWMonster methodsFor: 'initialize-release'!

initialize
	super initialize.
	self currentMove: 0.
	self initializeState
!

initializeState
	self changeState: self defaultState
!

initializeWithStat: jsonStat army: army player: aPlayer heros: strat type: aType
	self player: aPlayer.
	strategy := strat default.
	typeStrategy := aType default.
	self stats: jsonStat.
	super initializeFromKey: army, '/', self key.
!

stats: jsonStats
	self move: jsonStats move.
	self range: jsonStats range.
	self attack: jsonStats attack.
	self dices: jsonStats dices.
	self special: jsonStats special.
	self hp: self defaultHp.
! !

!CWMonster methodsFor: 'move'!

animPath: path iterator: j callback: callback
	| cell1FirstCoods cell2 pathSize |
	
	pathSize := path size.
	
	j = pathSize
		ifTrue: [ ^ callback value ].
			
	cell1FirstCoods := self parent firstCoods.
	cell2 := path at: pathSize - j.
	self changeCell: cell2.
	self decreaseCurrentMove.
		
	self canvas asJQuery
		animate: #{ 
			'left' -> ('+=' , (cell2 firstCoods x - cell1FirstCoods x) , 'px') .
			'top' -> ('+=' , (cell2 firstCoods y - cell1FirstCoods y) , 'px') }
       	duration: 300
     	easing: 'linear'
		complete: [ self animPath: path iterator: j + 1 callback: callback ].
!

animationMoveTo: cellLast callback: callback
	
	| path |
	
	path := self pathTo: cellLast.
	cellLast root removeSelection.
	
	self animPath: path iterator: 1 callback: callback
!

cellToMoveBeforeAttack: cellLast context: gameContext
	"Assumes that a monster is at self and want to attack cellLast's monster, which is not a neighbour.
	Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster"
	
	self isRanged ifTrue: [ ^ self cellToMoveBeforeRangeAttack: cellLast ].
	(gameContext relatedCell ifNotNil: [ :it | it isFreeSelected ] ifNil: [ false ] ) ifTrue: [ ^ gameContext relatedCell ]. 
	(cellLast neighbours includes: self parent) ifTrue: [ ^ self parent ].

	^ (self pathTo: cellLast) at: 2
!

cellToMoveBeforeRangeAttack: cellLast
	| shortestPath |
	
	shortestPath := self pathTo: cellLast. "shortest fake track to ennemy"
	shortestPath size < (self range + 1) ifTrue: [ ^ self parent ]. "for AI move calculs only"
	^ shortestPath at: self range + 1. "in fake track, get furthest from ennemy cell where you can attack him"
!

changeCell: aCell
    self parent removeMonster.
	aCell addMonster: self.
	self canvas asJQuery css: 'z-index' put: aCell zIndex
!

decreaseCurrentMove
	self currentMove: self currentMove - 1.
	self announceUpdate. "shows it on the monster selected panel"
!

moveTo: aCell inContext: gameContext callback: callback
	"triggers the animation for the monster move"
	
	self animationMoveTo: aCell callback: [	
		self state changeStateAfterMoving: self.
		self selectInContext: gameContext.
		self checkForNextTurn.
		callback value.
	].
!

pathTo: cellLast
	"Assumes that some cells are selected and that the player clicked on a selected cell.
	Answers the shortest path from the current cell to the cell clicked"

	| path |
	path := Array with: cellLast.
	[ self parent = path last ] whileFalse: [ path add: path last prevCell ].
	^ path
! !

!CWMonster methodsFor: 'printing'!

printOn: aStream
	aStream nextPutAll: 'a Monster('.
	aStream nextPutAll: self parent printString.
	aStream nextPutAll: ')'.
! !

!CWMonster methodsFor: 'rendering'!

announceUpdate
	self announce: (CWMonsterUpdateEvent new monster: self)
!

cleanUI
	| elem |
	elem := self canvas element.
	self context clearRect: 0 y: 0 width: elem width height: elem height.
!

display: monster cood: aPoint
	self context
		drawImage: monster image
		x: aPoint x
		y: aPoint y.
!

reverseDisplay: monster cood: cood
	[self context
			translate: cood x y: 0;
			scale: -1 y: 1.
	self display: monster cood: 0@(cood y) ]
	ensure: ["faster than save and restore"
	self context
		scale: -1 y: 1;
		translate: cood x negated y: 0]
! !

!CWMonster methodsFor: 'selection'!

addSelectorsTo: cells

	self root removeSelection.
	cells do: [:each | each addSelector ].
	
	^ cells
!

attackableNeighbours
	^ self monsterSelection second
!

monsterSelection
	"this used to be divided into several methods, but it is now in 1 to be faster...
	Answers the cells the monster can attack or move"
	| movableCells newMovableCells attackableCells tempSet cycleNumber |
	
	self root unmark.
	self parent mark.
	
	tempSet := Array new.
	attackableCells := Array new.
	movableCells := Array new.
	cycleNumber := self range + self currentMove.
	
	newMovableCells := { self parent }.
	1 to: cycleNumber do: [ :i |
		tempSet reset.
		newMovableCells do: [ :each | 
			each neighbours do: [ :neigh | 
				neigh isMarked 
					ifFalse: [
						neigh mark.
						neigh prevCell: each.
						neigh isFree ifTrue: [ tempSet add: neigh ].
						(neigh canBeAttackedBy: self side) ifTrue: [ attackableCells add: neigh ]] ] ].
		i = 1 | (i - 1 > self currentMove) ifFalse: [
			movableCells addAll: newMovableCells].
		newMovableCells reset.
		newMovableCells addAll: tempSet].
	
	 ^ { movableCells . attackableCells }
!

movableNeighbours
	^ self monsterSelection first
!

selectActionCells
	^ self addSelectorsTo: self selectableNeighbours
!

selectAttackableCells
	^ self addSelectorsTo: self attackableNeighbours
!

selectMovableCells
	^ self addSelectorsTo: self movableNeighbours
!

selectableNeighbours
	| moveAttack |
	moveAttack := self monsterSelection.
	moveAttack first addAll: moveAttack second.
	^ moveAttack first
! !

!CWMonster methodsFor: 'state delegation'!

activate
	self state activate: self
!

attackTo: aCell inContext: gameContext
	self state monster: self attackTo: aCell inContext: gameContext
!

checkForNextTurn
	self currentMove > 0 ifTrue: [ ^ self ].
	self state checkForNextTurn: self
!

desactivateMonsters
	self state desactivate: self
!

hasPlayed
	^ self state hasPlayed: self
!

isInactive
	^ self state isInactive
!

moveTo: aCell inContext: gameContext
	self state monster: self moveTo: aCell inContext: gameContext
!

readyToBePicked
	self state readyToPick: self
!

selectInContext: gameContext
	self announceUpdate.
	^ self state select: self inContext: gameContext
!

showActiveMonster
	self state showActiveMonster: self
! !

!CWMonster methodsFor: 'strategy delegation'!

accept: aVisitor
	^ strategy accept: aVisitor for: self
!

defaultHp
	^ strategy defaultHP
!

isHeros
	^ strategy isHeros
!

isRanged
	^ typeStrategy isRanged
!

isUnit
	^ self isHeros not
!

key
	^ typeStrategy key, strategy key
!

updateUI
	self cleanUI.
	strategy updateUI: self
! !

CWMonster class instanceVariableNames: 'jsonStatCache'!

!CWMonster class methodsFor: 'accessing'!

folderName
	^ 'monsters'
! !

!CWMonster class methodsFor: 'instance creation'!

emptyMonster
	"Answers a fake instance of a monster with empty stats.
	Displayed by the menu when no monster is selected"
	
	^ self new
		hp: 0;
		move: 0;
		range: 0;
		dices: 0;
		attack: 0;
		special:'none'.
! !

!JSObjectProxy methodsFor: '*Easnoth-MapModel'!

keys
	| col |
    col := Array new.
	self keysDo: [:key |
    	col add: key ].
       ^ col
!

keysDo: aBlock
	<
    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    >
! !

