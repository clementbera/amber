smalltalk.addPackage('Easnoth-GameStates');
smalltalk.addClass('CWState', smalltalk.Object, [], 'Easnoth-GameStates');

smalltalk.CWState.klass.iVarNames = ['default'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'instance creation',
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
args: [],
source: "default\x0a\x09^ default ifNil: [ default := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.CWState.klass);


smalltalk.addClass('CWCellState', smalltalk.CWState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWCellState)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
category: 'cell state API',
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWCellState)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "darken:",
category: 'cell state API',
fn: function (cell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"darken:",{cell:cell},smalltalk.CWCellState)})},
args: ["cell"],
source: "darken: cell\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
category: 'cell state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWCellState)})},
args: [],
source: "isFree\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
category: 'cell state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWCellState)})},
args: [],
source: "isFreeSelected\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"lighten:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "lighten: aCell\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subClassResponsbility();
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWCellState)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09self subClassResponsbility",
messageSends: ["subClassResponsbility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
category: 'cell state API',
fn: function (cell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(cell)._root())._lighten();
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext},smalltalk.CWCellState)})},
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09cell root lighten.",
messageSends: ["lighten", "root"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._removeGameOverTile();
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09aCell removeGameOverTile",
messageSends: ["removeGameOverTile"],
referencedClasses: []
}),
smalltalk.CWCellState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWCellState)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWCellState);



smalltalk.addClass('CWFree', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.CWFree.comment="I am the state of a cell that has no monsters on it and that has no game selector on it."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFreeSelected(){return smalltalk.CWFreeSelected||(typeof CWFreeSelected=="undefined"?nil:CWFreeSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addGreenSelector();
_st(aCell)._changeState_($CWFreeSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addGreenSelector.\x0a\x09aCell changeState: CWFreeSelected",
messageSends: ["addGreenSelector", "changeState:"],
referencedClasses: ["CWFreeSelected"]
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._parent_(aCell);
_st(aCell)._monster_(aMonster);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFree)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09aMonster parent: aCell.\x0a\x09aCell monster: aMonster.\x0a\x09aCell changeState: CWHasMonster",
messageSends: ["parent:", "monster:", "changeState:"],
referencedClasses: ["CWHasMonster"]
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
category: 'cell state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWFree)})},
args: [],
source: "isFree\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
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
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].\x0a\x09aCell root showActiveMonsters",
messageSends: ["ifTrue:", "restartTurn", "shouldRestartTurn", "showActiveMonsters", "root"],
referencedClasses: []
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFree);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFree)})},
args: ["aCell"],
source: "showActiveMonster: aCell",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFree);



