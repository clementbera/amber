smalltalk.addPackage('Easnoth-Fight-Menu');
smalltalk.addClass('Dice', smalltalk.Widget, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:",
category: 'displaying',
fn: function (dice,animationFinished){
var self=this;
var random,url;
return smalltalk.withContext(function($ctx1) { 
url=_st(self)._url();
_st(self)._animate_callBack_random_url_(dice,animationFinished,random,url);
return self}, function($ctx1) {$ctx1.fill(self,"animate:callBack:",{dice:dice,animationFinished:animationFinished,random:random,url:url}, smalltalk.Dice)})},
args: ["dice", "animationFinished"],
source: "animate: dice callBack: animationFinished\x0a        |random url|\x0a\x0a\x09random := 2 + 7 atRandom.\x0a\x09url := self url.\x0a\x0a\x09self animate: dice callBack: animationFinished random: random url: url",
messageSends: ["+", "atRandom", "url", "animate:callBack:random:url:"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "animate:callBack:random:url:",
category: 'displaying',
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
args: ["dice", "animationFinished", "random", "url"],
source: "animate: dice callBack: animationFinished random: random url: url\x0a<var i = 0;\x0a    function roll() {\x0a\x09\x09dice.animate({'border-spacing': -100},\x0a                        {step: function(now, fx) {\x0a                                $(fx.elem).css('background-position', '1px '+now+'px');\x0a                        },\x0a                        duration: 200,\x0a                        easing: 'linear',\x0a                        complete: function (){\x0a                                i++;\x0a                                if (i< random){\x0a                                        roll();\x0a                                } else {\x0a                                        i = 0;\x0a                                        dice.css('background-image', 'url(' + url + ')').css('background-position','1px 100px').css('background-repeat','no-repeat').animate({'border-spacing': -100},\x0a                                                {step: function(now, fx) {\x0a                                                        $(fx.elem).css('background-position', '1px '+now+'px');\x0a                                                        },\x0a                                                        duration: 200,\x0a                                                        easing: 'linear',\x0a\x09\x09\x09\x09\x09\x09\x09complete: function(){\x0a\x09\x09\x09\x09\x09\x09\x09\x09animationFinished();\x0a\x09\x09\x09\x09\x09\x09\x09}\x0a                                                })\x0a                                }\x0a                        }\x0a\x09\x09})\x0a\x09}\x0a\x09roll();>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Dice)})},
args: ["html"],
source: "renderOn: html\x0a\x09 self renderOn: html callback: []",
messageSends: ["renderOn:callback:"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:callback:",
category: 'displaying',
fn: function (html,cb){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:callback:",{html:html,cb:cb}, smalltalk.Dice)})},
args: ["html", "cb"],
source: "renderOn: html callback: cb\x0a\x09 self animate: ((html img: 'ressources/images/fight/diceBackground.png') asJQuery css: 'background' put: 'url(\x22ressources/images/fight/diceRoll.png\x22) 1px 0') callBack: cb",
messageSends: ["animate:callBack:", "css:put:", "asJQuery", "img:"],
referencedClasses: []
}),
smalltalk.Dice);

smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'displaying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.Dice)})},
args: [],
source: "url\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.Dice);



smalltalk.addClass('DiceDeath', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceDeath)})},
args: [],
source: "url\x0a\x09^'ressources/images/fight/diceDeath.png'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DiceDeath);



smalltalk.addClass('DiceKnockBack', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceKnockBack)})},
args: [],
source: "url\x0a\x09^'ressources/images/fight/diceKnockBack.png'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DiceKnockBack);



smalltalk.addClass('DiceMiss', smalltalk.Dice, [], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "url",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
}, function($ctx1) {$ctx1.fill(self,"url",{}, smalltalk.DiceMiss)})},
args: [],
source: "url\x0a\x09^'ressources/images/fight/diceMiss.png'",
messageSends: [],
referencedClasses: []
}),
smalltalk.DiceMiss);



