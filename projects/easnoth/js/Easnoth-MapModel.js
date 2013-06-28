smalltalk.addPackage('Easnoth-MapModel');
smalltalk.addClass('CWComponent', smalltalk.Object, ['parent'], 'Easnoth-MapModel');
smalltalk.CWComponent.comment="I represent a business object of the game. The business objects are managed in a tree : you have a root object that has children (and children can also have children).\x0a\x0aGame logic is implemented in my subclasses. For Displaying, look at CWDrawer."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComponent)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWComponent)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWComponent)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComponent)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "desactivateMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child desactivateMonsters ]",
messageSends: ["do:", "desactivateMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._lighten();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWComponent)})},
args: [],
source: "lighten\x0a\x09self children do: [ :child |\x0a\x09\x09child lighten ]",
messageSends: ["do:", "lighten", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWComponent)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWComponent)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._prefillCaches();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},smalltalk.CWComponent)})},
args: [],
source: "prefillCaches\x0a\x09self children do: [ :child |\x0a\x09\x09child prefillCaches ]",
messageSends: ["do:", "prefillCaches", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWComponent)})},
args: [],
source: "removeSelection\x0a\x09self children do: [ :child |\x0a\x09\x09child removeSelection ]",
messageSends: ["do:", "removeSelection", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWComponent)})},
args: [],
source: "root\x0a\x09^ self parent root",
messageSends: ["root", "parent"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWComponent)})},
args: [],
source: "showActiveMonsters\x0a\x09self children do: [ :child |\x0a\x09\x09child showActiveMonsters ]",
messageSends: ["do:", "showActiveMonsters", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._unmark();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWComponent)})},
args: [],
source: "unmark\x0a\x09self children do: [ :child |\x0a\x09\x09child unmark ]",
messageSends: ["do:", "unmark", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._root())._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWComponent)})},
args: [],
source: "updateMap\x0a\x09self root updateMap",
messageSends: ["updateMap", "root"],
referencedClasses: []
}),
smalltalk.CWComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._children())._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return _st(child)._updateUI();
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWComponent)})},
args: [],
source: "updateUI\x0a\x09self children do: [ :child |\x0a\x09\x09child updateUI ]",
messageSends: ["do:", "updateUI", "children"],
referencedClasses: []
}),
smalltalk.CWComponent);



smalltalk.addClass('CWComposite', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWComposite)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:",
category: 'children management',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:",{index:index},smalltalk.CWComposite)})},
args: ["index"],
source: "childAt: index \x0a\x09^ self children at: index",
messageSends: ["at:", "children"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:ifPresent:",
category: 'children management',
fn: function (index,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_ifPresent_(index,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:ifPresent:",{index:index,aBlock:aBlock},smalltalk.CWComposite)})},
args: ["index", "aBlock"],
source: "childAt: index ifPresent: aBlock\x0a\x09^ self children at: index ifPresent: aBlock",
messageSends: ["at:ifPresent:", "children"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWComposite)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWComposite);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
category: 'factory',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWComposite)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
referencedClasses: []
}),
smalltalk.CWComposite);



