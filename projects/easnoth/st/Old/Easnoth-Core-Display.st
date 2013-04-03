Smalltalk current createPackage: 'Easnoth-Core-Display' properties: #{}!
Object subclass: #Cell
	instanceVariableNames: 'drawedObjects x y state'
	package: 'Easnoth-Core-Display'!
!Cell commentStamp!
"implementation of an hexagonal isometric cell"!

!Cell methodsFor: 'accessing'!

monster
	^self specificDrawedObject: Monster
!

monster: aMonster
	self monster ifNil: [self drawedObjects add: aMonster] ifNotNil:[self error: 'This cell has already a Monster'].
!

overTiles
	^self specificDrawedObjects: OverTile.
!

overTiles: aCollection
	self drawedObjects addAll: aCollection.
!

removeMonster
	self drawedObjects remove: self monster
!

removeTile
	self drawedObjects remove: self tile
!

specificDrawedObject: aClass
	|objectsFound|

  	objectsFound := self specificDrawedObjects: aClass.
	objectsFound ifEmpty:[^nil].
	^objectsFound at: 1
!

specificDrawedObjects: aClass
	^self drawedObjects select:[:each | each isKindOf: aClass]
!

tile
	^self specificDrawedObject: Tile
!

tile: aTile
	self tile ifNil: [self drawedObjects add: aTile] ifNotNil:[self error: 'This cell has already a Tile'].
! !

!Cell methodsFor: 'accessing-direct'!

drawedObjects
	^drawedObjects
!

drawedObjects: value
	drawedObjects := value.
!

state
	state ifNil: [self initializeState].
	^state
!

state: aState
	state := aState
!

x
	^x
!

x: value
	x := value truncated.
!

y
	^y
!

y: value
	y := value truncated.
! !

!Cell methodsFor: 'displaying'!

draw
	drawedObjects do: [ :drawedObject |
		drawedObject ifNotNil: [drawedObject drawX: self x y: self y]
	].
!

reorderDrawedObjects
	|orderedDrawedObjects|
	
	"reorderDrawedObjects for display :  Tile, overTiles, monster then building"
	orderedDrawedObjects := Array with: self tile.
	orderedDrawedObjects addAll: self overTiles.
	orderedDrawedObjects add: self monster.
	
	self drawedObjects: orderedDrawedObjects
!

updateCoods: coods
	self x: (coods at: 1).
	self y: (coods at: 2)
! !

!Cell methodsFor: 'initialize-release'!

initialize
	super initialize.
	self drawedObjects: Array new.
!

initializeState
	CellState initializeStateFor: self
!

parseJSONCell: aJsonCell withContext: aContext
	"the order is important, other way add Cell>>reorderDrawedObjects at the end"
	[self tile: (Tile newWithContext: aContext jsonTile: aJsonCell tile)]on: Error do: ["no tile in this cell on json"].
	[self overTiles: (aJsonCell overtiles collect: [:each | OverTile newWithContext: aContext jsonOverTile: each overtile])] on: Error do: ["no overtile in this cell on json"].
	[self monster: (Monster newWithContext: aContext jsonMonster: aJsonCell monster)] on: Error do: ["no monster in this cell on json"]
! !

!Cell methodsFor: 'map-delegation'!

attackableNeighboursInMap: aMap side: aSide
	^aMap attackableCellsNextTo: self side: aSide
!

coodsInMap: aMap
	^aMap coodsOf: self
!

movableNeighboursInMap: aMap
	^aMap movableCellsNextTo: self
!

neighboursInMap: aMap
	^aMap cellsNextTo: self
!

selectableNeighboursInMap: aMap side: aSide
	^aMap selectableCellsNextTo: self side: aSide
! !

!Cell methodsFor: 'selection'!

addSelector
	self state addSelector
		"self addSelectorColored: 'green'"
!

addSelectorColored: aSelector
	self drawedObjects add: (OverTile newWithContext: (Map getSingleton canvas element getContext: '2d') jsonOverTile: aSelector selector: true).
	self reorderDrawedObjects
