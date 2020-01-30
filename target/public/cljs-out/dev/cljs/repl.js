// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18777){
var map__18778 = p__18777;
var map__18778__$1 = ((((!((map__18778 == null)))?(((((map__18778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18778):map__18778);
var m = map__18778__$1;
var n = cljs.core.get.call(null,map__18778__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18778__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18780_18802 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18781_18803 = null;
var count__18782_18804 = (0);
var i__18783_18805 = (0);
while(true){
if((i__18783_18805 < count__18782_18804)){
var f_18806 = cljs.core._nth.call(null,chunk__18781_18803,i__18783_18805);
cljs.core.println.call(null,"  ",f_18806);


var G__18807 = seq__18780_18802;
var G__18808 = chunk__18781_18803;
var G__18809 = count__18782_18804;
var G__18810 = (i__18783_18805 + (1));
seq__18780_18802 = G__18807;
chunk__18781_18803 = G__18808;
count__18782_18804 = G__18809;
i__18783_18805 = G__18810;
continue;
} else {
var temp__5735__auto___18811 = cljs.core.seq.call(null,seq__18780_18802);
if(temp__5735__auto___18811){
var seq__18780_18812__$1 = temp__5735__auto___18811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18780_18812__$1)){
var c__4351__auto___18813 = cljs.core.chunk_first.call(null,seq__18780_18812__$1);
var G__18814 = cljs.core.chunk_rest.call(null,seq__18780_18812__$1);
var G__18815 = c__4351__auto___18813;
var G__18816 = cljs.core.count.call(null,c__4351__auto___18813);
var G__18817 = (0);
seq__18780_18802 = G__18814;
chunk__18781_18803 = G__18815;
count__18782_18804 = G__18816;
i__18783_18805 = G__18817;
continue;
} else {
var f_18818 = cljs.core.first.call(null,seq__18780_18812__$1);
cljs.core.println.call(null,"  ",f_18818);


var G__18819 = cljs.core.next.call(null,seq__18780_18812__$1);
var G__18820 = null;
var G__18821 = (0);
var G__18822 = (0);
seq__18780_18802 = G__18819;
chunk__18781_18803 = G__18820;
count__18782_18804 = G__18821;
i__18783_18805 = G__18822;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18823 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18823);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18823)))?cljs.core.second.call(null,arglists_18823):arglists_18823));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18784_18824 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18785_18825 = null;
var count__18786_18826 = (0);
var i__18787_18827 = (0);
while(true){
if((i__18787_18827 < count__18786_18826)){
var vec__18788_18828 = cljs.core._nth.call(null,chunk__18785_18825,i__18787_18827);
var name_18829 = cljs.core.nth.call(null,vec__18788_18828,(0),null);
var map__18791_18830 = cljs.core.nth.call(null,vec__18788_18828,(1),null);
var map__18791_18831__$1 = ((((!((map__18791_18830 == null)))?(((((map__18791_18830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18791_18830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18791_18830):map__18791_18830);
var doc_18832 = cljs.core.get.call(null,map__18791_18831__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18833 = cljs.core.get.call(null,map__18791_18831__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18829);

cljs.core.println.call(null," ",arglists_18833);

if(cljs.core.truth_(doc_18832)){
cljs.core.println.call(null," ",doc_18832);
} else {
}


var G__18834 = seq__18784_18824;
var G__18835 = chunk__18785_18825;
var G__18836 = count__18786_18826;
var G__18837 = (i__18787_18827 + (1));
seq__18784_18824 = G__18834;
chunk__18785_18825 = G__18835;
count__18786_18826 = G__18836;
i__18787_18827 = G__18837;
continue;
} else {
var temp__5735__auto___18838 = cljs.core.seq.call(null,seq__18784_18824);
if(temp__5735__auto___18838){
var seq__18784_18839__$1 = temp__5735__auto___18838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18784_18839__$1)){
var c__4351__auto___18840 = cljs.core.chunk_first.call(null,seq__18784_18839__$1);
var G__18841 = cljs.core.chunk_rest.call(null,seq__18784_18839__$1);
var G__18842 = c__4351__auto___18840;
var G__18843 = cljs.core.count.call(null,c__4351__auto___18840);
var G__18844 = (0);
seq__18784_18824 = G__18841;
chunk__18785_18825 = G__18842;
count__18786_18826 = G__18843;
i__18787_18827 = G__18844;
continue;
} else {
var vec__18793_18845 = cljs.core.first.call(null,seq__18784_18839__$1);
var name_18846 = cljs.core.nth.call(null,vec__18793_18845,(0),null);
var map__18796_18847 = cljs.core.nth.call(null,vec__18793_18845,(1),null);
var map__18796_18848__$1 = ((((!((map__18796_18847 == null)))?(((((map__18796_18847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18796_18847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18796_18847):map__18796_18847);
var doc_18849 = cljs.core.get.call(null,map__18796_18848__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18850 = cljs.core.get.call(null,map__18796_18848__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18846);

cljs.core.println.call(null," ",arglists_18850);

if(cljs.core.truth_(doc_18849)){
cljs.core.println.call(null," ",doc_18849);
} else {
}


var G__18851 = cljs.core.next.call(null,seq__18784_18839__$1);
var G__18852 = null;
var G__18853 = (0);
var G__18854 = (0);
seq__18784_18824 = G__18851;
chunk__18785_18825 = G__18852;
count__18786_18826 = G__18853;
i__18787_18827 = G__18854;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__18798 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18799 = null;
var count__18800 = (0);
var i__18801 = (0);
while(true){
if((i__18801 < count__18800)){
var role = cljs.core._nth.call(null,chunk__18799,i__18801);
var temp__5735__auto___18855__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18855__$1)){
var spec_18856 = temp__5735__auto___18855__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18856));
} else {
}


var G__18857 = seq__18798;
var G__18858 = chunk__18799;
var G__18859 = count__18800;
var G__18860 = (i__18801 + (1));
seq__18798 = G__18857;
chunk__18799 = G__18858;
count__18800 = G__18859;
i__18801 = G__18860;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18798);
if(temp__5735__auto____$1){
var seq__18798__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18798__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18798__$1);
var G__18861 = cljs.core.chunk_rest.call(null,seq__18798__$1);
var G__18862 = c__4351__auto__;
var G__18863 = cljs.core.count.call(null,c__4351__auto__);
var G__18864 = (0);
seq__18798 = G__18861;
chunk__18799 = G__18862;
count__18800 = G__18863;
i__18801 = G__18864;
continue;
} else {
var role = cljs.core.first.call(null,seq__18798__$1);
var temp__5735__auto___18865__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18865__$2)){
var spec_18866 = temp__5735__auto___18865__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18866));
} else {
}


var G__18867 = cljs.core.next.call(null,seq__18798__$1);
var G__18868 = null;
var G__18869 = (0);
var G__18870 = (0);
seq__18798 = G__18867;
chunk__18799 = G__18868;
count__18800 = G__18869;
i__18801 = G__18870;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
