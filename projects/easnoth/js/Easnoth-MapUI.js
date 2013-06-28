smalltalk.addPackage('Easnoth-MapUI');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'drawer', 'game', 'suspended', 'currentCell'], 'Easnoth-MapUI');
smalltalk.CWEventDispatcher.comment="I dispatch event from eventManager canvas to cells. \x0a\x0aThis class is a huge hack that is why it has so many instance variables ..."
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventDispatcher)})},
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
var $1,$2;
$1=_st(_st(_st(jQuery)._at_("browser"))._at_("mozilla"))._notNil();
if(smalltalk.assert($1)){
x=_st(_st(_st(anEvent)._clientX()).__minus(_st(_st(anEvent)._target())._offsetLeft())).__minus(_st(_st(_st(anEvent)._target())._offsetParent())._offsetLeft());
x;
y=_st(_st(_st(anEvent)._clientY()).__minus(_st(_st(anEvent)._target())._offsetTop())).__minus(_st(_st(_st(anEvent)._target())._offsetParent())._offsetTop());
y;
} else {
x=_st(anEvent)._offsetX();
x;
y=_st(anEvent)._offsetY();
y;
};
cood=_st(self)._mouseCoodToHexCoodX_y_(x,y);
$2=_st(self)._cellAt_y_ifAbsent_(_st(cood)._x(),_st(cood)._y(),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentCell:",{anEvent:anEvent,x:x,y:y,cood:cood},smalltalk.CWEventDispatcher)})},
args: ["anEvent"],
source: "currentCell: anEvent\x0a\x09|x y cood|\x0a\x09\x0a\x09((jQuery at: #browser) at: #mozilla) notNil\x0a\x09\x09ifTrue: [\x0a\x09\x09\x09x := anEvent clientX - anEvent target offsetLeft - anEvent target offsetParent offsetLeft.\x0a\x09\x09\x09y := anEvent clientY - anEvent target offsetTop - anEvent target offsetParent offsetTop ]\x0a\x09\x09ifFalse: [\x0a\x09\x09\x09x := anEvent offsetX.\x0a\x09\x09\x09y := anEvent offsetY ].\x0a\x09\x09\x0a     cood := self mouseCoodToHexCoodX: x y: y.\x0a\x09\x0a\x09\x22if out of map then nil\x22\x0a\x09^ self cellAt: cood x y: cood y ifAbsent: [ nil ]",
messageSends: ["ifTrue:ifFalse:", "-", "offsetLeft", "offsetParent", "target", "clientX", "offsetTop", "clientY", "offsetX", "offsetY", "notNil", "at:", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
category: 'events',
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@suspended"];
if(! smalltalk.assert($1)){
$2=self["@currentCell"];
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self["@currentCell"])._mouseClick_(_st(self["@game"])._gameContext());
};
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseClick:",{event:event},smalltalk.CWEventDispatcher)})},
args: ["event"],
source: "dispatchMouseClick: event\x0a\x09suspended ifFalse: [\x0a\x09\x09currentCell ifNotNil: [ \x0a\x09\x09\x09currentCell mouseClick: game gameContext ] ]",
messageSends: ["ifFalse:", "ifNotNil:", "mouseClick:", "gameContext"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseMove:",
category: 'events',
fn: function (event){
var self=this;
var lastCell;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@suspended"];
if(! smalltalk.assert($1)){
lastCell=self["@currentCell"];
lastCell;
self["@currentCell"]=_st(self)._currentCell_(event);
self["@currentCell"];
$2=_st(lastCell).__eq_eq(self["@currentCell"]);
if(! smalltalk.assert($2)){
$3=self["@currentCell"];
if(($receiver = $3) == nil || $receiver == undefined){
$3;
} else {
_st(_st(self["@game"])._gameContext())._relatedCell_(lastCell);
_st(self["@currentCell"])._mouseMove_(_st(self["@game"])._gameContext());
};
};
};
return self}, function($ctx1) {$ctx1.fill(self,"dispatchMouseMove:",{event:event,lastCell:lastCell},smalltalk.CWEventDispatcher)})},
args: ["event"],
source: "dispatchMouseMove: event\x0a\x09| lastCell |\x0a\x09suspended ifFalse: [\x0a\x09\x09lastCell := currentCell.\x0a\x09\x09currentCell := self currentCell: event.\x0a\x09\x09lastCell == currentCell ifFalse: [\x0a\x09\x09\x09currentCell ifNotNil: [ \x0a\x09\x09\x09\x09game gameContext relatedCell: lastCell.\x0a\x09\x09\x09\x09currentCell mouseMove: game gameContext ] ] ]",
messageSends: ["ifFalse:", "currentCell:", "ifNotNil:", "relatedCell:", "gameContext", "mouseMove:", "=="],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "endGame",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@canvas"])._asJQuery())._css_put_("z-index",(990));
self["@map"]=nil;
_st(_st(_st(_st(self)._canvas())._element())._asJQuery())._off_("mousemove");
_st(_st(_st(_st(self)._canvas())._element())._asJQuery())._off_("click");
self["@drawer"]=nil;
self["@game"]=nil;
self["@currentCell"]=nil;
self["@canvas"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"endGame",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "endGame\x0a\x09\x22reinitialize eventHandling for new game\x22\x0a\x09canvas asJQuery css: 'z-index' put: 990.\x0a\x09map := nil.\x0a\x09self canvas element asJQuery off: 'mousemove'.\x0a\x09self canvas element asJQuery off: 'click'.\x0a\x09drawer := nil.\x0a\x09game := nil.\x0a\x09currentCell := nil.\x0a\x09canvas := nil",
messageSends: ["css:put:", "asJQuery", "off:", "element", "canvas"],
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
self["@suspended"]=false;
self["@canvas"]=_st($TagBrush())._fromJQuery_canvas_(_st(_st(self)._eventManagerLayerId())._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
_st(_st(self["@canvas"])._asJQuery())._css_put_("z-index",(998));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09suspended := false.\x0a\x09canvas := (TagBrush fromJQuery: self eventManagerLayerId asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)).\x0a\x09canvas asJQuery css: 'z-index' put: 998.",
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:", "css:put:"],
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
_st(_st(self)._canvas())._onClick_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseClick_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(_st(self)._canvas())._onMouseMove_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self)._dispatchMouseMove_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "initializeEventHandling\x0a\x09self canvas onClick: [:e | \x0a\x09\x09self dispatchMouseClick: e].\x0a\x09self canvas onMouseMove: [:e | \x0a\x09\x09self dispatchMouseMove: e].",
messageSends: ["onClick:", "dispatchMouseClick:", "canvas", "onMouseMove:", "dispatchMouseMove:"],
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
self["@drawer"]=_st(aMap)._drawer();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
args: ["aMap", "aGame"],
source: "initializeForMap: aMap game: aGame\x0a\x09game := aGame.\x0a\x09map := aMap.\x0a\x09drawer := aMap drawer.\x0a\x09self initializeEventHandling.",
messageSends: ["drawer", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
category: 'calculs',
fn: function (x,y){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
var $1;
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,_st(_st(self)._padding())._x(),_st(_st(self)._padding())._y());
$1=_st(_st(array)._at_((1))).__at(_st(array)._at_((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,array:array},smalltalk.CWEventDispatcher)})},
args: ["x", "y"],
source: "mouseCoodToHexCoodX: x y: y\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x09\x22algo is in javascript as Nicolas Petton refused to inline arthmetics\x22\x0a\x0a\x09| array |\x0a                \x0a\x09array:= self mouseCoodToHexCoodX: x y: y mapX: self padding x mapY: self padding y.\x0a    \x0a\x09^ (array at: 1) @ (array at: 2).",
messageSends: ["mouseCoodToHexCoodX:y:mapX:mapY:", "x", "padding", "y", "@", "at:"],
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
				var nbCheck = 7-(Math.floor(3*xHex/2))+yHex;
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
source: "mouseCoodToHexCoodX: x y: y mapX: mapDisplayX mapY: mapDisplayY\x0a\x09\x22function that take mouse cood in pixel and return the coods of the tile selected\x22\x0a\x0a\x09\x09<function mod(n, mod) {\x0a\x09\x09\x09return ((mod+(n%mod))%mod);\x0a\x09\x09}\x0a\x0a\x09\x09var cosmaingridx = 0.882947593;\x0a\x09\x09var sinmaingridx = 0.469471563;\x0a\x09\x09var cosmaingridy = -0.130526192;\x0a\x09\x09var sinmaingridy = 0.991444861;\x0a\x09\x09\x0a\x09\x09var cosothergridx = 0.4539905;\x0a\x09\x09var sinothergridx = 0.891006524;\x0a\x09\x09var cosothergridy = -0.882947593;\x0a\x09\x09var sinothergridy = 0.469471563;\x0a\x09\x09\x0a\x09\x09var nb = Math.floor(((y-(cosmaingridx/sinmaingridx)*x-(mapDisplayY+0)+(cosmaingridx/sinmaingridx)*(mapDisplayX+320))/(55*cosmaingridx)));\x0a\x09\x09var nb2 = Math.floor(((y-(cosmaingridy/sinmaingridy)*x-(mapDisplayY+480)+(cosmaingridy/sinmaingridy)*(mapDisplayX+206))/(173.2*cosmaingridy)));\x0a\x09\x09\x0a\x09\x09var xConstante = 9 + (mod(nb,3));\x0a\x09\x09var yConstante = 20 + (mod(nb2,2));\x0a\x09\x09if (nb2%2 == 0) {yConstante += mod(nb+1,2);}\x0a\x09\x09\x0a\x09\x09xHex = Math.floor(((xConstante-nb)/6)+((yConstante-nb2)/2));\x0a\x09\x09yHex = Math.floor(((nb-xConstante)/4)+((yConstante-nb2)/4));\x0a\x09\x09\x0a\x09\x09if (mod(nb,6)==1 && nb2%2==0){\x0a\x09\x09\x09xHex++;\x0a\x09\x09\x09if (nb2%4==0 && mod(nb,12)!=7){yHex++;}\x0a\x09\x09\x09if (mod(nb2,4)==2 && mod(nb,12)==7){yHex++;}\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09if (nb%3==0) {\x09\x09\x0a\x09\x09\x09if ((nb2%2==0 && nb%6==0) || (mod(nb2,2)==1 && mod(nb,6)==3)) {\x0a\x09\x09\x09\x09var nb3 = Math.floor(((y-(cosothergridx/sinothergridx)*x-(mapDisplayY+0)+(cosothergridx/sinothergridx)*(mapDisplayX+301))/(68*cosothergridx)));\x0a\x09\x09\x09\x09var nbCheck = 3+2*yHex+(xHex%2);\x0a\x09\x09\x09\x09if (nb3 == nbCheck) {yHex--;}\x0a\x09\x09\x09}\x0a\x09\x09\x09else {\x0a\x09\x09\x09\x09var nb4 = Math.floor(((y-(cosothergridy/sinothergridy)*x-(mapDisplayY+480)+(cosothergridy/sinothergridy)*(mapDisplayX+212.5))/(95.75*cosothergridy)));\x0a\x09\x09\x09\x09var nbCheck = 7-(Math.floor(3*xHex/2))+yHex;\x0a\x09\x09\x09\x09if (nb4 == nbCheck) {\x0a\x09\x09\x09\x09\x09if (xHex%2 == 0) {yHex--;}\x0a\x09\x09\x09\x09\x09xHex++;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a        var a = new Array(2);\x0a        a[0] = xHex;\x0a        a[1] = yHex;\x0a        return a>",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@drawer"])._padding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "padding\x0a\x09^ drawer padding",
messageSends: ["padding"],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
category: 'suspending',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "resume\x0a\x09suspended := false",
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

