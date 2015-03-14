// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t17803 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17803 = (function (f,fn_handler,meta17804){
this.f = f;
this.fn_handler = fn_handler;
this.meta17804 = meta17804;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17803.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17805){
var self__ = this;
var _17805__$1 = this;
return self__.meta17804;
});

cljs.core.async.t17803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17805,meta17804__$1){
var self__ = this;
var _17805__$1 = this;
return (new cljs.core.async.t17803(self__.f,self__.fn_handler,meta17804__$1));
});

cljs.core.async.t17803.cljs$lang$type = true;

cljs.core.async.t17803.cljs$lang$ctorStr = "cljs.core.async/t17803";

cljs.core.async.t17803.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17803");
});

cljs.core.async.__GT_t17803 = (function cljs$core$async$fn_handler_$___GT_t17803(f__$1,fn_handler__$1,meta17804){
return (new cljs.core.async.t17803(f__$1,fn_handler__$1,meta17804));
});

}

return (new cljs.core.async.t17803(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__17807 = buff;
if(G__17807){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17807.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17807.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17807);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17807);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1(null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_17824 = (function (){var G__17821 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17821) : cljs.core.deref.call(null,G__17821));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17822_17825 = val_17824;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17822_17825) : fn1.call(null,G__17822_17825));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17824,ret){
return (function (){
var G__17823 = val_17824;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17823) : fn1.call(null,G__17823));
});})(val_17824,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
var G__17834 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17834) : cljs.core.deref.call(null,G__17834));
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = (function (){var G__17835 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17835) : cljs.core.deref.call(null,G__17835));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17836_17838 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17836_17838) : fn1.call(null,G__17836_17838));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17837 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17837) : fn1.call(null,G__17837));
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4963__auto___17839 = n;
var x_17840 = (0);
while(true){
if((x_17840 < n__4963__auto___17839)){
(a[x_17840] = (0));

var G__17841 = (x_17840 + (1));
x_17840 = G__17841;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__17842 = (i + (1));
i = G__17842;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17850 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17850) : cljs.core.atom.call(null,G__17850));
})();
if(typeof cljs.core.async.t17851 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17851 = (function (flag,alt_flag,meta17852){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17852 = meta17852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17851.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17854 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17854) : cljs.core.deref.call(null,G__17854));
});})(flag))
;

cljs.core.async.t17851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17855_17857 = self__.flag;
var G__17856_17858 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17855_17857,G__17856_17858) : cljs.core.reset_BANG_.call(null,G__17855_17857,G__17856_17858));

return true;
});})(flag))
;

cljs.core.async.t17851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17853){
var self__ = this;
var _17853__$1 = this;
return self__.meta17852;
});})(flag))
;

cljs.core.async.t17851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17853,meta17852__$1){
var self__ = this;
var _17853__$1 = this;
return (new cljs.core.async.t17851(self__.flag,self__.alt_flag,meta17852__$1));
});})(flag))
;

cljs.core.async.t17851.cljs$lang$type = true;

cljs.core.async.t17851.cljs$lang$ctorStr = "cljs.core.async/t17851";

cljs.core.async.t17851.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17851");
});})(flag))
;

cljs.core.async.__GT_t17851 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17851(flag__$1,alt_flag__$1,meta17852){
return (new cljs.core.async.t17851(flag__$1,alt_flag__$1,meta17852));
});})(flag))
;

}

return (new cljs.core.async.t17851(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17862 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17862 = (function (cb,flag,alt_handler,meta17863){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17863 = meta17863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17862.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17864){
var self__ = this;
var _17864__$1 = this;
return self__.meta17863;
});

cljs.core.async.t17862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17864,meta17863__$1){
var self__ = this;
var _17864__$1 = this;
return (new cljs.core.async.t17862(self__.cb,self__.flag,self__.alt_handler,meta17863__$1));
});

cljs.core.async.t17862.cljs$lang$type = true;

cljs.core.async.t17862.cljs$lang$ctorStr = "cljs.core.async/t17862";

cljs.core.async.t17862.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17862");
});

cljs.core.async.__GT_t17862 = (function cljs$core$async$alt_handler_$___GT_t17862(cb__$1,flag__$1,alt_handler__$1,meta17863){
return (new cljs.core.async.t17862(cb__$1,flag__$1,alt_handler__$1,meta17863));
});

}

