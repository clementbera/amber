Smalltalk current createPackage: 'Easnoth-Tools' properties: #{}!
Widget subclass: #ActionMenu
	instanceVariableNames: 'map components'
	package: 'Easnoth-Tools'!

!ActionMenu methodsFor: 'accessing'!

addComponent: aComponent
	self components add: aComponent.
	aComponent actionMenu: self
!

components
	^components
!

components: aCol
	components := aCol
!

map
	^map
!

map: aMap
	map := aMap
! !

!ActionMenu methodsFor: 'initialize-release'!

initialize
	self components: Array new
!

renderOn: html
	self components collect: [:each |
		each renderOn: html ].
! !

!ActionMenu class methodsFor: 'instance-creation'!

newFor: aMap
	^self new
		map: aMap;
		yourself.
! !

Widget subclass: #ActionMenuComponent
	instanceVariableNames: 'actionMenu'
	package: 'Easnoth-Tools'!

!ActionMenuComponent methodsFor: 'accessing'!

actionMenu
	^actionMenu
!

actionMenu: aMenu
	actionMenu := aMenu
! !

!ActionMenuComponent class methodsFor: 'instance-creation'!

newFor: aMenu
	^self new
		actionMenu: aMenu;
		yourself.
! !

ActionMenuComponent subclass: #MapControls
	instanceVariableNames: ''
	package: 'Easnoth-Tools'!

!MapControls methodsFor: 'displaying'!

renderOn: html
	html div 
		class: 'mapWatcher';
		with: [
                html h4
                        with: 'map controls'.
                html button
                        with: 'left';
                        onClick: [self actionMenu map goLeft].
                html button
                        with: 'right';
                        onClick: [self actionMenu map goRight].
                html button
                        with: 'down';
                        onClick: [self actionMenu map goDown].
                html button
                        with: 'up';
                        onClick: [self actionMenu map goUp].
		html span 
			with: '-'.
                html button
                        with: 'mh';
                        onClick: [self actionMenu map mirrorHorizontal].
                html button
                        with: 'vh';
                        onClick: [self actionMenu map mirrorVertical].
	].
! !

Dictionary subclass: #Cache
	instanceVariableNames: 'onload images monsters'
	package: 'Easnoth-Tools'!
!Cache commentStamp!
"singleton cache"!

!Cache methodsFor: 'accessing'!

images
	^images
!

images: anImageCache
	images := anImageCache
!

initialize
	super initialize.
	self images: (ImageCache newFor: self).
	self monsters: (MonsterCache newFor: self).
!

isLoaded
	|loaded|
	
	loaded := true.

	self images collect:[ :each|
				loaded := loaded & (each at: 'complete')].
	loaded := loaded & self monsters keys size even.

	loaded ifTrue:[self onload value.].
!

monsters
	^monsters
!

monsters: aMonsterCache
	monsters := aMonsterCache
!

onload
	^onload
!

onload: aBlock
	onload := aBlock
! !

Cache class instanceVariableNames: 'cache'!

!Cache class methodsFor: 'initialize'!

getSingleton
	^cache ifNil:[cache := self new.]
! !

Dictionary subclass: #CacheComponent
	instanceVariableNames: 'cache'
	package: 'Easnoth-Tools'!

!CacheComponent methodsFor: 'accessing'!

cache 
	^cache
!

cache: aCache
	cache := aCache
! !

!CacheComponent class methodsFor: 'instance-creation'!

newFor: aCache
	^self new
		cache: aCache;
		yourself
! !

CacheComponent subclass: #ImageCache
	instanceVariableNames: ''
	package: 'Easnoth-Tools'!

!ImageCache methodsFor: 'caching'!

addImageFromKey: aKey fromDrawedObject: aDrawedObject
	|imageNew|

	imageNew := NativeFunction constructor: 'Image'.
       	self at: aKey put: imageNew.
        imageNew at: 'onload' put: [self cache isLoaded].
        imageNew at: 'src' put:  'ressources/images/', aDrawedObject folderName, '/', aKey, '.png'.

	^imageNew
!

