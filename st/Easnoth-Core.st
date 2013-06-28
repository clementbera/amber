Smalltalk current createPackage: 'Easnoth-Core' properties: #{}!
Object subclass: #Cell
	instanceVariableNames: 'tile gameOverTile overTiles monster coods state map'
	package: 'Easnoth-Core'!
!Cell commentStamp!
"implementation of an hexagonal isometric cell"!

!Cell methodsFor: 'accessing'!

coods
	^coods
!

coods: cood
	coods := cood x rounded @ cood y rounded
!

drawedObjects
	|drawedObjects|
    drawedObjects := OrderedCollection new: 8.
    drawedObjects add: self tile.
    drawedObjects addAll: self overTiles.
    drawedObjects add: self gameOverTile.
    drawedObjects add: self monster.
    ^drawedObjects
!

gameOverTile
	^gameOverTile
!

gameOverTile: anOverTile
	gameOverTile := anOverTile.
    anOverTile cell: self
!

map
	^map
!

map: aMap
	map := aMap
!

monster
	^monster
!

monster: aMonster
	monster := aMonster.
    aMonster cell: self
!

overTiles
	^overTiles
!

overTiles: aCollection
	overTiles := aCollection.
    aCollection do: [:overtile |
    	overtile ifNotNil: [overtile cell: self]]
!

removeGameOverTile
	gameOverTile := nil
!

removeMonster
	monster := nil
!

removeTile
	tile := nil.
!

state
	state ifNil: [self initializeState].
	^state
!

state: aState
	state := aState
!

tile
	^tile
!

tile: aTile
	tile := aTile.
    aTile cell: self
! !

!Cell methodsFor: 'displaying'!

addSelectorColored: aSelector
	self gameOverTile: (OverTile newInCell: self jsonOverTile: aSelector selector: true).
!

draw
	self drawedObjects do: [ :drawedObject |
		(drawedObject notNil & self coods notNil) ifTrue: [drawedObject draw]
	].
!

updateCoods: cood
	self coods: cood
! !

!Cell methodsFor: 'factory'!

createMonster: aJsonMonster
	^ Monster 
    	newInCell: self 
        jsonMonster: aJsonMonster
!

createOverTiles: jsonOverTiles
	^ jsonOverTiles collect: [:each | 
    	OverTile 
        	newInCell: self 
            jsonOverTile: each overtile]
!

createTile: aJsonTile
	^ Tile 
    	newInCell: self 
        jsonTile: aJsonTile
! !

!Cell methodsFor: 'initialize-release'!

initialize
	super initialize.
	self overTiles: (Array new: 5).
!

initializeState
	CellState initializeStateFor: self
!

parseJSONCell: aJsonCell

    | elements |
    
    elements := aJsonCell keys.
    
    elements first = 'tile'
    	ifTrue: [self tile: (self createTile: aJsonCell tile)].
    (elements includes: 'overtiles')
    	ifTrue: [self overTiles: (self createOverTiles: aJsonCell overtiles)].
    elements last = 'monster'
    	ifTrue: [self monster: (self createMonster: aJsonCell monster)].
! !

!Cell methodsFor: 'map-delegation'!

attackableNeighboursSide: aSide
	^self map attackableCellsNextTo: self side: aSide cycle: self monster range
!

coodsInMap
	^self map coodsOf: self
!

movableNeighbours
	^self map movableCellsNextTo: self cycle: self monster move
!

neighbours
	^self map cellsNextTo: self
!

selectableNeighboursSide: aSide
	^self map selectableCellsNextTo: self side: aSide cycle: self monster move
! !

!Cell methodsFor: 'printing'!

printString
	^'Cell : ' , self coodsInMap x , '-' , self coodsInMap y
! !

!Cell methodsFor: 'state-delegation'!

addSelector
	self state addSelector
!

canAttack: aSide
	^self state canAttack: aSide
!

canMoveTo
	^self state canMoveTo
!

changeState: aState
	self state newState: aState for: self
!

mouseClick: actionMenu
	self state mouseClick: actionMenu
!

prevCell
	^self state prevCell
!

prevCell: aCell
	self state prevCell: aCell
!

removeSelector
	self state removeSelector
