smalltalk.addPackage('Easnoth-Export');
smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-Export');
smalltalk.CWVisitor.comment="I am an abstract visitor that can visit the whole tree of map model objects."
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWVisitor)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildTrees:",
category: 'visiting - public',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._visitTree_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
args: ["aBusinessObject"],
source: "visitChildTrees: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09self visitTree: each ]",
messageSends: ["do:", "visitTree:", "children"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
category: 'visiting - public',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children do: [ :each |\x0a\x09\x09each accept: self ]",
messageSends: ["do:", "accept:", "children"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWVisitor)})},
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWVisitor)})},
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWVisitor)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWVisitor)})},
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWVisitor)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWVisitor)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
category: 'visiting - public',
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aComponent)._accept_(self);
_st(self)._visitChildTrees_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aComponent:aComponent},smalltalk.CWVisitor)})},
args: ["aComponent"],
source: "visitTree: aComponent\x0a\x09aComponent accept: self.\x0a\x09self visitChildTrees: aComponent.",
messageSends: ["accept:", "visitChildTrees:"],
referencedClasses: []
}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
category: 'visiting',
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWVisitor)})},
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-Export');
smalltalk.CWJsonWriter.comment="I can export the current map to json data fromat.\x0a\x0aCWJsonWriter new exportMap: CWMap default"
smalltalk.addMethod(
smalltalk.method({
selector: "commaCr",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(",");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"commaCr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "commaCr\x0a\x09self \x0a\x09\x09nextPutAll: ',';\x0a\x09\x09cr",
messageSends: ["nextPutAll:", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._cr();
_st((1))._to_do_(self["@indentLevel"],(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._tab();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "cr\x0a\x09stream cr.\x0a\x091 to: indentLevel do: [ :each | stream tab ]",
messageSends: ["cr", "to:do:", "tab"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentDecr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._decreaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentDecr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "crIndentDecr\x0a\x09self decreaseIndent.\x0a\x09self cr.",
messageSends: ["decreaseIndent", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentIncr",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentIncr",{},smalltalk.CWJsonWriter)})},
args: [],
source: "crIndentIncr\x0a\x09self increaseIndent.\x0a\x09self cr.",
messageSends: ["increaseIndent", "cr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseIndent",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@indentLevel"]=_st(self["@indentLevel"]).__minus((1));
$1=_st(self["@indentLevel"]).__lt((0));
if(smalltalk.assert($1)){
_st(self)._error_("indentation problem");
};
return self}, function($ctx1) {$ctx1.fill(self,"decreaseIndent",{},smalltalk.CWJsonWriter)})},
args: [],
source: "decreaseIndent\x0a\x09indentLevel := indentLevel - 1.\x0a\x09indentLevel < 0 ifTrue: [ self error: 'indentation problem' ]",
messageSends: ["-", "ifTrue:", "error:", "<"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endArray",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"endArray",{},smalltalk.CWJsonWriter)})},
args: [],
source: "endArray\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: ']'",
messageSends: ["crIndentDecr", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endObject",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"endObject",{},smalltalk.CWJsonWriter)})},
args: [],
source: "endObject\x0a\x09self \x0a\x09\x09crIndentDecr;\x0a\x09\x09nextPutAll: '}'.",
messageSends: ["crIndentDecr", "nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMap:",
category: 'public',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._visitMap_(aMap);
$1=_st(_st(self["@stream"])._collection())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
args: ["aMap"],
source: "exportMap: aMap\x0a\x09\x22returns the string to write down in the json file\x22\x0a\x0a\x09self visitMap: aMap.\x0a\x09^ stream collection asString",
messageSends: ["visitMap:", "asString", "collection"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "extractKeyFrom:",
category: 'helper',
fn: function (url){
var self=this;
var imageName;
return smalltalk.withContext(function($ctx1) { 
var $1;
imageName=_st(_st(url)._tokenize_("/"))._last();
$1=_st(_st(imageName)._tokenize_("."))._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractKeyFrom:",{url:url,imageName:imageName},smalltalk.CWJsonWriter)})},
args: ["url"],
source: "extractKeyFrom: url\x0a\x09| imageName |\x0a\x09imageName := (url tokenize: '/') last.\x0a\x09^ (imageName tokenize: '.') first",
messageSends: ["last", "tokenize:", "first"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseIndent",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@indentLevel"]=_st(self["@indentLevel"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndent",{},smalltalk.CWJsonWriter)})},
args: [],
source: "increaseIndent\x0a\x09indentLevel := indentLevel + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st($StringStream())._on_("");
self["@indentLevel"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWJsonWriter)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09stream := StringStream on: ''.\x0a\x09indentLevel := 0.",
messageSends: ["initialize", "on:"],
referencedClasses: ["StringStream"]
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
category: 'stream API',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.CWJsonWriter)})},
args: ["aString"],
source: "nextPutAll: aString\x0a\x09stream nextPutAll: aString",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:intValue:",
category: 'stream HL API',
fn: function (aName,anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: ");
$2=_st($1)._nextPutAll_(_st(anInt)._printString());
return self}, function($ctx1) {$ctx1.fill(self,"objectFieldName:intValue:",{aName:aName,anInt:anInt},smalltalk.CWJsonWriter)})},
args: ["aName", "anInt"],
source: "objectFieldName: aName intValue: anInt\x0a\x09\x22 \x22\x22aName\x22\x22: anInt \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09nextPutAll: anInt printString",
messageSends: ["nextPutAll:", "printString"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:stringValue:",
category: 'stream HL API',
fn: function (aName,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: \x22");
_st($1)._nextPutAll_(aString);
$2=_st($1)._nextPutAll_("\x22");
return self}, function($ctx1) {$ctx1.fill(self,"objectFieldName:stringValue:",{aName:aName,aString:aString},smalltalk.CWJsonWriter)})},
args: ["aName", "aString"],
source: "objectFieldName: aName stringValue: aString\x0a\x09\x22 \x22\x22aName\x22\x22: \x22\x22aString\x22\x22 \x22\x0a\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: \x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
category: 'stream API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._space();
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.CWJsonWriter)})},
args: [],
source: "space\x0a\x09stream space",
messageSends: ["space"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startArrayNamed:",
category: 'stream HL API',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aString);
_st($1)._nextPutAll_("\x22: [");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startArrayNamed:",{aString:aString},smalltalk.CWJsonWriter)})},
args: ["aString"],
source: "startArrayNamed: aString\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aString;\x0a\x09\x09nextPutAll: '\x22: [';\x0a\x09\x09crIndentIncr",
messageSends: ["nextPutAll:", "crIndentIncr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObject",
category: 'stream HL API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("{");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startObject",{},smalltalk.CWJsonWriter)})},
args: [],
source: "startObject\x0a\x09self \x0a\x09\x09nextPutAll: '{';\x0a\x09\x09crIndentIncr",
messageSends: ["nextPutAll:", "crIndentIncr"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObjectNamed:",
category: 'stream HL API',
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("\x22");
_st($1)._nextPutAll_(aName);
_st($1)._nextPutAll_("\x22: ");
$2=_st($1)._startObject();
return self}, function($ctx1) {$ctx1.fill(self,"startObjectNamed:",{aName:aName},smalltalk.CWJsonWriter)})},
args: ["aName"],
source: "startObjectNamed: aName\x0a\x09self \x0a\x09\x09nextPutAll: '\x22';\x0a\x09\x09nextPutAll: aName;\x0a\x09\x09nextPutAll: '\x22: ';\x0a\x09\x09startObject",
messageSends: ["nextPutAll:", "startObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@otNumber"]=(0);
$1=self;
_st($1)._startObject();
_st($1)._visitChildren_(aCell);
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWJsonWriter)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09otNumber := 0.\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09visitChildren: aCell;\x0a\x09\x09endObject.",
messageSends: ["startObject", "visitChildren:", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
category: 'visiting',
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(aBusinessObject)._children())._withIndexDo_((function(child,i){
return smalltalk.withContext(function($ctx2) {
_st(child)._accept_(self);
$1=_st(i).__eq(_st(_st(aBusinessObject)._children())._size());
if(! smalltalk.assert($1)){
return _st(self)._commaCr();
};
}, function($ctx2) {$ctx2.fillBlock({child:child,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWJsonWriter)})},
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09aBusinessObject children withIndexDo: [ :child :i |\x0a\x09\x09\x09child accept: self.\x0a\x09\x09\x09i = aBusinessObject children size \x0a\x09\x09\x09\x09ifFalse: [ self commaCr ] ].",
messageSends: ["withIndexDo:", "accept:", "ifFalse:", "commaCr", "=", "size", "children"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWJsonWriter)})},
args: ["aGameOverTile"],
source: "visitGameOverTile: aGameOverTile\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("heros");
$2=_st($1)._visitMonster_(aHeros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWJsonWriter)})},
args: ["aHeros"],
source: "visitHeros: aHeros\x0a\x09self\x0a\x09\x09startObjectNamed: 'heros';\x0a\x09\x09visitMonster: aHeros",
messageSends: ["startObjectNamed:", "visitMonster:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObject();
_st($1)._objectFieldName_stringValue_("name","foo");
_st($1)._commaCr();
_st($1)._startArrayNamed_("row");
_st($1)._visitChildren_(aMap);
_st($1)._endArray();
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09objectFieldName: 'name' stringValue: 'foo';\x0a\x09\x09commaCr;\x0a\x09\x09startArrayNamed: 'row';\x0a\x09\x09visitChildren: aMap;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
messageSends: ["startObject", "objectFieldName:stringValue:", "commaCr", "startArrayNamed:", "visitChildren:", "endArray", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
category: 'visiting',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._objectFieldName_stringValue_("name",_st(self)._extractKeyFrom_(_st(_st(aMonster)._image())._src()));
_st($1)._commaCr();
_st($1)._objectFieldName_intValue_("side",_st(aMonster)._side());
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitMonster:",{aMonster:aMonster},smalltalk.CWJsonWriter)})},
args: ["aMonster"],
source: "visitMonster: aMonster\x0a\x09self\x0a\x09\x09objectFieldName: 'name' stringValue: (self extractKeyFrom: aMonster image src);\x0a\x09\x09commaCr;\x0a\x09\x09objectFieldName: 'side' intValue: aMonster side;\x0a\x09\x09endObject",
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image", "commaCr", "objectFieldName:intValue:", "side", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@otNumber"]=_st(self["@otNumber"]).__plus((1));
_st(self)._objectFieldName_stringValue_(_st("overtile").__comma(self["@otNumber"]),_st(self)._extractKeyFrom_(_st(_st(anOverTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWJsonWriter)})},
args: ["anOverTile"],
source: "visitOverTile: anOverTile\x0a\x09otNumber := otNumber + 1.\x0a\x09self objectFieldName: 'overtile', otNumber stringValue: (self extractKeyFrom: anOverTile image src).",
messageSends: ["+", "objectFieldName:stringValue:", ",", "extractKeyFrom:", "src", "image"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObject();
_st($1)._startArrayNamed_("cells");
_st($1)._visitChildren_(aRow);
_st($1)._endArray();
$2=_st($1)._endObject();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWJsonWriter)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self \x0a\x09\x09startObject;\x0a\x09\x09startArrayNamed: 'cells';\x0a\x09\x09visitChildren: aRow;\x0a\x09\x09endArray;\x0a\x09\x09endObject.",
messageSends: ["startObject", "startArrayNamed:", "visitChildren:", "endArray", "endObject"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._objectFieldName_stringValue_("tile",_st(self)._extractKeyFrom_(_st(_st(aTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWJsonWriter)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self objectFieldName: 'tile' stringValue: (self extractKeyFrom: aTile image src)",
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
category: 'visiting',
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("unit");
$2=_st($1)._visitMonster_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWJsonWriter)})},
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09self\x0a\x09\x09startObjectNamed: 'unit';\x0a\x09\x09visitMonster: aUnit",
messageSends: ["startObjectNamed:", "visitMonster:"],
referencedClasses: []
}),
smalltalk.CWJsonWriter);



