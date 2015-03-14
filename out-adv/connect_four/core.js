// Compiled by ClojureScript 0.0-3058 {}
goog.provide('connect_four.core');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('clojure.browser.repl');

/**
* @constructor
* @param {*} rows
* @param {*} columns
* @param {*} state
* @param {*} bits
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
connect_four.core.Board = (function (rows,columns,state,bits,__meta,__extmap,__hash){
this.rows = rows;
this.columns = columns;
this.state = state;
this.bits = bits;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
connect_four.core.Board.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4679__auto__,k__4680__auto__){
var self__ = this;
var this__4679__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4679__auto____$1,k__4680__auto__,null);
});

connect_four.core.Board.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4681__auto__,k5822,else__4682__auto__){
var self__ = this;
var this__4681__auto____$1 = this;
var G__5824 = (((k5822 instanceof cljs.core.Keyword))?k5822.fqn:null);
switch (G__5824) {
case "bits":
return self__.bits;

break;
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k5822,else__4682__auto__);

}
});

connect_four.core.Board.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4693__auto__,writer__4694__auto__,opts__4695__auto__){
var self__ = this;
var this__4693__auto____$1 = this;
var pr_pair__4696__auto__ = ((function (this__4693__auto____$1){
return (function (keyval__4697__auto__){
return cljs.core.pr_sequential_writer(writer__4694__auto__,cljs.core.pr_writer,""," ","",opts__4695__auto__,keyval__4697__auto__);
});})(this__4693__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4694__auto__,pr_pair__4696__auto__,"#connect-four.core.Board{",", ","}",opts__4695__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_rows,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_columns,self__.columns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state,self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_bits,self__.bits],null))], null),self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4677__auto__){
var self__ = this;
var this__4677__auto____$1 = this;
return self__.__meta;
});

connect_four.core.Board.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4673__auto__){
var self__ = this;
var this__4673__auto____$1 = this;
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.bits,self__.__meta,self__.__extmap,self__.__hash));
});

connect_four.core.Board.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4683__auto__){
var self__ = this;
var this__4683__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4674__auto__){
var self__ = this;
var this__4674__auto____$1 = this;
var h__4497__auto__ = self__.__hash;
if(!((h__4497__auto__ == null))){
return h__4497__auto__;
} else {
var h__4497__auto____$1 = cljs.core.hash_imap(this__4674__auto____$1);
self__.__hash = h__4497__auto____$1;

return h__4497__auto____$1;
}
});

connect_four.core.Board.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4675__auto__,other__4676__auto__){
var self__ = this;
var this__4675__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4064__auto__ = other__4676__auto__;
if(cljs.core.truth_(and__4064__auto__)){
return ((this__4675__auto____$1.constructor === other__4676__auto__.constructor)) && (cljs.core.equiv_map(this__4675__auto____$1,other__4676__auto__));
} else {
return and__4064__auto__;
}
})())){
return true;
} else {
return false;
}
});

connect_four.core.Board.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4688__auto__,k__4689__auto__){
var self__ = this;
var this__4688__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_columns,null,cljs.core.constant$keyword$_COLON_state,null,cljs.core.constant$keyword$_COLON_bits,null,cljs.core.constant$keyword$_COLON_rows,null], null), null),k__4689__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4688__auto____$1),self__.__meta),k__4689__auto__);
} else {
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.bits,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4689__auto__)),null));
}
});

connect_four.core.Board.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4686__auto__,k__4687__auto__,G__5821){
var self__ = this;
var this__4686__auto____$1 = this;
var pred__5825 = cljs.core.keyword_identical_QMARK_;
var expr__5826 = k__4687__auto__;
if(cljs.core.truth_((function (){var G__5828 = cljs.core.constant$keyword$_COLON_rows;
var G__5829 = expr__5826;
return (pred__5825.cljs$core$IFn$_invoke$arity$2 ? pred__5825.cljs$core$IFn$_invoke$arity$2(G__5828,G__5829) : pred__5825.call(null,G__5828,G__5829));
})())){
return (new connect_four.core.Board(G__5821,self__.columns,self__.state,self__.bits,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5830 = cljs.core.constant$keyword$_COLON_columns;
var G__5831 = expr__5826;
return (pred__5825.cljs$core$IFn$_invoke$arity$2 ? pred__5825.cljs$core$IFn$_invoke$arity$2(G__5830,G__5831) : pred__5825.call(null,G__5830,G__5831));
})())){
return (new connect_four.core.Board(self__.rows,G__5821,self__.state,self__.bits,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5832 = cljs.core.constant$keyword$_COLON_state;
var G__5833 = expr__5826;
return (pred__5825.cljs$core$IFn$_invoke$arity$2 ? pred__5825.cljs$core$IFn$_invoke$arity$2(G__5832,G__5833) : pred__5825.call(null,G__5832,G__5833));
})())){
return (new connect_four.core.Board(self__.rows,self__.columns,G__5821,self__.bits,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__5834 = cljs.core.constant$keyword$_COLON_bits;
var G__5835 = expr__5826;
return (pred__5825.cljs$core$IFn$_invoke$arity$2 ? pred__5825.cljs$core$IFn$_invoke$arity$2(G__5834,G__5835) : pred__5825.call(null,G__5834,G__5835));
})())){
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,G__5821,self__.__meta,self__.__extmap,null));
} else {
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.bits,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4687__auto__,G__5821),null));
}
}
}
}
});

connect_four.core.Board.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4691__auto__){
var self__ = this;
var this__4691__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_rows,self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_columns,self__.columns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_state,self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_bits,self__.bits],null))], null),self__.__extmap));
});

connect_four.core.Board.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4678__auto__,G__5821){
var self__ = this;
var this__4678__auto____$1 = this;
return (new connect_four.core.Board(self__.rows,self__.columns,self__.state,self__.bits,G__5821,self__.__extmap,self__.__hash));
});

connect_four.core.Board.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4684__auto__,entry__4685__auto__){
var self__ = this;
var this__4684__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4685__auto__)){
return cljs.core._assoc(this__4684__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4684__auto____$1,entry__4685__auto__);
}
});

connect_four.core.Board.cljs$lang$type = true;

connect_four.core.Board.cljs$lang$ctorPrSeq = (function (this__4713__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"connect-four.core/Board");
});

connect_four.core.Board.cljs$lang$ctorPrWriter = (function (this__4713__auto__,writer__4714__auto__){
return cljs.core._write(writer__4714__auto__,"connect-four.core/Board");
});

connect_four.core.__GT_Board = (function connect_four$core$__GT_Board(rows,columns,state,bits){
return (new connect_four.core.Board(rows,columns,state,bits,null,null,null));
});

connect_four.core.map__GT_Board = (function connect_four$core$map__GT_Board(G__5823){
return (new connect_four.core.Board(cljs.core.constant$keyword$_COLON_rows.cljs$core$IFn$_invoke$arity$1(G__5823),cljs.core.constant$keyword$_COLON_columns.cljs$core$IFn$_invoke$arity$1(G__5823),cljs.core.constant$keyword$_COLON_state.cljs$core$IFn$_invoke$arity$1(G__5823),cljs.core.constant$keyword$_COLON_bits.cljs$core$IFn$_invoke$arity$1(G__5823),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__5823,cljs.core.constant$keyword$_COLON_rows,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_columns,cljs.core.constant$keyword$_COLON_state,cljs.core.constant$keyword$_COLON_bits], 0)),null));
});

connect_four.core.full_bit_board = cljs.core.PersistentVector.fromArray([(0),(1),(2),(3),(4),(5),(7),(8),(9),(10),(11),(12),(14),(15),(16),(17),(18),(19),(21),(22),(23),(24),(25),(26),(28),(29),(30),(31),(32),(33),(35),(36),(37),(38),(39),(40),(42),(43),(44),(45),(46),(47)], true);
connect_four.core.full_bit_board_long = (function (){var G__5837 = (279258638311359);
return (goog.math.Long.fromNumber.cljs$core$IFn$_invoke$arity$1 ? goog.math.Long.fromNumber.cljs$core$IFn$_invoke$arity$1(G__5837) : goog.math.Long.fromNumber.call(null,G__5837));
})();
/**
 * Returns a Board record with <rows> rows, <columns> columns,
 * a vector of <columns> vectors representing the board state,
 * and an integer whose bits also represent the board state
 */