! !

!Cell methodsFor: 'testing'!

free
	^self hasMonster not
!

hasMonster
	^self monster notNil
! !

!Cell class methodsFor: 'instance creation'!

newInMap: aMap jsoncell: aJsonCell coods: coods
	^self new
		map: aMap;
		updateCoods: coods;
		parseJSONCell: aJsonCell;
		yourself.
! !

Object subclass: #DrawedObject
	instanceVariableNames: 'image cell'
	package: 'Easnoth-Core'!
!DrawedObject commentStamp!
"abstract implementation of a drawedObject, Tile, overtile, Building or Monster"!

!DrawedObject methodsFor: 'accessing'!

cell
	^cell
!

cell: aCell
	cell := aCell
!

context
	^cell map context
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

initializeCell: aCell imageKey: aKey
	self cell: aCell.
	aCell map cache images putImageWithKey: aKey inDrawedObject: self
! !

!DrawedObject methodsFor: 'visiting'!

accept: aVisitor
	self subclassResponsibilty
! !

DrawedObject subclass: #Ground
	instanceVariableNames: ''
	package: 'Easnoth-Core'!
!Ground commentStamp!
"abstract implementation of drawedObject Overtile and Tile. Drawed through isometric transformation"!

!Ground methodsFor: 'displaying'!

draw
	"draw through isometric transformation"

	|ctx|
	ctx := self context.
	ctx save;
		translate: self cell coods x + 45 y: self cell coods y-7;
		scale: 1 y: 0.5;
		rotate: Number pi / 4 ;
		scale: 1.4 y: 1.23.
	self displayX: 0 y: 0.
	ctx restore.
! !

Ground subclass: #OverTile
	instanceVariableNames: 'selector'
	package: 'Easnoth-Core'!

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

!OverTile methodsFor: 'visiting'!

accept: aVisitor
	^aVisitor visitOverTile: self
! !

!OverTile class methodsFor: 'instance creation'!

newInCell: aCell jsonOverTile: aJsonOverTile
	^self newInCell: aCell jsonOverTile: aJsonOverTile selector: false
!

newInCell: aCell jsonOverTile: aJsonOverTile selector: aBool
	^self new
		initializeCell: aCell imageKey: aJsonOverTile;
		selector: aBool;
		yourself.
! !

Ground subclass: #Tile
	instanceVariableNames: 'isWall'
	package: 'Easnoth-Core'!

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

!Tile methodsFor: 'visiting'!

accept: aVisitor
	^aVisitor visitTile: self
! !

!Tile class methodsFor: 'instance creation'!

newInCell: aCell jsonTile: aJsonTile
	^self new
		initializeCell: aCell imageKey: aJsonTile;
		isWall: false;
		yourself.
! !

DrawedObject subclass: #OverGround
	instanceVariableNames: 'hp'
	package: 'Easnoth-Core'!
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
	package: 'Easnoth-Core'!

!Building methodsFor: 'initializing'!

folderName
	^'buildings'
! !

!Building methodsFor: 'visiting'!

accept: aVisitor
	^aVisitor visitBuilding: self
! !

OverGround subclass: #Monster
	instanceVariableNames: 'move attack knockback range heros special dices side state'
	package: 'Easnoth-Core'!

!Monster methodsFor: 'accessing'!

attack
	^attack
!

attack: somePercent
	attack := somePercent
!

dices
	^dices
!

dices: anInt
	dices := anInt
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

draw
	"drawAsHero ou drawAsUnit"
    |aX aY|   
    aX := self cell coods x.
    aY := self cell coods y.
	self heros ifTrue: [
		self drawAsHeroX: aX y: aY
	] ifFalse: [
		self drawAsUnitX: aX y: aY
	]
!

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

drawAsUnitX: aX y: aY
	|xArray yArray|

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).

	(self side negative) ifTrue: [
		(1 to: self hp) do: [ :i |
			self context save;
			translate: aX + 72 + (xArray at: i) y: 0;
			scale: -1 y: 1.
			self displayX: 0 y: aY - (yArray at: i).
			self context restore.
		].
	] ifFalse: [
		(1 to: self hp) do: [ :i |
			self displayX: aX + (xArray at: i) y: aY - (yArray at: i).
		]
	]