smalltalk.addMethod(
smalltalk.method({
selector: "suspend",
category: 'suspending',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"suspend",{},smalltalk.CWEventDispatcher)})},
args: [],
source: "suspend\x0a\x09suspended := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWLayer', smalltalk.Widget, [], 'Easnoth-MapUI');
smalltalk.CWLayer.comment="I represent a layer in the map where yu can draw things."
smalltalk.addMethod(
smalltalk.method({
selector: "down:",
category: 'not yet classified',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"down:",{incr:incr},smalltalk.CWLayer)})},
args: ["incr"],
source: "down: incr",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'not yet classified',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"left:",{incr:incr},smalltalk.CWLayer)})},
args: ["incr"],
source: "left: incr",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'not yet classified',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"right:",{incr:incr},smalltalk.CWLayer)})},
args: ["incr"],
source: "right: incr\x0a\x09",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "up:",
category: 'not yet classified',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"up:",{incr:incr},smalltalk.CWLayer)})},
args: ["incr"],
source: "up: incr",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWLayer);



smalltalk.addClass('CWArrayLayer', smalltalk.CWLayer, ['array'], 'Easnoth-MapUI');
smalltalk.CWArrayLayer.comment="I represent a layer that is implemented as a 2 dimentianal array of images, canvas or anything.\x0a\x0aThis is faster than the canvas one (40% faster), but cannot permit isometric transformation or stuff like that. On the other hand it permits to have JQuery animation."
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWImageLayer)})},
args: [],
source: "clean\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "down:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._vertical_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"down:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "down: incr\x0a\x09self vertical: incr",
messageSends: ["vertical:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontal:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_way_(incr,"left");
return self}, function($ctx1) {$ctx1.fill(self,"horizontal:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "horizontal: incr\x0a\x09self move: incr way: 'left'",
messageSends: ["move:way:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWImageLayer)})},
args: [],
source: "id\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWArrayLayer)})},
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWArrayLayer)})},
args: [],
source: "leafHeight\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWArrayLayer)})},
args: [],
source: "leafWidth\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._horizontal_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "left: incr\x0a\x09self horizontal: incr",
messageSends: ["horizontal:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "move:way:",
category: 'map move',
fn: function (incr,way){
var self=this;
var t,px;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@array"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=each;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
t=_st(_st(each)._asJQuery())._css_(way);
t;
px=_st(_st(t)._tokenize_("px"))._first();
px;
return _st(_st(each)._asJQuery())._css_value_(way,_st(_st(_st(_st(px)._asNumber()).__plus(incr))._asString()).__comma("px"));
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"move:way:",{incr:incr,way:way,t:t,px:px},smalltalk.CWArrayLayer)})},
args: ["incr", "way"],
source: "move: incr way: way\x0a\x09| t px |\x0a\x09array do: [ :each |\x0a\x09\x09each ifNotNil: [\x0a\x09\x09t := each asJQuery css: way. \x0a\x09\x09px := (t tokenize: 'px') first.\x0a\x09\x09each asJQuery css: way value: (px asNumber + incr) asString , 'px' ] ]",
messageSends: ["do:", "ifNotNil:", "css:", "asJQuery", "first", "tokenize:", "css:value:", ",", "asString", "+", "asNumber"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
category: 'factory',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWArrayLayer)})},
args: ["html"],
source: "newLeaf: html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:point:",
category: 'factory',
fn: function (html,point){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._newLeaf_(html);
_st($2)._width_(_st(self)._leafWidth());
_st($2)._height_(_st(self)._leafHeight());
$3=_st($2)._style_(_st(_st(_st(_st("position: absolute; top: ").__comma(_st(_st(point)._y()).__plus(_st(self)._yShift()))).__comma("px; left: ")).__comma(_st(_st(point)._x()).__plus(_st(self)._xShift()))).__comma("px;"));
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLeaf:point:",{html:html,point:point},smalltalk.CWArrayLayer)})},
args: ["html", "point"],
source: "newLeaf: html point: point\x0a\x09\x09^ (self newLeaf: html)\x0a\x09\x09\x09\x09width: self leafWidth;\x0a\x09\x09\x09\x09height: self leafHeight;\x0a\x09\x09\x09\x09style: 'position: absolute; top: ', (point y + self yShift), 'px; left: ', (point x + self xShift), 'px;'.",
messageSends: ["width:", "leafWidth", "newLeaf:", "height:", "leafHeight", "style:", ",", "+", "xShift", "x", "yShift", "y"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWArrayLayer)})},
args: ["html"],
source: "renderOn: html\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._horizontal_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"right:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "right: incr\x0a\x09self horizontal: incr",
messageSends: ["horizontal:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "up:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._vertical_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"up:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "up: incr\x0a\x09self vertical: incr",
messageSends: ["vertical:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "vertical:",
category: 'map move',
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_way_(incr,"top");
return self}, function($ctx1) {$ctx1.fill(self,"vertical:",{incr:incr},smalltalk.CWArrayLayer)})},
args: ["incr"],
source: "vertical: incr\x0a\x09self move: incr way: 'top'",
messageSends: ["move:way:"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWImageLayer)})},
args: [],
source: "xShift\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWImageLayer)})},
args: [],
source: "yShift\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWArrayLayer);



