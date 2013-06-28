Smalltalk current createPackage: 'Easnoth-MonsterStrategies'!
Object subclass: #CWStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!
!CWStrategy commentStamp!
Just here for the sngleton pattern :)!

CWStrategy class instanceVariableNames: 'default'!

!CWStrategy class methodsFor: 'instance creation'!

default
	^ default ifNil: [ default := self new ]
! !

CWStrategy subclass: #CWMonsterStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!
!CWMonsterStrategy commentStamp!
Implements different strategies if the monster is a heros or a unit!

!CWMonsterStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	self subclassResponsibility
!

defaultHP
	self subclassResponsibility
!

isHeros
	self subclassResponsibility
!

key
	self subclassResponsibility
!

updateUI: aMonster
	self subclassResponsibility
! !

CWMonsterStrategy subclass: #CWHerosStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!

!CWHerosStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	^ aVisitor visitHeros: aMonster
!

defaultHP
	^ 2
!

isHeros
	^ true
!

key
	^ '-heros'
!

updateUI: heros
	(heros side negative) 
		ifTrue: [ heros reverseDisplay: heros cood: 87@28 ] 
		ifFalse: [ heros display: heros cood: 15@28 ]
! !

CWMonsterStrategy subclass: #CWUnitStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!

!CWUnitStrategy methodsFor: 'monster strategy API'!

accept: aVisitor for: aMonster
	^ aVisitor visitUnit: aMonster
!

defaultHP
	^ 4
!

isHeros
	^ false
!

key
	^ ''
!

updateUI: aUnit
	| xArray yArray |
	
	xArray := #(9 37 -11 17).
	yArray := #(15 23 26 33).

	(1 to: aUnit hp) do: [ :i |
		(aUnit side negative) 
			ifTrue: [ aUnit reverseDisplay: aUnit cood: 72 + (xArray at: i)@(yArray at: i) ] 
			ifFalse: [ aUnit display: aUnit cood: (xArray at: i)@(yArray at: i) ]
	]
! !

CWStrategy subclass: #CWMonsterTypeStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!
!CWMonsterTypeStrategy commentStamp!
Implements different strategies if the heros is archer, troop or cavalry!

!CWMonsterTypeStrategy methodsFor: 'type strategy API'!

isRanged
	^ false
!

key
	self subclassResponsibility
!

monster: aMonster attackNeighbour: anotherMonster inContext: gameContext
	self subclassResponsibility
!

monster: targetMonster isAttackedByCavalry: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSCavalry negated
!

monster: targetMonster isAttackedByRange: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSRange negated
!

monster: targetMonster isAttackedByTroop: aMonster inContext: gameContext
	^ aMonster attack: targetMonster inContext: gameContext bonus: self bonusVSTroop negated
! !

CWMonsterTypeStrategy subclass: #CWCavalryStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!

!CWCavalryStrategy methodsFor: 'type strategy API'!

bonusVS: target
	^ target bonusVSCavalry negated
!

bonusVSCavalry
	^ 0
!

bonusVSRange
	^ 1
!

bonusVSTroop
	^ -1
!

key
	^ 'cavalry'
!

monster: aCavalry attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByCavalry: aCavalry inContext: gameContext
! !

CWMonsterTypeStrategy subclass: #CWRangeStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!

!CWRangeStrategy methodsFor: 'type strategy API'!

bonusVS: target
	^ target bonusVSRange negated
!

bonusVSCavalry
	^ -1
!

bonusVSRange
	^ 0
!

bonusVSTroop
	^ 1
!

isRanged
	^ true
!

key
	^ 'range'
!

monster: aRange attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByRange: aRange inContext: gameContext
! !

CWMonsterTypeStrategy subclass: #CWTroopStrategy
	instanceVariableNames: ''
	package: 'Easnoth-MonsterStrategies'!

!CWTroopStrategy methodsFor: 'type strategy API'!

bonusVS: target
	^ target bonusVSTroop negated
!

bonusVSCavalry
	^ 1
!

bonusVSRange
	^ -1
!

bonusVSTroop
	^ 0
!

key
	^ 'troop'
!

monster: aTroop attackNeighbour: anotherMonster inContext: gameContext
	^ anotherMonster isAttackedByTroop: aTroop inContext: gameContext
! !

