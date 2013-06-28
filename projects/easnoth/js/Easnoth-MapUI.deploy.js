smalltalk.addPackage('Easnoth-MapUI');
smalltalk.addClass('CWEventDispatcher', smalltalk.Object, ['canvas', 'map', 'drawer', 'game', 'suspended', 'currentCell'], 'Easnoth-MapUI');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWEventDispatcher)})},
messageSends: ["current"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._rowAt_(i))._childAt_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"cellAt:y:",{i:i,j:j},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "cellAt:y:ifAbsent:",
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
messageSends: ["on:do:", "value", "childAt:", "rowAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "currentCell:",
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
messageSends: ["ifTrue:ifFalse:", "-", "offsetLeft", "offsetParent", "target", "clientX", "offsetTop", "clientY", "offsetX", "offsetY", "notNil", "at:", "mouseCoodToHexCoodX:y:", "cellAt:y:ifAbsent:", "x", "y"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseClick:",
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
messageSends: ["ifFalse:", "ifNotNil:", "mouseClick:", "gameContext"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatchMouseMove:",
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
messageSends: ["ifFalse:", "currentCell:", "ifNotNil:", "relatedCell:", "gameContext", "mouseMove:", "=="]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "endGame",
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
messageSends: ["css:put:", "asJQuery", "off:", "element", "canvas"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "eventManagerLayerId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#eventManager";
}, function($ctx1) {$ctx1.fill(self,"eventManagerLayerId",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "fromJQuery:canvas:", "asJQuery", "eventManagerLayerId", "onJQuery:", "css:put:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
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
messageSends: ["onClick:", "dispatchMouseClick:", "canvas", "onMouseMove:", "dispatchMouseMove:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:game:",
fn: function (aMap,aGame){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@game"]=aGame;
self["@map"]=aMap;
self["@drawer"]=_st(aMap)._drawer();
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:game:",{aMap:aMap,aGame:aGame},smalltalk.CWEventDispatcher)})},
messageSends: ["drawer", "initializeEventHandling"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:",
fn: function (x,y){
var self=this;
var array;
return smalltalk.withContext(function($ctx1) { 
var $1;
array=_st(self)._mouseCoodToHexCoodX_y_mapX_mapY_(x,y,_st(_st(self)._padding())._x(),_st(_st(self)._padding())._y());
$1=_st(_st(array)._at_((1))).__at(_st(array)._at_((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"mouseCoodToHexCoodX:y:",{x:x,y:y,array:array},smalltalk.CWEventDispatcher)})},
messageSends: ["mouseCoodToHexCoodX:y:mapX:mapY:", "x", "padding", "y", "@", "at:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseCoodToHexCoodX:y:mapX:mapY:",
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
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@drawer"])._padding();
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWEventDispatcher)})},
messageSends: ["padding"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "resume",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"resume",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "rowAt:",
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@map"])._childAt_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowAt:",{index:index},smalltalk.CWEventDispatcher)})},
messageSends: ["childAt:"]}),
smalltalk.CWEventDispatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "suspend",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@suspended"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"suspend",{},smalltalk.CWEventDispatcher)})},
messageSends: []}),
smalltalk.CWEventDispatcher);



smalltalk.addClass('CWLayer', smalltalk.Widget, [], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "down:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"down:",{incr:incr},smalltalk.CWLayer)})},
messageSends: []}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"left:",{incr:incr},smalltalk.CWLayer)})},
messageSends: []}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"right:",{incr:incr},smalltalk.CWLayer)})},
messageSends: []}),
smalltalk.CWLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "up:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"up:",{incr:incr},smalltalk.CWLayer)})},
messageSends: []}),
smalltalk.CWLayer);