smalltalk.addClass('CWGOTLayer', smalltalk.CWArrayLayer, ['invis'], 'Easnoth-MapUI');
smalltalk.CWGOTLayer.comment="This layer is specific to GOTs"
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._attr_put_("src",_st(self["@invis"])._src());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWGOTLayer)})},
args: [],
source: "clean\x0a\x09array do: [:each |\x0a\x09    each asJQuery attr: 'src' put: invis src ]",
messageSends: ["do:", "attr:put:", "src", "asJQuery"],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#got";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWGOTLayer)})},
args: [],
source: "id\x0a\x09^ '#got'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWGameOverTile(){return smalltalk.CWGameOverTile||(typeof CWGameOverTile=="undefined"?nil:CWGameOverTile)}
function $CWTwoDimArray(){return smalltalk.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@invis"]=_st(_st($CWGameOverTile())._imageArray())._at_(_st($CWGameOverTile())._invisIndex());
self["@array"]=_st($CWTwoDimArray())._new_(_st(_st(_st(aMap)._children())._size()).__at(_st(_st(_st(aMap)._childAt_((1)))._children())._size()));
_st(self)._renderOn_map_(_st($HTMLCanvas())._onJQuery_(_st(_st(self)._id())._asJQuery()),aMap);
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWGOTLayer)})},
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09invis := CWGameOverTile imageArray at: CWGameOverTile invisIndex.\x0a\x09array := CWTwoDimArray new: aMap children size @ (aMap childAt: 1) children size.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self id asJQuery) map: aMap",
messageSends: ["at:", "invisIndex", "imageArray", "new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"],
referencedClasses: ["CWGameOverTile", "CWTwoDimArray", "HTMLCanvas"]
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(84);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWGOTLayer)})},
args: [],
source: "leafHeight\x0a\x09^ 84",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(126);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWGOTLayer)})},
args: [],
source: "leafWidth\x0a\x09^ 126",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
category: 'initialize-release',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(html)._img();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWGOTLayer)})},
args: ["html"],
source: "newLeaf: html \x0a\x09^ html img",
messageSends: ["img"],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:map:",
category: 'rendering',
fn: function (html,map){
var self=this;
var tempImage;
return smalltalk.withContext(function($ctx1) { 
_st(_st(map)._children())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
return _st(_st(row)._children())._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
tempImage=_st(self)._newLeaf_point_(html,_st(cell)._firstCoods());
tempImage;
_st(_st(cell)._gameOverTile())._htmlImage_(tempImage);
return _st(self["@array"])._i_j_put_(i,j,tempImage);
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:map:",{html:html,map:map,tempImage:tempImage},smalltalk.CWGOTLayer)})},
args: ["html", "map"],
source: "renderOn: html map: map\x0a\x09| tempImage |\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09tempImage := self newLeaf: html point: cell firstCoods.\x0a\x09\x09\x09cell gameOverTile htmlImage: tempImage.\x0a\x09\x09\x09array i: i j: j put: tempImage ] ].",
messageSends: ["withIndexDo:", "newLeaf:point:", "firstCoods", "htmlImage:", "gameOverTile", "i:j:put:", "children"],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((14))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWGOTLayer)})},
args: [],
source: "xShift\x0a\x09^ 14 negated",
messageSends: ["negated"],
referencedClasses: []
}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((9))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWGOTLayer)})},
args: [],
source: "yShift\x0a\x09^ 9 negated",
messageSends: ["negated"],
referencedClasses: []
}),
smalltalk.CWGOTLayer);



