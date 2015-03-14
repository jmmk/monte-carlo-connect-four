// Compiled by ClojureScript 0.0-3058 {}
goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('cljs.repl');
goog.require('clojure.browser.event');
goog.require('clojure.browser.net');
goog.require('goog.labs.userAgent.browser');
goog.require('goog.dom');
clojure.browser.repl.xpc_connection = (function (){var G__10933 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10933) : cljs.core.atom.call(null,G__10933));
})();
clojure.browser.repl.repl_print = (function clojure$browser$repl$repl_print(data){
var temp__4124__auto__ = (function (){var G__10935 = clojure.browser.repl.xpc_connection;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10935) : cljs.core.deref.call(null,G__10935));
})();
if(cljs.core.truth_(temp__4124__auto__)){
var conn = temp__4124__auto__;
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$_COLON_print,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)));
} else {
return null;
}
});
clojure.browser.repl.get_ua_product = (function clojure$browser$repl$get_ua_product(){
if(cljs.core.truth_((function (){return goog.labs.userAgent.browser.isSafari();
})())){
return cljs.core.constant$keyword$_COLON_safari;
} else {
if(cljs.core.truth_((function (){return goog.labs.userAgent.browser.isChrome();
})())){
return cljs.core.constant$keyword$_COLON_chrome;
} else {
if(cljs.core.truth_((function (){return goog.labs.userAgent.browser.isFirefox();
})())){
return cljs.core.constant$keyword$_COLON_firefox;
} else {
if(cljs.core.truth_((function (){return goog.labs.userAgent.browser.isIE();
})())){
return cljs.core.constant$keyword$_COLON_ie;
} else {
return null;
}
}
}
}
});
/**
 * Process a single block of JavaScript received from the server
 */
clojure.browser.repl.evaluate_javascript = (function clojure$browser$repl$evaluate_javascript(conn,block){
var result = (function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$_COLON_status,cljs.core.constant$keyword$_COLON_success,cljs.core.constant$keyword$_COLON_value,[cljs.core.str(eval(block))].join('')], null);
}catch (e10937){var e = e10937;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$_COLON_status,cljs.core.constant$keyword$_COLON_exception,cljs.core.constant$keyword$_COLON_ua_product,clojure.browser.repl.get_ua_product(),cljs.core.constant$keyword$_COLON_value,[cljs.core.str(e)].join(''),cljs.core.constant$keyword$_COLON_stacktrace,(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.")], null);
}})();
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([result], 0));
});
clojure.browser.repl.send_result = (function clojure$browser$repl$send_result(connection,url,data){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(connection,url,"POST",data,null,(0));
});
/**
 * Send data to be printed in the REPL. If there is an error, try again
 * up to 10 times.
 */
clojure.browser.repl.send_print = (function() {
var clojure$browser$repl$send_print = null;
var clojure$browser$repl$send_print__2 = (function (url,data){
return clojure$browser$repl$send_print.cljs$core$IFn$_invoke$arity$3(url,data,(0));
});
var clojure$browser$repl$send_print__3 = (function (url,data,n){
var conn = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.constant$keyword$_COLON_error,((function (conn){
return (function (_){
if((n < (10))){
return clojure$browser$repl$send_print.cljs$core$IFn$_invoke$arity$3(url,data,(n + (1)));
} else {
return console.log([cljs.core.str("Could not send "),cljs.core.str(data),cljs.core.str(" after "),cljs.core.str(n),cljs.core.str(" attempts.")].join(''));
}
});})(conn))
);

return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$6(conn,url,"POST",data,null,(0));
});
clojure$browser$repl$send_print = function(url,data,n){
switch(arguments.length){
case 2:
return clojure$browser$repl$send_print__2.call(this,url,data);
case 3:
return clojure$browser$repl$send_print__3.call(this,url,data,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$browser$repl$send_print.cljs$core$IFn$_invoke$arity$2 = clojure$browser$repl$send_print__2;
clojure$browser$repl$send_print.cljs$core$IFn$_invoke$arity$3 = clojure$browser$repl$send_print__3;
return clojure$browser$repl$send_print;
})()
;
clojure.browser.repl.order = (function (){var G__10944 = (0);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10944) : cljs.core.atom.call(null,G__10944));
})();
clojure.browser.repl.wrap_message = (function clojure$browser$repl$wrap_message(t,data){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$_COLON_type,t,cljs.core.constant$keyword$_COLON_content,data,cljs.core.constant$keyword$_COLON_order,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.order,cljs.core.inc)], null)], 0));
});
/**
 * Start the REPL server connection.
 */