smalltalk.addClass('Dices', smalltalk.ActionMenuComponent, ['box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.Dices)})},
args: [],
source: "box\x0a\x09^box",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
category: 'accessing',
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.Dices)})},
args: ["aBox"],
source: "box: aBox\x0a\x09box := aBox",
messageSends: [],
referencedClasses: []
}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "firstLoad",
category: 'displaying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
_st(_st((smalltalk.DiceDeath || DiceDeath))._new())._renderOn_(html);
_st(_st((smalltalk.DiceKnockBack || DiceKnockBack))._new())._renderOn_(html);
return _st(_st((smalltalk.DiceMiss || DiceMiss))._new())._renderOn_(html);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"firstLoad",{}, smalltalk.Dices)})},
args: [],
source: "firstLoad\x0a        self box contents: [:html | \x0a\x09\x09html h4 with: 'Fight result'.\x0a                DiceDeath new renderOn: html.\x0a                DiceKnockBack new renderOn: html.\x0a                DiceMiss new renderOn: html.\x0a        ].",
messageSends: ["contents:", "with:", "h4", "renderOn:", "new", "box"],
referencedClasses: ["DiceDeath", "DiceKnockBack", "DiceMiss"]
}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("dices");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._firstLoad();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.Dices)})},
args: ["html"],
source: "renderOn: html\x0a\x09self box: (html div \x0a\x09\x09class: 'dices';\x0a\x09\x09yourself).\x0a\x09self firstLoad",
messageSends: ["box:", "class:", "div", "yourself", "firstLoad"],
referencedClasses: []
}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "showDices:callback:",
category: 'eventHandling',
fn: function (aResDices,cb){
var self=this;
var kill,knockBack;
return smalltalk.withContext(function($ctx1) { 
knockBack=_st(aResDices)._y();
_st(self)._updateKill_kb_callBack_(kill,knockBack,cb);
return self}, function($ctx1) {$ctx1.fill(self,"showDices:callback:",{aResDices:aResDices,cb:cb,kill:kill,knockBack:knockBack}, smalltalk.Dices)})},
args: ["aResDices", "cb"],
source: "showDices: aResDices callback: cb\x0a\x09|kill knockBack|\x0a\x0a\x09kill := aResDices x.\x0a\x09knockBack := aResDices y.\x0a\x0a\x09self updateKill: kill kb: knockBack callBack: cb.",
messageSends: ["x", "y", "updateKill:kb:callBack:"],
referencedClasses: []
}),
smalltalk.Dices);

smalltalk.addMethod(
smalltalk.method({
selector: "updateKill:kb:callBack:",
category: 'displaying',
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
args: ["kill", "knockBack", "cb"],
source: "updateKill: kill kb: knockBack callBack: cb\x0a\x09|miss dicesNb tmp dices i callback|\x0a\x0a\x09dicesNb := self actionMenu monsterWatcher monster dices.\x0a\x09miss := dicesNb - kill - knockBack.\x0a\x09dices := Array new.\x0a\x09i := 1.\x0a\x09callback := [i := i + 1. (i = dicesNb) ifTrue:cb].\x0a\x0a\x09(1 to: kill) do:[dices add: DiceDeath new].\x0a\x09(1 to: knockBack) do:[dices add: DiceKnockBack new].\x0a\x09(1 to: miss) do:[dices add: DiceMiss new].\x0a\x0a        self box contents: [:html | \x0a\x09\x09html h4 with: 'Fight result'.\x0a\x09\x091 to: dicesNb do: [\x0a\x09\x09\x09\x22display dices in random order.\x22\x0a\x09\x09\x09tmp := dices atRandom.\x0a\x09\x09\x09tmp renderOn: html callback: callback.\x0a\x09\x09\x09dices remove: tmp.\x0a\x09\x09]\x0a        ]",
messageSends: ["dices", "monster", "monsterWatcher", "actionMenu", "-", "new", "+", "ifTrue:", "=", "do:", "add:", "to:", "contents:", "with:", "h4", "to:do:", "atRandom", "renderOn:callback:", "remove:", "box"],
referencedClasses: ["Array", "DiceDeath", "DiceKnockBack", "DiceMiss"]
}),
smalltalk.Dices);



