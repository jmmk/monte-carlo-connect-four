// Compiled by ClojureScript 0.0-3058 {}
goog.provide('connect_four.frontend');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('cljs.core.async');
goog.require('connect_four.core');
goog.require('reagent.core');
connect_four.frontend.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_boards,connect_four.core.new_boards(),cljs.core.constant$keyword$_COLON_player,(1),cljs.core.constant$keyword$_COLON_winner,null], null));
connect_four.frontend.ai_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
connect_four.frontend.pieces = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","RED","BLACK"], null);
connect_four.frontend.drop_piece = (function connect_four$frontend$drop_piece(column){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(connect_four.frontend.state,connect_four.core.play,column);
});
connect_four.frontend.player_click = (function connect_four$frontend$player_click(column){
var map__11349 = (function (){var G__11350 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11350) : cljs.core.deref.call(null,G__11350));
})();
var map__11349__$1 = ((cljs.core.seq_QMARK_(map__11349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11349):map__11349);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11349__$1,cljs.core.constant$keyword$_COLON_boards);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11349__$1,cljs.core.constant$keyword$_COLON_player);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,(1))) && ((cljs.core.constant$keyword$_COLON_winner.cljs$core$IFn$_invoke$arity$1((function (){var G__11353 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11353) : cljs.core.deref.call(null,G__11353));
})()) == null)) && (connect_four.core.is_valid_QMARK_((function (){var G__11354 = (0);
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__11354) : boards.call(null,G__11354));
})(),column))){
return connect_four.frontend.drop_piece(column);
} else {
return null;
}
});
cljs.core.add_watch(connect_four.frontend.state,cljs.core.constant$keyword$_COLON_ai,(function (key,atom,old_state,new_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_player.cljs$core$IFn$_invoke$arity$1(new_state),(2))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(connect_four.frontend.ai_chan,"run");
} else {
return null;
}
}));
var c__7693__auto___11406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7693__auto___11406){
return (function (){
var f__7694__auto__ = (function (){var switch__7613__auto__ = ((function (c__7693__auto___11406){
return (function (state_11382){
var state_val_11383 = (state_11382[(1)]);
if((state_val_11383 === (7))){
var inst_11359 = (state_11382[(2)]);
var inst_11360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("run",inst_11359);
var inst_11361 = (function (){var G__11384 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11384) : cljs.core.deref.call(null,G__11384));
})();
var inst_11362 = cljs.core.constant$keyword$_COLON_winner.cljs$core$IFn$_invoke$arity$1(inst_11361);
var inst_11363 = (inst_11362 == null);
var inst_11364 = (inst_11360) && (inst_11363);
var state_11382__$1 = state_11382;
if(cljs.core.truth_(inst_11364)){
var statearr_11385_11407 = state_11382__$1;
(statearr_11385_11407[(1)] = (8));

} else {
var statearr_11386_11408 = state_11382__$1;
(statearr_11386_11408[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (1))){
var state_11382__$1 = state_11382;
var statearr_11387_11409 = state_11382__$1;
(statearr_11387_11409[(2)] = null);

(statearr_11387_11409[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (4))){
var state_11382__$1 = state_11382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11382__$1,(7),connect_four.frontend.ai_chan);
} else {
if((state_val_11383 === (6))){
var inst_11378 = (state_11382[(2)]);
var state_11382__$1 = state_11382;
var statearr_11388_11410 = state_11382__$1;
(statearr_11388_11410[(2)] = inst_11378);

(statearr_11388_11410[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (3))){
var inst_11380 = (state_11382[(2)]);
var state_11382__$1 = state_11382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_11382__$1,inst_11380);
} else {
if((state_val_11383 === (2))){
var state_11382__$1 = state_11382;
var statearr_11389_11411 = state_11382__$1;
(statearr_11389_11411[(1)] = (4));



return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (9))){
var state_11382__$1 = state_11382;
var statearr_11391_11412 = state_11382__$1;
(statearr_11391_11412[(2)] = null);

(statearr_11391_11412[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (5))){
var state_11382__$1 = state_11382;
var statearr_11392_11413 = state_11382__$1;
(statearr_11392_11413[(2)] = null);

(statearr_11392_11413[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (10))){
var inst_11374 = (state_11382[(2)]);
var state_11382__$1 = (function (){var statearr_11393 = state_11382;
(statearr_11393[(7)] = inst_11374);

return statearr_11393;
})();
var statearr_11394_11414 = state_11382__$1;
(statearr_11394_11414[(2)] = null);

(statearr_11394_11414[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_11383 === (8))){
var inst_11366 = (function (){var G__11395 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11395) : cljs.core.deref.call(null,G__11395));
})();
var inst_11367 = connect_four.core.find_best_move(inst_11366);
var inst_11368 = (function (){var G__11396 = (0);
return (inst_11367.cljs$core$IFn$_invoke$arity$1 ? inst_11367.cljs$core$IFn$_invoke$arity$1(G__11396) : inst_11367.call(null,G__11396));
})();
var inst_11369 = connect_four.frontend.drop_piece(inst_11368);
var inst_11370 = cljs.core.val(inst_11367);
var inst_11371 = console.log("Win Percentage: ",inst_11370);
var state_11382__$1 = (function (){var statearr_11397 = state_11382;
(statearr_11397[(8)] = inst_11369);

return statearr_11397;
})();
var statearr_11398_11415 = state_11382__$1;
(statearr_11398_11415[(2)] = inst_11371);

(statearr_11398_11415[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7693__auto___11406))
;
return ((function (switch__7613__auto__,c__7693__auto___11406){
return (function() {
var connect_four$frontend$state_machine__7614__auto__ = null;
var connect_four$frontend$state_machine__7614__auto____0 = (function (){
var statearr_11402 = [null,null,null,null,null,null,null,null,null];
(statearr_11402[(0)] = connect_four$frontend$state_machine__7614__auto__);

(statearr_11402[(1)] = (1));

return statearr_11402;
});
var connect_four$frontend$state_machine__7614__auto____1 = (function (state_11382){
while(true){
var ret_value__7615__auto__ = (function (){try{while(true){
var result__7616__auto__ = switch__7613__auto__(state_11382);
if(cljs.core.keyword_identical_QMARK_(result__7616__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7616__auto__;
}
break;
}
}catch (e11403){if((e11403 instanceof Object)){
var ex__7617__auto__ = e11403;
var statearr_11404_11416 = state_11382;
(statearr_11404_11416[(5)] = ex__7617__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_11382);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e11403;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7615__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__11417 = state_11382;
state_11382 = G__11417;
continue;
} else {
return ret_value__7615__auto__;
}
break;
}
});
connect_four$frontend$state_machine__7614__auto__ = function(state_11382){
switch(arguments.length){
case 0:
return connect_four$frontend$state_machine__7614__auto____0.call(this);
case 1:
return connect_four$frontend$state_machine__7614__auto____1.call(this,state_11382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connect_four$frontend$state_machine__7614__auto__.cljs$core$IFn$_invoke$arity$0 = connect_four$frontend$state_machine__7614__auto____0;
connect_four$frontend$state_machine__7614__auto__.cljs$core$IFn$_invoke$arity$1 = connect_four$frontend$state_machine__7614__auto____1;
return connect_four$frontend$state_machine__7614__auto__;
})()
;})(switch__7613__auto__,c__7693__auto___11406))
})();
var state__7695__auto__ = (function (){var statearr_11405 = (function (){return (f__7694__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7694__auto__.cljs$core$IFn$_invoke$arity$0() : f__7694__auto__.call(null));
})();
(statearr_11405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7693__auto___11406);

return statearr_11405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7695__auto__);
});})(c__7693__auto___11406))
);

connect_four.frontend.cell = (function connect_four$frontend$cell(text,column,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_border,"1px solid black",cljs.core.constant$keyword$_COLON_width,"60px",cljs.core.constant$keyword$_COLON_height,"60px"], null),cljs.core.constant$keyword$_COLON_on_click,(function (){
return connect_four.frontend.player_click(column);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_p,text], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,[cljs.core.str(row),cljs.core.str(column)].join('')], null));
});
connect_four.frontend.game_board = (function connect_four$frontend$game_board(){
var map__11484 = (function (){var G__11486 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11486) : cljs.core.deref.call(null,G__11486));
})();
var map__11484__$1 = ((cljs.core.seq_QMARK_(map__11484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11484):map__11484);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11484__$1,cljs.core.constant$keyword$_COLON_winner);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11484__$1,cljs.core.constant$keyword$_COLON_boards);
var map__11485 = (function (){var G__11487 = (0);
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__11487) : boards.call(null,G__11487));
})();
var map__11485__$1 = ((cljs.core.seq_QMARK_(map__11485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11485):map__11485);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11485__$1,cljs.core.constant$keyword$_COLON_state);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11485__$1,cljs.core.constant$keyword$_COLON_columns);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11485__$1,cljs.core.constant$keyword$_COLON_rows);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_div,((cljs.core.some_QMARK_(winner))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_h1,[cljs.core.str("Player "),cljs.core.str(winner),cljs.core.str(" wins!")].join('')], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_border_collapse,"collapse"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__11488(s__11489){
return (new cljs.core.LazySeq(null,((function (map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function (){
var s__11489__$1 = s__11489;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__11489__$1);
if(temp__4126__auto__){
var s__11489__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11489__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__11489__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__11491 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__11490 = (0);
while(true){
if((i__11490 < size__4831__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__11490);
cljs.core.chunk_append(b__11491,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_tr,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (i__11490,row,c__4830__auto__,size__4831__auto__,b__11491,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__11488_$_iter__11522(s__11523){
return (new cljs.core.LazySeq(null,((function (i__11490,row,c__4830__auto__,size__4831__auto__,b__11491,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function (){
var s__11523__$1 = s__11523;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__11523__$1);
if(temp__4126__auto____$1){
var s__11523__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11523__$2)){
var c__4830__auto____$1 = cljs.core.chunk_first(s__11523__$2);
var size__4831__auto____$1 = cljs.core.count(c__4830__auto____$1);
var b__11525 = cljs.core.chunk_buffer(size__4831__auto____$1);
if((function (){var i__11524 = (0);
while(true){
if((i__11524 < size__4831__auto____$1)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto____$1,i__11524);
cljs.core.chunk_append(b__11525,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__11532 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__11533 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__11533) : state.call(null,G__11533));
})(),row,(0));
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__11532) : connect_four.frontend.pieces.call(null,G__11532));
})(),column,row], null));

var G__11550 = (i__11524 + (1));
i__11524 = G__11550;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11525),connect_four$frontend$game_board_$_iter__11488_$_iter__11522(cljs.core.chunk_rest(s__11523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11525),null);
}
} else {
var column = cljs.core.first(s__11523__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__11534 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__11535 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__11535) : state.call(null,G__11535));
})(),row,(0));
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__11534) : connect_four.frontend.pieces.call(null,G__11534));
})(),column,row], null),connect_four$frontend$game_board_$_iter__11488_$_iter__11522(cljs.core.rest(s__11523__$2)));
}
} else {
return null;
}
break;
}
});})(i__11490,row,c__4830__auto__,size__4831__auto__,b__11491,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
,null,null));
});})(i__11490,row,c__4830__auto__,size__4831__auto__,b__11491,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,row], null)));