!

removeSelector
	self state removeSelector
! !

!Cell methodsFor: 'state-delegation'!

canAttack: aSide
	^self state canAttack: aSide
!

canBeSelected: sidePlayed
	^self state canBeSelected: sidePlayed
!

canMoveTo
	^self state canMoveTo
!

changeState: aState
	self state newState: aState for: self
! !

!Cell methodsFor: 'testing'!

free
	^self hasMonster not
!

hasMonster
	^self monster notNil
! !

!Cell class methodsFor: 'instance creation'!

newWithContext: aContext jsoncell: aJsonCell coods: coods
	^self new
		updateCoods: coods;
		parseJSONCell: aJsonCell withContext: aContext;
		yourself.
! !

Object subclass: #DrawedObject
	instanceVariableNames: 'image context'
	package: 'Easnoth-Core-Display'!
!DrawedObject commentStamp!
"abstract implementation of a drawedObject, Tile, overtile, Building or Monster"!

!DrawedObject methodsFor: 'accessing'!

context
	^context
!

context: aCtx
	context := aCtx
!

image
	^image
!

image: anImage
	image := anImage
! !

!DrawedObject methodsFor: 'displaying'!

displayX: aX y: aY
	self context drawImage: self image
						x: aX
						y: aY.
!

drawX: aX y: aY
	self subclassResponsibility
! !

!DrawedObject methodsFor: 'initializing'!

folderName
	self subclassResponsibility
!

initializeContext: aCtx imageKey: aKey
	self context: aCtx.
	ImageCache getSingleton putImageWithKey: aKey inDrawedObject: self
! !

DrawedObject subclass: #Ground
	instanceVariableNames: ''
	package: 'Easnoth-Core-Display'!
!Ground commentStamp!
"abstract implementation of drawedObject Overtile and Tile. Drawed through isometric transformation"!

!Ground methodsFor: 'displaying'!

drawX: aX y: aY
	"draw through isometric transformation"

	|ctx|
	ctx := self context.
	ctx save;
		translate: aX + 45 y: aY-7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.23.
	self displayX: 0 y: 0.
	ctx restore.
! !

Ground subclass: #OverTile
	instanceVariableNames: 'selector'
	package: 'Easnoth-Core-Display'!

!OverTile methodsFor: 'accessing'!

selector
	^selector
!

selector: aBool
	selector := aBool
! !

!OverTile methodsFor: 'initializing'!

folderName
	^'overtiles'
! !

!OverTile class methodsFor: 'instance creation'!

newWithContext: aContext jsonOverTile: aJsonOverTile
	^self newWithContext: aContext jsonOverTile: aJsonOverTile selector: false
!

newWithContext: aContext jsonOverTile: aJsonOverTile selector: aBool
	^self new
		initializeContext: aContext imageKey: aJsonOverTile;
		selector: aBool;
		yourself.
! !

Ground subclass: #Tile
	instanceVariableNames: 'isWall'
	package: 'Easnoth-Core-Display'!

!Tile methodsFor: 'accessing'!

isWall
	^isWall
!

isWall: aBoolean
	isWall := aBoolean
! !

!Tile methodsFor: 'initializing'!

folderName
	^'tiles'
! !

!Tile class methodsFor: 'instance creation'!

newWithContext: aContext jsonTile: aJsonTile
	^self new
		initializeContext: aContext imageKey: aJsonTile;
		isWall: false;
		yourself.
! !

DrawedObject subclass: #OverGround
	instanceVariableNames: 'hp'
	package: 'Easnoth-Core-Display'!
!OverGround commentStamp!
"abstract implementation of drawedObject Building and monster. Share some instance variables"!

!OverGround methodsFor: 'accessing'!

hp
	^hp
!

hp: aNumber
	hp := aNumber
! !

OverGround subclass: #Building
	instanceVariableNames: ''
	package: 'Easnoth-Core-Display'!

!Building methodsFor: 'initializing'!

folderName
	^'buildings'
! !