smalltalk.addClass('CWCell', smalltalk.CWComposite, ['neighboursCache', 'background', 'gameOverTile', 'monster', 'state', 'prevCell', 'mark', 'firstCoods', 'zIndex'], 'Easnoth-MapModel');
smalltalk.CWCell.comment="I represent an hexagon cell in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitCell_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWCell)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitCell: self ",
messageSends: ["visitCell:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addGreenSelector",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._green();
return self}, function($ctx1) {$ctx1.fill(self,"addGreenSelector",{},smalltalk.CWCell)})},
args: [],
source: "addGreenSelector\x0a\x09self gameOverTile green",
messageSends: ["green", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addMonster:",
category: 'state delegation',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._cell_addMonster_(self,aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"addMonster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "addMonster: aMonster\x0a\x09self state cell: self addMonster: aMonster",
messageSends: ["cell:addMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addRedSelector",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._red();
return self}, function($ctx1) {$ctx1.fill(self,"addRedSelector",{},smalltalk.CWCell)})},
args: [],
source: "addRedSelector\x0a\x09self gameOverTile red",
messageSends: ["red", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelector",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._addSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addSelector",{},smalltalk.CWCell)})},
args: [],
source: "addSelector\x0a\x09self state addSelector: self",
messageSends: ["addSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "addWhiteSelector",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._white();
return self}, function($ctx1) {$ctx1.fill(self,"addWhiteSelector",{},smalltalk.CWCell)})},
args: [],
source: "addWhiteSelector\x0a\x09self gameOverTile white",
messageSends: ["white", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "background",
category: 'accessing',
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
args: [],
source: "background\x0a\x09^ background ifNil: [ self error: 'should be initialized' ]",
messageSends: ["ifNil:", "error:"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAdd:",
category: 'accessing',
fn: function (aBackground){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._add_(aBackground);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAdd:",{aBackground:aBackground},smalltalk.CWCell)})},
args: ["aBackground"],
source: "backgroundAdd: aBackground\x0a\x09^ self background add: aBackground",
messageSends: ["add:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundAddAll:",
category: 'accessing',
fn: function (aCol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._background())._addAll_(aCol);
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundAddAll:",{aCol:aCol},smalltalk.CWCell)})},
args: ["aCol"],
source: "backgroundAddAll: aCol\x0a\x09^ self background addAll: aCol",
messageSends: ["addAll:", "background"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "canBeAttackedBy:",
category: 'state delegation',
fn: function (side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._cell_canBeAttackedBy_(self,side);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canBeAttackedBy:",{side:side},smalltalk.CWCell)})},
args: ["side"],
source: "canBeAttackedBy: side\x0a\x09^ self state cell: self canBeAttackedBy: side",
messageSends: ["cell:canBeAttackedBy:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'accessing',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=_st(stateClass)._default();
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWCell)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09state := stateClass default",
messageSends: ["default"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
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
args: [],
source: "children\x0a\x09| children | \x0a\x09children := Array new.\x0a\x09self monster ifNotNil: [ :var |\x0a\x09\x09children add: var ].\x0a\x09children add: self gameOverTile.\x0a\x09^ children\x0a\x09\x09addAll: self background;\x0a\x09\x09yourself",
messageSends: ["new", "ifNotNil:", "add:", "monster", "gameOverTile", "addAll:", "background", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._darken_(self);
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWCell)})},
args: [],
source: "darken\x0a\x09self state darken: self",
messageSends: ["darken:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'forwarding optimization',
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
args: [],
source: "desactivateMonsters\x0a\x09\x22you can remove this method, but it makes the game faster.\x22\x0a\x09self monster ifNotNil: [ :m | m desactivateMonsters ]",
messageSends: ["ifNotNil:", "desactivateMonsters", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "firstCoods",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@firstCoods"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"firstCoods",{},smalltalk.CWCell)})},
args: [],
source: "firstCoods\x0a\x09^ firstCoods",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "firstCoods:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@firstCoods"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"firstCoods:",{aPoint:aPoint},smalltalk.CWCell)})},
args: ["aPoint"],
source: "firstCoods: aPoint\x0a\x09firstCoods := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameOverTile"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTile\x0a\x09^ gameOverTile",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTile:",
category: 'accessing',
fn: function (aGOT){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameOverTile"]=aGOT;
return self}, function($ctx1) {$ctx1.fill(self,"gameOverTile:",{aGOT:aGOT},smalltalk.CWCell)})},
args: ["aGOT"],
source: "gameOverTile: aGOT\x0a\x09gameOverTile := aGOT",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "gameOverTileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWGameOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameOverTileClass",{},smalltalk.CWCell)})},
args: [],
source: "gameOverTileClass\x0a\x09^ CWGameOverTile",
messageSends: [],
referencedClasses: ["CWGameOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "hasMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isFree())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasMonster",{},smalltalk.CWCell)})},
args: [],
source: "hasMonster\x0a\x09^ self isFree not",
messageSends: ["not", "isFree"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWComposite.fn.prototype._initialize.apply(_st(self), []);
self["@mark"]=false;
self["@gameOverTile"]=_st(self)._newGOT();
_st(self)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWCell)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09mark := false.\x0a\x09gameOverTile := self newGOT.\x0a\x09self changeState: CWFree.",
messageSends: ["initialize", "newGOT", "changeState:"],
referencedClasses: ["CWFree"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["aJsonCell"],
source: "initializeFromJson: aJsonCell\x0a    | elements ots |\x0a    \x0a    elements := aJsonCell keys.\x0a    background := Array new.\x0a\x09\x0a\x09(elements includes: 'tile') \x0a    \x09ifTrue: [ self backgroundAdd: (self newTile initializeFromKey: aJsonCell tile) ].\x0a\x09\x22replace match: with beginsWith: later ...\x22\x0a\x09ots := aJsonCell keys select: [ :each | each match: 'overtile' ].\x0a\x09ots do: [ :each |\x0a\x09\x09self backgroundAdd: (self newOverTile initializeFromKey: (aJsonCell at: each) ) ].",
messageSends: ["keys", "new", "ifTrue:", "backgroundAdd:", "initializeFromKey:", "tile", "newTile", "includes:", "select:", "match:", "do:", "at:", "newOverTile"],
referencedClasses: ["Array"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFree();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCell)})},
args: [],
source: "isFree\x0a\x09\x22Answers true if cell free or freeselected\x22\x0a\x09^ self state isFree",
messageSends: ["isFree", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isFreeSelected();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWCell)})},
args: [],
source: "isFreeSelected\x0a\x09\x22Answers true if cell free or freeselected\x22\x0a\x09^ self state isFreeSelected",
messageSends: ["isFreeSelected", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "isMarked",
category: 'accessing - pathfinding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mark"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMarked",{},smalltalk.CWCell)})},
args: [],
source: "isMarked\x0a\x09^ mark",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._lighten_(self);
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWCell)})},
args: [],
source: "lighten\x0a\x09self state lighten: self",
messageSends: ["lighten:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mark",
category: 'accessing - pathfinding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"mark",{},smalltalk.CWCell)})},
args: [],
source: "mark\x0a\x09mark := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWCell)})},
args: [],
source: "monster\x0a\x09^ monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWCell)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseClick_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:",{gameContext:gameContext},smalltalk.CWCell)})},
args: ["gameContext"],
source: "mouseClick: gameContext\x0a\x09self state mouseClick: self context: gameContext.",
messageSends: ["mouseClick:context:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._mouseMove_context_(self,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:",{gameContext:gameContext},smalltalk.CWCell)})},
args: ["gameContext"],
source: "mouseMove: gameContext\x0a\x09self state mouseMove: self context: gameContext.",
messageSends: ["mouseMove:context:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "neighbours",
category: 'accessing - pathfinding',
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
args: [],
source: "neighbours\x0a\x09^ neighboursCache ifNil: [ neighboursCache := self parent neighboursOf: self ]",
messageSends: ["ifNil:", "neighboursOf:", "parent"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOT",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameOverTileClass())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOT",{},smalltalk.CWCell)})},
args: [],
source: "newGOT\x0a\x09 ^ self gameOverTileClass new",
messageSends: ["new", "gameOverTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newOverTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._overTileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newOverTile",{},smalltalk.CWCell)})},
args: [],
source: "newOverTile\x0a\x09 ^ self newChild: self overTileClass",
messageSends: ["newChild:", "overTileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "newTile",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._tileClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTile",{},smalltalk.CWCell)})},
args: [],
source: "newTile\x0a\x09 ^ self newChild: self tileClass ",
messageSends: ["newChild:", "tileClass"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "overTileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWOverTile(){return smalltalk.CWOverTile||(typeof CWOverTile=="undefined"?nil:CWOverTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWOverTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"overTileClass",{},smalltalk.CWCell)})},
args: [],
source: "overTileClass\x0a\x09^ CWOverTile",
messageSends: [],
referencedClasses: ["CWOverTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._neighbours();
return self}, function($ctx1) {$ctx1.fill(self,"prefillCaches",{},smalltalk.CWCell)})},
args: [],
source: "prefillCaches\x0a\x09self neighbours.",
messageSends: ["neighbours"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell",
category: 'accessing - pathfinding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@prevCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"prevCell",{},smalltalk.CWCell)})},
args: [],
source: "prevCell\x0a\x09^ prevCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "prevCell:",
category: 'accessing - pathfinding',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@prevCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"prevCell:",{aCell:aCell},smalltalk.CWCell)})},
args: ["aCell"],
source: "prevCell: aCell \x0a\x09prevCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
var rowNumber,row,cellIndex;
return smalltalk.withContext(function($ctx1) { 
row=_st(self)._parent();
cellIndex=_st(_st(row)._cells())._indexOf_(self);
rowNumber=_st(_st(_st(row)._parent())._rows())._indexOf_(row);
_st(_st(_st(_st(_st(aStream).__lt_lt("a Cell(")).__lt_lt(_st(rowNumber)._printString())).__lt_lt("-")).__lt_lt(_st(cellIndex)._printString())).__lt_lt(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream,rowNumber:rowNumber,row:row,cellIndex:cellIndex},smalltalk.CWCell)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22to debug only\x22\x0a\x0a\x09| rowNumber row cellIndex |\x0a\x09row := self parent.\x0a\x09cellIndex := row cells indexOf: self.\x0a\x09rowNumber := row parent rows indexOf: row.\x0a\x09aStream << 'a Cell(' << rowNumber printString << '-' << cellIndex printString << ')'",
messageSends: ["parent", "indexOf:", "cells", "rows", "<<", "printString"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeGameOverTile",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameOverTile())._invis();
return self}, function($ctx1) {$ctx1.fill(self,"removeGameOverTile",{},smalltalk.CWCell)})},
args: [],
source: "removeGameOverTile\x0a\x09self gameOverTile invis",
messageSends: ["invis", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster",{},smalltalk.CWCell)})},
args: [],
source: "removeMonster\x0a\x09self state removeMonster: self",
messageSends: ["removeMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._removeSelector_(self);
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWCell)})},
args: [],
source: "removeSelection\x0a\x09self state removeSelector: self",
messageSends: ["removeSelector:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWCell)})},
args: [],
source: "showActiveMonsters\x0a\x09self state showActiveMonster: self.",
messageSends: ["showActiveMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monster())._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWCell)})},
args: [],
source: "side\x0a\x09^ self monster side",
messageSends: ["side", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWCell)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "tileClass",
category: 'factory',
fn: function (){
var self=this;
function $CWTile(){return smalltalk.CWTile||(typeof CWTile=="undefined"?nil:CWTile)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWTile();
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileClass",{},smalltalk.CWCell)})},
args: [],
source: "tileClass\x0a\x09^ CWTile",
messageSends: [],
referencedClasses: ["CWTile"]
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
category: 'accessing - pathfinding',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mark"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWCell)})},
args: [],
source: "unmark\x0a\x09mark := false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
category: 'forwarding optimization',
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
args: [],
source: "updateUI\x0a\x09\x22you can remove this method, but it makes the game faster.\x22\x0a\x09self monster ifNotNil: [ :m | m updateUI ]",
messageSends: ["ifNotNil:", "updateUI", "monster"],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@zIndex"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"zIndex",{},smalltalk.CWCell)})},
args: [],
source: "zIndex\x0a\x09^ zIndex",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);

smalltalk.addMethod(
smalltalk.method({
selector: "zIndex:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@zIndex"]=anInt;
return self}, function($ctx1) {$ctx1.fill(self,"zIndex:",{anInt:anInt},smalltalk.CWCell)})},
args: ["anInt"],
source: "zIndex: anInt\x0a\x09zIndex := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCell);



smalltalk.addClass('CWOneChildClass', smalltalk.CWComposite, [], 'Easnoth-MapModel');
smalltalk.CWOneChildClass.comment="I am a standard composite except that all my children have the same class."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOneChildClass)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "addChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._add_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"addChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "addChild: object\x0a\x09^ self children add: object",
messageSends: ["add:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childAt:put:",
category: 'children management',
fn: function (index,object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._at_put_(index,object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"childAt:put:",{index:index,object:object},smalltalk.CWOneChildClass)})},
args: ["index", "object"],
source: "childAt: index put: object\x0a\x09^ self children at: index put: object",
messageSends: ["at:put:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWOneChildClass)})},
args: [],
source: "childBasicClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild",
category: 'factory',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newChild_(_st(self)._childBasicClass());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild",{},smalltalk.CWOneChildClass)})},
args: [],
source: "newChild\x0a\x09^ self newChild: self childBasicClass",
messageSends: ["newChild:", "childBasicClass"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);

smalltalk.addMethod(
smalltalk.method({
selector: "removeChild:",
category: 'children management',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._children())._remove_(object);
return $1;
}, function($ctx1) {$ctx1.fill(self,"removeChild:",{object:object},smalltalk.CWOneChildClass)})},
args: ["object"],
source: "removeChild: object\x0a\x09^ self children remove: object",
messageSends: ["remove:", "children"],
referencedClasses: []
}),
smalltalk.CWOneChildClass);



