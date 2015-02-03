// Compiled by ClojureScript 0.0-2755 {}
goog.provide('connect_four.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');

/**
* @constructor
* @param {*} rows
* @param {*} columns
* @param {*} state
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
connect_four.core.Board = (function (rows,columns,state,__meta,__extmap,__hash){
this.rows = rows;
this.columns = columns;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
connect_four.core.Board.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4375__auto__,k__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4375__auto____$1,k__4376__auto__,null);
});

connect_four.core.Board.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4377__auto__,k9974,else__4378__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
var G__9976 = (((k9974 instanceof cljs.core.Keyword))?k9974.fqn:null);
switch (G__9976) {
case "state":
return self__.state;

break;
case "columns":
return self__.columns;

break;
case "rows":
return self__.rows;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k9974,else__4378__auto__);

}
});

connect_four.core.Board.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4389__auto__,writer__4390__auto__,opts__4391__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
var pr_pair__4392__auto__ = ((function (this__4389__auto____$1){
return (function (keyval__4393__auto__){
return cljs.core.pr_sequential_writer(writer__4390__auto__,cljs.core.pr_writer,""," ","",opts__4391__auto__,keyval__4393__auto__);
});})(this__4389__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4390__auto__,pr_pair__4392__auto__,"#connect-four.core.Board{",", ","}",opts__4391__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.columns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.state],null))], null),self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return self__.__meta;
});

connect_four.core.Board.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

connect_four.core.Board.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4379__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4193__auto__ = self__.__hash;
if(!((h__4193__auto__ == null))){
return h__4193__auto__;
} else {
var h__4193__auto____$1 = cljs.core.hash_imap(this__4370__auto____$1);
self__.__hash = h__4193__auto____$1;

return h__4193__auto____$1;
}
});

connect_four.core.Board.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4371__auto__,other__4372__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3760__auto__ = other__4372__auto__;
if(cljs.core.truth_(and__3760__auto__)){
return ((this__4371__auto____$1.constructor === other__4372__auto__.constructor)) && (cljs.core.equiv_map(this__4371__auto____$1,other__4372__auto__));
} else {
return and__3760__auto__;
}
})())){
return true;
} else {
return false;
}
});

connect_four.core.Board.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4384__auto__,k__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$38,null,cljs.core.constant$keyword$39,null,cljs.core.constant$keyword$37,null], null), null),k__4385__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4384__auto____$1),self__.__meta),k__4385__auto__);
} else {
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4385__auto__)),null));
}
});

connect_four.core.Board.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4382__auto__,k__4383__auto__,G__9973){
var self__ = this;
var this__4382__auto____$1 = this;
var pred__9977 = cljs.core.keyword_identical_QMARK_;
var expr__9978 = k__4383__auto__;
if(cljs.core.truth_((function (){var G__9980 = cljs.core.constant$keyword$37;
var G__9981 = expr__9978;
return (pred__9977.cljs$core$IFn$_invoke$arity$2 ? pred__9977.cljs$core$IFn$_invoke$arity$2(G__9980,G__9981) : pred__9977.call(null,G__9980,G__9981));
})())){
return (new connect_four.core.Board(G__9973,self__.columns,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9982 = cljs.core.constant$keyword$38;
var G__9983 = expr__9978;
return (pred__9977.cljs$core$IFn$_invoke$arity$2 ? pred__9977.cljs$core$IFn$_invoke$arity$2(G__9982,G__9983) : pred__9977.call(null,G__9982,G__9983));
})())){
return (new connect_four.core.Board(self__.rows,G__9973,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__9984 = cljs.core.constant$keyword$39;
var G__9985 = expr__9978;
return (pred__9977.cljs$core$IFn$_invoke$arity$2 ? pred__9977.cljs$core$IFn$_invoke$arity$2(G__9984,G__9985) : pred__9977.call(null,G__9984,G__9985));
})())){
return (new connect_four.core.Board(self__.rows,self__.columns,G__9973,self__.__meta,self__.__extmap,null));
} else {
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4383__auto__,G__9973),null));
}
}
}
});

connect_four.core.Board.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4387__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$37,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$38,self__.columns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$39,self__.state],null))], null),self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4374__auto__,G__9973){
var self__ = this;
var this__4374__auto____$1 = this;
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,G__9973,self__.__extmap,self__.__hash));
});

connect_four.core.Board.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4380__auto__,entry__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4381__auto__)){
return cljs.core._assoc(this__4380__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4381__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4380__auto____$1,entry__4381__auto__);
}
});

connect_four.core.Board.cljs$lang$type = true;

connect_four.core.Board.cljs$lang$ctorPrSeq = (function (this__4409__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"connect-four.core/Board");
});

connect_four.core.Board.cljs$lang$ctorPrWriter = (function (this__4409__auto__,writer__4410__auto__){
return cljs.core._write(writer__4410__auto__,"connect-four.core/Board");
});

connect_four.core.__GT_Board = (function __GT_Board(rows,columns,state){
return (new connect_four.core.Board(rows,columns,state,null,null,null));
});

connect_four.core.map__GT_Board = (function map__GT_Board(G__9975){
return (new connect_four.core.Board(cljs.core.constant$keyword$37.cljs$core$IFn$_invoke$arity$1(G__9975),cljs.core.constant$keyword$38.cljs$core$IFn$_invoke$arity$1(G__9975),cljs.core.constant$keyword$39.cljs$core$IFn$_invoke$arity$1(G__9975),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__9975,cljs.core.constant$keyword$37,cljs.core.array_seq([cljs.core.constant$keyword$38,cljs.core.constant$keyword$39], 0)),null));
});

/**
* Returns a Board record with <rows> rows, <columns> columns,
* and a list of <columns> empty vectors representing the board state
* or the <state> passed in
*/
connect_four.core.board = (function() {
var board = null;
var board__0 = (function (){
return board.cljs$core$IFn$_invoke$arity$2((6),(7));
});
var board__2 = (function (rows,columns){
return (new connect_four.core.Board(rows,columns,cljs.core.vec((function (){var iter__4528__auto__ = (function iter__9995(s__9996){
return (new cljs.core.LazySeq(null,(function (){
var s__9996__$1 = s__9996;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__9996__$1);
if(temp__4126__auto__){
var s__9996__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9996__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__9996__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__9998 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__9997 = (0);
while(true){
if((i__9997 < size__4527__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__9997);
cljs.core.chunk_append(b__9998,cljs.core.PersistentVector.EMPTY);

var G__10001 = (i__9997 + (1));
i__9997 = G__10001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9998),iter__9995(cljs.core.chunk_rest(s__9996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9998),null);
}
} else {
var _ = cljs.core.first(s__9996__$2);
return cljs.core.cons(cljs.core.PersistentVector.EMPTY,iter__9995(cljs.core.rest(s__9996__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})()),null,null,null));
});
var board__3 = (function (rows,columns,state){
return (new connect_four.core.Board(rows,columns,state,null,null,null));
});
board = function(rows,columns,state){
switch(arguments.length){
case 0:
return board__0.call(this);
case 2:
return board__2.call(this,rows,columns);
case 3:
return board__3.call(this,rows,columns,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
board.cljs$core$IFn$_invoke$arity$0 = board__0;
board.cljs$core$IFn$_invoke$arity$2 = board__2;
board.cljs$core$IFn$_invoke$arity$3 = board__3;
return board;
})()
;
connect_four.core.is_valid_QMARK_ = (function is_valid_QMARK_(board,column){

var map__10005 = board;
var map__10005__$1 = ((cljs.core.seq_QMARK_(map__10005))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10005):map__10005);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10005__$1,cljs.core.constant$keyword$39);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10005__$1,cljs.core.constant$keyword$38);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10005__$1,cljs.core.constant$keyword$37);
if(((((0) <= column)) && ((column <= columns))) && ((cljs.core.count((function (){var G__10007 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10007) : state.call(null,G__10007));
})()) < rows))){
return true;
} else {
return false;
}
});
connect_four.core.play = (function play(board,column,player){

var map__10010 = board;
var map__10010__$1 = ((cljs.core.seq_QMARK_(map__10010))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10010):map__10010);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10010__$1,cljs.core.constant$keyword$39);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10010__$1,cljs.core.constant$keyword$38);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10010__$1,cljs.core.constant$keyword$37);
var pieces = (function (){var G__10011 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__10011) : state.call(null,G__10011));
})();
if(connect_four.core.is_valid_QMARK_(board,column)){
return (new connect_four.core.Board(rows,columns,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,column,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pieces,player)),null,null,null));
} else {
return board;
}
});
connect_four.core.check_position = (function check_position(state,player,x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),player);
});
/**
* Check in a single direction if there are 4 pieces in a row from <player>
*/
connect_four.core.check_line = (function() {
var check_line = null;
var check_line__6 = (function (player,state,x,y,step_x,step_y){
return check_line.cljs$core$IFn$_invoke$arity$7(player,state,x,y,step_x,step_y,(1));
});
var check_line__7 = (function (player,state,x,y,step_x,step_y,consecutive_count){
var next_x = (x + step_x);
var next_y = (y + step_y);
var next_count = (consecutive_count + (1));
if((consecutive_count >= (4))){
return true;
} else {
if(connect_four.core.check_position(state,player,next_x,next_y)){
return check_line.cljs$core$IFn$_invoke$arity$7(player,state,next_x,next_y,step_x,step_y,next_count);
} else {
return false;
}
}
});
check_line = function(player,state,x,y,step_x,step_y,consecutive_count){
switch(arguments.length){
case 6:
return check_line__6.call(this,player,state,x,y,step_x,step_y);
case 7:
return check_line__7.call(this,player,state,x,y,step_x,step_y,consecutive_count);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_line.cljs$core$IFn$_invoke$arity$6 = check_line__6;
check_line.cljs$core$IFn$_invoke$arity$7 = check_line__7;
return check_line;
})()
;
connect_four.core.check_lines = (function check_lines(player,state,x,y){

var or__3772__auto__ = connect_four.core.check_line.cljs$core$IFn$_invoke$arity$6(player,state,x,y,(1),(0));
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = connect_four.core.check_line.cljs$core$IFn$_invoke$arity$6(player,state,x,y,(0),(1));
if(cljs.core.truth_(or__3772__auto____$1)){
return or__3772__auto____$1;
} else {
var or__3772__auto____$2 = connect_four.core.check_line.cljs$core$IFn$_invoke$arity$6(player,state,x,y,(1),(1));
if(cljs.core.truth_(or__3772__auto____$2)){
return or__3772__auto____$2;
} else {
return connect_four.core.check_line.cljs$core$IFn$_invoke$arity$6(player,state,x,y,(-1),(1));
}
}
}
});
connect_four.core.winning_board_QMARK_ = (function winning_board_QMARK_(board,player){

var map__10038 = board;
var map__10038__$1 = ((cljs.core.seq_QMARK_(map__10038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10038):map__10038);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10038__$1,cljs.core.constant$keyword$39);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10038__$1,cljs.core.constant$keyword$38);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10038__$1,cljs.core.constant$keyword$37);
return cljs.core.some(cljs.core.true_QMARK_,(function (){var iter__4528__auto__ = ((function (map__10038,map__10038__$1,state,columns,rows){
return (function iter__10039(s__10040){
return (new cljs.core.LazySeq(null,((function (map__10038,map__10038__$1,state,columns,rows){
return (function (){
var s__10040__$1 = s__10040;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__10040__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var x = cljs.core.first(xs__4624__auto__);
var iterys__4524__auto__ = ((function (s__10040__$1,x,xs__4624__auto__,temp__4126__auto__,map__10038,map__10038__$1,state,columns,rows){
return (function iter__10041(s__10042){
return (new cljs.core.LazySeq(null,((function (s__10040__$1,x,xs__4624__auto__,temp__4126__auto__,map__10038,map__10038__$1,state,columns,rows){
return (function (){
var s__10042__$1 = s__10042;
while(true){
var temp__4126__auto____$1 = cljs.core.seq(s__10042__$1);
if(temp__4126__auto____$1){
var s__10042__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__10042__$2)){
var c__4526__auto__ = cljs.core.chunk_first(s__10042__$2);
var size__4527__auto__ = cljs.core.count(c__4526__auto__);
var b__10044 = cljs.core.chunk_buffer(size__4527__auto__);
if((function (){var i__10043 = (0);
while(true){
if((i__10043 < size__4527__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4526__auto__,i__10043);
if(connect_four.core.check_position(state,player,x,y)){
cljs.core.chunk_append(b__10044,connect_four.core.check_lines(player,state,x,y));

var G__10050 = (i__10043 + (1));
i__10043 = G__10050;
continue;
} else {
var G__10051 = (i__10043 + (1));
i__10043 = G__10051;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10044),iter__10041(cljs.core.chunk_rest(s__10042__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10044),null);
}
} else {
var y = cljs.core.first(s__10042__$2);
if(connect_four.core.check_position(state,player,x,y)){
return cljs.core.cons(connect_four.core.check_lines(player,state,x,y),iter__10041(cljs.core.rest(s__10042__$2)));
} else {
var G__10052 = cljs.core.rest(s__10042__$2);
s__10042__$1 = G__10052;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__10040__$1,x,xs__4624__auto__,temp__4126__auto__,map__10038,map__10038__$1,state,columns,rows))
,null,null));
});})(s__10040__$1,x,xs__4624__auto__,temp__4126__auto__,map__10038,map__10038__$1,state,columns,rows))
;
var fs__4525__auto__ = cljs.core.seq(iterys__4524__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(rows)));
if(fs__4525__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4525__auto__,iter__10039(cljs.core.rest(s__10040__$1)));
} else {
var G__10053 = cljs.core.rest(s__10040__$1);
s__10040__$1 = G__10053;
continue;
}
} else {
return null;
}
break;
}
});})(map__10038,map__10038__$1,state,columns,rows))
,null,null));
});})(map__10038,map__10038__$1,state,columns,rows))
;
return iter__4528__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})());
});
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([connect_four.core.winning_board_QMARK_(connect_four.core.play(connect_four.core.play(connect_four.core.play(connect_four.core.play(connect_four.core.play(connect_four.core.play(connect_four.core.play(connect_four.core.board.cljs$core$IFn$_invoke$arity$0(),(1),(1)),(1),(1)),(1),(2)),(1),(1)),(0),(2)),(3),(2)),(3),(2)),(1))], 0));