!

jsdrawAsHeroX: aX y: aY
	|ctx|
	ctx:= self context.
	"87 = 72 (width image + 15"
	"(self side negative) ifTrue: [
		<ctx.save();
		ctx.translate(aX + 87,0);
		ctx.scale(-1,1)>.
		self displayX: 0 y: aY - 28.
		<ctx.restore()>.
	] ifFalse: [
		self displayX: aX + 15 y: aY - 28.
	]"
!

jsdrawAsUnitX: aX y: aY
	|xArray yArray ctx|

	xArray := #(17 37 -11 9).
	yArray := #(33 23 26 15).
	ctx := self context.
	
	"(self side negative) ifTrue: [
		(1 to: self hp) do: [ :i |
                        <ctx.save();
                        ctx.translate(aX + 72 + xArray[i - 1],0);
                        ctx.scale(-1,1)>.
                        self displayX: 0 y: aY - (yArray at: i).
                        <ctx.restore()>.
		].
	] ifFalse: [
		(1 to: self hp) do: [ :i |
			self displayX: aX + (xArray at: i) y: aY - (yArray at: i).
		]
	]"
! !

!Monster methodsFor: 'fighting'!

removeHP: anInt
        self hp: self hp - anInt.
        (self hp < 1) ifTrue: [
                self cell removeMonster.
                self cell changeState: Free new
        ].
!

rollDices
	|kill knockBack tmp|
	
	kill := 0.
	knockBack := 0.

	1 to: self dices do: [
		tmp := 100 atRandom.
		(tmp < self attack) ifTrue: [kill := kill + 1].
		(tmp > self attack & (tmp < (self attack + self knockback))) ifTrue: [knockBack := knockBack + 1].
	].

	^kill @ knockBack
!

rollDicesCallBack: callback
	|kill knockBack tmp|
	
	kill := 0.
	knockBack := 0.

	1 to: self dices do: [
		tmp := 100 atRandom.
		(tmp < self attack) ifTrue: [kill := kill + 1].
		(tmp > self attack & (tmp < (self attack + self knockback))) ifTrue: [knockBack := knockBack + 1].
	].

	self cell map actionMenu dices showDices: kill @ knockBack callback: callback.

	^kill @ knockBack
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
	self cell map cache monsters putStatsWithKey: aJsonMonster inMonster: self
!

stats: jsonStats
	self move: jsonStats move.
	self range: jsonStats range.
	self attack: jsonStats attack.
	self knockback: jsonStats knockback.
	self heros: jsonStats heros.
	self dices: jsonStats dices.
	self special: jsonStats special.
	self heros ifTrue: [self hp: 2] ifFalse: [self hp: 4].
! !

!Monster methodsFor: 'state-delegation'!

attackTo: aCell
	self state attackTo: aCell
!

changeState: aState
	self state newState: aState for: self
!

moveTo: aCell
	self state moveTo: aCell
!

select
	self state select
! !

!Monster methodsFor: 'visiting'!

accept: aVisitor
	^aVisitor visitMonster: self
! !

!Monster class methodsFor: 'instance creation'!

newInCell: aCell jsonMonster: aJsonMonster
	^self new
		initializeCell: aCell imageKey: aJsonMonster name;
		initializeStats: aJsonMonster name;
		initializeSide: aJsonMonster side;
		yourself.
! !

Object subclass: #Map
	instanceVariableNames: 'mapCoods cells canvas actionMenu cache'
	package: 'Easnoth-Core'!
!Map commentStamp!
"singleton Map, represents all the map drawed in the canvas"!

!Map methodsFor: 'accessing'!

actionMenu
	^actionMenu
!

actionMenu: aMenu
	actionMenu := aMenu
!

cache
	^cache
!

cache: aCache
	cache := aCache
!

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

context
	^canvas element getContext: '2d'
!

coods
	^mapCoods
!

coods: aPoint
	mapCoods := aPoint
!

currentCell: anEvent
	|x y cood|
	
        x := anEvent pageX - self canvas element offsetLeft.
        y := anEvent pageY - self canvas element offsetTop.

        cood := self mouseCoodToHexCoodX: x y: y.
	
	"if out of map then nil"
	^[(self cells at: cood x) at: cood y] on: Error do: [nil].
