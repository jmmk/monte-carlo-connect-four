// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4126__auto__ = cljs.core.constant$keyword$_COLON_ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.constant$keyword$_COLON_name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__11026_11030 = cljs.core.seq(cljs.core.constant$keyword$_COLON_forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__11027_11031 = null;
var count__11028_11032 = (0);
var i__11029_11033 = (0);
while(true){
if((i__11029_11033 < count__11028_11032)){
var f_11034 = chunk__11027_11031.cljs$core$IIndexed$_nth$arity$2(null,i__11029_11033);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11034], 0));

var G__11035 = seq__11026_11030;
var G__11036 = chunk__11027_11031;
var G__11037 = count__11028_11032;
var G__11038 = (i__11029_11033 + (1));
seq__11026_11030 = G__11035;
chunk__11027_11031 = G__11036;
count__11028_11032 = G__11037;
i__11029_11033 = G__11038;
continue;
} else {
var temp__4126__auto___11039 = cljs.core.seq(seq__11026_11030);
if(temp__4126__auto___11039){
var seq__11026_11040__$1 = temp__4126__auto___11039;
if(cljs.core.chunked_seq_QMARK_(seq__11026_11040__$1)){
var c__4863__auto___11041 = cljs.core.chunk_first(seq__11026_11040__$1);
var G__11042 = cljs.core.chunk_rest(seq__11026_11040__$1);
var G__11043 = c__4863__auto___11041;
var G__11044 = cljs.core.count(c__4863__auto___11041);
var G__11045 = (0);
seq__11026_11030 = G__11042;
chunk__11027_11031 = G__11043;
count__11028_11032 = G__11044;
i__11029_11033 = G__11045;
continue;
} else {
var f_11046 = cljs.core.first(seq__11026_11040__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11046], 0));

var G__11047 = cljs.core.next(seq__11026_11040__$1);
var G__11048 = null;
var G__11049 = (0);
var G__11050 = (0);
seq__11026_11030 = G__11047;
chunk__11027_11031 = G__11048;
count__11028_11032 = G__11049;
i__11029_11033 = G__11050;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_arglists.cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4076__auto__ = cljs.core.constant$keyword$_COLON_macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4076__auto__)){
return or__4076__auto__;
} else {
return cljs.core.constant$keyword$_COLON_repl_special_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$_COLON_arglists.cljs$core$IFn$_invoke$arity$1(m)], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.second(cljs.core.constant$keyword$_COLON_arglists.cljs$core$IFn$_invoke$arity$1(m))], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_special_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$_COLON_doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.constant$keyword$_COLON_url)){
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.constant$keyword$_COLON_url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.constant$keyword$_COLON_name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.constant$keyword$_COLON_repl_special_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.constant$keyword$_COLON_doc.cljs$core$IFn$_invoke$arity$1(m)], 0));
}
});
