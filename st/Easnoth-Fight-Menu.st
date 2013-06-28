Smalltalk current createPackage: 'Easnoth-Fight-Menu' properties: #{}!
Widget subclass: #Dice
	instanceVariableNames: ''
	package: 'Easnoth-Fight-Menu'!

!Dice methodsFor: 'displaying'!

animate: dice callBack: animationFinished
        |random url|

	random := 2 + 7 atRandom.
	url := self url.

	self animate: dice callBack: animationFinished random: random url: url
!

animate: dice callBack: animationFinished random: random url: url
<var i = 0;
    function roll() {
		dice.animate({'border-spacing': -100},
                        {step: function(now, fx) {
                                $(fx.elem).css('background-position', '1px '+now+'px');
                        },
                        duration: 200,
                        easing: 'linear',
                        complete: function (){
                                i++;
                                if (i< random){
                                        roll();
                                } else {
                                        i = 0;
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},
                                                {step: function(now, fx) {
                                                        $(fx.elem).css('background-position', '1px '+now+'px');
                                                        },
                                                        duration: 200,
                                                        easing: 'linear',
							complete: function(){
								animationFinished();
							}
                                                })
                                }
                        }
		})
	}
	roll();>
!

renderOn: html
	 self renderOn: html callback: []
!

renderOn: html callback: cb
	 self animate: ((html img: 'ressources/images/fight/diceBackground.png') asJQuery css: 'background' put: 'url("ressources/images/fight/diceRoll.png") 1px 0') callBack: cb
!

url
	self subclassResponsibility
! !

Dice subclass: #DiceDeath
	instanceVariableNames: ''
	package: 'Easnoth-Fight-Menu'!

!DiceDeath methodsFor: 'initialize-release'!

url
	^'ressources/images/fight/diceDeath.png'
! !

Dice subclass: #DiceKnockBack
	instanceVariableNames: ''
	package: 'Easnoth-Fight-Menu'!

!DiceKnockBack methodsFor: 'not yet classified'!

url
	^'ressources/images/fight/diceKnockBack.png'
! !

Dice subclass: #DiceMiss
	instanceVariableNames: ''
	package: 'Easnoth-Fight-Menu'!

!DiceMiss methodsFor: 'not yet classified'!

url
	^'ressources/images/fight/diceMiss.png'
! !

ActionMenuComponent subclass: #Dices
	instanceVariableNames: 'box'
	package: 'Easnoth-Fight-Menu'!

!Dices methodsFor: 'accessing'!

box
	^box
!

box: aBox
	box := aBox
! !

!Dices methodsFor: 'displaying'!

firstLoad
        self box contents: [:html | 
		html h4 with: 'Fight result'.
                DiceDeath new renderOn: html.
                DiceKnockBack new renderOn: html.
                DiceMiss new renderOn: html.
        ].
!

renderOn: html
	self box: (html div 
		class: 'dices';
		yourself).
	self firstLoad
!

updateKill: kill kb: knockBack callBack: cb
	|miss dicesNb tmp dices i callback|

	dicesNb := self actionMenu monsterWatcher monster dices.
	miss := dicesNb - kill - knockBack.
	dices := Array new.
	i := 1.
	callback := [i := i + 1. (i = dicesNb) ifTrue:cb].

	(1 to: kill) do:[dices add: DiceDeath new].
	(1 to: knockBack) do:[dices add: DiceKnockBack new].
	(1 to: miss) do:[dices add: DiceMiss new].

        self box contents: [:html | 
		html h4 with: 'Fight result'.
		1 to: dicesNb do: [
			"display dices in random order."
			tmp := dices atRandom.
			tmp renderOn: html callback: callback.
			dices remove: tmp.
		]
        ]
! !

!Dices methodsFor: 'eventHandling'!

showDices: aResDices callback: cb
	|kill knockBack|

	kill := aResDices x.
	knockBack := aResDices y.

	self updateKill: kill kb: knockBack callBack: cb.
! !

ActionMenu subclass: #FightMenu
	instanceVariableNames: 'actionCell'
	package: 'Easnoth-Fight-Menu'!

!FightMenu methodsFor: 'accessing'!

actionCell
	^actionCell
!

actionCell: aCell
	actionCell := aCell.
	self showMonster: actionCell monster.
!

dices
	^self components at: 2
!

monsterWatcher
	^self components at: 1
!

sidePlaying
	^self turnWatcher sidePlaying
!

tileWatcher
	^self components at: 3
!

turnWatcher
	^self components at: 5
! !

!FightMenu methodsFor: 'displaying'!

renderOn: html
	super renderOn: html.
! !

!FightMenu methodsFor: 'eventHandling'!

showMonster: aMonster
	self monsterWatcher showMonster: aMonster.
!

unshowMonster
	self monsterWatcher unshowMonster
! !

!FightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	self addComponent: MonsterWatcher new.
	self addComponent: Dices new.
	self addComponent: TileWatcher new.
	self addComponent: MapControls new.
	self addComponent: TurnWatcher new.
! !

ActionMenuComponent subclass: #MonsterWatcher
	instanceVariableNames: 'monster box'
	package: 'Easnoth-Fight-Menu'!

!MonsterWatcher methodsFor: 'accessing'!

box
	^box
!

box: aBox
	box := aBox
!

emptyMonster
	|imageVide|
	imageVide := NativeFunction constructor: 'Image'.
	imageVide at: 'src' put:'ressources/images/interro.png'.
	^Monster new
		image: imageVide;
		hp: 0;
		move: 0;
		range: 0;
		dices: 0;
		attack: 0;
		knockback: 0;
		special:'none'.
