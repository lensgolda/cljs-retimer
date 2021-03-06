// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8634__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8635__i = 0, G__8635__a = new Array(arguments.length -  0);
while (G__8635__i < G__8635__a.length) {G__8635__a[G__8635__i] = arguments[G__8635__i + 0]; ++G__8635__i;}
  args = new cljs.core.IndexedSeq(G__8635__a,0,null);
} 
return G__8634__delegate.call(this,args);};
G__8634.cljs$lang$maxFixedArity = 0;
G__8634.cljs$lang$applyTo = (function (arglist__8636){
var args = cljs.core.seq(arglist__8636);
return G__8634__delegate(args);
});
G__8634.cljs$core$IFn$_invoke$arity$variadic = G__8634__delegate;
return G__8634;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8637__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8638__i = 0, G__8638__a = new Array(arguments.length -  0);
while (G__8638__i < G__8638__a.length) {G__8638__a[G__8638__i] = arguments[G__8638__i + 0]; ++G__8638__i;}
  args = new cljs.core.IndexedSeq(G__8638__a,0,null);
} 
return G__8637__delegate.call(this,args);};
G__8637.cljs$lang$maxFixedArity = 0;
G__8637.cljs$lang$applyTo = (function (arglist__8639){
var args = cljs.core.seq(arglist__8639);
return G__8637__delegate(args);
});
G__8637.cljs$core$IFn$_invoke$arity$variadic = G__8637__delegate;
return G__8637;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
