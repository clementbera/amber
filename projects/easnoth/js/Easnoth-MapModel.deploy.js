smalltalk.addPackage('Easnoth-MapModel');
smalltalk.addClass('CWComponent', smalltalk.Object, ['parent'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComponent)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWComponent)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWComponent)})},
messageSends: ["current"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComponent)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWComponent)})},
messageSends: ["do:", "desactivateMonsters", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._lighten();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWComponent)})},
messageSends: ["do:", "lighten", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWComponent)})},
messageSends: []}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWComponent)})},
messageSends: []}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._prefillCaches();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},smalltalk.CWComponent)})},
messageSends: ["do:", "prefillCaches", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWComponent)})},
messageSends: ["do:", "removeSelection", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWComponent)})},
messageSends: ["root", "parent"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWComponent)})},
messageSends: ["do:", "showActiveMonsters", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._unmark();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWComponent)})},
messageSends: ["do:", "unmark", "children"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWComponent)})},
messageSends: ["updateMap", "root"]}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._updateUI();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWComponent)})},
messageSends: ["do:", "updateUI", "children"]}),
smalltalk.CWComponent);



smalltalk.addClass('CWComposite', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComposite)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CWComposite)})},
messageSends: ["at:", "children"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:ifPresent:",
fn: function (index,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_ifPresent_(index,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:ifPresent:",{index:index,aBlock:aBlock},smalltalk.CWComposite)})},
messageSends: ["at:ifPresent:", "children"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComposite)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWComposite)})},
messageSends: ["parent:", "new"]}),
smalltalk.CWComposite);



smalltalk.addClass('CWCell', smalltalk.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'prevCell', 'mark', 'firstCoods', 'zIndex'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCell_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWCell)})},
messageSends: ["visitCell:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addGreenSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._green();
return self}, function($ctx1) {$ctx1.fill(self,"addGreenSelector",{},smalltalk.CWCell)})},
messageSends: ["green", "gameOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._cell_addMonster_(self,aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},smalltalk.CWCell)})},
messageSends: ["cell:addMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addRedSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._red();
return self}, function($ctx1) {$ctx1.fill(self,"addRedSelector",{},smalltalk.CWCell)})},
messageSends: ["red", "gameOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CWCell)})},
messageSends: ["addSelector:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addWhiteSelector",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._white();
return self}, function($ctx1) {$ctx1.fill(self,"addWhiteSelector",{},smalltalk.CWCell)})},
messageSends: ["white", "gameOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "background",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@background"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._error_("should be initialized");
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"background",{},smalltalk.CWCell)})},
messageSends: ["ifNil:", "error:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAdd:",
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._add_(aBackground);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},smalltalk.CWCell)})},
messageSends: ["add:", "background"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAddAll:",
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._addAll_(aCol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},smalltalk.CWCell)})},
messageSends: ["addAll:", "background"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAttackedBy:",
fn: function (side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._cell_canBeAttackedBy_(self,side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},smalltalk.CWCell)})},
messageSends: ["cell:canBeAttackedBy:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=_st(stateClass)._default();
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWCell)})},
messageSends: ["default"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
var children;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
children=_st($Array())._new();
$1=_st(self)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var var_;
var_=$receiver;
_st(children)._add_(var_);
};
_st(children)._add_(_st(self)._gameOverTile());
$3=children;
_st($3)._addAll_(_st(self)._background());
$4=_st($3)._yourself();
$2=$4;
return $2;
}, function($ctx1) {$ctx1.fill(self,"children",{children:children},smalltalk.CWCell)})},
messageSends: ["new", "ifNotNil:", "add:", "monster", "gameOverTile", "addAll:", "background", "yourself"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._darken_(self);
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWCell)})},
messageSends: ["darken:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var m;
m=$receiver;
_st(m)._desactivateMonsters();
};
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWCell)})},
messageSends: ["ifNotNil:", "desactivateMonsters", "monster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "firstCoods",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@firstCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstCoods",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "firstCoods:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"firstCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
fn: function (aGOT){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=aGOT;
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{aGOT:aGOT},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWGameOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "hasMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isFree())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},smalltalk.CWCell)})},
messageSends: ["not", "isFree"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWComposite.fn.prototype._initialize.apply(_st(self), []);
self["@mark"]=false;
self["@gameOverTile"]=_st(self)._newGOT();
_st(self)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWCell)})},
messageSends: ["initialize", "newGOT", "changeState:"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (aJsonCell){
var self=this;
var elements,ots;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
elements=_st(aJsonCell)._keys();
self["@background"]=_st($Array())._new();
$1=_st(elements)._includes_("tile");
if(smalltalk.assert($1)){
_st(self)._backgroundAdd_(_st(_st(self)._newTile())._initializeFromKey_(_st(aJsonCell)._tile()));
};
ots=_st(_st(aJsonCell)._keys())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._match_("overtile");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(ots)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(self)._backgroundAdd_(_st(_st(self)._newOverTile())._initializeFromKey_(_st(aJsonCell)._at_(each)));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{aJsonCell:aJsonCell,elements:elements,ots:ots},smalltalk.CWCell)})},
messageSends: ["keys", "new", "ifTrue:", "backgroundAdd:", "initializeFromKey:", "tile", "newTile", "includes:", "select:", "match:", "do:", "at:", "newOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFree();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCell)})},
messageSends: ["isFree", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFreeSelected();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWCell)})},
messageSends: ["isFreeSelected", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isMarked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mark"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMarked",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._lighten_(self);
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWCell)})},
messageSends: ["lighten:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"mark",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},smalltalk.CWCell)})},
messageSends: ["mouseClick:context:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseMove_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{gameContext:gameContext},smalltalk.CWCell)})},
messageSends: ["mouseMove:context:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@neighboursCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@neighboursCache"]=_st(_st(self)._parent())._neighboursOf_(self);
$1=self["@neighboursCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"neighbours",{},smalltalk.CWCell)})},
messageSends: ["ifNil:", "neighboursOf:", "parent"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOT",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameOverTileClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOT",{},smalltalk.CWCell)})},
messageSends: ["new", "gameOverTileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._overTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "overTileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._tileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTile",{},smalltalk.CWCell)})},
messageSends: ["newChild:", "tileClass"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTileClass",
fn: function (){
var self=this;
function $CWOverTile(){return smalltalk.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._neighbours();
return self}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},smalltalk.CWCell)})},
messageSends: ["neighbours"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
return smalltalk.withContext(function($ctx1) { 
row=_st(self)._parent();
cellIndex=_st(_st(row)._cells())._indexOf_(self);
rowNumber=_st(_st(_st(row)._parent())._rows())._indexOf_(row);
_st(_st(_st(_st(_st(aStream).__lt_lt("a Cell(")).__lt_lt(_st(rowNumber)._printString())).__lt_lt("-")).__lt_lt(_st(cellIndex)._printString())).__lt_lt(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},smalltalk.CWCell)})},
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._invis();
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.CWCell)})},
messageSends: ["invis", "gameOverTile"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.CWCell)})},
messageSends: ["removeMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWCell)})},
messageSends: ["removeSelector:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWCell)})},
messageSends: ["showActiveMonster:", "state"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWCell)})},
messageSends: ["side", "monster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
fn: function (){
var self=this;
function $CWTile(){return smalltalk.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileClass",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
var m;
m=$receiver;
_st(m)._updateUI();
};
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWCell)})},
messageSends: ["ifNotNil:", "updateUI", "monster"]}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@zIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"zIndex",{},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex:",
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zIndex"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"zIndex:",{anInt:anInt},smalltalk.CWCell)})},
messageSends: []}),
smalltalk.CWCell);