smalltalk.addClass('CWMap', smalltalk.CWOneChildClass, ['rows', 'drawer', 'cellsCache'], 'Easnoth-MapModel');
smalltalk.CWMap.comment="I represent the whole map in the game. "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitMap_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMap)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitMap: self",
messageSends: ["visitMap:"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
function $CWRow(){return smalltalk.CWRow||(typeof CWRow=="undefined"?nil:CWRow)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWRow();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWMap)})},
args: [],
source: "childBasicClass\x0a\x09^ CWRow",
messageSends: [],
referencedClasses: ["CWRow"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._rows();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWMap)})},
args: [],
source: "children\x0a\x09^ self rows",
messageSends: ["rows"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._clean();
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMap)})},
args: [],
source: "clean\x0a\x09drawer clean",
messageSends: ["clean"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._desactivateMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMap)})},
args: [],
source: "desactivateMonsters\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each desactivateMonsters ]",
messageSends: ["do:", "desactivateMonsters"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "drawer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@drawer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawer",{},smalltalk.CWMap)})},
args: [],
source: "drawer\x0a\x09^ drawer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeDrawer",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMapDrawer(){return smalltalk.CWMapDrawer||(typeof CWMapDrawer=="undefined"?nil:CWMapDrawer)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._prefillCaches();
self["@drawer"]=_st(_st($CWMapDrawer())._new())._initializeForMap_(self);
_st(self)._updateUI();
return self}, function($ctx1) {$ctx1.fill(self,"initializeDrawer",{},smalltalk.CWMap)})},
args: [],
source: "initializeDrawer\x0a\x09self prefillCaches.\x0a\x09drawer := CWMapDrawer new initializeForMap: self.\x0a\x09self updateUI.",
messageSends: ["prefillCaches", "initializeForMap:", "new", "updateUI"],
referencedClasses: ["CWMapDrawer"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize-release',
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
args: ["jsonMap"],
source: "initializeFromJson: jsonMap\x0a\x09\x22initialize the rows of the map, \x0a\x09the announcement is in case everything was already cached (page refresh for example)\x22\x0a\x09\x0a\x09| child rows1 |\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09rows1 := jsonMap row.\x0a\x09rows := Array new: rows1 size.\x0a\x0a\x09rows1 withIndexDo: [:row :i |\x0a\x09\x09child := self newChild.\x0a\x09\x09self childAt: i put: child.\x0a\x09\x09child initializeFromJson: row ].\x0a\x09\x09\x0a\x09self announce: CWObjectLoaded new.",
messageSends: ["announce:", "new", "row", "new:", "size", "withIndexDo:", "newChild", "childAt:put:", "initializeFromJson:"],
referencedClasses: ["CWWaitForObject", "Array", "CWObjectLoaded"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._lighten();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWMap)})},
args: [],
source: "lighten\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each lighten ]",
messageSends: ["do:", "lighten"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:cellIndex:",
category: 'neighbours',
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
args: ["row", "cellIndex"],
source: "neighboursOf: row cellIndex: cellIndex\x0a\x09| rowIndex neighbours |\x0a\x09rowIndex :=  self rows indexOf: row.\x0a\x09neighbours := Array new.\x0a\x09rowIndex = 1 \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex - 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09rowIndex = self rows size \x0a\x09\x09ifFalse: [ neighbours addAll: ((self childAt: rowIndex + 1) cellsNextToI: rowIndex j: cellIndex) ].\x0a\x09^ neighbours",
messageSends: ["indexOf:", "rows", "new", "ifFalse:", "addAll:", "cellsNextToI:j:", "childAt:", "-", "=", "+", "size"],
referencedClasses: ["Array"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "prefillCaches",
category: 'initialize-release',
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
args: [],
source: "prefillCaches\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache := Array new.\x0a\x09self children do: [ :row |\x0a\x09\x09row children do: [ :cell |\x0a\x09\x09\x09cellsCache add: cell.\x0a\x09\x09\x09cell prefillCaches ] ].\x0a\x09\x09",
messageSends: ["new", "do:", "add:", "prefillCaches", "children"],
referencedClasses: ["Array"]
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("a Map (");
_st($1)._nextPutAll_(_st(_st(self["@rows"])._size())._printString());
$2=_st($1)._nextPutAll_(" rows)");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMap)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream\x0a\x09\x09nextPutAll: 'a Map (';\x0a\x09\x09nextPutAll: rows size printString;\x0a\x09\x09nextPutAll: ' rows)'",
messageSends: ["nextPutAll:", "printString", "size"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelection",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._removeSelection();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"removeSelection",{},smalltalk.CWMap)})},
args: [],
source: "removeSelection\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each removeSelection ]",
messageSends: ["do:", "removeSelection"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWMap)})},
args: [],
source: "root\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "rows",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows",{},smalltalk.CWMap)})},
args: [],
source: "rows\x0a\x09^ rows",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonsters",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeSelection();
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonsters",{},smalltalk.CWMap)})},
args: [],
source: "showActiveMonsters\x0a\x09self removeSelection.\x0a\x09\x22just for speed ... If you play only on chrome put super showActiveMonsters\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each showActiveMonsters ]",
messageSends: ["removeSelection", "do:", "showActiveMonsters"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "unmark",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._unmark();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"unmark",{},smalltalk.CWMap)})},
args: [],
source: "unmark\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each unmark ]",
messageSends: ["do:", "unmark"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMap)})},
args: [],
source: "updateMap\x0a\x09drawer updateMap",
messageSends: ["updateMap"],
referencedClasses: []
}),
smalltalk.CWMap);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@cellsCache"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._updateUI();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWMap)})},
args: [],
source: "updateUI\x0a\x09\x22just for speed ... If you play only on chrome remove that crap\x22\x0a\x09cellsCache do: [ :each |\x0a\x09\x09each updateUI ]",
messageSends: ["do:", "updateUI"],
referencedClasses: []
}),
smalltalk.CWMap);


smalltalk.addMethod(
smalltalk.method({
selector: "newWithMapIndex:",
category: 'instance creation',
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
args: ["aMapIndex"],
source: "newWithMapIndex: aMapIndex\x0a\x09| map |\x0a\x09\x0a\x09map := self new.\x0a    jQuery \x0a\x09\x09getJSON: 'ressources/json/maps/map', aMapIndex, '.json' \x0a\x09\x09onSuccess: [:data | \x0a\x09\x09\x09map initializeFromJson: data].\x0a\x0a\x09^ map",
messageSends: ["new", "getJSON:onSuccess:", ",", "initializeFromJson:"],
referencedClasses: []
}),
smalltalk.CWMap.klass);


smalltalk.addClass('CWRow', smalltalk.CWOneChildClass, ['cells'], 'Easnoth-MapModel');
smalltalk.CWRow.comment="I represent a row of cells in the map."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitRow_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWRow)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitRow: self",
messageSends: ["visitRow:"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cells",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@cells"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"cells",{},smalltalk.CWRow)})},
args: [],
source: "cells\x0a\x09^ cells",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "cellsNextToI:j:",
category: 'neighbours',
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
args: ["i", "j"],
source: "cellsNextToI: i j: j \x0a\x09| neighbours |\x0a\x09neighbours := Array new.\x0a\x09self childAt: j  ifPresent: [ :child | neighbours add: child ] .\x0a\x09i \x5c\x5c 2 = 0 ifFalse: [\x0a\x09\x09j < self cells size ifTrue: [ self childAt: j + 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09] ifTrue: [\x0a\x09\x09j > 1 ifTrue: [ self childAt: j - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09].\x0a\x09^ neighbours",
messageSends: ["new", "childAt:ifPresent:", "add:", "ifFalse:ifTrue:", "ifTrue:", "+", "<", "size", "cells", "-", ">", "=", "\x5c\x5c"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "childBasicClass",
category: 'factory',
fn: function (){
var self=this;
function $CWCell(){return smalltalk.CWCell||(typeof CWCell=="undefined"?nil:CWCell)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWCell();
return $1;
}, function($ctx1) {$ctx1.fill(self,"childBasicClass",{},smalltalk.CWRow)})},
args: [],
source: "childBasicClass\x0a\x09^ CWCell",
messageSends: [],
referencedClasses: ["CWCell"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._cells();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWRow)})},
args: [],
source: "children\x0a\x09^ self cells",
messageSends: ["cells"],
referencedClasses: []
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromJson:",
category: 'initialize',
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
args: ["jsonRow"],
source: "initializeFromJson: jsonRow\x0a\x09| cells1 child |\x0a\x0a\x09cells1 := jsonRow cells.\x0a\x09cells := Array new: cells1 size.\x0a\x09\x0a\x09cells1 withIndexDo: [:cell :i |\x0a\x09\x09child :=  self newChild.\x0a\x09\x09child initializeFromJson: cell. \x0a\x09\x09self childAt: i put: child ].",
messageSends: ["cells", "new:", "size", "withIndexDo:", "newChild", "initializeFromJson:", "childAt:put:"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "neighboursOf:",
category: 'neighbours',
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
args: ["aCell"],
source: "neighboursOf: aCell\x0a\x09\x22Here we give a Set to simplify game logic later (no twice the cell in the set)\x22\x0a\x0a\x09| cellIndex neighbours |\x0a\x09neighbours := Array new.\x0a\x09cellIndex := self cells indexOf: aCell.\x0a\x09cellIndex = 1 \x0a\x09\x09ifFalse: [ self childAt: cellIndex - 1 ifPresent: [ :child | neighbours add: child ] ].\x0a\x09cellIndex = self cells size \x0a\x09\x09ifFalse: [ self childAt: cellIndex + 1  ifPresent: [ :child | neighbours add: child ] ].\x0a\x09neighbours addAll: (self parent neighboursOf: self cellIndex: cellIndex).\x0a\x09^ neighbours",
messageSends: ["new", "indexOf:", "cells", "ifFalse:", "childAt:ifPresent:", "-", "add:", "=", "+", "size", "addAll:", "neighboursOf:cellIndex:", "parent"],
referencedClasses: ["Array"]
}),
smalltalk.CWRow);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st("a Row (").__comma(_st(self["@cells"])._size())).__comma(" cells)");
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.CWRow)})},
args: [],
source: "printString\x0a\x09^ 'a Row (', cells size, ' cells)'",
messageSends: [",", "size"],
referencedClasses: []
}),
smalltalk.CWRow);



