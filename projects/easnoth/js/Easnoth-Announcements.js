smalltalk.addPackage('Easnoth-Announcements');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWBootstrapEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
smalltalk.CWBootstrapEvent.comment="All announcements that are related to the bootstrap of the game"


smalltalk.addClass('CWGameStart', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');
smalltalk.CWGameStart.comment="Triggered when all the objects (JSON, images) needed for the game are loaded to start the game."


smalltalk.addClass('CWObjectLoaded', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');
smalltalk.CWObjectLoaded.comment="Trggered when an object requested (JSON, image) is loaded."


smalltalk.addClass('CWWaitForObject', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');
smalltalk.CWWaitForObject.comment="Triggered when an asynchronous request is sent to get a JSON or an image"


smalltalk.addClass('CWEndGameEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWMapMoveEvent', smalltalk.CWEasnothAnnouncement, ['directionMethod'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "directionMethod",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@directionMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"directionMethod",{},smalltalk.CWMapMoveEvent)})},
args: [],
source: "directionMethod\x0a\x09^ directionMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapMoveEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "directionMethod:",
category: 'accessing',
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@directionMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"directionMethod:",{aMethod:aMethod},smalltalk.CWMapMoveEvent)})},
args: ["aMethod"],
source: "directionMethod: aMethod\x0a\x09directionMethod := aMethod",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapMoveEvent);



smalltalk.addClass('CWMenuUpdateEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
smalltalk.CWMenuUpdateEvent.comment="All announcements that are related to the menu that need to be updated."


smalltalk.addClass('CWDicesRolledEvent', smalltalk.CWMenuUpdateEvent, ['dices', 'kills', 'callback'], 'Easnoth-Announcements');
smalltalk.CWDicesRolledEvent.comment="Triggered when the dices are rolled during an attack to display them on the right menu"
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "callback\x0a\x09^ callback",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.CWDicesRolledEvent)})},
args: ["aBlock"],
source: "callback: aBlock\x0a\x09callback := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

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
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "dices\x0a\x09^ dices",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesRolledEvent)})},
args: ["int"],
source: "dices: int\x0a\x09dices := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesRolledEvent)})},
args: [],
source: "kills\x0a\x09^ kills",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
category: 'accessing',
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesRolledEvent)})},
args: ["int"],
source: "kills: int\x0a\x09kills := int",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWDicesRolledEvent);



smalltalk.addClass('CWMonsterUpdateEvent', smalltalk.CWMenuUpdateEvent, ['monster'], 'Easnoth-Announcements');
smalltalk.CWMonsterUpdateEvent.comment="Triggered when a monster is selected to update the right menu"
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
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterUpdateEvent)})},
args: [],
source: "monster\x0a\x09^ monster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterUpdateEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWMonsterUpdateEvent)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterUpdateEvent);



smalltalk.addClass('CWNextTurnEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');
smalltalk.CWNextTurnEvent.comment="Triggered to request the game to let the other player play."


smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._reset();
_st(_st(self)._class())._reset();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWEasnothAnnouncer)})},
args: [],
source: "reset\x0a\x09subscriptions reset.\x0a\x09self class reset",
messageSends: ["reset", "class"],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer);


smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWEasnothAnnouncer.klass)})},
args: [],
source: "reset\x0a\x09current := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEasnothAnnouncer.klass);


