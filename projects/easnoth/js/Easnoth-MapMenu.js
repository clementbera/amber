smalltalk.addPackage('Easnoth-MapMenu');
smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWWidget)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWWidget);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWWidget)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWWidget)})},
args: [],
source: "children\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWWidget)})},
args: [],
source: "isRoot\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);

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
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWWidget)})},
args: [],
source: "parent\x0a\x09^ parent",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWWidget)})},
args: ["object"],
source: "parent: object\x0a\x09parent := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWWidget);

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
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWWidget)})},
args: [],
source: "root\x0a\x09^ self parent root",
messageSends: ["root", "parent"],
referencedClasses: []
}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
category: 'accessing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(_st(self)._newChild_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aClass:aClass},smalltalk.CWActionMenu)})},
args: ["aClass"],
source: "addComponent: aClass\x0a\x09self components add: (self newChild: aClass)",
messageSends: ["add:", "newChild:", "components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._components();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenu)})},
args: [],
source: "children\x0a\x09^ self components",
messageSends: ["components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.CWActionMenu)})},
args: [],
source: "components\x0a\x09^ components",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWActionMenu)})},
args: [],
source: "isRoot\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenu);

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
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWActionMenu)})},
args: ["aClass"],
source: "newChild: aClass\x0a\x09^ aClass new parent: self",
messageSends: ["parent:", "new"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._remove();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.CWActionMenu)})},
args: [],
source: "remove\x0a\x09self components do: [:each |\x0a\x09\x09each remove].",
messageSends: ["do:", "remove", "components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWActionMenu)})},
args: ["html"],
source: "renderOn: html\x0a\x09self components do: [:each |\x0a\x09\x09each renderOn: html ].",
messageSends: ["do:", "renderOn:", "components"],
referencedClasses: []
}),
smalltalk.CWActionMenu);

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
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWActionMenu)})},
args: [],
source: "root\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenu);



smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-MapMenu');
smalltalk.CWFightMenu.comment="This action menu is dedicated fo fights."
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWMonsterWatcher(){return smalltalk.CWMonsterWatcher||(typeof CWMonsterWatcher=="undefined"?nil:CWMonsterWatcher)}
function $CWDices(){return smalltalk.CWDices||(typeof CWDices=="undefined"?nil:CWDices)}
function $CWMapControls(){return smalltalk.CWMapControls||(typeof CWMapControls=="undefined"?nil:CWMapControls)}
function $CWTurnWatcher(){return smalltalk.CWTurnWatcher||(typeof CWTurnWatcher=="undefined"?nil:CWTurnWatcher)}
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenu.fn.prototype._initialize.apply(_st(self), []);
self["@components"]=_st($Array())._new();
_st(self)._addComponent_($CWMonsterWatcher());
_st(self)._addComponent_($CWDices());
_st(self)._addComponent_($CWMapControls());
_st(self)._addComponent_($CWTurnWatcher());
_st(self)._appendToJQuery_(_st("#global")._asJQuery());
_st(_st(self)._announcer())._on_do_($CWEndGameEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWFightMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09components := Array new.\x0a\x09self addComponent: CWMonsterWatcher.\x0a\x09self addComponent: CWDices.\x0a\x09self addComponent: CWMapControls.\x0a\x09self addComponent: CWTurnWatcher.\x0a\x09self appendToJQuery: '#global' asJQuery.\x0a\x09self announcer\x0a\x09\x09on: CWEndGameEvent\x0a\x09\x09do: [ self remove ]",
messageSends: ["initialize", "new", "addComponent:", "appendToJQuery:", "asJQuery", "on:do:", "remove", "announcer"],
referencedClasses: ["Array", "CWMonsterWatcher", "CWDices", "CWMapControls", "CWTurnWatcher", "CWEndGameEvent"]
}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuClass",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ".menuEditor";
}, function($ctx1) {$ctx1.fill(self,"menuClass",{},smalltalk.CWFightMenu)})},
args: [],
source: "menuClass\x0a\x09^ '.menuEditor'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFightMenu);



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, ['box'], 'Easnoth-MapMenu');
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
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenuComponent)})},
args: [],
source: "children\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActionMenuComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@box"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.CWActionMenuComponent)})},
args: [],
source: "remove\x0a\x09box asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWActionMenuComponent);



