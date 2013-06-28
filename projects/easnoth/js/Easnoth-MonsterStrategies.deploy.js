smalltalk.addPackage('Easnoth-MonsterStrategies');
smalltalk.addClass('CWStrategy', smalltalk.Object, [], 'Easnoth-MonsterStrategies');

smalltalk.CWStrategy.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@default"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@default"]=_st(self)._new();
$1=self["@default"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWStrategy.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWStrategy.klass);


smalltalk.addClass('CWMonsterStrategy', smalltalk.CWStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateUI:",{aMonster:aMonster},smalltalk.CWMonsterStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterStrategy);



smalltalk.addClass('CWHerosStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitHeros_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWHerosStrategy)})},
messageSends: ["visitHeros:"]}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "-heros";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWHerosStrategy)})},
messageSends: []}),
smalltalk.CWHerosStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI:",
fn: function (heros){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(heros)._side())._negative();
if(smalltalk.assert($1)){
_st(heros)._reverseDisplay_cood_(heros,_st((87)).__at((28)));
} else {
_st(heros)._display_cood_(heros,_st((15)).__at((28)));
};
return self}, function($ctx1) {$ctx1.fill(self,"updateUI:",{heros:heros},smalltalk.CWHerosStrategy)})},
messageSends: ["ifTrue:ifFalse:", "reverseDisplay:cood:", "@", "display:cood:", "negative", "side"]}),
smalltalk.CWHerosStrategy);



smalltalk.addClass('CWUnitStrategy', smalltalk.CWMonsterStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "accept:for:",
fn: function (aVisitor,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aVisitor)._visitUnit_(aMonster);
return $1;
}, function($ctx1) {$ctx1.fill(self,"accept:for:",{aVisitor:aVisitor,aMonster:aMonster},smalltalk.CWUnitStrategy)})},
messageSends: ["visitUnit:"]}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHP",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(4);
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultHP",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isHeros",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isHeros",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWUnitStrategy)})},
messageSends: []}),
smalltalk.CWUnitStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "updateUI:",
fn: function (aUnit){
var self=this;
var xArray,yArray;
return smalltalk.withContext(function($ctx1) { 
var $1;
xArray=[(9), (37), (-11), (17)];
yArray=[(15), (23), (26), (33)];
_st(_st((1))._to_(_st(aUnit)._hp()))._do_((function(i){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(aUnit)._side())._negative();
if(smalltalk.assert($1)){
return _st(aUnit)._reverseDisplay_cood_(aUnit,_st(_st((72)).__plus(_st(xArray)._at_(i))).__at(_st(yArray)._at_(i)));
} else {
return _st(aUnit)._display_cood_(aUnit,_st(_st(xArray)._at_(i)).__at(_st(yArray)._at_(i)));
};
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"updateUI:",{aUnit:aUnit,xArray:xArray,yArray:yArray},smalltalk.CWUnitStrategy)})},
messageSends: ["do:", "ifTrue:ifFalse:", "reverseDisplay:cood:", "@", "at:", "+", "display:cood:", "negative", "side", "to:", "hp"]}),
smalltalk.CWUnitStrategy);



smalltalk.addClass('CWMonsterTypeStrategy', smalltalk.CWStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWMonsterTypeStrategy)})},
messageSends: []}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aMonster,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aMonster:aMonster,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByCavalry:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,_st(_st(self)._bonusVSCavalry())._negated());
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByCavalry:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSCavalry"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByRange:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,_st(_st(self)._bonusVSRange())._negated());
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByRange:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSRange"]}),
smalltalk.CWMonsterTypeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:isAttackedByTroop:inContext:",
fn: function (targetMonster,aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aMonster)._attack_inContext_bonus_(targetMonster,gameContext,_st(_st(self)._bonusVSTroop())._negated());
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:isAttackedByTroop:inContext:",{targetMonster:targetMonster,aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterTypeStrategy)})},
messageSends: ["attack:inContext:bonus:", "negated", "bonusVSTroop"]}),
smalltalk.CWMonsterTypeStrategy);



smalltalk.addClass('CWCavalryStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "bonusVS:",
fn: function (target){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(target)._bonusVSCavalry())._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},smalltalk.CWCavalryStrategy)})},
messageSends: ["negated", "bonusVSCavalry"]}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWCavalryStrategy)})},
messageSends: []}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWCavalryStrategy)})},
messageSends: []}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWCavalryStrategy)})},
messageSends: []}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "cavalry";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWCavalryStrategy)})},
messageSends: []}),
smalltalk.CWCavalryStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aCavalry,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByCavalry_inContext_(aCavalry,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aCavalry:aCavalry,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWCavalryStrategy)})},
messageSends: ["isAttackedByCavalry:inContext:"]}),
smalltalk.CWCavalryStrategy);



smalltalk.addClass('CWRangeStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "bonusVS:",
fn: function (target){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(target)._bonusVSRange())._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},smalltalk.CWRangeStrategy)})},
messageSends: ["negated", "bonusVSRange"]}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "isRanged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isRanged",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "range";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWRangeStrategy)})},
messageSends: []}),
smalltalk.CWRangeStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aRange,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByRange_inContext_(aRange,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aRange:aRange,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWRangeStrategy)})},
messageSends: ["isAttackedByRange:inContext:"]}),
smalltalk.CWRangeStrategy);



smalltalk.addClass('CWTroopStrategy', smalltalk.CWMonsterTypeStrategy, [], 'Easnoth-MonsterStrategies');
smalltalk.addMethod(
smalltalk.method({
selector: "bonusVS:",
fn: function (target){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(target)._bonusVSTroop())._negated();
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVS:",{target:target},smalltalk.CWTroopStrategy)})},
messageSends: ["negated", "bonusVSTroop"]}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSCavalry",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSCavalry",{},smalltalk.CWTroopStrategy)})},
messageSends: []}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSRange",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(-1);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSRange",{},smalltalk.CWTroopStrategy)})},
messageSends: []}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "bonusVSTroop",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0);
return $1;
}, function($ctx1) {$ctx1.fill(self,"bonusVSTroop",{},smalltalk.CWTroopStrategy)})},
messageSends: []}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "key",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "troop";
}, function($ctx1) {$ctx1.fill(self,"key",{},smalltalk.CWTroopStrategy)})},
messageSends: []}),
smalltalk.CWTroopStrategy);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackNeighbour:inContext:",
fn: function (aTroop,anotherMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherMonster)._isAttackedByTroop_inContext_(aTroop,gameContext);
return $1;
}, function($ctx1) {$ctx1.fill(self,"monster:attackNeighbour:inContext:",{aTroop:aTroop,anotherMonster:anotherMonster,gameContext:gameContext},smalltalk.CWTroopStrategy)})},
messageSends: ["isAttackedByTroop:inContext:"]}),
smalltalk.CWTroopStrategy);



