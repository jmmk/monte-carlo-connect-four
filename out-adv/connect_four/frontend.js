// Compiled by ClojureScript 0.0-3058 {}
goog.provide('connect_four.frontend');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('connect_four.core');
goog.require('reagent.core');
connect_four.frontend.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(connect_four.core.new_state.cljs$core$IFn$_invoke$arity$0());
connect_four.frontend.ai_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
connect_four.frontend.pieces = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_empty,"_",cljs.core.constant$keyword$_COLON_red,"RED",cljs.core.constant$keyword$_COLON_black,"BLACK"], null);
connect_four.frontend.drop_piece = (function connect_four$frontend$drop_piece(column){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(connect_four.frontend.state,connect_four.core.play,column);
});
connect_four.frontend.player_click = (function connect_four$frontend$player_click(column){
var map__10731 = (function (){var G__10732 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10732) : cljs.core.deref.call(null,G__10732));
})();
var map__10731__$1 = ((cljs.core.seq_QMARK_(map__10731))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10731):map__10731);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10731__$1,cljs.core.constant$keyword$_COLON_boards);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10731__$1,cljs.core.constant$keyword$_COLON_player);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,cljs.core.constant$keyword$_COLON_red)) && ((cljs.core.constant$keyword$_COLON_winner.cljs$core$IFn$_invoke$arity$1((function (){var G__10734 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10734) : cljs.core.deref.call(null,G__10734));
})()) == null)) && (connect_four.core.is_valid_QMARK_(cljs.core.constant$keyword$_COLON_game_board.cljs$core$IFn$_invoke$arity$1(boards),column))){
return connect_four.frontend.drop_piece(column);
} else {
return null;
}
});
cljs.core.add_watch(connect_four.frontend.state,cljs.core.constant$keyword$_COLON_ai,(function (key,atom,old_state,new_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$_COLON_player.cljs$core$IFn$_invoke$arity$1(new_state),cljs.core.constant$keyword$_COLON_black)){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(connect_four.frontend.ai_chan,"run");
} else {
return null;
}
}));
var c__7699__auto___10785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___10785){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___10785){
return (function (state_10762){
var state_val_10763 = (state_10762[(1)]);
if((state_val_10763 === (7))){
var inst_10739 = (state_10762[(2)]);
var inst_10740 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("run",inst_10739);
var inst_10741 = (function (){var G__10764 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10764) : cljs.core.deref.call(null,G__10764));
})();
var inst_10742 = cljs.core.constant$keyword$_COLON_winner.cljs$core$IFn$_invoke$arity$1(inst_10741);
var inst_10743 = (inst_10742 == null);
var inst_10744 = (inst_10740) && (inst_10743);
var state_10762__$1 = state_10762;
if(cljs.core.truth_(inst_10744)){
var statearr_10765_10786 = state_10762__$1;
(statearr_10765_10786[(1)] = (8));

} else {
var statearr_10766_10787 = state_10762__$1;
(statearr_10766_10787[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (1))){
var state_10762__$1 = state_10762;
var statearr_10767_10788 = state_10762__$1;
(statearr_10767_10788[(2)] = null);

(statearr_10767_10788[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (4))){
var state_10762__$1 = state_10762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10762__$1,(7),connect_four.frontend.ai_chan);
} else {
if((state_val_10763 === (6))){
var inst_10758 = (state_10762[(2)]);
var state_10762__$1 = state_10762;
var statearr_10768_10789 = state_10762__$1;
(statearr_10768_10789[(2)] = inst_10758);

(statearr_10768_10789[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (3))){
var inst_10760 = (state_10762[(2)]);
var state_10762__$1 = state_10762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_10762__$1,inst_10760);
} else {
if((state_val_10763 === (2))){
var state_10762__$1 = state_10762;
var statearr_10769_10790 = state_10762__$1;
(statearr_10769_10790[(1)] = (4));



return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (9))){
var state_10762__$1 = state_10762;
var statearr_10771_10791 = state_10762__$1;
(statearr_10771_10791[(2)] = null);

(statearr_10771_10791[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (5))){
var state_10762__$1 = state_10762;
var statearr_10772_10792 = state_10762__$1;
(statearr_10772_10792[(2)] = null);

(statearr_10772_10792[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (10))){
var inst_10754 = (state_10762[(2)]);
var state_10762__$1 = (function (){var statearr_10773 = state_10762;
(statearr_10773[(7)] = inst_10754);

return statearr_10773;
})();
var statearr_10774_10793 = state_10762__$1;
(statearr_10774_10793[(2)] = null);

(statearr_10774_10793[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_10763 === (8))){
var inst_10746 = (function (){var G__10775 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10775) : cljs.core.deref.call(null,G__10775));
})();
var inst_10747 = connect_four.core.find_best_move(inst_10746,cljs.core.constant$keyword$_COLON_black);
var inst_10748 = cljs.core.constant$keyword$_COLON_column.cljs$core$IFn$_invoke$arity$1(inst_10747);
var inst_10749 = connect_four.frontend.drop_piece(inst_10748);
var inst_10750 = cljs.core.constant$keyword$_COLON_percentage.cljs$core$IFn$_invoke$arity$1(inst_10747);
var inst_10751 = console.log("Win Percentage: ",inst_10750);
var state_10762__$1 = (function (){var statearr_10776 = state_10762;
(statearr_10776[(8)] = inst_10749);

return statearr_10776;
})();
var statearr_10777_10794 = state_10762__$1;
(statearr_10777_10794[(2)] = inst_10751);

(statearr_10777_10794[(1)] = (10));


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
});})(c__7699__auto___10785))
;
return ((function (switch__7619__auto__,c__7699__auto___10785){
return (function() {
var connect_four$frontend$state_machine__7620__auto__ = null;
var connect_four$frontend$state_machine__7620__auto____0 = (function (){
var statearr_10781 = [null,null,null,null,null,null,null,null,null];
(statearr_10781[(0)] = connect_four$frontend$state_machine__7620__auto__);

(statearr_10781[(1)] = (1));

return statearr_10781;
});
var connect_four$frontend$state_machine__7620__auto____1 = (function (state_10762){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_10762);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e10782){if((e10782 instanceof Object)){
var ex__7623__auto__ = e10782;
var statearr_10783_10795 = state_10762;
(statearr_10783_10795[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_10762);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e10782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__10796 = state_10762;
state_10762 = G__10796;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
connect_four$frontend$state_machine__7620__auto__ = function(state_10762){
switch(arguments.length){
case 0:
return connect_four$frontend$state_machine__7620__auto____0.call(this);
case 1:
return connect_four$frontend$state_machine__7620__auto____1.call(this,state_10762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connect_four$frontend$state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = connect_four$frontend$state_machine__7620__auto____0;
connect_four$frontend$state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = connect_four$frontend$state_machine__7620__auto____1;
return connect_four$frontend$state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___10785))
})();
var state__7701__auto__ = (function (){var statearr_10784 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_10784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___10785);

return statearr_10784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___10785))
);

connect_four.frontend.cell = (function connect_four$frontend$cell(text,column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_td,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_border,"1px solid black",cljs.core.constant$keyword$_COLON_width,"60px",cljs.core.constant$keyword$_COLON_height,"60px"], null),cljs.core.constant$keyword$_COLON_on_click,(function (){
return connect_four.frontend.player_click(column);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_p,text], null)], null);
});
connect_four.frontend.winner_display = (function connect_four$frontend$winner_display(){
var winner = cljs.core.constant$keyword$_COLON_winner.cljs$core$IFn$_invoke$arity$1((function (){var G__10798 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10798) : cljs.core.deref.call(null,G__10798));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_height,"32px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_h1,((cljs.core.some_QMARK_(winner))?[cljs.core.str(clojure.string.capitalize(cljs.core.name(winner))),cljs.core.str(" wins!")].join(''):null)], null)], null);
});
connect_four.frontend.game_board = (function connect_four$frontend$game_board(){
var map__10864 = (function (){var G__10866 = connect_four.frontend.state;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10866) : cljs.core.deref.call(null,G__10866));
})();
var map__10864__$1 = ((cljs.core.seq_QMARK_(map__10864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10864):map__10864);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10864__$1,cljs.core.constant$keyword$_COLON_winner);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10864__$1,cljs.core.constant$keyword$_COLON_boards);
var map__10865 = cljs.core.constant$keyword$_COLON_game_board.cljs$core$IFn$_invoke$arity$1(boards);
var map__10865__$1 = ((cljs.core.seq_QMARK_(map__10865))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10865):map__10865);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10865__$1,cljs.core.constant$keyword$_COLON_state);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10865__$1,cljs.core.constant$keyword$_COLON_columns);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10865__$1,cljs.core.constant$keyword$_COLON_rows);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.winner_display], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_border_collapse,"collapse"], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__10867(s__10868){
return (new cljs.core.LazySeq(null,((function (map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function (){
var s__10868__$1 = s__10868;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10868__$1);
if(temp__4126__auto__){
var s__10868__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10868__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__10868__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__10870 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__10869 = (0);
while(true){
if((i__10869 < size__4831__auto__)){
var row = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__10869);
cljs.core.chunk_append(b__10870,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,row], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (i__10869,row,c__4830__auto__,size__4831__auto__,b__10870,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__10867_$_iter__10901(s__10902){
return (new cljs.core.LazySeq(null,((function (i__10869,row,c__4830__auto__,size__4831__auto__,b__10870,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function (){
var s__10902__$1 = s__10902;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10902__$1);
if(temp__4126__auto____$1){
var s__10902__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10902__$2)){
var c__4830__auto____$1 = cljs.core.chunk_first(s__10902__$2);
var size__4831__auto____$1 = cljs.core.count(c__4830__auto____$1);
var b__10904 = cljs.core.chunk_buffer(size__4831__auto____$1);
if((function (){var i__10903 = (0);
while(true){
if((i__10903 < size__4831__auto____$1)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto____$1,i__10903);
cljs.core.chunk_append(b__10904,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__10911 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__10912 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10912) : state.call(null,G__10912));
})(),row,cljs.core.constant$keyword$_COLON_empty);
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__10911) : connect_four.frontend.pieces.call(null,G__10911));
})(),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,[cljs.core.str(column),cljs.core.str(row)].join('')], null)));

var G__10929 = (i__10903 + (1));
i__10903 = G__10929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10904),connect_four$frontend$game_board_$_iter__10867_$_iter__10901(cljs.core.chunk_rest(s__10902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10904),null);
}
} else {
var column = cljs.core.first(s__10902__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__10913 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__10914 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10914) : state.call(null,G__10914));
})(),row,cljs.core.constant$keyword$_COLON_empty);
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__10913) : connect_four.frontend.pieces.call(null,G__10913));
})(),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,[cljs.core.str(column),cljs.core.str(row)].join('')], null)),connect_four$frontend$game_board_$_iter__10867_$_iter__10901(cljs.core.rest(s__10902__$2)));
}
} else {
return null;
}
break;
}
});})(i__10869,row,c__4830__auto__,size__4831__auto__,b__10870,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
,null,null));
});})(i__10869,row,c__4830__auto__,size__4831__auto__,b__10870,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})())], null));