! !

!Map methodsFor: 'cell-delegate'!

attackableCellsNextTo: aCell side: aSide
	|attackableCells|
	attackableCells := (self cellsNextTo: aCell) select: [:each | 
					each canAttack: aSide].
	attackableCells collect: [:each |
			each addSelector].
	^attackableCells
!

attackableCellsNextTo: aCell side: aSide cycle: cycleNumber
	|attackableCells|

	self removeSelection.

	attackableCells := self attackableCellsNextTo: aCell side: aSide.

	^attackableCells
!

cellsNextTo: aCell
	|coods|

	coods := self coodsOf: aCell.
	^self cellsNextToI: coods x j: coods y
!

cellsNextTo: aCell cycle: cycleNumber
	|cellsNext tempSet|

	"issue : Would be able to move/attack through walls. Not used"
	"cellsNext := self cellsNextTo: aCell.
	(1 to: (cycleNumber - 1)) do: [
		tempSet := Set new.
		cellsNext collect: [ :each |
			tempSet addAll: (self cellsNextTo: each)
		].
		cellsNext addAll: tempSet
	].
	^cellsNext"
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
			(cell = aCell) ifTrue:[^i @ j]
		]
	]
!

movableCellsNextTo: aCell
	|movableCells|
	movableCells := (self cellsNextTo: aCell) select: [:each | 
					each canMoveTo].
	movableCells collect: [:each |
			each addSelector.
			each prevCell: aCell].
	^movableCells
!

movableCellsNextTo: aCell cycle: cycleNumber
	|movableCells tempSet|

	self removeSelection.

	movableCells := self movableCellsNextTo: aCell.
	(1 to: (cycleNumber - 1)) do: [
		tempSet := Set new.
		movableCells collect: [ :each |
			tempSet addAll: (self movableCellsNextTo: each)
		].
		movableCells addAll: tempSet
	].

	^movableCells
!

selectableCellsNextTo: aCell side: aSide cycle: cycleNumber
	|selectableCells tempSet|

	"movable cells"
	selectableCells := self movableCellsNextTo: aCell cycle: cycleNumber.

	"all attackable cells from any movable cell"
	tempSet := Set new.
		selectableCells collect: [ :each |
			tempSet addAll: (self attackableCellsNextTo: each side: aSide)
		].
	selectableCells addAll: tempSet.

	"cell attackable from departure"
	selectableCells addAll: (self attackableCellsNextTo: aCell side: aSide).

	^selectableCells
!

updateCellsCoods
	self cells withIndexDo: [:row :i |
		row withIndexDo: [ :cell :j |
			cell updateCoods: (self calculX: i y: j).
		]
	]
! !

!Map methodsFor: 'displaying'!

calculX: i y: j
	|xpos ypos temp cood sin45 sin15 sin135 sin75|

	sin45 := 0.707106781. "Pi/4"
	sin15 := 0.258819045. "Pi/12"
	sin135 := 0.233445364. "???->I used Approximation"
	sin75 := 0.965925826. "5*Pi/12"

	temp := (j + ((i + 1)/2)) truncated.
	xpos := (i * (sin45 + sin75) - (temp* (sin15 + sin75))) * self tileUnit + self coods x.
	ypos := (temp * (sin15 + sin75) / 2 + (i * sin135)) * self tileUnit + self coods y.
	cood := xpos @ ypos.
	
	^cood
!

