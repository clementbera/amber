Smalltalk current createPackage: 'Easnoth-MapMenu'!
Widget subclass: #CWWidget
	instanceVariableNames: 'parent'
	package: 'Easnoth-MapMenu'!

!CWWidget methodsFor: 'accessing'!

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

!CWWidget methodsFor: 'events'!

announce: anEvent
	self announcer announce: anEvent
! !

!CWWidget methodsFor: 'testing'!

isRoot
	^ false
! !

CWWidget subclass: #CWActionMenu
	instanceVariableNames: 'components'
	package: 'Easnoth-MapMenu'!

!CWActionMenu methodsFor: 'accessing'!

addComponent: aClass
	self components add: (self newChild: aClass)
!

children
	^ self components
!

components
	^ components
!

root
	^ self
! !

!CWActionMenu methodsFor: 'factory'!

newChild: aClass
	^ aClass new parent: self
! !

!CWActionMenu methodsFor: 'rendering'!

remove
	self components do: [:each |
		each remove].
!

renderOn: html
	self components do: [:each |
		each renderOn: html ].
! !

!CWActionMenu methodsFor: 'testing'!

isRoot
	^ true
! !

CWActionMenu subclass: #CWFightMenu
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!
!CWFightMenu commentStamp!
This action menu is dedicated fo fights.!

!CWFightMenu methodsFor: 'accessing'!

menuClass
	^ '.menuEditor'
! !

!CWFightMenu methodsFor: 'initialize-release'!

initialize
	super initialize.
	components := Array new.
	self addComponent: CWMonsterWatcher.
	self addComponent: CWDices.
	self addComponent: CWMapControls.
	self addComponent: CWTurnWatcher.
	self appendToJQuery: '#global' asJQuery.
	self announcer
		on: CWEndGameEvent
		do: [ self remove ]
! !

CWWidget subclass: #CWActionMenuComponent
	instanceVariableNames: 'box'
	package: 'Easnoth-MapMenu'!

!CWActionMenuComponent methodsFor: 'accessing'!

children
	^ #()
! !

!CWActionMenuComponent methodsFor: 'rendering'!

remove
	box asJQuery remove
! !

CWActionMenuComponent subclass: #CWDices
	instanceVariableNames: 'subBox'
	package: 'Easnoth-MapMenu'!
!CWDices commentStamp!
SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW.

This is top right menu. It displays the results of any fight.!

!CWDices methodsFor: 'initialize-release'!

firstLoad
    subBox contents: [ :html | 
		   CWDiceDeath new renderOn: html callback: [ ].
           CWDiceMiss new renderOn: html callback: [ ] ].
!

initialize
	super initialize.
	self announcer 
		on: CWDicesRolledEvent
		do: [ :event | self showDices: event ].
!

renderOn: html
	box := (html div 
		class: 'mapMenuPanel dices';
		with: [
			html div 
				class: 'mapMenuPanelContainer';
				with: [
					html img: 'ressources/images/fight/fightResult.png'.
					subBox := html div style: 'padding-top: 7px'; yourself ] ];
		yourself).
	self firstLoad
! !

!CWDices methodsFor: 'private'!

updateDices: dicesNb kills: kills callBack: cb
	"animate the dices and display them in random order"

	| tmp dices i callback |
	dices := Array new: dicesNb.
	i := 0.
	callback := [
		i := i + 1. 
		(i = dicesNb) 
			ifTrue: cb].

	1 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].
	kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].

    subBox contents: [:html | 
		1 to: dicesNb do: [
			tmp := dices atRandom.
			tmp renderOn: html callback: callback.
			dices remove: tmp ] ]
! !

!CWDices methodsFor: 'public'!

showDices: aResDices
	| cb |
	cb := [ aResDices callback value: aResDices ].
	self updateDices: aResDices dices kills: aResDices kills callBack: cb.
! !

CWActionMenuComponent subclass: #CWMapControls
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!
!CWMapControls commentStamp!
This represents the bottom left map controls menu. It permits to move the map.!

!CWMapControls methodsFor: 'actions'!

go: direction
	self announce: (CWMapMoveEvent new directionMethod: direction)
! !

!CWMapControls methodsFor: 'rendering'!

renderOn: html
	self setUpShortCuts.
	box := html div 
		class: 'mapMenuPanel mapWatcher';
		width: 500;
		with: [
			html div 
				class: 'mapMenuPanelContainer';
				style: 'position: relative; height: 100%';
				with: [
            	    html h4
                	        with: 'MAP CONTROLS';
							style: 'position: absolute; bottom: 15%; left: 5%; width: 50%; text-align: left'.
					html div
						style: 'position: absolute; width: 70%; height: 70%; top: 5%; right: 5%; background-image: url(ressources/images/fight/mapControls.png); background-repeat: no-repeat; background-position: center';
						with: [
                		html button
							class: 'mapButton mapLeft';
                       		onClick: [self go: 'left'].
               	 		html button
							class: 'mapButton mapRight';
                        	onClick: [self go: 'right'].
                		html button
							class: 'mapButton mapDown';
                        	onClick: [self go: 'down'].
                		html button
							class: 'mapButton mapUp';
							style: 'position: absolute; left: 41%; top: 2%;';
                        	onClick: [self go: 'up'] ] ]
	];
	yourself
!

setUpShortCuts
	"'body' asJQuery keyup:[:event |  | k |
		k := event keyCode.
		(k = 37 | k = 65) ifTrue: [self go: 'left'].
		(k = 39 | k = 68) ifTrue: [self go: 'right'].
		(k = 38 | k = 87) ifTrue: [self go: 'up'].
		(k = 40 | k = 83) ifTrue: [self go: 'down'].
	]."