smalltalk.addClass('CWFreeSelected', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.CWFreeSelected.comment="I am the state of a cell that has no monsters on it, that has a game selector on it.\x0aThe cell cannot be a wall."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *green* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *green* selector'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWFreeSelected)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a *green* selector (case not specified in state machine)'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "darken:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._gameOverTile())._darken();
return self}, function($ctx1) {$ctx1.fill(self,"darken:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "darken: aCell\x0a\x09aCell gameOverTile darken",
messageSends: ["darken", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "isFree",
category: 'cell state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFree",{},smalltalk.CWFreeSelected)})},
args: [],
source: "isFree\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "isFreeSelected",
category: 'cell state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isFreeSelected",{},smalltalk.CWFreeSelected)})},
args: [],
source: "isFreeSelected\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "lighten:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._gameOverTile())._lighten();
return self}, function($ctx1) {$ctx1.fill(self,"lighten:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "lighten: aCell\x0a\x09aCell gameOverTile lighten",
messageSends: ["lighten", "gameOverTile"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._moveTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWFreeSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster moveTo: aCell inContext: gameContext",
messageSends: ["moveTo:inContext:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
category: 'cell state API',
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
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09| path |\x0a\x09super mouseMove: cell context: gameContext.\x0a\x09path := gameContext currentMonster pathTo: cell.\x0a\x09path do: [ :c | c darken ].",
messageSends: ["mouseMove:context:", "pathTo:", "currentMonster", "do:", "darken"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has no monster on it");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09\x09self error: 'cannot remove a monster from a cell that has no monster on it'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWFree",
messageSends: ["removeSelector:", "changeState:"],
referencedClasses: ["CWFree"]
}),
smalltalk.CWFreeSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWFreeSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *green* selector and has no monster on it. (not specified in the state machine)'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWFreeSelected);



smalltalk.addClass('CWHasMonster', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.CWHasMonster.comment="I am the state of a cell that has some monsters on it and that has no game selector on it."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonsterSelected(){return smalltalk.CWHasMonsterSelected||(typeof CWHasMonsterSelected=="undefined"?nil:CWHasMonsterSelected)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._addRedSelector();
_st(aCell)._changeState_($CWHasMonsterSelected());
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09aCell addRedSelector.\x0a\x09aCell changeState: CWHasMonsterSelected",
messageSends: ["addRedSelector", "changeState:"],
referencedClasses: ["CWHasMonsterSelected"]
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster on a cell that has already one");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonster)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster on a cell that has already one'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
category: 'cell state API',
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonster)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09^ (aCell side = side) not",
messageSends: ["not", "=", "side"],
referencedClasses: []
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._selectInContext_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonster)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09aCell monster selectInContext: gameContext",
messageSends: ["selectInContext:", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWFree(){return smalltalk.CWFree||(typeof CWFree=="undefined"?nil:CWFree)}
return smalltalk.withContext(function($ctx1) { 
_st(aCell)._monster_(nil);
_st(aCell)._changeState_($CWFree());
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09aCell monster: nil.\x0a\x09aCell changeState: CWFree",
messageSends: ["monster:", "changeState:"],
referencedClasses: ["CWFree"]
}),
smalltalk.CWHasMonster);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aCell)._monster())._showActiveMonster();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonster)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09aCell monster showActiveMonster.",
messageSends: ["showActiveMonster", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMonster);



smalltalk.addClass('CWHasMonsterSelected', smalltalk.CWCellState, [], 'Easnoth-GameStates');
smalltalk.CWHasMonsterSelected.comment="I am the state of a cell that has a monsters on it and a game selector.\x0aThe monster has to be on the opposite side of the current playing monster."
smalltalk.addMethod(
smalltalk.method({
selector: "addSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a selector to a cell that has already a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"addSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "addSelector: aCell\x0a\x09self error: 'cannot add a selector to a cell that has already a *red* selector'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:addMonster:",
category: 'cell state API',
fn: function (aCell,aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot add a monster to a cell that has already a monster and a *red* selector");
return self}, function($ctx1) {$ctx1.fill(self,"cell:addMonster:",{aCell:aCell,aMonster:aMonster},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "aMonster"],
source: "cell: aCell addMonster: aMonster\x0a\x09self error: 'cannot add a monster to a cell that has already a monster and a *red* selector'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "cell:canBeAttackedBy:",
category: 'cell state API',
fn: function (aCell,side){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aCell)._side()).__eq(side))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"cell:canBeAttackedBy:",{aCell:aCell,side:side},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "side"],
source: "cell: aCell canBeAttackedBy: side\x0a\x09\x22This method should be removed. but seems to have problem then with move + attack. Dont know why.\x22\x0a\x09^ (aCell side = side) not",
messageSends: ["not", "=", "side"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseClick:context:",
category: 'cell state API',
fn: function (aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(gameContext)._currentMonster())._attackTo_inContext_(aCell,gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseClick:context:",{aCell:aCell,gameContext:gameContext},smalltalk.CWHasMonsterSelected)})},
args: ["aCell", "gameContext"],
source: "mouseClick: aCell context: gameContext\x0a\x09gameContext currentMonster attackTo: aCell inContext: gameContext",
messageSends: ["attackTo:inContext:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMove:context:",
category: 'cell state API',
fn: function (cell,gameContext){
var self=this;
var path;
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._mouseMove_context_.apply(_st(self), [cell,gameContext]);
_st(_st(_st(gameContext)._currentMonster())._cellToMoveBeforeAttack_context_(cell,gameContext))._mouseMove_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"mouseMove:context:",{cell:cell,gameContext:gameContext,path:path},smalltalk.CWHasMonsterSelected)})},
args: ["cell", "gameContext"],
source: "mouseMove: cell context: gameContext\x0a\x09| path |\x0a\x09super mouseMove: cell context: gameContext.\x0a\x09(gameContext currentMonster cellToMoveBeforeAttack: cell context: gameContext) mouseMove: gameContext.",
messageSends: ["mouseMove:context:", "mouseMove:", "cellToMoveBeforeAttack:context:", "currentMonster"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"removeMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "removeMonster: aCell\x0a\x09self error: 'cannot remove a monster from a cell that has already a *red* selector. (case not specified in state machine)'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "removeSelector:",
category: 'cell state API',
fn: function (aCell){
var self=this;
function $CWHasMonster(){return smalltalk.CWHasMonster||(typeof CWHasMonster=="undefined"?nil:CWHasMonster)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.CWCellState.fn.prototype._removeSelector_.apply(_st(self), [aCell]);
_st(aCell)._changeState_($CWHasMonster());
return self}, function($ctx1) {$ctx1.fill(self,"removeSelector:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "removeSelector: aCell\x0a\x09super removeSelector: aCell.\x0a\x09aCell changeState: CWHasMonster",
messageSends: ["removeSelector:", "changeState:"],
referencedClasses: ["CWHasMonster"]
}),
smalltalk.CWHasMonsterSelected);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'cell state API',
fn: function (aCell){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)");
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aCell:aCell},smalltalk.CWHasMonsterSelected)})},
args: ["aCell"],
source: "showActiveMonster: aCell\x0a\x09self error: 'try to show the monster whereas this cell has already a *red* selector and a monster from the other player. (not specified in the state machine)'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMonsterSelected);



