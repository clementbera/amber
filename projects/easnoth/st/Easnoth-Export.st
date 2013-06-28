Smalltalk current createPackage: 'Easnoth-Export'!
Object subclass: #CWVisitor
	instanceVariableNames: ''
	package: 'Easnoth-Export'!
!CWVisitor commentStamp!
I am an abstract visitor that can visit the whole tree of map model objects.!

!CWVisitor methodsFor: 'visiting'!

visitCell: aCell
	self subclassResponsibility
!

visitGameOverTile: aGameOverTile
	self subclassResponsibility
!

visitHeros: aHeros
	self subclassResponsibility
!

visitMap: aMap
	self subclassResponsibility
!

visitOverTile: anOverTile
	self subclassResponsibility
!

visitRow: aRow
	self subclassResponsibility
!

visitTile: aTile
	self subclassResponsibility
!

visitUnit: aUnit
	self subclassResponsibility
! !

!CWVisitor methodsFor: 'visiting - public'!

visitChildTrees: aBusinessObject
	aBusinessObject children do: [ :each |
		self visitTree: each ]
!

visitChildren: aBusinessObject
	aBusinessObject children do: [ :each |
		each accept: self ]
!

visitTree: aComponent
	aComponent accept: self.
	self visitChildTrees: aComponent.
! !

CWVisitor class instanceVariableNames: 'singleton'!

CWVisitor subclass: #CWJsonWriter
	instanceVariableNames: 'stream indentLevel otNumber'
	package: 'Easnoth-Export'!
!CWJsonWriter commentStamp!
I can export the current map to json data fromat.

CWJsonWriter new exportMap: CWMap default!

!CWJsonWriter methodsFor: 'helper'!

extractKeyFrom: url
	| imageName |
	imageName := (url tokenize: '/') last.
	^ (imageName tokenize: '.') first
! !

!CWJsonWriter methodsFor: 'initialize-release'!

initialize
	super initialize.
	stream := StringStream on: ''.
	indentLevel := 0.
! !

!CWJsonWriter methodsFor: 'public'!

exportMap: aMap
	"returns the string to write down in the json file"

	self visitMap: aMap.
	^ stream collection asString
! !

!CWJsonWriter methodsFor: 'stream API'!

cr
	stream cr.
	1 to: indentLevel do: [ :each | stream tab ]
!

crIndentDecr
	self decreaseIndent.
	self cr.
!

crIndentIncr
	self increaseIndent.
	self cr.
!

decreaseIndent
	indentLevel := indentLevel - 1.
	indentLevel < 0 ifTrue: [ self error: 'indentation problem' ]
!

increaseIndent
	indentLevel := indentLevel + 1
!

nextPutAll: aString
	stream nextPutAll: aString
!

space
	stream space
! !

!CWJsonWriter methodsFor: 'stream HL API'!

commaCr
	self 
		nextPutAll: ',';
		cr
!

endArray
	self 
		crIndentDecr;
		nextPutAll: ']'
!

endObject
	self 
		crIndentDecr;
		nextPutAll: '}'.
!

objectFieldName: aName intValue: anInt
	" ""aName"": anInt "

	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": ';
		nextPutAll: anInt printString
!

objectFieldName: aName stringValue: aString
	" ""aName"": ""aString"" "

	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": "';
		nextPutAll: aString;
		nextPutAll: '"'
!

startArrayNamed: aString
	self 
		nextPutAll: '"';
		nextPutAll: aString;
		nextPutAll: '": [';
		crIndentIncr
!

startObject
	self 
		nextPutAll: '{';
		crIndentIncr
!

startObjectNamed: aName
	self 
		nextPutAll: '"';
		nextPutAll: aName;
		nextPutAll: '": ';
		startObject
! !

!CWJsonWriter methodsFor: 'visiting'!

visitCell: aCell
	otNumber := 0.
	self 
		startObject;
		visitChildren: aCell;
		endObject.
!

visitChildren: aBusinessObject
	aBusinessObject children withIndexDo: [ :child :i |
			child accept: self.
			i = aBusinessObject children size 
				ifFalse: [ self commaCr ] ].
!

visitGameOverTile: aGameOverTile
	"do nothing"
!

visitHeros: aHeros
	self
		startObjectNamed: 'heros';
		visitMonster: aHeros
!

visitMap: aMap
	self 
		startObject;
		objectFieldName: 'name' stringValue: 'foo';
		commaCr;
		startArrayNamed: 'row';
		visitChildren: aMap;
		endArray;
		endObject.
!

visitMonster: aMonster
	self
		objectFieldName: 'name' stringValue: (self extractKeyFrom: aMonster image src);
		commaCr;
		objectFieldName: 'side' intValue: aMonster side;
		endObject
!

visitOverTile: anOverTile
	otNumber := otNumber + 1.
	self objectFieldName: 'overtile', otNumber stringValue: (self extractKeyFrom: anOverTile image src).
!

visitRow: aRow
	self 
		startObject;
		startArrayNamed: 'cells';
		visitChildren: aRow;
		endArray;
		endObject.
!

visitTile: aTile
	self objectFieldName: 'tile' stringValue: (self extractKeyFrom: aTile image src)
!

visitUnit: aUnit
	self
		startObjectNamed: 'unit';
		visitMonster: aUnit
! !

CWJsonWriter subclass: #CWNoMonsterWriter
	instanceVariableNames: ''
	package: 'Easnoth-Export'!
!CWNoMonsterWriter commentStamp!
This one may not work... Use superclass if problem.!

!CWNoMonsterWriter methodsFor: 'not yet classified'!

visitChildren: aBusinessObject
	| newSize |
	newSize := aBusinessObject children size.
	(aBusinessObject isKindOf: CWCell) ifTrue: [ 
		newSize := aBusinessObject background size ].
	aBusinessObject children withIndexDo: [ :child :i |
			child accept: self.
			i = newSize
				ifFalse: [ self commaCr ] ].
!

visitHeros: heros
	"do nothing"
!

visitUnit: unit
	"do nothing"
! !