smalltalk.addClass('CWDices', smalltalk.CWActionMenuComponent, ['subBox'], 'Easnoth-MapMenu');
smalltalk.CWDices.comment="SHOULD HAVE DICES AS IV AND THEN USE NORMAL TREE STUFF TO DRAW.\x0a\x0aThis is top right menu. It displays the results of any fight."
smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st($CWDiceDeath())._new())._renderOn_callback_(html,(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(_st($CWDiceMiss())._new())._renderOn_callback_(html,(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{},smalltalk.CWDices)})},
args: [],
source: "firstLoad\x0a    subBox contents: [ :html | \x0a\x09\x09   CWDiceDeath new renderOn: html callback: [ ].\x0a           CWDiceMiss new renderOn: html callback: [ ] ].",
messageSends: ["contents:", "renderOn:callback:", "new"],
referencedClasses: ["CWDiceDeath", "CWDiceMiss"]
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWDicesRolledEvent(){return smalltalk.CWDicesRolledEvent||(typeof CWDicesRolledEvent=="undefined"?nil:CWDicesRolledEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenuComponent.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._announcer())._on_do_($CWDicesRolledEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._showDices_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWDices)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWDicesRolledEvent\x0a\x09\x09do: [ :event | self showDices: event ].",
messageSends: ["initialize", "on:do:", "showDices:", "announcer"],
referencedClasses: ["CWDicesRolledEvent"]
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'initialize-release',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3,$6;
$1=_st(html)._div();
_st($1)._class_("mapMenuPanel dices");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
_st($2)._class_("mapMenuPanelContainer");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._img_("ressources/images/fight/fightResult.png");
$4=_st(html)._div();
_st($4)._style_("padding-top: 7px");
$5=_st($4)._yourself();
self["@subBox"]=$5;
return self["@subBox"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=_st($1)._yourself();
self["@box"]=$6;
_st(self)._firstLoad();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWDices)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'mapMenuPanel dices';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html img: 'ressources/images/fight/fightResult.png'.\x0a\x09\x09\x09\x09\x09subBox := html div style: 'padding-top: 7px'; yourself ] ];\x0a\x09\x09yourself).\x0a\x09self firstLoad",
messageSends: ["class:", "div", "with:", "img:", "style:", "yourself", "firstLoad"],
referencedClasses: []
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:",
category: 'public',
fn: function (aResDices){
var self=this;
var cb;
return smalltalk.withContext(function($ctx1) { 
cb=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aResDices)._callback())._value_(aResDices);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st(self)._updateDices_kills_callBack_(_st(aResDices)._dices(),_st(aResDices)._kills(),cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:",{aResDices:aResDices,cb:cb},smalltalk.CWDices)})},
args: ["aResDices"],
source: "showDices: aResDices\x0a\x09| cb |\x0a\x09cb := [ aResDices callback value: aResDices ].\x0a\x09self updateDices: aResDices dices kills: aResDices kills callBack: cb.",
messageSends: ["value:", "callback", "updateDices:kills:callBack:", "dices", "kills"],
referencedClasses: []
}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateDices:kills:callBack:",
category: 'private',
fn: function (dicesNb,kills,cb){
var self=this;
var tmp,dices,i,callback;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $CWDiceDeath(){return smalltalk.CWDiceDeath||(typeof CWDiceDeath=="undefined"?nil:CWDiceDeath)}
function $CWDiceMiss(){return smalltalk.CWDiceMiss||(typeof CWDiceMiss=="undefined"?nil:CWDiceMiss)}
return smalltalk.withContext(function($ctx1) { 
var $1;
dices=_st($Array())._new_(dicesNb);
i=(0);
callback=(function(){
return smalltalk.withContext(function($ctx2) {
i=_st(i).__plus((1));
i;
$1=_st(i).__eq(dicesNb);
return _st($1)._ifTrue_(cb);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st((1))._to_do_(kills,(function(k){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(k,_st(_st($CWDiceDeath())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({k:k},$ctx1)})}));
_st(_st(kills).__plus((1)))._to_do_(dicesNb,(function(j){
return smalltalk.withContext(function($ctx2) {
return _st(dices)._at_put_(j,_st(_st($CWDiceMiss())._new())._parent_(self));
}, function($ctx2) {$ctx2.fillBlock({j:j},$ctx1)})}));
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st((1))._to_do_(dicesNb,(function(){
return smalltalk.withContext(function($ctx3) {
tmp=_st(dices)._atRandom();
tmp;
_st(tmp)._renderOn_callback_(html,callback);
return _st(dices)._remove_(tmp);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateDices:kills:callBack:",{dicesNb:dicesNb,kills:kills,cb:cb,tmp:tmp,dices:dices,i:i,callback:callback},smalltalk.CWDices)})},
args: ["dicesNb", "kills", "cb"],
source: "updateDices: dicesNb kills: kills callBack: cb\x0a\x09\x22animate the dices and display them in random order\x22\x0a\x0a\x09| tmp dices i callback |\x0a\x09dices := Array new: dicesNb.\x0a\x09i := 0.\x0a\x09callback := [\x0a\x09\x09i := i + 1. \x0a\x09\x09(i = dicesNb) \x0a\x09\x09\x09ifTrue: cb].\x0a\x0a\x091 to: kills do: [ :k | dices at: k put: (CWDiceDeath new parent: self) ].\x0a\x09kills + 1 to: dicesNb do: [ :j | dices at: j put: (CWDiceMiss new parent: self) ].\x0a\x0a    subBox contents: [:html | \x0a\x09\x091 to: dicesNb do: [\x0a\x09\x09\x09tmp := dices atRandom.\x0a\x09\x09\x09tmp renderOn: html callback: callback.\x0a\x09\x09\x09dices remove: tmp ] ]",
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "atRandom", "renderOn:callback:", "remove:"],
referencedClasses: ["Array", "CWDiceDeath", "CWDiceMiss"]
}),
smalltalk.CWDices);



smalltalk.addClass('CWMapControls', smalltalk.CWActionMenuComponent, [], 'Easnoth-MapMenu');
smalltalk.CWMapControls.comment="This represents the bottom left map controls menu. It permits to move the map."
smalltalk.addMethod(
smalltalk.method({
selector: "go:",
category: 'actions',
fn: function (direction){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMapMoveEvent())._new())._directionMethod_(direction));
return self}, function($ctx1) {$ctx1.fill(self,"go:",{direction:direction},smalltalk.CWMapControls)})},
args: ["direction"],
source: "go: direction\x0a\x09self announce: (CWMapMoveEvent new directionMethod: direction)",
messageSends: ["announce:", "directionMethod:", "new"],
referencedClasses: ["CWMapMoveEvent"]
}),
smalltalk.CWMapControls);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$8,$9,$10,$11,$12,$13,$14,$15,$7,$3,$16;
_st(self)._setUpShortCuts();
$1=_st(html)._div();
_st($1)._class_("mapMenuPanel mapWatcher");
_st($1)._width_((500));
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
_st($2)._class_("mapMenuPanelContainer");
_st($2)._style_("position: relative; height: 100%");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._h4();
_st($4)._with_("MAP CONTROLS");
$5=_st($4)._style_("position: absolute; bottom: 15%; left: 5%; width: 50%; text-align: left");
$5;
$6=_st(html)._div();
_st($6)._style_("position: absolute; width: 70%; height: 70%; top: 5%; right: 5%; background-image: url(ressources/images/fight/mapControls.png); background-repeat: no-repeat; background-position: center");
$7=_st($6)._with_((function(){
return smalltalk.withContext(function($ctx4) {
$8=_st(html)._button();
_st($8)._class_("mapButton mapLeft");
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._go_("left");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$9;
$10=_st(html)._button();
_st($10)._class_("mapButton mapRight");
$11=_st($10)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._go_("right");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$11;
$12=_st(html)._button();
_st($12)._class_("mapButton mapDown");
$13=_st($12)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._go_("down");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$13;
$14=_st(html)._button();
_st($14)._class_("mapButton mapUp");
_st($14)._style_("position: absolute; left: 41%; top: 2%;");
$15=_st($14)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._go_("up");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $15;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$16=_st($1)._yourself();
self["@box"]=$16;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMapControls)})},
args: ["html"],
source: "renderOn: html\x0a\x09self setUpShortCuts.\x0a\x09box := html div \x0a\x09\x09class: 'mapMenuPanel mapWatcher';\x0a\x09\x09width: 500;\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09style: 'position: relative; height: 100%';\x0a\x09\x09\x09\x09with: [\x0a            \x09    html h4\x0a                \x09        with: 'MAP CONTROLS';\x0a\x09\x09\x09\x09\x09\x09\x09style: 'position: absolute; bottom: 15%; left: 5%; width: 50%; text-align: left'.\x0a\x09\x09\x09\x09\x09html div\x0a\x09\x09\x09\x09\x09\x09style: 'position: absolute; width: 70%; height: 70%; top: 5%; right: 5%; background-image: url(ressources/images/fight/mapControls.png); background-repeat: no-repeat; background-position: center';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapLeft';\x0a                       \x09\x09onClick: [self go: 'left'].\x0a               \x09 \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapRight';\x0a                        \x09onClick: [self go: 'right'].\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapDown';\x0a                        \x09onClick: [self go: 'down'].\x0a                \x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09class: 'mapButton mapUp';\x0a\x09\x09\x09\x09\x09\x09\x09style: 'position: absolute; left: 41%; top: 2%;';\x0a                        \x09onClick: [self go: 'up'] ] ]\x0a\x09];\x0a\x09yourself",
messageSends: ["setUpShortCuts", "class:", "div", "width:", "with:", "style:", "h4", "button", "onClick:", "go:", "yourself"],
referencedClasses: []
}),
smalltalk.CWMapControls);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpShortCuts",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUpShortCuts",{},smalltalk.CWMapControls)})},
args: [],
source: "setUpShortCuts\x0a\x09\x22'body' asJQuery keyup:[:event |  | k |\x0a\x09\x09k := event keyCode.\x0a\x09\x09(k = 37 | k = 65) ifTrue: [self go: 'left'].\x0a\x09\x09(k = 39 | k = 68) ifTrue: [self go: 'right'].\x0a\x09\x09(k = 38 | k = 87) ifTrue: [self go: 'up'].\x0a\x09\x09(k = 40 | k = 83) ifTrue: [self go: 'down'].\x0a\x09].\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapControls);