smalltalk.addClass('CWMonsterLayer', smalltalk.CWArrayLayer, [], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@array"])._do_((function(each){
var elem;
return smalltalk.withContext(function($ctx2) {
$1=each;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
elem=_st(each)._element();
elem;
return _st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
};
}, function($ctx2) {$ctx2.fillBlock({each:each,elem:elem},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "clean\x0a\x09\x09array do: [:each | | elem |\x0a\x09\x09\x09each ifNotNil: [\x0a\x09\x09\x09\x09elem := each element.\x0a\x09\x09\x09\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height ]. ]",
messageSends: ["do:", "ifNotNil:", "element", "clearRect:y:width:height:", "width", "height", "getContext:"],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#monster";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "id\x0a\x09^ '#monster'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
function $CWTwoDimArray(){return smalltalk.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@array"]=_st($CWTwoDimArray())._new_(_st(_st(_st(aMap)._children())._size()).__at(_st(_st(_st(aMap)._childAt_((1)))._children())._size()));
_st(self)._renderOn_map_(_st($HTMLCanvas())._onJQuery_(_st(_st(self)._id())._asJQuery()),aMap);
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMonsterLayer)})},
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09array := CWTwoDimArray new: aMap children size @ (aMap childAt: 1) children size.\x0a\x09self renderOn: (HTMLCanvas onJQuery: self id asJQuery) map: aMap",
messageSends: ["new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"],
referencedClasses: ["CWTwoDimArray", "HTMLCanvas"]
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(150);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "leafHeight\x0a\x09^ 150",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(150);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "leafWidth\x0a\x09^ 150",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
category: 'factory',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(html)._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWMonsterLayer)})},
args: ["html"],
source: "newLeaf: html\x0a\x09^ html canvas",
messageSends: ["canvas"],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:map:",
category: 'rendering',
fn: function (html,map){
var self=this;
var tempCanvas;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(map)._children())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
return _st(_st(row)._children())._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
$1=_st(cell)._monster();
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
var m;
m=$receiver;
tempCanvas=_st(self)._newLeaf_point_(html,_st(cell)._firstCoods());
tempCanvas;
_st(m)._canvas_(tempCanvas);
_st(_st(tempCanvas)._asJQuery())._css_put_("z-index",_st(cell)._zIndex());
return _st(self["@array"])._i_j_put_(i,j,tempCanvas);
};
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:map:",{html:html,map:map,tempCanvas:tempCanvas},smalltalk.CWMonsterLayer)})},
args: ["html", "map"],
source: "renderOn: html map: map\x0a\x09| tempCanvas |\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09cell monster ifNotNil: [ :m | \x0a\x09\x09\x09\x09tempCanvas := self newLeaf: html point: cell firstCoods.\x0a\x09\x09\x09\x09m canvas: tempCanvas.\x0a\x09\x09\x09\x09tempCanvas asJQuery css: 'z-index' put: cell zIndex.\x0a\x09\x09\x09\x09array i: i j: j put: tempCanvas ] ] ].",
messageSends: ["withIndexDo:", "ifNotNil:", "newLeaf:point:", "firstCoods", "canvas:", "css:put:", "zIndex", "asJQuery", "i:j:put:", "monster", "children"],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((4))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "xShift\x0a\x09^ 4 negated",
messageSends: ["negated"],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((50))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWMonsterLayer)})},
args: [],
source: "yShift\x0a\x09^ 50 negated",
messageSends: ["negated"],
referencedClasses: []
}),
smalltalk.CWMonsterLayer);