smalltalk.addClass('CWArrayLayer', smalltalk.CWLayer, ['array'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWImageLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "down:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._vertical_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"down:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["vertical:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontal:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_way_(incr,"left");
return self}, function($ctx1) {$ctx1.fill(self,"horizontal:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["move:way:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWImageLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWArrayLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWArrayLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWArrayLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "left:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._horizontal_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"left:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["horizontal:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "move:way:",
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
messageSends: ["do:", "ifNotNil:", "css:", "asJQuery", "first", "tokenize:", "css:value:", ",", "asString", "+", "asNumber"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWArrayLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:point:",
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
messageSends: ["width:", "leafWidth", "newLeaf:", "height:", "leafHeight", "style:", ",", "+", "xShift", "x", "yShift", "y"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.CWArrayLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "right:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._horizontal_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"right:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["horizontal:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "up:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._vertical_(incr);
return self}, function($ctx1) {$ctx1.fill(self,"up:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["vertical:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "vertical:",
fn: function (incr){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._move_way_(incr,"top");
return self}, function($ctx1) {$ctx1.fill(self,"vertical:",{incr:incr},smalltalk.CWArrayLayer)})},
messageSends: ["move:way:"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWImageLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWImageLayer)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWArrayLayer);



smalltalk.addClass('CWGOTLayer', smalltalk.CWArrayLayer, ['invis'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(_st(each)._asJQuery())._attr_put_("src",_st(self["@invis"])._src());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWGOTLayer)})},
messageSends: ["do:", "attr:put:", "src", "asJQuery"]}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#got";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWGOTLayer)})},
messageSends: []}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
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
messageSends: ["at:", "invisIndex", "imageArray", "new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"]}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(84);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWGOTLayer)})},
messageSends: []}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(126);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWGOTLayer)})},
messageSends: []}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(html)._img();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWGOTLayer)})},
messageSends: ["img"]}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:map:",
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
messageSends: ["withIndexDo:", "newLeaf:point:", "firstCoods", "htmlImage:", "gameOverTile", "i:j:put:", "children"]}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((14))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWGOTLayer)})},
messageSends: ["negated"]}),
smalltalk.CWGOTLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((9))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWGOTLayer)})},
messageSends: ["negated"]}),
smalltalk.CWGOTLayer);



smalltalk.addClass('CWMonsterLayer', smalltalk.CWArrayLayer, [], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "clean",
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
messageSends: ["do:", "ifNotNil:", "element", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "id",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#monster";
}, function($ctx1) {$ctx1.fill(self,"id",{},smalltalk.CWMonsterLayer)})},
messageSends: []}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (aMap){
var self=this;
function $CWTwoDimArray(){return smalltalk.CWTwoDimArray||(typeof CWTwoDimArray=="undefined"?nil:CWTwoDimArray)}
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@array"]=_st($CWTwoDimArray())._new_(_st(_st(_st(aMap)._children())._size()).__at(_st(_st(_st(aMap)._childAt_((1)))._children())._size()));
_st(self)._renderOn_map_(_st($HTMLCanvas())._onJQuery_(_st(_st(self)._id())._asJQuery()),aMap);
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMonsterLayer)})},
messageSends: ["new:", "@", "size", "children", "childAt:", "renderOn:map:", "onJQuery:", "asJQuery", "id"]}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafHeight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(150);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafHeight",{},smalltalk.CWMonsterLayer)})},
messageSends: []}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "leafWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(150);
return $1;
}, function($ctx1) {$ctx1.fill(self,"leafWidth",{},smalltalk.CWMonsterLayer)})},
messageSends: []}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "newLeaf:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(html)._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"newLeaf:",{html:html},smalltalk.CWMonsterLayer)})},
messageSends: ["canvas"]}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:map:",
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
messageSends: ["withIndexDo:", "ifNotNil:", "newLeaf:point:", "firstCoods", "canvas:", "css:put:", "zIndex", "asJQuery", "i:j:put:", "monster", "children"]}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "xShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((4))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"xShift",{},smalltalk.CWMonsterLayer)})},
messageSends: ["negated"]}),
smalltalk.CWMonsterLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "yShift",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((50))._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"yShift",{},smalltalk.CWMonsterLayer)})},
messageSends: ["negated"]}),
smalltalk.CWMonsterLayer);



