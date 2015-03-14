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
if(typeof cljs.core.async.t17767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17767 = (function (f,fn_handler,meta17768){
this.f = f;
this.fn_handler = fn_handler;
this.meta17768 = meta17768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17767.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t17767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t17767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17769){
var self__ = this;
var _17769__$1 = this;
return self__.meta17768;
});

cljs.core.async.t17767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17769,meta17768__$1){
var self__ = this;
var _17769__$1 = this;
return (new cljs.core.async.t17767(self__.f,self__.fn_handler,meta17768__$1));
});

cljs.core.async.t17767.cljs$lang$type = true;

cljs.core.async.t17767.cljs$lang$ctorStr = "cljs.core.async/t17767";

cljs.core.async.t17767.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17767");
});

cljs.core.async.__GT_t17767 = (function cljs$core$async$fn_handler_$___GT_t17767(f__$1,fn_handler__$1,meta17768){
return (new cljs.core.async.t17767(f__$1,fn_handler__$1,meta17768));
});

}

return (new cljs.core.async.t17767(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17771 = buff;
if(G__17771){
var bit__4757__auto__ = null;
if(cljs.core.truth_((function (){var or__4076__auto__ = bit__4757__auto__;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return G__17771.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__17771.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17771);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__17771);
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
var val_17788 = (function (){var G__17785 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17785) : cljs.core.deref.call(null,G__17785));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17786_17789 = val_17788;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17786_17789) : fn1.call(null,G__17786_17789));
} else {
cljs.core.async.impl.dispatch.run(((function (val_17788,ret){
return (function (){
var G__17787 = val_17788;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17787) : fn1.call(null,G__17787));
});})(val_17788,ret))
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
var G__17798 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17798) : cljs.core.deref.call(null,G__17798));
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
var ret = (function (){var G__17799 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17799) : cljs.core.deref.call(null,G__17799));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__17800_17802 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17800_17802) : fn1.call(null,G__17800_17802));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4124__auto__){
return (function (){
var G__17801 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__17801) : fn1.call(null,G__17801));
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
var n__4963__auto___17803 = n;
var x_17804 = (0);
while(true){
if((x_17804 < n__4963__auto___17803)){
(a[x_17804] = (0));

var G__17805 = (x_17804 + (1));
x_17804 = G__17805;
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

var G__17806 = (i + (1));
i = G__17806;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__17814 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17814) : cljs.core.atom.call(null,G__17814));
})();
if(typeof cljs.core.async.t17815 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17815 = (function (flag,alt_flag,meta17816){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta17816 = meta17816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17815.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17818 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17818) : cljs.core.deref.call(null,G__17818));
});})(flag))
;

cljs.core.async.t17815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17819_17821 = self__.flag;
var G__17820_17822 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17819_17821,G__17820_17822) : cljs.core.reset_BANG_.call(null,G__17819_17821,G__17820_17822));

return true;
});})(flag))
;

cljs.core.async.t17815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_17817){
var self__ = this;
var _17817__$1 = this;
return self__.meta17816;
});})(flag))
;

cljs.core.async.t17815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_17817,meta17816__$1){
var self__ = this;
var _17817__$1 = this;
return (new cljs.core.async.t17815(self__.flag,self__.alt_flag,meta17816__$1));
});})(flag))
;

cljs.core.async.t17815.cljs$lang$type = true;

cljs.core.async.t17815.cljs$lang$ctorStr = "cljs.core.async/t17815";

cljs.core.async.t17815.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17815");
});})(flag))
;

cljs.core.async.__GT_t17815 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t17815(flag__$1,alt_flag__$1,meta17816){
return (new cljs.core.async.t17815(flag__$1,alt_flag__$1,meta17816));
});})(flag))
;

}

return (new cljs.core.async.t17815(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t17826 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17826 = (function (cb,flag,alt_handler,meta17827){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta17827 = meta17827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17826.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t17826.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t17826.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t17826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17828){
var self__ = this;
var _17828__$1 = this;
return self__.meta17827;
});

cljs.core.async.t17826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17828,meta17827__$1){
var self__ = this;
var _17828__$1 = this;
return (new cljs.core.async.t17826(self__.cb,self__.flag,self__.alt_handler,meta17827__$1));
});

cljs.core.async.t17826.cljs$lang$type = true;

cljs.core.async.t17826.cljs$lang$ctorStr = "cljs.core.async/t17826";

cljs.core.async.t17826.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t17826");
});

cljs.core.async.__GT_t17826 = (function cljs$core$async$alt_handler_$___GT_t17826(cb__$1,flag__$1,alt_handler__$1,meta17827){
return (new cljs.core.async.t17826(cb__$1,flag__$1,alt_handler__$1,meta17827));
});

}

