smalltalk.addPackage('Easnoth-GameAndPlayers');
smalltalk.addClass('CWGame', smalltalk.Object, ['map', 'context', 'playerPool', 'endGameBlock'], 'Easnoth-GameAndPlayers');
smalltalk.CWGame.comment="Represent the game. Includes the god game logic (turn system)"
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGame)})},
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWGame);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGame)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._gameContext())._currentPlayer();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGame)})},
args: [],
source: "currentPlayer\x0a\x09^ self gameContext currentPlayer",
messageSends: ["currentPlayer", "gameContext"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "endGameEvent:",
category: 'initialize-release',
fn: function (ev){
var self=this;
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWEndGameEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._announcer())._reset();
_st(ev)._endGame();
_st(self["@map"])._removeSelection();
_st(self["@map"])._desactivateMonsters();
_st(self["@map"])._clean();
_st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@map"])._clean();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._valueWithTimeout_((500));
return _st(self["@endGameBlock"])._value_(_st(self["@playerPool"])._select_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._hasLost();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"endGameEvent:",{ev:ev},smalltalk.CWGame)})},
args: ["ev"],
source: "endGameEvent: ev\x0a\x09self announcer\x0a\x09\x09on: CWEndGameEvent\x0a\x09\x09do: [ self announcer reset. \x0a\x09\x09\x09ev endGame.\x0a\x09\x09\x09map removeSelection.\x0a\x09\x09\x09map desactivateMonsters.\x0a\x09\x09\x09map clean.\x0a\x09\x09\x09[ map clean ] valueWithTimeout: 500.\x0a\x09\x09\x09endGameBlock value: (playerPool select: [ :each | each hasLost ]) ].",
messageSends: ["on:do:", "reset", "announcer", "endGame", "removeSelection", "desactivateMonsters", "clean", "valueWithTimeout:", "value:", "select:", "hasLost"],
referencedClasses: ["CWEndGameEvent"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWGame)})},
args: [],
source: "eventManagerLayerId\x0a\x09^ '#eventManager'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._gameContext())._nextTurn_(_st(self["@playerPool"])._at_(_st((2))._atRandom()));
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGame)})},
args: [],
source: "firstTurn\x0a\x09self gameContext nextTurn: (playerPool at: 2 atRandom).\x0a\x09self currentPlayer startTurn: map.",
messageSends: ["nextTurn:", "at:", "atRandom", "gameContext", "startTurn:", "currentPlayer"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWGame)})},
args: [],
source: "gameContext\x0a\x09^ context",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWGameContext(){return smalltalk.CWGameContext||(typeof CWGameContext=="undefined"?nil:CWGameContext)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@context"]=_st($CWGameContext())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGame)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09context := CWGameContext new.",
messageSends: ["initialize", "new"],
referencedClasses: ["CWGameContext"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeAI:",
category: 'initialize-release',
fn: function (eventDispatcher){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._do_((function(player){
return smalltalk.withContext(function($ctx2) {
return _st(player)._eventDispatcher_(eventDispatcher);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeAI:",{eventDispatcher:eventDispatcher},smalltalk.CWGame)})},
args: ["eventDispatcher"],
source: "initializeAI: eventDispatcher\x0a\x09playerPool do: [ :player |\x0a\x09\x09player eventDispatcher: eventDispatcher ]",
messageSends: ["do:", "eventDispatcher:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWGameStart(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._startGame();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._announcer())._on_do_($CWNextTurnEvent(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._nextTurn();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWGame)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWGameStart\x0a\x09\x09do: [ self startGame ].\x0a\x09self announcer\x0a\x09\x09on: CWNextTurnEvent\x0a\x09\x09do: [ self nextTurn ].",
messageSends: ["on:do:", "startGame", "announcer", "nextTurn"],
referencedClasses: ["CWGameStart", "CWNextTurnEvent"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayerMonsters",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._do_((function(player){
return smalltalk.withContext(function($ctx2) {
return _st(player)._addMonstersToMap_(self["@map"]);
}, function($ctx2) {$ctx2.fillBlock({player:player},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayerMonsters",{},smalltalk.CWGame)})},
args: [],
source: "initializePlayerMonsters\x0a\x09playerPool do: [ :player |\x0a\x09\x09player addMonstersToMap: map ].",
messageSends: ["do:", "addMonstersToMap:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayers",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWAI(){return smalltalk.CWAI||(typeof CWAI=="undefined"?nil:CWAI)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@playerPool"])._withIndexDo_((function(player,i){
return smalltalk.withContext(function($ctx2) {
_st(player)._side_(_st(_st(i).__minus((1.5))).__star((2)));
_st(player)._initializeWithMap_(self["@map"]);
$1=_st(player)._isKindOf_($CWAI());
if(smalltalk.assert($1)){
return _st(player)._gameContext_(_st(self)._gameContext());
};
}, function($ctx2) {$ctx2.fillBlock({player:player,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayers",{},smalltalk.CWGame)})},
args: [],
source: "initializePlayers\x0a\x09\x22To check and refactor\x22\x0a\x0a\x09playerPool withIndexDo: [ :player :i |\x0a\x09\x09player side: i - 1.5 * 2. \x22works only for 2 players. Enough for now\x22\x0a\x09\x09player initializeWithMap: map.\x0a\x09\x09(player isKindOf: CWAI) ifTrue: [ player gameContext: self gameContext ] ]",
messageSends: ["withIndexDo:", "side:", "*", "-", "initializeWithMap:", "ifTrue:", "gameContext:", "gameContext", "isKindOf:"],
referencedClasses: ["CWAI"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSettings:",
category: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
function $CWFightMenu(){return smalltalk.CWFightMenu||(typeof CWFightMenu=="undefined"?nil:CWFightMenu)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(_st(gameSettings)._mapNumber());
_st($CWFightMenu())._new();
self["@endGameBlock"]=_st(gameSettings)._afterGameBlock();
self["@playerPool"]=_st(gameSettings)._players();
_st(self)._initializePlayers();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSettings:",{gameSettings:gameSettings},smalltalk.CWGame)})},
args: ["gameSettings"],
source: "initializeWithSettings: gameSettings\x0a\x09map := CWMap newWithMapIndex: gameSettings mapNumber.\x0a\x09CWFightMenu new.\x0a\x09endGameBlock := gameSettings afterGameBlock.\x0a\x09playerPool := gameSettings players.\x0a\x09self initializePlayers.\x0a\x09self initializeEventHandling.",
messageSends: ["newWithMapIndex:", "mapNumber", "new", "afterGameBlock", "players", "initializePlayers", "initializeEventHandling"],
referencedClasses: ["CWMap", "CWFightMenu"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPlayer",
category: 'game logic',
fn: function (){
var self=this;
var index;
return smalltalk.withContext(function($ctx1) { 
var $1;
index=_st(self["@playerPool"])._indexOf_(_st(self)._currentPlayer());
$1=_st(self["@playerPool"])._at_ifAbsent_(_st(index).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@playerPool"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextPlayer",{index:index},smalltalk.CWGame)})},
args: [],
source: "nextPlayer\x0a\x09| index |\x0a\x09index := playerPool indexOf: self currentPlayer.\x0a\x09^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]",
messageSends: ["indexOf:", "currentPlayer", "at:ifAbsent:", "+", "at:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._currentPlayer())._endTurn_(self["@map"]);
_st(_st(self)._gameContext())._nextTurn_(_st(self)._nextPlayer());
_st(_st(self)._currentPlayer())._startTurn_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{},smalltalk.CWGame)})},
args: [],
source: "nextTurn\x0a\x09self currentPlayer endTurn: map.\x0a\x09self gameContext nextTurn: self nextPlayer.\x0a\x09self currentPlayer startTurn: map",
messageSends: ["endTurn:", "currentPlayer", "nextTurn:", "nextPlayer", "gameContext", "startTurn:"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
category: 'initialize-release',
fn: function (){
var self=this;
var eventDispatcher;
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._initializePlayerMonsters();
_st(self["@map"])._initializeDrawer();
eventDispatcher=_st(_st($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
_st(self)._initializeAI_(eventDispatcher);
_st(self)._endGameEvent_(eventDispatcher);
_st(self["@map"])._updateMap();
_st(self["@map"])._removeSelection();
_st(self)._firstTurn();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{eventDispatcher:eventDispatcher},smalltalk.CWGame)})},
args: [],
source: "startGame\x0a\x09| eventDispatcher |\x0a\x09self initializePlayerMonsters.\x0a\x09map initializeDrawer.\x0a\x09eventDispatcher := CWEventDispatcher new initializeForMap: map game: self.\x0a\x09self initializeAI: eventDispatcher.\x0a\x09self endGameEvent: eventDispatcher.\x0a\x09map updateMap.\x0a\x09map removeSelection. \x22initialize got to invis image\x22\x0a\x09self firstTurn.",
messageSends: ["initializePlayerMonsters", "initializeDrawer", "initializeForMap:game:", "new", "initializeAI:", "endGameEvent:", "updateMap", "removeSelection", "firstTurn"],
referencedClasses: ["CWEventDispatcher"]
}),
smalltalk.CWGame);



smalltalk.addClass('CWGameContext', smalltalk.Object, ['currentPlayer', 'currentCell', 'relatedCell'], 'Easnoth-GameAndPlayers');
smalltalk.CWGameContext.comment="Represents the current context of the game, typcally, which player is playing and what monster is currently about to attack / move"
smalltalk.addMethod(
smalltalk.method({
selector: "currentCell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell",{},smalltalk.CWGameContext)})},
args: [],
source: "currentCell\x0a\x09^ currentCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
category: 'accessing',
fn: function (aCurrentCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=aCurrentCell;
return self}, function($ctx1) {$ctx1.fill(self,"currentCell:",{aCurrentCell:aCurrentCell},smalltalk.CWGameContext)})},
args: ["aCurrentCell"],
source: "currentCell: aCurrentCell \x0a\x09currentCell := aCurrentCell ",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentCell"])._monster();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentMonster",{},smalltalk.CWGameContext)})},
args: [],
source: "currentMonster\x0a\x09^ currentCell monster",
messageSends: ["monster"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentMonster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentCell"]=_st(aMonster)._parent();
return self}, function($ctx1) {$ctx1.fill(self,"currentMonster:",{aMonster:aMonster},smalltalk.CWGameContext)})},
args: ["aMonster"],
source: "currentMonster: aMonster\x0a\x09currentCell := aMonster parent",
messageSends: ["parent"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@currentPlayer"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayer",{},smalltalk.CWGameContext)})},
args: [],
source: "currentPlayer\x0a\x09^ currentPlayer",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPlayerSide",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@currentPlayer"])._side();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPlayerSide",{},smalltalk.CWGameContext)})},
args: [],
source: "currentPlayerSide\x0a\x09^ currentPlayer side",
messageSends: ["side"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn:",
category: 'game logic',
fn: function (nextPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentPlayer"]=nextPlayer;
self["@currentCell"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn:",{nextPlayer:nextPlayer},smalltalk.CWGameContext)})},
args: ["nextPlayer"],
source: "nextTurn: nextPlayer\x0a\x09currentPlayer := nextPlayer.\x0a\x09currentCell := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "relatedCell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@relatedCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"relatedCell",{},smalltalk.CWGameContext)})},
args: [],
source: "relatedCell\x0a\x09^ relatedCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "relatedCell:",
category: 'accessing',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@relatedCell"]=aCell;
return self}, function($ctx1) {$ctx1.fill(self,"relatedCell:",{aCell:aCell},smalltalk.CWGameContext)})},
args: ["aCell"],
source: "relatedCell: aCell\x0a\x09relatedCell := aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "restartTurn",
category: 'game logic',
fn: function (){
var self=this;
var map;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
map=_st(_st(self)._currentCell())._root();
$1=_st(self)._currentPlayer();
_st($1)._endTurn_(map);
$2=_st($1)._startTurn_(map);
return self}, function($ctx1) {$ctx1.fill(self,"restartTurn",{map:map},smalltalk.CWGameContext)})},
args: [],
source: "restartTurn\x0a\x09| map |\x0a\x09map := self currentCell root.\x0a\x09self currentPlayer\x0a\x09\x09endTurn: map;\x0a\x09\x09startTurn: map.",
messageSends: ["root", "currentCell", "endTurn:", "currentPlayer", "startTurn:"],
referencedClasses: []
}),
smalltalk.CWGameContext);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldRestartTurn",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self)._currentCell();
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=_st(self)._currentMonster();
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
var m;
m=$receiver;
$3=_st(_st(m)._hasPlayed())._not();
return $3;
};
};
return false;
}, function($ctx1) {$ctx1.fill(self,"shouldRestartTurn",{},smalltalk.CWGameContext)})},
args: [],
source: "shouldRestartTurn\x0a\x09self currentCell ifNotNil: [ self currentMonster ifNotNil: [ :m | ^ m hasPlayed not ] ].\x0a\x09^ false",
messageSends: ["ifNotNil:", "not", "hasPlayed", "currentMonster", "currentCell"],
referencedClasses: []
}),
smalltalk.CWGameContext);



