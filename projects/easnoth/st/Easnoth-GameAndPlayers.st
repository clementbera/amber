Smalltalk current createPackage: 'Easnoth-GameAndPlayers'!
Object subclass: #CWGame
	instanceVariableNames: 'map context playerPool endGameBlock'
	package: 'Easnoth-GameAndPlayers'!
!CWGame commentStamp!
Represent the game. Includes the god game logic (turn system)!

!CWGame methodsFor: 'accessing'!

announcer
	^ CWEasnothAnnouncer current
!

currentPlayer
	^ self gameContext currentPlayer
!

eventManagerLayerId
	^ '#eventManager'
!

gameContext
	^ context
! !

!CWGame methodsFor: 'event'!

announce: event
	self announcer announce: event
! !

!CWGame methodsFor: 'game logic'!

firstTurn
	self gameContext nextTurn: (playerPool at: 2 atRandom).
	self currentPlayer startTurn: map.
!

nextPlayer
	| index |
	index := playerPool indexOf: self currentPlayer.
	^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]
!

nextTurn
	self currentPlayer endTurn: map.
	self gameContext nextTurn: self nextPlayer.
	self currentPlayer startTurn: map
! !

!CWGame methodsFor: 'initialize-release'!

endGameEvent: ev
	self announcer
		on: CWEndGameEvent
		do: [ self announcer reset. 
			ev endGame.
			map removeSelection.
			map desactivateMonsters.
			map clean.
			[ map clean ] valueWithTimeout: 500.
			endGameBlock value: (playerPool select: [ :each | each hasLost ]) ].
!

initialize
	super initialize.
	context := CWGameContext new.
!

initializeAI: eventDispatcher
	playerPool do: [ :player |
		player eventDispatcher: eventDispatcher ]
!

initializeEventHandling
	self announcer
		on: CWGameStart
		do: [ self startGame ].
	self announcer
		on: CWNextTurnEvent
		do: [ self nextTurn ].
!

initializePlayerMonsters
	playerPool do: [ :player |
		player addMonstersToMap: map ].
!

initializePlayers
	"To check and refactor"

	playerPool withIndexDo: [ :player :i |
		player side: i - 1.5 * 2. "works only for 2 players. Enough for now"
		player initializeWithMap: map.
		(player isKindOf: CWAI) ifTrue: [ player gameContext: self gameContext ] ]
!

initializeWithSettings: gameSettings
	map := CWMap newWithMapIndex: gameSettings mapNumber.
	CWFightMenu new.
	endGameBlock := gameSettings afterGameBlock.
	playerPool := gameSettings players.
	self initializePlayers.
	self initializeEventHandling.
!

startGame
	| eventDispatcher |
	self initializePlayerMonsters.
	map initializeDrawer.
	eventDispatcher := CWEventDispatcher new initializeForMap: map game: self.
	self initializeAI: eventDispatcher.
	self endGameEvent: eventDispatcher.
	map updateMap.
	map removeSelection. "initialize got to invis image"
	self firstTurn.
! !

Object subclass: #CWGameContext
	instanceVariableNames: 'currentPlayer currentCell relatedCell'
	package: 'Easnoth-GameAndPlayers'!
!CWGameContext commentStamp!
Represents the current context of the game, typcally, which player is playing and what monster is currently about to attack / move!

!CWGameContext methodsFor: 'accessing'!

currentCell
	^ currentCell
!

currentCell: aCurrentCell 
	currentCell := aCurrentCell
!

currentMonster
	^ currentCell monster
!

currentMonster: aMonster
	currentCell := aMonster parent
!

currentPlayer
	^ currentPlayer
!

currentPlayerSide
	^ currentPlayer side
!

relatedCell
	^ relatedCell
!

relatedCell: aCell
	relatedCell := aCell
! !

!CWGameContext methodsFor: 'game logic'!

nextTurn: nextPlayer
	currentPlayer := nextPlayer.
	currentCell := nil
!

restartTurn
	| map |
	map := self currentCell root.
	self currentPlayer
		endTurn: map;
		startTurn: map.
!

shouldRestartTurn
	self currentCell ifNotNil: [ self currentMonster ifNotNil: [ :m | ^ m hasPlayed not ] ].
	^ false
! !

Object subclass: #CWPlayer
	instanceVariableNames: 'side team'
	package: 'Easnoth-GameAndPlayers'!
!CWPlayer commentStamp!
I represent a player playing Easnoth.!

!CWPlayer methodsFor: 'accessing'!