OverGround subclass: #Monster
	instanceVariableNames: 'move attack knockback range heros special side state'
	package: 'Easnoth-Core-Display'!

!Monster methodsFor: 'accessing'!

attack
	^attack
!

attack: somePercent
	attack := somePercent
!

heros
	^heros
!

heros: aBoolean
	heros := aBoolean
!

knockback
	^knockback
!

knockback: somePercent
	knockback := somePercent
!

move
	^move
!

move: aNumberOfCell
	move := aNumberOfCell
!

range
	^range
!

range: aNumberOfCell
	range := aNumberOfCell
!

side
	^side
!

side: anInt
	side := anInt
!

special
	^special
!

special: something
	special := something
!

state
	^state ifNil: [Inactive newFor: self]
!

state: aState
	state := aState
! !

!Monster methodsFor: 'displaying'!

drawAsHeroX: aX y: aY
	"87 = 72 (width image + 15"
	(self side negative) ifTrue: [
		self context save;
			translate: aX + 87 y: 0;
			scale: -1 y: 1.
		self displayX: 0 y: aY - 28.
		self context restore.
	] ifFalse: [
		self displayX: aX + 15 y: aY - 28.
	]
!

drawX: aX y: aY
	"drawAsHero ou drawAsUnit"
	self drawAsHeroX: aX y: aY
! !

!Monster methodsFor: 'initializing'!

folderName
	^'monsters'
!

initialize
!

initializeSide: aSide
	self side: aSide
!

initializeStats: aJsonMonster
	MonsterCache getSingleton putStatsWithKey: aJsonMonster inMonster: self
!

stats: jsonStats
	self move: jsonStats move.
	self attack: jsonStats attack.
	self knockback: jsonStats knockback.
	self heros: jsonStats heros.
	self special: jsonStats special.
	"self heros ifTrue: [self hp: 2] ifFalse: [self hp: 4]."
! !

!Monster methodsFor: 'state-delegation'!

changeState: aState
	self state newState: aState for: self
! !

!Monster class methodsFor: 'instance creation'!

newWithContext: aContext jsonMonster: aJsonMonster
	^self new
		initializeContext: aContext imageKey: aJsonMonster name;
		initializeStats: aJsonMonster name;
		initializeSide: aJsonMonster side;
		yourself.
! !

Object subclass: #Map
	instanceVariableNames: 'mapX mapY cells canvas currentCell'
	package: 'Easnoth-Core-Display'!
!Map commentStamp!
"singleton Map, represents all the map drawed in the canvas"!

!Map methodsFor: 'accessing'!

canvas
	^canvas
!

canvas: aCanvas
	canvas := aCanvas
!

cells
	^cells
!

cells: anArray
	cells := anArray.
!

currentCell
	"Cell where mouse is"
	^currentCell
!

currentCell: aCell
	"Cell where mouse is"
	currentCell := aCell
!

mapX
	^mapX
!

mapX: aLength
	mapX := aLength.
	self cells ifNotNil: [self updateCellsCoods].
!

mapY
	^mapY
!

mapY: aLength
	mapY := aLength.
	self cells ifNotNil: [self updateCellsCoods].
! !

!Map methodsFor: 'cell-delegate'!

attackableCellsNextTo: aCell side: aSide
	^(self cellsNextTo: aCell) select: [:each | 
			each canAttack: aSide]
!

calculX: i y: j
	|xpos ypos temp cood sin45 sin15 sin135 sin75|

	sin45 := 0.707106781. "Pi/4"
	sin15 := 0.258819045. "Pi/12"
	sin135 := 0.233445364. "???->I used Approximation"
	sin75 := 0.965925826. "5*Pi/12"

	temp := (j + ((i + 1)/2)) truncated.
	xpos := (i * (sin45 + sin75) - (temp* (sin15 + sin75))) * self tileUnit + self mapX.
	ypos := (temp * (sin15 + sin75) / 2 + (i * sin135)) * self tileUnit + self mapY.
	cood := Array with: xpos with: ypos.
	
	^cood
!