clojure.browser.repl.start_evaluator = (function clojure$browser$repl$start_evaluator(url){
var temp__4124__auto__ = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__4124__auto__)){
var repl_connection = temp__4124__auto__;
var connection = clojure.browser.net.xhr_connection();
clojure.browser.event.listen.cljs$core$IFn$_invoke$arity$3(connection,cljs.core.constant$keyword$_COLON_success,((function (connection,repl_connection,temp__4124__auto__){
return (function (e){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$_COLON_evaluate_javascript,e.currentTarget.getResponseText(cljs.core.List.EMPTY));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$_COLON_send_result,((function (connection,repl_connection,temp__4124__auto__){
return (function (data){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$_COLON_result,data));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$_COLON_print,((function (connection,repl_connection,temp__4124__auto__){
return (function (data){
return clojure.browser.repl.send_print.cljs$core$IFn$_invoke$arity$2(url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$_COLON_print,data));
});})(connection,repl_connection,temp__4124__auto__))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$2(repl_connection,cljs.core.constantly(null));

var G__10948 = ((function (connection,repl_connection,temp__4124__auto__){
return (function (){
return clojure.browser.repl.send_result(connection,url,clojure.browser.repl.wrap_message(cljs.core.constant$keyword$_COLON_ready,"ready"));
});})(connection,repl_connection,temp__4124__auto__))
;
var G__10949 = (50);
return setTimeout(G__10948,G__10949);
} else {
var G__10950 = "No 'xpc' param provided to child iframe.";
return alert(G__10950);
}
});
/**
 * Connects to a REPL server from an HTML document. After the
 * connection is made, the REPL will evaluate forms in the context of
 * the document that called this function.
 */
clojure.browser.repl.connect = (function clojure$browser$repl$connect(repl_server_url){
var repl_connection = clojure.browser.net.xpc_connection.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$_COLON_peer_uri,repl_server_url], null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(clojure.browser.repl.xpc_connection,cljs.core.constantly(repl_connection));

clojure.browser.net.register_service.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$_COLON_evaluate_javascript,((function (repl_connection){
return (function (js){
return clojure.browser.net.transmit.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constant$keyword$_COLON_send_result,clojure.browser.repl.evaluate_javascript(repl_connection,js));
});})(repl_connection))
);

clojure.browser.net.connect.cljs$core$IFn$_invoke$arity$3(repl_connection,cljs.core.constantly(null),((function (repl_connection){
return (function (iframe){
return iframe.style.display = "none";
});})(repl_connection))
);

if(cljs.core.truth_(COMPILED)){
} else {
goog.require__ = goog.require;

goog.isProvided_ = ((function (repl_connection){
return (function (name){
return false;
});})(repl_connection))
;

goog.writeScriptTag_ = ((function (repl_connection){
return (function (src,opt_sourceText){
return document.body.appendChild((function (){var script = document.createElement("script");
var script__$1 = (function (){var G__10956 = script;
(G__10956["type"] = "text/javascript");

return G__10956;
})();
var script__$2 = (((opt_sourceText == null))?(function (){var G__10957 = script__$1;
(G__10957["src"] = src);

return G__10957;
})():(function (){var G__10958 = script__$1;
var G__10959_10961 = G__10958;
var G__10960_10962 = opt_sourceText;
goog.dom.setTextContext(G__10959_10961,G__10960_10962);

return G__10958;
})());
return script__$2;
})());
});})(repl_connection))
;

goog.require = ((function (repl_connection){
return (function (src,reload){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = true;
} else {
}

var reload_QMARK_ = (function (){var or__4076__auto__ = reload;
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return goog.cljsReloadAll__;
}
})();
if(cljs.core.truth_(reload_QMARK_)){
var path_10963 = (goog.dependencies_.nameToPath[src]);
delete goog.dependencies_.visited[path_10963];

delete goog.dependencies_.written[[cljs.core.str(goog.basePath),cljs.core.str(path_10963)].join('')];
} else {
}

var ret = goog.require__(src);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
goog.cljsReloadAll_ = false;
} else {
}

return ret;
});})(repl_connection))
;
}

return repl_connection;
});