smalltalk.addClass('CWLeaf', smalltalk.CWComponent, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWLeaf)})},
args: [],
source: "children\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLeaf);



smalltalk.addClass('CWImageLeaf', smalltalk.CWLeaf, ['image'], 'Easnoth-MapModel');
smalltalk.CWImageLeaf.comment="I represent a leaf of the business objects tree that has an image. Usually only my instances are rendered when the CWDrawer visits the business object graph."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWImageLeaf)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@image"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"image",{},smalltalk.CWImageLeaf)})},
args: [],
source: "image\x0a\x09^ image",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=anImage;
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWImageLeaf)})},
args: ["anImage"],
source: "image: anImage\x0a\x09image := anImage",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeFromKey:",
category: 'initialize-release',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@image"]=_st(_st(self)._class())._imageCacheAt_(aKey);
return self}, function($ctx1) {$ctx1.fill(self,"initializeFromKey:",{aKey:aKey},smalltalk.CWImageLeaf)})},
args: ["aKey"],
source: "initializeFromKey: aKey\x0a\x09image := self class imageCacheAt: aKey",
messageSends: ["imageCacheAt:", "class"],
referencedClasses: []
}),
smalltalk.CWImageLeaf);

smalltalk.addMethod(
smalltalk.method({
selector: "isLeaf",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLeaf",{},smalltalk.CWImageLeaf)})},
args: [],
source: "isLeaf\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWImageLeaf);


smalltalk.CWImageLeaf.klass.iVarNames = ['imageCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWImageLeaf.klass)})},
args: [],
source: "folderName\x0a\x09self subclassResponsibility\x0a\x09",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCache",
category: 'caching',
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
args: [],
source: "imageCache\x0a\x09^ imageCache ifNil: [ imageCache := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageCacheAt:",
category: 'caching',
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
args: ["aKey"],
source: "imageCacheAt: aKey\x0a\x09^ self imageCache at: aKey ifAbsentPut: [ self newImageFrom: aKey ]\x0a\x09",
messageSends: ["at:ifAbsentPut:", "newImageFrom:", "imageCache"],
referencedClasses: []
}),
smalltalk.CWImageLeaf.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newImageFrom:",
category: 'caching',
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
args: ["aKey"],
source: "newImageFrom: aKey\x0a\x09\x22Create a new image and cache it. Announce start and end of asynchronous task\x22\x0a\x09\x0a\x09| announcer image |\x0a\x09\x0a\x09announcer := CWEasnothAnnouncer current.\x0a\x09image := NativeFunction constructor: 'Image'.\x0a\x09self imageCache at: aKey put: image.\x0a\x09announcer announce: CWWaitForObject new.\x0a\x09image at: 'onload' put: [ announcer announce: CWObjectLoaded new ].\x0a    image at: 'src' put:  'ressources/images/', self folderName, '/', aKey, '.png'.\x0a\x09\x0a\x09^ image",
messageSends: ["current", "constructor:", "at:put:", "imageCache", "announce:", "new", ",", "folderName"],
referencedClasses: ["CWEasnothAnnouncer", "NativeFunction", "CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWImageLeaf.klass);


smalltalk.addClass('CWBackground', smalltalk.CWImageLeaf, [], 'Easnoth-MapModel');
smalltalk.CWBackground.comment="I represent an element of the background (tiles, overtiles, ...). "
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWBackground)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWBackground);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "back";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWBackground.klass)})},
args: [],
source: "folderName\x0a\x09^ 'back'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWBackground.klass);


smalltalk.addClass('CWOverTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitOverTile: self",
messageSends: ["visitOverTile:"],
referencedClasses: []
}),
smalltalk.CWOverTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "overtiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWOverTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'overtiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWOverTile.klass);


smalltalk.addClass('CWTile', smalltalk.CWBackground, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitTile: self",
messageSends: ["visitTile:"],
referencedClasses: []
}),
smalltalk.CWTile);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWTile)})},
args: [],
source: "isWall\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile);


smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "tiles";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'tiles'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWTile.klass);


smalltalk.addClass('CWWall', smalltalk.CWTile, [], 'Easnoth-MapModel');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitWall_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWWall)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitWall: self",
messageSends: ["visitWall:"],
referencedClasses: []
}),
smalltalk.CWWall);

