smalltalk.addPackage('Easnoth-StartMenu');
smalltalk.addClass('CWBootstrapper', smalltalk.Object, ['objectToLoad', 'objectLoaded'], 'Easnoth-StartMenu');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWBootstrapper)})},
messageSends: ["current"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (gameSettings){
var self=this;
function $CWGame(){return smalltalk.CWGame||(typeof CWGame=="undefined"?nil:CWGame)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($CWGame())._new())._initializeWithSettings_(gameSettings);
return self}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper)})},
messageSends: ["initializeWithSettings:", "new"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "checkIfReady",
fn: function (){
var self=this;
function $CWGameStart(){return smalltalk.CWGameStart||(typeof CWGameStart=="undefined"?nil:CWGameStart)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@objectToLoad"]).__eq(self["@objectLoaded"]);
if(smalltalk.assert($1)){
_st(_st(self)._announcer())._announce_(_st($CWGameStart())._new());
};
return self}, function($ctx1) {$ctx1.fill(self,"checkIfReady",{},smalltalk.CWBootstrapper)})},
messageSends: ["ifTrue:", "announce:", "new", "announcer", "="]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Array())._new();
_st($2)._add_("red");
_st($2)._add_("green");
_st($2)._add_("white");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{},smalltalk.CWBootstrapper)})},
messageSends: ["add:", "new", "yourself"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@objectToLoad"]=(0);
self["@objectLoaded"]=(0);
_st(self)._initializeEventHandling();
_st(self)._preloadImages();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWBootstrapper)})},
messageSends: ["initialize", "initializeEventHandling", "preloadImages"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWWaitForObject(){return smalltalk.CWWaitForObject||(typeof CWWaitForObject=="undefined"?nil:CWWaitForObject)}
function $CWObjectLoaded(){return smalltalk.CWObjectLoaded||(typeof CWObjectLoaded=="undefined"?nil:CWObjectLoaded)}
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
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWBootstrapper)})},
messageSends: ["on:do:", "+", "announcer", "checkIfReady"]}),
smalltalk.CWBootstrapper);

smalltalk.addMethod(
smalltalk.method({
selector: "preloadImages",
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
messageSends: ["do:", "newImageFrom:", "imagesToPreload"]}),
smalltalk.CWBootstrapper);


smalltalk.addMethod(
smalltalk.method({
selector: "bootstrap:",
fn: function (gameSettings){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._bootstrap_(gameSettings);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bootstrap:",{gameSettings:gameSettings},smalltalk.CWBootstrapper.klass)})},
messageSends: ["bootstrap:", "new"]}),
smalltalk.CWBootstrapper.klass);


smalltalk.addClass('CWGameSettings', smalltalk.Object, ['players', 'mapNumber'], 'Easnoth-StartMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "addPlayer:",
fn: function (aPlayer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@players"])._add_(aPlayer);
return self}, function($ctx1) {$ctx1.fill(self,"addPlayer:",{aPlayer:aPlayer},smalltalk.CWGameSettings)})},
messageSends: ["add:"]}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@players"]=_st($Array())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGameSettings)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mapNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mapNumber",{},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "mapNumber:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@mapNumber"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"mapNumber:",{int:int},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "players",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@players"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"players",{},smalltalk.CWGameSettings)})},
messageSends: []}),
smalltalk.CWGameSettings);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
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
messageSends: ["nextPutAll:", "printString", "do:", "printOn:"]}),
smalltalk.CWGameSettings);



