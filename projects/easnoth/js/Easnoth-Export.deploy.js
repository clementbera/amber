smalltalk.addPackage('Easnoth-Export');
smalltalk.addClass('CWVisitor', smalltalk.Object, [], 'Easnoth-Export');
smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildTrees:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._visitTree_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildTrees:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
messageSends: ["do:", "visitTree:", "children"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
fn: function (aBusinessObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aBusinessObject)._children())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._accept_(self);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"visitChildren:",{aBusinessObject:aBusinessObject},smalltalk.CWVisitor)})},
messageSends: ["do:", "accept:", "children"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTree:",
fn: function (aComponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aComponent)._accept_(self);
_st(self)._visitChildTrees_(aComponent);
return self}, function($ctx1) {$ctx1.fill(self,"visitTree:",{aComponent:aComponent},smalltalk.CWVisitor)})},
messageSends: ["accept:", "visitChildTrees:"]}),
smalltalk.CWVisitor);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWVisitor)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWVisitor);


smalltalk.CWVisitor.klass.iVarNames = ['singleton'];

smalltalk.addClass('CWJsonWriter', smalltalk.CWVisitor, ['stream', 'indentLevel', 'otNumber'], 'Easnoth-Export');
smalltalk.addMethod(
smalltalk.method({
selector: "commaCr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_(",");
$2=_st($1)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"commaCr",{},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._cr();
_st((1))._to_do_(self["@indentLevel"],(function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self["@stream"])._tab();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"cr",{},smalltalk.CWJsonWriter)})},
messageSends: ["cr", "to:do:", "tab"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentDecr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._decreaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentDecr",{},smalltalk.CWJsonWriter)})},
messageSends: ["decreaseIndent", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "crIndentIncr",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseIndent();
_st(self)._cr();
return self}, function($ctx1) {$ctx1.fill(self,"crIndentIncr",{},smalltalk.CWJsonWriter)})},
messageSends: ["increaseIndent", "cr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseIndent",
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
messageSends: ["-", "ifTrue:", "error:", "<"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("]");
return self}, function($ctx1) {$ctx1.fill(self,"endArray",{},smalltalk.CWJsonWriter)})},
messageSends: ["crIndentDecr", "nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "endObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._crIndentDecr();
$2=_st($1)._nextPutAll_("}");
return self}, function($ctx1) {$ctx1.fill(self,"endObject",{},smalltalk.CWJsonWriter)})},
messageSends: ["crIndentDecr", "nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "exportMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._visitMap_(aMap);
$1=_st(_st(self["@stream"])._collection())._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"exportMap:",{aMap:aMap},smalltalk.CWJsonWriter)})},
messageSends: ["visitMap:", "asString", "collection"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "extractKeyFrom:",
fn: function (url){
var self=this;
var imageName;
return smalltalk.withContext(function($ctx1) { 
var $1;
imageName=_st(_st(url)._tokenize_("/"))._last();
$1=_st(_st(imageName)._tokenize_("."))._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extractKeyFrom:",{url:url,imageName:imageName},smalltalk.CWJsonWriter)})},
messageSends: ["last", "tokenize:", "first"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseIndent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@indentLevel"]=_st(self["@indentLevel"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increaseIndent",{},smalltalk.CWJsonWriter)})},
messageSends: ["+"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $StringStream(){return smalltalk.StringStream||(typeof StringStream=="undefined"?nil:StringStream)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
self["@stream"]=_st($StringStream())._on_("");
self["@indentLevel"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWJsonWriter)})},
messageSends: ["initialize", "on:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPutAll:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._nextPutAll_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"nextPutAll:",{aString:aString},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:intValue:",
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
messageSends: ["nextPutAll:", "printString"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "objectFieldName:stringValue:",
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
messageSends: ["nextPutAll:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "space",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@stream"])._space();
return self}, function($ctx1) {$ctx1.fill(self,"space",{},smalltalk.CWJsonWriter)})},
messageSends: ["space"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startArrayNamed:",
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
messageSends: ["nextPutAll:", "crIndentIncr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObject",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._nextPutAll_("{");
$2=_st($1)._crIndentIncr();
return self}, function($ctx1) {$ctx1.fill(self,"startObject",{},smalltalk.CWJsonWriter)})},
messageSends: ["nextPutAll:", "crIndentIncr"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "startObjectNamed:",
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
messageSends: ["nextPutAll:", "startObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
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
messageSends: ["startObject", "visitChildren:", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
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
messageSends: ["withIndexDo:", "accept:", "ifFalse:", "commaCr", "=", "size", "children"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (aGameOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{aGameOverTile:aGameOverTile},smalltalk.CWJsonWriter)})},
messageSends: []}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (aHeros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("heros");
$2=_st($1)._visitMonster_(aHeros);
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{aHeros:aHeros},smalltalk.CWJsonWriter)})},
messageSends: ["startObjectNamed:", "visitMonster:"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
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
messageSends: ["startObject", "objectFieldName:stringValue:", "commaCr", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMonster:",
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
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image", "commaCr", "objectFieldName:intValue:", "side", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (anOverTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@otNumber"]=_st(self["@otNumber"]).__plus((1));
_st(self)._objectFieldName_stringValue_(_st("overtile").__comma(self["@otNumber"]),_st(self)._extractKeyFrom_(_st(_st(anOverTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{anOverTile:anOverTile},smalltalk.CWJsonWriter)})},
messageSends: ["+", "objectFieldName:stringValue:", ",", "extractKeyFrom:", "src", "image"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
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
messageSends: ["startObject", "startArrayNamed:", "visitChildren:", "endArray", "endObject"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._objectFieldName_stringValue_("tile",_st(self)._extractKeyFrom_(_st(_st(aTile)._image())._src()));
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWJsonWriter)})},
messageSends: ["objectFieldName:stringValue:", "extractKeyFrom:", "src", "image"]}),
smalltalk.CWJsonWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self;
_st($1)._startObjectNamed_("unit");
$2=_st($1)._visitMonster_(aUnit);
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWJsonWriter)})},
messageSends: ["startObjectNamed:", "visitMonster:"]}),
smalltalk.CWJsonWriter);



smalltalk.addClass('CWNoMonsterWriter', smalltalk.CWJsonWriter, [], 'Easnoth-Export');
smalltalk.addMethod(
smalltalk.method({
selector: "visitChildren:",
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
messageSends: ["size", "children", "ifTrue:", "background", "isKindOf:", "withIndexDo:", "accept:", "ifFalse:", "commaCr", "="]}),
smalltalk.CWNoMonsterWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWNoMonsterWriter)})},
messageSends: []}),
smalltalk.CWNoMonsterWriter);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (unit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{unit:unit},smalltalk.CWNoMonsterWriter)})},
messageSends: []}),
smalltalk.CWNoMonsterWriter);