smalltalk.addMethod(
smalltalk.method({
selector: "isWall",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isWall",{},smalltalk.CWWall)})},
args: [],
source: "isWall\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWall);



smalltalk.addClass('CWGameOverTile', smalltalk.CWImageLeaf, ['htmlImage'], 'Easnoth-MapModel');
smalltalk.CWGameOverTile.comment="class side I have an image array to crete got faster as they are the most created / gc objects"
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'visiting',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitGameOverTile_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWGameOverTile)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ aVisitor visitGameOverTile: self",
messageSends: ["visitGameOverTile:"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "darken",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._darkGreenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"darken",{},smalltalk.CWGameOverTile)})},
args: [],
source: "darken\x0a\x09self image: (self class imageArray at: self class darkGreenIndex)",
messageSends: ["image:", "at:", "darkGreenIndex", "class", "imageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "green",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._greenIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"green",{},smalltalk.CWGameOverTile)})},
args: [],
source: "green\x0a\x09self image: (self class imageArray at: self class greenIndex)",
messageSends: ["image:", "at:", "greenIndex", "class", "imageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "htmlImage:",
category: 'accessing',
fn: function (aHTMLElem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@htmlImage"]=_st(aHTMLElem)._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"htmlImage:",{aHTMLElem:aHTMLElem},smalltalk.CWGameOverTile)})},
args: ["aHTMLElem"],
source: "htmlImage: aHTMLElem\x0a\x09htmlImage := aHTMLElem asJQuery",
messageSends: ["asJQuery"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "image:",
category: 'accessing',
fn: function (anImage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@htmlImage"])._attr_put_("src",_st(anImage)._src());
return self}, function($ctx1) {$ctx1.fill(self,"image:",{anImage:anImage},smalltalk.CWGameOverTile)})},
args: ["anImage"],
source: "image: anImage\x0a\x09htmlImage attr: 'src' put: anImage src",
messageSends: ["attr:put:", "src"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "invis",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._invisIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"invis",{},smalltalk.CWGameOverTile)})},
args: [],
source: "invis\x0a\x09self image: (self class imageArray at: self class invisIndex)",
messageSends: ["image:", "at:", "invisIndex", "class", "imageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._green();
return self}, function($ctx1) {$ctx1.fill(self,"lighten",{},smalltalk.CWGameOverTile)})},
args: [],
source: "lighten\x0a\x09self green",
messageSends: ["green"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "red",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._redIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"red",{},smalltalk.CWGameOverTile)})},
args: [],
source: "red\x0a\x09self image: (self class imageArray at: self class redIndex)",
messageSends: ["image:", "at:", "redIndex", "class", "imageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);

smalltalk.addMethod(
smalltalk.method({
selector: "white",
category: 'coloring',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._image_(_st(_st(_st(self)._class())._imageArray())._at_(_st(_st(self)._class())._whiteIndex()));
return self}, function($ctx1) {$ctx1.fill(self,"white",{},smalltalk.CWGameOverTile)})},
args: [],
source: "white\x0a\x09self image: (self class imageArray at: self class whiteIndex)",
messageSends: ["image:", "at:", "whiteIndex", "class", "imageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile);


smalltalk.CWGameOverTile.klass.iVarNames = ['imageArray'];
smalltalk.addMethod(
smalltalk.method({
selector: "createImageArray",
category: 'array',
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
args: [],
source: "createImageArray\x0a\x09imageArray := Array new: 5.\x0a\x09imageArray \x0a\x09\x09at: self greenIndex put: (self imageCacheAt: 'green');\x0a\x09\x09at: self darkGreenIndex put: (self imageCacheAt: 'darkGreen');\x0a\x09\x09at: self redIndex put: (self imageCacheAt: 'red');\x0a\x09\x09at: self whiteIndex put: (self imageCacheAt: 'white');\x0a\x09\x09at: self invisIndex put: (self imageCacheAt: 'invis').\x0a\x09^ imageArray",
messageSends: ["new:", "at:put:", "greenIndex", "imageCacheAt:", "darkGreenIndex", "redIndex", "whiteIndex", "invisIndex"],
referencedClasses: ["Array"]
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "darkGreenIndex",
category: 'index',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(5);
return $1;
}, function($ctx1) {$ctx1.fill(self,"darkGreenIndex",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "darkGreenIndex\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "gots";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "folderName\x0a\x09^ 'gots'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "greenIndex",
category: 'index',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"greenIndex",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "greenIndex\x0a\x09^ 1",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "imageArray",
category: 'array',
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
args: [],
source: "imageArray\x0a\x09^ imageArray ifNil: [ self createImageArray ]",
messageSends: ["ifNil:", "createImageArray"],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "invisIndex",
category: 'index',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"invisIndex",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "invisIndex\x0a\x09^ 4",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "redIndex",
category: 'index',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"redIndex",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "redIndex\x0a\x09^ 2",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whiteIndex",
category: 'index',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"whiteIndex",{},smalltalk.CWGameOverTile.klass)})},
args: [],
source: "whiteIndex\x0a\x09^ 3",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameOverTile.klass);


smalltalk.addClass('CWMonster', smalltalk.CWImageLeaf, ['currentMove', 'move', 'attack', 'dices', 'hp', 'range', 'state', 'player', 'special', 'strategy', 'typeStrategy', 'canvas'], 'Easnoth-MapModel');
smalltalk.CWMonster.comment="I represent people on the map. My instances variables are the stats of the guy I represent."
smalltalk.addMethod(
smalltalk.method({
selector: "accept:",
category: 'strategy delegation',
fn: function (aVisitor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._accept_for_(aVisitor,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:",{aVisitor:aVisitor},smalltalk.CWMonster)})},
args: ["aVisitor"],
source: "accept: aVisitor\x0a\x09^ strategy accept: aVisitor for: self",
messageSends: ["accept:for:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "activate",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._activate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"activate",{},smalltalk.CWMonster)})},
args: [],
source: "activate\x0a\x09self state activate: self",
messageSends: ["activate:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "addSelectorsTo:",
category: 'selection',
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
args: ["cells"],
source: "addSelectorsTo: cells\x0a\x0a\x09self root removeSelection.\x0a\x09cells do: [:each | each addSelector ].\x0a\x09\x0a\x09^ cells",
messageSends: ["removeSelection", "root", "do:", "addSelector"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animPath:iterator:callback:",
category: 'move',
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
args: ["path", "j", "callback"],
source: "animPath: path iterator: j callback: callback\x0a\x09| cell1FirstCoods cell2 pathSize |\x0a\x09\x0a\x09pathSize := path size.\x0a\x09\x0a\x09j = pathSize\x0a\x09\x09ifTrue: [ ^ callback value ].\x0a\x09\x09\x09\x0a\x09cell1FirstCoods := self parent firstCoods.\x0a\x09cell2 := path at: pathSize - j.\x0a\x09self changeCell: cell2.\x0a\x09self decreaseCurrentMove.\x0a\x09\x09\x0a\x09self canvas asJQuery\x0a\x09\x09animate: #{ \x0a\x09\x09\x09'left' -> ('+=' , (cell2 firstCoods x - cell1FirstCoods x) , 'px') .\x0a\x09\x09\x09'top' -> ('+=' , (cell2 firstCoods y - cell1FirstCoods y) , 'px') }\x0a       \x09duration: 300\x0a     \x09easing: 'linear'\x0a\x09\x09complete: [ self animPath: path iterator: j + 1 callback: callback ].",
messageSends: ["size", "ifTrue:", "value", "=", "firstCoods", "parent", "at:", "-", "changeCell:", "decreaseCurrentMove", "animate:duration:easing:complete:", "->", ",", "x", "y", "animPath:iterator:callback:", "+", "asJQuery", "canvas"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "animationMoveTo:callback:",
category: 'move',
fn: function (cellLast,callback){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
path=_st(self)._pathTo_(cellLast);
_st(_st(cellLast)._root())._removeSelection();
_st(self)._animPath_iterator_callback_(path,(1),callback);
return self}, function($ctx1) {$ctx1.fill(self,"animationMoveTo:callback:",{cellLast:cellLast,callback:callback,path:path},smalltalk.CWMonster)})},
args: ["cellLast", "callback"],
source: "animationMoveTo: cellLast callback: callback\x0a\x09\x0a\x09| path |\x0a\x09\x0a\x09path := self pathTo: cellLast.\x0a\x09cellLast root removeSelection.\x0a\x09\x0a\x09self animPath: path iterator: 1 callback: callback",
messageSends: ["pathTo:", "removeSelection", "root", "animPath:iterator:callback:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "announceUpdate",
category: 'rendering',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMonsterUpdateEvent())._new())._monster_(self));
return self}, function($ctx1) {$ctx1.fill(self,"announceUpdate",{},smalltalk.CWMonster)})},
args: [],
source: "announceUpdate\x0a\x09self announce: (CWMonsterUpdateEvent new monster: self)",
messageSends: ["announce:", "monster:", "new"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@attack"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack",{},smalltalk.CWMonster)})},
args: [],
source: "attack\x0a\x09^ attack",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attack"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"attack:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "attack: int\x0a\x09attack := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:",
category: 'fighting',
fn: function (anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_attackNeighbour_inContext_(self,anotherMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attack:inContext:",{anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["anotherMonster", "gameContext"],
source: "attack: anotherMonster inContext: gameContext\x0a\x09\x22Dispatch to type strategy for advantages of attacks and goes to attack:InContext:bonus:\x22\x0a\x09\x0a\x09^ typeStrategy monster: self attackNeighbour: anotherMonster inContext: gameContext",
messageSends: ["monster:attackNeighbour:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attack:inContext:bonus:",
category: 'fighting',
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
args: ["anotherMonster", "gameContext", "int"],
source: "attack: anotherMonster inContext: gameContext bonus: int\x0a\x09\x22int is for now -1 0 or 1 and represents the advantages / disadvantages of attacks\x22\x0a\x09\x22Support is now commented, uncomment the big thing to put it back. But it needs some refactorings ..\x22\x0a\x09\x0a\x09| ennemySupport ennemyHerosSupport ennemyUnitSupport support herosSupport unitSupport bonusDices bonusAttack |\x0a\x09\x0a\x09\x22ennemySupport := self support.\x0a\x09ennemySupport := ennemySupport remove: anotherMonster parent ifAbsent: [\x22\x22range attack\x22\x22].\x0a\x09ennemyHerosSupport := ( ennemySupport select: [ :each | each monster isHeros ] ) size.\x0a\x09ennemyUnitSupport := ennemySupport size - ennemyHerosSupport.\x0a\x09\x0a\x09support := anotherMonster support.\x0a\x09support := support remove: self parent ifAbsent: [\x22\x22range attack\x22\x22].\x0a\x09herosSupport := ( support select: [ :each | each monster isHeros ] ) size.\x0a\x09unitSupport := support size - herosSupport.\x0a\x09\x0a\x09bonusDices := int + herosSupport - ennemyHerosSupport.\x0a\x09bonusAttack := ( int + unitSupport - ennemyUnitSupport ) * 10.\x22\x0a\x09\x0a\x09bonusDices := int.\x0a\x09bonusAttack := int * 10.\x0a\x09\x0a\x09bonusDices + self dices < 1 ifTrue: [ bonusDices := (self dices - 1) negated \x221 dice min\x22 ]. \x0a\x09\x0a\x09self resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack",
messageSends: ["*", "ifTrue:", "negated", "-", "dices", "<", "+", "resolveAttack:inContext:bonusDices:bonusAttack:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotential",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attack"]).__star(self["@dices"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotential",{},smalltalk.CWMonster)})},
args: [],
source: "attackPotential\x0a\x09\x22Answers the power of attack of the monster\x22\x0a\x09^ attack * dices",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackPotentialFor:",
category: 'accessing',
fn: function (target){
var self=this;
var adv;
return smalltalk.withContext(function($ctx1) { 
var $1;
adv=_st(self["@typeStrategy"])._bonusVS_(target);
$1=_st(_st(_st(self["@attack"]).__plus((10))).__star(adv)).__star(_st(self["@dices"]).__plus(adv));
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackPotentialFor:",{target:target,adv:adv},smalltalk.CWMonster)})},
args: ["target"],
source: "attackPotentialFor: target\x0a\x09\x22Answers the power of attack of the monster considering target weakness and strength\x22\x0a\x09| adv |\x0a\x09adv := typeStrategy bonusVS: target.\x0a\x09^ (attack + 10 * adv) * (dices + adv)",
messageSends: ["bonusVS:", "*", "+"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_attackTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"attackTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "attackTo: aCell inContext: gameContext\x0a\x09self state monster: self attackTo: aCell inContext: gameContext",
messageSends: ["monster:attackTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "attackableNeighbours",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monsterSelection())._second();
return $1;
}, function($ctx1) {$ctx1.fill(self,"attackableNeighbours",{},smalltalk.CWMonster)})},
args: [],
source: "attackableNeighbours\x0a\x09^ self monsterSelection second",
messageSends: ["second", "monsterSelection"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSCavalry();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWMonster)})},
args: [],
source: "bonusVSCavalry\x0a\x09^ typeStrategy bonusVSCavalry",
messageSends: ["bonusVSCavalry"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSRange();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWMonster)})},
args: [],
source: "bonusVSRange\x0a\x09^ typeStrategy bonusVSRange",
messageSends: ["bonusVSRange"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._bonusVSTroop();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWMonster)})},
args: [],
source: "bonusVSTroop\x0a\x09^ typeStrategy bonusVSTroop",
messageSends: ["bonusVSTroop"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWMonster)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aCanvas:aCanvas},smalltalk.CWMonster)})},
args: ["aCanvas"],
source: "canvas: aCanvas\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeAttack:context:",
category: 'move',
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
args: ["cellLast", "gameContext"],
source: "cellToMoveBeforeAttack: cellLast context: gameContext\x0a\x09\x22Assumes that a monster is at self and want to attack cellLast's monster, which is not a neighbour.\x0a\x09Answers the closest cell from cell1 that the current monster can reach to attack cellLast's monster\x22\x0a\x09\x0a\x09self isRanged ifTrue: [ ^ self cellToMoveBeforeRangeAttack: cellLast ].\x0a\x09(gameContext relatedCell ifNotNil: [ :it | it isFreeSelected ] ifNil: [ false ] ) ifTrue: [ ^ gameContext relatedCell ]. \x0a\x09(cellLast neighbours includes: self parent) ifTrue: [ ^ self parent ].\x0a\x0a\x09^ (self pathTo: cellLast) at: 2",
messageSends: ["ifTrue:", "cellToMoveBeforeRangeAttack:", "isRanged", "relatedCell", "ifNotNil:ifNil:", "isFreeSelected", "parent", "includes:", "neighbours", "at:", "pathTo:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cellToMoveBeforeRangeAttack:",
category: 'move',
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
args: ["cellLast"],
source: "cellToMoveBeforeRangeAttack: cellLast\x0a\x09| shortestPath |\x0a\x09\x0a\x09shortestPath := self pathTo: cellLast. \x22shortest fake track to ennemy\x22\x0a\x09shortestPath size < (self range + 1) ifTrue: [ ^ self parent ]. \x22for AI move calculs only\x22\x0a\x09^ shortestPath at: self range + 1. \x22in fake track, get furthest from ennemy cell where you can attack him\x22",
messageSends: ["pathTo:", "ifTrue:", "parent", "<", "+", "range", "size", "at:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeCell:",
category: 'move',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(aCell)._addMonster_(self);
_st(_st(_st(self)._canvas())._asJQuery())._css_put_("z-index",_st(aCell)._zIndex());
return self}, function($ctx1) {$ctx1.fill(self,"changeCell:",{aCell:aCell},smalltalk.CWMonster)})},
args: ["aCell"],
source: "changeCell: aCell\x0a    self parent removeMonster.\x0a\x09aCell addMonster: self.\x0a\x09self canvas asJQuery css: 'z-index' put: aCell zIndex",
messageSends: ["removeMonster", "parent", "addMonster:", "css:put:", "zIndex", "asJQuery", "canvas"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "changeState:",
category: 'accessing',
fn: function (stateClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@state"]=_st(stateClass)._default();
return self}, function($ctx1) {$ctx1.fill(self,"changeState:",{stateClass:stateClass},smalltalk.CWMonster)})},
args: ["stateClass"],
source: "changeState: stateClass\x0a\x09state := stateClass default",
messageSends: ["default"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn",
category: 'state delegation',
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
args: [],
source: "checkForNextTurn\x0a\x09self currentMove > 0 ifTrue: [ ^ self ].\x0a\x09self state checkForNextTurn: self",
messageSends: ["ifTrue:", ">", "currentMove", "checkForNextTurn:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cleanUI",
category: 'rendering',
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(_st(self)._canvas())._element();
_st(_st(self)._context())._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"cleanUI",{elem:elem},smalltalk.CWMonster)})},
args: [],
source: "cleanUI\x0a\x09| elem |\x0a\x09elem := self canvas element.\x0a\x09self context clearRect: 0 y: 0 width: elem width height: elem height.",
messageSends: ["element", "canvas", "clearRect:y:width:height:", "width", "height", "context"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.CWMonster)})},
args: [],
source: "context\x0a\x09^ canvas element getContext: '2d'",
messageSends: ["getContext:", "element"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentMove"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMove",{},smalltalk.CWMonster)})},
args: [],
source: "currentMove\x0a\x09^ currentMove",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMove:",
category: 'accessing',
fn: function (int){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@currentMove"]=int;
_st(self)._announce_(_st($CWMonsterUpdateEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"currentMove:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "currentMove: int\x0a\x09currentMove := int.\x0a\x09self announce: CWMonsterUpdateEvent new",
messageSends: ["announce:", "new"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "decreaseCurrentMove",
category: 'move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._currentMove_(_st(_st(self)._currentMove()).__minus((1)));
_st(self)._announceUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"decreaseCurrentMove",{},smalltalk.CWMonster)})},
args: [],
source: "decreaseCurrentMove\x0a\x09self currentMove: self currentMove - 1.\x0a\x09self announceUpdate. \x22shows it on the monster selected panel\x22",
messageSends: ["currentMove:", "-", "currentMove", "announceUpdate"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHp",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._defaultHP();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHp",{},smalltalk.CWMonster)})},
args: [],
source: "defaultHp\x0a\x09^ strategy defaultHP",
messageSends: ["defaultHP"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultState",
category: 'accessing',
fn: function (){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$CWInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultState",{},smalltalk.CWMonster)})},
args: [],
source: "defaultState\x0a\x09\x22When map is initialized the monster will get this state by default\x22\x0a\x09^ CWInactive",
messageSends: [],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "defensePotential",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@hp"]).__star((100));
return $1;
}, function($ctx1) {$ctx1.fill(self,"defensePotential",{},smalltalk.CWMonster)})},
args: [],
source: "defensePotential\x0a\x09\x22Answers the power of defense of the monster\x22\x0a\x09^ hp * 100",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivateMonsters",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._desactivate_(self);
return self}, function($ctx1) {$ctx1.fill(self,"desactivateMonsters",{},smalltalk.CWMonster)})},
args: [],
source: "desactivateMonsters\x0a\x09self state desactivate: self",
messageSends: ["desactivate:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWMonster)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "die",
category: 'fighting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._parent())._removeMonster();
_st(_st(self)._player())._removeMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"die",{},smalltalk.CWMonster)})},
args: [],
source: "die\x0a\x09self parent removeMonster.\x0a\x09self player removeMonster: self.",
messageSends: ["removeMonster", "parent", "removeMonster:", "player"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "display:cood:",
category: 'rendering',
fn: function (monster,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(monster)._image(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"display:cood:",{monster:monster,aPoint:aPoint},smalltalk.CWMonster)})},
args: ["monster", "aPoint"],
source: "display: monster cood: aPoint\x0a\x09self context\x0a\x09\x09drawImage: monster image\x0a\x09\x09x: aPoint x\x0a\x09\x09y: aPoint y.",
messageSends: ["drawImage:x:y:", "image", "x", "y", "context"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._hasPlayed_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed",{},smalltalk.CWMonster)})},
args: [],
source: "hasPlayed\x0a\x09^ self state hasPlayed: self",
messageSends: ["hasPlayed:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@hp"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"hp",{},smalltalk.CWMonster)})},
args: [],
source: "hp\x0a\x09^ hp",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "hp:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@hp"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"hp:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "hp: int\x0a\x09hp := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWImageLeaf.fn.prototype._initialize.apply(_st(self), []);
_st(self)._currentMove_((0));
_st(self)._initializeState();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonster)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self currentMove: 0.\x0a\x09self initializeState",
messageSends: ["initialize", "currentMove:", "initializeState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeState",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._changeState_(_st(self)._defaultState());
return self}, function($ctx1) {$ctx1.fill(self,"initializeState",{},smalltalk.CWMonster)})},
args: [],
source: "initializeState\x0a\x09self changeState: self defaultState",
messageSends: ["changeState:", "defaultState"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithStat:army:player:heros:type:",
category: 'initialize-release',
fn: function (jsonStat,army,aPlayer,strat,aType){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._player_(aPlayer);
self["@strategy"]=_st(strat)._default();
self["@typeStrategy"]=_st(aType)._default();
_st(self)._stats_(jsonStat);
smalltalk.CWImageLeaf.fn.prototype._initializeFromKey_.apply(_st(self), [_st(_st(army).__comma("/")).__comma(_st(self)._key())]);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithStat:army:player:heros:type:",{jsonStat:jsonStat,army:army,aPlayer:aPlayer,strat:strat,aType:aType},smalltalk.CWMonster)})},
args: ["jsonStat", "army", "aPlayer", "strat", "aType"],
source: "initializeWithStat: jsonStat army: army player: aPlayer heros: strat type: aType\x0a\x09self player: aPlayer.\x0a\x09strategy := strat default.\x0a\x09typeStrategy := aType default.\x0a\x09self stats: jsonStat.\x0a\x09super initializeFromKey: army, '/', self key.",
messageSends: ["player:", "default", "stats:", "initializeFromKey:", ",", "key"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByCavalry:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByCavalry_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByCavalry:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByCavalry: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByCavalry: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByCavalry:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByRange:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByRange_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByRange:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByRange: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByRange: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByRange:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isAttackedByTroop:inContext:",
category: 'fighting',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._monster_isAttackedByTroop_inContext_(self,aMonster,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAttackedByTroop:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aMonster", "gameContext"],
source: "isAttackedByTroop: aMonster inContext: gameContext\x0a\x09^ typeStrategy monster: self isAttackedByTroop: aMonster inContext: gameContext",
messageSends: ["monster:isAttackedByTroop:inContext:"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strategy"])._isHeros();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonster)})},
args: [],
source: "isHeros\x0a\x09^ strategy isHeros",
messageSends: ["isHeros"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._state())._isInactive();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonster)})},
args: [],
source: "isInactive\x0a\x09^ self state isInactive",
messageSends: ["isInactive", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@typeStrategy"])._isRanged();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonster)})},
args: [],
source: "isRanged\x0a\x09^ typeStrategy isRanged",
messageSends: ["isRanged"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "isUnit",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._isHeros())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isUnit",{},smalltalk.CWMonster)})},
args: [],
source: "isUnit\x0a\x09^ self isHeros not",
messageSends: ["not", "isHeros"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@typeStrategy"])._key()).__comma(_st(self["@strategy"])._key());
return $1;
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonster)})},
args: [],
source: "key\x0a\x09^ typeStrategy key, strategy key",
messageSends: [",", "key"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterSelection",
category: 'selection',
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
args: [],
source: "monsterSelection\x0a\x09\x22this used to be divided into several methods, but it is now in 1 to be faster...\x0a\x09Answers the cells the monster can attack or move\x22\x0a\x09| movableCells newMovableCells attackableCells tempSet cycleNumber |\x0a\x09\x0a\x09self root unmark.\x0a\x09self parent mark.\x0a\x09\x0a\x09tempSet := Array new.\x0a\x09attackableCells := Array new.\x0a\x09movableCells := Array new.\x0a\x09cycleNumber := self range + self currentMove.\x0a\x09\x0a\x09newMovableCells := { self parent }.\x0a\x091 to: cycleNumber do: [ :i |\x0a\x09\x09tempSet reset.\x0a\x09\x09newMovableCells do: [ :each | \x0a\x09\x09\x09each neighbours do: [ :neigh | \x0a\x09\x09\x09\x09neigh isMarked \x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09neigh mark.\x0a\x09\x09\x09\x09\x09\x09neigh prevCell: each.\x0a\x09\x09\x09\x09\x09\x09neigh isFree ifTrue: [ tempSet add: neigh ].\x0a\x09\x09\x09\x09\x09\x09(neigh canBeAttackedBy: self side) ifTrue: [ attackableCells add: neigh ]] ] ].\x0a\x09\x09i = 1 | (i - 1 > self currentMove) ifFalse: [\x0a\x09\x09\x09movableCells addAll: newMovableCells].\x0a\x09\x09newMovableCells reset.\x0a\x09\x09newMovableCells addAll: tempSet].\x0a\x09\x0a\x09 ^ { movableCells . attackableCells }",
messageSends: ["unmark", "root", "mark", "parent", "new", "+", "currentMove", "range", "to:do:", "reset", "do:", "ifFalse:", "prevCell:", "ifTrue:", "add:", "isFree", "canBeAttackedBy:", "side", "isMarked", "neighbours", "addAll:", "|", ">", "-", "="],
referencedClasses: ["Array"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "movableNeighbours",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._monsterSelection())._first();
return $1;
}, function($ctx1) {$ctx1.fill(self,"movableNeighbours",{},smalltalk.CWMonster)})},
args: [],
source: "movableNeighbours\x0a\x09^ self monsterSelection first",
messageSends: ["first", "monsterSelection"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@move"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.CWMonster)})},
args: [],
source: "move\x0a\x09^ move",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "move:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@move"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"move:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "move: int\x0a\x09move := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:",
category: 'state delegation',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._monster_moveTo_inContext_(self,aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"moveTo:inContext:",{aCell:aCell,gameContext:gameContext},smalltalk.CWMonster)})},
args: ["aCell", "gameContext"],
source: "moveTo: aCell inContext: gameContext\x0a\x09self state monster: self moveTo: aCell inContext: gameContext",
messageSends: ["monster:moveTo:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "moveTo:inContext:callback:",
category: 'move',
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
args: ["aCell", "gameContext", "callback"],
source: "moveTo: aCell inContext: gameContext callback: callback\x0a\x09\x22triggers the animation for the monster move\x22\x0a\x09\x0a\x09self animationMoveTo: aCell callback: [\x09\x0a\x09\x09self state changeStateAfterMoving: self.\x0a\x09\x09self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn.\x0a\x09\x09callback value.\x0a\x09].",
messageSends: ["animationMoveTo:callback:", "changeStateAfterMoving:", "state", "selectInContext:", "checkForNextTurn", "value"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "pathTo:",
category: 'move',
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
args: ["cellLast"],
source: "pathTo: cellLast\x0a\x09\x22Assumes that some cells are selected and that the player clicked on a selected cell.\x0a\x09Answers the shortest path from the current cell to the cell clicked\x22\x0a\x0a\x09| path |\x0a\x09path := Array with: cellLast.\x0a\x09[ self parent = path last ] whileFalse: [ path add: path last prevCell ].\x0a\x09^ path",
messageSends: ["with:", "whileFalse:", "add:", "prevCell", "last", "=", "parent"],
referencedClasses: ["Array"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@player"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"player",{},smalltalk.CWMonster)})},
args: [],
source: "player\x0a\x09^ player",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "player:",
category: 'accessing',
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@player"]=aPlayer;
return self}, function($ctx1) {$ctx1.fill(self,"player:",{aPlayer:aPlayer},smalltalk.CWMonster)})},
args: ["aPlayer"],
source: "player: aPlayer\x0a\x09player := aPlayer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("a Monster(");
_st(aStream)._nextPutAll_(_st(_st(self)._parent())._printString());
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWMonster)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'a Monster('.\x0a\x09aStream nextPutAll: self parent printString.\x0a\x09aStream nextPutAll: ')'.",
messageSends: ["nextPutAll:", "printString", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@range"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"range",{},smalltalk.CWMonster)})},
args: [],
source: "range\x0a\x09^ range",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "range:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@range"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"range:",{int:int},smalltalk.CWMonster)})},
args: ["int"],
source: "range: int\x0a\x09range := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToBePicked",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._readyToPick_(self);
return self}, function($ctx1) {$ctx1.fill(self,"readyToBePicked",{},smalltalk.CWMonster)})},
args: [],
source: "readyToBePicked\x0a\x09self state readyToPick: self",
messageSends: ["readyToPick:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeHP:",
category: 'fighting',
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
args: ["anInt"],
source: "removeHP: anInt\x0a     self hp: self hp - anInt.\x0a     self hp < 1 \x0a\x09\x09ifTrue: [ self die. self cleanUI ]\x0a\x09\x09ifFalse: [ self updateUI ]",
messageSends: ["hp:", "-", "hp", "ifTrue:ifFalse:", "die", "cleanUI", "updateUI", "<"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "resolveAttack:inContext:bonusDices:bonusAttack:",
category: 'fighting',
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
args: ["anotherMonster", "gameContext", "bonusDices", "bonusAttack"],
source: "resolveAttack: anotherMonster inContext: gameContext bonusDices: bonusDices bonusAttack: bonusAttack\x0a\x0a\x09self state changeStateAfterAttacking: self.\x0a    self root removeSelection.\x0a\x0a\x09self rollDicesCallBack: [ :diceRes |\x0a\x09\x09anotherMonster removeHP: diceRes kills.\x0a        self selectInContext: gameContext.\x0a\x09\x09self checkForNextTurn ] bonusDices: bonusDices bonusAttack: bonusAttack",
messageSends: ["changeStateAfterAttacking:", "state", "removeSelection", "root", "rollDicesCallBack:bonusDices:bonusAttack:", "removeHP:", "kills", "selectInContext:", "checkForNextTurn"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:cood:",
category: 'rendering',
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
args: ["monster", "cood"],
source: "reverseDisplay: monster cood: cood\x0a\x09[self context\x0a\x09\x09\x09translate: cood x y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09self display: monster cood: 0@(cood y) ]\x0a\x09ensure: [\x22faster than save and restore\x22\x0a\x09self context\x0a\x09\x09scale: -1 y: 1;\x0a\x09\x09translate: cood x negated y: 0]",
messageSends: ["ensure:", "scale:y:", "context", "translate:y:", "negated", "x", "display:cood:", "@", "y"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "rollDicesCallBack:bonusDices:bonusAttack:",
category: 'fighting',
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
args: ["aBlock", "bonusDices", "bonusAttack"],
source: "rollDicesCallBack: aBlock bonusDices: bonusDices bonusAttack: bonusAttack\x0a\x09\x22roll the dices to attack an ennemy\x22\x0a\x09\x0a\x09| kill dicesRolledEvent |\x0a\x09\x0a\x09kill := (1 to: self dices + bonusDices) inject: 0 into: [ :acc :index | \x0a\x09\x09100 atRandom < (self attack + bonusAttack)\x0a\x09\x09\x09ifTrue: [ acc + 1 ] \x0a\x09\x09\x09ifFalse: [ acc ] ]. \x0a\x09dicesRolledEvent := CWDicesRolledEvent new\x0a\x09\x09kills: kill;\x0a\x09\x09dices: self dices + bonusDices;\x0a\x09\x09callback: aBlock;\x0a\x09\x09yourself.\x0a\x09self announce: dicesRolledEvent",
messageSends: ["inject:into:", "ifTrue:ifFalse:", "+", "<", "attack", "atRandom", "to:", "dices", "kills:", "new", "dices:", "callback:", "yourself", "announce:"],
referencedClasses: ["CWDicesRolledEvent"]
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectActionCells",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._selectableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectActionCells",{},smalltalk.CWMonster)})},
args: [],
source: "selectActionCells\x0a\x09^ self addSelectorsTo: self selectableNeighbours",
messageSends: ["addSelectorsTo:", "selectableNeighbours"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectAttackableCells",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._attackableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectAttackableCells",{},smalltalk.CWMonster)})},
args: [],
source: "selectAttackableCells\x0a\x09^ self addSelectorsTo: self attackableNeighbours",
messageSends: ["addSelectorsTo:", "attackableNeighbours"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectInContext:",
category: 'state delegation',
fn: function (gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self)._announceUpdate();
$1=_st(_st(self)._state())._select_inContext_(self,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectInContext:",{gameContext:gameContext},smalltalk.CWMonster)})},
args: ["gameContext"],
source: "selectInContext: gameContext\x0a\x09self announceUpdate.\x0a\x09^ self state select: self inContext: gameContext",
messageSends: ["announceUpdate", "select:inContext:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectMovableCells",
category: 'selection',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._addSelectorsTo_(_st(self)._movableNeighbours());
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectMovableCells",{},smalltalk.CWMonster)})},
args: [],
source: "selectMovableCells\x0a\x09^ self addSelectorsTo: self movableNeighbours",
messageSends: ["addSelectorsTo:", "movableNeighbours"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "selectableNeighbours",
category: 'selection',
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
args: [],
source: "selectableNeighbours\x0a\x09| moveAttack |\x0a\x09moveAttack := self monsterSelection.\x0a\x09moveAttack first addAll: moveAttack second.\x0a\x09^ moveAttack first",
messageSends: ["monsterSelection", "addAll:", "second", "first"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster",
category: 'state delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._state())._showActiveMonster_(self);
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster",{},smalltalk.CWMonster)})},
args: [],
source: "showActiveMonster\x0a\x09self state showActiveMonster: self",
messageSends: ["showActiveMonster:", "state"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@player"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWMonster)})},
args: [],
source: "side\x0a\x09^ player side",
messageSends: ["side"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@special"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"special",{},smalltalk.CWMonster)})},
args: [],
source: "special\x0a\x09^ special",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "special:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@special"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"special:",{aString:aString},smalltalk.CWMonster)})},
args: ["aString"],
source: "special: aString\x0a\x09special := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "state",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@state"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"state",{},smalltalk.CWMonster)})},
args: [],
source: "state\x0a\x09^ state",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "stats:",
category: 'initialize-release',
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
args: ["jsonStats"],
source: "stats: jsonStats\x0a\x09self move: jsonStats move.\x0a\x09self range: jsonStats range.\x0a\x09self attack: jsonStats attack.\x0a\x09self dices: jsonStats dices.\x0a\x09self special: jsonStats special.\x0a\x09self hp: self defaultHp.",
messageSends: ["move:", "move", "range:", "range", "attack:", "attack", "dices:", "dices", "special:", "special", "hp:", "defaultHp"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "support",
category: 'fighting',
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
args: [],
source: "support\x09\x0a\x09^ self parent neighbours select: [ :each | each canBeAttackedBy: self side ]",
messageSends: ["select:", "canBeAttackedBy:", "side", "neighbours", "parent"],
referencedClasses: []
}),
smalltalk.CWMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI",
category: 'strategy delegation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._cleanUI();
_st(self["@strategy"])._updateUI_(self);
return self}, function($ctx1) {$ctx1.fill(self,"updateUI",{},smalltalk.CWMonster)})},
args: [],
source: "updateUI\x0a\x09self cleanUI.\x0a\x09strategy updateUI: self",
messageSends: ["cleanUI", "updateUI:"],
referencedClasses: []
}),
smalltalk.CWMonster);