var G__10930 = (i__10869 + (1));
i__10869 = G__10930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10870),connect_four$frontend$game_board_$_iter__10867(cljs.core.chunk_rest(s__10868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10870),null);
}
} else {
var row = cljs.core.first(s__10868__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_tr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,row], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4832__auto__ = ((function (row,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function connect_four$frontend$game_board_$_iter__10867_$_iter__10915(s__10916){
return (new cljs.core.LazySeq(null,((function (row,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows){
return (function (){
var s__10916__$1 = s__10916;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10916__$1);
if(temp__4126__auto____$1){
var s__10916__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10916__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__10916__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__10918 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__10917 = (0);
while(true){
if((i__10917 < size__4831__auto__)){
var column = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__10917);
cljs.core.chunk_append(b__10918,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__10925 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__10926 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10926) : state.call(null,G__10926));
})(),row,cljs.core.constant$keyword$_COLON_empty);
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__10925) : connect_four.frontend.pieces.call(null,G__10925));
})(),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,[cljs.core.str(column),cljs.core.str(row)].join('')], null)));

var G__10931 = (i__10917 + (1));
i__10917 = G__10931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10918),connect_four$frontend$game_board_$_iter__10867_$_iter__10915(cljs.core.chunk_rest(s__10916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10918),null);
}
} else {
var column = cljs.core.first(s__10916__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.cell,(function (){var G__10927 = cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var G__10928 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10928) : state.call(null,G__10928));
})(),row,cljs.core.constant$keyword$_COLON_empty);
return (connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1 ? connect_four.frontend.pieces.cljs$core$IFn$_invoke$arity$1(G__10927) : connect_four.frontend.pieces.call(null,G__10927));
})(),column], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_key,[cljs.core.str(column),cljs.core.str(row)].join('')], null)),connect_four$frontend$game_board_$_iter__10867_$_iter__10915(cljs.core.rest(s__10916__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
,null,null));
});})(row,s__10868__$2,temp__4126__auto__,map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})())], null),connect_four$frontend$game_board_$_iter__10867(cljs.core.rest(s__10868__$2)));
}
} else {
return null;
}
break;
}
});})(map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
,null,null));
});})(map__10864,map__10864__$1,winner,boards,map__10865,map__10865__$1,state,columns,rows))
;
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$3((rows - (1)),(-1),(-1)));
})())], null)], null);
});
var G__10932_10934 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.frontend.game_board], null);
var G__10933_10935 = document.body;
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10932_10934,G__10933_10935) : reagent.core.render_component.call(null,G__10932_10934,G__10933_10935));
