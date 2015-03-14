// Compiled by ClojureScript 0.0-3058 {}
goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events.EventTarget');
goog.require('goog.events');

clojure.browser.event.IEventType = (function (){var obj10967 = {};
return obj10967;
})();

clojure.browser.event.event_types = (function clojure$browser$event$event_types(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$event$IEventType$event_types$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$event$IEventType$event_types$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.event.event_types[(function (){var G__10971 = x__4720__auto__;
return goog.typeOf(G__10971);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.event.event_types["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IEventType.event-types",this$);
}
}
})().call(null,this$);
}
});

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$ = true;

goog.events.EventTarget.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__10972){
var vec__10973 = p__10972;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10973,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
if(typeof Element !== 'undefined'){
Element.prototype.clojure$browser$event$IEventType$ = true;

Element.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__10974){
var vec__10975 = p__10974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10975,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.events.EventType)], 0))));
});
} else {
}
clojure.browser.event.listen = (function() {
var clojure$browser$event$listen = null;
var clojure$browser$event$listen__3 = (function (src,type,fn){
return clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$listen__4 = (function (src,type,fn,capture_QMARK_){
var G__10984 = src;
var G__10985 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__10986 = fn;
var G__10987 = capture_QMARK_;
return goog.events.listen(G__10984,G__10985,G__10986,G__10987);
});
clojure$browser$event$listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen__3;
clojure$browser$event$listen.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen__4;
return clojure$browser$event$listen;
})()
;
clojure.browser.event.listen_once = (function() {
var clojure$browser$event$listen_once = null;
var clojure$browser$event$listen_once__3 = (function (src,type,fn){
return clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$listen_once__4 = (function (src,type,fn,capture_QMARK_){
var G__10996 = src;
var G__10997 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__10998 = fn;
var G__10999 = capture_QMARK_;
return goog.events.listenOnce(G__10996,G__10997,G__10998,G__10999);
});
clojure$browser$event$listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$listen_once__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$listen_once__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$listen_once__3;
clojure$browser$event$listen_once.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$listen_once__4;
return clojure$browser$event$listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var clojure$browser$event$unlisten = null;
var clojure$browser$event$unlisten__3 = (function (src,type,fn){
return clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$4(src,type,fn,false);
});
var clojure$browser$event$unlisten__4 = (function (src,type,fn,capture_QMARK_){
var G__11008 = src;
var G__11009 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.browser.event.event_types(src),type,type);
var G__11010 = fn;
var G__11011 = capture_QMARK_;
return goog.events.unlisten(G__11008,G__11009,G__11010,G__11011);
});
clojure$browser$event$unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$event$unlisten__3.call(this,src,type,fn);
case 4:
return clojure$browser$event$unlisten__4.call(this,src,type,fn,capture_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$3 = clojure$browser$event$unlisten__3;
clojure$browser$event$unlisten.cljs$core$IFn$_invoke$arity$4 = clojure$browser$event$unlisten__4;
return clojure$browser$event$unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function clojure$browser$event$unlisten_by_key(key){
var G__11013 = key;
return goog.events.unlistenByKey(G__11013);
});
clojure.browser.event.dispatch_event = (function clojure$browser$event$dispatch_event(src,event){
var G__11016 = src;
var G__11017 = event;
return goog.events.dispatchEvent(G__11016,G__11017);
});
clojure.browser.event.expose = (function clojure$browser$event$expose(e){
var G__11019 = e;
return goog.events.expose(G__11019);
});
clojure.browser.event.fire_listeners = (function clojure$browser$event$fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function clojure$browser$event$total_listener_count(){
return goog.events.getTotalListenerCount();
});
clojure.browser.event.get_listener = (function clojure$browser$event$get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function clojure$browser$event$all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function clojure$browser$event$unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function clojure$browser$event$has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function clojure$browser$event$remove_all(opt_obj,opt_type,opt_capt){
return null;
});