cellsNextTo: aCell
	|coods|

	coods := aCell coodsInMap: self.
	^self cellsNextToI: (coods at: 1) j: (coods at: 2)
!

cellsNextToI: i j: j
	|neighbours|
	
	neighbours := Set new.
	(j < (self cells at: i) size) ifTrue: [neighbours add: ((self cells at: i) at: j + 1)].
	(j > 1) ifTrue: [neighbours add: ((self cells at: i) at: j - 1)].
	(i < self cells size) ifTrue: [neighbours add: ((self cells at: i + 1) at: j)].
	(i > 1) ifTrue: [neighbours add: ((self cells at: i - 1) at: j)].
	
	(i \\ 2 = 0) ifFalse: [
		((j < (self cells at: i) size) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j + 1)].
		((j < (self cells at: i) size) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j + 1)].
	] ifTrue: [
		((j > 1) & (i < self cells size)) ifTrue: [neighbours add: ((self cells at: i + 1) at: j - 1)].
		((j > 1) & (i > 1)) ifTrue: [neighbours add: ((self cells at: i - 1) at: j - 1)].
	].

	^neighbours
!

coodsOf: aCell
	self cells withIndexDo: [:row :i |
		row withIndexDo: [ :cell :j |
			(cell = aCell) ifTrue:[^Array with: i with: j]
		]
	]
!

movableCellsNextTo: aCell
	^(self cellsNextTo: aCell) select: [:each | 
			each canMoveTo]
!

selectableCellsNextTo: aCell side: aSide
	^(self cellsNextTo: aCell) select: [:each | 
			each canBeSelected: aSide]
! !

!Map methodsFor: 'displaying'!

update
	|elem|

	elem := self canvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.

	self cells do: [:row |
		row do: [ :cell |
			cell draw.
		]
	]
!

updateCellsCoods
	self cells withIndexDo: [:row :i |
		row withIndexDo: [ :cell :j |
			cell updateCoods: (self calculX: i y: j).
		]
	]
! !

!Map methodsFor: 'eventHandling'!

goDown
	self mapY: self mapY + 10.
	self update
!

goLeft
	self mapX: self mapX - 10.
	self update
!

goRight
	self mapX: self mapX + 10.
	self update
!

goUp
	self mapY: self mapY - 10.
	self update
!

mirrorHorizontal
	(self canvas element getContext: '2d') translate: self canvas element width y: 0;
		scale: 1 negated y: 1.
	self update.
!

mirrorVertical
	(self canvas element getContext: '2d') translate: 0 y: self canvas element height;
		scale: 1 y: 1 negated.
	self update.
!

mouseClick
	"bug inlined the compiler : 2 if needed"
	self removeSelection.
	self currentCell ifNotNil: [ 
		self currentCell state mouseClick
		"(self currentCell hasMonster) ifTrue: [
			self addSelection: (self currentCell selectableNeighboursInMap: self side: 1).
		]."
	].
	self update
!

mouseCoodToHexCoodX: x y: y
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue"
	"so this algo is back to javascript"

	| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapDisplayX mapDisplayY res|
	cosmaingridx := 0.882947593.
	sinmaingridx := 0.469471563.
	cosmaingridy := 0.130526192 negated.
	sinmaingridy := 0.991444861.

	cosothergridx := 0.4539905.
	sinothergridx := 0.891006524.
	cosothergridy := 0.882947593 negated.
	sinothergridy := 0.469471563.
                
	mapDisplayX := self mapX.
	mapDisplayY := self mapY.

		<function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}
		
		nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		xConstante = 9 + (mod(nb,3));
		yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}>.

	res := Array with: xHex with: yHex.
	
	^res
!

mouseMove: anEvent
	|x y cood canvas|
	
        x := anEvent pageX - self canvas element offsetLeft.
        y := anEvent pageY - self canvas element offsetTop.

        cood := self mouseCoodToHexCoodX: x y: y.
	
	"if out of map then nil"
	[self currentCell:((self cells at: (cood at: 1)) at: (cood at: 2))] on: Error do: [self currentCell: nil].
