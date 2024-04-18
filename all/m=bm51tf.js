"use strict";this.default_GameCenterUi=this.default_GameCenterUi||{};(function(_){var window=this;
try{
_.q("bm51tf");
var Nla=!!(_.eh[0]>>16&1);var Ola=function(a,b,c,d,e){this.v=a;this.O=b;this.N=c;this.U=d;this.T=e;this.j=0;this.o=tN(this)},Pla=function(a){var b={};_.Da(a.Hr(),function(e){b[e]=!0});var c=a.Br(),d=a.Er();return new Ola(a.Dr(),1E3*c.j(),a.vr(),1E3*d.j(),b)},tN=function(a){return Math.random()*Math.min(a.O*Math.pow(a.N,a.j),a.U)},uN=function(a,b){return a.j>=a.v?!1:null!=b?!!a.T[b]:!0};var vN=function(a){_.Q.call(this,a.na);this.v=a.service.Qs;this.N=a.service.metadata;a=a.service.xF;this.o=a.v.bind(a)};_.H(vN,_.Q);vN.ta=_.Q.ta;vN.ha=function(){return{service:{Qs:_.rN,metadata:_.nN,xF:_.fN}}};vN.prototype.j=function(a,b){if(1!=this.N.getType(a.Cb()))return _.to(a);var c=this.v.j;(c=c?Pla(c):null)&&uN(c)?(b=wN(this,a,b,c),a=new _.so(a,b,2)):a=_.to(a);return a};
var wN=function(a,b,c,d){return c.then(function(e){return e},function(e){if(Nla)if(e instanceof _.Qe){if(!e.status||!uN(d,_.Vk(e.status,1)))throw e;}else{if("function"==typeof _.Pu&&e instanceof _.Pu&&103!==e.o&&7!==e.o)throw e;}else if(!e.status||!uN(d,_.Vk(e.status,1)))throw e;return _.He(d.o).then(function(){if(!uN(d))throw Error("zc`"+d.v);++d.j;d.o=tN(d);b=_.Om(b,_.Jm,d.j);return wN(a,b,a.o(b),d)})},a)};_.R(_.gJ,vN);
_.r();
}catch(e){_._DumpException(e)}
}).call(this,this.default_GameCenterUi);
// Google Inc.
