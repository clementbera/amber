smalltalk.addPackage('Easnoth-Bootstrap');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded', 'loadingBar', 'hasStarted'], 'Easnoth-Bootstrap');
smalltalk.CWBootstrapper.comment="Bootstrap the system. Currently work only for games, not for the map editor"
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWLoadingBar(){return smalltalk.CWLoadingBar||(typeof CWLoadingBar=="undefined"?nil:CWLoadingBar)}
function $CWGame(){return smalltalk.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
return smalltalk.withContext(function($ctx1) { 
self["@loadingBar"]=_st($CWLoadingBar())._new();
_st(_st($CWGame())._new())._initializeWithSettings_(gameSettings);
self["@hasStarted"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper)})},
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09loadingBar := CWLoadingBar new.\x0a\x09CWGame new initializeWithSettings: gameSettings.\x0a\x09hasStarted := false.",
messageSends: ["new", "initializeWithSettings:"],
referencedClasses: ["CWLoadingBar", "CWGame"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
category: 'events',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@objectToLoad"]).__eq(self["@objectLoaded"])).__and(_st(self["@hasStarted"])._not());
if(smalltalk.assert($1)){
_st(self)._startGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
args: [],
source: "checkIfReady\x0a\x09objectToLoad = objectLoaded & hasStarted not\x0a\x09\x09ifTrue: [ self startGame ]",
messageSends: ["ifTrue:", "startGame", "&", "not", "="],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new_((5));
_st($2)._at_put_((1),"red");
_st($2)._at_put_((2),"green");
_st($2)._at_put_((3),"white");
_st($2)._at_put_((4),"invis");
_st($2)._at_put_((5),"darkGreen");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{},smalltalk.CWBootstrapper)})},
args: [],
source: "imagesToPreload\x0a\x09^ (Array new: 5)\x0a\x09\x09at: 1 put: 'red';\x0a\x09\x09at: 2 put: 'green';\x0a\x09\x09at: 3 put: 'white';\x0a\x09\x09at: 4 put: 'invis';\x0a\x09\x09at: 5 put: 'darkGreen';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@hasStarted"]=true;
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeSidePanels();
_st(self)._initializeEventHandling();
_st(self)._preloadImages();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09hasStarted := true.\x0a\x09objectToLoad := 0.\x0a\x09objectLoaded := 0.\x0a\x09self initializeSidePanels.\x0a\x09self initializeEventHandling.\x0a\x09self preloadImages",
messageSends: ["initialize", "initializeSidePanels", "initializeEventHandling", "preloadImages"],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWWaitForObject(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectToLoad"]=_st(self["@objectToLoad"]).__plus((1));
return self["@objectToLoad"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWObjectLoaded(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@objectLoaded"]=_st(self["@objectLoaded"]).__plus((1));
self["@objectLoaded"];
return _st(self)._checkIfReady();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWMapMoveEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._updateSidePanels();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWBootstrapper)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer \x0a\x09\x09on: CWWaitForObject \x0a\x09\x09do: [ objectToLoad := objectToLoad + 1 ].\x0a\x09self announcer \x0a\x09\x09on: CWObjectLoaded \x0a\x09\x09do: [ objectLoaded := objectLoaded + 1.\x0a\x09\x09\x09\x09self checkIfReady].\x0a\x09self announcer\x0a\x09\x09on: CWMapMoveEvent\x0a\x09\x09do: [ self updateSidePanels ].",
messageSends: ["on:do:", "+", "announcer", "checkIfReady", "updateSidePanels"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded", "CWMapMoveEvent"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSidePanels",
category: 'initialize-release',
fn: function (){
var self=this;
var html,global,sidePanels;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self)._class())._sidePanels();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self;
return $2;
};
html=_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery());
global=_st("#global")._asJQuery();
_st(_st(self)._class())._sidePanels_(_st($Array())._new());
_st((4))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self)._class())._sidePanels())._add_(_st(_st(html)._div())._class_("sidePanel"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._onWindowResize_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._updateSidePanels();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._updateSidePanels();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSidePanels",{html:html,global:global,sidePanels:sidePanels},smalltalk.CWBootstrapper)})},
args: [],
source: "initializeSidePanels\x0a\x09| html global sidePanels |\x0a\x09self class sidePanels ifNotNil: [ ^ self ].\x0a\x09html := HTMLCanvas onJQuery: 'body' asJQuery.\x0a\x09global := '#global' asJQuery.\x0a\x09self class sidePanels: Array new.\x0a\x094 timesRepeat: [ self class sidePanels add: (html div class: 'sidePanel') ].\x0a\x09self onWindowResize: [ self updateSidePanels ].\x0a\x09self updateSidePanels. ",
messageSends: ["ifNotNil:", "sidePanels", "class", "onJQuery:", "asJQuery", "sidePanels:", "new", "timesRepeat:", "add:", "class:", "div", "onWindowResize:", "updateSidePanels"],
referencedClasses: ["HTMLCanvas", "Array"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "onWindowResize:",
category: 'initialize-release',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
jQuery(window).resize(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"onWindowResize:",{aBlock:aBlock},smalltalk.CWBootstrapper)})},
args: ["aBlock"],
source: "onWindowResize: aBlock\x0a\x09<jQuery(window).resize(aBlock)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
function $CWBackground(){return smalltalk.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._imagesToPreload())._do_((function(key){
return smalltalk.withContext(function($ctx2) {
return _st($CWGameOverTile())._newImageFrom_(key);
}, function($ctx2) {$ctx2.fillBlock({key:key},$ctx1)})}));
_st($CWBackground())._newImageFrom_("back");
return self}, function($ctx1) {$ctx1.fill(self,"preloadImages",{},smalltalk.CWBootstrapper)})},
args: [],
source: "preloadImages\x0a\x09self imagesToPreload do: [ :key |\x0a\x09\x09CWGameOverTile newImageFrom: key ].\x0a\x09CWBackground newImageFrom: 'back'.",
messageSends: ["do:", "newImageFrom:", "imagesToPreload"],
referencedClasses: ["CWGameOverTile", "CWBackground"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
category: 'events',
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
self["@hasStarted"]=true;
_st(self["@loadingBar"])._hide();
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWBootstrapper)})},
args: [],
source: "startGame\x0a\x09hasStarted := true.\x0a\x09loadingBar hide.\x0a\x09self announcer announce: CWGameStart new.",
messageSends: ["hide", "announce:", "new", "announcer"],
referencedClasses: ["CWGameStart"]
}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "updateSidePanels",
category: 'initialize-release',
fn: function (){
var self=this;
var global,height,width,sidePanels;
return smalltalk.withContext(function($ctx1) { 
var $1;
global=_st("#global")._asJQuery();
height=_st(_st(window)._asJQuery())._height();
width=_st(_st(window)._asJQuery())._width();
sidePanels=_st(_st(self)._class())._sidePanels();
$1=_st(height).__gt((640));
if(smalltalk.assert($1)){
_st(global)._css_put_("margin-top",_st(_st(_st(_st(height).__minus((640))).__slash((2)))._asString()).__comma("px"));
};
_st(_st(sidePanels)._at_((1)))._style_(_st(_st(_st("position: absolute; top: 0; left: 0; height: ").__comma(height)).__comma("px; width:")).__comma(_st(global)._css_("margin-left")));
_st(_st(sidePanels)._at_((2)))._style_(_st(_st(_st("position: absolute; top: 0; right: 0; height: ").__comma(height)).__comma("px; width:")).__comma(_st(global)._css_("margin-right")));
_st(_st(sidePanels)._at_((3)))._style_(_st(_st(_st(_st("position: absolute; top: 0; left: 0; height: ").__comma(_st(global)._css_("margin-top"))).__comma("; width:")).__comma(width)).__comma("px"));
_st(_st(sidePanels)._at_((4)))._style_(_st(_st(_st(_st("position: absolute; bottom: 0; left: 0; height: ").__comma(_st(global)._css_("margin-bottom"))).__comma("; width:")).__comma(width)).__comma("px"));
return self}, function($ctx1) {$ctx1.fill(self,"updateSidePanels",{global:global,height:height,width:width,sidePanels:sidePanels},smalltalk.CWBootstrapper)})},
args: [],
source: "updateSidePanels\x0a\x09| global height width sidePanels |\x0a\x09\x0a\x09global := '#global' asJQuery.\x0a\x09height := window asJQuery height.\x0a\x09width := window asJQuery width.\x0a\x09sidePanels := self class sidePanels.\x0a\x09\x0a\x09height > 640 ifTrue: [\x0a\x09\x09global css: 'margin-top' put: ((height - 640) / 2) asString, 'px' ].\x0a\x09\x09\x0a\x09(sidePanels at: 1)\x0a\x09\x09style: 'position: absolute; top: 0; left: 0; height: ', height, 'px; width:', (global css: 'margin-left').\x0a\x09(sidePanels at: 2)\x0a\x09\x09style: 'position: absolute; top: 0; right: 0; height: ', height, 'px; width:', (global css: 'margin-right').\x0a\x09(sidePanels at: 3)\x0a\x09\x09style: 'position: absolute; top: 0; left: 0; height: ', (global css: 'margin-top'), '; width:', width, 'px'.\x0a\x09(sidePanels at: 4)\x0a\x09\x09style: 'position: absolute; bottom: 0; left: 0; height: ', (global css: 'margin-bottom'), '; width:', width, 'px'.",
messageSends: ["asJQuery", "height", "width", "sidePanels", "class", "ifTrue:", "css:put:", ",", "asString", "/", "-", ">", "style:", "css:", "at:"],
referencedClasses: []
}),
smalltalk.CWBootstrapper);