smalltalk.addClass('FightMenu', smalltalk.ActionMenu, ['actionCell'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "actionCell",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@actionCell"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"actionCell",{}, smalltalk.FightMenu)})},
args: [],
source: "actionCell\x0a\x09^actionCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "actionCell:",
category: 'accessing',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._showMonster_(_st(self["@actionCell"])._monster());
return self}, function($ctx1) {$ctx1.fill(self,"actionCell:",{aCell:aCell}, smalltalk.FightMenu)})},
args: ["aCell"],
source: "actionCell: aCell\x0a\x09actionCell := aCell.\x0a\x09self showMonster: actionCell monster.",
messageSends: ["showMonster:", "monster"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "dices",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"dices",{}, smalltalk.FightMenu)})},
args: [],
source: "dices\x0a\x09^self components at: 2",
messageSends: ["at:", "components"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._addComponent_(_st((smalltalk.MonsterWatcher || MonsterWatcher))._new());
_st(self)._addComponent_(_st((smalltalk.Dices || Dices))._new());
_st(self)._addComponent_(_st((smalltalk.TileWatcher || TileWatcher))._new());
_st(self)._addComponent_(_st((smalltalk.MapControls || MapControls))._new());
_st(self)._addComponent_(_st((smalltalk.TurnWatcher || TurnWatcher))._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.FightMenu)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self addComponent: MonsterWatcher new.\x0a\x09self addComponent: Dices new.\x0a\x09self addComponent: TileWatcher new.\x0a\x09self addComponent: MapControls new.\x0a\x09self addComponent: TurnWatcher new.",
messageSends: ["initialize", "addComponent:", "new"],
referencedClasses: ["MonsterWatcher", "Dices", "TileWatcher", "MapControls", "TurnWatcher"]
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "monsterWatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"monsterWatcher",{}, smalltalk.FightMenu)})},
args: [],
source: "monsterWatcher\x0a\x09^self components at: 1",
messageSends: ["at:", "components"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.FightMenu)})},
args: ["html"],
source: "renderOn: html\x0a\x09super renderOn: html.",
messageSends: ["renderOn:"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "showMonster:",
category: 'eventHandling',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showMonster:",{aMonster:aMonster}, smalltalk.FightMenu)})},
args: ["aMonster"],
source: "showMonster: aMonster\x0a\x09self monsterWatcher showMonster: aMonster.",
messageSends: ["showMonster:", "monsterWatcher"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._turnWatcher())._sidePlaying();
return $1;
}, function($ctx1) {$ctx1.fill(self,"sidePlaying",{}, smalltalk.FightMenu)})},
args: [],
source: "sidePlaying\x0a\x09^self turnWatcher sidePlaying",
messageSends: ["sidePlaying", "turnWatcher"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "tileWatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"tileWatcher",{}, smalltalk.FightMenu)})},
args: [],
source: "tileWatcher\x0a\x09^self components at: 3",
messageSends: ["at:", "components"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "turnWatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(_st(self)._components())._at_((5));
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnWatcher",{}, smalltalk.FightMenu)})},
args: [],
source: "turnWatcher\x0a\x09^self components at: 5",
messageSends: ["at:", "components"],
referencedClasses: []
}),
smalltalk.FightMenu);

smalltalk.addMethod(
smalltalk.method({
selector: "unshowMonster",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unshowMonster",{}, smalltalk.FightMenu)})},
args: [],
source: "unshowMonster\x0a\x09self monsterWatcher unshowMonster",
messageSends: ["unshowMonster", "monsterWatcher"],
referencedClasses: []
}),
smalltalk.FightMenu);