update
	|elem|

	elem := self canvas element.
	(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.

	self cellsDo: [:cell | cell draw]
! !

!Map methodsFor: 'enumerating'!

cellsDo: aBlock
	self cells collect: [:row |
		row collect: [:cell | 
			aBlock value: cell.
		]
	]
! !

!Map methodsFor: 'eventHandling'!

goDown
	self coods: self coods + (0 @ 100).
	self updateCellsCoods.
	self update
!

goLeft
	self coods: self coods - (100 @ 0).
	self updateCellsCoods.
	self update
!

goRight
	self coods: self coods + (100 @ 0).
	self updateCellsCoods.
	self update
!

goUp
	self coods: self coods - (0 @ 100).
	self updateCellsCoods.
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

mouseClick: anEvent
	|cc|
	cc := self currentCell: anEvent.
	cc ifNotNil: [ 
		cc mouseClick: self actionMenu actionCell
	].
	self update
!

mouseCoodToHexCoodX: x y: y
	"function that take mouse cood in pixel and return the coods of the tile selected"
	
	"there are issues from Amber kernel : the order of operations sometimes goes wrong in long lines :  inline compiler issue"
	"so this algo is back to javascript. Moreover js make it faster"

	| xHex yHex array mapDisplayX mapDisplayY|
                
	mapDisplayX := self coods x.
	mapDisplayY := self coods y.

	array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.
    
    xHex := array at: 1.
    yHex := array at: 2.
    
	^xHex @ yHex.
!

mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY
	"function that take mouse cood in pixel and return the coods of the tile selected"
	"so this algo is back to javascript. Moreover js make it faster"

		<function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
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
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a>
!

mouseMove: anEvent
	|cc|

	"to refactor"
	cc := self currentCell: anEvent.
	cc ifNotNil: [ 
		(self actionMenu tileWatcher tile: cc tile) update
	].
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
	self coods: self canvasPadding @ self canvasPadding.
!

initializeCache
	
	"cache initializing"
	self cache: Cache getSingleton.
	self cache onload: [self update. 
			self actionMenu turnWatcher firstTurn.
			'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500].

	self cache images preloadImages: self imagesToPreload
!

initializeCellsFromJson: jsonObject
	|cood|

	self cells: (Array new: (jsonObject row size)).
	jsonObject row withIndexDo: [:row :i |
		self cells at: i put: (Array new: (row cells size)).
		row cells withIndexDo: [ :cell :j |
			cood := self calculX: i y: j.
			(self cells at: i) at: j put: (Cell newInMap: self jsoncell: cell coods: cood)
		]
	]
!

initializeEventHandling
	|canvasMouse|
	"onMouseUp instead of onClick for performance purpose"
	self canvas onMouseUp: [:e | self mouseClick: e].
	self canvas onMouseMove: [:e | self mouseMove: e].
	
	'window' asJQuery resize: [self update].
!

initializeFromJson: jsonObject
	
	self initializeCache.
	
	"mapX adjustment according to mapSize"
	self coods x: self coods x + ((jsonObject row at:1) cells size * self tileUnit * 1.17).

	"cells initializing"
	self initializeCellsFromJson: jsonObject.
	
	"events management"
	self initializeEventHandling.

	"menu initializing"
	self actionMenu: self initializeActionMenu.
	self actionMenu appendToJQuery: '.menuEditor' asJQuery.
!

tileUnit
	^50
! !

!Map methodsFor: 'printing'!

printString
	^'Map (' , self cells size , 'x' , (self cells at: 1) size, ')'
! !

!Map methodsFor: 'selection'!

monsters
	|monsters|
	monsters := Array new.
	self cellsDo: [:cell |
			cell hasMonster ifTrue: [monsters add: cell monster]
	].
	^monsters
!

monstersFromSide: aSide
	^self monsters select: [:each | each side = aSide].
!

removeSelection
	self cellsDo: [:cell |
		cell removeSelector]
!

showActiveMonsters

	self removeSelection.

	self cellsDo: [ :cell | 
                cell monster ifNotNil: [
                        (cell monster state isKindOf: Inactive) ifFalse:[cell addSelectorColored: 'white'].				
                ]
	].

	self actionMenu unshowMonster.
! !

Map class instanceVariableNames: 'map'!

!Map class methodsFor: 'instance creation'!

getSingleton
	^map ifNil:[map := self new.]
!

jsCall: aMapIndex cb: success
	<$.getJSON('ressources/json/maps/map' + aMapIndex + '.json', success)>
!

newWithMapIndex: aMapIndex
	|success map1|
	
	map1 := self getSingleton.
	success := [:data | map1 initializeFromJson: data].
    self jsCall: aMapIndex cb: success.

	^map1
! !

!JSObjectProxy methodsFor: '*Easnoth-Core'!

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

