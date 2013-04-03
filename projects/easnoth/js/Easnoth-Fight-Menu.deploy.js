smalltalk.addPackage('Easnoth-Fight-Menu');
smalltalk.addClass('Dice', smalltalk.Widget, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
fn: function (dice,animationFinished){
var self=this;
var random,url;
return smalltalk.withContext(function($ctx1) { 
url=_st(self)._url();
_st(self)._animate_callBack_random_url_(dice,animationFinished,random,url);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished,random:random,url:url}, smalltalk.Dice)})},
messageSends: ["+", "atRandom", "url", "animate:callBack:random:url:"]}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:random:url:",
fn: function (dice,animationFinished,random,url){
var self=this;
return smalltalk.withContext(function($ctx1) { 
    function roll() {
		dice.animate({'border-spacing': -100},
                        {step: function(now, fx) {
                                $(fx.elem).css('background-position', '1px '+now+'px');
                        },
                        duration: 200,
                        easing: 'linear',
                        complete: function (){
                                i++;
                                if (i< random){
                                        roll();
                                } else {
                                        i = 0;
                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},
                                                {step: function(now, fx) {
                                                        $(fx.elem).css('background-position', '1px '+now+'px');
                                                        },
                                                        duration: 200,
                                                        easing: 'linear',
							complete: function(){
								animationFinished();
							}
                                                })
                                }
                        }
		})
	}
	roll();;
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:random:url:",{dice:dice,animationFinished:animationFinished,random:random,url:url}, smalltalk.Dice)})},
messageSends: []}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Dice)})},
messageSends: ["renderOn:callback:"]}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb}, smalltalk.Dice)})},
messageSends: ["animate:callBack:", "css:put:", "asJQuery", "img:"]}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.Dice)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.Dice);



smalltalk.addClass('DiceDeath', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceDeath)})},
messageSends: []}),
smalltalk.DiceDeath);



smalltalk.addClass('DiceKnockBack', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceKnockBack)})},
messageSends: []}),
smalltalk.DiceKnockBack);



smalltalk.addClass('DiceMiss', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceMiss)})},
messageSends: []}),
smalltalk.DiceMiss);



