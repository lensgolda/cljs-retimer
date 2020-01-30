// Compiled by ClojureScript 1.10.339 {}
goog.provide('retimer.core');
goog.require('cljs.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
retimer.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0),new cljs.core.Keyword(null,"paused","paused",-1710376127),true], null));
retimer.core.get_start_value = (function retimer$core$get_start_value(){
var input = document.getElementById("start-input");
var v = parseInt(input.value);
if(cljs.core.not.call(null,isNaN(v))){
return v;
} else {
alert("Not a number");

return input.value = "0";
}
});
retimer.core.timer_component = (function retimer$core$timer_component(){
return (function (){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,retimer.core.state),new cljs.core.Keyword(null,"paused","paused",-1710376127)))){
} else {
var timerID_9163 = setTimeout((function (){
return cljs.core.swap_BANG_.call(null,retimer.core.state,cljs.core.update,new cljs.core.Keyword(null,"seconds","seconds",-445266194),cljs.core.dec);
}),(1000));
if((cljs.core.get.call(null,cljs.core.deref.call(null,retimer.core.state),new cljs.core.Keyword(null,"seconds","seconds",-445266194)) <= (0))){
clearTimeout(timerID_9163);

alert("The End");

cljs.core.reset_BANG_.call(null,retimer.core.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paused","paused",-1710376127),true,new cljs.core.Keyword(null,"seconds","seconds",-445266194),(0)], null));
} else {
}
}

var start = cljs.core.get.call(null,cljs.core.deref.call(null,retimer.core.state),new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var add_zero = ((function (start){
return (function (v){
if((v < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return v;
}
});})(start))
;
var sec = add_zero.call(null,Math.floor(cljs.core.rem.call(null,start,(60))));
var min = add_zero.call(null,cljs.core.rem.call(null,Math.floor((start / (60))),(60)));
var hour = add_zero.call(null,cljs.core.rem.call(null,Math.floor((start / (3600))),(24)));
var day = add_zero.call(null,Math.floor((start / (86400))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"timer-comp"], null),"Seconds Elapsed: ",["D: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)," H: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour)," M: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," S: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sec)].join('')], null);
});
});
retimer.core.submit_button = (function retimer$core$submit_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"submit-btn",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,retimer.core.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paused","paused",-1710376127),true,new cljs.core.Keyword(null,"seconds","seconds",-445266194),retimer.core.get_start_value.call(null)], null));
})], null),"Set"], null);
});
retimer.core.start_button = (function retimer$core$start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"start-btn",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,retimer.core.state,cljs.core.update,new cljs.core.Keyword(null,"paused","paused",-1710376127),cljs.core.not);
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"paused","paused",-1710376127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,retimer.core.state)))?"Start":"Stop")], null);
});
retimer.core.start_input = (function retimer$core$start_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"input-form"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"start-input",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"start-input"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retimer.core.submit_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retimer.core.start_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retimer.core.timer_component], null)], null)], null);
});
retimer.core.app = document.getElementById("app");
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [retimer.core.start_input], null),retimer.core.app);

//# sourceMappingURL=core.js.map