!

monster
	^monster ifNil: [self emptyMonster]
!

monster: aMonster
	monster := aMonster.
	self update
! !

!MonsterWatcher methodsFor: 'displaying'!

renderOn: html
	self box: (html div 
		class: 'monsterWatcher';
		yourself).
	self update
!

update
        self box contents: [:html | 
		html h4 with: 'selected monsters'.
                html img: (self monster image at: 'src').
                html table
			class: 'tableStats';
			with: [
			html tr with: [
				html td with: [
                        		html tr with: 'hp : ',self monster hp.
                        		html tr with: 'move : ',self monster move.
                        		html tr with: 'range : ',self monster range.
				].
				html td with: [
                       			html tr with: 'dices : ',self monster dices.
                        		html tr with: 'attack : ',self monster attack,' %'.
                       			html tr with: 'knockBack : ',self monster knockback,' %'.
				]
			].
			html tr with: 'special : ',self monster special.
		].
		html h5 with: 'debug'.
                html span with: 'state : ',self monster state class.
        ].
! !

!MonsterWatcher methodsFor: 'eventHandling'!

showMonster: aMonster
	self monster: aMonster.
	self update.
!

unshowMonster
	self showMonster: nil.
! !

ActionMenuComponent subclass: #TileWatcher
	instanceVariableNames: 'tile box'
	package: 'Easnoth-Fight-Menu'!

!TileWatcher methodsFor: 'accessing'!

box
	^box
!

box: aBox
	box := aBox
!

emptyTile
	|imageVide|
	imageVide := NativeFunction constructor: 'Image'.
	imageVide at: 'src' put:'ressources/images/interro.png'.
	^Tile new
		image: imageVide.
!

tile
	^tile ifNil: [self emptyTile]
!

tile: aTile
	tile := aTile
! !

!TileWatcher methodsFor: 'displaying'!

renderOn: html
	self box: (html div 
		class: 'tileWatcher';
		yourself).
	self update
!

update
        self box contents: [:html | 
		html h4 with: 'Tile'.
                html img: (self tile image at: 'src').
		html br.
		html span with: 'isWall : ' , self tile isWall , ' - monster : ' , (self tile cell ifNotNil: [self tile cell hasMonster] ifNil: ['empty']).
        ].
! !

ActionMenuComponent subclass: #TurnWatcher
	instanceVariableNames: 'turnNumber turnDisplay sidePlaying'
	package: 'Easnoth-Fight-Menu'!

!TurnWatcher methodsFor: 'accessing'!

sidePlaying
	^sidePlaying
!

sidePlaying: aSide
	sidePlaying := aSide
!

turnDisplay
	^turnDisplay
!

turnDisplay: aHTML
	turnDisplay := aHTML
!

turnNumber
	^turnNumber
!

turnNumber: anInt
	turnNumber := anInt
! !

!TurnWatcher methodsFor: 'displaying'!

renderOn: html
	html div class: 'stuff'; with: [
		self turnDisplay: html h5.
                html button with: 'next turn (= enter)';
                        onClick: [self nextTurn].
		'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]].
                html button with: 'class browser';
                        onClick: [Browser open].
	].
	self update.
!

update
	self turnDisplay contents: 'turn number : ', self turnNumber.
! !

!TurnWatcher methodsFor: 'game-logic'!

activateTwoMonsters
	|armyPlaying|

	armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.

	(armyPlaying size = 0) ifTrue: [
		window alert: 'Someone just won. Guess who ? winner : ' , self sidePlaying negated
	] ifFalse: [
		(armyPlaying size > 2) ifTrue: [
			self pickMonster
		] ifFalse: [
			armyPlaying collect: [:monster | monster changeState: Active new].
			self actionMenu map showActiveMonsters.
			self actionMenu map update
		]
	]
!

endPick
	|armyPlaying monsterActivated|

	"activate 1 monster randomly"
	armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.
	armyPlaying collect: [ :monster | 
		(monster state isKindOf: Active) ifTrue: [monsterActivated := monster]].

	(armyPlaying size = 1) ifFalse: [
		armyPlaying remove: monsterActivated.
		armyPlaying atRandom changeState: Active new
	].

	self actionMenu map showActiveMonsters.
	self actionMenu map update
!

firstTurn
	self sidePlaying ifNil: [
		self turnNumber: 1.
                self sidePlaying: 2 * 2 atRandom - 3.
                self activateTwoMonsters.
	].
!

increaseTurnNumber
	turnNumber := self turnNumber + 1.
	self update
!

nextTurn
	self sidePlaying: self sidePlaying negated.
	self increaseTurnNumber.
	self actionMenu map monsters do:[:each | each changeState: Inactive new].
	self activateTwoMonsters.
!

pickMonster
	|armyPlaying|
	
	"choose a monster to activate"
	armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.
	armyPlaying collect: [ :monster | monster changeState: ToPick new].

	self actionMenu map showActiveMonsters.
	self actionMenu map update
! !

!TurnWatcher methodsFor: 'initialize-release'!

initialize
	self turnNumber: 1.
! !

!Map methodsFor: '*Easnoth-Fight-Menu'!

imagesToPreload
	^Dictionary new
		at:'red' put:'overtiles/red';
		at:'green' put:'overtiles/green';
		at:'white' put:'overtiles/white';
		at:'interro' put:'interro';
		yourself
!

initializeActionMenu
	^FightMenu newFor: self
! !