smalltalk.CWMonster.klass.iVarNames = ['jsonStatCache'];
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'instance creation',
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
args: [],
source: "emptyMonster\x0a\x09\x22Answers a fake instance of a monster with empty stats.\x0a\x09Displayed by the menu when no monster is selected\x22\x0a\x09\x0a\x09^ self new\x0a\x09\x09hp: 0;\x0a\x09\x09move: 0;\x0a\x09\x09range: 0;\x0a\x09\x09dices: 0;\x0a\x09\x09attack: 0;\x0a\x09\x09special:'none'.",
messageSends: ["hp:", "new", "move:", "range:", "dices:", "attack:", "special:"],
referencedClasses: []
}),
smalltalk.CWMonster.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "folderName",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "monsters";
}, function($ctx1) {$ctx1.fill(self,"folderName",{},smalltalk.CWMonster.klass)})},
args: [],
source: "folderName\x0a\x09^ 'monsters'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonster.klass);


smalltalk.addMethod(
smalltalk.method({
selector: "keys",
category: '*Easnoth-MapModel',
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
args: [],
source: "keys\x0a\x09| col |\x0a    col := Array new.\x0a\x09self keysDo: [:key |\x0a    \x09col add: key ].\x0a       ^ col",
messageSends: ["new", "keysDo:", "add:"],
referencedClasses: ["Array"]
}),
smalltalk.JSObjectProxy);

smalltalk.addMethod(
smalltalk.method({
selector: "keysDo:",
category: '*Easnoth-MapModel',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 

    	var o = self['@jsObject'];
    	for(var i in o) {
			aBlock(i);
		}
    ;
return self}, function($ctx1) {$ctx1.fill(self,"keysDo:",{aBlock:aBlock},smalltalk.JSObjectProxy)})},
args: ["aBlock"],
source: "keysDo: aBlock\x0a\x09<\x0a    \x09var o = self['@jsObject'];\x0a    \x09for(var i in o) {\x0a\x09\x09\x09aBlock(i);\x0a\x09\x09}\x0a    >",
messageSends: [],
referencedClasses: []
}),
smalltalk.JSObjectProxy);