var G__11551 = (i__11490 + (1));
i__11490 = G__11551;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11491),connect_four$frontend$game_board_$_iter__11488(cljs.core.chunk_rest(s__11489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11491),null);
}
} else {
var row = cljs.core.first(s__11489__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_tr,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (row,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__11488_$_iter__11536(s__11537){
return (new cljs.core.LazySeq(null,((function (row,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows){
return (function (){
var s__11537__$1 = s__11537;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__11537__$1);
if(temp__4126__auto____$1){
var s__11537__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11537__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__11537__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__11539 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__11538 = (0);
while(true){
if((i__11538 < size__4831__auto__)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__11538);
cljs.core.chunk_append(b__11539,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__11546 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__11547 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__11547) : state.call(null,G__11547));
})(),row,(0));
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__11546) : connect_four.frontend.pieces.call(null,G__11546));
})(),column,row], null));

var G__11552 = (i__11538 + (1));
i__11538 = G__11552;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11539),connect_four$frontend$game_board_$_iter__11488_$_iter__11536(cljs.core.chunk_rest(s__11537__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11539),null);
}
} else {
var column = cljs.core.first(s__11537__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__11548 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__11549 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__11549) : state.call(null,G__11549));
})(),row,(0));
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__11548) : connect_four.frontend.pieces.call(null,G__11548));
})(),column,row], null),connect_four$frontend$game_board_$_iter__11488_$_iter__11536(cljs.core.rest(s__11537__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
,null,null));
});})(row,s__11489__$2,temp__4126__auto__,map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})())], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,row], null)),connect_four$frontend$game_board_$_iter__11488(cljs.core.rest(s__11489__$2)));
}
} else {
return null;
}
break;
}
});})(map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
,null,null));
});})(map__11484,map__11484__$1,winner,boards,map__11485,map__11485__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((rows - (1)),(-1),(-1)));
})())], null)], null);
});
var G__11553_11555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.game_board], null);
var G__11554_11556 = document.body;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__11553_11555,G__11554_11556) : reagent.core.render_component.call(null,G__11553_11555,G__11554_11556));