! !

CWActionMenuComponent subclass: #CWMonsterWatcher
	instanceVariableNames: 'monster subBox'
	package: 'Easnoth-MapMenu'!
!CWMonsterWatcher commentStamp!
This represetns a view on the monster for the user. It is the top left menu.!

!CWMonsterWatcher methodsFor: 'accessing'!

emptyMonster
	^ CWMonster emptyMonster
!

monster
	^ monster ifNil: [self emptyMonster]
! !

!CWMonsterWatcher methodsFor: 'initialize-release'!

initialize
	super initialize.
	self announcer 
		on: CWMonsterUpdateEvent
		do: [ :event | self watchMonster: event monster ]
!

watchMonster: aMonster
	monster = aMonster
		ifFalse: [ 
			monster := aMonster.
			self update ]
! !

!CWMonsterWatcher methodsFor: 'rendering'!

renderOn: html
	box := (html div 
		class: 'mapMenuPanel monsterWatcher';
		with: [
			html div 
				class: 'mapMenuPanelContainer';
				with: [
					html img: 'ressources/images/fight/selectedMonster.png'.
					subBox := html div ] ];
		yourself).
	self update
!

update
	"I hide some stuff for release"

        subBox contents: [:html | 
                html table
			class: 'tableStats';
			with: [
			html tr with: [
				html td 
					class: 'rightSide';
					with: [
                        		html tr with: 'hp : '.
                        		html tr with: 'move : '.
                        		html tr with: 'range : '.
				].
				
				html td 
					class: 'leftSide';
					style: 'width: 30px';
					with: [
                        		html tr with: self monster hp.
                        		html tr with: self monster currentMove asString, '/', self monster move.
                        		html tr with: self monster range.
				].
				html td 
					class: 'rightSide';
					with: [
                       			html tr with: 'dices : '.
                        		html tr with: 'attack : '.
                       			html tr with: 'special : '.
				].
				html td 
					class: 'leftSide';
					with: [
                       			html tr with: self monster dices.
                        		html tr with: self monster attack asString,' %'.
                       			html tr with: self monster special.
				]
			].
		].
		"html h5 with: 'debug'.
                html span with: 'state : ', self monster state class.
				html br.
                html span with: 'attackPot : ', self monster attackPotential.
				html br.
                html span with: 'cell : ', self monster parent printString."
        ].
! !

CWActionMenuComponent subclass: #CWTurnWatcher
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!
!CWTurnWatcher commentStamp!
This represents additional informations for the game. This is the bottom right menu.!

!CWTurnWatcher methodsFor: 'rendering'!

renderOn: html
	box := html div 
		class: 'mapMenuPanel stuff'; 
		with: [
			html div 
				class: 'mapMenuPanelContainer';
				with: [
				html a 
					href: '#';
					with: 'End turn'; 
					onClick: [self announce: CWNextTurnEvent new].
				html br.
				html a 
					href: '#';
					with: 'Class browser'; 
					onClick: [Browser open].
				html br.
				html a 
					href: '#';
					with: 'Menu'; 
					onClick: [self announce: CWEndGameEvent new].
				html br.
				html iframe
					src: '//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002';
					at: 'frameborder' put: 0;
					at: 'scrolling' put: 'no';
					style:'border:none; overflow:hidden; width:80px; height:21px; margin-top: 5px;';
					at: 'allowTransparency' put: 'true'.
	] ];
	yourself.
! !

CWWidget subclass: #CWDice
	instanceVariableNames: 'counter'
	package: 'Easnoth-MapMenu'!

!CWDice methodsFor: 'accessing'!

backgroundPictureUrl
	^	self diceRepo, 'diceBackground.png'
!

diceRepo
	^ 'ressources/images/fight/'
!

url
	self subclassResponsiblity
!

urlRoll
	^ self diceRepo, 'diceRoll.png'
! !

!CWDice methodsFor: 'rendering'!

animate: dice callBack: animationFinished
	counter := 0.
	self animation: dice callBack: animationFinished.
!

animation: dice callBack: animationFinished
	"Triggers once the rolling dice animation and checks what to do next"
	self jqueryAnimate: dice callBack: [ self nextAnimation: dice callBack: animationFinished ]
!

endAnimation: dice callBack: animationFinished
	"Terminates the rolling dice animation. Displays the result and executes the callback"
	dice css: 'background-image' put: 'url(' , self url , ')'.
	self jqueryAnimate: dice callBack: animationFinished
!

jqueryAnimate: dice callBack: nextAnim
	"Rolling dice animation with jquery"
	dice 
		animate: #{'border-spacing' -> -50 }
   	 	options:  #{
			'step' -> [ :now :fx | fx elem asJQuery css: 'background-position' put: '1px ', now asString,'px' ] .
        	'duration' -> 200 .
        	'easing' -> 'linear' .
			'complete' -> nextAnim }
!

nextAnimation: dice callBack: animationFinished 
	"After a random delay, the rolling dice animation stops, displaying the result and executing the callback"
	counter := counter + 1.
	counter < (2 + 7 atRandom) 
		ifTrue: [ self animation: dice callBack: animationFinished ] 
		ifFalse: [self endAnimation: dice callBack: animationFinished ]
!

renderOn: html callback: cb
	 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(', self urlRoll, ') 1px 0') callBack: cb
! !

CWDice subclass: #CWDiceDeath
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWDiceDeath methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceDeath.png'
! !

CWDice subclass: #CWDiceMiss
	instanceVariableNames: ''
	package: 'Easnoth-MapMenu'!

!CWDiceMiss methodsFor: 'accessing'!

url
	^ self diceRepo, 'diceMiss.png'
! !

