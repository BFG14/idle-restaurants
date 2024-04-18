"use strict";this.default_GameCenterUi=this.default_GameCenterUi||{};(function(_){var window=this;
try{
_.q("Wt6vjf");
var xz=function(a){this.ya=_.x(a,0,xz.Db)};_.H(xz,_.C);xz.prototype.Sa=function(){return _.Jc(_.Fk(this,1))};xz.prototype.tc=function(a){_.al(this,1,a)};xz.Db="f.bo";var yz=function(){_.Tn.call(this)};_.H(yz,_.Tn);yz.prototype.qb=function(){this.Tr=!1;zz(this);_.Tn.prototype.qb.call(this)};yz.prototype.j=function(){Az(this);if(this.Qk)return Bz(this),!1;if(!this.Us)return Cz(this),!0;this.dispatchEvent("p");if(!this.Wp)return Cz(this),!0;this.Qo?(this.dispatchEvent("r"),Cz(this)):Bz(this);return!1};
var Dz=function(a){var b=new _.Rt(a.zy);null!=a.Lq&&b.j.set("authuser",a.Lq);return b},Bz=function(a){a.Qk=!0;var b=Dz(a),c="rt=r&f_uid="+encodeURIComponent(String(a.Wp));_.rp(b,(0,_.E)(a.o,a),"POST",c)};
yz.prototype.o=function(a){a=a.target;Az(this);if(_.zp(a)){this.Pn=0;if(this.Qo)this.Qk=!1,this.dispatchEvent("r");else if(this.Us)this.dispatchEvent("s");else{try{var b=_.Ap(a),c=JSON.parse(b.substring(b.indexOf("\n")));var d=(new xz(c[0])).Sa()}catch(e){_.Ve(e);this.dispatchEvent("t");Ez(this);return}this.Qk=!1;d?this.dispatchEvent("q"):this.dispatchEvent("r")}Cz(this)}else{if(0!=_.yp(a)){d="";try{d=_.Ap(a)}catch(e){}a=Error("Nb`"+_.yp(a)+"`"+Dz(this).toString()+"`"+String(a.ma)+"`"+d);_.Ve(a);
this.dispatchEvent("t")}Ez(this)}};var Az=function(a){var b=_.wz.get("https:"==window.location.protocol?"SAPISID":"APISID","");a.Qo=""!==a.Nn&&""===b;a.Us=a.Nn!=b;a.Nn=b},Ez=function(a){a.Qo||(a.Qk=!0,a.Pn=Math.min(2*(a.Pn||3),60),Cz(a))},Cz=function(a){if(a.Tr||a.Qk)zz(a),a.Bp=window.setTimeout((0,_.E)(a.j,a),1E3*Math.max(3,a.Pn))},zz=function(a){a.Bp&&(window.clearTimeout(a.Bp),a.Bp=0)};_.k=yz.prototype;_.k.Pn=0;_.k.Bp=0;_.k.Nn=null;_.k.Qo=!1;_.k.Us=!1;_.k.Lq=null;_.k.zy="/_/idv/";_.k.Wp="";
_.k.Tr=!1;_.k.Qk=!1;_.de(_.po,yz);_.Ka().Pd(function(a){var b=new yz;_.Ss(a,_.po,b);if(_.Mt()){a=_.Mt();var c=_.Sd("WZsZ1e").string(null);b.Wp=a;void 0!==c&&(b.Nn=c);a=_.Nt();_.Xh(a,"/")||(a="/"+a);b.zy=a+"/idv/";a=_.Lt();(a=_.Yk(a,3,"0"))&&_.Sd("gGcLoe").o(!1)&&(b.Lq=a);b.Tr=!0;b.j()}});
_.r();
_.q("hhhU8");
var WH;new _.rj(function(a){WH=a});_.AE();_.me(function(){WH()});

_.r();
_.q("FCpbqb");
_.Ka().Pd(function(a){_.ue(_.Js,a)});
_.r();
_.q("WhJNk");
var hia=function(){var a=_.wz;if(!_.n.navigator.cookieEnabled)return!1;if(a.j.cookie)return!0;a.set("TESTCOOKIESENABLED","1",{bs:60});if("1"!==a.get("TESTCOOKIESENABLED"))return!1;a.remove("TESTCOOKIESENABLED");return!0},CH=new Date(1262304E6),DH=new Date(12779424E5),iia=new Date(129384E7),EH=function(a,b){b?a.push(Math.round((b-CH.getTime())/6E4)):a.push(null)},FH=function(a,b,c){a.push(b.getTimezoneOffset()/15+56);a:{var d=b.getTimezoneOffset();var e=c.getTimezoneOffset();if(d!=e)for(b=b.getTime()/
6E4,c=c.getTime()/6E4;b<=c;){var f=(b>>1)+(c>>1),g=6E4*f,h=(new Date(g+3E4)).getTimezoneOffset();if((new Date(g-3E4)).getTimezoneOffset()!=h){d=g;break a}if(h==d)b=f+1;else if(h==e)c=f-1;else break}d=null}EH(a,d)};var GH=function(a){_.Q.call(this,a.na);this.j=a.service.window;var b=void 0===b?!1:b;if(hia()&&(void 0===_.wz.get("OTZ")||b)){a=_.wz;b=a.set;var c=[],d=new Date;EH(c,d.getTime());c.push(d.getTimezoneOffset()/15+56);FH(c,CH,DH);FH(c,DH,iia);b.call(a,"OTZ",c.join("_"),{bs:2592E3,path:"/",domain:void 0,oI:"https:"===this.j.get().location.protocol})}};_.H(GH,_.Q);GH.ta=_.Q.ta;GH.ha=function(){return{service:{window:_.dA}}};_.R(_.Js,GH);
_.r();
}catch(e){_._DumpException(e)}
}).call(this,this.default_GameCenterUi);
// Google Inc.