smalltalk.addClass('CWPlayer', smalltalk.Object, ['side', 'team'], 'Easnoth-GameAndPlayers');
smalltalk.CWPlayer.comment="I represent a player playing Easnoth."
smalltalk.addMethod(
smalltalk.method({
selector: "addMonstersToMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
var positions;
return smalltalk.withContext(function($ctx1) { 
positions=_st(self)._monstersPositionArray();
_st(positions)._withIndexDo_((function(point,n){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(aMap)._childAt_(_st(point)._x()))._childAt_(_st(point)._y()))._addMonster_(_st(self["@team"])._at_(n));
}, function($ctx2) {$ctx2.fillBlock({point:point,n:n},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addMonstersToMap:",{aMap:aMap,positions:positions},smalltalk.CWPlayer)})},
args: ["aMap"],
source: "addMonstersToMap: aMap\x0a\x09\x22hack for now\x22\x0a\x09\x0a\x09| positions |\x0a\x09positions := self monstersPositionArray.\x0a\x09\x22((aMap childAt: positions first x) childAt: positions first y) addMonster: (team at: 1) \x22\x0a\x09positions withIndexDo: [ :point :n |\x0a\x09\x09((aMap childAt: point x) childAt: point y) addMonster: (team at: n) ].",
messageSends: ["monstersPositionArray", "withIndexDo:", "addMonster:", "at:", "childAt:", "y", "x"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWPlayer)})},
args: ["event"],
source: "announce: event\x0a\x09self announcer announce: event",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'events',
fn: function (){
var self=this;
function $CWEasnothAnnouncer(){return smalltalk.CWEasnothAnnouncer||(typeof CWEasnothAnnouncer=="undefined"?nil:CWEasnothAnnouncer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWEasnothAnnouncer())._current();
return $1;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWPlayer)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endGame",
category: 'events',
fn: function (){
var self=this;
function $CWEndGameEvent(){return smalltalk.CWEndGameEvent||(typeof CWEndGameEvent=="undefined"?nil:CWEndGameEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(window)._alert_(_st("Someone just won. Guess who ? loser : ").__comma(_st(self)._endGamePrintString()));
_st(self)._announce_(_st($CWEndGameEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"endGame",{},smalltalk.CWPlayer)})},
args: [],
source: "endGame\x0a\x09window alert: 'Someone just won. Guess who ? loser : ' , self endGamePrintString.\x0a\x09self announce: CWEndGameEvent new.",
messageSends: ["alert:", ",", "endGamePrintString", "announce:", "new"],
referencedClasses: ["CWEndGameEvent"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endGamePrintString",
category: 'printing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"endGamePrintString",{},smalltalk.CWPlayer)})},
args: [],
source: "endGamePrintString\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "endTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(map)._desactivateMonsters();
_st(map)._removeSelection();
return self}, function($ctx1) {$ctx1.fill(self,"endTurn:",{map:map},smalltalk.CWPlayer)})},
args: ["map"],
source: "endTurn: map\x0a\x09map desactivateMonsters.\x0a\x09map removeSelection.",
messageSends: ["desactivateMonsters", "removeSelection"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "hasLost",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._team())._isEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasLost",{},smalltalk.CWPlayer)})},
args: [],
source: "hasLost\x0a\x09^ self team isEmpty ",
messageSends: ["isEmpty", "team"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._announce_(_st($CWWaitForObject())._new());
_st(jQuery)._getJSON_onSuccess_(_st(_st("ressources/json/armies/").__comma(_st(self)._team())).__comma(".json"),(function(data){
return smalltalk.withContext(function($ctx2) {
_st(self)._initializeWithMap_army_(aMap,data);
return _st(self)._announce_(_st($CWObjectLoaded())._new());
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:",{aMap:aMap},smalltalk.CWPlayer)})},
args: ["aMap"],
source: "initializeWithMap: aMap\x0a\x09\x22get the monsters of the player and put them in the map. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the players\x22\x0a\x09\x0a\x09self announce: CWWaitForObject new.\x0a\x09\x0a\x09jQuery \x0a\x09\x09getJSON: 'ressources/json/armies/', self team, '.json' \x0a\x09\x09onSuccess: [:data |\x0a\x09\x09\x09self initializeWithMap: aMap army: data.\x0a\x09\x09\x09self announce: CWObjectLoaded new]",
messageSends: ["announce:", "new", "getJSON:onSuccess:", ",", "team", "initializeWithMap:army:"],
referencedClasses: ["CWWaitForObject", "CWObjectLoaded"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithMap:army:",
category: 'initialize-release',
fn: function (aMap,data){
var self=this;
var monsters;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
monsters=_st($Array())._new_((9));
_st(monsters)._at_put_((7),_st(self)._newTroop_(_st(data)._troop()));
_st(monsters)._at_put_((8),_st(self)._newTroopHeros_(_st(data)._troopHeros()));
_st(monsters)._at_put_((9),_st(self)._newTroop_(_st(data)._troop()));
_st(monsters)._at_put_((4),_st(self)._newRange_(_st(data)._range()));
_st(monsters)._at_put_((5),_st(self)._newRangeHeros_(_st(data)._rangeHeros()));
_st(monsters)._at_put_((6),_st(self)._newRange_(_st(data)._range()));
_st(monsters)._at_put_((1),_st(self)._newCavalry_(_st(data)._cavalry()));
_st(monsters)._at_put_((2),_st(self)._newCavalryHeros_(_st(data)._cavalryHeros()));
_st(monsters)._at_put_((3),_st(self)._newCavalry_(_st(data)._cavalry()));
self["@team"]=monsters;
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithMap:army:",{aMap:aMap,data:data,monsters:monsters},smalltalk.CWPlayer)})},
args: ["aMap", "data"],
source: "initializeWithMap: aMap army: data\x0a\x09\x09\x22initialize the monsters of the player. Assumes the team instance variable is the string from the gameSettings and change it to the monsters of the player\x22\x0a\x09\x09| monsters |\x0a\x09\x09monsters := Array new: 9.\x0a\x09\x09monsters at: 7 put: (self newTroop: data troop).\x0a\x09\x09monsters at: 8 put: (self newTroopHeros: data troopHeros).\x0a\x09\x09monsters at: 9 put: (self newTroop: data troop).\x0a\x09\x09monsters at: 4 put: (self newRange: data range).\x0a\x09\x09monsters at: 5 put: (self newRangeHeros: data rangeHeros).\x0a\x09\x09monsters at: 6 put: (self newRange: data range).\x0a\x09\x09monsters at: 1 put: (self newCavalry: data cavalry).\x0a\x09\x09monsters at: 2 put: (self newCavalryHeros: data cavalryHeros).\x0a\x09\x09monsters at: 3 put: (self newCavalry: data cavalry).\x0a\x09\x09team := monsters.",
messageSends: ["new:", "at:put:", "newTroop:", "troop", "newTroopHeros:", "troopHeros", "newRange:", "range", "newRangeHeros:", "rangeHeros", "newCavalry:", "cavalry", "newCavalryHeros:", "cavalryHeros"],
referencedClasses: ["Array"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "monstersPositionArray",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(self)._side()).__eq((1));
if(smalltalk.assert($2)){
$1=[_st((3)).__at((8)),_st((4)).__at((8)),_st((5)).__at((8)),_st((1)).__at((7)),_st((2)).__at((7)),_st((2)).__at((8)),_st((1)).__at((4)),_st((1)).__at((5)),_st((1)).__at((6))];
} else {
$1=[_st((6)).__at((1)),_st((7)).__at((1)),_st((8)).__at((1)),_st((9)).__at((1)),_st((9)).__at((2)),_st((10)).__at((2)),_st((10)).__at((5)),_st((10)).__at((4)),_st((10)).__at((3))];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monstersPositionArray",{},smalltalk.CWPlayer)})},
args: [],
source: "monstersPositionArray\x0a\x09\x22hack for now. should be stored in database\x22\x0a\x09\x0a\x09^ self side = 1\x0a\x09\x09ifTrue: [ { 3@8 . 4@8 . 5@8 . 1@7. 2@7 . 2@8 . 1@4 . 1@5 . 1@6 } ]\x0a\x09\x09ifFalse: [ { 6@1 . 7@1 . 8@1. 9@1 . 9@2 . 10@2 . 10@5 . 10@4 . 10@3} ]",
messageSends: ["ifTrue:ifFalse:", "@", "=", "side"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalry:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalry:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newCavalry: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWCavalryStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWCavalryStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newCavalryHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWCavalryStrategy(){return smalltalk.CWCavalryStrategy||(typeof CWCavalryStrategy=="undefined"?nil:CWCavalryStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWCavalryStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newCavalryHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newCavalryHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWCavalryStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWCavalryStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonster:heros:type:",
category: 'factory',
fn: function (jsonStat,strat,aType){
var self=this;
function $CWMonster(){return smalltalk.CWMonster||(typeof CWMonster=="undefined"?nil:CWMonster)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonster())._new())._initializeWithStat_army_player_heros_type_(jsonStat,_st(self)._team(),self,strat,aType);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonster:heros:type:",{jsonStat:jsonStat,strat:strat,aType:aType},smalltalk.CWPlayer)})},
args: ["jsonStat", "strat", "aType"],
source: "newMonster: jsonStat heros: strat type: aType\x0a\x09\x09\x22creates a new monster with self as player\x22\x0a\x09\x09^ CWMonster new initializeWithStat: jsonStat army: self team player: self heros: strat type: aType",
messageSends: ["initializeWithStat:army:player:heros:type:", "team", "new"],
referencedClasses: ["CWMonster"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRange:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRange:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newRange: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWRangeStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWRangeStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newRangeHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWRangeStrategy(){return smalltalk.CWRangeStrategy||(typeof CWRangeStrategy=="undefined"?nil:CWRangeStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWRangeStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newRangeHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newRangeHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWRangeStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWRangeStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroop:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWUnitStrategy(){return smalltalk.CWUnitStrategy||(typeof CWUnitStrategy=="undefined"?nil:CWUnitStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWUnitStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroop:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newTroop: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWUnitStrategy type: CWTroopStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWUnitStrategy", "CWTroopStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newTroopHeros:",
category: 'factory',
fn: function (jsonStat){
var self=this;
function $CWHerosStrategy(){return smalltalk.CWHerosStrategy||(typeof CWHerosStrategy=="undefined"?nil:CWHerosStrategy)}
function $CWTroopStrategy(){return smalltalk.CWTroopStrategy||(typeof CWTroopStrategy=="undefined"?nil:CWTroopStrategy)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self)._newMonster_heros_type_(jsonStat,$CWHerosStrategy(),$CWTroopStrategy());
return $1;
}, function($ctx1) {$ctx1.fill(self,"newTroopHeros:",{jsonStat:jsonStat},smalltalk.CWPlayer)})},
args: ["jsonStat"],
source: "newTroopHeros: jsonStat\x0a\x09\x09^ self newMonster: jsonStat heros: CWHerosStrategy type: CWTroopStrategy",
messageSends: ["newMonster:heros:type:"],
referencedClasses: ["CWHerosStrategy", "CWTroopStrategy"]
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
category: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=aStream;
_st($1)._nextPutAll_(_st(_st(self)._class())._name());
_st($1)._nextPutAll_("(");
_st($1)._nextPutAll_(_st(self["@side"])._printString());
_st($1)._nextPutAll_("-");
_st($1)._nextPutAll_(_st(self["@team"])._printString());
$2=_st($1)._nextPutAll_(")");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.CWPlayer)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream \x0a\x09\x09nextPutAll: self class name;\x0a\x09\x09nextPutAll: '(';\x0a\x09\x09nextPutAll: side printString;\x0a\x09\x09nextPutAll: '-';\x0a\x09\x09nextPutAll: team printString;\x0a\x09\x09nextPutAll: ')'",
messageSends: ["nextPutAll:", "name", "class", "printString"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'game logic',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self)._team())._remove_(aMonster);
_st(aMonster)._player_(nil);
$1=_st(self)._hasLost();
if(smalltalk.assert($1)){
_st(self)._endGame();
};
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aMonster:aMonster},smalltalk.CWPlayer)})},
args: ["aMonster"],
source: "removeMonster: aMonster\x0a\x09self team remove: aMonster.\x0a\x09aMonster player: nil.\x0a\x09self hasLost\x0a\x09\x09ifTrue: [ self endGame ]",
messageSends: ["remove:", "team", "player:", "ifTrue:", "endGame", "hasLost"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@side"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"side",{},smalltalk.CWPlayer)})},
args: [],
source: "side\x0a\x09^ side",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "side:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@side"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"side:",{int:int},smalltalk.CWPlayer)})},
args: ["int"],
source: "side: int\x0a\x09side := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self)._hasLost();
if(smalltalk.assert($1)){
$2=_st(self)._endGame();
return $2;
};
_st(_st(self)._team())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
_st(each)._readyToBePicked();
return _st(_st(each)._parent())._showActiveMonsters();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWPlayer)})},
args: ["map"],
source: "startTurn: map\x0a\x09self hasLost ifTrue: [ ^ self endGame ].\x0a\x09self team do: [ :each |\x0a\x09\x09each readyToBePicked.\x0a\x09\x09each parent showActiveMonsters ].",
messageSends: ["ifTrue:", "endGame", "hasLost", "do:", "readyToBePicked", "showActiveMonsters", "parent", "team"],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@team"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"team",{},smalltalk.CWPlayer)})},
args: [],
source: "team\x0a\x09^ team",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);

smalltalk.addMethod(
smalltalk.method({
selector: "team:",
category: 'accessing',
fn: function (aTeam){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@team"]=aTeam;
return self}, function($ctx1) {$ctx1.fill(self,"team:",{aTeam:aTeam},smalltalk.CWPlayer)})},
args: ["aTeam"],
source: "team: aTeam\x0a\x09team := aTeam",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);



smalltalk.addClass('CWAI', smalltalk.CWPlayer, ['gameContext', 'eventDispatcher'], 'Easnoth-GameAndPlayers');
smalltalk.addMethod(
smalltalk.method({
selector: "endGamePrintString",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Artificial Intelligence player";
}, function($ctx1) {$ctx1.fill(self,"endGamePrintString",{},smalltalk.CWAI)})},
args: [],
source: "endGamePrintString\x0a\x09^ 'Artificial Intelligence player'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "endTurn:",
category: 'game logic',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWPlayer.fn.prototype._endTurn_.apply(_st(self), [aMap]);
_st(_st(self)._eventDispatcher())._resume();
return self}, function($ctx1) {$ctx1.fill(self,"endTurn:",{aMap:aMap},smalltalk.CWAI)})},
args: ["aMap"],
source: "endTurn: aMap\x0a\x09super endTurn: aMap.\x0a\x09self eventDispatcher resume",
messageSends: ["endTurn:", "resume", "eventDispatcher"],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@eventDispatcher"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"eventDispatcher",{},smalltalk.CWAI)})},
args: [],
source: "eventDispatcher\x0a\x09^ eventDispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher:",
category: 'accessing',
fn: function (ev){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@eventDispatcher"]=ev;
return self}, function($ctx1) {$ctx1.fill(self,"eventDispatcher:",{ev:ev},smalltalk.CWAI)})},
args: ["ev"],
source: "eventDispatcher: ev\x0a\x09eventDispatcher := ev",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gameContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gameContext",{},smalltalk.CWAI)})},
args: [],
source: "gameContext\x0a\x09^ gameContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "gameContext:",
category: 'accessing',
fn: function (aCtx){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gameContext"]=aCtx;
return self}, function($ctx1) {$ctx1.fill(self,"gameContext:",{aCtx:aCtx},smalltalk.CWAI)})},
args: ["aCtx"],
source: "gameContext: aCtx\x0a\x09gameContext := aCtx",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAI);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._eventDispatcher())._suspend();
_st(self["@gameContext"])._relatedCell_(nil);
smalltalk.CWPlayer.fn.prototype._startTurn_.apply(_st(self), [aMap]);
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{aMap:aMap},smalltalk.CWAI)})},
args: ["aMap"],
source: "startTurn: aMap\x0a\x09self eventDispatcher suspend.\x0a\x09gameContext relatedCell: nil.\x0a\x09super startTurn: aMap",
messageSends: ["suspend", "eventDispatcher", "relatedCell:", "startTurn:"],
referencedClasses: []
}),
smalltalk.CWAI);