connect_four.core.board = (function() {
var connect_four$core$board = null;
var connect_four$core$board__0 = (function (){
return connect_four$core$board.cljs$core$IFn$_invoke$arity$2((6),(7));
});
var connect_four$core$board__2 = (function (rows,columns){
return (new connect_four.core.Board(rows,columns,cljs.core.vec((function (){var iter__4832__auto__ = (function connect_four$core$board_$_iter__5846(s__5847){
return (new cljs.core.LazySeq(null,(function (){
var s__5847__$1 = s__5847;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__5847__$1);
if(temp__4126__auto__){
var s__5847__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5847__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__5847__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__5849 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__5848 = (0);
while(true){
if((i__5848 < size__4831__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__5848);
cljs.core.chunk_append(b__5849,cljs.core.PersistentVector.EMPTY);

var G__5852 = (i__5848 + (1));
i__5848 = G__5852;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5849),connect_four$core$board_$_iter__5846(cljs.core.chunk_rest(s__5847__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5849),null);
}
} else {
var _ = cljs.core.first(s__5847__$2);
return cljs.core.cons(cljs.core.PersistentVector.EMPTY,connect_four$core$board_$_iter__5846(cljs.core.rest(s__5847__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4832__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns));
})()),goog.math.Long.ZERO,null,null,null));
});
var connect_four$core$board__3 = (function (rows,columns,state){
return (new connect_four.core.Board(rows,columns,state,goog.math.Long.ZERO,null,null,null));
});
connect_four$core$board = function(rows,columns,state){
switch(arguments.length){
case 0:
return connect_four$core$board__0.call(this);
case 2:
return connect_four$core$board__2.call(this,rows,columns);
case 3:
return connect_four$core$board__3.call(this,rows,columns,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
connect_four$core$board.cljs$core$IFn$_invoke$arity$0 = connect_four$core$board__0;
connect_four$core$board.cljs$core$IFn$_invoke$arity$2 = connect_four$core$board__2;
connect_four$core$board.cljs$core$IFn$_invoke$arity$3 = connect_four$core$board__3;
return connect_four$core$board;
})()
;
connect_four.core.new_boards = (function connect_four$core$new_boards(){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [connect_four.core.board.cljs$core$IFn$_invoke$arity$0(),goog.math.Long.ZERO,goog.math.Long.ZERO], null);
});
connect_four.core.opposite_player = (function connect_four$core$opposite_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,(1))){
return (2);
} else {
return (1);
}
});
connect_four.core.is_valid_QMARK_ = (function connect_four$core$is_valid_QMARK_(board,column){

var map__5856 = board;
var map__5856__$1 = ((cljs.core.seq_QMARK_(map__5856))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5856):map__5856);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5856__$1,cljs.core.constant$keyword$_COLON_state);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5856__$1,cljs.core.constant$keyword$_COLON_columns);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5856__$1,cljs.core.constant$keyword$_COLON_rows);
if(((((0) <= column)) && ((column <= columns))) && ((cljs.core.count((function (){var G__5858 = column;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__5858) : state.call(null,G__5858));
})()) < rows))){
return true;
} else {
return false;
}
});
connect_four.core.bit_set_long = (function connect_four$core$bit_set_long(bits,number){
return bits.or(goog.math.Long.ONE.shiftLeft(number));
});
connect_four.core.bit_insert = (function connect_four$core$bit_insert(bits,x,y){
return connect_four.core.bit_set_long(bits,(y + (x * (7))));
});
connect_four.core.bit_check = (function connect_four$core$bit_check(c,x){
return c.and(c.shiftRight(x));
});
connect_four.core.winning_board_QMARK_ = (function connect_four$core$winning_board_QMARK_(bits){

var a = connect_four.core.bit_check(bits,(6));
var b = connect_four.core.bit_check(bits,(7));
var c = connect_four.core.bit_check(bits,(8));
var d = connect_four.core.bit_check(bits,(1));
if(cljs.core.not(connect_four.core.bit_check(a,(12)).isZero())){
return true;
} else {
if(cljs.core.not(connect_four.core.bit_check(b,(14)).isZero())){
return true;
} else {
if(cljs.core.not(connect_four.core.bit_check(c,(16)).isZero())){
return true;
} else {
if(cljs.core.not(connect_four.core.bit_check(d,(2)).isZero())){
return true;
} else {
return false;

}
}
}
}
});
connect_four.core.play = (function connect_four$core$play(game_state,column){

var map__5864 = game_state;
var map__5864__$1 = ((cljs.core.seq_QMARK_(map__5864))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5864):map__5864);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5864__$1,cljs.core.constant$keyword$_COLON_player);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5864__$1,cljs.core.constant$keyword$_COLON_boards);
var game_board = (function (){var G__5866 = (0);
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__5866) : boards.call(null,G__5866));
})();
var map__5865 = game_board;
var map__5865__$1 = ((cljs.core.seq_QMARK_(map__5865))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5865):map__5865);
var board_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5865__$1,cljs.core.constant$keyword$_COLON_state);
var bits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5865__$1,cljs.core.constant$keyword$_COLON_bits);
var pieces = (function (){var G__5867 = column;
return (board_state.cljs$core$IFn$_invoke$arity$1 ? board_state.cljs$core$IFn$_invoke$arity$1(G__5867) : board_state.call(null,G__5867));
})();
var row = cljs.core.count(pieces);
var updated_player_board = connect_four.core.bit_insert((function (){var G__5868 = player;
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__5868) : boards.call(null,G__5868));
})(),column,row);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game_state,cljs.core.constant$keyword$_COLON_boards,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(boards,(0),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(game_board,cljs.core.constant$keyword$_COLON_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(board_state,column,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pieces,player)),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_bits,connect_four.core.bit_insert(bits,column,row)], 0)),cljs.core.array_seq([player,updated_player_board], 0)),cljs.core.array_seq([cljs.core.constant$keyword$_COLON_player,connect_four.core.opposite_player(player),cljs.core.constant$keyword$_COLON_winner,((connect_four.core.winning_board_QMARK_(updated_player_board))?player:null)], 0));
});
connect_four.core.full_QMARK_ = (function connect_four$core$full_QMARK_(bits){
return bits.equals(connect_four.core.full_bit_board_long);
});
connect_four.core.random_move = (function connect_four$core$random_move(board){

var map__5871 = board;
var map__5871__$1 = ((cljs.core.seq_QMARK_(map__5871))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5871):map__5871);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5871__$1,cljs.core.constant$keyword$_COLON_state);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5871__$1,cljs.core.constant$keyword$_COLON_columns);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5871__$1,cljs.core.constant$keyword$_COLON_rows);
var column_range = cljs.core.range.cljs$core$IFn$_invoke$arity$1(columns);
while(true){
var move = cljs.core.rand_nth(column_range);
if((cljs.core.count((function (){var G__5872 = move;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__5872) : state.call(null,G__5872));
})()) < rows)){
return move;
} else {
var G__5873 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([move], true),column_range);
column_range = G__5873;
continue;
}
break;
}
});
connect_four.core.simulate = (function connect_four$core$simulate(game_state,move){

var current_state = game_state;
var current_move = move;
while(true){
var map__5876 = connect_four.core.play(current_state,current_move);
var map__5876__$1 = ((cljs.core.seq_QMARK_(map__5876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5876):map__5876);
var next_state = map__5876__$1;
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5876__$1,cljs.core.constant$keyword$_COLON_boards);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5876__$1,cljs.core.constant$keyword$_COLON_winner);
var game_board = (function (){var G__5877 = (0);
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__5877) : boards.call(null,G__5877));
})();
if(cljs.core.some_QMARK_(winner)){
return winner;
} else {
if(cljs.core.truth_(connect_four.core.full_QMARK_(cljs.core.constant$keyword$_COLON_bits.cljs$core$IFn$_invoke$arity$1(game_board)))){
return false;
} else {
var G__5878 = next_state;
var G__5879 = connect_four.core.random_move(game_board);
current_state = G__5878;
current_move = G__5879;
continue;

}
}
break;
}
});
connect_four.core.collect_statistics = (function connect_four$core$collect_statistics(game_state){
var results = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_total,(0)], null);
var num_iters = (5000);
while(true){
if((num_iters === (0))){
return results;
} else {
var map__5883 = results;
var map__5883__$1 = ((cljs.core.seq_QMARK_(map__5883))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5883):map__5883);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5883__$1,cljs.core.constant$keyword$_COLON_total);
var map__5884 = game_state;
var map__5884__$1 = ((cljs.core.seq_QMARK_(map__5884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5884):map__5884);
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5884__$1,cljs.core.constant$keyword$_COLON_player);
var boards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5884__$1,cljs.core.constant$keyword$_COLON_boards);
var next_move = connect_four.core.random_move((function (){var G__5885 = (0);
return (boards.cljs$core$IFn$_invoke$arity$1 ? boards.cljs$core$IFn$_invoke$arity$1(G__5885) : boards.call(null,G__5885));
})());
var winner = (function (){var or__4076__auto__ = connect_four.core.simulate(game_state,next_move);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_draw;
}
})();
var wins = (function (){var or__4076__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_move,winner], null));
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return (0);
}
})();
var G__5886 = cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(results,cljs.core.constant$keyword$_COLON_total,(total + (1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_move,winner], null),(wins + (1)));
var G__5887 = (num_iters - (1));
results = G__5886;
num_iters = G__5887;
continue;
}
break;
}
});
connect_four.core.find_best_move = (function connect_four$core$find_best_move(game_state){
var columns = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$_COLON_columns.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$_COLON_boards.cljs$core$IFn$_invoke$arity$1(game_state).call(null,(0))));
var results = connect_four.core.collect_statistics(game_state);
var win_percentages = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4832__auto__ = ((function (columns,results){
return (function connect_four$core$find_best_move_$_iter__5898(s__5899){
return (new cljs.core.LazySeq(null,((function (columns,results){
return (function (){
var s__5899__$1 = s__5899;
while(true){
var temp__4126__auto__ = cljs.core.seq(s__5899__$1);
if(temp__4126__auto__){
var s__5899__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5899__$2)){
var c__4830__auto__ = cljs.core.chunk_first(s__5899__$2);
var size__4831__auto__ = cljs.core.count(c__4830__auto__);
var b__5901 = cljs.core.chunk_buffer(size__4831__auto__);
if((function (){var i__5900 = (0);
while(true){
if((i__5900 < size__4831__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4830__auto__,i__5900);
cljs.core.chunk_append(b__5901,(cljs.core.truth_((function (){var G__5906 = x;
return (results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(G__5906) : results.call(null,G__5906));
})())?(function (){var wins = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(2)], null));
var losses = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null));
return new cljs.core.PersistentArrayMap.fromArray([x,(wins / (wins + losses))], true, false);
})():new cljs.core.PersistentArrayMap.fromArray([x,(0)], true, false)));

var G__5908 = (i__5900 + (1));
i__5900 = G__5908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5901),connect_four$core$find_best_move_$_iter__5898(cljs.core.chunk_rest(s__5899__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5901),null);
}
} else {
var x = cljs.core.first(s__5899__$2);
return cljs.core.cons((cljs.core.truth_((function (){var G__5907 = x;
return (results.cljs$core$IFn$_invoke$arity$1 ? results.cljs$core$IFn$_invoke$arity$1(G__5907) : results.call(null,G__5907));
})())?(function (){var wins = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(2)], null));
var losses = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(1)], null));
return new cljs.core.PersistentArrayMap.fromArray([x,(wins / (wins + losses))], true, false);
})():new cljs.core.PersistentArrayMap.fromArray([x,(0)], true, false)),connect_four$core$find_best_move_$_iter__5898(cljs.core.rest(s__5899__$2)));
}
} else {
return null;
}
break;
}
});})(columns,results))
,null,null));
});})(columns,results))
;
return iter__4832__auto__(columns);
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,win_percentages);
});