smalltalk.addClass('CWCanvasLayer', smalltalk.CWLayer, ['canvas'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "canvasForId:",
fn: function (id){
var self=this;
function $HTMLCanvas(){return smalltalk.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TagBrush())._fromJQuery_canvas_(_st(id)._asJQuery(),_st($HTMLCanvas())._onJQuery_(_st("body")._asJQuery()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasForId:",{id:id},smalltalk.CWCanvasLayer)})},
messageSends: ["fromJQuery:canvas:", "asJQuery", "onJQuery:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
var elem;
return smalltalk.withContext(function($ctx1) { 
elem=_st(self["@canvas"])._element();
_st(_st(elem)._getContext_("2d"))._clearRect_y_width_height_((0),(0),_st(elem)._width(),_st(elem)._height());
return self}, function($ctx1) {$ctx1.fill(self,"clean",{elem:elem},smalltalk.CWCanvasLayer)})},
messageSends: ["element", "clearRect:y:width:height:", "width", "height", "getContext:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@canvas"])._element())._getContext_("2d");
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.CWCanvasLayer)})},
messageSends: ["getContext:", "element"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._display_cood_(object,_st((0)).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"display:",{object:object},smalltalk.CWCanvasLayer)})},
messageSends: ["display:cood:", "@"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "display:cood:",
fn: function (object,aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(_st(object)._image(),_st(aPoint)._x(),_st(aPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"display:cood:",{object:object,aPoint:aPoint},smalltalk.CWCanvasLayer)})},
messageSends: ["drawImage:x:y:", "image", "x", "y", "context"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawImage:x:y:",
fn: function (img,x,y){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._context())._drawImage_x_y_(img,x,y);
return self}, function($ctx1) {$ctx1.fill(self,"drawImage:x:y:",{img:img,x:x,y:y},smalltalk.CWCanvasLayer)})},
messageSends: ["drawImage:x:y:", "context"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawIsometric:point:",
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
messageSends: ["safeDraw:", "translate:y:", "+", "x", "-", "y", "scale:y:", "rotate:", "/", "pi", "display:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithId:",
fn: function (id){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st(self)._canvasForId_(id);
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithId:",{id:id},smalltalk.CWCanvasLayer)})},
messageSends: ["canvasForId:"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseDisplay:point:xPad:yPad:",
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
messageSends: ["ensure:", "scale:y:", "context", "translate:y:", "negated", "+", "x", "display:cood:", "@", "-", "y"]}),
smalltalk.CWCanvasLayer);

smalltalk.addMethod(
smalltalk.method({
selector: "safeDraw:",
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
messageSends: ["ensure:", "restore", "context", "save", "value:"]}),
smalltalk.CWCanvasLayer);



smalltalk.addClass('CWMapDrawer', smalltalk.CWVisitor, ['executionContext', 'layers', 'padding', 'map', 'menus'], 'Easnoth-MapUI');
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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.CWMapDrawer)})},
messageSends: ["current"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backTileImage",
fn: function (){
var self=this;
function $CWBackground(){return smalltalk.CWBackground||(typeof CWBackground=="undefined"?nil:CWBackground)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($CWBackground())._imageCacheAt_("back");
return $1;
}, function($ctx1) {$ctx1.fill(self,"backTileImage",{},smalltalk.CWMapDrawer)})},
messageSends: ["imageCacheAt:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundCanvasId",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "#background";
}, function($ctx1) {$ctx1.fill(self,"backgroundCanvasId",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "backgroundLayer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@layers"])._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"backgroundLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["at:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasLayerForId:",
fn: function (id){
var self=this;
function $CWCanvasLayer(){return smalltalk.CWCanvasLayer||(typeof CWCanvasLayer=="undefined"?nil:CWCanvasLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWCanvasLayer())._new())._initializeWithId_(id);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasLayerForId:",{id:id},smalltalk.CWMapDrawer)})},
messageSends: ["initializeWithId:", "new"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasPadding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvasPadding",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@layers"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._clean();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.CWMapDrawer)})},
messageSends: ["do:", "clean"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self)._executionContext())._currentPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"currentPoint",{},smalltalk.CWMapDrawer)})},
messageSends: ["currentPoint", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "down",
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
messageSends: ["+", "@", "moveIncrement", "do:", "down:", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackTile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawImage_x_y_(_st(self)._backTileImage(),_st(_st(_st(self)._currentPoint())._x()).__minus((4)),_st(_st(_st(self)._currentPoint())._y()).__plus((20)));
return self}, function($ctx1) {$ctx1.fill(self,"drawBackTile",{},smalltalk.CWMapDrawer)})},
messageSends: ["drawImage:x:y:", "backTileImage", "-", "x", "currentPoint", "+", "y", "backgroundLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "drawBackground:",
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._drawIsometric_point_(object,_st(self)._currentPoint());
return self}, function($ctx1) {$ctx1.fill(self,"drawBackground:",{object:object},smalltalk.CWMapDrawer)})},
messageSends: ["drawIsometric:point:", "currentPoint", "backgroundLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "executionContext",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@executionContext"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"executionContext",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWVisitor.fn.prototype._initialize.apply(_st(self), []);
_st(self)._initializeCanvasLayers();
_st(self)._padding_(_st(_st(self)._canvasPadding()).__at((0)));
_st(self)._initializeEventHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.CWMapDrawer)})},
messageSends: ["initialize", "initializeCanvasLayers", "padding:", "@", "canvasPadding", "initializeEventHandling"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeCanvasLayers",
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
messageSends: ["at:put:", "canvasLayerForId:", "backgroundCanvasId", "new:", "yourself"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeEventHandling",
fn: function (){
var self=this;
function $CWMapMoveEvent(){return smalltalk.CWMapMoveEvent||(typeof CWMapMoveEvent=="undefined"?nil:CWMapMoveEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._announcer())._on_do_($CWMapMoveEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(self)._perform_(_st(event)._directionMethod());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initializeEventHandling",{},smalltalk.CWMapDrawer)})},
messageSends: ["on:do:", "perform:", "directionMethod", "announcer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeForMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@map"]=aMap;
_st(_st(self)._padding())._x_(_st(_st(self)._canvasPadding()).__plus(_st(_st(_st(_st(_st(_st(self["@map"])._children())._at_((1)))._children())._size()).__star(_st(self)._tileUnit())).__star((1.17))));
_st(self)._initializeImageLayers();
return self}, function($ctx1) {$ctx1.fill(self,"initializeForMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
messageSends: ["x:", "+", "*", "tileUnit", "size", "children", "at:", "canvasPadding", "padding", "initializeImageLayers"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeImageLayers",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._setUpFirstCoods();
_st(self["@layers"])._at_put_((2),_st(self)._newGOTLayer());
_st(self["@layers"])._at_put_((3),_st(self)._newMonsterLayer());
return self}, function($ctx1) {$ctx1.fill(self,"initializeImageLayers",{},smalltalk.CWMapDrawer)})},
messageSends: ["setUpFirstCoods", "at:put:", "newGOTLayer", "newMonsterLayer"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "left",
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
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "left:", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "moveIncrement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveIncrement",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGOTLayer",
fn: function (){
var self=this;
function $CWGOTLayer(){return smalltalk.CWGOTLayer||(typeof CWGOTLayer=="undefined"?nil:CWGOTLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGOTLayer())._new())._initializeForMap_(self["@map"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGOTLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["initializeForMap:", "new"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newGlobalDrawingContext",
fn: function (){
var self=this;
function $CWGlobalDrawingContext(){return smalltalk.CWGlobalDrawingContext||(typeof CWGlobalDrawingContext=="undefined"?nil:CWGlobalDrawingContext)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWGlobalDrawingContext())._new())._reset_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newGlobalDrawingContext",{},smalltalk.CWMapDrawer)})},
messageSends: ["reset:", "new"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "newMonsterLayer",
fn: function (){
var self=this;
function $CWMonsterLayer(){return smalltalk.CWMonsterLayer||(typeof CWMonsterLayer=="undefined"?nil:CWMonsterLayer)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($CWMonsterLayer())._new())._initializeForMap_(self["@map"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"newMonsterLayer",{},smalltalk.CWMapDrawer)})},
messageSends: ["initializeForMap:", "new"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@padding"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"padding",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "padding:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@padding"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"padding:",{aPoint:aPoint},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "right",
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
messageSends: ["+", "@", "moveIncrement", "do:", "right:", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpFirstCoods",
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
messageSends: ["size", "children", "newGlobalDrawingContext", "withIndexDo:", "nextRow", "nextCell", "firstCoods:", "currentPoint", "zIndex:", "+", "*"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "tileUnit",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(50);
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileUnit",{},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "up",
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
messageSends: ["+", "@", "negated", "moveIncrement", "do:", "up:", "updateMap"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "updateMap",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._backgroundLayer())._clean();
self["@executionContext"]=_st(self)._newGlobalDrawingContext();
_st(self)._visitTree_(self["@map"]);
return self}, function($ctx1) {$ctx1.fill(self,"updateMap",{},smalltalk.CWMapDrawer)})},
messageSends: ["clean", "backgroundLayer", "newGlobalDrawingContext", "visitTree:"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextCell();
return self}, function($ctx1) {$ctx1.fill(self,"visitCell:",{aCell:aCell},smalltalk.CWMapDrawer)})},
messageSends: ["nextCell", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitGameOverTile:",
fn: function (got){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitGameOverTile:",{got:got},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitHeros:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitHeros:",{heros:heros},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitMap:",
fn: function (aMap){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitMap:",{aMap:aMap},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitOverTile_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWMapDrawer)})},
messageSends: ["visitOverTile:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitRow:",
fn: function (aRow){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._nextRow();
return self}, function($ctx1) {$ctx1.fill(self,"visitRow:",{aRow:aRow},smalltalk.CWMapDrawer)})},
messageSends: ["nextRow", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._executionContext())._visitTile_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWMapDrawer)})},
messageSends: ["visitTile:", "executionContext"]}),
smalltalk.CWMapDrawer);

smalltalk.addMethod(
smalltalk.method({
selector: "visitUnit:",
fn: function (aUnit){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"visitUnit:",{aUnit:aUnit},smalltalk.CWMapDrawer)})},
messageSends: []}),
smalltalk.CWMapDrawer);