smalltalk.addClass('Dices', smalltalk.ActionMenuComponent, ['box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.Dices)})},
messageSends: []}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.Dices)})},
messageSends: []}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
_st(_st((smalltalk.DiceDeath || DiceDeath))._new())._renderOn_(html);
_st(_st((smalltalk.DiceKnockBack || DiceKnockBack))._new())._renderOn_(html);
return _st(_st((smalltalk.DiceMiss || DiceMiss))._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{}, smalltalk.Dices)})},
messageSends: ["contents:", "with:", "h4", "renderOn:", "new", "box"]}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("dices");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._firstLoad();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Dices)})},
messageSends: ["box:", "class:", "div", "yourself", "firstLoad"]}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:callback:",
fn: function (aResDices,cb){
var self=this;
var kill,knockBack;
return smalltalk.withContext(function($ctx1) { 
knockBack=_st(aResDices)._y();
_st(self)._updateKill_kb_callBack_(kill,knockBack,cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:callback:",{aResDices:aResDices,cb:cb,kill:kill,knockBack:knockBack}, smalltalk.Dices)})},
messageSends: ["x", "y", "updateKill:kb:callBack:"]}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateKill:kb:callBack:",
fn: function (kill,knockBack,cb){
var self=this;
var miss,dicesNb,tmp,dices,i,callback;
return smalltalk.withContext(function($ctx1) { 
dicesNb=_st(_st(_st(_st(self)._actionMenu())._monsterWatcher())._monster())._dices();
miss=_st(_st(dicesNb).__minus(kill)).__minus(knockBack);
dices=_st((smalltalk.Array || Array))._new();
i=(1);
callback=(function(){
return smalltalk.withContext(function($ctx2) {
i;
$1=_st(i).__eq(dicesNb);
return _st($1)._ifTrue_(cb);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st(_st((1))._to_(kill))._do_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((1))._to_(knockBack))._do_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((1))._to_(miss))._do_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(self)._box())._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st((1))._to_do_(dicesNb,(function(){
return smalltalk.withContext(function($ctx3) {
tmp;
_st(tmp)._renderOn_callback_(html,callback);
return _st(dices)._remove_(tmp);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateKill:kb:callBack:",{kill:kill,knockBack:knockBack,cb:cb,miss:miss,dicesNb:dicesNb,tmp:tmp,dices:dices,i:i,callback:callback}, smalltalk.Dices)})},
messageSends: ["dices", "monster", "monsterWatcher", "actionMenu", "-", "new", "+", "ifTrue:", "=", "do:", "add:", "to:", "contents:", "with:", "h4", "to:do:", "atRandom", "renderOn:callback:", "remove:", "box"]}),
smalltalk.Dices);



smalltalk.addClass('FightMenu', smalltalk.ActionMenu, ['actionCell'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "actionCell",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@actionCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionCell",{}, smalltalk.FightMenu)})},
messageSends: []}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "actionCell:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._showMonster_(_st(self["@actionCell"])._monster());
return self}, function($ctx1) {$ctx1.fill(self,"actionCell:",{aCell:aCell}, smalltalk.FightMenu)})},
messageSends: ["showMonster:", "monster"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{}, smalltalk.FightMenu)})},
messageSends: ["at:", "components"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._addComponent_(_st((smalltalk.MonsterWatcher || MonsterWatcher))._new());
_st(self)._addComponent_(_st((smalltalk.Dices || Dices))._new());
_st(self)._addComponent_(_st((smalltalk.TileWatcher || TileWatcher))._new());
_st(self)._addComponent_(_st((smalltalk.MapControls || MapControls))._new());
_st(self)._addComponent_(_st((smalltalk.TurnWatcher || TurnWatcher))._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.FightMenu)})},
messageSends: ["initialize", "addComponent:", "new"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterWatcher",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterWatcher",{}, smalltalk.FightMenu)})},
messageSends: ["at:", "components"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.FightMenu)})},
messageSends: ["renderOn:"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "showMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showMonster:",{aMonster:aMonster}, smalltalk.FightMenu)})},
messageSends: ["showMonster:", "monsterWatcher"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._turnWatcher())._sidePlaying();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sidePlaying",{}, smalltalk.FightMenu)})},
messageSends: ["sidePlaying", "turnWatcher"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWatcher",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileWatcher",{}, smalltalk.FightMenu)})},
messageSends: ["at:", "components"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "turnWatcher",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnWatcher",{}, smalltalk.FightMenu)})},
messageSends: ["at:", "components"]}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "unshowMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unshowMonster",{}, smalltalk.FightMenu)})},
messageSends: ["unshowMonster", "monsterWatcher"]}),
smalltalk.FightMenu);



