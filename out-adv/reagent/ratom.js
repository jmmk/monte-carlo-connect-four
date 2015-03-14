// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = (function (){var G__17533 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17533) : cljs.core.atom.call(null,G__17533));
})();
}
reagent.ratom.running = (function reagent$ratom$running(){
var G__17535 = reagent.ratom._running;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17535) : cljs.core.deref.call(null,G__17535));
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_17537 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17537;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj17539 = {};
return obj17539;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,"#<Atom: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17540 = this$__$1;
return goog.getUid(G__17540);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((function (){var G__17541 = new_value;
return (self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(G__17541) : self__.validator.call(null,G__17541));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))], 0)))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17542 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17542) : f.call(null,G__17542));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17543 = self__.state;
var G__17544 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17543,G__17544) : f.call(null,G__17543,G__17544));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17545 = self__.state;
var G__17546 = x;
var G__17547 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17545,G__17546,G__17547) : f.call(null,G__17545,G__17546,G__17547));
})());
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17548_17552 = key;
var G__17549_17553 = this$__$1;
var G__17550_17554 = oldval;
var G__17551_17555 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17548_17552,G__17549_17553,G__17550_17554,G__17551_17555) : f.call(null,G__17548_17552,G__17549_17553,G__17550_17554,G__17551_17555));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * @param {...*} var_args
 */