smalltalk.addClass('CWOneChildClass', smalltalk.CWComposite, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOneChildClass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWOneChildClass)})},
messageSends: ["add:", "children"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWOneChildClass)})},
messageSends: ["at:put:", "children"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWOneChildClass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CWOneChildClass)})},
messageSends: ["newChild:", "childBasicClass"]}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWOneChildClass)})},
messageSends: ["remove:", "children"]}),
smalltalk.CWOneChildClass);



smalltalk.addClass('CWMap', smalltalk.CWOneChildClass, ['rows', 'drawer', 'cellsCache'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMap_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMap)})},
messageSends: ["visitMap:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
function $CWRow(){return smalltalk.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWRow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rows();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWMap)})},
messageSends: ["rows"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._clean();
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMap)})},
messageSends: ["clean"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMap)})},
messageSends: ["do:", "desactivateMonsters"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "drawer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawer",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDrawer",
fn: function (){
var self=this;
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._prefillCaches();
self["@drawer"]=_st(_st($CWMapDrawer())._new())._initializeForMap_(self);
_st(self)._updateUI();
return self}, function($ctx1) {$ctx1.fill(self,"initializeDrawer",{},smalltalk.CWMap)})},
messageSends: ["prefillCaches", "initializeForMap:", "new", "updateUI"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonMap){
var self=this;
var child,rows1;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
rows1=_st(jsonMap)._row();
self["@rows"]=_st($Array())._new_(_st(rows1)._size());
_st(rows1)._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(self)._childAt_put_(i,child);
return _st(child)._initializeFromJson_(row);
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
_st(self)._announce_(_st($CWObjectLoaded())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonMap:jsonMap,child:child,rows1:rows1},smalltalk.CWMap)})},
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._lighten();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWMap)})},
messageSends: ["do:", "lighten"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:cellIndex:",
fn: function (row,cellIndex){
var self=this;
var rowIndex,neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
rowIndex=_st(_st(self)._rows())._indexOf_(row);
neighbours=_st($Array())._new();
$1=_st(rowIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__minus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$2=_st(rowIndex).__eq(_st(_st(self)._rows())._size());
if(! smalltalk.assert($2)){
_st(neighbours)._addAll_(_st(_st(self)._childAt_(_st(rowIndex).__plus((1))))._cellsNextToI_j_(rowIndex,cellIndex));
};
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:cellIndex:",{row:row,cellIndex:cellIndex,rowIndex:rowIndex,neighbours:neighbours},smalltalk.CWMap)})},
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "addAll:", "cellsNextToI:j:", "childAt:", "-", "=", "+", "size"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@cellsCache"]=_st($Array())._new();
_st(_st(self)._children())._do_((function(row){
return smalltalk.withContext(function($ctx2) {
return _st(_st(row)._children())._do_((function(cell){
return smalltalk.withContext(function($ctx3) {
_st(self["@cellsCache"])._add_(cell);
return _st(cell)._prefillCaches();
}, function($ctx3) {$ctx3.fillBlock({cell:cell},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},smalltalk.CWMap)})},
messageSends: ["new", "do:", "add:", "prefillCaches", "children"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("a Map (");
_st($1)._nextPutAll_(_st(_st(self["@rows"])._size())._printString());
$2=_st($1)._nextPutAll_(" rows)");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMap)})},
messageSends: ["nextPutAll:", "printString", "size"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWMap)})},
messageSends: ["do:", "removeSelection"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "rows",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows",{},smalltalk.CWMap)})},
messageSends: []}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeSelection();
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWMap)})},
messageSends: ["removeSelection", "do:", "showActiveMonsters"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._unmark();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWMap)})},
messageSends: ["do:", "unmark"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMap)})},
messageSends: ["updateMap"]}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._updateUI();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWMap)})},
messageSends: ["do:", "updateUI"]}),
smalltalk.CWMap);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
fn: function (aMapIndex){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { 
var $1;
map=_st(self)._new();
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/maps/map").__comma(aMapIndex)).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
return _st(map)._initializeFromJson_(data);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
$1=map;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithMapIndex:",{aMapIndex:aMapIndex,map:map},smalltalk.CWMap.klass)})},
messageSends: ["new", "getJSON:onSuccess:", ",", "initializeFromJson:"]}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWOneChildClass, ['cells'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitRow_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWRow)})},
messageSends: ["visitRow:"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
fn: function (i,j){
var self=this;
var neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
neighbours=_st($Array())._new();
_st(self)._childAt_ifPresent_(j,(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
$1=_st(_st(i).__backslash_backslash((2))).__eq((0));
if(smalltalk.assert($1)){
$3=_st(j).__gt((1));
if(smalltalk.assert($3)){
_st(self)._childAt_ifPresent_(_st(j).__minus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
} else {
$2=_st(j).__lt(_st(_st(self)._cells())._size());
if(smalltalk.assert($2)){
_st(self)._childAt_ifPresent_(_st(j).__plus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
};
$4=neighbours;
return $4;
}, function($ctx1) {$ctx1.fill(self,"cellsNextToI:j:",{i:i,j:j,neighbours:neighbours},smalltalk.CWRow)})},
messageSends: ["new", "childAt:ifPresent:", "add:", "ifFalse:ifTrue:", "ifTrue:", "+", "<", "size", "cells", "-", ">", "=", "\x5c\x5c"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
fn: function (){
var self=this;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWRow)})},
messageSends: []}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._cells();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWRow)})},
messageSends: ["cells"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
fn: function (jsonRow){
var self=this;
var cells1,child;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
cells1=_st(jsonRow)._cells();
self["@cells"]=_st($Array())._new_(_st(cells1)._size());
_st(cells1)._withIndexDo_((function(cell,i){
return smalltalk.withContext(function($ctx2) {
child=_st(self)._newChild();
child;
_st(child)._initializeFromJson_(cell);
return _st(self)._childAt_put_(i,child);
}, function($ctx2) {$ctx2.fillBlock({cell:cell,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromJson:",{jsonRow:jsonRow,cells1:cells1,child:child},smalltalk.CWRow)})},
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:",
fn: function (aCell){
var self=this;
var cellIndex,neighbours;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
neighbours=_st($Array())._new();
cellIndex=_st(_st(self)._cells())._indexOf_(aCell);
$1=_st(cellIndex).__eq((1));
if(! smalltalk.assert($1)){
_st(self)._childAt_ifPresent_(_st(cellIndex).__minus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
$2=_st(cellIndex).__eq(_st(_st(self)._cells())._size());
if(! smalltalk.assert($2)){
_st(self)._childAt_ifPresent_(_st(cellIndex).__plus((1)),(function(child){
return smalltalk.withContext(function($ctx2) {
return _st(neighbours)._add_(child);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
_st(neighbours)._addAll_(_st(_st(self)._parent())._neighboursOf_cellIndex_(self,cellIndex));
$3=neighbours;
return $3;
}, function($ctx1) {$ctx1.fill(self,"neighboursOf:",{aCell:aCell,cellIndex:cellIndex,neighbours:neighbours},smalltalk.CWRow)})},
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "childAt:ifPresent:", "-", "add:", "=", "+", "size", "addAll:", "neighboursOf:cellIndex:", "parent"]}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Row (").__comma(_st(self["@cells"])._size())).__comma(" cells)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWRow)})},
messageSends: [",", "size"]}),
smalltalk.CWRow);



smalltalk.addClass('CWLeaf', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWLeaf)})},
messageSends: []}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWImageLeaf)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromKey:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},smalltalk.CWImageLeaf)})},
messageSends: ["imageCacheAt:", "class"]}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWImageLeaf)})},
messageSends: []}),
smalltalk.CWImageLeaf);


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf.klass)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCache",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imageCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@imageCache"]=_st($Dictionary())._new();
$1=self["@imageCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCache",{},smalltalk.CWImageLeaf.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._imageCache())._at_ifAbsentPut_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._newImageFrom_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageCacheAt:",{aKey:aKey},smalltalk.CWImageLeaf.klass)})},
messageSends: ["at:ifAbsentPut:", "newImageFrom:", "imageCache"]}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
fn: function (aKey){
var self=this;
var announcer,image;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
function $NativeFunction(){return smalltalk.NativeFunction||(typeof NativeFunction=="undefined"?nil:NativeFunction)}
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
var $1;
announcer=_st($CWEasnothAnnouncer())._current();
image=_st($NativeFunction())._constructor_("Image");
_st(_st(self)._imageCache())._at_put_(aKey,image);
_st(announcer)._announce_(_st($CWWaitForObject())._new());
_st(image)._at_put_("onload",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(announcer)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(image)._at_put_("src",_st(_st(_st(_st("ressources/images/").__comma(_st(self)._folderName())).__comma("/")).__comma(aKey)).__comma(".png"));
$1=image;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newImageFrom:",{aKey:aKey,announcer:announcer,image:image},smalltalk.CWImageLeaf.klass)})},
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"]}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWBackground)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWBackground);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "back";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWBackground.klass)})},
messageSends: []}),
smalltalk.CWBackground.klass);


smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOverTile)})},
messageSends: ["visitOverTile:"]}),
smalltalk.CWOverTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile.klass)})},
messageSends: []}),
smalltalk.CWOverTile.klass);


smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTile)})},
messageSends: ["visitTile:"]}),
smalltalk.CWTile);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWTile)})},
messageSends: []}),
smalltalk.CWTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile.klass)})},
messageSends: []}),
smalltalk.CWTile.klass);


smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitWall_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWWall)})},
messageSends: ["visitWall:"]}),
smalltalk.CWWall);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWWall)})},
messageSends: []}),
smalltalk.CWWall);



smalltalk.addClass('CWGameOverTile', smalltalk.CWImageLeaf, ['htmlImage'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitGameOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWGameOverTile)})},
messageSends: ["visitGameOverTile:"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._darkGreenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "darkGreenIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._greenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "greenIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "htmlImage:",
fn: function (aHTMLElem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@htmlImage"]=_st(aHTMLElem)._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"htmlImage:",{aHTMLElem:aHTMLElem},smalltalk.CWGameOverTile)})},
messageSends: ["asJQuery"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@htmlImage"])._attr_put_("src",_st(anImage)._src());
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWGameOverTile)})},
messageSends: ["attr:put:", "src"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "invis",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._invisIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"invis",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "invisIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._green();
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWGameOverTile)})},
messageSends: ["green"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._redIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "redIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._whiteIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.CWGameOverTile)})},
messageSends: ["image:", "at:", "whiteIndex", "class", "imageArray"]}),
smalltalk.CWGameOverTile);