smalltalk.addClass('CWMonsterWatcher', smalltalk.CWActionMenuComponent, ['monster', 'subBox'], 'Easnoth-MapMenu');
smalltalk.CWMonsterWatcher.comment="This represetns a view on the monster for the user. It is the top left menu."
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'accessing',
fn: function (){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWMonster())._emptyMonster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "emptyMonster\x0a\x09^ CWMonster emptyMonster",
messageSends: ["emptyMonster"],
referencedClasses: ["CWMonster"]
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMonsterUpdateEvent(){return smalltalk.CWMonsterUpdateEvent||(typeof CWMonsterUpdateEvent=="undefined"?nil:CWMonsterUpdateEvent)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWActionMenuComponent.fn.prototype._initialize.apply(_st(self), []);
_st(_st(self)._announcer())._on_do_($CWMonsterUpdateEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._watchMonster_(_st(event)._monster());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self announcer \x0a\x09\x09on: CWMonsterUpdateEvent\x0a\x09\x09do: [ :event | self watchMonster: event monster ]",
messageSends: ["initialize", "on:do:", "watchMonster:", "monster", "announcer"],
referencedClasses: ["CWMonsterUpdateEvent"]
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@monster"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._emptyMonster();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "monster\x0a\x09^ monster ifNil: [self emptyMonster]",
messageSends: ["ifNil:", "emptyMonster"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._div();
_st($1)._class_("mapMenuPanel monsterWatcher");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
_st($2)._class_("mapMenuPanelContainer");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(html)._img_("ressources/images/fight/selectedMonster.png");
self["@subBox"]=_st(html)._div();
return self["@subBox"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($1)._yourself();
self["@box"]=$4;
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWMonsterWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := (html div \x0a\x09\x09class: 'mapMenuPanel monsterWatcher';\x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09html img: 'ressources/images/fight/selectedMonster.png'.\x0a\x09\x09\x09\x09\x09subBox := html div ] ];\x0a\x09\x09yourself).\x0a\x09self update",
messageSends: ["class:", "div", "with:", "img:", "yourself", "update"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$2;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._table();
_st($1)._class_("tableStats");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._td();
_st($3)._class_("rightSide");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_("hp : ");
_st(_st(html)._tr())._with_("move : ");
return _st(_st(html)._tr())._with_("range : ");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$4;
$5=_st(html)._td();
_st($5)._class_("leftSide");
_st($5)._style_("width: 30px");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st(_st(self)._monster())._hp());
_st(_st(html)._tr())._with_(_st(_st(_st(_st(_st(self)._monster())._currentMove())._asString()).__comma("/")).__comma(_st(_st(self)._monster())._move()));
return _st(_st(html)._tr())._with_(_st(_st(self)._monster())._range());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$6;
$7=_st(html)._td();
_st($7)._class_("rightSide");
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_("dices : ");
_st(_st(html)._tr())._with_("attack : ");
return _st(_st(html)._tr())._with_("special : ");
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$8;
$9=_st(html)._td();
_st($9)._class_("leftSide");
$10=_st($9)._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st(_st(self)._monster())._dices());
_st(_st(html)._tr())._with_(_st(_st(_st(_st(self)._monster())._attack())._asString()).__comma(" %"));
return _st(_st(html)._tr())._with_(_st(_st(self)._monster())._special());
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $10;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.CWMonsterWatcher)})},
args: [],
source: "update\x0a\x09\x22I hide some stuff for release\x22\x0a\x0a        subBox contents: [:html | \x0a                html table\x0a\x09\x09\x09class: 'tableStats';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'rightSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                        \x09\x09html tr with: 'hp : '.\x0a                        \x09\x09html tr with: 'move : '.\x0a                        \x09\x09html tr with: 'range : '.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'leftSide';\x0a\x09\x09\x09\x09\x09style: 'width: 30px';\x0a\x09\x09\x09\x09\x09with: [\x0a                        \x09\x09html tr with: self monster hp.\x0a                        \x09\x09html tr with: self monster currentMove asString, '/', self monster move.\x0a                        \x09\x09html tr with: self monster range.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'rightSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                       \x09\x09\x09html tr with: 'dices : '.\x0a                        \x09\x09html tr with: 'attack : '.\x0a                       \x09\x09\x09html tr with: 'special : '.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td \x0a\x09\x09\x09\x09\x09class: 'leftSide';\x0a\x09\x09\x09\x09\x09with: [\x0a                       \x09\x09\x09html tr with: self monster dices.\x0a                        \x09\x09html tr with: self monster attack asString,' %'.\x0a                       \x09\x09\x09html tr with: self monster special.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x09\x09].\x0a\x09\x09\x22html h5 with: 'debug'.\x0a                html span with: 'state : ', self monster state class.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'attackPot : ', self monster attackPotential.\x0a\x09\x09\x09\x09html br.\x0a                html span with: 'cell : ', self monster parent printString.\x22\x0a        ].",
messageSends: ["contents:", "class:", "table", "with:", "td", "tr", "style:", "hp", "monster", ",", "move", "asString", "currentMove", "range", "dices", "attack", "special"],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "watchMonster:",
category: 'initialize-release',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@monster"]).__eq(aMonster);
if(! smalltalk.assert($1)){
self["@monster"]=aMonster;
self["@monster"];
_st(self)._update();
};
return self}, function($ctx1) {$ctx1.fill(self,"watchMonster:",{aMonster:aMonster},smalltalk.CWMonsterWatcher)})},
args: ["aMonster"],
source: "watchMonster: aMonster\x0a\x09monster = aMonster\x0a\x09\x09ifFalse: [ \x0a\x09\x09\x09monster := aMonster.\x0a\x09\x09\x09self update ] ",
messageSends: ["ifFalse:", "update", "="],
referencedClasses: []
}),
smalltalk.CWMonsterWatcher);