monstersPositionArray
	"hack for now. should be stored in database"
	
	^ self side = 1
		ifTrue: [ { 3@8 . 4@8 . 5@8 . 1@7. 2@7 . 2@8 . 1@4 . 1@5 . 1@6 } ]
		ifFalse: [ { 6@1 . 7@1 . 8@1. 9@1 . 9@2 . 10@2 . 10@5 . 10@4 . 10@3} ]
!

side
	^ side
!

side: int
	side := int
!

team
	^ team
!

team: aTeam
	team := aTeam
! !

!CWPlayer methodsFor: 'events'!

announce: event
	self announcer announce: event
!

announcer
	^ CWEasnothAnnouncer current
!

endGame
	window alert: 'Someone just won. Guess who ? loser : ' , self endGamePrintString.
	self announce: CWEndGameEvent new.
! !

!CWPlayer methodsFor: 'factory'!

newCavalry: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWCavalryStrategy
!

newCavalryHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWCavalryStrategy
!

newMonster: jsonStat heros: strat type: aType
		"creates a new monster with self as player"
		^ CWMonster new initializeWithStat: jsonStat army: self team player: self heros: strat type: aType
!

newRange: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWRangeStrategy
!

newRangeHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWRangeStrategy
!

newTroop: jsonStat
		^ self newMonster: jsonStat heros: CWUnitStrategy type: CWTroopStrategy
!

newTroopHeros: jsonStat
		^ self newMonster: jsonStat heros: CWHerosStrategy type: CWTroopStrategy
! !

!CWPlayer methodsFor: 'game logic'!

endTurn: map
	map desactivateMonsters.
	map removeSelection.
!

hasLost
	^ self team isEmpty
!

removeMonster: aMonster
	self team remove: aMonster.
	aMonster player: nil.
	self hasLost
		ifTrue: [ self endGame ]
!

startTurn: map
	self hasLost ifTrue: [ ^ self endGame ].
	self team do: [ :each |
		each readyToBePicked.
		each parent showActiveMonsters ].
! !

!CWPlayer methodsFor: 'initialize-release'!

addMonstersToMap: aMap
	"hack for now"
	
	| positions |
	positions := self monstersPositionArray.
	"((aMap childAt: positions first x) childAt: positions first y) addMonster: (team at: 1) "
	positions withIndexDo: [ :point :n |
		((aMap childAt: point x) childAt: point y) addMonster: (team at: n) ].
!

initializeWithMap: aMap
	"get the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the players"
	
	self announce: CWWaitForObject new.
	
	jQuery 
		getJSON: 'ressources/json/armies/', self team, '.json' 
		onSuccess: [:data |
			self initializeWithMap: aMap army: data.
			self announce: CWObjectLoaded new]
!

initializeWithMap: aMap army: data
		"initialize the monsters of the player. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player"
		| monsters |
		monsters := Array new: 9.
		monsters at: 7 put: (self newTroop: data troop).
		monsters at: 8 put: (self newTroopHeros: data troopHeros).
		monsters at: 9 put: (self newTroop: data troop).
		monsters at: 4 put: (self newRange: data range).
		monsters at: 5 put: (self newRangeHeros: data rangeHeros).
		monsters at: 6 put: (self newRange: data range).
		monsters at: 1 put: (self newCavalry: data cavalry).
		monsters at: 2 put: (self newCavalryHeros: data cavalryHeros).
		monsters at: 3 put: (self newCavalry: data cavalry).
		team := monsters.
! !

!CWPlayer methodsFor: 'printing'!

endGamePrintString
	self subclassResponsibility
!

printOn: aStream
	aStream 
		nextPutAll: self class name;
		nextPutAll: '(';
		nextPutAll: side printString;
		nextPutAll: '-';
		nextPutAll: team printString;
		nextPutAll: ')'
! !

CWPlayer subclass: #CWAI
	instanceVariableNames: 'gameContext eventDispatcher'
	package: 'Easnoth-GameAndPlayers'!

!CWAI methodsFor: 'accessing'!

eventDispatcher
	^ eventDispatcher
!

eventDispatcher: ev
	eventDispatcher := ev
!

gameContext
	^ gameContext
!

gameContext: aCtx
	gameContext := aCtx
! !

!CWAI methodsFor: 'game logic'!

endGamePrintString
	^ 'Artificial Intelligence player'
!

endTurn: aMap
	super endTurn: aMap.
	self eventDispatcher resume
!

startTurn: aMap
	self eventDispatcher suspend.
	gameContext relatedCell: nil.
	super startTurn: aMap
! !

