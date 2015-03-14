// Compiled by ClojureScript 0.0-3058 {}
goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.net.WebSocket');
goog.require('goog.net.EventType');
goog.require('goog.json');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.XhrIo');
goog.require('clojure.browser.event');
goog.require('goog.net.xpc.CrossPageChannel');
clojure.browser.net._STAR_timeout_STAR_ = (10000);
clojure.browser.net.event_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11053){
var vec__11054 = p__11053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));

clojure.browser.net.IConnection = (function (){var obj11056 = {};
return obj11056;
})();

clojure.browser.net.connect = (function() {
var clojure$browser$net$connect = null;
var clojure$browser$net$connect__1 = (function (this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.connect[(function (){var G__11066 = x__4720__auto__;
return goog.typeOf(G__11066);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var clojure$browser$net$connect__2 = (function (this$,opt1){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$2(this$,opt1);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.connect[(function (){var G__11068 = x__4720__auto__;
return goog.typeOf(G__11068);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var clojure$browser$net$connect__3 = (function (this$,opt1,opt2){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$3(this$,opt1,opt2);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.connect[(function (){var G__11070 = x__4720__auto__;
return goog.typeOf(G__11070);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var clojure$browser$net$connect__4 = (function (this$,opt1,opt2,opt3){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$connect$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$connect$arity$4(this$,opt1,opt2,opt3);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.connect[(function (){var G__11072 = x__4720__auto__;
return goog.typeOf(G__11072);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.connect["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
clojure$browser$net$connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case 1:
return clojure$browser$net$connect__1.call(this,this$);
case 2:
return clojure$browser$net$connect__2.call(this,this$,opt1);
case 3:
return clojure$browser$net$connect__3.call(this,this$,opt1,opt2);
case 4:
return clojure$browser$net$connect__4.call(this,this$,opt1,opt2,opt3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$connect__1;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$connect__2;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$connect__3;
clojure$browser$net$connect.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$connect__4;
return clojure$browser$net$connect;
})()
;

clojure.browser.net.transmit = (function() {
var clojure$browser$net$transmit = null;
var clojure$browser$net$transmit__2 = (function (this$,opt){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$2;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$2(this$,opt);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.transmit[(function (){var G__11084 = x__4720__auto__;
return goog.typeOf(G__11084);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var clojure$browser$net$transmit__3 = (function (this$,opt,opt2){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$3(this$,opt,opt2);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.transmit[(function (){var G__11086 = x__4720__auto__;
return goog.typeOf(G__11086);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var clojure$browser$net$transmit__4 = (function (this$,opt,opt2,opt3){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$4(this$,opt,opt2,opt3);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.transmit[(function (){var G__11088 = x__4720__auto__;
return goog.typeOf(G__11088);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var clojure$browser$net$transmit__5 = (function (this$,opt,opt2,opt3,opt4){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$5;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$5(this$,opt,opt2,opt3,opt4);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.transmit[(function (){var G__11090 = x__4720__auto__;
return goog.typeOf(G__11090);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var clojure$browser$net$transmit__6 = (function (this$,opt,opt2,opt3,opt4,opt5){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$transmit$arity$6;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$transmit$arity$6(this$,opt,opt2,opt3,opt4,opt5);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.transmit[(function (){var G__11092 = x__4720__auto__;
return goog.typeOf(G__11092);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.transmit["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
clojure$browser$net$transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case 2:
return clojure$browser$net$transmit__2.call(this,this$,opt);
case 3:
return clojure$browser$net$transmit__3.call(this,this$,opt,opt2);
case 4:
return clojure$browser$net$transmit__4.call(this,this$,opt,opt2,opt3);
case 5:
return clojure$browser$net$transmit__5.call(this,this$,opt,opt2,opt3,opt4);
case 6:
return clojure$browser$net$transmit__6.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$transmit__2;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$transmit__3;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$transmit__4;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$5 = clojure$browser$net$transmit__5;
clojure$browser$net$transmit.cljs$core$IFn$_invoke$arity$6 = clojure$browser$net$transmit__6;
return clojure$browser$net$transmit;
})()
;

clojure.browser.net.close = (function clojure$browser$net$close(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IConnection$close$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IConnection$close$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.close[(function (){var G__11096 = x__4720__auto__;
return goog.typeOf(G__11096);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.close["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IConnection.close",this$);
}
}
})().call(null,this$);
}
});

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$ = true;

goog.net.XhrIo.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11097){
var vec__11098 = p__11097;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.EventType)], 0))));
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,uri){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,uri,method){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$4 = (function (this$,uri,method,content){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$5 = (function (this$,uri,method,content,headers){
var this$__$1 = this;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(this$__$1,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});

goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit$arity$6 = (function (this$,uri,method,content,headers,timeout){
var this$__$1 = this;
this$__$1.setTimeoutInterval(timeout);

return this$__$1.send(uri,method,content,headers);
});
clojure.browser.net.xpc_config_fields = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11099){
var vec__11100 = p__11099;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11100,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.xpc.CfgFields)));
/**
 * Returns an XhrIo connection
 */
clojure.browser.net.xhr_connection = (function clojure$browser$net$xhr_connection(){
return (new goog.net.XhrIo());
});

clojure.browser.net.ICrossPageChannel = (function (){var obj11102 = {};
return obj11102;
})();

clojure.browser.net.register_service = (function() {
var clojure$browser$net$register_service = null;
var clojure$browser$net$register_service__3 = (function (this$,service_name,fn){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$3(this$,service_name,fn);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.register_service[(function (){var G__11108 = x__4720__auto__;
return goog.typeOf(G__11108);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var clojure$browser$net$register_service__4 = (function (this$,service_name,fn,encode_json_QMARK_){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$ICrossPageChannel$register_service$arity$4(this$,service_name,fn,encode_json_QMARK_);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.register_service[(function (){var G__11110 = x__4720__auto__;
return goog.typeOf(G__11110);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.register_service["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
clojure$browser$net$register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case 3:
return clojure$browser$net$register_service__3.call(this,this$,service_name,fn);
case 4:
return clojure$browser$net$register_service__4.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$register_service.cljs$core$IFn$_invoke$arity$3 = clojure$browser$net$register_service__3;
clojure$browser$net$register_service.cljs$core$IFn$_invoke$arity$4 = clojure$browser$net$register_service__4;
return clojure$browser$net$register_service;
})()
;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$1 = (function (this$){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(this$__$1,null);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,on_connect_fn){
var this$__$1 = this;
return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,on_connect_fn,config_iframe_fn){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$4(this$__$1,on_connect_fn,config_iframe_fn,document.body);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect$arity$4 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
var this$__$1 = this;
this$__$1.createPeerIframe(iframe_parent,config_iframe_fn);

return this$__$1.connect(on_connect_fn);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit$arity$3 = (function (this$,service_name,payload){
var this$__$1 = this;
return this$__$1.send(cljs.core.name(service_name),payload);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close();
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$3 = (function (this$,service_name,fn){
var this$__$1 = this;
return clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$4(this$__$1,service_name,fn,false);
});

goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service$arity$4 = (function (this$,service_name,fn,encode_json_QMARK_){
var this$__$1 = this;
return this$__$1.registerService(cljs.core.name(service_name),fn,encode_json_QMARK_);
});
/**
 * When passed with a config hash-map, returns a parent
 * CrossPageChannel object. Keys in the config hash map are downcased
 * versions of the goog.net.xpc.CfgFields enum keys,
 * e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
 * hash.
 * 
 * When passed with no args, creates a child CrossPageChannel object,
 * and the config is automatically taken from the URL param 'xpc', as
 * per the CrossPageChannel API.
 */
clojure.browser.net.xpc_connection = (function() {
var clojure$browser$net$xpc_connection = null;
var clojure$browser$net$xpc_connection__0 = (function (){
var temp__4126__auto__ = (new goog.Uri(window.location.href)).getParameterValue("xpc");
if(cljs.core.truth_(temp__4126__auto__)){
var config = temp__4126__auto__;
return (new goog.net.xpc.CrossPageChannel((function (){var G__11117 = config;
return goog.json.parse(G__11117);
})()));
} else {
return null;
}
});
var clojure$browser$net$xpc_connection__1 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__11118){
var vec__11119 = p__11118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(1),null);
var temp__4124__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clojure.browser.net.xpc_config_fields,k);
if(cljs.core.truth_(temp__4124__auto__)){
var field = temp__4124__auto__;
var G__11120 = sum;
(G__11120[field] = v);

return G__11120;
} else {
return sum;
}
}),(function (){var obj11122 = {};
return obj11122;
})(),config)));
});
clojure$browser$net$xpc_connection = function(config){
switch(arguments.length){
case 0:
return clojure$browser$net$xpc_connection__0.call(this);
case 1:
return clojure$browser$net$xpc_connection__1.call(this,config);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$xpc_connection.cljs$core$IFn$_invoke$arity$0 = clojure$browser$net$xpc_connection__0;
clojure$browser$net$xpc_connection.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$xpc_connection__1;
return clojure$browser$net$xpc_connection;
})()
;

clojure.browser.net.IWebSocket = (function (){var obj11124 = {};
return obj11124;
})();

clojure.browser.net.open_QMARK_ = (function clojure$browser$net$open_QMARK_(this$){
if((function (){var and__4064__auto__ = this$;
if(and__4064__auto__){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1;
} else {
return and__4064__auto__;
}
})()){
return this$.clojure$browser$net$IWebSocket$open_QMARK_$arity$1(this$);
} else {
var x__4720__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4076__auto__ = (clojure.browser.net.open_QMARK_[(function (){var G__11128 = x__4720__auto__;
return goog.typeOf(G__11128);
})()]);
if(or__4076__auto__){
return or__4076__auto__;
} else {
var or__4076__auto____$1 = (clojure.browser.net.open_QMARK_["_"]);
if(or__4076__auto____$1){
return or__4076__auto____$1;
} else {
throw cljs.core.missing_protocol("IWebSocket.open?",this$);
}
}
})().call(null,this$);
}
});

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$ = true;

goog.net.WebSocket.prototype.clojure$browser$event$IEventType$event_types$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11129){
var vec__11130 = p__11129;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11130,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v], null);
});})(this$__$1))
,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(goog.net.WebSocket.EventType)], 0))));
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$2 = (function (this$,url){
var this$__$1 = this;
return clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(this$__$1,url,null);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$connect$arity$3 = (function (this$,url,protocol){
var this$__$1 = this;
return this$__$1.open(url,protocol);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$transmit$arity$2 = (function (this$,message){
var this$__$1 = this;
return this$__$1.send(message);
});

goog.net.WebSocket.prototype.clojure$browser$net$IConnection$close$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.close(cljs.core.List.EMPTY);
});

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$ = true;

goog.net.WebSocket.prototype.clojure$browser$net$IWebSocket$open_QMARK_$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.isOpen(cljs.core.List.EMPTY);
});
clojure.browser.net.websocket_connection = (function() {
var clojure$browser$net$websocket_connection = null;
var clojure$browser$net$websocket_connection__0 = (function (){
return clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$2(null,null);
});
var clojure$browser$net$websocket_connection__1 = (function (auto_reconnect_QMARK_){
return clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$2(auto_reconnect_QMARK_,null);
});
var clojure$browser$net$websocket_connection__2 = (function (auto_reconnect_QMARK_,next_reconnect_fn){
return (new goog.net.WebSocket(auto_reconnect_QMARK_,next_reconnect_fn));
});
clojure$browser$net$websocket_connection = function(auto_reconnect_QMARK_,next_reconnect_fn){
switch(arguments.length){
case 0:
return clojure$browser$net$websocket_connection__0.call(this);
case 1:
return clojure$browser$net$websocket_connection__1.call(this,auto_reconnect_QMARK_);
case 2:
return clojure$browser$net$websocket_connection__2.call(this,auto_reconnect_QMARK_,next_reconnect_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$0 = clojure$browser$net$websocket_connection__0;
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$1 = clojure$browser$net$websocket_connection__1;
clojure$browser$net$websocket_connection.cljs$core$IFn$_invoke$arity$2 = clojure$browser$net$websocket_connection__2;
return clojure$browser$net$websocket_connection;
})()
;