return (new cljs.core.async.t17862(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$_COLON_priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17872 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17872) : port.call(null,G__17872));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17873 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17873) : port.call(null,G__17873));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17865_SHARP_){
var G__17874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17865_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17874) : fret.call(null,G__17874));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17866_SHARP_){
var G__17875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17866_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17875) : fret.call(null,G__17875));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17876 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17876) : cljs.core.deref.call(null,G__17876));
})(),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17877 = (i + (1));
i = G__17877;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4076__auto__ = ret;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$_COLON_default)){
var temp__4126__auto__ = (function (){var and__4064__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4064__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4064__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$_COLON_default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$_COLON_default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__17878){
var map__17880 = p__17878;
var map__17880__$1 = ((cljs.core.seq_QMARK_(map__17880))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17880):map__17880);
var opts = map__17880__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__17878 = null;
if (arguments.length > 1) {
var G__17881__i = 0, G__17881__a = new Array(arguments.length -  1);
while (G__17881__i < G__17881__a.length) {G__17881__a[G__17881__i] = arguments[G__17881__i + 1]; ++G__17881__i;}
  p__17878 = new cljs.core.IndexedSeq(G__17881__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__17878);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__17882){
var ports = cljs.core.first(arglist__17882);
var p__17878 = cljs.core.rest(arglist__17882);
return cljs$core$async$alts_BANG___delegate(ports,p__17878);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__7703__auto___17980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___17980){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___17980){
return (function (state_17956){
var state_val_17957 = (state_17956[(1)]);
if((state_val_17957 === (7))){
var inst_17952 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
var statearr_17958_17981 = state_17956__$1;
(statearr_17958_17981[(2)] = inst_17952);

(statearr_17958_17981[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (1))){
var state_17956__$1 = state_17956;
var statearr_17959_17982 = state_17956__$1;
(statearr_17959_17982[(2)] = null);

(statearr_17959_17982[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (4))){
var inst_17935 = (state_17956[(7)]);
var inst_17935__$1 = (state_17956[(2)]);
var inst_17936 = (inst_17935__$1 == null);
var state_17956__$1 = (function (){var statearr_17960 = state_17956;
(statearr_17960[(7)] = inst_17935__$1);

return statearr_17960;
})();
if(cljs.core.truth_(inst_17936)){
var statearr_17961_17983 = state_17956__$1;
(statearr_17961_17983[(1)] = (5));

} else {
var statearr_17962_17984 = state_17956__$1;
(statearr_17962_17984[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (13))){
var state_17956__$1 = state_17956;
var statearr_17963_17985 = state_17956__$1;
(statearr_17963_17985[(2)] = null);

(statearr_17963_17985[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (6))){
var inst_17935 = (state_17956[(7)]);
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17956__$1,(11),to,inst_17935);
} else {
if((state_val_17957 === (3))){
var inst_17954 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17956__$1,inst_17954);
} else {
if((state_val_17957 === (12))){
var state_17956__$1 = state_17956;
var statearr_17964_17986 = state_17956__$1;
(statearr_17964_17986[(2)] = null);

(statearr_17964_17986[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (2))){
var state_17956__$1 = state_17956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17956__$1,(4),from);
} else {
if((state_val_17957 === (11))){
var inst_17945 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
if(cljs.core.truth_(inst_17945)){
var statearr_17965_17987 = state_17956__$1;
(statearr_17965_17987[(1)] = (12));

} else {
var statearr_17966_17988 = state_17956__$1;
(statearr_17966_17988[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (9))){
var state_17956__$1 = state_17956;
var statearr_17967_17989 = state_17956__$1;
(statearr_17967_17989[(2)] = null);

(statearr_17967_17989[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (5))){
var state_17956__$1 = state_17956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17968_17990 = state_17956__$1;
(statearr_17968_17990[(1)] = (8));

} else {
var statearr_17969_17991 = state_17956__$1;
(statearr_17969_17991[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (14))){
var inst_17950 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
var statearr_17970_17992 = state_17956__$1;
(statearr_17970_17992[(2)] = inst_17950);

(statearr_17970_17992[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (10))){
var inst_17942 = (state_17956[(2)]);
var state_17956__$1 = state_17956;
var statearr_17971_17993 = state_17956__$1;
(statearr_17971_17993[(2)] = inst_17942);

(statearr_17971_17993[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17957 === (8))){
var inst_17939 = cljs.core.async.close_BANG_(to);
var state_17956__$1 = state_17956;
var statearr_17972_17994 = state_17956__$1;
(statearr_17972_17994[(2)] = inst_17939);

(statearr_17972_17994[(1)] = (10));


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
}
}
}
}
});})(c__7703__auto___17980))
;
return ((function (switch__7623__auto__,c__7703__auto___17980){
return (function() {
var cljs$core$async$pipe_$_state_machine__7624__auto__ = null;
var cljs$core$async$pipe_$_state_machine__7624__auto____0 = (function (){
var statearr_17976 = [null,null,null,null,null,null,null,null];
(statearr_17976[(0)] = cljs$core$async$pipe_$_state_machine__7624__auto__);

(statearr_17976[(1)] = (1));

return statearr_17976;
});
var cljs$core$async$pipe_$_state_machine__7624__auto____1 = (function (state_17956){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_17956);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e17977){if((e17977 instanceof Object)){
var ex__7627__auto__ = e17977;
var statearr_17978_17995 = state_17956;
(statearr_17978_17995[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17956);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17977;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17996 = state_17956;
state_17956 = G__17996;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__7624__auto__ = function(state_17956){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__7624__auto____1.call(this,state_17956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__7624__auto____0;
cljs$core$async$pipe_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__7624__auto____1;
return cljs$core$async$pipe_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___17980))
})();
var state__7705__auto__ = (function (){var statearr_17979 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_17979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___17980);

return statearr_17979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___17980))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__18182){
var vec__18183 = p__18182;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18183,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18183,(1),null);
var job = vec__18183;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7703__auto___18367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results){
return (function (state_18188){
var state_val_18189 = (state_18188[(1)]);
if((state_val_18189 === (2))){
var inst_18185 = (state_18188[(2)]);
var inst_18186 = cljs.core.async.close_BANG_(res);
var state_18188__$1 = (function (){var statearr_18190 = state_18188;
(statearr_18190[(7)] = inst_18185);

return statearr_18190;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18188__$1,inst_18186);
} else {
if((state_val_18189 === (1))){
var state_18188__$1 = state_18188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18188__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results))
;
return ((function (switch__7623__auto__,c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_18194 = [null,null,null,null,null,null,null,null];
(statearr_18194[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__);

(statearr_18194[(1)] = (1));

return statearr_18194;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1 = (function (state_18188){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18188);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18195){if((e18195 instanceof Object)){
var ex__7627__auto__ = e18195;
var statearr_18196_18368 = state_18188;
(statearr_18196_18368[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18188);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18195;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18369 = state_18188;
state_18188 = G__18369;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = function(state_18188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1.call(this,state_18188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results))
})();
var state__7705__auto__ = (function (){var statearr_18197 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___18367);

return statearr_18197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___18367,res,vec__18183,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18198){
var vec__18199 = p__18198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18199,(1),null);
var job = vec__18199;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__18200_18370 = v;
var G__18201_18371 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__18200_18370,G__18201_18371) : xf.call(null,G__18200_18370,G__18201_18371));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4963__auto___18372 = n;
var __18373 = (0);
while(true){
if((__18373 < n__4963__auto___18372)){
var G__18202_18374 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18202_18374) {
case "async":
var c__7703__auto___18376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18373,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (__18373,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function (state_18215){
var state_val_18216 = (state_18215[(1)]);
if((state_val_18216 === (7))){
var inst_18211 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18217_18377 = state_18215__$1;
(statearr_18217_18377[(2)] = inst_18211);

(statearr_18217_18377[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18216 === (6))){
var state_18215__$1 = state_18215;
var statearr_18218_18378 = state_18215__$1;
(statearr_18218_18378[(2)] = null);

(statearr_18218_18378[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18216 === (5))){
var state_18215__$1 = state_18215;
var statearr_18219_18379 = state_18215__$1;
(statearr_18219_18379[(2)] = null);

(statearr_18219_18379[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18216 === (4))){
var inst_18205 = (state_18215[(2)]);
var inst_18206 = async(inst_18205);
var state_18215__$1 = state_18215;
if(cljs.core.truth_(inst_18206)){
var statearr_18220_18380 = state_18215__$1;
(statearr_18220_18380[(1)] = (5));

} else {
var statearr_18221_18381 = state_18215__$1;
(statearr_18221_18381[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18216 === (3))){
var inst_18213 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18215__$1,inst_18213);
} else {
if((state_val_18216 === (2))){
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18215__$1,(4),jobs);
} else {
if((state_val_18216 === (1))){
var state_18215__$1 = state_18215;
var statearr_18222_18382 = state_18215__$1;
(statearr_18222_18382[(2)] = null);

(statearr_18222_18382[(1)] = (2));


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
});})(__18373,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
;
return ((function (__18373,switch__7623__auto__,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_18226 = [null,null,null,null,null,null,null];
(statearr_18226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__);

(statearr_18226[(1)] = (1));

return statearr_18226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1 = (function (state_18215){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18215);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18227){if((e18227 instanceof Object)){
var ex__7627__auto__ = e18227;
var statearr_18228_18383 = state_18215;
(statearr_18228_18383[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18215);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18384 = state_18215;
state_18215 = G__18384;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = function(state_18215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1.call(this,state_18215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__;
})()
;})(__18373,switch__7623__auto__,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
})();
var state__7705__auto__ = (function (){var statearr_18229 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___18376);

return statearr_18229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(__18373,c__7703__auto___18376,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
);


break;
case "compute":
var c__7703__auto___18385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18373,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (__18373,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function (state_18242){
var state_val_18243 = (state_18242[(1)]);
if((state_val_18243 === (7))){
var inst_18238 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
var statearr_18244_18386 = state_18242__$1;
(statearr_18244_18386[(2)] = inst_18238);

(statearr_18244_18386[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (6))){
var state_18242__$1 = state_18242;
var statearr_18245_18387 = state_18242__$1;
(statearr_18245_18387[(2)] = null);

(statearr_18245_18387[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (5))){
var state_18242__$1 = state_18242;
var statearr_18246_18388 = state_18242__$1;
(statearr_18246_18388[(2)] = null);

(statearr_18246_18388[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (4))){
var inst_18232 = (state_18242[(2)]);
var inst_18233 = process(inst_18232);
var state_18242__$1 = state_18242;
if(cljs.core.truth_(inst_18233)){
var statearr_18247_18389 = state_18242__$1;
(statearr_18247_18389[(1)] = (5));

} else {
var statearr_18248_18390 = state_18242__$1;
(statearr_18248_18390[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (3))){
var inst_18240 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18242__$1,inst_18240);
} else {
if((state_val_18243 === (2))){
var state_18242__$1 = state_18242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18242__$1,(4),jobs);
} else {
if((state_val_18243 === (1))){
var state_18242__$1 = state_18242;
var statearr_18249_18391 = state_18242__$1;
(statearr_18249_18391[(2)] = null);

(statearr_18249_18391[(1)] = (2));


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
});})(__18373,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
;
return ((function (__18373,switch__7623__auto__,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_18253 = [null,null,null,null,null,null,null];
(statearr_18253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__);

(statearr_18253[(1)] = (1));

return statearr_18253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1 = (function (state_18242){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18242);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18254){if((e18254 instanceof Object)){
var ex__7627__auto__ = e18254;
var statearr_18255_18392 = state_18242;
(statearr_18255_18392[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18242);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18393 = state_18242;
state_18242 = G__18393;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = function(state_18242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1.call(this,state_18242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__;
})()
;})(__18373,switch__7623__auto__,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
})();
var state__7705__auto__ = (function (){var statearr_18256 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___18385);

return statearr_18256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(__18373,c__7703__auto___18385,G__18202_18374,n__4963__auto___18372,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18394 = (__18373 + (1));
__18373 = G__18394;
continue;
} else {
}
break;
}

var c__7703__auto___18395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___18395,jobs,results,process,async){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___18395,jobs,results,process,async){
return (function (state_18278){
var state_val_18279 = (state_18278[(1)]);
if((state_val_18279 === (9))){
var inst_18271 = (state_18278[(2)]);
var state_18278__$1 = (function (){var statearr_18280 = state_18278;
(statearr_18280[(7)] = inst_18271);

return statearr_18280;
})();
var statearr_18281_18396 = state_18278__$1;
(statearr_18281_18396[(2)] = null);

(statearr_18281_18396[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18279 === (8))){
var inst_18264 = (state_18278[(8)]);
var inst_18269 = (state_18278[(2)]);
var state_18278__$1 = (function (){var statearr_18282 = state_18278;
(statearr_18282[(9)] = inst_18269);

return statearr_18282;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18278__$1,(9),results,inst_18264);
} else {
if((state_val_18279 === (7))){
var inst_18274 = (state_18278[(2)]);
var state_18278__$1 = state_18278;
var statearr_18283_18397 = state_18278__$1;
(statearr_18283_18397[(2)] = inst_18274);

(statearr_18283_18397[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18279 === (6))){
var inst_18264 = (state_18278[(8)]);
var inst_18259 = (state_18278[(10)]);
var inst_18264__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18265 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18266 = [inst_18259,inst_18264__$1];
var inst_18267 = (new cljs.core.PersistentVector(null,2,(5),inst_18265,inst_18266,null));
var state_18278__$1 = (function (){var statearr_18284 = state_18278;
(statearr_18284[(8)] = inst_18264__$1);

return statearr_18284;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18278__$1,(8),jobs,inst_18267);
} else {
if((state_val_18279 === (5))){
var inst_18262 = cljs.core.async.close_BANG_(jobs);
var state_18278__$1 = state_18278;
var statearr_18285_18398 = state_18278__$1;
(statearr_18285_18398[(2)] = inst_18262);

(statearr_18285_18398[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18279 === (4))){
var inst_18259 = (state_18278[(10)]);
var inst_18259__$1 = (state_18278[(2)]);
var inst_18260 = (inst_18259__$1 == null);
var state_18278__$1 = (function (){var statearr_18286 = state_18278;
(statearr_18286[(10)] = inst_18259__$1);

return statearr_18286;
})();
if(cljs.core.truth_(inst_18260)){
var statearr_18287_18399 = state_18278__$1;
(statearr_18287_18399[(1)] = (5));

} else {
var statearr_18288_18400 = state_18278__$1;
(statearr_18288_18400[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18279 === (3))){
var inst_18276 = (state_18278[(2)]);
var state_18278__$1 = state_18278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18278__$1,inst_18276);
} else {
if((state_val_18279 === (2))){
var state_18278__$1 = state_18278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18278__$1,(4),from);
} else {
if((state_val_18279 === (1))){
var state_18278__$1 = state_18278;
var statearr_18289_18401 = state_18278__$1;
(statearr_18289_18401[(2)] = null);

(statearr_18289_18401[(1)] = (2));


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
});})(c__7703__auto___18395,jobs,results,process,async))
;
return ((function (switch__7623__auto__,c__7703__auto___18395,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_18293 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__);

(statearr_18293[(1)] = (1));

return statearr_18293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1 = (function (state_18278){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18278);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18294){if((e18294 instanceof Object)){
var ex__7627__auto__ = e18294;
var statearr_18295_18402 = state_18278;
(statearr_18295_18402[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18278);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18403 = state_18278;
state_18278 = G__18403;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = function(state_18278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1.call(this,state_18278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___18395,jobs,results,process,async))
})();
var state__7705__auto__ = (function (){var statearr_18296 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___18395);

return statearr_18296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___18395,jobs,results,process,async))
);


var c__7703__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto__,jobs,results,process,async){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto__,jobs,results,process,async){
return (function (state_18334){
var state_val_18335 = (state_18334[(1)]);
if((state_val_18335 === (7))){
var inst_18330 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18336_18404 = state_18334__$1;
(statearr_18336_18404[(2)] = inst_18330);

(statearr_18336_18404[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (20))){
var state_18334__$1 = state_18334;
var statearr_18337_18405 = state_18334__$1;
(statearr_18337_18405[(2)] = null);

(statearr_18337_18405[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (1))){
var state_18334__$1 = state_18334;
var statearr_18338_18406 = state_18334__$1;
(statearr_18338_18406[(2)] = null);

(statearr_18338_18406[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (4))){
var inst_18299 = (state_18334[(7)]);
var inst_18299__$1 = (state_18334[(2)]);
var inst_18300 = (inst_18299__$1 == null);
var state_18334__$1 = (function (){var statearr_18339 = state_18334;
(statearr_18339[(7)] = inst_18299__$1);

return statearr_18339;
})();
if(cljs.core.truth_(inst_18300)){
var statearr_18340_18407 = state_18334__$1;
(statearr_18340_18407[(1)] = (5));

} else {
var statearr_18341_18408 = state_18334__$1;
(statearr_18341_18408[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (15))){
var inst_18312 = (state_18334[(8)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18334__$1,(18),to,inst_18312);
} else {
if((state_val_18335 === (21))){
var inst_18325 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18342_18409 = state_18334__$1;
(statearr_18342_18409[(2)] = inst_18325);

(statearr_18342_18409[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (13))){
var inst_18327 = (state_18334[(2)]);
var state_18334__$1 = (function (){var statearr_18343 = state_18334;
(statearr_18343[(9)] = inst_18327);

return statearr_18343;
})();
var statearr_18344_18410 = state_18334__$1;
(statearr_18344_18410[(2)] = null);

(statearr_18344_18410[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (6))){
var inst_18299 = (state_18334[(7)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18334__$1,(11),inst_18299);
} else {
if((state_val_18335 === (17))){
var inst_18320 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
if(cljs.core.truth_(inst_18320)){
var statearr_18345_18411 = state_18334__$1;
(statearr_18345_18411[(1)] = (19));

} else {
var statearr_18346_18412 = state_18334__$1;
(statearr_18346_18412[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (3))){
var inst_18332 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18334__$1,inst_18332);
} else {
if((state_val_18335 === (12))){
var inst_18309 = (state_18334[(10)]);
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18334__$1,(14),inst_18309);
} else {
if((state_val_18335 === (2))){
var state_18334__$1 = state_18334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18334__$1,(4),results);
} else {
if((state_val_18335 === (19))){
var state_18334__$1 = state_18334;
var statearr_18347_18413 = state_18334__$1;
(statearr_18347_18413[(2)] = null);

(statearr_18347_18413[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (11))){
var inst_18309 = (state_18334[(2)]);
var state_18334__$1 = (function (){var statearr_18348 = state_18334;
(statearr_18348[(10)] = inst_18309);

return statearr_18348;
})();
var statearr_18349_18414 = state_18334__$1;
(statearr_18349_18414[(2)] = null);

(statearr_18349_18414[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (9))){
var state_18334__$1 = state_18334;
var statearr_18350_18415 = state_18334__$1;
(statearr_18350_18415[(2)] = null);

(statearr_18350_18415[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (5))){
var state_18334__$1 = state_18334;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18351_18416 = state_18334__$1;
(statearr_18351_18416[(1)] = (8));

} else {
var statearr_18352_18417 = state_18334__$1;
(statearr_18352_18417[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (14))){
var inst_18312 = (state_18334[(8)]);
var inst_18314 = (state_18334[(11)]);
var inst_18312__$1 = (state_18334[(2)]);
var inst_18313 = (inst_18312__$1 == null);
var inst_18314__$1 = cljs.core.not(inst_18313);
var state_18334__$1 = (function (){var statearr_18353 = state_18334;
(statearr_18353[(8)] = inst_18312__$1);

(statearr_18353[(11)] = inst_18314__$1);

return statearr_18353;
})();
if(inst_18314__$1){
var statearr_18354_18418 = state_18334__$1;
(statearr_18354_18418[(1)] = (15));

} else {
var statearr_18355_18419 = state_18334__$1;
(statearr_18355_18419[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (16))){
var inst_18314 = (state_18334[(11)]);
var state_18334__$1 = state_18334;
var statearr_18356_18420 = state_18334__$1;
(statearr_18356_18420[(2)] = inst_18314);

(statearr_18356_18420[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (10))){
var inst_18306 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18357_18421 = state_18334__$1;
(statearr_18357_18421[(2)] = inst_18306);

(statearr_18357_18421[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (18))){
var inst_18317 = (state_18334[(2)]);
var state_18334__$1 = state_18334;
var statearr_18358_18422 = state_18334__$1;
(statearr_18358_18422[(2)] = inst_18317);

(statearr_18358_18422[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18335 === (8))){
var inst_18303 = cljs.core.async.close_BANG_(to);
var state_18334__$1 = state_18334;
var statearr_18359_18423 = state_18334__$1;
(statearr_18359_18423[(2)] = inst_18303);

(statearr_18359_18423[(1)] = (10));


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
}
});})(c__7703__auto__,jobs,results,process,async))
;
return ((function (switch__7623__auto__,c__7703__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1 = (function (state_18334){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18334);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18364){if((e18364 instanceof Object)){
var ex__7627__auto__ = e18364;
var statearr_18365_18424 = state_18334;
(statearr_18365_18424[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18334);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18364;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18425 = state_18334;
state_18334 = G__18425;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__ = function(state_18334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1.call(this,state_18334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto__,jobs,results,process,async))
})();
var state__7705__auto__ = (function (){var statearr_18366 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_18366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto__,jobs,results,process,async))
);

return c__7703__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$_COLON_async);
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$_COLON_compute);
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__7703__auto___18548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___18548,tc,fc){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___18548,tc,fc){
return (function (state_18522){
var state_val_18523 = (state_18522[(1)]);
if((state_val_18523 === (7))){
var inst_18518 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
var statearr_18524_18549 = state_18522__$1;
(statearr_18524_18549[(2)] = inst_18518);

(statearr_18524_18549[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (1))){
var state_18522__$1 = state_18522;
var statearr_18525_18550 = state_18522__$1;
(statearr_18525_18550[(2)] = null);

(statearr_18525_18550[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (4))){
var inst_18499 = (state_18522[(7)]);
var inst_18499__$1 = (state_18522[(2)]);
var inst_18500 = (inst_18499__$1 == null);
var state_18522__$1 = (function (){var statearr_18526 = state_18522;
(statearr_18526[(7)] = inst_18499__$1);

return statearr_18526;
})();
if(cljs.core.truth_(inst_18500)){
var statearr_18527_18551 = state_18522__$1;
(statearr_18527_18551[(1)] = (5));

} else {
var statearr_18528_18552 = state_18522__$1;
(statearr_18528_18552[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (13))){
var state_18522__$1 = state_18522;
var statearr_18529_18553 = state_18522__$1;
(statearr_18529_18553[(2)] = null);

(statearr_18529_18553[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (6))){
var inst_18499 = (state_18522[(7)]);
var inst_18505 = (function (){var G__18530 = inst_18499;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18530) : p.call(null,G__18530));
})();
var state_18522__$1 = state_18522;
if(cljs.core.truth_(inst_18505)){
var statearr_18531_18554 = state_18522__$1;
(statearr_18531_18554[(1)] = (9));

} else {
var statearr_18532_18555 = state_18522__$1;
(statearr_18532_18555[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (3))){
var inst_18520 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18522__$1,inst_18520);
} else {
if((state_val_18523 === (12))){
var state_18522__$1 = state_18522;
var statearr_18533_18556 = state_18522__$1;
(statearr_18533_18556[(2)] = null);

(statearr_18533_18556[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (2))){
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18522__$1,(4),ch);
} else {
if((state_val_18523 === (11))){
var inst_18499 = (state_18522[(7)]);
var inst_18509 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18522__$1,(8),inst_18509,inst_18499);
} else {
if((state_val_18523 === (9))){
var state_18522__$1 = state_18522;
var statearr_18534_18557 = state_18522__$1;
(statearr_18534_18557[(2)] = tc);

(statearr_18534_18557[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (5))){
var inst_18502 = cljs.core.async.close_BANG_(tc);
var inst_18503 = cljs.core.async.close_BANG_(fc);
var state_18522__$1 = (function (){var statearr_18535 = state_18522;
(statearr_18535[(8)] = inst_18502);

return statearr_18535;
})();
var statearr_18536_18558 = state_18522__$1;
(statearr_18536_18558[(2)] = inst_18503);

(statearr_18536_18558[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (14))){
var inst_18516 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
var statearr_18537_18559 = state_18522__$1;
(statearr_18537_18559[(2)] = inst_18516);

(statearr_18537_18559[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (10))){
var state_18522__$1 = state_18522;
var statearr_18538_18560 = state_18522__$1;
(statearr_18538_18560[(2)] = fc);

(statearr_18538_18560[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18523 === (8))){
var inst_18511 = (state_18522[(2)]);
var state_18522__$1 = state_18522;
if(cljs.core.truth_(inst_18511)){
var statearr_18539_18561 = state_18522__$1;
(statearr_18539_18561[(1)] = (12));

} else {
var statearr_18540_18562 = state_18522__$1;
(statearr_18540_18562[(1)] = (13));

}

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
}
}
}
}
});})(c__7703__auto___18548,tc,fc))
;
return ((function (switch__7623__auto__,c__7703__auto___18548,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__7624__auto__ = null;
var cljs$core$async$split_$_state_machine__7624__auto____0 = (function (){
var statearr_18544 = [null,null,null,null,null,null,null,null,null];
(statearr_18544[(0)] = cljs$core$async$split_$_state_machine__7624__auto__);

(statearr_18544[(1)] = (1));

return statearr_18544;
});
var cljs$core$async$split_$_state_machine__7624__auto____1 = (function (state_18522){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18522);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18545){if((e18545 instanceof Object)){
var ex__7627__auto__ = e18545;
var statearr_18546_18563 = state_18522;
(statearr_18546_18563[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18522);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18545;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18564 = state_18522;
state_18522 = G__18564;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__7624__auto__ = function(state_18522){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__7624__auto____1.call(this,state_18522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__7624__auto____0;
cljs$core$async$split_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__7624__auto____1;
return cljs$core$async$split_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___18548,tc,fc))
})();
var state__7705__auto__ = (function (){var statearr_18547 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___18548);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___18548,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7703__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto__){
return (function (state_18613){
var state_val_18614 = (state_18613[(1)]);
if((state_val_18614 === (7))){
var inst_18609 = (state_18613[(2)]);
var state_18613__$1 = state_18613;
var statearr_18615_18633 = state_18613__$1;
(statearr_18615_18633[(2)] = inst_18609);

(statearr_18615_18633[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18614 === (6))){
var inst_18602 = (state_18613[(7)]);
var inst_18599 = (state_18613[(8)]);
var inst_18606 = (function (){var G__18616 = inst_18599;
var G__18617 = inst_18602;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18616,G__18617) : f.call(null,G__18616,G__18617));
})();
var inst_18599__$1 = inst_18606;
var state_18613__$1 = (function (){var statearr_18618 = state_18613;
(statearr_18618[(8)] = inst_18599__$1);

return statearr_18618;
})();
var statearr_18619_18634 = state_18613__$1;
(statearr_18619_18634[(2)] = null);

(statearr_18619_18634[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18614 === (5))){
var inst_18599 = (state_18613[(8)]);
var state_18613__$1 = state_18613;
var statearr_18620_18635 = state_18613__$1;
(statearr_18620_18635[(2)] = inst_18599);

(statearr_18620_18635[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18614 === (4))){
var inst_18602 = (state_18613[(7)]);
var inst_18602__$1 = (state_18613[(2)]);
var inst_18603 = (inst_18602__$1 == null);
var state_18613__$1 = (function (){var statearr_18621 = state_18613;
(statearr_18621[(7)] = inst_18602__$1);

return statearr_18621;
})();
if(cljs.core.truth_(inst_18603)){
var statearr_18622_18636 = state_18613__$1;
(statearr_18622_18636[(1)] = (5));

} else {
var statearr_18623_18637 = state_18613__$1;
(statearr_18623_18637[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18614 === (3))){
var inst_18611 = (state_18613[(2)]);
var state_18613__$1 = state_18613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18613__$1,inst_18611);
} else {
if((state_val_18614 === (2))){
var state_18613__$1 = state_18613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18613__$1,(4),ch);
} else {
if((state_val_18614 === (1))){
var inst_18599 = init;
var state_18613__$1 = (function (){var statearr_18624 = state_18613;
(statearr_18624[(8)] = inst_18599);

return statearr_18624;
})();
var statearr_18625_18638 = state_18613__$1;
(statearr_18625_18638[(2)] = null);

(statearr_18625_18638[(1)] = (2));


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
});})(c__7703__auto__))
;
return ((function (switch__7623__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7624__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7624__auto____0 = (function (){
var statearr_18629 = [null,null,null,null,null,null,null,null,null];
(statearr_18629[(0)] = cljs$core$async$reduce_$_state_machine__7624__auto__);

(statearr_18629[(1)] = (1));

return statearr_18629;
});
var cljs$core$async$reduce_$_state_machine__7624__auto____1 = (function (state_18613){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18613);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18630){if((e18630 instanceof Object)){
var ex__7627__auto__ = e18630;
var statearr_18631_18639 = state_18613;
(statearr_18631_18639[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18613);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18640 = state_18613;
state_18613 = G__18640;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7624__auto__ = function(state_18613){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7624__auto____1.call(this,state_18613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7624__auto____0;
cljs$core$async$reduce_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7624__auto____1;
return cljs$core$async$reduce_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_18632 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_18632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__7703__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto__){
return (function (state_18717){
var state_val_18718 = (state_18717[(1)]);
if((state_val_18718 === (7))){
var inst_18699 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18719_18742 = state_18717__$1;
(statearr_18719_18742[(2)] = inst_18699);

(statearr_18719_18742[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (1))){
var inst_18693 = cljs.core.seq(coll);
var inst_18694 = inst_18693;
var state_18717__$1 = (function (){var statearr_18720 = state_18717;
(statearr_18720[(7)] = inst_18694);

return statearr_18720;
})();
var statearr_18721_18743 = state_18717__$1;
(statearr_18721_18743[(2)] = null);

(statearr_18721_18743[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (4))){
var inst_18694 = (state_18717[(7)]);
var inst_18697 = cljs.core.first(inst_18694);
var state_18717__$1 = state_18717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18717__$1,(7),ch,inst_18697);
} else {
if((state_val_18718 === (13))){
var inst_18711 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18722_18744 = state_18717__$1;
(statearr_18722_18744[(2)] = inst_18711);

(statearr_18722_18744[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (6))){
var inst_18702 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
if(cljs.core.truth_(inst_18702)){
var statearr_18723_18745 = state_18717__$1;
(statearr_18723_18745[(1)] = (8));

} else {
var statearr_18724_18746 = state_18717__$1;
(statearr_18724_18746[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (3))){
var inst_18715 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18717__$1,inst_18715);
} else {
if((state_val_18718 === (12))){
var state_18717__$1 = state_18717;
var statearr_18725_18747 = state_18717__$1;
(statearr_18725_18747[(2)] = null);

(statearr_18725_18747[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (2))){
var inst_18694 = (state_18717[(7)]);
var state_18717__$1 = state_18717;
if(cljs.core.truth_(inst_18694)){
var statearr_18726_18748 = state_18717__$1;
(statearr_18726_18748[(1)] = (4));

} else {
var statearr_18727_18749 = state_18717__$1;
(statearr_18727_18749[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (11))){
var inst_18708 = cljs.core.async.close_BANG_(ch);
var state_18717__$1 = state_18717;
var statearr_18728_18750 = state_18717__$1;
(statearr_18728_18750[(2)] = inst_18708);

(statearr_18728_18750[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (9))){
var state_18717__$1 = state_18717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18729_18751 = state_18717__$1;
(statearr_18729_18751[(1)] = (11));

} else {
var statearr_18730_18752 = state_18717__$1;
(statearr_18730_18752[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (5))){
var inst_18694 = (state_18717[(7)]);
var state_18717__$1 = state_18717;
var statearr_18731_18753 = state_18717__$1;
(statearr_18731_18753[(2)] = inst_18694);

(statearr_18731_18753[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (10))){
var inst_18713 = (state_18717[(2)]);
var state_18717__$1 = state_18717;
var statearr_18732_18754 = state_18717__$1;
(statearr_18732_18754[(2)] = inst_18713);

(statearr_18732_18754[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18718 === (8))){
var inst_18694 = (state_18717[(7)]);
var inst_18704 = cljs.core.next(inst_18694);
var inst_18694__$1 = inst_18704;
var state_18717__$1 = (function (){var statearr_18733 = state_18717;
(statearr_18733[(7)] = inst_18694__$1);

return statearr_18733;
})();
var statearr_18734_18755 = state_18717__$1;
(statearr_18734_18755[(2)] = null);

(statearr_18734_18755[(1)] = (2));


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
}
}
}
});})(c__7703__auto__))
;
return ((function (switch__7623__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__7624__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__7624__auto____0 = (function (){
var statearr_18738 = [null,null,null,null,null,null,null,null];
(statearr_18738[(0)] = cljs$core$async$onto_chan_$_state_machine__7624__auto__);

(statearr_18738[(1)] = (1));

return statearr_18738;
});
var cljs$core$async$onto_chan_$_state_machine__7624__auto____1 = (function (state_18717){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_18717);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e18739){if((e18739 instanceof Object)){
var ex__7627__auto__ = e18739;
var statearr_18740_18756 = state_18717;
(statearr_18740_18756[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18717);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18739;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18757 = state_18717;
state_18717 = G__18757;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__7624__auto__ = function(state_18717){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__7624__auto____1.call(this,state_18717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__7624__auto____0;
cljs$core$async$onto_chan_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__7624__auto____1;
return cljs$core$async$onto_chan_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_18741 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_18741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_18741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj18759 = {};
return obj18759;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4064__auto__ = _;
if(and__4064__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4720__auto__ = (((_ == null))?null:_);
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__18763 = x__4720__auto__;
return goog.typeOf(G__18763);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj18765 = {};
return obj18765;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__18769 = x__4720__auto__;
return goog.typeOf(G__18769);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__18773 = x__4720__auto__;
return goog.typeOf(G__18773);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__18777 = x__4720__auto__;
return goog.typeOf(G__18777);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__19007 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19007) : cljs.core.atom.call(null,G__19007));
})();
var m = (function (){
if(typeof cljs.core.async.t19008 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19008 = (function (cs,ch,mult,meta19009){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19009 = meta19009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19008.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t19008.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t19008.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t19008.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19011_19236 = self__.cs;
var G__19012_19237 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19011_19236,G__19012_19237) : cljs.core.reset_BANG_.call(null,G__19011_19236,G__19012_19237));

return null;
});})(cs))
;

cljs.core.async.t19008.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19008.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t19008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19010){
var self__ = this;
var _19010__$1 = this;
return self__.meta19009;
});})(cs))
;

cljs.core.async.t19008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19010,meta19009__$1){
var self__ = this;
var _19010__$1 = this;
return (new cljs.core.async.t19008(self__.cs,self__.ch,self__.mult,meta19009__$1));
});})(cs))
;

cljs.core.async.t19008.cljs$lang$type = true;

cljs.core.async.t19008.cljs$lang$ctorStr = "cljs.core.async/t19008";

cljs.core.async.t19008.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19008");
});})(cs))
;

cljs.core.async.__GT_t19008 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t19008(cs__$1,ch__$1,mult__$1,meta19009){
return (new cljs.core.async.t19008(cs__$1,ch__$1,mult__$1,meta19009));
});})(cs))
;

}

return (new cljs.core.async.t19008(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__19013 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19013) : cljs.core.atom.call(null,G__19013));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7703__auto___19238 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___19238,cs,m,dchan,dctr,done){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___19238,cs,m,dchan,dctr,done){
return (function (state_19144){
var state_val_19145 = (state_19144[(1)]);
if((state_val_19145 === (7))){
var inst_19140 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19146_19239 = state_19144__$1;
(statearr_19146_19239[(2)] = inst_19140);

(statearr_19146_19239[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (20))){
var inst_19045 = (state_19144[(7)]);
var inst_19055 = cljs.core.first(inst_19045);
var inst_19056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19055,(0),null);
var inst_19057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19055,(1),null);
var state_19144__$1 = (function (){var statearr_19147 = state_19144;
(statearr_19147[(8)] = inst_19056);

return statearr_19147;
})();
if(cljs.core.truth_(inst_19057)){
var statearr_19148_19240 = state_19144__$1;
(statearr_19148_19240[(1)] = (22));

} else {
var statearr_19149_19241 = state_19144__$1;
(statearr_19149_19241[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (27))){
var inst_19092 = (state_19144[(9)]);
var inst_19016 = (state_19144[(10)]);
var inst_19087 = (state_19144[(11)]);
var inst_19085 = (state_19144[(12)]);
var inst_19092__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19085,inst_19087);
var inst_19093 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19092__$1,inst_19016,done);
var state_19144__$1 = (function (){var statearr_19150 = state_19144;
(statearr_19150[(9)] = inst_19092__$1);

return statearr_19150;
})();
if(cljs.core.truth_(inst_19093)){
var statearr_19151_19242 = state_19144__$1;
(statearr_19151_19242[(1)] = (30));

} else {
var statearr_19152_19243 = state_19144__$1;
(statearr_19152_19243[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (1))){
var state_19144__$1 = state_19144;
var statearr_19153_19244 = state_19144__$1;
(statearr_19153_19244[(2)] = null);

(statearr_19153_19244[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (24))){
var inst_19045 = (state_19144[(7)]);
var inst_19062 = (state_19144[(2)]);
var inst_19063 = cljs.core.next(inst_19045);
var inst_19025 = inst_19063;
var inst_19026 = null;
var inst_19027 = (0);
var inst_19028 = (0);
var state_19144__$1 = (function (){var statearr_19154 = state_19144;
(statearr_19154[(13)] = inst_19028);

(statearr_19154[(14)] = inst_19062);

(statearr_19154[(15)] = inst_19027);

(statearr_19154[(16)] = inst_19026);

(statearr_19154[(17)] = inst_19025);

return statearr_19154;
})();
var statearr_19155_19245 = state_19144__$1;
(statearr_19155_19245[(2)] = null);

(statearr_19155_19245[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (39))){
var state_19144__$1 = state_19144;
var statearr_19159_19246 = state_19144__$1;
(statearr_19159_19246[(2)] = null);

(statearr_19159_19246[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (4))){
var inst_19016 = (state_19144[(10)]);
var inst_19016__$1 = (state_19144[(2)]);
var inst_19017 = (inst_19016__$1 == null);
var state_19144__$1 = (function (){var statearr_19160 = state_19144;
(statearr_19160[(10)] = inst_19016__$1);

return statearr_19160;
})();
if(cljs.core.truth_(inst_19017)){
var statearr_19161_19247 = state_19144__$1;
(statearr_19161_19247[(1)] = (5));

} else {
var statearr_19162_19248 = state_19144__$1;
(statearr_19162_19248[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (15))){
var inst_19028 = (state_19144[(13)]);
var inst_19027 = (state_19144[(15)]);
var inst_19026 = (state_19144[(16)]);
var inst_19025 = (state_19144[(17)]);
var inst_19041 = (state_19144[(2)]);
var inst_19042 = (inst_19028 + (1));
var tmp19156 = inst_19027;
var tmp19157 = inst_19026;
var tmp19158 = inst_19025;
var inst_19025__$1 = tmp19158;
var inst_19026__$1 = tmp19157;
var inst_19027__$1 = tmp19156;
var inst_19028__$1 = inst_19042;
var state_19144__$1 = (function (){var statearr_19163 = state_19144;
(statearr_19163[(18)] = inst_19041);

(statearr_19163[(13)] = inst_19028__$1);

(statearr_19163[(15)] = inst_19027__$1);

(statearr_19163[(16)] = inst_19026__$1);

(statearr_19163[(17)] = inst_19025__$1);

return statearr_19163;
})();
var statearr_19164_19249 = state_19144__$1;
(statearr_19164_19249[(2)] = null);

(statearr_19164_19249[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (21))){
var inst_19066 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19168_19250 = state_19144__$1;
(statearr_19168_19250[(2)] = inst_19066);

(statearr_19168_19250[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (31))){
var inst_19092 = (state_19144[(9)]);
var inst_19096 = done(null);
var inst_19097 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19092);
var state_19144__$1 = (function (){var statearr_19169 = state_19144;
(statearr_19169[(19)] = inst_19096);

return statearr_19169;
})();
var statearr_19170_19251 = state_19144__$1;
(statearr_19170_19251[(2)] = inst_19097);

(statearr_19170_19251[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (32))){
var inst_19084 = (state_19144[(20)]);
var inst_19087 = (state_19144[(11)]);
var inst_19086 = (state_19144[(21)]);
var inst_19085 = (state_19144[(12)]);
var inst_19099 = (state_19144[(2)]);
var inst_19100 = (inst_19087 + (1));
var tmp19165 = inst_19084;
var tmp19166 = inst_19086;
var tmp19167 = inst_19085;
var inst_19084__$1 = tmp19165;
var inst_19085__$1 = tmp19167;
var inst_19086__$1 = tmp19166;
var inst_19087__$1 = inst_19100;
var state_19144__$1 = (function (){var statearr_19171 = state_19144;
(statearr_19171[(20)] = inst_19084__$1);

(statearr_19171[(11)] = inst_19087__$1);

(statearr_19171[(22)] = inst_19099);

(statearr_19171[(21)] = inst_19086__$1);

(statearr_19171[(12)] = inst_19085__$1);

return statearr_19171;
})();
var statearr_19172_19252 = state_19144__$1;
(statearr_19172_19252[(2)] = null);

(statearr_19172_19252[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (40))){
var inst_19112 = (state_19144[(23)]);
var inst_19116 = done(null);
var inst_19117 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19112);
var state_19144__$1 = (function (){var statearr_19173 = state_19144;
(statearr_19173[(24)] = inst_19116);

return statearr_19173;
})();
var statearr_19174_19253 = state_19144__$1;
(statearr_19174_19253[(2)] = inst_19117);

(statearr_19174_19253[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (33))){
var inst_19103 = (state_19144[(25)]);
var inst_19105 = cljs.core.chunked_seq_QMARK_(inst_19103);
var state_19144__$1 = state_19144;
if(inst_19105){
var statearr_19175_19254 = state_19144__$1;
(statearr_19175_19254[(1)] = (36));

} else {
var statearr_19176_19255 = state_19144__$1;
(statearr_19176_19255[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (13))){
var inst_19035 = (state_19144[(26)]);
var inst_19038 = cljs.core.async.close_BANG_(inst_19035);
var state_19144__$1 = state_19144;
var statearr_19177_19256 = state_19144__$1;
(statearr_19177_19256[(2)] = inst_19038);

(statearr_19177_19256[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (22))){
var inst_19056 = (state_19144[(8)]);
var inst_19059 = cljs.core.async.close_BANG_(inst_19056);
var state_19144__$1 = state_19144;
var statearr_19178_19257 = state_19144__$1;
(statearr_19178_19257[(2)] = inst_19059);

(statearr_19178_19257[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (36))){
var inst_19103 = (state_19144[(25)]);
var inst_19107 = cljs.core.chunk_first(inst_19103);
var inst_19108 = cljs.core.chunk_rest(inst_19103);
var inst_19109 = cljs.core.count(inst_19107);
var inst_19084 = inst_19108;
var inst_19085 = inst_19107;
var inst_19086 = inst_19109;
var inst_19087 = (0);
var state_19144__$1 = (function (){var statearr_19179 = state_19144;
(statearr_19179[(20)] = inst_19084);

(statearr_19179[(11)] = inst_19087);

(statearr_19179[(21)] = inst_19086);

(statearr_19179[(12)] = inst_19085);

return statearr_19179;
})();
var statearr_19180_19258 = state_19144__$1;
(statearr_19180_19258[(2)] = null);

(statearr_19180_19258[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (41))){
var inst_19103 = (state_19144[(25)]);
var inst_19119 = (state_19144[(2)]);
var inst_19120 = cljs.core.next(inst_19103);
var inst_19084 = inst_19120;
var inst_19085 = null;
var inst_19086 = (0);
var inst_19087 = (0);
var state_19144__$1 = (function (){var statearr_19181 = state_19144;
(statearr_19181[(20)] = inst_19084);

(statearr_19181[(11)] = inst_19087);

(statearr_19181[(27)] = inst_19119);

(statearr_19181[(21)] = inst_19086);

(statearr_19181[(12)] = inst_19085);

return statearr_19181;
})();
var statearr_19182_19259 = state_19144__$1;
(statearr_19182_19259[(2)] = null);

(statearr_19182_19259[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (43))){
var state_19144__$1 = state_19144;
var statearr_19183_19260 = state_19144__$1;
(statearr_19183_19260[(2)] = null);

(statearr_19183_19260[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (29))){
var inst_19128 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19184_19261 = state_19144__$1;
(statearr_19184_19261[(2)] = inst_19128);

(statearr_19184_19261[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (44))){
var inst_19137 = (state_19144[(2)]);
var state_19144__$1 = (function (){var statearr_19185 = state_19144;
(statearr_19185[(28)] = inst_19137);

return statearr_19185;
})();
var statearr_19186_19262 = state_19144__$1;
(statearr_19186_19262[(2)] = null);

(statearr_19186_19262[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (6))){
var inst_19076 = (state_19144[(29)]);
var inst_19075 = (function (){var G__19187 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19187) : cljs.core.deref.call(null,G__19187));
})();
var inst_19076__$1 = cljs.core.keys(inst_19075);
var inst_19077 = cljs.core.count(inst_19076__$1);
var inst_19078 = (function (){var G__19188 = dctr;
var G__19189 = inst_19077;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19188,G__19189) : cljs.core.reset_BANG_.call(null,G__19188,G__19189));
})();
var inst_19083 = cljs.core.seq(inst_19076__$1);
var inst_19084 = inst_19083;
var inst_19085 = null;
var inst_19086 = (0);
var inst_19087 = (0);
var state_19144__$1 = (function (){var statearr_19190 = state_19144;
(statearr_19190[(20)] = inst_19084);

(statearr_19190[(11)] = inst_19087);

(statearr_19190[(30)] = inst_19078);

(statearr_19190[(21)] = inst_19086);

(statearr_19190[(12)] = inst_19085);

(statearr_19190[(29)] = inst_19076__$1);

return statearr_19190;
})();
var statearr_19191_19263 = state_19144__$1;
(statearr_19191_19263[(2)] = null);

(statearr_19191_19263[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (28))){
var inst_19103 = (state_19144[(25)]);
var inst_19084 = (state_19144[(20)]);
var inst_19103__$1 = cljs.core.seq(inst_19084);
var state_19144__$1 = (function (){var statearr_19192 = state_19144;
(statearr_19192[(25)] = inst_19103__$1);

return statearr_19192;
})();
if(inst_19103__$1){
var statearr_19193_19264 = state_19144__$1;
(statearr_19193_19264[(1)] = (33));

} else {
var statearr_19194_19265 = state_19144__$1;
(statearr_19194_19265[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (25))){
var inst_19087 = (state_19144[(11)]);
var inst_19086 = (state_19144[(21)]);
var inst_19089 = (inst_19087 < inst_19086);
var inst_19090 = inst_19089;
var state_19144__$1 = state_19144;
if(cljs.core.truth_(inst_19090)){
var statearr_19195_19266 = state_19144__$1;
(statearr_19195_19266[(1)] = (27));

} else {
var statearr_19196_19267 = state_19144__$1;
(statearr_19196_19267[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (34))){
var state_19144__$1 = state_19144;
var statearr_19197_19268 = state_19144__$1;
(statearr_19197_19268[(2)] = null);

(statearr_19197_19268[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (17))){
var state_19144__$1 = state_19144;
var statearr_19198_19269 = state_19144__$1;
(statearr_19198_19269[(2)] = null);

(statearr_19198_19269[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (3))){
var inst_19142 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19144__$1,inst_19142);
} else {
if((state_val_19145 === (12))){
var inst_19071 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19199_19270 = state_19144__$1;
(statearr_19199_19270[(2)] = inst_19071);

(statearr_19199_19270[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (2))){
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19144__$1,(4),ch);
} else {
if((state_val_19145 === (23))){
var state_19144__$1 = state_19144;
var statearr_19200_19271 = state_19144__$1;
(statearr_19200_19271[(2)] = null);

(statearr_19200_19271[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (35))){
var inst_19126 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19201_19272 = state_19144__$1;
(statearr_19201_19272[(2)] = inst_19126);

(statearr_19201_19272[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (19))){
var inst_19045 = (state_19144[(7)]);
var inst_19049 = cljs.core.chunk_first(inst_19045);
var inst_19050 = cljs.core.chunk_rest(inst_19045);
var inst_19051 = cljs.core.count(inst_19049);
var inst_19025 = inst_19050;
var inst_19026 = inst_19049;
var inst_19027 = inst_19051;
var inst_19028 = (0);
var state_19144__$1 = (function (){var statearr_19202 = state_19144;
(statearr_19202[(13)] = inst_19028);

(statearr_19202[(15)] = inst_19027);

(statearr_19202[(16)] = inst_19026);

(statearr_19202[(17)] = inst_19025);

return statearr_19202;
})();
var statearr_19203_19273 = state_19144__$1;
(statearr_19203_19273[(2)] = null);

(statearr_19203_19273[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (11))){
var inst_19045 = (state_19144[(7)]);
var inst_19025 = (state_19144[(17)]);
var inst_19045__$1 = cljs.core.seq(inst_19025);
var state_19144__$1 = (function (){var statearr_19204 = state_19144;
(statearr_19204[(7)] = inst_19045__$1);

return statearr_19204;
})();
if(inst_19045__$1){
var statearr_19205_19274 = state_19144__$1;
(statearr_19205_19274[(1)] = (16));

} else {
var statearr_19206_19275 = state_19144__$1;
(statearr_19206_19275[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (9))){
var inst_19073 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19207_19276 = state_19144__$1;
(statearr_19207_19276[(2)] = inst_19073);

(statearr_19207_19276[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (5))){
var inst_19023 = (function (){var G__19208 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19208) : cljs.core.deref.call(null,G__19208));
})();
var inst_19024 = cljs.core.seq(inst_19023);
var inst_19025 = inst_19024;
var inst_19026 = null;
var inst_19027 = (0);
var inst_19028 = (0);
var state_19144__$1 = (function (){var statearr_19209 = state_19144;
(statearr_19209[(13)] = inst_19028);

(statearr_19209[(15)] = inst_19027);

(statearr_19209[(16)] = inst_19026);

(statearr_19209[(17)] = inst_19025);

return statearr_19209;
})();
var statearr_19210_19277 = state_19144__$1;
(statearr_19210_19277[(2)] = null);

(statearr_19210_19277[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (14))){
var state_19144__$1 = state_19144;
var statearr_19211_19278 = state_19144__$1;
(statearr_19211_19278[(2)] = null);

(statearr_19211_19278[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (45))){
var inst_19134 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19212_19279 = state_19144__$1;
(statearr_19212_19279[(2)] = inst_19134);

(statearr_19212_19279[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (26))){
var inst_19076 = (state_19144[(29)]);
var inst_19130 = (state_19144[(2)]);
var inst_19131 = cljs.core.seq(inst_19076);
var state_19144__$1 = (function (){var statearr_19213 = state_19144;
(statearr_19213[(31)] = inst_19130);

return statearr_19213;
})();
if(inst_19131){
var statearr_19214_19280 = state_19144__$1;
(statearr_19214_19280[(1)] = (42));

} else {
var statearr_19215_19281 = state_19144__$1;
(statearr_19215_19281[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (16))){
var inst_19045 = (state_19144[(7)]);
var inst_19047 = cljs.core.chunked_seq_QMARK_(inst_19045);
var state_19144__$1 = state_19144;
if(inst_19047){
var statearr_19216_19282 = state_19144__$1;
(statearr_19216_19282[(1)] = (19));

} else {
var statearr_19217_19283 = state_19144__$1;
(statearr_19217_19283[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (38))){
var inst_19123 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19218_19284 = state_19144__$1;
(statearr_19218_19284[(2)] = inst_19123);

(statearr_19218_19284[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (30))){
var state_19144__$1 = state_19144;
var statearr_19219_19285 = state_19144__$1;
(statearr_19219_19285[(2)] = null);

(statearr_19219_19285[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (10))){
var inst_19028 = (state_19144[(13)]);
var inst_19026 = (state_19144[(16)]);
var inst_19034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19026,inst_19028);
var inst_19035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(0),null);
var inst_19036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19034,(1),null);
var state_19144__$1 = (function (){var statearr_19220 = state_19144;
(statearr_19220[(26)] = inst_19035);

return statearr_19220;
})();
if(cljs.core.truth_(inst_19036)){
var statearr_19221_19286 = state_19144__$1;
(statearr_19221_19286[(1)] = (13));

} else {
var statearr_19222_19287 = state_19144__$1;
(statearr_19222_19287[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (18))){
var inst_19069 = (state_19144[(2)]);
var state_19144__$1 = state_19144;
var statearr_19223_19288 = state_19144__$1;
(statearr_19223_19288[(2)] = inst_19069);

(statearr_19223_19288[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (42))){
var state_19144__$1 = state_19144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19144__$1,(45),dchan);
} else {
if((state_val_19145 === (37))){
var inst_19103 = (state_19144[(25)]);
var inst_19016 = (state_19144[(10)]);
var inst_19112 = (state_19144[(23)]);
var inst_19112__$1 = cljs.core.first(inst_19103);
var inst_19113 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19112__$1,inst_19016,done);
var state_19144__$1 = (function (){var statearr_19224 = state_19144;
(statearr_19224[(23)] = inst_19112__$1);

return statearr_19224;
})();
if(cljs.core.truth_(inst_19113)){
var statearr_19225_19289 = state_19144__$1;
(statearr_19225_19289[(1)] = (39));

} else {
var statearr_19226_19290 = state_19144__$1;
(statearr_19226_19290[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19145 === (8))){
var inst_19028 = (state_19144[(13)]);
var inst_19027 = (state_19144[(15)]);
var inst_19030 = (inst_19028 < inst_19027);
var inst_19031 = inst_19030;
var state_19144__$1 = state_19144;
if(cljs.core.truth_(inst_19031)){
var statearr_19227_19291 = state_19144__$1;
(statearr_19227_19291[(1)] = (10));

} else {
var statearr_19228_19292 = state_19144__$1;
(statearr_19228_19292[(1)] = (11));

}

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
}
}
}
}
}
});})(c__7703__auto___19238,cs,m,dchan,dctr,done))
;
return ((function (switch__7623__auto__,c__7703__auto___19238,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7624__auto__ = null;
var cljs$core$async$mult_$_state_machine__7624__auto____0 = (function (){
var statearr_19232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19232[(0)] = cljs$core$async$mult_$_state_machine__7624__auto__);

(statearr_19232[(1)] = (1));

return statearr_19232;
});
var cljs$core$async$mult_$_state_machine__7624__auto____1 = (function (state_19144){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_19144);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e19233){if((e19233 instanceof Object)){
var ex__7627__auto__ = e19233;
var statearr_19234_19293 = state_19144;
(statearr_19234_19293[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19144);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19294 = state_19144;
state_19144 = G__19294;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7624__auto__ = function(state_19144){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7624__auto____1.call(this,state_19144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7624__auto____0;
cljs$core$async$mult_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7624__auto____1;
return cljs$core$async$mult_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___19238,cs,m,dchan,dctr,done))
})();
var state__7705__auto__ = (function (){var statearr_19235 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_19235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___19238);

return statearr_19235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___19238,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj19299 = {};
return obj19299;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__19303 = x__4720__auto__;
return goog.typeOf(G__19303);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__19307 = x__4720__auto__;
return goog.typeOf(G__19307);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__19311 = x__4720__auto__;
return goog.typeOf(G__19311);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__19315 = x__4720__auto__;
return goog.typeOf(G__19315);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4064__auto__ = m;
if(and__4064__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4720__auto__ = (((m == null))?null:m);
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__19319 = x__4720__auto__;
return goog.typeOf(G__19319);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19320){
var map__19326 = p__19320;
var map__19326__$1 = ((cljs.core.seq_QMARK_(map__19326))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19326):map__19326);
var opts = map__19326__$1;
var statearr_19327_19331 = state;
(statearr_19327_19331[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__19326,map__19326__$1,opts){
return (function (val){
var statearr_19328_19332 = state;
(statearr_19328_19332[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19326,map__19326__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19329_19333 = state;
(statearr_19329_19333[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__19330 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19330) : cljs.core.deref.call(null,G__19330));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19320 = null;
if (arguments.length > 3) {
var G__19334__i = 0, G__19334__a = new Array(arguments.length -  3);
while (G__19334__i < G__19334__a.length) {G__19334__a[G__19334__i] = arguments[G__19334__i + 3]; ++G__19334__i;}
  p__19320 = new cljs.core.IndexedSeq(G__19334__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19320);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19335){
var state = cljs.core.first(arglist__19335);
arglist__19335 = cljs.core.next(arglist__19335);
var cont_block = cljs.core.first(arglist__19335);
arglist__19335 = cljs.core.next(arglist__19335);
var ports = cljs.core.first(arglist__19335);
var p__19320 = cljs.core.rest(arglist__19335);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__19320);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__19469 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19469) : cljs.core.atom.call(null,G__19469));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__19470 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19470) : cljs.core.atom.call(null,G__19470));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__19471 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__19471) : attr.call(null,G__19471));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__19472 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19472) : cljs.core.deref.call(null,G__19472));
})();
var mode = (function (){var G__19473 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19473) : cljs.core.deref.call(null,G__19473));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19474 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19474 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19475){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19475 = meta19475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19474.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19474.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19477_19602 = self__.cs;
var G__19478_19603 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19477_19602,G__19478_19603) : cljs.core.reset_BANG_.call(null,G__19477_19602,G__19478_19603));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__19479 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__19479) : self__.solo_modes.call(null,G__19479));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__19480_19604 = self__.solo_mode;
var G__19481_19605 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19480_19604,G__19481_19605) : cljs.core.reset_BANG_.call(null,G__19480_19604,G__19481_19605));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19476){
var self__ = this;
var _19476__$1 = this;
return self__.meta19475;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19476,meta19475__$1){
var self__ = this;
var _19476__$1 = this;
return (new cljs.core.async.t19474(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19475__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19474.cljs$lang$type = true;

cljs.core.async.t19474.cljs$lang$ctorStr = "cljs.core.async/t19474";

cljs.core.async.t19474.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19474");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19474 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t19474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19475){
return (new cljs.core.async.t19474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19475));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19474(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7703__auto___19606 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19553){
var state_val_19554 = (state_19553[(1)]);
if((state_val_19554 === (7))){
var inst_19495 = (state_19553[(7)]);
var inst_19500 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19495);
var state_19553__$1 = state_19553;
var statearr_19555_19607 = state_19553__$1;
(statearr_19555_19607[(2)] = inst_19500);

(statearr_19555_19607[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (20))){
var inst_19510 = (state_19553[(8)]);
var state_19553__$1 = state_19553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19553__$1,(23),out,inst_19510);
} else {
if((state_val_19554 === (1))){
var inst_19485 = (state_19553[(9)]);
var inst_19485__$1 = calc_state();
var inst_19486 = cljs.core.seq_QMARK_(inst_19485__$1);
var state_19553__$1 = (function (){var statearr_19556 = state_19553;
(statearr_19556[(9)] = inst_19485__$1);

return statearr_19556;
})();
if(inst_19486){
var statearr_19557_19608 = state_19553__$1;
(statearr_19557_19608[(1)] = (2));

} else {
var statearr_19558_19609 = state_19553__$1;
(statearr_19558_19609[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (24))){
var inst_19503 = (state_19553[(10)]);
var inst_19495 = inst_19503;
var state_19553__$1 = (function (){var statearr_19559 = state_19553;
(statearr_19559[(7)] = inst_19495);

return statearr_19559;
})();
var statearr_19560_19610 = state_19553__$1;
(statearr_19560_19610[(2)] = null);

(statearr_19560_19610[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (4))){
var inst_19485 = (state_19553[(9)]);
var inst_19491 = (state_19553[(2)]);
var inst_19492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19491,cljs.core.constant$keyword$_COLON_reads);
var inst_19493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19491,cljs.core.constant$keyword$_COLON_mutes);
var inst_19494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19491,cljs.core.constant$keyword$_COLON_solos);
var inst_19495 = inst_19485;
var state_19553__$1 = (function (){var statearr_19561 = state_19553;
(statearr_19561[(7)] = inst_19495);

(statearr_19561[(11)] = inst_19492);

(statearr_19561[(12)] = inst_19493);

(statearr_19561[(13)] = inst_19494);

return statearr_19561;
})();
var statearr_19562_19611 = state_19553__$1;
(statearr_19562_19611[(2)] = null);

(statearr_19562_19611[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (15))){
var state_19553__$1 = state_19553;
var statearr_19563_19612 = state_19553__$1;
(statearr_19563_19612[(2)] = null);

(statearr_19563_19612[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (21))){
var inst_19503 = (state_19553[(10)]);
var inst_19495 = inst_19503;
var state_19553__$1 = (function (){var statearr_19564 = state_19553;
(statearr_19564[(7)] = inst_19495);

return statearr_19564;
})();
var statearr_19565_19613 = state_19553__$1;
(statearr_19565_19613[(2)] = null);

(statearr_19565_19613[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (13))){
var inst_19549 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
var statearr_19566_19614 = state_19553__$1;
(statearr_19566_19614[(2)] = inst_19549);

(statearr_19566_19614[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (22))){
var inst_19547 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
var statearr_19567_19615 = state_19553__$1;
(statearr_19567_19615[(2)] = inst_19547);

(statearr_19567_19615[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (6))){
var inst_19551 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19553__$1,inst_19551);
} else {
if((state_val_19554 === (25))){
var state_19553__$1 = state_19553;
var statearr_19568_19616 = state_19553__$1;
(statearr_19568_19616[(2)] = null);

(statearr_19568_19616[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (17))){
var inst_19526 = (state_19553[(14)]);
var state_19553__$1 = state_19553;
var statearr_19569_19617 = state_19553__$1;
(statearr_19569_19617[(2)] = inst_19526);

(statearr_19569_19617[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (3))){
var inst_19485 = (state_19553[(9)]);
var state_19553__$1 = state_19553;
var statearr_19570_19618 = state_19553__$1;
(statearr_19570_19618[(2)] = inst_19485);

(statearr_19570_19618[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (12))){
var inst_19526 = (state_19553[(14)]);
var inst_19506 = (state_19553[(15)]);
var inst_19511 = (state_19553[(16)]);
var inst_19526__$1 = (function (){var G__19571 = inst_19511;
return (inst_19506.cljs$core$IFn$_invoke$arity$1 ? inst_19506.cljs$core$IFn$_invoke$arity$1(G__19571) : inst_19506.call(null,G__19571));
})();
var state_19553__$1 = (function (){var statearr_19572 = state_19553;
(statearr_19572[(14)] = inst_19526__$1);

return statearr_19572;
})();
if(cljs.core.truth_(inst_19526__$1)){
var statearr_19573_19619 = state_19553__$1;
(statearr_19573_19619[(1)] = (17));

} else {
var statearr_19574_19620 = state_19553__$1;
(statearr_19574_19620[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (2))){
var inst_19485 = (state_19553[(9)]);
var inst_19488 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19485);
var state_19553__$1 = state_19553;
var statearr_19575_19621 = state_19553__$1;
(statearr_19575_19621[(2)] = inst_19488);

(statearr_19575_19621[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (23))){
var inst_19538 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
if(cljs.core.truth_(inst_19538)){
var statearr_19576_19622 = state_19553__$1;
(statearr_19576_19622[(1)] = (24));

} else {
var statearr_19577_19623 = state_19553__$1;
(statearr_19577_19623[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (19))){
var inst_19535 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
if(cljs.core.truth_(inst_19535)){
var statearr_19578_19624 = state_19553__$1;
(statearr_19578_19624[(1)] = (20));

} else {
var statearr_19579_19625 = state_19553__$1;
(statearr_19579_19625[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (11))){
var inst_19510 = (state_19553[(8)]);
var inst_19516 = (inst_19510 == null);
var state_19553__$1 = state_19553;
if(cljs.core.truth_(inst_19516)){
var statearr_19580_19626 = state_19553__$1;
(statearr_19580_19626[(1)] = (14));

} else {
var statearr_19581_19627 = state_19553__$1;
(statearr_19581_19627[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (9))){
var inst_19503 = (state_19553[(10)]);
var inst_19503__$1 = (state_19553[(2)]);
var inst_19504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19503__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_19505 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19503__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_19506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19503__$1,cljs.core.constant$keyword$_COLON_solos);
var state_19553__$1 = (function (){var statearr_19582 = state_19553;
(statearr_19582[(17)] = inst_19505);

(statearr_19582[(15)] = inst_19506);

(statearr_19582[(10)] = inst_19503__$1);

return statearr_19582;
})();
return cljs.core.async.ioc_alts_BANG_(state_19553__$1,(10),inst_19504);
} else {
if((state_val_19554 === (5))){
var inst_19495 = (state_19553[(7)]);
var inst_19498 = cljs.core.seq_QMARK_(inst_19495);
var state_19553__$1 = state_19553;
if(inst_19498){
var statearr_19583_19628 = state_19553__$1;
(statearr_19583_19628[(1)] = (7));

} else {
var statearr_19584_19629 = state_19553__$1;
(statearr_19584_19629[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (14))){
var inst_19511 = (state_19553[(16)]);
var inst_19518 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19511);
var state_19553__$1 = state_19553;
var statearr_19585_19630 = state_19553__$1;
(statearr_19585_19630[(2)] = inst_19518);

(statearr_19585_19630[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (26))){
var inst_19543 = (state_19553[(2)]);
var state_19553__$1 = state_19553;
var statearr_19586_19631 = state_19553__$1;
(statearr_19586_19631[(2)] = inst_19543);

(statearr_19586_19631[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (16))){
var inst_19521 = (state_19553[(2)]);
var inst_19522 = calc_state();
var inst_19495 = inst_19522;
var state_19553__$1 = (function (){var statearr_19587 = state_19553;
(statearr_19587[(7)] = inst_19495);

(statearr_19587[(18)] = inst_19521);

return statearr_19587;
})();
var statearr_19588_19632 = state_19553__$1;
(statearr_19588_19632[(2)] = null);

(statearr_19588_19632[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (10))){
var inst_19510 = (state_19553[(8)]);
var inst_19511 = (state_19553[(16)]);
var inst_19509 = (state_19553[(2)]);
var inst_19510__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19509,(0),null);
var inst_19511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19509,(1),null);
var inst_19512 = (inst_19510__$1 == null);
var inst_19513 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19511__$1,change);
var inst_19514 = (inst_19512) || (inst_19513);
var state_19553__$1 = (function (){var statearr_19589 = state_19553;
(statearr_19589[(8)] = inst_19510__$1);

(statearr_19589[(16)] = inst_19511__$1);

return statearr_19589;
})();
if(cljs.core.truth_(inst_19514)){
var statearr_19590_19633 = state_19553__$1;
(statearr_19590_19633[(1)] = (11));

} else {
var statearr_19591_19634 = state_19553__$1;
(statearr_19591_19634[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (18))){
var inst_19505 = (state_19553[(17)]);
var inst_19506 = (state_19553[(15)]);
var inst_19511 = (state_19553[(16)]);
var inst_19530 = cljs.core.empty_QMARK_(inst_19506);
var inst_19531 = (function (){var G__19592 = inst_19511;
return (inst_19505.cljs$core$IFn$_invoke$arity$1 ? inst_19505.cljs$core$IFn$_invoke$arity$1(G__19592) : inst_19505.call(null,G__19592));
})();
var inst_19532 = cljs.core.not(inst_19531);
var inst_19533 = (inst_19530) && (inst_19532);
var state_19553__$1 = state_19553;
var statearr_19593_19635 = state_19553__$1;
(statearr_19593_19635[(2)] = inst_19533);

(statearr_19593_19635[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19554 === (8))){
var inst_19495 = (state_19553[(7)]);
var state_19553__$1 = state_19553;
var statearr_19594_19636 = state_19553__$1;
(statearr_19594_19636[(2)] = inst_19495);

(statearr_19594_19636[(1)] = (9));


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
}
}
}
}
}
}
});})(c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7623__auto__,c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7624__auto__ = null;
var cljs$core$async$mix_$_state_machine__7624__auto____0 = (function (){
var statearr_19598 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19598[(0)] = cljs$core$async$mix_$_state_machine__7624__auto__);

(statearr_19598[(1)] = (1));

return statearr_19598;
});
var cljs$core$async$mix_$_state_machine__7624__auto____1 = (function (state_19553){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_19553);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e19599){if((e19599 instanceof Object)){
var ex__7627__auto__ = e19599;
var statearr_19600_19637 = state_19553;
(statearr_19600_19637[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19553);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19599;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19638 = state_19553;
state_19553 = G__19638;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7624__auto__ = function(state_19553){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7624__auto____1.call(this,state_19553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7624__auto____0;
cljs$core$async$mix_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7624__auto____1;
return cljs$core$async$mix_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7705__auto__ = (function (){var statearr_19601 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_19601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___19606);

return statearr_19601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___19606,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj19640 = {};
return obj19640;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__19644 = x__4720__auto__;
return goog.typeOf(G__19644);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__19648 = x__4720__auto__;
return goog.typeOf(G__19648);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19654 = x__4720__auto__;
return goog.typeOf(G__19654);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4064__auto__ = p;
if(and__4064__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4064__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4720__auto__ = (((p == null))?null:p);
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19656 = x__4720__auto__;
return goog.typeOf(G__19656);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__19795 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19795) : cljs.core.atom.call(null,G__19795));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4076__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19797 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19797) : cljs.core.deref.call(null,G__19797));
})(),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4076__auto__,mults){
return (function (p1__19657_SHARP_){
if(cljs.core.truth_((function (){var G__19798 = topic;
return (p1__19657_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19657_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19798) : p1__19657_SHARP_.call(null,G__19798));
})())){
return p1__19657_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19657_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__19799 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__19799) : buf_fn.call(null,G__19799));
})())));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19800 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19800 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19801){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19801 = meta19801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19800.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19800.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__19803 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__19803) : self__.ensure_mult.call(null,G__19803));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19804 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19804) : cljs.core.deref.call(null,G__19804));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19805 = self__.mults;
var G__19806 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19805,G__19806) : cljs.core.reset_BANG_.call(null,G__19805,G__19806));
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19802){
var self__ = this;
var _19802__$1 = this;
return self__.meta19801;
});})(mults,ensure_mult))
;

cljs.core.async.t19800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19802,meta19801__$1){
var self__ = this;
var _19802__$1 = this;
return (new cljs.core.async.t19800(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19801__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19800.cljs$lang$type = true;

cljs.core.async.t19800.cljs$lang$ctorStr = "cljs.core.async/t19800";

cljs.core.async.t19800.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19800");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19800 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t19800(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19801){
return (new cljs.core.async.t19800(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19801));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19800(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7703__auto___19929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___19929,mults,ensure_mult,p){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___19929,mults,ensure_mult,p){
return (function (state_19878){
var state_val_19879 = (state_19878[(1)]);
if((state_val_19879 === (7))){
var inst_19874 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19880_19930 = state_19878__$1;
(statearr_19880_19930[(2)] = inst_19874);

(statearr_19880_19930[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (20))){
var state_19878__$1 = state_19878;
var statearr_19881_19931 = state_19878__$1;
(statearr_19881_19931[(2)] = null);

(statearr_19881_19931[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (1))){
var state_19878__$1 = state_19878;
var statearr_19882_19932 = state_19878__$1;
(statearr_19882_19932[(2)] = null);

(statearr_19882_19932[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (24))){
var inst_19857 = (state_19878[(7)]);
var inst_19866 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19857);
var state_19878__$1 = state_19878;
var statearr_19883_19933 = state_19878__$1;
(statearr_19883_19933[(2)] = inst_19866);

(statearr_19883_19933[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (4))){
var inst_19809 = (state_19878[(8)]);
var inst_19809__$1 = (state_19878[(2)]);
var inst_19810 = (inst_19809__$1 == null);
var state_19878__$1 = (function (){var statearr_19884 = state_19878;
(statearr_19884[(8)] = inst_19809__$1);

return statearr_19884;
})();
if(cljs.core.truth_(inst_19810)){
var statearr_19885_19934 = state_19878__$1;
(statearr_19885_19934[(1)] = (5));

} else {
var statearr_19886_19935 = state_19878__$1;
(statearr_19886_19935[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (15))){
var inst_19851 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19887_19936 = state_19878__$1;
(statearr_19887_19936[(2)] = inst_19851);

(statearr_19887_19936[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (21))){
var inst_19871 = (state_19878[(2)]);
var state_19878__$1 = (function (){var statearr_19888 = state_19878;
(statearr_19888[(9)] = inst_19871);

return statearr_19888;
})();
var statearr_19889_19937 = state_19878__$1;
(statearr_19889_19937[(2)] = null);

(statearr_19889_19937[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (13))){
var inst_19833 = (state_19878[(10)]);
var inst_19835 = cljs.core.chunked_seq_QMARK_(inst_19833);
var state_19878__$1 = state_19878;
if(inst_19835){
var statearr_19890_19938 = state_19878__$1;
(statearr_19890_19938[(1)] = (16));

} else {
var statearr_19891_19939 = state_19878__$1;
(statearr_19891_19939[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (22))){
var inst_19863 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
if(cljs.core.truth_(inst_19863)){
var statearr_19892_19940 = state_19878__$1;
(statearr_19892_19940[(1)] = (23));

} else {
var statearr_19893_19941 = state_19878__$1;
(statearr_19893_19941[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (6))){
var inst_19857 = (state_19878[(7)]);
var inst_19859 = (state_19878[(11)]);
var inst_19809 = (state_19878[(8)]);
var inst_19857__$1 = (function (){var G__19894 = inst_19809;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__19894) : topic_fn.call(null,G__19894));
})();
var inst_19858 = (function (){var G__19895 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19895) : cljs.core.deref.call(null,G__19895));
})();
var inst_19859__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19858,inst_19857__$1);
var state_19878__$1 = (function (){var statearr_19896 = state_19878;
(statearr_19896[(7)] = inst_19857__$1);

(statearr_19896[(11)] = inst_19859__$1);

return statearr_19896;
})();
if(cljs.core.truth_(inst_19859__$1)){
var statearr_19897_19942 = state_19878__$1;
(statearr_19897_19942[(1)] = (19));

} else {
var statearr_19898_19943 = state_19878__$1;
(statearr_19898_19943[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (25))){
var inst_19868 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19899_19944 = state_19878__$1;
(statearr_19899_19944[(2)] = inst_19868);

(statearr_19899_19944[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (17))){
var inst_19833 = (state_19878[(10)]);
var inst_19842 = cljs.core.first(inst_19833);
var inst_19843 = cljs.core.async.muxch_STAR_(inst_19842);
var inst_19844 = cljs.core.async.close_BANG_(inst_19843);
var inst_19845 = cljs.core.next(inst_19833);
var inst_19819 = inst_19845;
var inst_19820 = null;
var inst_19821 = (0);
var inst_19822 = (0);
var state_19878__$1 = (function (){var statearr_19900 = state_19878;
(statearr_19900[(12)] = inst_19822);

(statearr_19900[(13)] = inst_19820);

(statearr_19900[(14)] = inst_19844);

(statearr_19900[(15)] = inst_19821);

(statearr_19900[(16)] = inst_19819);

return statearr_19900;
})();
var statearr_19901_19945 = state_19878__$1;
(statearr_19901_19945[(2)] = null);

(statearr_19901_19945[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (3))){
var inst_19876 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19878__$1,inst_19876);
} else {
if((state_val_19879 === (12))){
var inst_19853 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19902_19946 = state_19878__$1;
(statearr_19902_19946[(2)] = inst_19853);

(statearr_19902_19946[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (2))){
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19878__$1,(4),ch);
} else {
if((state_val_19879 === (23))){
var state_19878__$1 = state_19878;
var statearr_19903_19947 = state_19878__$1;
(statearr_19903_19947[(2)] = null);

(statearr_19903_19947[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (19))){
var inst_19859 = (state_19878[(11)]);
var inst_19809 = (state_19878[(8)]);
var inst_19861 = cljs.core.async.muxch_STAR_(inst_19859);
var state_19878__$1 = state_19878;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19878__$1,(22),inst_19861,inst_19809);
} else {
if((state_val_19879 === (11))){
var inst_19833 = (state_19878[(10)]);
var inst_19819 = (state_19878[(16)]);
var inst_19833__$1 = cljs.core.seq(inst_19819);
var state_19878__$1 = (function (){var statearr_19904 = state_19878;
(statearr_19904[(10)] = inst_19833__$1);

return statearr_19904;
})();
if(inst_19833__$1){
var statearr_19905_19948 = state_19878__$1;
(statearr_19905_19948[(1)] = (13));

} else {
var statearr_19906_19949 = state_19878__$1;
(statearr_19906_19949[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (9))){
var inst_19855 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19907_19950 = state_19878__$1;
(statearr_19907_19950[(2)] = inst_19855);

(statearr_19907_19950[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (5))){
var inst_19816 = (function (){var G__19908 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19908) : cljs.core.deref.call(null,G__19908));
})();
var inst_19817 = cljs.core.vals(inst_19816);
var inst_19818 = cljs.core.seq(inst_19817);
var inst_19819 = inst_19818;
var inst_19820 = null;
var inst_19821 = (0);
var inst_19822 = (0);
var state_19878__$1 = (function (){var statearr_19909 = state_19878;
(statearr_19909[(12)] = inst_19822);

(statearr_19909[(13)] = inst_19820);

(statearr_19909[(15)] = inst_19821);

(statearr_19909[(16)] = inst_19819);

return statearr_19909;
})();
var statearr_19910_19951 = state_19878__$1;
(statearr_19910_19951[(2)] = null);

(statearr_19910_19951[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (14))){
var state_19878__$1 = state_19878;
var statearr_19914_19952 = state_19878__$1;
(statearr_19914_19952[(2)] = null);

(statearr_19914_19952[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (16))){
var inst_19833 = (state_19878[(10)]);
var inst_19837 = cljs.core.chunk_first(inst_19833);
var inst_19838 = cljs.core.chunk_rest(inst_19833);
var inst_19839 = cljs.core.count(inst_19837);
var inst_19819 = inst_19838;
var inst_19820 = inst_19837;
var inst_19821 = inst_19839;
var inst_19822 = (0);
var state_19878__$1 = (function (){var statearr_19915 = state_19878;
(statearr_19915[(12)] = inst_19822);

(statearr_19915[(13)] = inst_19820);

(statearr_19915[(15)] = inst_19821);

(statearr_19915[(16)] = inst_19819);

return statearr_19915;
})();
var statearr_19916_19953 = state_19878__$1;
(statearr_19916_19953[(2)] = null);

(statearr_19916_19953[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (10))){
var inst_19822 = (state_19878[(12)]);
var inst_19820 = (state_19878[(13)]);
var inst_19821 = (state_19878[(15)]);
var inst_19819 = (state_19878[(16)]);
var inst_19827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19820,inst_19822);
var inst_19828 = cljs.core.async.muxch_STAR_(inst_19827);
var inst_19829 = cljs.core.async.close_BANG_(inst_19828);
var inst_19830 = (inst_19822 + (1));
var tmp19911 = inst_19820;
var tmp19912 = inst_19821;
var tmp19913 = inst_19819;
var inst_19819__$1 = tmp19913;
var inst_19820__$1 = tmp19911;
var inst_19821__$1 = tmp19912;
var inst_19822__$1 = inst_19830;
var state_19878__$1 = (function (){var statearr_19917 = state_19878;
(statearr_19917[(12)] = inst_19822__$1);

(statearr_19917[(13)] = inst_19820__$1);

(statearr_19917[(17)] = inst_19829);

(statearr_19917[(15)] = inst_19821__$1);

(statearr_19917[(16)] = inst_19819__$1);

return statearr_19917;
})();
var statearr_19918_19954 = state_19878__$1;
(statearr_19918_19954[(2)] = null);

(statearr_19918_19954[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (18))){
var inst_19848 = (state_19878[(2)]);
var state_19878__$1 = state_19878;
var statearr_19919_19955 = state_19878__$1;
(statearr_19919_19955[(2)] = inst_19848);

(statearr_19919_19955[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19879 === (8))){
var inst_19822 = (state_19878[(12)]);
var inst_19821 = (state_19878[(15)]);
var inst_19824 = (inst_19822 < inst_19821);
var inst_19825 = inst_19824;
var state_19878__$1 = state_19878;
if(cljs.core.truth_(inst_19825)){
var statearr_19920_19956 = state_19878__$1;
(statearr_19920_19956[(1)] = (10));

} else {
var statearr_19921_19957 = state_19878__$1;
(statearr_19921_19957[(1)] = (11));

}

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
}
}
}
}
}
});})(c__7703__auto___19929,mults,ensure_mult,p))
;
return ((function (switch__7623__auto__,c__7703__auto___19929,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__7624__auto__ = null;
var cljs$core$async$pub_$_state_machine__7624__auto____0 = (function (){
var statearr_19925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19925[(0)] = cljs$core$async$pub_$_state_machine__7624__auto__);

(statearr_19925[(1)] = (1));

return statearr_19925;
});
var cljs$core$async$pub_$_state_machine__7624__auto____1 = (function (state_19878){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_19878);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e19926){if((e19926 instanceof Object)){
var ex__7627__auto__ = e19926;
var statearr_19927_19958 = state_19878;
(statearr_19927_19958[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19878);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19959 = state_19878;
state_19878 = G__19959;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__7624__auto__ = function(state_19878){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__7624__auto____1.call(this,state_19878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__7624__auto____0;
cljs$core$async$pub_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__7624__auto____1;
return cljs$core$async$pub_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___19929,mults,ensure_mult,p))
})();
var state__7705__auto__ = (function (){var statearr_19928 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_19928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___19929);

return statearr_19928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___19929,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__20040 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20040) : cljs.core.atom.call(null,G__20040));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__7703__auto___20113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20079){
var state_val_20080 = (state_20079[(1)]);
if((state_val_20080 === (7))){
var state_20079__$1 = state_20079;
var statearr_20081_20114 = state_20079__$1;
(statearr_20081_20114[(2)] = null);

(statearr_20081_20114[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (1))){
var state_20079__$1 = state_20079;
var statearr_20082_20115 = state_20079__$1;
(statearr_20082_20115[(2)] = null);

(statearr_20082_20115[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (4))){
var inst_20043 = (state_20079[(7)]);
var inst_20045 = (inst_20043 < cnt);
var state_20079__$1 = state_20079;
if(cljs.core.truth_(inst_20045)){
var statearr_20083_20116 = state_20079__$1;
(statearr_20083_20116[(1)] = (6));

} else {
var statearr_20084_20117 = state_20079__$1;
(statearr_20084_20117[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (15))){
var inst_20075 = (state_20079[(2)]);
var state_20079__$1 = state_20079;
var statearr_20085_20118 = state_20079__$1;
(statearr_20085_20118[(2)] = inst_20075);

(statearr_20085_20118[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (13))){
var inst_20068 = cljs.core.async.close_BANG_(out);
var state_20079__$1 = state_20079;
var statearr_20086_20119 = state_20079__$1;
(statearr_20086_20119[(2)] = inst_20068);

(statearr_20086_20119[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (6))){
var state_20079__$1 = state_20079;
var statearr_20087_20120 = state_20079__$1;
(statearr_20087_20120[(2)] = null);

(statearr_20087_20120[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (3))){
var inst_20077 = (state_20079[(2)]);
var state_20079__$1 = state_20079;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20079__$1,inst_20077);
} else {
if((state_val_20080 === (12))){
var inst_20065 = (state_20079[(8)]);
var inst_20065__$1 = (state_20079[(2)]);
var inst_20066 = cljs.core.some(cljs.core.nil_QMARK_,inst_20065__$1);
var state_20079__$1 = (function (){var statearr_20088 = state_20079;
(statearr_20088[(8)] = inst_20065__$1);

return statearr_20088;
})();
if(cljs.core.truth_(inst_20066)){
var statearr_20089_20121 = state_20079__$1;
(statearr_20089_20121[(1)] = (13));

} else {
var statearr_20090_20122 = state_20079__$1;
(statearr_20090_20122[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (2))){
var inst_20042 = (function (){var G__20091 = dctr;
var G__20092 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20091,G__20092) : cljs.core.reset_BANG_.call(null,G__20091,G__20092));
})();
var inst_20043 = (0);
var state_20079__$1 = (function (){var statearr_20093 = state_20079;
(statearr_20093[(9)] = inst_20042);

(statearr_20093[(7)] = inst_20043);

return statearr_20093;
})();
var statearr_20094_20123 = state_20079__$1;
(statearr_20094_20123[(2)] = null);

(statearr_20094_20123[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (11))){
var inst_20043 = (state_20079[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20079,(10),Object,null,(9));
var inst_20052 = (function (){var G__20095 = inst_20043;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__20095) : chs__$1.call(null,G__20095));
})();
var inst_20053 = (function (){var G__20096 = inst_20043;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20096) : done.call(null,G__20096));
})();
var inst_20054 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20052,inst_20053);
var state_20079__$1 = state_20079;
var statearr_20097_20124 = state_20079__$1;
(statearr_20097_20124[(2)] = inst_20054);


cljs.core.async.impl.ioc_helpers.process_exception(state_20079__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (9))){
var inst_20043 = (state_20079[(7)]);
var inst_20056 = (state_20079[(2)]);
var inst_20057 = (inst_20043 + (1));
var inst_20043__$1 = inst_20057;
var state_20079__$1 = (function (){var statearr_20098 = state_20079;
(statearr_20098[(10)] = inst_20056);

(statearr_20098[(7)] = inst_20043__$1);

return statearr_20098;
})();
var statearr_20099_20125 = state_20079__$1;
(statearr_20099_20125[(2)] = null);

(statearr_20099_20125[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (5))){
var inst_20063 = (state_20079[(2)]);
var state_20079__$1 = (function (){var statearr_20100 = state_20079;
(statearr_20100[(11)] = inst_20063);

return statearr_20100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20079__$1,(12),dchan);
} else {
if((state_val_20080 === (14))){
var inst_20065 = (state_20079[(8)]);
var inst_20070 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20065);
var state_20079__$1 = state_20079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20079__$1,(16),out,inst_20070);
} else {
if((state_val_20080 === (16))){
var inst_20072 = (state_20079[(2)]);
var state_20079__$1 = (function (){var statearr_20101 = state_20079;
(statearr_20101[(12)] = inst_20072);

return statearr_20101;
})();
var statearr_20102_20126 = state_20079__$1;
(statearr_20102_20126[(2)] = null);

(statearr_20102_20126[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (10))){
var inst_20047 = (state_20079[(2)]);
var inst_20048 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20079__$1 = (function (){var statearr_20103 = state_20079;
(statearr_20103[(13)] = inst_20047);

return statearr_20103;
})();
var statearr_20104_20127 = state_20079__$1;
(statearr_20104_20127[(2)] = inst_20048);


cljs.core.async.impl.ioc_helpers.process_exception(state_20079__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20080 === (8))){
var inst_20061 = (state_20079[(2)]);
var state_20079__$1 = state_20079;
var statearr_20105_20128 = state_20079__$1;
(statearr_20105_20128[(2)] = inst_20061);

(statearr_20105_20128[(1)] = (5));


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
}
}
}
}
}
}
});})(c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7623__auto__,c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__7624__auto__ = null;
var cljs$core$async$map_$_state_machine__7624__auto____0 = (function (){
var statearr_20109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20109[(0)] = cljs$core$async$map_$_state_machine__7624__auto__);

(statearr_20109[(1)] = (1));

return statearr_20109;
});
var cljs$core$async$map_$_state_machine__7624__auto____1 = (function (state_20079){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20079);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20110){if((e20110 instanceof Object)){
var ex__7627__auto__ = e20110;
var statearr_20111_20129 = state_20079;
(statearr_20111_20129[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20079);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20110;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20130 = state_20079;
state_20079 = G__20130;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__7624__auto__ = function(state_20079){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__7624__auto____1.call(this,state_20079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__7624__auto____0;
cljs$core$async$map_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__7624__auto____1;
return cljs$core$async$map_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7705__auto__ = (function (){var statearr_20112 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20113);

return statearr_20112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20113,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___20240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20240,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20240,out){
return (function (state_20216){
var state_val_20217 = (state_20216[(1)]);
if((state_val_20217 === (7))){
var inst_20195 = (state_20216[(7)]);
var inst_20196 = (state_20216[(8)]);
var inst_20195__$1 = (state_20216[(2)]);
var inst_20196__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20195__$1,(0),null);
var inst_20197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20195__$1,(1),null);
var inst_20198 = (inst_20196__$1 == null);
var state_20216__$1 = (function (){var statearr_20218 = state_20216;
(statearr_20218[(7)] = inst_20195__$1);

(statearr_20218[(8)] = inst_20196__$1);

(statearr_20218[(9)] = inst_20197);

return statearr_20218;
})();
if(cljs.core.truth_(inst_20198)){
var statearr_20219_20241 = state_20216__$1;
(statearr_20219_20241[(1)] = (8));

} else {
var statearr_20220_20242 = state_20216__$1;
(statearr_20220_20242[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (1))){
var inst_20187 = cljs.core.vec(chs);
var inst_20188 = inst_20187;
var state_20216__$1 = (function (){var statearr_20221 = state_20216;
(statearr_20221[(10)] = inst_20188);

return statearr_20221;
})();
var statearr_20222_20243 = state_20216__$1;
(statearr_20222_20243[(2)] = null);

(statearr_20222_20243[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (4))){
var inst_20188 = (state_20216[(10)]);
var state_20216__$1 = state_20216;
return cljs.core.async.ioc_alts_BANG_(state_20216__$1,(7),inst_20188);
} else {
if((state_val_20217 === (6))){
var inst_20212 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
var statearr_20223_20244 = state_20216__$1;
(statearr_20223_20244[(2)] = inst_20212);

(statearr_20223_20244[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (3))){
var inst_20214 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20216__$1,inst_20214);
} else {
if((state_val_20217 === (2))){
var inst_20188 = (state_20216[(10)]);
var inst_20190 = cljs.core.count(inst_20188);
var inst_20191 = (inst_20190 > (0));
var state_20216__$1 = state_20216;
if(cljs.core.truth_(inst_20191)){
var statearr_20225_20245 = state_20216__$1;
(statearr_20225_20245[(1)] = (4));

} else {
var statearr_20226_20246 = state_20216__$1;
(statearr_20226_20246[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (11))){
var inst_20188 = (state_20216[(10)]);
var inst_20205 = (state_20216[(2)]);
var tmp20224 = inst_20188;
var inst_20188__$1 = tmp20224;
var state_20216__$1 = (function (){var statearr_20227 = state_20216;
(statearr_20227[(10)] = inst_20188__$1);

(statearr_20227[(11)] = inst_20205);

return statearr_20227;
})();
var statearr_20228_20247 = state_20216__$1;
(statearr_20228_20247[(2)] = null);

(statearr_20228_20247[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (9))){
var inst_20196 = (state_20216[(8)]);
var state_20216__$1 = state_20216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20216__$1,(11),out,inst_20196);
} else {
if((state_val_20217 === (5))){
var inst_20210 = cljs.core.async.close_BANG_(out);
var state_20216__$1 = state_20216;
var statearr_20229_20248 = state_20216__$1;
(statearr_20229_20248[(2)] = inst_20210);

(statearr_20229_20248[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (10))){
var inst_20208 = (state_20216[(2)]);
var state_20216__$1 = state_20216;
var statearr_20230_20249 = state_20216__$1;
(statearr_20230_20249[(2)] = inst_20208);

(statearr_20230_20249[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20217 === (8))){
var inst_20195 = (state_20216[(7)]);
var inst_20196 = (state_20216[(8)]);
var inst_20197 = (state_20216[(9)]);
var inst_20188 = (state_20216[(10)]);
var inst_20200 = (function (){var c = inst_20197;
var v = inst_20196;
var vec__20193 = inst_20195;
var cs = inst_20188;
return ((function (c,v,vec__20193,cs,inst_20195,inst_20196,inst_20197,inst_20188,state_val_20217,c__7703__auto___20240,out){
return (function (p1__20131_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20131_SHARP_);
});
;})(c,v,vec__20193,cs,inst_20195,inst_20196,inst_20197,inst_20188,state_val_20217,c__7703__auto___20240,out))
})();
var inst_20201 = cljs.core.filterv(inst_20200,inst_20188);
var inst_20188__$1 = inst_20201;
var state_20216__$1 = (function (){var statearr_20231 = state_20216;
(statearr_20231[(10)] = inst_20188__$1);

return statearr_20231;
})();
var statearr_20232_20250 = state_20216__$1;
(statearr_20232_20250[(2)] = null);

(statearr_20232_20250[(1)] = (2));


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
}
});})(c__7703__auto___20240,out))
;
return ((function (switch__7623__auto__,c__7703__auto___20240,out){
return (function() {
var cljs$core$async$merge_$_state_machine__7624__auto__ = null;
var cljs$core$async$merge_$_state_machine__7624__auto____0 = (function (){
var statearr_20236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20236[(0)] = cljs$core$async$merge_$_state_machine__7624__auto__);

(statearr_20236[(1)] = (1));

return statearr_20236;
});
var cljs$core$async$merge_$_state_machine__7624__auto____1 = (function (state_20216){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20216);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20237){if((e20237 instanceof Object)){
var ex__7627__auto__ = e20237;
var statearr_20238_20251 = state_20216;
(statearr_20238_20251[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20216);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20252 = state_20216;
state_20216 = G__20252;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__7624__auto__ = function(state_20216){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__7624__auto____1.call(this,state_20216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__7624__auto____0;
cljs$core$async$merge_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__7624__auto____1;
return cljs$core$async$merge_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20240,out))
})();
var state__7705__auto__ = (function (){var statearr_20239 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20240);

return statearr_20239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20240,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___20348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20348,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20348,out){
return (function (state_20325){
var state_val_20326 = (state_20325[(1)]);
if((state_val_20326 === (7))){
var inst_20307 = (state_20325[(7)]);
var inst_20307__$1 = (state_20325[(2)]);
var inst_20308 = (inst_20307__$1 == null);
var inst_20309 = cljs.core.not(inst_20308);
var state_20325__$1 = (function (){var statearr_20327 = state_20325;
(statearr_20327[(7)] = inst_20307__$1);

return statearr_20327;
})();
if(inst_20309){
var statearr_20328_20349 = state_20325__$1;
(statearr_20328_20349[(1)] = (8));

} else {
var statearr_20329_20350 = state_20325__$1;
(statearr_20329_20350[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (1))){
var inst_20302 = (0);
var state_20325__$1 = (function (){var statearr_20330 = state_20325;
(statearr_20330[(8)] = inst_20302);

return statearr_20330;
})();
var statearr_20331_20351 = state_20325__$1;
(statearr_20331_20351[(2)] = null);

(statearr_20331_20351[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (4))){
var state_20325__$1 = state_20325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20325__$1,(7),ch);
} else {
if((state_val_20326 === (6))){
var inst_20320 = (state_20325[(2)]);
var state_20325__$1 = state_20325;
var statearr_20332_20352 = state_20325__$1;
(statearr_20332_20352[(2)] = inst_20320);

(statearr_20332_20352[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (3))){
var inst_20322 = (state_20325[(2)]);
var inst_20323 = cljs.core.async.close_BANG_(out);
var state_20325__$1 = (function (){var statearr_20333 = state_20325;
(statearr_20333[(9)] = inst_20322);

return statearr_20333;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20325__$1,inst_20323);
} else {
if((state_val_20326 === (2))){
var inst_20302 = (state_20325[(8)]);
var inst_20304 = (inst_20302 < n);
var state_20325__$1 = state_20325;
if(cljs.core.truth_(inst_20304)){
var statearr_20334_20353 = state_20325__$1;
(statearr_20334_20353[(1)] = (4));

} else {
var statearr_20335_20354 = state_20325__$1;
(statearr_20335_20354[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (11))){
var inst_20302 = (state_20325[(8)]);
var inst_20312 = (state_20325[(2)]);
var inst_20313 = (inst_20302 + (1));
var inst_20302__$1 = inst_20313;
var state_20325__$1 = (function (){var statearr_20336 = state_20325;
(statearr_20336[(8)] = inst_20302__$1);

(statearr_20336[(10)] = inst_20312);

return statearr_20336;
})();
var statearr_20337_20355 = state_20325__$1;
(statearr_20337_20355[(2)] = null);

(statearr_20337_20355[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (9))){
var state_20325__$1 = state_20325;
var statearr_20338_20356 = state_20325__$1;
(statearr_20338_20356[(2)] = null);

(statearr_20338_20356[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (5))){
var state_20325__$1 = state_20325;
var statearr_20339_20357 = state_20325__$1;
(statearr_20339_20357[(2)] = null);

(statearr_20339_20357[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (10))){
var inst_20317 = (state_20325[(2)]);
var state_20325__$1 = state_20325;
var statearr_20340_20358 = state_20325__$1;
(statearr_20340_20358[(2)] = inst_20317);

(statearr_20340_20358[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20326 === (8))){
var inst_20307 = (state_20325[(7)]);
var state_20325__$1 = state_20325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20325__$1,(11),out,inst_20307);
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
}
});})(c__7703__auto___20348,out))
;
return ((function (switch__7623__auto__,c__7703__auto___20348,out){
return (function() {
var cljs$core$async$take_$_state_machine__7624__auto__ = null;
var cljs$core$async$take_$_state_machine__7624__auto____0 = (function (){
var statearr_20344 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20344[(0)] = cljs$core$async$take_$_state_machine__7624__auto__);

(statearr_20344[(1)] = (1));

return statearr_20344;
});
var cljs$core$async$take_$_state_machine__7624__auto____1 = (function (state_20325){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20325);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20345){if((e20345 instanceof Object)){
var ex__7627__auto__ = e20345;
var statearr_20346_20359 = state_20325;
(statearr_20346_20359[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20325);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20360 = state_20325;
state_20325 = G__20360;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__7624__auto__ = function(state_20325){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__7624__auto____1.call(this,state_20325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__7624__auto____0;
cljs$core$async$take_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__7624__auto____1;
return cljs$core$async$take_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20348,out))
})();
var state__7705__auto__ = (function (){var statearr_20347 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20348);

return statearr_20347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20348,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t20373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20373 = (function (ch,f,map_LT_,meta20374){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20374 = meta20374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t20376 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20376 = (function (fn1,_,meta20374,map_LT_,f,ch,meta20377){
this.fn1 = fn1;
this._ = _;
this.meta20374 = meta20374;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20377 = meta20377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t20376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20361_SHARP_){
var G__20379 = (((p1__20361_SHARP_ == null))?null:(function (){var G__20380 = p1__20361_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20380) : self__.f.call(null,G__20380));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20379) : f1.call(null,G__20379));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20378){
var self__ = this;
var _20378__$1 = this;
return self__.meta20377;
});})(___$1))
;

cljs.core.async.t20376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20378,meta20377__$1){
var self__ = this;
var _20378__$1 = this;
return (new cljs.core.async.t20376(self__.fn1,self__._,self__.meta20374,self__.map_LT_,self__.f,self__.ch,meta20377__$1));
});})(___$1))
;

cljs.core.async.t20376.cljs$lang$type = true;

cljs.core.async.t20376.cljs$lang$ctorStr = "cljs.core.async/t20376";

cljs.core.async.t20376.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20376");
});})(___$1))
;

cljs.core.async.__GT_t20376 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t20376(fn1__$1,___$2,meta20374__$1,map_LT___$1,f__$1,ch__$1,meta20377){
return (new cljs.core.async.t20376(fn1__$1,___$2,meta20374__$1,map_LT___$1,f__$1,ch__$1,meta20377));
});})(___$1))
;

}

return (new cljs.core.async.t20376(fn1,___$1,self__.meta20374,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !(((function (){var G__20381 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20381) : cljs.core.deref.call(null,G__20381));
})() == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20382 = (function (){var G__20383 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20383) : cljs.core.deref.call(null,G__20383));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20382) : self__.f.call(null,G__20382));
})());
} else {
return ret;
}
});

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t20373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20375){
var self__ = this;
var _20375__$1 = this;
return self__.meta20374;
});

cljs.core.async.t20373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20375,meta20374__$1){
var self__ = this;
var _20375__$1 = this;
return (new cljs.core.async.t20373(self__.ch,self__.f,self__.map_LT_,meta20374__$1));
});

cljs.core.async.t20373.cljs$lang$type = true;

cljs.core.async.t20373.cljs$lang$ctorStr = "cljs.core.async/t20373";

cljs.core.async.t20373.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20373");
});

cljs.core.async.__GT_t20373 = (function cljs$core$async$map_LT__$___GT_t20373(ch__$1,f__$1,map_LT___$1,meta20374){
return (new cljs.core.async.t20373(ch__$1,f__$1,map_LT___$1,meta20374));
});

}

return (new cljs.core.async.t20373(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t20388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20388 = (function (ch,f,map_GT_,meta20389){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20389 = meta20389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__20391 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20391) : self__.f.call(null,G__20391));
})(),fn1);
});

cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20388.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20390){
var self__ = this;
var _20390__$1 = this;
return self__.meta20389;
});

cljs.core.async.t20388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20390,meta20389__$1){
var self__ = this;
var _20390__$1 = this;
return (new cljs.core.async.t20388(self__.ch,self__.f,self__.map_GT_,meta20389__$1));
});

cljs.core.async.t20388.cljs$lang$type = true;

cljs.core.async.t20388.cljs$lang$ctorStr = "cljs.core.async/t20388";

cljs.core.async.t20388.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20388");
});

cljs.core.async.__GT_t20388 = (function cljs$core$async$map_GT__$___GT_t20388(ch__$1,f__$1,map_GT___$1,meta20389){
return (new cljs.core.async.t20388(ch__$1,f__$1,map_GT___$1,meta20389));
});

}

return (new cljs.core.async.t20388(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t20396 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20396 = (function (ch,p,filter_GT_,meta20397){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20397 = meta20397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__20399 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__20399) : self__.p.call(null,G__20399));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20396.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t20396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20398){
var self__ = this;
var _20398__$1 = this;
return self__.meta20397;
});

cljs.core.async.t20396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20398,meta20397__$1){
var self__ = this;
var _20398__$1 = this;
return (new cljs.core.async.t20396(self__.ch,self__.p,self__.filter_GT_,meta20397__$1));
});

cljs.core.async.t20396.cljs$lang$type = true;

cljs.core.async.t20396.cljs$lang$ctorStr = "cljs.core.async/t20396";

cljs.core.async.t20396.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20396");
});

cljs.core.async.__GT_t20396 = (function cljs$core$async$filter_GT__$___GT_t20396(ch__$1,p__$1,filter_GT___$1,meta20397){
return (new cljs.core.async.t20396(ch__$1,p__$1,filter_GT___$1,meta20397));
});

}

return (new cljs.core.async.t20396(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___20487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20487,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20487,out){
return (function (state_20465){
var state_val_20466 = (state_20465[(1)]);
if((state_val_20466 === (7))){
var inst_20461 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20467_20488 = state_20465__$1;
(statearr_20467_20488[(2)] = inst_20461);

(statearr_20467_20488[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (1))){
var state_20465__$1 = state_20465;
var statearr_20468_20489 = state_20465__$1;
(statearr_20468_20489[(2)] = null);

(statearr_20468_20489[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (4))){
var inst_20447 = (state_20465[(7)]);
var inst_20447__$1 = (state_20465[(2)]);
var inst_20448 = (inst_20447__$1 == null);
var state_20465__$1 = (function (){var statearr_20469 = state_20465;
(statearr_20469[(7)] = inst_20447__$1);

return statearr_20469;
})();
if(cljs.core.truth_(inst_20448)){
var statearr_20470_20490 = state_20465__$1;
(statearr_20470_20490[(1)] = (5));

} else {
var statearr_20471_20491 = state_20465__$1;
(statearr_20471_20491[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (6))){
var inst_20447 = (state_20465[(7)]);
var inst_20452 = (function (){var G__20472 = inst_20447;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20472) : p.call(null,G__20472));
})();
var state_20465__$1 = state_20465;
if(cljs.core.truth_(inst_20452)){
var statearr_20473_20492 = state_20465__$1;
(statearr_20473_20492[(1)] = (8));

} else {
var statearr_20474_20493 = state_20465__$1;
(statearr_20474_20493[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (3))){
var inst_20463 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20465__$1,inst_20463);
} else {
if((state_val_20466 === (2))){
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20465__$1,(4),ch);
} else {
if((state_val_20466 === (11))){
var inst_20455 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
var statearr_20475_20494 = state_20465__$1;
(statearr_20475_20494[(2)] = inst_20455);

(statearr_20475_20494[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (9))){
var state_20465__$1 = state_20465;
var statearr_20476_20495 = state_20465__$1;
(statearr_20476_20495[(2)] = null);

(statearr_20476_20495[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (5))){
var inst_20450 = cljs.core.async.close_BANG_(out);
var state_20465__$1 = state_20465;
var statearr_20477_20496 = state_20465__$1;
(statearr_20477_20496[(2)] = inst_20450);

(statearr_20477_20496[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (10))){
var inst_20458 = (state_20465[(2)]);
var state_20465__$1 = (function (){var statearr_20478 = state_20465;
(statearr_20478[(8)] = inst_20458);

return statearr_20478;
})();
var statearr_20479_20497 = state_20465__$1;
(statearr_20479_20497[(2)] = null);

(statearr_20479_20497[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20466 === (8))){
var inst_20447 = (state_20465[(7)]);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20465__$1,(11),out,inst_20447);
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
}
});})(c__7703__auto___20487,out))
;
return ((function (switch__7623__auto__,c__7703__auto___20487,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__7624__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__7624__auto____0 = (function (){
var statearr_20483 = [null,null,null,null,null,null,null,null,null];
(statearr_20483[(0)] = cljs$core$async$filter_LT__$_state_machine__7624__auto__);

(statearr_20483[(1)] = (1));

return statearr_20483;
});
var cljs$core$async$filter_LT__$_state_machine__7624__auto____1 = (function (state_20465){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20465);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20484){if((e20484 instanceof Object)){
var ex__7627__auto__ = e20484;
var statearr_20485_20498 = state_20465;
(statearr_20485_20498[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20465);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20484;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20499 = state_20465;
state_20465 = G__20499;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__7624__auto__ = function(state_20465){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__7624__auto____1.call(this,state_20465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__7624__auto____0;
cljs$core$async$filter_LT__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__7624__auto____1;
return cljs$core$async$filter_LT__$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20487,out))
})();
var state__7705__auto__ = (function (){var statearr_20486 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20487);

return statearr_20486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20487,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7703__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto__){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto__){
return (function (state_20669){
var state_val_20670 = (state_20669[(1)]);
if((state_val_20670 === (7))){
var inst_20665 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20671_20713 = state_20669__$1;
(statearr_20671_20713[(2)] = inst_20665);

(statearr_20671_20713[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (20))){
var inst_20635 = (state_20669[(7)]);
var inst_20646 = (state_20669[(2)]);
var inst_20647 = cljs.core.next(inst_20635);
var inst_20621 = inst_20647;
var inst_20622 = null;
var inst_20623 = (0);
var inst_20624 = (0);
var state_20669__$1 = (function (){var statearr_20672 = state_20669;
(statearr_20672[(8)] = inst_20621);

(statearr_20672[(9)] = inst_20646);

(statearr_20672[(10)] = inst_20623);

(statearr_20672[(11)] = inst_20622);

(statearr_20672[(12)] = inst_20624);

return statearr_20672;
})();
var statearr_20673_20714 = state_20669__$1;
(statearr_20673_20714[(2)] = null);

(statearr_20673_20714[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (1))){
var state_20669__$1 = state_20669;
var statearr_20674_20715 = state_20669__$1;
(statearr_20674_20715[(2)] = null);

(statearr_20674_20715[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (4))){
var inst_20610 = (state_20669[(13)]);
var inst_20610__$1 = (state_20669[(2)]);
var inst_20611 = (inst_20610__$1 == null);
var state_20669__$1 = (function (){var statearr_20675 = state_20669;
(statearr_20675[(13)] = inst_20610__$1);

return statearr_20675;
})();
if(cljs.core.truth_(inst_20611)){
var statearr_20676_20716 = state_20669__$1;
(statearr_20676_20716[(1)] = (5));

} else {
var statearr_20677_20717 = state_20669__$1;
(statearr_20677_20717[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (15))){
var state_20669__$1 = state_20669;
var statearr_20681_20718 = state_20669__$1;
(statearr_20681_20718[(2)] = null);

(statearr_20681_20718[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (21))){
var state_20669__$1 = state_20669;
var statearr_20682_20719 = state_20669__$1;
(statearr_20682_20719[(2)] = null);

(statearr_20682_20719[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (13))){
var inst_20621 = (state_20669[(8)]);
var inst_20623 = (state_20669[(10)]);
var inst_20622 = (state_20669[(11)]);
var inst_20624 = (state_20669[(12)]);
var inst_20631 = (state_20669[(2)]);
var inst_20632 = (inst_20624 + (1));
var tmp20678 = inst_20621;
var tmp20679 = inst_20623;
var tmp20680 = inst_20622;
var inst_20621__$1 = tmp20678;
var inst_20622__$1 = tmp20680;
var inst_20623__$1 = tmp20679;
var inst_20624__$1 = inst_20632;
var state_20669__$1 = (function (){var statearr_20683 = state_20669;
(statearr_20683[(14)] = inst_20631);

(statearr_20683[(8)] = inst_20621__$1);

(statearr_20683[(10)] = inst_20623__$1);

(statearr_20683[(11)] = inst_20622__$1);

(statearr_20683[(12)] = inst_20624__$1);

return statearr_20683;
})();
var statearr_20684_20720 = state_20669__$1;
(statearr_20684_20720[(2)] = null);

(statearr_20684_20720[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (22))){
var state_20669__$1 = state_20669;
var statearr_20685_20721 = state_20669__$1;
(statearr_20685_20721[(2)] = null);

(statearr_20685_20721[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (6))){
var inst_20610 = (state_20669[(13)]);
var inst_20619 = (function (){var G__20686 = inst_20610;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20686) : f.call(null,G__20686));
})();
var inst_20620 = cljs.core.seq(inst_20619);
var inst_20621 = inst_20620;
var inst_20622 = null;
var inst_20623 = (0);
var inst_20624 = (0);
var state_20669__$1 = (function (){var statearr_20687 = state_20669;
(statearr_20687[(8)] = inst_20621);

(statearr_20687[(10)] = inst_20623);

(statearr_20687[(11)] = inst_20622);

(statearr_20687[(12)] = inst_20624);

return statearr_20687;
})();
var statearr_20688_20722 = state_20669__$1;
(statearr_20688_20722[(2)] = null);

(statearr_20688_20722[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (17))){
var inst_20635 = (state_20669[(7)]);
var inst_20639 = cljs.core.chunk_first(inst_20635);
var inst_20640 = cljs.core.chunk_rest(inst_20635);
var inst_20641 = cljs.core.count(inst_20639);
var inst_20621 = inst_20640;
var inst_20622 = inst_20639;
var inst_20623 = inst_20641;
var inst_20624 = (0);
var state_20669__$1 = (function (){var statearr_20689 = state_20669;
(statearr_20689[(8)] = inst_20621);

(statearr_20689[(10)] = inst_20623);

(statearr_20689[(11)] = inst_20622);

(statearr_20689[(12)] = inst_20624);

return statearr_20689;
})();
var statearr_20690_20723 = state_20669__$1;
(statearr_20690_20723[(2)] = null);

(statearr_20690_20723[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (3))){
var inst_20667 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20669__$1,inst_20667);
} else {
if((state_val_20670 === (12))){
var inst_20655 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20691_20724 = state_20669__$1;
(statearr_20691_20724[(2)] = inst_20655);

(statearr_20691_20724[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (2))){
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20669__$1,(4),in$);
} else {
if((state_val_20670 === (23))){
var inst_20663 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20692_20725 = state_20669__$1;
(statearr_20692_20725[(2)] = inst_20663);

(statearr_20692_20725[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (19))){
var inst_20650 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20693_20726 = state_20669__$1;
(statearr_20693_20726[(2)] = inst_20650);

(statearr_20693_20726[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (11))){
var inst_20635 = (state_20669[(7)]);
var inst_20621 = (state_20669[(8)]);
var inst_20635__$1 = cljs.core.seq(inst_20621);
var state_20669__$1 = (function (){var statearr_20694 = state_20669;
(statearr_20694[(7)] = inst_20635__$1);

return statearr_20694;
})();
if(inst_20635__$1){
var statearr_20695_20727 = state_20669__$1;
(statearr_20695_20727[(1)] = (14));

} else {
var statearr_20696_20728 = state_20669__$1;
(statearr_20696_20728[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (9))){
var inst_20657 = (state_20669[(2)]);
var inst_20658 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20669__$1 = (function (){var statearr_20697 = state_20669;
(statearr_20697[(15)] = inst_20657);

return statearr_20697;
})();
if(cljs.core.truth_(inst_20658)){
var statearr_20698_20729 = state_20669__$1;
(statearr_20698_20729[(1)] = (21));

} else {
var statearr_20699_20730 = state_20669__$1;
(statearr_20699_20730[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (5))){
var inst_20613 = cljs.core.async.close_BANG_(out);
var state_20669__$1 = state_20669;
var statearr_20700_20731 = state_20669__$1;
(statearr_20700_20731[(2)] = inst_20613);

(statearr_20700_20731[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (14))){
var inst_20635 = (state_20669[(7)]);
var inst_20637 = cljs.core.chunked_seq_QMARK_(inst_20635);
var state_20669__$1 = state_20669;
if(inst_20637){
var statearr_20701_20732 = state_20669__$1;
(statearr_20701_20732[(1)] = (17));

} else {
var statearr_20702_20733 = state_20669__$1;
(statearr_20702_20733[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (16))){
var inst_20653 = (state_20669[(2)]);
var state_20669__$1 = state_20669;
var statearr_20703_20734 = state_20669__$1;
(statearr_20703_20734[(2)] = inst_20653);

(statearr_20703_20734[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20670 === (10))){
var inst_20622 = (state_20669[(11)]);
var inst_20624 = (state_20669[(12)]);
var inst_20629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20622,inst_20624);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20669__$1,(13),out,inst_20629);
} else {
if((state_val_20670 === (18))){
var inst_20635 = (state_20669[(7)]);
var inst_20644 = cljs.core.first(inst_20635);
var state_20669__$1 = state_20669;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20669__$1,(20),out,inst_20644);
} else {
if((state_val_20670 === (8))){
var inst_20623 = (state_20669[(10)]);
var inst_20624 = (state_20669[(12)]);
var inst_20626 = (inst_20624 < inst_20623);
var inst_20627 = inst_20626;
var state_20669__$1 = state_20669;
if(cljs.core.truth_(inst_20627)){
var statearr_20704_20735 = state_20669__$1;
(statearr_20704_20735[(1)] = (10));

} else {
var statearr_20705_20736 = state_20669__$1;
(statearr_20705_20736[(1)] = (11));

}

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
}
}
}
});})(c__7703__auto__))
;
return ((function (switch__7623__auto__,c__7703__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____0 = (function (){
var statearr_20709 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20709[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__);

(statearr_20709[(1)] = (1));

return statearr_20709;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____1 = (function (state_20669){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20669);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20710){if((e20710 instanceof Object)){
var ex__7627__auto__ = e20710;
var statearr_20711_20737 = state_20669;
(statearr_20711_20737[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20669);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20738 = state_20669;
state_20669 = G__20738;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__ = function(state_20669){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____1.call(this,state_20669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7624__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto__))
})();
var state__7705__auto__ = (function (){var statearr_20712 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto__);

return statearr_20712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto__))
);

return c__7703__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___20843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20843,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20843,out){
return (function (state_20818){
var state_val_20819 = (state_20818[(1)]);
if((state_val_20819 === (7))){
var inst_20813 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20820_20844 = state_20818__$1;
(statearr_20820_20844[(2)] = inst_20813);

(statearr_20820_20844[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (1))){
var inst_20795 = null;
var state_20818__$1 = (function (){var statearr_20821 = state_20818;
(statearr_20821[(7)] = inst_20795);

return statearr_20821;
})();
var statearr_20822_20845 = state_20818__$1;
(statearr_20822_20845[(2)] = null);

(statearr_20822_20845[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (4))){
var inst_20798 = (state_20818[(8)]);
var inst_20798__$1 = (state_20818[(2)]);
var inst_20799 = (inst_20798__$1 == null);
var inst_20800 = cljs.core.not(inst_20799);
var state_20818__$1 = (function (){var statearr_20823 = state_20818;
(statearr_20823[(8)] = inst_20798__$1);

return statearr_20823;
})();
if(inst_20800){
var statearr_20824_20846 = state_20818__$1;
(statearr_20824_20846[(1)] = (5));

} else {
var statearr_20825_20847 = state_20818__$1;
(statearr_20825_20847[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (6))){
var state_20818__$1 = state_20818;
var statearr_20826_20848 = state_20818__$1;
(statearr_20826_20848[(2)] = null);

(statearr_20826_20848[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (3))){
var inst_20815 = (state_20818[(2)]);
var inst_20816 = cljs.core.async.close_BANG_(out);
var state_20818__$1 = (function (){var statearr_20827 = state_20818;
(statearr_20827[(9)] = inst_20815);

return statearr_20827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20818__$1,inst_20816);
} else {
if((state_val_20819 === (2))){
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20818__$1,(4),ch);
} else {
if((state_val_20819 === (11))){
var inst_20798 = (state_20818[(8)]);
var inst_20807 = (state_20818[(2)]);
var inst_20795 = inst_20798;
var state_20818__$1 = (function (){var statearr_20828 = state_20818;
(statearr_20828[(10)] = inst_20807);

(statearr_20828[(7)] = inst_20795);

return statearr_20828;
})();
var statearr_20829_20849 = state_20818__$1;
(statearr_20829_20849[(2)] = null);

(statearr_20829_20849[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (9))){
var inst_20798 = (state_20818[(8)]);
var state_20818__$1 = state_20818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20818__$1,(11),out,inst_20798);
} else {
if((state_val_20819 === (5))){
var inst_20798 = (state_20818[(8)]);
var inst_20795 = (state_20818[(7)]);
var inst_20802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20798,inst_20795);
var state_20818__$1 = state_20818;
if(inst_20802){
var statearr_20831_20850 = state_20818__$1;
(statearr_20831_20850[(1)] = (8));

} else {
var statearr_20832_20851 = state_20818__$1;
(statearr_20832_20851[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (10))){
var inst_20810 = (state_20818[(2)]);
var state_20818__$1 = state_20818;
var statearr_20833_20852 = state_20818__$1;
(statearr_20833_20852[(2)] = inst_20810);

(statearr_20833_20852[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20819 === (8))){
var inst_20795 = (state_20818[(7)]);
var tmp20830 = inst_20795;
var inst_20795__$1 = tmp20830;
var state_20818__$1 = (function (){var statearr_20834 = state_20818;
(statearr_20834[(7)] = inst_20795__$1);

return statearr_20834;
})();
var statearr_20835_20853 = state_20818__$1;
(statearr_20835_20853[(2)] = null);

(statearr_20835_20853[(1)] = (2));


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
}
});})(c__7703__auto___20843,out))
;
return ((function (switch__7623__auto__,c__7703__auto___20843,out){
return (function() {
var cljs$core$async$unique_$_state_machine__7624__auto__ = null;
var cljs$core$async$unique_$_state_machine__7624__auto____0 = (function (){
var statearr_20839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20839[(0)] = cljs$core$async$unique_$_state_machine__7624__auto__);

(statearr_20839[(1)] = (1));

return statearr_20839;
});
var cljs$core$async$unique_$_state_machine__7624__auto____1 = (function (state_20818){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20818);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20840){if((e20840 instanceof Object)){
var ex__7627__auto__ = e20840;
var statearr_20841_20854 = state_20818;
(statearr_20841_20854[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20818);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20855 = state_20818;
state_20818 = G__20855;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__7624__auto__ = function(state_20818){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__7624__auto____1.call(this,state_20818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__7624__auto____0;
cljs$core$async$unique_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__7624__auto____1;
return cljs$core$async$unique_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20843,out))
})();
var state__7705__auto__ = (function (){var statearr_20842 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20843);

return statearr_20842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20843,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___20993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___20993,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___20993,out){
return (function (state_20963){
var state_val_20964 = (state_20963[(1)]);
if((state_val_20964 === (7))){
var inst_20959 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
var statearr_20965_20994 = state_20963__$1;
(statearr_20965_20994[(2)] = inst_20959);

(statearr_20965_20994[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (1))){
var inst_20926 = (new Array(n));
var inst_20927 = inst_20926;
var inst_20928 = (0);
var state_20963__$1 = (function (){var statearr_20966 = state_20963;
(statearr_20966[(7)] = inst_20927);

(statearr_20966[(8)] = inst_20928);

return statearr_20966;
})();
var statearr_20967_20995 = state_20963__$1;
(statearr_20967_20995[(2)] = null);

(statearr_20967_20995[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (4))){
var inst_20931 = (state_20963[(9)]);
var inst_20931__$1 = (state_20963[(2)]);
var inst_20932 = (inst_20931__$1 == null);
var inst_20933 = cljs.core.not(inst_20932);
var state_20963__$1 = (function (){var statearr_20968 = state_20963;
(statearr_20968[(9)] = inst_20931__$1);

return statearr_20968;
})();
if(inst_20933){
var statearr_20969_20996 = state_20963__$1;
(statearr_20969_20996[(1)] = (5));

} else {
var statearr_20970_20997 = state_20963__$1;
(statearr_20970_20997[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (15))){
var inst_20953 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
var statearr_20971_20998 = state_20963__$1;
(statearr_20971_20998[(2)] = inst_20953);

(statearr_20971_20998[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (13))){
var state_20963__$1 = state_20963;
var statearr_20972_20999 = state_20963__$1;
(statearr_20972_20999[(2)] = null);

(statearr_20972_20999[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (6))){
var inst_20928 = (state_20963[(8)]);
var inst_20949 = (inst_20928 > (0));
var state_20963__$1 = state_20963;
if(cljs.core.truth_(inst_20949)){
var statearr_20973_21000 = state_20963__$1;
(statearr_20973_21000[(1)] = (12));

} else {
var statearr_20974_21001 = state_20963__$1;
(statearr_20974_21001[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (3))){
var inst_20961 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20963__$1,inst_20961);
} else {
if((state_val_20964 === (12))){
var inst_20927 = (state_20963[(7)]);
var inst_20951 = cljs.core.vec(inst_20927);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20963__$1,(15),out,inst_20951);
} else {
if((state_val_20964 === (2))){
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20963__$1,(4),ch);
} else {
if((state_val_20964 === (11))){
var inst_20943 = (state_20963[(2)]);
var inst_20944 = (new Array(n));
var inst_20927 = inst_20944;
var inst_20928 = (0);
var state_20963__$1 = (function (){var statearr_20975 = state_20963;
(statearr_20975[(7)] = inst_20927);

(statearr_20975[(8)] = inst_20928);

(statearr_20975[(10)] = inst_20943);

return statearr_20975;
})();
var statearr_20976_21002 = state_20963__$1;
(statearr_20976_21002[(2)] = null);

(statearr_20976_21002[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (9))){
var inst_20927 = (state_20963[(7)]);
var inst_20941 = cljs.core.vec(inst_20927);
var state_20963__$1 = state_20963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20963__$1,(11),out,inst_20941);
} else {
if((state_val_20964 === (5))){
var inst_20927 = (state_20963[(7)]);
var inst_20936 = (state_20963[(11)]);
var inst_20931 = (state_20963[(9)]);
var inst_20928 = (state_20963[(8)]);
var inst_20935 = (inst_20927[inst_20928] = inst_20931);
var inst_20936__$1 = (inst_20928 + (1));
var inst_20937 = (inst_20936__$1 < n);
var state_20963__$1 = (function (){var statearr_20977 = state_20963;
(statearr_20977[(11)] = inst_20936__$1);

(statearr_20977[(12)] = inst_20935);

return statearr_20977;
})();
if(cljs.core.truth_(inst_20937)){
var statearr_20978_21003 = state_20963__$1;
(statearr_20978_21003[(1)] = (8));

} else {
var statearr_20979_21004 = state_20963__$1;
(statearr_20979_21004[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (14))){
var inst_20956 = (state_20963[(2)]);
var inst_20957 = cljs.core.async.close_BANG_(out);
var state_20963__$1 = (function (){var statearr_20981 = state_20963;
(statearr_20981[(13)] = inst_20956);

return statearr_20981;
})();
var statearr_20982_21005 = state_20963__$1;
(statearr_20982_21005[(2)] = inst_20957);

(statearr_20982_21005[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (10))){
var inst_20947 = (state_20963[(2)]);
var state_20963__$1 = state_20963;
var statearr_20983_21006 = state_20963__$1;
(statearr_20983_21006[(2)] = inst_20947);

(statearr_20983_21006[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20964 === (8))){
var inst_20927 = (state_20963[(7)]);
var inst_20936 = (state_20963[(11)]);
var tmp20980 = inst_20927;
var inst_20927__$1 = tmp20980;
var inst_20928 = inst_20936;
var state_20963__$1 = (function (){var statearr_20984 = state_20963;
(statearr_20984[(7)] = inst_20927__$1);

(statearr_20984[(8)] = inst_20928);

return statearr_20984;
})();
var statearr_20985_21007 = state_20963__$1;
(statearr_20985_21007[(2)] = null);

(statearr_20985_21007[(1)] = (2));


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
}
}
}
}
}
});})(c__7703__auto___20993,out))
;
return ((function (switch__7623__auto__,c__7703__auto___20993,out){
return (function() {
var cljs$core$async$partition_$_state_machine__7624__auto__ = null;
var cljs$core$async$partition_$_state_machine__7624__auto____0 = (function (){
var statearr_20989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20989[(0)] = cljs$core$async$partition_$_state_machine__7624__auto__);

(statearr_20989[(1)] = (1));

return statearr_20989;
});
var cljs$core$async$partition_$_state_machine__7624__auto____1 = (function (state_20963){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_20963);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e20990){if((e20990 instanceof Object)){
var ex__7627__auto__ = e20990;
var statearr_20991_21008 = state_20963;
(statearr_20991_21008[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20963);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20990;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21009 = state_20963;
state_20963 = G__21009;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__7624__auto__ = function(state_20963){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__7624__auto____1.call(this,state_20963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__7624__auto____0;
cljs$core$async$partition_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__7624__auto____1;
return cljs$core$async$partition_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___20993,out))
})();
var state__7705__auto__ = (function (){var statearr_20992 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_20992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___20993);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___20993,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__7703__auto___21157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7703__auto___21157,out){
return (function (){
var f__7704__auto__ = (function (){var switch__7623__auto__ = ((function (c__7703__auto___21157,out){
return (function (state_21126){
var state_val_21127 = (state_21126[(1)]);
if((state_val_21127 === (7))){
var inst_21122 = (state_21126[(2)]);
var state_21126__$1 = state_21126;
var statearr_21128_21158 = state_21126__$1;
(statearr_21128_21158[(2)] = inst_21122);

(statearr_21128_21158[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (1))){
var inst_21085 = [];
var inst_21086 = inst_21085;
var inst_21087 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_21126__$1 = (function (){var statearr_21129 = state_21126;
(statearr_21129[(7)] = inst_21086);

(statearr_21129[(8)] = inst_21087);

return statearr_21129;
})();
var statearr_21130_21159 = state_21126__$1;
(statearr_21130_21159[(2)] = null);

(statearr_21130_21159[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (4))){
var inst_21090 = (state_21126[(9)]);
var inst_21090__$1 = (state_21126[(2)]);
var inst_21091 = (inst_21090__$1 == null);
var inst_21092 = cljs.core.not(inst_21091);
var state_21126__$1 = (function (){var statearr_21131 = state_21126;
(statearr_21131[(9)] = inst_21090__$1);

return statearr_21131;
})();
if(inst_21092){
var statearr_21132_21160 = state_21126__$1;
(statearr_21132_21160[(1)] = (5));

} else {
var statearr_21133_21161 = state_21126__$1;
(statearr_21133_21161[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (15))){
var inst_21116 = (state_21126[(2)]);
var state_21126__$1 = state_21126;
var statearr_21134_21162 = state_21126__$1;
(statearr_21134_21162[(2)] = inst_21116);

(statearr_21134_21162[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (13))){
var state_21126__$1 = state_21126;
var statearr_21135_21163 = state_21126__$1;
(statearr_21135_21163[(2)] = null);

(statearr_21135_21163[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (6))){
var inst_21086 = (state_21126[(7)]);
var inst_21111 = inst_21086.length;
var inst_21112 = (inst_21111 > (0));
var state_21126__$1 = state_21126;
if(cljs.core.truth_(inst_21112)){
var statearr_21136_21164 = state_21126__$1;
(statearr_21136_21164[(1)] = (12));

} else {
var statearr_21137_21165 = state_21126__$1;
(statearr_21137_21165[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (3))){
var inst_21124 = (state_21126[(2)]);
var state_21126__$1 = state_21126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21126__$1,inst_21124);
} else {
if((state_val_21127 === (12))){
var inst_21086 = (state_21126[(7)]);
var inst_21114 = cljs.core.vec(inst_21086);
var state_21126__$1 = state_21126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21126__$1,(15),out,inst_21114);
} else {
if((state_val_21127 === (2))){
var state_21126__$1 = state_21126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21126__$1,(4),ch);
} else {
if((state_val_21127 === (11))){
var inst_21094 = (state_21126[(10)]);
var inst_21090 = (state_21126[(9)]);
var inst_21104 = (state_21126[(2)]);
var inst_21105 = [];
var inst_21106 = inst_21105.push(inst_21090);
var inst_21086 = inst_21105;
var inst_21087 = inst_21094;
var state_21126__$1 = (function (){var statearr_21138 = state_21126;
(statearr_21138[(11)] = inst_21106);

(statearr_21138[(7)] = inst_21086);

(statearr_21138[(12)] = inst_21104);

(statearr_21138[(8)] = inst_21087);

return statearr_21138;
})();
var statearr_21139_21166 = state_21126__$1;
(statearr_21139_21166[(2)] = null);

(statearr_21139_21166[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (9))){
var inst_21086 = (state_21126[(7)]);
var inst_21102 = cljs.core.vec(inst_21086);
var state_21126__$1 = state_21126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21126__$1,(11),out,inst_21102);
} else {
if((state_val_21127 === (5))){
var inst_21094 = (state_21126[(10)]);
var inst_21090 = (state_21126[(9)]);
var inst_21087 = (state_21126[(8)]);
var inst_21094__$1 = (function (){var G__21140 = inst_21090;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21140) : f.call(null,G__21140));
})();
var inst_21095 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21094__$1,inst_21087);
var inst_21096 = cljs.core.keyword_identical_QMARK_(inst_21087,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_21097 = (inst_21095) || (inst_21096);
var state_21126__$1 = (function (){var statearr_21141 = state_21126;
(statearr_21141[(10)] = inst_21094__$1);

return statearr_21141;
})();
if(cljs.core.truth_(inst_21097)){
var statearr_21142_21167 = state_21126__$1;
(statearr_21142_21167[(1)] = (8));

} else {
var statearr_21143_21168 = state_21126__$1;
(statearr_21143_21168[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (14))){
var inst_21119 = (state_21126[(2)]);
var inst_21120 = cljs.core.async.close_BANG_(out);
var state_21126__$1 = (function (){var statearr_21145 = state_21126;
(statearr_21145[(13)] = inst_21119);

return statearr_21145;
})();
var statearr_21146_21169 = state_21126__$1;
(statearr_21146_21169[(2)] = inst_21120);

(statearr_21146_21169[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (10))){
var inst_21109 = (state_21126[(2)]);
var state_21126__$1 = state_21126;
var statearr_21147_21170 = state_21126__$1;
(statearr_21147_21170[(2)] = inst_21109);

(statearr_21147_21170[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21127 === (8))){
var inst_21094 = (state_21126[(10)]);
var inst_21090 = (state_21126[(9)]);
var inst_21086 = (state_21126[(7)]);
var inst_21099 = inst_21086.push(inst_21090);
var tmp21144 = inst_21086;
var inst_21086__$1 = tmp21144;
var inst_21087 = inst_21094;
var state_21126__$1 = (function (){var statearr_21148 = state_21126;
(statearr_21148[(14)] = inst_21099);

(statearr_21148[(7)] = inst_21086__$1);

(statearr_21148[(8)] = inst_21087);

return statearr_21148;
})();
var statearr_21149_21171 = state_21126__$1;
(statearr_21149_21171[(2)] = null);

(statearr_21149_21171[(1)] = (2));


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
}
}
}
}
}
});})(c__7703__auto___21157,out))
;
return ((function (switch__7623__auto__,c__7703__auto___21157,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__7624__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__7624__auto____0 = (function (){
var statearr_21153 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21153[(0)] = cljs$core$async$partition_by_$_state_machine__7624__auto__);

(statearr_21153[(1)] = (1));

return statearr_21153;
});
var cljs$core$async$partition_by_$_state_machine__7624__auto____1 = (function (state_21126){
while(true){
var ret_value__7625__auto__ = (function (){try{while(true){
var result__7626__auto__ = switch__7623__auto__(state_21126);
if(cljs.core.keyword_identical_QMARK_(result__7626__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7626__auto__;
}
break;
}
}catch (e21154){if((e21154 instanceof Object)){
var ex__7627__auto__ = e21154;
var statearr_21155_21172 = state_21126;
(statearr_21155_21172[(5)] = ex__7627__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21126);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7625__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21173 = state_21126;
state_21126 = G__21173;
continue;
} else {
return ret_value__7625__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__7624__auto__ = function(state_21126){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__7624__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__7624__auto____1.call(this,state_21126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__7624__auto____0;
cljs$core$async$partition_by_$_state_machine__7624__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__7624__auto____1;
return cljs$core$async$partition_by_$_state_machine__7624__auto__;
})()
;})(switch__7623__auto__,c__7703__auto___21157,out))
})();
var state__7705__auto__ = (function (){var statearr_21156 = (function (){return (f__7704__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7704__auto__.cljs$core$IFn$_invoke$arity$0() : f__7704__auto__.call(null));
})();
(statearr_21156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7703__auto___21157);

return statearr_21156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7705__auto__);
});})(c__7703__auto___21157,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;
