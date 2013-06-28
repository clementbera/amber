smalltalk.addPackage('Easnoth-MapMenu');
smalltalk.addClass('CWWidget', smalltalk.Widget, ['parent'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.CWWidget)})},
messageSends: ["announce:", "announcer"]}),
smalltalk.CWWidget);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWWidget)})},
messageSends: ["current"]}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWWidget)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@parent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"parent",{},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@parent"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"parent:",{object:object},smalltalk.CWWidget)})},
messageSends: []}),
smalltalk.CWWidget);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._parent())._root();
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWWidget)})},
messageSends: ["root", "parent"]}),
smalltalk.CWWidget);



smalltalk.addClass('CWActionMenu', smalltalk.CWWidget, ['components'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "addComponent:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._add_(_st(self)._newChild_(aClass));
return self}, function($ctx1) {$ctx1.fill(self,"addComponent:",{aClass:aClass},smalltalk.CWActionMenu)})},
messageSends: ["add:", "newChild:", "components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._components();
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenu)})},
messageSends: ["components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "components",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@components"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"components",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "isRoot",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRoot",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "newChild:",
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aClass)._new())._parent_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newChild:",{aClass:aClass},smalltalk.CWActionMenu)})},
messageSends: ["parent:", "new"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._remove();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.CWActionMenu)})},
messageSends: ["do:", "remove", "components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._components())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWActionMenu)})},
messageSends: ["do:", "renderOn:", "components"]}),
smalltalk.CWActionMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.CWActionMenu)})},
messageSends: []}),
smalltalk.CWActionMenu);



smalltalk.addClass('CWFightMenu', smalltalk.CWActionMenu, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "new", "addComponent:", "appendToJQuery:", "asJQuery", "on:do:", "remove", "announcer"]}),
smalltalk.CWFightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuClass",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return ".menuEditor";
}, function($ctx1) {$ctx1.fill(self,"menuClass",{},smalltalk.CWFightMenu)})},
messageSends: []}),
smalltalk.CWFightMenu);



smalltalk.addClass('CWActionMenuComponent', smalltalk.CWWidget, ['box'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "children",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"children",{},smalltalk.CWActionMenuComponent)})},
messageSends: []}),
smalltalk.CWActionMenuComponent);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@box"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.CWActionMenuComponent)})},
messageSends: ["remove", "asJQuery"]}),
smalltalk.CWActionMenuComponent);



smalltalk.addClass('CWDices', smalltalk.CWActionMenuComponent, ['subBox'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
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
messageSends: ["contents:", "renderOn:callback:", "new"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "on:do:", "showDices:", "announcer"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "img:", "style:", "yourself", "firstLoad"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:",
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
messageSends: ["value:", "callback", "updateDices:kills:callBack:", "dices", "kills"]}),
smalltalk.CWDices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateDices:kills:callBack:",
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
messageSends: ["new:", "+", "ifTrue:", "=", "to:do:", "at:put:", "parent:", "new", "contents:", "atRandom", "renderOn:callback:", "remove:"]}),
smalltalk.CWDices);



smalltalk.addClass('CWMapControls', smalltalk.CWActionMenuComponent, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "go:",
fn: function (direction){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st(_st($CWMapMoveEvent())._new())._directionMethod_(direction));
return self}, function($ctx1) {$ctx1.fill(self,"go:",{direction:direction},smalltalk.CWMapControls)})},
messageSends: ["announce:", "directionMethod:", "new"]}),
smalltalk.CWMapControls);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["setUpShortCuts", "class:", "div", "width:", "with:", "style:", "h4", "button", "onClick:", "go:", "yourself"]}),
smalltalk.CWMapControls);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpShortCuts",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"setUpShortCuts",{},smalltalk.CWMapControls)})},
messageSends: []}),
smalltalk.CWMapControls);



smalltalk.addClass('CWMonsterWatcher', smalltalk.CWActionMenuComponent, ['monster', 'subBox'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
fn: function (){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWMonster())._emptyMonster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{},smalltalk.CWMonsterWatcher)})},
messageSends: ["emptyMonster"]}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "on:do:", "watchMonster:", "monster", "announcer"]}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
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
messageSends: ["ifNil:", "emptyMonster"]}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "img:", "yourself", "update"]}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
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
messageSends: ["contents:", "class:", "table", "with:", "td", "tr", "style:", "hp", "monster", ",", "move", "asString", "currentMove", "range", "dices", "attack", "special"]}),
smalltalk.CWMonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "watchMonster:",
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
messageSends: ["ifFalse:", "update", "="]}),
smalltalk.CWMonsterWatcher);