smalltalk.addClass('MonsterWatcher', smalltalk.ActionMenuComponent, ['monster', 'box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.MonsterWatcher)})},
args: [],
source: "box\x0a\x09^box",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
category: 'accessing',
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.MonsterWatcher)})},
args: ["aBox"],
source: "box: aBox\x0a\x09box := aBox",
messageSends: [],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "emptyMonster",
category: 'accessing',
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
args: [],
source: "emptyMonster\x0a\x09|imageVide|\x0a\x09imageVide := NativeFunction constructor: 'Image'.\x0a\x09imageVide at: 'src' put:'ressources/images/interro.png'.\x0a\x09^Monster new\x0a\x09\x09image: imageVide;\x0a\x09\x09hp: 0;\x0a\x09\x09move: 0;\x0a\x09\x09range: 0;\x0a\x09\x09dices: 0;\x0a\x09\x09attack: 0;\x0a\x09\x09knockback: 0;\x0a\x09\x09special:'none'.",
messageSends: ["constructor:", "at:put:", "image:", "new", "hp:", "move:", "range:", "dices:", "attack:", "knockback:", "special:"],
referencedClasses: ["NativeFunction", "Monster"]
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster",
category: 'accessing',
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
args: [],
source: "monster\x0a\x09^monster ifNil: [self emptyMonster]",
messageSends: ["ifNil:", "emptyMonster"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:",
category: 'accessing',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"monster:",{aMonster:aMonster}, smalltalk.MonsterWatcher)})},
args: ["aMonster"],
source: "monster: aMonster\x0a\x09monster := aMonster.\x0a\x09self update",
messageSends: ["update"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("monsterWatcher");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.MonsterWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09self box: (html div \x0a\x09\x09class: 'monsterWatcher';\x0a\x09\x09yourself).\x0a\x09self update",
messageSends: ["box:", "class:", "div", "yourself", "update"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "showMonster:",
category: 'eventHandling',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"showMonster:",{aMonster:aMonster}, smalltalk.MonsterWatcher)})},
args: ["aMonster"],
source: "showMonster: aMonster\x0a\x09self monster: aMonster.\x0a\x09self update.",
messageSends: ["monster:", "update"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "unshowMonster",
category: 'eventHandling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"unshowMonster",{}, smalltalk.MonsterWatcher)})},
args: [],
source: "unshowMonster\x0a\x09self showMonster: nil.",
messageSends: ["showMonster:"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'displaying',
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
args: [],
source: "update\x0a        self box contents: [:html | \x0a\x09\x09html h4 with: 'selected monsters'.\x0a                html img: (self monster image at: 'src').\x0a                html table\x0a\x09\x09\x09class: 'tableStats';\x0a\x09\x09\x09with: [\x0a\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09html td with: [\x0a                        \x09\x09html tr with: 'hp : ',self monster hp.\x0a                        \x09\x09html tr with: 'move : ',self monster move.\x0a                        \x09\x09html tr with: 'range : ',self monster range.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09\x09html td with: [\x0a                       \x09\x09\x09html tr with: 'dices : ',self monster dices.\x0a                        \x09\x09html tr with: 'attack : ',self monster attack,' %'.\x0a                       \x09\x09\x09html tr with: 'knockBack : ',self monster knockback,' %'.\x0a\x09\x09\x09\x09]\x0a\x09\x09\x09].\x0a\x09\x09\x09html tr with: 'special : ',self monster special.\x0a\x09\x09].\x0a\x09\x09html h5 with: 'debug'.\x0a                html span with: 'state : ',self monster state class.\x0a        ].",
messageSends: ["contents:", "with:", "h4", "img:", "at:", "image", "monster", "class:", "table", ",", "hp", "tr", "move", "range", "td", "dices", "attack", "knockback", "special", "h5", "class", "state", "span", "box"],
referencedClasses: []
}),
smalltalk.MonsterWatcher);



smalltalk.addClass('TileWatcher', smalltalk.ActionMenuComponent, ['tile', 'box'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "box",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@box"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"box",{}, smalltalk.TileWatcher)})},
args: [],
source: "box\x0a\x09^box",
messageSends: [],
referencedClasses: []
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "box:",
category: 'accessing',
fn: function (aBox){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"box:",{aBox:aBox}, smalltalk.TileWatcher)})},
args: ["aBox"],
source: "box: aBox\x0a\x09box := aBox",
messageSends: [],
referencedClasses: []
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "emptyTile",
category: 'accessing',
fn: function (){
var self=this;
var imageVide;
return smalltalk.withContext(function($ctx1) { 
imageVide=_st((smalltalk.NativeFunction || NativeFunction))._constructor_("Image");
_st(imageVide)._at_put_("src","ressources/images/interro.png");
$1=_st(_st((smalltalk.Tile || Tile))._new())._image_(imageVide);
return $1;
}, function($ctx1) {$ctx1.fill(self,"emptyTile",{imageVide:imageVide}, smalltalk.TileWatcher)})},
args: [],
source: "emptyTile\x0a\x09|imageVide|\x0a\x09imageVide := NativeFunction constructor: 'Image'.\x0a\x09imageVide at: 'src' put:'ressources/images/interro.png'.\x0a\x09^Tile new\x0a\x09\x09image: imageVide.",
messageSends: ["constructor:", "at:put:", "image:", "new"],
referencedClasses: ["NativeFunction", "Tile"]
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(html)._div();
_st($1)._class_("tileWatcher");
$2=_st($1)._yourself();
_st(self)._box_($2);
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.TileWatcher)})},
args: ["html"],
source: "renderOn: html\x0a\x09self box: (html div \x0a\x09\x09class: 'tileWatcher';\x0a\x09\x09yourself).\x0a\x09self update",
messageSends: ["box:", "class:", "div", "yourself", "update"],
referencedClasses: []
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "tile",
category: 'accessing',
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
args: [],
source: "tile\x0a\x09^tile ifNil: [self emptyTile]",
messageSends: ["ifNil:", "emptyTile"],
referencedClasses: []
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "tile:",
category: 'accessing',
fn: function (aTile){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"tile:",{aTile:aTile}, smalltalk.TileWatcher)})},
args: ["aTile"],
source: "tile: aTile\x0a\x09tile := aTile",
messageSends: [],
referencedClasses: []
}),
smalltalk.TileWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'displaying',
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
args: [],
source: "update\x0a        self box contents: [:html | \x0a\x09\x09html h4 with: 'Tile'.\x0a                html img: (self tile image at: 'src').\x0a\x09\x09html br.\x0a\x09\x09html span with: 'isWall : ' , self tile isWall , ' - monster : ' , (self tile cell ifNotNil: [self tile cell hasMonster] ifNil: ['empty']).\x0a        ].",
messageSends: ["contents:", "with:", "h4", "img:", "at:", "image", "tile", "br", ",", "ifNotNil:ifNil:", "hasMonster", "cell", "isWall", "span", "box"],
referencedClasses: []
}),
smalltalk.TileWatcher);