smalltalk.addClass('CWCanvasLayer', smalltalk.CWLayer, ['canvas'], 'Easnoth-MapUI');
smalltalk.CWCanvasLayer.comment="I represent a layer which is implement as a unique canvas. Used for background."
smalltalk.addMethod(
smalltalk.method({
selector: "canvasForId:",
category: 'factory',
fn: function (id){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TagBrush())._fromJQuery_canvas_(_st(id)._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasForId:",{id:id},smalltalk.CWCanvasLayer)})},
args: ["id"],
source: "canvasForId: id\x0a\x09\x22Answers amber canvas from a html id\x22\x0a\x0a\x09^ TagBrush fromJQuery: id asJQuery canvas: (HTMLCanvas onJQuery: 'body' asJQuery)",
messageSends: ["fromJQuery:canvas:", "asJQuery", "onJQuery:"],
referencedClasses: ["HTMLCanvas", "TagBrush"]
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'rendering',
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(self["@canvas"])._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"clean",{elem:elem},smalltalk.CWCanvasLayer)})},
args: [],
source: "clean\x0a\x09| elem |\x0a\x09elem := canvas element.\x0a\x09(elem getContext: '2d') clearRect: 0 y: 0 width: elem width height: elem height.",
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

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
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.CWCanvasLayer)})},
args: [],
source: "context\x0a\x09^ canvas element getContext: '2d'",
messageSends: ["getContext:", "element"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:",
category: 'rendering',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_cood_(object,_st((0)).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},smalltalk.CWCanvasLayer)})},
args: ["object"],
source: "display: object\x0a\x09self display: object cood: 0@0",
messageSends: ["display:cood:", "@"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:cood:",
category: 'rendering',
fn: function (object,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(object)._image(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"display:cood:",{object:object,aPoint:aPoint},smalltalk.CWCanvasLayer)})},
args: ["object", "aPoint"],
source: "display: object cood: aPoint\x0a\x09self context\x0a\x09\x09drawImage: object image\x0a\x09\x09x: aPoint x\x0a\x09\x09y: aPoint y.",
messageSends: ["drawImage:x:y:", "image", "x", "y", "context"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawImage:x:y:",
category: 'rendering',
fn: function (img,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(img,x,y);
return self}, function($ctx1) {$ctx1.fill(self,"drawImage:x:y:",{img:img,x:x,y:y},smalltalk.CWCanvasLayer)})},
args: ["img", "x", "y"],
source: "drawImage: img x: x y: y\x0a\x09self context drawImage: img x: x y: y",
messageSends: ["drawImage:x:y:", "context"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:point:",
category: 'rendering',
fn: function (object,point){
var self=this;
function $Number(){return smalltalk.Number||(typeof Number=="undefined"?nil:Number)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(self)._safeDraw_((function(context){
return smalltalk.withContext(function($ctx2) {
$1=context;
_st($1)._translate_y_(_st(_st(point)._x()).__plus((45)),_st(_st(point)._y()).__minus((7)));
_st($1)._scale_y_((1),(0.5));
_st($1)._rotate_(_st(_st($Number())._pi()).__slash((4)));
$2=_st($1)._scale_y_((1.4),(1.33));
$2;
return _st(self)._display_(object);
}, function($ctx2) {$ctx2.fillBlock({context:context},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawIsometric:point:",{object:object,point:point},smalltalk.CWCanvasLayer)})},
args: ["object", "point"],
source: "drawIsometric: object point: point\x0a\x0a\x09self safeDraw: [ :context |\x0a\x09\x09context \x0a\x09\x09\x09translate: point x + 45 y: point y - 7;\x0a\x09\x09\x09scale: 1 y: 0.5;\x0a\x09\x09\x09rotate: Number pi / 4 ;\x0a\x09\x09\x09scale: 1.4 y: 1.33.\x0a\x09self display: object ]",
messageSends: ["safeDraw:", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:"],
referencedClasses: ["Number"]
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithId:",
category: 'initialize-release',
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st(self)._canvasForId_(id);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithId:",{id:id},smalltalk.CWCanvasLayer)})},
args: ["id"],
source: "initializeWithId: id\x0a\x09canvas := self canvasForId: id",
messageSends: ["canvasForId:"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:point:xPad:yPad:",
category: 'rendering',
fn: function (monster,point,aX,aY){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(self)._context();
_st($1)._translate_y_(_st(_st(point)._x()).__plus(aX),(0));
$2=_st($1)._scale_y_((-1),(1));
$2;
return _st(self)._display_cood_(monster,_st((0)).__at(_st(_st(point)._y()).__minus(aY)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(self)._context();
_st($3)._scale_y_((-1),(1));
$4=_st($3)._translate_y_(_st(_st(_st(point)._x()).__plus(aX))._negated(),(0));
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"reverseDisplay:point:xPad:yPad:",{monster:monster,point:point,aX:aX,aY:aY},smalltalk.CWCanvasLayer)})},
args: ["monster", "point", "aX", "aY"],
source: "reverseDisplay: monster point: point xPad: aX yPad: aY\x0a\x0a\x09[self context\x0a\x09\x09\x09translate: point x + aX y: 0;\x0a\x09\x09\x09scale: -1 y: 1.\x0a\x09self display: monster cood: 0@(point y - aY) ]\x0a\x09ensure: [\x22faster than save and restore\x22\x0a\x09self context\x0a\x09\x09scale: -1 y: 1;\x0a\x09\x09translate: (point x + aX) negated y: 0]",
messageSends: ["ensure:", "scale:y:", "context", "translate:y:", "negated", "+", "x", "display:cood:", "@", "-", "y"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "safeDraw:",
category: 'rendering',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
_st(_st(self)._context())._save();
return _st(aBlock)._value_(_st(self)._context());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self)._context())._restore();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"safeDraw:",{aBlock:aBlock},smalltalk.CWCanvasLayer)})},
args: ["aBlock"],
source: "safeDraw: aBlock\x0a\x09\x22ensure that the drawing context will be restored\x22\x0a\x0a\x09[ self context save.\x0a\x09aBlock value: self context ]\x0a\x09\x09ensure: [ self context restore ]",
messageSends: ["ensure:", "restore", "context", "save", "value:"],
referencedClasses: []
}),
smalltalk.CWCanvasLayer);



smalltalk.addClass('CWMapDrawer', smalltalk.CWVisitor, ['executionContext', 'layers', 'padding', 'map', 'menus'], 'Easnoth-MapUI');
smalltalk.CWMapDrawer.comment="I am a drawer that can draw the business objects through a visit of its tree.\x0aI am an implementation of the interpreter design pattern so I have a context of execution as instance variable."
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWMapDrawer)})},
args: [],
source: "announcer\x0a\x09^ CWEasnothAnnouncer current",
messageSends: ["current"],
referencedClasses: ["CWEasnothAnnouncer"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backTileImage",
category: 'accessing',
fn: function (){
var self=this;
function $CWBackground(){return smalltalk.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWBackground())._imageCacheAt_("back");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backTileImage",{},smalltalk.CWMapDrawer)})},
args: [],
source: "backTileImage\x0a\x09^ CWBackground imageCacheAt: 'back'",
messageSends: ["imageCacheAt:"],
referencedClasses: ["CWBackground"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvasId",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#background";
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvasId",{},smalltalk.CWMapDrawer)})},
args: [],
source: "backgroundCanvasId\x0a\x09\x22id of the background canvas for the css\x22\x0a\x0a\x09^ '#background'",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundLayer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundLayer",{},smalltalk.CWMapDrawer)})},
args: [],
source: "backgroundLayer\x0a\x09^ layers at: 1",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasLayerForId:",
category: 'factory',
fn: function (id){
var self=this;
function $CWCanvasLayer(){return smalltalk.CWCanvasLayer||(typeof CWCanvasLayer=="undefined"?nil:CWCanvasLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWCanvasLayer())._new())._initializeWithId_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasLayerForId:",{id:id},smalltalk.CWMapDrawer)})},
args: ["id"],
source: "canvasLayerForId: id\x0a\x09\x22Answers a CWLayer from a html id\x22\x0a\x0a\x09^ CWCanvasLayer new initializeWithId: id",
messageSends: ["initializeWithId:", "new"],
referencedClasses: ["CWCanvasLayer"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.CWMapDrawer)})},
args: [],
source: "canvasPadding\x0a\x09\x22padding between the border of the web page and the map (left and top)\x22\x0a\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clean();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMapDrawer)})},
args: [],
source: "clean\x0a\x09layers do: [ :each | each clean ].",
messageSends: ["do:", "clean"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._executionContext())._currentPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWMapDrawer)})},
args: [],
source: "currentPoint\x0a\x09^ self executionContext currentPoint",
messageSends: ["currentPoint", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "down",
category: 'map move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st((0)).__at(_st(self)._moveIncrement()));
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._down_(_st(self)._moveIncrement());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"down",{},smalltalk.CWMapDrawer)})},
args: [],
source: "down\x0a\x09padding := padding + (0 @ self moveIncrement).\x0a\x09layers do: [ :each |\x0a\x09\x09each down: self moveIncrement ].\x0a\x09self updateMap",
messageSends: ["+", "@", "moveIncrement", "do:", "down:", "updateMap"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackTile",
category: 'rendering',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawImage_x_y_(_st(self)._backTileImage(),_st(_st(_st(self)._currentPoint())._x()).__minus((4)),_st(_st(_st(self)._currentPoint())._y()).__plus((20)));
return self}, function($ctx1) {$ctx1.fill(self,"drawBackTile",{},smalltalk.CWMapDrawer)})},
args: [],
source: "drawBackTile\x0a\x09self backgroundLayer drawImage: self backTileImage x: self currentPoint x - 4 y: self currentPoint y + 20",
messageSends: ["drawImage:x:y:", "backTileImage", "-", "x", "currentPoint", "+", "y", "backgroundLayer"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackground:",
category: 'rendering',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawIsometric_point_(object,_st(self)._currentPoint());
return self}, function($ctx1) {$ctx1.fill(self,"drawBackground:",{object:object},smalltalk.CWMapDrawer)})},
args: ["object"],
source: "drawBackground: object\x0a\x09self backgroundLayer drawIsometric: object point: self currentPoint",
messageSends: ["drawIsometric:point:", "currentPoint", "backgroundLayer"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "executionContext",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@executionContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"executionContext",{},smalltalk.CWMapDrawer)})},
args: [],
source: "executionContext\x0a\x09^ executionContext",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initializeCanvasLayers();
_st(self)._padding_(_st(_st(self)._canvasPadding()).__at((0)));
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMapDrawer)})},
args: [],
source: "initialize\x0a\x09super initialize. \x0a\x09self initializeCanvasLayers.\x0a\x09self padding: (self canvasPadding @ 0).\x0a\x09self initializeEventHandling.",
messageSends: ["initialize", "initializeCanvasLayers", "padding:", "@", "canvasPadding", "initializeEventHandling"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCanvasLayers",
category: 'initialize-release',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($Array())._new_((3));
_st($1)._at_put_((1),_st(self)._canvasLayerForId_(_st(self)._backgroundCanvasId()));
$2=_st($1)._yourself();
self["@layers"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"initializeCanvasLayers",{},smalltalk.CWMapDrawer)})},
args: [],
source: "initializeCanvasLayers\x0a\x09layers := (Array new: 3)\x0a\x09\x09at: 1 put: (self canvasLayerForId: self backgroundCanvasId);\x0a\x09\x09yourself.\x0a\x09\x09",
messageSends: ["at:put:", "canvasLayerForId:", "backgroundCanvasId", "new:", "yourself"],
referencedClasses: ["Array"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
category: 'initialize-release',
fn: function (){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWMapMoveEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._perform_(_st(event)._directionMethod());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWMapDrawer)})},
args: [],
source: "initializeEventHandling\x0a\x09self announcer\x0a\x09\x09on: CWMapMoveEvent\x0a\x09\x09do: [ :event | self perform: event directionMethod ]",
messageSends: ["on:do:", "perform:", "directionMethod", "announcer"],
referencedClasses: ["CWMapMoveEvent"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
category: 'initialize-release',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(self["@map"])._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._initializeImageLayers();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "initializeForMap: aMap\x0a\x09map := aMap.\x0a\x09self padding x: self canvasPadding + ((map children at: 1) children size * self tileUnit * 1.17).\x0a\x09self initializeImageLayers.",
messageSends: ["x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding", "initializeImageLayers"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeImageLayers",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._setUpFirstCoods();
_st(self["@layers"])._at_put_((2),_st(self)._newGOTLayer());
_st(self["@layers"])._at_put_((3),_st(self)._newMonsterLayer());
return self}, function($ctx1) {$ctx1.fill(self,"initializeImageLayers",{},smalltalk.CWMapDrawer)})},
args: [],
source: "initializeImageLayers\x0a\x09self setUpFirstCoods.\x0a\x09layers at: 2 put: self newGOTLayer.\x0a\x09layers at: 3 put: self newMonsterLayer.",
messageSends: ["setUpFirstCoods", "at:put:", "newGOTLayer", "newMonsterLayer"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
category: 'map move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st(_st(_st(self)._moveIncrement())._negated()).__at((0)));
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._left_(_st(_st(self)._moveIncrement())._negated());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"left",{},smalltalk.CWMapDrawer)})},
args: [],
source: "left\x0a\x09padding := padding + (self moveIncrement negated @ 0).\x0a\x09layers do: [ :each |\x0a\x09\x09each left: self moveIncrement negated ].\x0a\x09self updateMap",
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "left:", "updateMap"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "moveIncrement",
category: 'map move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveIncrement",{},smalltalk.CWMapDrawer)})},
args: [],
source: "moveIncrement\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOTLayer",
category: 'factory',
fn: function (){
var self=this;
function $CWGOTLayer(){return smalltalk.CWGOTLayer||(typeof CWGOTLayer=="undefined"?nil:CWGOTLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGOTLayer())._new())._initializeForMap_(self["@map"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOTLayer",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newGOTLayer\x0a\x09^ CWGOTLayer new initializeForMap: map",
messageSends: ["initializeForMap:", "new"],
referencedClasses: ["CWGOTLayer"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGlobalDrawingContext",
category: 'factory',
fn: function (){
var self=this;
function $CWGlobalDrawingContext(){return smalltalk.CWGlobalDrawingContext||(typeof CWGlobalDrawingContext=="undefined"?nil:CWGlobalDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGlobalDrawingContext())._new())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGlobalDrawingContext",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newGlobalDrawingContext\x0a\x09^ CWGlobalDrawingContext new reset: self",
messageSends: ["reset:", "new"],
referencedClasses: ["CWGlobalDrawingContext"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonsterLayer",
category: 'factory',
fn: function (){
var self=this;
function $CWMonsterLayer(){return smalltalk.CWMonsterLayer||(typeof CWMonsterLayer=="undefined"?nil:CWMonsterLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonsterLayer())._new())._initializeForMap_(self["@map"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonsterLayer",{},smalltalk.CWMapDrawer)})},
args: [],
source: "newMonsterLayer\x0a\x09^ CWMonsterLayer new initializeForMap: map",
messageSends: ["initializeForMap:", "new"],
referencedClasses: ["CWMonsterLayer"]
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@padding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWMapDrawer)})},
args: [],
source: "padding\x0a\x09^ padding",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding:",
category: 'accessing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"padding:",{aPoint:aPoint},smalltalk.CWMapDrawer)})},
args: ["aPoint"],
source: "padding: aPoint\x0a\x09padding := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
category: 'map move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st(_st(self)._moveIncrement()).__at((0)));
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._right_(_st(self)._moveIncrement());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"right",{},smalltalk.CWMapDrawer)})},
args: [],
source: "right\x0a\x09padding := padding + (self moveIncrement @ 0).\x0a\x09layers do: [ :each |\x0a\x09\x09each right: self moveIncrement ].\x0a\x09self updateMap",
messageSends: ["+", "@", "moveIncrement", "do:", "right:", "updateMap"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpFirstCoods",
category: 'initialize-release',
fn: function (){
var self=this;
var tempContext,tempCoods,rowSize;
return smalltalk.withContext(function($ctx1) { 
rowSize=_st(_st(self["@map"])._children())._size();
tempContext=_st(self)._newGlobalDrawingContext();
_st(_st(self["@map"])._children())._withIndexDo_((function(row,i){
return smalltalk.withContext(function($ctx2) {
_st(tempContext)._nextRow();
return _st(_st(row)._children())._withIndexDo_((function(cell,j){
return smalltalk.withContext(function($ctx3) {
_st(tempContext)._nextCell();
_st(cell)._firstCoods_(_st(tempContext)._currentPoint());
return _st(cell)._zIndex_(_st(_st((100)).__plus(j)).__plus(_st(i).__star(rowSize)));
}, function($ctx3) {$ctx3.fillBlock({cell:cell,j:j},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({row:row,i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUpFirstCoods",{tempContext:tempContext,tempCoods:tempCoods,rowSize:rowSize},smalltalk.CWMapDrawer)})},
args: [],
source: "setUpFirstCoods\x0a\x09\x22initialize the coods in the web pages of the cells and their z-index\x22\x0a\x0a\x09| tempContext tempCoods rowSize |\x0a\x09rowSize := map children size.\x0a\x09tempContext := self newGlobalDrawingContext.\x0a\x09map children withIndexDo: [ :row :i |\x0a\x09\x09tempContext nextRow.\x0a\x09\x09row children withIndexDo: [ :cell :j |\x0a\x09\x09\x09tempContext nextCell.\x0a\x09\x09\x09cell firstCoods: tempContext currentPoint.\x0a\x09\x09\x09cell zIndex: 100 + j + (i * rowSize) ] ].",
messageSends: ["size", "children", "newGlobalDrawingContext", "withIndexDo:", "nextRow", "nextCell", "firstCoods:", "currentPoint", "zIndex:", "+", "*"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
category: 'constant',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.CWMapDrawer)})},
args: [],
source: "tileUnit\x0a\x09\x22scale of the images\x22\x0a\x0a\x09^ 50",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "up",
category: 'map move',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=_st(self["@padding"]).__plus(_st((0)).__at(_st(_st(self)._moveIncrement())._negated()));
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._up_(_st(_st(self)._moveIncrement())._negated());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._updateMap();
return self}, function($ctx1) {$ctx1.fill(self,"up",{},smalltalk.CWMapDrawer)})},
args: [],
source: "up\x0a\x09padding := padding + (0 @ self moveIncrement negated).\x0a\x09layers do: [ :each |\x0a\x09\x09each up: self moveIncrement negated ].\x0a\x09self updateMap",
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "up:", "updateMap"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._clean();
self["@executionContext"]=_st(self)._newGlobalDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMapDrawer)})},
args: [],
source: "updateMap\x0a\x09self backgroundLayer clean.\x0a\x09executionContext := self newGlobalDrawingContext.\x0a\x09self visitTree: map.",
messageSends: ["clean", "backgroundLayer", "newGlobalDrawingContext", "visitTree:"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
category: 'visiting',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextCell();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWMapDrawer)})},
args: ["aCell"],
source: "visitCell: aCell\x0a\x09self executionContext nextCell.",
messageSends: ["nextCell", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
category: 'visiting',
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWMapDrawer)})},
args: ["got"],
source: "visitGameOverTile: got\x0a\x09\x22do nothing anymore\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
category: 'visiting',
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWMapDrawer)})},
args: ["heros"],
source: "visitHeros: heros\x0a\x09\x22do nothing anymore\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
category: 'visiting',
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
args: ["aMap"],
source: "visitMap: aMap\x0a\x09\x22nothing to do here\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitOverTile_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMapDrawer)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09self executionContext visitOverTile: ot",
messageSends: ["visitOverTile:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
category: 'visiting',
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextRow();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWMapDrawer)})},
args: ["aRow"],
source: "visitRow: aRow\x0a\x09self executionContext nextRow.",
messageSends: ["nextRow", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTile_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMapDrawer)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09self executionContext visitTile: aTile",
messageSends: ["visitTile:", "executionContext"],
referencedClasses: []
}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
category: 'visiting',
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWMapDrawer)})},
args: ["aUnit"],
source: "visitUnit: aUnit\x0a\x09\x22do nothing anymore\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapDrawer);