!

oldAlgoMouseCoodToHexCoodX: x y: y inMap: aMap
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines"
	"so this algo is back to javascript"

	"| xHex yHex cosmaingridx sinmaingridx cosmaingridy sinmaingridy cosothergridx sinothergridx cosothergridy sinothergridy nb nb2 nb3 nb4 nbCheck xConstante yConstante mapX mapY res temp1 temp2 k m|
	cosmaingridx := 0.882947593.
	sinmaingridx := 0.469471563.
	cosmaingridy := 0.130526192 negated.
	sinmaingridy := 0.991444861.

	cosothergridx := 0.4539905.
	sinothergridx := 0.891006524.
	cosothergridy := 0.882947593 negated.
	sinothergridy := 0.469471563.
                
	mapX := aMap mapX.
	mapY := aMap mapY.
	
	nb := (y-(cosmaingridx/sinmaingridx*x)-mapY+0+(cosmaingridx/sinmaingridx*(mapX+320))/((55*cosmaingridx))) floor.
	nb2 := (y-(cosmaingridy/sinmaingridy*x)-mapY+480+(cosmaingridy/sinmaingridy*(mapX+206))/(173.2*cosmaingridy)) floor."
	
	"temp1 := cosmaingridx/sinmaingridx.
	temp2 := cosmaingridy/sinmaingridy.
	
	k := 55*cosmaingridx.
	m := 173.2*cosmaingridy."

	"nb pb vient du denominateur a calculer avant"
	"nb2 probleme d'origine inconnu"
	"nb := (((y-(temp1*x)-mapY+(temp1*(mapX+320)))/(k))) floor.
	nb2 := (((y-(temp2*x)-mapY+480+(temp2*(mapX+206)))/(m))) floor.
	
	Transcript show: 'ST : nb',nb,'---nb2',nb2.
	Transcript show: 'ST : k',k,'---m',m.
	Transcript show: 'ST : t1',temp1,'---t2',temp2; cr."

	"<temp1 = cosmaingridx/sinmaingridx;
	temp2 = cosmaingridy/sinmaingridy;
	k = 55*cosmaingridx;
	m = 173.2*cosmaingridy;>"
	"<nb = Math.floor(((y-(temp1)*x-(mapY+0)+(temp1)*(mapX+320))/(k)));
	nb2 = Math.floor(((y-(temp2)*x-(mapY+480)+(temp2)*(mapX+206))/(m)));>."

	"Transcript show: 'JS : nb',nb,'---nb2',nb2.
	Transcript show: 'JS : k',k,'---m',m.
	Transcript show: 'JS : t1',temp1,'---t2',temp2; cr."

	"xConstante := 9 + (nb mod: 3).
	yConstante := 20 + (nb2 mod: 2).
	(nb2\\2 = 0) ifTrue:[yConstante := yConstante + ((nb+1) mod: 2)].
	
	xHex := (xConstante-nb/6+(yConstante-nb2/2)) floor.
	yHex := (nb-xConstante/4+(yConstante-nb2/4)) floor.
	
	(((nb mod: 6)=1) & ((nb2 \\ 2)=0)) ifTrue:[
		xHex := xHex + 1.
		(((nb2 \\ 4)=0) & (((nb mod: 12)=7) not)) ifTrue:[yHex := yHex + 1].
		(((nb2 mod: 4)=2) & ((nb mod: 12)=7)) ifTrue:[yHex := yHex + 1].
	].
	
	((nb \\ 3) = 0) ifTrue:[       
		((((nb2 \\ 2) = 0) & ((nb \\ 6)=0)) | (((nb2 mod: 2)=1) & ((nb mod: 6)=3))) ifTrue:[
			nb3 := ((y-(cosothergridx/sinothergridx)*x-(mapY+0)+(cosothergridx/sinothergridx)*(mapX+301))/(68*cosothergridx)) floor.
			nbCheck := 3 + (2 * yHex) +(xHex \\ 2).
			(nb3 = nbCheck) ifTrue:[yHex := yHex - 1].
		]
		ifFalse:[
			nb4 :=((y-(cosothergridy/sinothergridy)*x-(mapY+480)+(cosothergridy/sinothergridy)*(mapX+212.5))/(95.75*cosothergridy)) floor.
			nbCheck := 7 -((3*xHex/2) floor) + yHex.
			(nb4 = nbCheck) ifTrue:[
				((xHex \\ 2) = 0) ifTrue:[yHex := yHex - 1].
				xHex := xHex + 1.
			].
		].
	].
	
	res := Array with: xHex with: yHex.
	
	^res"