smalltalk.addClass('CWStartMenu', smalltalk.Widget, ['box', 'gameSettings'], 'Easnoth-StartMenu');
smalltalk.addMethod(
smalltalk.method({
selector: "armySelectBox:on:",
fn: function (playerNumber,html){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
selectBox=_st(html)._select();
$1=selectBox;
_st($1)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(self["@gameSettings"])._players())._at_(playerNumber))._team_(_st(_st(selectBox)._asJQuery())._val());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._option())._with_("elves");
_st(_st(html)._option())._with_("human-kingdom");
_st(_st(html)._option())._with_("merfolks");
_st(_st(html)._option())._with_("dwarves");
return _st(_st(html)._option())._with_("human-outlaws");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"armySelectBox:on:",{playerNumber:playerNumber,html:html,selectBox:selectBox},smalltalk.CWStartMenu)})},
messageSends: ["select", "onChange:", "team:", "val", "asJQuery", "at:", "players", "with:", "option"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "choosePlayers",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self["@gameSettings"])._addPlayer_(_st(self)._defaultPlayer());
_st(self)._playerMenu();
return self}, function($ctx1) {$ctx1.fill(self,"choosePlayers",{},smalltalk.CWStartMenu)})},
messageSends: ["addPlayer:", "defaultPlayer", "playerMenu"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "credits",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$2;
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Easnoth : Battle Arena");
$1=_st(html)._ul();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._span())._with_("Core developer : ");
$3=_st(html)._a();
_st($3)._with_("Clément Béra");
$4=_st($3)._href_("http://clementbera.wordpress.com/");
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._span())._with_("Graphics : ");
$5=_st(html)._a();
_st($5)._with_("Battle for Wesnoth");
$6=_st($5)._href_("http://www.wesnoth.org/");
return $6;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_("Thanks to :");
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$7=_st(html)._a();
_st($7)._with_("Amber web framework");
$8=_st($7)._href_("http://amber-lang.net/");
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$9=_st(html)._a();
_st($9)._with_("Nicolas Petton (Amber core developer)");
$10=_st($9)._href_("www.nicolas-petton.fr/");
return $10;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$11=_st(html)._button();
_st($11)._with_("> back <");
$12=_st($11)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._choosePlayers();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $12;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"credits",{},smalltalk.CWStartMenu)})},
messageSends: ["contents:", "with:", "h1", "class:", "ul", "span", "a", "href:", "li", "button", "onClick:", "choosePlayers"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultPlayer",
fn: function (){
var self=this;
function $CWHuman(){return smalltalk.CWHuman||(typeof CWHuman=="undefined"?nil:CWHuman)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWHuman())._new())._team_("elves");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultPlayer",{},smalltalk.CWStartMenu)})},
messageSends: ["team:", "new"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $CWGameSettings(){return smalltalk.CWGameSettings||(typeof CWGameSettings=="undefined"?nil:CWGameSettings)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Widget.fn.prototype._initialize.apply(_st(self), []);
self["@gameSettings"]=_st($CWGameSettings())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWStartMenu)})},
messageSends: ["initialize", "new"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "menuOn:with:",
fn: function (html,dict){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$5,$6,$4,$7,$1;
$2=_st(html)._div();
_st($2)._class_("intro");
_st($2)._with_((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Easnoth : Battle Arena");
$3=_st(html)._ul();
_st($3)._class_("menu");
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
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$7=_st($2)._yourself();
$1=$7;
return $1;
}, function($ctx1) {$ctx1.fill(self,"menuOn:with:",{html:html,dict:dict},smalltalk.CWStartMenu)})},
messageSends: ["class:", "div", "with:", "h1", "ul", "keysAndValuesDo:", "href:", "a", "onClick:", "li", "yourself"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerMenu",
fn: function (){
var self=this;
var selectBox;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2;
_st(self["@box"])._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h1())._with_("Easnoth : Battle Arena");
$1=_st(html)._ul();
_st($1)._class_("menu");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._li())._with_("Humans or elves are recommended for AI");
_st((1))._to_do_((2),(function(n){
return smalltalk.withContext(function($ctx4) {
return _st(self)._playerSelection_on_(n,html);
}, function($ctx4) {$ctx4.fillBlock({n:n},$ctx1)})}));
return _st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx4) {
$3=_st(html)._button();
_st($3)._with_("start");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(self)._startBeta();
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $4;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"playerMenu",{selectBox:selectBox},smalltalk.CWStartMenu)})},
messageSends: ["contents:", "with:", "h1", "class:", "ul", "li", "to:do:", "playerSelection:on:", "button", "onClick:", "startBeta"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelectBox:on:",
fn: function (playerNumber,html){
var self=this;
var selectBox;
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$5,$6,$2;
selectBox=_st(html)._select();
$1=selectBox;
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
messageSends: ["select", "onChange:", "team", "at:", "players", "at:put:", "new", "val", "asJQuery", "current", "team:", "with:", "option", "value:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "playerSelection:on:",
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
messageSends: ["with:", ",", "li", "playerSelectBox:on:", "armySelectBox:on:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@box"]=_st(self)._menuOn_with_(html,_st(self)._startingMenuDict());
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWStartMenu)})},
messageSends: ["menuOn:with:", "startingMenuDict"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startBeta",
fn: function (){
var self=this;
function $CWBootstrapper(){return smalltalk.CWBootstrapper||(typeof CWBootstrapper=="undefined"?nil:CWBootstrapper)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@box"])._hidden();
_st(self["@gameSettings"])._mapNumber_((7));
_st($CWBootstrapper())._bootstrap_(self["@gameSettings"]);
return self}, function($ctx1) {$ctx1.fill(self,"startBeta",{},smalltalk.CWStartMenu)})},
messageSends: ["hidden", "mapNumber:", "bootstrap:"]}),
smalltalk.CWStartMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "startingMenuDict",
fn: function (){
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($Dictionary())._new();
_st($2)._at_put_("Tutorial",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Campaign",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Custom game",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._choosePlayers();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Network game",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Map Editor",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(window)._alert_("for future use, click on custom game");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st($2)._at_put_("Credits",(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self)._credits();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingMenuDict",{},smalltalk.CWStartMenu)})},
messageSends: ["at:put:", "alert:", "new", "choosePlayers", "credits", "yourself"]}),
smalltalk.CWStartMenu);


smalltalk.addMethod(
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._new())._appendToJQuery_(_st("body")._asJQuery());
return $1;
}, function($ctx1) {$ctx1.fill(self,"start",{},smalltalk.CWStartMenu.klass)})},
messageSends: ["appendToJQuery:", "asJQuery", "new"]}),
smalltalk.CWStartMenu.klass);