smalltalk.CWGameOverTile.klass.iVarNames = ['imageArray'];
smalltalk.addMethod(
smalltalk.method({
selector: "createImageArray",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
self["@imageArray"]=_st($Array())._new_((5));
$1=self["@imageArray"];
_st($1)._at_put_(_st(self)._greenIndex(),_st(self)._imageCacheAt_("green"));
_st($1)._at_put_(_st(self)._darkGreenIndex(),_st(self)._imageCacheAt_("darkGreen"));
_st($1)._at_put_(_st(self)._redIndex(),_st(self)._imageCacheAt_("red"));
_st($1)._at_put_(_st(self)._whiteIndex(),_st(self)._imageCacheAt_("white"));
$2=_st($1)._at_put_(_st(self)._invisIndex(),_st(self)._imageCacheAt_("invis"));
$3=self["@imageArray"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"createImageArray",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["new:", "at:put:", "greenIndex", "imageCacheAt:", "darkGreenIndex", "redIndex", "whiteIndex", "invisIndex"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "darkGreenIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5);
return $1;
}, function($ctx1) {$ctx1.fill(self,"darkGreenIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "gots";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "greenIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"greenIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageArray",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@imageArray"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._createImageArray();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"imageArray",{},smalltalk.CWGameOverTile.klass)})},
messageSends: ["ifNil:", "createImageArray"]}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invisIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"invisIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "redIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"redIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whiteIndex",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"whiteIndex",{},smalltalk.CWGameOverTile.klass)})},
messageSends: []}),
smalltalk.CWGameOverTile.klass);


smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state', 'player', 'special', 'strategy', 'typeStrategy', 'canvas'], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._accept_for_(aVisitor,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
messageSends: ["accept:for:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "activate",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.CWMonster)})},
messageSends: ["activate:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorsTo:",
fn: function (cells){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._root())._removeSelection();
_st(cells)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._addSelector();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=cells;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addSelectorsTo:",{cells:cells},smalltalk.CWMonster)})},
messageSends: ["removeSelection", "root", "do:", "addSelector"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animPath:iterator:callback:",
fn: function (path,j,callback){
var self=this;
var cell1FirstCoods,cell2,pathSize;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
pathSize=_st(path)._size();
$1=_st(j).__eq(pathSize);
if(smalltalk.assert($1)){
$2=_st(callback)._value();
return $2;
};
cell1FirstCoods=_st(_st(self)._parent())._firstCoods();
cell2=_st(path)._at_(_st(pathSize).__minus(j));
_st(self)._changeCell_(cell2);
_st(self)._decreaseCurrentMove();
_st(_st(_st(self)._canvas())._asJQuery())._animate_duration_easing_complete_(smalltalk.HashedCollection._fromPairs_([_st("left").__minus_gt(_st(_st("+=").__comma(_st(_st(_st(cell2)._firstCoods())._x()).__minus(_st(cell1FirstCoods)._x()))).__comma("px")),_st("top").__minus_gt(_st(_st("+=").__comma(_st(_st(_st(cell2)._firstCoods())._y()).__minus(_st(cell1FirstCoods)._y()))).__comma("px"))]),(300),"linear",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._animPath_iterator_callback_(path,_st(j).__plus((1)),callback);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"animPath:iterator:callback:",{path:path,j:j,callback:callback,cell1FirstCoods:cell1FirstCoods,cell2:cell2,pathSize:pathSize},smalltalk.CWMonster)})},
messageSends: ["size", "ifTrue:", "value", "=", "firstCoods", "parent", "at:", "-", "changeCell:", "decreaseCurrentMove", "animate:duration:easing:complete:", "->", ",", "x", "y", "animPath:iterator:callback:", "+", "asJQuery", "canvas"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveTo:callback:",
fn: function (cellLast,callback){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
path=_st(self)._pathTo_(cellLast);
_st(_st(cellLast)._root())._removeSelection();
_st(self)._animPath_iterator_callback_(path,(1),callback);
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveTo:callback:",{cellLast:cellLast,callback:callback,path:path},smalltalk.CWMonster)})},
messageSends: ["pathTo:", "removeSelection", "root", "animPath:iterator:callback:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "announceUpdate",
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMonsterUpdateEvent())._new())._monster_(self));
return self}, function($ctx1) {$ctx1.fill(self,"announceUpdate",{},smalltalk.CWMonster)})},
messageSends: ["announce:", "monster:", "new"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:",
fn: function (anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_attackNeighbour_inContext_(self,anotherMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:attackNeighbour:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:bonus:",
fn: function (anotherMonster,gameContext,int){
var self=this;
var ennemySupport,ennemyHerosSupport,ennemyUnitSupport,support,herosSupport,unitSupport,bonusDices,bonusAttack;
return smalltalk.withContext(function($ctx1) { 
var $1;
bonusDices=int;
bonusAttack=_st(int).__star((10));
$1=_st(_st(bonusDices).__plus(_st(self)._dices())).__lt((1));
if(smalltalk.assert($1)){
bonusDices=_st(_st(_st(self)._dices()).__minus((1)))._negated();
bonusDices;
};
_st(self)._resolveAttack_inContext_bonusDices_bonusAttack_(anotherMonster,gameContext,bonusDices,bonusAttack);
return self}, function($ctx1) {$ctx1.fill(self,"attack:inContext:bonus:",{anotherMonster:anotherMonster,gameContext:gameContext,int:int,ennemySupport:ennemySupport,ennemyHerosSupport:ennemyHerosSupport,ennemyUnitSupport:ennemyUnitSupport,support:support,herosSupport:herosSupport,unitSupport:unitSupport,bonusDices:bonusDices,bonusAttack:bonusAttack},smalltalk.CWMonster)})},
messageSends: ["*", "ifTrue:", "negated", "-", "dices", "<", "+", "resolveAttack:inContext:bonusDices:bonusAttack:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotential",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attack"]).__star(self["@dices"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotential",{},smalltalk.CWMonster)})},
messageSends: ["*"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotentialFor:",
fn: function (target){
var self=this;
var adv;
return smalltalk.withContext(function($ctx1) { 
var $1;
adv=_st(self["@typeStrategy"])._bonusVS_(target);
$1=_st(_st(_st(self["@attack"]).__plus((10))).__star(adv)).__star(_st(self["@dices"]).__plus(adv));
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotentialFor:",{target:target,adv:adv},smalltalk.CWMonster)})},
messageSends: ["bonusVS:", "*", "+"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:inContext:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:attackTo:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monsterSelection())._second();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighbours",{},smalltalk.CWMonster)})},
messageSends: ["second", "monsterSelection"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSCavalry();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSCavalry"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSRange();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSRange"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWMonster)})},
messageSends: ["bonusVSTroop"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeAttack:context:",
fn: function (cellLast,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$6,$7,$8;
$1=_st(self)._isRanged();
if(smalltalk.assert($1)){
$2=_st(self)._cellToMoveBeforeRangeAttack_(cellLast);
return $2;
};
$4=_st(gameContext)._relatedCell();
if(($receiver = $4) == nil || $receiver == undefined){
$3=false;
} else {
var it;
it=$receiver;
$3=_st(it)._isFreeSelected();
};
if(smalltalk.assert($3)){
$5=_st(gameContext)._relatedCell();
return $5;
};
$6=_st(_st(cellLast)._neighbours())._includes_(_st(self)._parent());
if(smalltalk.assert($6)){
$7=_st(self)._parent();
return $7;
};
$8=_st(_st(self)._pathTo_(cellLast))._at_((2));
return $8;
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeAttack:context:",{cellLast:cellLast,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["ifTrue:", "cellToMoveBeforeRangeAttack:", "isRanged", "relatedCell", "ifNotNil:ifNil:", "isFreeSelected", "parent", "includes:", "neighbours", "at:", "pathTo:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeRangeAttack:",
fn: function (cellLast){
var self=this;
var shortestPath;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
shortestPath=_st(self)._pathTo_(cellLast);
$1=_st(_st(shortestPath)._size()).__lt(_st(_st(self)._range()).__plus((1)));
if(smalltalk.assert($1)){
$2=_st(self)._parent();
return $2;
};
$3=_st(shortestPath)._at_(_st(_st(self)._range()).__plus((1)));
return $3;
}, function($ctx1) {$ctx1.fill(self,"cellToMoveBeforeRangeAttack:",{cellLast:cellLast,shortestPath:shortestPath},smalltalk.CWMonster)})},
messageSends: ["pathTo:", "ifTrue:", "parent", "<", "+", "range", "size", "at:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(aCell)._addMonster_(self);
_st(_st(_st(self)._canvas())._asJQuery())._css_put_("z-index",_st(aCell)._zIndex());
return self}, function($ctx1) {$ctx1.fill(self,"changeCell:",{aCell:aCell},smalltalk.CWMonster)})},
messageSends: ["removeMonster", "parent", "addMonster:", "css:put:", "zIndex", "asJQuery", "canvas"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=_st(stateClass)._default();
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWMonster)})},
messageSends: ["default"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._currentMove()).__gt((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(self)._state())._checkForNextTurn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn",{},smalltalk.CWMonster)})},
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanUI",
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(self)._canvas())._element();
_st(_st(self)._context())._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanUI",{elem:elem},smalltalk.CWMonster)})},
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "context"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.CWMonster)})},
messageSends: ["getContext:", "element"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentMove"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMove",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove:",
fn: function (int){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@currentMove"]=int;
_st(self)._announce_(_st($CWMonsterUpdateEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},smalltalk.CWMonster)})},
messageSends: ["announce:", "new"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseCurrentMove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._currentMove_(_st(_st(self)._currentMove()).__minus((1)));
_st(self)._announceUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"decreaseCurrentMove",{},smalltalk.CWMonster)})},
messageSends: ["currentMove:", "-", "currentMove", "announceUpdate"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._defaultHP();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
messageSends: ["defaultHP"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultState",
fn: function (){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultState",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defensePotential",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hp"]).__star((100));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defensePotential",{},smalltalk.CWMonster)})},
messageSends: ["*"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._desactivate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMonster)})},
messageSends: ["desactivate:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "die",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(_st(self)._player())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},smalltalk.CWMonster)})},
messageSends: ["removeMonster", "parent", "removeMonster:", "player"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "display:cood:",
fn: function (monster,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(monster)._image(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"display:cood:",{monster:monster,aPoint:aPoint},smalltalk.CWMonster)})},
messageSends: ["drawImage:x:y:", "image", "x", "y", "context"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._hasPlayed_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed",{},smalltalk.CWMonster)})},
messageSends: ["hasPlayed:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initialize.apply(_st(self), []);
_st(self)._currentMove_((0));
_st(self)._initializeState();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonster)})},
messageSends: ["initialize", "currentMove:", "initializeState"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeState_(_st(self)._defaultState());
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWMonster)})},
messageSends: ["changeState:", "defaultState"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithStat:army:player:heros:type:",
fn: function (jsonStat,army,aPlayer,strat,aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._player_(aPlayer);
self["@strategy"]=_st(strat)._default();
self["@typeStrategy"]=_st(aType)._default();
_st(self)._stats_(jsonStat);
smalltalk.CWImageLeaf.fn.prototype._initializeFromKey_.apply(_st(self), [_st(_st(army).__comma("/")).__comma(_st(self)._key())]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithStat:army:player:heros:type:",{jsonStat:jsonStat,army:army,aPlayer:aPlayer,strat:strat,aType:aType},smalltalk.CWMonster)})},
messageSends: ["player:", "default", "stats:", "initializeFromKey:", ",", "key"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByCavalry:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByCavalry_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByCavalry:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByCavalry:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByRange:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByRange_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByRange:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByRange:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByTroop:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByTroop_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByTroop:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:isAttackedByTroop:inContext:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._isHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonster)})},
messageSends: ["isHeros"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonster)})},
messageSends: ["isInactive", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._isRanged();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonster)})},
messageSends: ["isRanged"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isHeros())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isUnit",{},smalltalk.CWMonster)})},
messageSends: ["not", "isHeros"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@typeStrategy"])._key()).__comma(_st(self["@strategy"])._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonster)})},
messageSends: [",", "key"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterSelection",
fn: function (){
var self=this;
var movableCells,newMovableCells,attackableCells,tempSet,cycleNumber;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
_st(_st(self)._root())._unmark();
_st(_st(self)._parent())._mark();
tempSet=_st($Array())._new();
attackableCells=_st($Array())._new();
movableCells=_st($Array())._new();
cycleNumber=_st(_st(self)._range()).__plus(_st(self)._currentMove());
newMovableCells=[_st(self)._parent()];
_st((1))._to_do_(cycleNumber,(function(i){
return smalltalk.withContext(function($ctx2) {
_st(tempSet)._reset();
_st(newMovableCells)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(each)._neighbours())._do_((function(neigh){
return smalltalk.withContext(function($ctx4) {
$1=_st(neigh)._isMarked();
if(! smalltalk.assert($1)){
_st(neigh)._mark();
_st(neigh)._prevCell_(each);
$2=_st(neigh)._isFree();
if(smalltalk.assert($2)){
_st(tempSet)._add_(neigh);
};
$3=_st(neigh)._canBeAttackedBy_(_st(self)._side());
if(smalltalk.assert($3)){
return _st(attackableCells)._add_(neigh);
};
};
}, function($ctx4) {$ctx4.fillBlock({neigh:neigh},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
$4=_st(_st(i).__eq((1))).__or(_st(_st(i).__minus((1))).__gt(_st(self)._currentMove()));
if(! smalltalk.assert($4)){
_st(movableCells)._addAll_(newMovableCells);
};
_st(newMovableCells)._reset();
return _st(newMovableCells)._addAll_(tempSet);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
$5=[movableCells,attackableCells];
return $5;
}, function($ctx1) {$ctx1.fill(self,"monsterSelection",{movableCells:movableCells,newMovableCells:newMovableCells,attackableCells:attackableCells,tempSet:tempSet,cycleNumber:cycleNumber},smalltalk.CWMonster)})},
messageSends: ["unmark", "root", "mark", "parent", "new", "+", "currentMove", "range", "to:do:", "reset", "do:", "ifFalse:", "prevCell:", "ifTrue:", "add:", "isFree", "canBeAttackedBy:", "side", "isMarked", "neighbours", "addAll:", "|", ">", "-", "="]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monsterSelection())._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{},smalltalk.CWMonster)})},
messageSends: ["first", "monsterSelection"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["monster:moveTo:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:callback:",
fn: function (aCell,gameContext,callback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animationMoveTo_callback_(aCell,(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._state())._changeStateAfterMoving_(self);
_st(self)._selectInContext_(gameContext);
_st(self)._checkForNextTurn();
return _st(callback)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:callback:",{aCell:aCell,gameContext:gameContext,callback:callback},smalltalk.CWMonster)})},
messageSends: ["animationMoveTo:callback:", "changeStateAfterMoving:", "state", "selectInContext:", "checkForNextTurn", "value"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTo:",
fn: function (cellLast){
var self=this;
var path;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
path=_st($Array())._with_(cellLast);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._parent()).__eq(_st(path)._last());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(path)._add_(_st(_st(path)._last())._prevCell());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=path;
return $1;
}, function($ctx1) {$ctx1.fill(self,"pathTo:",{cellLast:cellLast,path:path},smalltalk.CWMonster)})},
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "=", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@player"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"player",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player:",
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@player"]=aPlayer;
return self}, function($ctx1) {$ctx1.fill(self,"player:",{aPlayer:aPlayer},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("a Monster(");
_st(aStream)._nextPutAll_(_st(_st(self)._parent())._printString());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMonster)})},
messageSends: ["nextPutAll:", "printString", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{int:int},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToBePicked",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._readyToPick_(self);
return self}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},smalltalk.CWMonster)})},
messageSends: ["readyToPick:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._hp_(_st(_st(self)._hp()).__minus(anInt));
$1=_st(_st(self)._hp()).__lt((1));
if(smalltalk.assert($1)){
_st(self)._die();
_st(self)._cleanUI();
} else {
_st(self)._updateUI();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeHP:",{anInt:anInt},smalltalk.CWMonster)})},
messageSends: ["hp:", "-", "hp", "ifTrue:ifFalse:", "die", "cleanUI", "updateUI", "<"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveAttack:inContext:bonusDices:bonusAttack:",
fn: function (anotherMonster,gameContext,bonusDices,bonusAttack){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._changeStateAfterAttacking_(self);
_st(_st(self)._root())._removeSelection();
_st(self)._rollDicesCallBack_bonusDices_bonusAttack_((function(diceRes){
return smalltalk.withContext(function($ctx2) {
_st(anotherMonster)._removeHP_(_st(diceRes)._kills());
_st(self)._selectInContext_(gameContext);
return _st(self)._checkForNextTurn();
}, function($ctx2) {$ctx2.fillBlock({diceRes:diceRes},$ctx1)})}),bonusDices,bonusAttack);
return self}, function($ctx1) {$ctx1.fill(self,"resolveAttack:inContext:bonusDices:bonusAttack:",{anotherMonster:anotherMonster,gameContext:gameContext,bonusDices:bonusDices,bonusAttack:bonusAttack},smalltalk.CWMonster)})},
messageSends: ["changeStateAfterAttacking:", "state", "removeSelection", "root", "rollDicesCallBack:bonusDices:bonusAttack:", "removeHP:", "kills", "selectInContext:", "checkForNextTurn"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:cood:",
fn: function (monster,cood){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._context();
_st($1)._translate_y_(_st(cood)._x(),(0));
$2=_st($1)._scale_y_((-1),(1));
$2;
return _st(self)._display_cood_(monster,_st((0)).__at(_st(cood)._y()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(self)._context();
_st($3)._scale_y_((-1),(1));
$4=_st($3)._translate_y_(_st(_st(cood)._x())._negated(),(0));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:cood:",{monster:monster,cood:cood},smalltalk.CWMonster)})},
messageSends: ["ensure:", "scale:y:", "context", "translate:y:", "negated", "x", "display:cood:", "@", "y"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:bonusDices:bonusAttack:",
fn: function (aBlock,bonusDices,bonusAttack){
var self=this;
var kill,dicesRolledEvent;
function $CWDicesRolledEvent(){return smalltalk.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
kill=_st(_st((1))._to_(_st(_st(self)._dices()).__plus(bonusDices)))._inject_into_((0),(function(acc,index){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st((100))._atRandom()).__lt(_st(_st(self)._attack()).__plus(bonusAttack));
if(smalltalk.assert($1)){
return _st(acc).__plus((1));
} else {
return acc;
};
}, function($ctx2) {$ctx2.fillBlock({acc:acc,index:index},$ctx1)})}));
$2=_st($CWDicesRolledEvent())._new();
_st($2)._kills_(kill);
_st($2)._dices_(_st(_st(self)._dices()).__plus(bonusDices));
_st($2)._callback_(aBlock);
$3=_st($2)._yourself();
dicesRolledEvent=$3;
_st(self)._announce_(dicesRolledEvent);
return self}, function($ctx1) {$ctx1.fill(self,"rollDicesCallBack:bonusDices:bonusAttack:",{aBlock:aBlock,bonusDices:bonusDices,bonusAttack:bonusAttack,kill:kill,dicesRolledEvent:dicesRolledEvent},smalltalk.CWMonster)})},
messageSends: ["inject:into:", "ifTrue:ifFalse:", "+", "<", "attack", "atRandom", "to:", "dices", "kills:", "new", "dices:", "callback:", "yourself", "announce:"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectActionCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._selectableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectActionCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "selectableNeighbours"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAttackableCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._attackableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectAttackableCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "attackableNeighbours"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectInContext:",
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._announceUpdate();
$1=_st(_st(self)._state())._select_inContext_(self,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectInContext:",{gameContext:gameContext},smalltalk.CWMonster)})},
messageSends: ["announceUpdate", "select:inContext:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMovableCells",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._movableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectMovableCells",{},smalltalk.CWMonster)})},
messageSends: ["addSelectorsTo:", "movableNeighbours"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighbours",
fn: function (){
var self=this;
var moveAttack;
return smalltalk.withContext(function($ctx1) { 
var $1;
moveAttack=_st(self)._monsterSelection();
_st(_st(moveAttack)._first())._addAll_(_st(moveAttack)._second());
$1=_st(moveAttack)._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectableNeighbours",{moveAttack:moveAttack},smalltalk.CWMonster)})},
messageSends: ["monsterSelection", "addAll:", "second", "first"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},smalltalk.CWMonster)})},
messageSends: ["showActiveMonster:", "state"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@player"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
messageSends: ["side"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@special"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"special",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@special"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{aString:aString},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWMonster)})},
messageSends: []}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
fn: function (jsonStats){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_(_st(jsonStats)._move());
_st(self)._range_(_st(jsonStats)._range());
_st(self)._attack_(_st(jsonStats)._attack());
_st(self)._dices_(_st(jsonStats)._dices());
_st(self)._special_(_st(jsonStats)._special());
_st(self)._hp_(_st(self)._defaultHp());
return self}, function($ctx1) {$ctx1.fill(self,"stats:",{jsonStats:jsonStats},smalltalk.CWMonster)})},
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "special:", "special", "hp:", "defaultHp"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "support",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._parent())._neighbours())._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._canBeAttackedBy_(_st(self)._side());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"support",{},smalltalk.CWMonster)})},
messageSends: ["select:", "canBeAttackedBy:", "side", "neighbours", "parent"]}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanUI();
_st(self["@strategy"])._updateUI_(self);
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWMonster)})},
messageSends: ["cleanUI", "updateUI:"]}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._new();
_st($2)._hp_((0));
_st($2)._move_((0));
_st($2)._range_((0));
_st($2)._dices_((0));
_st($2)._attack_((0));
$3=_st($2)._special_("none");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},smalltalk.CWMonster.klass)})},
messageSends: ["hp:", "new", "move:", "range:", "dices:", "attack:", "special:"]}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster.klass)})},
messageSends: []}),
smalltalk.CWMonster.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "keys",
fn: function (){
var self=this;
var col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
col=_st($Array())._new();
_st(self)._keysDo_((function(key){
return smalltalk.withContext(function($ctx2) {
return _st(col)._add_(key);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1)})}));
$1=col;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keys",{col:col},smalltalk.JSObjectProxy)})},
messageSends: ["new", "keysDo:", "add:"]}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
messageSends: []}),
smalltalk.JSObjectProxy);