preloadImages: anImageCol
	|imageNew|

	anImageCol associationsDo: [ :assoc |
                imageNew := NativeFunction constructor: 'Image'.
                self at: assoc key put: imageNew.
                imageNew at: 'src' put:  'ressources/images/',assoc value,'.png'.
	].
!

putImageWithKey: aKey inDrawedObject: aDrawedObject
	aDrawedObject image: (self at: aKey ifAbsent:[
		self addImageFromKey: aKey fromDrawedObject: aDrawedObject])
! !

CacheComponent subclass: #MonsterCache
	instanceVariableNames: ''
	package: 'Easnoth-Tools'!

!MonsterCache methodsFor: 'caching'!

addStatsFromKey: aKey inMonster: aMonster
	|success keySuccess callBack|
	
        success := [:statsNew | 
		self at: aKey put: statsNew.
                aMonster stats: (self at: aKey).
                self cache isLoaded.
        ].
	
	keySuccess := aKey,'success'.
       	self at: keySuccess put: success.
	callBack := [:data | [self at: keySuccess] value value: data].

	self jsCall: aKey cb: callBack.
!

jsCall: aKey cb: callBack

	<$.getJSON('ressources/json/monsters/' + aKey + '.json', callBack)>
!

putStatsWithKey: aKey inMonster: aMonster
	(self includesKey: aKey,'success') ifTrue: [
		self updateStatsFromKey: aKey inMonster: aMonster.
	] ifFalse: [
		self addStatsFromKey: aKey inMonster: aMonster.
	]
!

updateStatsFromKey: aKey inMonster: aMonster
	|keySuccess oldCallBack|

	keySuccess := aKey,'success'.
	oldCallBack := self at: keySuccess.
	self at: keySuccess put: [:statsNew | 
			aMonster stats: statsNew. 
			oldCallBack value: statsNew. 
			self cache isLoaded].
	(self includesKey: aKey) ifTrue: [aMonster stats: (self at: aKey)].
! !

Object subclass: #MapVisitor
	instanceVariableNames: ''
	package: 'Easnoth-Tools'!

!MapVisitor methodsFor: 'low visiting'!

visitBuilding: aBuilding
	self subclassResponsibility
!

visitMonster: aMonster
	self subclassResponsibility
!

visitOverTile: anOverTile
	self subclassResponsibility
!

visitTile: aTile
	self subclassResponsibility
! !

!MapVisitor methodsFor: 'visiting'!

visitGameOverTiles: aMap
	aMap cellsDo: [ :cell |
      cell gameOverTile accept: self ].
!

visitMap: aMap
	aMap cellsDo: [ :cell |
      cell drawedObjects do: [:each |
      	each accept: self ]].
!

visitMonsters: aMap
	aMap cellsDo: [ :cell |
      cell monster accept: self ].
!

visitOverTiles: aMap
	aMap cellsDo: [ :cell |
      cell overTiles do: [:each |
      	each accept: self ]].
!

visitTiles: aMap
	aMap cellsDo: [ :cell |
      cell tile accept: self ].
! !

MapVisitor class instanceVariableNames: 'singleton'!

!MapVisitor class methodsFor: 'visiting'!

singleton
	^singleton ifNil: [singleton := self new]
! !

MapVisitor subclass: #MapDrawer
	instanceVariableNames: ''
	package: 'Easnoth-Tools'!

!MapDrawer methodsFor: 'visiting'!

initialize
!

updateMap: aMap
	self updateFloor: aMap.
    self updateGameOverTiles: aMap.
    self updateMonsters: aMap.
!

visitTile: aTile
	self subclassResponsibility
! !

Object subclass: #State
	instanceVariableNames: 'object'
	package: 'Easnoth-Tools'!

!State methodsFor: 'accessing'!

object
	^object
!

object: anObject
	object := anObject
! !

!State methodsFor: 'initialize-release'!

newState: aState for: anObject
	"anObject state tearDown."
	aState object: anObject.
	anObject state: aState.
	"aState setUp."
!

setUp
!

tearDown
! !

!State class methodsFor: 'instance creation'!

newFor: anObject
	^self new
		object: anObject;
		yourself.
! !