smalltalk.CWBootstrapper.klass.iVarNames = ['sidePanels'];
smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
category: 'instance creation',
fn: function (gameSettings){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(gameSettings);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper.klass)})},
args: ["gameSettings"],
source: "bootstrap: gameSettings\x0a\x09^ self new bootstrap: gameSettings",
messageSends: ["bootstrap:", "new"],
referencedClasses: []
}),
smalltalk.CWBootstrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePanels",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@sidePanels"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sidePanels",{},smalltalk.CWBootstrapper.klass)})},
args: [],
source: "sidePanels\x0a\x09^ sidePanels",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWBootstrapper.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePanels:",
category: 'accessing',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@sidePanels"]=object;
return self}, function($ctx1) {$ctx1.fill(self,"sidePanels:",{object:object},smalltalk.CWBootstrapper.klass)})},
args: ["object"],
source: "sidePanels: object\x0a\x09sidePanels := object",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWGameSettings', smalltalk.Object, ['players', 'mapNumber', 'afterGameBlock'], 'Easnoth-Bootstrap');
smalltalk.CWGameSettings.comment="I represent the game settings. My instance variables are set before the game, in the start menus. Then, the CWBootstrapper handles my data to launch corectly the game."
smalltalk.addMethod(
smalltalk.method({
selector: "addPlayer:",
category: 'accessing',
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@players"])._add_(aPlayer);
return self}, function($ctx1) {$ctx1.fill(self,"addPlayer:",{aPlayer:aPlayer},smalltalk.CWGameSettings)})},
args: ["aPlayer"],
source: "addPlayer: aPlayer\x0a\x09players add: aPlayer",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "afterGameBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@afterGameBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"afterGameBlock",{},smalltalk.CWGameSettings)})},
args: [],
source: "afterGameBlock\x0a\x09^ afterGameBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "afterGameBlock:",
category: 'accessing',
fn: function (block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@afterGameBlock"]=block;
return self}, function($ctx1) {$ctx1.fill(self,"afterGameBlock:",{block:block},smalltalk.CWGameSettings)})},
args: ["block"],
source: "afterGameBlock: block\x0a\x09afterGameBlock := block",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'intialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._resetPlayers();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameSettings)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self resetPlayers.",
messageSends: ["initialize", "resetPlayers"],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapNumber",{},smalltalk.CWGameSettings)})},
args: [],
source: "mapNumber\x0a\x09^ mapNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapNumber"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"mapNumber:",{int:int},smalltalk.CWGameSettings)})},
args: ["int"],
source: "mapNumber: int\x0a\x09mapNumber := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "players",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@players"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"players",{},smalltalk.CWGameSettings)})},
args: [],
source: "players\x0a\x09^ players",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'intialize-release',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_("settings(map n.");
_st($1)._nextPutAll_(_st(self["@mapNumber"])._printString());
$2=_st($1)._nextPutAll_("; ");
_st(self["@players"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._printOn_(aStream);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(aStream)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWGameSettings)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: 'settings(map n.';\x0a\x09\x09nextPutAll: mapNumber printString;\x0a\x09\x09nextPutAll: '; '.\x0a\x09players do: [ :each |\x0a\x09\x09each printOn: aStream ].\x0a\x09aStream nextPutAll: ')'.",
messageSends: ["nextPutAll:", "printString", "do:", "printOn:"],
referencedClasses: []
}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPlayers",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@players"]=_st($Array())._new();
$1=self["@players"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"resetPlayers",{},smalltalk.CWGameSettings)})},
args: [],
source: "resetPlayers\x0a\x09^ players := Array new.",
messageSends: ["new"],
referencedClasses: ["Array"]
}),
smalltalk.CWGameSettings);



