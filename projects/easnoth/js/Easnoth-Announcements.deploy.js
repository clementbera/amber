smalltalk.addPackage('Easnoth-Announcements');
smalltalk.addClass('CWEasnothAnnouncement', smalltalk.SystemAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWBootstrapEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWGameStart', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWObjectLoaded', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWWaitForObject', smalltalk.CWBootstrapEvent, [], 'Easnoth-Announcements');


smalltalk.addClass('CWEndGameEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWMapMoveEvent', smalltalk.CWEasnothAnnouncement, ['directionMethod'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "directionMethod",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@directionMethod"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"directionMethod",{},smalltalk.CWMapMoveEvent)})},
messageSends: []}),
smalltalk.CWMapMoveEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "directionMethod:",
fn: function (aMethod){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@directionMethod"]=aMethod;
return self}, function($ctx1) {$ctx1.fill(self,"directionMethod:",{aMethod:aMethod},smalltalk.CWMapMoveEvent)})},
messageSends: []}),
smalltalk.CWMapMoveEvent);



smalltalk.addClass('CWMenuUpdateEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWDicesRolledEvent', smalltalk.CWMenuUpdateEvent, ['dices', 'kills', 'callback'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "callback",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callback"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"callback",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "callback:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@callback"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"callback:",{aBlock:aBlock},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dices"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "dices:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@dices"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"dices:",{int:int},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@kills"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"kills",{},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "kills:",
fn: function (int){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@kills"]=int;
return self}, function($ctx1) {$ctx1.fill(self,"kills:",{int:int},smalltalk.CWDicesRolledEvent)})},
messageSends: []}),
smalltalk.CWDicesRolledEvent);



smalltalk.addClass('CWMonsterUpdateEvent', smalltalk.CWMenuUpdateEvent, ['monster'], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@monster"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{},smalltalk.CWMonsterUpdateEvent)})},
messageSends: []}),
smalltalk.CWMonsterUpdateEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@monster"]=aMonster;
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster},smalltalk.CWMonsterUpdateEvent)})},
messageSends: []}),
smalltalk.CWMonsterUpdateEvent);



smalltalk.addClass('CWNextTurnEvent', smalltalk.CWEasnothAnnouncement, [], 'Easnoth-Announcements');


smalltalk.addClass('CWEasnothAnnouncer', smalltalk.SystemAnnouncer, [], 'Easnoth-Announcements');
smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@subscriptions"])._reset();
_st(_st(self)._class())._reset();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWEasnothAnnouncer)})},
messageSends: ["reset", "class"]}),
smalltalk.CWEasnothAnnouncer);


smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@current"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWEasnothAnnouncer.klass)})},
messageSends: []}),
smalltalk.CWEasnothAnnouncer.klass);


