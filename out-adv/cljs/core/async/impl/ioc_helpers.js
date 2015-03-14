// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$_COLON_finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t21179 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t21179 = (function (f,fn_handler,meta21180){
this.f = f;
this.fn_handler = fn_handler;
this.meta21180 = meta21180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t21179.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.impl.ioc_helpers.t21179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t21179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t21179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21181){
var self__ = this;
var _21181__$1 = this;
return self__.meta21180;
});

cljs.core.async.impl.ioc_helpers.t21179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21181,meta21180__$1){
var self__ = this;
var _21181__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t21179(self__.f,self__.fn_handler,meta21180__$1));
});

cljs.core.async.impl.ioc_helpers.t21179.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t21179.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t21179";

cljs.core.async.impl.ioc_helpers.t21179.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async.impl.ioc-helpers/t21179");
});

cljs.core.async.impl.ioc_helpers.__GT_t21179 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t21179(f__$1,fn_handler__$1,meta21180){
return (new cljs.core.async.impl.ioc_helpers.t21179(f__$1,fn_handler__$1,meta21180));
});

}

return (new cljs.core.async.impl.ioc_helpers.t21179(f,cljs$core$async$impl$ioc_helpers$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e21183){if((e21183 instanceof Object)){
var ex = e21183;
cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e21183;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_21187_21190 = state;
(statearr_21187_21190[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);

(statearr_21187_21190[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_21188_21191 = state;
(statearr_21188_21191[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21189 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21189) : cljs.core.deref.call(null,G__21189));
})());

(statearr_21188_21191[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_21195_21198 = state;
(statearr_21195_21198[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = ret_val);

(statearr_21195_21198[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4124__auto__)){
var cb = temp__4124__auto__;
var statearr_21196_21199 = state;
(statearr_21196_21199[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__21197 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21197) : cljs.core.deref.call(null,G__21197));
})());

(statearr_21196_21199[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4679__auto__,k__4680__auto__){
var self__ = this;
var this__4679__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4679__auto____$1,k__4680__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4681__auto__,k21201,else__4682__auto__){
var self__ = this;
var this__4681__auto____$1 = this;
var G__21203 = (((k21201 instanceof cljs.core.Keyword))?k21201.fqn:null);
switch (G__21203) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21201,else__4682__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4693__auto__,writer__4694__auto__,opts__4695__auto__){
var self__ = this;
var this__4693__auto____$1 = this;
var pr_pair__4696__auto__ = ((function (this__4693__auto____$1){
return (function (keyval__4697__auto__){
return cljs.core.pr_sequential_writer(writer__4694__auto__,cljs.core.pr_writer,""," ","",opts__4695__auto__,keyval__4697__auto__);
});})(this__4693__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4694__auto__,pr_pair__4696__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4695__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4677__auto__){
var self__ = this;
var this__4677__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4673__auto__){
var self__ = this;
var this__4673__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4683__auto__){
var self__ = this;
var this__4683__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4674__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4675__auto__,other__4676__auto__){
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

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4688__auto__,k__4689__auto__){
var self__ = this;
var this__4688__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$_COLON_finally_block,null,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.constant$keyword$_COLON_catch_exception,null,cljs.core.constant$keyword$_COLON_prev,null,cljs.core.constant$keyword$_COLON_continue_block,null], null), null),k__4689__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4688__auto____$1),self__.__meta),k__4689__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4689__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4686__auto__,k__4687__auto__,G__21200){
var self__ = this;
var this__4686__auto____$1 = this;
var pred__21204 = cljs.core.keyword_identical_QMARK_;
var expr__21205 = k__4687__auto__;
if(cljs.core.truth_((function (){var G__21207 = cljs.core.constant$keyword$_COLON_catch_block;
var G__21208 = expr__21205;
return (pred__21204.cljs$core$IFn$_invoke$arity$2 ? pred__21204.cljs$core$IFn$_invoke$arity$2(G__21207,G__21208) : pred__21204.call(null,G__21207,G__21208));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__21200,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21209 = cljs.core.constant$keyword$_COLON_catch_exception;
var G__21210 = expr__21205;
return (pred__21204.cljs$core$IFn$_invoke$arity$2 ? pred__21204.cljs$core$IFn$_invoke$arity$2(G__21209,G__21210) : pred__21204.call(null,G__21209,G__21210));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__21200,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21211 = cljs.core.constant$keyword$_COLON_finally_block;
var G__21212 = expr__21205;
return (pred__21204.cljs$core$IFn$_invoke$arity$2 ? pred__21204.cljs$core$IFn$_invoke$arity$2(G__21211,G__21212) : pred__21204.call(null,G__21211,G__21212));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__21200,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21213 = cljs.core.constant$keyword$_COLON_continue_block;
var G__21214 = expr__21205;
return (pred__21204.cljs$core$IFn$_invoke$arity$2 ? pred__21204.cljs$core$IFn$_invoke$arity$2(G__21213,G__21214) : pred__21204.call(null,G__21213,G__21214));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__21200,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21215 = cljs.core.constant$keyword$_COLON_prev;
var G__21216 = expr__21205;
return (pred__21204.cljs$core$IFn$_invoke$arity$2 ? pred__21204.cljs$core$IFn$_invoke$arity$2(G__21215,G__21216) : pred__21204.call(null,G__21215,G__21216));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__21200,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4687__auto__,G__21200),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4691__auto__){
var self__ = this;
var this__4691__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_catch_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_finally_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_continue_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$_COLON_prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4678__auto__,G__21200){
var self__ = this;
var this__4678__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__21200,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4684__auto__,entry__4685__auto__){
var self__ = this;
var this__4684__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4685__auto__)){
return cljs.core._assoc(this__4684__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4685__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4684__auto____$1,entry__4685__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4713__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4713__auto__,writer__4714__auto__){
return cljs.core._write(writer__4714__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__21202){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(G__21202),cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(G__21202),cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(G__21202),cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(G__21202),cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(G__21202),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21202,cljs.core.constant$keyword$_COLON_catch_block,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,cljs.core.constant$keyword$_COLON_finally_block,cljs.core.constant$keyword$_COLON_continue_block,cljs.core.constant$keyword$_COLON_prev], 0)),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_21219 = state;
(statearr_21219[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));

return statearr_21219;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);
var catch_block = cljs.core.constant$keyword$_COLON_catch_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.constant$keyword$_COLON_catch_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__4064__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
var and__4064__auto____$1 = catch_block;
if(cljs.core.truth_(and__4064__auto____$1)){
return (exception instanceof catch_exception);
} else {
return and__4064__auto____$1;
}
} else {
return and__4064__auto__;
}
})())){
var statearr_21225 = state;
(statearr_21225[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);

(statearr_21225[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);

(statearr_21225[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);

(statearr_21225[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$_COLON_catch_block,null,cljs.core.array_seq([cljs.core.constant$keyword$_COLON_catch_exception,null], 0)));

return statearr_21225;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__4064__auto__;
}
})())){
var statearr_21226_21230 = state;
(statearr_21226_21230[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__21231 = state;
state = G__21231;
continue;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = exception;
if(cljs.core.truth_(and__4064__auto__)){
var and__4064__auto____$1 = cljs.core.not(catch_block);
if(and__4064__auto____$1){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4064__auto____$1;
}
} else {
return and__4064__auto__;
}
})())){
var statearr_21227 = state;
(statearr_21227[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_21227[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_21227;
} else {
if(cljs.core.truth_((function (){var and__4064__auto__ = cljs.core.not(exception);
if(and__4064__auto__){
return cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__4064__auto__;
}
})())){
var statearr_21228 = state;
(statearr_21228[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_21228[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$_COLON_finally_block,null));

return statearr_21228;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$_COLON_finally_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_21229 = state;
(statearr_21229[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$_COLON_continue_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_21229[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$_COLON_prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_21229;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});