smalltalk.addClass('CWMapInterpreterContext', smalltalk.Object, ['rowIndex', 'cellIndex'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cellIndex"]=_st(self["@cellIndex"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWMapInterpreterContext)})},
messageSends: ["+"]}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextRow",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=_st(self["@rowIndex"]).__plus((1));
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"nextRow",{},smalltalk.CWMapInterpreterContext)})},
messageSends: ["+"]}),
smalltalk.CWMapInterpreterContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rowIndex"]=(0);
self["@cellIndex"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.CWMapInterpreterContext)})},
messageSends: []}),
smalltalk.CWMapInterpreterContext);



smalltalk.addClass('CWGlobalDrawingContext', smalltalk.CWMapInterpreterContext, ['currentPointCache', 'drawer'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "calculCanvasCoods",
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
messageSends: ["padding", "tileUnit", "*", "+", "|", "/", "x", "-", "y", "@"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "currentPoint",
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
messageSends: ["ifNil:", "calculCanvasCoods"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "nextCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreterContext.fn.prototype._nextCell.apply(_st(self), []);
self["@currentPointCache"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"nextCell",{},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["nextCell"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "reset:",
fn: function (aDrawer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWMapInterpreterContext.fn.prototype._reset.apply(_st(self), []);
self["@currentPointCache"]=nil;
self["@drawer"]=aDrawer;
return self}, function($ctx1) {$ctx1.fill(self,"reset:",{aDrawer:aDrawer},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["reset"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitOverTile:",
fn: function (ot){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackground_(ot);
return self}, function($ctx1) {$ctx1.fill(self,"visitOverTile:",{ot:ot},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawBackground:"]}),
smalltalk.CWGlobalDrawingContext);

smalltalk.addMethod(
smalltalk.method({
selector: "visitTile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@drawer"])._drawBackTile();
_st(self["@drawer"])._drawBackground_(aTile);
return self}, function($ctx1) {$ctx1.fill(self,"visitTile:",{aTile:aTile},smalltalk.CWGlobalDrawingContext)})},
messageSends: ["drawBackTile", "drawBackground:"]}),
smalltalk.CWGlobalDrawingContext);



smalltalk.addClass('CWTwoDimArray', smalltalk.Object, ['array'], 'Easnoth-MapUI');
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
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
messageSends: ["do:", "value:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:",
fn: function (i,j){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_(j);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:",{i:i,j:j},smalltalk.CWTwoDimArray)})},
messageSends: ["at:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "i:j:put:",
fn: function (i,j,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@array"])._at_(i))._at_put_(j,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"i:j:put:",{i:i,j:j,value:value},smalltalk.CWTwoDimArray)})},
messageSends: ["at:put:", "at:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeWithSize:",
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
messageSends: ["new:", "x", "to:do:", "at:put:", "y"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rowsDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"rowsDo:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
messageSends: ["do:"]}),
smalltalk.CWTwoDimArray);

smalltalk.addMethod(
smalltalk.method({
selector: "rowsWithIndexDo:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@array"])._withIndexDo_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"rowsWithIndexDo:",{aBlock:aBlock},smalltalk.CWTwoDimArray)})},
messageSends: ["withIndexDo:"]}),
smalltalk.CWTwoDimArray);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._shouldNotImplement();
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.CWTwoDimArray.klass)})},
messageSends: ["shouldNotImplement"]}),
smalltalk.CWTwoDimArray.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
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
messageSends: ["initialize", "basicNew", "initializeWithSize:", "yourself"]}),
smalltalk.CWTwoDimArray.klass);