smalltalk.addClass('TurnWatcher', smalltalk.ActionMenuComponent, ['turnNumber', 'turnDisplay', 'sidePlaying'], 'Easnoth-Fight-Menu');
smalltalk.addMethod(
smalltalk.method({
selector: "activateTwoMonsters",
category: 'game-logic',
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
args: [],
source: "activateTwoMonsters\x0a\x09|armyPlaying|\x0a\x0a\x09armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.\x0a\x0a\x09(armyPlaying size = 0) ifTrue: [\x0a\x09\x09window alert: 'Someone just won. Guess who ? winner : ' , self sidePlaying negated\x0a\x09] ifFalse: [\x0a\x09\x09(armyPlaying size > 2) ifTrue: [\x0a\x09\x09\x09self pickMonster\x0a\x09\x09] ifFalse: [\x0a\x09\x09\x09armyPlaying collect: [:monster | monster changeState: Active new].\x0a\x09\x09\x09self actionMenu map showActiveMonsters.\x0a\x09\x09\x09self actionMenu map update\x0a\x09\x09]\x0a\x09]",
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "ifTrue:ifFalse:", "alert:", ",", "negated", "pickMonster", "collect:", "changeState:", "new", "showActiveMonsters", "update", ">", "size", "="],
referencedClasses: ["Active"]
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "endPick",
category: 'game-logic',
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
args: [],
source: "endPick\x0a\x09|armyPlaying monsterActivated|\x0a\x0a\x09\x22activate 1 monster randomly\x22\x0a\x09armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.\x0a\x09armyPlaying collect: [ :monster | \x0a\x09\x09(monster state isKindOf: Active) ifTrue: [monsterActivated := monster]].\x0a\x0a\x09(armyPlaying size = 1) ifFalse: [\x0a\x09\x09armyPlaying remove: monsterActivated.\x0a\x09\x09armyPlaying atRandom changeState: Active new\x0a\x09].\x0a\x0a\x09self actionMenu map showActiveMonsters.\x0a\x09self actionMenu map update",
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "collect:", "ifTrue:", "isKindOf:", "state", "ifFalse:", "remove:", "changeState:", "new", "atRandom", "=", "size", "showActiveMonsters", "update"],
referencedClasses: ["Active"]
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "firstTurn",
category: 'game-logic',
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
args: [],
source: "firstTurn\x0a\x09self sidePlaying ifNil: [\x0a\x09\x09self turnNumber: 1.\x0a                self sidePlaying: 2 * 2 atRandom - 3.\x0a                self activateTwoMonsters.\x0a\x09].",
messageSends: ["ifNil:", "turnNumber:", "sidePlaying:", "-", "*", "atRandom", "activateTwoMonsters", "sidePlaying"],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "increaseTurnNumber",
category: 'game-logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._update();
return self}, function($ctx1) {$ctx1.fill(self,"increaseTurnNumber",{}, smalltalk.TurnWatcher)})},
args: [],
source: "increaseTurnNumber\x0a\x09turnNumber := self turnNumber + 1.\x0a\x09self update",
messageSends: ["+", "turnNumber", "update"],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.TurnWatcher)})},
args: [],
source: "initialize\x0a\x09self turnNumber: 1.",
messageSends: ["turnNumber:"],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "nextTurn",
category: 'game-logic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._increaseTurnNumber();
_st(_st(_st(_st(self)._actionMenu())._map())._monsters())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(self)._activateTwoMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"nextTurn",{}, smalltalk.TurnWatcher)})},
args: [],
source: "nextTurn\x0a\x09self sidePlaying: self sidePlaying negated.\x0a\x09self increaseTurnNumber.\x0a\x09self actionMenu map monsters do:[:each | each changeState: Inactive new].\x0a\x09self activateTwoMonsters.",
messageSends: ["sidePlaying:", "negated", "sidePlaying", "increaseTurnNumber", "do:", "changeState:", "new", "monsters", "map", "actionMenu", "activateTwoMonsters"],
referencedClasses: ["Inactive"]
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "pickMonster",
category: 'game-logic',
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
args: [],
source: "pickMonster\x0a\x09|armyPlaying|\x0a\x09\x0a\x09\x22choose a monster to activate\x22\x0a\x09armyPlaying := self actionMenu map monstersFromSide: self sidePlaying.\x0a\x09armyPlaying collect: [ :monster | monster changeState: ToPick new].\x0a\x0a\x09self actionMenu map showActiveMonsters.\x0a\x09self actionMenu map update",
messageSends: ["monstersFromSide:", "sidePlaying", "map", "actionMenu", "collect:", "changeState:", "new", "showActiveMonsters", "update"],
referencedClasses: ["ToPick"]
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'displaying',
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
args: ["html"],
source: "renderOn: html\x0a\x09html div class: 'stuff'; with: [\x0a\x09\x09self turnDisplay: html h5.\x0a                html button with: 'next turn (= enter)';\x0a                        onClick: [self nextTurn].\x0a\x09\x09'body' asJQuery keyup:[:event | (event keyCode = 13) ifTrue: [self nextTurn]].\x0a                html button with: 'class browser';\x0a                        onClick: [Browser open].\x0a\x09].\x0a\x09self update.",
messageSends: ["class:", "div", "with:", "turnDisplay:", "h5", "button", "onClick:", "nextTurn", "keyup:", "ifTrue:", "=", "keyCode", "asJQuery", "open", "update"],
referencedClasses: ["Browser"]
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@sidePlaying"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"sidePlaying",{}, smalltalk.TurnWatcher)})},
args: [],
source: "sidePlaying\x0a\x09^sidePlaying",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "sidePlaying:",
category: 'accessing',
fn: function (aSide){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"sidePlaying:",{aSide:aSide}, smalltalk.TurnWatcher)})},
args: ["aSide"],
source: "sidePlaying: aSide\x0a\x09sidePlaying := aSide",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnDisplay",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@turnDisplay"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnDisplay",{}, smalltalk.TurnWatcher)})},
args: [],
source: "turnDisplay\x0a\x09^turnDisplay",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnDisplay:",
category: 'accessing',
fn: function (aHTML){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"turnDisplay:",{aHTML:aHTML}, smalltalk.TurnWatcher)})},
args: ["aHTML"],
source: "turnDisplay: aHTML\x0a\x09turnDisplay := aHTML",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnNumber",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@turnNumber"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"turnNumber",{}, smalltalk.TurnWatcher)})},
args: [],
source: "turnNumber\x0a\x09^turnNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "turnNumber:",
category: 'accessing',
fn: function (anInt){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"turnNumber:",{anInt:anInt}, smalltalk.TurnWatcher)})},
args: ["anInt"],
source: "turnNumber: anInt\x0a\x09turnNumber := anInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.TurnWatcher);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'displaying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"update",{}, smalltalk.TurnWatcher)})},
args: [],
source: "update\x0a\x09self turnDisplay contents: 'turn number : ', self turnNumber.",
messageSends: ["contents:", ",", "turnNumber", "turnDisplay"],
referencedClasses: []
}),
smalltalk.TurnWatcher);



smalltalk.addMethod(
smalltalk.method({
selector: "imagesToPreload",
category: '*Easnoth-Fight-Menu',
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
args: [],
source: "imagesToPreload\x0a\x09^Dictionary new\x0a\x09\x09at:'red' put:'overtiles/red';\x0a\x09\x09at:'green' put:'overtiles/green';\x0a\x09\x09at:'white' put:'overtiles/white';\x0a\x09\x09at:'interro' put:'interro';\x0a\x09\x09yourself",
messageSends: ["at:put:", "new", "yourself"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Map);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeActionMenu",
category: '*Easnoth-Fight-Menu',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st((smalltalk.FightMenu || FightMenu))._newFor_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeActionMenu",{}, smalltalk.Map)})},
args: [],
source: "initializeActionMenu\x0a\x09^FightMenu newFor: self",
messageSends: ["newFor:"],
referencedClasses: ["FightMenu"]
}),
smalltalk.Map);