smalltalk.addClass('CWCampaignSettings', smalltalk.CWGameSettings, ['playerArmy', 'wonMatches'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWGameSettings.fn.prototype._initialize.apply(_st(self), []);
self["@wonMatches"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWCampaignSettings)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09wonMatches := Array new.",
messageSends: ["initialize", "new"],
referencedClasses: ["Array"]
}),
smalltalk.CWCampaignSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "playerArmy",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@playerArmy"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"playerArmy",{},smalltalk.CWCampaignSettings)})},
args: [],
source: "playerArmy\x0a\x09^ playerArmy",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCampaignSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "playerArmy:",
category: 'accessing',
fn: function (anArmy){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@playerArmy"]=anArmy;
return self}, function($ctx1) {$ctx1.fill(self,"playerArmy:",{anArmy:anArmy},smalltalk.CWCampaignSettings)})},
args: ["anArmy"],
source: "playerArmy: anArmy\x0a\x09playerArmy := anArmy",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCampaignSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "wonMatches",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@wonMatches"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"wonMatches",{},smalltalk.CWCampaignSettings)})},
args: [],
source: "wonMatches\x0a\x09^ wonMatches",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCampaignSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "wonMatches:",
category: 'accessing',
fn: function (list){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@wonMatches"]=list;
return self}, function($ctx1) {$ctx1.fill(self,"wonMatches:",{list:list},smalltalk.CWCampaignSettings)})},
args: ["list"],
source: "wonMatches: list\x0a\x09wonMatches := list",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCampaignSettings);



smalltalk.addClass('CWLoadingBar', smalltalk.Widget, ['box'], 'Easnoth-Bootstrap');
smalltalk.addMethod(
smalltalk.method({
selector: "hide",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@box"])._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hide",{},smalltalk.CWLoadingBar)})},
args: [],
source: "hide\x0a\x09box asJQuery hide",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._appendToJQuery_(_st("#global")._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWLoadingBar)})},
args: [],
source: "initialize\x0a\x09self appendToJQuery: '#global' asJQuery.",
messageSends: ["appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._img();
_st($1)._class_("loadBar");
$2=_st($1)._src_("ressources/images/start/loading.png");
self["@box"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWLoadingBar)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := html img\x0a\x09\x09class: 'loadBar';\x0a\x09\x09src: 'ressources/images/start/loading.png'.",
messageSends: ["class:", "img", "src:"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);

smalltalk.addMethod(
smalltalk.method({
selector: "show",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@box"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"show",{},smalltalk.CWLoadingBar)})},
args: [],
source: "show\x0a\x09box asJQuery show",
messageSends: ["show", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWLoadingBar);


smalltalk.CWLoadingBar.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@default"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@default"]=smalltalk.Widget.klass.fn.prototype._new.apply(_st(self), []);
$2=self["@default"];
return $2;
} else {
$1;
};
_st(self["@default"])._show();
$3=self["@default"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.CWLoadingBar.klass)})},
args: [],
source: "new\x0a\x09default ifNil: [ ^ default := super new].\x0a\x09default show.\x0a\x09^ default",
messageSends: ["ifNil:", "new", "show"],
referencedClasses: []
}),
smalltalk.CWLoadingBar.klass);


smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box', 'subBox', 'frontImages', 'backButton', 'history', 'gameSettings'], 'Easnoth-Bootstrap');
smalltalk.CWStartMenu.comment="menu with custom game and stuff here.\x0a\x0aThis is currently the worst class of the system in term of code quality."
smalltalk.addMethod(
smalltalk.method({
selector: "addFrontImages",
category: 'rendering',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$2;
self["@frontImages"]=_st($Array())._new_((3));
_st(self["@box"])._append_((function(html2){
return smalltalk.withContext(function($ctx2) {
$1=_st(html2)._div();
_st($1)._style_("height: 100%; width: 100%; position: relative");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html2)._img();
_st($3)._src_(_st(_st(self)._ressourcesFolder()).__comma("fey.png"));
$4=_st($3)._style_("position: absolute; bottom: 1px; left: 121px");
_st(self["@frontImages"])._at_put_((1),$4);
$5=_st(html2)._img();
_st($5)._src_(_st(_st(self)._ressourcesFolder()).__comma("monster.png"));
$6=_st($5)._style_("position: absolute; top: 1px; right: 121px");
_st(self["@frontImages"])._at_put_((2),$6);
$7=_st(html2)._img();
_st($7)._src_(_st(_st(self)._ressourcesFolder()).__comma("battle_text.png"));
$8=_st($7)._style_("position: absolute; bottom: 65px; right: 150px");
return _st(self["@frontImages"])._at_put_((3),$8);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html2:html2},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addFrontImages",{},smalltalk.CWStartMenu)})},
args: [],
source: "addFrontImages\x0a\x09frontImages := Array new: 3.\x0a\x09\x22frontImages at: 1 put:\x22 \x0a\x09box append: [ :html2 | html2 div\x0a\x09\x09style: 'height: 100%; width: 100%; position: relative';\x0a\x09\x09with: [\x0a\x09\x09\x09frontImages at: 1 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'fey.png';\x0a\x09\x09\x09\x09style: 'position: absolute; bottom: 1px; left: 121px').\x0a\x09\x09\x09frontImages at: 2 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'monster.png';\x0a\x09\x09\x09\x09style: 'position: absolute; top: 1px; right: 121px').\x0a\x09\x09\x09frontImages at: 3 put: (html2 img \x0a\x09\x09\x09\x09src: self ressourcesFolder, 'battle_text.png';\x0a\x09\x09\x09\x09style: 'position: absolute; bottom: 65px; right: 150px').\x0a\x09\x09] ].",
messageSends: ["new:", "append:", "style:", "div", "with:", "at:put:", "src:", ",", "ressourcesFolder", "img"],
referencedClasses: ["Array"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "armyButton:on:",
category: 'rendering',
fn: function (armyName,html){
var self=this;
var but;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(html)._button();
_st($1)._class_("armyButton");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._h4();
_st($2)._class_("subTitle");
$3=_st($2)._with_(_st(armyName)._upFirstLetter());
$3;
_st(html)._img_(_st(_st("ressources/images/monsters/").__comma(armyName)).__comma("/cavalry-heros.png"));
return _st(html)._img_(_st(_st("ressources/images/monsters/").__comma(armyName)).__comma("/range-heros.png"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@gameSettings"])._playerArmy_(armyName);
_st(self["@history"])._add_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._campaign();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return _st(self)._campaign2();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($1)._yourself();
but=$4;
return self}, function($ctx1) {$ctx1.fill(self,"armyButton:on:",{armyName:armyName,html:html,but:but},smalltalk.CWStartMenu)})},
args: ["armyName", "html"],
source: "armyButton: armyName on: html\x0a\x09| but |\x0a\x09but := html button\x0a\x09\x09\x09\x09\x09class: 'armyButton';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html h4 \x0a\x09\x09\x09\x09\x09\x09\x09class: 'subTitle'; \x0a\x09\x09\x09\x09\x09\x09\x09with: armyName upFirstLetter.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/cavalry-heros.png'.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/range-heros.png' ];\x0a\x09\x09\x09\x09\x09onClick: [ gameSettings playerArmy: armyName.\x0a\x09\x09\x09\x09\x09\x09history add: [ self campaign].\x0a\x09\x09\x09\x09\x09\x09self campaign2 ];\x0a\x09\x09\x09\x09\x09\x09yourself.",
messageSends: ["class:", "button", "with:", "h4", "upFirstLetter", "img:", ",", "onClick:", "playerArmy:", "add:", "campaign", "campaign2", "yourself"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "armyNames",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["elves", "kingdom", "merfolks", "dwarves", "outlaws"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"armyNames",{},smalltalk.CWStartMenu)})},
args: [],
source: "armyNames\x0a\x09^ #( 'elves' 'kingdom' 'merfolks' 'dwarves' 'outlaws' )",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "armySelectBox:on:",
category: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._class_(_st(_st(self)._selectBoxClasses())._at_(playerNumber));
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(_st(_st(selectBox)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._armyNames())._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._option())._with_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"armySelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
args: ["playerNumber", "html"],
source: "armySelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09selectBox := html select.\x0a\x09selectBox\x0a\x09\x09class:  (self selectBoxClasses at: playerNumber);\x0a\x09\x09onChange: [ (gameSettings players at: playerNumber) team: selectBox asJQuery val ];\x0a\x09\x09with: [\x0a\x09\x09\x09self armyNames do: [ :each |\x0a\x09\x09\x09\x09html option with: each ] ].",
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team:", "val", "asJQuery", "players", "with:", "do:", "option", "armyNames"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "back",
category: 'rendering',
fn: function (){
var self=this;
var last;
return smalltalk.withContext(function($ctx1) { 
last=_st(self["@history"])._last();
_st(self["@history"])._remove_(last);
_st(last)._value();
return self}, function($ctx1) {$ctx1.fill(self,"back",{last:last},smalltalk.CWStartMenu)})},
args: [],
source: "back\x0a\x09| last |\x0a\x09last := history last.\x0a\x09history remove: last.\x0a\x09last value",
messageSends: ["last", "remove:", "value"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "backButton",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@history"])._isEmpty();
if(smalltalk.assert($1)){
$2=_st(_st(self["@backButton"])._asJQuery())._hide();
return $2;
};
_st(_st(self["@backButton"])._asJQuery())._show();
return self}, function($ctx1) {$ctx1.fill(self,"backButton",{},smalltalk.CWStartMenu)})},
args: [],
source: "backButton\x0a\x09history isEmpty ifTrue: [ ^ backButton asJQuery hide ].\x0a\x09backButton asJQuery show.",
messageSends: ["ifTrue:", "hide", "asJQuery", "isEmpty", "show"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "campaign",
category: 'rendering - main',
fn: function (){
var self=this;
function $CWCampaignSettings(){return smalltalk.CWCampaignSettings||(typeof CWCampaignSettings=="undefined"?nil:CWCampaignSettings)}
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$7,$4;
_st(self)._hideFrontImages();
self["@gameSettings"]=_st($CWCampaignSettings())._new();
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._button();
_st($1)._class_("backButton");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._toggleFrontImages();
self["@gameSettings"]=_st($CWGameSettings())._new();
self["@gameSettings"];
return _st(self)._back();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
self["@backButton"]=$2;
self["@backButton"];
_st(self)._backButton();
$3=_st(html)._div();
_st($3)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._h3();
_st($5)._class_("mainTitle");
$6=_st($5)._with_("Choose your army");
$6;
return _st(_st(self)._armyNames())._do_((function(each){
return smalltalk.withContext(function($ctx4) {
$7=_st(each).__eq("dwarves");
if(! smalltalk.assert($7)){
return _st(self)._armyButton_on_(each,html);
};
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"campaign",{},smalltalk.CWStartMenu)})},
args: [],
source: "campaign\x0a\x09self hideFrontImages.\x0a\x09gameSettings := CWCampaignSettings new.\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09backButton := html button \x0a\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09self toggleFrontImages.\x0a\x09\x09\x09\x09gameSettings := CWGameSettings new.\x0a\x09\x09\x09\x09self back ].\x0a\x09\x09self backButton.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html h3 \x0a\x09\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09\x09with: 'Choose your army'.\x0a\x09\x09\x09\x09self armyNames do: [:each |\x0a\x09\x09\x09\x09\x09each = 'dwarves' ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self armyButton: each on: html ] ]\x0a\x09\x09\x09\x09 ].\x0a\x09]",
messageSends: ["hideFrontImages", "new", "contents:", "class:", "button", "onClick:", "toggleFrontImages", "back", "backButton", "style:", "div", "with:", "h3", "do:", "ifFalse:", "armyButton:on:", "=", "armyNames"],
referencedClasses: ["CWCampaignSettings", "CWGameSettings"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "campaign2",
category: 'rendering - main',
fn: function (){
var self=this;
var armies;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(self)._renderBackButtonOn_(html);
$1=_st(html)._div();
_st($1)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$3=_st(html)._h3();
_st($3)._class_("mainTitle");
$4=_st($3)._with_("Choose next game opponent");
$4;
armies=_st(_st(self)._armyNames())._select_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(_st(_st(each).__eq("dwarves")).__or(_st(each).__eq(_st(self["@gameSettings"])._playerArmy())))._not();
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
armies;
return _st(armies)._do_((function(each){
return smalltalk.withContext(function($ctx4) {
return _st(self)._renderStartFightButton_on_(each,html);
}, function($ctx4) {$ctx4.fillBlock({each:each},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"campaign2",{armies:armies},smalltalk.CWStartMenu)})},
args: [],
source: "campaign2\x0a\x09| armies |\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09self renderBackButtonOn: html.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html h3 \x0a\x09\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09\x09with: 'Choose next game opponent'.\x0a\x09\x09\x09\x09armies := self armyNames select: [:each |\x0a\x09\x09\x09\x09\x09(each = 'dwarves' | (each = gameSettings playerArmy)) not ].\x0a\x09\x09\x09\x09armies do: [ :each |\x0a\x09\x09\x09\x09\x09self renderStartFightButton: each on: html ].\x0a\x09\x09\x09\x09 ].\x0a\x09]",
messageSends: ["contents:", "renderBackButtonOn:", "style:", "div", "with:", "class:", "h3", "select:", "not", "|", "=", "playerArmy", "armyNames", "do:", "renderStartFightButton:on:"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "choosePlayers",
category: 'game settings',
fn: function (){
var self=this;
function $CWStartMenu(){return smalltalk.CWStartMenu||(typeof CWStartMenu=="undefined"?nil:CWStartMenu)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@gameSettings"])._resetPlayers();
_st(self["@gameSettings"])._afterGameBlock_((function(){
return smalltalk.withContext(function($ctx2) {
return _st($CWStartMenu())._start();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self)._playerMenu();
return self}, function($ctx1) {$ctx1.fill(self,"choosePlayers",{},smalltalk.CWStartMenu)})},
args: [],
source: "choosePlayers\x0a\x09gameSettings resetPlayers.\x0a\x09gameSettings afterGameBlock: [ CWStartMenu start ].\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09gameSettings addPlayer: self defaultPlayer.\x0a\x09self playerMenu",
messageSends: ["resetPlayers", "afterGameBlock:", "start", "addPlayer:", "defaultPlayer", "playerMenu"],
referencedClasses: ["CWStartMenu"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "credits",
category: 'rendering - main',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$2;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(self)._renderBackButtonOn_(html);
$1=_st(html)._ul();
_st($1)._class_("menu");
_st($1)._style_("font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: 2%");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Development ");
_st(html)._br();
$3=_st(html)._a();
_st($3)._class_("creditLink");
_st($3)._with_("Clément Béra");
_st($3)._target_("_blank");
$4=_st($3)._href_("http://clementbera.wordpress.com/");
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Graphics ");
_st(html)._br();
$5=_st(html)._a();
_st($5)._class_("creditLink");
_st($5)._with_("Lusy Dolia");
_st($5)._target_("_blank");
$6=_st($5)._href_("https://www.facebook.com/lusy.dolya");
$6;
_st(html)._br();
$7=_st(html)._a();
_st($7)._class_("creditLink");
_st($7)._with_("Battle for Wesnoth");
_st($7)._target_("_blank");
$8=_st($7)._href_("http://www.wesnoth.org/");
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._strong())._with_("Thanks to ");
_st(html)._br();
$9=_st(html)._a();
_st($9)._class_("creditLink");
_st($9)._with_("Amber web framework");
_st($9)._target_("_blank");
$10=_st($9)._href_("http://amber-lang.net/");
$10;
_st(html)._br();
$11=_st(html)._a();
_st($11)._class_("creditLink");
_st($11)._with_("Nicolas Petton (Amber core developer)");
_st($11)._target_("_blank");
$12=_st($11)._href_("http://www.nicolas-petton.fr/");
return $12;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"credits",{},smalltalk.CWStartMenu)})},
args: [],
source: "credits\x0a\x09subBox \x0a\x09\x09contents: [ :html | \x0a\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09style: 'font-size: 16px;\x0a\x09\x09\x09\x09\x09margin-top: 2%';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Development '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Clément Béra';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://clementbera.wordpress.com/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Graphics '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Lusy Dolia';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'https://www.facebook.com/lusy.dolya'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Battle for Wesnoth';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://www.wesnoth.org/' ].\x0a\x09\x09\x09\x09\x09\x09html li with: [\x0a\x09\x09\x09\x09\x09\x09\x09html strong with: 'Thanks to '.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Amber web framework';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://amber-lang.net/'.\x0a\x09\x09\x09\x09\x09\x09\x09html br.\x0a\x09\x09\x09\x09\x09\x09\x09html a\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'creditLink';\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: 'Nicolas Petton (Amber core developer)';\x0a\x09\x09\x09\x09\x09\x09\x09\x09target: '_blank';\x0a\x09\x09\x09\x09\x09\x09\x09\x09href: 'http://www.nicolas-petton.fr/' ] ] ] ",
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "style:", "with:", "strong", "br", "a", "target:", "href:", "li"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPlayer",
category: 'accessing',
fn: function (){
var self=this;
function $CWHuman(){return smalltalk.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWHuman())._new())._team_("elves");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultPlayer",{},smalltalk.CWStartMenu)})},
args: [],
source: "defaultPlayer\x0a\x09^ CWHuman new team: 'elves'",
messageSends: ["team:", "new"],
referencedClasses: ["CWHuman"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "hideFrontImages",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@frontImages"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._hide();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"hideFrontImages",{},smalltalk.CWStartMenu)})},
args: [],
source: "hideFrontImages\x0a\x09frontImages do: [ :each | each asJQuery hide]",
messageSends: ["do:", "hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initalize-release',
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
_st(self)._reset();
_st($CWBootstrapper())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWStartMenu)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self reset.\x0a\x09CWBootstrapper new. \x22setUp side panels ...\x22",
messageSends: ["initialize", "reset", "new"],
referencedClasses: ["CWBootstrapper"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuWith:",
category: 'rendering - main',
fn: function (dict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$4,$7,$1;
$2=self["@subBox"];
_st($2)._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(self)._renderBackButtonOn_(html);
$3=_st(html)._ul();
_st($3)._class_("menu");
_st($3)._style_("margin-top: 5%");
$4=_st($3)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(dict)._keysAndValuesDo_((function(key,value){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$5=_st(html)._a();
_st($5)._href_("#");
_st($5)._with_(key);
$6=_st($5)._onClick_(value);
return $6;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({key:key,value:value},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
$7=_st($2)._yourself();
$1=$7;
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuWith:",{dict:dict},smalltalk.CWStartMenu)})},
args: ["dict"],
source: "menuWith: dict\x0a\x09^ subBox\x0a\x09\x09\x09\x09contents: [ :html |\x0a\x09\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09\x09style: 'margin-top: 5%';\x0a\x09\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09\x09dict keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09\x09\x09\x09html li\x0a\x09\x09\x09\x09\x09\x09\x09\x09with: [ html a \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09href: '#';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09with: key; \x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: value ] ] ] ];\x0a\x09\x09yourself",
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "style:", "with:", "keysAndValuesDo:", "href:", "a", "onClick:", "li", "yourself"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerMenu",
category: 'rendering - main',
fn: function (){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(self["@subBox"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(self)._renderBackButtonOn_(html);
$1=_st(html)._ul();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return _st((1))._to_do_((2),(function(n){
return smalltalk.withContext(function($ctx4) {
return _st(self)._playerSelection_on_(n,html);
}, function($ctx4) {$ctx4.fillBlock({n:n},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2;
$3=_st(html)._button();
_st($3)._class_("startButton");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self)._startBeta();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerMenu",{selectBox:selectBox},smalltalk.CWStartMenu)})},
args: [],
source: "playerMenu\x0a\x09| selectBox |\x0a\x09subBox contents: [ :html | \x0a\x09\x09\x09\x09self renderBackButtonOn: html.\x0a\x09\x09\x09\x09html ul \x0a\x09\x09\x09\x09\x09class: 'menu';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x091 to: 2 do: [ :n |\x0a\x09\x09\x09\x09\x09\x09\x09self playerSelection: n on: html ] ].\x0a\x09\x09\x09\x09html button\x0a\x09\x09\x09\x09\x09\x09\x09\x09class: 'startButton';\x0a\x09\x09\x09\x09\x09\x09\x09\x09onClick: [ self startBeta ] ] ",
messageSends: ["contents:", "renderBackButtonOn:", "class:", "ul", "with:", "to:do:", "playerSelection:on:", "button", "onClick:", "startBeta"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelectBox:on:",
category: 'rendering',
fn: function (playerNumber,html){
var self=this;
var selectBox;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._class_(_st(_st(self)._selectBoxClasses())._at_(playerNumber));
_st($1)._onChange_((function(){
var oldTeam;
return smalltalk.withContext(function($ctx2) {
oldTeam=_st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team();
oldTeam;
_st(_st(self["@gameSettings"])._players())._at_put_(playerNumber,_st(_st(_st($Smalltalk())._current())._at_(_st(_st(selectBox)._asJQuery())._val()))._new());
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(oldTeam);
}, function($ctx2) {$ctx2.fillBlock({oldTeam:oldTeam},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._option();
_st($3)._with_("human");
$4=_st($3)._value_("CWHuman");
$4;
$5=_st(html)._option();
_st($5)._with_("AI type 1");
$6=_st($5)._value_("CWAggressWeakestAI");
return $6;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerSelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
args: ["playerNumber", "html"],
source: "playerSelectBox: playerNumber on: html\x0a\x09| selectBox |\x0a\x09\x09selectBox := html select. \x0a\x09\x09selectBox \x0a\x09\x09\x09class: (self selectBoxClasses at: playerNumber);\x0a\x09\x09\x09onChange: [ \x0a\x09\x09\x09\x09| oldTeam |\x0a\x09\x09\x09\x09oldTeam := (gameSettings players at: playerNumber) team.\x0a\x09\x09\x09\x09gameSettings players at: playerNumber put: (Smalltalk current at: selectBox asJQuery val) new.\x0a\x09\x09\x09\x09(gameSettings players at: playerNumber) team: oldTeam ];\x0a\x09\x09\x09with: [\x0a\x09\x09\x09\x09html option \x0a\x09\x09\x09\x09\x09with: 'human';\x0a\x09\x09\x09\x09\x09value: 'CWHuman'.\x0a\x09\x09\x09\x09html option \x0a\x09\x09\x09\x09\x09with: 'AI type 1';\x0a\x09\x09\x09\x09\x09value: 'CWAggressWeakestAI'].",
messageSends: ["select", "class:", "at:", "selectBoxClasses", "onChange:", "team", "players", "at:put:", "new", "val", "asJQuery", "current", "team:", "with:", "option", "value:"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelection:on:",
category: 'rendering',
fn: function (playerNumber,html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._li())._with_(_st("Player ").__comma(playerNumber));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._playerSelectBox_on_(playerNumber,html);
return _st(self)._armySelectBox_on_(playerNumber,html);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerSelection:on:",{playerNumber:playerNumber,html:html},smalltalk.CWStartMenu)})},
args: ["playerNumber", "html"],
source: "playerSelection: playerNumber on: html\x0a\x09html li with: 'Player ', playerNumber.\x0a\x09html li with: [\x0a\x09\x09self playerSelectBox: playerNumber on: html.\x0a\x09\x09self armySelectBox: playerNumber on: html ].",
messageSends: ["with:", ",", "li", "playerSelectBox:on:", "armySelectBox:on:"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderBackButtonOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(html)._button();
_st($1)._class_("backButton");
$2=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._back();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@backButton"]=$2;
_st(self)._backButton();
return self}, function($ctx1) {$ctx1.fill(self,"renderBackButtonOn:",{html:html},smalltalk.CWStartMenu)})},
args: ["html"],
source: "renderBackButtonOn: html\x0a\x09\x09backButton := html button \x0a\x09\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09\x09onClick: [ self back ].\x0a\x09\x09self backButton.\x09\x09",
messageSends: ["class:", "button", "onClick:", "back", "backButton"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'initalize-release',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@box"]=_st(_st(html)._div())._class_("intro");
_st(self)._addFrontImages();
_st(self["@box"])._append_((function(){
return smalltalk.withContext(function($ctx2) {
self["@subBox"]=_st(_st(html)._div())._class_("introMenu");
return self["@subBox"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._menuWith_(_st(self)._startingMenuDict());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWStartMenu)})},
args: ["html"],
source: "renderOn: html\x0a\x09box := html div\x0a\x09\x09class: 'intro'.\x0a\x09self addFrontImages.\x0a\x09box append: [ subBox := html div class: 'introMenu' ].\x0a\x09self menuWith: self startingMenuDict.",
messageSends: ["class:", "div", "addFrontImages", "append:", "menuWith:", "startingMenuDict"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderStartFightButton:on:",
category: 'rendering',
fn: function (armyName,html){
var self=this;
var but;
function $CWAI(){return smalltalk.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
function $CWHuman(){return smalltalk.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
function $CWAggressWeakestAI(){return smalltalk.CWAggressWeakestAI||(typeof CWAggressWeakestAI=="undefined"?nil:CWAggressWeakestAI)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$5,$6,$4;
$1=_st(html)._button();
_st($1)._class_("armyButton");
_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(html)._h4();
_st($2)._class_("subTitle");
$3=_st($2)._with_(_st("VS ").__comma(_st(armyName)._upFirstLetter()));
$3;
_st(html)._img_(_st(_st("ressources/images/monsters/").__comma(armyName)).__comma("/troop-heros.png"));
return _st(html)._img_(_st(_st("ressources/images/monsters/").__comma(armyName)).__comma("/cavalry-heros.png"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$4=_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@gameSettings"])._afterGameBlock_((function(loserArray){
return smalltalk.withContext(function($ctx3) {
_st(self)._toggle();
$5=_st(_st(loserArray)._size()).__eq((1));
if(smalltalk.assert($5)){
$6=_st(_st(loserArray)._at_((1)))._isKindOf_($CWAI());
if(smalltalk.assert($6)){
_st(_st(self["@gameSettings"])._wonMatches())._add_(armyName);
return _st(but)._class_("armyButton done");
};
};
}, function($ctx3) {$ctx3.fillBlock({loserArray:loserArray},$ctx1)})}));
_st(self["@gameSettings"])._resetPlayers();
_st(self["@gameSettings"])._addPlayer_(_st(_st($CWHuman())._new())._team_(_st(self["@gameSettings"])._playerArmy()));
_st(self["@gameSettings"])._addPlayer_(_st(_st($CWAggressWeakestAI())._new())._team_(armyName));
return _st(self)._startBeta();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
but=$4;
return self}, function($ctx1) {$ctx1.fill(self,"renderStartFightButton:on:",{armyName:armyName,html:html,but:but},smalltalk.CWStartMenu)})},
args: ["armyName", "html"],
source: "renderStartFightButton: armyName on: html\x0a\x09| but |\x0a\x09but := html button\x0a\x09\x09\x09\x09\x09class: 'armyButton';\x0a\x09\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09\x09html h4 \x0a\x09\x09\x09\x09\x09\x09\x09class: 'subTitle'; \x0a\x09\x09\x09\x09\x09\x09\x09with: 'VS ', armyName upFirstLetter. \x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/troop-heros.png'.\x0a\x09\x09\x09\x09\x09\x09html img: 'ressources/images/monsters/', armyName, '/cavalry-heros.png' ];\x0a\x09\x09\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09\x09\x09gameSettings afterGameBlock: [ :loserArray |\x0a\x09\x09\x09\x09\x09\x09\x09\x09self toggle.\x0a\x09\x09\x09\x09\x09\x09\x09\x09loserArray size = 1 ifTrue: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09((loserArray at: 1) isKindOf: CWAI) ifTrue: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09gameSettings wonMatches add: armyName.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09but class: 'armyButton done' \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09] ] ].\x0a\x09\x09\x09\x09\x09\x09gameSettings resetPlayers.\x0a\x09\x09\x09\x09\x09\x09gameSettings addPlayer: (CWHuman new team: gameSettings playerArmy).\x0a\x09\x09\x09\x09\x09\x09gameSettings addPlayer: (CWAggressWeakestAI new team: armyName).\x0a\x09\x09\x09\x09\x09\x09self startBeta ].",
messageSends: ["class:", "button", "with:", "h4", ",", "upFirstLetter", "img:", "onClick:", "afterGameBlock:", "toggle", "ifTrue:", "add:", "wonMatches", "isKindOf:", "at:", "=", "size", "resetPlayers", "addPlayer:", "team:", "playerArmy", "new", "startBeta"],
referencedClasses: ["CWAI", "CWHuman", "CWAggressWeakestAI"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'initalize-release',
fn: function (){
var self=this;
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@gameSettings"]=_st($CWGameSettings())._new();
self["@history"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWStartMenu)})},
args: [],
source: "reset\x0a\x09gameSettings := CWGameSettings new.\x0a\x09history :=  Array new.",
messageSends: ["new"],
referencedClasses: ["CWGameSettings", "Array"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "ressourcesFolder",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "ressources/images/start/";
}, function($ctx1) {$ctx1.fill(self,"ressourcesFolder",{},smalltalk.CWStartMenu)})},
args: [],
source: "ressourcesFolder\x0a\x09^ 'ressources/images/start/'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "selectBoxClasses",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new_((2));
_st($2)._at_put_((1),"styledSelect styledSelectGreen");
_st($2)._at_put_((2),"styledSelect styledSelectRed");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"selectBoxClasses",{},smalltalk.CWStartMenu)})},
args: [],
source: "selectBoxClasses\x0a\x09^ (Array new: 2)\x0a\x09\x09at: 1 put: 'styledSelect styledSelectGreen';\x0a\x09\x09at: 2 put: 'styledSelect styledSelectRed';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
category: 'game settings',
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._toggle();
_st(self["@gameSettings"])._mapNumber_((8));
_st($CWBootstrapper())._bootstrap_(self["@gameSettings"]);
return self}, function($ctx1) {$ctx1.fill(self,"startBeta",{},smalltalk.CWStartMenu)})},
args: [],
source: "startBeta\x0a\x09self toggle.\x0a\x09gameSettings mapNumber: 8.\x0a\x09CWBootstrapper bootstrap: gameSettings",
messageSends: ["toggle", "mapNumber:", "bootstrap:"],
referencedClasses: ["CWBootstrapper"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startingBlock",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._menuWith_(_st(self)._startingMenuDict());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingBlock",{},smalltalk.CWStartMenu)})},
args: [],
source: "startingBlock\x0a\x09^ [ self menuWith: self startingMenuDict ]",
messageSends: ["menuWith:", "startingMenuDict"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startingMenuDict",
category: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("Tutorial",(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@history"])._add_(_st(self)._startingBlock());
return _st(self)._tutorial();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Campaign",(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@history"])._add_(_st(self)._startingBlock());
return _st(self)._campaign();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Custom game",(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@history"])._add_(_st(self)._startingBlock());
return _st(self)._choosePlayers();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Credits",(function(){
return smalltalk.withContext(function($ctx2) {
_st(self["@history"])._add_(_st(self)._startingBlock());
return _st(self)._credits();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingMenuDict",{},smalltalk.CWStartMenu)})},
args: [],
source: "startingMenuDict\x0a\x09^ Dictionary new\x0a\x09\x09at: 'Tutorial' put: [ history add: self startingBlock. self tutorial. ];\x0a\x09\x09at: 'Campaign' put: [ history add: self startingBlock. self campaign ];\x0a\x09\x09at: 'Custom game' put: [ history add: self startingBlock. self choosePlayers ];\x0a\x09\x09\x22at: 'Map Editor' put: [window alert: 'for future use, click on custom game' ];\x22\x0a\x09\x09at: 'Credits' put: [ history add: self startingBlock. self credits ];\x0a\x09\x09yourself",
messageSends: ["at:put:", "add:", "startingBlock", "tutorial", "new", "campaign", "choosePlayers", "credits", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "toggle",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@box"])._asJQuery())._toggle();
return self}, function($ctx1) {$ctx1.fill(self,"toggle",{},smalltalk.CWStartMenu)})},
args: [],
source: "toggle\x0a\x09box asJQuery toggle",
messageSends: ["toggle", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "toggleFrontImages",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@frontImages"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._toggle();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toggleFrontImages",{},smalltalk.CWStartMenu)})},
args: [],
source: "toggleFrontImages\x0a\x09frontImages do: [ :each | each asJQuery toggle]",
messageSends: ["do:", "toggle", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "tutorial",
category: 'rendering - main',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$7,$8,$9,$10,$11,$13,$14,$12,$15,$17,$18,$16,$19,$20,$21,$22,$6,$2;
_st(self)._toggleFrontImages();
$1=self["@subBox"];
_st($1)._style_("font-size: 18px");
$2=_st($1)._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._class_("backButton");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
_st(self)._toggleFrontImages();
_st(self["@subBox"])._style_("font-size: 20px");
return _st(self)._back();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
self["@backButton"]=$4;
self["@backButton"];
_st(self)._backButton();
$5=_st(html)._div();
_st($5)._style_("margin-top: 6%; margin-left: 26%; width: 100%");
$6=_st($5)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$7=_st(html)._h3();
_st($7)._class_("mainTitle");
$8=_st($7)._with_("GOAL : kill all your ennemy army");
$8;
$9=_st(html)._h4();
_st($9)._class_("subTitle");
$10=_st($9)._with_("Basics");
$10;
$11=_st(html)._div();
_st($11)._style_("height: 50px");
$12=_st($11)._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._img_(_st(_st(self)._ressourcesFolder()).__comma("tuto1.png")))._style_("height: 84px; width: auto; float: left; margin-right: 6px; border: 3px solid gray");
$13=_st(html)._p();
_st($13)._style_("padding-top: 10px");
$14=_st($13)._with_("When you start your turn, all your activable creatures are surrounded by a white halo. \x0a\x09\x09\x09\x09\x09\x09Click on one of them to activate it. You can activate only one creature per turn.");
return $14;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$12;
$15=_st(html)._div();
_st($15)._style_("height: 105px");
$16=_st($15)._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._img_(_st(_st(self)._ressourcesFolder()).__comma("tuto2.png")))._style_("height: 100px; width: auto; float: right; margin-left: 6px; border: 3px solid gray");
$17=_st(html)._p();
_st($17)._style_("padding-top: 25px");
$18=_st($17)._with_("When a creature is activated, a bunch of tiles become colored. On click, the selected creature will move to a green tile and attack the ennemy on a red tiles.");
return $18;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
$16;
_st(_st(html)._p())._with_("When the creature has moved its full move and attacked (or is not able to attack), it is the other player turn. \x0a\x09\x09\x09\x09\x09If you have remaining move but you want to finish your turn, please click on the End turn button.");
$19=_st(html)._h4();
_st($19)._class_("subTitle");
$20=_st($19)._with_("Advanced");
$20;
$21=_st(html)._div();
_st($21)._style_("height: 145px");
$22=_st($21)._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._img_(_st(_st(self)._ressourcesFolder()).__comma("tuto3.png")))._style_("height: 140px; width: auto; float: left; margin-right: 6px;");
_st(_st(html)._p())._with_("When you click on a creature, you can see on the top left its capabilities. \x0a\x09\x09\x09\x09\x09\x09\x09For example a creature can roll from 1 to 6 dices to attack, each dices having from 30% to 70% chances of hitting.");
return _st(_st(html)._p())._with_("Lastly, fast or cavalry creatures are better against range creatures, \x0a\x09\x09\x09\x09\x09\x09\x09which are better against foot creatures, which are then better against fast or cavalry ones.");
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return $22;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $6;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"tutorial",{},smalltalk.CWStartMenu)})},
args: [],
source: "tutorial\x0a\x09self toggleFrontImages.\x0a\x09subBox \x0a\x09\x09style: 'font-size: 18px';\x0a\x09\x09contents: [ :html | \x0a\x09\x09backButton := html button \x0a\x09\x09\x09class: 'backButton';\x0a\x09\x09\x09onClick: [ \x0a\x09\x09\x09\x09self toggleFrontImages.\x0a\x09\x09\x09\x09subBox style: 'font-size: 20px'.\x0a\x09\x09\x09\x09self back ].\x0a\x09\x09self backButton.\x0a\x09\x09html div\x0a\x09\x09\x09style: 'margin-top: 6%; margin-left: 26%; width: 100%';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html h3 \x0a\x09\x09\x09\x09class: 'mainTitle';\x0a\x09\x09\x09\x09with: 'GOAL : kill all your ennemy army'.\x0a\x09\x09\x09html h4 \x0a\x09\x09\x09\x09class: 'subTitle';\x0a\x09\x09\x09\x09with: 'Basics'.\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 50px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto1.png') style: 'height: 84px; width: auto; float: left; margin-right: 6px; border: 3px solid gray'.\x0a\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09style: 'padding-top: 10px';\x0a\x09\x09\x09\x09\x09with: 'When you start your turn, all your activable creatures are surrounded by a white halo. \x0a\x09\x09\x09\x09\x09\x09Click on one of them to activate it. You can activate only one creature per turn.'. ].\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 105px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto2.png') style: 'height: 100px; width: auto; float: right; margin-left: 6px; border: 3px solid gray'.\x0a\x09\x09\x09\x09html p\x0a\x09\x09\x09\x09\x09style: 'padding-top: 25px';\x0a\x09\x09\x09\x09\x09with: 'When a creature is activated, a bunch of tiles become colored. On click, the selected creature will move to a green tile and attack the ennemy on a red tiles.'. ].\x0a\x09\x09\x09\x09html p with: 'When the creature has moved its full move and attacked (or is not able to attack), it is the other player turn. \x0a\x09\x09\x09\x09\x09If you have remaining move but you want to finish your turn, please click on the End turn button.'.\x0a\x09\x09\x09html h4 \x0a\x09\x09\x09\x09class: 'subTitle';\x0a\x09\x09\x09\x09with: 'Advanced'.\x0a\x09\x09\x09html div \x0a\x09\x09\x09\x09style: 'height: 145px';\x0a\x09\x09\x09\x09with: [\x0a\x09\x09\x09\x09\x09(html img: self ressourcesFolder, 'tuto3.png') style: 'height: 140px; width: auto; float: left; margin-right: 6px;'.\x0a\x09\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09\x09with: 'When you click on a creature, you can see on the top left its capabilities. \x0a\x09\x09\x09\x09\x09\x09\x09For example a creature can roll from 1 to 6 dices to attack, each dices having from 30% to 70% chances of hitting.'.\x0a\x09\x09\x09\x09\x09html p \x0a\x09\x09\x09\x09\x09\x09with: 'Lastly, fast or cavalry creatures are better against range creatures, \x0a\x09\x09\x09\x09\x09\x09\x09which are better against foot creatures, which are then better against fast or cavalry ones.'. ] ] ]",
messageSends: ["toggleFrontImages", "style:", "contents:", "class:", "button", "onClick:", "back", "backButton", "div", "with:", "h3", "h4", "img:", ",", "ressourcesFolder", "p"],
referencedClasses: []
}),
smalltalk.CWStartMenu);


smalltalk.CWStartMenu.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$5,$3;
$1=self["@default"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@default"]=_st(_st(self)._new())._appendToJQuery_(_st("#global")._asJQuery());
$2=self["@default"];
return $2;
} else {
$1;
};
$4=self["@default"];
_st($4)._reset();
_st($4)._menuWith_(_st(self["@default"])._startingMenuDict());
$5=_st($4)._toggle();
$3=$5;
return $3;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.CWStartMenu.klass)})},
args: [],
source: "start\x0a\x09default ifNil: [ ^ default := self new appendToJQuery: '#global' asJQuery ].\x0a\x09^ default \x0a\x09\x09reset;\x0a\x09\x09menuWith: default startingMenuDict;\x0a\x09\x09toggle",
messageSends: ["ifNil:", "appendToJQuery:", "asJQuery", "new", "reset", "menuWith:", "startingMenuDict", "toggle"],
referencedClasses: []
}),
smalltalk.CWStartMenu.klass);


