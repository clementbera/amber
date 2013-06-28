smalltalk.addPackage('Easnoth-GameStates');
smalltalk.addClass('CWState', smalltalk.Object, [], 'Easnoth-GameStates');

smalltalk.CWState.klass.iVarNames = ['default'];
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
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.CWState.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.CWState.klass);


smalltalk.addClass('CWCellState', smalltalk.CWState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "darken:",
fn: function (cell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"darken:",{cell:cell},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"lighten:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: []}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subClassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWCellState)})},
messageSends: ["subClassResponsbility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
fn: function (cell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(cell)._root())._lighten();
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext},smalltalk.CWCellState)})},
messageSends: ["lighten", "root"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["removeGameOverTile"]}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWCellState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWCellState);



smalltalk.addClass('CWFree', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addGreenSelector();
_st(aCell)._changeState_($CWFreeSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: ["addGreenSelector", "changeState:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._parent_(aCell);
_st(aCell)._monster_(aMonster);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFree)})},
messageSends: ["parent:", "monster:", "changeState:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWFree)})},
messageSends: []}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(gameContext)._shouldRestartTurn();
if(smalltalk.assert($1)){
$2=_st(gameContext)._restartTurn();
return $2;
};
_st(_st(aCell)._root())._showActiveMonsters();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFree)})},
messageSends: ["ifTrue:", "restartTurn", "shouldRestartTurn", "showActiveMonsters", "root"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: ["error:"]}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFree)})},
messageSends: []}),
smalltalk.CWFree);



smalltalk.addClass('CWFreeSelected', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *green* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "darken:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._gameOverTile())._darken();
return self}, function($ctx1) {$ctx1.fill(self,"darken:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["darken", "gameOverTile"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWFreeSelected)})},
messageSends: []}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWFreeSelected)})},
messageSends: []}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._gameOverTile())._lighten();
return self}, function($ctx1) {$ctx1.fill(self,"lighten:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["lighten", "gameOverTile"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._moveTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
messageSends: ["moveTo:inContext:", "currentMonster"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
fn: function (cell,gameContext){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._mouseMove_context_.apply(_st(self), [cell,gameContext]);
path=_st(_st(gameContext)._currentMonster())._pathTo_(cell);
_st(path)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(c)._darken();
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext,path:path},smalltalk.CWFreeSelected)})},
messageSends: ["mouseMove:context:", "pathTo:", "currentMonster", "do:", "darken"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["removeSelector:", "changeState:"]}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
messageSends: ["error:"]}),
smalltalk.CWFreeSelected);



smalltalk.addClass('CWHasMonster', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
function $CWHasMonsterSelected(){return smalltalk.CWHasMonsterSelected||(typeof CWHasMonsterSelected=="undefined"?nil:CWHasMonsterSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addRedSelector();
_st(aCell)._changeState_($CWHasMonsterSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["addRedSelector", "changeState:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster on a cell that has already one");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonster)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonster)})},
messageSends: ["not", "=", "side"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._selectInContext_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonster)})},
messageSends: ["selectInContext:", "monster"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._monster_(nil);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["monster:", "changeState:"]}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._showActiveMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
messageSends: ["showActiveMonster", "monster"]}),
smalltalk.CWHasMonster);



smalltalk.addClass('CWHasMonsterSelected', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a monster and a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonsterSelected)})},
messageSends: ["not", "=", "side"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._attackTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
messageSends: ["attackTo:inContext:", "currentMonster"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
fn: function (cell,gameContext){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._mouseMove_context_.apply(_st(self), [cell,gameContext]);
_st(_st(_st(gameContext)._currentMonster())._cellToMoveBeforeAttack_context_(cell,gameContext))._mouseMove_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext,path:path},smalltalk.CWHasMonsterSelected)})},
messageSends: ["mouseMove:context:", "mouseMove:", "cellToMoveBeforeAttack:context:", "currentMonster"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
fn: function (aCell){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["removeSelector:", "changeState:"]}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
messageSends: ["error:"]}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot activate a non inactive monster");
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["error:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
_st(aMonster)._currentMove_((0));
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["changeState:", "currentMove:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: []}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonsterState)})},
messageSends: []}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._moveTo_inContext_callback_(aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["moveTo:inContext:callback:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot prepare a monster for picking if he is not Inactive");
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["error:"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterState)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._addWhiteSelector();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
messageSends: ["addWhiteSelector", "parent"]}),
smalltalk.CWMonsterState);



smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
function $CWHasAttacked(){return smalltalk.CWHasAttacked||(typeof CWHasAttacked=="undefined"?nil:CWHasAttacked)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWHasAttacked());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: ["changeState:"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
function $CWHasMoved(){return smalltalk.CWHasMoved||(typeof CWHasMoved=="undefined"?nil:CWHasMoved)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aMonster)._currentMove()).__eq((0));
if(smalltalk.assert($1)){
_st(aMonster)._changeState_($CWHasMoved());
};
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: []}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aMonster)._currentMove()).__eq(_st(aMonster)._move()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed:",{aMonster:aMonster},smalltalk.CWActive)})},
messageSends: ["not", "=", "move", "currentMove"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
var toMoveCell;
return smalltalk.withContext(function($ctx1) { 
toMoveCell=_st(aMonster)._cellToMoveBeforeAttack_context_(aCell,gameContext);
_st(aMonster)._moveTo_inContext_callback_(toMoveCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMonster)._attack_inContext_(_st(aCell)._monster(),gameContext);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext,toMoveCell:toMoveCell},smalltalk.CWActive)})},
messageSends: ["cellToMoveBeforeAttack:context:", "moveTo:inContext:callback:", "attack:inContext:", "monster"]}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectActionCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWActive)})},
messageSends: ["selectActionCells", "currentMonster:"]}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: ["error:"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aMonster)._currentMove()).__eq((0));
if(smalltalk.assert($1)){
_st(aMonster)._changeState_($CWInactive());
};
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
messageSends: []}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasAttacked)})},
messageSends: ["error:"]}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectMovableCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasAttacked)})},
messageSends: ["selectMovableCells", "currentMonster:"]}),
smalltalk.CWHasAttacked);



smalltalk.addClass('CWHasMoved', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
messageSends: ["changeState:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
messageSends: ["error:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
var col;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
col=_st(aMonster)._selectAttackableCells();
_st(col)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster,col:col},smalltalk.CWHasMoved)})},
messageSends: ["selectAttackableCells", "ifEmpty:", "announce:", "new"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._attack_inContext_(_st(aCell)._monster(),gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["attack:inContext:", "monster"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["error:"]}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectAttackableCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasMoved)})},
messageSends: ["selectAttackableCells", "currentMonster:"]}),
smalltalk.CWHasMoved);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
fn: function (aMonster){
var self=this;
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._currentMove_(_st(aMonster)._move());
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["changeState:", "currentMove:", "move"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["announce:", "new"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: []}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWInactive)})},
messageSends: []}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["error:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
fn: function (aMonster){
var self=this;
function $CWToPick(){return smalltalk.CWToPick||(typeof CWToPick=="undefined"?nil:CWToPick)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWToPick());
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: ["changeState:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(gameContext)._shouldRestartTurn();
if(smalltalk.assert($1)){
$2=_st(gameContext)._restartTurn();
return $2;
};
_st(_st(aMonster)._root())._showActiveMonsters();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWInactive)})},
messageSends: ["ifTrue:", "restartTurn", "shouldRestartTurn", "showActiveMonsters", "root", "currentMonster:"]}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWInactive)})},
messageSends: []}),
smalltalk.CWInactive);



smalltalk.addClass('CWToPick', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["error:"]}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._removeSelection();
_st(_st(aMonster)._root())._desactivateMonsters();
_st(aMonster)._activate();
_st(aMonster)._selectInContext_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
messageSends: ["removeSelection", "root", "desactivateMonsters", "activate", "selectInContext:"]}),
smalltalk.CWToPick);



