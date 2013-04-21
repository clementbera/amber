smalltalk.addPackage('Easnoth-Game');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'padding', 'game'], 'Easnoth-Game');
smalltalk.CWEventDispatcher.comment="I dispatch event from eventManager canvas to cells. "
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventManager)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWEventDispatcher);

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
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "canvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:",
category: 'accessing',
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._rowAt_(i))._childAt_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},smalltalk.CWEventDispatcher)})},
args: ["i", "j"],
source: "cellAt: i y: j\x0a\x09^ (self rowAt: i) childAt: j",
messageSends: ["childAt:", "rowAt:"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:ifAbsent:",
category: 'accessing',
fn: function (i,j,aBlock){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._rowAt_(i))._childAt_(j);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($Error(),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:ifAbsent:",{i:i,j:j,aBlock:aBlock},smalltalk.CWEventDispatcher)})},
args: ["i", "j", "aBlock"],
source: "cellAt: i y: j ifAbsent: aBlock\x0a\x09\x22need to change the implementation\x22\x0a\x09^ [(self rowAt: i) childAt: j] on: Error do: [ aBlock value ]",
messageSends: ["on:do:", "value", "childAt:", "rowAt:"],
referencedClasses: ["Error"]
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
category: 'calculs',
fn: function (anEvent){
var self=this;
var x,y,cood;
return smalltalk.withContext(function($ctx1) { 
var $1;
x=_st(_st(anEvent)._pageX()).__minus(_st(_st(_st(self)._canvas())._element())._offsetLeft());
y=_st(_st(anEvent)._pageY()).__minus(_st(_st(_st(self)._canvas())._element())._offsetTop());
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$1=_st(self)._cellAt_y_ifAbsent_(_st(cood)._x(),_st(cood)._y(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},smalltalk.CWEventDispatcher)})},
args: ["anEvent"],
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a        x := anEvent pageX - self canvas element offsetLeft.\x0a        y := anEvent pageY - self canvas element offsetTop.\x0a\x0a        cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^ self cellAt: cood x y: cood y ifAbsent: [ nil ]",
messageSends: ["-", "offsetLeft", "element", "canvas", "pageX", "offsetTop", "pageY", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
category: 'events',
fn: function (event){
var self=this;
var cc;
return smalltalk.withContext(function($ctx1) { 
var $1;
cc=_st(self)._currentCell_(event);
$1=cc;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(cc)._mouseClick_(_st(self["@game"])._gameContext());
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event,cc:cc},smalltalk.CWEventDispatcher)})},
args: ["event"],
source: "dispatchMouseClick: event\x0a\x09| cc |\x0a\x09cc := self currentCell: event.\x0a\x09cc ifNotNil: [ \x0a\x09\x09cc mouseClick: game gameContext ].",
messageSends: ["currentCell:", "ifNotNil:", "mouseClick:", "gameContext"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "eventManagerLayerId\x0a\x09^ '#eventManager'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).",
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._canvas())._onMouseUp_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initializeEventHandling\x0a\x09self canvas onMouseUp: [:e | \x0a\x09\x09self dispatchMouseClick: e].",
messageSends: ["onMouseUp:", "dispatchMouseClick:", "canvas"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:game:",
category: 'initialize-release',
fn: function (aMap,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@game"]=aGame;
self["@map"]=aMap;
self["@padding"]=_st(_st(aMap)._drawer())._padding();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
args: ["aMap", "aGame"],
source: "initializeForMap: aMap game: aGame\x0a\x09game := aGame.\x0a\x09map := aMap.\x0a\x09padding := aMap drawer padding.\x0a\x09self initializeEventHandling.",
messageSends: ["padding", "drawer", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
category: 'calculs',
fn: function (x,y){
var self=this;
var xHex,yHex,array,mapDisplayX,mapDisplayY;
return smalltalk.withContext(function($ctx1) { 
var $1;
mapDisplayX=_st(self["@padding"])._x();
mapDisplayY=_st(self["@padding"])._y();
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,mapDisplayX,mapDisplayY);
xHex=_st(array)._at_((1));
yHex=_st(array)._at_((2));
$1=_st(xHex).__at(yHex);
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,xHex:xHex,yHex:yHex,array:array,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x0a\x09\x22algo is in javascript\x22\x0a\x0a\x09| xHex yHex array mapDisplayX mapDisplayY|\x0a                \x0a\x09mapDisplayX := padding x.\x0a\x09mapDisplayY := padding y.\x0a\x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY.\x0a    \x0a    xHex := array at: 1.\x0a    yHex := array at: 2.\x0a    \x0a\x09^xHex @ yHex.",
messageSends: ["x", "y", "mouseCoodToHexCoodX:y:mapX:mapY:", "at:", "@"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
category: 'calculs',
fn: function (x,y,mapDisplayX,mapDisplayY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
function mod(n, mod) {
			return ((mod+(n%mod))%mod);
		}

		var cosmaingridx = 0.882947593;
		var sinmaingridx = 0.469471563;
		var cosmaingridy = -0.130526192;
		var sinmaingridy = 0.991444861;
		
		var cosothergridx = 0.4539905;
		var sinothergridx = 0.891006524;
		var cosothergridy = -0.882947593;
		var sinothergridy = 0.469471563;
		
		var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));
		var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));
		
		var xConstante = 9 + (mod(nb,3));
		var yConstante = 20 + (mod(nb2,2));
		if (nb2%2 == 0) {yConstante += mod(nb+1,2);}
		
		xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));
		yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));
		
		if (mod(nb,6)==1 && nb2%2==0){
			xHex++;
			if (nb2%4==0 && mod(nb,12)!=7){yHex++;}
			if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}
		}
		
		if (nb%3==0) {		
			if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {
				var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));
				var nbCheck = 3+2*yHex+(xHex%2);
				if (nb3 == nbCheck) {yHex--;}
			}
			else {
				var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));
				var nbCheck = 7-Math.floor(3*xHex/2)+yHex;
				if (nb4 == nbCheck) {
					if (xHex%2 == 0) {yHex--;}
					xHex++;
				}
			}
		}
        var a = new Array(2);
        a[0] = xHex;
        a[1] = yHex;
        return a;