smalltalk.addClass('CWMonsterState', smalltalk.CWState, [], 'Easnoth-GameStates');
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot activate a non inactive monster");
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "activate: aMonster\x0a\x09self error: 'cannot activate a non inactive monster'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
_st(aMonster)._currentMove_((0));
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09aMonster changeState: CWInactive.\x0a\x09aMonster currentMove: 0",
messageSends: ["changeState:", "currentMove:"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "hasPlayed: aMonster\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWMonsterState)})},
args: [],
source: "isInactive\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._moveTo_inContext_callback_(aCell,gameContext,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09aMonster moveTo: aCell inContext: gameContext callback: []",
messageSends: ["moveTo:inContext:callback:"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("cannot prepare a monster for picking if he is not Inactive");
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09self error: 'cannot prepare a monster for picking if he is not Inactive'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWMonsterState)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.CWMonsterState);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._parent())._addWhiteSelector();
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWMonsterState)})},
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09aMonster parent addWhiteSelector",
messageSends: ["addWhiteSelector", "parent"],
referencedClasses: []
}),
smalltalk.CWMonsterState);



smalltalk.addClass('CWActive', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.CWActive.comment="Monster can move and attack"
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
function $CWHasAttacked(){return smalltalk.CWHasAttacked||(typeof CWHasAttacked=="undefined"?nil:CWHasAttacked)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWHasAttacked());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWActive)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWHasAttacked",
messageSends: ["changeState:"],
referencedClasses: ["CWHasAttacked"]
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
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
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWHasMoved ]",
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"],
referencedClasses: ["CWHasMoved"]
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWActive)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "hasPlayed:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aMonster)._currentMove()).__eq(_st(aMonster)._move()))._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasPlayed:",{aMonster:aMonster},smalltalk.CWActive)})},
args: ["aMonster"],
source: "hasPlayed: aMonster\x0a\x09^ (aMonster currentMove = aMonster move) not",
messageSends: ["not", "=", "move", "currentMove"],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
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
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09| toMoveCell |\x0a\x09toMoveCell := aMonster cellToMoveBeforeAttack: aCell context: gameContext.\x0a\x09aMonster moveTo: toMoveCell inContext: gameContext callback: [\x0a\x09\x09aMonster attack: aCell monster inContext: gameContext ]",
messageSends: ["cellToMoveBeforeAttack:context:", "moveTo:inContext:callback:", "attack:inContext:", "monster"],
referencedClasses: []
}),
smalltalk.CWActive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectActionCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWActive)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectActionCells.\x0a\x09gameContext currentMonster: aMonster.",
messageSends: ["selectActionCells", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWActive);