smalltalk.addClass('CWMapInterpreterContext', smalltalk.Object, ['rowIndex', 'cellIndex'], 'Easnoth-MapUI');
smalltalk.CWMapInterpreterContext.comment="general context just to know the coods in the map of cells"
smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
category: 'context alteration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cellIndex"]=_st(self["@cellIndex"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWMapInterpreterContext)})},
args: [],
source: "nextCell\x0a\x09cellIndex := cellIndex + 1.",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextRow",
category: 'context alteration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=_st(self["@rowIndex"]).__plus((1));
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"nextRow",{},smalltalk.CWMapInterpreterContext)})},
args: [],
source: "nextRow\x0a\x09rowIndex := rowIndex + 1.\x0a\x09cellIndex := 0",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=(0);
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWMapInterpreterContext)})},
args: [],
source: "reset\x0a\x09rowIndex := 0.\x0a\x09cellIndex := 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMapInterpreterContext);



smalltalk.addClass('CWGlobalDrawingContext', smalltalk.CWMapInterpreterContext, ['currentPointCache', 'drawer'], 'Easnoth-MapUI');
smalltalk.CWGlobalDrawingContext.comment="I represent the execution context of the CWMapDrawer.\x0aWith this context, the CWMap drawer will redraw the whole map."
smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods",
category: 'calculs',
fn: function (){
var self=this;
var xpos,ypos,temp,sin45,sin15,sin135,sin75,padding,tileUnit;
return smalltalk.withContext(function($ctx1) { 
var $1;
padding=_st(self["@drawer"])._padding();
tileUnit=_st(self["@drawer"])._tileUnit();
sin45=(0.707106781);
sin15=(0.258819045);
sin135=(0.233445364);
sin75=(0.965925826);
temp=_st(_st(_st(self["@cellIndex"]).__plus(_st(_st(self["@rowIndex"]).__plus((1))).__slash((2)))).__or((0))).__star(_st(sin15).__plus(sin75));
xpos=_st(_st(_st(_st(self["@rowIndex"]).__star(_st(sin45).__plus(sin75))).__minus(temp)).__star(tileUnit)).__plus(_st(padding)._x());
ypos=_st(_st(_st(_st(temp).__slash((2))).__plus(_st(self["@rowIndex"]).__star(sin135))).__star(tileUnit)).__plus(_st(padding)._y());
$1=_st(_st(xpos).__or((0))).__at(_st(ypos).__or((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"calculCanvasCoods",{xpos:xpos,ypos:ypos,temp:temp,sin45:sin45,sin15:sin15,sin135:sin135,sin75:sin75,padding:padding,tileUnit:tileUnit},smalltalk.CWGlobalDrawingContext)})},
args: [],
source: "calculCanvasCoods\x0a\x09\x22Takes the coods of the cell in the map and answers the absolute coods of the cell image in the web page\x22\x0a\x0a\x09| xpos ypos temp sin45 sin15 sin135 sin75 padding tileUnit |\x0a\x09\x0a\x09padding := drawer padding.\x0a\x09tileUnit := drawer tileUnit.\x0a\x09\x0a\x09sin45 := 0.707106781. \x22Pi/4\x22\x0a\x09sin15 := 0.258819045. \x22Pi/12\x22\x0a\x09sin135 := 0.233445364. \x22???->I used Approximation\x22\x0a\x09sin75 := 0.965925826. \x225*Pi/12\x22\x0a\x0a\x09temp := ((cellIndex + ((rowIndex + 1)/2)) | 0) * (sin15 + sin75).\x0a\x09xpos := (rowIndex * (sin45 + sin75) - (temp)) * tileUnit + padding x.\x0a\x09ypos := (temp / 2 + (rowIndex * sin135)) * tileUnit + padding y.\x0a\x09\x0a\x09^ xpos | 0 @ (ypos | 0)",
messageSends: ["padding", "tileUnit", "*", "+", "|", "/", "x", "-", "y", "@"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@currentPointCache"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@currentPointCache"]=_st(self)._calculCanvasCoods();
$1=self["@currentPointCache"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWGlobalDrawingContext)})},
args: [],
source: "currentPoint\x0a\x09^ currentPointCache ifNil: [ currentPointCache := self calculCanvasCoods ]",
messageSends: ["ifNil:", "calculCanvasCoods"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
category: 'context alteration',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreterContext.fn.prototype._nextCell.apply(_st(self), []);
self["@currentPointCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWGlobalDrawingContext)})},
args: [],
source: "nextCell\x0a\x09super nextCell.\x0a\x09currentPointCache := nil.\x0a\x09",
messageSends: ["nextCell"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset:",
category: 'initialize-release',
fn: function (aDrawer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreterContext.fn.prototype._reset.apply(_st(self), []);
self["@currentPointCache"]=nil;
self["@drawer"]=aDrawer;
return self}, function($ctx1) {$ctx1.fill(self,"reset:",{aDrawer:aDrawer},smalltalk.CWGlobalDrawingContext)})},
args: ["aDrawer"],
source: "reset: aDrawer\x0a\x09super reset.\x0a\x09currentPointCache := nil.\x0a\x09drawer := aDrawer",
messageSends: ["reset"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
category: 'visiting',
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackground_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWGlobalDrawingContext)})},
args: ["ot"],
source: "visitOverTile: ot\x0a\x09drawer drawBackground: ot",
messageSends: ["drawBackground:"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
category: 'visiting',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackTile();
_st(self["@drawer"])._drawBackground_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWGlobalDrawingContext)})},
args: ["aTile"],
source: "visitTile: aTile\x0a\x09drawer drawBackTile.\x0a\x09drawer drawBackground: aTile",
messageSends: ["drawBackTile", "drawBackground:"],
referencedClasses: []
}),
smalltalk.CWGlobalDrawingContext);