return (new cljs.core.async.t17826(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__17836 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17836) : port.call(null,G__17836));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__17837 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__17837) : port.call(null,G__17837));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17829_SHARP_){
var G__17838 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17829_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17838) : fret.call(null,G__17838));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17830_SHARP_){
var G__17839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17830_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17839) : fret.call(null,G__17839));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17840 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__17840) : cljs.core.deref.call(null,G__17840));
})(),(function (){var or__4076__auto__ = wport;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17841 = (i + (1));
i = G__17841;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__17842){
var map__17844 = p__17842;
var map__17844__$1 = ((cljs.core.seq_QMARK_(map__17844))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17844):map__17844);
var opts = map__17844__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__17842 = null;
if (arguments.length > 1) {
var G__17845__i = 0, G__17845__a = new Array(arguments.length -  1);
while (G__17845__i < G__17845__a.length) {G__17845__a[G__17845__i] = arguments[G__17845__i + 1]; ++G__17845__i;}
  p__17842 = new cljs.core.IndexedSeq(G__17845__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__17842);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__17846){
var ports = cljs.core.first(arglist__17846);
var p__17842 = cljs.core.rest(arglist__17846);
return cljs$core$async$alts_BANG___delegate(ports,p__17842);
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
var c__7699__auto___17944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___17944){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___17944){
return (function (state_17920){
var state_val_17921 = (state_17920[(1)]);
if((state_val_17921 === (7))){
var inst_17916 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17922_17945 = state_17920__$1;
(statearr_17922_17945[(2)] = inst_17916);

(statearr_17922_17945[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (1))){
var state_17920__$1 = state_17920;
var statearr_17923_17946 = state_17920__$1;
(statearr_17923_17946[(2)] = null);

(statearr_17923_17946[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (4))){
var inst_17899 = (state_17920[(7)]);
var inst_17899__$1 = (state_17920[(2)]);
var inst_17900 = (inst_17899__$1 == null);
var state_17920__$1 = (function (){var statearr_17924 = state_17920;
(statearr_17924[(7)] = inst_17899__$1);

return statearr_17924;
})();
if(cljs.core.truth_(inst_17900)){
var statearr_17925_17947 = state_17920__$1;
(statearr_17925_17947[(1)] = (5));

} else {
var statearr_17926_17948 = state_17920__$1;
(statearr_17926_17948[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (13))){
var state_17920__$1 = state_17920;
var statearr_17927_17949 = state_17920__$1;
(statearr_17927_17949[(2)] = null);

(statearr_17927_17949[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (6))){
var inst_17899 = (state_17920[(7)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17920__$1,(11),to,inst_17899);
} else {
if((state_val_17921 === (3))){
var inst_17918 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17920__$1,inst_17918);
} else {
if((state_val_17921 === (12))){
var state_17920__$1 = state_17920;
var statearr_17928_17950 = state_17920__$1;
(statearr_17928_17950[(2)] = null);

(statearr_17928_17950[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (2))){
var state_17920__$1 = state_17920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17920__$1,(4),from);
} else {
if((state_val_17921 === (11))){
var inst_17909 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
if(cljs.core.truth_(inst_17909)){
var statearr_17929_17951 = state_17920__$1;
(statearr_17929_17951[(1)] = (12));

} else {
var statearr_17930_17952 = state_17920__$1;
(statearr_17930_17952[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (9))){
var state_17920__$1 = state_17920;
var statearr_17931_17953 = state_17920__$1;
(statearr_17931_17953[(2)] = null);

(statearr_17931_17953[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (5))){
var state_17920__$1 = state_17920;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17932_17954 = state_17920__$1;
(statearr_17932_17954[(1)] = (8));

} else {
var statearr_17933_17955 = state_17920__$1;
(statearr_17933_17955[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (14))){
var inst_17914 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17934_17956 = state_17920__$1;
(statearr_17934_17956[(2)] = inst_17914);

(statearr_17934_17956[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (10))){
var inst_17906 = (state_17920[(2)]);
var state_17920__$1 = state_17920;
var statearr_17935_17957 = state_17920__$1;
(statearr_17935_17957[(2)] = inst_17906);

(statearr_17935_17957[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_17921 === (8))){
var inst_17903 = cljs.core.async.close_BANG_(to);
var state_17920__$1 = state_17920;
var statearr_17936_17958 = state_17920__$1;
(statearr_17936_17958[(2)] = inst_17903);

(statearr_17936_17958[(1)] = (10));


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
});})(c__7699__auto___17944))
;
return ((function (switch__7619__auto__,c__7699__auto___17944){
return (function() {
var cljs$core$async$pipe_$_state_machine__7620__auto__ = null;
var cljs$core$async$pipe_$_state_machine__7620__auto____0 = (function (){
var statearr_17940 = [null,null,null,null,null,null,null,null];
(statearr_17940[(0)] = cljs$core$async$pipe_$_state_machine__7620__auto__);

(statearr_17940[(1)] = (1));

return statearr_17940;
});
var cljs$core$async$pipe_$_state_machine__7620__auto____1 = (function (state_17920){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_17920);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e17941){if((e17941 instanceof Object)){
var ex__7623__auto__ = e17941;
var statearr_17942_17959 = state_17920;
(statearr_17942_17959[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17920);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e17941;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__17960 = state_17920;
state_17920 = G__17960;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__7620__auto__ = function(state_17920){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__7620__auto____1.call(this,state_17920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__7620__auto____0;
cljs$core$async$pipe_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__7620__auto____1;
return cljs$core$async$pipe_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___17944))
})();
var state__7701__auto__ = (function (){var statearr_17943 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_17943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___17944);

return statearr_17943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___17944))
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
return (function (p__18146){
var vec__18147 = p__18146;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18147,(1),null);
var job = vec__18147;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__7699__auto___18331 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results){
return (function (state_18152){
var state_val_18153 = (state_18152[(1)]);
if((state_val_18153 === (2))){
var inst_18149 = (state_18152[(2)]);
var inst_18150 = cljs.core.async.close_BANG_(res);
var state_18152__$1 = (function (){var statearr_18154 = state_18152;
(statearr_18154[(7)] = inst_18149);

return statearr_18154;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18152__$1,inst_18150);
} else {
if((state_val_18153 === (1))){
var state_18152__$1 = state_18152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18152__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results))
;
return ((function (switch__7619__auto__,c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_18158 = [null,null,null,null,null,null,null,null];
(statearr_18158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__);

(statearr_18158[(1)] = (1));

return statearr_18158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1 = (function (state_18152){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18152);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18159){if((e18159 instanceof Object)){
var ex__7623__auto__ = e18159;
var statearr_18160_18332 = state_18152;
(statearr_18160_18332[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18152);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18159;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18333 = state_18152;
state_18152 = G__18333;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = function(state_18152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1.call(this,state_18152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results))
})();
var state__7701__auto__ = (function (){var statearr_18161 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___18331);

return statearr_18161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___18331,res,vec__18147,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__18162){
var vec__18163 = p__18162;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18163,(1),null);
var job = vec__18163;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__18164_18334 = v;
var G__18165_18335 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__18164_18334,G__18165_18335) : xf.call(null,G__18164_18334,G__18165_18335));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4963__auto___18336 = n;
var __18337 = (0);
while(true){
if((__18337 < n__4963__auto___18336)){
var G__18166_18338 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__18166_18338) {
case "async":
var c__7699__auto___18340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18337,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (__18337,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function (state_18179){
var state_val_18180 = (state_18179[(1)]);
if((state_val_18180 === (7))){
var inst_18175 = (state_18179[(2)]);
var state_18179__$1 = state_18179;
var statearr_18181_18341 = state_18179__$1;
(statearr_18181_18341[(2)] = inst_18175);

(statearr_18181_18341[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18180 === (6))){
var state_18179__$1 = state_18179;
var statearr_18182_18342 = state_18179__$1;
(statearr_18182_18342[(2)] = null);

(statearr_18182_18342[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18180 === (5))){
var state_18179__$1 = state_18179;
var statearr_18183_18343 = state_18179__$1;
(statearr_18183_18343[(2)] = null);

(statearr_18183_18343[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18180 === (4))){
var inst_18169 = (state_18179[(2)]);
var inst_18170 = async(inst_18169);
var state_18179__$1 = state_18179;
if(cljs.core.truth_(inst_18170)){
var statearr_18184_18344 = state_18179__$1;
(statearr_18184_18344[(1)] = (5));

} else {
var statearr_18185_18345 = state_18179__$1;
(statearr_18185_18345[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18180 === (3))){
var inst_18177 = (state_18179[(2)]);
var state_18179__$1 = state_18179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18179__$1,inst_18177);
} else {
if((state_val_18180 === (2))){
var state_18179__$1 = state_18179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18179__$1,(4),jobs);
} else {
if((state_val_18180 === (1))){
var state_18179__$1 = state_18179;
var statearr_18186_18346 = state_18179__$1;
(statearr_18186_18346[(2)] = null);

(statearr_18186_18346[(1)] = (2));


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
});})(__18337,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
;
return ((function (__18337,switch__7619__auto__,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_18190 = [null,null,null,null,null,null,null];
(statearr_18190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__);

(statearr_18190[(1)] = (1));

return statearr_18190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1 = (function (state_18179){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18179);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18191){if((e18191 instanceof Object)){
var ex__7623__auto__ = e18191;
var statearr_18192_18347 = state_18179;
(statearr_18192_18347[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18179);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18348 = state_18179;
state_18179 = G__18348;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = function(state_18179){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1.call(this,state_18179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__;
})()
;})(__18337,switch__7619__auto__,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_18193 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___18340);

return statearr_18193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(__18337,c__7699__auto___18340,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
);


break;
case "compute":
var c__7699__auto___18349 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18337,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (__18337,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function (state_18206){
var state_val_18207 = (state_18206[(1)]);
if((state_val_18207 === (7))){
var inst_18202 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
var statearr_18208_18350 = state_18206__$1;
(statearr_18208_18350[(2)] = inst_18202);

(statearr_18208_18350[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18207 === (6))){
var state_18206__$1 = state_18206;
var statearr_18209_18351 = state_18206__$1;
(statearr_18209_18351[(2)] = null);

(statearr_18209_18351[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18207 === (5))){
var state_18206__$1 = state_18206;
var statearr_18210_18352 = state_18206__$1;
(statearr_18210_18352[(2)] = null);

(statearr_18210_18352[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18207 === (4))){
var inst_18196 = (state_18206[(2)]);
var inst_18197 = process(inst_18196);
var state_18206__$1 = state_18206;
if(cljs.core.truth_(inst_18197)){
var statearr_18211_18353 = state_18206__$1;
(statearr_18211_18353[(1)] = (5));

} else {
var statearr_18212_18354 = state_18206__$1;
(statearr_18212_18354[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18207 === (3))){
var inst_18204 = (state_18206[(2)]);
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18206__$1,inst_18204);
} else {
if((state_val_18207 === (2))){
var state_18206__$1 = state_18206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18206__$1,(4),jobs);
} else {
if((state_val_18207 === (1))){
var state_18206__$1 = state_18206;
var statearr_18213_18355 = state_18206__$1;
(statearr_18213_18355[(2)] = null);

(statearr_18213_18355[(1)] = (2));


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
});})(__18337,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
;
return ((function (__18337,switch__7619__auto__,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_18217 = [null,null,null,null,null,null,null];
(statearr_18217[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__);

(statearr_18217[(1)] = (1));

return statearr_18217;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1 = (function (state_18206){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18206);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18218){if((e18218 instanceof Object)){
var ex__7623__auto__ = e18218;
var statearr_18219_18356 = state_18206;
(statearr_18219_18356[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18206);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18218;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18357 = state_18206;
state_18206 = G__18357;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = function(state_18206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1.call(this,state_18206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__;
})()
;})(__18337,switch__7619__auto__,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_18220 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___18349);

return statearr_18220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(__18337,c__7699__auto___18349,G__18166_18338,n__4963__auto___18336,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__18358 = (__18337 + (1));
__18337 = G__18358;
continue;
} else {
}
break;
}

var c__7699__auto___18359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___18359,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___18359,jobs,results,process,async){
return (function (state_18242){
var state_val_18243 = (state_18242[(1)]);
if((state_val_18243 === (9))){
var inst_18235 = (state_18242[(2)]);
var state_18242__$1 = (function (){var statearr_18244 = state_18242;
(statearr_18244[(7)] = inst_18235);

return statearr_18244;
})();
var statearr_18245_18360 = state_18242__$1;
(statearr_18245_18360[(2)] = null);

(statearr_18245_18360[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (8))){
var inst_18228 = (state_18242[(8)]);
var inst_18233 = (state_18242[(2)]);
var state_18242__$1 = (function (){var statearr_18246 = state_18242;
(statearr_18246[(9)] = inst_18233);

return statearr_18246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18242__$1,(9),results,inst_18228);
} else {
if((state_val_18243 === (7))){
var inst_18238 = (state_18242[(2)]);
var state_18242__$1 = state_18242;
var statearr_18247_18361 = state_18242__$1;
(statearr_18247_18361[(2)] = inst_18238);

(statearr_18247_18361[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (6))){
var inst_18228 = (state_18242[(8)]);
var inst_18223 = (state_18242[(10)]);
var inst_18228__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18230 = [inst_18223,inst_18228__$1];
var inst_18231 = (new cljs.core.PersistentVector(null,2,(5),inst_18229,inst_18230,null));
var state_18242__$1 = (function (){var statearr_18248 = state_18242;
(statearr_18248[(8)] = inst_18228__$1);

return statearr_18248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18242__$1,(8),jobs,inst_18231);
} else {
if((state_val_18243 === (5))){
var inst_18226 = cljs.core.async.close_BANG_(jobs);
var state_18242__$1 = state_18242;
var statearr_18249_18362 = state_18242__$1;
(statearr_18249_18362[(2)] = inst_18226);

(statearr_18249_18362[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18243 === (4))){
var inst_18223 = (state_18242[(10)]);
var inst_18223__$1 = (state_18242[(2)]);
var inst_18224 = (inst_18223__$1 == null);
var state_18242__$1 = (function (){var statearr_18250 = state_18242;
(statearr_18250[(10)] = inst_18223__$1);

return statearr_18250;
})();
if(cljs.core.truth_(inst_18224)){
var statearr_18251_18363 = state_18242__$1;
(statearr_18251_18363[(1)] = (5));

} else {
var statearr_18252_18364 = state_18242__$1;
(statearr_18252_18364[(1)] = (6));

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
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18242__$1,(4),from);
} else {
if((state_val_18243 === (1))){
var state_18242__$1 = state_18242;
var statearr_18253_18365 = state_18242__$1;
(statearr_18253_18365[(2)] = null);

(statearr_18253_18365[(1)] = (2));


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
});})(c__7699__auto___18359,jobs,results,process,async))
;
return ((function (switch__7619__auto__,c__7699__auto___18359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_18257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__);

(statearr_18257[(1)] = (1));

return statearr_18257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1 = (function (state_18242){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18242);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18258){if((e18258 instanceof Object)){
var ex__7623__auto__ = e18258;
var statearr_18259_18366 = state_18242;
(statearr_18259_18366[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18242);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18367 = state_18242;
state_18242 = G__18367;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = function(state_18242){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1.call(this,state_18242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___18359,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_18260 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___18359);

return statearr_18260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___18359,jobs,results,process,async))
);


var c__7699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto__,jobs,results,process,async){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto__,jobs,results,process,async){
return (function (state_18298){
var state_val_18299 = (state_18298[(1)]);
if((state_val_18299 === (7))){
var inst_18294 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18300_18368 = state_18298__$1;
(statearr_18300_18368[(2)] = inst_18294);

(statearr_18300_18368[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (20))){
var state_18298__$1 = state_18298;
var statearr_18301_18369 = state_18298__$1;
(statearr_18301_18369[(2)] = null);

(statearr_18301_18369[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (1))){
var state_18298__$1 = state_18298;
var statearr_18302_18370 = state_18298__$1;
(statearr_18302_18370[(2)] = null);

(statearr_18302_18370[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (4))){
var inst_18263 = (state_18298[(7)]);
var inst_18263__$1 = (state_18298[(2)]);
var inst_18264 = (inst_18263__$1 == null);
var state_18298__$1 = (function (){var statearr_18303 = state_18298;
(statearr_18303[(7)] = inst_18263__$1);

return statearr_18303;
})();
if(cljs.core.truth_(inst_18264)){
var statearr_18304_18371 = state_18298__$1;
(statearr_18304_18371[(1)] = (5));

} else {
var statearr_18305_18372 = state_18298__$1;
(statearr_18305_18372[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (15))){
var inst_18276 = (state_18298[(8)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18298__$1,(18),to,inst_18276);
} else {
if((state_val_18299 === (21))){
var inst_18289 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18306_18373 = state_18298__$1;
(statearr_18306_18373[(2)] = inst_18289);

(statearr_18306_18373[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (13))){
var inst_18291 = (state_18298[(2)]);
var state_18298__$1 = (function (){var statearr_18307 = state_18298;
(statearr_18307[(9)] = inst_18291);

return statearr_18307;
})();
var statearr_18308_18374 = state_18298__$1;
(statearr_18308_18374[(2)] = null);

(statearr_18308_18374[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (6))){
var inst_18263 = (state_18298[(7)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18298__$1,(11),inst_18263);
} else {
if((state_val_18299 === (17))){
var inst_18284 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
if(cljs.core.truth_(inst_18284)){
var statearr_18309_18375 = state_18298__$1;
(statearr_18309_18375[(1)] = (19));

} else {
var statearr_18310_18376 = state_18298__$1;
(statearr_18310_18376[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (3))){
var inst_18296 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18298__$1,inst_18296);
} else {
if((state_val_18299 === (12))){
var inst_18273 = (state_18298[(10)]);
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18298__$1,(14),inst_18273);
} else {
if((state_val_18299 === (2))){
var state_18298__$1 = state_18298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18298__$1,(4),results);
} else {
if((state_val_18299 === (19))){
var state_18298__$1 = state_18298;
var statearr_18311_18377 = state_18298__$1;
(statearr_18311_18377[(2)] = null);

(statearr_18311_18377[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (11))){
var inst_18273 = (state_18298[(2)]);
var state_18298__$1 = (function (){var statearr_18312 = state_18298;
(statearr_18312[(10)] = inst_18273);

return statearr_18312;
})();
var statearr_18313_18378 = state_18298__$1;
(statearr_18313_18378[(2)] = null);

(statearr_18313_18378[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (9))){
var state_18298__$1 = state_18298;
var statearr_18314_18379 = state_18298__$1;
(statearr_18314_18379[(2)] = null);

(statearr_18314_18379[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (5))){
var state_18298__$1 = state_18298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18315_18380 = state_18298__$1;
(statearr_18315_18380[(1)] = (8));

} else {
var statearr_18316_18381 = state_18298__$1;
(statearr_18316_18381[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (14))){
var inst_18276 = (state_18298[(8)]);
var inst_18278 = (state_18298[(11)]);
var inst_18276__$1 = (state_18298[(2)]);
var inst_18277 = (inst_18276__$1 == null);
var inst_18278__$1 = cljs.core.not(inst_18277);
var state_18298__$1 = (function (){var statearr_18317 = state_18298;
(statearr_18317[(8)] = inst_18276__$1);

(statearr_18317[(11)] = inst_18278__$1);

return statearr_18317;
})();
if(inst_18278__$1){
var statearr_18318_18382 = state_18298__$1;
(statearr_18318_18382[(1)] = (15));

} else {
var statearr_18319_18383 = state_18298__$1;
(statearr_18319_18383[(1)] = (16));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (16))){
var inst_18278 = (state_18298[(11)]);
var state_18298__$1 = state_18298;
var statearr_18320_18384 = state_18298__$1;
(statearr_18320_18384[(2)] = inst_18278);

(statearr_18320_18384[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (10))){
var inst_18270 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18321_18385 = state_18298__$1;
(statearr_18321_18385[(2)] = inst_18270);

(statearr_18321_18385[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (18))){
var inst_18281 = (state_18298[(2)]);
var state_18298__$1 = state_18298;
var statearr_18322_18386 = state_18298__$1;
(statearr_18322_18386[(2)] = inst_18281);

(statearr_18322_18386[(1)] = (17));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18299 === (8))){
var inst_18267 = cljs.core.async.close_BANG_(to);
var state_18298__$1 = state_18298;
var statearr_18323_18387 = state_18298__$1;
(statearr_18323_18387[(2)] = inst_18267);

(statearr_18323_18387[(1)] = (10));


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
});})(c__7699__auto__,jobs,results,process,async))
;
return ((function (switch__7619__auto__,c__7699__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_18327 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__);

(statearr_18327[(1)] = (1));

return statearr_18327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1 = (function (state_18298){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18298);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18328){if((e18328 instanceof Object)){
var ex__7623__auto__ = e18328;
var statearr_18329_18388 = state_18298;
(statearr_18329_18388[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18298);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18328;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18389 = state_18298;
state_18298 = G__18389;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__ = function(state_18298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1.call(this,state_18298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto__,jobs,results,process,async))
})();
var state__7701__auto__ = (function (){var statearr_18330 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto__,jobs,results,process,async))
);

return c__7699__auto__;
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
var c__7699__auto___18512 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___18512,tc,fc){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___18512,tc,fc){
return (function (state_18486){
var state_val_18487 = (state_18486[(1)]);
if((state_val_18487 === (7))){
var inst_18482 = (state_18486[(2)]);
var state_18486__$1 = state_18486;
var statearr_18488_18513 = state_18486__$1;
(statearr_18488_18513[(2)] = inst_18482);

(statearr_18488_18513[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (1))){
var state_18486__$1 = state_18486;
var statearr_18489_18514 = state_18486__$1;
(statearr_18489_18514[(2)] = null);

(statearr_18489_18514[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (4))){
var inst_18463 = (state_18486[(7)]);
var inst_18463__$1 = (state_18486[(2)]);
var inst_18464 = (inst_18463__$1 == null);
var state_18486__$1 = (function (){var statearr_18490 = state_18486;
(statearr_18490[(7)] = inst_18463__$1);

return statearr_18490;
})();
if(cljs.core.truth_(inst_18464)){
var statearr_18491_18515 = state_18486__$1;
(statearr_18491_18515[(1)] = (5));

} else {
var statearr_18492_18516 = state_18486__$1;
(statearr_18492_18516[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (13))){
var state_18486__$1 = state_18486;
var statearr_18493_18517 = state_18486__$1;
(statearr_18493_18517[(2)] = null);

(statearr_18493_18517[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (6))){
var inst_18463 = (state_18486[(7)]);
var inst_18469 = (function (){var G__18494 = inst_18463;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__18494) : p.call(null,G__18494));
})();
var state_18486__$1 = state_18486;
if(cljs.core.truth_(inst_18469)){
var statearr_18495_18518 = state_18486__$1;
(statearr_18495_18518[(1)] = (9));

} else {
var statearr_18496_18519 = state_18486__$1;
(statearr_18496_18519[(1)] = (10));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (3))){
var inst_18484 = (state_18486[(2)]);
var state_18486__$1 = state_18486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18486__$1,inst_18484);
} else {
if((state_val_18487 === (12))){
var state_18486__$1 = state_18486;
var statearr_18497_18520 = state_18486__$1;
(statearr_18497_18520[(2)] = null);

(statearr_18497_18520[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (2))){
var state_18486__$1 = state_18486;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18486__$1,(4),ch);
} else {
if((state_val_18487 === (11))){
var inst_18463 = (state_18486[(7)]);
var inst_18473 = (state_18486[(2)]);
var state_18486__$1 = state_18486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18486__$1,(8),inst_18473,inst_18463);
} else {
if((state_val_18487 === (9))){
var state_18486__$1 = state_18486;
var statearr_18498_18521 = state_18486__$1;
(statearr_18498_18521[(2)] = tc);

(statearr_18498_18521[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (5))){
var inst_18466 = cljs.core.async.close_BANG_(tc);
var inst_18467 = cljs.core.async.close_BANG_(fc);
var state_18486__$1 = (function (){var statearr_18499 = state_18486;
(statearr_18499[(8)] = inst_18466);

return statearr_18499;
})();
var statearr_18500_18522 = state_18486__$1;
(statearr_18500_18522[(2)] = inst_18467);

(statearr_18500_18522[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (14))){
var inst_18480 = (state_18486[(2)]);
var state_18486__$1 = state_18486;
var statearr_18501_18523 = state_18486__$1;
(statearr_18501_18523[(2)] = inst_18480);

(statearr_18501_18523[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (10))){
var state_18486__$1 = state_18486;
var statearr_18502_18524 = state_18486__$1;
(statearr_18502_18524[(2)] = fc);

(statearr_18502_18524[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18487 === (8))){
var inst_18475 = (state_18486[(2)]);
var state_18486__$1 = state_18486;
if(cljs.core.truth_(inst_18475)){
var statearr_18503_18525 = state_18486__$1;
(statearr_18503_18525[(1)] = (12));

} else {
var statearr_18504_18526 = state_18486__$1;
(statearr_18504_18526[(1)] = (13));

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
});})(c__7699__auto___18512,tc,fc))
;
return ((function (switch__7619__auto__,c__7699__auto___18512,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__7620__auto__ = null;
var cljs$core$async$split_$_state_machine__7620__auto____0 = (function (){
var statearr_18508 = [null,null,null,null,null,null,null,null,null];
(statearr_18508[(0)] = cljs$core$async$split_$_state_machine__7620__auto__);

(statearr_18508[(1)] = (1));

return statearr_18508;
});
var cljs$core$async$split_$_state_machine__7620__auto____1 = (function (state_18486){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18486);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18509){if((e18509 instanceof Object)){
var ex__7623__auto__ = e18509;
var statearr_18510_18527 = state_18486;
(statearr_18510_18527[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18486);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18528 = state_18486;
state_18486 = G__18528;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__7620__auto__ = function(state_18486){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__7620__auto____1.call(this,state_18486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__7620__auto____0;
cljs$core$async$split_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__7620__auto____1;
return cljs$core$async$split_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___18512,tc,fc))
})();
var state__7701__auto__ = (function (){var statearr_18511 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___18512);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___18512,tc,fc))
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
var c__7699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto__){
return (function (state_18577){
var state_val_18578 = (state_18577[(1)]);
if((state_val_18578 === (7))){
var inst_18573 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
var statearr_18579_18597 = state_18577__$1;
(statearr_18579_18597[(2)] = inst_18573);

(statearr_18579_18597[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18578 === (6))){
var inst_18566 = (state_18577[(7)]);
var inst_18563 = (state_18577[(8)]);
var inst_18570 = (function (){var G__18580 = inst_18563;
var G__18581 = inst_18566;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18580,G__18581) : f.call(null,G__18580,G__18581));
})();
var inst_18563__$1 = inst_18570;
var state_18577__$1 = (function (){var statearr_18582 = state_18577;
(statearr_18582[(8)] = inst_18563__$1);

return statearr_18582;
})();
var statearr_18583_18598 = state_18577__$1;
(statearr_18583_18598[(2)] = null);

(statearr_18583_18598[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18578 === (5))){
var inst_18563 = (state_18577[(8)]);
var state_18577__$1 = state_18577;
var statearr_18584_18599 = state_18577__$1;
(statearr_18584_18599[(2)] = inst_18563);

(statearr_18584_18599[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18578 === (4))){
var inst_18566 = (state_18577[(7)]);
var inst_18566__$1 = (state_18577[(2)]);
var inst_18567 = (inst_18566__$1 == null);
var state_18577__$1 = (function (){var statearr_18585 = state_18577;
(statearr_18585[(7)] = inst_18566__$1);

return statearr_18585;
})();
if(cljs.core.truth_(inst_18567)){
var statearr_18586_18600 = state_18577__$1;
(statearr_18586_18600[(1)] = (5));

} else {
var statearr_18587_18601 = state_18577__$1;
(statearr_18587_18601[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18578 === (3))){
var inst_18575 = (state_18577[(2)]);
var state_18577__$1 = state_18577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18577__$1,inst_18575);
} else {
if((state_val_18578 === (2))){
var state_18577__$1 = state_18577;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18577__$1,(4),ch);
} else {
if((state_val_18578 === (1))){
var inst_18563 = init;
var state_18577__$1 = (function (){var statearr_18588 = state_18577;
(statearr_18588[(8)] = inst_18563);

return statearr_18588;
})();
var statearr_18589_18602 = state_18577__$1;
(statearr_18589_18602[(2)] = null);

(statearr_18589_18602[(1)] = (2));


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
});})(c__7699__auto__))
;
return ((function (switch__7619__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7620__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7620__auto____0 = (function (){
var statearr_18593 = [null,null,null,null,null,null,null,null,null];
(statearr_18593[(0)] = cljs$core$async$reduce_$_state_machine__7620__auto__);

(statearr_18593[(1)] = (1));

return statearr_18593;
});
var cljs$core$async$reduce_$_state_machine__7620__auto____1 = (function (state_18577){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18577);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18594){if((e18594 instanceof Object)){
var ex__7623__auto__ = e18594;
var statearr_18595_18603 = state_18577;
(statearr_18595_18603[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18577);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18604 = state_18577;
state_18577 = G__18604;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7620__auto__ = function(state_18577){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7620__auto____1.call(this,state_18577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7620__auto____0;
cljs$core$async$reduce_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7620__auto____1;
return cljs$core$async$reduce_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_18596 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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
var c__7699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto__){
return (function (state_18681){
var state_val_18682 = (state_18681[(1)]);
if((state_val_18682 === (7))){
var inst_18663 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18683_18706 = state_18681__$1;
(statearr_18683_18706[(2)] = inst_18663);

(statearr_18683_18706[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (1))){
var inst_18657 = cljs.core.seq(coll);
var inst_18658 = inst_18657;
var state_18681__$1 = (function (){var statearr_18684 = state_18681;
(statearr_18684[(7)] = inst_18658);

return statearr_18684;
})();
var statearr_18685_18707 = state_18681__$1;
(statearr_18685_18707[(2)] = null);

(statearr_18685_18707[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (4))){
var inst_18658 = (state_18681[(7)]);
var inst_18661 = cljs.core.first(inst_18658);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18681__$1,(7),ch,inst_18661);
} else {
if((state_val_18682 === (13))){
var inst_18675 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18686_18708 = state_18681__$1;
(statearr_18686_18708[(2)] = inst_18675);

(statearr_18686_18708[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (6))){
var inst_18666 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
if(cljs.core.truth_(inst_18666)){
var statearr_18687_18709 = state_18681__$1;
(statearr_18687_18709[(1)] = (8));

} else {
var statearr_18688_18710 = state_18681__$1;
(statearr_18688_18710[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (3))){
var inst_18679 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18681__$1,inst_18679);
} else {
if((state_val_18682 === (12))){
var state_18681__$1 = state_18681;
var statearr_18689_18711 = state_18681__$1;
(statearr_18689_18711[(2)] = null);

(statearr_18689_18711[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (2))){
var inst_18658 = (state_18681[(7)]);
var state_18681__$1 = state_18681;
if(cljs.core.truth_(inst_18658)){
var statearr_18690_18712 = state_18681__$1;
(statearr_18690_18712[(1)] = (4));

} else {
var statearr_18691_18713 = state_18681__$1;
(statearr_18691_18713[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (11))){
var inst_18672 = cljs.core.async.close_BANG_(ch);
var state_18681__$1 = state_18681;
var statearr_18692_18714 = state_18681__$1;
(statearr_18692_18714[(2)] = inst_18672);

(statearr_18692_18714[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (9))){
var state_18681__$1 = state_18681;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18693_18715 = state_18681__$1;
(statearr_18693_18715[(1)] = (11));

} else {
var statearr_18694_18716 = state_18681__$1;
(statearr_18694_18716[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (5))){
var inst_18658 = (state_18681[(7)]);
var state_18681__$1 = state_18681;
var statearr_18695_18717 = state_18681__$1;
(statearr_18695_18717[(2)] = inst_18658);

(statearr_18695_18717[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (10))){
var inst_18677 = (state_18681[(2)]);
var state_18681__$1 = state_18681;
var statearr_18696_18718 = state_18681__$1;
(statearr_18696_18718[(2)] = inst_18677);

(statearr_18696_18718[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_18682 === (8))){
var inst_18658 = (state_18681[(7)]);
var inst_18668 = cljs.core.next(inst_18658);
var inst_18658__$1 = inst_18668;
var state_18681__$1 = (function (){var statearr_18697 = state_18681;
(statearr_18697[(7)] = inst_18658__$1);

return statearr_18697;
})();
var statearr_18698_18719 = state_18681__$1;
(statearr_18698_18719[(2)] = null);

(statearr_18698_18719[(1)] = (2));


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
});})(c__7699__auto__))
;
return ((function (switch__7619__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__7620__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__7620__auto____0 = (function (){
var statearr_18702 = [null,null,null,null,null,null,null,null];
(statearr_18702[(0)] = cljs$core$async$onto_chan_$_state_machine__7620__auto__);

(statearr_18702[(1)] = (1));

return statearr_18702;
});
var cljs$core$async$onto_chan_$_state_machine__7620__auto____1 = (function (state_18681){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_18681);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e18703){if((e18703 instanceof Object)){
var ex__7623__auto__ = e18703;
var statearr_18704_18720 = state_18681;
(statearr_18704_18720[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18681);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e18703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__18721 = state_18681;
state_18681 = G__18721;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__7620__auto__ = function(state_18681){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__7620__auto____1.call(this,state_18681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__7620__auto____0;
cljs$core$async$onto_chan_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__7620__auto____1;
return cljs$core$async$onto_chan_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_18705 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_18705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_18705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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

cljs.core.async.Mux = (function (){var obj18723 = {};
return obj18723;
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
return (function (){var or__4076__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__18727 = x__4720__auto__;
return goog.typeOf(G__18727);
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


cljs.core.async.Mult = (function (){var obj18729 = {};
return obj18729;
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
return (function (){var or__4076__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__18733 = x__4720__auto__;
return goog.typeOf(G__18733);
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
return (function (){var or__4076__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__18737 = x__4720__auto__;
return goog.typeOf(G__18737);
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
return (function (){var or__4076__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__18741 = x__4720__auto__;
return goog.typeOf(G__18741);
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
var cs = (function (){var G__18971 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18971) : cljs.core.atom.call(null,G__18971));
})();
var m = (function (){
if(typeof cljs.core.async.t18972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18972 = (function (cs,ch,mult,meta18973){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta18973 = meta18973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18972.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t18972.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t18972.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t18972.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18975_19200 = self__.cs;
var G__18976_19201 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18975_19200,G__18976_19201) : cljs.core.reset_BANG_.call(null,G__18975_19200,G__18976_19201));

return null;
});})(cs))
;

cljs.core.async.t18972.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t18972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_18974){
var self__ = this;
var _18974__$1 = this;
return self__.meta18973;
});})(cs))
;

cljs.core.async.t18972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_18974,meta18973__$1){
var self__ = this;
var _18974__$1 = this;
return (new cljs.core.async.t18972(self__.cs,self__.ch,self__.mult,meta18973__$1));
});})(cs))
;

cljs.core.async.t18972.cljs$lang$type = true;

cljs.core.async.t18972.cljs$lang$ctorStr = "cljs.core.async/t18972";

cljs.core.async.t18972.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t18972");
});})(cs))
;

cljs.core.async.__GT_t18972 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t18972(cs__$1,ch__$1,mult__$1,meta18973){
return (new cljs.core.async.t18972(cs__$1,ch__$1,mult__$1,meta18973));
});})(cs))
;

}

return (new cljs.core.async.t18972(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__18977 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18977) : cljs.core.atom.call(null,G__18977));
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
var c__7699__auto___19202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___19202,cs,m,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___19202,cs,m,dchan,dctr,done){
return (function (state_19108){
var state_val_19109 = (state_19108[(1)]);
if((state_val_19109 === (7))){
var inst_19104 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19110_19203 = state_19108__$1;
(statearr_19110_19203[(2)] = inst_19104);

(statearr_19110_19203[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (20))){
var inst_19009 = (state_19108[(7)]);
var inst_19019 = cljs.core.first(inst_19009);
var inst_19020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19019,(0),null);
var inst_19021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19019,(1),null);
var state_19108__$1 = (function (){var statearr_19111 = state_19108;
(statearr_19111[(8)] = inst_19020);

return statearr_19111;
})();
if(cljs.core.truth_(inst_19021)){
var statearr_19112_19204 = state_19108__$1;
(statearr_19112_19204[(1)] = (22));

} else {
var statearr_19113_19205 = state_19108__$1;
(statearr_19113_19205[(1)] = (23));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (27))){
var inst_19056 = (state_19108[(9)]);
var inst_19051 = (state_19108[(10)]);
var inst_18980 = (state_19108[(11)]);
var inst_19049 = (state_19108[(12)]);
var inst_19056__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19049,inst_19051);
var inst_19057 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19056__$1,inst_18980,done);
var state_19108__$1 = (function (){var statearr_19114 = state_19108;
(statearr_19114[(9)] = inst_19056__$1);

return statearr_19114;
})();
if(cljs.core.truth_(inst_19057)){
var statearr_19115_19206 = state_19108__$1;
(statearr_19115_19206[(1)] = (30));

} else {
var statearr_19116_19207 = state_19108__$1;
(statearr_19116_19207[(1)] = (31));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (1))){
var state_19108__$1 = state_19108;
var statearr_19117_19208 = state_19108__$1;
(statearr_19117_19208[(2)] = null);

(statearr_19117_19208[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (24))){
var inst_19009 = (state_19108[(7)]);
var inst_19026 = (state_19108[(2)]);
var inst_19027 = cljs.core.next(inst_19009);
var inst_18989 = inst_19027;
var inst_18990 = null;
var inst_18991 = (0);
var inst_18992 = (0);
var state_19108__$1 = (function (){var statearr_19118 = state_19108;
(statearr_19118[(13)] = inst_18989);

(statearr_19118[(14)] = inst_18990);

(statearr_19118[(15)] = inst_19026);

(statearr_19118[(16)] = inst_18991);

(statearr_19118[(17)] = inst_18992);

return statearr_19118;
})();
var statearr_19119_19209 = state_19108__$1;
(statearr_19119_19209[(2)] = null);

(statearr_19119_19209[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (39))){
var state_19108__$1 = state_19108;
var statearr_19123_19210 = state_19108__$1;
(statearr_19123_19210[(2)] = null);

(statearr_19123_19210[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (4))){
var inst_18980 = (state_19108[(11)]);
var inst_18980__$1 = (state_19108[(2)]);
var inst_18981 = (inst_18980__$1 == null);
var state_19108__$1 = (function (){var statearr_19124 = state_19108;
(statearr_19124[(11)] = inst_18980__$1);

return statearr_19124;
})();
if(cljs.core.truth_(inst_18981)){
var statearr_19125_19211 = state_19108__$1;
(statearr_19125_19211[(1)] = (5));

} else {
var statearr_19126_19212 = state_19108__$1;
(statearr_19126_19212[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (15))){
var inst_18989 = (state_19108[(13)]);
var inst_18990 = (state_19108[(14)]);
var inst_18991 = (state_19108[(16)]);
var inst_18992 = (state_19108[(17)]);
var inst_19005 = (state_19108[(2)]);
var inst_19006 = (inst_18992 + (1));
var tmp19120 = inst_18989;
var tmp19121 = inst_18990;
var tmp19122 = inst_18991;
var inst_18989__$1 = tmp19120;
var inst_18990__$1 = tmp19121;
var inst_18991__$1 = tmp19122;
var inst_18992__$1 = inst_19006;
var state_19108__$1 = (function (){var statearr_19127 = state_19108;
(statearr_19127[(18)] = inst_19005);

(statearr_19127[(13)] = inst_18989__$1);

(statearr_19127[(14)] = inst_18990__$1);

(statearr_19127[(16)] = inst_18991__$1);

(statearr_19127[(17)] = inst_18992__$1);

return statearr_19127;
})();
var statearr_19128_19213 = state_19108__$1;
(statearr_19128_19213[(2)] = null);

(statearr_19128_19213[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (21))){
var inst_19030 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19132_19214 = state_19108__$1;
(statearr_19132_19214[(2)] = inst_19030);

(statearr_19132_19214[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (31))){
var inst_19056 = (state_19108[(9)]);
var inst_19060 = done(null);
var inst_19061 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19056);
var state_19108__$1 = (function (){var statearr_19133 = state_19108;
(statearr_19133[(19)] = inst_19060);

return statearr_19133;
})();
var statearr_19134_19215 = state_19108__$1;
(statearr_19134_19215[(2)] = inst_19061);

(statearr_19134_19215[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (32))){
var inst_19050 = (state_19108[(20)]);
var inst_19051 = (state_19108[(10)]);
var inst_19048 = (state_19108[(21)]);
var inst_19049 = (state_19108[(12)]);
var inst_19063 = (state_19108[(2)]);
var inst_19064 = (inst_19051 + (1));
var tmp19129 = inst_19050;
var tmp19130 = inst_19048;
var tmp19131 = inst_19049;
var inst_19048__$1 = tmp19130;
var inst_19049__$1 = tmp19131;
var inst_19050__$1 = tmp19129;
var inst_19051__$1 = inst_19064;
var state_19108__$1 = (function (){var statearr_19135 = state_19108;
(statearr_19135[(20)] = inst_19050__$1);

(statearr_19135[(10)] = inst_19051__$1);

(statearr_19135[(22)] = inst_19063);

(statearr_19135[(21)] = inst_19048__$1);

(statearr_19135[(12)] = inst_19049__$1);

return statearr_19135;
})();
var statearr_19136_19216 = state_19108__$1;
(statearr_19136_19216[(2)] = null);

(statearr_19136_19216[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (40))){
var inst_19076 = (state_19108[(23)]);
var inst_19080 = done(null);
var inst_19081 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19076);
var state_19108__$1 = (function (){var statearr_19137 = state_19108;
(statearr_19137[(24)] = inst_19080);

return statearr_19137;
})();
var statearr_19138_19217 = state_19108__$1;
(statearr_19138_19217[(2)] = inst_19081);

(statearr_19138_19217[(1)] = (41));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (33))){
var inst_19067 = (state_19108[(25)]);
var inst_19069 = cljs.core.chunked_seq_QMARK_(inst_19067);
var state_19108__$1 = state_19108;
if(inst_19069){
var statearr_19139_19218 = state_19108__$1;
(statearr_19139_19218[(1)] = (36));

} else {
var statearr_19140_19219 = state_19108__$1;
(statearr_19140_19219[(1)] = (37));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (13))){
var inst_18999 = (state_19108[(26)]);
var inst_19002 = cljs.core.async.close_BANG_(inst_18999);
var state_19108__$1 = state_19108;
var statearr_19141_19220 = state_19108__$1;
(statearr_19141_19220[(2)] = inst_19002);

(statearr_19141_19220[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (22))){
var inst_19020 = (state_19108[(8)]);
var inst_19023 = cljs.core.async.close_BANG_(inst_19020);
var state_19108__$1 = state_19108;
var statearr_19142_19221 = state_19108__$1;
(statearr_19142_19221[(2)] = inst_19023);

(statearr_19142_19221[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (36))){
var inst_19067 = (state_19108[(25)]);
var inst_19071 = cljs.core.chunk_first(inst_19067);
var inst_19072 = cljs.core.chunk_rest(inst_19067);
var inst_19073 = cljs.core.count(inst_19071);
var inst_19048 = inst_19072;
var inst_19049 = inst_19071;
var inst_19050 = inst_19073;
var inst_19051 = (0);
var state_19108__$1 = (function (){var statearr_19143 = state_19108;
(statearr_19143[(20)] = inst_19050);

(statearr_19143[(10)] = inst_19051);

(statearr_19143[(21)] = inst_19048);

(statearr_19143[(12)] = inst_19049);

return statearr_19143;
})();
var statearr_19144_19222 = state_19108__$1;
(statearr_19144_19222[(2)] = null);

(statearr_19144_19222[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (41))){
var inst_19067 = (state_19108[(25)]);
var inst_19083 = (state_19108[(2)]);
var inst_19084 = cljs.core.next(inst_19067);
var inst_19048 = inst_19084;
var inst_19049 = null;
var inst_19050 = (0);
var inst_19051 = (0);
var state_19108__$1 = (function (){var statearr_19145 = state_19108;
(statearr_19145[(20)] = inst_19050);

(statearr_19145[(10)] = inst_19051);

(statearr_19145[(27)] = inst_19083);

(statearr_19145[(21)] = inst_19048);

(statearr_19145[(12)] = inst_19049);

return statearr_19145;
})();
var statearr_19146_19223 = state_19108__$1;
(statearr_19146_19223[(2)] = null);

(statearr_19146_19223[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (43))){
var state_19108__$1 = state_19108;
var statearr_19147_19224 = state_19108__$1;
(statearr_19147_19224[(2)] = null);

(statearr_19147_19224[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (29))){
var inst_19092 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19148_19225 = state_19108__$1;
(statearr_19148_19225[(2)] = inst_19092);

(statearr_19148_19225[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (44))){
var inst_19101 = (state_19108[(2)]);
var state_19108__$1 = (function (){var statearr_19149 = state_19108;
(statearr_19149[(28)] = inst_19101);

return statearr_19149;
})();
var statearr_19150_19226 = state_19108__$1;
(statearr_19150_19226[(2)] = null);

(statearr_19150_19226[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (6))){
var inst_19040 = (state_19108[(29)]);
var inst_19039 = (function (){var G__19151 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19151) : cljs.core.deref.call(null,G__19151));
})();
var inst_19040__$1 = cljs.core.keys(inst_19039);
var inst_19041 = cljs.core.count(inst_19040__$1);
var inst_19042 = (function (){var G__19152 = dctr;
var G__19153 = inst_19041;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19152,G__19153) : cljs.core.reset_BANG_.call(null,G__19152,G__19153));
})();
var inst_19047 = cljs.core.seq(inst_19040__$1);
var inst_19048 = inst_19047;
var inst_19049 = null;
var inst_19050 = (0);
var inst_19051 = (0);
var state_19108__$1 = (function (){var statearr_19154 = state_19108;
(statearr_19154[(20)] = inst_19050);

(statearr_19154[(30)] = inst_19042);

(statearr_19154[(10)] = inst_19051);

(statearr_19154[(29)] = inst_19040__$1);

(statearr_19154[(21)] = inst_19048);

(statearr_19154[(12)] = inst_19049);

return statearr_19154;
})();
var statearr_19155_19227 = state_19108__$1;
(statearr_19155_19227[(2)] = null);

(statearr_19155_19227[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (28))){
var inst_19067 = (state_19108[(25)]);
var inst_19048 = (state_19108[(21)]);
var inst_19067__$1 = cljs.core.seq(inst_19048);
var state_19108__$1 = (function (){var statearr_19156 = state_19108;
(statearr_19156[(25)] = inst_19067__$1);

return statearr_19156;
})();
if(inst_19067__$1){
var statearr_19157_19228 = state_19108__$1;
(statearr_19157_19228[(1)] = (33));

} else {
var statearr_19158_19229 = state_19108__$1;
(statearr_19158_19229[(1)] = (34));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (25))){
var inst_19050 = (state_19108[(20)]);
var inst_19051 = (state_19108[(10)]);
var inst_19053 = (inst_19051 < inst_19050);
var inst_19054 = inst_19053;
var state_19108__$1 = state_19108;
if(cljs.core.truth_(inst_19054)){
var statearr_19159_19230 = state_19108__$1;
(statearr_19159_19230[(1)] = (27));

} else {
var statearr_19160_19231 = state_19108__$1;
(statearr_19160_19231[(1)] = (28));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (34))){
var state_19108__$1 = state_19108;
var statearr_19161_19232 = state_19108__$1;
(statearr_19161_19232[(2)] = null);

(statearr_19161_19232[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (17))){
var state_19108__$1 = state_19108;
var statearr_19162_19233 = state_19108__$1;
(statearr_19162_19233[(2)] = null);

(statearr_19162_19233[(1)] = (18));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (3))){
var inst_19106 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19108__$1,inst_19106);
} else {
if((state_val_19109 === (12))){
var inst_19035 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19163_19234 = state_19108__$1;
(statearr_19163_19234[(2)] = inst_19035);

(statearr_19163_19234[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (2))){
var state_19108__$1 = state_19108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19108__$1,(4),ch);
} else {
if((state_val_19109 === (23))){
var state_19108__$1 = state_19108;
var statearr_19164_19235 = state_19108__$1;
(statearr_19164_19235[(2)] = null);

(statearr_19164_19235[(1)] = (24));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (35))){
var inst_19090 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19165_19236 = state_19108__$1;
(statearr_19165_19236[(2)] = inst_19090);

(statearr_19165_19236[(1)] = (29));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (19))){
var inst_19009 = (state_19108[(7)]);
var inst_19013 = cljs.core.chunk_first(inst_19009);
var inst_19014 = cljs.core.chunk_rest(inst_19009);
var inst_19015 = cljs.core.count(inst_19013);
var inst_18989 = inst_19014;
var inst_18990 = inst_19013;
var inst_18991 = inst_19015;
var inst_18992 = (0);
var state_19108__$1 = (function (){var statearr_19166 = state_19108;
(statearr_19166[(13)] = inst_18989);

(statearr_19166[(14)] = inst_18990);

(statearr_19166[(16)] = inst_18991);

(statearr_19166[(17)] = inst_18992);

return statearr_19166;
})();
var statearr_19167_19237 = state_19108__$1;
(statearr_19167_19237[(2)] = null);

(statearr_19167_19237[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (11))){
var inst_18989 = (state_19108[(13)]);
var inst_19009 = (state_19108[(7)]);
var inst_19009__$1 = cljs.core.seq(inst_18989);
var state_19108__$1 = (function (){var statearr_19168 = state_19108;
(statearr_19168[(7)] = inst_19009__$1);

return statearr_19168;
})();
if(inst_19009__$1){
var statearr_19169_19238 = state_19108__$1;
(statearr_19169_19238[(1)] = (16));

} else {
var statearr_19170_19239 = state_19108__$1;
(statearr_19170_19239[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (9))){
var inst_19037 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19171_19240 = state_19108__$1;
(statearr_19171_19240[(2)] = inst_19037);

(statearr_19171_19240[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (5))){
var inst_18987 = (function (){var G__19172 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19172) : cljs.core.deref.call(null,G__19172));
})();
var inst_18988 = cljs.core.seq(inst_18987);
var inst_18989 = inst_18988;
var inst_18990 = null;
var inst_18991 = (0);
var inst_18992 = (0);
var state_19108__$1 = (function (){var statearr_19173 = state_19108;
(statearr_19173[(13)] = inst_18989);

(statearr_19173[(14)] = inst_18990);

(statearr_19173[(16)] = inst_18991);

(statearr_19173[(17)] = inst_18992);

return statearr_19173;
})();
var statearr_19174_19241 = state_19108__$1;
(statearr_19174_19241[(2)] = null);

(statearr_19174_19241[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (14))){
var state_19108__$1 = state_19108;
var statearr_19175_19242 = state_19108__$1;
(statearr_19175_19242[(2)] = null);

(statearr_19175_19242[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (45))){
var inst_19098 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19176_19243 = state_19108__$1;
(statearr_19176_19243[(2)] = inst_19098);

(statearr_19176_19243[(1)] = (44));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (26))){
var inst_19040 = (state_19108[(29)]);
var inst_19094 = (state_19108[(2)]);
var inst_19095 = cljs.core.seq(inst_19040);
var state_19108__$1 = (function (){var statearr_19177 = state_19108;
(statearr_19177[(31)] = inst_19094);

return statearr_19177;
})();
if(inst_19095){
var statearr_19178_19244 = state_19108__$1;
(statearr_19178_19244[(1)] = (42));

} else {
var statearr_19179_19245 = state_19108__$1;
(statearr_19179_19245[(1)] = (43));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (16))){
var inst_19009 = (state_19108[(7)]);
var inst_19011 = cljs.core.chunked_seq_QMARK_(inst_19009);
var state_19108__$1 = state_19108;
if(inst_19011){
var statearr_19180_19246 = state_19108__$1;
(statearr_19180_19246[(1)] = (19));

} else {
var statearr_19181_19247 = state_19108__$1;
(statearr_19181_19247[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (38))){
var inst_19087 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19182_19248 = state_19108__$1;
(statearr_19182_19248[(2)] = inst_19087);

(statearr_19182_19248[(1)] = (35));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (30))){
var state_19108__$1 = state_19108;
var statearr_19183_19249 = state_19108__$1;
(statearr_19183_19249[(2)] = null);

(statearr_19183_19249[(1)] = (32));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (10))){
var inst_18990 = (state_19108[(14)]);
var inst_18992 = (state_19108[(17)]);
var inst_18998 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18990,inst_18992);
var inst_18999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18998,(0),null);
var inst_19000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18998,(1),null);
var state_19108__$1 = (function (){var statearr_19184 = state_19108;
(statearr_19184[(26)] = inst_18999);

return statearr_19184;
})();
if(cljs.core.truth_(inst_19000)){
var statearr_19185_19250 = state_19108__$1;
(statearr_19185_19250[(1)] = (13));

} else {
var statearr_19186_19251 = state_19108__$1;
(statearr_19186_19251[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (18))){
var inst_19033 = (state_19108[(2)]);
var state_19108__$1 = state_19108;
var statearr_19187_19252 = state_19108__$1;
(statearr_19187_19252[(2)] = inst_19033);

(statearr_19187_19252[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (42))){
var state_19108__$1 = state_19108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19108__$1,(45),dchan);
} else {
if((state_val_19109 === (37))){
var inst_19067 = (state_19108[(25)]);
var inst_19076 = (state_19108[(23)]);
var inst_18980 = (state_19108[(11)]);
var inst_19076__$1 = cljs.core.first(inst_19067);
var inst_19077 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19076__$1,inst_18980,done);
var state_19108__$1 = (function (){var statearr_19188 = state_19108;
(statearr_19188[(23)] = inst_19076__$1);

return statearr_19188;
})();
if(cljs.core.truth_(inst_19077)){
var statearr_19189_19253 = state_19108__$1;
(statearr_19189_19253[(1)] = (39));

} else {
var statearr_19190_19254 = state_19108__$1;
(statearr_19190_19254[(1)] = (40));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19109 === (8))){
var inst_18991 = (state_19108[(16)]);
var inst_18992 = (state_19108[(17)]);
var inst_18994 = (inst_18992 < inst_18991);
var inst_18995 = inst_18994;
var state_19108__$1 = state_19108;
if(cljs.core.truth_(inst_18995)){
var statearr_19191_19255 = state_19108__$1;
(statearr_19191_19255[(1)] = (10));

} else {
var statearr_19192_19256 = state_19108__$1;
(statearr_19192_19256[(1)] = (11));

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
});})(c__7699__auto___19202,cs,m,dchan,dctr,done))
;
return ((function (switch__7619__auto__,c__7699__auto___19202,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7620__auto__ = null;
var cljs$core$async$mult_$_state_machine__7620__auto____0 = (function (){
var statearr_19196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19196[(0)] = cljs$core$async$mult_$_state_machine__7620__auto__);

(statearr_19196[(1)] = (1));

return statearr_19196;
});
var cljs$core$async$mult_$_state_machine__7620__auto____1 = (function (state_19108){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_19108);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e19197){if((e19197 instanceof Object)){
var ex__7623__auto__ = e19197;
var statearr_19198_19257 = state_19108;
(statearr_19198_19257[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19108);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19197;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19258 = state_19108;
state_19108 = G__19258;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7620__auto__ = function(state_19108){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7620__auto____1.call(this,state_19108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7620__auto____0;
cljs$core$async$mult_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7620__auto____1;
return cljs$core$async$mult_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___19202,cs,m,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_19199 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_19199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___19202);

return statearr_19199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___19202,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj19263 = {};
return obj19263;
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
return (function (){var or__4076__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__19267 = x__4720__auto__;
return goog.typeOf(G__19267);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__19271 = x__4720__auto__;
return goog.typeOf(G__19271);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__19275 = x__4720__auto__;
return goog.typeOf(G__19275);
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
return (function (){var or__4076__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__19279 = x__4720__auto__;
return goog.typeOf(G__19279);
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
return (function (){var or__4076__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__19283 = x__4720__auto__;
return goog.typeOf(G__19283);
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19284){
var map__19290 = p__19284;
var map__19290__$1 = ((cljs.core.seq_QMARK_(map__19290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19290):map__19290);
var opts = map__19290__$1;
var statearr_19291_19295 = state;
(statearr_19291_19295[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__19290,map__19290__$1,opts){
return (function (val){
var statearr_19292_19296 = state;
(statearr_19292_19296[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__19290,map__19290__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_19293_19297 = state;
(statearr_19293_19297[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__19294 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19294) : cljs.core.deref.call(null,G__19294));
})());


return cljs.core.constant$keyword$_COLON_recur;
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19284 = null;
if (arguments.length > 3) {
var G__19298__i = 0, G__19298__a = new Array(arguments.length -  3);
while (G__19298__i < G__19298__a.length) {G__19298__a[G__19298__i] = arguments[G__19298__i + 3]; ++G__19298__i;}
  p__19284 = new cljs.core.IndexedSeq(G__19298__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19284);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19299){
var state = cljs.core.first(arglist__19299);
arglist__19299 = cljs.core.next(arglist__19299);
var cont_block = cljs.core.first(arglist__19299);
arglist__19299 = cljs.core.next(arglist__19299);
var ports = cljs.core.first(arglist__19299);
var p__19284 = cljs.core.rest(arglist__19299);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__19284);
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
var cs = (function (){var G__19433 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19433) : cljs.core.atom.call(null,G__19433));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_pause,null,cljs.core.constant$keyword$_COLON_mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$_COLON_solo);
var solo_mode = (function (){var G__19434 = cljs.core.constant$keyword$_COLON_mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19434) : cljs.core.atom.call(null,G__19434));
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
if(cljs.core.truth_((function (){var G__19435 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__19435) : attr.call(null,G__19435));
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
var chs = (function (){var G__19436 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19436) : cljs.core.deref.call(null,G__19436));
})();
var mode = (function (){var G__19437 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19437) : cljs.core.deref.call(null,G__19437));
})();
var solos = pick(cljs.core.constant$keyword$_COLON_solo,chs);
var pauses = pick(cljs.core.constant$keyword$_COLON_pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_solos,solos,cljs.core.constant$keyword$_COLON_mutes,pick(cljs.core.constant$keyword$_COLON_mute,chs),cljs.core.constant$keyword$_COLON_reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$_COLON_pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t19438 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19438 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19439){
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
this.meta19439 = meta19439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19438.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t19438.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19441_19566 = self__.cs;
var G__19442_19567 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19441_19566,G__19442_19567) : cljs.core.reset_BANG_.call(null,G__19441_19566,G__19442_19567));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__19443 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__19443) : self__.solo_modes.call(null,G__19443));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__19444_19568 = self__.solo_mode;
var G__19445_19569 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19444_19568,G__19445_19569) : cljs.core.reset_BANG_.call(null,G__19444_19568,G__19445_19569));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19438.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19440){
var self__ = this;
var _19440__$1 = this;
return self__.meta19439;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19440,meta19439__$1){
var self__ = this;
var _19440__$1 = this;
return (new cljs.core.async.t19438(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19439__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t19438.cljs$lang$type = true;

cljs.core.async.t19438.cljs$lang$ctorStr = "cljs.core.async/t19438";

cljs.core.async.t19438.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19438");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t19438 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t19438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19439){
return (new cljs.core.async.t19438(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19439));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t19438(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___19570 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19517){
var state_val_19518 = (state_19517[(1)]);
if((state_val_19518 === (7))){
var inst_19459 = (state_19517[(7)]);
var inst_19464 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19459);
var state_19517__$1 = state_19517;
var statearr_19519_19571 = state_19517__$1;
(statearr_19519_19571[(2)] = inst_19464);

(statearr_19519_19571[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (20))){
var inst_19474 = (state_19517[(8)]);
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19517__$1,(23),out,inst_19474);
} else {
if((state_val_19518 === (1))){
var inst_19449 = (state_19517[(9)]);
var inst_19449__$1 = calc_state();
var inst_19450 = cljs.core.seq_QMARK_(inst_19449__$1);
var state_19517__$1 = (function (){var statearr_19520 = state_19517;
(statearr_19520[(9)] = inst_19449__$1);

return statearr_19520;
})();
if(inst_19450){
var statearr_19521_19572 = state_19517__$1;
(statearr_19521_19572[(1)] = (2));

} else {
var statearr_19522_19573 = state_19517__$1;
(statearr_19522_19573[(1)] = (3));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (24))){
var inst_19467 = (state_19517[(10)]);
var inst_19459 = inst_19467;
var state_19517__$1 = (function (){var statearr_19523 = state_19517;
(statearr_19523[(7)] = inst_19459);

return statearr_19523;
})();
var statearr_19524_19574 = state_19517__$1;
(statearr_19524_19574[(2)] = null);

(statearr_19524_19574[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (4))){
var inst_19449 = (state_19517[(9)]);
var inst_19455 = (state_19517[(2)]);
var inst_19456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,cljs.core.constant$keyword$_COLON_reads);
var inst_19457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,cljs.core.constant$keyword$_COLON_mutes);
var inst_19458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19455,cljs.core.constant$keyword$_COLON_solos);
var inst_19459 = inst_19449;
var state_19517__$1 = (function (){var statearr_19525 = state_19517;
(statearr_19525[(7)] = inst_19459);

(statearr_19525[(11)] = inst_19456);

(statearr_19525[(12)] = inst_19457);

(statearr_19525[(13)] = inst_19458);

return statearr_19525;
})();
var statearr_19526_19575 = state_19517__$1;
(statearr_19526_19575[(2)] = null);

(statearr_19526_19575[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (15))){
var state_19517__$1 = state_19517;
var statearr_19527_19576 = state_19517__$1;
(statearr_19527_19576[(2)] = null);

(statearr_19527_19576[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (21))){
var inst_19467 = (state_19517[(10)]);
var inst_19459 = inst_19467;
var state_19517__$1 = (function (){var statearr_19528 = state_19517;
(statearr_19528[(7)] = inst_19459);

return statearr_19528;
})();
var statearr_19529_19577 = state_19517__$1;
(statearr_19529_19577[(2)] = null);

(statearr_19529_19577[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (13))){
var inst_19513 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19530_19578 = state_19517__$1;
(statearr_19530_19578[(2)] = inst_19513);

(statearr_19530_19578[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (22))){
var inst_19511 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19531_19579 = state_19517__$1;
(statearr_19531_19579[(2)] = inst_19511);

(statearr_19531_19579[(1)] = (13));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (6))){
var inst_19515 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19517__$1,inst_19515);
} else {
if((state_val_19518 === (25))){
var state_19517__$1 = state_19517;
var statearr_19532_19580 = state_19517__$1;
(statearr_19532_19580[(2)] = null);

(statearr_19532_19580[(1)] = (26));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (17))){
var inst_19490 = (state_19517[(14)]);
var state_19517__$1 = state_19517;
var statearr_19533_19581 = state_19517__$1;
(statearr_19533_19581[(2)] = inst_19490);

(statearr_19533_19581[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (3))){
var inst_19449 = (state_19517[(9)]);
var state_19517__$1 = state_19517;
var statearr_19534_19582 = state_19517__$1;
(statearr_19534_19582[(2)] = inst_19449);

(statearr_19534_19582[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (12))){
var inst_19475 = (state_19517[(15)]);
var inst_19490 = (state_19517[(14)]);
var inst_19470 = (state_19517[(16)]);
var inst_19490__$1 = (function (){var G__19535 = inst_19475;
return (inst_19470.cljs$core$IFn$_invoke$arity$1 ? inst_19470.cljs$core$IFn$_invoke$arity$1(G__19535) : inst_19470.call(null,G__19535));
})();
var state_19517__$1 = (function (){var statearr_19536 = state_19517;
(statearr_19536[(14)] = inst_19490__$1);

return statearr_19536;
})();
if(cljs.core.truth_(inst_19490__$1)){
var statearr_19537_19583 = state_19517__$1;
(statearr_19537_19583[(1)] = (17));

} else {
var statearr_19538_19584 = state_19517__$1;
(statearr_19538_19584[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (2))){
var inst_19449 = (state_19517[(9)]);
var inst_19452 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_19449);
var state_19517__$1 = state_19517;
var statearr_19539_19585 = state_19517__$1;
(statearr_19539_19585[(2)] = inst_19452);

(statearr_19539_19585[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (23))){
var inst_19502 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
if(cljs.core.truth_(inst_19502)){
var statearr_19540_19586 = state_19517__$1;
(statearr_19540_19586[(1)] = (24));

} else {
var statearr_19541_19587 = state_19517__$1;
(statearr_19541_19587[(1)] = (25));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (19))){
var inst_19499 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
if(cljs.core.truth_(inst_19499)){
var statearr_19542_19588 = state_19517__$1;
(statearr_19542_19588[(1)] = (20));

} else {
var statearr_19543_19589 = state_19517__$1;
(statearr_19543_19589[(1)] = (21));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (11))){
var inst_19474 = (state_19517[(8)]);
var inst_19480 = (inst_19474 == null);
var state_19517__$1 = state_19517;
if(cljs.core.truth_(inst_19480)){
var statearr_19544_19590 = state_19517__$1;
(statearr_19544_19590[(1)] = (14));

} else {
var statearr_19545_19591 = state_19517__$1;
(statearr_19545_19591[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (9))){
var inst_19467 = (state_19517[(10)]);
var inst_19467__$1 = (state_19517[(2)]);
var inst_19468 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19467__$1,cljs.core.constant$keyword$_COLON_reads);
var inst_19469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19467__$1,cljs.core.constant$keyword$_COLON_mutes);
var inst_19470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19467__$1,cljs.core.constant$keyword$_COLON_solos);
var state_19517__$1 = (function (){var statearr_19546 = state_19517;
(statearr_19546[(10)] = inst_19467__$1);

(statearr_19546[(17)] = inst_19469);

(statearr_19546[(16)] = inst_19470);

return statearr_19546;
})();
return cljs.core.async.ioc_alts_BANG_(state_19517__$1,(10),inst_19468);
} else {
if((state_val_19518 === (5))){
var inst_19459 = (state_19517[(7)]);
var inst_19462 = cljs.core.seq_QMARK_(inst_19459);
var state_19517__$1 = state_19517;
if(inst_19462){
var statearr_19547_19592 = state_19517__$1;
(statearr_19547_19592[(1)] = (7));

} else {
var statearr_19548_19593 = state_19517__$1;
(statearr_19548_19593[(1)] = (8));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (14))){
var inst_19475 = (state_19517[(15)]);
var inst_19482 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19475);
var state_19517__$1 = state_19517;
var statearr_19549_19594 = state_19517__$1;
(statearr_19549_19594[(2)] = inst_19482);

(statearr_19549_19594[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (26))){
var inst_19507 = (state_19517[(2)]);
var state_19517__$1 = state_19517;
var statearr_19550_19595 = state_19517__$1;
(statearr_19550_19595[(2)] = inst_19507);

(statearr_19550_19595[(1)] = (22));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (16))){
var inst_19485 = (state_19517[(2)]);
var inst_19486 = calc_state();
var inst_19459 = inst_19486;
var state_19517__$1 = (function (){var statearr_19551 = state_19517;
(statearr_19551[(18)] = inst_19485);

(statearr_19551[(7)] = inst_19459);

return statearr_19551;
})();
var statearr_19552_19596 = state_19517__$1;
(statearr_19552_19596[(2)] = null);

(statearr_19552_19596[(1)] = (5));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (10))){
var inst_19474 = (state_19517[(8)]);
var inst_19475 = (state_19517[(15)]);
var inst_19473 = (state_19517[(2)]);
var inst_19474__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19473,(0),null);
var inst_19475__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19473,(1),null);
var inst_19476 = (inst_19474__$1 == null);
var inst_19477 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19475__$1,change);
var inst_19478 = (inst_19476) || (inst_19477);
var state_19517__$1 = (function (){var statearr_19553 = state_19517;
(statearr_19553[(8)] = inst_19474__$1);

(statearr_19553[(15)] = inst_19475__$1);

return statearr_19553;
})();
if(cljs.core.truth_(inst_19478)){
var statearr_19554_19597 = state_19517__$1;
(statearr_19554_19597[(1)] = (11));

} else {
var statearr_19555_19598 = state_19517__$1;
(statearr_19555_19598[(1)] = (12));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (18))){
var inst_19469 = (state_19517[(17)]);
var inst_19475 = (state_19517[(15)]);
var inst_19470 = (state_19517[(16)]);
var inst_19494 = cljs.core.empty_QMARK_(inst_19470);
var inst_19495 = (function (){var G__19556 = inst_19475;
return (inst_19469.cljs$core$IFn$_invoke$arity$1 ? inst_19469.cljs$core$IFn$_invoke$arity$1(G__19556) : inst_19469.call(null,G__19556));
})();
var inst_19496 = cljs.core.not(inst_19495);
var inst_19497 = (inst_19494) && (inst_19496);
var state_19517__$1 = state_19517;
var statearr_19557_19599 = state_19517__$1;
(statearr_19557_19599[(2)] = inst_19497);

(statearr_19557_19599[(1)] = (19));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19518 === (8))){
var inst_19459 = (state_19517[(7)]);
var state_19517__$1 = state_19517;
var statearr_19558_19600 = state_19517__$1;
(statearr_19558_19600[(2)] = inst_19459);

(statearr_19558_19600[(1)] = (9));


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
});})(c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7619__auto__,c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7620__auto__ = null;
var cljs$core$async$mix_$_state_machine__7620__auto____0 = (function (){
var statearr_19562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19562[(0)] = cljs$core$async$mix_$_state_machine__7620__auto__);

(statearr_19562[(1)] = (1));

return statearr_19562;
});
var cljs$core$async$mix_$_state_machine__7620__auto____1 = (function (state_19517){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_19517);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e19563){if((e19563 instanceof Object)){
var ex__7623__auto__ = e19563;
var statearr_19564_19601 = state_19517;
(statearr_19564_19601[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19517);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19602 = state_19517;
state_19517 = G__19602;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7620__auto__ = function(state_19517){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7620__auto____1.call(this,state_19517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7620__auto____0;
cljs$core$async$mix_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7620__auto____1;
return cljs$core$async$mix_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7701__auto__ = (function (){var statearr_19565 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_19565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___19570);

return statearr_19565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___19570,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj19604 = {};
return obj19604;
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
return (function (){var or__4076__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__19608 = x__4720__auto__;
return goog.typeOf(G__19608);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__19612 = x__4720__auto__;
return goog.typeOf(G__19612);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19618 = x__4720__auto__;
return goog.typeOf(G__19618);
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
return (function (){var or__4076__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__19620 = x__4720__auto__;
return goog.typeOf(G__19620);
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
var mults = (function (){var G__19759 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19759) : cljs.core.atom.call(null,G__19759));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4076__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19761 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19761) : cljs.core.deref.call(null,G__19761));
})(),topic);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4076__auto__,mults){
return (function (p1__19621_SHARP_){
if(cljs.core.truth_((function (){var G__19762 = topic;
return (p1__19621_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19621_SHARP_.cljs$core$IFn$_invoke$arity$1(G__19762) : p1__19621_SHARP_.call(null,G__19762));
})())){
return p1__19621_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19621_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__19763 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__19763) : buf_fn.call(null,G__19763));
})())));
}
});})(or__4076__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t19764 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19764 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta19765){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta19765 = meta19765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19764.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t19764.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__19767 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__19767) : self__.ensure_mult.call(null,G__19767));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__19768 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19768) : cljs.core.deref.call(null,G__19768));
})(),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__19769 = self__.mults;
var G__19770 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__19769,G__19770) : cljs.core.reset_BANG_.call(null,G__19769,G__19770));
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t19764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_19766){
var self__ = this;
var _19766__$1 = this;
return self__.meta19765;
});})(mults,ensure_mult))
;

cljs.core.async.t19764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_19766,meta19765__$1){
var self__ = this;
var _19766__$1 = this;
return (new cljs.core.async.t19764(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta19765__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t19764.cljs$lang$type = true;

cljs.core.async.t19764.cljs$lang$ctorStr = "cljs.core.async/t19764";

cljs.core.async.t19764.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t19764");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t19764 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t19764(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19765){
return (new cljs.core.async.t19764(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta19765));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t19764(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7699__auto___19893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___19893,mults,ensure_mult,p){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___19893,mults,ensure_mult,p){
return (function (state_19842){
var state_val_19843 = (state_19842[(1)]);
if((state_val_19843 === (7))){
var inst_19838 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19844_19894 = state_19842__$1;
(statearr_19844_19894[(2)] = inst_19838);

(statearr_19844_19894[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (20))){
var state_19842__$1 = state_19842;
var statearr_19845_19895 = state_19842__$1;
(statearr_19845_19895[(2)] = null);

(statearr_19845_19895[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (1))){
var state_19842__$1 = state_19842;
var statearr_19846_19896 = state_19842__$1;
(statearr_19846_19896[(2)] = null);

(statearr_19846_19896[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (24))){
var inst_19821 = (state_19842[(7)]);
var inst_19830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19821);
var state_19842__$1 = state_19842;
var statearr_19847_19897 = state_19842__$1;
(statearr_19847_19897[(2)] = inst_19830);

(statearr_19847_19897[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (4))){
var inst_19773 = (state_19842[(8)]);
var inst_19773__$1 = (state_19842[(2)]);
var inst_19774 = (inst_19773__$1 == null);
var state_19842__$1 = (function (){var statearr_19848 = state_19842;
(statearr_19848[(8)] = inst_19773__$1);

return statearr_19848;
})();
if(cljs.core.truth_(inst_19774)){
var statearr_19849_19898 = state_19842__$1;
(statearr_19849_19898[(1)] = (5));

} else {
var statearr_19850_19899 = state_19842__$1;
(statearr_19850_19899[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (15))){
var inst_19815 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19851_19900 = state_19842__$1;
(statearr_19851_19900[(2)] = inst_19815);

(statearr_19851_19900[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (21))){
var inst_19835 = (state_19842[(2)]);
var state_19842__$1 = (function (){var statearr_19852 = state_19842;
(statearr_19852[(9)] = inst_19835);

return statearr_19852;
})();
var statearr_19853_19901 = state_19842__$1;
(statearr_19853_19901[(2)] = null);

(statearr_19853_19901[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (13))){
var inst_19797 = (state_19842[(10)]);
var inst_19799 = cljs.core.chunked_seq_QMARK_(inst_19797);
var state_19842__$1 = state_19842;
if(inst_19799){
var statearr_19854_19902 = state_19842__$1;
(statearr_19854_19902[(1)] = (16));

} else {
var statearr_19855_19903 = state_19842__$1;
(statearr_19855_19903[(1)] = (17));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (22))){
var inst_19827 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
if(cljs.core.truth_(inst_19827)){
var statearr_19856_19904 = state_19842__$1;
(statearr_19856_19904[(1)] = (23));

} else {
var statearr_19857_19905 = state_19842__$1;
(statearr_19857_19905[(1)] = (24));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (6))){
var inst_19821 = (state_19842[(7)]);
var inst_19773 = (state_19842[(8)]);
var inst_19823 = (state_19842[(11)]);
var inst_19821__$1 = (function (){var G__19858 = inst_19773;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__19858) : topic_fn.call(null,G__19858));
})();
var inst_19822 = (function (){var G__19859 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19859) : cljs.core.deref.call(null,G__19859));
})();
var inst_19823__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19822,inst_19821__$1);
var state_19842__$1 = (function (){var statearr_19860 = state_19842;
(statearr_19860[(7)] = inst_19821__$1);

(statearr_19860[(11)] = inst_19823__$1);

return statearr_19860;
})();
if(cljs.core.truth_(inst_19823__$1)){
var statearr_19861_19906 = state_19842__$1;
(statearr_19861_19906[(1)] = (19));

} else {
var statearr_19862_19907 = state_19842__$1;
(statearr_19862_19907[(1)] = (20));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (25))){
var inst_19832 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19863_19908 = state_19842__$1;
(statearr_19863_19908[(2)] = inst_19832);

(statearr_19863_19908[(1)] = (21));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (17))){
var inst_19797 = (state_19842[(10)]);
var inst_19806 = cljs.core.first(inst_19797);
var inst_19807 = cljs.core.async.muxch_STAR_(inst_19806);
var inst_19808 = cljs.core.async.close_BANG_(inst_19807);
var inst_19809 = cljs.core.next(inst_19797);
var inst_19783 = inst_19809;
var inst_19784 = null;
var inst_19785 = (0);
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19864 = state_19842;
(statearr_19864[(12)] = inst_19783);

(statearr_19864[(13)] = inst_19785);

(statearr_19864[(14)] = inst_19786);

(statearr_19864[(15)] = inst_19808);

(statearr_19864[(16)] = inst_19784);

return statearr_19864;
})();
var statearr_19865_19909 = state_19842__$1;
(statearr_19865_19909[(2)] = null);

(statearr_19865_19909[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (3))){
var inst_19840 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19842__$1,inst_19840);
} else {
if((state_val_19843 === (12))){
var inst_19817 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19866_19910 = state_19842__$1;
(statearr_19866_19910[(2)] = inst_19817);

(statearr_19866_19910[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (2))){
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19842__$1,(4),ch);
} else {
if((state_val_19843 === (23))){
var state_19842__$1 = state_19842;
var statearr_19867_19911 = state_19842__$1;
(statearr_19867_19911[(2)] = null);

(statearr_19867_19911[(1)] = (25));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (19))){
var inst_19773 = (state_19842[(8)]);
var inst_19823 = (state_19842[(11)]);
var inst_19825 = cljs.core.async.muxch_STAR_(inst_19823);
var state_19842__$1 = state_19842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19842__$1,(22),inst_19825,inst_19773);
} else {
if((state_val_19843 === (11))){
var inst_19783 = (state_19842[(12)]);
var inst_19797 = (state_19842[(10)]);
var inst_19797__$1 = cljs.core.seq(inst_19783);
var state_19842__$1 = (function (){var statearr_19868 = state_19842;
(statearr_19868[(10)] = inst_19797__$1);

return statearr_19868;
})();
if(inst_19797__$1){
var statearr_19869_19912 = state_19842__$1;
(statearr_19869_19912[(1)] = (13));

} else {
var statearr_19870_19913 = state_19842__$1;
(statearr_19870_19913[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (9))){
var inst_19819 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19871_19914 = state_19842__$1;
(statearr_19871_19914[(2)] = inst_19819);

(statearr_19871_19914[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (5))){
var inst_19780 = (function (){var G__19872 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19872) : cljs.core.deref.call(null,G__19872));
})();
var inst_19781 = cljs.core.vals(inst_19780);
var inst_19782 = cljs.core.seq(inst_19781);
var inst_19783 = inst_19782;
var inst_19784 = null;
var inst_19785 = (0);
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19873 = state_19842;
(statearr_19873[(12)] = inst_19783);

(statearr_19873[(13)] = inst_19785);

(statearr_19873[(14)] = inst_19786);

(statearr_19873[(16)] = inst_19784);

return statearr_19873;
})();
var statearr_19874_19915 = state_19842__$1;
(statearr_19874_19915[(2)] = null);

(statearr_19874_19915[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (14))){
var state_19842__$1 = state_19842;
var statearr_19878_19916 = state_19842__$1;
(statearr_19878_19916[(2)] = null);

(statearr_19878_19916[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (16))){
var inst_19797 = (state_19842[(10)]);
var inst_19801 = cljs.core.chunk_first(inst_19797);
var inst_19802 = cljs.core.chunk_rest(inst_19797);
var inst_19803 = cljs.core.count(inst_19801);
var inst_19783 = inst_19802;
var inst_19784 = inst_19801;
var inst_19785 = inst_19803;
var inst_19786 = (0);
var state_19842__$1 = (function (){var statearr_19879 = state_19842;
(statearr_19879[(12)] = inst_19783);

(statearr_19879[(13)] = inst_19785);

(statearr_19879[(14)] = inst_19786);

(statearr_19879[(16)] = inst_19784);

return statearr_19879;
})();
var statearr_19880_19917 = state_19842__$1;
(statearr_19880_19917[(2)] = null);

(statearr_19880_19917[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (10))){
var inst_19783 = (state_19842[(12)]);
var inst_19785 = (state_19842[(13)]);
var inst_19786 = (state_19842[(14)]);
var inst_19784 = (state_19842[(16)]);
var inst_19791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_19784,inst_19786);
var inst_19792 = cljs.core.async.muxch_STAR_(inst_19791);
var inst_19793 = cljs.core.async.close_BANG_(inst_19792);
var inst_19794 = (inst_19786 + (1));
var tmp19875 = inst_19783;
var tmp19876 = inst_19785;
var tmp19877 = inst_19784;
var inst_19783__$1 = tmp19875;
var inst_19784__$1 = tmp19877;
var inst_19785__$1 = tmp19876;
var inst_19786__$1 = inst_19794;
var state_19842__$1 = (function (){var statearr_19881 = state_19842;
(statearr_19881[(17)] = inst_19793);

(statearr_19881[(12)] = inst_19783__$1);

(statearr_19881[(13)] = inst_19785__$1);

(statearr_19881[(14)] = inst_19786__$1);

(statearr_19881[(16)] = inst_19784__$1);

return statearr_19881;
})();
var statearr_19882_19918 = state_19842__$1;
(statearr_19882_19918[(2)] = null);

(statearr_19882_19918[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (18))){
var inst_19812 = (state_19842[(2)]);
var state_19842__$1 = state_19842;
var statearr_19883_19919 = state_19842__$1;
(statearr_19883_19919[(2)] = inst_19812);

(statearr_19883_19919[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_19843 === (8))){
var inst_19785 = (state_19842[(13)]);
var inst_19786 = (state_19842[(14)]);
var inst_19788 = (inst_19786 < inst_19785);
var inst_19789 = inst_19788;
var state_19842__$1 = state_19842;
if(cljs.core.truth_(inst_19789)){
var statearr_19884_19920 = state_19842__$1;
(statearr_19884_19920[(1)] = (10));

} else {
var statearr_19885_19921 = state_19842__$1;
(statearr_19885_19921[(1)] = (11));

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
});})(c__7699__auto___19893,mults,ensure_mult,p))
;
return ((function (switch__7619__auto__,c__7699__auto___19893,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__7620__auto__ = null;
var cljs$core$async$pub_$_state_machine__7620__auto____0 = (function (){
var statearr_19889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19889[(0)] = cljs$core$async$pub_$_state_machine__7620__auto__);

(statearr_19889[(1)] = (1));

return statearr_19889;
});
var cljs$core$async$pub_$_state_machine__7620__auto____1 = (function (state_19842){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_19842);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e19890){if((e19890 instanceof Object)){
var ex__7623__auto__ = e19890;
var statearr_19891_19922 = state_19842;
(statearr_19891_19922[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19842);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e19890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__19923 = state_19842;
state_19842 = G__19923;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__7620__auto__ = function(state_19842){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__7620__auto____1.call(this,state_19842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__7620__auto____0;
cljs$core$async$pub_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__7620__auto____1;
return cljs$core$async$pub_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___19893,mults,ensure_mult,p))
})();
var state__7701__auto__ = (function (){var statearr_19892 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_19892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___19893);

return statearr_19892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___19893,mults,ensure_mult,p))
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
var dctr = (function (){var G__20004 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20004) : cljs.core.atom.call(null,G__20004));
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
var c__7699__auto___20077 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20043){
var state_val_20044 = (state_20043[(1)]);
if((state_val_20044 === (7))){
var state_20043__$1 = state_20043;
var statearr_20045_20078 = state_20043__$1;
(statearr_20045_20078[(2)] = null);

(statearr_20045_20078[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (1))){
var state_20043__$1 = state_20043;
var statearr_20046_20079 = state_20043__$1;
(statearr_20046_20079[(2)] = null);

(statearr_20046_20079[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (4))){
var inst_20007 = (state_20043[(7)]);
var inst_20009 = (inst_20007 < cnt);
var state_20043__$1 = state_20043;
if(cljs.core.truth_(inst_20009)){
var statearr_20047_20080 = state_20043__$1;
(statearr_20047_20080[(1)] = (6));

} else {
var statearr_20048_20081 = state_20043__$1;
(statearr_20048_20081[(1)] = (7));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (15))){
var inst_20039 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
var statearr_20049_20082 = state_20043__$1;
(statearr_20049_20082[(2)] = inst_20039);

(statearr_20049_20082[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (13))){
var inst_20032 = cljs.core.async.close_BANG_(out);
var state_20043__$1 = state_20043;
var statearr_20050_20083 = state_20043__$1;
(statearr_20050_20083[(2)] = inst_20032);

(statearr_20050_20083[(1)] = (15));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (6))){
var state_20043__$1 = state_20043;
var statearr_20051_20084 = state_20043__$1;
(statearr_20051_20084[(2)] = null);

(statearr_20051_20084[(1)] = (11));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (3))){
var inst_20041 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20043__$1,inst_20041);
} else {
if((state_val_20044 === (12))){
var inst_20029 = (state_20043[(8)]);
var inst_20029__$1 = (state_20043[(2)]);
var inst_20030 = cljs.core.some(cljs.core.nil_QMARK_,inst_20029__$1);
var state_20043__$1 = (function (){var statearr_20052 = state_20043;
(statearr_20052[(8)] = inst_20029__$1);

return statearr_20052;
})();
if(cljs.core.truth_(inst_20030)){
var statearr_20053_20085 = state_20043__$1;
(statearr_20053_20085[(1)] = (13));

} else {
var statearr_20054_20086 = state_20043__$1;
(statearr_20054_20086[(1)] = (14));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (2))){
var inst_20006 = (function (){var G__20055 = dctr;
var G__20056 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20055,G__20056) : cljs.core.reset_BANG_.call(null,G__20055,G__20056));
})();
var inst_20007 = (0);
var state_20043__$1 = (function (){var statearr_20057 = state_20043;
(statearr_20057[(7)] = inst_20007);

(statearr_20057[(9)] = inst_20006);

return statearr_20057;
})();
var statearr_20058_20087 = state_20043__$1;
(statearr_20058_20087[(2)] = null);

(statearr_20058_20087[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (11))){
var inst_20007 = (state_20043[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_20043,(10),Object,null,(9));
var inst_20016 = (function (){var G__20059 = inst_20007;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__20059) : chs__$1.call(null,G__20059));
})();
var inst_20017 = (function (){var G__20060 = inst_20007;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__20060) : done.call(null,G__20060));
})();
var inst_20018 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20016,inst_20017);
var state_20043__$1 = state_20043;
var statearr_20061_20088 = state_20043__$1;
(statearr_20061_20088[(2)] = inst_20018);


cljs.core.async.impl.ioc_helpers.process_exception(state_20043__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (9))){
var inst_20007 = (state_20043[(7)]);
var inst_20020 = (state_20043[(2)]);
var inst_20021 = (inst_20007 + (1));
var inst_20007__$1 = inst_20021;
var state_20043__$1 = (function (){var statearr_20062 = state_20043;
(statearr_20062[(7)] = inst_20007__$1);

(statearr_20062[(10)] = inst_20020);

return statearr_20062;
})();
var statearr_20063_20089 = state_20043__$1;
(statearr_20063_20089[(2)] = null);

(statearr_20063_20089[(1)] = (4));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (5))){
var inst_20027 = (state_20043[(2)]);
var state_20043__$1 = (function (){var statearr_20064 = state_20043;
(statearr_20064[(11)] = inst_20027);

return statearr_20064;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20043__$1,(12),dchan);
} else {
if((state_val_20044 === (14))){
var inst_20029 = (state_20043[(8)]);
var inst_20034 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20029);
var state_20043__$1 = state_20043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20043__$1,(16),out,inst_20034);
} else {
if((state_val_20044 === (16))){
var inst_20036 = (state_20043[(2)]);
var state_20043__$1 = (function (){var statearr_20065 = state_20043;
(statearr_20065[(12)] = inst_20036);

return statearr_20065;
})();
var statearr_20066_20090 = state_20043__$1;
(statearr_20066_20090[(2)] = null);

(statearr_20066_20090[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (10))){
var inst_20011 = (state_20043[(2)]);
var inst_20012 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20043__$1 = (function (){var statearr_20067 = state_20043;
(statearr_20067[(13)] = inst_20011);

return statearr_20067;
})();
var statearr_20068_20091 = state_20043__$1;
(statearr_20068_20091[(2)] = inst_20012);


cljs.core.async.impl.ioc_helpers.process_exception(state_20043__$1);

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20044 === (8))){
var inst_20025 = (state_20043[(2)]);
var state_20043__$1 = state_20043;
var statearr_20069_20092 = state_20043__$1;
(statearr_20069_20092[(2)] = inst_20025);

(statearr_20069_20092[(1)] = (5));


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
});})(c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7619__auto__,c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__7620__auto__ = null;
var cljs$core$async$map_$_state_machine__7620__auto____0 = (function (){
var statearr_20073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20073[(0)] = cljs$core$async$map_$_state_machine__7620__auto__);

(statearr_20073[(1)] = (1));

return statearr_20073;
});
var cljs$core$async$map_$_state_machine__7620__auto____1 = (function (state_20043){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20043);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20074){if((e20074 instanceof Object)){
var ex__7623__auto__ = e20074;
var statearr_20075_20093 = state_20043;
(statearr_20075_20093[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20043);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20074;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20094 = state_20043;
state_20043 = G__20094;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__7620__auto__ = function(state_20043){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__7620__auto____1.call(this,state_20043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__7620__auto____0;
cljs$core$async$map_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__7620__auto____1;
return cljs$core$async$map_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7701__auto__ = (function (){var statearr_20076 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20077);

return statearr_20076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20077,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7699__auto___20204 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20204,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20204,out){
return (function (state_20180){
var state_val_20181 = (state_20180[(1)]);
if((state_val_20181 === (7))){
var inst_20159 = (state_20180[(7)]);
var inst_20160 = (state_20180[(8)]);
var inst_20159__$1 = (state_20180[(2)]);
var inst_20160__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20159__$1,(0),null);
var inst_20161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20159__$1,(1),null);
var inst_20162 = (inst_20160__$1 == null);
var state_20180__$1 = (function (){var statearr_20182 = state_20180;
(statearr_20182[(7)] = inst_20159__$1);

(statearr_20182[(9)] = inst_20161);

(statearr_20182[(8)] = inst_20160__$1);

return statearr_20182;
})();
if(cljs.core.truth_(inst_20162)){
var statearr_20183_20205 = state_20180__$1;
(statearr_20183_20205[(1)] = (8));

} else {
var statearr_20184_20206 = state_20180__$1;
(statearr_20184_20206[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (1))){
var inst_20151 = cljs.core.vec(chs);
var inst_20152 = inst_20151;
var state_20180__$1 = (function (){var statearr_20185 = state_20180;
(statearr_20185[(10)] = inst_20152);

return statearr_20185;
})();
var statearr_20186_20207 = state_20180__$1;
(statearr_20186_20207[(2)] = null);

(statearr_20186_20207[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (4))){
var inst_20152 = (state_20180[(10)]);
var state_20180__$1 = state_20180;
return cljs.core.async.ioc_alts_BANG_(state_20180__$1,(7),inst_20152);
} else {
if((state_val_20181 === (6))){
var inst_20176 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
var statearr_20187_20208 = state_20180__$1;
(statearr_20187_20208[(2)] = inst_20176);

(statearr_20187_20208[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (3))){
var inst_20178 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20180__$1,inst_20178);
} else {
if((state_val_20181 === (2))){
var inst_20152 = (state_20180[(10)]);
var inst_20154 = cljs.core.count(inst_20152);
var inst_20155 = (inst_20154 > (0));
var state_20180__$1 = state_20180;
if(cljs.core.truth_(inst_20155)){
var statearr_20189_20209 = state_20180__$1;
(statearr_20189_20209[(1)] = (4));

} else {
var statearr_20190_20210 = state_20180__$1;
(statearr_20190_20210[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (11))){
var inst_20152 = (state_20180[(10)]);
var inst_20169 = (state_20180[(2)]);
var tmp20188 = inst_20152;
var inst_20152__$1 = tmp20188;
var state_20180__$1 = (function (){var statearr_20191 = state_20180;
(statearr_20191[(10)] = inst_20152__$1);

(statearr_20191[(11)] = inst_20169);

return statearr_20191;
})();
var statearr_20192_20211 = state_20180__$1;
(statearr_20192_20211[(2)] = null);

(statearr_20192_20211[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (9))){
var inst_20160 = (state_20180[(8)]);
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20180__$1,(11),out,inst_20160);
} else {
if((state_val_20181 === (5))){
var inst_20174 = cljs.core.async.close_BANG_(out);
var state_20180__$1 = state_20180;
var statearr_20193_20212 = state_20180__$1;
(statearr_20193_20212[(2)] = inst_20174);

(statearr_20193_20212[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (10))){
var inst_20172 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
var statearr_20194_20213 = state_20180__$1;
(statearr_20194_20213[(2)] = inst_20172);

(statearr_20194_20213[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20181 === (8))){
var inst_20152 = (state_20180[(10)]);
var inst_20159 = (state_20180[(7)]);
var inst_20161 = (state_20180[(9)]);
var inst_20160 = (state_20180[(8)]);
var inst_20164 = (function (){var c = inst_20161;
var v = inst_20160;
var vec__20157 = inst_20159;
var cs = inst_20152;
return ((function (c,v,vec__20157,cs,inst_20152,inst_20159,inst_20161,inst_20160,state_val_20181,c__7699__auto___20204,out){
return (function (p1__20095_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20095_SHARP_);
});
;})(c,v,vec__20157,cs,inst_20152,inst_20159,inst_20161,inst_20160,state_val_20181,c__7699__auto___20204,out))
})();
var inst_20165 = cljs.core.filterv(inst_20164,inst_20152);
var inst_20152__$1 = inst_20165;
var state_20180__$1 = (function (){var statearr_20195 = state_20180;
(statearr_20195[(10)] = inst_20152__$1);

return statearr_20195;
})();
var statearr_20196_20214 = state_20180__$1;
(statearr_20196_20214[(2)] = null);

(statearr_20196_20214[(1)] = (2));


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
});})(c__7699__auto___20204,out))
;
return ((function (switch__7619__auto__,c__7699__auto___20204,out){
return (function() {
var cljs$core$async$merge_$_state_machine__7620__auto__ = null;
var cljs$core$async$merge_$_state_machine__7620__auto____0 = (function (){
var statearr_20200 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20200[(0)] = cljs$core$async$merge_$_state_machine__7620__auto__);

(statearr_20200[(1)] = (1));

return statearr_20200;
});
var cljs$core$async$merge_$_state_machine__7620__auto____1 = (function (state_20180){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20180);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20201){if((e20201 instanceof Object)){
var ex__7623__auto__ = e20201;
var statearr_20202_20215 = state_20180;
(statearr_20202_20215[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20180);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20216 = state_20180;
state_20180 = G__20216;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__7620__auto__ = function(state_20180){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__7620__auto____1.call(this,state_20180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__7620__auto____0;
cljs$core$async$merge_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__7620__auto____1;
return cljs$core$async$merge_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20204,out))
})();
var state__7701__auto__ = (function (){var statearr_20203 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20204);

return statearr_20203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20204,out))
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
var c__7699__auto___20312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20312,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20312,out){
return (function (state_20289){
var state_val_20290 = (state_20289[(1)]);
if((state_val_20290 === (7))){
var inst_20271 = (state_20289[(7)]);
var inst_20271__$1 = (state_20289[(2)]);
var inst_20272 = (inst_20271__$1 == null);
var inst_20273 = cljs.core.not(inst_20272);
var state_20289__$1 = (function (){var statearr_20291 = state_20289;
(statearr_20291[(7)] = inst_20271__$1);

return statearr_20291;
})();
if(inst_20273){
var statearr_20292_20313 = state_20289__$1;
(statearr_20292_20313[(1)] = (8));

} else {
var statearr_20293_20314 = state_20289__$1;
(statearr_20293_20314[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (1))){
var inst_20266 = (0);
var state_20289__$1 = (function (){var statearr_20294 = state_20289;
(statearr_20294[(8)] = inst_20266);

return statearr_20294;
})();
var statearr_20295_20315 = state_20289__$1;
(statearr_20295_20315[(2)] = null);

(statearr_20295_20315[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (4))){
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20289__$1,(7),ch);
} else {
if((state_val_20290 === (6))){
var inst_20284 = (state_20289[(2)]);
var state_20289__$1 = state_20289;
var statearr_20296_20316 = state_20289__$1;
(statearr_20296_20316[(2)] = inst_20284);

(statearr_20296_20316[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (3))){
var inst_20286 = (state_20289[(2)]);
var inst_20287 = cljs.core.async.close_BANG_(out);
var state_20289__$1 = (function (){var statearr_20297 = state_20289;
(statearr_20297[(9)] = inst_20286);

return statearr_20297;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20289__$1,inst_20287);
} else {
if((state_val_20290 === (2))){
var inst_20266 = (state_20289[(8)]);
var inst_20268 = (inst_20266 < n);
var state_20289__$1 = state_20289;
if(cljs.core.truth_(inst_20268)){
var statearr_20298_20317 = state_20289__$1;
(statearr_20298_20317[(1)] = (4));

} else {
var statearr_20299_20318 = state_20289__$1;
(statearr_20299_20318[(1)] = (5));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (11))){
var inst_20266 = (state_20289[(8)]);
var inst_20276 = (state_20289[(2)]);
var inst_20277 = (inst_20266 + (1));
var inst_20266__$1 = inst_20277;
var state_20289__$1 = (function (){var statearr_20300 = state_20289;
(statearr_20300[(10)] = inst_20276);

(statearr_20300[(8)] = inst_20266__$1);

return statearr_20300;
})();
var statearr_20301_20319 = state_20289__$1;
(statearr_20301_20319[(2)] = null);

(statearr_20301_20319[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (9))){
var state_20289__$1 = state_20289;
var statearr_20302_20320 = state_20289__$1;
(statearr_20302_20320[(2)] = null);

(statearr_20302_20320[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (5))){
var state_20289__$1 = state_20289;
var statearr_20303_20321 = state_20289__$1;
(statearr_20303_20321[(2)] = null);

(statearr_20303_20321[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (10))){
var inst_20281 = (state_20289[(2)]);
var state_20289__$1 = state_20289;
var statearr_20304_20322 = state_20289__$1;
(statearr_20304_20322[(2)] = inst_20281);

(statearr_20304_20322[(1)] = (6));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20290 === (8))){
var inst_20271 = (state_20289[(7)]);
var state_20289__$1 = state_20289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20289__$1,(11),out,inst_20271);
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
});})(c__7699__auto___20312,out))
;
return ((function (switch__7619__auto__,c__7699__auto___20312,out){
return (function() {
var cljs$core$async$take_$_state_machine__7620__auto__ = null;
var cljs$core$async$take_$_state_machine__7620__auto____0 = (function (){
var statearr_20308 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20308[(0)] = cljs$core$async$take_$_state_machine__7620__auto__);

(statearr_20308[(1)] = (1));

return statearr_20308;
});
var cljs$core$async$take_$_state_machine__7620__auto____1 = (function (state_20289){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20289);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20309){if((e20309 instanceof Object)){
var ex__7623__auto__ = e20309;
var statearr_20310_20323 = state_20289;
(statearr_20310_20323[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20289);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20324 = state_20289;
state_20289 = G__20324;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__7620__auto__ = function(state_20289){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__7620__auto____1.call(this,state_20289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__7620__auto____0;
cljs$core$async$take_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__7620__auto____1;
return cljs$core$async$take_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20312,out))
})();
var state__7701__auto__ = (function (){var statearr_20311 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20312);

return statearr_20311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20312,out))
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
if(typeof cljs.core.async.t20337 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20337 = (function (ch,f,map_LT_,meta20338){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta20338 = meta20338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t20340 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20340 = (function (fn1,_,meta20338,map_LT_,f,ch,meta20341){
this.fn1 = fn1;
this._ = _;
this.meta20338 = meta20338;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta20341 = meta20341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t20340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__20325_SHARP_){
var G__20343 = (((p1__20325_SHARP_ == null))?null:(function (){var G__20344 = p1__20325_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20344) : self__.f.call(null,G__20344));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20343) : f1.call(null,G__20343));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t20340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_20342){
var self__ = this;
var _20342__$1 = this;
return self__.meta20341;
});})(___$1))
;

cljs.core.async.t20340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_20342,meta20341__$1){
var self__ = this;
var _20342__$1 = this;
return (new cljs.core.async.t20340(self__.fn1,self__._,self__.meta20338,self__.map_LT_,self__.f,self__.ch,meta20341__$1));
});})(___$1))
;

cljs.core.async.t20340.cljs$lang$type = true;

cljs.core.async.t20340.cljs$lang$ctorStr = "cljs.core.async/t20340";

cljs.core.async.t20340.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20340");
});})(___$1))
;

cljs.core.async.__GT_t20340 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t20340(fn1__$1,___$2,meta20338__$1,map_LT___$1,f__$1,ch__$1,meta20341){
return (new cljs.core.async.t20340(fn1__$1,___$2,meta20338__$1,map_LT___$1,f__$1,ch__$1,meta20341));
});})(___$1))
;

}

return (new cljs.core.async.t20340(fn1,___$1,self__.meta20338,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4064__auto__ = ret;
if(cljs.core.truth_(and__4064__auto__)){
return !(((function (){var G__20345 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20345) : cljs.core.deref.call(null,G__20345));
})() == null));
} else {
return and__4064__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20346 = (function (){var G__20347 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20347) : cljs.core.deref.call(null,G__20347));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20346) : self__.f.call(null,G__20346));
})());
} else {
return ret;
}
});

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20337.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t20337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20339){
var self__ = this;
var _20339__$1 = this;
return self__.meta20338;
});

cljs.core.async.t20337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20339,meta20338__$1){
var self__ = this;
var _20339__$1 = this;
return (new cljs.core.async.t20337(self__.ch,self__.f,self__.map_LT_,meta20338__$1));
});

cljs.core.async.t20337.cljs$lang$type = true;

cljs.core.async.t20337.cljs$lang$ctorStr = "cljs.core.async/t20337";

cljs.core.async.t20337.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20337");
});

cljs.core.async.__GT_t20337 = (function cljs$core$async$map_LT__$___GT_t20337(ch__$1,f__$1,map_LT___$1,meta20338){
return (new cljs.core.async.t20337(ch__$1,f__$1,map_LT___$1,meta20338));
});

}

return (new cljs.core.async.t20337(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t20352 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20352 = (function (ch,f,map_GT_,meta20353){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta20353 = meta20353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__20355 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20355) : self__.f.call(null,G__20355));
})(),fn1);
});

cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20354){
var self__ = this;
var _20354__$1 = this;
return self__.meta20353;
});

cljs.core.async.t20352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20354,meta20353__$1){
var self__ = this;
var _20354__$1 = this;
return (new cljs.core.async.t20352(self__.ch,self__.f,self__.map_GT_,meta20353__$1));
});

cljs.core.async.t20352.cljs$lang$type = true;

cljs.core.async.t20352.cljs$lang$ctorStr = "cljs.core.async/t20352";

cljs.core.async.t20352.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20352");
});

cljs.core.async.__GT_t20352 = (function cljs$core$async$map_GT__$___GT_t20352(ch__$1,f__$1,map_GT___$1,meta20353){
return (new cljs.core.async.t20352(ch__$1,f__$1,map_GT___$1,meta20353));
});

}

return (new cljs.core.async.t20352(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t20360 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20360 = (function (ch,p,filter_GT_,meta20361){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta20361 = meta20361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__20363 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__20363) : self__.p.call(null,G__20363));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t20360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t20360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20362){
var self__ = this;
var _20362__$1 = this;
return self__.meta20361;
});

cljs.core.async.t20360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20362,meta20361__$1){
var self__ = this;
var _20362__$1 = this;
return (new cljs.core.async.t20360(self__.ch,self__.p,self__.filter_GT_,meta20361__$1));
});

cljs.core.async.t20360.cljs$lang$type = true;

cljs.core.async.t20360.cljs$lang$ctorStr = "cljs.core.async/t20360";

cljs.core.async.t20360.cljs$lang$ctorPrWriter = (function (this__4663__auto__,writer__4664__auto__,opt__4665__auto__){
return cljs.core._write(writer__4664__auto__,"cljs.core.async/t20360");
});

cljs.core.async.__GT_t20360 = (function cljs$core$async$filter_GT__$___GT_t20360(ch__$1,p__$1,filter_GT___$1,meta20361){
return (new cljs.core.async.t20360(ch__$1,p__$1,filter_GT___$1,meta20361));
});

}

return (new cljs.core.async.t20360(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__7699__auto___20451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20451,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20451,out){
return (function (state_20429){
var state_val_20430 = (state_20429[(1)]);
if((state_val_20430 === (7))){
var inst_20425 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20431_20452 = state_20429__$1;
(statearr_20431_20452[(2)] = inst_20425);

(statearr_20431_20452[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (1))){
var state_20429__$1 = state_20429;
var statearr_20432_20453 = state_20429__$1;
(statearr_20432_20453[(2)] = null);

(statearr_20432_20453[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (4))){
var inst_20411 = (state_20429[(7)]);
var inst_20411__$1 = (state_20429[(2)]);
var inst_20412 = (inst_20411__$1 == null);
var state_20429__$1 = (function (){var statearr_20433 = state_20429;
(statearr_20433[(7)] = inst_20411__$1);

return statearr_20433;
})();
if(cljs.core.truth_(inst_20412)){
var statearr_20434_20454 = state_20429__$1;
(statearr_20434_20454[(1)] = (5));

} else {
var statearr_20435_20455 = state_20429__$1;
(statearr_20435_20455[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (6))){
var inst_20411 = (state_20429[(7)]);
var inst_20416 = (function (){var G__20436 = inst_20411;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__20436) : p.call(null,G__20436));
})();
var state_20429__$1 = state_20429;
if(cljs.core.truth_(inst_20416)){
var statearr_20437_20456 = state_20429__$1;
(statearr_20437_20456[(1)] = (8));

} else {
var statearr_20438_20457 = state_20429__$1;
(statearr_20438_20457[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (3))){
var inst_20427 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20429__$1,inst_20427);
} else {
if((state_val_20430 === (2))){
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20429__$1,(4),ch);
} else {
if((state_val_20430 === (11))){
var inst_20419 = (state_20429[(2)]);
var state_20429__$1 = state_20429;
var statearr_20439_20458 = state_20429__$1;
(statearr_20439_20458[(2)] = inst_20419);

(statearr_20439_20458[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (9))){
var state_20429__$1 = state_20429;
var statearr_20440_20459 = state_20429__$1;
(statearr_20440_20459[(2)] = null);

(statearr_20440_20459[(1)] = (10));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (5))){
var inst_20414 = cljs.core.async.close_BANG_(out);
var state_20429__$1 = state_20429;
var statearr_20441_20460 = state_20429__$1;
(statearr_20441_20460[(2)] = inst_20414);

(statearr_20441_20460[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (10))){
var inst_20422 = (state_20429[(2)]);
var state_20429__$1 = (function (){var statearr_20442 = state_20429;
(statearr_20442[(8)] = inst_20422);

return statearr_20442;
})();
var statearr_20443_20461 = state_20429__$1;
(statearr_20443_20461[(2)] = null);

(statearr_20443_20461[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20430 === (8))){
var inst_20411 = (state_20429[(7)]);
var state_20429__$1 = state_20429;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20429__$1,(11),out,inst_20411);
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
});})(c__7699__auto___20451,out))
;
return ((function (switch__7619__auto__,c__7699__auto___20451,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__7620__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__7620__auto____0 = (function (){
var statearr_20447 = [null,null,null,null,null,null,null,null,null];
(statearr_20447[(0)] = cljs$core$async$filter_LT__$_state_machine__7620__auto__);

(statearr_20447[(1)] = (1));

return statearr_20447;
});
var cljs$core$async$filter_LT__$_state_machine__7620__auto____1 = (function (state_20429){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20429);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20448){if((e20448 instanceof Object)){
var ex__7623__auto__ = e20448;
var statearr_20449_20462 = state_20429;
(statearr_20449_20462[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20429);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20463 = state_20429;
state_20429 = G__20463;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__7620__auto__ = function(state_20429){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__7620__auto____1.call(this,state_20429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__7620__auto____0;
cljs$core$async$filter_LT__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__7620__auto____1;
return cljs$core$async$filter_LT__$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20451,out))
})();
var state__7701__auto__ = (function (){var statearr_20450 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20451);

return statearr_20450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20451,out))
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
var c__7699__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto__){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto__){
return (function (state_20633){
var state_val_20634 = (state_20633[(1)]);
if((state_val_20634 === (7))){
var inst_20629 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20635_20677 = state_20633__$1;
(statearr_20635_20677[(2)] = inst_20629);

(statearr_20635_20677[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (20))){
var inst_20599 = (state_20633[(7)]);
var inst_20610 = (state_20633[(2)]);
var inst_20611 = cljs.core.next(inst_20599);
var inst_20585 = inst_20611;
var inst_20586 = null;
var inst_20587 = (0);
var inst_20588 = (0);
var state_20633__$1 = (function (){var statearr_20636 = state_20633;
(statearr_20636[(8)] = inst_20588);

(statearr_20636[(9)] = inst_20610);

(statearr_20636[(10)] = inst_20587);

(statearr_20636[(11)] = inst_20585);

(statearr_20636[(12)] = inst_20586);

return statearr_20636;
})();
var statearr_20637_20678 = state_20633__$1;
(statearr_20637_20678[(2)] = null);

(statearr_20637_20678[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (1))){
var state_20633__$1 = state_20633;
var statearr_20638_20679 = state_20633__$1;
(statearr_20638_20679[(2)] = null);

(statearr_20638_20679[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (4))){
var inst_20574 = (state_20633[(13)]);
var inst_20574__$1 = (state_20633[(2)]);
var inst_20575 = (inst_20574__$1 == null);
var state_20633__$1 = (function (){var statearr_20639 = state_20633;
(statearr_20639[(13)] = inst_20574__$1);

return statearr_20639;
})();
if(cljs.core.truth_(inst_20575)){
var statearr_20640_20680 = state_20633__$1;
(statearr_20640_20680[(1)] = (5));

} else {
var statearr_20641_20681 = state_20633__$1;
(statearr_20641_20681[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (15))){
var state_20633__$1 = state_20633;
var statearr_20645_20682 = state_20633__$1;
(statearr_20645_20682[(2)] = null);

(statearr_20645_20682[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (21))){
var state_20633__$1 = state_20633;
var statearr_20646_20683 = state_20633__$1;
(statearr_20646_20683[(2)] = null);

(statearr_20646_20683[(1)] = (23));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (13))){
var inst_20588 = (state_20633[(8)]);
var inst_20587 = (state_20633[(10)]);
var inst_20585 = (state_20633[(11)]);
var inst_20586 = (state_20633[(12)]);
var inst_20595 = (state_20633[(2)]);
var inst_20596 = (inst_20588 + (1));
var tmp20642 = inst_20587;
var tmp20643 = inst_20585;
var tmp20644 = inst_20586;
var inst_20585__$1 = tmp20643;
var inst_20586__$1 = tmp20644;
var inst_20587__$1 = tmp20642;
var inst_20588__$1 = inst_20596;
var state_20633__$1 = (function (){var statearr_20647 = state_20633;
(statearr_20647[(14)] = inst_20595);

(statearr_20647[(8)] = inst_20588__$1);

(statearr_20647[(10)] = inst_20587__$1);

(statearr_20647[(11)] = inst_20585__$1);

(statearr_20647[(12)] = inst_20586__$1);

return statearr_20647;
})();
var statearr_20648_20684 = state_20633__$1;
(statearr_20648_20684[(2)] = null);

(statearr_20648_20684[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (22))){
var state_20633__$1 = state_20633;
var statearr_20649_20685 = state_20633__$1;
(statearr_20649_20685[(2)] = null);

(statearr_20649_20685[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (6))){
var inst_20574 = (state_20633[(13)]);
var inst_20583 = (function (){var G__20650 = inst_20574;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20650) : f.call(null,G__20650));
})();
var inst_20584 = cljs.core.seq(inst_20583);
var inst_20585 = inst_20584;
var inst_20586 = null;
var inst_20587 = (0);
var inst_20588 = (0);
var state_20633__$1 = (function (){var statearr_20651 = state_20633;
(statearr_20651[(8)] = inst_20588);

(statearr_20651[(10)] = inst_20587);

(statearr_20651[(11)] = inst_20585);

(statearr_20651[(12)] = inst_20586);

return statearr_20651;
})();
var statearr_20652_20686 = state_20633__$1;
(statearr_20652_20686[(2)] = null);

(statearr_20652_20686[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (17))){
var inst_20599 = (state_20633[(7)]);
var inst_20603 = cljs.core.chunk_first(inst_20599);
var inst_20604 = cljs.core.chunk_rest(inst_20599);
var inst_20605 = cljs.core.count(inst_20603);
var inst_20585 = inst_20604;
var inst_20586 = inst_20603;
var inst_20587 = inst_20605;
var inst_20588 = (0);
var state_20633__$1 = (function (){var statearr_20653 = state_20633;
(statearr_20653[(8)] = inst_20588);

(statearr_20653[(10)] = inst_20587);

(statearr_20653[(11)] = inst_20585);

(statearr_20653[(12)] = inst_20586);

return statearr_20653;
})();
var statearr_20654_20687 = state_20633__$1;
(statearr_20654_20687[(2)] = null);

(statearr_20654_20687[(1)] = (8));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (3))){
var inst_20631 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20633__$1,inst_20631);
} else {
if((state_val_20634 === (12))){
var inst_20619 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20655_20688 = state_20633__$1;
(statearr_20655_20688[(2)] = inst_20619);

(statearr_20655_20688[(1)] = (9));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (2))){
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20633__$1,(4),in$);
} else {
if((state_val_20634 === (23))){
var inst_20627 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20656_20689 = state_20633__$1;
(statearr_20656_20689[(2)] = inst_20627);

(statearr_20656_20689[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (19))){
var inst_20614 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20657_20690 = state_20633__$1;
(statearr_20657_20690[(2)] = inst_20614);

(statearr_20657_20690[(1)] = (16));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (11))){
var inst_20599 = (state_20633[(7)]);
var inst_20585 = (state_20633[(11)]);
var inst_20599__$1 = cljs.core.seq(inst_20585);
var state_20633__$1 = (function (){var statearr_20658 = state_20633;
(statearr_20658[(7)] = inst_20599__$1);

return statearr_20658;
})();
if(inst_20599__$1){
var statearr_20659_20691 = state_20633__$1;
(statearr_20659_20691[(1)] = (14));

} else {
var statearr_20660_20692 = state_20633__$1;
(statearr_20660_20692[(1)] = (15));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (9))){
var inst_20621 = (state_20633[(2)]);
var inst_20622 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20633__$1 = (function (){var statearr_20661 = state_20633;
(statearr_20661[(15)] = inst_20621);

return statearr_20661;
})();
if(cljs.core.truth_(inst_20622)){
var statearr_20662_20693 = state_20633__$1;
(statearr_20662_20693[(1)] = (21));

} else {
var statearr_20663_20694 = state_20633__$1;
(statearr_20663_20694[(1)] = (22));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (5))){
var inst_20577 = cljs.core.async.close_BANG_(out);
var state_20633__$1 = state_20633;
var statearr_20664_20695 = state_20633__$1;
(statearr_20664_20695[(2)] = inst_20577);

(statearr_20664_20695[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (14))){
var inst_20599 = (state_20633[(7)]);
var inst_20601 = cljs.core.chunked_seq_QMARK_(inst_20599);
var state_20633__$1 = state_20633;
if(inst_20601){
var statearr_20665_20696 = state_20633__$1;
(statearr_20665_20696[(1)] = (17));

} else {
var statearr_20666_20697 = state_20633__$1;
(statearr_20666_20697[(1)] = (18));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (16))){
var inst_20617 = (state_20633[(2)]);
var state_20633__$1 = state_20633;
var statearr_20667_20698 = state_20633__$1;
(statearr_20667_20698[(2)] = inst_20617);

(statearr_20667_20698[(1)] = (12));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20634 === (10))){
var inst_20588 = (state_20633[(8)]);
var inst_20586 = (state_20633[(12)]);
var inst_20593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_20586,inst_20588);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20633__$1,(13),out,inst_20593);
} else {
if((state_val_20634 === (18))){
var inst_20599 = (state_20633[(7)]);
var inst_20608 = cljs.core.first(inst_20599);
var state_20633__$1 = state_20633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20633__$1,(20),out,inst_20608);
} else {
if((state_val_20634 === (8))){
var inst_20588 = (state_20633[(8)]);
var inst_20587 = (state_20633[(10)]);
var inst_20590 = (inst_20588 < inst_20587);
var inst_20591 = inst_20590;
var state_20633__$1 = state_20633;
if(cljs.core.truth_(inst_20591)){
var statearr_20668_20699 = state_20633__$1;
(statearr_20668_20699[(1)] = (10));

} else {
var statearr_20669_20700 = state_20633__$1;
(statearr_20669_20700[(1)] = (11));

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
});})(c__7699__auto__))
;
return ((function (switch__7619__auto__,c__7699__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____0 = (function (){
var statearr_20673 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20673[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__);

(statearr_20673[(1)] = (1));

return statearr_20673;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____1 = (function (state_20633){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20633);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20674){if((e20674 instanceof Object)){
var ex__7623__auto__ = e20674;
var statearr_20675_20701 = state_20633;
(statearr_20675_20701[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20633);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20702 = state_20633;
state_20633 = G__20702;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__ = function(state_20633){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____1.call(this,state_20633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7620__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto__))
})();
var state__7701__auto__ = (function (){var statearr_20676 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto__);

return statearr_20676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto__))
);

return c__7699__auto__;
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
var c__7699__auto___20807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20807,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20807,out){
return (function (state_20782){
var state_val_20783 = (state_20782[(1)]);
if((state_val_20783 === (7))){
var inst_20777 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
var statearr_20784_20808 = state_20782__$1;
(statearr_20784_20808[(2)] = inst_20777);

(statearr_20784_20808[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (1))){
var inst_20759 = null;
var state_20782__$1 = (function (){var statearr_20785 = state_20782;
(statearr_20785[(7)] = inst_20759);

return statearr_20785;
})();
var statearr_20786_20809 = state_20782__$1;
(statearr_20786_20809[(2)] = null);

(statearr_20786_20809[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (4))){
var inst_20762 = (state_20782[(8)]);
var inst_20762__$1 = (state_20782[(2)]);
var inst_20763 = (inst_20762__$1 == null);
var inst_20764 = cljs.core.not(inst_20763);
var state_20782__$1 = (function (){var statearr_20787 = state_20782;
(statearr_20787[(8)] = inst_20762__$1);

return statearr_20787;
})();
if(inst_20764){
var statearr_20788_20810 = state_20782__$1;
(statearr_20788_20810[(1)] = (5));

} else {
var statearr_20789_20811 = state_20782__$1;
(statearr_20789_20811[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (6))){
var state_20782__$1 = state_20782;
var statearr_20790_20812 = state_20782__$1;
(statearr_20790_20812[(2)] = null);

(statearr_20790_20812[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (3))){
var inst_20779 = (state_20782[(2)]);
var inst_20780 = cljs.core.async.close_BANG_(out);
var state_20782__$1 = (function (){var statearr_20791 = state_20782;
(statearr_20791[(9)] = inst_20779);

return statearr_20791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20782__$1,inst_20780);
} else {
if((state_val_20783 === (2))){
var state_20782__$1 = state_20782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20782__$1,(4),ch);
} else {
if((state_val_20783 === (11))){
var inst_20762 = (state_20782[(8)]);
var inst_20771 = (state_20782[(2)]);
var inst_20759 = inst_20762;
var state_20782__$1 = (function (){var statearr_20792 = state_20782;
(statearr_20792[(7)] = inst_20759);

(statearr_20792[(10)] = inst_20771);

return statearr_20792;
})();
var statearr_20793_20813 = state_20782__$1;
(statearr_20793_20813[(2)] = null);

(statearr_20793_20813[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (9))){
var inst_20762 = (state_20782[(8)]);
var state_20782__$1 = state_20782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20782__$1,(11),out,inst_20762);
} else {
if((state_val_20783 === (5))){
var inst_20762 = (state_20782[(8)]);
var inst_20759 = (state_20782[(7)]);
var inst_20766 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20762,inst_20759);
var state_20782__$1 = state_20782;
if(inst_20766){
var statearr_20795_20814 = state_20782__$1;
(statearr_20795_20814[(1)] = (8));

} else {
var statearr_20796_20815 = state_20782__$1;
(statearr_20796_20815[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (10))){
var inst_20774 = (state_20782[(2)]);
var state_20782__$1 = state_20782;
var statearr_20797_20816 = state_20782__$1;
(statearr_20797_20816[(2)] = inst_20774);

(statearr_20797_20816[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20783 === (8))){
var inst_20759 = (state_20782[(7)]);
var tmp20794 = inst_20759;
var inst_20759__$1 = tmp20794;
var state_20782__$1 = (function (){var statearr_20798 = state_20782;
(statearr_20798[(7)] = inst_20759__$1);

return statearr_20798;
})();
var statearr_20799_20817 = state_20782__$1;
(statearr_20799_20817[(2)] = null);

(statearr_20799_20817[(1)] = (2));


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
});})(c__7699__auto___20807,out))
;
return ((function (switch__7619__auto__,c__7699__auto___20807,out){
return (function() {
var cljs$core$async$unique_$_state_machine__7620__auto__ = null;
var cljs$core$async$unique_$_state_machine__7620__auto____0 = (function (){
var statearr_20803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20803[(0)] = cljs$core$async$unique_$_state_machine__7620__auto__);

(statearr_20803[(1)] = (1));

return statearr_20803;
});
var cljs$core$async$unique_$_state_machine__7620__auto____1 = (function (state_20782){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20782);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20804){if((e20804 instanceof Object)){
var ex__7623__auto__ = e20804;
var statearr_20805_20818 = state_20782;
(statearr_20805_20818[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20782);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20819 = state_20782;
state_20782 = G__20819;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__7620__auto__ = function(state_20782){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__7620__auto____1.call(this,state_20782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__7620__auto____0;
cljs$core$async$unique_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__7620__auto____1;
return cljs$core$async$unique_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20807,out))
})();
var state__7701__auto__ = (function (){var statearr_20806 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20807);

return statearr_20806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20807,out))
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
var c__7699__auto___20957 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___20957,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___20957,out){
return (function (state_20927){
var state_val_20928 = (state_20927[(1)]);
if((state_val_20928 === (7))){
var inst_20923 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20929_20958 = state_20927__$1;
(statearr_20929_20958[(2)] = inst_20923);

(statearr_20929_20958[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (1))){
var inst_20890 = (new Array(n));
var inst_20891 = inst_20890;
var inst_20892 = (0);
var state_20927__$1 = (function (){var statearr_20930 = state_20927;
(statearr_20930[(7)] = inst_20892);

(statearr_20930[(8)] = inst_20891);

return statearr_20930;
})();
var statearr_20931_20959 = state_20927__$1;
(statearr_20931_20959[(2)] = null);

(statearr_20931_20959[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (4))){
var inst_20895 = (state_20927[(9)]);
var inst_20895__$1 = (state_20927[(2)]);
var inst_20896 = (inst_20895__$1 == null);
var inst_20897 = cljs.core.not(inst_20896);
var state_20927__$1 = (function (){var statearr_20932 = state_20927;
(statearr_20932[(9)] = inst_20895__$1);

return statearr_20932;
})();
if(inst_20897){
var statearr_20933_20960 = state_20927__$1;
(statearr_20933_20960[(1)] = (5));

} else {
var statearr_20934_20961 = state_20927__$1;
(statearr_20934_20961[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (15))){
var inst_20917 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20935_20962 = state_20927__$1;
(statearr_20935_20962[(2)] = inst_20917);

(statearr_20935_20962[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (13))){
var state_20927__$1 = state_20927;
var statearr_20936_20963 = state_20927__$1;
(statearr_20936_20963[(2)] = null);

(statearr_20936_20963[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (6))){
var inst_20892 = (state_20927[(7)]);
var inst_20913 = (inst_20892 > (0));
var state_20927__$1 = state_20927;
if(cljs.core.truth_(inst_20913)){
var statearr_20937_20964 = state_20927__$1;
(statearr_20937_20964[(1)] = (12));

} else {
var statearr_20938_20965 = state_20927__$1;
(statearr_20938_20965[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (3))){
var inst_20925 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20927__$1,inst_20925);
} else {
if((state_val_20928 === (12))){
var inst_20891 = (state_20927[(8)]);
var inst_20915 = cljs.core.vec(inst_20891);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20927__$1,(15),out,inst_20915);
} else {
if((state_val_20928 === (2))){
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20927__$1,(4),ch);
} else {
if((state_val_20928 === (11))){
var inst_20907 = (state_20927[(2)]);
var inst_20908 = (new Array(n));
var inst_20891 = inst_20908;
var inst_20892 = (0);
var state_20927__$1 = (function (){var statearr_20939 = state_20927;
(statearr_20939[(7)] = inst_20892);

(statearr_20939[(10)] = inst_20907);

(statearr_20939[(8)] = inst_20891);

return statearr_20939;
})();
var statearr_20940_20966 = state_20927__$1;
(statearr_20940_20966[(2)] = null);

(statearr_20940_20966[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (9))){
var inst_20891 = (state_20927[(8)]);
var inst_20905 = cljs.core.vec(inst_20891);
var state_20927__$1 = state_20927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20927__$1,(11),out,inst_20905);
} else {
if((state_val_20928 === (5))){
var inst_20900 = (state_20927[(11)]);
var inst_20895 = (state_20927[(9)]);
var inst_20892 = (state_20927[(7)]);
var inst_20891 = (state_20927[(8)]);
var inst_20899 = (inst_20891[inst_20892] = inst_20895);
var inst_20900__$1 = (inst_20892 + (1));
var inst_20901 = (inst_20900__$1 < n);
var state_20927__$1 = (function (){var statearr_20941 = state_20927;
(statearr_20941[(11)] = inst_20900__$1);

(statearr_20941[(12)] = inst_20899);

return statearr_20941;
})();
if(cljs.core.truth_(inst_20901)){
var statearr_20942_20967 = state_20927__$1;
(statearr_20942_20967[(1)] = (8));

} else {
var statearr_20943_20968 = state_20927__$1;
(statearr_20943_20968[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (14))){
var inst_20920 = (state_20927[(2)]);
var inst_20921 = cljs.core.async.close_BANG_(out);
var state_20927__$1 = (function (){var statearr_20945 = state_20927;
(statearr_20945[(13)] = inst_20920);

return statearr_20945;
})();
var statearr_20946_20969 = state_20927__$1;
(statearr_20946_20969[(2)] = inst_20921);

(statearr_20946_20969[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (10))){
var inst_20911 = (state_20927[(2)]);
var state_20927__$1 = state_20927;
var statearr_20947_20970 = state_20927__$1;
(statearr_20947_20970[(2)] = inst_20911);

(statearr_20947_20970[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_20928 === (8))){
var inst_20900 = (state_20927[(11)]);
var inst_20891 = (state_20927[(8)]);
var tmp20944 = inst_20891;
var inst_20891__$1 = tmp20944;
var inst_20892 = inst_20900;
var state_20927__$1 = (function (){var statearr_20948 = state_20927;
(statearr_20948[(7)] = inst_20892);

(statearr_20948[(8)] = inst_20891__$1);

return statearr_20948;
})();
var statearr_20949_20971 = state_20927__$1;
(statearr_20949_20971[(2)] = null);

(statearr_20949_20971[(1)] = (2));


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
});})(c__7699__auto___20957,out))
;
return ((function (switch__7619__auto__,c__7699__auto___20957,out){
return (function() {
var cljs$core$async$partition_$_state_machine__7620__auto__ = null;
var cljs$core$async$partition_$_state_machine__7620__auto____0 = (function (){
var statearr_20953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20953[(0)] = cljs$core$async$partition_$_state_machine__7620__auto__);

(statearr_20953[(1)] = (1));

return statearr_20953;
});
var cljs$core$async$partition_$_state_machine__7620__auto____1 = (function (state_20927){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_20927);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e20954){if((e20954 instanceof Object)){
var ex__7623__auto__ = e20954;
var statearr_20955_20972 = state_20927;
(statearr_20955_20972[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20927);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e20954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__20973 = state_20927;
state_20927 = G__20973;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__7620__auto__ = function(state_20927){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__7620__auto____1.call(this,state_20927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__7620__auto____0;
cljs$core$async$partition_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__7620__auto____1;
return cljs$core$async$partition_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___20957,out))
})();
var state__7701__auto__ = (function (){var statearr_20956 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_20956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___20957);

return statearr_20956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___20957,out))
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
var c__7699__auto___21121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__7699__auto___21121,out){
return (function (){
var f__7700__auto__ = (function (){var switch__7619__auto__ = ((function (c__7699__auto___21121,out){
return (function (state_21090){
var state_val_21091 = (state_21090[(1)]);
if((state_val_21091 === (7))){
var inst_21086 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21092_21122 = state_21090__$1;
(statearr_21092_21122[(2)] = inst_21086);

(statearr_21092_21122[(1)] = (3));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (1))){
var inst_21049 = [];
var inst_21050 = inst_21049;
var inst_21051 = cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing;
var state_21090__$1 = (function (){var statearr_21093 = state_21090;
(statearr_21093[(7)] = inst_21050);

(statearr_21093[(8)] = inst_21051);

return statearr_21093;
})();
var statearr_21094_21123 = state_21090__$1;
(statearr_21094_21123[(2)] = null);

(statearr_21094_21123[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (4))){
var inst_21054 = (state_21090[(9)]);
var inst_21054__$1 = (state_21090[(2)]);
var inst_21055 = (inst_21054__$1 == null);
var inst_21056 = cljs.core.not(inst_21055);
var state_21090__$1 = (function (){var statearr_21095 = state_21090;
(statearr_21095[(9)] = inst_21054__$1);

return statearr_21095;
})();
if(inst_21056){
var statearr_21096_21124 = state_21090__$1;
(statearr_21096_21124[(1)] = (5));

} else {
var statearr_21097_21125 = state_21090__$1;
(statearr_21097_21125[(1)] = (6));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (15))){
var inst_21080 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21098_21126 = state_21090__$1;
(statearr_21098_21126[(2)] = inst_21080);

(statearr_21098_21126[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (13))){
var state_21090__$1 = state_21090;
var statearr_21099_21127 = state_21090__$1;
(statearr_21099_21127[(2)] = null);

(statearr_21099_21127[(1)] = (14));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (6))){
var inst_21050 = (state_21090[(7)]);
var inst_21075 = inst_21050.length;
var inst_21076 = (inst_21075 > (0));
var state_21090__$1 = state_21090;
if(cljs.core.truth_(inst_21076)){
var statearr_21100_21128 = state_21090__$1;
(statearr_21100_21128[(1)] = (12));

} else {
var statearr_21101_21129 = state_21090__$1;
(statearr_21101_21129[(1)] = (13));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (3))){
var inst_21088 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21090__$1,inst_21088);
} else {
if((state_val_21091 === (12))){
var inst_21050 = (state_21090[(7)]);
var inst_21078 = cljs.core.vec(inst_21050);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21090__$1,(15),out,inst_21078);
} else {
if((state_val_21091 === (2))){
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21090__$1,(4),ch);
} else {
if((state_val_21091 === (11))){
var inst_21058 = (state_21090[(10)]);
var inst_21054 = (state_21090[(9)]);
var inst_21068 = (state_21090[(2)]);
var inst_21069 = [];
var inst_21070 = inst_21069.push(inst_21054);
var inst_21050 = inst_21069;
var inst_21051 = inst_21058;
var state_21090__$1 = (function (){var statearr_21102 = state_21090;
(statearr_21102[(11)] = inst_21068);

(statearr_21102[(7)] = inst_21050);

(statearr_21102[(12)] = inst_21070);

(statearr_21102[(8)] = inst_21051);

return statearr_21102;
})();
var statearr_21103_21130 = state_21090__$1;
(statearr_21103_21130[(2)] = null);

(statearr_21103_21130[(1)] = (2));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (9))){
var inst_21050 = (state_21090[(7)]);
var inst_21066 = cljs.core.vec(inst_21050);
var state_21090__$1 = state_21090;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21090__$1,(11),out,inst_21066);
} else {
if((state_val_21091 === (5))){
var inst_21058 = (state_21090[(10)]);
var inst_21054 = (state_21090[(9)]);
var inst_21051 = (state_21090[(8)]);
var inst_21058__$1 = (function (){var G__21104 = inst_21054;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__21104) : f.call(null,G__21104));
})();
var inst_21059 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21058__$1,inst_21051);
var inst_21060 = cljs.core.keyword_identical_QMARK_(inst_21051,cljs.core.constant$keyword$_COLON_cljs$core$async_SLASH_nothing);
var inst_21061 = (inst_21059) || (inst_21060);
var state_21090__$1 = (function (){var statearr_21105 = state_21090;
(statearr_21105[(10)] = inst_21058__$1);

return statearr_21105;
})();
if(cljs.core.truth_(inst_21061)){
var statearr_21106_21131 = state_21090__$1;
(statearr_21106_21131[(1)] = (8));

} else {
var statearr_21107_21132 = state_21090__$1;
(statearr_21107_21132[(1)] = (9));

}

return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (14))){
var inst_21083 = (state_21090[(2)]);
var inst_21084 = cljs.core.async.close_BANG_(out);
var state_21090__$1 = (function (){var statearr_21109 = state_21090;
(statearr_21109[(13)] = inst_21083);

return statearr_21109;
})();
var statearr_21110_21133 = state_21090__$1;
(statearr_21110_21133[(2)] = inst_21084);

(statearr_21110_21133[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (10))){
var inst_21073 = (state_21090[(2)]);
var state_21090__$1 = state_21090;
var statearr_21111_21134 = state_21090__$1;
(statearr_21111_21134[(2)] = inst_21073);

(statearr_21111_21134[(1)] = (7));


return cljs.core.constant$keyword$_COLON_recur;
} else {
if((state_val_21091 === (8))){
var inst_21058 = (state_21090[(10)]);
var inst_21054 = (state_21090[(9)]);
var inst_21050 = (state_21090[(7)]);
var inst_21063 = inst_21050.push(inst_21054);
var tmp21108 = inst_21050;
var inst_21050__$1 = tmp21108;
var inst_21051 = inst_21058;
var state_21090__$1 = (function (){var statearr_21112 = state_21090;
(statearr_21112[(14)] = inst_21063);

(statearr_21112[(7)] = inst_21050__$1);

(statearr_21112[(8)] = inst_21051);

return statearr_21112;
})();
var statearr_21113_21135 = state_21090__$1;
(statearr_21113_21135[(2)] = null);

(statearr_21113_21135[(1)] = (2));


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
});})(c__7699__auto___21121,out))
;
return ((function (switch__7619__auto__,c__7699__auto___21121,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__7620__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__7620__auto____0 = (function (){
var statearr_21117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21117[(0)] = cljs$core$async$partition_by_$_state_machine__7620__auto__);

(statearr_21117[(1)] = (1));

return statearr_21117;
});
var cljs$core$async$partition_by_$_state_machine__7620__auto____1 = (function (state_21090){
while(true){
var ret_value__7621__auto__ = (function (){try{while(true){
var result__7622__auto__ = switch__7619__auto__(state_21090);
if(cljs.core.keyword_identical_QMARK_(result__7622__auto__,cljs.core.constant$keyword$_COLON_recur)){
continue;
} else {
return result__7622__auto__;
}
break;
}
}catch (e21118){if((e21118 instanceof Object)){
var ex__7623__auto__ = e21118;
var statearr_21119_21136 = state_21090;
(statearr_21119_21136[(5)] = ex__7623__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21090);

return cljs.core.constant$keyword$_COLON_recur;
} else {
throw e21118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__7621__auto__,cljs.core.constant$keyword$_COLON_recur)){
var G__21137 = state_21090;
state_21090 = G__21137;
continue;
} else {
return ret_value__7621__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__7620__auto__ = function(state_21090){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__7620__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__7620__auto____1.call(this,state_21090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__7620__auto____0;
cljs$core$async$partition_by_$_state_machine__7620__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__7620__auto____1;
return cljs$core$async$partition_by_$_state_machine__7620__auto__;
})()
;})(switch__7619__auto__,c__7699__auto___21121,out))
})();
var state__7701__auto__ = (function (){var statearr_21120 = (function (){return (f__7700__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7700__auto__.cljs$core$IFn$_invoke$arity$0() : f__7700__auto__.call(null));
})();
(statearr_21120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7699__auto___21121);

return statearr_21120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7701__auto__);
});})(c__7699__auto___21121,out))
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