smalltalk.addClass('CWHasAttacked', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.CWHasAttacked.comment="Monster can only move"
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster attacked whereas he had already attacked previously in his turn. cannot happen'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
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
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09aMonster currentMove = 0 \x0a\x09\x09ifTrue: [ aMonster changeState: CWInactive ]",
messageSends: ["ifTrue:", "changeState:", "=", "currentMove"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWHasAttacked)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09\x22do nothing for now\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasAttacked)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he has already attacked previously in this turn. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasAttacked);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectMovableCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasAttacked)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectMovableCells.\x0a\x09gameContext currentMonster: aMonster",
messageSends: ["selectMovableCells", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWHasAttacked);



smalltalk.addClass('CWHasMoved', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.CWHasMoved.comment="The monster has moved its full moved there. (currentMove = 0)"
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
function $CWInactive(){return smalltalk.CWInactive||(typeof CWInactive=="undefined"?nil:CWInactive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWInactive());
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09aMonster changeState: CWInactive",
messageSends: ["changeState:"],
referencedClasses: ["CWInactive"]
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWHasMoved)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster moved whereas he had already moved its full move previously in his turn. cannot happen'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state public API',
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
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09| col |\x0a\x09col := \x09aMonster selectAttackableCells.\x0a\x09col ifEmpty: [ aMonster announce: CWNextTurnEvent new ]",
messageSends: ["selectAttackableCells", "ifEmpty:", "announce:", "new"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._attack_inContext_(_st(aCell)._monster(),gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09aMonster attack: aCell monster inContext: gameContext",
messageSends: ["attack:inContext:", "monster"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he has already moved his full move stat. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._selectAttackableCells();
_st(gameContext)._currentMonster_(aMonster);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWHasMoved)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster selectAttackableCells.\x0a\x09gameContext currentMonster: aMonster",
messageSends: ["selectAttackableCells", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWHasMoved);



smalltalk.addClass('CWInactive', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.CWInactive.comment="Monster cannot do anything :)"
smalltalk.addMethod(
smalltalk.method({
selector: "activate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWActive(){return smalltalk.CWActive||(typeof CWActive=="undefined"?nil:CWActive)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWActive());
_st(aMonster)._currentMove_(_st(aMonster)._move());
return self}, function($ctx1) {$ctx1.fill(self,"activate:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "activate: aMonster\x0a\x09aMonster changeState: CWActive.\x0a\x09aMonster currentMove: aMonster move",
messageSends: ["changeState:", "currentMove:", "move"],
referencedClasses: ["CWActive"]
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas he is Inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas he is Inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas he is Inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWNextTurnEvent(){return smalltalk.CWNextTurnEvent||(typeof CWNextTurnEvent=="undefined"?nil:CWNextTurnEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._announce_(_st($CWNextTurnEvent())._new());
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09aMonster announce: CWNextTurnEvent new",
messageSends: ["announce:", "new"],
referencedClasses: ["CWNextTurnEvent"]
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "desactivate:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"desactivate:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "desactivate: aMonster\x0a\x09\x22Do nothing already inactive\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "isInactive",
category: 'monster state API',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isInactive",{},smalltalk.CWInactive)})},
args: [],
source: "isInactive\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas he is inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas he is inactive. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWInactive)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas he is inactive. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "readyToPick:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
function $CWToPick(){return smalltalk.CWToPick||(typeof CWToPick=="undefined"?nil:CWToPick)}
return smalltalk.withContext(function($ctx1) { 
_st(aMonster)._changeState_($CWToPick());
return self}, function($ctx1) {$ctx1.fill(self,"readyToPick:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "readyToPick: aMonster\x0a\x09aMonster changeState: CWToPick",
messageSends: ["changeState:"],
referencedClasses: ["CWToPick"]
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state API',
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
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09gameContext shouldRestartTurn ifTrue: [ ^ gameContext restartTurn ].\x0a\x09aMonster root showActiveMonsters.\x0a\x09gameContext currentMonster: aMonster.",
messageSends: ["ifTrue:", "restartTurn", "shouldRestartTurn", "showActiveMonsters", "root", "currentMonster:"],
referencedClasses: []
}),
smalltalk.CWInactive);

smalltalk.addMethod(
smalltalk.method({
selector: "showActiveMonster:",
category: 'monster state API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"showActiveMonster:",{aMonster:aMonster},smalltalk.CWInactive)})},
args: ["aMonster"],
source: "showActiveMonster: aMonster\x0a\x09\x22Just do nothing, this monster is not actve\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.CWInactive);



smalltalk.addClass('CWToPick', smalltalk.CWMonsterState, [], 'Easnoth-GameStates');
smalltalk.CWToPick.comment="The player has to choice one of the toPick monster to activate them"
smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterAttacking:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has attacked whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterAttacking:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "changeStateAfterAttacking: aMonster\x0a\x09self error: 'seemingly the monster has attacked whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "changeStateAfterMoving:",
category: 'private',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster has moved whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"changeStateAfterMoving:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "changeStateAfterMoving: aMonster\x0a\x09self error: 'seemingly the monster has moved whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "checkForNextTurn:",
category: 'monster state public API',
fn: function (aMonster){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"checkForNextTurn:",{aMonster:aMonster},smalltalk.CWToPick)})},
args: ["aMonster"],
source: "checkForNextTurn: aMonster\x0a\x09self error: 'seemingly the game is checking if the player has finished to play whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:attackTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:attackTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster attackTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to attack whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "monster:moveTo:inContext:",
category: 'monster state public API',
fn: function (aMonster,aCell,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self)._error_("seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen");
return self}, function($ctx1) {$ctx1.fill(self,"monster:moveTo:inContext:",{aMonster:aMonster,aCell:aCell,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "aCell", "gameContext"],
source: "monster: aMonster moveTo: aCell inContext: gameContext\x0a\x09self error: 'seemingly the monster is trying to move whereas the game is in a picking phase. cannot happen'.",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.CWToPick);

smalltalk.addMethod(
smalltalk.method({
selector: "select:inContext:",
category: 'monster state public API',
fn: function (aMonster,gameContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aMonster)._root())._removeSelection();
_st(_st(aMonster)._root())._desactivateMonsters();
_st(aMonster)._activate();
_st(aMonster)._selectInContext_(gameContext);
return self}, function($ctx1) {$ctx1.fill(self,"select:inContext:",{aMonster:aMonster,gameContext:gameContext},smalltalk.CWToPick)})},
args: ["aMonster", "gameContext"],
source: "select: aMonster inContext: gameContext\x0a\x09aMonster root removeSelection.\x0a\x09aMonster root desactivateMonsters.\x0a\x09aMonster activate.\x0a\x09aMonster selectInContext: gameContext",
messageSends: ["removeSelection", "root", "desactivateMonsters", "activate", "selectInContext:"],
referencedClasses: []
}),
smalltalk.CWToPick);