smalltalk.addClass('CWTurnWatcher', smalltalk.CWActionMenuComponent, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
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
messageSends: ["class:", "div", "with:", "href:", "a", "onClick:", "announce:", "new", "br", "open", "src:", "iframe", "at:put:", "style:", "yourself"]}),
smalltalk.CWTurnWatcher);



smalltalk.addClass('CWDice', smalltalk.CWWidget, ['counter'], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@counter"]=(0);
_st(self)._animation_callBack_(dice,animationFinished);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
messageSends: ["animation:callBack:"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "animation:callBack:",
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._jqueryAnimate_callBack_(dice,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextAnimation_callBack_(dice,animationFinished);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"animation:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
messageSends: ["jqueryAnimate:callBack:", "nextAnimation:callBack:"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundPictureUrl",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceBackground.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundPictureUrl",{},smalltalk.CWDice)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "diceRepo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ressources/images/fight/";
}, function($ctx1) {$ctx1.fill(self,"diceRepo",{},smalltalk.CWDice)})},
messageSends: []}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "endAnimation:callBack:",
fn: function (dice,animationFinished){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(dice)._css_put_("background-image",_st(_st("url(").__comma(_st(self)._url())).__comma(")"));
_st(self)._jqueryAnimate_callBack_(dice,animationFinished);
return self}, function($ctx1) {$ctx1.fill(self,"endAnimation:callBack:",{dice:dice,animationFinished:animationFinished},smalltalk.CWDice)})},
messageSends: ["css:put:", ",", "url", "jqueryAnimate:callBack:"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "jqueryAnimate:callBack:",
fn: function (dice,nextAnim){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(dice)._animate_options_(smalltalk.HashedCollection._fromPairs_([_st("border-spacing").__minus_gt((-50))]),smalltalk.HashedCollection._fromPairs_([_st("step").__minus_gt((function(now,fx){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(fx)._elem())._asJQuery())._css_put_("background-position",_st(_st("1px ").__comma(_st(now)._asString())).__comma("px"));
}, function($ctx2) {$ctx2.fillBlock({now:now,fx:fx},$ctx1)})})),_st("duration").__minus_gt((200)),_st("easing").__minus_gt("linear"),_st("complete").__minus_gt(nextAnim)]));
return self}, function($ctx1) {$ctx1.fill(self,"jqueryAnimate:callBack:",{dice:dice,nextAnim:nextAnim},smalltalk.CWDice)})},
messageSends: ["animate:options:", "->", "css:put:", ",", "asString", "asJQuery", "elem"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "nextAnimation:callBack:",
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
messageSends: ["+", "ifTrue:ifFalse:", "animation:callBack:", "endAnimation:callBack:", "<", "atRandom"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._animate_callBack_(_st(_st(_st(html)._img_(_st(self)._backgroundPictureUrl()))._asJQuery())._css_put_("background",_st(_st("url(").__comma(_st(self)._urlRoll())).__comma(") 1px 0")),cb);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb},smalltalk.CWDice)})},
messageSends: ["animate:callBack:", "css:put:", ",", "urlRoll", "asJQuery", "img:", "backgroundPictureUrl"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsiblity();
return self}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDice)})},
messageSends: ["subclassResponsiblity"]}),
smalltalk.CWDice);

smalltalk.addMethod(
smalltalk.method({
selector: "urlRoll",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceRoll.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"urlRoll",{},smalltalk.CWDice)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDice);



smalltalk.addClass('CWDiceDeath', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceDeath.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceDeath)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDiceDeath);



smalltalk.addClass('CWDiceMiss', smalltalk.CWDice, [], 'Easnoth-MapMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._diceRepo()).__comma("diceMiss.png");
return $1;
}, function($ctx1) {$ctx1.fill(self,"url",{},smalltalk.CWDiceMiss)})},
messageSends: [",", "diceRepo"]}),
smalltalk.CWDiceMiss);