reagent.ratom.atom = (function() {
var reagent$ratom$atom = null;
var reagent$ratom$atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var reagent$ratom$atom__2 = (function() { 
var G__17559__delegate = function (x,p__17556){
var map__17558 = p__17556;
var map__17558__$1 = ((cljs.core.seq_QMARK_(map__17558))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17558):map__17558);
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17558__$1,cljs.core.constant$keyword$_COLON_validator);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17558__$1,cljs.core.constant$keyword$_COLON_meta);
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__17559 = function (x,var_args){
var p__17556 = null;
if (arguments.length > 1) {
var G__17560__i = 0, G__17560__a = new Array(arguments.length -  1);
while (G__17560__i < G__17560__a.length) {G__17560__a[G__17560__i] = arguments[G__17560__i + 1]; ++G__17560__i;}
  p__17556 = new cljs.core.IndexedSeq(G__17560__a,0);
} 
return G__17559__delegate.call(this,x,p__17556);};
G__17559.cljs$lang$maxFixedArity = 1;
G__17559.cljs$lang$applyTo = (function (arglist__17561){
var x = cljs.core.first(arglist__17561);
var p__17556 = cljs.core.rest(arglist__17561);
return G__17559__delegate(x,p__17556);
});
G__17559.cljs$core$IFn$_invoke$arity$variadic = G__17559__delegate;
return G__17559;
})()
;
reagent$ratom$atom = function(x,var_args){
var p__17556 = var_args;
switch(arguments.length){
case 1:
return reagent$ratom$atom__1.call(this,x);
default:
var G__17562 = null;
if (arguments.length > 1) {
var G__17563__i = 0, G__17563__a = new Array(arguments.length -  1);
while (G__17563__i < G__17563__a.length) {G__17563__a[G__17563__i] = arguments[G__17563__i + 1]; ++G__17563__i;}
G__17562 = new cljs.core.IndexedSeq(G__17563__a,0);
}
return reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$ratom$atom.cljs$lang$maxFixedArity = 1;
reagent$ratom$atom.cljs$lang$applyTo = reagent$ratom$atom__2.cljs$lang$applyTo;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$1 = reagent$ratom$atom__1;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return reagent$ratom$atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__17570 = self__.ratom;
if(G__17570){
var bit__4757__auto__ = (G__17570.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4757__auto__) || (G__17570.cljs$core$IDeref$)){
return true;
} else {
if((!G__17570.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17570);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17570);
}
})())?(function (){var G__17571 = ((function (this$){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__17574 = self__.ratom;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17574) : cljs.core.deref.call(null,G__17574));
})(),self__.path);
});})(this$))
;
var G__17572 = cljs.core.constant$keyword$_COLON_on_set;
var G__17573 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY))?((function (G__17571,G__17572,this$){
return (function (p1__17565_SHARP_,p2__17564_SHARP_){
var G__17575 = self__.ratom;
var G__17576 = p2__17564_SHARP_;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17575,G__17576) : cljs.core.reset_BANG_.call(null,G__17575,G__17576));
});})(G__17571,G__17572,this$))
:((function (G__17571,G__17572,this$){
return (function (p1__17567_SHARP_,p2__17566_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,p2__17566_SHARP_);
});})(G__17571,G__17572,this$))
);
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17571,G__17572,G__17573) : reagent.ratom.make_reaction.call(null,G__17571,G__17572,G__17573));
})():(function (){var G__17577 = ((function (this$){
return (function (){
var G__17580 = self__.path;
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(G__17580) : self__.ratom.call(null,G__17580));
});})(this$))
;
var G__17578 = cljs.core.constant$keyword$_COLON_on_set;
var G__17579 = ((function (G__17577,G__17578,this$){
return (function (p1__17569_SHARP_,p2__17568_SHARP_){
var G__17581 = self__.path;
var G__17582 = p2__17568_SHARP_;
return (self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(G__17581,G__17582) : self__.ratom.call(null,G__17581,G__17582));
});})(G__17577,G__17578,this$))
;
return (reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__17577,G__17578,G__17579) : reagent.ratom.make_reaction.call(null,G__17577,G__17578,G__17579));
})());
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_17583 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17583;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer(a__$1._peek(),writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_(this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$2(a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$3(a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$4(a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.cljs$core$IFn$_invoke$arity$5(a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches(this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch(this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch(this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref(this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__17588 = path;
if(G__17588){
var bit__4757__auto__ = (G__17588.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4757__auto__) || (G__17588.cljs$core$IDeref$)){
return true;
} else {
if((!G__17588.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17588);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,G__17588);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0))),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__17589 = path;
if(G__17589){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17589.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__17589.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__17589);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__17589);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4076__auto__ = (function (){var G__17591 = src;
if(G__17591){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17591.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__17591.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__17591);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,G__17591);
}
})();
if(or__4076__auto__){
return or__4076__auto__;
} else {
return (cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))], 0)))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj17593 = {};
return obj17593;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (reagent.ratom.dispose_BANG_[(function (){var G__17597 = x__4720__auto__;
return goog.typeOf(G__17597);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj17599 = {};
return obj17599;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (reagent.ratom.run[(function (){var G__17603 = x__4720__auto__;
return goog.typeOf(G__17603);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (reagent.ratom.run["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj17605 = {};
return obj17605;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (reagent.ratom._update_watching[(function (){var G__17609 = x__4720__auto__;
return goog.typeOf(G__17609);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4064__auto__ = k;
if(and__4064__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4064__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4720__auto__ = (((k == null))?null:k);
return (function (){var or__4076__auto__ = (reagent.ratom._handle_change[(function (){var G__17613 = x__4720__auto__;
return goog.typeOf(G__17613);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (reagent.ratom._peek_at[(function (){var G__17617 = x__4720__auto__;
return goog.typeOf(G__17617);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4064__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4064__auto__)){
return (cljs.core.not(self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4064__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4076__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__17618_17644 = cljs.core.seq(derefed);
var chunk__17619_17645 = null;
var count__17620_17646 = (0);
var i__17621_17647 = (0);
while(true){
if((i__17621_17647 < count__17620_17646)){
var w_17648 = chunk__17619_17645.cljs$core$IIndexed$_nth$arity$2(null,i__17621_17647);
if(cljs.core.contains_QMARK_(self__.watching,w_17648)){
} else {
cljs.core.add_watch(w_17648,this$__$1,reagent.ratom._handle_change);
}

var G__17649 = seq__17618_17644;
var G__17650 = chunk__17619_17645;
var G__17651 = count__17620_17646;
var G__17652 = (i__17621_17647 + (1));
seq__17618_17644 = G__17649;
chunk__17619_17645 = G__17650;
count__17620_17646 = G__17651;
i__17621_17647 = G__17652;
continue;
} else {
var temp__4126__auto___17653 = cljs.core.seq(seq__17618_17644);
if(temp__4126__auto___17653){
var seq__17618_17654__$1 = temp__4126__auto___17653;
if(cljs.core.chunked_seq_QMARK_(seq__17618_17654__$1)){
var c__4863__auto___17655 = cljs.core.chunk_first(seq__17618_17654__$1);
var G__17656 = cljs.core.chunk_rest(seq__17618_17654__$1);
var G__17657 = c__4863__auto___17655;
var G__17658 = cljs.core.count(c__4863__auto___17655);
var G__17659 = (0);
seq__17618_17644 = G__17656;
chunk__17619_17645 = G__17657;
count__17620_17646 = G__17658;
i__17621_17647 = G__17659;
continue;
} else {
var w_17660 = cljs.core.first(seq__17618_17654__$1);
if(cljs.core.contains_QMARK_(self__.watching,w_17660)){
} else {
cljs.core.add_watch(w_17660,this$__$1,reagent.ratom._handle_change);
}

var G__17661 = cljs.core.next(seq__17618_17654__$1);
var G__17662 = null;
var G__17663 = (0);
var G__17664 = (0);
seq__17618_17644 = G__17661;
chunk__17619_17645 = G__17662;
count__17620_17646 = G__17663;
i__17621_17647 = G__17664;
continue;
}
} else {
}
}
break;
}

var seq__17622_17665 = cljs.core.seq(self__.watching);
var chunk__17623_17666 = null;
var count__17624_17667 = (0);
var i__17625_17668 = (0);
while(true){
if((i__17625_17668 < count__17624_17667)){
var w_17669 = chunk__17623_17666.cljs$core$IIndexed$_nth$arity$2(null,i__17625_17668);
if(cljs.core.contains_QMARK_(derefed,w_17669)){
} else {
cljs.core.remove_watch(w_17669,this$__$1);
}

var G__17670 = seq__17622_17665;
var G__17671 = chunk__17623_17666;
var G__17672 = count__17624_17667;
var G__17673 = (i__17625_17668 + (1));
seq__17622_17665 = G__17670;
chunk__17623_17666 = G__17671;
count__17624_17667 = G__17672;
i__17625_17668 = G__17673;
continue;
} else {
var temp__4126__auto___17674 = cljs.core.seq(seq__17622_17665);
if(temp__4126__auto___17674){
var seq__17622_17675__$1 = temp__4126__auto___17674;
if(cljs.core.chunked_seq_QMARK_(seq__17622_17675__$1)){
var c__4863__auto___17676 = cljs.core.chunk_first(seq__17622_17675__$1);
var G__17677 = cljs.core.chunk_rest(seq__17622_17675__$1);
var G__17678 = c__4863__auto___17676;
var G__17679 = cljs.core.count(c__4863__auto___17676);
var G__17680 = (0);
seq__17622_17665 = G__17677;
chunk__17623_17666 = G__17678;
count__17624_17667 = G__17679;
i__17625_17668 = G__17680;
continue;
} else {
var w_17681 = cljs.core.first(seq__17622_17675__$1);
if(cljs.core.contains_QMARK_(derefed,w_17681)){
} else {
cljs.core.remove_watch(w_17681,this$__$1);
}

var G__17682 = cljs.core.next(seq__17622_17675__$1);
var G__17683 = null;
var G__17684 = (0);
var G__17685 = (0);
seq__17622_17665 = G__17682;
chunk__17623_17666 = G__17683;
count__17624_17667 = G__17684;
i__17625_17668 = G__17685;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not(self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_17626 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_17626;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash(this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__17627 = this$__$1;
return goog.getUid(G__17627);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__17628_17686 = cljs.core.seq(self__.watching);
var chunk__17629_17687 = null;
var count__17630_17688 = (0);
var i__17631_17689 = (0);
while(true){
if((i__17631_17689 < count__17630_17688)){
var w_17690 = chunk__17629_17687.cljs$core$IIndexed$_nth$arity$2(null,i__17631_17689);
cljs.core.remove_watch(w_17690,this$__$1);

var G__17691 = seq__17628_17686;
var G__17692 = chunk__17629_17687;
var G__17693 = count__17630_17688;
var G__17694 = (i__17631_17689 + (1));
seq__17628_17686 = G__17691;
chunk__17629_17687 = G__17692;
count__17630_17688 = G__17693;
i__17631_17689 = G__17694;
continue;
} else {
var temp__4126__auto___17695 = cljs.core.seq(seq__17628_17686);
if(temp__4126__auto___17695){
var seq__17628_17696__$1 = temp__4126__auto___17695;
if(cljs.core.chunked_seq_QMARK_(seq__17628_17696__$1)){
var c__4863__auto___17697 = cljs.core.chunk_first(seq__17628_17696__$1);
var G__17698 = cljs.core.chunk_rest(seq__17628_17696__$1);
var G__17699 = c__4863__auto___17697;
var G__17700 = cljs.core.count(c__4863__auto___17697);
var G__17701 = (0);
seq__17628_17686 = G__17698;
chunk__17629_17687 = G__17699;
count__17630_17688 = G__17700;
i__17631_17689 = G__17701;
continue;
} else {
var w_17702 = cljs.core.first(seq__17628_17696__$1);
cljs.core.remove_watch(w_17702,this$__$1);

var G__17703 = cljs.core.next(seq__17628_17696__$1);
var G__17704 = null;
var G__17705 = (0);
var G__17706 = (0);
seq__17628_17686 = G__17703;
chunk__17629_17687 = G__17704;
count__17630_17688 = G__17705;
i__17631_17689 = G__17706;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return (self__.on_dispose.cljs$core$IFn$_invoke$arity$0 ? self__.on_dispose.cljs$core$IFn$_invoke$arity$0() : self__.on_dispose.call(null));
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

var G__17632_17707 = oldval;
var G__17633_17708 = newval;
(self__.on_set.cljs$core$IFn$_invoke$arity$2 ? self__.on_set.cljs$core$IFn$_invoke$arity$2(G__17632_17707,G__17633_17708) : self__.on_set.call(null,G__17632_17707,G__17633_17708));
} else {
}

cljs.core._notify_watches(a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17634 = reagent.ratom._peek_at(a__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__17634) : f__$1.call(null,G__17634));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17635 = reagent.ratom._peek_at(a__$1);
var G__17636 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__17635,G__17636) : f__$1.call(null,G__17635,G__17636));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17637 = reagent.ratom._peek_at(a__$1);
var G__17638 = x;
var G__17639 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__17637,G__17638,G__17639) : f__$1.call(null,G__17637,G__17638,G__17639));
})());
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,reagent.ratom._peek_at(a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed(self__.f,this$__$1);
var derefed = reagent.ratom.captured(this$__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(derefed,self__.watching)){
reagent.ratom._update_watching(this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches(this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f__$1){
var G__17640_17709 = key;
var G__17641_17710 = this$__$1;
var G__17642_17711 = oldval;
var G__17643_17712 = newval;
(f__$1.cljs$core$IFn$_invoke$arity$4 ? f__$1.cljs$core$IFn$_invoke$arity$4(G__17640_17709,G__17641_17710,G__17642_17711,G__17643_17712) : f__$1.call(null,G__17640_17709,G__17641_17710,G__17642_17711,G__17643_17712));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);

if((cljs.core.empty_QMARK_(self__.watches)) && (cljs.core.not(self__.auto_run))){
return reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4076__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run(this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_17713 = self__.state;
self__.state = (function (){return (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
})();

if((oldstate_17713 === self__.state)){
} else {
cljs.core._notify_watches(this$__$1,oldstate_17713,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
 * @param {...*} var_args
 */
reagent.ratom.make_reaction = (function() { 
var reagent$ratom$make_reaction__delegate = function (f,p__17714){
var map__17716 = p__17714;
var map__17716__$1 = ((cljs.core.seq_QMARK_(map__17716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17716):map__17716);
var derefed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$_COLON_derefed);
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$_COLON_on_dispose);
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$_COLON_on_set);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17716__$1,cljs.core.constant$keyword$_COLON_auto_run);
var runner = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.ratom._running,cljs.core.inc);
} else {
}

reaction.reagent$ratom$IComputedImpl$_update_watching$arity$2(null,derefed);
}

return reaction;
};
var reagent$ratom$make_reaction = function (f,var_args){
var p__17714 = null;
if (arguments.length > 1) {
var G__17717__i = 0, G__17717__a = new Array(arguments.length -  1);
while (G__17717__i < G__17717__a.length) {G__17717__a[G__17717__i] = arguments[G__17717__i + 1]; ++G__17717__i;}
  p__17714 = new cljs.core.IndexedSeq(G__17717__a,0);
} 
return reagent$ratom$make_reaction__delegate.call(this,f,p__17714);};
reagent$ratom$make_reaction.cljs$lang$maxFixedArity = 1;
reagent$ratom$make_reaction.cljs$lang$applyTo = (function (arglist__17718){
var f = cljs.core.first(arglist__17718);
var p__17714 = cljs.core.rest(arglist__17718);
return reagent$ratom$make_reaction__delegate(f,p__17714);
});
reagent$ratom$make_reaction.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$make_reaction__delegate;
return reagent$ratom$make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write(writer,"#<wrap: ");

cljs.core.pr_writer(self__.state,writer,opts);

return cljs.core._write(writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv(((function (this$__$1){
return (function (_,key,f){
var G__17719_17730 = key;
var G__17720_17731 = this$__$1;
var G__17721_17732 = oldval;
var G__17722_17733 = newval;
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__17719_17730,G__17720_17731,G__17721_17732,G__17722_17733) : f.call(null,G__17719_17730,G__17720_17731,G__17721_17732,G__17722_17733));

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17723 = self__.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17723) : f.call(null,G__17723));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17724 = self__.state;
var G__17725 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__17724,G__17725) : f.call(null,G__17724,G__17725));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__17726 = self__.state;
var G__17727 = x;
var G__17728 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__17726,G__17727,G__17728) : f.call(null,G__17726,G__17727,G__17728));
})());
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches(this$__$1,oldval,newval);
}

var G__17729_17734 = newval;
(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(G__17729_17734) : self__.callback.call(null,G__17729_17734));

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4064__auto__ = self__.changed;
if(cljs.core.truth_(and__4064__auto__)){
return cljs.core.some_QMARK_(reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4064__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});