smalltalk.addClass('CWTurnWatcher', smalltalk.CWActionMenuComponent, [], 'Easnoth-MapMenu');
smalltalk.CWTurnWatcher.comment="This represents additional informations for the game. This is the bottom right menu."
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
function $Browser(){return smalltalk.Browser||(typeof Browser=="undefined"?nil:Browser)}
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$6,$7,$8,$9,$10,$11,$3,$12;
$1=_st(html)._div();
_st($1)._class_("mapMenuPanel stuff");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._div();
_st($2)._class_("mapMenuPanelContainer");
$3=_st($2)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$4=_st(html)._a();
_st($4)._href_("#");
_st($4)._with_("End turn");
$5=_st($4)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._announce_(_st($CWNextTurnEvent())._new());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$5;
_st(html)._br();
$6=_st(html)._a();
_st($6)._href_("#");
_st($6)._with_("Class browser");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st($Browser())._open();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$7;
_st(html)._br();
$8=_st(html)._a();
_st($8)._href_("#");
_st($8)._with_("Menu");
$9=_st($8)._onClick_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(self)._announce_(_st($CWEndGameEvent())._new());
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$9;
_st(html)._br();
$10=_st(html)._iframe();
_st($10)._src_("//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002");
_st($10)._at_put_("frameborder",(0));
_st($10)._at_put_("scrolling","no");
_st($10)._style_("border:none; overflow:hidden; width:80px; height:21px; margin-top: 5px;");
$11=_st($10)._at_put_("allowTransparency","true");
return $11;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $3;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$12=_st($1)._yourself();
self["@box"]=$12;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWTurnWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := html div \x0a\x09\x09class: 'mapMenuPanel stuff'; \x0a\x09\x09with: [\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09class: 'mapMenuPanelContainer';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'End turn'; \x0a\x09\x09\x09\x09\x09onClick: [self announce: CWNextTurnEvent new].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'Class browser'; \x0a\x09\x09\x09\x09\x09onClick: [Browser open].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09with: 'Menu'; \x0a\x09\x09\x09\x09\x09onClick: [self announce: CWEndGameEvent new].\x0a\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09html iframe\x0a\x09\x09\x09\x09\x09src: '//www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FEasnoth&amp;send=false&amp;layout=box_count&amp;width=450&amp;show_faces=true&amp;font&amp;colorscheme=light&amp;action=like&amp;height=90&amp;appId=97614502002';\x0a\x09\x09\x09\x09\x09at: 'frameborder' put: 0;\x0a\x09\x09\x09\x09\x09at: 'scrolling' put: 'no';\x0a\x09\x09\x09\x09\x09style:'border:none; overflow:hidden; width:80px; height:21px; margin-top: 5px;';\x0a\x09\x09\x09\x09\x09at: 'allowTransparency' put: 'true'.\x0a\x09] ];\x0a\x09yourself.",
messageSends: ["class:", "div", "with:", "href:", "a", "onClick:", "announce:", "new", "br", "open", "src:", "iframe", "at:put:", "style:", "yourself"],
referencedClasses: ["CWNextTurnEvent", "Browser", "CWEndGameEvent"]
}),
smalltalk.CWTurnWatcher);