return self}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:mapX:mapY:",{x:x,y:y,mapDisplayX:mapDisplayX,mapDisplayY:mapDisplayY},smalltalk.CWEventDispatcher)})},
args: ["x", "y", "mapDisplayX", "mapDisplayY"],
source: "mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x0a\x09\x09var cosmaingridx = 0.882947593;\x0a\x09\x09var sinmaingridx = 0.469471563;\x0a\x09\x09var cosmaingridy = -0.130526192;\x0a\x09\x09var sinmaingridy = 0.991444861;\x0a\x09\x09\x0a\x09\x09var cosothergridx = 0.4539905;\x0a\x09\x09var sinothergridx = 0.891006524;\x0a\x09\x09var cosothergridy = -0.882947593;\x0a\x09\x09var sinothergridy = 0.469471563;\x0a\x09\x09\x0a\x09\x09var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09var xConstante = 9 + (mod(nb,3));\x0a\x09\x09var yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09var nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09var nbCheck = 7-Math.floor(3*xHex/2)+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a        var a = new Array(2);\x0a        a[0] = xHex;\x0a        a[1] = yHex;\x0a        return a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@map"])._childAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},smalltalk.CWEventDispatcher)})},
args: ["index"],
source: "rowAt: index\x0a\x09^ map childAt: index",
messageSends: ["childAt:"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWGame', smalltalk.Object, ['map', 'context', 'playerPool'], 'Easnoth-Game');
smalltalk.CWGame.comment="Represent the game. Includes the god game logic (turn system)"
smalltalk.addMethod(
smalltalk.method({
selector: "activateMonsters",
category: 'game logic',
fn: function (){
var self=this;
var armyPlaying,monster1;
return smalltalk.withContext(function($ctx1) { 
var $1;
armyPlaying=_st(self["@map"])._monstersFromSide_(_st(_st(self)._gameContext())._currentPlayerSide());
$1=_st(_st(armyPlaying)._size()).__eq((0));
if(smalltalk.assert($1)){
_st(window)._alert_(_st("Someone just won. Guess who ? loser : ").__comma(_st(_st(self)._gameContext())._currentPlayer()));
} else {
_st(self)._pickMonster();
};
return self}, function($ctx1) {$ctx1.fill(self,"activateMonsters",{armyPlaying:armyPlaying,monster1:monster1},smalltalk.CWGame)})},
args: [],
source: "activateMonsters\x0a\x09| armyPlaying monster1 |\x0a\x09armyPlaying := map monstersFromSide: self gameContext currentPlayerSide.\x0a\x09(armyPlaying size = 0) \x0a\x09\x09ifTrue: [ window alert: 'Someone just won. Guess who ? loser : ' , self gameContext currentPlayer ] \x0a\x09\x09ifFalse: [ self pickMonster ]",
messageSends: ["monstersFromSide:", "currentPlayerSide", "gameContext", "ifTrue:ifFalse:", "alert:", ",", "currentPlayer", "pickMonster", "=", "size"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'event',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._announce_(event);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{event:event},smalltalk.CWGameBoard)})},
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWGameBoard)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
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
_st(_st(self)._gameContext())._nextTurn_(_st(self["@playerPool"])._at_((1)));
_st(self)._activateMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{},smalltalk.CWGame)})},
args: [],
source: "firstTurn\x0a\x09self gameContext nextTurn: (playerPool at: 1).\x0a\x09self activateMonsters.",
messageSends: ["nextTurn:", "at:", "gameContext", "activateMonsters"],
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
function $CWFightMenu(){return smalltalk.CWFightMenu||(typeof CWFightMenu=="undefined"?nil:CWFightMenu)}
function $CWGameContext(){return smalltalk.CWGameContext||(typeof CWGameContext=="undefined"?nil:CWGameContext)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st($CWFightMenu())._new();
self["@context"]=_st($CWGameContext())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWGame)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09CWFightMenu new.\x0a\x09context := CWGameContext new.",
messageSends: ["initialize", "new"],
referencedClasses: ["CWFightMenu", "CWGameContext"]
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
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWGameStart\x0a\x09\x09do: [ self startGame ].\x0a\x09self announcer\x0a\x09\x09on: CWNextTurnEvent\x0a\x09\x09do: [ self nextTurn ]",
messageSends: ["on:do:", "startGame", "announcer", "nextTurn"],
referencedClasses: ["CWGameStart", "CWNextTurnEvent"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializePlayerSides",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@playerPool"])._withIndexDo_((function(player,i){
return smalltalk.withContext(function($ctx2) {
return _st(player)._side_(_st(_st(i).__minus((1.5))).__star((2)));
}, function($ctx2) {$ctx2.fillBlock({player:player,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializePlayerSides",{},smalltalk.CWGame)})},
args: [],
source: "initializePlayerSides\x0a\x09playerPool withIndexDo: [ :player :i |\x0a\x09\x09player side: i - 1.5 * 2 ].",
messageSends: ["withIndexDo:", "side:", "*", "-"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSettings:",
category: 'initialize-release',
fn: function (gameSettings){
var self=this;
function $CWMap(){return smalltalk.CWMap||(typeof CWMap=="undefined"?nil:CWMap)}
return smalltalk.withContext(function($ctx1) { 
self["@map"]=_st($CWMap())._newWithMapIndex_(_st(gameSettings)._mapNumber());
self["@playerPool"]=_st(gameSettings)._players();
_st(self)._initializePlayerSides();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSettings:",{gameSettings:gameSettings},smalltalk.CWGame)})},
args: ["gameSettings"],
source: "initializeWithSettings: gameSettings\x0a\x09map := CWMap newWithMapIndex: gameSettings mapNumber.\x0a\x09playerPool := gameSettings players.\x0a\x09self initializePlayerSides.\x0a\x09self initializeEventHandling.",
messageSends: ["newWithMapIndex:", "mapNumber", "players", "initializePlayerSides", "initializeEventHandling"],
referencedClasses: ["CWMap"]
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "nextPlayer",
category: 'game logic',
fn: function (){
var self=this;
var currentPlayer,index;
return smalltalk.withContext(function($ctx1) { 
var $1;
currentPlayer=_st(_st(self)._gameContext())._currentPlayer();
index=_st(self["@playerPool"])._indexOf_(currentPlayer);
$1=_st(self["@playerPool"])._at_ifAbsent_(_st(index).__plus((1)),(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@playerPool"])._at_((1));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextPlayer",{currentPlayer:currentPlayer,index:index},smalltalk.CWGame)})},
args: [],
source: "nextPlayer\x0a\x09| currentPlayer index |\x0a\x09currentPlayer := self gameContext currentPlayer. \x0a\x09index := playerPool indexOf: currentPlayer.\x0a\x09^ playerPool at: index + 1 ifAbsent: [ playerPool at: 1 ]",
messageSends: ["currentPlayer", "gameContext", "indexOf:", "at:ifAbsent:", "+", "at:"],
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
_st(self["@map"])._desactivateMonsters();
_st(self["@map"])._removeSelection();
_st(_st(self)._gameContext())._nextTurn_(_st(self)._nextPlayer());
_st(self)._activateMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{},smalltalk.CWGame)})},
args: [],
source: "nextTurn\x0a\x09map desactivateMonsters.\x0a\x09map removeSelection.\x0a\x09self gameContext nextTurn: self nextPlayer.\x0a\x09self activateMonsters.",
messageSends: ["desactivateMonsters", "removeSelection", "nextTurn:", "nextPlayer", "gameContext", "activateMonsters"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "pickMonster",
category: 'game logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@map"])._readyToPickMonsters_(_st(_st(self)._gameContext())._currentPlayerSide());
_st(self["@map"])._showActiveMonsters();
_st(self["@map"])._updateGOTs();
return self}, function($ctx1) {$ctx1.fill(self,"pickMonster",{},smalltalk.CWGame)})},
args: [],
source: "pickMonster\x0a\x09map readyToPickMonsters: self gameContext currentPlayerSide.\x0a\x09map showActiveMonsters.\x0a\x09map updateGOTs.",
messageSends: ["readyToPickMonsters:", "currentPlayerSide", "gameContext", "showActiveMonsters", "updateGOTs"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "removeLoadingBar",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(".loading")._asJQuery())._animate_duration_(smalltalk.HashedCollection._fromPairs_([_st("top").__minus_gt("-60%")]),(2500));
return self}, function($ctx1) {$ctx1.fill(self,"removeLoadingBar",{},smalltalk.CWGame)})},
args: [],
source: "removeLoadingBar\x0a\x09'.loading' asJQuery animate: #{ 'top' -> '-60%'} duration: 2500.",
messageSends: ["animate:duration:", "->", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWGame);

smalltalk.addMethod(
smalltalk.method({
selector: "startGame",
category: 'game logic',
fn: function (){
var self=this;
function $CWEventDispatcher(){return smalltalk.CWEventDispatcher||(typeof CWEventDispatcher=="undefined"?nil:CWEventDispatcher)}
return smalltalk.withContext(function($ctx1) { 
_st(self)._removeLoadingBar();
_st(self["@map"])._initializeDrawer();
_st(_st($CWEventDispatcher())._new())._initializeForMap_game_(self["@map"],self);
_st(self["@map"])._updateMap();
_st(self)._firstTurn();
return self}, function($ctx1) {$ctx1.fill(self,"startGame",{},smalltalk.CWGame)})},
args: [],
source: "startGame\x0a\x09self removeLoadingBar.\x0a\x09map initializeDrawer.\x0a\x09CWEventDispatcher new initializeForMap: map game: self.\x0a\x09map updateMap.\x0a\x09self firstTurn.",
messageSends: ["removeLoadingBar", "initializeDrawer", "initializeForMap:game:", "new", "updateMap", "firstTurn"],
referencedClasses: ["CWEventDispatcher"]
}),
smalltalk.CWGame);



smalltalk.addClass('CWGameContext', smalltalk.Object, ['currentPlayer', 'currentCell'], 'Easnoth-Game');
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



smalltalk.addClass('CWPlayer', smalltalk.Object, ['side', 'team'], 'Easnoth-Game');
smalltalk.CWPlayer.comment="I represent a player playing Easnoth."
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
selector: "startTurn",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"startTurn",{},smalltalk.CWPlayer)})},
args: [],
source: "startTurn",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWPlayer);



smalltalk.addClass('CWAI', smalltalk.CWPlayer, [], 'Easnoth-Game');


smalltalk.addClass('CWAggressWeakestAI', smalltalk.CWAI, [], 'Easnoth-Game');


smalltalk.addClass('CWHuman', smalltalk.CWPlayer, [], 'Easnoth-Game');