! !

!Map methodsFor: 'initialize-release'!

canvasId
	^'#main'
!

canvasPadding
	^40
!

initialize
	super initialize.

	"set html5 canvas to map canvas"
	self canvas: (TagBrush fromJQuery: self canvasId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).

	self mapX: self canvasPadding.
	self mapY: self canvasPadding.
!

initializeCellsFromJson: jsonObject
	|cood|

	self cells: (Array new: (jsonObject row size)).
	jsonObject row withIndexDo: [:row :i |
		self cells at: i put: (Array new: (row cells size)).
		row cells withIndexDo: [ :cell :j |
			cood := self calculX: i y: j.
			(self cells at: i) at: j put: (Cell newWithContext: (self canvas element getContext: '2d') jsoncell: cell coods: cood).
		]
	].
!

initializeEventHandling
	self canvas onClick: [self mouseClick].
	self canvas onMouseMove: [:e | self mouseMove: e].

	('.up' asJQuery at: 0) at: 'onclick' put: [self goUp].
	('.left' asJQuery at: 0) at: 'onclick' put: [self goLeft].
	('.right' asJQuery at: 0) at: 'onclick' put: [self goRight].
	('.down' asJQuery at: 0) at: 'onclick' put: [self goDown].
	('.mirrorHorizontal' asJQuery at: 0) at: 'onclick' put: [self mirrorHorizontal].
	('.mirrorVertical' asJQuery at: 0) at: 'onclick' put: [self mirrorVertical].

	'window' asJQuery resize: [self update].
!

initializeFromJson: jsonObject

	"mapX adjustment according to mapSize"
	map mapX: map mapX + ((jsonObject row at:1) cells size * map tileUnit * 1.17).

	"cache initializing"
	ImageCache getSingleton onload: [map update].

	"cells initializing"
	map initializeCellsFromJson: jsonObject.
	
	"events management"
	map initializeEventHandling.
!

tileUnit
	^50
! !

!Map methodsFor: 'monster-selection'!

monsters
	|monsters|
	monsters := Array new.
	self cells collect: [:row |
		row collect: [ :cell | 
			cell monster ifNotNil: [monsters add: cell monster]
		]
	].
	^monsters
!

monstersFromSide: aSide
	^self monsters select: [:each | each side = aSide].
! !

!Map methodsFor: 'selection'!

addSelection: aCellCollection
	aCellCollection do: [:cell | cell addSelector].
!

removeSelection
	self cells collect: [:row |
		row collect: [ :cell | 
			cell removeSelector
		]
	]
!

selectActiveMonster
	|activeMonsters|
	Transcript show: 'start'.
	activeMonsters := Array new.
	self cells collect: [:row |
		row collect: [ :cell | 
			cell monster ifNotNil: [
				(cell monster state isKindOf: Inactive) ifFalse:[activeMonsters add: cell]
			]
		]
	].
	Transcript show: activeMonsters; cr.
	activeMonsters collect: [:each | each addSelectorColored: 'white'].
! !

Map class instanceVariableNames: 'map'!

!Map class methodsFor: 'instance creation'!

getSingleton
	^map ifNil:[map := self new.]
!

newWithMapIndex: aMapIndex
	|success map|
	
	map := self getSingleton.
	success := [:data | map initializeFromJson: data].
	<$.getJSON('ressources/json/maps/map' + aMapIndex + '.json', success)>.

	^map
! !