smalltalk.addClass('MonsterWatcher', smalltalk.ActionMenuComponent, ['monster', 'box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.MonsterWatcher)})},
messageSends: []}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.MonsterWatcher)})},
messageSends: []}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
fn: function (){
var self=this;
var imageVide;
return smalltalk.withContext(function($ctx1) { 
imageVide=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
_st(imageVide)._at_put_("src","ressources/images/interro.png");
$2=_st((smalltalk.Monster || Monster))._new();
_st($2)._image_(imageVide);
_st($2)._hp_((0));
_st($2)._move_((0));
_st($2)._range_((0));
_st($2)._dices_((0));
_st($2)._attack_((0));
_st($2)._knockback_((0));
$3=_st($2)._special_("none");
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyMonster",{imageVide:imageVide}, smalltalk.MonsterWatcher)})},
messageSends: ["constructor:", "at:put:", "image:", "new", "hp:", "move:", "range:", "dices:", "attack:", "knockback:", "special:"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@monster"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._emptyMonster();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster",{}, smalltalk.MonsterWatcher)})},
messageSends: ["ifNil:", "emptyMonster"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster}, smalltalk.MonsterWatcher)})},
messageSends: ["update"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("monsterWatcher");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MonsterWatcher)})},
messageSends: ["box:", "class:", "div", "yourself", "update"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "showMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"showMonster:",{aMonster:aMonster}, smalltalk.MonsterWatcher)})},
messageSends: ["monster:", "update"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "unshowMonster",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unshowMonster",{}, smalltalk.MonsterWatcher)})},
messageSends: ["showMonster:"]}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self)._box())._contents_((function(html){
return smalltalk.withContext(function($ctx2) {
_st(html)._img_(_st(_st(_st(self)._monster())._image())._at_("src"));
$1=_st(html)._table();
_st($1)._class_("tableStats");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st("move : ").__comma(_st(_st(self)._monster())._move()));
return _st(_st(html)._tr())._with_(_st("range : ").__comma(_st(_st(self)._monster())._range()));
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return _st(_st(html)._td())._with_((function(){
return smalltalk.withContext(function($ctx5) {
_st(_st(html)._tr())._with_(_st(_st("attack : ").__comma(_st(_st(self)._monster())._attack())).__comma(" %"));
return _st(_st(html)._tr())._with_(_st(_st("knockBack : ").__comma(_st(_st(self)._monster())._knockback())).__comma(" %"));
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
return _st(_st(html)._tr())._with_(_st("special : ").__comma(_st(_st(self)._monster())._special()));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$2;
_st(_st(html)._h5())._with_("debug");
return _st(_st(html)._span())._with_(_st("state : ").__comma(_st(_st(_st(self)._monster())._state())._class()));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.MonsterWatcher)})},
messageSends: ["contents:", "with:", "h4", "img:", "at:", "image", "monster", "class:", "table", ",", "hp", "tr", "move", "range", "td", "dices", "attack", "knockback", "special", "h5", "class", "state", "span", "box"]}),
smalltalk.MonsterWatcher);



smalltalk.addClass('TileWatcher', smalltalk.ActionMenuComponent, ['tile', 'box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.TileWatcher)})},
messageSends: []}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.TileWatcher)})},
messageSends: []}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "emptyTile",
fn: function (){
var self=this;
var imageVide;
return smalltalk.withContext(function($ctx1) { 
imageVide=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
_st(imageVide)._at_put_("src","ressources/images/interro.png");
$1=_st(_st((smalltalk.Tile || Tile))._new())._image_(imageVide);
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyTile",{imageVide:imageVide}, smalltalk.TileWatcher)})},
messageSends: ["constructor:", "at:put:", "image:", "new"]}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("tileWatcher");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.TileWatcher)})},
messageSends: ["box:", "class:", "div", "yourself", "update"]}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "tile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@tile"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self)._emptyTile();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"tile",{}, smalltalk.TileWatcher)})},
messageSends: ["ifNil:", "emptyTile"]}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "tile:",
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tile:",{aTile:aTile}, smalltalk.TileWatcher)})},
messageSends: []}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
_st(html)._img_(_st(_st(_st(self)._tile())._image())._at_("src"));
_st(html)._br();
return _st(_st(html)._span())._with_(_st(_st(_st("isWall : ").__comma(_st(_st(self)._tile())._isWall())).__comma(" - monster : ")).__comma(_st(_st(_st(self)._tile())._cell())._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))));
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.TileWatcher)})},
messageSends: ["contents:", "with:", "h4", "img:", "at:", "image", "tile", "br", ",", "ifNotNil:ifNil:", "hasMonster", "cell", "isWall", "span", "box"]}),
smalltalk.TileWatcher);