CWAI subclass: #CWAggressWeakestAI
	instanceVariableNames: 'monsterToPlay cellToTarget'
	package: 'Easnoth-GameAndPlayers'!
!CWAggressWeakestAI commentStamp!
For each move, I calcul a score which correspond to :
- how many damage the attacking monster will do (depends on number of dices + attack percentage )
- how many hp left have the foe ( I try to attack the weakest foe)
 Then I execute the move that has the highest score.
 
 If I cannot attack, I just do some random move.!

!CWAggressWeakestAI methodsFor: 'accessing'!

time
	"time for user to see what AI is doing"
	^ 500
! !

!CWAggressWeakestAI methodsFor: 'game logic'!

calculBestMove
	"Calcul the best move for the AI player. see class comment for details" 

	| score bestScore |
	bestScore := 9999 negated.
	self team do: [ :monster |
		monster currentMove: monster move.
		monster attackableNeighbours do: [ :target |
			score := (monster attackPotentialFor: target monster) - target monster defensePotential. 
			score > bestScore ifTrue: [ 
				bestScore := score.
				monsterToPlay := monster.
				cellToTarget := target ] ].
		monster currentMove: 0. ]
!

checkForNextTurn: monster
	"After the monster has played, either the game has automatically triggered the next turn event (and then set the current monster to inactive state), or the AI player needs to do it manually"

	monster isInactive 
		ifFalse: [ self announce: CWNextTurnEvent new ]
!

executeAttack
	| relatedTargetCell duration |
	relatedTargetCell := monsterToPlay cellToMoveBeforeAttack: cellToTarget context: self gameContext.
	duration := (monsterToPlay pathTo: relatedTargetCell) size - 1 * 300.
	cellToTarget mouseClick: self gameContext. 
	[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.
!

executeBestMove
	"Assumes that the bestMove instance variable is now set to an Array(a Monster to play . aCell to move / attack). Executes this best move"

	| duration relatedTargetCell hasAttack |
	monsterToPlay parent mouseClick: self gameContext.
	cellToTarget ifNil: [1halt].
	[ 
	cellToTarget hasMonster 
			ifTrue: [ self executeAttack ]
			ifFalse: [ self executeMove ].
	] valueWithTimeout: self time.
!

executeMove
	| duration |
	duration := (monsterToPlay pathTo: cellToTarget) size - 1 * 300.
	cellToTarget mouseClick: self gameContext. 
	[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + self time.
!

randomMove
	"Assumes that no monster can attack. Set bestMove to some random move of some random monster"
	| cellsToGo |
	monsterToPlay := self team atRandom.
	
	monsterToPlay currentMove: monsterToPlay move.
	cellsToGo := monsterToPlay movableNeighbours.
	monsterToPlay currentMove: 0.
	
	cellsToGo ifEmpty: [ ^ self checkForNextTurn: monsterToPlay ]. "Case where the monster cannot move (surrounded by allies)"
	cellToTarget := cellsToGo atRandom.
!

reinitialize
	monsterToPlay := nil.
	cellToTarget := nil.
!

startTurn: map
	self team isEmpty ifTrue: [^ self].
	super startTurn: map.
	[
		self reinitialize.
		self calculBestMove.
		monsterToPlay ifNil: [ self randomMove ].
		self executeBestMove
	] valueWithTimeout: self time
! !

CWPlayer subclass: #CWHuman
	instanceVariableNames: ''
	package: 'Easnoth-GameAndPlayers'!

!CWHuman methodsFor: 'accessing'!

endGamePrintString
	^ 'Human player'
!

eventDispatcher: anObject
	"not used for humans"
! !

!SequenceableCollection methodsFor: '*Easnoth-GameAndPlayers'!

at: index ifPresent: aBlock
	< if((1 < index) || (index < self.length)) {return aBlock(self[index - 1])}; >
!

at: index ifPresent: aBlock ifAbsent: anotherBlock

	^(index <= self size and: [ index > 0 ])
		ifTrue: [ aBlock value: (self at: index) ]
		ifFalse: [ anotherBlock value ]
! !

!Array methodsFor: '*Easnoth-GameAndPlayers'!

reset
	<self.length = 0;>
! !

!String methodsFor: '*Easnoth-GameAndPlayers'!

upFirstLetter
	^ self first asUppercase, self allButFirst
! !

!Set methodsFor: '*Easnoth-GameAndPlayers'!

remove: anObject ifAbsent: aBlock
	elements remove: anObject ifAbsent: aBlock
! !

!Number methodsFor: '*Easnoth-GameAndPlayers'!

truncated
	<return self | 0>
! !