smalltalk.addClass('CWAggressWeakestAI', smalltalk.CWAI, ['monsterToPlay', 'cellToTarget'], 'Easnoth-GameAndPlayers');
smalltalk.CWAggressWeakestAI.comment="For each move, I calcul a score which correspond to :\x0a- how many damage the attacking monster will do (depends on number of dices + attack percentage )\x0a- how many hp left have the foe ( I try to attack the weakest foe)\x0a Then I execute the move that has the highest score.\x0a \x0a If I cannot attack, I just do some random move."
smalltalk.addMethod(
smalltalk.method({
selector: "calculBestMove",
category: 'game logic',
fn: function (){
var self=this;
var score,bestScore;
return smalltalk.withContext(function($ctx1) { 
var $1;
bestScore=_st((9999))._negated();
_st(_st(self)._team())._do_((function(monster){
return smalltalk.withContext(function($ctx2) {
_st(monster)._currentMove_(_st(monster)._move());
_st(_st(monster)._attackableNeighbours())._do_((function(target){
return smalltalk.withContext(function($ctx3) {
score=_st(_st(monster)._attackPotentialFor_(_st(target)._monster())).__minus(_st(_st(target)._monster())._defensePotential());
score;
$1=_st(score).__gt(bestScore);
if(smalltalk.assert($1)){
bestScore=score;
bestScore;
self["@monsterToPlay"]=monster;
self["@monsterToPlay"];
self["@cellToTarget"]=target;
return self["@cellToTarget"];
};
}, function($ctx3) {$ctx3.fillBlock({target:target},$ctx1)})}));
return _st(monster)._currentMove_((0));
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"calculBestMove",{score:score,bestScore:bestScore},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "calculBestMove\x0a\x09\x22Calcul the best move for the AI player. see class comment for details\x22 \x0a\x0a\x09| score bestScore |\x0a\x09bestScore := 9999 negated.\x0a\x09self team do: [ :monster |\x0a\x09\x09monster currentMove: monster move.\x0a\x09\x09monster attackableNeighbours do: [ :target |\x0a\x09\x09\x09score := (monster attackPotentialFor: target monster) - target monster defensePotential. \x0a\x09\x09\x09score > bestScore ifTrue: [ \x0a\x09\x09\x09\x09bestScore := score.\x0a\x09\x09\x09\x09monsterToPlay := monster.\x0a\x09\x09\x09\x09cellToTarget := target ] ].\x0a\x09\x09monster currentMove: 0. ]",
messageSends: ["negated", "do:", "currentMove:", "move", "-", "defensePotential", "monster", "attackPotentialFor:", "ifTrue:", ">", "attackableNeighbours", "team"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'game logic',
fn: function (monster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(monster)._isInactive();
if(! smalltalk.assert($1)){
_st(self)._announce_(_st($CWNextTurnEvent())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{monster:monster},smalltalk.CWAggressWeakestAI)})},
args: ["monster"],
source: "checkForNextTurn: monster\x0a\x09\x22After the monster has played, either the game has automatically triggered the next turn event (and then set the current monster to inactive state), or the AI player needs to do it manually\x22\x0a\x0a\x09monster isInactive \x0a\x09\x09ifFalse: [ self announce: CWNextTurnEvent new ]",
messageSends: ["ifFalse:", "announce:", "new", "isInactive"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeAttack",
category: 'game logic',
fn: function (){
var self=this;
var relatedTargetCell,duration;
return smalltalk.withContext(function($ctx1) { 
relatedTargetCell=_st(self["@monsterToPlay"])._cellToMoveBeforeAttack_context_(self["@cellToTarget"],_st(self)._gameContext());
duration=_st(_st(_st(_st(self["@monsterToPlay"])._pathTo_(relatedTargetCell))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(_st(duration).__plus((2000))).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeAttack",{relatedTargetCell:relatedTargetCell,duration:duration},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeAttack\x0a\x09| relatedTargetCell duration |\x0a\x09relatedTargetCell := monsterToPlay cellToMoveBeforeAttack: cellToTarget context: self gameContext.\x0a\x09duration := (monsterToPlay pathTo: relatedTargetCell) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + 2000 + self time.",
messageSends: ["cellToMoveBeforeAttack:context:", "gameContext", "*", "-", "size", "pathTo:", "mouseClick:", "valueWithTimeout:", "+", "time", "checkForNextTurn:"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeBestMove",
category: 'game logic',
fn: function (){
var self=this;
var duration,relatedTargetCell,hasAttack;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(self["@monsterToPlay"])._parent())._mouseClick_(_st(self)._gameContext());
$1=self["@cellToTarget"];
if(($receiver = $1) == nil || $receiver == undefined){
_st((1))._halt();
} else {
$1;
};
_st((function(){
return smalltalk.withContext(function($ctx2) {
$2=_st(self["@cellToTarget"])._hasMonster();
if(smalltalk.assert($2)){
return _st(self)._executeAttack();
} else {
return _st(self)._executeMove();
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"executeBestMove",{duration:duration,relatedTargetCell:relatedTargetCell,hasAttack:hasAttack},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeBestMove\x0a\x09\x22Assumes that the bestMove instance variable is now set to an Array(a Monster to play . aCell to move / attack). Executes this best move\x22\x0a\x0a\x09| duration relatedTargetCell hasAttack |\x0a\x09monsterToPlay parent mouseClick: self gameContext.\x0a\x09cellToTarget ifNil: [1halt].\x0a\x09[ \x0a\x09cellToTarget hasMonster \x0a\x09\x09\x09ifTrue: [ self executeAttack ]\x0a\x09\x09\x09ifFalse: [ self executeMove ].\x0a\x09] valueWithTimeout: self time.",
messageSends: ["mouseClick:", "gameContext", "parent", "ifNil:", "halt", "valueWithTimeout:", "time", "ifTrue:ifFalse:", "executeAttack", "executeMove", "hasMonster"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "executeMove",
category: 'game logic',
fn: function (){
var self=this;
var duration;
return smalltalk.withContext(function($ctx1) { 
duration=_st(_st(_st(_st(self["@monsterToPlay"])._pathTo_(self["@cellToTarget"]))._size()).__minus((1))).__star((300));
_st(self["@cellToTarget"])._mouseClick_(_st(self)._gameContext());
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._checkForNextTurn_(self["@monsterToPlay"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(duration).__plus(_st(self)._time()));
return self}, function($ctx1) {$ctx1.fill(self,"executeMove",{duration:duration},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "executeMove\x0a\x09| duration |\x0a\x09duration := (monsterToPlay pathTo: cellToTarget) size - 1 * 300.\x0a\x09cellToTarget mouseClick: self gameContext. \x0a\x09[ self checkForNextTurn: monsterToPlay ] valueWithTimeout: duration + self time.",
messageSends: ["*", "-", "size", "pathTo:", "mouseClick:", "gameContext", "valueWithTimeout:", "+", "time", "checkForNextTurn:"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "randomMove",
category: 'game logic',
fn: function (){
var self=this;
var cellsToGo;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
self["@monsterToPlay"]=_st(_st(self)._team())._atRandom();
_st(self["@monsterToPlay"])._currentMove_(_st(self["@monsterToPlay"])._move());
cellsToGo=_st(self["@monsterToPlay"])._movableNeighbours();
_st(self["@monsterToPlay"])._currentMove_((0));
_st(cellsToGo)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._checkForNextTurn_(self["@monsterToPlay"]);
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@cellToTarget"]=_st(cellsToGo)._atRandom();
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"randomMove",{cellsToGo:cellsToGo},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "randomMove\x0a\x09\x22Assumes that no monster can attack. Set bestMove to some random move of some random monster\x22\x0a\x09| cellsToGo |\x0a\x09monsterToPlay := self team atRandom.\x0a\x09\x0a\x09monsterToPlay currentMove: monsterToPlay move.\x0a\x09cellsToGo := monsterToPlay movableNeighbours.\x0a\x09monsterToPlay currentMove: 0.\x0a\x09\x0a\x09cellsToGo ifEmpty: [ ^ self checkForNextTurn: monsterToPlay ]. \x22Case where the monster cannot move (surrounded by allies)\x22\x0a\x09cellToTarget := cellsToGo atRandom.",
messageSends: ["atRandom", "team", "currentMove:", "move", "movableNeighbours", "ifEmpty:", "checkForNextTurn:"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "reinitialize",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monsterToPlay"]=nil;
self["@cellToTarget"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"reinitialize",{},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "reinitialize\x0a\x09monsterToPlay := nil.\x0a\x09cellToTarget := nil.",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "startTurn:",
category: 'game logic',
fn: function (map){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self)._team())._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
smalltalk.CWAI.fn.prototype._startTurn_.apply(_st(self), [map]);
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(self)._reinitialize();
_st(self)._calculBestMove();
$3=self["@monsterToPlay"];
if(($receiver = $3) == nil || $receiver == undefined){
_st(self)._randomMove();
} else {
$3;
};
return _st(self)._executeBestMove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_(_st(self)._time());
return self}, function($ctx1) {$ctx1.fill(self,"startTurn:",{map:map},smalltalk.CWAggressWeakestAI)})},
args: ["map"],
source: "startTurn: map\x0a\x09self team isEmpty ifTrue: [^ self].\x0a\x09super startTurn: map.\x0a\x09[\x0a\x09\x09self reinitialize.\x0a\x09\x09self calculBestMove.\x0a\x09\x09monsterToPlay ifNil: [ self randomMove ].\x0a\x09\x09self executeBestMove\x0a\x09] valueWithTimeout: self time",
messageSends: ["ifTrue:", "isEmpty", "team", "startTurn:", "valueWithTimeout:", "time", "reinitialize", "calculBestMove", "ifNil:", "randomMove", "executeBestMove"],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(500);
return $1;
}, function($ctx1) {$ctx1.fill(self,"time",{},smalltalk.CWAggressWeakestAI)})},
args: [],
source: "time\x0a\x09\x22time for user to see what AI is doing\x22\x0a\x09^ 500",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWAggressWeakestAI);



smalltalk.addClass('CWHuman', smalltalk.CWPlayer, [], 'Easnoth-GameAndPlayers');
smalltalk.addMethod(
smalltalk.method({
selector: "endGamePrintString",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "Human player";
}, function($ctx1) {$ctx1.fill(self,"endGamePrintString",{},smalltalk.CWHuman)})},
args: [],
source: "endGamePrintString\x0a\x09^ 'Human player'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHuman);

smalltalk.addMethod(
smalltalk.method({
selector: "eventDispatcher:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"eventDispatcher:",{anObject:anObject},smalltalk.CWHuman)})},
args: ["anObject"],
source: "eventDispatcher: anObject\x0a\x09\x22not used for humans\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHuman);



smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:",
category: '*Easnoth-GameAndPlayers',
fn: function (index,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 if((1 < index) || (index < self.length)) {return aBlock(self[index - 1])}; ;
return self}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:",{index:index,aBlock:aBlock},smalltalk.SequenceableCollection)})},
args: ["index", "aBlock"],
source: "at: index ifPresent: aBlock\x0a\x09< if((1 < index) || (index < self.length)) {return aBlock(self[index - 1])}; > ",
messageSends: [],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "at:ifPresent:ifAbsent:",
category: '*Easnoth-GameAndPlayers',
fn: function (index,aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(index).__lt_eq(_st(self)._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(index).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
$1=_st(aBlock)._value_(_st(self)._at_(index));
} else {
$1=_st(anotherBlock)._value();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"at:ifPresent:ifAbsent:",{index:index,aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.SequenceableCollection)})},
args: ["index", "aBlock", "anotherBlock"],
source: "at: index ifPresent: aBlock ifAbsent: anotherBlock\x0a\x0a\x09^(index <= self size and: [ index > 0 ])\x0a\x09\x09ifTrue: [ aBlock value: (self at: index) ]\x0a\x09\x09ifFalse: [ anotherBlock value ]",
messageSends: ["ifTrue:ifFalse:", "value:", "at:", "value", "and:", ">", "<=", "size"],
referencedClasses: []
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self.length = 0;;
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.Array)})},
args: [],
source: "reset\x0a\x09<self.length = 0;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "upFirstLetter",
category: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self)._first())._asUppercase()).__comma(_st(self)._allButFirst());
return $1;
}, function($ctx1) {$ctx1.fill(self,"upFirstLetter",{},smalltalk.String)})},
args: [],
source: "upFirstLetter\x0a\x09^ self first asUppercase, self allButFirst",
messageSends: [",", "allButFirst", "asUppercase", "first"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "remove:ifAbsent:",
category: '*Easnoth-GameAndPlayers',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anObject,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"remove:ifAbsent:",{anObject:anObject,aBlock:aBlock},smalltalk.Set)})},
args: ["anObject", "aBlock"],
source: "remove: anObject ifAbsent: aBlock\x0a\x09elements remove: anObject ifAbsent: aBlock",
messageSends: ["remove:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Set);

smalltalk.addMethod(
smalltalk.method({
selector: "truncated",
category: '*Easnoth-GameAndPlayers',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self | 0;
return self}, function($ctx1) {$ctx1.fill(self,"truncated",{},smalltalk.Number)})},
args: [],
source: "truncated\x0a\x09<return self | 0>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