smalltalk.addClass('CWDice', smalltalk.CWWidget, ['counter'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
category: 'rendering',
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@counter"]=(0);
_st(self)._animation_callBack_(dice,animationFinished);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
args: ["dice", "animationFinished"],
source: "animate: dice callBack: animationFinished\x0a\x09counter := 0.\x0a\x09self animation: dice callBack: animationFinished.",
messageSends: ["animation:callBack:"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "animation:callBack:",
category: 'rendering',
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._jqueryAnimate_callBack_(dice,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextAnimation_callBack_(dice,animationFinished);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"animation:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
args: ["dice", "animationFinished"],
source: "animation: dice callBack: animationFinished\x0a\x09\x22Triggers once the rolling dice animation and checks what to do next\x22\x0a\x09self jqueryAnimate: dice callBack: [ self nextAnimation: dice callBack: animationFinished ]",
messageSends: ["jqueryAnimate:callBack:", "nextAnimation:callBack:"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundPictureUrl",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceBackground.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundPictureUrl",{},smalltalk.CWDice)})},
args: [],
source: "backgroundPictureUrl\x0a\x09^\x09self diceRepo, 'diceBackground.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "diceRepo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ressources/images/fight/";
}, function($ctx1) {$ctx1.fill(self,"diceRepo",{},smalltalk.CWDice)})},
args: [],
source: "diceRepo\x0a\x09^ 'ressources/images/fight/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "endAnimation:callBack:",
category: 'rendering',
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(dice)._css_put_("background-image",_st(_st("url(").__comma(_st(self)._url())).__comma(")"));
_st(self)._jqueryAnimate_callBack_(dice,animationFinished);
return self}, function($ctx1) {$ctx1.fill(self,"endAnimation:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
args: ["dice", "animationFinished"],
source: "endAnimation: dice callBack: animationFinished\x0a\x09\x22Terminates the rolling dice animation. Displays the result and executes the callback\x22\x0a\x09dice css: 'background-image' put: 'url(' , self url , ')'.\x0a\x09self jqueryAnimate: dice callBack: animationFinished ",
messageSends: ["css:put:", ",", "url", "jqueryAnimate:callBack:"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "jqueryAnimate:callBack:",
category: 'rendering',
fn: function (dice,nextAnim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(dice)._animate_options_(smalltalk.HashedCollection._fromPairs_([_st("border-spacing").__minus_gt((-50))]),smalltalk.HashedCollection._fromPairs_([_st("step").__minus_gt((function(now,fx){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(fx)._elem())._asJQuery())._css_put_("background-position",_st(_st("1px ").__comma(_st(now)._asString())).__comma("px"));
}, function($ctx2) {$ctx2.fillBlock({now:now,fx:fx},$ctx1)})})),_st("duration").__minus_gt((200)),_st("easing").__minus_gt("linear"),_st("complete").__minus_gt(nextAnim)]));
return self}, function($ctx1) {$ctx1.fill(self,"jqueryAnimate:callBack:",{dice:dice,nextAnim:nextAnim},smalltalk.CWDice)})},
args: ["dice", "nextAnim"],
source: "jqueryAnimate: dice callBack: nextAnim\x0a\x09\x22Rolling dice animation with jquery\x22\x0a\x09dice \x0a\x09\x09animate: #{'border-spacing' -> -50 }\x0a   \x09 \x09options:  #{\x0a\x09\x09\x09'step' -> [ :now :fx | fx elem asJQuery css: 'background-position' put: '1px ', now asString,'px' ] .\x0a        \x09'duration' -> 200 .\x0a        \x09'easing' -> 'linear' .\x0a\x09\x09\x09'complete' -> nextAnim }",
messageSends: ["animate:options:", "->", "css:put:", ",", "asString", "asJQuery", "elem"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAnimation:callBack:",
category: 'rendering',
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@counter"]=_st(self["@counter"]).__plus((1));
$1=_st(self["@counter"]).__lt(_st((2)).__plus(_st((7))._atRandom()));
if(smalltalk.assert($1)){
_st(self)._animation_callBack_(dice,animationFinished);
} else {
_st(self)._endAnimation_callBack_(dice,animationFinished);
};
return self}, function($ctx1) {$ctx1.fill(self,"nextAnimation:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
args: ["dice", "animationFinished"],
source: "nextAnimation: dice callBack: animationFinished \x0a\x09\x22After a random delay, the rolling dice animation stops, displaying the result and executing the callback\x22\x0a\x09counter := counter + 1.\x0a\x09counter < (2 + 7 atRandom) \x0a\x09\x09ifTrue: [ self animation: dice callBack: animationFinished ] \x0a\x09\x09ifFalse: [self endAnimation: dice callBack: animationFinished ]",
messageSends: ["+", "ifTrue:ifFalse:", "animation:callBack:", "endAnimation:callBack:", "<", "atRandom"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
category: 'rendering',
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animate_callBack_(_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background",_st(_st("url(").__comma(_st(self)._urlRoll())).__comma(") 1px 0")),cb);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},smalltalk.CWDice)})},
args: ["html", "cb"],
source: "renderOn: html callback: cb\x0a\x09 self animate: ((html img: self backgroundPictureUrl) asJQuery css: 'background' put: 'url(', self urlRoll, ') 1px 0') callBack: cb",
messageSends: ["animate:callBack:", "css:put:", ",", "urlRoll", "asJQuery", "img:", "backgroundPictureUrl"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsiblity();
return self}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDice)})},
args: [],
source: "url\x0a\x09self subclassResponsiblity",
messageSends: ["subclassResponsiblity"],
referencedClasses: []
}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "urlRoll",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceRoll.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"urlRoll",{},smalltalk.CWDice)})},
args: [],
source: "urlRoll\x0a\x09^ self diceRepo, 'diceRoll.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDice);



smalltalk.addClass('CWDiceDeath', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceDeath.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceDeath)})},
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceDeath.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDiceDeath);



smalltalk.addClass('CWDiceMiss', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceMiss.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceMiss)})},
args: [],
source: "url\x0a\x09^ self diceRepo, 'diceMiss.png'",
messageSends: [",", "diceRepo"],
referencedClasses: []
}),
smalltalk.CWDiceMiss);