smalltalk.addClass('TurnWatcher', smalltalk.ActionMenuComponent, ['turnNumber', 'turnDisplay', 'sidePlaying'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "activateTwoMonsters",
fn: function (){
var self=this;
var armyPlaying;
return smalltalk.withContext(function($ctx1) { 
armyPlaying=_st(_st(_st(self)._actionMenu())._map())._monstersFromSide_(_st(self)._sidePlaying());
$1=_st(_st(armyPlaying)._size()).__eq((0));
if(smalltalk.assert($1)){
_st(window)._alert_(_st("Someone just won. Guess who ? winner : ").__comma(_st(_st(self)._sidePlaying())._negated()));
} else {
$2=_st(_st(armyPlaying)._size()).__gt((2));
if(smalltalk.assert($2)){
_st(self)._pickMonster();
} else {
_st(armyPlaying)._collect_((function(monster){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
_st(_st(_st(self)._actionMenu())._map())._showActiveMonsters();
_st(_st(_st(self)._actionMenu())._map())._update();
};
};
return self}, function($ctx1) {$ctx1.fill(self,"activateTwoMonsters",{armyPlaying:armyPlaying}, smalltalk.TurnWatcher)})},
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "ifTrue:ifFalse:", "alert:", ",", "negated", "pickMonster", "collect:", "changeState:", "new", "showActiveMonsters", "update", ">", "size", "="]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "endPick",
fn: function (){
var self=this;
var armyPlaying,monsterActivated;
return smalltalk.withContext(function($ctx1) { 
armyPlaying=_st(_st(_st(self)._actionMenu())._map())._monstersFromSide_(_st(self)._sidePlaying());
_st(armyPlaying)._collect_((function(monster){
return smalltalk.withContext(function($ctx2) {
if(smalltalk.assert($1)){
monsterActivated=monster;
return monsterActivated;
};
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
$2=_st(_st(armyPlaying)._size()).__eq((1));
if(! smalltalk.assert($2)){
_st(armyPlaying)._remove_(monsterActivated);
_st(_st(armyPlaying)._atRandom())._changeState_(_st((smalltalk.Active || Active))._new());
};
_st(_st(_st(self)._actionMenu())._map())._showActiveMonsters();
_st(_st(_st(self)._actionMenu())._map())._update();
return self}, function($ctx1) {$ctx1.fill(self,"endPick",{armyPlaying:armyPlaying,monsterActivated:monsterActivated}, smalltalk.TurnWatcher)})},
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "collect:", "ifTrue:", "isKindOf:", "state", "ifFalse:", "remove:", "changeState:", "new", "atRandom", "=", "size", "showActiveMonsters", "update"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._sidePlaying();
if(($receiver = $1) == nil || $receiver == undefined){
_st(self)._turnNumber_((1));
_st(self)._sidePlaying_(_st(_st((2)).__star(_st((2))._atRandom())).__minus((3)));
_st(self)._activateTwoMonsters();
} else {
$1;
};
return self}, function($ctx1) {$ctx1.fill(self,"firstTurn",{}, smalltalk.TurnWatcher)})},
messageSends: ["ifNil:", "turnNumber:", "sidePlaying:", "-", "*", "atRandom", "activateTwoMonsters", "sidePlaying"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseTurnNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"increaseTurnNumber",{}, smalltalk.TurnWatcher)})},
messageSends: ["+", "turnNumber", "update"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.TurnWatcher)})},
messageSends: ["turnNumber:"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseTurnNumber();
_st(_st(_st(_st(self)._actionMenu())._map())._monsters())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._activateTwoMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{}, smalltalk.TurnWatcher)})},
messageSends: ["sidePlaying:", "negated", "sidePlaying", "increaseTurnNumber", "do:", "changeState:", "new", "monsters", "map", "actionMenu", "activateTwoMonsters"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "pickMonster",
fn: function (){
var self=this;
var armyPlaying;
return smalltalk.withContext(function($ctx1) { 
_st(armyPlaying)._collect_((function(monster){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({monster:monster},$ctx1)})}));
_st(_st(_st(self)._actionMenu())._map())._showActiveMonsters();
_st(_st(_st(self)._actionMenu())._map())._update();
return self}, function($ctx1) {$ctx1.fill(self,"pickMonster",{armyPlaying:armyPlaying}, smalltalk.TurnWatcher)})},
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "collect:", "changeState:", "new", "showActiveMonsters", "update"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("stuff");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(html)._button();
_st($3)._with_("next turn (= enter)");
$4=_st($3)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
$4;
_st(_st("body")._asJQuery())._keyup_((function(event){
return smalltalk.withContext(function($ctx3) {
if(smalltalk.assert($5)){
return _st(self)._nextTurn();
};
}, function($ctx3) {$ctx3.fillBlock({event:event},$ctx1)})}));
$6=_st(html)._button();
_st($6)._with_("class browser");
$7=_st($6)._onClick_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
return $7;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.TurnWatcher)})},
messageSends: ["class:", "div", "with:", "turnDisplay:", "h5", "button", "onClick:", "nextTurn", "keyup:", "ifTrue:", "=", "keyCode", "asJQuery", "open", "update"]}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@sidePlaying"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sidePlaying",{}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying:",
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"sidePlaying:",{aSide:aSide}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnDisplay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@turnDisplay"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnDisplay",{}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnDisplay:",
fn: function (aHTML){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"turnDisplay:",{aHTML:aHTML}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnNumber",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@turnNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnNumber",{}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnNumber:",
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"turnNumber:",{anInt:anInt}, smalltalk.TurnWatcher)})},
messageSends: []}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.TurnWatcher)})},
messageSends: ["contents:", ",", "turnNumber", "turnDisplay"]}),
smalltalk.TurnWatcher);



smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=_st((smalltalk.Dictionary || Dictionary))._new();
_st($2)._at_put_("red","overtiles/red");
_st($2)._at_put_("green","overtiles/green");
_st($2)._at_put_("white","overtiles/white");
_st($2)._at_put_("interro","interro");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"imagesToPreload",{}, smalltalk.Map)})},
messageSends: ["at:put:", "new", "yourself"]}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeActionMenu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.FightMenu || FightMenu))._newFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeActionMenu",{}, smalltalk.Map)})},
messageSends: ["newFor:"]}),
smalltalk.Map);
