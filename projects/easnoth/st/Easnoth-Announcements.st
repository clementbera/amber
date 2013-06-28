Smalltalk current createPackage: 'Easnoth-Announcements'!
SystemAnnouncement subclass: #CWEasnothAnnouncement
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWEasnothAnnouncement subclass: #CWBootstrapEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWBootstrapEvent commentStamp!
All announcements that are related to the bootstrap of the game!

CWBootstrapEvent subclass: #CWGameStart
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWGameStart commentStamp!
Triggered when all the objects (JSON, images) needed for the game are loaded to start the game.!

CWBootstrapEvent subclass: #CWObjectLoaded
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWObjectLoaded commentStamp!
Trggered when an object requested (JSON, image) is loaded.!

CWBootstrapEvent subclass: #CWWaitForObject
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWWaitForObject commentStamp!
Triggered when an asynchronous request is sent to get a JSON or an image!

CWEasnothAnnouncement subclass: #CWEndGameEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

CWEasnothAnnouncement subclass: #CWMapMoveEvent
	instanceVariableNames: 'directionMethod'
	package: 'Easnoth-Announcements'!

!CWMapMoveEvent methodsFor: 'accessing'!

directionMethod
	^ directionMethod
!

directionMethod: aMethod
	directionMethod := aMethod
! !

CWEasnothAnnouncement subclass: #CWMenuUpdateEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWMenuUpdateEvent commentStamp!
All announcements that are related to the menu that need to be updated.!

CWMenuUpdateEvent subclass: #CWDicesRolledEvent
	instanceVariableNames: 'dices kills callback'
	package: 'Easnoth-Announcements'!
!CWDicesRolledEvent commentStamp!
Triggered when the dices are rolled during an attack to display them on the right menu!

!CWDicesRolledEvent methodsFor: 'accessing'!

callback
	^ callback
!

callback: aBlock
	callback := aBlock
!

dices
	^ dices
!

dices: int
	dices := int
!

kills
	^ kills
!

kills: int
	kills := int
! !

CWMenuUpdateEvent subclass: #CWMonsterUpdateEvent
	instanceVariableNames: 'monster'
	package: 'Easnoth-Announcements'!
!CWMonsterUpdateEvent commentStamp!
Triggered when a monster is selected to update the right menu!

!CWMonsterUpdateEvent methodsFor: 'accessing'!

monster
	^ monster
!

monster: aMonster
	monster := aMonster
! !

CWEasnothAnnouncement subclass: #CWNextTurnEvent
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!
!CWNextTurnEvent commentStamp!
Triggered to request the game to let the other player play.!

SystemAnnouncer subclass: #CWEasnothAnnouncer
	instanceVariableNames: ''
	package: 'Easnoth-Announcements'!

!CWEasnothAnnouncer methodsFor: 'not yet classified'!

reset
	subscriptions reset.
	self class reset
! !

!CWEasnothAnnouncer class methodsFor: 'not yet classified'!

reset
	current := nil
! !