smalltalk.addClass('CWNoMonsterWriter', smalltalk.CWJsonWriter, [], 'Easnoth-Export');
smalltalk.CWNoMonsterWriter.comment="This one may not work... Use superclass if problem."
smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
category: 'not yet classified',
fn: function (aBusinessObject){
var self=this;
var newSize;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
newSize=_st(_st(aBusinessObject)._children())._size();
$1=_st(aBusinessObject)._isKindOf_($CWCell());
if(smalltalk.assert($1)){
newSize=_st(_st(aBusinessObject)._background())._size();
newSize;
};
_st(_st(aBusinessObject)._children())._withIndexDo_((function(child,i){
return smalltalk.withContext(function($ctx2) {
_st(child)._accept_(self);
$2=_st(i).__eq(newSize);
if(! smalltalk.assert($2)){
return _st(self)._commaCr();
};
}, function($ctx2) {$ctx2.fillBlock({child:child,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject,newSize:newSize},smalltalk.CWNoMonsterWriter)})},
args: ["aBusinessObject"],
source: "visitChildren: aBusinessObject\x0a\x09| newSize |\x0a\x09newSize := aBusinessObject children size.\x0a\x09(aBusinessObject isKindOf: CWCell) ifTrue: [ \x0a\x09\x09newSize := aBusinessObject background size ].\x0a\x09aBusinessObject children withIndexDo: [ :child :i |\x0a\x09\x09\x09child accept: self.\x0a\x09\x09\x09i = newSize\x0a\x09\x09\x09\x09ifFalse: [ self commaCr ] ].",
messageSends: ["size", "children", "ifTrue:", "background", "isKindOf:", "withIndexDo:", "accept:", "ifFalse:", "commaCr", "="],
referencedClasses: ["CWCell"]
}),
smalltalk.CWNoMonsterWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'not yet classified',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWNoMonsterWriter)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNoMonsterWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
category: 'not yet classified',
fn: function (unit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{unit:unit},smalltalk.CWNoMonsterWriter)})},
args: ["unit"],
source: "visitUnit: unit\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWNoMonsterWriter);