smalltalk.addClass('CWTwoDimArray', smalltalk.Object, ['array'], 'Easnoth-MapUI');
smalltalk.CWTwoDimArray.comment="I am an Array with two dimension.\x0a\x0aI can be created through new: aPoint, aPoint being my x and y dimensions.\x0a\x0aBasic API :\x0ai:j: -> Answers element at (i,j)\x0ai:j:put: -> Put element at (i,j) "
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_((function(subArray){
return smalltalk.withContext(function($ctx2) {
return _st(subArray)._do_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(aBlock)._value_(each);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({subArray:subArray},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09array do: [ :subArray |\x0a\x09\x09subArray do: [ :each |\x0a\x09\x09\x09aBlock value: each ] ] ",
messageSends: ["do:", "value:"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:",
category: 'accessing',
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:",{i:i,j:j},smalltalk.CWTwoDimArray)})},
args: ["i", "j"],
source: "i: i j: j\x0a\x09^ (array at: i) at: j",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:put:",
category: 'accessing',
fn: function (i,j,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_put_(j,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:put:",{i:i,j:j,value:value},smalltalk.CWTwoDimArray)})},
args: ["i", "j", "value"],
source: "i: i j: j put: value\x0a\x09^ (array at: i) at: j put: value",
messageSends: ["at:put:", "at:"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSize:",
category: 'initialize - release',
fn: function (aPoint){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@array"]=_st($Array())._new_(_st(aPoint)._x());
_st((1))._to_do_(_st(aPoint)._x(),(function(index){
return smalltalk.withContext(function($ctx2) {
return _st(self["@array"])._at_put_(index,_st($Array())._new_(_st(aPoint)._y()));
}, function($ctx2) {$ctx2.fillBlock({index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSize:",{aPoint:aPoint},smalltalk.CWTwoDimArray)})},
args: ["aPoint"],
source: "initializeWithSize: aPoint\x0a\x09array := Array new: aPoint x.\x0a\x091 to: aPoint x do: [ :index |\x0a\x09\x09array at: index put: (Array new: aPoint y) ]",
messageSends: ["new:", "x", "to:do:", "at:put:", "y"],
referencedClasses: ["Array"]
}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rowsDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"rowsDo:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
args: ["aBlock"],
source: "rowsDo: aBlock\x0a\x09array do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rowsWithIndexDo:",
category: 'enumerating',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._withIndexDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"rowsWithIndexDo:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
args: ["aBlock"],
source: "rowsWithIndexDo: aBlock\x0a\x09array withIndexDo: aBlock",
messageSends: ["withIndexDo:"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.CWTwoDimArray.klass)})},
args: [],
source: "new\x0a\x09self shouldNotImplement",
messageSends: ["shouldNotImplement"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st(self)._basicNew();
_st($2)._initialize();
_st($2)._initializeWithSize_(aPoint);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{aPoint:aPoint},smalltalk.CWTwoDimArray.klass)})},
args: ["aPoint"],
source: "new: aPoint\x0a\x09^ self basicNew\x0a\x09\x09initialize;\x0a\x09\x09initializeWithSize: aPoint;\x0a\x09\x09yourself",
messageSends: ["initialize", "basicNew", "initializeWithSize:", "yourself"],
referencedClasses: []
}),
smalltalk.CWTwoDimArray.klass);


