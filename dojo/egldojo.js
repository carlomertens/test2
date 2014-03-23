(function(_1,_2){
var _3=function(){
},_4=function(it){
for(var p in it){
return 0;
}
return 1;
},_5={}.toString,_6=function(it){
return _5.call(it)=="[object Function]";
},_7=function(it){
return _5.call(it)=="[object String]";
},_8=function(it){
return _5.call(it)=="[object Array]";
},_9=function(_a,_b){
if(_a){
for(var i=0;_a[i];){
_b(_a[i++]);
}
}
},_c=function(_d,_e){
for(var p in _e){
_d[p]=_e[p];
}
return _d;
},_f=function(_10,_11){
return _c(new Error(_10),{src:"dojoLoader",info:_11});
},_12=1,uid=function(){
return "_"+_12++;
},req=function(_13,_14,_15){
return _16(_13,_14,_15,0,req);
},_17=this,doc=_17.document,_18=doc&&doc.createElement("DiV"),has=req.has=function(_19){
return _6(_1a[_19])?(_1a[_19]=_1a[_19](_17,doc,_18)):_1a[_19];
},_1a=has.cache=_2.hasCache;
has.add=function(_1b,_1c,now,_1d){
(_1a[_1b]===undefined||_1d)&&(_1a[_1b]=_1c);
return now&&has(_1b);
};
0&&has.add("host-node",_1.has&&"host-node" in _1.has?_1.has["host-node"]:(typeof process=="object"&&process.versions&&process.versions.node&&process.versions.v8));
if(0){
require("./_base/configNode.js").config(_2);
_2.loaderPatch.nodeRequire=require;
}
0&&has.add("host-rhino",_1.has&&"host-rhino" in _1.has?_1.has["host-rhino"]:(typeof load=="function"&&(typeof Packages=="function"||typeof Packages=="object")));
if(0){
for(var _1e=_1.baseUrl||".",arg,_1f=this.arguments,i=0;i<_1f.length;){
arg=(_1f[i++]+"").split("=");
if(arg[0]=="baseUrl"){
_1e=arg[1];
break;
}
}
load(_1e+"/_base/configRhino.js");
rhinoDojoConfig(_2,_1e,_1f);
}
for(var p in _1.has){
has.add(p,_1.has[p],0,1);
}
var _20=1,_21=2,_22=3,_23=4,_24=5;
if(0){
_20="requested";
_21="arrived";
_22="not-a-module";
_23="executing";
_24="executed";
}
var _25=0,_26="sync",xd="xd",_27=[],_28=0,_29=_3,_2a=_3,_2b;
if(1){
req.isXdUrl=_3;
req.initSyncLoader=function(_2c,_2d,_2e){
if(!_28){
_28=_2c;
_29=_2d;
_2a=_2e;
}
return {sync:_26,requested:_20,arrived:_21,nonmodule:_22,executing:_23,executed:_24,syncExecStack:_27,modules:_2f,execQ:_30,getModule:_31,injectModule:_32,setArrived:_33,signal:_34,finishExec:_35,execModule:_36,dojoRequirePlugin:_28,getLegacyMode:function(){
return _25;
},guardCheckComplete:_37};
};
if(1){
var _38=location.protocol,_39=location.host;
req.isXdUrl=function(url){
if(/^\./.test(url)){
return false;
}
if(/^\/\//.test(url)){
return true;
}
var _3a=url.match(/^([^\/\:]+\:)\/+([^\/]+)/);
return _3a&&(_3a[1]!=_38||(_39&&_3a[2]!=_39));
};
1||has.add("dojo-xhr-factory",1);
has.add("dojo-force-activex-xhr",1&&!doc.addEventListener&&window.location.protocol=="file:");
has.add("native-xhr",typeof XMLHttpRequest!="undefined");
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
_2b=function(){
return new XMLHttpRequest();
};
}else{
for(var _3b=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],_3c,i=0;i<3;){
try{
_3c=_3b[i++];
if(new ActiveXObject(_3c)){
break;
}
}
catch(e){
}
}
_2b=function(){
return new ActiveXObject(_3c);
};
}
req.getXhr=_2b;
has.add("dojo-gettext-api",1);
req.getText=function(url,_3d,_3e){
var xhr=_2b();
xhr.open("GET",_3f(url),false);
xhr.send(null);
if(xhr.status==200||(!location.host&&!xhr.status)){
if(_3e){
_3e(xhr.responseText,_3d);
}
}else{
throw _f("xhrFailed",xhr.status);
}
return xhr.responseText;
};
}
}else{
req.async=1;
}
var _40=new Function("return eval(arguments[0]);");
req.eval=function(_41,_42){
return _40(_41+"\r\n////@ sourceURL="+_42);
};
var _43={},_44="error",_34=req.signal=function(_45,_46){
var _47=_43[_45];
_9(_47&&_47.slice(0),function(_48){
_48.apply(null,_8(_46)?_46:[_46]);
});
},on=req.on=function(_49,_4a){
var _4b=_43[_49]||(_43[_49]=[]);
_4b.push(_4a);
return {remove:function(){
for(var i=0;i<_4b.length;i++){
if(_4b[i]===_4a){
_4b.splice(i,1);
return;
}
}
}};
};
var _4c=[],_4d={},_4e=[],_4f={},map=req.map={},_50=[],_2f={},_51="",_52={},_53="url:",_54={},_55={},_56=0;
if(1){
var _57=function(_58){
var p,_59,_5a,now,m;
for(p in _54){
_59=_54[p];
_5a=p.match(/^url\:(.+)/);
if(_5a){
_52[_53+_5b(_5a[1],_58)]=_59;
}else{
if(p=="*now"){
now=_59;
}else{
if(p!="*noref"){
m=_5c(p,_58);
_52[m.mid]=_52[_53+m.url]=_59;
}
}
}
}
if(now){
now(_5d(_58));
}
_54={};
},_5e=function(s){
return s.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(c){
return "\\"+c;
});
},_5f=function(map,_60){
_60.splice(0,_60.length);
for(var p in map){
_60.push([p,map[p],new RegExp("^"+_5e(p)+"(/|$)"),p.length]);
}
_60.sort(function(lhs,rhs){
return rhs[3]-lhs[3];
});
return _60;
},_61=function(_62,_63){
_9(_62,function(_64){
_63.push([_7(_64[0])?new RegExp("^"+_5e(_64[0])+"$"):_64[0],_64[1]]);
});
},_65=function(_66){
var _67=_66.name;
if(!_67){
_67=_66;
_66={name:_67};
}
_66=_c({main:"main"},_66);
_66.location=_66.location?_66.location:_67;
if(_66.packageMap){
map[_67]=_66.packageMap;
}
if(!_66.main.indexOf("./")){
_66.main=_66.main.substring(2);
}
_4f[_67]=_66;
},_68=[],_69=function(_6a,_6b,_6c){
for(var p in _6a){
if(p=="waitSeconds"){
req.waitms=(_6a[p]||0)*1000;
}
if(p=="cacheBust"){
_51=_6a[p]?(_7(_6a[p])?_6a[p]:(new Date()).getTime()+""):"";
}
if(p=="baseUrl"||p=="combo"){
req[p]=_6a[p];
}
if(1&&p=="async"){
var _6d=_6a[p];
req.legacyMode=_25=(_7(_6d)&&/sync|legacyAsync/.test(_6d)?_6d:(!_6d?_26:false));
req.async=!_25;
}
if(_6a[p]!==_1a){
req.rawConfig[p]=_6a[p];
p!="has"&&has.add("config-"+p,_6a[p],0,_6b);
}
}
if(!req.baseUrl){
req.baseUrl="./";
}
if(!/\/$/.test(req.baseUrl)){
req.baseUrl+="/";
}
for(p in _6a.has){
has.add(p,_6a.has[p],0,_6b);
}
_9(_6a.packages,_65);
for(_1e in _6a.packagePaths){
_9(_6a.packagePaths[_1e],function(_6e){
var _6f=_1e+"/"+_6e;
if(_7(_6e)){
_6e={name:_6e};
}
_6e.location=_6f;
_65(_6e);
});
}
_5f(_c(map,_6a.map),_50);
_9(_50,function(_70){
_70[1]=_5f(_70[1],[]);
if(_70[0]=="*"){
_50.star=_70;
}
});
_5f(_c(_4d,_6a.paths),_4e);
_61(_6a.aliases,_4c);
if(_6b){
_68.push({config:_6a.config});
}else{
for(p in _6a.config){
var _71=_31(p,_6c);
_71.config=_c(_71.config||{},_6a.config[p]);
}
}
if(_6a.cache){
_57();
_54=_6a.cache;
if(_6a.cache["*noref"]){
_57();
}
}
_34("config",[_6a,req.rawConfig]);
};
if(has("dojo-cdn")||1){
var _72=doc.getElementsByTagName("script"),i=0,_73,_74,src,_75;
while(i<_72.length){
_73=_72[i++];
if((src=_73.getAttribute("src"))&&(_75=src.match(/(((.*)\/)|^)dojo\.js(\W|$)/i))){
_74=_75[3]||"";
_2.baseUrl=_2.baseUrl||_74;
_56=_73;
}
if((src=(_73.getAttribute("data-dojo-config")||_73.getAttribute("djConfig")))){
_55=req.eval("({ "+src+" })","data-dojo-config");
_56=_73;
}
if(0){
if((src=_73.getAttribute("data-main"))){
_55.deps=_55.deps||[src];
}
}
}
}
if(0){
try{
if(window.parent!=window&&window.parent.require){
var doh=window.parent.require("doh");
doh&&_c(_55,doh.testConfig);
}
}
catch(e){
}
}
req.rawConfig={};
_69(_2,1);
if(has("dojo-cdn")){
_4f.dojo.location=_74;
if(_74){
_74+="/";
}
_4f.dijit.location=_74+"../dijit/";
_4f.dojox.location=_74+"../dojox/";
}
_69(_1,1);
_69(_55,1);
}else{
_4d=_2.paths;
_4e=_2.pathsMapProg;
_4f=_2.packs;
_4c=_2.aliases;
_50=_2.mapProgs;
_2f=_2.modules;
_52=_2.cache;
_51=_2.cacheBust;
req.rawConfig=_2;
}
if(0){
req.combo=req.combo||{add:_3};
var _76=0,_77=[],_78=null;
}
var _79=function(_7a){
_37(function(){
_9(_7a.deps,_32);
if(0&&_76&&!_78){
_78=setTimeout(function(){
_76=0;
_78=null;
req.combo.done(function(_7b,url){
var _7c=function(){
_7d(0,_7b);
_7e();
};
_77.push(_7b);
_7f=_7b;
req.injectUrl(url,_7c,_7b);
_7f=0;
},req);
},0);
}
});
},_16=function(a1,a2,a3,_80,_81){
var _82,_83;
if(_7(a1)){
_82=_31(a1,_80,true);
if(_82&&_82.executed){
return _82.result;
}
throw _f("undefinedModule",a1);
}
if(!_8(a1)){
_69(a1,0,_80);
a1=a2;
a2=a3;
}
if(_8(a1)){
if(!a1.length){
a2&&a2();
}else{
_83="require*"+uid();
for(var mid,_84=[],i=0;i<a1.length;){
mid=a1[i++];
_84.push(_31(mid,_80));
}
_82=_c(_85("",_83,0,""),{injected:_21,deps:_84,def:a2||_3,require:_80?_80.require:req,gc:1});
_2f[_82.mid]=_82;
_79(_82);
var _86=_87&&_25!=_26;
_37(function(){
_36(_82,_86);
});
if(!_82.executed){
_30.push(_82);
}
_7e();
}
}
return _81;
},_5d=function(_88){
if(!_88){
return req;
}
var _89=_88.require;
if(!_89){
_89=function(a1,a2,a3){
return _16(a1,a2,a3,_88,_89);
};
_88.require=_c(_89,req);
_89.module=_88;
_89.toUrl=function(_8a){
return _5b(_8a,_88);
};
_89.toAbsMid=function(mid){
return _b7(mid,_88);
};
if(0){
_89.undef=function(mid){
req.undef(mid,_88);
};
}
if(1){
_89.syncLoadNls=function(mid){
var _8b=_5c(mid,_88),_8c=_2f[_8b.mid];
if(!_8c||!_8c.executed){
_8d=_52[_8b.mid]||_52[_53+_8b.url];
if(_8d){
_8e(_8d);
_8c=_2f[_8b.mid];
}
}
return _8c&&_8c.executed&&_8c.result;
};
}
}
return _89;
},_30=[],_8f=[],_90={},_91=function(_92){
_92.injected=_20;
_90[_92.mid]=1;
if(_92.url){
_90[_92.url]=_92.pack||1;
}
_93();
},_33=function(_94){
_94.injected=_21;
delete _90[_94.mid];
if(_94.url){
delete _90[_94.url];
}
if(_4(_90)){
_95();
1&&_25==xd&&(_25=_26);
}
},_96=req.idle=function(){
return !_8f.length&&_4(_90)&&!_30.length&&!_87;
},_97=function(_98,map){
if(map){
for(var i=0;i<map.length;i++){
if(map[i][2].test(_98)){
return map[i];
}
}
}
return 0;
},_99=function(_9a){
var _9b=[],_9c,_9d;
_9a=_9a.replace(/\\/g,"/").split("/");
while(_9a.length){
_9c=_9a.shift();
if(_9c==".."&&_9b.length&&_9d!=".."){
_9b.pop();
_9d=_9b[_9b.length-1];
}else{
if(_9c!="."){
_9b.push(_9d=_9c);
}
}
}
return _9b.join("/");
},_85=function(pid,mid,_9e,url){
if(1){
var xd=req.isXdUrl(url);
return {pid:pid,mid:mid,pack:_9e,url:url,executed:0,def:0,isXd:xd,isAmd:!!(xd||(_4f[pid]&&_4f[pid].isAmd))};
}else{
return {pid:pid,mid:mid,pack:_9e,url:url,executed:0,def:0};
}
},_9f=function(mid,_a0,_a1,_a2,_a3,_a4,_a5,_a6,_a7){
var pid,_a8,_a9,_aa,url,_ab,_ac,_ad;
_ad=mid;
_ac=/^\./.test(mid);
if(/(^\/)|(\:)|(\.js$)/.test(mid)||(_ac&&!_a0)){
return _85(0,mid,0,mid);
}else{
mid=_99(_ac?(_a0.mid+"/../"+mid):mid);
if(/^\./.test(mid)){
throw _f("irrationalPath",mid);
}
if(_a0){
_aa=_97(_a0.mid,_a4);
}
_aa=_aa||_a4.star;
_aa=_aa&&_97(mid,_aa[1]);
if(_aa){
mid=_aa[1]+mid.substring(_aa[3]);
}
_75=mid.match(/^([^\/]+)(\/(.+))?$/);
pid=_75?_75[1]:"";
if((_a8=_a1[pid])){
mid=pid+"/"+(_a9=(_75[3]||_a8.main));
}else{
pid="";
}
var _ae=0,_af=0;
_9(_a6,function(_b0){
var _b1=mid.match(_b0[0]);
if(_b1&&_b1.length>_ae){
_af=_6(_b0[1])?mid.replace(_b0[0],_b0[1]):_b0[1];
}
});
if(_af){
return _9f(_af,0,_a1,_a2,_a3,_a4,_a5,_a6,_a7);
}
_ab=_a2[mid];
if(_ab){
return _a7?_85(_ab.pid,_ab.mid,_ab.pack,_ab.url):_a2[mid];
}
}
_aa=_97(mid,_a5);
if(_aa){
url=_aa[1]+mid.substring(_aa[3]);
}else{
if(pid){
url=_a8.location+"/"+_a9;
}else{
if(has("config-tlmSiblingOfDojo")){
url="../"+mid;
}else{
url=mid;
}
}
}
if(!(/(^\/)|(\:)/.test(url))){
url=_a3+url;
}
url+=".js";
return _85(pid,mid,_a8,_99(url));
},_5c=function(mid,_b2){
return _9f(mid,_b2,_4f,_2f,req.baseUrl,_50,_4e,_4c);
},_b3=function(_b4,_b5,_b6){
return _b4.normalize?_b4.normalize(_b5,function(mid){
return _b7(mid,_b6);
}):_b7(_b5,_b6);
},_b8=0,_31=function(mid,_b9,_ba){
var _bb,_bc,_bd,_be;
_bb=mid.match(/^(.+?)\!(.*)$/);
if(_bb){
_bc=_31(_bb[1],_b9,_ba);
if(1&&_25==_26&&!_bc.executed){
_32(_bc);
if(_bc.injected===_21&&!_bc.executed){
_37(function(){
_36(_bc);
});
}
if(_bc.executed){
_bf(_bc);
}else{
_30.unshift(_bc);
}
}
if(_bc.executed===_24&&!_bc.load){
_bf(_bc);
}
if(_bc.load){
_bd=_b3(_bc,_bb[2],_b9);
mid=(_bc.mid+"!"+(_bc.dynamic?++_b8+"!":"")+_bd);
}else{
_bd=_bb[2];
mid=_bc.mid+"!"+(++_b8)+"!waitingForPlugin";
}
_be={plugin:_bc,mid:mid,req:_5d(_b9),prid:_bd};
}else{
_be=_5c(mid,_b9);
}
return _2f[_be.mid]||(!_ba&&(_2f[_be.mid]=_be));
},_b7=req.toAbsMid=function(mid,_c0){
return _5c(mid,_c0).mid;
},_5b=req.toUrl=function(_c1,_c2){
var _c3=_5c(_c1+"/x",_c2),url=_c3.url;
return _3f(_c3.pid===0?_c1:url.substring(0,url.length-5));
},_c4={injected:_21,executed:_24,def:_22,result:_22},_c5=function(mid){
return _2f[mid]=_c({mid:mid},_c4);
},_c6=_c5("require"),_c7=_c5("exports"),_c8=_c5("module"),_c9=function(_ca,_cb){
req.trace("loader-run-factory",[_ca.mid]);
var _cc=_ca.def,_cd;
1&&_27.unshift(_ca);
if(has("config-dojo-loader-catches")){
try{
_cd=_6(_cc)?_cc.apply(null,_cb):_cc;
}
catch(e){
_34(_44,_ca.result=_f("factoryThrew",[_ca,e]));
}
}else{
_cd=_6(_cc)?_cc.apply(null,_cb):_cc;
}
_ca.result=_cd===undefined&&_ca.cjs?_ca.cjs.exports:_cd;
1&&_27.shift(_ca);
},_ce={},_cf=0,_bf=function(_d0){
var _d1=_d0.result;
_d0.dynamic=_d1.dynamic;
_d0.normalize=_d1.normalize;
_d0.load=_d1.load;
return _d0;
},_d2=function(_d3){
var map={};
_9(_d3.loadQ,function(_d4){
var _d5=_b3(_d3,_d4.prid,_d4.req.module),mid=_d3.dynamic?_d4.mid.replace(/waitingForPlugin$/,_d5):(_d3.mid+"!"+_d5),_d6=_c(_c({},_d4),{mid:mid,prid:_d5,injected:0});
if(!_2f[mid]){
_e8(_2f[mid]=_d6);
}
map[_d4.mid]=_2f[mid];
_33(_d4);
delete _2f[_d4.mid];
});
_d3.loadQ=0;
var _d7=function(_d8){
for(var _d9,_da=_d8.deps||[],i=0;i<_da.length;i++){
_d9=map[_da[i].mid];
if(_d9){
_da[i]=_d9;
}
}
};
for(var p in _2f){
_d7(_2f[p]);
}
_9(_30,_d7);
},_35=function(_db){
req.trace("loader-finish-exec",[_db.mid]);
_db.executed=_24;
_db.defOrder=_cf++;
1&&_9(_db.provides,function(cb){
cb();
});
if(_db.loadQ){
_bf(_db);
_d2(_db);
}
for(i=0;i<_30.length;){
if(_30[i]===_db){
_30.splice(i,1);
}else{
i++;
}
}
if(/^require\*/.test(_db.mid)){
delete _2f[_db.mid];
}
},_dc=[],_36=function(_dd,_de){
if(_dd.executed===_23){
req.trace("loader-circular-dependency",[_dc.concat(_dd.mid).join("->")]);
return (!_dd.def||_de)?_ce:(_dd.cjs&&_dd.cjs.exports);
}
if(!_dd.executed){
if(!_dd.def){
return _ce;
}
var mid=_dd.mid,_df=_dd.deps||[],arg,_e0,_e1=[],i=0;
if(0){
_dc.push(mid);
req.trace("loader-exec-module",["exec",_dc.length,mid]);
}
_dd.executed=_23;
while((arg=_df[i++])){
_e0=((arg===_c6)?_5d(_dd):((arg===_c7)?_dd.cjs.exports:((arg===_c8)?_dd.cjs:_36(arg,_de))));
if(_e0===_ce){
_dd.executed=0;
req.trace("loader-exec-module",["abort",mid]);
0&&_dc.pop();
return _ce;
}
_e1.push(_e0);
}
_c9(_dd,_e1);
_35(_dd);
0&&_dc.pop();
}
return _dd.result;
},_87=0,_37=function(_e2){
try{
_87++;
_e2();
}
finally{
_87--;
}
if(_96()){
_34("idle",[]);
}
},_7e=function(){
if(_87){
return;
}
_37(function(){
_29();
for(var _e3,_e4,i=0;i<_30.length;){
_e3=_cf;
_e4=_30[i];
_36(_e4);
if(_e3!=_cf){
_29();
i=0;
}else{
i++;
}
}
});
};
if(0){
req.undef=function(_e5,_e6){
var _e7=_31(_e5,_e6);
_33(_e7);
_c(_e7,{def:0,executed:0,injected:0,node:0});
};
}
if(1){
if(has("dojo-loader-eval-hint-url")===undefined){
has.add("dojo-loader-eval-hint-url",1);
}
var _3f=function(url){
url+="";
return url+(_51?((/\?/.test(url)?"&":"?")+_51):"");
},_e8=function(_e9){
var _ea=_e9.plugin;
if(_ea.executed===_24&&!_ea.load){
_bf(_ea);
}
var _eb=function(def){
_e9.result=def;
_33(_e9);
_35(_e9);
_7e();
};
if(_ea.load){
_ea.load(_e9.prid,_e9.req,_eb);
}else{
if(_ea.loadQ){
_ea.loadQ.push(_e9);
}else{
_ea.loadQ=[_e9];
_30.unshift(_ea);
_32(_ea);
}
}
},_8d=0,_7f=0,_ec=0,_8e=function(_ed,_ee){
if(has("config-stripStrict")){
_ed=_ed.replace(/"use strict"/g,"");
}
_ec=1;
if(has("config-dojo-loader-catches")){
try{
if(_ed===_8d){
_8d.call(null);
}else{
req.eval(_ed,has("dojo-loader-eval-hint-url")?_ee.url:_ee.mid);
}
}
catch(e){
_34(_44,_f("evalModuleThrew",_ee));
}
}else{
if(_ed===_8d){
_8d.call(null);
}else{
req.eval(_ed,has("dojo-loader-eval-hint-url")?_ee.url:_ee.mid);
}
}
_ec=0;
},_32=function(_ef){
var mid=_ef.mid,url=_ef.url;
if(_ef.executed||_ef.injected||_90[mid]||(_ef.url&&((_ef.pack&&_90[_ef.url]===_ef.pack)||_90[_ef.url]==1))){
return;
}
_91(_ef);
if(0){
var _f0=0;
if(_ef.plugin&&_ef.plugin.isCombo){
req.combo.add(_ef.plugin.mid,_ef.prid,0,req);
_f0=1;
}else{
if(!_ef.plugin){
_f0=req.combo.add(0,_ef.mid,_ef.url,req);
}
}
if(_f0){
_76=1;
return;
}
}
if(_ef.plugin){
_e8(_ef);
return;
}
var _f1=function(){
_7d(_ef);
if(_ef.injected!==_21){
if(has("dojo-enforceDefine")){
_34(_44,_f("noDefine",_ef));
return;
}
_33(_ef);
_c(_ef,_c4);
req.trace("loader-define-nonmodule",[_ef.url]);
}
if(1&&_25){
!_27.length&&_7e();
}else{
_7e();
}
};
_8d=_52[mid]||_52[_53+_ef.url];
if(_8d){
req.trace("loader-inject",["cache",_ef.mid,url]);
_8e(_8d,_ef);
_f1();
return;
}
if(1&&_25){
if(_ef.isXd){
_25==_26&&(_25=xd);
}else{
if(_ef.isAmd&&_25!=_26){
}else{
var _f2=function(_f3){
if(_25==_26){
_27.unshift(_ef);
_8e(_f3,_ef);
_27.shift();
_7d(_ef);
if(!_ef.cjs){
_33(_ef);
_35(_ef);
}
if(_ef.finish){
var _f4=mid+"*finish",_f5=_ef.finish;
delete _ef.finish;
def(_f4,["dojo",("dojo/require!"+_f5.join(",")).replace(/\./g,"/")],function(_f6){
_9(_f5,function(mid){
_f6.require(mid);
});
});
_30.unshift(_31(_f4));
}
_f1();
}else{
_f3=_2a(_ef,_f3);
if(_f3){
_8e(_f3,_ef);
_f1();
}else{
_7f=_ef;
req.injectUrl(_3f(url),_f1,_ef);
_7f=0;
}
}
};
req.trace("loader-inject",["xhr",_ef.mid,url,_25!=_26]);
if(has("config-dojo-loader-catches")){
try{
req.getText(url,_25!=_26,_f2);
}
catch(e){
_34(_44,_f("xhrInjectFailed",[_ef,e]));
}
}else{
req.getText(url,_25!=_26,_f2);
}
return;
}
}
}
req.trace("loader-inject",["script",_ef.mid,url]);
_7f=_ef;
req.injectUrl(_3f(url),_f1,_ef);
_7f=0;
},_f7=function(_f8,_f9,def){
req.trace("loader-define-module",[_f8.mid,_f9]);
if(0&&_f8.plugin&&_f8.plugin.isCombo){
_f8.result=_6(def)?def():def;
_33(_f8);
_35(_f8);
return _f8;
}
var mid=_f8.mid;
if(_f8.injected===_21){
_34(_44,_f("multipleDefine",_f8));
return _f8;
}
_c(_f8,{deps:_f9,def:def,cjs:{id:_f8.mid,uri:_f8.url,exports:(_f8.result={}),setExports:function(_fa){
_f8.cjs.exports=_fa;
},config:function(){
return _f8.config;
}}});
for(var i=0;_f9[i];i++){
_f9[i]=_31(_f9[i],_f8);
}
if(1&&_25&&!_90[mid]){
_79(_f8);
_30.push(_f8);
_7e();
}
_33(_f8);
if(!_6(def)&&!_f9.length){
_f8.result=def;
_35(_f8);
}
return _f8;
},_7d=function(_fb,_fc){
var _fd=[],_fe,_ff;
while(_8f.length){
_ff=_8f.shift();
_fc&&(_ff[0]=_fc.shift());
_fe=(_ff[0]&&_31(_ff[0]))||_fb;
_fd.push([_fe,_ff[1],_ff[2]]);
}
_57(_fb);
_9(_fd,function(args){
_79(_f7.apply(null,args));
});
};
}
var _100=0,_95=_3,_93=_3;
if(1){
_95=function(){
_100&&clearTimeout(_100);
_100=0;
};
_93=function(){
_95();
if(req.waitms){
_100=window.setTimeout(function(){
_95();
_34(_44,_f("timeout",_90));
},req.waitms);
}
};
}
if(1){
has.add("ie-event-behavior",doc.attachEvent&&typeof Windows==="undefined"&&(typeof opera==="undefined"||opera.toString()!="[object Opera]"));
}
if(1&&(1||1)){
var _101=function(node,_102,_103,_104){
if(!has("ie-event-behavior")){
node.addEventListener(_102,_104,false);
return function(){
node.removeEventListener(_102,_104,false);
};
}else{
node.attachEvent(_103,_104);
return function(){
node.detachEvent(_103,_104);
};
}
},_105=_101(window,"load","onload",function(){
req.pageLoaded=1;
doc.readyState!="complete"&&(doc.readyState="complete");
_105();
});
if(1){
var _72=doc.getElementsByTagName("script"),i=0,_73;
while(!_56){
if(!/^dojo/.test((_73=_72[i++])&&_73.type)){
_56=_73;
}
}
req.injectUrl=function(url,_106,_107){
var node=_107.node=doc.createElement("script"),_108=function(e){
e=e||window.event;
var node=e.target||e.srcElement;
if(e.type==="load"||/complete|loaded/.test(node.readyState)){
_109();
_10a();
_106&&_106();
}
},_109=_101(node,"load","onreadystatechange",_108),_10a=_101(node,"error","onerror",function(e){
_109();
_10a();
_34(_44,_f("scriptError",[url,e]));
});
node.type="text/javascript";
node.charset="utf-8";
node.src=url;
_56.parentNode.insertBefore(node,_56);
return node;
};
}
}
if(1){
req.log=function(){
try{
for(var i=0;i<arguments.length;i++){
}
}
catch(e){
}
};
}else{
req.log=_3;
}
if(0){
var _10b=req.trace=function(_10c,args){
if(_10b.on&&_10b.group[_10c]){
_34("trace",[_10c,args]);
for(var arg,dump=[],text="trace:"+_10c+(args.length?(":"+args[0]):""),i=1;i<args.length;){
arg=args[i++];
if(_7(arg)){
text+=", "+arg;
}else{
dump.push(arg);
}
}
req.log(text);
dump.length&&dump.push(".");
req.log.apply(req,dump);
}
};
_c(_10b,{on:1,group:{},set:function(_10d,_10e){
if(_7(_10d)){
_10b.group[_10d]=_10e;
}else{
_c(_10b.group,_10d);
}
}});
_10b.set(_c(_c(_c({},_2.trace),_1.trace),_55.trace));
on("config",function(_10f){
_10f.trace&&_10b.set(_10f.trace);
});
}else{
req.trace=_3;
}
var def=function(mid,_110,_111){
var _112=arguments.length,_113=["require","exports","module"],args=[0,mid,_110];
if(_112==1){
args=[0,(_6(mid)?_113:[]),mid];
}else{
if(_112==2&&_7(mid)){
args=[mid,(_6(_110)?_113:[]),_110];
}else{
if(_112==3){
args=[mid,_110,_111];
}
}
}
if(0&&args[1]===_113){
args[2].toString().replace(/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,"").replace(/require\(["']([\w\!\-_\.\/]+)["']\)/g,function(_114,dep){
args[1].push(dep);
});
}
req.trace("loader-define",args.slice(0,2));
var _115=args[0]&&_31(args[0]),_116;
if(_115&&!_90[_115.mid]){
_79(_f7(_115,args[1],args[2]));
}else{
if(!has("ie-event-behavior")||!1||_ec){
_8f.push(args);
}else{
_115=_115||_7f;
if(!_115){
for(mid in _90){
_116=_2f[mid];
if(_116&&_116.node&&_116.node.readyState==="interactive"){
_115=_116;
break;
}
}
if(0&&!_115){
for(var i=0;i<_77.length;i++){
_115=_77[i];
if(_115.node&&_115.node.readyState==="interactive"){
break;
}
_115=0;
}
}
}
if(0&&_8(_115)){
_79(_f7(_31(_115.shift()),args[1],args[2]));
if(!_115.length){
_77.splice(i,1);
}
}else{
if(_115){
_57(_115);
_79(_f7(_115,args[1],args[2]));
}else{
_34(_44,_f("ieDefineFailed",args[0]));
}
}
_7e();
}
}
};
def.amd={vendor:"dojotoolkit.org"};
if(0){
req.def=def;
}
_c(_c(req,_2.loaderPatch),_1.loaderPatch);
on(_44,function(arg){
try{
console.error(arg);
if(arg instanceof Error){
for(var p in arg){
}
}
}
catch(e){
}
});
_c(req,{uid:uid,cache:_52,packs:_4f});
if(0){
_c(req,{paths:_4d,aliases:_4c,modules:_2f,legacyMode:_25,execQ:_30,defQ:_8f,waiting:_90,packs:_4f,mapProgs:_50,pathsMapProg:_4e,listenerQueues:_43,computeMapProg:_5f,computeAliases:_61,runMapProg:_97,compactPath:_99,getModuleInfo:_9f});
}
if(_17.define){
if(1){
_34(_44,_f("defineAlreadyDefined",0));
}
return;
}else{
_17.define=def;
_17.require=req;
if(0){
require=req;
}
}
if(0&&req.combo&&req.combo.plugins){
var _117=req.combo.plugins,_118;
for(_118 in _117){
_c(_c(_31(_118),_117[_118]),{isCombo:1,executed:"executed",load:1});
}
}
if(1){
_9(_68,function(c){
_69(c);
});
var _119=_55.deps||_1.deps||_2.deps,_11a=_55.callback||_1.callback||_2.callback;
req.boot=(_119||_11a)?[_119||[],_11a]:0;
}
if(!1){
!req.async&&req(["dojo"]);
req.boot&&req.apply(null,req.boot);
}
})(this.dojoConfig||this.djConfig||this.require||{},{async:0,hasCache:{"config-selectorEngine":"acme","config-tlmSiblingOfDojo":1,"dojo-built":1,"dojo-loader":1,dom:1,"host-browser":1},packages:[{location:"../dijit",name:"dijit"},{location:"../dojox",name:"dojox"},{location:".",name:"dojo"}]});
require({cache:{"dojo/_base/fx":function(){
define(["./kernel","./config","./lang","../Evented","./Color","../aspect","../sniff","../dom","../dom-style"],function(dojo,_11b,lang,_11c,_11d,_11e,has,dom,_11f){
var _120=lang.mixin;
var _121={};
var _122=_121._Line=function(_123,end){
this.start=_123;
this.end=end;
};
_122.prototype.getValue=function(n){
return ((this.end-this.start)*n)+this.start;
};
var _124=_121.Animation=function(args){
_120(this,args);
if(lang.isArray(this.curve)){
this.curve=new _122(this.curve[0],this.curve[1]);
}
};
_124.prototype=new _11c();
lang.extend(_124,{duration:350,repeat:0,rate:20,_percent:0,_startRepeatCount:0,_getStep:function(){
var _125=this._percent,_126=this.easing;
return _126?_126(_125):_125;
},_fire:function(evt,args){
var a=args||[];
if(this[evt]){
if(_11b.debugAtAllCosts){
this[evt].apply(this,a);
}else{
try{
this[evt].apply(this,a);
}
catch(e){
console.error("exception in animation handler for:",evt);
console.error(e);
}
}
}
return this;
},play:function(_127,_128){
var _129=this;
if(_129._delayTimer){
_129._clearTimer();
}
if(_128){
_129._stopTimer();
_129._active=_129._paused=false;
_129._percent=0;
}else{
if(_129._active&&!_129._paused){
return _129;
}
}
_129._fire("beforeBegin",[_129.node]);
var de=_127||_129.delay,_12a=lang.hitch(_129,"_play",_128);
if(de>0){
_129._delayTimer=setTimeout(_12a,de);
return _129;
}
_12a();
return _129;
},_play:function(_12b){
var _12c=this;
if(_12c._delayTimer){
_12c._clearTimer();
}
_12c._startTime=new Date().valueOf();
if(_12c._paused){
_12c._startTime-=_12c.duration*_12c._percent;
}
_12c._active=true;
_12c._paused=false;
var _12d=_12c.curve.getValue(_12c._getStep());
if(!_12c._percent){
if(!_12c._startRepeatCount){
_12c._startRepeatCount=_12c.repeat;
}
_12c._fire("onBegin",[_12d]);
}
_12c._fire("onPlay",[_12d]);
_12c._cycle();
return _12c;
},pause:function(){
var _12e=this;
if(_12e._delayTimer){
_12e._clearTimer();
}
_12e._stopTimer();
if(!_12e._active){
return _12e;
}
_12e._paused=true;
_12e._fire("onPause",[_12e.curve.getValue(_12e._getStep())]);
return _12e;
},gotoPercent:function(_12f,_130){
var _131=this;
_131._stopTimer();
_131._active=_131._paused=true;
_131._percent=_12f;
if(_130){
_131.play();
}
return _131;
},stop:function(_132){
var _133=this;
if(_133._delayTimer){
_133._clearTimer();
}
if(!_133._timer){
return _133;
}
_133._stopTimer();
if(_132){
_133._percent=1;
}
_133._fire("onStop",[_133.curve.getValue(_133._getStep())]);
_133._active=_133._paused=false;
return _133;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}
return "stopped";
},_cycle:function(){
var _134=this;
if(_134._active){
var curr=new Date().valueOf();
var step=_134.duration===0?1:(curr-_134._startTime)/(_134.duration);
if(step>=1){
step=1;
}
_134._percent=step;
if(_134.easing){
step=_134.easing(step);
}
_134._fire("onAnimate",[_134.curve.getValue(step)]);
if(_134._percent<1){
_134._startTimer();
}else{
_134._active=false;
if(_134.repeat>0){
_134.repeat--;
_134.play(null,true);
}else{
if(_134.repeat==-1){
_134.play(null,true);
}else{
if(_134._startRepeatCount){
_134.repeat=_134._startRepeatCount;
_134._startRepeatCount=0;
}
}
}
_134._percent=0;
_134._fire("onEnd",[_134.node]);
!_134.repeat&&_134._stopTimer();
}
}
return _134;
},_clearTimer:function(){
clearTimeout(this._delayTimer);
delete this._delayTimer;
}});
var ctr=0,_135=null,_136={run:function(){
}};
lang.extend(_124,{_startTimer:function(){
if(!this._timer){
this._timer=_11e.after(_136,"run",lang.hitch(this,"_cycle"),true);
ctr++;
}
if(!_135){
_135=setInterval(lang.hitch(_136,"run"),this.rate);
}
},_stopTimer:function(){
if(this._timer){
this._timer.remove();
this._timer=null;
ctr--;
}
if(ctr<=0){
clearInterval(_135);
_135=null;
ctr=0;
}
}});
var _137=has("ie")?function(node){
var ns=node.style;
if(!ns.width.length&&_11f.get(node,"width")=="auto"){
ns.width="auto";
}
}:function(){
};
_121._fade=function(args){
args.node=dom.byId(args.node);
var _138=_120({properties:{}},args),_139=(_138.properties.opacity={});
_139.start=!("start" in _138)?function(){
return +_11f.get(_138.node,"opacity")||0;
}:_138.start;
_139.end=_138.end;
var anim=_121.animateProperty(_138);
_11e.after(anim,"beforeBegin",lang.partial(_137,_138.node),true);
return anim;
};
_121.fadeIn=function(args){
return _121._fade(_120({end:1},args));
};
_121.fadeOut=function(args){
return _121._fade(_120({end:0},args));
};
_121._defaultEasing=function(n){
return 0.5+((Math.sin((n+1.5)*Math.PI))/2);
};
var _13a=function(_13b){
this._properties=_13b;
for(var p in _13b){
var prop=_13b[p];
if(prop.start instanceof _11d){
prop.tempColor=new _11d();
}
}
};
_13a.prototype.getValue=function(r){
var ret={};
for(var p in this._properties){
var prop=this._properties[p],_13c=prop.start;
if(_13c instanceof _11d){
ret[p]=_11d.blendColors(_13c,prop.end,r,prop.tempColor).toCss();
}else{
if(!lang.isArray(_13c)){
ret[p]=((prop.end-_13c)*r)+_13c+(p!="opacity"?prop.units||"px":0);
}
}
}
return ret;
};
_121.animateProperty=function(args){
var n=args.node=dom.byId(args.node);
if(!args.easing){
args.easing=dojo._defaultEasing;
}
var anim=new _124(args);
_11e.after(anim,"beforeBegin",lang.hitch(anim,function(){
var pm={};
for(var p in this.properties){
if(p=="width"||p=="height"){
this.node.display="block";
}
var prop=this.properties[p];
if(lang.isFunction(prop)){
prop=prop(n);
}
prop=pm[p]=_120({},(lang.isObject(prop)?prop:{end:prop}));
if(lang.isFunction(prop.start)){
prop.start=prop.start(n);
}
if(lang.isFunction(prop.end)){
prop.end=prop.end(n);
}
var _13d=(p.toLowerCase().indexOf("color")>=0);
function _13e(node,p){
var v={height:node.offsetHeight,width:node.offsetWidth}[p];
if(v!==undefined){
return v;
}
v=_11f.get(node,p);
return (p=="opacity")?+v:(_13d?v:parseFloat(v));
};
if(!("end" in prop)){
prop.end=_13e(n,p);
}else{
if(!("start" in prop)){
prop.start=_13e(n,p);
}
}
if(_13d){
prop.start=new _11d(prop.start);
prop.end=new _11d(prop.end);
}else{
prop.start=(p=="opacity")?+prop.start:parseFloat(prop.start);
}
}
this.curve=new _13a(pm);
}),true);
_11e.after(anim,"onAnimate",lang.hitch(_11f,"set",anim.node),true);
return anim;
};
_121.anim=function(node,_13f,_140,_141,_142,_143){
return _121.animateProperty({node:node,duration:_140||_124.prototype.duration,properties:_13f,easing:_141,onEnd:_142}).play(_143||0);
};
if(1){
_120(dojo,_121);
dojo._Animation=_124;
}
return _121;
});
},"dojo/dom-form":function(){
define(["./_base/lang","./dom","./io-query","./json"],function(lang,dom,ioq,json){
function _144(obj,name,_145){
if(_145===null){
return;
}
var val=obj[name];
if(typeof val=="string"){
obj[name]=[val,_145];
}else{
if(lang.isArray(val)){
val.push(_145);
}else{
obj[name]=_145;
}
}
};
var _146="file|submit|image|reset|button";
var form={fieldToObject:function fieldToObject(_147){
var ret=null;
_147=dom.byId(_147);
if(_147){
var _148=_147.name,type=(_147.type||"").toLowerCase();
if(_148&&type&&!_147.disabled){
if(type=="radio"||type=="checkbox"){
if(_147.checked){
ret=_147.value;
}
}else{
if(_147.multiple){
ret=[];
var _149=[_147.firstChild];
while(_149.length){
for(var node=_149.pop();node;node=node.nextSibling){
if(node.nodeType==1&&node.tagName.toLowerCase()=="option"){
if(node.selected){
ret.push(node.value);
}
}else{
if(node.nextSibling){
_149.push(node.nextSibling);
}
if(node.firstChild){
_149.push(node.firstChild);
}
break;
}
}
}
}else{
ret=_147.value;
}
}
}
}
return ret;
},toObject:function formToObject(_14a){
var ret={},_14b=dom.byId(_14a).elements;
for(var i=0,l=_14b.length;i<l;++i){
var item=_14b[i],_14c=item.name,type=(item.type||"").toLowerCase();
if(_14c&&type&&_146.indexOf(type)<0&&!item.disabled){
_144(ret,_14c,form.fieldToObject(item));
if(type=="image"){
ret[_14c+".x"]=ret[_14c+".y"]=ret[_14c].x=ret[_14c].y=0;
}
}
}
return ret;
},toQuery:function formToQuery(_14d){
return ioq.objectToQuery(form.toObject(_14d));
},toJson:function formToJson(_14e,_14f){
return json.stringify(form.toObject(_14e),null,_14f?4:0);
}};
return form;
});
},"dojo/promise/tracer":function(){
define(["../_base/lang","./Promise","../Evented"],function(lang,_150,_151){
"use strict";
var _152=new _151;
var emit=_152.emit;
_152.emit=null;
function _153(args){
setTimeout(function(){
emit.apply(_152,args);
},0);
};
_150.prototype.trace=function(){
var args=lang._toArray(arguments);
this.then(function(_154){
_153(["resolved",_154].concat(args));
},function(_155){
_153(["rejected",_155].concat(args));
},function(_156){
_153(["progress",_156].concat(args));
});
return this;
};
_150.prototype.traceRejected=function(){
var args=lang._toArray(arguments);
this.otherwise(function(_157){
_153(["rejected",_157].concat(args));
});
return this;
};
return _152;
});
},"dojo/errors/RequestError":function(){
define(["./create"],function(_158){
return _158("RequestError",function(_159,_15a){
this.response=_15a;
});
});
},"dojo/_base/html":function(){
define(["./kernel","../dom","../dom-style","../dom-attr","../dom-prop","../dom-class","../dom-construct","../dom-geometry"],function(dojo,dom,_15b,attr,prop,cls,ctr,geom){
dojo.byId=dom.byId;
dojo.isDescendant=dom.isDescendant;
dojo.setSelectable=dom.setSelectable;
dojo.getAttr=attr.get;
dojo.setAttr=attr.set;
dojo.hasAttr=attr.has;
dojo.removeAttr=attr.remove;
dojo.getNodeProp=attr.getNodeProp;
dojo.attr=function(node,name,_15c){
if(arguments.length==2){
return attr[typeof name=="string"?"get":"set"](node,name);
}
return attr.set(node,name,_15c);
};
dojo.hasClass=cls.contains;
dojo.addClass=cls.add;
dojo.removeClass=cls.remove;
dojo.toggleClass=cls.toggle;
dojo.replaceClass=cls.replace;
dojo._toDom=dojo.toDom=ctr.toDom;
dojo.place=ctr.place;
dojo.create=ctr.create;
dojo.empty=function(node){
ctr.empty(node);
};
dojo._destroyElement=dojo.destroy=function(node){
ctr.destroy(node);
};
dojo._getPadExtents=dojo.getPadExtents=geom.getPadExtents;
dojo._getBorderExtents=dojo.getBorderExtents=geom.getBorderExtents;
dojo._getPadBorderExtents=dojo.getPadBorderExtents=geom.getPadBorderExtents;
dojo._getMarginExtents=dojo.getMarginExtents=geom.getMarginExtents;
dojo._getMarginSize=dojo.getMarginSize=geom.getMarginSize;
dojo._getMarginBox=dojo.getMarginBox=geom.getMarginBox;
dojo.setMarginBox=geom.setMarginBox;
dojo._getContentBox=dojo.getContentBox=geom.getContentBox;
dojo.setContentSize=geom.setContentSize;
dojo._isBodyLtr=dojo.isBodyLtr=geom.isBodyLtr;
dojo._docScroll=dojo.docScroll=geom.docScroll;
dojo._getIeDocumentElementOffset=dojo.getIeDocumentElementOffset=geom.getIeDocumentElementOffset;
dojo._fixIeBiDiScrollLeft=dojo.fixIeBiDiScrollLeft=geom.fixIeBiDiScrollLeft;
dojo.position=geom.position;
dojo.marginBox=function marginBox(node,box){
return box?geom.setMarginBox(node,box):geom.getMarginBox(node);
};
dojo.contentBox=function contentBox(node,box){
return box?geom.setContentSize(node,box):geom.getContentBox(node);
};
dojo.coords=function(node,_15d){
dojo.deprecated("dojo.coords()","Use dojo.position() or dojo.marginBox().");
node=dom.byId(node);
var s=_15b.getComputedStyle(node),mb=geom.getMarginBox(node,s);
var abs=geom.position(node,_15d);
mb.x=abs.x;
mb.y=abs.y;
return mb;
};
dojo.getProp=prop.get;
dojo.setProp=prop.set;
dojo.prop=function(node,name,_15e){
if(arguments.length==2){
return prop[typeof name=="string"?"get":"set"](node,name);
}
return prop.set(node,name,_15e);
};
dojo.getStyle=_15b.get;
dojo.setStyle=_15b.set;
dojo.getComputedStyle=_15b.getComputedStyle;
dojo.__toPixelValue=dojo.toPixelValue=_15b.toPixelValue;
dojo.style=function(node,name,_15f){
switch(arguments.length){
case 1:
return _15b.get(node);
case 2:
return _15b[typeof name=="string"?"get":"set"](node,name);
}
return _15b.set(node,name,_15f);
};
return dojo;
});
},"dojo/_base/kernel":function(){
define(["../has","./config","require","module"],function(has,_160,_161,_162){
var i,p,_163={},_164={},dojo={config:_160,global:this,dijit:_163,dojox:_164};
var _165={dojo:["dojo",dojo],dijit:["dijit",_163],dojox:["dojox",_164]},_166=(_161.map&&_161.map[_162.id.match(/[^\/]+/)[0]]),item;
for(p in _166){
if(_165[p]){
_165[p][0]=_166[p];
}else{
_165[p]=[_166[p],{}];
}
}
for(p in _165){
item=_165[p];
item[1]._scopeName=item[0];
if(!_160.noGlobals){
this[item[0]]=item[1];
}
}
dojo.scopeMap=_165;
dojo.baseUrl=dojo.config.baseUrl=_161.baseUrl;
dojo.isAsync=!1||_161.async;
dojo.locale=_160.locale;
var rev="$Rev: 43d05c6 $".match(/\d+/);
dojo.version={major:1,minor:9,patch:1,flag:"",revision:rev?+rev[0]:NaN,toString:function(){
var v=dojo.version;
return v.major+"."+v.minor+"."+v.patch+v.flag+" ("+v.revision+")";
}};
1||has.add("extend-dojo",1);
(Function("d","d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}"))(dojo);
if(0){
dojo.exit=function(_167){
quit(_167);
};
}else{
dojo.exit=function(){
};
}
1||has.add("dojo-guarantee-console",1);
if(1){
typeof console!="undefined"||(console={});
var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];
var tn;
i=0;
while((tn=cn[i++])){
if(!console[tn]){
(function(){
var tcn=tn+"";
console[tcn]=("log" in console)?function(){
var a=Array.apply({},arguments);
a.unshift(tcn+":");
console["log"](a.join(" "));
}:function(){
};
console[tcn]._fake=true;
})();
}
}
}
has.add("dojo-debug-messages",!!_160.isDebug);
dojo.deprecated=dojo.experimental=function(){
};
if(has("dojo-debug-messages")){
dojo.deprecated=function(_168,_169,_16a){
var _16b="DEPRECATED: "+_168;
if(_169){
_16b+=" "+_169;
}
if(_16a){
_16b+=" -- will be removed in version: "+_16a;
}
console.warn(_16b);
};
dojo.experimental=function(_16c,_16d){
var _16e="EXPERIMENTAL: "+_16c+" -- APIs subject to change without notice.";
if(_16d){
_16e+=" "+_16d;
}
console.warn(_16e);
};
}
1||has.add("dojo-modulePaths",1);
if(1){
if(_160.modulePaths){
dojo.deprecated("dojo.modulePaths","use paths configuration");
var _16f={};
for(p in _160.modulePaths){
_16f[p.replace(/\./g,"/")]=_160.modulePaths[p];
}
_161({paths:_16f});
}
}
1||has.add("dojo-moduleUrl",1);
if(1){
dojo.moduleUrl=function(_170,url){
dojo.deprecated("dojo.moduleUrl()","use require.toUrl","2.0");
var _171=null;
if(_170){
_171=_161.toUrl(_170.replace(/\./g,"/")+(url?("/"+url):"")+"/*.*").replace(/\/\*\.\*/,"")+(url?"":"/");
}
return _171;
};
}
dojo._hasResource={};
return dojo;
});
},"dojo/io-query":function(){
define(["./_base/lang"],function(lang){
var _172={};
return {objectToQuery:function objectToQuery(map){
var enc=encodeURIComponent,_173=[];
for(var name in map){
var _174=map[name];
if(_174!=_172[name]){
var _175=enc(name)+"=";
if(lang.isArray(_174)){
for(var i=0,l=_174.length;i<l;++i){
_173.push(_175+enc(_174[i]));
}
}else{
_173.push(_175+enc(_174));
}
}
}
return _173.join("&");
},queryToObject:function queryToObject(str){
var dec=decodeURIComponent,qp=str.split("&"),ret={},name,val;
for(var i=0,l=qp.length,item;i<l;++i){
item=qp[i];
if(item.length){
var s=item.indexOf("=");
if(s<0){
name=dec(item);
val="";
}else{
name=dec(item.slice(0,s));
val=dec(item.slice(s+1));
}
if(typeof ret[name]=="string"){
ret[name]=[ret[name]];
}
if(lang.isArray(ret[name])){
ret[name].push(val);
}else{
ret[name]=val;
}
}
}
return ret;
}};
});
},"dojo/_base/Deferred":function(){
define(["./kernel","../Deferred","../promise/Promise","../errors/CancelError","../has","./lang","../when"],function(dojo,_176,_177,_178,has,lang,when){
var _179=function(){
};
var _17a=Object.freeze||function(){
};
var _17b=dojo.Deferred=function(_17c){
var _17d,_17e,_17f,_180,_181,head,_182;
var _183=(this.promise=new _177());
function _184(_185){
if(_17e){
throw new Error("This deferred has already been resolved");
}
_17d=_185;
_17e=true;
_186();
};
function _186(){
var _187;
while(!_187&&_182){
var _188=_182;
_182=_182.next;
if((_187=(_188.progress==_179))){
_17e=false;
}
var func=(_181?_188.error:_188.resolved);
if(has("config-useDeferredInstrumentation")){
if(_181&&_176.instrumentRejected){
_176.instrumentRejected(_17d,!!func);
}
}
if(func){
try{
var _189=func(_17d);
if(_189&&typeof _189.then==="function"){
_189.then(lang.hitch(_188.deferred,"resolve"),lang.hitch(_188.deferred,"reject"),lang.hitch(_188.deferred,"progress"));
continue;
}
var _18a=_187&&_189===undefined;
if(_187&&!_18a){
_181=_189 instanceof Error;
}
_188.deferred[_18a&&_181?"reject":"resolve"](_18a?_17d:_189);
}
catch(e){
_188.deferred.reject(e);
}
}else{
if(_181){
_188.deferred.reject(_17d);
}else{
_188.deferred.resolve(_17d);
}
}
}
};
this.isResolved=_183.isResolved=function(){
return _180==0;
};
this.isRejected=_183.isRejected=function(){
return _180==1;
};
this.isFulfilled=_183.isFulfilled=function(){
return _180>=0;
};
this.isCanceled=_183.isCanceled=function(){
return _17f;
};
this.resolve=this.callback=function(_18b){
this.fired=_180=0;
this.results=[_18b,null];
_184(_18b);
};
this.reject=this.errback=function(_18c){
_181=true;
this.fired=_180=1;
if(has("config-useDeferredInstrumentation")){
if(_176.instrumentRejected){
_176.instrumentRejected(_18c,!!_182);
}
}
_184(_18c);
this.results=[null,_18c];
};
this.progress=function(_18d){
var _18e=_182;
while(_18e){
var _18f=_18e.progress;
_18f&&_18f(_18d);
_18e=_18e.next;
}
};
this.addCallbacks=function(_190,_191){
this.then(_190,_191,_179);
return this;
};
_183.then=this.then=function(_192,_193,_194){
var _195=_194==_179?this:new _17b(_183.cancel);
var _196={resolved:_192,error:_193,progress:_194,deferred:_195};
if(_182){
head=head.next=_196;
}else{
_182=head=_196;
}
if(_17e){
_186();
}
return _195.promise;
};
var _197=this;
_183.cancel=this.cancel=function(){
if(!_17e){
var _198=_17c&&_17c(_197);
if(!_17e){
if(!(_198 instanceof Error)){
_198=new _178(_198);
}
_198.log=false;
_197.reject(_198);
}
}
_17f=true;
};
_17a(_183);
};
lang.extend(_17b,{addCallback:function(_199){
return this.addCallbacks(lang.hitch.apply(dojo,arguments));
},addErrback:function(_19a){
return this.addCallbacks(null,lang.hitch.apply(dojo,arguments));
},addBoth:function(_19b){
var _19c=lang.hitch.apply(dojo,arguments);
return this.addCallbacks(_19c,_19c);
},fired:-1});
_17b.when=dojo.when=when;
return _17b;
});
},"dojo/NodeList-dom":function(){
define(["./_base/kernel","./query","./_base/array","./_base/lang","./dom-class","./dom-construct","./dom-geometry","./dom-attr","./dom-style"],function(dojo,_19d,_19e,lang,_19f,_1a0,_1a1,_1a2,_1a3){
var _1a4=function(a){
return a.length==1&&(typeof a[0]=="string");
};
var _1a5=function(node){
var p=node.parentNode;
if(p){
p.removeChild(node);
}
};
var _1a6=_19d.NodeList,awc=_1a6._adaptWithCondition,aafe=_1a6._adaptAsForEach,aam=_1a6._adaptAsMap;
function _1a7(_1a8){
return function(node,name,_1a9){
if(arguments.length==2){
return _1a8[typeof name=="string"?"get":"set"](node,name);
}
return _1a8.set(node,name,_1a9);
};
};
lang.extend(_1a6,{_normalize:function(_1aa,_1ab){
var _1ac=_1aa.parse===true;
if(typeof _1aa.template=="string"){
var _1ad=_1aa.templateFunc||(dojo.string&&dojo.string.substitute);
_1aa=_1ad?_1ad(_1aa.template,_1aa):_1aa;
}
var type=(typeof _1aa);
if(type=="string"||type=="number"){
_1aa=_1a0.toDom(_1aa,(_1ab&&_1ab.ownerDocument));
if(_1aa.nodeType==11){
_1aa=lang._toArray(_1aa.childNodes);
}else{
_1aa=[_1aa];
}
}else{
if(!lang.isArrayLike(_1aa)){
_1aa=[_1aa];
}else{
if(!lang.isArray(_1aa)){
_1aa=lang._toArray(_1aa);
}
}
}
if(_1ac){
_1aa._runParse=true;
}
return _1aa;
},_cloneNode:function(node){
return node.cloneNode(true);
},_place:function(ary,_1ae,_1af,_1b0){
if(_1ae.nodeType!=1&&_1af=="only"){
return;
}
var _1b1=_1ae,_1b2;
var _1b3=ary.length;
for(var i=_1b3-1;i>=0;i--){
var node=(_1b0?this._cloneNode(ary[i]):ary[i]);
if(ary._runParse&&dojo.parser&&dojo.parser.parse){
if(!_1b2){
_1b2=_1b1.ownerDocument.createElement("div");
}
_1b2.appendChild(node);
dojo.parser.parse(_1b2);
node=_1b2.firstChild;
while(_1b2.firstChild){
_1b2.removeChild(_1b2.firstChild);
}
}
if(i==_1b3-1){
_1a0.place(node,_1b1,_1af);
}else{
_1b1.parentNode.insertBefore(node,_1b1);
}
_1b1=node;
}
},position:aam(_1a1.position),attr:awc(_1a7(_1a2),_1a4),style:awc(_1a7(_1a3),_1a4),addClass:aafe(_19f.add),removeClass:aafe(_19f.remove),toggleClass:aafe(_19f.toggle),replaceClass:aafe(_19f.replace),empty:aafe(_1a0.empty),removeAttr:aafe(_1a2.remove),marginBox:aam(_1a1.getMarginBox),place:function(_1b4,_1b5){
var item=_19d(_1b4)[0];
return this.forEach(function(node){
_1a0.place(node,item,_1b5);
});
},orphan:function(_1b6){
return (_1b6?_19d._filterResult(this,_1b6):this).forEach(_1a5);
},adopt:function(_1b7,_1b8){
return _19d(_1b7).place(this[0],_1b8)._stash(this);
},query:function(_1b9){
if(!_1b9){
return this;
}
var ret=new _1a6;
this.map(function(node){
_19d(_1b9,node).forEach(function(_1ba){
if(_1ba!==undefined){
ret.push(_1ba);
}
});
});
return ret._stash(this);
},filter:function(_1bb){
var a=arguments,_1bc=this,_1bd=0;
if(typeof _1bb=="string"){
_1bc=_19d._filterResult(this,a[0]);
if(a.length==1){
return _1bc._stash(this);
}
_1bd=1;
}
return this._wrap(_19e.filter(_1bc,a[_1bd],a[_1bd+1]),this);
},addContent:function(_1be,_1bf){
_1be=this._normalize(_1be,this[0]);
for(var i=0,node;(node=this[i]);i++){
if(_1be.length){
this._place(_1be,node,_1bf,i>0);
}else{
_1a0.empty(node);
}
}
return this;
}});
return _1a6;
});
},"dojo/query":function(){
define(["./_base/kernel","./has","./dom","./on","./_base/array","./_base/lang","./selector/_loader","./selector/_loader!default"],function(dojo,has,dom,on,_1c0,lang,_1c1,_1c2){
"use strict";
has.add("array-extensible",function(){
return lang.delegate([],{length:1}).length==1&&!has("bug-for-in-skips-shadowed");
});
var ap=Array.prototype,aps=ap.slice,apc=ap.concat,_1c3=_1c0.forEach;
var tnl=function(a,_1c4,_1c5){
var _1c6=new (_1c5||this._NodeListCtor||nl)(a);
return _1c4?_1c6._stash(_1c4):_1c6;
};
var _1c7=function(f,a,o){
a=[0].concat(aps.call(a,0));
o=o||dojo.global;
return function(node){
a[0]=node;
return f.apply(o,a);
};
};
var _1c8=function(f,o){
return function(){
this.forEach(_1c7(f,arguments,o));
return this;
};
};
var _1c9=function(f,o){
return function(){
return this.map(_1c7(f,arguments,o));
};
};
var _1ca=function(f,o){
return function(){
return this.filter(_1c7(f,arguments,o));
};
};
var _1cb=function(f,g,o){
return function(){
var a=arguments,body=_1c7(f,a,o);
if(g.call(o||dojo.global,a)){
return this.map(body);
}
this.forEach(body);
return this;
};
};
var _1cc=function(_1cd){
var _1ce=this instanceof nl&&has("array-extensible");
if(typeof _1cd=="number"){
_1cd=Array(_1cd);
}
var _1cf=(_1cd&&"length" in _1cd)?_1cd:arguments;
if(_1ce||!_1cf.sort){
var _1d0=_1ce?this:[],l=_1d0.length=_1cf.length;
for(var i=0;i<l;i++){
_1d0[i]=_1cf[i];
}
if(_1ce){
return _1d0;
}
_1cf=_1d0;
}
lang._mixin(_1cf,nlp);
_1cf._NodeListCtor=function(_1d1){
return nl(_1d1);
};
return _1cf;
};
var nl=_1cc,nlp=nl.prototype=has("array-extensible")?[]:{};
nl._wrap=nlp._wrap=tnl;
nl._adaptAsMap=_1c9;
nl._adaptAsForEach=_1c8;
nl._adaptAsFilter=_1ca;
nl._adaptWithCondition=_1cb;
_1c3(["slice","splice"],function(name){
var f=ap[name];
nlp[name]=function(){
return this._wrap(f.apply(this,arguments),name=="slice"?this:null);
};
});
_1c3(["indexOf","lastIndexOf","every","some"],function(name){
var f=_1c0[name];
nlp[name]=function(){
return f.apply(dojo,[this].concat(aps.call(arguments,0)));
};
});
lang.extend(_1cc,{constructor:nl,_NodeListCtor:nl,toString:function(){
return this.join(",");
},_stash:function(_1d2){
this._parent=_1d2;
return this;
},on:function(_1d3,_1d4){
var _1d5=this.map(function(node){
return on(node,_1d3,_1d4);
});
_1d5.remove=function(){
for(var i=0;i<_1d5.length;i++){
_1d5[i].remove();
}
};
return _1d5;
},end:function(){
if(this._parent){
return this._parent;
}else{
return new this._NodeListCtor(0);
}
},concat:function(item){
var t=aps.call(this,0),m=_1c0.map(arguments,function(a){
return aps.call(a,0);
});
return this._wrap(apc.apply(t,m),this);
},map:function(func,obj){
return this._wrap(_1c0.map(this,func,obj),this);
},forEach:function(_1d6,_1d7){
_1c3(this,_1d6,_1d7);
return this;
},filter:function(_1d8){
var a=arguments,_1d9=this,_1da=0;
if(typeof _1d8=="string"){
_1d9=_1db._filterResult(this,a[0]);
if(a.length==1){
return _1d9._stash(this);
}
_1da=1;
}
return this._wrap(_1c0.filter(_1d9,a[_1da],a[_1da+1]),this);
},instantiate:function(_1dc,_1dd){
var c=lang.isFunction(_1dc)?_1dc:lang.getObject(_1dc);
_1dd=_1dd||{};
return this.forEach(function(node){
new c(_1dd,node);
});
},at:function(){
var t=new this._NodeListCtor(0);
_1c3(arguments,function(i){
if(i<0){
i=this.length+i;
}
if(this[i]){
t.push(this[i]);
}
},this);
return t._stash(this);
}});
function _1de(_1df,_1e0){
var _1e1=function(_1e2,root){
if(typeof root=="string"){
root=dom.byId(root);
if(!root){
return new _1e0([]);
}
}
var _1e3=typeof _1e2=="string"?_1df(_1e2,root):_1e2?(_1e2.end&&_1e2.on)?_1e2:[_1e2]:[];
if(_1e3.end&&_1e3.on){
return _1e3;
}
return new _1e0(_1e3);
};
_1e1.matches=_1df.match||function(node,_1e4,root){
return _1e1.filter([node],_1e4,root).length>0;
};
_1e1.filter=_1df.filter||function(_1e5,_1e6,root){
return _1e1(_1e6,root).filter(function(node){
return _1c0.indexOf(_1e5,node)>-1;
});
};
if(typeof _1df!="function"){
var _1e7=_1df.search;
_1df=function(_1e8,root){
return _1e7(root||document,_1e8);
};
}
return _1e1;
};
var _1db=_1de(_1c2,_1cc);
dojo.query=_1de(_1c2,function(_1e9){
return _1cc(_1e9);
});
_1db.load=function(id,_1ea,_1eb){
_1c1.load(id,_1ea,function(_1ec){
_1eb(_1de(_1ec,_1cc));
});
};
dojo._filterQueryResult=_1db._filterResult=function(_1ed,_1ee,root){
return new _1cc(_1db.filter(_1ed,_1ee,root));
};
dojo.NodeList=_1db.NodeList=_1cc;
return _1db;
});
},"dojo/has":function(){
define(["require","module"],function(_1ef,_1f0){
var has=_1ef.has||function(){
};
if(!1){
var _1f1=typeof window!="undefined"&&typeof location!="undefined"&&typeof document!="undefined"&&window.location==location&&window.document==document,_1f2=this,doc=_1f1&&document,_1f3=doc&&doc.createElement("DiV"),_1f4=(_1f0.config&&_1f0.config())||{};
has=function(name){
return typeof _1f4[name]=="function"?(_1f4[name]=_1f4[name](_1f2,doc,_1f3)):_1f4[name];
};
has.cache=_1f4;
has.add=function(name,test,now,_1f5){
(typeof _1f4[name]=="undefined"||_1f5)&&(_1f4[name]=test);
return now&&has(name);
};
1||has.add("host-browser",_1f1);
1||has.add("dom",_1f1);
1||has.add("dojo-dom-ready-api",1);
1||has.add("dojo-sniff",1);
}
if(1){
has.add("dom-addeventlistener",!!document.addEventListener);
has.add("touch","ontouchstart" in document||window.navigator.msMaxTouchPoints>0);
has.add("device-width",screen.availWidth||innerWidth);
var form=document.createElement("form");
has.add("dom-attributes-explicit",form.attributes.length==0);
has.add("dom-attributes-specified-flag",form.attributes.length>0&&form.attributes.length<40);
}
has.clearElement=function(_1f6){
_1f6.innerHTML="";
return _1f6;
};
has.normalize=function(id,_1f7){
var _1f8=id.match(/[\?:]|[^:\?]*/g),i=0,get=function(skip){
var term=_1f8[i++];
if(term==":"){
return 0;
}else{
if(_1f8[i++]=="?"){
if(!skip&&has(term)){
return get();
}else{
get(true);
return get(skip);
}
}
return term||0;
}
};
id=get();
return id&&_1f7(id);
};
has.load=function(id,_1f9,_1fa){
if(id){
_1f9([id],_1fa);
}else{
_1fa();
}
};
return has;
});
},"dojo/_base/loader":function(){
define(["./kernel","../has","require","module","../json","./lang","./array"],function(dojo,has,_1fb,_1fc,json,lang,_1fd){
if(!1){
console.error("cannot load the Dojo v1.x loader with a foreign loader");
return 0;
}
1||has.add("dojo-fast-sync-require",1);
var _1fe=function(id){
return {src:_1fc.id,id:id};
},_1ff=function(name){
return name.replace(/\./g,"/");
},_200=/\/\/>>built/,_201=[],_202=[],_203=function(mid,_204,_205){
_201.push(_205);
_1fd.forEach(mid.split(","),function(mid){
var _206=_207(mid,_204.module);
_202.push(_206);
_208(_206);
});
_209();
},_209=(1?function(){
var _20a,mid;
for(mid in _20b){
_20a=_20b[mid];
if(_20a.noReqPluginCheck===undefined){
_20a.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(!_20a.executed&&!_20a.noReqPluginCheck&&_20a.injected==_20c){
return;
}
}
_20d(function(){
var _20e=_201;
_201=[];
_1fd.forEach(_20e,function(cb){
cb(1);
});
});
}:(function(){
var _20f,_210=function(m){
_20f[m.mid]=1;
for(var t,_211,deps=m.deps||[],i=0;i<deps.length;i++){
_211=deps[i];
if(!(t=_20f[_211.mid])){
if(t===0||!_210(_211)){
_20f[m.mid]=0;
return false;
}
}
}
return true;
};
return function(){
var _212,mid;
_20f={};
for(mid in _20b){
_212=_20b[mid];
if(_212.executed||_212.noReqPluginCheck){
_20f[mid]=1;
}else{
if(_212.noReqPluginCheck!==0){
_212.noReqPluginCheck=/loadInit\!/.test(mid)||/require\!/.test(mid)?1:0;
}
if(_212.noReqPluginCheck){
_20f[mid]=1;
}else{
if(_212.injected!==_23e){
_20f[mid]=0;
}
}
}
}
for(var t,i=0,end=_202.length;i<end;i++){
_212=_202[i];
if(!(t=_20f[_212.mid])){
if(t===0||!_210(_212)){
return;
}
}
}
_20d(function(){
var _213=_201;
_201=[];
_1fd.forEach(_213,function(cb){
cb(1);
});
});
};
})()),_214=function(mid,_215,_216){
_215([mid],function(_217){
_215(_217.names,function(){
for(var _218="",args=[],i=0;i<arguments.length;i++){
_218+="var "+_217.names[i]+"= arguments["+i+"]; ";
args.push(arguments[i]);
}
eval(_218);
var _219=_215.module,_21a=[],_21b,_21c={provide:function(_21d){
_21d=_1ff(_21d);
var _21e=_207(_21d,_219);
if(_21e!==_219){
_244(_21e);
}
},require:function(_21f,_220){
_21f=_1ff(_21f);
_220&&(_207(_21f,_219).result=_23f);
_21a.push(_21f);
},requireLocalization:function(_221,_222,_223){
if(!_21b){
_21b=["dojo/i18n"];
}
_223=(_223||dojo.locale).toLowerCase();
_221=_1ff(_221)+"/nls/"+(/root/i.test(_223)?"":_223+"/")+_1ff(_222);
if(_207(_221,_219).isXd){
_21b.push("dojo/i18n!"+_221);
}
},loadInit:function(f){
f();
}},hold={},p;
try{
for(p in _21c){
hold[p]=dojo[p];
dojo[p]=_21c[p];
}
_217.def.apply(null,args);
}
catch(e){
_224("error",[_1fe("failedDojoLoadInit"),e]);
}
finally{
for(p in _21c){
dojo[p]=hold[p];
}
}
if(_21b){
_21a=_21a.concat(_21b);
}
if(_21a.length){
_203(_21a.join(","),_215,_216);
}else{
_216();
}
});
});
},_225=function(text,_226,_227){
var _228=/\(|\)/g,_229=1,_22a;
_228.lastIndex=_226;
while((_22a=_228.exec(text))){
if(_22a[0]==")"){
_229-=1;
}else{
_229+=1;
}
if(_229==0){
break;
}
}
if(_229!=0){
throw "unmatched paren around character "+_228.lastIndex+" in: "+text;
}
return [dojo.trim(text.substring(_227,_228.lastIndex))+";\n",_228.lastIndex];
},_22b=/(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/mg,_22c=/(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/mg,_22d=/(^|\s)(require|define)\s*\(/m,_22e=function(text,_22f){
var _230,_231,_232,_233,_234=[],_235=[],_236=[];
_22f=_22f||text.replace(_22b,function(_237){
_22c.lastIndex=_22d.lastIndex=0;
return (_22c.test(_237)||_22d.test(_237))?"":_237;
});
while((_230=_22c.exec(_22f))){
_231=_22c.lastIndex;
_232=_231-_230[0].length;
_233=_225(_22f,_231,_232);
if(_230[2]=="loadInit"){
_234.push(_233[0]);
}else{
_235.push(_233[0]);
}
_22c.lastIndex=_233[1];
}
_236=_234.concat(_235);
if(_236.length||!_22d.test(_22f)){
return [text.replace(/(^|\s)dojo\.loadInit\s*\(/g,"\n0 && dojo.loadInit("),_236.join(""),_236];
}else{
return 0;
}
},_238=function(_239,text){
var _23a,id,_23b=[],_23c=[];
if(_200.test(text)||!(_23a=_22e(text))){
return 0;
}
id=_239.mid+"-*loadInit";
for(var p in _207("dojo",_239).result.scopeMap){
_23b.push(p);
_23c.push("\""+p+"\"");
}
return "// xdomain rewrite of "+_239.mid+"\n"+"define('"+id+"',{\n"+"\tnames:"+json.stringify(_23b)+",\n"+"\tdef:function("+_23b.join(",")+"){"+_23a[1]+"}"+"});\n\n"+"define("+json.stringify(_23b.concat(["dojo/loadInit!"+id]))+", function("+_23b.join(",")+"){\n"+_23a[0]+"});";
},_23d=_1fb.initSyncLoader(_203,_209,_238),sync=_23d.sync,_20c=_23d.requested,_23e=_23d.arrived,_23f=_23d.nonmodule,_240=_23d.executing,_241=_23d.executed,_242=_23d.syncExecStack,_20b=_23d.modules,_243=_23d.execQ,_207=_23d.getModule,_208=_23d.injectModule,_244=_23d.setArrived,_224=_23d.signal,_245=_23d.finishExec,_246=_23d.execModule,_247=_23d.getLegacyMode,_20d=_23d.guardCheckComplete;
_203=_23d.dojoRequirePlugin;
dojo.provide=function(mid){
var _248=_242[0],_249=lang.mixin(_207(_1ff(mid),_1fb.module),{executed:_240,result:lang.getObject(mid,true)});
_244(_249);
if(_248){
(_248.provides||(_248.provides=[])).push(function(){
_249.result=lang.getObject(mid);
delete _249.provides;
_249.executed!==_241&&_245(_249);
});
}
return _249.result;
};
has.add("config-publishRequireResult",1,0,0);
dojo.require=function(_24a,_24b){
function _24c(mid,_24d){
var _24e=_207(_1ff(mid),_1fb.module);
if(_242.length&&_242[0].finish){
_242[0].finish.push(mid);
return undefined;
}
if(_24e.executed){
return _24e.result;
}
_24d&&(_24e.result=_23f);
var _24f=_247();
_208(_24e);
_24f=_247();
if(_24e.executed!==_241&&_24e.injected===_23e){
_23d.guardCheckComplete(function(){
_246(_24e);
});
}
if(_24e.executed){
return _24e.result;
}
if(_24f==sync){
if(_24e.cjs){
_243.unshift(_24e);
}else{
_242.length&&(_242[0].finish=[mid]);
}
}else{
_243.push(_24e);
}
return undefined;
};
var _250=_24c(_24a,_24b);
if(has("config-publishRequireResult")&&!lang.exists(_24a)&&_250!==undefined){
lang.setObject(_24a,_250);
}
return _250;
};
dojo.loadInit=function(f){
f();
};
dojo.registerModulePath=function(_251,_252){
var _253={};
_253[_251.replace(/\./g,"/")]=_252;
_1fb({paths:_253});
};
dojo.platformRequire=function(_254){
var _255=(_254.common||[]).concat(_254[dojo._name]||_254["default"]||[]),temp;
while(_255.length){
if(lang.isArray(temp=_255.shift())){
dojo.require.apply(dojo,temp);
}else{
dojo.require(temp);
}
}
};
dojo.requireIf=dojo.requireAfterIf=function(_256,_257,_258){
if(_256){
dojo.require(_257,_258);
}
};
dojo.requireLocalization=function(_259,_25a,_25b){
_1fb(["../i18n"],function(i18n){
i18n.getLocalization(_259,_25a,_25b);
});
};
return {extractLegacyApiApplications:_22e,require:_203,loadInit:_214};
});
},"dojo/json":function(){
define(["./has"],function(has){
"use strict";
var _25c=typeof JSON!="undefined";
has.add("json-parse",_25c);
has.add("json-stringify",_25c&&JSON.stringify({a:0},function(k,v){
return v||1;
})=="{\"a\":1}");
if(has("json-stringify")){
return JSON;
}else{
var _25d=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
return {parse:has("json-parse")?JSON.parse:function(str,_25e){
if(_25e&&!/^([\s\[\{]*(?:"(?:\\.|[^"])*"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(str)){
throw new SyntaxError("Invalid characters in JSON");
}
return eval("("+str+")");
},stringify:function(_25f,_260,_261){
var _262;
if(typeof _260=="string"){
_261=_260;
_260=null;
}
function _263(it,_264,key){
if(_260){
it=_260(key,it);
}
var val,_265=typeof it;
if(_265=="number"){
return isFinite(it)?it+"":"null";
}
if(_265=="boolean"){
return it+"";
}
if(it===null){
return "null";
}
if(typeof it=="string"){
return _25d(it);
}
if(_265=="function"||_265=="undefined"){
return _262;
}
if(typeof it.toJSON=="function"){
return _263(it.toJSON(key),_264,key);
}
if(it instanceof Date){
return "\"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z\"".replace(/\{(\w+)(\+)?\}/g,function(t,prop,plus){
var num=it["getUTC"+prop]()+(plus?1:0);
return num<10?"0"+num:num;
});
}
if(it.valueOf()!==it){
return _263(it.valueOf(),_264,key);
}
var _266=_261?(_264+_261):"";
var sep=_261?" ":"";
var _267=_261?"\n":"";
if(it instanceof Array){
var itl=it.length,res=[];
for(key=0;key<itl;key++){
var obj=it[key];
val=_263(obj,_266,key);
if(typeof val!="string"){
val="null";
}
res.push(_267+_266+val);
}
return "["+res.join(",")+_267+_264+"]";
}
var _268=[];
for(key in it){
var _269;
if(it.hasOwnProperty(key)){
if(typeof key=="number"){
_269="\""+key+"\"";
}else{
if(typeof key=="string"){
_269=_25d(key);
}else{
continue;
}
}
val=_263(it[key],_266,key);
if(typeof val!="string"){
continue;
}
_268.push(_267+_266+_269+":"+sep+val);
}
}
return "{"+_268.join(",")+_267+_264+"}";
};
return _263(_25f,"","");
}};
}
});
},"dojo/_base/declare":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var mix=lang.mixin,op=Object.prototype,opts=op.toString,xtor=new Function,_26a=0,_26b="constructor";
function err(msg,cls){
throw new Error("declare"+(cls?" "+cls:"")+": "+msg);
};
function _26c(_26d,_26e){
var _26f=[],_270=[{cls:0,refs:[]}],_271={},_272=1,l=_26d.length,i=0,j,lin,base,top,_273,rec,name,refs;
for(;i<l;++i){
base=_26d[i];
if(!base){
err("mixin #"+i+" is unknown. Did you use dojo.require to pull it in?",_26e);
}else{
if(opts.call(base)!="[object Function]"){
err("mixin #"+i+" is not a callable constructor.",_26e);
}
}
lin=base._meta?base._meta.bases:[base];
top=0;
for(j=lin.length-1;j>=0;--j){
_273=lin[j].prototype;
if(!_273.hasOwnProperty("declaredClass")){
_273.declaredClass="uniqName_"+(_26a++);
}
name=_273.declaredClass;
if(!_271.hasOwnProperty(name)){
_271[name]={count:0,refs:[],cls:lin[j]};
++_272;
}
rec=_271[name];
if(top&&top!==rec){
rec.refs.push(top);
++top.count;
}
top=rec;
}
++top.count;
_270[0].refs.push(top);
}
while(_270.length){
top=_270.pop();
_26f.push(top.cls);
--_272;
while(refs=top.refs,refs.length==1){
top=refs[0];
if(!top||--top.count){
top=0;
break;
}
_26f.push(top.cls);
--_272;
}
if(top){
for(i=0,l=refs.length;i<l;++i){
top=refs[i];
if(!--top.count){
_270.push(top);
}
}
}
}
if(_272){
err("can't build consistent linearization",_26e);
}
base=_26d[0];
_26f[0]=base?base._meta&&base===_26f[_26f.length-base._meta.bases.length]?base._meta.bases.length:1:0;
return _26f;
};
function _274(args,a,f){
var name,_275,_276,_277,meta,base,_278,opf,pos,_279=this._inherited=this._inherited||{};
if(typeof args=="string"){
name=args;
args=a;
a=f;
}
f=0;
_277=args.callee;
name=name||_277.nom;
if(!name){
err("can't deduce a name to call inherited()",this.declaredClass);
}
meta=this.constructor._meta;
_276=meta.bases;
pos=_279.p;
if(name!=_26b){
if(_279.c!==_277){
pos=0;
base=_276[0];
meta=base._meta;
if(meta.hidden[name]!==_277){
_275=meta.chains;
if(_275&&typeof _275[name]=="string"){
err("calling chained method with inherited: "+name,this.declaredClass);
}
do{
meta=base._meta;
_278=base.prototype;
if(meta&&(_278[name]===_277&&_278.hasOwnProperty(name)||meta.hidden[name]===_277)){
break;
}
}while(base=_276[++pos]);
pos=base?pos:-1;
}
}
base=_276[++pos];
if(base){
_278=base.prototype;
if(base._meta&&_278.hasOwnProperty(name)){
f=_278[name];
}else{
opf=op[name];
do{
_278=base.prototype;
f=_278[name];
if(f&&(base._meta?_278.hasOwnProperty(name):f!==opf)){
break;
}
}while(base=_276[++pos]);
}
}
f=base&&f||op[name];
}else{
if(_279.c!==_277){
pos=0;
meta=_276[0]._meta;
if(meta&&meta.ctor!==_277){
_275=meta.chains;
if(!_275||_275.constructor!=="manual"){
err("calling chained constructor with inherited",this.declaredClass);
}
while(base=_276[++pos]){
meta=base._meta;
if(meta&&meta.ctor===_277){
break;
}
}
pos=base?pos:-1;
}
}
while(base=_276[++pos]){
meta=base._meta;
f=meta?meta.ctor:base;
if(f){
break;
}
}
f=base&&f;
}
_279.c=f;
_279.p=pos;
if(f){
return a===true?f:f.apply(this,a||args);
}
};
function _27a(name,args){
if(typeof name=="string"){
return this.__inherited(name,args,true);
}
return this.__inherited(name,true);
};
function _27b(args,a1,a2){
var f=this.getInherited(args,a1);
if(f){
return f.apply(this,a2||a1||args);
}
};
var _27c=dojo.config.isDebug?_27b:_274;
function _27d(cls){
var _27e=this.constructor._meta.bases;
for(var i=0,l=_27e.length;i<l;++i){
if(_27e[i]===cls){
return true;
}
}
return this instanceof cls;
};
function _27f(_280,_281){
for(var name in _281){
if(name!=_26b&&_281.hasOwnProperty(name)){
_280[name]=_281[name];
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _282=lang._extraNames,i=_282.length;i;){
name=_282[--i];
if(name!=_26b&&_281.hasOwnProperty(name)){
_280[name]=_281[name];
}
}
}
};
function _283(_284,_285){
var name,t;
for(name in _285){
t=_285[name];
if((t!==op[name]||!(name in op))&&name!=_26b){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_284[name]=t;
}
}
if(has("bug-for-in-skips-shadowed")){
for(var _286=lang._extraNames,i=_286.length;i;){
name=_286[--i];
t=_285[name];
if((t!==op[name]||!(name in op))&&name!=_26b){
if(opts.call(t)=="[object Function]"){
t.nom=name;
}
_284[name]=t;
}
}
}
return _284;
};
function _287(_288){
_289.safeMixin(this.prototype,_288);
return this;
};
function _28a(_28b,_28c){
return _289([this].concat(_28b),_28c||{});
};
function _28d(_28e,_28f){
return function(){
var a=arguments,args=a,a0=a[0],f,i,m,l=_28e.length,_290;
if(!(this instanceof a.callee)){
return _291(a);
}
if(_28f&&(a0&&a0.preamble||this.preamble)){
_290=new Array(_28e.length);
_290[0]=a;
for(i=0;;){
a0=a[0];
if(a0){
f=a0.preamble;
if(f){
a=f.apply(this,a)||a;
}
}
f=_28e[i].prototype;
f=f.hasOwnProperty("preamble")&&f.preamble;
if(f){
a=f.apply(this,a)||a;
}
if(++i==l){
break;
}
_290[i]=a;
}
}
for(i=l-1;i>=0;--i){
f=_28e[i];
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,_290?_290[i]:a);
}
}
f=this.postscript;
if(f){
f.apply(this,args);
}
};
};
function _292(ctor,_293){
return function(){
var a=arguments,t=a,a0=a[0],f;
if(!(this instanceof a.callee)){
return _291(a);
}
if(_293){
if(a0){
f=a0.preamble;
if(f){
t=f.apply(this,t)||t;
}
}
f=this.preamble;
if(f){
f.apply(this,t);
}
}
if(ctor){
ctor.apply(this,a);
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _294(_295){
return function(){
var a=arguments,i=0,f,m;
if(!(this instanceof a.callee)){
return _291(a);
}
for(;f=_295[i];++i){
m=f._meta;
f=m?m.ctor:f;
if(f){
f.apply(this,a);
break;
}
}
f=this.postscript;
if(f){
f.apply(this,a);
}
};
};
function _296(name,_297,_298){
return function(){
var b,m,f,i=0,step=1;
if(_298){
i=_297.length-1;
step=-1;
}
for(;b=_297[i];i+=step){
m=b._meta;
f=(m?m.hidden:b.prototype)[name];
if(f){
f.apply(this,arguments);
}
}
};
};
function _299(ctor){
xtor.prototype=ctor.prototype;
var t=new xtor;
xtor.prototype=null;
return t;
};
function _291(args){
var ctor=args.callee,t=_299(ctor);
ctor.apply(t,args);
return t;
};
function _289(_29a,_29b,_29c){
if(typeof _29a!="string"){
_29c=_29b;
_29b=_29a;
_29a="";
}
_29c=_29c||{};
var _29d,i,t,ctor,name,_29e,_29f,_2a0=1,_2a1=_29b;
if(opts.call(_29b)=="[object Array]"){
_29e=_26c(_29b,_29a);
t=_29e[0];
_2a0=_29e.length-t;
_29b=_29e[_2a0];
}else{
_29e=[0];
if(_29b){
if(opts.call(_29b)=="[object Function]"){
t=_29b._meta;
_29e=_29e.concat(t?t.bases:_29b);
}else{
err("base class is not a callable constructor.",_29a);
}
}else{
if(_29b!==null){
err("unknown base class. Did you use dojo.require to pull it in?",_29a);
}
}
}
if(_29b){
for(i=_2a0-1;;--i){
_29d=_299(_29b);
if(!i){
break;
}
t=_29e[i];
(t._meta?_27f:mix)(_29d,t.prototype);
ctor=new Function;
ctor.superclass=_29b;
ctor.prototype=_29d;
_29b=_29d.constructor=ctor;
}
}else{
_29d={};
}
_289.safeMixin(_29d,_29c);
t=_29c.constructor;
if(t!==op.constructor){
t.nom=_26b;
_29d.constructor=t;
}
for(i=_2a0-1;i;--i){
t=_29e[i]._meta;
if(t&&t.chains){
_29f=mix(_29f||{},t.chains);
}
}
if(_29d["-chains-"]){
_29f=mix(_29f||{},_29d["-chains-"]);
}
t=!_29f||!_29f.hasOwnProperty(_26b);
_29e[0]=ctor=(_29f&&_29f.constructor==="manual")?_294(_29e):(_29e.length==1?_292(_29c.constructor,t):_28d(_29e,t));
ctor._meta={bases:_29e,hidden:_29c,chains:_29f,parents:_2a1,ctor:_29c.constructor};
ctor.superclass=_29b&&_29b.prototype;
ctor.extend=_287;
ctor.createSubclass=_28a;
ctor.prototype=_29d;
_29d.constructor=ctor;
_29d.getInherited=_27a;
_29d.isInstanceOf=_27d;
_29d.inherited=_27c;
_29d.__inherited=_274;
if(_29a){
_29d.declaredClass=_29a;
lang.setObject(_29a,ctor);
}
if(_29f){
for(name in _29f){
if(_29d[name]&&typeof _29f[name]=="string"&&name!=_26b){
t=_29d[name]=_296(name,_29e,_29f[name]==="after");
t.nom=name;
}
}
}
return ctor;
};
dojo.safeMixin=_289.safeMixin=_283;
dojo.declare=_289;
return _289;
});
},"dojo/dom":function(){
define(["./sniff","./_base/window"],function(has,win){
if(has("ie")<=7){
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
}
var dom={};
if(has("ie")){
dom.byId=function(id,doc){
if(typeof id!="string"){
return id;
}
var _2a2=doc||win.doc,te=id&&_2a2.getElementById(id);
if(te&&(te.attributes.id.value==id||te.id==id)){
return te;
}else{
var eles=_2a2.all[id];
if(!eles||eles.nodeName){
eles=[eles];
}
var i=0;
while((te=eles[i++])){
if((te.attributes&&te.attributes.id&&te.attributes.id.value==id)||te.id==id){
return te;
}
}
}
};
}else{
dom.byId=function(id,doc){
return ((typeof id=="string")?(doc||win.doc).getElementById(id):id)||null;
};
}
dom.isDescendant=function(node,_2a3){
try{
node=dom.byId(node);
_2a3=dom.byId(_2a3);
while(node){
if(node==_2a3){
return true;
}
node=node.parentNode;
}
}
catch(e){
}
return false;
};
has.add("css-user-select",function(_2a4,doc,_2a5){
if(!_2a5){
return false;
}
var _2a6=_2a5.style;
var _2a7=["Khtml","O","ms","Moz","Webkit"],i=_2a7.length,name="userSelect",_2a8;
do{
if(typeof _2a6[name]!=="undefined"){
return name;
}
}while(i--&&(name=_2a7[i]+"UserSelect"));
return false;
});
var _2a9=has("css-user-select");
dom.setSelectable=_2a9?function(node,_2aa){
dom.byId(node).style[_2a9]=_2aa?"":"none";
}:function(node,_2ab){
node=dom.byId(node);
var _2ac=node.getElementsByTagName("*"),i=_2ac.length;
if(_2ab){
node.removeAttribute("unselectable");
while(i--){
_2ac[i].removeAttribute("unselectable");
}
}else{
node.setAttribute("unselectable","on");
while(i--){
_2ac[i].setAttribute("unselectable","on");
}
}
};
return dom;
});
},"dojo/_base/browser":function(){
if(require.has){
require.has.add("config-selectorEngine","acme");
}
define(["../ready","./kernel","./connect","./unload","./window","./event","./html","./NodeList","../query","./xhr","./fx"],function(dojo){
return dojo;
});
},"dojo/selector/acme":function(){
define(["../dom","../sniff","../_base/array","../_base/lang","../_base/window"],function(dom,has,_2ad,lang,win){
var trim=lang.trim;
var each=_2ad.forEach;
var _2ae=function(){
return win.doc;
};
var _2af=(_2ae().compatMode)=="BackCompat";
var _2b0=">~+";
var _2b1=false;
var _2b2=function(){
return true;
};
var _2b3=function(_2b4){
if(_2b0.indexOf(_2b4.slice(-1))>=0){
_2b4+=" * ";
}else{
_2b4+=" ";
}
var ts=function(s,e){
return trim(_2b4.slice(s,e));
};
var _2b5=[];
var _2b6=-1,_2b7=-1,_2b8=-1,_2b9=-1,_2ba=-1,inId=-1,_2bb=-1,_2bc,lc="",cc="",_2bd;
var x=0,ql=_2b4.length,_2be=null,_2bf=null;
var _2c0=function(){
if(_2bb>=0){
var tv=(_2bb==x)?null:ts(_2bb,x);
_2be[(_2b0.indexOf(tv)<0)?"tag":"oper"]=tv;
_2bb=-1;
}
};
var _2c1=function(){
if(inId>=0){
_2be.id=ts(inId,x).replace(/\\/g,"");
inId=-1;
}
};
var _2c2=function(){
if(_2ba>=0){
_2be.classes.push(ts(_2ba+1,x).replace(/\\/g,""));
_2ba=-1;
}
};
var _2c3=function(){
_2c1();
_2c0();
_2c2();
};
var _2c4=function(){
_2c3();
if(_2b9>=0){
_2be.pseudos.push({name:ts(_2b9+1,x)});
}
_2be.loops=(_2be.pseudos.length||_2be.attrs.length||_2be.classes.length);
_2be.oquery=_2be.query=ts(_2bd,x);
_2be.otag=_2be.tag=(_2be["oper"])?null:(_2be.tag||"*");
if(_2be.tag){
_2be.tag=_2be.tag.toUpperCase();
}
if(_2b5.length&&(_2b5[_2b5.length-1].oper)){
_2be.infixOper=_2b5.pop();
_2be.query=_2be.infixOper.query+" "+_2be.query;
}
_2b5.push(_2be);
_2be=null;
};
for(;lc=cc,cc=_2b4.charAt(x),x<ql;x++){
if(lc=="\\"){
continue;
}
if(!_2be){
_2bd=x;
_2be={query:null,pseudos:[],attrs:[],classes:[],tag:null,oper:null,id:null,getTag:function(){
return _2b1?this.otag:this.tag;
}};
_2bb=x;
}
if(_2bc){
if(cc==_2bc){
_2bc=null;
}
continue;
}else{
if(cc=="'"||cc=="\""){
_2bc=cc;
continue;
}
}
if(_2b6>=0){
if(cc=="]"){
if(!_2bf.attr){
_2bf.attr=ts(_2b6+1,x);
}else{
_2bf.matchFor=ts((_2b8||_2b6+1),x);
}
var cmf=_2bf.matchFor;
if(cmf){
if((cmf.charAt(0)=="\"")||(cmf.charAt(0)=="'")){
_2bf.matchFor=cmf.slice(1,-1);
}
}
if(_2bf.matchFor){
_2bf.matchFor=_2bf.matchFor.replace(/\\/g,"");
}
_2be.attrs.push(_2bf);
_2bf=null;
_2b6=_2b8=-1;
}else{
if(cc=="="){
var _2c5=("|~^$*".indexOf(lc)>=0)?lc:"";
_2bf.type=_2c5+cc;
_2bf.attr=ts(_2b6+1,x-_2c5.length);
_2b8=x+1;
}
}
}else{
if(_2b7>=0){
if(cc==")"){
if(_2b9>=0){
_2bf.value=ts(_2b7+1,x);
}
_2b9=_2b7=-1;
}
}else{
if(cc=="#"){
_2c3();
inId=x+1;
}else{
if(cc=="."){
_2c3();
_2ba=x;
}else{
if(cc==":"){
_2c3();
_2b9=x;
}else{
if(cc=="["){
_2c3();
_2b6=x;
_2bf={};
}else{
if(cc=="("){
if(_2b9>=0){
_2bf={name:ts(_2b9+1,x),value:null};
_2be.pseudos.push(_2bf);
}
_2b7=x;
}else{
if((cc==" ")&&(lc!=cc)){
_2c4();
}
}
}
}
}
}
}
}
}
return _2b5;
};
var _2c6=function(_2c7,_2c8){
if(!_2c7){
return _2c8;
}
if(!_2c8){
return _2c7;
}
return function(){
return _2c7.apply(window,arguments)&&_2c8.apply(window,arguments);
};
};
var _2c9=function(i,arr){
var r=arr||[];
if(i){
r.push(i);
}
return r;
};
var _2ca=function(n){
return (1==n.nodeType);
};
var _2cb="";
var _2cc=function(elem,attr){
if(!elem){
return _2cb;
}
if(attr=="class"){
return elem.className||_2cb;
}
if(attr=="for"){
return elem.htmlFor||_2cb;
}
if(attr=="style"){
return elem.style.cssText||_2cb;
}
return (_2b1?elem.getAttribute(attr):elem.getAttribute(attr,2))||_2cb;
};
var _2cd={"*=":function(attr,_2ce){
return function(elem){
return (_2cc(elem,attr).indexOf(_2ce)>=0);
};
},"^=":function(attr,_2cf){
return function(elem){
return (_2cc(elem,attr).indexOf(_2cf)==0);
};
},"$=":function(attr,_2d0){
return function(elem){
var ea=" "+_2cc(elem,attr);
var _2d1=ea.lastIndexOf(_2d0);
return _2d1>-1&&(_2d1==(ea.length-_2d0.length));
};
},"~=":function(attr,_2d2){
var tval=" "+_2d2+" ";
return function(elem){
var ea=" "+_2cc(elem,attr)+" ";
return (ea.indexOf(tval)>=0);
};
},"|=":function(attr,_2d3){
var _2d4=_2d3+"-";
return function(elem){
var ea=_2cc(elem,attr);
return ((ea==_2d3)||(ea.indexOf(_2d4)==0));
};
},"=":function(attr,_2d5){
return function(elem){
return (_2cc(elem,attr)==_2d5);
};
}};
var _2d6=(typeof _2ae().firstChild.nextElementSibling=="undefined");
var _2d7=!_2d6?"nextElementSibling":"nextSibling";
var _2d8=!_2d6?"previousElementSibling":"previousSibling";
var _2d9=(_2d6?_2ca:_2b2);
var _2da=function(node){
while(node=node[_2d8]){
if(_2d9(node)){
return false;
}
}
return true;
};
var _2db=function(node){
while(node=node[_2d7]){
if(_2d9(node)){
return false;
}
}
return true;
};
var _2dc=function(node){
var root=node.parentNode;
root=root.nodeType!=7?root:root.nextSibling;
var i=0,tret=root.children||root.childNodes,ci=(node["_i"]||node.getAttribute("_i")||-1),cl=(root["_l"]||(typeof root.getAttribute!=="undefined"?root.getAttribute("_l"):-1));
if(!tret){
return -1;
}
var l=tret.length;
if(cl==l&&ci>=0&&cl>=0){
return ci;
}
if(has("ie")&&typeof root.setAttribute!=="undefined"){
root.setAttribute("_l",l);
}else{
root["_l"]=l;
}
ci=-1;
for(var te=root["firstElementChild"]||root["firstChild"];te;te=te[_2d7]){
if(_2d9(te)){
if(has("ie")){
te.setAttribute("_i",++i);
}else{
te["_i"]=++i;
}
if(node===te){
ci=i;
}
}
}
return ci;
};
var _2dd=function(elem){
return !((_2dc(elem))%2);
};
var _2de=function(elem){
return ((_2dc(elem))%2);
};
var _2df={"checked":function(name,_2e0){
return function(elem){
return !!("checked" in elem?elem.checked:elem.selected);
};
},"disabled":function(name,_2e1){
return function(elem){
return elem.disabled;
};
},"enabled":function(name,_2e2){
return function(elem){
return !elem.disabled;
};
},"first-child":function(){
return _2da;
},"last-child":function(){
return _2db;
},"only-child":function(name,_2e3){
return function(node){
return _2da(node)&&_2db(node);
};
},"empty":function(name,_2e4){
return function(elem){
var cn=elem.childNodes;
var cnl=elem.childNodes.length;
for(var x=cnl-1;x>=0;x--){
var nt=cn[x].nodeType;
if((nt===1)||(nt==3)){
return false;
}
}
return true;
};
},"contains":function(name,_2e5){
var cz=_2e5.charAt(0);
if(cz=="\""||cz=="'"){
_2e5=_2e5.slice(1,-1);
}
return function(elem){
return (elem.innerHTML.indexOf(_2e5)>=0);
};
},"not":function(name,_2e6){
var p=_2b3(_2e6)[0];
var _2e7={el:1};
if(p.tag!="*"){
_2e7.tag=1;
}
if(!p.classes.length){
_2e7.classes=1;
}
var ntf=_2e8(p,_2e7);
return function(elem){
return (!ntf(elem));
};
},"nth-child":function(name,_2e9){
var pi=parseInt;
if(_2e9=="odd"){
return _2de;
}else{
if(_2e9=="even"){
return _2dd;
}
}
if(_2e9.indexOf("n")!=-1){
var _2ea=_2e9.split("n",2);
var pred=_2ea[0]?((_2ea[0]=="-")?-1:pi(_2ea[0])):1;
var idx=_2ea[1]?pi(_2ea[1]):0;
var lb=0,ub=-1;
if(pred>0){
if(idx<0){
idx=(idx%pred)&&(pred+(idx%pred));
}else{
if(idx>0){
if(idx>=pred){
lb=idx-idx%pred;
}
idx=idx%pred;
}
}
}else{
if(pred<0){
pred*=-1;
if(idx>0){
ub=idx;
idx=idx%pred;
}
}
}
if(pred>0){
return function(elem){
var i=_2dc(elem);
return (i>=lb)&&(ub<0||i<=ub)&&((i%pred)==idx);
};
}else{
_2e9=idx;
}
}
var _2eb=pi(_2e9);
return function(elem){
return (_2dc(elem)==_2eb);
};
}};
var _2ec=(has("ie")<9||has("ie")==9&&has("quirks"))?function(cond){
var clc=cond.toLowerCase();
if(clc=="class"){
cond="className";
}
return function(elem){
return (_2b1?elem.getAttribute(cond):elem[cond]||elem[clc]);
};
}:function(cond){
return function(elem){
return (elem&&elem.getAttribute&&elem.hasAttribute(cond));
};
};
var _2e8=function(_2ed,_2ee){
if(!_2ed){
return _2b2;
}
_2ee=_2ee||{};
var ff=null;
if(!("el" in _2ee)){
ff=_2c6(ff,_2ca);
}
if(!("tag" in _2ee)){
if(_2ed.tag!="*"){
ff=_2c6(ff,function(elem){
return (elem&&((_2b1?elem.tagName:elem.tagName.toUpperCase())==_2ed.getTag()));
});
}
}
if(!("classes" in _2ee)){
each(_2ed.classes,function(_2ef,idx,arr){
var re=new RegExp("(?:^|\\s)"+_2ef+"(?:\\s|$)");
ff=_2c6(ff,function(elem){
return re.test(elem.className);
});
ff.count=idx;
});
}
if(!("pseudos" in _2ee)){
each(_2ed.pseudos,function(_2f0){
var pn=_2f0.name;
if(_2df[pn]){
ff=_2c6(ff,_2df[pn](pn,_2f0.value));
}
});
}
if(!("attrs" in _2ee)){
each(_2ed.attrs,function(attr){
var _2f1;
var a=attr.attr;
if(attr.type&&_2cd[attr.type]){
_2f1=_2cd[attr.type](a,attr.matchFor);
}else{
if(a.length){
_2f1=_2ec(a);
}
}
if(_2f1){
ff=_2c6(ff,_2f1);
}
});
}
if(!("id" in _2ee)){
if(_2ed.id){
ff=_2c6(ff,function(elem){
return (!!elem&&(elem.id==_2ed.id));
});
}
}
if(!ff){
if(!("default" in _2ee)){
ff=_2b2;
}
}
return ff;
};
var _2f2=function(_2f3){
return function(node,ret,bag){
while(node=node[_2d7]){
if(_2d6&&(!_2ca(node))){
continue;
}
if((!bag||_2f4(node,bag))&&_2f3(node)){
ret.push(node);
}
break;
}
return ret;
};
};
var _2f5=function(_2f6){
return function(root,ret,bag){
var te=root[_2d7];
while(te){
if(_2d9(te)){
if(bag&&!_2f4(te,bag)){
break;
}
if(_2f6(te)){
ret.push(te);
}
}
te=te[_2d7];
}
return ret;
};
};
var _2f7=function(_2f8){
_2f8=_2f8||_2b2;
return function(root,ret,bag){
var te,x=0,tret=root.children||root.childNodes;
while(te=tret[x++]){
if(_2d9(te)&&(!bag||_2f4(te,bag))&&(_2f8(te,x))){
ret.push(te);
}
}
return ret;
};
};
var _2f9=function(node,root){
var pn=node.parentNode;
while(pn){
if(pn==root){
break;
}
pn=pn.parentNode;
}
return !!pn;
};
var _2fa={};
var _2fb=function(_2fc){
var _2fd=_2fa[_2fc.query];
if(_2fd){
return _2fd;
}
var io=_2fc.infixOper;
var oper=(io?io.oper:"");
var _2fe=_2e8(_2fc,{el:1});
var qt=_2fc.tag;
var _2ff=("*"==qt);
var ecs=_2ae()["getElementsByClassName"];
if(!oper){
if(_2fc.id){
_2fe=(!_2fc.loops&&_2ff)?_2b2:_2e8(_2fc,{el:1,id:1});
_2fd=function(root,arr){
var te=dom.byId(_2fc.id,(root.ownerDocument||root));
if(!te||!_2fe(te)){
return;
}
if(9==root.nodeType){
return _2c9(te,arr);
}else{
if(_2f9(te,root)){
return _2c9(te,arr);
}
}
};
}else{
if(ecs&&/\{\s*\[native code\]\s*\}/.test(String(ecs))&&_2fc.classes.length&&!_2af){
_2fe=_2e8(_2fc,{el:1,classes:1,id:1});
var _300=_2fc.classes.join(" ");
_2fd=function(root,arr,bag){
var ret=_2c9(0,arr),te,x=0;
var tret=root.getElementsByClassName(_300);
while((te=tret[x++])){
if(_2fe(te,root)&&_2f4(te,bag)){
ret.push(te);
}
}
return ret;
};
}else{
if(!_2ff&&!_2fc.loops){
_2fd=function(root,arr,bag){
var ret=_2c9(0,arr),te,x=0;
var tag=_2fc.getTag(),tret=tag?root.getElementsByTagName(tag):[];
while((te=tret[x++])){
if(_2f4(te,bag)){
ret.push(te);
}
}
return ret;
};
}else{
_2fe=_2e8(_2fc,{el:1,tag:1,id:1});
_2fd=function(root,arr,bag){
var ret=_2c9(0,arr),te,x=0;
var tag=_2fc.getTag(),tret=tag?root.getElementsByTagName(tag):[];
while((te=tret[x++])){
if(_2fe(te,root)&&_2f4(te,bag)){
ret.push(te);
}
}
return ret;
};
}
}
}
}else{
var _301={el:1};
if(_2ff){
_301.tag=1;
}
_2fe=_2e8(_2fc,_301);
if("+"==oper){
_2fd=_2f2(_2fe);
}else{
if("~"==oper){
_2fd=_2f5(_2fe);
}else{
if(">"==oper){
_2fd=_2f7(_2fe);
}
}
}
}
return _2fa[_2fc.query]=_2fd;
};
var _302=function(root,_303){
var _304=_2c9(root),qp,x,te,qpl=_303.length,bag,ret;
for(var i=0;i<qpl;i++){
ret=[];
qp=_303[i];
x=_304.length-1;
if(x>0){
bag={};
ret.nozip=true;
}
var gef=_2fb(qp);
for(var j=0;(te=_304[j]);j++){
gef(te,ret,bag);
}
if(!ret.length){
break;
}
_304=ret;
}
return ret;
};
var _305={},_306={};
var _307=function(_308){
var _309=_2b3(trim(_308));
if(_309.length==1){
var tef=_2fb(_309[0]);
return function(root){
var r=tef(root,[]);
if(r){
r.nozip=true;
}
return r;
};
}
return function(root){
return _302(root,_309);
};
};
var _30a=has("ie")?"commentStrip":"nozip";
var qsa="querySelectorAll";
var _30b=!!_2ae()[qsa];
var _30c=/\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g;
var _30d=function(_30e,pre,ch,post){
return ch?(pre?pre+" ":"")+ch+(post?" "+post:""):_30e;
};
var _30f=/([^[]*)([^\]]*])?/g;
var _310=function(_311,_312,att){
return _312.replace(_30c,_30d)+(att||"");
};
var _313=function(_314,_315){
_314=_314.replace(_30f,_310);
if(_30b){
var _316=_306[_314];
if(_316&&!_315){
return _316;
}
}
var _317=_305[_314];
if(_317){
return _317;
}
var qcz=_314.charAt(0);
var _318=(-1==_314.indexOf(" "));
if((_314.indexOf("#")>=0)&&(_318)){
_315=true;
}
var _319=(_30b&&(!_315)&&(_2b0.indexOf(qcz)==-1)&&(!has("ie")||(_314.indexOf(":")==-1))&&(!(_2af&&(_314.indexOf(".")>=0)))&&(_314.indexOf(":contains")==-1)&&(_314.indexOf(":checked")==-1)&&(_314.indexOf("|=")==-1));
if(_319){
var tq=(_2b0.indexOf(_314.charAt(_314.length-1))>=0)?(_314+" *"):_314;
return _306[_314]=function(root){
try{
if(!((9==root.nodeType)||_318)){
throw "";
}
var r=root[qsa](tq);
r[_30a]=true;
return r;
}
catch(e){
return _313(_314,true)(root);
}
};
}else{
var _31a=_314.match(/([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g);
return _305[_314]=((_31a.length<2)?_307(_314):function(root){
var _31b=0,ret=[],tp;
while((tp=_31a[_31b++])){
ret=ret.concat(_307(tp)(root));
}
return ret;
});
}
};
var _31c=0;
var _31d=has("ie")?function(node){
if(_2b1){
return (node.getAttribute("_uid")||node.setAttribute("_uid",++_31c)||_31c);
}else{
return node.uniqueID;
}
}:function(node){
return (node._uid||(node._uid=++_31c));
};
var _2f4=function(node,bag){
if(!bag){
return 1;
}
var id=_31d(node);
if(!bag[id]){
return bag[id]=1;
}
return 0;
};
var _31e="_zipIdx";
var _31f=function(arr){
if(arr&&arr.nozip){
return arr;
}
if(!arr||!arr.length){
return [];
}
if(arr.length<2){
return [arr[0]];
}
var ret=[];
_31c++;
var x,te;
if(has("ie")&&_2b1){
var _320=_31c+"";
for(x=0;x<arr.length;x++){
if((te=arr[x])&&te.getAttribute(_31e)!=_320){
ret.push(te);
te.setAttribute(_31e,_320);
}
}
}else{
if(has("ie")&&arr.commentStrip){
try{
for(x=0;x<arr.length;x++){
if((te=arr[x])&&_2ca(te)){
ret.push(te);
}
}
}
catch(e){
}
}else{
for(x=0;x<arr.length;x++){
if((te=arr[x])&&te[_31e]!=_31c){
ret.push(te);
te[_31e]=_31c;
}
}
}
}
return ret;
};
var _321=function(_322,root){
root=root||_2ae();
var od=root.ownerDocument||root;
_2b1=(od.createElement("div").tagName==="div");
var r=_313(_322)(root);
if(r&&r.nozip){
return r;
}
return _31f(r);
};
_321.filter=function(_323,_324,root){
var _325=[],_326=_2b3(_324),_327=(_326.length==1&&!/[^\w#\.]/.test(_324))?_2e8(_326[0]):function(node){
return _2ad.indexOf(_321(_324,dom.byId(root)),node)!=-1;
};
for(var x=0,te;te=_323[x];x++){
if(_327(te)){
_325.push(te);
}
}
return _325;
};
return _321;
});
},"dojo/errors/RequestTimeoutError":function(){
define(["./create","./RequestError"],function(_328,_329){
return _328("RequestTimeoutError",null,_329,{dojoType:"timeout"});
});
},"dojo/dom-style":function(){
define(["./sniff","./dom"],function(has,dom){
var _32a,_32b={};
if(has("webkit")){
_32a=function(node){
var s;
if(node.nodeType==1){
var dv=node.ownerDocument.defaultView;
s=dv.getComputedStyle(node,null);
if(!s&&node.style){
node.style.display="";
s=dv.getComputedStyle(node,null);
}
}
return s||{};
};
}else{
if(has("ie")&&(has("ie")<9||has("quirks"))){
_32a=function(node){
return node.nodeType==1&&node.currentStyle?node.currentStyle:{};
};
}else{
_32a=function(node){
return node.nodeType==1?node.ownerDocument.defaultView.getComputedStyle(node,null):{};
};
}
}
_32b.getComputedStyle=_32a;
var _32c;
if(!has("ie")){
_32c=function(_32d,_32e){
return parseFloat(_32e)||0;
};
}else{
_32c=function(_32f,_330){
if(!_330){
return 0;
}
if(_330=="medium"){
return 4;
}
if(_330.slice&&_330.slice(-2)=="px"){
return parseFloat(_330);
}
var s=_32f.style,rs=_32f.runtimeStyle,cs=_32f.currentStyle,_331=s.left,_332=rs.left;
rs.left=cs.left;
try{
s.left=_330;
_330=s.pixelLeft;
}
catch(e){
_330=0;
}
s.left=_331;
rs.left=_332;
return _330;
};
}
_32b.toPixelValue=_32c;
var astr="DXImageTransform.Microsoft.Alpha";
var af=function(n,f){
try{
return n.filters.item(astr);
}
catch(e){
return f?{}:null;
}
};
var _333=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node){
try{
return af(node).Opacity/100;
}
catch(e){
return 1;
}
}:function(node){
return _32a(node).opacity;
};
var _334=has("ie")<9||(has("ie")<10&&has("quirks"))?function(node,_335){
if(_335===""){
_335=1;
}
var ov=_335*100,_336=_335===1;
if(_336){
node.style.zoom="";
if(af(node)){
node.style.filter=node.style.filter.replace(new RegExp("\\s*progid:"+astr+"\\([^\\)]+?\\)","i"),"");
}
}else{
node.style.zoom=1;
if(af(node)){
af(node,1).Opacity=ov;
}else{
node.style.filter+=" progid:"+astr+"(Opacity="+ov+")";
}
af(node,1).Enabled=true;
}
if(node.tagName.toLowerCase()=="tr"){
for(var td=node.firstChild;td;td=td.nextSibling){
if(td.tagName.toLowerCase()=="td"){
_334(td,_335);
}
}
}
return _335;
}:function(node,_337){
return node.style.opacity=_337;
};
var _338={left:true,top:true};
var _339=/margin|padding|width|height|max|min|offset/;
function _33a(node,type,_33b){
type=type.toLowerCase();
if(has("ie")){
if(_33b=="auto"){
if(type=="height"){
return node.offsetHeight;
}
if(type=="width"){
return node.offsetWidth;
}
}
if(type=="fontweight"){
switch(_33b){
case 700:
return "bold";
case 400:
default:
return "normal";
}
}
}
if(!(type in _338)){
_338[type]=_339.test(type);
}
return _338[type]?_32c(node,_33b):_33b;
};
var _33c={cssFloat:1,styleFloat:1,"float":1};
_32b.get=function getStyle(node,name){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
if(l==2&&op){
return _333(n);
}
name=_33c[name]?"cssFloat" in n.style?"cssFloat":"styleFloat":name;
var s=_32b.getComputedStyle(n);
return (l==1)?s:_33a(n,name,s[name]||n.style[name]);
};
_32b.set=function setStyle(node,name,_33d){
var n=dom.byId(node),l=arguments.length,op=(name=="opacity");
name=_33c[name]?"cssFloat" in n.style?"cssFloat":"styleFloat":name;
if(l==3){
return op?_334(n,_33d):n.style[name]=_33d;
}
for(var x in name){
_32b.set(node,x,name[x]);
}
return _32b.getComputedStyle(n);
};
return _32b;
});
},"dojo/dom-geometry":function(){
define(["./sniff","./_base/window","./dom","./dom-style"],function(has,win,dom,_33e){
var geom={};
geom.boxModel="content-box";
if(has("ie")){
geom.boxModel=document.compatMode=="BackCompat"?"border-box":"content-box";
}
geom.getPadExtents=function getPadExtents(node,_33f){
node=dom.byId(node);
var s=_33f||_33e.getComputedStyle(node),px=_33e.toPixelValue,l=px(node,s.paddingLeft),t=px(node,s.paddingTop),r=px(node,s.paddingRight),b=px(node,s.paddingBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
var none="none";
geom.getBorderExtents=function getBorderExtents(node,_340){
node=dom.byId(node);
var px=_33e.toPixelValue,s=_340||_33e.getComputedStyle(node),l=s.borderLeftStyle!=none?px(node,s.borderLeftWidth):0,t=s.borderTopStyle!=none?px(node,s.borderTopWidth):0,r=s.borderRightStyle!=none?px(node,s.borderRightWidth):0,b=s.borderBottomStyle!=none?px(node,s.borderBottomWidth):0;
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getPadBorderExtents=function getPadBorderExtents(node,_341){
node=dom.byId(node);
var s=_341||_33e.getComputedStyle(node),p=geom.getPadExtents(node,s),b=geom.getBorderExtents(node,s);
return {l:p.l+b.l,t:p.t+b.t,r:p.r+b.r,b:p.b+b.b,w:p.w+b.w,h:p.h+b.h};
};
geom.getMarginExtents=function getMarginExtents(node,_342){
node=dom.byId(node);
var s=_342||_33e.getComputedStyle(node),px=_33e.toPixelValue,l=px(node,s.marginLeft),t=px(node,s.marginTop),r=px(node,s.marginRight),b=px(node,s.marginBottom);
return {l:l,t:t,r:r,b:b,w:l+r,h:t+b};
};
geom.getMarginBox=function getMarginBox(node,_343){
node=dom.byId(node);
var s=_343||_33e.getComputedStyle(node),me=geom.getMarginExtents(node,s),l=node.offsetLeft-me.l,t=node.offsetTop-me.t,p=node.parentNode,px=_33e.toPixelValue,pcs;
if(has("mozilla")){
var sl=parseFloat(s.left),st=parseFloat(s.top);
if(!isNaN(sl)&&!isNaN(st)){
l=sl;
t=st;
}else{
if(p&&p.style){
pcs=_33e.getComputedStyle(p);
if(pcs.overflow!="visible"){
l+=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t+=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
}else{
if(has("opera")||(has("ie")==8&&!has("quirks"))){
if(p){
pcs=_33e.getComputedStyle(p);
l-=pcs.borderLeftStyle!=none?px(node,pcs.borderLeftWidth):0;
t-=pcs.borderTopStyle!=none?px(node,pcs.borderTopWidth):0;
}
}
}
return {l:l,t:t,w:node.offsetWidth+me.w,h:node.offsetHeight+me.h};
};
geom.getContentBox=function getContentBox(node,_344){
node=dom.byId(node);
var s=_344||_33e.getComputedStyle(node),w=node.clientWidth,h,pe=geom.getPadExtents(node,s),be=geom.getBorderExtents(node,s);
if(!w){
w=node.offsetWidth;
h=node.offsetHeight;
}else{
h=node.clientHeight;
be.w=be.h=0;
}
if(has("opera")){
pe.l+=be.l;
pe.t+=be.t;
}
return {l:pe.l,t:pe.t,w:w-pe.w-be.w,h:h-pe.h-be.h};
};
function _345(node,l,t,w,h,u){
u=u||"px";
var s=node.style;
if(!isNaN(l)){
s.left=l+u;
}
if(!isNaN(t)){
s.top=t+u;
}
if(w>=0){
s.width=w+u;
}
if(h>=0){
s.height=h+u;
}
};
function _346(node){
return node.tagName.toLowerCase()=="button"||node.tagName.toLowerCase()=="input"&&(node.getAttribute("type")||"").toLowerCase()=="button";
};
function _347(node){
return geom.boxModel=="border-box"||node.tagName.toLowerCase()=="table"||_346(node);
};
geom.setContentSize=function setContentSize(node,box,_348){
node=dom.byId(node);
var w=box.w,h=box.h;
if(_347(node)){
var pb=geom.getPadBorderExtents(node,_348);
if(w>=0){
w+=pb.w;
}
if(h>=0){
h+=pb.h;
}
}
_345(node,NaN,NaN,w,h);
};
var _349={l:0,t:0,w:0,h:0};
geom.setMarginBox=function setMarginBox(node,box,_34a){
node=dom.byId(node);
var s=_34a||_33e.getComputedStyle(node),w=box.w,h=box.h,pb=_347(node)?_349:geom.getPadBorderExtents(node,s),mb=geom.getMarginExtents(node,s);
if(has("webkit")){
if(_346(node)){
var ns=node.style;
if(w>=0&&!ns.width){
ns.width="4px";
}
if(h>=0&&!ns.height){
ns.height="4px";
}
}
}
if(w>=0){
w=Math.max(w-pb.w-mb.w,0);
}
if(h>=0){
h=Math.max(h-pb.h-mb.h,0);
}
_345(node,box.l,box.t,w,h);
};
geom.isBodyLtr=function isBodyLtr(doc){
doc=doc||win.doc;
return (win.body(doc).dir||doc.documentElement.dir||"ltr").toLowerCase()=="ltr";
};
geom.docScroll=function docScroll(doc){
doc=doc||win.doc;
var node=win.doc.parentWindow||win.doc.defaultView;
return "pageXOffset" in node?{x:node.pageXOffset,y:node.pageYOffset}:(node=has("quirks")?win.body(doc):doc.documentElement)&&{x:geom.fixIeBiDiScrollLeft(node.scrollLeft||0,doc),y:node.scrollTop||0};
};
if(has("ie")){
geom.getIeDocumentElementOffset=function getIeDocumentElementOffset(doc){
doc=doc||win.doc;
var de=doc.documentElement;
if(has("ie")<8){
var r=de.getBoundingClientRect(),l=r.left,t=r.top;
if(has("ie")<7){
l+=de.clientLeft;
t+=de.clientTop;
}
return {x:l<0?0:l,y:t<0?0:t};
}else{
return {x:0,y:0};
}
};
}
geom.fixIeBiDiScrollLeft=function fixIeBiDiScrollLeft(_34b,doc){
doc=doc||win.doc;
var ie=has("ie");
if(ie&&!geom.isBodyLtr(doc)){
var qk=has("quirks"),de=qk?win.body(doc):doc.documentElement,pwin=win.global;
if(ie==6&&!qk&&pwin.frameElement&&de.scrollHeight>de.clientHeight){
_34b+=de.clientLeft;
}
return (ie<8||qk)?(_34b+de.clientWidth-de.scrollWidth):-_34b;
}
return _34b;
};
geom.position=function(node,_34c){
node=dom.byId(node);
var db=win.body(node.ownerDocument),ret=node.getBoundingClientRect();
ret={x:ret.left,y:ret.top,w:ret.right-ret.left,h:ret.bottom-ret.top};
if(has("ie")<9){
var _34d=geom.getIeDocumentElementOffset(node.ownerDocument);
ret.x-=_34d.x+(has("quirks")?db.clientLeft+db.offsetLeft:0);
ret.y-=_34d.y+(has("quirks")?db.clientTop+db.offsetTop:0);
}
if(_34c){
var _34e=geom.docScroll(node.ownerDocument);
ret.x+=_34e.x;
ret.y+=_34e.y;
}
return ret;
};
geom.getMarginSize=function getMarginSize(node,_34f){
node=dom.byId(node);
var me=geom.getMarginExtents(node,_34f||_33e.getComputedStyle(node));
var size=node.getBoundingClientRect();
return {w:(size.right-size.left)+me.w,h:(size.bottom-size.top)+me.h};
};
geom.normalizeEvent=function(_350){
if(!("layerX" in _350)){
_350.layerX=_350.offsetX;
_350.layerY=_350.offsetY;
}
if(!has("dom-addeventlistener")){
var se=_350.target;
var doc=(se&&se.ownerDocument)||document;
var _351=has("quirks")?doc.body:doc.documentElement;
var _352=geom.getIeDocumentElementOffset(doc);
_350.pageX=_350.clientX+geom.fixIeBiDiScrollLeft(_351.scrollLeft||0,doc)-_352.x;
_350.pageY=_350.clientY+(_351.scrollTop||0)-_352.y;
}
};
return geom;
});
},"dojo/dom-prop":function(){
define(["exports","./_base/kernel","./sniff","./_base/lang","./dom","./dom-style","./dom-construct","./_base/connect"],function(_353,dojo,has,lang,dom,_354,ctr,conn){
var _355={},_356=0,_357=dojo._scopeName+"attrid";
_353.names={"class":"className","for":"htmlFor",tabindex:"tabIndex",readonly:"readOnly",colspan:"colSpan",frameborder:"frameBorder",rowspan:"rowSpan",valuetype:"valueType"};
_353.get=function getProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_358=_353.names[lc]||name;
return node[_358];
};
_353.set=function setProp(node,name,_359){
node=dom.byId(node);
var l=arguments.length;
if(l==2&&typeof name!="string"){
for(var x in name){
_353.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_35a=_353.names[lc]||name;
if(_35a=="style"&&typeof _359!="string"){
_354.set(node,_359);
return node;
}
if(_35a=="innerHTML"){
if(has("ie")&&node.tagName.toLowerCase() in {col:1,colgroup:1,table:1,tbody:1,tfoot:1,thead:1,tr:1,title:1}){
ctr.empty(node);
node.appendChild(ctr.toDom(_359,node.ownerDocument));
}else{
node[_35a]=_359;
}
return node;
}
if(lang.isFunction(_359)){
var _35b=node[_357];
if(!_35b){
_35b=_356++;
node[_357]=_35b;
}
if(!_355[_35b]){
_355[_35b]={};
}
var h=_355[_35b][_35a];
if(h){
conn.disconnect(h);
}else{
try{
delete node[_35a];
}
catch(e){
}
}
if(_359){
_355[_35b][_35a]=conn.connect(node,_35a,_359);
}else{
node[_35a]=null;
}
return node;
}
node[_35a]=_359;
return node;
};
});
},"dojo/when":function(){
define(["./Deferred","./promise/Promise"],function(_35c,_35d){
"use strict";
return function when(_35e,_35f,_360,_361){
var _362=_35e&&typeof _35e.then==="function";
var _363=_362&&_35e instanceof _35d;
if(!_362){
if(arguments.length>1){
return _35f?_35f(_35e):_35e;
}else{
return new _35c().resolve(_35e);
}
}else{
if(!_363){
var _364=new _35c(_35e.cancel);
_35e.then(_364.resolve,_364.reject,_364.progress);
_35e=_364.promise;
}
}
if(_35f||_360||_361){
return _35e.then(_35f,_360,_361);
}
return _35e;
};
});
},"dojo/dom-attr":function(){
define(["exports","./sniff","./_base/lang","./dom","./dom-style","./dom-prop"],function(_365,has,lang,dom,_366,prop){
var _367={innerHTML:1,className:1,htmlFor:has("ie"),value:1},_368={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};
function _369(node,name){
var attr=node.getAttributeNode&&node.getAttributeNode(name);
return attr&&attr.specified;
};
_365.has=function hasAttr(node,name){
var lc=name.toLowerCase();
return _367[prop.names[lc]||name]||_369(dom.byId(node),_368[lc]||name);
};
_365.get=function getAttr(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_36a=prop.names[lc]||name,_36b=_367[_36a],_36c=node[_36a];
if(_36b&&typeof _36c!="undefined"){
return _36c;
}
if(_36a!="href"&&(typeof _36c=="boolean"||lang.isFunction(_36c))){
return _36c;
}
var _36d=_368[lc]||name;
return _369(node,_36d)?node.getAttribute(_36d):null;
};
_365.set=function setAttr(node,name,_36e){
node=dom.byId(node);
if(arguments.length==2){
for(var x in name){
_365.set(node,x,name[x]);
}
return node;
}
var lc=name.toLowerCase(),_36f=prop.names[lc]||name,_370=_367[_36f];
if(_36f=="style"&&typeof _36e!="string"){
_366.set(node,_36e);
return node;
}
if(_370||typeof _36e=="boolean"||lang.isFunction(_36e)){
return prop.set(node,name,_36e);
}
node.setAttribute(_368[lc]||name,_36e);
return node;
};
_365.remove=function removeAttr(node,name){
dom.byId(node).removeAttribute(_368[name.toLowerCase()]||name);
};
_365.getNodeProp=function getNodeProp(node,name){
node=dom.byId(node);
var lc=name.toLowerCase(),_371=prop.names[lc]||name;
if((_371 in node)&&_371!="href"){
return node[_371];
}
var _372=_368[lc]||name;
return _369(node,_372)?node.getAttribute(_372):null;
};
});
},"dojo/dom-construct":function(){
define(["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr"],function(_373,dojo,has,win,dom,attr){
var _374={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},_375=/<\s*([\w\:]+)/,_376={},_377=0,_378="__"+dojo._scopeName+"ToDomId";
for(var _379 in _374){
if(_374.hasOwnProperty(_379)){
var tw=_374[_379];
tw.pre=_379=="option"?"<select multiple=\"multiple\">":"<"+tw.join("><")+">";
tw.post="</"+tw.reverse().join("></")+">";
}
}
var _37a;
if(has("ie")<=8){
_37a=function(doc){
doc.__dojo_html5_tested="yes";
var div=_37b("div",{innerHTML:"<nav>a</nav>",style:{visibility:"hidden"}},doc.body);
if(div.childNodes.length!==1){
("abbr article aside audio canvas details figcaption figure footer header "+"hgroup mark meter nav output progress section summary time video").replace(/\b\w+\b/g,function(n){
doc.createElement(n);
});
}
_37c(div);
};
}
function _37d(node,ref){
var _37e=ref.parentNode;
if(_37e){
_37e.insertBefore(node,ref);
}
};
function _37f(node,ref){
var _380=ref.parentNode;
if(_380){
if(_380.lastChild==ref){
_380.appendChild(node);
}else{
_380.insertBefore(node,ref.nextSibling);
}
}
};
_373.toDom=function toDom(frag,doc){
doc=doc||win.doc;
var _381=doc[_378];
if(!_381){
doc[_378]=_381=++_377+"";
_376[_381]=doc.createElement("div");
}
if(has("ie")<=8){
if(!doc.__dojo_html5_tested&&doc.body){
_37a(doc);
}
}
frag+="";
var _382=frag.match(_375),tag=_382?_382[1].toLowerCase():"",_383=_376[_381],wrap,i,fc,df;
if(_382&&_374[tag]){
wrap=_374[tag];
_383.innerHTML=wrap.pre+frag+wrap.post;
for(i=wrap.length;i;--i){
_383=_383.firstChild;
}
}else{
_383.innerHTML=frag;
}
if(_383.childNodes.length==1){
return _383.removeChild(_383.firstChild);
}
df=doc.createDocumentFragment();
while((fc=_383.firstChild)){
df.appendChild(fc);
}
return df;
};
_373.place=function place(node,_384,_385){
_384=dom.byId(_384);
if(typeof node=="string"){
node=/^\s*</.test(node)?_373.toDom(node,_384.ownerDocument):dom.byId(node);
}
if(typeof _385=="number"){
var cn=_384.childNodes;
if(!cn.length||cn.length<=_385){
_384.appendChild(node);
}else{
_37d(node,cn[_385<0?0:_385]);
}
}else{
switch(_385){
case "before":
_37d(node,_384);
break;
case "after":
_37f(node,_384);
break;
case "replace":
_384.parentNode.replaceChild(node,_384);
break;
case "only":
_373.empty(_384);
_384.appendChild(node);
break;
case "first":
if(_384.firstChild){
_37d(node,_384.firstChild);
break;
}
default:
_384.appendChild(node);
}
}
return node;
};
var _37b=_373.create=function _37b(tag,_386,_387,pos){
var doc=win.doc;
if(_387){
_387=dom.byId(_387);
doc=_387.ownerDocument;
}
if(typeof tag=="string"){
tag=doc.createElement(tag);
}
if(_386){
attr.set(tag,_386);
}
if(_387){
_373.place(tag,_387,pos);
}
return tag;
};
function _388(node){
if(node.canHaveChildren){
try{
node.innerHTML="";
return;
}
catch(e){
}
}
for(var c;c=node.lastChild;){
_389(c,node);
}
};
_373.empty=function empty(node){
_388(dom.byId(node));
};
function _389(node,_38a){
if(node.firstChild){
_388(node);
}
if(_38a){
has("ie")&&_38a.canHaveChildren&&"removeNode" in node?node.removeNode(false):_38a.removeChild(node);
}
};
var _37c=_373.destroy=function _37c(node){
node=dom.byId(node);
if(!node){
return;
}
_389(node,node.parentNode);
};
});
},"dojo/request/xhr":function(){
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(_38b,_38c,_38d,util,has){
has.add("native-xhr",function(){
return typeof XMLHttpRequest!=="undefined";
});
has.add("dojo-force-activex-xhr",function(){
return has("activex")&&!document.addEventListener&&window.location.protocol==="file:";
});
has.add("native-xhr2",function(){
if(!has("native-xhr")){
return;
}
var x=new XMLHttpRequest();
return typeof x["addEventListener"]!=="undefined"&&(typeof opera==="undefined"||typeof x["upload"]!=="undefined");
});
has.add("native-formdata",function(){
return typeof FormData==="function";
});
function _38e(_38f,_390){
var _391=_38f.xhr;
_38f.status=_38f.xhr.status;
_38f.text=_391.responseText;
if(_38f.options.handleAs==="xml"){
_38f.data=_391.responseXML;
}
if(!_390){
try{
_38d(_38f);
}
catch(e){
_390=e;
}
}
if(_390){
this.reject(_390);
}else{
if(util.checkStatus(_391.status)){
this.resolve(_38f);
}else{
_390=new _38b("Unable to load "+_38f.url+" status: "+_391.status,_38f);
this.reject(_390);
}
}
};
var _392,_393,_394,_395;
if(has("native-xhr2")){
_392=function(_396){
return !this.isFulfilled();
};
_395=function(dfd,_397){
_397.xhr.abort();
};
_394=function(_398,dfd,_399){
function _39a(evt){
dfd.handleResponse(_399);
};
function _39b(evt){
var _39c=evt.target;
var _39d=new _38b("Unable to load "+_399.url+" status: "+_39c.status,_399);
dfd.handleResponse(_399,_39d);
};
function _39e(evt){
if(evt.lengthComputable){
_399.loaded=evt.loaded;
_399.total=evt.total;
dfd.progress(_399);
}
};
_398.addEventListener("load",_39a,false);
_398.addEventListener("error",_39b,false);
_398.addEventListener("progress",_39e,false);
return function(){
_398.removeEventListener("load",_39a,false);
_398.removeEventListener("error",_39b,false);
_398.removeEventListener("progress",_39e,false);
_398=null;
};
};
}else{
_392=function(_39f){
return _39f.xhr.readyState;
};
_393=function(_3a0){
return 4===_3a0.xhr.readyState;
};
_395=function(dfd,_3a1){
var xhr=_3a1.xhr;
var _3a2=typeof xhr.abort;
if(_3a2==="function"||_3a2==="object"||_3a2==="unknown"){
xhr.abort();
}
};
}
function _3a3(_3a4){
return this.xhr.getResponseHeader(_3a4);
};
var _3a5,_3a6={data:null,query:null,sync:false,method:"GET"};
function xhr(url,_3a7,_3a8){
var _3a9=util.parseArgs(url,util.deepCreate(_3a6,_3a7),has("native-formdata")&&_3a7&&_3a7.data&&_3a7.data instanceof FormData);
url=_3a9.url;
_3a7=_3a9.options;
var _3aa,last=function(){
_3aa&&_3aa();
};
var dfd=util.deferred(_3a9,_395,_392,_393,_38e,last);
var _3ab=_3a9.xhr=xhr._create();
if(!_3ab){
dfd.cancel(new _38b("XHR was not created"));
return _3a8?dfd:dfd.promise;
}
_3a9.getHeader=_3a3;
if(_394){
_3aa=_394(_3ab,dfd,_3a9);
}
var data=_3a7.data,_3ac=!_3a7.sync,_3ad=_3a7.method;
try{
_3ab.open(_3ad,url,_3ac,_3a7.user||_3a5,_3a7.password||_3a5);
if(_3a7.withCredentials){
_3ab.withCredentials=_3a7.withCredentials;
}
var _3ae=_3a7.headers,_3af="application/x-www-form-urlencoded";
if(_3ae){
for(var hdr in _3ae){
if(hdr.toLowerCase()==="content-type"){
_3af=_3ae[hdr];
}else{
if(_3ae[hdr]){
_3ab.setRequestHeader(hdr,_3ae[hdr]);
}
}
}
}
if(_3af&&_3af!==false){
_3ab.setRequestHeader("Content-Type",_3af);
}
if(!_3ae||!("X-Requested-With" in _3ae)){
_3ab.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
if(util.notify){
util.notify.emit("send",_3a9,dfd.promise.cancel);
}
_3ab.send(data);
}
catch(e){
dfd.reject(e);
}
_38c(dfd);
_3ab=null;
return _3a8?dfd:dfd.promise;
};
xhr._create=function(){
throw new Error("XMLHTTP not available");
};
if(has("native-xhr")&&!has("dojo-force-activex-xhr")){
xhr._create=function(){
return new XMLHttpRequest();
};
}else{
if(has("activex")){
try{
new ActiveXObject("Msxml2.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Msxml2.XMLHTTP");
};
}
catch(e){
try{
new ActiveXObject("Microsoft.XMLHTTP");
xhr._create=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
catch(e){
}
}
}
}
util.addCommonMethods(xhr);
return xhr;
});
},"dojo/keys":function(){
define(["./_base/kernel","./sniff"],function(dojo,has){
return dojo.keys={BACKSPACE:8,TAB:9,CLEAR:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,META:has("webkit")?91:224,PAUSE:19,CAPS_LOCK:20,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,INSERT:45,DELETE:46,HELP:47,LEFT_WINDOW:91,RIGHT_WINDOW:92,SELECT:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,NUMPAD_MULTIPLY:106,NUMPAD_PLUS:107,NUMPAD_ENTER:108,NUMPAD_MINUS:109,NUMPAD_PERIOD:110,NUMPAD_DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,NUM_LOCK:144,SCROLL_LOCK:145,UP_DPAD:175,DOWN_DPAD:176,LEFT_DPAD:177,RIGHT_DPAD:178,copyKey:has("mac")&&!has("air")?(has("safari")?91:224):17};
});
},"dojo/domReady":function(){
define(["./has"],function(has){
var _3b0=this,doc=document,_3b1={"loaded":1,"complete":1},_3b2=typeof doc.readyState!="string",_3b3=!!_3b1[doc.readyState],_3b4=[],_3b5;
function _3b6(_3b7){
_3b4.push(_3b7);
if(_3b3){
_3b8();
}
};
_3b6.load=function(id,req,load){
_3b6(load);
};
_3b6._Q=_3b4;
_3b6._onQEmpty=function(){
};
if(_3b2){
doc.readyState="loading";
}
function _3b8(){
if(_3b5){
return;
}
_3b5=true;
while(_3b4.length){
try{
(_3b4.shift())(doc);
}
catch(err){
}
}
_3b5=false;
_3b6._onQEmpty();
};
if(!_3b3){
var _3b9=[],_3ba=function(evt){
evt=evt||_3b0.event;
if(_3b3||(evt.type=="readystatechange"&&!_3b1[doc.readyState])){
return;
}
if(_3b2){
doc.readyState="complete";
}
_3b3=1;
_3b8();
},on=function(node,_3bb){
node.addEventListener(_3bb,_3ba,false);
_3b4.push(function(){
node.removeEventListener(_3bb,_3ba,false);
});
};
if(!has("dom-addeventlistener")){
on=function(node,_3bc){
_3bc="on"+_3bc;
node.attachEvent(_3bc,_3ba);
_3b4.push(function(){
node.detachEvent(_3bc,_3ba);
});
};
var div=doc.createElement("div");
try{
if(div.doScroll&&_3b0.frameElement===null){
_3b9.push(function(){
try{
div.doScroll("left");
return 1;
}
catch(e){
}
});
}
}
catch(e){
}
}
on(doc,"DOMContentLoaded");
on(_3b0,"load");
if("onreadystatechange" in doc){
on(doc,"readystatechange");
}else{
if(!_3b2){
_3b9.push(function(){
return _3b1[doc.readyState];
});
}
}
if(_3b9.length){
var _3bd=function(){
if(_3b3){
return;
}
var i=_3b9.length;
while(i--){
if(_3b9[i]()){
_3ba("poller");
return;
}
}
setTimeout(_3bd,30);
};
_3bd();
}
}
return _3b6;
});
},"dojo/_base/lang":function(){
define(["./kernel","../has","../sniff"],function(dojo,has){
has.add("bug-for-in-skips-shadowed",function(){
for(var i in {toString:1}){
return 0;
}
return 1;
});
var _3be=has("bug-for-in-skips-shadowed")?"hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split("."):[],_3bf=_3be.length,_3c0=function(_3c1,_3c2,_3c3){
var p,i=0,_3c4=dojo.global;
if(!_3c3){
if(!_3c1.length){
return _3c4;
}else{
p=_3c1[i++];
try{
_3c3=dojo.scopeMap[p]&&dojo.scopeMap[p][1];
}
catch(e){
}
_3c3=_3c3||(p in _3c4?_3c4[p]:(_3c2?_3c4[p]={}:undefined));
}
}
while(_3c3&&(p=_3c1[i++])){
_3c3=(p in _3c3?_3c3[p]:(_3c2?_3c3[p]={}:undefined));
}
return _3c3;
},opts=Object.prototype.toString,_3c5=function(obj,_3c6,_3c7){
return (_3c7||[]).concat(Array.prototype.slice.call(obj,_3c6||0));
},_3c8=/\{([^\}]+)\}/g;
var lang={_extraNames:_3be,_mixin:function(dest,_3c9,_3ca){
var name,s,i,_3cb={};
for(name in _3c9){
s=_3c9[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _3cb)||_3cb[name]!==s))){
dest[name]=_3ca?_3ca(s):s;
}
}
if(has("bug-for-in-skips-shadowed")){
if(_3c9){
for(i=0;i<_3bf;++i){
name=_3be[i];
s=_3c9[name];
if(!(name in dest)||(dest[name]!==s&&(!(name in _3cb)||_3cb[name]!==s))){
dest[name]=_3ca?_3ca(s):s;
}
}
}
}
return dest;
},mixin:function(dest,_3cc){
if(!dest){
dest={};
}
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(dest,arguments[i]);
}
return dest;
},setObject:function(name,_3cd,_3ce){
var _3cf=name.split("."),p=_3cf.pop(),obj=_3c0(_3cf,true,_3ce);
return obj&&p?(obj[p]=_3cd):undefined;
},getObject:function(name,_3d0,_3d1){
return _3c0(name.split("."),_3d0,_3d1);
},exists:function(name,obj){
return lang.getObject(name,false,obj)!==undefined;
},isString:function(it){
return (typeof it=="string"||it instanceof String);
},isArray:function(it){
return it&&(it instanceof Array||typeof it=="array");
},isFunction:function(it){
return opts.call(it)==="[object Function]";
},isObject:function(it){
return it!==undefined&&(it===null||typeof it=="object"||lang.isArray(it)||lang.isFunction(it));
},isArrayLike:function(it){
return it&&it!==undefined&&!lang.isString(it)&&!lang.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(lang.isArray(it)||isFinite(it.length));
},isAlien:function(it){
return it&&!lang.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));
},extend:function(ctor,_3d2){
for(var i=1,l=arguments.length;i<l;i++){
lang._mixin(ctor.prototype,arguments[i]);
}
return ctor;
},_hitchArgs:function(_3d3,_3d4){
var pre=lang._toArray(arguments,2);
var _3d5=lang.isString(_3d4);
return function(){
var args=lang._toArray(arguments);
var f=_3d5?(_3d3||dojo.global)[_3d4]:_3d4;
return f&&f.apply(_3d3||this,pre.concat(args));
};
},hitch:function(_3d6,_3d7){
if(arguments.length>2){
return lang._hitchArgs.apply(dojo,arguments);
}
if(!_3d7){
_3d7=_3d6;
_3d6=null;
}
if(lang.isString(_3d7)){
_3d6=_3d6||dojo.global;
if(!_3d6[_3d7]){
throw (["lang.hitch: scope[\"",_3d7,"\"] is null (scope=\"",_3d6,"\")"].join(""));
}
return function(){
return _3d6[_3d7].apply(_3d6,arguments||[]);
};
}
return !_3d6?_3d7:function(){
return _3d7.apply(_3d6,arguments||[]);
};
},delegate:(function(){
function TMP(){
};
return function(obj,_3d8){
TMP.prototype=obj;
var tmp=new TMP();
TMP.prototype=null;
if(_3d8){
lang._mixin(tmp,_3d8);
}
return tmp;
};
})(),_toArray:has("ie")?(function(){
function slow(obj,_3d9,_3da){
var arr=_3da||[];
for(var x=_3d9||0;x<obj.length;x++){
arr.push(obj[x]);
}
return arr;
};
return function(obj){
return ((obj.item)?slow:_3c5).apply(this,arguments);
};
})():_3c5,partial:function(_3db){
var arr=[null];
return lang.hitch.apply(dojo,arr.concat(lang._toArray(arguments)));
},clone:function(src){
if(!src||typeof src!="object"||lang.isFunction(src)){
return src;
}
if(src.nodeType&&"cloneNode" in src){
return src.cloneNode(true);
}
if(src instanceof Date){
return new Date(src.getTime());
}
if(src instanceof RegExp){
return new RegExp(src);
}
var r,i,l;
if(lang.isArray(src)){
r=[];
for(i=0,l=src.length;i<l;++i){
if(i in src){
r.push(lang.clone(src[i]));
}
}
}else{
r=src.constructor?new src.constructor():{};
}
return lang._mixin(r,src,lang.clone);
},trim:String.prototype.trim?function(str){
return str.trim();
}:function(str){
return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
},replace:function(tmpl,map,_3dc){
return tmpl.replace(_3dc||_3c8,lang.isFunction(map)?map:function(_3dd,k){
return lang.getObject(k,false,map);
});
}};
1&&lang.mixin(dojo,lang);
return lang;
});
},"dojo/request/util":function(){
define(["exports","../errors/RequestError","../errors/CancelError","../Deferred","../io-query","../_base/array","../_base/lang","../promise/Promise"],function(_3de,_3df,_3e0,_3e1,_3e2,_3e3,lang,_3e4){
_3de.deepCopy=function deepCopy(_3e5,_3e6){
for(var name in _3e6){
var tval=_3e5[name],sval=_3e6[name];
if(tval!==sval){
if(tval&&typeof tval==="object"&&sval&&typeof sval==="object"){
_3de.deepCopy(tval,sval);
}else{
_3e5[name]=sval;
}
}
}
return _3e5;
};
_3de.deepCreate=function deepCreate(_3e7,_3e8){
_3e8=_3e8||{};
var _3e9=lang.delegate(_3e7),name,_3ea;
for(name in _3e7){
_3ea=_3e7[name];
if(_3ea&&typeof _3ea==="object"){
_3e9[name]=_3de.deepCreate(_3ea,_3e8[name]);
}
}
return _3de.deepCopy(_3e9,_3e8);
};
var _3eb=Object.freeze||function(obj){
return obj;
};
function _3ec(_3ed){
return _3eb(_3ed);
};
function _3ee(_3ef){
return _3ef.data||_3ef.text;
};
_3de.deferred=function deferred(_3f0,_3f1,_3f2,_3f3,_3f4,last){
var def=new _3e1(function(_3f5){
_3f1&&_3f1(def,_3f0);
if(!_3f5||!(_3f5 instanceof _3df)&&!(_3f5 instanceof _3e0)){
return new _3e0("Request canceled",_3f0);
}
return _3f5;
});
def.response=_3f0;
def.isValid=_3f2;
def.isReady=_3f3;
def.handleResponse=_3f4;
function _3f6(_3f7){
_3f7.response=_3f0;
throw _3f7;
};
var _3f8=def.then(_3ec).otherwise(_3f6);
if(_3de.notify){
_3f8.then(lang.hitch(_3de.notify,"emit","load"),lang.hitch(_3de.notify,"emit","error"));
}
var _3f9=_3f8.then(_3ee);
var _3fa=new _3e4();
for(var prop in _3f9){
if(_3f9.hasOwnProperty(prop)){
_3fa[prop]=_3f9[prop];
}
}
_3fa.response=_3f8;
_3eb(_3fa);
if(last){
def.then(function(_3fb){
last.call(def,_3fb);
},function(_3fc){
last.call(def,_3f0,_3fc);
});
}
def.promise=_3fa;
def.then=_3fa.then;
return def;
};
_3de.addCommonMethods=function addCommonMethods(_3fd,_3fe){
_3e3.forEach(_3fe||["GET","POST","PUT","DELETE"],function(_3ff){
_3fd[(_3ff==="DELETE"?"DEL":_3ff).toLowerCase()]=function(url,_400){
_400=lang.delegate(_400||{});
_400.method=_3ff;
return _3fd(url,_400);
};
});
};
_3de.parseArgs=function parseArgs(url,_401,_402){
var data=_401.data,_403=_401.query;
if(data&&!_402){
if(typeof data==="object"){
_401.data=_3e2.objectToQuery(data);
}
}
if(_403){
if(typeof _403==="object"){
_403=_3e2.objectToQuery(_403);
}
if(_401.preventCache){
_403+=(_403?"&":"")+"request.preventCache="+(+(new Date));
}
}else{
if(_401.preventCache){
_403="request.preventCache="+(+(new Date));
}
}
if(url&&_403){
url+=(~url.indexOf("?")?"&":"?")+_403;
}
return {url:url,options:_401,getHeader:function(_404){
return null;
}};
};
_3de.checkStatus=function(stat){
stat=stat||0;
return (stat>=200&&stat<300)||stat===304||stat===1223||!stat;
};
});
},"dojo/Evented":function(){
define(["./aspect","./on"],function(_405,on){
"use strict";
var _406=_405.after;
function _407(){
};
_407.prototype={on:function(type,_408){
return on.parse(this,type,_408,function(_409,type){
return _406(_409,"on"+type,_408,true);
});
},emit:function(type,_40a){
var args=[this];
args.push.apply(args,arguments);
return on.emit.apply(on,args);
}};
return _407;
});
},"dojo/mouse":function(){
define(["./_base/kernel","./on","./has","./dom","./_base/window"],function(dojo,on,has,dom,win){
has.add("dom-quirks",win.doc&&win.doc.compatMode=="BackCompat");
has.add("events-mouseenter",win.doc&&"onmouseenter" in win.doc.createElement("div"));
has.add("events-mousewheel",win.doc&&"onmousewheel" in win.doc);
var _40b;
if((has("dom-quirks")&&has("ie"))||!has("dom-addeventlistener")){
_40b={LEFT:1,MIDDLE:4,RIGHT:2,isButton:function(e,_40c){
return e.button&_40c;
},isLeft:function(e){
return e.button&1;
},isMiddle:function(e){
return e.button&4;
},isRight:function(e){
return e.button&2;
}};
}else{
_40b={LEFT:0,MIDDLE:1,RIGHT:2,isButton:function(e,_40d){
return e.button==_40d;
},isLeft:function(e){
return e.button==0;
},isMiddle:function(e){
return e.button==1;
},isRight:function(e){
return e.button==2;
}};
}
dojo.mouseButtons=_40b;
function _40e(type,_40f){
var _410=function(node,_411){
return on(node,type,function(evt){
if(_40f){
return _40f(evt,_411);
}
if(!dom.isDescendant(evt.relatedTarget,node)){
return _411.call(this,evt);
}
});
};
_410.bubble=function(_412){
return _40e(type,function(evt,_413){
var _414=_412(evt.target);
var _415=evt.relatedTarget;
if(_414&&(_414!=(_415&&_415.nodeType==1&&_412(_415)))){
return _413.call(_414,evt);
}
});
};
return _410;
};
var _416;
if(has("events-mousewheel")){
_416="mousewheel";
}else{
_416=function(node,_417){
return on(node,"DOMMouseScroll",function(evt){
evt.wheelDelta=-evt.detail;
_417.call(this,evt);
});
};
}
return {_eventHandler:_40e,enter:_40e("mouseover"),leave:_40e("mouseout"),wheel:_416,isLeft:_40b.isLeft,isMiddle:_40b.isMiddle,isRight:_40b.isRight};
});
},"dojo/topic":function(){
define(["./Evented"],function(_418){
var hub=new _418;
return {publish:function(_419,_41a){
return hub.emit.apply(hub,arguments);
},subscribe:function(_41b,_41c){
return hub.on.apply(hub,arguments);
}};
});
},"dojo/_base/xhr":function(){
define(["./kernel","./sniff","require","../io-query","../dom","../dom-form","./Deferred","./config","./json","./lang","./array","../on","../aspect","../request/watch","../request/xhr","../request/util"],function(dojo,has,_41d,ioq,dom,_41e,_41f,_420,json,lang,_421,on,_422,_423,_424,util){
dojo._xhrObj=_424._create;
var cfg=dojo.config;
dojo.objectToQuery=ioq.objectToQuery;
dojo.queryToObject=ioq.queryToObject;
dojo.fieldToObject=_41e.fieldToObject;
dojo.formToObject=_41e.toObject;
dojo.formToQuery=_41e.toQuery;
dojo.formToJson=_41e.toJson;
dojo._blockAsync=false;
var _425=dojo._contentHandlers=dojo.contentHandlers={"text":function(xhr){
return xhr.responseText;
},"json":function(xhr){
return json.fromJson(xhr.responseText||null);
},"json-comment-filtered":function(xhr){
if(!_420.useCommentedJson){
console.warn("Consider using the standard mimetype:application/json."+" json-commenting can introduce security issues. To"+" decrease the chances of hijacking, use the standard the 'json' handler and"+" prefix your json with: {}&&\n"+"Use djConfig.useCommentedJson=true to turn off this message.");
}
var _426=xhr.responseText;
var _427=_426.indexOf("/*");
var _428=_426.lastIndexOf("*/");
if(_427==-1||_428==-1){
throw new Error("JSON was not comment filtered");
}
return json.fromJson(_426.substring(_427+2,_428));
},"javascript":function(xhr){
return dojo.eval(xhr.responseText);
},"xml":function(xhr){
var _429=xhr.responseXML;
if(_429&&has("dom-qsa2.1")&&!_429.querySelectorAll&&has("dom-parser")){
_429=new DOMParser().parseFromString(xhr.responseText,"application/xml");
}
if(has("ie")){
if((!_429||!_429.documentElement)){
var ms=function(n){
return "MSXML"+n+".DOMDocument";
};
var dp=["Microsoft.XMLDOM",ms(6),ms(4),ms(3),ms(2)];
_421.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(xhr.responseText);
_429=dom;
}
catch(e){
return false;
}
return true;
});
}
}
return _429;
},"json-comment-optional":function(xhr){
if(xhr.responseText&&/^[^{\[]*\/\*/.test(xhr.responseText)){
return _425["json-comment-filtered"](xhr);
}else{
return _425["json"](xhr);
}
}};
dojo._ioSetArgs=function(args,_42a,_42b,_42c){
var _42d={args:args,url:args.url};
var _42e=null;
if(args.form){
var form=dom.byId(args.form);
var _42f=form.getAttributeNode("action");
_42d.url=_42d.url||(_42f?_42f.value:null);
_42e=_41e.toObject(form);
}
var _430=[{}];
if(_42e){
_430.push(_42e);
}
if(args.content){
_430.push(args.content);
}
if(args.preventCache){
_430.push({"dojo.preventCache":new Date().valueOf()});
}
_42d.query=ioq.objectToQuery(lang.mixin.apply(null,_430));
_42d.handleAs=args.handleAs||"text";
var d=new _41f(function(dfd){
dfd.canceled=true;
_42a&&_42a(dfd);
var err=dfd.ioArgs.error;
if(!err){
err=new Error("request cancelled");
err.dojoType="cancel";
dfd.ioArgs.error=err;
}
return err;
});
d.addCallback(_42b);
var ld=args.load;
if(ld&&lang.isFunction(ld)){
d.addCallback(function(_431){
return ld.call(args,_431,_42d);
});
}
var err=args.error;
if(err&&lang.isFunction(err)){
d.addErrback(function(_432){
return err.call(args,_432,_42d);
});
}
var _433=args.handle;
if(_433&&lang.isFunction(_433)){
d.addBoth(function(_434){
return _433.call(args,_434,_42d);
});
}
d.addErrback(function(_435){
return _42c(_435,d);
});
if(cfg.ioPublish&&dojo.publish&&_42d.args.ioPublish!==false){
d.addCallbacks(function(res){
dojo.publish("/dojo/io/load",[d,res]);
return res;
},function(res){
dojo.publish("/dojo/io/error",[d,res]);
return res;
});
d.addBoth(function(res){
dojo.publish("/dojo/io/done",[d,res]);
return res;
});
}
d.ioArgs=_42d;
return d;
};
var _436=function(dfd){
var ret=_425[dfd.ioArgs.handleAs](dfd.ioArgs.xhr);
return ret===undefined?null:ret;
};
var _437=function(_438,dfd){
if(!dfd.ioArgs.args.failOk){
console.error(_438);
}
return _438;
};
var _439=function(dfd){
if(_43a<=0){
_43a=0;
if(cfg.ioPublish&&dojo.publish&&(!dfd||dfd&&dfd.ioArgs.args.ioPublish!==false)){
dojo.publish("/dojo/io/stop");
}
}
};
var _43a=0;
_422.after(_423,"_onAction",function(){
_43a-=1;
});
_422.after(_423,"_onInFlight",_439);
dojo._ioCancelAll=_423.cancelAll;
dojo._ioNotifyStart=function(dfd){
if(cfg.ioPublish&&dojo.publish&&dfd.ioArgs.args.ioPublish!==false){
if(!_43a){
dojo.publish("/dojo/io/start");
}
_43a+=1;
dojo.publish("/dojo/io/send",[dfd]);
}
};
dojo._ioWatch=function(dfd,_43b,_43c,_43d){
var args=dfd.ioArgs.options=dfd.ioArgs.args;
lang.mixin(dfd,{response:dfd.ioArgs,isValid:function(_43e){
return _43b(dfd);
},isReady:function(_43f){
return _43c(dfd);
},handleResponse:function(_440){
return _43d(dfd);
}});
_423(dfd);
_439(dfd);
};
var _441="application/x-www-form-urlencoded";
dojo._ioAddQueryToUrl=function(_442){
if(_442.query.length){
_442.url+=(_442.url.indexOf("?")==-1?"?":"&")+_442.query;
_442.query=null;
}
};
dojo.xhr=function(_443,args,_444){
var rDfd;
var dfd=dojo._ioSetArgs(args,function(dfd){
rDfd&&rDfd.cancel();
},_436,_437);
var _445=dfd.ioArgs;
if("postData" in args){
_445.query=args.postData;
}else{
if("putData" in args){
_445.query=args.putData;
}else{
if("rawBody" in args){
_445.query=args.rawBody;
}else{
if((arguments.length>2&&!_444)||"POST|PUT".indexOf(_443.toUpperCase())===-1){
dojo._ioAddQueryToUrl(_445);
}
}
}
}
var _446={method:_443,handleAs:"text",timeout:args.timeout,withCredentials:args.withCredentials,ioArgs:_445};
if(typeof args.headers!=="undefined"){
_446.headers=args.headers;
}
if(typeof args.contentType!=="undefined"){
if(!_446.headers){
_446.headers={};
}
_446.headers["Content-Type"]=args.contentType;
}
if(typeof _445.query!=="undefined"){
_446.data=_445.query;
}
if(typeof args.sync!=="undefined"){
_446.sync=args.sync;
}
dojo._ioNotifyStart(dfd);
try{
rDfd=_424(_445.url,_446,true);
}
catch(e){
dfd.cancel();
return dfd;
}
dfd.ioArgs.xhr=rDfd.response.xhr;
rDfd.then(function(){
dfd.resolve(dfd);
}).otherwise(function(_447){
_445.error=_447;
if(_447.response){
_447.status=_447.response.status;
_447.responseText=_447.response.text;
_447.xhr=_447.response.xhr;
}
dfd.reject(_447);
});
return dfd;
};
dojo.xhrGet=function(args){
return dojo.xhr("GET",args);
};
dojo.rawXhrPost=dojo.xhrPost=function(args){
return dojo.xhr("POST",args,true);
};
dojo.rawXhrPut=dojo.xhrPut=function(args){
return dojo.xhr("PUT",args,true);
};
dojo.xhrDelete=function(args){
return dojo.xhr("DELETE",args);
};
dojo._isDocumentOk=function(x){
return util.checkStatus(x.status);
};
dojo._getText=function(url){
var _448;
dojo.xhrGet({url:url,sync:true,load:function(text){
_448=text;
}});
return _448;
};
lang.mixin(dojo.xhr,{_xhrObj:dojo._xhrObj,fieldToObject:_41e.fieldToObject,formToObject:_41e.toObject,objectToQuery:ioq.objectToQuery,formToQuery:_41e.toQuery,formToJson:_41e.toJson,queryToObject:ioq.queryToObject,contentHandlers:_425,_ioSetArgs:dojo._ioSetArgs,_ioCancelAll:dojo._ioCancelAll,_ioNotifyStart:dojo._ioNotifyStart,_ioWatch:dojo._ioWatch,_ioAddQueryToUrl:dojo._ioAddQueryToUrl,_isDocumentOk:dojo._isDocumentOk,_getText:dojo._getText,get:dojo.xhrGet,post:dojo.xhrPost,put:dojo.xhrPut,del:dojo.xhrDelete});
return dojo.xhr;
});
},"dojo/_base/unload":function(){
define(["./kernel","./lang","../on"],function(dojo,lang,on){
var win=window;
var _449={addOnWindowUnload:function(obj,_44a){
if(!dojo.windowUnloaded){
on(win,"unload",(dojo.windowUnloaded=function(){
}));
}
on(win,"unload",lang.hitch(obj,_44a));
},addOnUnload:function(obj,_44b){
on(win,"beforeunload",lang.hitch(obj,_44b));
}};
dojo.addOnWindowUnload=_449.addOnWindowUnload;
dojo.addOnUnload=_449.addOnUnload;
return _449;
});
},"dojo/Deferred":function(){
define(["./has","./_base/lang","./errors/CancelError","./promise/Promise","./promise/instrumentation"],function(has,lang,_44c,_44d,_44e){
"use strict";
var _44f=0,_450=1,_451=2;
var _452="This deferred has already been fulfilled.";
var _453=Object.freeze||function(){
};
var _454=function(_455,type,_456,_457,_458){
if(1){
if(type===_451&&_459.instrumentRejected&&_455.length===0){
_459.instrumentRejected(_456,false,_457,_458);
}
}
for(var i=0;i<_455.length;i++){
_45a(_455[i],type,_456,_457);
}
};
var _45a=function(_45b,type,_45c,_45d){
var func=_45b[type];
var _45e=_45b.deferred;
if(func){
try{
var _45f=func(_45c);
if(type===_44f){
if(typeof _45f!=="undefined"){
_460(_45e,type,_45f);
}
}else{
if(_45f&&typeof _45f.then==="function"){
_45b.cancel=_45f.cancel;
_45f.then(_461(_45e,_450),_461(_45e,_451),_461(_45e,_44f));
return;
}
_460(_45e,_450,_45f);
}
}
catch(error){
_460(_45e,_451,error);
}
}else{
_460(_45e,type,_45c);
}
if(1){
if(type===_451&&_459.instrumentRejected){
_459.instrumentRejected(_45c,!!func,_45d,_45e.promise);
}
}
};
var _461=function(_462,type){
return function(_463){
_460(_462,type,_463);
};
};
var _460=function(_464,type,_465){
if(!_464.isCanceled()){
switch(type){
case _44f:
_464.progress(_465);
break;
case _450:
_464.resolve(_465);
break;
case _451:
_464.reject(_465);
break;
}
}
};
var _459=function(_466){
var _467=this.promise=new _44d();
var _468=this;
var _469,_46a,_46b;
var _46c=false;
var _46d=[];
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_468,_459);
Error.captureStackTrace(_467,_459);
}
this.isResolved=_467.isResolved=function(){
return _469===_450;
};
this.isRejected=_467.isRejected=function(){
return _469===_451;
};
this.isFulfilled=_467.isFulfilled=function(){
return !!_469;
};
this.isCanceled=_467.isCanceled=function(){
return _46c;
};
this.progress=function(_46e,_46f){
if(!_469){
_454(_46d,_44f,_46e,null,_468);
return _467;
}else{
if(_46f===true){
throw new Error(_452);
}else{
return _467;
}
}
};
this.resolve=function(_470,_471){
if(!_469){
_454(_46d,_469=_450,_46a=_470,null,_468);
_46d=null;
return _467;
}else{
if(_471===true){
throw new Error(_452);
}else{
return _467;
}
}
};
var _472=this.reject=function(_473,_474){
if(!_469){
if(1&&Error.captureStackTrace){
Error.captureStackTrace(_46b={},_472);
}
_454(_46d,_469=_451,_46a=_473,_46b,_468);
_46d=null;
return _467;
}else{
if(_474===true){
throw new Error(_452);
}else{
return _467;
}
}
};
this.then=_467.then=function(_475,_476,_477){
var _478=[_477,_475,_476];
_478.cancel=_467.cancel;
_478.deferred=new _459(function(_479){
return _478.cancel&&_478.cancel(_479);
});
if(_469&&!_46d){
_45a(_478,_469,_46a,_46b);
}else{
_46d.push(_478);
}
return _478.deferred.promise;
};
this.cancel=_467.cancel=function(_47a,_47b){
if(!_469){
if(_466){
var _47c=_466(_47a);
_47a=typeof _47c==="undefined"?_47a:_47c;
}
_46c=true;
if(!_469){
if(typeof _47a==="undefined"){
_47a=new _44c();
}
_472(_47a);
return _47a;
}else{
if(_469===_451&&_46a===_47a){
return _47a;
}
}
}else{
if(_47b===true){
throw new Error(_452);
}
}
};
_453(_467);
};
_459.prototype.toString=function(){
return "[object Deferred]";
};
if(_44e){
_44e(_459);
}
return _459;
});
},"dojo/_base/NodeList":function(){
define(["./kernel","../query","./array","./html","../NodeList-dom"],function(dojo,_47d,_47e){
var _47f=_47d.NodeList,nlp=_47f.prototype;
nlp.connect=_47f._adaptAsForEach(function(){
return dojo.connect.apply(this,arguments);
});
nlp.coords=_47f._adaptAsMap(dojo.coords);
_47f.events=["blur","focus","change","click","error","keydown","keypress","keyup","load","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","submit"];
_47e.forEach(_47f.events,function(evt){
var _480="on"+evt;
nlp[_480]=function(a,b){
return this.connect(_480,a,b);
};
});
dojo.NodeList=_47f;
return _47f;
});
},"dojo/_base/Color":function(){
define(["./kernel","./lang","./array","./config"],function(dojo,lang,_481,_482){
var _483=dojo.Color=function(_484){
if(_484){
this.setColor(_484);
}
};
_483.named={"black":[0,0,0],"silver":[192,192,192],"gray":[128,128,128],"white":[255,255,255],"maroon":[128,0,0],"red":[255,0,0],"purple":[128,0,128],"fuchsia":[255,0,255],"green":[0,128,0],"lime":[0,255,0],"olive":[128,128,0],"yellow":[255,255,0],"navy":[0,0,128],"blue":[0,0,255],"teal":[0,128,128],"aqua":[0,255,255],"transparent":_482.transparentColor||[0,0,0,0]};
lang.extend(_483,{r:255,g:255,b:255,a:1,_set:function(r,g,b,a){
var t=this;
t.r=r;
t.g=g;
t.b=b;
t.a=a;
},setColor:function(_485){
if(lang.isString(_485)){
_483.fromString(_485,this);
}else{
if(lang.isArray(_485)){
_483.fromArray(_485,this);
}else{
this._set(_485.r,_485.g,_485.b,_485.a);
if(!(_485 instanceof _483)){
this.sanitize();
}
}
}
return this;
},sanitize:function(){
return this;
},toRgb:function(){
var t=this;
return [t.r,t.g,t.b];
},toRgba:function(){
var t=this;
return [t.r,t.g,t.b,t.a];
},toHex:function(){
var arr=_481.map(["r","g","b"],function(x){
var s=this[x].toString(16);
return s.length<2?"0"+s:s;
},this);
return "#"+arr.join("");
},toCss:function(_486){
var t=this,rgb=t.r+", "+t.g+", "+t.b;
return (_486?"rgba("+rgb+", "+t.a:"rgb("+rgb)+")";
},toString:function(){
return this.toCss(true);
}});
_483.blendColors=dojo.blendColors=function(_487,end,_488,obj){
var t=obj||new _483();
_481.forEach(["r","g","b","a"],function(x){
t[x]=_487[x]+(end[x]-_487[x])*_488;
if(x!="a"){
t[x]=Math.round(t[x]);
}
});
return t.sanitize();
};
_483.fromRgb=dojo.colorFromRgb=function(_489,obj){
var m=_489.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
return m&&_483.fromArray(m[1].split(/\s*,\s*/),obj);
};
_483.fromHex=dojo.colorFromHex=function(_48a,obj){
var t=obj||new _483(),bits=(_48a.length==4)?4:8,mask=(1<<bits)-1;
_48a=Number("0x"+_48a.substr(1));
if(isNaN(_48a)){
return null;
}
_481.forEach(["b","g","r"],function(x){
var c=_48a&mask;
_48a>>=bits;
t[x]=bits==4?17*c:c;
});
t.a=1;
return t;
};
_483.fromArray=dojo.colorFromArray=function(a,obj){
var t=obj||new _483();
t._set(Number(a[0]),Number(a[1]),Number(a[2]),Number(a[3]));
if(isNaN(t.a)){
t.a=1;
}
return t.sanitize();
};
_483.fromString=dojo.colorFromString=function(str,obj){
var a=_483.named[str];
return a&&_483.fromArray(a,obj)||_483.fromRgb(str,obj)||_483.fromHex(str,obj);
};
return _483;
});
},"dojo/promise/instrumentation":function(){
define(["./tracer","../has","../_base/lang","../_base/array"],function(_48b,has,lang,_48c){
function _48d(_48e,_48f,_490){
var _491="";
if(_48e&&_48e.stack){
_491+=_48e.stack;
}
if(_48f&&_48f.stack){
_491+="\n    ----------------------------------------\n    rejected"+_48f.stack.split("\n").slice(1).join("\n").replace(/^\s+/," ");
}
if(_490&&_490.stack){
_491+="\n    ----------------------------------------\n"+_490.stack;
}
console.error(_48e,_491);
};
function _492(_493,_494,_495,_496){
if(!_494){
_48d(_493,_495,_496);
}
};
var _497=[];
var _498=false;
var _499=1000;
function _49a(_49b,_49c,_49d,_49e){
if(_49c){
_48c.some(_497,function(obj,ix){
if(obj.error===_49b){
_497.splice(ix,1);
return true;
}
});
}else{
if(!_48c.some(_497,function(obj){
return obj.error===_49b;
})){
_497.push({error:_49b,rejection:_49d,deferred:_49e,timestamp:new Date().getTime()});
}
}
if(!_498){
_498=setTimeout(_49f,_499);
}
};
function _49f(){
var now=new Date().getTime();
var _4a0=now-_499;
_497=_48c.filter(_497,function(obj){
if(obj.timestamp<_4a0){
_48d(obj.error,obj.rejection,obj.deferred);
return false;
}
return true;
});
if(_497.length){
_498=setTimeout(_49f,_497[0].timestamp+_499-now);
}else{
_498=false;
}
};
return function(_4a1){
var _4a2=has("config-useDeferredInstrumentation");
if(_4a2){
_48b.on("resolved",lang.hitch(console,"log","resolved"));
_48b.on("rejected",lang.hitch(console,"log","rejected"));
_48b.on("progress",lang.hitch(console,"log","progress"));
var args=[];
if(typeof _4a2==="string"){
args=_4a2.split(",");
_4a2=args.shift();
}
if(_4a2==="report-rejections"){
_4a1.instrumentRejected=_492;
}else{
if(_4a2==="report-unhandled-rejections"||_4a2===true||_4a2===1){
_4a1.instrumentRejected=_49a;
_499=parseInt(args[0],10)||_499;
}else{
throw new Error("Unsupported instrumentation usage <"+_4a2+">");
}
}
}
};
});
},"dojo/selector/_loader":function(){
define(["../has","require"],function(has,_4a3){
"use strict";
var _4a4=document.createElement("div");
has.add("dom-qsa2.1",!!_4a4.querySelectorAll);
has.add("dom-qsa3",function(){
try{
_4a4.innerHTML="<p class='TEST'></p>";
return _4a4.querySelectorAll(".TEST:empty").length==1;
}
catch(e){
}
});
var _4a5;
var acme="./acme",lite="./lite";
return {load:function(id,_4a6,_4a7,_4a8){
var req=_4a3;
id=id=="default"?has("config-selectorEngine")||"css3":id;
id=id=="css2"||id=="lite"?lite:id=="css2.1"?has("dom-qsa2.1")?lite:acme:id=="css3"?has("dom-qsa3")?lite:acme:id=="acme"?acme:(req=_4a6)&&id;
if(id.charAt(id.length-1)=="?"){
id=id.substring(0,id.length-1);
var _4a9=true;
}
if(_4a9&&(has("dom-compliant-qsa")||_4a5)){
return _4a7(_4a5);
}
req([id],function(_4aa){
if(id!="./lite"){
_4a5=_4aa;
}
_4a7(_4aa);
});
}};
});
},"dojo/promise/Promise":function(){
define(["../_base/lang"],function(lang){
"use strict";
function _4ab(){
throw new TypeError("abstract");
};
return lang.extend(function Promise(){
},{then:function(_4ac,_4ad,_4ae){
_4ab();
},cancel:function(_4af,_4b0){
_4ab();
},isResolved:function(){
_4ab();
},isRejected:function(){
_4ab();
},isFulfilled:function(){
_4ab();
},isCanceled:function(){
_4ab();
},always:function(_4b1){
return this.then(_4b1,_4b1);
},otherwise:function(_4b2){
return this.then(null,_4b2);
},trace:function(){
return this;
},traceRejected:function(){
return this;
},toString:function(){
return "[object Promise]";
}});
});
},"dojo/request/watch":function(){
define(["./util","../errors/RequestTimeoutError","../errors/CancelError","../_base/array","../_base/window","../has!host-browser?dom-addeventlistener?:../on:"],function(util,_4b3,_4b4,_4b5,win,on){
var _4b6=null,_4b7=[];
function _4b8(){
var now=+(new Date);
for(var i=0,dfd;i<_4b7.length&&(dfd=_4b7[i]);i++){
var _4b9=dfd.response,_4ba=_4b9.options;
if((dfd.isCanceled&&dfd.isCanceled())||(dfd.isValid&&!dfd.isValid(_4b9))){
_4b7.splice(i--,1);
_4bb._onAction&&_4bb._onAction();
}else{
if(dfd.isReady&&dfd.isReady(_4b9)){
_4b7.splice(i--,1);
dfd.handleResponse(_4b9);
_4bb._onAction&&_4bb._onAction();
}else{
if(dfd.startTime){
if(dfd.startTime+(_4ba.timeout||0)<now){
_4b7.splice(i--,1);
dfd.cancel(new _4b3("Timeout exceeded",_4b9));
_4bb._onAction&&_4bb._onAction();
}
}
}
}
}
_4bb._onInFlight&&_4bb._onInFlight(dfd);
if(!_4b7.length){
clearInterval(_4b6);
_4b6=null;
}
};
function _4bb(dfd){
if(dfd.response.options.timeout){
dfd.startTime=+(new Date);
}
if(dfd.isFulfilled()){
return;
}
_4b7.push(dfd);
if(!_4b6){
_4b6=setInterval(_4b8,50);
}
if(dfd.response.options.sync){
_4b8();
}
};
_4bb.cancelAll=function cancelAll(){
try{
_4b5.forEach(_4b7,function(dfd){
try{
dfd.cancel(new _4b4("All requests canceled."));
}
catch(e){
}
});
}
catch(e){
}
};
if(win&&on&&win.doc.attachEvent){
on(win.global,"unload",function(){
_4bb.cancelAll();
});
}
return _4bb;
});
},"dojo/on":function(){
define(["./has!dom-addeventlistener?:./aspect","./_base/kernel","./sniff"],function(_4bc,dojo,has){
"use strict";
if(1){
var _4bd=window.ScriptEngineMajorVersion;
has.add("jscript",_4bd&&(_4bd()+ScriptEngineMinorVersion()/10));
has.add("event-orientationchange",has("touch")&&!has("android"));
has.add("event-stopimmediatepropagation",window.Event&&!!window.Event.prototype&&!!window.Event.prototype.stopImmediatePropagation);
has.add("event-focusin",function(_4be,doc,_4bf){
return !!_4bf.attachEvent;
});
}
var on=function(_4c0,type,_4c1,_4c2){
if(typeof _4c0.on=="function"&&typeof type!="function"&&!_4c0.nodeType){
return _4c0.on(type,_4c1);
}
return on.parse(_4c0,type,_4c1,_4c3,_4c2,this);
};
on.pausable=function(_4c4,type,_4c5,_4c6){
var _4c7;
var _4c8=on(_4c4,type,function(){
if(!_4c7){
return _4c5.apply(this,arguments);
}
},_4c6);
_4c8.pause=function(){
_4c7=true;
};
_4c8.resume=function(){
_4c7=false;
};
return _4c8;
};
on.once=function(_4c9,type,_4ca,_4cb){
var _4cc=on(_4c9,type,function(){
_4cc.remove();
return _4ca.apply(this,arguments);
});
return _4cc;
};
on.parse=function(_4cd,type,_4ce,_4cf,_4d0,_4d1){
if(type.call){
return type.call(_4d1,_4cd,_4ce);
}
if(type.indexOf(",")>-1){
var _4d2=type.split(/\s*,\s*/);
var _4d3=[];
var i=0;
var _4d4;
while(_4d4=_4d2[i++]){
_4d3.push(_4cf(_4cd,_4d4,_4ce,_4d0,_4d1));
}
_4d3.remove=function(){
for(var i=0;i<_4d3.length;i++){
_4d3[i].remove();
}
};
return _4d3;
}
return _4cf(_4cd,type,_4ce,_4d0,_4d1);
};
var _4d5=/^touch/;
function _4c3(_4d6,type,_4d7,_4d8,_4d9){
var _4da=type.match(/(.*):(.*)/);
if(_4da){
type=_4da[2];
_4da=_4da[1];
return on.selector(_4da,type).call(_4d9,_4d6,_4d7);
}
if(has("touch")){
if(_4d5.test(type)){
_4d7=_4db(_4d7);
}
if(!has("event-orientationchange")&&(type=="orientationchange")){
type="resize";
_4d6=window;
_4d7=_4db(_4d7);
}
}
if(_4dc){
_4d7=_4dc(_4d7);
}
if(_4d6.addEventListener){
var _4dd=type in _4de,_4df=_4dd?_4de[type]:type;
_4d6.addEventListener(_4df,_4d7,_4dd);
return {remove:function(){
_4d6.removeEventListener(_4df,_4d7,_4dd);
}};
}
type="on"+type;
if(_4e0&&_4d6.attachEvent){
return _4e0(_4d6,type,_4d7);
}
throw new Error("Target must be an event emitter");
};
on.selector=function(_4e1,_4e2,_4e3){
return function(_4e4,_4e5){
var _4e6=typeof _4e1=="function"?{matches:_4e1}:this,_4e7=_4e2.bubble;
function _4e8(_4e9){
_4e6=_4e6&&_4e6.matches?_4e6:dojo.query;
while(!_4e6.matches(_4e9,_4e1,_4e4)){
if(_4e9==_4e4||_4e3===false||!(_4e9=_4e9.parentNode)||_4e9.nodeType!=1){
return;
}
}
return _4e9;
};
if(_4e7){
return on(_4e4,_4e7(_4e8),_4e5);
}
return on(_4e4,_4e2,function(_4ea){
var _4eb=_4e8(_4ea.target);
return _4eb&&_4e5.call(_4eb,_4ea);
});
};
};
function _4ec(){
this.cancelable=false;
this.defaultPrevented=true;
};
function _4ed(){
this.bubbles=false;
};
var _4ee=[].slice,_4ef=on.emit=function(_4f0,type,_4f1){
var args=_4ee.call(arguments,2);
var _4f2="on"+type;
if("parentNode" in _4f0){
var _4f3=args[0]={};
for(var i in _4f1){
_4f3[i]=_4f1[i];
}
_4f3.preventDefault=_4ec;
_4f3.stopPropagation=_4ed;
_4f3.target=_4f0;
_4f3.type=type;
_4f1=_4f3;
}
do{
_4f0[_4f2]&&_4f0[_4f2].apply(_4f0,args);
}while(_4f1&&_4f1.bubbles&&(_4f0=_4f0.parentNode));
return _4f1&&_4f1.cancelable&&_4f1;
};
var _4de=has("event-focusin")?{}:{focusin:"focus",focusout:"blur"};
if(!has("event-stopimmediatepropagation")){
var _4f4=function(){
this.immediatelyStopped=true;
this.modified=true;
};
var _4dc=function(_4f5){
return function(_4f6){
if(!_4f6.immediatelyStopped){
_4f6.stopImmediatePropagation=_4f4;
return _4f5.apply(this,arguments);
}
};
};
}
if(has("dom-addeventlistener")){
on.emit=function(_4f7,type,_4f8){
if(_4f7.dispatchEvent&&document.createEvent){
var _4f9=_4f7.ownerDocument.createEvent("HTMLEvents");
_4f9.initEvent(type,!!_4f8.bubbles,!!_4f8.cancelable);
for(var i in _4f8){
if(!(i in _4f9)){
_4f9[i]=_4f8[i];
}
}
return _4f7.dispatchEvent(_4f9)&&_4f9;
}
return _4ef.apply(on,arguments);
};
}else{
on._fixEvent=function(evt,_4fa){
if(!evt){
var w=_4fa&&(_4fa.ownerDocument||_4fa.document||_4fa).parentWindow||window;
evt=w.event;
}
if(!evt){
return evt;
}
try{
if(_4fb&&evt.type==_4fb.type&&evt.srcElement==_4fb.target){
evt=_4fb;
}
}
catch(e){
}
if(!evt.target){
evt.target=evt.srcElement;
evt.currentTarget=(_4fa||evt.srcElement);
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
if(!evt.stopPropagation){
evt.stopPropagation=_4fc;
evt.preventDefault=_4fd;
}
switch(evt.type){
case "keypress":
var c=("charCode" in evt?evt.charCode:evt.keyCode);
if(c==10){
c=0;
evt.keyCode=13;
}else{
if(c==13||c==27){
c=0;
}else{
if(c==3){
c=99;
}
}
}
evt.charCode=c;
_4fe(evt);
break;
}
}
return evt;
};
var _4fb,_4ff=function(_500){
this.handle=_500;
};
_4ff.prototype.remove=function(){
delete _dojoIEListeners_[this.handle];
};
var _501=function(_502){
return function(evt){
evt=on._fixEvent(evt,this);
var _503=_502.call(this,evt);
if(evt.modified){
if(!_4fb){
setTimeout(function(){
_4fb=null;
});
}
_4fb=evt;
}
return _503;
};
};
var _4e0=function(_504,type,_505){
_505=_501(_505);
if(((_504.ownerDocument?_504.ownerDocument.parentWindow:_504.parentWindow||_504.window||window)!=top||has("jscript")<5.8)&&!has("config-_allow_leaks")){
if(typeof _dojoIEListeners_=="undefined"){
_dojoIEListeners_=[];
}
var _506=_504[type];
if(!_506||!_506.listeners){
var _507=_506;
_506=Function("event","var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}");
_506.listeners=[];
_504[type]=_506;
_506.global=this;
if(_507){
_506.listeners.push(_dojoIEListeners_.push(_507)-1);
}
}
var _508;
_506.listeners.push(_508=(_506.global._dojoIEListeners_.push(_505)-1));
return new _4ff(_508);
}
return _4bc.after(_504,type,_505,true);
};
var _4fe=function(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _4fc=function(){
this.cancelBubble=true;
};
var _4fd=on._preventDefault=function(){
this.bubbledKeyCode=this.keyCode;
if(this.ctrlKey){
try{
this.keyCode=0;
}
catch(e){
}
}
this.defaultPrevented=true;
this.returnValue=false;
this.modified=true;
};
}
if(has("touch")){
var _509=function(){
};
var _50a=window.orientation;
var _4db=function(_50b){
return function(_50c){
var _50d=_50c.corrected;
if(!_50d){
var type=_50c.type;
try{
delete _50c.type;
}
catch(e){
}
if(_50c.type){
if(has("mozilla")){
var _50d={};
for(var name in _50c){
_50d[name]=_50c[name];
}
}else{
_509.prototype=_50c;
var _50d=new _509;
}
_50d.preventDefault=function(){
_50c.preventDefault();
};
_50d.stopPropagation=function(){
_50c.stopPropagation();
};
}else{
_50d=_50c;
_50d.type=type;
}
_50c.corrected=_50d;
if(type=="resize"){
if(_50a==window.orientation){
return null;
}
_50a=window.orientation;
_50d.type="orientationchange";
return _50b.call(this,_50d);
}
if(!("rotation" in _50d)){
_50d.rotation=0;
_50d.scale=1;
}
var _50e=_50d.changedTouches[0];
for(var i in _50e){
delete _50d[i];
_50d[i]=_50e[i];
}
}
return _50b.call(this,_50d);
};
};
}
return on;
});
},"dojo/_base/sniff":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
if(!1){
return has;
}
dojo._name="browser";
lang.mixin(dojo,{isBrowser:true,isFF:has("ff"),isIE:has("ie"),isKhtml:has("khtml"),isWebKit:has("webkit"),isMozilla:has("mozilla"),isMoz:has("mozilla"),isOpera:has("opera"),isSafari:has("safari"),isChrome:has("chrome"),isMac:has("mac"),isIos:has("ios"),isAndroid:has("android"),isWii:has("wii"),isQuirks:has("quirks"),isAir:has("air")});
return has;
});
},"dojo/errors/create":function(){
define(["../_base/lang"],function(lang){
return function(name,ctor,base,_50f){
base=base||Error;
var _510=function(_511){
if(base===Error){
if(Error.captureStackTrace){
Error.captureStackTrace(this,_510);
}
var err=Error.call(this,_511),prop;
for(prop in err){
if(err.hasOwnProperty(prop)){
this[prop]=err[prop];
}
}
this.message=_511;
this.stack=err.stack;
}else{
base.apply(this,arguments);
}
if(ctor){
ctor.apply(this,arguments);
}
};
_510.prototype=lang.delegate(base.prototype,_50f);
_510.prototype.name=name;
_510.prototype.constructor=_510;
return _510;
};
});
},"dojo/_base/array":function(){
define(["./kernel","../has","./lang"],function(dojo,has,lang){
var _512={},u;
function _513(fn){
return _512[fn]=new Function("item","index","array",fn);
};
function _514(some){
var _515=!some;
return function(a,fn,o){
var i=0,l=a&&a.length||0,_516;
if(l&&typeof a=="string"){
a=a.split("");
}
if(typeof fn=="string"){
fn=_512[fn]||_513(fn);
}
if(o){
for(;i<l;++i){
_516=!fn.call(o,a[i],i,a);
if(some^_516){
return !_516;
}
}
}else{
for(;i<l;++i){
_516=!fn(a[i],i,a);
if(some^_516){
return !_516;
}
}
}
return _515;
};
};
function _517(up){
var _518=1,_519=0,_51a=0;
if(!up){
_518=_519=_51a=-1;
}
return function(a,x,from,last){
if(last&&_518>0){
return _51b.lastIndexOf(a,x,from);
}
var l=a&&a.length||0,end=up?l+_51a:_519,i;
if(from===u){
i=up?_519:l+_51a;
}else{
if(from<0){
i=l+from;
if(i<0){
i=_519;
}
}else{
i=from>=l?l+_51a:from;
}
}
if(l&&typeof a=="string"){
a=a.split("");
}
for(;i!=end;i+=_518){
if(a[i]==x){
return i;
}
}
return -1;
};
};
var _51b={every:_514(false),some:_514(true),indexOf:_517(true),lastIndexOf:_517(false),forEach:function(arr,_51c,_51d){
var i=0,l=arr&&arr.length||0;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _51c=="string"){
_51c=_512[_51c]||_513(_51c);
}
if(_51d){
for(;i<l;++i){
_51c.call(_51d,arr[i],i,arr);
}
}else{
for(;i<l;++i){
_51c(arr[i],i,arr);
}
}
},map:function(arr,_51e,_51f,Ctr){
var i=0,l=arr&&arr.length||0,out=new (Ctr||Array)(l);
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _51e=="string"){
_51e=_512[_51e]||_513(_51e);
}
if(_51f){
for(;i<l;++i){
out[i]=_51e.call(_51f,arr[i],i,arr);
}
}else{
for(;i<l;++i){
out[i]=_51e(arr[i],i,arr);
}
}
return out;
},filter:function(arr,_520,_521){
var i=0,l=arr&&arr.length||0,out=[],_522;
if(l&&typeof arr=="string"){
arr=arr.split("");
}
if(typeof _520=="string"){
_520=_512[_520]||_513(_520);
}
if(_521){
for(;i<l;++i){
_522=arr[i];
if(_520.call(_521,_522,i,arr)){
out.push(_522);
}
}
}else{
for(;i<l;++i){
_522=arr[i];
if(_520(_522,i,arr)){
out.push(_522);
}
}
}
return out;
},clearCache:function(){
_512={};
}};
1&&lang.mixin(dojo,_51b);
return _51b;
});
},"dojo/_base/json":function(){
define(["./kernel","../json"],function(dojo,json){
dojo.fromJson=function(js){
return eval("("+js+")");
};
dojo._escapeString=json.stringify;
dojo.toJsonIndentStr="\t";
dojo.toJson=function(it,_523){
return json.stringify(it,function(key,_524){
if(_524){
var tf=_524.__json__||_524.json;
if(typeof tf=="function"){
return tf.call(_524);
}
}
return _524;
},_523&&dojo.toJsonIndentStr);
};
return dojo;
});
},"dojo/_base/window":function(){
define(["./kernel","./lang","../sniff"],function(dojo,lang,has){
var ret={global:dojo.global,doc:this["document"]||null,body:function(doc){
doc=doc||dojo.doc;
return doc.body||doc.getElementsByTagName("body")[0];
},setContext:function(_525,_526){
dojo.global=ret.global=_525;
dojo.doc=ret.doc=_526;
},withGlobal:function(_527,_528,_529,_52a){
var _52b=dojo.global;
try{
dojo.global=ret.global=_527;
return ret.withDoc.call(null,_527.document,_528,_529,_52a);
}
finally{
dojo.global=ret.global=_52b;
}
},withDoc:function(_52c,_52d,_52e,_52f){
var _530=ret.doc,oldQ=has("quirks"),_531=has("ie"),isIE,mode,pwin;
try{
dojo.doc=ret.doc=_52c;
dojo.isQuirks=has.add("quirks",dojo.doc.compatMode=="BackCompat",true,true);
if(has("ie")){
if((pwin=_52c.parentWindow)&&pwin.navigator){
isIE=parseFloat(pwin.navigator.appVersion.split("MSIE ")[1])||undefined;
mode=_52c.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
dojo.isIE=has.add("ie",isIE,true,true);
}
}
if(_52e&&typeof _52d=="string"){
_52d=_52e[_52d];
}
return _52d.apply(_52e,_52f||[]);
}
finally{
dojo.doc=ret.doc=_530;
dojo.isQuirks=has.add("quirks",oldQ,true,true);
dojo.isIE=has.add("ie",_531,true,true);
}
}};
1&&lang.mixin(dojo,ret);
return ret;
});
},"dojo/dom-class":function(){
define(["./_base/lang","./_base/array","./dom"],function(lang,_532,dom){
var _533="className";
var cls,_534=/\s+/,a1=[""];
function _535(s){
if(typeof s=="string"||s instanceof String){
if(s&&!_534.test(s)){
a1[0]=s;
return a1;
}
var a=s.split(_534);
if(a.length&&!a[0]){
a.shift();
}
if(a.length&&!a[a.length-1]){
a.pop();
}
return a;
}
if(!s){
return [];
}
return _532.filter(s,function(x){
return x;
});
};
var _536={};
cls={contains:function containsClass(node,_537){
return ((" "+dom.byId(node)[_533]+" ").indexOf(" "+_537+" ")>=0);
},add:function addClass(node,_538){
node=dom.byId(node);
_538=_535(_538);
var cls=node[_533],_539;
cls=cls?" "+cls+" ":" ";
_539=cls.length;
for(var i=0,len=_538.length,c;i<len;++i){
c=_538[i];
if(c&&cls.indexOf(" "+c+" ")<0){
cls+=c+" ";
}
}
if(_539<cls.length){
node[_533]=cls.substr(1,cls.length-2);
}
},remove:function removeClass(node,_53a){
node=dom.byId(node);
var cls;
if(_53a!==undefined){
_53a=_535(_53a);
cls=" "+node[_533]+" ";
for(var i=0,len=_53a.length;i<len;++i){
cls=cls.replace(" "+_53a[i]+" "," ");
}
cls=lang.trim(cls);
}else{
cls="";
}
if(node[_533]!=cls){
node[_533]=cls;
}
},replace:function replaceClass(node,_53b,_53c){
node=dom.byId(node);
_536[_533]=node[_533];
cls.remove(_536,_53c);
cls.add(_536,_53b);
if(node[_533]!==_536[_533]){
node[_533]=_536[_533];
}
},toggle:function toggleClass(node,_53d,_53e){
node=dom.byId(node);
if(_53e===undefined){
_53d=_535(_53d);
for(var i=0,len=_53d.length,c;i<len;++i){
c=_53d[i];
cls[cls.contains(node,c)?"remove":"add"](node,c);
}
}else{
cls[_53e?"add":"remove"](node,_53d);
}
return _53e;
}};
return cls;
});
},"dojo/_base/config":function(){
define(["../has","require"],function(has,_53f){
var _540={};
if(1){
var src=_53f.rawConfig,p;
for(p in src){
_540[p]=src[p];
}
}else{
var _541=function(_542,_543,_544){
for(p in _542){
p!="has"&&has.add(_543+p,_542[p],0,_544);
}
};
_540=1?_53f.rawConfig:this.dojoConfig||this.djConfig||{};
_541(_540,"config",1);
_541(_540.has,"",1);
}
if(!_540.locale&&typeof navigator!="undefined"){
_540.locale=(navigator.language||navigator.userLanguage).toLowerCase();
}
return _540;
});
},"dojo/_base/event":function(){
define(["./kernel","../on","../has","../dom-geometry"],function(dojo,on,has,dom){
if(on._fixEvent){
var _545=on._fixEvent;
on._fixEvent=function(evt,se){
evt=_545(evt,se);
if(evt){
dom.normalizeEvent(evt);
}
return evt;
};
}
var ret={fix:function(evt,_546){
if(on._fixEvent){
return on._fixEvent(evt,_546);
}
return evt;
},stop:function(evt){
if(has("dom-addeventlistener")||(evt&&evt.preventDefault)){
evt.preventDefault();
evt.stopPropagation();
}else{
evt=evt||window.event;
evt.cancelBubble=true;
on._preventDefault.call(evt);
}
}};
if(1){
dojo.fixEvent=ret.fix;
dojo.stopEvent=ret.stop;
}
return ret;
});
},"dojo/main":function(){
define(["./_base/kernel","./has","require","./sniff","./_base/lang","./_base/array","./_base/config","./ready","./_base/declare","./_base/connect","./_base/Deferred","./_base/json","./_base/Color","./has!dojo-firebug?./_firebug/firebug","./_base/browser","./_base/loader"],function(_547,has,_548,_549,lang,_54a,_54b,_54c){
if(_54b.isDebug){
_548(["./_firebug/firebug"]);
}
1||has.add("dojo-config-require",1);
if(1){
var deps=_54b.require;
if(deps){
deps=_54a.map(lang.isArray(deps)?deps:[deps],function(item){
return item.replace(/\./g,"/");
});
if(_547.isAsync){
_548(deps);
}else{
_54c(1,function(){
_548(deps);
});
}
}
}
return _547;
});
},"dojo/sniff":function(){
define(["./has"],function(has){
if(1){
var n=navigator,dua=n.userAgent,dav=n.appVersion,tv=parseFloat(dav);
has.add("air",dua.indexOf("AdobeAIR")>=0);
has.add("msapp",parseFloat(dua.split("MSAppHost/")[1])||undefined);
has.add("khtml",dav.indexOf("Konqueror")>=0?tv:undefined);
has.add("webkit",parseFloat(dua.split("WebKit/")[1])||undefined);
has.add("chrome",parseFloat(dua.split("Chrome/")[1])||undefined);
has.add("safari",dav.indexOf("Safari")>=0&&!has("chrome")?parseFloat(dav.split("Version/")[1]):undefined);
has.add("mac",dav.indexOf("Macintosh")>=0);
has.add("quirks",document.compatMode=="BackCompat");
if(dua.match(/(iPhone|iPod|iPad)/)){
var p=RegExp.$1.replace(/P/,"p");
var v=dua.match(/OS ([\d_]+)/)?RegExp.$1:"1";
var os=parseFloat(v.replace(/_/,".").replace(/_/g,""));
has.add(p,os);
has.add("ios",os);
}
has.add("android",parseFloat(dua.split("Android ")[1])||undefined);
has.add("bb",(dua.indexOf("BlackBerry")>=0||dua.indexOf("BB10")>=0)&&parseFloat(dua.split("Version/")[1])||undefined);
has.add("svg",typeof SVGAngle!=="undefined");
if(!has("webkit")){
if(dua.indexOf("Opera")>=0){
has.add("opera",tv>=9.8?parseFloat(dua.split("Version/")[1])||tv:tv);
}
if(dua.indexOf("Gecko")>=0&&!has("khtml")&&!has("webkit")){
has.add("mozilla",tv);
}
if(has("mozilla")){
has.add("ff",parseFloat(dua.split("Firefox/")[1]||dua.split("Minefield/")[1])||undefined);
}
if(document.all&&!has("opera")){
var isIE=parseFloat(dav.split("MSIE ")[1])||undefined;
var mode=document.documentMode;
if(mode&&mode!=5&&Math.floor(isIE)!=mode){
isIE=mode;
}
has.add("ie",isIE);
}
has.add("wii",typeof opera!="undefined"&&opera.wiiremote);
}
}
return has;
});
},"dojo/request/handlers":function(){
define(["../json","../_base/kernel","../_base/array","../has","../selector/_loader"],function(JSON,_54d,_54e,has){
has.add("activex",typeof ActiveXObject!=="undefined");
has.add("dom-parser",function(_54f){
return "DOMParser" in _54f;
});
var _550;
if(has("activex")){
var dp=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.4.0","MSXML2.DOMDocument.3.0","MSXML.DOMDocument"];
_550=function(_551){
var _552=_551.data;
if(_552&&has("dom-qsa2.1")&&!_552.querySelectorAll&&has("dom-parser")){
_552=new DOMParser().parseFromString(_551.text,"application/xml");
}
if(!_552||!_552.documentElement){
var text=_551.text;
_54e.some(dp,function(p){
try{
var dom=new ActiveXObject(p);
dom.async=false;
dom.loadXML(text);
_552=dom;
}
catch(e){
return false;
}
return true;
});
}
return _552;
};
}
var _553={"javascript":function(_554){
return _54d.eval(_554.text||"");
},"json":function(_555){
return JSON.parse(_555.text||null);
},"xml":_550};
function _556(_557){
var _558=_553[_557.options.handleAs];
_557.data=_558?_558(_557):(_557.data||_557.text);
return _557;
};
_556.register=function(name,_559){
_553[name]=_559;
};
return _556;
});
},"dojo/ready":function(){
define(["./_base/kernel","./has","require","./domReady","./_base/lang"],function(dojo,has,_55a,_55b,lang){
var _55c=0,_55d=[],_55e=0,_55f=function(){
_55c=1;
dojo._postLoad=dojo.config.afterOnLoad=true;
_560();
},_560=function(){
if(_55e){
return;
}
_55e=1;
while(_55c&&(!_55b||_55b._Q.length==0)&&(_55a.idle?_55a.idle():true)&&_55d.length){
var f=_55d.shift();
try{
f();
}
catch(e){
e.info=e.message;
if(_55a.signal){
_55a.signal("error",e);
}else{
throw e;
}
}
}
_55e=0;
};
_55a.on&&_55a.on("idle",_560);
if(_55b){
_55b._onQEmpty=_560;
}
var _561=dojo.ready=dojo.addOnLoad=function(_562,_563,_564){
var _565=lang._toArray(arguments);
if(typeof _562!="number"){
_564=_563;
_563=_562;
_562=1000;
}else{
_565.shift();
}
_564=_564?lang.hitch.apply(dojo,_565):function(){
_563();
};
_564.priority=_562;
for(var i=0;i<_55d.length&&_562>=_55d[i].priority;i++){
}
_55d.splice(i,0,_564);
_560();
};
1||has.add("dojo-config-addOnLoad",1);
if(1){
var dca=dojo.config.addOnLoad;
if(dca){
_561[(lang.isArray(dca)?"apply":"call")](dojo,dca);
}
}
if(1&&dojo.config.parseOnLoad&&!dojo.isAsync){
_561(99,function(){
if(!dojo.parser){
dojo.deprecated("Add explicit require(['dojo/parser']);","","2.0");
_55a(["dojo/parser"]);
}
});
}
if(_55b){
_55b(_55f);
}else{
_55f();
}
return _561;
});
},"dojo/aspect":function(){
define([],function(){
"use strict";
var _566,_567=0;
function _568(_569,type,_56a,_56b){
var _56c=_569[type];
var _56d=type=="around";
var _56e;
if(_56d){
var _56f=_56a(function(){
return _56c.advice(this,arguments);
});
_56e={remove:function(){
if(_56f){
_56f=_569=_56a=null;
}
},advice:function(_570,args){
return _56f?_56f.apply(_570,args):_56c.advice(_570,args);
}};
}else{
_56e={remove:function(){
if(_56e.advice){
var _571=_56e.previous;
var next=_56e.next;
if(!next&&!_571){
delete _569[type];
}else{
if(_571){
_571.next=next;
}else{
_569[type]=next;
}
if(next){
next.previous=_571;
}
}
_569=_56a=_56e.advice=null;
}
},id:_567++,advice:_56a,receiveArguments:_56b};
}
if(_56c&&!_56d){
if(type=="after"){
while(_56c.next&&(_56c=_56c.next)){
}
_56c.next=_56e;
_56e.previous=_56c;
}else{
if(type=="before"){
_569[type]=_56e;
_56e.next=_56c;
_56c.previous=_56e;
}
}
}else{
_569[type]=_56e;
}
return _56e;
};
function _572(type){
return function(_573,_574,_575,_576){
var _577=_573[_574],_578;
if(!_577||_577.target!=_573){
_573[_574]=_578=function(){
var _579=_567;
var args=arguments;
var _57a=_578.before;
while(_57a){
args=_57a.advice.apply(this,args)||args;
_57a=_57a.next;
}
if(_578.around){
var _57b=_578.around.advice(this,args);
}
var _57c=_578.after;
while(_57c&&_57c.id<_579){
if(_57c.receiveArguments){
var _57d=_57c.advice.apply(this,args);
_57b=_57d===_566?_57b:_57d;
}else{
_57b=_57c.advice.call(this,_57b,args);
}
_57c=_57c.next;
}
return _57b;
};
if(_577){
_578.around={advice:function(_57e,args){
return _577.apply(_57e,args);
}};
}
_578.target=_573;
}
var _57f=_568((_578||_577),type,_575,_576);
_575=null;
return _57f;
};
};
var _580=_572("after");
var _581=_572("before");
var _582=_572("around");
return {before:_581,around:_582,after:_580};
});
},"dojo/_base/connect":function(){
define(["./kernel","../on","../topic","../aspect","./event","../mouse","./sniff","./lang","../keys"],function(dojo,on,hub,_583,_584,_585,has,lang){
has.add("events-keypress-typed",function(){
var _586={charCode:0};
try{
_586=document.createEvent("KeyboardEvent");
(_586.initKeyboardEvent||_586.initKeyEvent).call(_586,"keypress",true,true,null,false,false,false,false,9,3);
}
catch(e){
}
return _586.charCode==0&&!has("opera");
});
function _587(obj,_588,_589,_58a,_58b){
_58a=lang.hitch(_589,_58a);
if(!obj||!(obj.addEventListener||obj.attachEvent)){
return _583.after(obj||dojo.global,_588,_58a,true);
}
if(typeof _588=="string"&&_588.substring(0,2)=="on"){
_588=_588.substring(2);
}
if(!obj){
obj=dojo.global;
}
if(!_58b){
switch(_588){
case "keypress":
_588=_58c;
break;
case "mouseenter":
_588=_585.enter;
break;
case "mouseleave":
_588=_585.leave;
break;
}
}
return on(obj,_588,_58a,_58b);
};
var _58d={106:42,111:47,186:59,187:43,188:44,189:45,190:46,191:47,192:96,219:91,220:92,221:93,222:39,229:113};
var _58e=has("mac")?"metaKey":"ctrlKey";
var _58f=function(evt,_590){
var faux=lang.mixin({},evt,_590);
_591(faux);
faux.preventDefault=function(){
evt.preventDefault();
};
faux.stopPropagation=function(){
evt.stopPropagation();
};
return faux;
};
function _591(evt){
evt.keyChar=evt.charCode?String.fromCharCode(evt.charCode):"";
evt.charOrCode=evt.keyChar||evt.keyCode;
};
var _58c;
if(has("events-keypress-typed")){
var _592=function(e,code){
try{
return (e.keyCode=code);
}
catch(e){
return 0;
}
};
_58c=function(_593,_594){
var _595=on(_593,"keydown",function(evt){
var k=evt.keyCode;
var _596=(k!=13)&&k!=32&&(k!=27||!has("ie"))&&(k<48||k>90)&&(k<96||k>111)&&(k<186||k>192)&&(k<219||k>222)&&k!=229;
if(_596||evt.ctrlKey){
var c=_596?0:k;
if(evt.ctrlKey){
if(k==3||k==13){
return _594.call(evt.currentTarget,evt);
}else{
if(c>95&&c<106){
c-=48;
}else{
if((!evt.shiftKey)&&(c>=65&&c<=90)){
c+=32;
}else{
c=_58d[c]||c;
}
}
}
}
var faux=_58f(evt,{type:"keypress",faux:true,charCode:c});
_594.call(evt.currentTarget,faux);
if(has("ie")){
_592(evt,faux.keyCode);
}
}
});
var _597=on(_593,"keypress",function(evt){
var c=evt.charCode;
c=c>=32?c:0;
evt=_58f(evt,{charCode:c,faux:true});
return _594.call(this,evt);
});
return {remove:function(){
_595.remove();
_597.remove();
}};
};
}else{
if(has("opera")){
_58c=function(_598,_599){
return on(_598,"keypress",function(evt){
var c=evt.which;
if(c==3){
c=99;
}
c=c<32&&!evt.shiftKey?0:c;
if(evt.ctrlKey&&!evt.shiftKey&&c>=65&&c<=90){
c+=32;
}
return _599.call(this,_58f(evt,{charCode:c}));
});
};
}else{
_58c=function(_59a,_59b){
return on(_59a,"keypress",function(evt){
_591(evt);
return _59b.call(this,evt);
});
};
}
}
var _59c={_keypress:_58c,connect:function(obj,_59d,_59e,_59f,_5a0){
var a=arguments,args=[],i=0;
args.push(typeof a[0]=="string"?null:a[i++],a[i++]);
var a1=a[i+1];
args.push(typeof a1=="string"||typeof a1=="function"?a[i++]:null,a[i++]);
for(var l=a.length;i<l;i++){
args.push(a[i]);
}
return _587.apply(this,args);
},disconnect:function(_5a1){
if(_5a1){
_5a1.remove();
}
},subscribe:function(_5a2,_5a3,_5a4){
return hub.subscribe(_5a2,lang.hitch(_5a3,_5a4));
},publish:function(_5a5,args){
return hub.publish.apply(hub,[_5a5].concat(args));
},connectPublisher:function(_5a6,obj,_5a7){
var pf=function(){
_59c.publish(_5a6,arguments);
};
return _5a7?_59c.connect(obj,_5a7,pf):_59c.connect(obj,pf);
},isCopyKey:function(e){
return e[_58e];
}};
_59c.unsubscribe=_59c.disconnect;
1&&lang.mixin(dojo,_59c);
return _59c;
});
},"dojo/errors/CancelError":function(){
define(["./create"],function(_5a8){
return _5a8("CancelError",null,null,{dojoType:"cancel"});
});
}}});
require({cache:{"dojo/uacss":function(){
define(["./dom-geometry","./_base/lang","./domReady","./sniff","./_base/window"],function(_5a9,lang,_5aa,has,_5ab){
var html=_5ab.doc.documentElement,ie=has("ie"),_5ac=has("opera"),maj=Math.floor,ff=has("ff"),_5ad=_5a9.boxModel.replace(/-/,""),_5ae={"dj_quirks":has("quirks"),"dj_opera":_5ac,"dj_khtml":has("khtml"),"dj_webkit":has("webkit"),"dj_safari":has("safari"),"dj_chrome":has("chrome"),"dj_gecko":has("mozilla"),"dj_ios":has("ios"),"dj_android":has("android")};
if(ie){
_5ae["dj_ie"]=true;
_5ae["dj_ie"+maj(ie)]=true;
_5ae["dj_iequirks"]=has("quirks");
}
if(ff){
_5ae["dj_ff"+maj(ff)]=true;
}
_5ae["dj_"+_5ad]=true;
var _5af="";
for(var clz in _5ae){
if(_5ae[clz]){
_5af+=clz+" ";
}
}
html.className=lang.trim(html.className+" "+_5af);
_5aa(function(){
if(!_5a9.isBodyLtr()){
var _5b0="dj_rtl dijitRtl "+_5af.replace(/ /g,"-rtl ");
html.className=lang.trim(html.className+" "+_5b0+"dj_rtl dijitRtl "+_5af.replace(/ /g,"-rtl "));
}
});
return has;
});
},"dojox/mobile/app/_Widget":function(){
define(["dijit","dojo","dojox","dojo/require!dijit/_WidgetBase"],function(_5b1,dojo,_5b2){
dojo.provide("dojox.mobile.app._Widget");
dojo.experimental("dojox.mobile.app._Widget");
dojo.require("dijit._WidgetBase");
dojo.declare("dojox.mobile.app._Widget",_5b1._WidgetBase,{getScroll:function(){
return {x:dojo.global.scrollX,y:dojo.global.scrollY};
},connect:function(_5b3,_5b4,fn){
if(_5b4.toLowerCase()=="dblclick"||_5b4.toLowerCase()=="ondblclick"){
if(dojo.global["Mojo"]){
return this.connect(_5b3,Mojo.Event.tap,fn);
}
}
return this.inherited(arguments);
}});
});
},"dojox/mobile/app/ImageThumbView":function(){
define(["dijit","dojo","dojox","dojo/require!dijit/_WidgetBase,dojo/string"],function(_5b5,dojo,_5b6){
dojo.provide("dojox.mobile.app.ImageThumbView");
dojo.experimental("dojox.mobile.app.ImageThumbView");
dojo.require("dijit._WidgetBase");
dojo.require("dojo.string");
dojo.declare("dojox.mobile.app.ImageThumbView",_5b5._WidgetBase,{items:[],urlParam:"url",labelParam:null,itemTemplate:"<div class=\"mblThumbInner\">"+"<div class=\"mblThumbOverlay\"></div>"+"<div class=\"mblThumbMask\">"+"<div class=\"mblThumbSrc\" style=\"background-image:url(${url})\"></div>"+"</div>"+"</div>",minPadding:4,maxPerRow:3,maxRows:-1,baseClass:"mblImageThumbView",thumbSize:"medium",animationEnabled:true,selectedIndex:-1,cache:null,cacheMustMatch:false,clickEvent:"onclick",cacheBust:false,disableHide:false,constructor:function(_5b7,node){
},postCreate:function(){
this.inherited(arguments);
var _5b8=this;
var _5b9="mblThumbHover";
this.addThumb=dojo.hitch(this,this.addThumb);
this.handleImgLoad=dojo.hitch(this,this.handleImgLoad);
this.hideCached=dojo.hitch(this,this.hideCached);
this._onLoadImages={};
this.cache=[];
this.visibleImages=[];
this._cacheCounter=0;
this.connect(this.domNode,this.clickEvent,function(_5ba){
var _5bb=_5b8._getItemNodeFromEvent(_5ba);
if(_5bb&&!_5bb._cached){
_5b8.onSelect(_5bb._item,_5bb._index,_5b8.items);
dojo.query(".selected",this.domNode).removeClass("selected");
dojo.addClass(_5bb,"selected");
}
});
dojo.addClass(this.domNode,this.thumbSize);
this.resize();
this.render();
},onSelect:function(item,_5bc,_5bd){
},_setAnimationEnabledAttr:function(_5be){
this.animationEnabled=_5be;
dojo[_5be?"addClass":"removeClass"](this.domNode,"animated");
},_setItemsAttr:function(_5bf){
this.items=_5bf||[];
var urls={};
var i;
for(i=0;i<this.items.length;i++){
urls[this.items[i][this.urlParam]]=1;
}
var _5c0=[];
for(var url in this._onLoadImages){
if(!urls[url]&&this._onLoadImages[url]._conn){
dojo.disconnect(this._onLoadImages[url]._conn);
this._onLoadImages[url].src=null;
_5c0.push(url);
}
}
for(i=0;i<_5c0.length;i++){
delete this._onLoadImages[url];
}
this.render();
},_getItemNode:function(node){
while(node&&!dojo.hasClass(node,"mblThumb")&&node!=this.domNode){
node=node.parentNode;
}
return (node==this.domNode)?null:node;
},_getItemNodeFromEvent:function(_5c1){
if(_5c1.touches&&_5c1.touches.length>0){
_5c1=_5c1.touches[0];
}
return this._getItemNode(_5c1.target);
},resize:function(){
this._thumbSize=null;
this._size=dojo.contentBox(this.domNode);
this.disableHide=true;
this.render();
this.disableHide=false;
},hideCached:function(){
for(var i=0;i<this.cache.length;i++){
if(this.cache[i]){
dojo.style(this.cache[i],"display","none");
}
}
},render:function(){
var i;
var url;
var item;
var _5c2;
while(this.visibleImages&&this.visibleImages.length>0){
_5c2=this.visibleImages.pop();
this.cache.push(_5c2);
if(!this.disableHide){
dojo.addClass(_5c2,"hidden");
}
_5c2._cached=true;
}
if(this.cache&&this.cache.length>0){
setTimeout(this.hideCached,1000);
}
if(!this.items||this.items.length==0){
return;
}
for(i=0;i<this.items.length;i++){
item=this.items[i];
url=(dojo.isString(item)?item:item[this.urlParam]);
this.addThumb(item,url,i);
if(this.maxRows>0&&(i+1)/this.maxPerRow>=this.maxRows){
break;
}
}
if(!this._thumbSize){
return;
}
var _5c3=0;
var row=-1;
var _5c4=this._thumbSize.w+(this.padding*2);
var _5c5=this._thumbSize.h+(this.padding*2);
var _5c6=this.thumbNodes=dojo.query(".mblThumb",this.domNode);
var pos=0;
_5c6=this.visibleImages;
for(i=0;i<_5c6.length;i++){
if(_5c6[i]._cached){
continue;
}
if(pos%this.maxPerRow==0){
row++;
}
_5c3=pos%this.maxPerRow;
this.place(_5c6[i],(_5c3*_5c4)+this.padding,(row*_5c5)+this.padding);
if(!_5c6[i]._loading){
dojo.removeClass(_5c6[i],"hidden");
}
if(pos==this.selectedIndex){
dojo[pos==this.selectedIndex?"addClass":"removeClass"](_5c6[i],"selected");
}
pos++;
}
var _5c7=Math.ceil(pos/this.maxPerRow);
this._numRows=_5c7;
this.setContainerHeight((_5c7*(this._thumbSize.h+this.padding*2)));
},setContainerHeight:function(_5c8){
dojo.style(this.domNode,"height",_5c8+"px");
},addThumb:function(item,url,_5c9){
var _5ca;
var _5cb=false;
if(this.cache.length>0){
var _5cc=false;
for(var i=0;i<this.cache.length;i++){
if(this.cache[i]._url==url){
_5ca=this.cache.splice(i,1)[0];
_5cc=true;
break;
}
}
if(!_5ca&&!this.cacheMustMatch){
_5ca=this.cache.pop();
dojo.removeClass(_5ca,"selected");
}else{
_5cb=true;
}
}
if(!_5ca){
_5ca=dojo.create("div",{"class":"mblThumb hidden",innerHTML:dojo.string.substitute(this.itemTemplate,{url:url},null,this)},this.domNode);
}
if(this.labelParam){
var _5cd=dojo.query(".mblThumbLabel",_5ca)[0];
if(!_5cd){
_5cd=dojo.create("div",{"class":"mblThumbLabel"},_5ca);
}
_5cd.innerHTML=item[this.labelParam]||"";
}
dojo.style(_5ca,"display","");
if(!this.disableHide){
dojo.addClass(_5ca,"hidden");
}
if(!_5cb){
var _5ce=dojo.create("img",{});
_5ce._thumbDiv=_5ca;
_5ce._conn=dojo.connect(_5ce,"onload",this.handleImgLoad);
_5ce._url=url;
_5ca._loading=true;
this._onLoadImages[url]=_5ce;
if(_5ce){
_5ce.src=url;
}
}
this.visibleImages.push(_5ca);
_5ca._index=_5c9;
_5ca._item=item;
_5ca._url=url;
_5ca._cached=false;
if(!this._thumbSize){
this._thumbSize=dojo.marginBox(_5ca);
if(this._thumbSize.h==0){
this._thumbSize.h=100;
this._thumbSize.w=100;
}
if(this.labelParam){
this._thumbSize.h+=8;
}
this.calcPadding();
}
},handleImgLoad:function(_5cf){
var img=_5cf.target;
dojo.disconnect(img._conn);
dojo.removeClass(img._thumbDiv,"hidden");
img._thumbDiv._loading=false;
img._conn=null;
var url=img._url;
if(this.cacheBust){
url+=(url.indexOf("?")>-1?"&":"?")+"cacheBust="+(new Date()).getTime()+"_"+(this._cacheCounter++);
}
dojo.query(".mblThumbSrc",img._thumbDiv).style("backgroundImage","url("+url+")");
delete this._onLoadImages[img._url];
},calcPadding:function(){
var _5d0=this._size.w;
var _5d1=this._thumbSize.w;
var _5d2=_5d1+this.minPadding;
this.maxPerRow=Math.floor(_5d0/_5d2);
this.padding=Math.floor((_5d0-(_5d1*this.maxPerRow))/(this.maxPerRow*2));
},place:function(node,x,y){
dojo.style(node,{"-webkit-transform":"translate("+x+"px,"+y+"px)"});
},destroy:function(){
var img;
var _5d3=0;
for(var url in this._onLoadImages){
img=this._onLoadImages[url];
if(img){
img.src=null;
_5d3++;
}
}
this.inherited(arguments);
}});
});
},"dojox/mobile/TransitionEvent":function(){
define(["dojo/_base/declare","dojo/on"],function(_5d4,on){
return _5d4("dojox.mobile.TransitionEvent",null,{constructor:function(_5d5,_5d6,_5d7){
this.transitionOptions=_5d6;
this.target=_5d5;
this.triggerEvent=_5d7||null;
},dispatch:function(){
var opts={bubbles:true,cancelable:true,detail:this.transitionOptions,triggerEvent:this.triggerEvent};
var evt=on.emit(this.target,"startTransition",opts);
}});
});
},"dojox/mobile/ViewController":function(){
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/on","dojo/ready","dijit/registry","./ProgressIndicator","./TransitionEvent","./viewRegistry"],function(dojo,_5d8,_5d9,_5da,lang,win,_5db,dom,_5dc,_5dd,on,_5de,_5df,_5e0,_5e1,_5e2){
var _5e3=_5da("dojox.mobile.ViewController",null,{dataHandlerClass:"dojox/mobile/dh/DataHandler",dataSourceClass:"dojox/mobile/dh/UrlDataSource",fileTypeMapClass:"dojox/mobile/dh/SuffixFileTypeMap",constructor:function(){
this.viewMap={};
_5de(lang.hitch(this,function(){
on(win.body(),"startTransition",lang.hitch(this,"onStartTransition"));
}));
},findTransitionViews:function(_5e4){
if(!_5e4){
return [];
}
_5e4.match(/^#?([^&?]+)(.*)/);
var _5e5=RegExp.$2;
var view=_5df.byId(RegExp.$1);
if(!view){
return [];
}
for(var v=view.getParent();v;v=v.getParent()){
if(v.isVisible&&!v.isVisible()){
var sv=view.getShowingView();
if(sv&&sv.id!==view.id){
view.show();
}
view=v;
}
}
return [view.getShowingView(),view,_5e5];
},openExternalView:function(_5e6,_5e7){
var d=new _5db();
var id=this.viewMap[_5e6.url];
if(id){
_5e6.moveTo=id;
if(_5e6.noTransition){
_5df.byId(id).hide();
}else{
new _5e1(win.body(),_5e6).dispatch();
}
d.resolve(true);
return d;
}
var _5e8=null;
for(var i=_5e7.childNodes.length-1;i>=0;i--){
var c=_5e7.childNodes[i];
if(c.nodeType===1){
var _5e9=c.getAttribute("fixed")||c.getAttribute("data-mobile-fixed")||(_5df.byNode(c)&&_5df.byNode(c).fixed);
if(_5e9==="bottom"){
_5e8=c;
break;
}
}
}
var dh=_5e6.dataHandlerClass||this.dataHandlerClass;
var ds=_5e6.dataSourceClass||this.dataSourceClass;
var ft=_5e6.fileTypeMapClass||this.fileTypeMapClass;
require([dh,ds,ft],lang.hitch(this,function(_5ea,_5eb,_5ec){
var _5ed=new _5ea(new _5eb(_5e6.data||_5e6.url),_5e7,_5e8);
var _5ee=_5e6.contentType||_5ec.getContentType(_5e6.url)||"html";
_5ed.processData(_5ee,lang.hitch(this,function(id){
if(id){
this.viewMap[_5e6.url]=_5e6.moveTo=id;
if(_5e6.noTransition){
_5df.byId(id).hide();
}else{
new _5e1(win.body(),_5e6).dispatch();
}
d.resolve(true);
}else{
d.reject("Failed to load "+_5e6.url);
}
}));
}));
return d;
},onStartTransition:function(evt){
evt.preventDefault();
if(!evt.detail){
return;
}
var _5ef=evt.detail;
if(!_5ef.moveTo&&!_5ef.href&&!_5ef.url&&!_5ef.scene){
return;
}
if(_5ef.url&&!_5ef.moveTo){
var _5f0=_5ef.urlTarget;
var w=_5df.byId(_5f0);
var _5f1=w&&w.containerNode||dom.byId(_5f0);
if(!_5f1){
w=_5e2.getEnclosingView(evt.target);
_5f1=w&&w.domNode.parentNode||win.body();
}
this.openExternalView(_5ef,_5f1);
return;
}else{
if(_5ef.href){
if(_5ef.hrefTarget&&_5ef.hrefTarget!="_self"){
win.global.open(_5ef.href,_5ef.hrefTarget);
}else{
var view;
for(var v=_5e2.getEnclosingView(evt.target);v;v=_5e2.getParentView(v)){
view=v;
}
if(view){
view.performTransition(null,_5ef.transitionDir,_5ef.transition,evt.target,function(){
location.href=_5ef.href;
});
}
}
return;
}else{
if(_5ef.scene){
_5d9.publish("/dojox/mobile/app/pushScene",[_5ef.scene]);
return;
}
}
}
var arr=this.findTransitionViews(_5ef.moveTo),_5f2=arr[0],_5f3=arr[1],_5f4=arr[2];
if(!location.hash&&!_5ef.hashchange){
_5e2.initialView=_5f2;
}
if(_5ef.moveTo&&_5f3){
_5ef.moveTo=(_5ef.moveTo.charAt(0)==="#"?"#"+_5f3.id:_5f3.id)+_5f4;
}
if(!_5f2||(_5ef.moveTo&&_5f2===_5df.byId(_5ef.moveTo.replace(/^#?([^&?]+).*/,"$1")))){
return;
}
var src=_5df.getEnclosingWidget(evt.target);
if(src&&src.callback){
_5ef.context=src;
_5ef.method=src.callback;
}
_5f2.performTransition(_5ef);
}});
_5e3._instance=new _5e3();
_5e3.getInstance=function(){
return _5e3._instance;
};
return _5e3;
});
},"dojox/mobile/ToolBarButton":function(){
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./sniff","./_ItemBase","dojo/has!dojo-bidi?dojox/mobile/bidi/ToolBarButton"],function(_5f5,lang,win,_5f6,_5f7,_5f8,_5f9,has,_5fa,_5fb){
var _5fc=_5f5(has("dojo-bidi")?"dojox.mobile.NonBidiToolBarButton":"dojox.mobile.ToolBarButton",_5fa,{selected:false,arrow:"",light:true,defaultColor:"mblColorDefault",selColor:"mblColorDefaultSel",baseClass:"mblToolBarButton",_selStartMethod:"touch",_selEndMethod:"touch",buildRendering:function(){
if(!this.label&&this.srcNodeRef){
this.label=this.srcNodeRef.innerHTML;
}
this.label=lang.trim(this.label);
this.domNode=(this.srcNodeRef&&this.srcNodeRef.tagName==="SPAN")?this.srcNodeRef:_5f7.create("span");
_5f9.set(this.domNode,"role","button");
this.inherited(arguments);
if(this.light&&!this.arrow&&(!this.icon||!this.label)){
this.labelNode=this.tableNode=this.bodyNode=this.iconParentNode=this.domNode;
_5f6.add(this.domNode,this.defaultColor+" mblToolBarButtonBody"+(this.icon?" mblToolBarButtonLightIcon":" mblToolBarButtonLightText"));
return;
}
this.domNode.innerHTML="";
if(this.arrow==="left"||this.arrow==="right"){
this.arrowNode=_5f7.create("span",{className:"mblToolBarButtonArrow mblToolBarButton"+(this.arrow==="left"?"Left":"Right")+"Arrow "+(has("ie")<10?"":(this.defaultColor+" "+this.defaultColor+"45"))},this.domNode);
_5f6.add(this.domNode,"mblToolBarButtonHas"+(this.arrow==="left"?"Left":"Right")+"Arrow");
}
this.bodyNode=_5f7.create("span",{className:"mblToolBarButtonBody"},this.domNode);
this.tableNode=_5f7.create("table",{cellPadding:"0",cellSpacing:"0",border:"0"},this.bodyNode);
if(!this.label&&this.arrow){
this.tableNode.className="mblToolBarButtonText";
}
var row=this.tableNode.insertRow(-1);
this.iconParentNode=row.insertCell(-1);
this.labelNode=row.insertCell(-1);
this.iconParentNode.className="mblToolBarButtonIcon";
this.labelNode.className="mblToolBarButtonLabel";
if(this.icon&&this.icon!=="none"&&this.label){
_5f6.add(this.domNode,"mblToolBarButtonHasIcon");
_5f6.add(this.bodyNode,"mblToolBarButtonLabeledIcon");
}
_5f6.add(this.bodyNode,this.defaultColor);
},startup:function(){
if(this._started){
return;
}
this.connect(this.domNode,"onkeydown","_onClick");
this.inherited(arguments);
if(!this._isOnLine){
this._isOnLine=true;
this.set("icon",this._pendingIcon!==undefined?this._pendingIcon:this.icon);
delete this._pendingIcon;
}
},_onClick:function(e){
if(e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
this.defaultClickAction(e);
},onClick:function(){
},_setLabelAttr:function(text){
this.inherited(arguments);
_5f6.toggle(this.tableNode,"mblToolBarButtonText",text||this.arrow);
},_setSelectedAttr:function(_5fd){
var _5fe=function(node,a,b){
_5f6.replace(node,a+" "+a+"45",b+" "+b+"45");
};
this.inherited(arguments);
if(_5fd){
_5f6.replace(this.bodyNode,this.selColor,this.defaultColor);
if(!(has("ie")<10)&&this.arrowNode){
_5fe(this.arrowNode,this.selColor,this.defaultColor);
}
}else{
_5f6.replace(this.bodyNode,this.defaultColor,this.selColor);
if(!(has("ie")<10)&&this.arrowNode){
_5fe(this.arrowNode,this.defaultColor,this.selColor);
}
}
_5f6.toggle(this.domNode,"mblToolBarButtonSelected",_5fd);
_5f6.toggle(this.bodyNode,"mblToolBarButtonBodySelected",_5fd);
}});
return has("dojo-bidi")?_5f5("dojox.mobile.ToolBarButton",[_5fc,_5fb]):_5fc;
});
},"dojox/mobile/_ItemBase":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/touch","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TransitionEvent","./iconUtils","./sniff","dojo/has!dojo-bidi?dojox/mobile/bidi/_ItemBase"],function(_5ff,_600,lang,win,_601,_602,_603,_604,_605,_606,_607,_608,has,_609){
var _60a=_600(has("dojo-bidi")?"dojox.mobile._NonBidiItemBase":"dojox.mobile._ItemBase",[_606,_605,_604],{icon:"",iconPos:"",alt:"",href:"",hrefTarget:"",moveTo:"",scene:"",clickable:false,url:"",urlTarget:"",back:false,transition:"",transitionDir:1,transitionOptions:null,callback:null,label:"",toggle:false,selected:false,tabIndex:"0",_setTabIndexAttr:"",paramsToInherit:"transition,icon",_selStartMethod:"none",_selEndMethod:"none",_delayedSelection:false,_duration:800,_handleClick:true,buildRendering:function(){
this.inherited(arguments);
this._isOnLine=this.inheritParams();
},startup:function(){
if(this._started){
return;
}
if(!this._isOnLine){
this.inheritParams();
}
this._updateHandles();
this.inherited(arguments);
},inheritParams:function(){
var _60b=this.getParent();
if(_60b){
_5ff.forEach(this.paramsToInherit.split(/,/),function(p){
if(p.match(/icon/i)){
var base=p+"Base",pos=p+"Pos";
if(this[p]&&_60b[base]&&_60b[base].charAt(_60b[base].length-1)==="/"){
this[p]=_60b[base]+this[p];
}
if(!this[p]){
this[p]=_60b[base];
}
if(!this[pos]){
this[pos]=_60b[pos];
}
}
if(!this[p]){
this[p]=_60b[p];
}
},this);
}
return !!_60b;
},_updateHandles:function(){
if(this._handleClick&&this._selStartMethod==="touch"){
if(!this._onTouchStartHandle){
this._onTouchStartHandle=this.connect(this.domNode,_602.press,"_onTouchStart");
}
}else{
if(this._onTouchStartHandle){
this.disconnect(this._onTouchStartHandle);
this._onTouchStartHandle=null;
}
}
},getTransOpts:function(){
var opts=this.transitionOptions||{};
_5ff.forEach(["moveTo","href","hrefTarget","url","target","urlTarget","scene","transition","transitionDir"],function(p){
opts[p]=opts[p]||this[p];
},this);
return opts;
},userClickAction:function(){
},defaultClickAction:function(e){
this.handleSelection(e);
if(this.userClickAction(e)===false){
return;
}
this.makeTransition(e);
},handleSelection:function(e){
if(this._delayedSelection){
this.set("selected",true);
}
if(this._onTouchEndHandle){
this.disconnect(this._onTouchEndHandle);
this._onTouchEndHandle=null;
}
var p=this.getParent();
if(this.toggle){
this.set("selected",!this._currentSel);
}else{
if(p&&p.selectOne){
this.set("selected",true);
}else{
if(this._selEndMethod==="touch"){
this.set("selected",false);
}else{
if(this._selEndMethod==="timer"){
this.defer(function(){
this.set("selected",false);
},this._duration);
}
}
}
}
},makeTransition:function(e){
if(this.back&&history){
history.back();
return;
}
if(this.href&&this.hrefTarget&&this.hrefTarget!="_self"){
win.global.open(this.href,this.hrefTarget||"_blank");
this._onNewWindowOpened(e);
return;
}
var opts=this.getTransOpts();
var _60c=!!(opts.moveTo||opts.href||opts.url||opts.target||opts.scene);
if(this._prepareForTransition(e,_60c?opts:null)===false){
return;
}
if(_60c){
this.setTransitionPos(e);
new _607(this.domNode,opts,e).dispatch();
}
},_onNewWindowOpened:function(){
},_prepareForTransition:function(e,_60d){
},_onTouchStart:function(e){
if(this.getParent().isEditing||this.onTouchStart(e)===false){
return;
}
if(!this._onTouchEndHandle&&this._selStartMethod==="touch"){
this._onTouchMoveHandle=this.connect(win.body(),_602.move,"_onTouchMove");
this._onTouchEndHandle=this.connect(win.body(),_602.release,"_onTouchEnd");
}
this.touchStartX=e.touches?e.touches[0].pageX:e.clientX;
this.touchStartY=e.touches?e.touches[0].pageY:e.clientY;
this._currentSel=this.selected;
if(this._delayedSelection){
this._selTimer=this.defer(function(){
this.set("selected",true);
},100);
}else{
this.set("selected",true);
}
},onTouchStart:function(){
},_onTouchMove:function(e){
var x=e.touches?e.touches[0].pageX:e.clientX;
var y=e.touches?e.touches[0].pageY:e.clientY;
if(Math.abs(x-this.touchStartX)>=4||Math.abs(y-this.touchStartY)>=4){
this.cancel();
var p=this.getParent();
if(p&&p.selectOne){
this._prevSel&&this._prevSel.set("selected",true);
}else{
this.set("selected",false);
}
}
},_disconnect:function(){
this.disconnect(this._onTouchMoveHandle);
this.disconnect(this._onTouchEndHandle);
this._onTouchMoveHandle=this._onTouchEndHandle=null;
},cancel:function(){
if(this._selTimer){
this._selTimer.remove();
this._selTimer=null;
}
this._disconnect();
},_onTouchEnd:function(e){
if(!this._selTimer&&this._delayedSelection){
return;
}
this.cancel();
this._onClick(e);
},setTransitionPos:function(e){
var w=this;
while(true){
w=w.getParent();
if(!w||_601.contains(w.domNode,"mblView")){
break;
}
}
if(w){
w.clickedPosX=e.clientX;
w.clickedPosY=e.clientY;
}
},transitionTo:function(_60e,href,url,_60f){
var opts=(_60e&&typeof (_60e)==="object")?_60e:{moveTo:_60e,href:href,url:url,scene:_60f,transition:this.transition,transitionDir:this.transitionDir};
new _607(this.domNode,opts).dispatch();
},_setIconAttr:function(icon){
if(!this._isOnLine){
this._pendingIcon=icon;
return;
}
this._set("icon",icon);
this.iconNode=_608.setIcon(icon,this.iconPos,this.iconNode,this.alt,this.iconParentNode,this.refNode,this.position);
},_setLabelAttr:function(text){
this._set("label",text);
this.labelNode.innerHTML=this._cv?this._cv(text):text;
},_setSelectedAttr:function(_610){
if(_610){
var p=this.getParent();
if(p&&p.selectOne){
var arr=_5ff.filter(p.getChildren(),function(w){
return w.selected;
});
_5ff.forEach(arr,function(c){
this._prevSel=c;
c.set("selected",false);
},this);
}
}
this._set("selected",_610);
}});
return has("dojo-bidi")?_600("dojox.mobile._ItemBase",[_60a,_609]):_60a;
});
},"dojox/mobile/Container":function(){
define(["dojo/_base/declare","dijit/_Container","./Pane"],function(_611,_612,Pane){
return _611("dojox.mobile.Container",[Pane,_612],{baseClass:"mblContainer"});
});
},"dijit/hccss":function(){
define(["dojo/dom-class","dojo/hccss","dojo/domReady","dojo/_base/window"],function(_613,has,_614,win){
_614(function(){
if(has("highcontrast")){
_613.add(win.body(),"dijit_a11y");
}
});
return has;
});
},"dijit/_Contained":function(){
define(["dojo/_base/declare","./registry"],function(_615,_616){
return _615("dijit._Contained",null,{_getSibling:function(_617){
var node=this.domNode;
do{
node=node[_617+"Sibling"];
}while(node&&node.nodeType!=1);
return node&&_616.byNode(node);
},getPreviousSibling:function(){
return this._getSibling("previous");
},getNextSibling:function(){
return this._getSibling("next");
},getIndexInParent:function(){
var p=this.getParent();
if(!p||!p.getIndexOfChild){
return -1;
}
return p.getIndexOfChild(this);
}});
});
},"dijit/form/_TextBoxMixin":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","../main"],function(_618,_619,dom,has,keys,lang,on,_61a){
var _61b=_619("dijit.form._TextBoxMixin"+(has("dojo-bidi")?"_NoBidi":""),null,{trim:false,uppercase:false,lowercase:false,propercase:false,maxLength:"",selectOnClick:false,placeHolder:"",_getValueAttr:function(){
return this.parse(this.get("displayedValue"),this.constraints);
},_setValueAttr:function(_61c,_61d,_61e){
var _61f;
if(_61c!==undefined){
_61f=this.filter(_61c);
if(typeof _61e!="string"){
if(_61f!==null&&((typeof _61f!="number")||!isNaN(_61f))){
_61e=this.filter(this.format(_61f,this.constraints));
}else{
_61e="";
}
}
}
if(_61e!=null&&((typeof _61e)!="number"||!isNaN(_61e))&&this.textbox.value!=_61e){
this.textbox.value=_61e;
this._set("displayedValue",this.get("displayedValue"));
}
this.inherited(arguments,[_61f,_61d]);
},displayedValue:"",_getDisplayedValueAttr:function(){
return this.filter(this.textbox.value);
},_setDisplayedValueAttr:function(_620){
if(_620==null){
_620="";
}else{
if(typeof _620!="string"){
_620=String(_620);
}
}
this.textbox.value=_620;
this._setValueAttr(this.get("value"),undefined);
this._set("displayedValue",this.get("displayedValue"));
},format:function(_621){
return _621==null?"":(_621.toString?_621.toString():_621);
},parse:function(_622){
return _622;
},_refreshState:function(){
},onInput:function(){
},__skipInputEvent:false,_onInput:function(evt){
this._processInput(evt);
if(this.intermediateChanges){
this.defer(function(){
this._handleOnChange(this.get("value"),false);
});
}
},_processInput:function(evt){
this._refreshState();
this._set("displayedValue",this.get("displayedValue"));
},postCreate:function(){
this.textbox.setAttribute("value",this.textbox.value);
this.inherited(arguments);
var _623=function(e){
var _624;
if(e.type=="keydown"){
_624=e.keyCode;
switch(_624){
case keys.SHIFT:
case keys.ALT:
case keys.CTRL:
case keys.META:
case keys.CAPS_LOCK:
case keys.NUM_LOCK:
case keys.SCROLL_LOCK:
return;
}
if(!e.ctrlKey&&!e.metaKey&&!e.altKey){
switch(_624){
case keys.NUMPAD_0:
case keys.NUMPAD_1:
case keys.NUMPAD_2:
case keys.NUMPAD_3:
case keys.NUMPAD_4:
case keys.NUMPAD_5:
case keys.NUMPAD_6:
case keys.NUMPAD_7:
case keys.NUMPAD_8:
case keys.NUMPAD_9:
case keys.NUMPAD_MULTIPLY:
case keys.NUMPAD_PLUS:
case keys.NUMPAD_ENTER:
case keys.NUMPAD_MINUS:
case keys.NUMPAD_PERIOD:
case keys.NUMPAD_DIVIDE:
return;
}
if((_624>=65&&_624<=90)||(_624>=48&&_624<=57)||_624==keys.SPACE){
return;
}
var _625=false;
for(var i in keys){
if(keys[i]===e.keyCode){
_625=true;
break;
}
}
if(!_625){
return;
}
}
}
_624=e.charCode>=32?String.fromCharCode(e.charCode):e.charCode;
if(!_624){
_624=(e.keyCode>=65&&e.keyCode<=90)||(e.keyCode>=48&&e.keyCode<=57)||e.keyCode==keys.SPACE?String.fromCharCode(e.keyCode):e.keyCode;
}
if(!_624){
_624=229;
}
if(e.type=="keypress"){
if(typeof _624!="string"){
return;
}
if((_624>="a"&&_624<="z")||(_624>="A"&&_624<="Z")||(_624>="0"&&_624<="9")||(_624===" ")){
if(e.ctrlKey||e.metaKey||e.altKey){
return;
}
}
}
if(e.type=="input"){
if(this.__skipInputEvent){
this.__skipInputEvent=false;
return;
}
}else{
this.__skipInputEvent=true;
}
var faux={faux:true},attr;
for(attr in e){
if(attr!="layerX"&&attr!="layerY"){
var v=e[attr];
if(typeof v!="function"&&typeof v!="undefined"){
faux[attr]=v;
}
}
}
lang.mixin(faux,{charOrCode:_624,_wasConsumed:false,preventDefault:function(){
faux._wasConsumed=true;
e.preventDefault();
},stopPropagation:function(){
e.stopPropagation();
}});
if(this.onInput(faux)===false){
faux.preventDefault();
faux.stopPropagation();
}
if(faux._wasConsumed){
return;
}
this.defer(function(){
this._onInput(faux);
});
if(e.type=="keypress"){
e.stopPropagation();
}
};
this.own(on(this.textbox,"keydown, keypress, paste, cut, input, compositionend",lang.hitch(this,_623)));
},_blankValue:"",filter:function(val){
if(val===null){
return this._blankValue;
}
if(typeof val!="string"){
return val;
}
if(this.trim){
val=lang.trim(val);
}
if(this.uppercase){
val=val.toUpperCase();
}
if(this.lowercase){
val=val.toLowerCase();
}
if(this.propercase){
val=val.replace(/[^\s]+/g,function(word){
return word.substring(0,1).toUpperCase()+word.substring(1);
});
}
return val;
},_setBlurValue:function(){
this._setValueAttr(this.get("value"),true);
},_onBlur:function(e){
if(this.disabled){
return;
}
this._setBlurValue();
this.inherited(arguments);
},_isTextSelected:function(){
return this.textbox.selectionStart!=this.textbox.selectionEnd;
},_onFocus:function(by){
if(this.disabled||this.readOnly){
return;
}
if(this.selectOnClick&&by=="mouse"){
this._selectOnClickHandle=on.once(this.domNode,"mouseup, touchend",lang.hitch(this,function(evt){
if(!this._isTextSelected()){
_61b.selectInputText(this.textbox);
}
}));
this.own(this._selectOnClickHandle);
this.defer(function(){
if(this._selectOnClickHandle){
this._selectOnClickHandle.remove();
this._selectOnClickHandle=null;
}
},500);
}
this.inherited(arguments);
this._refreshState();
},reset:function(){
this.textbox.value="";
this.inherited(arguments);
}});
if(has("dojo-bidi")){
_61b=_619("dijit.form._TextBoxMixin",_61b,{_setValueAttr:function(){
this.inherited(arguments);
this.applyTextDir(this.focusNode);
},_setDisplayedValueAttr:function(){
this.inherited(arguments);
this.applyTextDir(this.focusNode);
},_onInput:function(){
this.applyTextDir(this.focusNode);
this.inherited(arguments);
}});
}
_61b._setSelectionRange=_61a._setSelectionRange=function(_626,_627,stop){
if(_626.setSelectionRange){
_626.setSelectionRange(_627,stop);
}
};
_61b.selectInputText=_61a.selectInputText=function(_628,_629,stop){
_628=dom.byId(_628);
if(isNaN(_629)){
_629=0;
}
if(isNaN(stop)){
stop=_628.value?_628.value.length:0;
}
try{
_628.focus();
_61b._setSelectionRange(_628,_629,stop);
}
catch(e){
}
};
return _61b;
});
},"dojox/mobile/parser":function(){
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/lang","dojo/_base/window","dojo/ready"],function(dojo,_62a,_62b,lang,win,_62c){
var dm=lang.getObject("dojox.mobile",true);
var _62d=function(){
var _62e={};
var _62f=function(type,_630){
if(typeof (_630)==="string"){
var t=type+":"+_630.replace(/ /g,"");
return _62e[t]||(_62e[t]=_62f(type).createSubclass(_62a.map(_630.split(/, */),_62f)));
}
return _62e[type]||(_62e[type]=lang.getObject(type)||require(type));
};
var _631=function(js){
return eval(js);
};
this.instantiate=function(_632,_633,_634){
_633=_633||{};
_634=_634||{};
var i,ws=[];
if(_632){
for(i=0;i<_632.length;i++){
var n=_632[i],type=n._type,ctor=_62f(type,n.getAttribute("data-dojo-mixins")),_635=ctor.prototype,_636={},prop,v,t;
lang.mixin(_636,_631.call(_634.propsThis,"({"+(n.getAttribute("data-dojo-props")||"")+"})"));
lang.mixin(_636,_634.defaults);
lang.mixin(_636,_633);
for(prop in _635){
v=n.getAttributeNode(prop);
v=v&&v.nodeValue;
t=typeof _635[prop];
if(!v&&(t!=="boolean"||v!=="")){
continue;
}
if(lang.isArray(_635[prop])){
_636[prop]=v.split(/\s*,\s*/);
}else{
if(t==="string"){
_636[prop]=v;
}else{
if(t==="number"){
_636[prop]=v-0;
}else{
if(t==="boolean"){
_636[prop]=(v!=="false");
}else{
if(t==="object"){
_636[prop]=eval("("+v+")");
}else{
if(t==="function"){
_636[prop]=lang.getObject(v,false)||new Function(v);
n.removeAttribute(prop);
}
}
}
}
}
}
}
_636["class"]=n.className;
if(!_636.style){
_636.style=n.style.cssText;
}
v=n.getAttribute("data-dojo-attach-point");
if(v){
_636.dojoAttachPoint=v;
}
v=n.getAttribute("data-dojo-attach-event");
if(v){
_636.dojoAttachEvent=v;
}
var _637=new ctor(_636,n);
ws.push(_637);
var jsId=n.getAttribute("jsId")||n.getAttribute("data-dojo-id");
if(jsId){
lang.setObject(jsId,_637);
}
}
for(i=0;i<ws.length;i++){
var w=ws[i];
!_634.noStart&&w.startup&&!w._started&&w.startup();
}
}
return ws;
};
this.parse=function(_638,_639){
if(!_638){
_638=win.body();
}else{
if(!_639&&_638.rootNode){
_639=_638;
_638=_638.rootNode;
}
}
var _63a=_638.getElementsByTagName("*");
var i,j,list=[];
for(i=0;i<_63a.length;i++){
var n=_63a[i],type=(n._type=n.getAttribute("dojoType")||n.getAttribute("data-dojo-type"));
if(type){
if(n._skip){
n._skip="";
continue;
}
if(_62f(type).prototype.stopParser&&!(_639&&_639.template)){
var arr=n.getElementsByTagName("*");
for(j=0;j<arr.length;j++){
arr[j]._skip="1";
}
}
list.push(n);
}
}
var _63b=_639&&_639.template?{template:true}:null;
return this.instantiate(list,_63b,_639);
};
};
var _63c=new _62d();
if(_62b.parseOnLoad){
_62c(100,function(){
try{
if(!require("dojo/parser")){
_63c.parse();
}
}
catch(e){
_63c.parse();
}
});
}
dm.parser=_63c;
dojo.parser=dojo.parser||_63c;
return _63c;
});
},"dijit/Viewport":function(){
define(["dojo/Evented","dojo/on","dojo/domReady","dojo/sniff","dojo/window"],function(_63d,on,_63e,has,_63f){
var _640=new _63d();
var _641;
_63e(function(){
var _642=_63f.getBox();
_640._rlh=on(window,"resize",function(){
var _643=_63f.getBox();
if(_642.h==_643.h&&_642.w==_643.w){
return;
}
_642=_643;
_640.emit("resize");
});
if(has("ie")==8){
var _644=screen.deviceXDPI;
setInterval(function(){
if(screen.deviceXDPI!=_644){
_644=screen.deviceXDPI;
_640.emit("resize");
}
},500);
}
if(has("ios")){
on(document,"focusin",function(evt){
_641=evt.target;
});
on(document,"focusout",function(evt){
_641=null;
});
}
});
_640.getEffectiveBox=function(doc){
var box=_63f.getBox(doc);
var tag=_641&&_641.tagName&&_641.tagName.toLowerCase();
if(has("ios")&&_641&&!_641.readOnly&&(tag=="textarea"||(tag=="input"&&/^(color|email|number|password|search|tel|text|url)$/.test(_641.type)))){
box.h*=(orientation==0||orientation==180?0.66:0.4);
var rect=_641.getBoundingClientRect();
box.h=Math.max(box.h,rect.top+rect.height);
}
return box;
};
return _640;
});
},"dojox/mobile/scrollable":function(){
define(["dojo/_base/kernel","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","dojo/touch","./sniff","./_css3","./_maskUtils"],function(dojo,_645,_646,lang,win,_647,_648,_649,_64a,_64b,has,css3,_64c){
var dm=lang.getObject("dojox.mobile",true);
has.add("translate3d",function(){
if(has("css3-animations")){
var elem=win.doc.createElement("div");
elem.style[css3.name("transform")]="translate3d(0px,1px,0px)";
win.doc.documentElement.appendChild(elem);
var v=win.doc.defaultView.getComputedStyle(elem,"")[css3.name("transform",true)];
var _64d=v&&v.indexOf("matrix")===0;
win.doc.documentElement.removeChild(elem);
return _64d;
}
});
var _64e=function(){
};
lang.extend(_64e,{fixedHeaderHeight:0,fixedFooterHeight:0,isLocalFooter:false,scrollBar:true,scrollDir:"v",weight:0.6,fadeScrollBar:true,disableFlashScrollBar:false,threshold:4,constraint:true,touchNode:null,propagatable:true,dirLock:false,height:"",scrollType:0,_parentPadBorderExtentsBottom:0,init:function(_64f){
if(_64f){
for(var p in _64f){
if(_64f.hasOwnProperty(p)){
this[p]=((p=="domNode"||p=="containerNode")&&typeof _64f[p]=="string")?win.doc.getElementById(_64f[p]):_64f[p];
}
}
}
if(typeof this.domNode.style.msTouchAction!="undefined"){
this.domNode.style.msTouchAction="none";
}
this.touchNode=this.touchNode||this.containerNode;
this._v=(this.scrollDir.indexOf("v")!=-1);
this._h=(this.scrollDir.indexOf("h")!=-1);
this._f=(this.scrollDir=="f");
this._ch=[];
this._ch.push(_645.connect(this.touchNode,_64b.press,this,"onTouchStart"));
if(has("css3-animations")){
this._useTopLeft=this.scrollType?this.scrollType===2:has("android")<3;
if(!this._useTopLeft){
this._useTransformTransition=this.scrollType?this.scrollType===3:has("ios")>=6;
}
if(!this._useTopLeft){
if(this._useTransformTransition){
this._ch.push(_645.connect(this.domNode,css3.name("transitionEnd"),this,"onFlickAnimationEnd"));
this._ch.push(_645.connect(this.domNode,css3.name("transitionStart"),this,"onFlickAnimationStart"));
}else{
this._ch.push(_645.connect(this.domNode,css3.name("animationEnd"),this,"onFlickAnimationEnd"));
this._ch.push(_645.connect(this.domNode,css3.name("animationStart"),this,"onFlickAnimationStart"));
for(var i=0;i<3;i++){
this.setKeyframes(null,null,i);
}
}
if(has("translate3d")){
_649.set(this.containerNode,css3.name("transform"),"translate3d(0,0,0)");
}
}else{
this._ch.push(_645.connect(this.domNode,css3.name("transitionEnd"),this,"onFlickAnimationEnd"));
this._ch.push(_645.connect(this.domNode,css3.name("transitionStart"),this,"onFlickAnimationStart"));
}
}
this._speed={x:0,y:0};
this._appFooterHeight=0;
if(this.isTopLevel()&&!this.noResize){
this.resize();
}
var _650=this;
setTimeout(function(){
_650.flashScrollBar();
},600);
if(win.global.addEventListener){
this._onScroll=function(e){
if(!_650.domNode||_650.domNode.style.display==="none"){
return;
}
var _651=_650.domNode.scrollTop;
var _652=_650.domNode.scrollLeft;
var pos;
if(_651>0||_652>0){
pos=_650.getPos();
_650.domNode.scrollLeft=0;
_650.domNode.scrollTop=0;
_650.scrollTo({x:pos.x-_652,y:pos.y-_651});
}
};
win.global.addEventListener("scroll",this._onScroll,true);
}
if(!this.disableTouchScroll&&this.domNode.addEventListener){
this._onFocusScroll=function(e){
if(!_650.domNode||_650.domNode.style.display==="none"){
return;
}
var node=win.doc.activeElement;
var _653,_654;
if(node){
_653=node.getBoundingClientRect();
_654=_650.domNode.getBoundingClientRect();
if(_653.height<_650.getDim().d.h){
if(_653.top<(_654.top+_650.fixedHeaderHeight)){
_650.scrollIntoView(node,true);
}else{
if((_653.top+_653.height)>(_654.top+_654.height-_650.fixedFooterHeight)){
_650.scrollIntoView(node,false);
}
}
}
}
};
this.domNode.addEventListener("focus",this._onFocusScroll,true);
}
},isTopLevel:function(){
return true;
},cleanup:function(){
if(this._ch){
for(var i=0;i<this._ch.length;i++){
_645.disconnect(this._ch[i]);
}
this._ch=null;
}
if(this._onScroll&&win.global.removeEventListener){
win.global.removeEventListener("scroll",this._onScroll,true);
this._onScroll=null;
}
if(this._onFocusScroll&&this.domNode.removeEventListener){
this.domNode.removeEventListener("focus",this._onFocusScroll,true);
this._onFocusScroll=null;
}
},findDisp:function(node){
if(!node.parentNode){
return null;
}
if(node.nodeType===1&&_647.contains(node,"mblSwapView")&&node.style.display!=="none"){
return node;
}
var _655=node.parentNode.childNodes;
for(var i=0;i<_655.length;i++){
var n=_655[i];
if(n.nodeType===1&&_647.contains(n,"mblView")&&n.style.display!=="none"){
return n;
}
}
return node;
},getScreenSize:function(){
return {h:win.global.innerHeight||win.doc.documentElement.clientHeight||win.doc.documentElement.offsetHeight,w:win.global.innerWidth||win.doc.documentElement.clientWidth||win.doc.documentElement.offsetWidth};
},resize:function(e){
this._appFooterHeight=(this._fixedAppFooter)?this._fixedAppFooter.offsetHeight:0;
if(this.isLocalHeader){
this.containerNode.style.marginTop=this.fixedHeaderHeight+"px";
}
var top=0;
for(var n=this.domNode;n&&n.tagName!="BODY";n=n.offsetParent){
n=this.findDisp(n);
if(!n){
break;
}
top+=n.offsetTop+_64a.getBorderExtents(n).h;
}
var h,_656=this.getScreenSize().h,dh=_656-top-this._appFooterHeight;
if(this.height==="inherit"){
if(this.domNode.offsetParent){
h=_64a.getContentBox(this.domNode.offsetParent).h-_64a.getBorderExtents(this.domNode).h+"px";
}
}else{
if(this.height==="auto"){
var _657=this.domNode.offsetParent;
if(_657){
this.domNode.style.height="0px";
var _658=_657.getBoundingClientRect(),_659=this.domNode.getBoundingClientRect(),_65a=_658.bottom-this._appFooterHeight-this._parentPadBorderExtentsBottom;
if(_659.bottom>=_65a){
dh=_656-(_659.top-_658.top)-this._appFooterHeight-this._parentPadBorderExtentsBottom;
}else{
dh=_65a-_659.bottom;
}
}
var _65b=Math.max(this.domNode.scrollHeight,this.containerNode.scrollHeight);
h=(_65b?Math.min(_65b,dh):dh)+"px";
}else{
if(this.height){
h=this.height;
}
}
}
if(!h){
h=dh+"px";
}
if(h.charAt(0)!=="-"&&h!=="default"){
this.domNode.style.height=h;
}
if(!this._conn){
this.onTouchEnd();
}
},onFlickAnimationStart:function(e){
_646.stop(e);
},onFlickAnimationEnd:function(e){
if(has("ios")){
this._keepInputCaretInActiveElement();
}
if(e){
var an=e.animationName;
if(an&&an.indexOf("scrollableViewScroll2")===-1){
if(an.indexOf("scrollableViewScroll0")!==-1){
if(this._scrollBarNodeV){
_647.remove(this._scrollBarNodeV,"mblScrollableScrollTo0");
}
}else{
if(an.indexOf("scrollableViewScroll1")!==-1){
if(this._scrollBarNodeH){
_647.remove(this._scrollBarNodeH,"mblScrollableScrollTo1");
}
}else{
if(this._scrollBarNodeV){
this._scrollBarNodeV.className="";
}
if(this._scrollBarNodeH){
this._scrollBarNodeH.className="";
}
}
}
return;
}
if(this._useTransformTransition||this._useTopLeft){
var n=e.target;
if(n===this._scrollBarV||n===this._scrollBarH){
var cls="mblScrollableScrollTo"+(n===this._scrollBarV?"0":"1");
if(_647.contains(n,cls)){
_647.remove(n,cls);
}else{
n.className="";
}
return;
}
}
if(e.srcElement){
_646.stop(e);
}
}
this.stopAnimation();
if(this._bounce){
var _65c=this;
var _65d=_65c._bounce;
setTimeout(function(){
_65c.slideTo(_65d,0.3,"ease-out");
},0);
_65c._bounce=undefined;
}else{
this.hideScrollBar();
this.removeCover();
}
},isFormElement:function(node){
if(node&&node.nodeType!==1){
node=node.parentNode;
}
if(!node||node.nodeType!==1){
return false;
}
var t=node.tagName;
return (t==="SELECT"||t==="INPUT"||t==="TEXTAREA"||t==="BUTTON");
},onTouchStart:function(e){
if(this.disableTouchScroll){
return;
}
if(this._conn&&(new Date()).getTime()-this.startTime<500){
return;
}
if(!this._conn){
this._conn=[];
this._conn.push(_645.connect(win.doc,_64b.move,this,"onTouchMove"));
this._conn.push(_645.connect(win.doc,_64b.release,this,"onTouchEnd"));
}
this._aborted=false;
if(_647.contains(this.containerNode,"mblScrollableScrollTo2")){
this.abort();
}else{
if(this._scrollBarNodeV){
this._scrollBarNodeV.className="";
}
if(this._scrollBarNodeH){
this._scrollBarNodeH.className="";
}
}
this.touchStartX=e.touches?e.touches[0].pageX:e.clientX;
this.touchStartY=e.touches?e.touches[0].pageY:e.clientY;
this.startTime=(new Date()).getTime();
this.startPos=this.getPos();
this._dim=this.getDim();
this._time=[0];
this._posX=[this.touchStartX];
this._posY=[this.touchStartY];
this._locked=false;
if(!this.isFormElement(e.target)){
this.propagatable?e.preventDefault():_646.stop(e);
}
},onTouchMove:function(e){
if(this._locked){
return;
}
var x=e.touches?e.touches[0].pageX:e.clientX;
var y=e.touches?e.touches[0].pageY:e.clientY;
var dx=x-this.touchStartX;
var dy=y-this.touchStartY;
var to={x:this.startPos.x+dx,y:this.startPos.y+dy};
var dim=this._dim;
dx=Math.abs(dx);
dy=Math.abs(dy);
if(this._time.length==1){
if(this.dirLock){
if(this._v&&!this._h&&dx>=this.threshold&&dx>=dy||(this._h||this._f)&&!this._v&&dy>=this.threshold&&dy>=dx){
this._locked=true;
return;
}
}
if(this._v&&this._h){
if(dy<this.threshold&&dx<this.threshold){
return;
}
}else{
if(this._v&&dy<this.threshold||(this._h||this._f)&&dx<this.threshold){
return;
}
}
this.addCover();
this.showScrollBar();
}
var _65e=this.weight;
if(this._v&&this.constraint){
if(to.y>0){
to.y=Math.round(to.y*_65e);
}else{
if(to.y<-dim.o.h){
if(dim.c.h<dim.d.h){
to.y=Math.round(to.y*_65e);
}else{
to.y=-dim.o.h-Math.round((-dim.o.h-to.y)*_65e);
}
}
}
}
if((this._h||this._f)&&this.constraint){
if(to.x>0){
to.x=Math.round(to.x*_65e);
}else{
if(to.x<-dim.o.w){
if(dim.c.w<dim.d.w){
to.x=Math.round(to.x*_65e);
}else{
to.x=-dim.o.w-Math.round((-dim.o.w-to.x)*_65e);
}
}
}
}
this.scrollTo(to);
var max=10;
var n=this._time.length;
if(n>=2){
var d0,d1;
if(this._v&&!this._h){
d0=this._posY[n-1]-this._posY[n-2];
d1=y-this._posY[n-1];
}else{
if(!this._v&&this._h){
d0=this._posX[n-1]-this._posX[n-2];
d1=x-this._posX[n-1];
}
}
if(d0*d1<0){
this._time=[this._time[n-1]];
this._posX=[this._posX[n-1]];
this._posY=[this._posY[n-1]];
n=1;
}
}
if(n==max){
this._time.shift();
this._posX.shift();
this._posY.shift();
}
this._time.push((new Date()).getTime()-this.startTime);
this._posX.push(x);
this._posY.push(y);
},_keepInputCaretInActiveElement:function(){
var _65f=win.doc.activeElement;
var _660;
if(_65f&&(_65f.tagName=="INPUT"||_65f.tagName=="TEXTAREA")){
_660=_65f.value;
if(_65f.type=="number"||_65f.type=="week"){
if(_660){
_65f.value=_65f.value+1;
}else{
_65f.value=(_65f.type=="week")?"2013-W10":1;
}
_65f.value=_660;
}else{
_65f.value=_65f.value+" ";
_65f.value=_660;
}
}
},_fingerMovedSinceTouchStart:function(){
var n=this._time.length;
if(n<=1||(n==2&&Math.abs(this._posY[1]-this._posY[0])<4&&has("touch"))){
return false;
}else{
return true;
}
},onTouchEnd:function(e){
if(this._locked){
return;
}
var _661=this._speed={x:0,y:0};
var dim=this._dim;
var pos=this.getPos();
var to={};
if(e){
if(!this._conn){
return;
}
for(var i=0;i<this._conn.length;i++){
_645.disconnect(this._conn[i]);
}
this._conn=null;
var _662=false;
if(!this._aborted&&!this._fingerMovedSinceTouchStart()){
_662=true;
}
if(_662){
this.hideScrollBar();
this.removeCover();
if(has("touch")&&has("clicks-prevented")&&!this.isFormElement(e.target)){
var elem=e.target;
if(elem.nodeType!=1){
elem=elem.parentNode;
}
setTimeout(function(){
dm._sendClick(elem,e);
});
}
return;
}
_661=this._speed=this.getSpeed();
}else{
if(pos.x==0&&pos.y==0){
return;
}
dim=this.getDim();
}
if(this._v){
to.y=pos.y+_661.y;
}
if(this._h||this._f){
to.x=pos.x+_661.x;
}
if(this.adjustDestination(to,pos,dim)===false){
return;
}
if(this.constraint){
if(this.scrollDir=="v"&&dim.c.h<dim.d.h){
this.slideTo({y:0},0.3,"ease-out");
return;
}else{
if(this.scrollDir=="h"&&dim.c.w<dim.d.w){
this.slideTo({x:0},0.3,"ease-out");
return;
}else{
if(this._v&&this._h&&dim.c.h<dim.d.h&&dim.c.w<dim.d.w){
this.slideTo({x:0,y:0},0.3,"ease-out");
return;
}
}
}
}
var _663,_664="ease-out";
var _665={};
if(this._v&&this.constraint){
if(to.y>0){
if(pos.y>0){
_663=0.3;
to.y=0;
}else{
to.y=Math.min(to.y,20);
_664="linear";
_665.y=0;
}
}else{
if(-_661.y>dim.o.h-(-pos.y)){
if(pos.y<-dim.o.h){
_663=0.3;
to.y=dim.c.h<=dim.d.h?0:-dim.o.h;
}else{
to.y=Math.max(to.y,-dim.o.h-20);
_664="linear";
_665.y=-dim.o.h;
}
}
}
}
if((this._h||this._f)&&this.constraint){
if(to.x>0){
if(pos.x>0){
_663=0.3;
to.x=0;
}else{
to.x=Math.min(to.x,20);
_664="linear";
_665.x=0;
}
}else{
if(-_661.x>dim.o.w-(-pos.x)){
if(pos.x<-dim.o.w){
_663=0.3;
to.x=dim.c.w<=dim.d.w?0:-dim.o.w;
}else{
to.x=Math.max(to.x,-dim.o.w-20);
_664="linear";
_665.x=-dim.o.w;
}
}
}
}
this._bounce=(_665.x!==undefined||_665.y!==undefined)?_665:undefined;
if(_663===undefined){
var _666,_667;
if(this._v&&this._h){
_667=Math.sqrt(_661.x*_661.x+_661.y*_661.y);
_666=Math.sqrt(Math.pow(to.y-pos.y,2)+Math.pow(to.x-pos.x,2));
}else{
if(this._v){
_667=_661.y;
_666=to.y-pos.y;
}else{
if(this._h){
_667=_661.x;
_666=to.x-pos.x;
}
}
}
if(_666===0&&!e){
return;
}
_663=_667!==0?Math.abs(_666/_667):0.01;
}
this.slideTo(to,_663,_664);
},adjustDestination:function(to,pos,dim){
return true;
},abort:function(){
this._aborted=true;
this.scrollTo(this.getPos());
this.stopAnimation();
},_forceRendering:function(elt){
if(has("android")>=4.1){
var tmp=elt.style.display;
elt.style.display="none";
elt.offsetHeight;
elt.style.display=tmp;
}
},stopAnimation:function(){
this._forceRendering(this.containerNode);
_647.remove(this.containerNode,"mblScrollableScrollTo2");
if(this._scrollBarV){
this._scrollBarV.className="";
this._forceRendering(this._scrollBarV);
}
if(this._scrollBarH){
this._scrollBarH.className="";
this._forceRendering(this._scrollBarH);
}
if(this._useTransformTransition||this._useTopLeft){
this.containerNode.style[css3.name("transition")]="";
if(this._scrollBarV){
this._scrollBarV.style[css3.name("transition")]="";
}
if(this._scrollBarH){
this._scrollBarH.style[css3.name("transition")]="";
}
}
},scrollIntoView:function(node,_668,_669){
if(!this._v){
return;
}
var c=this.containerNode,h=this.getDim().d.h,top=0;
for(var n=node;n!==c;n=n.offsetParent){
if(!n||n.tagName==="BODY"){
return;
}
top+=n.offsetTop;
}
var y=_668?Math.max(h-c.offsetHeight,-top):Math.min(0,h-top-node.offsetHeight);
(_669&&typeof _669==="number")?this.slideTo({y:y},_669,"ease-out"):this.scrollTo({y:y});
},getSpeed:function(){
var x=0,y=0,n=this._time.length;
if(n>=2&&(new Date()).getTime()-this.startTime-this._time[n-1]<500){
var dy=this._posY[n-(n>3?2:1)]-this._posY[(n-6)>=0?n-6:0];
var dx=this._posX[n-(n>3?2:1)]-this._posX[(n-6)>=0?n-6:0];
var dt=this._time[n-(n>3?2:1)]-this._time[(n-6)>=0?n-6:0];
y=this.calcSpeed(dy,dt);
x=this.calcSpeed(dx,dt);
}
return {x:x,y:y};
},calcSpeed:function(_66a,time){
return Math.round(_66a/time*100)*4;
},scrollTo:function(to,_66b,node){
var _66c,_66d,_66e;
var _66f=true;
if(!this._aborted&&this._conn){
if(!this._dim){
this._dim=this.getDim();
}
_66d=(to.y>0)?to.y:0;
_66e=(this._dim.o.h+to.y<0)?-1*(this._dim.o.h+to.y):0;
_66c={bubbles:false,cancelable:false,x:to.x,y:to.y,beforeTop:_66d>0,beforeTopHeight:_66d,afterBottom:_66e>0,afterBottomHeight:_66e};
_66f=this.onBeforeScroll(_66c);
}
if(_66f){
var s=(node||this.containerNode).style;
if(has("css3-animations")){
if(!this._useTopLeft){
if(this._useTransformTransition){
s[css3.name("transition")]="";
}
s[css3.name("transform")]=this.makeTranslateStr(to);
}else{
s[css3.name("transition")]="";
if(this._v){
s.top=to.y+"px";
}
if(this._h||this._f){
s.left=to.x+"px";
}
}
}else{
if(this._v){
s.top=to.y+"px";
}
if(this._h||this._f){
s.left=to.x+"px";
}
}
if(has("ios")){
this._keepInputCaretInActiveElement();
}
if(!_66b){
this.scrollScrollBarTo(this.calcScrollBarPos(to));
}
if(_66c){
this.onAfterScroll(_66c);
}
}
},onBeforeScroll:function(e){
return true;
},onAfterScroll:function(e){
},slideTo:function(to,_670,_671){
this._runSlideAnimation(this.getPos(),to,_670,_671,this.containerNode,2);
this.slideScrollBarTo(to,_670,_671);
},makeTranslateStr:function(to){
var y=this._v&&typeof to.y=="number"?to.y+"px":"0px";
var x=(this._h||this._f)&&typeof to.x=="number"?to.x+"px":"0px";
return has("translate3d")?"translate3d("+x+","+y+",0px)":"translate("+x+","+y+")";
},getPos:function(){
if(has("css3-animations")){
var s=win.doc.defaultView.getComputedStyle(this.containerNode,"");
if(!this._useTopLeft){
var m=s[css3.name("transform")];
if(m&&m.indexOf("matrix")===0){
var arr=m.split(/[,\s\)]+/);
var i=m.indexOf("matrix3d")===0?12:4;
return {y:arr[i+1]-0,x:arr[i]-0};
}
return {x:0,y:0};
}else{
return {x:parseInt(s.left)||0,y:parseInt(s.top)||0};
}
}else{
var y=parseInt(this.containerNode.style.top)||0;
return {y:y,x:this.containerNode.offsetLeft};
}
},getDim:function(){
var d={};
d.c={h:this.containerNode.offsetHeight,w:this.containerNode.offsetWidth};
d.v={h:this.domNode.offsetHeight+this._appFooterHeight,w:this.domNode.offsetWidth};
d.d={h:d.v.h-this.fixedHeaderHeight-this.fixedFooterHeight-this._appFooterHeight,w:d.v.w};
d.o={h:d.c.h-d.v.h+this.fixedHeaderHeight+this.fixedFooterHeight+this._appFooterHeight,w:d.c.w-d.v.w};
return d;
},showScrollBar:function(){
if(!this.scrollBar){
return;
}
var dim=this._dim;
if(this.scrollDir=="v"&&dim.c.h<=dim.d.h){
return;
}
if(this.scrollDir=="h"&&dim.c.w<=dim.d.w){
return;
}
if(this._v&&this._h&&dim.c.h<=dim.d.h&&dim.c.w<=dim.d.w){
return;
}
var _672=function(self,dir){
var bar=self["_scrollBarNode"+dir];
if(!bar){
var _673=_648.create("div",null,self.domNode);
var _674={position:"absolute",overflow:"hidden"};
if(dir=="V"){
_674.right="2px";
_674.width="5px";
}else{
_674.bottom=(self.isLocalFooter?self.fixedFooterHeight:0)+2+"px";
_674.height="5px";
}
_649.set(_673,_674);
_673.className="mblScrollBarWrapper";
self["_scrollBarWrapper"+dir]=_673;
bar=_648.create("div",null,_673);
_649.set(bar,css3.add({opacity:0.6,position:"absolute",backgroundColor:"#606060",fontSize:"1px",MozBorderRadius:"2px",zIndex:2147483647},{borderRadius:"2px",transformOrigin:"0 0"}));
_649.set(bar,dir=="V"?{width:"5px"}:{height:"5px"});
self["_scrollBarNode"+dir]=bar;
}
return bar;
};
if(this._v&&!this._scrollBarV){
this._scrollBarV=_672(this,"V");
}
if(this._h&&!this._scrollBarH){
this._scrollBarH=_672(this,"H");
}
this.resetScrollBar();
},hideScrollBar:function(){
if(this.fadeScrollBar&&has("css3-animations")){
if(!dm._fadeRule){
var node=_648.create("style",null,win.doc.getElementsByTagName("head")[0]);
node.textContent=".mblScrollableFadeScrollBar{"+"  "+css3.name("animation-duration",true)+": 1s;"+"  "+css3.name("animation-name",true)+": scrollableViewFadeScrollBar;}"+"@"+css3.name("keyframes",true)+" scrollableViewFadeScrollBar{"+"  from { opacity: 0.6; }"+"  to { opacity: 0; }}";
dm._fadeRule=node.sheet.cssRules[1];
}
}
if(!this.scrollBar){
return;
}
var f=function(bar,self){
_649.set(bar,css3.add({opacity:0},{animationDuration:""}));
if(!(self._useTopLeft&&has("android"))){
bar.className="mblScrollableFadeScrollBar";
}
};
if(this._scrollBarV){
f(this._scrollBarV,this);
this._scrollBarV=null;
}
if(this._scrollBarH){
f(this._scrollBarH,this);
this._scrollBarH=null;
}
},calcScrollBarPos:function(to){
var pos={};
var dim=this._dim;
var f=function(_675,barH,t,d,c){
var y=Math.round((d-barH-8)/(d-c)*t);
if(y<-barH+5){
y=-barH+5;
}
if(y>_675-5){
y=_675-5;
}
return y;
};
if(typeof to.y=="number"&&this._scrollBarV){
pos.y=f(this._scrollBarWrapperV.offsetHeight,this._scrollBarV.offsetHeight,to.y,dim.d.h,dim.c.h);
}
if(typeof to.x=="number"&&this._scrollBarH){
pos.x=f(this._scrollBarWrapperH.offsetWidth,this._scrollBarH.offsetWidth,to.x,dim.d.w,dim.c.w);
}
return pos;
},scrollScrollBarTo:function(to){
if(!this.scrollBar){
return;
}
if(this._v&&this._scrollBarV&&typeof to.y=="number"){
if(has("css3-animations")){
if(!this._useTopLeft){
if(this._useTransformTransition){
this._scrollBarV.style[css3.name("transition")]="";
}
this._scrollBarV.style[css3.name("transform")]=this.makeTranslateStr({y:to.y});
}else{
_649.set(this._scrollBarV,css3.add({top:to.y+"px"},{transition:""}));
}
}else{
this._scrollBarV.style.top=to.y+"px";
}
}
if(this._h&&this._scrollBarH&&typeof to.x=="number"){
if(has("css3-animations")){
if(!this._useTopLeft){
if(this._useTransformTransition){
this._scrollBarH.style[css3.name("transition")]="";
}
this._scrollBarH.style[css3.name("transform")]=this.makeTranslateStr({x:to.x});
}else{
_649.set(this._scrollBarH,css3.add({left:to.x+"px"},{transition:""}));
}
}else{
this._scrollBarH.style.left=to.x+"px";
}
}
},slideScrollBarTo:function(to,_676,_677){
if(!this.scrollBar){
return;
}
var _678=this.calcScrollBarPos(this.getPos());
var _679=this.calcScrollBarPos(to);
if(this._v&&this._scrollBarV){
this._runSlideAnimation({y:_678.y},{y:_679.y},_676,_677,this._scrollBarV,0);
}
if(this._h&&this._scrollBarH){
this._runSlideAnimation({x:_678.x},{x:_679.x},_676,_677,this._scrollBarH,1);
}
},_runSlideAnimation:function(from,to,_67a,_67b,node,idx){
if(has("css3-animations")){
if(!this._useTopLeft){
if(this._useTransformTransition){
if(to.x===undefined){
to.x=from.x;
}
if(to.y===undefined){
to.y=from.y;
}
if(to.x!==from.x||to.y!==from.y){
_649.set(node,css3.add({},{transitionProperty:css3.name("transform"),transitionDuration:_67a+"s",transitionTimingFunction:_67b}));
var t=this.makeTranslateStr(to);
setTimeout(function(){
_649.set(node,css3.add({},{transform:t}));
},0);
_647.add(node,"mblScrollableScrollTo"+idx);
}else{
this.hideScrollBar();
this.removeCover();
}
}else{
this.setKeyframes(from,to,idx);
_649.set(node,css3.add({},{animationDuration:_67a+"s",animationTimingFunction:_67b}));
_647.add(node,"mblScrollableScrollTo"+idx);
if(idx==2){
this.scrollTo(to,true,node);
}else{
this.scrollScrollBarTo(to);
}
}
}else{
_649.set(node,css3.add({},{transitionProperty:"top, left",transitionDuration:_67a+"s",transitionTimingFunction:_67b}));
setTimeout(function(){
_649.set(node,{top:(to.y||0)+"px",left:(to.x||0)+"px"});
},0);
_647.add(node,"mblScrollableScrollTo"+idx);
}
}else{
if(dojo.fx&&dojo.fx.easing&&_67a){
var s=dojo.fx.slideTo({node:node,duration:_67a*1000,left:to.x,top:to.y,easing:(_67b=="ease-out")?dojo.fx.easing.quadOut:dojo.fx.easing.linear}).play();
if(idx==2){
_645.connect(s,"onEnd",this,"onFlickAnimationEnd");
}
}else{
if(idx==2){
this.scrollTo(to,false,node);
this.onFlickAnimationEnd();
}else{
this.scrollScrollBarTo(to);
}
}
}
},resetScrollBar:function(){
var f=function(_67c,bar,d,c,hd,v){
if(!bar){
return;
}
var _67d={};
_67d[v?"top":"left"]=hd+4+"px";
var t=(d-8)<=0?1:d-8;
_67d[v?"height":"width"]=t+"px";
_649.set(_67c,_67d);
var l=Math.round(d*d/c);
l=Math.min(Math.max(l-8,5),t);
bar.style[v?"height":"width"]=l+"px";
_649.set(bar,{"opacity":0.6});
};
var dim=this.getDim();
f(this._scrollBarWrapperV,this._scrollBarV,dim.d.h,dim.c.h,this.fixedHeaderHeight,true);
f(this._scrollBarWrapperH,this._scrollBarH,dim.d.w,dim.c.w,0);
this.createMask();
},createMask:function(){
if(!(has("webkit")||has("svg"))){
return;
}
if(this._scrollBarWrapperV){
var h=this._scrollBarWrapperV.offsetHeight;
_64c.createRoundMask(this._scrollBarWrapperV,0,0,0,0,5,h,2,2,0.5);
}
if(this._scrollBarWrapperH){
var w=this._scrollBarWrapperH.offsetWidth;
_64c.createRoundMask(this._scrollBarWrapperH,0,0,0,0,w,5,2,2,0.5);
}
},flashScrollBar:function(){
if(this.disableFlashScrollBar||!this.domNode){
return;
}
this._dim=this.getDim();
if(this._dim.d.h<=0){
return;
}
this.showScrollBar();
var _67e=this;
setTimeout(function(){
_67e.hideScrollBar();
},300);
},addCover:function(){
if(!has("touch")&&!this.noCover){
if(!dm._cover){
dm._cover=_648.create("div",null,win.doc.body);
dm._cover.className="mblScrollableCover";
_649.set(dm._cover,{backgroundColor:"#ffff00",opacity:0,position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:2147483647});
this._ch.push(_645.connect(dm._cover,_64b.press,this,"onTouchEnd"));
}else{
dm._cover.style.display="";
}
this.setSelectable(dm._cover,false);
this.setSelectable(this.domNode,false);
}
},removeCover:function(){
if(!has("touch")&&dm._cover){
dm._cover.style.display="none";
this.setSelectable(dm._cover,true);
this.setSelectable(this.domNode,true);
}
},setKeyframes:function(from,to,idx){
if(!dm._rule){
dm._rule=[];
}
if(!dm._rule[idx]){
var node=_648.create("style",null,win.doc.getElementsByTagName("head")[0]);
node.textContent=".mblScrollableScrollTo"+idx+"{"+css3.name("animation-name",true)+": scrollableViewScroll"+idx+";}"+"@"+css3.name("keyframes",true)+" scrollableViewScroll"+idx+"{}";
dm._rule[idx]=node.sheet.cssRules[1];
}
var rule=dm._rule[idx];
if(rule){
if(from){
rule.deleteRule(has("webkit")?"from":0);
(rule.insertRule||rule.appendRule).call(rule,"from { "+css3.name("transform",true)+": "+this.makeTranslateStr(from)+"; }");
}
if(to){
if(to.x===undefined){
to.x=from.x;
}
if(to.y===undefined){
to.y=from.y;
}
rule.deleteRule(has("webkit")?"to":1);
(rule.insertRule||rule.appendRule).call(rule,"to { "+css3.name("transform",true)+": "+this.makeTranslateStr(to)+"; }");
}
}
},setSelectable:function(node,_67f){
node.style.KhtmlUserSelect=_67f?"auto":"none";
node.style.MozUserSelect=_67f?"":"none";
node.onselectstart=_67f?null:function(){
return false;
};
if(has("ie")){
node.unselectable=_67f?"":"on";
var _680=node.getElementsByTagName("*");
for(var i=0;i<_680.length;i++){
_680[i].unselectable=_67f?"":"on";
}
}
}});
lang.setObject("dojox.mobile.scrollable",_64e);
return _64e;
});
},"dojox/mobile/DatePicker":function(){
define(["dojo/_base/lang","./_PickerChooser!DatePicker"],function(lang,_681){
return lang.setObject("dojox.mobile.DatePicker",_681);
});
},"dijit/_Container":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-construct","dojo/_base/kernel"],function(_682,_683,_684,_685){
return _683("dijit._Container",null,{buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},addChild:function(_686,_687){
var _688=this.containerNode;
if(_687>0){
_688=_688.firstChild;
while(_687>0){
if(_688.nodeType==1){
_687--;
}
_688=_688.nextSibling;
}
if(_688){
_687="before";
}else{
_688=this.containerNode;
_687="last";
}
}
_684.place(_686.domNode,_688,_687);
if(this._started&&!_686._started){
_686.startup();
}
},removeChild:function(_689){
if(typeof _689=="number"){
_689=this.getChildren()[_689];
}
if(_689){
var node=_689.domNode;
if(node&&node.parentNode){
node.parentNode.removeChild(node);
}
}
},hasChildren:function(){
return this.getChildren().length>0;
},_getSiblingOfChild:function(_68a,dir){
_685.deprecated(this.declaredClass+"::_getSiblingOfChild() is deprecated. Use _KeyNavMixin::_getNext() instead.","","2.0");
var _68b=this.getChildren(),idx=_682.indexOf(_68b,_68a);
return _68b[idx+dir];
},getIndexOfChild:function(_68c){
return _682.indexOf(this.getChildren(),_68c);
}});
});
},"dojox/mobile/SpinWheelDatePicker":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","./_DatePickerMixin","./SpinWheel","./SpinWheelSlot"],function(_68d,_68e,_68f,_690,_691,_692){
return _68e("dojox.mobile.SpinWheelDatePicker",[_691,_690],{slotClasses:[_692,_692,_692],slotProps:[{labelFrom:1970,labelTo:2038},{},{}],buildRendering:function(){
this.initSlots();
this.inherited(arguments);
_68f.add(this.domNode,"mblSpinWheelDatePicker");
this._conn=[this.connect(this.slots[0],"onFlickAnimationEnd","_onYearSet"),this.connect(this.slots[1],"onFlickAnimationEnd","_onMonthSet"),this.connect(this.slots[2],"onFlickAnimationEnd","_onDaySet")];
},disableValues:function(_693){
_68d.forEach(this.slots[2].panelNodes,function(_694){
for(var i=27;i<31;i++){
_68f.toggle(_694.childNodes[i],"mblSpinWheelSlotLabelGray",i>=_693);
}
});
}});
});
},"dojox/mobile/app/SceneController":function(){
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/_base"],function(_695,dojo,_696){
dojo.provide("dojox.mobile.app.SceneController");
dojo.experimental("dojox.mobile.app.SceneController");
dojo.require("dojox.mobile._base");
(function(){
var app=_696.mobile.app;
var _697={};
dojo.declare("dojox.mobile.app.SceneController",_696.mobile.View,{stageController:null,keepScrollPos:false,init:function(_698,_699){
this.sceneName=_698;
this.params=_699;
var _69a=app.resolveTemplate(_698);
this._deferredInit=new dojo.Deferred();
if(_697[_698]){
this._setContents(_697[_698]);
}else{
dojo.xhrGet({url:_69a,handleAs:"text"}).addCallback(dojo.hitch(this,this._setContents));
}
return this._deferredInit;
},_setContents:function(_69b){
_697[this.sceneName]=_69b;
this.domNode.innerHTML="<div>"+_69b+"</div>";
var _69c="";
var _69d=this.sceneName.split("-");
for(var i=0;i<_69d.length;i++){
_69c+=_69d[i].substring(0,1).toUpperCase()+_69d[i].substring(1);
}
_69c+="Assistant";
this.sceneAssistantName=_69c;
var _69e=this;
_696.mobile.app.loadResourcesForScene(this.sceneName,function(){
var _69f;
if(typeof (dojo.global[_69c])!="undefined"){
_69e._initAssistant();
}else{
var _6a0=app.resolveAssistant(_69e.sceneName);
dojo.xhrGet({url:_6a0,handleAs:"text"}).addCallback(function(text){
try{
dojo.eval(text);
}
catch(e){
throw e;
}
_69e._initAssistant();
});
}
});
},_initAssistant:function(){
var cls=dojo.getObject(this.sceneAssistantName);
if(!cls){
throw Error("Unable to resolve scene assistant "+this.sceneAssistantName);
}
this.assistant=new cls(this.params);
this.assistant.controller=this;
this.assistant.domNode=this.domNode.firstChild;
this.assistant.setup();
this._deferredInit.callback();
},query:function(_6a1,node){
return dojo.query(_6a1,node||this.domNode);
},parse:function(node){
var _6a2=this._widgets=_696.mobile.parser.parse(node||this.domNode,{controller:this});
for(var i=0;i<_6a2.length;i++){
_6a2[i].set("controller",this);
}
},getWindowSize:function(){
return {w:dojo.global.innerWidth,h:dojo.global.innerHeight};
},showAlertDialog:function(_6a3){
var size=dojo.marginBox(this.assistant.domNode);
var _6a4=new _696.mobile.app.AlertDialog(dojo.mixin(_6a3,{controller:this}));
this.assistant.domNode.appendChild(_6a4.domNode);
_6a4.show();
},popupSubMenu:function(info){
var _6a5=new _696.mobile.app.ListSelector({controller:this,destroyOnHide:true,onChoose:info.onChoose});
this.assistant.domNode.appendChild(_6a5.domNode);
_6a5.set("data",info.choices);
_6a5.show(info.fromNode);
}});
})();
});
},"dojo/cldr/supplemental":function(){
define(["../_base/lang","../i18n"],function(lang,i18n){
var _6a6={};
lang.setObject("dojo.cldr.supplemental",_6a6);
_6a6.getFirstDayOfWeek=function(_6a7){
var _6a8={bd:5,mv:5,ae:6,af:6,bh:6,dj:6,dz:6,eg:6,iq:6,ir:6,jo:6,kw:6,ly:6,ma:6,om:6,qa:6,sa:6,sd:6,sy:6,ye:6,ag:0,ar:0,as:0,au:0,br:0,bs:0,bt:0,bw:0,by:0,bz:0,ca:0,cn:0,co:0,dm:0,"do":0,et:0,gt:0,gu:0,hk:0,hn:0,id:0,ie:0,il:0,"in":0,jm:0,jp:0,ke:0,kh:0,kr:0,la:0,mh:0,mm:0,mo:0,mt:0,mx:0,mz:0,ni:0,np:0,nz:0,pa:0,pe:0,ph:0,pk:0,pr:0,py:0,sg:0,sv:0,th:0,tn:0,tt:0,tw:0,um:0,us:0,ve:0,vi:0,ws:0,za:0,zw:0};
var _6a9=_6a6._region(_6a7);
var dow=_6a8[_6a9];
return (dow===undefined)?1:dow;
};
_6a6._region=function(_6aa){
_6aa=i18n.normalizeLocale(_6aa);
var tags=_6aa.split("-");
var _6ab=tags[1];
if(!_6ab){
_6ab={aa:"et",ab:"ge",af:"za",ak:"gh",am:"et",ar:"eg",as:"in",av:"ru",ay:"bo",az:"az",ba:"ru",be:"by",bg:"bg",bi:"vu",bm:"ml",bn:"bd",bo:"cn",br:"fr",bs:"ba",ca:"es",ce:"ru",ch:"gu",co:"fr",cr:"ca",cs:"cz",cv:"ru",cy:"gb",da:"dk",de:"de",dv:"mv",dz:"bt",ee:"gh",el:"gr",en:"us",es:"es",et:"ee",eu:"es",fa:"ir",ff:"sn",fi:"fi",fj:"fj",fo:"fo",fr:"fr",fy:"nl",ga:"ie",gd:"gb",gl:"es",gn:"py",gu:"in",gv:"gb",ha:"ng",he:"il",hi:"in",ho:"pg",hr:"hr",ht:"ht",hu:"hu",hy:"am",ia:"fr",id:"id",ig:"ng",ii:"cn",ik:"us","in":"id",is:"is",it:"it",iu:"ca",iw:"il",ja:"jp",ji:"ua",jv:"id",jw:"id",ka:"ge",kg:"cd",ki:"ke",kj:"na",kk:"kz",kl:"gl",km:"kh",kn:"in",ko:"kr",ks:"in",ku:"tr",kv:"ru",kw:"gb",ky:"kg",la:"va",lb:"lu",lg:"ug",li:"nl",ln:"cd",lo:"la",lt:"lt",lu:"cd",lv:"lv",mg:"mg",mh:"mh",mi:"nz",mk:"mk",ml:"in",mn:"mn",mo:"ro",mr:"in",ms:"my",mt:"mt",my:"mm",na:"nr",nb:"no",nd:"zw",ne:"np",ng:"na",nl:"nl",nn:"no",no:"no",nr:"za",nv:"us",ny:"mw",oc:"fr",om:"et",or:"in",os:"ge",pa:"in",pl:"pl",ps:"af",pt:"br",qu:"pe",rm:"ch",rn:"bi",ro:"ro",ru:"ru",rw:"rw",sa:"in",sd:"in",se:"no",sg:"cf",si:"lk",sk:"sk",sl:"si",sm:"ws",sn:"zw",so:"so",sq:"al",sr:"rs",ss:"za",st:"za",su:"id",sv:"se",sw:"tz",ta:"in",te:"in",tg:"tj",th:"th",ti:"et",tk:"tm",tl:"ph",tn:"za",to:"to",tr:"tr",ts:"za",tt:"ru",ty:"pf",ug:"cn",uk:"ua",ur:"pk",uz:"uz",ve:"za",vi:"vn",wa:"be",wo:"sn",xh:"za",yi:"il",yo:"ng",za:"cn",zh:"cn",zu:"za",ace:"id",ady:"ru",agq:"cm",alt:"ru",amo:"ng",asa:"tz",ast:"es",awa:"in",bal:"pk",ban:"id",bas:"cm",bax:"cm",bbc:"id",bem:"zm",bez:"tz",bfq:"in",bft:"pk",bfy:"in",bhb:"in",bho:"in",bik:"ph",bin:"ng",bjj:"in",bku:"ph",bqv:"ci",bra:"in",brx:"in",bss:"cm",btv:"pk",bua:"ru",buc:"yt",bug:"id",bya:"id",byn:"er",cch:"ng",ccp:"in",ceb:"ph",cgg:"ug",chk:"fm",chm:"ru",chp:"ca",chr:"us",cja:"kh",cjm:"vn",ckb:"iq",crk:"ca",csb:"pl",dar:"ru",dav:"ke",den:"ca",dgr:"ca",dje:"ne",doi:"in",dsb:"de",dua:"cm",dyo:"sn",dyu:"bf",ebu:"ke",efi:"ng",ewo:"cm",fan:"gq",fil:"ph",fon:"bj",fur:"it",gaa:"gh",gag:"md",gbm:"in",gcr:"gf",gez:"et",gil:"ki",gon:"in",gor:"id",grt:"in",gsw:"ch",guz:"ke",gwi:"ca",haw:"us",hil:"ph",hne:"in",hnn:"ph",hoc:"in",hoj:"in",ibb:"ng",ilo:"ph",inh:"ru",jgo:"cm",jmc:"tz",kaa:"uz",kab:"dz",kaj:"ng",kam:"ke",kbd:"ru",kcg:"ng",kde:"tz",kdt:"th",kea:"cv",ken:"cm",kfo:"ci",kfr:"in",kha:"in",khb:"cn",khq:"ml",kht:"in",kkj:"cm",kln:"ke",kmb:"ao",koi:"ru",kok:"in",kos:"fm",kpe:"lr",krc:"ru",kri:"sl",krl:"ru",kru:"in",ksb:"tz",ksf:"cm",ksh:"de",kum:"ru",lag:"tz",lah:"pk",lbe:"ru",lcp:"cn",lep:"in",lez:"ru",lif:"np",lis:"cn",lki:"ir",lmn:"in",lol:"cd",lua:"cd",luo:"ke",luy:"ke",lwl:"th",mad:"id",mag:"in",mai:"in",mak:"id",man:"gn",mas:"ke",mdf:"ru",mdh:"ph",mdr:"id",men:"sl",mer:"ke",mfe:"mu",mgh:"mz",mgo:"cm",min:"id",mni:"in",mnk:"gm",mnw:"mm",mos:"bf",mua:"cm",mwr:"in",myv:"ru",nap:"it",naq:"na",nds:"de","new":"np",niu:"nu",nmg:"cm",nnh:"cm",nod:"th",nso:"za",nus:"sd",nym:"tz",nyn:"ug",pag:"ph",pam:"ph",pap:"bq",pau:"pw",pon:"fm",prd:"ir",raj:"in",rcf:"re",rej:"id",rjs:"np",rkt:"in",rof:"tz",rwk:"tz",saf:"gh",sah:"ru",saq:"ke",sas:"id",sat:"in",saz:"in",sbp:"tz",scn:"it",sco:"gb",sdh:"ir",seh:"mz",ses:"ml",shi:"ma",shn:"mm",sid:"et",sma:"se",smj:"se",smn:"fi",sms:"fi",snk:"ml",srn:"sr",srr:"sn",ssy:"er",suk:"tz",sus:"gn",swb:"yt",swc:"cd",syl:"bd",syr:"sy",tbw:"ph",tcy:"in",tdd:"cn",tem:"sl",teo:"ug",tet:"tl",tig:"er",tiv:"ng",tkl:"tk",tmh:"ne",tpi:"pg",trv:"tw",tsg:"ph",tts:"th",tum:"mw",tvl:"tv",twq:"ne",tyv:"ru",tzm:"ma",udm:"ru",uli:"fm",umb:"ao",unr:"in",unx:"in",vai:"lr",vun:"tz",wae:"ch",wal:"et",war:"ph",xog:"ug",xsr:"np",yao:"mz",yap:"fm",yav:"cm",zza:"tr"}[tags[0]];
}else{
if(_6ab.length==4){
_6ab=tags[2];
}
}
return _6ab;
};
_6a6.getWeekend=function(_6ac){
var _6ad={"in":0,af:4,dz:4,ir:4,om:4,sa:4,ye:4,ae:5,bh:5,eg:5,il:5,iq:5,jo:5,kw:5,ly:5,ma:5,qa:5,sd:5,sy:5,tn:5},_6ae={af:5,dz:5,ir:5,om:5,sa:5,ye:5,ae:6,bh:5,eg:6,il:6,iq:6,jo:6,kw:6,ly:6,ma:6,qa:6,sd:6,sy:6,tn:6},_6af=_6a6._region(_6ac),_6b0=_6ad[_6af],end=_6ae[_6af];
if(_6b0===undefined){
_6b0=6;
}
if(end===undefined){
end=0;
}
return {start:_6b0,end:end};
};
return _6a6;
});
},"dojox/mobile/app/_base":function(){
define(["dijit","dojo","dojox","dojo/require!dijit/_base,dijit/_WidgetBase,dojox/mobile,dojox/mobile/parser,dojox/mobile/Button,dojox/mobile/app/_event,dojox/mobile/app/_Widget,dojox/mobile/app/StageController,dojox/mobile/app/SceneController,dojox/mobile/app/SceneAssistant,dojox/mobile/app/AlertDialog,dojox/mobile/app/List,dojox/mobile/app/ListSelector,dojox/mobile/app/TextBox,dojox/mobile/app/ImageView,dojox/mobile/app/ImageThumbView"],function(_6b1,dojo,_6b2){
dojo.provide("dojox.mobile.app._base");
dojo.experimental("dojox.mobile.app._base");
dojo.require("dijit._base");
dojo.require("dijit._WidgetBase");
dojo.require("dojox.mobile");
dojo.require("dojox.mobile.parser");
dojo.require("dojox.mobile.Button");
dojo.require("dojox.mobile.app._event");
dojo.require("dojox.mobile.app._Widget");
dojo.require("dojox.mobile.app.StageController");
dojo.require("dojox.mobile.app.SceneController");
dojo.require("dojox.mobile.app.SceneAssistant");
dojo.require("dojox.mobile.app.AlertDialog");
dojo.require("dojox.mobile.app.List");
dojo.require("dojox.mobile.app.ListSelector");
dojo.require("dojox.mobile.app.TextBox");
dojo.require("dojox.mobile.app.ImageView");
dojo.require("dojox.mobile.app.ImageThumbView");
(function(){
var _6b3;
var _6b4;
var _6b5=["dojox.mobile","dojox.mobile.parser"];
var _6b6={};
var _6b7;
var _6b8;
var _6b9=[];
function _6ba(_6bb,_6bc){
var _6bd;
var url;
do{
_6bd=_6bb.pop();
if(_6bd.source){
url=_6bd.source;
}else{
if(_6bd.module){
url=dojo.moduleUrl(_6bd.module)+".js";
}else{
return;
}
}
}while(_6bb.length>0&&_6b6[url]);
if(_6bb.length<1&&_6b6[url]){
_6bc();
return;
}
dojo.xhrGet({url:url,sync:false}).addCallbacks(function(text){
dojo["eval"](text);
_6b6[url]=true;
if(_6bb.length>0){
_6ba(_6bb,_6bc);
}else{
_6bc();
}
},function(){
});
};
var _6be=function(){
_6b3=new _6b2.mobile.app.StageController(_6b8);
var _6bf={id:"com.test.app",version:"1.0.0",initialScene:"main"};
if(dojo.global["appInfo"]){
dojo.mixin(_6bf,dojo.global["appInfo"]);
}
_6b4=_6b2.mobile.app.info=_6bf;
if(_6b4.title){
var _6c0=dojo.query("head title")[0]||dojo.create("title",{},dojo.query("head")[0]);
document.title=_6b4.title;
}
_6b3.pushScene(_6b4.initialScene);
};
var _6c1=function(){
var _6c2=false;
if(dojo.global.BackButton){
BackButton.override();
dojo.connect(document,"backKeyDown",function(e){
dojo.publish("/dojox/mobile/app/goback");
});
_6c2=true;
}else{
if(dojo.global.Mojo){
}
}
if(_6c2){
dojo.addClass(dojo.body(),"mblNativeBack");
}
};
dojo.mixin(_6b2.mobile.app,{init:function(node){
_6b8=node||dojo.body();
_6b2.mobile.app.STAGE_CONTROLLER_ACTIVE=true;
dojo.subscribe("/dojox/mobile/app/goback",function(){
_6b3.popScene();
});
dojo.subscribe("/dojox/mobile/app/alert",function(_6c3){
_6b2.mobile.app.getActiveSceneController().showAlertDialog(_6c3);
});
dojo.subscribe("/dojox/mobile/app/pushScene",function(_6c4,_6c5){
_6b3.pushScene(_6c4,_6c5||{});
});
dojo.xhrGet({url:"view-resources.json",load:function(data){
var _6c6=[];
if(data){
_6b9=data=dojo.fromJson(data);
for(var i=0;i<data.length;i++){
if(!data[i].scene){
_6c6.push(data[i]);
}
}
}
if(_6c6.length>0){
_6ba(_6c6,_6be);
}else{
_6be();
}
},error:_6be});
_6c1();
},getActiveSceneController:function(){
return _6b3.getActiveSceneController();
},getStageController:function(){
return _6b3;
},loadResources:function(_6c7,_6c8){
_6ba(_6c7,_6c8);
},loadResourcesForScene:function(_6c9,_6ca){
var _6cb=[];
for(var i=0;i<_6b9.length;i++){
if(_6b9[i].scene==_6c9){
_6cb.push(_6b9[i]);
}
}
if(_6cb.length>0){
_6ba(_6cb,_6ca);
}else{
_6ca();
}
},resolveTemplate:function(_6cc){
return "app/views/"+_6cc+"/"+_6cc+"-scene.html";
},resolveAssistant:function(_6cd){
return "app/assistants/"+_6cd+"-assistant.js";
}});
})();
});
},"dijit/_base/scroll":function(){
define(["dojo/window","../main"],function(_6ce,_6cf){
_6cf.scrollIntoView=function(node,pos){
_6ce.scrollIntoView(node,pos);
};
});
},"dojox/mobile/SwapView":function(){
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-class","dijit/registry","./View","./_ScrollableMixin","./sniff","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/SwapView"],function(_6d0,_6d1,_6d2,dom,_6d3,_6d4,View,_6d5,has,css3,_6d6){
var _6d7=_6d2(has("dojo-bidi")?"dojox.mobile.NonBidiSwapView":"dojox.mobile.SwapView",[View,_6d5],{scrollDir:"f",weight:1.2,_endOfTransitionTimeoutHandle:null,buildRendering:function(){
this.inherited(arguments);
_6d3.add(this.domNode,"mblSwapView");
this.setSelectable(this.domNode,false);
this.containerNode=this.domNode;
this.subscribe("/dojox/mobile/nextPage","handleNextPage");
this.subscribe("/dojox/mobile/prevPage","handlePrevPage");
this.noResize=true;
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
},resize:function(){
this.inherited(arguments);
_6d0.forEach(this.getChildren(),function(_6d8){
if(_6d8.resize){
_6d8.resize();
}
});
},onTouchStart:function(e){
if(this._siblingViewsInMotion()){
this.propagatable?e.preventDefault():event.stop(e);
return;
}
var _6d9=this.domNode.offsetTop;
var _6da=this.nextView(this.domNode);
if(_6da){
_6da.stopAnimation();
_6d3.add(_6da.domNode,"mblIn");
_6da.containerNode.style.paddingTop=_6d9+"px";
}
var _6db=this.previousView(this.domNode);
if(_6db){
_6db.stopAnimation();
_6d3.add(_6db.domNode,"mblIn");
_6db.containerNode.style.paddingTop=_6d9+"px";
}
this._setSiblingViewsInMotion(true);
this.inherited(arguments);
},onTouchEnd:function(e){
if(e){
if(!this._fingerMovedSinceTouchStart()){
this._setSiblingViewsInMotion(false);
}else{
this._endOfTransitionTimeoutHandle=this.defer(function(){
this._setSiblingViewsInMotion(false);
},1000);
}
}
this.inherited(arguments);
},handleNextPage:function(w){
var _6dc=w.refId&&dom.byId(w.refId)||w.domNode;
if(this.domNode.parentNode!==_6dc.parentNode){
return;
}
if(this.getShowingView()!==this){
return;
}
this.goTo(1);
},handlePrevPage:function(w){
var _6dd=w.refId&&dom.byId(w.refId)||w.domNode;
if(this.domNode.parentNode!==_6dd.parentNode){
return;
}
if(this.getShowingView()!==this){
return;
}
this.goTo(-1);
},goTo:function(dir,_6de){
var view=_6de?_6d4.byId(_6de):((dir==1)?this.nextView(this.domNode):this.previousView(this.domNode));
if(view&&view!==this){
this.stopAnimation();
view.stopAnimation();
this.domNode._isShowing=false;
view.domNode._isShowing=true;
this.performTransition(view.id,dir,"slide",null,function(){
_6d1.publish("/dojox/mobile/viewChanged",[view]);
});
}
},isSwapView:function(node){
return (node&&node.nodeType===1&&_6d3.contains(node,"mblSwapView"));
},nextView:function(node){
for(var n=node.nextSibling;n;n=n.nextSibling){
if(this.isSwapView(n)){
return _6d4.byNode(n);
}
}
return null;
},previousView:function(node){
for(var n=node.previousSibling;n;n=n.previousSibling){
if(this.isSwapView(n)){
return _6d4.byNode(n);
}
}
return null;
},scrollTo:function(to){
if(!this._beingFlipped){
var _6df,x;
if(to.x){
if(to.x<0){
_6df=this.nextView(this.domNode);
x=to.x+this.domNode.offsetWidth;
}else{
_6df=this.previousView(this.domNode);
x=to.x-this.domNode.offsetWidth;
}
}
if(_6df){
if(_6df.domNode.style.display==="none"){
_6df.domNode.style.display="";
_6df.resize();
}
_6df._beingFlipped=true;
_6df.scrollTo({x:x});
_6df._beingFlipped=false;
}
}
this.inherited(arguments);
},findDisp:function(node){
if(!_6d3.contains(node,"mblSwapView")){
return this.inherited(arguments);
}
if(!node.parentNode){
return null;
}
var _6e0=node.parentNode.childNodes;
for(var i=0;i<_6e0.length;i++){
var n=_6e0[i];
if(n.nodeType===1&&_6d3.contains(n,"mblSwapView")&&!_6d3.contains(n,"mblIn")&&n.style.display!=="none"){
return n;
}
}
return node;
},slideTo:function(to,_6e1,_6e2,_6e3){
if(!this._beingFlipped){
var w=this.domNode.offsetWidth;
var pos=_6e3||this.getPos();
var _6e4,newX;
if(pos.x<0){
_6e4=this.nextView(this.domNode);
if(pos.x<-w/4){
if(_6e4){
to.x=-w;
newX=0;
}
}else{
if(_6e4){
newX=w;
}
}
}else{
_6e4=this.previousView(this.domNode);
if(pos.x>w/4){
if(_6e4){
to.x=w;
newX=0;
}
}else{
if(_6e4){
newX=-w;
}
}
}
if(_6e4){
_6e4._beingFlipped=true;
_6e4.slideTo({x:newX},_6e1,_6e2);
_6e4._beingFlipped=false;
_6e4.domNode._isShowing=(_6e4&&newX===0);
}
this.domNode._isShowing=!(_6e4&&newX===0);
}
this.inherited(arguments);
},onAnimationEnd:function(e){
if(e&&e.target&&_6d3.contains(e.target,"mblScrollableScrollTo2")){
return;
}
this.inherited(arguments);
},onFlickAnimationEnd:function(e){
if(this._endOfTransitionTimeoutHandle){
this._endOfTransitionTimeoutHandle=this._endOfTransitionTimeoutHandle.remove();
}
if(e&&e.target&&!_6d3.contains(e.target,"mblScrollableScrollTo2")){
return;
}
this.inherited(arguments);
if(this.domNode._isShowing){
_6d0.forEach(this.domNode.parentNode.childNodes,function(c){
if(this.isSwapView(c)){
_6d3.remove(c,"mblIn");
if(!c._isShowing){
c.style.display="none";
c.style[css3.name("transform")]="";
c.style.left="0px";
c.style.paddingTop="";
}
}
},this);
_6d1.publish("/dojox/mobile/viewChanged",[this]);
this.containerNode.style.paddingTop="";
}else{
if(!has("css3-animations")){
this.containerNode.style.left="0px";
}
}
this._setSiblingViewsInMotion(false);
},_setSiblingViewsInMotion:function(_6e5){
var _6e6=_6e5?"true":false;
var _6e7=this.domNode.parentNode;
if(_6e7){
_6e7.setAttribute("data-dojox-mobile-swapview-inmotion",_6e6);
}
},_siblingViewsInMotion:function(){
var _6e8=this.domNode.parentNode;
if(_6e8){
return _6e8.getAttribute("data-dojox-mobile-swapview-inmotion")=="true";
}else{
return false;
}
}});
return has("dojo-bidi")?_6d2("dojox.mobile.SwapView",[_6d7,_6d6]):_6d7;
});
},"dojox/mobile/SpinWheelTimePicker":function(){
define(["dojo/_base/declare","dojo/dom-class","./_TimePickerMixin","./SpinWheel","./SpinWheelSlot"],function(_6e9,_6ea,_6eb,_6ec,_6ed){
return _6e9("dojox.mobile.SpinWheelTimePicker",[_6ec,_6eb],{slotClasses:[_6ed,_6ed],slotProps:[{labelFrom:0,labelTo:23,style:{width:"50px",textAlign:"right"}},{labelFrom:0,labelTo:59,zeroPad:2,style:{width:"40px",textAlign:"right"}}],buildRendering:function(){
this.inherited(arguments);
_6ea.add(this.domNode,"mblSpinWheelTimePicker");
}});
});
},"dojox/mobile/ScrollableView":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/registry","./View","./_ScrollableMixin"],function(_6ee,_6ef,_6f0,_6f1,_6f2,View,_6f3){
return _6ef("dojox.mobile.ScrollableView",[View,_6f3],{scrollableParams:null,keepScrollPos:false,constructor:function(){
this.scrollableParams={noResize:true};
},buildRendering:function(){
this.inherited(arguments);
_6f0.add(this.domNode,"mblScrollableView");
this.domNode.style.overflow="hidden";
this.domNode.style.top="0px";
this.containerNode=_6f1.create("div",{className:"mblScrollableViewContainer"},this.domNode);
this.containerNode.style.position="absolute";
this.containerNode.style.top="0px";
if(this.scrollDir==="v"){
this.containerNode.style.width="100%";
}
},startup:function(){
if(this._started){
return;
}
if(this.fixedFooter&&!this.isLocalFooter){
this._fixedAppFooter=this.fixedFooter;
this.fixedFooter="";
}
this.reparent();
this.inherited(arguments);
},resize:function(){
this.inherited(arguments);
_6ee.forEach(this.getChildren(),function(_6f4){
if(_6f4.resize){
_6f4.resize();
}
});
this._dim=this.getDim();
if(this._conn){
this.resetScrollBar();
}
},isTopLevel:function(e){
var _6f5=this.getParent&&this.getParent();
return (!_6f5||!_6f5.resize);
},addFixedBar:function(_6f6){
var c=_6f6.domNode;
var _6f7=this.checkFixedBar(c,true);
if(!_6f7){
return;
}
this.domNode.appendChild(c);
if(_6f7==="top"){
this.fixedHeaderHeight=c.offsetHeight;
this.isLocalHeader=true;
}else{
if(_6f7==="bottom"){
this.fixedFooterHeight=c.offsetHeight;
this.isLocalFooter=true;
c.style.bottom="0px";
}
}
this.resize();
},reparent:function(){
var i,idx,len,c;
for(i=0,idx=0,len=this.domNode.childNodes.length;i<len;i++){
c=this.domNode.childNodes[idx];
if(c===this.containerNode||this.checkFixedBar(c,true)){
idx++;
continue;
}
this.containerNode.appendChild(this.domNode.removeChild(c));
}
},onAfterTransitionIn:function(_6f8,dir,_6f9,_6fa,_6fb){
this.flashScrollBar();
},getChildren:function(){
var _6fc=this.inherited(arguments);
var _6fd;
if(this.fixedHeader&&this.fixedHeader.parentNode===this.domNode){
_6fd=_6f2.byNode(this.fixedHeader);
if(_6fd){
_6fc.push(_6fd);
}
}
if(this.fixedFooter&&this.fixedFooter.parentNode===this.domNode){
_6fd=_6f2.byNode(this.fixedFooter);
if(_6fd){
_6fc.push(_6fd);
}
}
return _6fc;
},_addTransitionPaddingTop:function(_6fe){
this.domNode.style.paddingTop=_6fe+"px";
this.containerNode.style.paddingTop=_6fe+"px";
},_removeTransitionPaddingTop:function(){
this.domNode.style.paddingTop="";
this.containerNode.style.paddingTop="";
}});
});
},"dojox/mobile/_maskUtils":function(){
define(["dojo/_base/window","dojo/dom-style","./sniff"],function(win,_6ff,has){
var _700={};
return {createRoundMask:function(node,x,y,r,b,w,h,rx,ry,e){
var tw=x+w+r;
var th=y+h+b;
if(has("webkit")){
var id=("DojoMobileMask"+x+y+w+h+rx+ry).replace(/\./g,"_");
if(!_700[id]){
_700[id]=1;
var ctx=win.doc.getCSSCanvasContext("2d",id,tw,th);
ctx.beginPath();
if(rx==ry){
if(rx==2&&w==5){
ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.fillRect(1,0,3,2);
ctx.fillRect(0,1,5,1);
ctx.fillRect(0,h-2,5,1);
ctx.fillRect(1,h-1,3,2);
ctx.fillStyle="rgb(0,0,0)";
ctx.fillRect(0,2,5,h-4);
}else{
if(rx==2&&h==5){
ctx.fillStyle="rgba(0,0,0,0.5)";
ctx.fillRect(0,1,2,3);
ctx.fillRect(1,0,1,5);
ctx.fillRect(w-2,0,1,5);
ctx.fillRect(w-1,1,2,3);
ctx.fillStyle="rgb(0,0,0)";
ctx.fillRect(2,0,w-4,5);
}else{
ctx.fillStyle="#000000";
ctx.moveTo(x+rx,y);
ctx.arcTo(x,y,x,y+rx,rx);
ctx.lineTo(x,y+h-rx);
ctx.arcTo(x,y+h,x+rx,y+h,rx);
ctx.lineTo(x+w-rx,y+h);
ctx.arcTo(x+w,y+h,x+w,y+rx,rx);
ctx.lineTo(x+w,y+rx);
ctx.arcTo(x+w,y,x+w-rx,y,rx);
}
}
}else{
var pi=Math.PI;
ctx.scale(1,ry/rx);
ctx.moveTo(x+rx,y);
ctx.arc(x+rx,y+rx,rx,1.5*pi,0.5*pi,true);
ctx.lineTo(x+w-rx,y+2*rx);
ctx.arc(x+w-rx,y+rx,rx,0.5*pi,1.5*pi,true);
}
ctx.closePath();
ctx.fill();
}
node.style.webkitMaskImage="-webkit-canvas("+id+")";
}else{
if(has("svg")){
if(node._svgMask){
node.removeChild(node._svgMask);
}
var bg=null;
for(var p=node.parentNode;p;p=p.parentNode){
bg=_6ff.getComputedStyle(p).backgroundColor;
if(bg&&bg!="transparent"&&!bg.match(/rgba\(.*,\s*0\s*\)/)){
break;
}
}
var _701="http://www.w3.org/2000/svg";
var svg=win.doc.createElementNS(_701,"svg");
svg.setAttribute("width",tw);
svg.setAttribute("height",th);
svg.style.position="absolute";
svg.style.pointerEvents="none";
svg.style.opacity="1";
svg.style.zIndex="2147483647";
var path=win.doc.createElementNS(_701,"path");
e=e||0;
rx+=e;
ry+=e;
var d=" M"+(x+rx-e)+","+(y-e)+" a"+rx+","+ry+" 0 0,0 "+(-rx)+","+ry+" v"+(-ry)+" h"+rx+" Z"+" M"+(x-e)+","+(y+h-ry+e)+" a"+rx+","+ry+" 0 0,0 "+rx+","+ry+" h"+(-rx)+" v"+(-ry)+" z"+" M"+(x+w-rx+e)+","+(y+h+e)+" a"+rx+","+ry+" 0 0,0 "+rx+","+(-ry)+" v"+ry+" h"+(-rx)+" z"+" M"+(x+w+e)+","+(y+ry-e)+" a"+rx+","+ry+" 0 0,0 "+(-rx)+","+(-ry)+" h"+rx+" v"+ry+" z";
if(y>0){
d+=" M0,0 h"+tw+" v"+y+" h"+(-tw)+" z";
}
if(b>0){
d+=" M0,"+(y+h)+" h"+tw+" v"+b+" h"+(-tw)+" z";
}
path.setAttribute("d",d);
path.setAttribute("fill",bg);
path.setAttribute("stroke",bg);
path.style.opacity="1";
svg.appendChild(path);
node._svgMask=svg;
node.appendChild(svg);
}
}
}};
});
},"dojo/fx":function(){
define(["./_base/lang","./Evented","./_base/kernel","./_base/array","./aspect","./_base/fx","./dom","./dom-style","./dom-geometry","./ready","require"],function(lang,_702,dojo,_703,_704,_705,dom,_706,geom,_707,_708){
if(!dojo.isAsync){
_707(0,function(){
var _709=["./fx/Toggler"];
_708(_709);
});
}
var _70a=dojo.fx={};
var _70b={_fire:function(evt,args){
if(this[evt]){
this[evt].apply(this,args||[]);
}
return this;
}};
var _70c=function(_70d){
this._index=-1;
this._animations=_70d||[];
this._current=this._onAnimateCtx=this._onEndCtx=null;
this.duration=0;
_703.forEach(this._animations,function(a){
this.duration+=a.duration;
if(a.delay){
this.duration+=a.delay;
}
},this);
};
_70c.prototype=new _702();
lang.extend(_70c,{_onAnimate:function(){
this._fire("onAnimate",arguments);
},_onEnd:function(){
this._onAnimateCtx.remove();
this._onEndCtx.remove();
this._onAnimateCtx=this._onEndCtx=null;
if(this._index+1==this._animations.length){
this._fire("onEnd");
}else{
this._current=this._animations[++this._index];
this._onAnimateCtx=_704.after(this._current,"onAnimate",lang.hitch(this,"_onAnimate"),true);
this._onEndCtx=_704.after(this._current,"onEnd",lang.hitch(this,"_onEnd"),true);
this._current.play(0,true);
}
},play:function(_70e,_70f){
if(!this._current){
this._current=this._animations[this._index=0];
}
if(!_70f&&this._current.status()=="playing"){
return this;
}
var _710=_704.after(this._current,"beforeBegin",lang.hitch(this,function(){
this._fire("beforeBegin");
}),true),_711=_704.after(this._current,"onBegin",lang.hitch(this,function(arg){
this._fire("onBegin",arguments);
}),true),_712=_704.after(this._current,"onPlay",lang.hitch(this,function(arg){
this._fire("onPlay",arguments);
_710.remove();
_711.remove();
_712.remove();
}));
if(this._onAnimateCtx){
this._onAnimateCtx.remove();
}
this._onAnimateCtx=_704.after(this._current,"onAnimate",lang.hitch(this,"_onAnimate"),true);
if(this._onEndCtx){
this._onEndCtx.remove();
}
this._onEndCtx=_704.after(this._current,"onEnd",lang.hitch(this,"_onEnd"),true);
this._current.play.apply(this._current,arguments);
return this;
},pause:function(){
if(this._current){
var e=_704.after(this._current,"onPause",lang.hitch(this,function(arg){
this._fire("onPause",arguments);
e.remove();
}),true);
this._current.pause();
}
return this;
},gotoPercent:function(_713,_714){
this.pause();
var _715=this.duration*_713;
this._current=null;
_703.some(this._animations,function(a){
if(a.duration<=_715){
this._current=a;
return true;
}
_715-=a.duration;
return false;
});
if(this._current){
this._current.gotoPercent(_715/this._current.duration,_714);
}
return this;
},stop:function(_716){
if(this._current){
if(_716){
for(;this._index+1<this._animations.length;++this._index){
this._animations[this._index].stop(true);
}
this._current=this._animations[this._index];
}
var e=_704.after(this._current,"onStop",lang.hitch(this,function(arg){
this._fire("onStop",arguments);
e.remove();
}),true);
this._current.stop();
}
return this;
},status:function(){
return this._current?this._current.status():"stopped";
},destroy:function(){
if(this._onAnimateCtx){
this._onAnimateCtx.remove();
}
if(this._onEndCtx){
this._onEndCtx.remove();
}
}});
lang.extend(_70c,_70b);
_70a.chain=function(_717){
return new _70c(_717);
};
var _718=function(_719){
this._animations=_719||[];
this._connects=[];
this._finished=0;
this.duration=0;
_703.forEach(_719,function(a){
var _71a=a.duration;
if(a.delay){
_71a+=a.delay;
}
if(this.duration<_71a){
this.duration=_71a;
}
this._connects.push(_704.after(a,"onEnd",lang.hitch(this,"_onEnd"),true));
},this);
this._pseudoAnimation=new _705.Animation({curve:[0,1],duration:this.duration});
var self=this;
_703.forEach(["beforeBegin","onBegin","onPlay","onAnimate","onPause","onStop","onEnd"],function(evt){
self._connects.push(_704.after(self._pseudoAnimation,evt,function(){
self._fire(evt,arguments);
},true));
});
};
lang.extend(_718,{_doAction:function(_71b,args){
_703.forEach(this._animations,function(a){
a[_71b].apply(a,args);
});
return this;
},_onEnd:function(){
if(++this._finished>this._animations.length){
this._fire("onEnd");
}
},_call:function(_71c,args){
var t=this._pseudoAnimation;
t[_71c].apply(t,args);
},play:function(_71d,_71e){
this._finished=0;
this._doAction("play",arguments);
this._call("play",arguments);
return this;
},pause:function(){
this._doAction("pause",arguments);
this._call("pause",arguments);
return this;
},gotoPercent:function(_71f,_720){
var ms=this.duration*_71f;
_703.forEach(this._animations,function(a){
a.gotoPercent(a.duration<ms?1:(ms/a.duration),_720);
});
this._call("gotoPercent",arguments);
return this;
},stop:function(_721){
this._doAction("stop",arguments);
this._call("stop",arguments);
return this;
},status:function(){
return this._pseudoAnimation.status();
},destroy:function(){
_703.forEach(this._connects,function(_722){
_722.remove();
});
}});
lang.extend(_718,_70b);
_70a.combine=function(_723){
return new _718(_723);
};
_70a.wipeIn=function(args){
var node=args.node=dom.byId(args.node),s=node.style,o;
var anim=_705.animateProperty(lang.mixin({properties:{height:{start:function(){
o=s.overflow;
s.overflow="hidden";
if(s.visibility=="hidden"||s.display=="none"){
s.height="1px";
s.display="";
s.visibility="";
return 1;
}else{
var _724=_706.get(node,"height");
return Math.max(_724,1);
}
},end:function(){
return node.scrollHeight;
}}}},args));
var fini=function(){
s.height="auto";
s.overflow=o;
};
_704.after(anim,"onStop",fini,true);
_704.after(anim,"onEnd",fini,true);
return anim;
};
_70a.wipeOut=function(args){
var node=args.node=dom.byId(args.node),s=node.style,o;
var anim=_705.animateProperty(lang.mixin({properties:{height:{end:1}}},args));
_704.after(anim,"beforeBegin",function(){
o=s.overflow;
s.overflow="hidden";
s.display="";
},true);
var fini=function(){
s.overflow=o;
s.height="auto";
s.display="none";
};
_704.after(anim,"onStop",fini,true);
_704.after(anim,"onEnd",fini,true);
return anim;
};
_70a.slideTo=function(args){
var node=args.node=dom.byId(args.node),top=null,left=null;
var init=(function(n){
return function(){
var cs=_706.getComputedStyle(n);
var pos=cs.position;
top=(pos=="absolute"?n.offsetTop:parseInt(cs.top)||0);
left=(pos=="absolute"?n.offsetLeft:parseInt(cs.left)||0);
if(pos!="absolute"&&pos!="relative"){
var ret=geom.position(n,true);
top=ret.y;
left=ret.x;
n.style.position="absolute";
n.style.top=top+"px";
n.style.left=left+"px";
}
};
})(node);
init();
var anim=_705.animateProperty(lang.mixin({properties:{top:args.top||0,left:args.left||0}},args));
_704.after(anim,"beforeBegin",init,true);
return anim;
};
return _70a;
});
},"dojo/egldojo":function(){
define([],1);
},"dojo/date/locale":function(){
define(["../_base/lang","../_base/array","../date","../cldr/supplemental","../i18n","../regexp","../string","../i18n!../cldr/nls/gregorian","module"],function(lang,_725,date,_726,i18n,_727,_728,_729,_72a){
var _72b={};
lang.setObject(_72a.id.replace(/\//g,"."),_72b);
function _72c(_72d,_72e,_72f,_730){
return _730.replace(/([a-z])\1*/ig,function(_731){
var s,pad,c=_731.charAt(0),l=_731.length,_732=["abbr","wide","narrow"];
switch(c){
case "G":
s=_72e[(l<4)?"eraAbbr":"eraNames"][_72d.getFullYear()<0?0:1];
break;
case "y":
s=_72d.getFullYear();
switch(l){
case 1:
break;
case 2:
if(!_72f.fullYear){
s=String(s);
s=s.substr(s.length-2);
break;
}
default:
pad=true;
}
break;
case "Q":
case "q":
s=Math.ceil((_72d.getMonth()+1)/3);
pad=true;
break;
case "M":
case "L":
var m=_72d.getMonth();
if(l<3){
s=m+1;
pad=true;
}else{
var _733=["months",c=="L"?"standAlone":"format",_732[l-3]].join("-");
s=_72e[_733][m];
}
break;
case "w":
var _734=0;
s=_72b._getWeekOfYear(_72d,_734);
pad=true;
break;
case "d":
s=_72d.getDate();
pad=true;
break;
case "D":
s=_72b._getDayOfYear(_72d);
pad=true;
break;
case "e":
case "c":
var d=_72d.getDay();
if(l<2){
s=(d-_726.getFirstDayOfWeek(_72f.locale)+8)%7;
break;
}
case "E":
d=_72d.getDay();
if(l<3){
s=d+1;
pad=true;
}else{
var _735=["days",c=="c"?"standAlone":"format",_732[l-3]].join("-");
s=_72e[_735][d];
}
break;
case "a":
var _736=_72d.getHours()<12?"am":"pm";
s=_72f[_736]||_72e["dayPeriods-format-wide-"+_736];
break;
case "h":
case "H":
case "K":
case "k":
var h=_72d.getHours();
switch(c){
case "h":
s=(h%12)||12;
break;
case "H":
s=h;
break;
case "K":
s=(h%12);
break;
case "k":
s=h||24;
break;
}
pad=true;
break;
case "m":
s=_72d.getMinutes();
pad=true;
break;
case "s":
s=_72d.getSeconds();
pad=true;
break;
case "S":
s=Math.round(_72d.getMilliseconds()*Math.pow(10,l-3));
pad=true;
break;
case "v":
case "z":
s=_72b._getZone(_72d,true,_72f);
if(s){
break;
}
l=4;
case "Z":
var _737=_72b._getZone(_72d,false,_72f);
var tz=[(_737<=0?"+":"-"),_728.pad(Math.floor(Math.abs(_737)/60),2),_728.pad(Math.abs(_737)%60,2)];
if(l==4){
tz.splice(0,0,"GMT");
tz.splice(3,0,":");
}
s=tz.join("");
break;
default:
throw new Error("dojo.date.locale.format: invalid pattern char: "+_730);
}
if(pad){
s=_728.pad(s,l);
}
return s;
});
};
_72b._getZone=function(_738,_739,_73a){
if(_739){
return date.getTimezoneName(_738);
}else{
return _738.getTimezoneOffset();
}
};
_72b.format=function(_73b,_73c){
_73c=_73c||{};
var _73d=i18n.normalizeLocale(_73c.locale),_73e=_73c.formatLength||"short",_73f=_72b._getGregorianBundle(_73d),str=[],_740=lang.hitch(this,_72c,_73b,_73f,_73c);
if(_73c.selector=="year"){
return _741(_73f["dateFormatItem-yyyy"]||"yyyy",_740);
}
var _742;
if(_73c.selector!="date"){
_742=_73c.timePattern||_73f["timeFormat-"+_73e];
if(_742){
str.push(_741(_742,_740));
}
}
if(_73c.selector!="time"){
_742=_73c.datePattern||_73f["dateFormat-"+_73e];
if(_742){
str.push(_741(_742,_740));
}
}
return str.length==1?str[0]:_73f["dateTimeFormat-"+_73e].replace(/\'/g,"").replace(/\{(\d+)\}/g,function(_743,key){
return str[key];
});
};
_72b.regexp=function(_744){
return _72b._parseInfo(_744).regexp;
};
_72b._parseInfo=function(_745){
_745=_745||{};
var _746=i18n.normalizeLocale(_745.locale),_747=_72b._getGregorianBundle(_746),_748=_745.formatLength||"short",_749=_745.datePattern||_747["dateFormat-"+_748],_74a=_745.timePattern||_747["timeFormat-"+_748],_74b;
if(_745.selector=="date"){
_74b=_749;
}else{
if(_745.selector=="time"){
_74b=_74a;
}else{
_74b=_747["dateTimeFormat-"+_748].replace(/\{(\d+)\}/g,function(_74c,key){
return [_74a,_749][key];
});
}
}
var _74d=[],re=_741(_74b,lang.hitch(this,_74e,_74d,_747,_745));
return {regexp:re,tokens:_74d,bundle:_747};
};
_72b.parse=function(_74f,_750){
var _751=/[\u200E\u200F\u202A\u202E]/g,info=_72b._parseInfo(_750),_752=info.tokens,_753=info.bundle,re=new RegExp("^"+info.regexp.replace(_751,"")+"$",info.strict?"":"i"),_754=re.exec(_74f&&_74f.replace(_751,""));
if(!_754){
return null;
}
var _755=["abbr","wide","narrow"],_756=[1970,0,1,0,0,0,0],amPm="",_757=_725.every(_754,function(v,i){
if(!i){
return true;
}
var _758=_752[i-1],l=_758.length,c=_758.charAt(0);
switch(c){
case "y":
if(l!=2&&_750.strict){
_756[0]=v;
}else{
if(v<100){
v=Number(v);
var year=""+new Date().getFullYear(),_759=year.substring(0,2)*100,_75a=Math.min(Number(year.substring(2,4))+20,99);
_756[0]=(v<_75a)?_759+v:_759-100+v;
}else{
if(_750.strict){
return false;
}
_756[0]=v;
}
}
break;
case "M":
case "L":
if(l>2){
var _75b=_753["months-"+(c=="L"?"standAlone":"format")+"-"+_755[l-3]].concat();
if(!_750.strict){
v=v.replace(".","").toLowerCase();
_75b=_725.map(_75b,function(s){
return s.replace(".","").toLowerCase();
});
}
v=_725.indexOf(_75b,v);
if(v==-1){
return false;
}
}else{
v--;
}
_756[1]=v;
break;
case "E":
case "e":
case "c":
var days=_753["days-"+(c=="c"?"standAlone":"format")+"-"+_755[l-3]].concat();
if(!_750.strict){
v=v.toLowerCase();
days=_725.map(days,function(d){
return d.toLowerCase();
});
}
v=_725.indexOf(days,v);
if(v==-1){
return false;
}
break;
case "D":
_756[1]=0;
case "d":
_756[2]=v;
break;
case "a":
var am=_750.am||_753["dayPeriods-format-wide-am"],pm=_750.pm||_753["dayPeriods-format-wide-pm"];
if(!_750.strict){
var _75c=/\./g;
v=v.replace(_75c,"").toLowerCase();
am=am.replace(_75c,"").toLowerCase();
pm=pm.replace(_75c,"").toLowerCase();
}
if(_750.strict&&v!=am&&v!=pm){
return false;
}
amPm=(v==pm)?"p":(v==am)?"a":"";
break;
case "K":
if(v==24){
v=0;
}
case "h":
case "H":
case "k":
if(v>23){
return false;
}
_756[3]=v;
break;
case "m":
_756[4]=v;
break;
case "s":
_756[5]=v;
break;
case "S":
_756[6]=v;
}
return true;
});
var _75d=+_756[3];
if(amPm==="p"&&_75d<12){
_756[3]=_75d+12;
}else{
if(amPm==="a"&&_75d==12){
_756[3]=0;
}
}
var _75e=new Date(_756[0],_756[1],_756[2],_756[3],_756[4],_756[5],_756[6]);
if(_750.strict){
_75e.setFullYear(_756[0]);
}
var _75f=_752.join(""),_760=_75f.indexOf("d")!=-1,_761=_75f.indexOf("M")!=-1;
if(!_757||(_761&&_75e.getMonth()>_756[1])||(_760&&_75e.getDate()>_756[2])){
return null;
}
if((_761&&_75e.getMonth()<_756[1])||(_760&&_75e.getDate()<_756[2])){
_75e=date.add(_75e,"hour",1);
}
return _75e;
};
function _741(_762,_763,_764,_765){
var _766=function(x){
return x;
};
_763=_763||_766;
_764=_764||_766;
_765=_765||_766;
var _767=_762.match(/(''|[^'])+/g),_768=_762.charAt(0)=="'";
_725.forEach(_767,function(_769,i){
if(!_769){
_767[i]="";
}else{
_767[i]=(_768?_764:_763)(_769.replace(/''/g,"'"));
_768=!_768;
}
});
return _765(_767.join(""));
};
function _74e(_76a,_76b,_76c,_76d){
_76d=_727.escapeString(_76d);
if(!_76c.strict){
_76d=_76d.replace(" a"," ?a");
}
return _76d.replace(/([a-z])\1*/ig,function(_76e){
var s,c=_76e.charAt(0),l=_76e.length,p2="",p3="";
if(_76c.strict){
if(l>1){
p2="0"+"{"+(l-1)+"}";
}
if(l>2){
p3="0"+"{"+(l-2)+"}";
}
}else{
p2="0?";
p3="0{0,2}";
}
switch(c){
case "y":
s="\\d{2,4}";
break;
case "M":
case "L":
s=(l>2)?"\\S+?":"1[0-2]|"+p2+"[1-9]";
break;
case "D":
s="[12][0-9][0-9]|3[0-5][0-9]|36[0-6]|"+p2+"[1-9][0-9]|"+p3+"[1-9]";
break;
case "d":
s="3[01]|[12]\\d|"+p2+"[1-9]";
break;
case "w":
s="[1-4][0-9]|5[0-3]|"+p2+"[1-9]";
break;
case "E":
case "e":
case "c":
s=".+?";
break;
case "h":
s="1[0-2]|"+p2+"[1-9]";
break;
case "k":
s="1[01]|"+p2+"\\d";
break;
case "H":
s="1\\d|2[0-3]|"+p2+"\\d";
break;
case "K":
s="1\\d|2[0-4]|"+p2+"[1-9]";
break;
case "m":
case "s":
s="[0-5]\\d";
break;
case "S":
s="\\d{"+l+"}";
break;
case "a":
var am=_76c.am||_76b["dayPeriods-format-wide-am"],pm=_76c.pm||_76b["dayPeriods-format-wide-pm"];
s=am+"|"+pm;
if(!_76c.strict){
if(am!=am.toLowerCase()){
s+="|"+am.toLowerCase();
}
if(pm!=pm.toLowerCase()){
s+="|"+pm.toLowerCase();
}
if(s.indexOf(".")!=-1){
s+="|"+s.replace(/\./g,"");
}
}
s=s.replace(/\./g,"\\.");
break;
default:
s=".*";
}
if(_76a){
_76a.push(_76e);
}
return "("+s+")";
}).replace(/[\xa0 ]/g,"[\\s\\xa0]");
};
var _76f=[];
_72b.addCustomFormats=function(_770,_771){
_76f.push({pkg:_770,name:_771});
};
_72b._getGregorianBundle=function(_772){
var _773={};
_725.forEach(_76f,function(desc){
var _774=i18n.getLocalization(desc.pkg,desc.name,_772);
_773=lang.mixin(_773,_774);
},this);
return _773;
};
_72b.addCustomFormats(_72a.id.replace(/\/date\/locale$/,".cldr"),"gregorian");
_72b.getNames=function(item,type,_775,_776){
var _777,_778=_72b._getGregorianBundle(_776),_779=[item,_775,type];
if(_775=="standAlone"){
var key=_779.join("-");
_777=_778[key];
if(_777[0]==1){
_777=undefined;
}
}
_779[1]="format";
return (_777||_778[_779.join("-")]).concat();
};
_72b.isWeekend=function(_77a,_77b){
var _77c=_726.getWeekend(_77b),day=(_77a||new Date()).getDay();
if(_77c.end<_77c.start){
_77c.end+=7;
if(day<_77c.start){
day+=7;
}
}
return day>=_77c.start&&day<=_77c.end;
};
_72b._getDayOfYear=function(_77d){
return date.difference(new Date(_77d.getFullYear(),0,1,_77d.getHours()),_77d)+1;
};
_72b._getWeekOfYear=function(_77e,_77f){
if(arguments.length==1){
_77f=0;
}
var _780=new Date(_77e.getFullYear(),0,1).getDay(),adj=(_780-_77f+7)%7,week=Math.floor((_72b._getDayOfYear(_77e)+adj-1)/7);
if(_780==_77f){
week++;
}
return week;
};
return _72b;
});
},"dijit/_base":function(){
define(["./main","./a11y","./WidgetSet","./_base/focus","./_base/manager","./_base/place","./_base/popup","./_base/scroll","./_base/sniff","./_base/typematic","./_base/wai","./_base/window"],function(_781){
return _781._base;
});
},"dojox/mobile/sniff":function(){
define(["dojo/_base/kernel","dojo/sniff"],function(_782,has){
_782.deprecated("dojox/mobile/sniff","Use dojo/sniff instead","2.0");
has.add("iphone",has("ios"));
return has;
});
},"dijit/form/_FormWidgetMixin":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/on","dojo/sniff","dojo/window","../a11y"],function(_783,_784,_785,_786,lang,_787,on,has,_788,a11y){
return _784("dijit.form._FormWidgetMixin",null,{name:"",alt:"",value:"",type:"text","aria-label":"focusNode",tabIndex:"0",_setTabIndexAttr:"focusNode",disabled:false,intermediateChanges:false,scrollOnFocus:true,_setIdAttr:"focusNode",_setDisabledAttr:function(_789){
this._set("disabled",_789);
_785.set(this.focusNode,"disabled",_789);
if(this.valueNode){
_785.set(this.valueNode,"disabled",_789);
}
this.focusNode.setAttribute("aria-disabled",_789?"true":"false");
if(_789){
this._set("hovering",false);
this._set("active",false);
var _78a="tabIndex" in this.attributeMap?this.attributeMap.tabIndex:("_setTabIndexAttr" in this)?this._setTabIndexAttr:"focusNode";
_783.forEach(lang.isArray(_78a)?_78a:[_78a],function(_78b){
var node=this[_78b];
if(has("webkit")||a11y.hasDefaultTabStop(node)){
node.setAttribute("tabIndex","-1");
}else{
node.removeAttribute("tabIndex");
}
},this);
}else{
if(this.tabIndex!=""){
this.set("tabIndex",this.tabIndex);
}
}
},_onFocus:function(by){
if(by=="mouse"&&this.isFocusable()){
var _78c=this.own(on(this.focusNode,"focus",function(){
_78d.remove();
_78c.remove();
}))[0];
var _78d=this.own(on(this.ownerDocumentBody,"mouseup, touchend",lang.hitch(this,function(evt){
_78d.remove();
_78c.remove();
if(this.focused){
if(evt.type=="touchend"){
this.defer("focus");
}else{
this.focus();
}
}
})))[0];
}
if(this.scrollOnFocus){
this.defer(function(){
_788.scrollIntoView(this.domNode);
});
}
this.inherited(arguments);
},isFocusable:function(){
return !this.disabled&&this.focusNode&&(_786.get(this.domNode,"display")!="none");
},focus:function(){
if(!this.disabled&&this.focusNode.focus){
try{
this.focusNode.focus();
}
catch(e){
}
}
},compare:function(val1,val2){
if(typeof val1=="number"&&typeof val2=="number"){
return (isNaN(val1)&&isNaN(val2))?0:val1-val2;
}else{
if(val1>val2){
return 1;
}else{
if(val1<val2){
return -1;
}else{
return 0;
}
}
}
},onChange:function(){
},_onChangeActive:false,_handleOnChange:function(_78e,_78f){
if(this._lastValueReported==undefined&&(_78f===null||!this._onChangeActive)){
this._resetValue=this._lastValueReported=_78e;
}
this._pendingOnChange=this._pendingOnChange||(typeof _78e!=typeof this._lastValueReported)||(this.compare(_78e,this._lastValueReported)!=0);
if((this.intermediateChanges||_78f||_78f===undefined)&&this._pendingOnChange){
this._lastValueReported=_78e;
this._pendingOnChange=false;
if(this._onChangeActive){
if(this._onChangeHandle){
this._onChangeHandle.remove();
}
this._onChangeHandle=this.defer(function(){
this._onChangeHandle=null;
this.onChange(_78e);
});
}
}
},create:function(){
this.inherited(arguments);
this._onChangeActive=true;
},destroy:function(){
if(this._onChangeHandle){
this._onChangeHandle.remove();
this.onChange(this._lastValueReported);
}
this.inherited(arguments);
}});
});
},"dojo/i18n":function(){
define(["./_base/kernel","require","./has","./_base/array","./_base/config","./_base/lang","./_base/xhr","./json","module"],function(dojo,_790,has,_791,_792,lang,xhr,json,_793){
has.add("dojo-preload-i18n-Api",1);
1||has.add("dojo-v1x-i18n-Api",1);
var _794=dojo.i18n={},_795=/(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,_796=function(root,_797,_798,_799){
for(var _79a=[_798+_799],_79b=_797.split("-"),_79c="",i=0;i<_79b.length;i++){
_79c+=(_79c?"-":"")+_79b[i];
if(!root||root[_79c]){
_79a.push(_798+_79c+"/"+_799);
_79a.specificity=_79c;
}
}
return _79a;
},_79d={},_79e=function(_79f,_7a0,_7a1){
_7a1=_7a1?_7a1.toLowerCase():dojo.locale;
_79f=_79f.replace(/\./g,"/");
_7a0=_7a0.replace(/\./g,"/");
return (/root/i.test(_7a1))?(_79f+"/nls/"+_7a0):(_79f+"/nls/"+_7a1+"/"+_7a0);
},_7a2=dojo.getL10nName=function(_7a3,_7a4,_7a5){
return _7a3=_793.id+"!"+_79e(_7a3,_7a4,_7a5);
},_7a6=function(_7a7,_7a8,_7a9,_7aa,_7ab,load){
_7a7([_7a8],function(root){
var _7ac=lang.clone(root.root),_7ad=_796(!root._v1x&&root,_7ab,_7a9,_7aa);
_7a7(_7ad,function(){
for(var i=1;i<_7ad.length;i++){
_7ac=lang.mixin(lang.clone(_7ac),arguments[i]);
}
var _7ae=_7a8+"/"+_7ab;
_79d[_7ae]=_7ac;
_7ac.$locale=_7ad.specificity;
load();
});
});
},_7af=function(id,_7b0){
return /^\./.test(id)?_7b0(id):id;
},_7b1=function(_7b2){
var list=_792.extraLocale||[];
list=lang.isArray(list)?list:[list];
list.push(_7b2);
return list;
},load=function(id,_7b3,load){
if(has("dojo-preload-i18n-Api")){
var _7b4=id.split("*"),_7b5=_7b4[1]=="preload";
if(_7b5){
if(!_79d[id]){
_79d[id]=1;
_7b6(_7b4[2],json.parse(_7b4[3]),1,_7b3);
}
load(1);
}
if(_7b5||_7b7(id,_7b3,load)){
return;
}
}
var _7b8=_795.exec(id),_7b9=_7b8[1]+"/",_7ba=_7b8[5]||_7b8[4],_7bb=_7b9+_7ba,_7bc=(_7b8[5]&&_7b8[4]),_7bd=_7bc||dojo.locale||"",_7be=_7bb+"/"+_7bd,_7bf=_7bc?[_7bd]:_7b1(_7bd),_7c0=_7bf.length,_7c1=function(){
if(!--_7c0){
load(lang.delegate(_79d[_7be]));
}
};
_791.forEach(_7bf,function(_7c2){
var _7c3=_7bb+"/"+_7c2;
if(has("dojo-preload-i18n-Api")){
_7c4(_7c3);
}
if(!_79d[_7c3]){
_7a6(_7b3,_7bb,_7b9,_7ba,_7c2,_7c1);
}else{
_7c1();
}
});
};
if(has("dojo-unit-tests")){
var _7c5=_794.unitTests=[];
}
if(has("dojo-preload-i18n-Api")||1){
var _7c6=_794.normalizeLocale=function(_7c7){
var _7c8=_7c7?_7c7.toLowerCase():dojo.locale;
return _7c8=="root"?"ROOT":_7c8;
},isXd=function(mid,_7c9){
return (1&&1)?_7c9.isXdUrl(_790.toUrl(mid+".js")):true;
},_7ca=0,_7cb=[],_7b6=_794._preloadLocalizations=function(_7cc,_7cd,_7ce,_7cf){
_7cf=_7cf||_790;
function _7d0(mid,_7d1){
if(isXd(mid,_7cf)||_7ce){
_7cf([mid],_7d1);
}else{
_7db([mid],_7d1,_7cf);
}
};
function _7d2(_7d3,func){
var _7d4=_7d3.split("-");
while(_7d4.length){
if(func(_7d4.join("-"))){
return;
}
_7d4.pop();
}
func("ROOT");
};
function _7d5(_7d6){
_7d6=_7c6(_7d6);
_7d2(_7d6,function(loc){
if(_791.indexOf(_7cd,loc)>=0){
var mid=_7cc.replace(/\./g,"/")+"_"+loc;
_7ca++;
_7d0(mid,function(_7d7){
for(var p in _7d7){
_79d[_790.toAbsMid(p)+"/"+loc]=_7d7[p];
}
--_7ca;
while(!_7ca&&_7cb.length){
load.apply(null,_7cb.shift());
}
});
return true;
}
return false;
});
};
_7d5();
_791.forEach(dojo.config.extraLocale,_7d5);
},_7b7=function(id,_7d8,load){
if(_7ca){
_7cb.push([id,_7d8,load]);
}
return _7ca;
},_7c4=function(){
};
}
if(1){
var _7d9={},_7da=new Function("__bundle","__checkForLegacyModules","__mid","__amdValue","var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},"+"\t   require = function(){define.called = 1;};"+"try{"+"define.called = 0;"+"eval(__bundle);"+"if(define.called==1)"+"return __amdValue;"+"if((__checkForLegacyModules = __checkForLegacyModules(__mid)))"+"return __checkForLegacyModules;"+"}catch(e){}"+"try{"+"return eval('('+__bundle+')');"+"}catch(e){"+"return e;"+"}"),_7db=function(deps,_7dc,_7dd){
var _7de=[];
_791.forEach(deps,function(mid){
var url=_7dd.toUrl(mid+".js");
function load(text){
var _7df=_7da(text,_7c4,mid,_7d9);
if(_7df===_7d9){
_7de.push(_79d[url]=_7d9.result);
}else{
if(_7df instanceof Error){
console.error("failed to evaluate i18n bundle; url="+url,_7df);
_7df={};
}
_7de.push(_79d[url]=(/nls\/[^\/]+\/[^\/]+$/.test(url)?_7df:{root:_7df,_v1x:1}));
}
};
if(_79d[url]){
_7de.push(_79d[url]);
}else{
var _7e0=_7dd.syncLoadNls(mid);
if(_7e0){
_7de.push(_7e0);
}else{
if(!xhr){
try{
_7dd.getText(url,true,load);
}
catch(e){
_7de.push(_79d[url]={});
}
}else{
xhr.get({url:url,sync:true,load:load,error:function(){
_7de.push(_79d[url]={});
}});
}
}
}
});
_7dc&&_7dc.apply(null,_7de);
};
_7c4=function(_7e1){
for(var _7e2,_7e3=_7e1.split("/"),_7e4=dojo.global[_7e3[0]],i=1;_7e4&&i<_7e3.length-1;_7e4=_7e4[_7e3[i++]]){
}
if(_7e4){
_7e2=_7e4[_7e3[i]];
if(!_7e2){
_7e2=_7e4[_7e3[i].replace(/-/g,"_")];
}
if(_7e2){
_79d[_7e1]=_7e2;
}
}
return _7e2;
};
_794.getLocalization=function(_7e5,_7e6,_7e7){
var _7e8,_7e9=_79e(_7e5,_7e6,_7e7);
load(_7e9,(!isXd(_7e9,_790)?function(deps,_7ea){
_7db(deps,_7ea,_790);
}:_790),function(_7eb){
_7e8=_7eb;
});
return _7e8;
};
if(has("dojo-unit-tests")){
_7c5.push(function(doh){
doh.register("tests.i18n.unit",function(t){
var _7ec;
_7ec=_7da("{prop:1}",_7c4,"nonsense",_7d9);
t.is({prop:1},_7ec);
t.is(undefined,_7ec[1]);
_7ec=_7da("({prop:1})",_7c4,"nonsense",_7d9);
t.is({prop:1},_7ec);
t.is(undefined,_7ec[1]);
_7ec=_7da("{'prop-x':1}",_7c4,"nonsense",_7d9);
t.is({"prop-x":1},_7ec);
t.is(undefined,_7ec[1]);
_7ec=_7da("({'prop-x':1})",_7c4,"nonsense",_7d9);
t.is({"prop-x":1},_7ec);
t.is(undefined,_7ec[1]);
_7ec=_7da("define({'prop-x':1})",_7c4,"nonsense",_7d9);
t.is(_7d9,_7ec);
t.is({"prop-x":1},_7d9.result);
_7ec=_7da("define('some/module', {'prop-x':1})",_7c4,"nonsense",_7d9);
t.is(_7d9,_7ec);
t.is({"prop-x":1},_7d9.result);
_7ec=_7da("this is total nonsense and should throw an error",_7c4,"nonsense",_7d9);
t.is(_7ec instanceof Error,true);
});
});
}
}
return lang.mixin(_794,{dynamic:true,normalize:_7af,load:load,cache:_79d,getL10nName:_7a2});
});
},"dojox/mobile/ProgressIndicator":function(){
define(["dojo/_base/config","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dijit/_Contained","dijit/_WidgetBase","./_css3"],function(_7ed,_7ee,lang,_7ef,_7f0,_7f1,_7f2,has,_7f3,_7f4,css3){
var cls=_7ee("dojox.mobile.ProgressIndicator",[_7f4,_7f3],{interval:100,size:40,removeOnStop:true,startSpinning:false,center:true,colors:null,baseClass:"mblProgressIndicator",constructor:function(){
this.colors=[];
this._bars=[];
},buildRendering:function(){
this.inherited(arguments);
if(this.center){
_7ef.add(this.domNode,"mblProgressIndicatorCenter");
}
this.containerNode=_7f0.create("div",{className:"mblProgContainer"},this.domNode);
this.spinnerNode=_7f0.create("div",null,this.containerNode);
for(var i=0;i<12;i++){
var div=_7f0.create("div",{className:"mblProg mblProg"+i},this.spinnerNode);
this._bars.push(div);
}
this.scale(this.size);
if(this.startSpinning){
this.start();
}
},scale:function(size){
var _7f5=size/40;
_7f2.set(this.containerNode,css3.add({},{transform:"scale("+_7f5+")",transformOrigin:"0 0"}));
_7f1.setMarginBox(this.domNode,{w:size,h:size});
_7f1.setMarginBox(this.containerNode,{w:size/_7f5,h:size/_7f5});
},start:function(){
if(this.imageNode){
var img=this.imageNode;
var l=Math.round((this.containerNode.offsetWidth-img.offsetWidth)/2);
var t=Math.round((this.containerNode.offsetHeight-img.offsetHeight)/2);
img.style.margin=t+"px "+l+"px";
return;
}
var cntr=0;
var _7f6=this;
var n=12;
this.timer=setInterval(function(){
cntr--;
cntr=cntr<0?n-1:cntr;
var c=_7f6.colors;
for(var i=0;i<n;i++){
var idx=(cntr+i)%n;
if(c[idx]){
_7f6._bars[i].style.backgroundColor=c[idx];
}else{
_7ef.replace(_7f6._bars[i],"mblProg"+idx+"Color","mblProg"+(idx===n-1?0:idx+1)+"Color");
}
}
},this.interval);
},stop:function(){
if(this.timer){
clearInterval(this.timer);
}
this.timer=null;
if(this.removeOnStop&&this.domNode&&this.domNode.parentNode){
this.domNode.parentNode.removeChild(this.domNode);
}
},setImage:function(file){
if(file){
this.imageNode=_7f0.create("img",{src:file},this.containerNode);
this.spinnerNode.style.display="none";
}else{
if(this.imageNode){
this.containerNode.removeChild(this.imageNode);
this.imageNode=null;
}
this.spinnerNode.style.display="";
}
},destroy:function(){
this.inherited(arguments);
if(this===cls._instance){
cls._instance=null;
}
}});
cls._instance=null;
cls.getInstance=function(_7f7){
if(!cls._instance){
cls._instance=new cls(_7f7);
}
return cls._instance;
};
return cls;
});
},"dojox/mobile/Opener":function(){
define(["dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-geometry","./Tooltip","./Overlay","./lazyLoadUtils"],function(_7f8,_7f9,lang,win,_7fa,_7fb,_7fc,_7fd,_7fe,_7ff,_800){
var _801=_7fa.contains(win.doc.documentElement,"dj_phone");
var cls=_7f8("dojox.mobile.Opener",_801?_7ff:_7fe,{lazy:false,requires:"",buildRendering:function(){
this.inherited(arguments);
this.cover=_7fb.create("div",{onclick:lang.hitch(this,"_onBlur"),"class":"mblOpenerUnderlay",style:{position:_801?"absolute":"fixed",backgroundColor:"transparent",overflow:"hidden",zIndex:"-1"}},this.domNode,"first");
},onShow:function(node){
},onHide:function(node,v){
},show:function(node,_802){
if(this.lazy){
this.lazy=false;
var _803=this;
return _7f9.when(_800.instantiateLazyWidgets(this.domNode,this.requires),function(){
return _803.show(node,_802);
});
}
this.node=node;
this.onShow(node);
_7fc.set(this.cover,{top:"0px",left:"0px",width:"0px",height:"0px"});
this._resizeCover(_7fd.position(this.domNode,false));
return this.inherited(arguments);
},hide:function(val){
this.inherited(arguments);
this.onHide(this.node,val);
},_reposition:function(){
var _804=this.inherited(arguments);
this._resizeCover(_804);
return _804;
},_resizeCover:function(_805){
if(_801){
if(parseInt(_7fc.get(this.cover,"top"))!=-_805.y||parseInt(_7fc.get(this.cover,"height"))!=_805.y){
var x=Math.max(_805.x,0);
_7fc.set(this.cover,{top:-_805.y+"px",left:-x+"px",width:_805.w+x+"px",height:_805.y+"px"});
}
}else{
_7fc.set(this.cover,{width:Math.max(win.doc.documentElement.scrollWidth||win.body().scrollWidth||win.doc.documentElement.clientWidth)+"px",height:Math.max(win.doc.documentElement.scrollHeight||win.body().scrollHeight||win.doc.documentElement.clientHeight)+"px"});
}
},_onBlur:function(e){
var ret=this.onBlur(e);
if(ret!==false){
this.hide(e);
}
return ret;
}});
cls.prototype.baseClass+=" mblOpener";
return cls;
});
},"dijit/BackgroundIframe":function(){
define(["require","./main","dojo/_base/config","dojo/dom-construct","dojo/dom-style","dojo/_base/lang","dojo/on","dojo/sniff"],function(_806,_807,_808,_809,_80a,lang,on,has){
has.add("config-bgIframe",!has("touch"));
var _80b=new function(){
var _80c=[];
this.pop=function(){
var _80d;
if(_80c.length){
_80d=_80c.pop();
_80d.style.display="";
}else{
if(has("ie")<9){
var burl=_808["dojoBlankHtmlUrl"]||_806.toUrl("dojo/resources/blank.html")||"javascript:\"\"";
var html="<iframe src='"+burl+"' role='presentation'"+" style='position: absolute; left: 0px; top: 0px;"+"z-index: -1; filter:Alpha(Opacity=\"0\");'>";
_80d=document.createElement(html);
}else{
_80d=_809.create("iframe");
_80d.src="javascript:\"\"";
_80d.className="dijitBackgroundIframe";
_80d.setAttribute("role","presentation");
_80a.set(_80d,"opacity",0.1);
}
_80d.tabIndex=-1;
}
return _80d;
};
this.push=function(_80e){
_80e.style.display="none";
_80c.push(_80e);
};
}();
_807.BackgroundIframe=function(node){
if(!node.id){
throw new Error("no id");
}
if(has("config-bgIframe")){
var _80f=(this.iframe=_80b.pop());
node.appendChild(_80f);
if(has("ie")<7||has("quirks")){
this.resize(node);
this._conn=on(node,"resize",lang.hitch(this,"resize",node));
}else{
_80a.set(_80f,{width:"100%",height:"100%"});
}
}
};
lang.extend(_807.BackgroundIframe,{resize:function(node){
if(this.iframe){
_80a.set(this.iframe,{width:node.offsetWidth+"px",height:node.offsetHeight+"px"});
}
},destroy:function(){
if(this._conn){
this._conn.remove();
this._conn=null;
}
if(this.iframe){
_80b.push(this.iframe);
delete this.iframe;
}
}});
return _807.BackgroundIframe;
});
},"dojox/mobile":function(){
define([".","dojo/_base/lang","dojox/mobile/_base"],function(_810,lang,base){
lang.getObject("mobile",true,_810);
return _810.mobile;
});
},"dijit/form/_FormValueMixin":function(){
define(["dojo/_base/declare","dojo/dom-attr","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","./_FormWidgetMixin"],function(_811,_812,keys,lang,on,has,_813){
return _811("dijit.form._FormValueMixin",_813,{readOnly:false,_setReadOnlyAttr:function(_814){
_812.set(this.focusNode,"readOnly",_814);
this._set("readOnly",_814);
},postCreate:function(){
this.inherited(arguments);
if(this._resetValue===undefined){
this._lastValueReported=this._resetValue=this.value;
}
},_setValueAttr:function(_815,_816){
this._handleOnChange(_815,_816);
},_handleOnChange:function(_817,_818){
this._set("value",_817);
this.inherited(arguments);
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
}});
});
},"dojox/mobile/common":function(){
define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/lang","dojo/_base/window","dojo/_base/kernel","dojo/dom-class","dojo/dom-construct","dojo/ready","dojo/touch","dijit/registry","./sniff","./uacss"],function(_819,_81a,_81b,lang,win,_81c,_81d,_81e,_81f,_820,_821,has){
var dm=lang.getObject("dojox.mobile",true);
win.doc.dojoClick=true;
if(has("touch")){
has.add("clicks-prevented",!(has("android")>=4.1||has("ie")>=10));
if(has("clicks-prevented")){
dm._sendClick=function(_822,e){
for(var node=_822;node;node=node.parentNode){
if(node.dojoClick){
return;
}
}
var ev=win.doc.createEvent("MouseEvents");
ev.initMouseEvent("click",true,true,win.global,1,e.screenX,e.screenY,e.clientX,e.clientY);
_822.dispatchEvent(ev);
};
}
}
dm.getScreenSize=function(){
return {h:win.global.innerHeight||win.doc.documentElement.clientHeight,w:win.global.innerWidth||win.doc.documentElement.clientWidth};
};
dm.updateOrient=function(){
var dim=dm.getScreenSize();
_81d.replace(win.doc.documentElement,dim.h>dim.w?"dj_portrait":"dj_landscape",dim.h>dim.w?"dj_landscape":"dj_portrait");
};
dm.updateOrient();
dm.tabletSize=500;
dm.detectScreenSize=function(_823){
var dim=dm.getScreenSize();
var sz=Math.min(dim.w,dim.h);
var from,to;
if(sz>=dm.tabletSize&&(_823||(!this._sz||this._sz<dm.tabletSize))){
from="phone";
to="tablet";
}else{
if(sz<dm.tabletSize&&(_823||(!this._sz||this._sz>=dm.tabletSize))){
from="tablet";
to="phone";
}
}
if(to){
_81d.replace(win.doc.documentElement,"dj_"+to,"dj_"+from);
_81b.publish("/dojox/mobile/screenSize/"+to,[dim]);
}
this._sz=sz;
};
dm.detectScreenSize();
dm.hideAddressBarWait=typeof (_81a["mblHideAddressBarWait"])==="number"?_81a["mblHideAddressBarWait"]:1500;
dm.hide_1=function(){
scrollTo(0,1);
dm._hidingTimer=(dm._hidingTimer==0)?200:dm._hidingTimer*2;
setTimeout(function(){
if(dm.isAddressBarHidden()||dm._hidingTimer>dm.hideAddressBarWait){
dm.resizeAll();
dm._hiding=false;
}else{
setTimeout(dm.hide_1,dm._hidingTimer);
}
},50);
};
dm.hideAddressBar=function(evt){
if(dm.disableHideAddressBar||dm._hiding){
return;
}
dm._hiding=true;
dm._hidingTimer=has("ios")?200:0;
var minH=screen.availHeight;
if(has("android")){
minH=outerHeight/devicePixelRatio;
if(minH==0){
dm._hiding=false;
setTimeout(function(){
dm.hideAddressBar();
},200);
}
if(minH<=innerHeight){
minH=outerHeight;
}
if(has("android")<3){
win.doc.documentElement.style.overflow=win.body().style.overflow="visible";
}
}
if(win.body().offsetHeight<minH){
win.body().style.minHeight=minH+"px";
dm._resetMinHeight=true;
}
setTimeout(dm.hide_1,dm._hidingTimer);
};
dm.isAddressBarHidden=function(){
return pageYOffset===1;
};
dm.resizeAll=function(evt,root){
if(dm.disableResizeAll){
return;
}
_81b.publish("/dojox/mobile/resizeAll",[evt,root]);
_81b.publish("/dojox/mobile/beforeResizeAll",[evt,root]);
if(dm._resetMinHeight){
win.body().style.minHeight=dm.getScreenSize().h+"px";
}
dm.updateOrient();
dm.detectScreenSize();
var _824=function(w){
var _825=w.getParent&&w.getParent();
return !!((!_825||!_825.resize)&&w.resize);
};
var _826=function(w){
_819.forEach(w.getChildren(),function(_827){
if(_824(_827)){
_827.resize();
}
_826(_827);
});
};
if(root){
if(root.resize){
root.resize();
}
_826(root);
}else{
_819.forEach(_819.filter(_821.toArray(),_824),function(w){
w.resize();
});
}
_81b.publish("/dojox/mobile/afterResizeAll",[evt,root]);
};
dm.openWindow=function(url,_828){
win.global.open(url,_828||"_blank");
};
dm._detectWindowsTheme=function(){
if(navigator.userAgent.match(/IEMobile\/10\.0/)){
_81e.create("style",{innerHTML:"@-ms-viewport {width: auto !important}"},win.doc.head);
}
var _829=function(){
_81d.add(win.doc.documentElement,"windows_theme");
_81c.experimental("Dojo Mobile Windows theme","Behavior and appearance of the Windows theme are experimental.");
};
var _82a=has("windows-theme");
if(_82a!==undefined){
if(_82a){
_829();
}
return;
}
var i,j;
var _82b=function(href){
if(href&&href.indexOf("/windows/")!==-1){
has.add("windows-theme",true);
_829();
return true;
}
return false;
};
var s=win.doc.styleSheets;
for(i=0;i<s.length;i++){
if(s[i].href){
continue;
}
var r=s[i].cssRules||s[i].imports;
if(!r){
continue;
}
for(j=0;j<r.length;j++){
if(_82b(r[j].href)){
return;
}
}
}
var _82c=win.doc.getElementsByTagName("link");
for(i=0;i<_82c.length;i++){
if(_82b(_82c[i].href)){
return;
}
}
};
if(_81a["mblApplyPageStyles"]!==false){
_81d.add(win.doc.documentElement,"mobile");
}
if(has("chrome")){
_81d.add(win.doc.documentElement,"dj_chrome");
}
if(win.global._no_dojo_dm){
var _82d=win.global._no_dojo_dm;
for(var i in _82d){
dm[i]=_82d[i];
}
dm.deviceTheme.setDm(dm);
}
has.add("mblAndroidWorkaround",_81a["mblAndroidWorkaround"]!==false&&has("android")<3,undefined,true);
has.add("mblAndroid3Workaround",_81a["mblAndroid3Workaround"]!==false&&has("android")>=3,undefined,true);
dm._detectWindowsTheme();
_81f(function(){
dm.detectScreenSize(true);
_81d.add(win.body(),"mblBackground");
if(_81a["mblAndroidWorkaroundButtonStyle"]!==false&&has("android")){
_81e.create("style",{innerHTML:"BUTTON,INPUT[type='button'],INPUT[type='submit'],INPUT[type='reset'],INPUT[type='file']::-webkit-file-upload-button{-webkit-appearance:none;} audio::-webkit-media-controls-play-button,video::-webkit-media-controls-play-button{-webkit-appearance:media-play-button;} video::-webkit-media-controls-fullscreen-button{-webkit-appearance:media-fullscreen-button;}"},win.doc.head,"first");
}
if(has("mblAndroidWorkaround")){
_81e.create("style",{innerHTML:".mblView.mblAndroidWorkaround{position:absolute;top:-9999px !important;left:-9999px !important;}"},win.doc.head,"last");
}
var f=dm.resizeAll;
if(_81a["mblHideAddressBar"]!==false&&navigator.appVersion.indexOf("Mobile")!=-1||_81a["mblForceHideAddressBar"]===true){
dm.hideAddressBar();
if(_81a["mblAlwaysHideAddressBar"]===true){
f=dm.hideAddressBar;
}
}
var ios6=has("ios")>=6;
if((has("android")||ios6)&&win.global.onorientationchange!==undefined){
var _82e=f;
var _82f,_830,_831;
if(ios6){
_830=win.doc.documentElement.clientWidth;
_831=win.doc.documentElement.clientHeight;
}else{
f=function(evt){
var _832=_81b.connect(null,"onresize",null,function(e){
_81b.disconnect(_832);
_82e(e);
});
};
_82f=dm.getScreenSize();
}
_81b.connect(null,"onresize",null,function(e){
if(ios6){
var _833=win.doc.documentElement.clientWidth,_834=win.doc.documentElement.clientHeight;
if(_833==_830&&_834!=_831){
_82e(e);
}
_830=_833;
_831=_834;
}else{
var _835=dm.getScreenSize();
if(_835.w==_82f.w&&Math.abs(_835.h-_82f.h)>=100){
_82e(e);
}
_82f=_835;
}
});
}
_81b.connect(null,win.global.onorientationchange!==undefined?"onorientationchange":"onresize",null,f);
win.body().style.visibility="visible";
});
return dm;
});
},"dojox/mobile/_PickerBase":function(){
define(["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_Container","dijit/_WidgetBase"],function(_836,_837,_838,_839,_83a){
return _837("dojox.mobile._PickerBase",[_83a,_839,_838],{slotClasses:[],slotProps:[],slotOrder:[],buildRendering:function(){
this.inherited(arguments);
this.slots=[];
for(var i=0;i<this.slotClasses.length;i++){
var idx=this.slotOrder.length?this.slotOrder[i]:i;
var slot=new this.slotClasses[idx](this.slotProps[idx]);
this.addChild(slot);
this.slots[idx]=slot;
}
},startup:function(){
if(this._started){
return;
}
this._duringStartup=true;
this.inherited(arguments);
this.reset();
delete this._duringStartup;
},getSlots:function(){
return this.slots.length?this.slots:_836.filter(this.getChildren(),function(c){
return c.declaredClass.indexOf("Slot")!==-1;
});
},_getValuesAttr:function(){
return _836.map(this.getSlots(),function(w){
return w.get("value");
});
},_setValuesAttr:function(a){
_836.forEach(this.getSlots(),function(w,i){
w.set("value",a[i]);
});
},_setColorsAttr:function(a){
_836.forEach(this.getSlots(),function(w,i){
w.setColor&&w.setColor(a[i]);
});
},reset:function(){
_836.forEach(this.getSlots(),function(w){
w.setInitialValue();
});
}});
});
},"dojox/mobile/iconUtils":function(){
define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","./sniff"],function(_83b,_83c,_83d,_83e,lang,win,_83f,_840,_841,has){
var dm=lang.getObject("dojox.mobile",true);
var _842=function(){
this.setupSpriteIcon=function(_843,_844){
if(_843&&_844){
var arr=_83b.map(_844.split(/[ ,]/),function(item){
return item-0;
});
var t=arr[0];
var r=arr[1]+arr[2];
var b=arr[0]+arr[3];
var l=arr[1];
_841.set(_843,{position:"absolute",clip:"rect("+t+"px "+r+"px "+b+"px "+l+"px)",top:(_843.parentNode?_841.get(_843,"top"):0)-t+"px",left:-l+"px"});
_83f.add(_843,"mblSpriteIcon");
}
};
this.createDomButton=function(_845,_846,_847){
if(!this._domButtons){
if(has("webkit")){
var _848=function(_849,dic){
var i,j;
if(!_849){
var _84a={};
var ss=win.doc.styleSheets;
for(i=0;i<ss.length;i++){
ss[i]&&_848(ss[i],_84a);
}
return _84a;
}
var _84b=_849.cssRules||[];
for(i=0;i<_84b.length;i++){
var rule=_84b[i];
if(rule.href&&rule.styleSheet){
_848(rule.styleSheet,dic);
}else{
if(rule.selectorText){
var sels=rule.selectorText.split(/,/);
for(j=0;j<sels.length;j++){
var sel=sels[j];
var n=sel.split(/>/).length-1;
if(sel.match(/(mblDomButton\w+)/)){
var cls=RegExp.$1;
if(!dic[cls]||n>dic[cls]){
dic[cls]=n;
}
}
}
}
}
}
return dic;
};
this._domButtons=_848();
}else{
this._domButtons={};
}
}
var s=_845.className;
var node=_847||_845;
if(s.match(/(mblDomButton\w+)/)&&s.indexOf("/")===-1){
var _84c=RegExp.$1;
var nDiv=4;
if(s.match(/(mblDomButton\w+_(\d+))/)){
nDiv=RegExp.$2-0;
}else{
if(this._domButtons[_84c]!==undefined){
nDiv=this._domButtons[_84c];
}
}
var _84d=null;
if(has("bb")&&_83c["mblBBBoxShadowWorkaround"]!==false){
_84d={style:"-webkit-box-shadow:none"};
}
for(var i=0,p=node;i<nDiv;i++){
p=p.firstChild||_840.create("div",_84d,p);
}
if(_847){
setTimeout(function(){
_83f.remove(_845,_84c);
},0);
_83f.add(_847,_84c);
}
}else{
if(s.indexOf(".")!==-1){
_840.create("img",{src:s},node);
}else{
return null;
}
}
_83f.add(node,"mblDomButton");
!!_846&&_841.set(node,_846);
return node;
};
this.createIcon=function(icon,_84e,node,_84f,_850,_851,pos){
_84f=_84f||"";
if(icon&&icon.indexOf("mblDomButton")===0){
if(!node){
node=_840.create("div",null,_851||_850,pos);
}else{
if(node.className.match(/(mblDomButton\w+)/)){
_83f.remove(node,RegExp.$1);
}
}
node.title=_84f;
_83f.add(node,icon);
this.createDomButton(node);
}else{
if(icon&&icon!=="none"){
if(!node||node.nodeName!=="IMG"){
node=_840.create("img",{alt:_84f},_851||_850,pos);
}
node.src=(icon||"").replace("${theme}",dm.currentTheme);
this.setupSpriteIcon(node,_84e);
if(_84e&&_850){
var arr=_84e.split(/[ ,]/);
_841.set(_850,{position:"relative",width:arr[2]+"px",height:arr[3]+"px"});
_83f.add(_850,"mblSpriteIconParent");
}
_83d.connect(node,"ondragstart",_83e,"stop");
}
}
return node;
};
this.iconWrapper=false;
this.setIcon=function(icon,_852,_853,alt,_854,_855,pos){
if(!_854||!icon&&!_853){
return null;
}
if(icon&&icon!=="none"){
if(!this.iconWrapper&&icon.indexOf("mblDomButton")!==0&&!_852){
if(_853&&_853.tagName==="DIV"){
_840.destroy(_853);
_853=null;
}
_853=this.createIcon(icon,null,_853,alt,_854,_855,pos);
_83f.add(_853,"mblImageIcon");
}else{
if(_853&&_853.tagName==="IMG"){
_840.destroy(_853);
_853=null;
}
_853&&_840.empty(_853);
if(!_853){
_853=_840.create("div",null,_855||_854,pos);
}
this.createIcon(icon,_852,null,null,_853);
if(alt){
_853.title=alt;
}
}
_83f.remove(_854,"mblNoIcon");
return _853;
}else{
_840.destroy(_853);
_83f.add(_854,"mblNoIcon");
return null;
}
};
};
return new _842();
});
},"dojox/mobile/Heading":function(){
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./ProgressIndicator","./ToolBarButton","./View","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Heading"],function(_856,_857,_858,lang,win,dom,_859,_85a,_85b,_85c,_85d,_85e,_85f,_860,_861,_862,View,has,_863){
var dm=lang.getObject("dojox.mobile",true);
var _864=_858(has("dojo-bidi")?"dojox.mobile.NonBidiHeading":"dojox.mobile.Heading",[_860,_85f,_85e],{back:"",href:"",moveTo:"",transition:"slide",label:"",iconBase:"",tag:"h1",busy:false,progStyle:"mblProgWhite",baseClass:"mblHeading",buildRendering:function(){
if(!this.templateString){
this.domNode=this.containerNode=this.srcNodeRef||win.doc.createElement(this.tag);
}
this.inherited(arguments);
if(!this.templateString){
if(!this.label){
_856.forEach(this.domNode.childNodes,function(n){
if(n.nodeType==3){
var v=lang.trim(n.nodeValue);
if(v){
this.label=v;
this.labelNode=_85a.create("span",{innerHTML:v},n,"replace");
}
}
},this);
}
if(!this.labelNode){
this.labelNode=_85a.create("span",null,this.domNode);
}
this.labelNode.className="mblHeadingSpanTitle";
this.labelDivNode=_85a.create("div",{className:"mblHeadingDivTitle",innerHTML:this.labelNode.innerHTML},this.domNode);
}
if(this.labelDivNode){
_85c.set(this.labelDivNode,"role","heading");
_85c.set(this.labelDivNode,"aria-level","1");
}
dom.setSelectable(this.domNode,false);
},startup:function(){
if(this._started){
return;
}
var _865=this.getParent&&this.getParent();
if(!_865||!_865.resize){
var _866=this;
_866.defer(function(){
_866.resize();
});
}
this.inherited(arguments);
},resize:function(){
if(this.labelNode){
var _867,_868;
var _869=this.containerNode.childNodes;
for(var i=_869.length-1;i>=0;i--){
var c=_869[i];
if(c.nodeType===1&&_85b.get(c,"display")!=="none"){
if(!_868&&_85b.get(c,"float")==="right"){
_868=c;
}
if(!_867&&_85b.get(c,"float")==="left"){
_867=c;
}
}
}
if(!this.labelNodeLen&&this.label){
this.labelNode.style.display="inline";
this.labelNodeLen=this.labelNode.offsetWidth;
this.labelNode.style.display="";
}
var bw=this.domNode.offsetWidth;
var rw=_868?bw-_868.offsetLeft+5:0;
var lw=_867?_867.offsetLeft+_867.offsetWidth+5:0;
var tw=this.labelNodeLen||0;
_859[bw-Math.max(rw,lw)*2>tw?"add":"remove"](this.domNode,"mblHeadingCenterTitle");
}
_856.forEach(this.getChildren(),function(_86a){
if(_86a.resize){
_86a.resize();
}
});
},_setBackAttr:function(back){
this._set("back",back);
if(!this.backButton){
this.backButton=new _862({arrow:"left",label:back,moveTo:this.moveTo,back:!this.moveTo&&!this.href,href:this.href,transition:this.transition,transitionDir:-1,dir:this.isLeftToRight()?"ltr":"rtl"});
this.backButton.placeAt(this.domNode,"first");
}else{
this.backButton.set("label",back);
}
this.resize();
},_setMoveToAttr:function(_86b){
this._set("moveTo",_86b);
if(this.backButton){
this.backButton.set("moveTo",_86b);
this.backButton.set("back",!_86b&&!this.href);
}
},_setHrefAttr:function(href){
this._set("href",href);
if(this.backButton){
this.backButton.set("href",href);
this.backButton.set("back",!this.moveTo&&!href);
}
},_setTransitionAttr:function(_86c){
this._set("transition",_86c);
if(this.backButton){
this.backButton.set("transition",_86c);
}
},_setLabelAttr:function(_86d){
this._set("label",_86d);
this.labelNode.innerHTML=this.labelDivNode.innerHTML=this._cv?this._cv(_86d):_86d;
},_setBusyAttr:function(busy){
var prog=this._prog;
if(busy){
if(!prog){
prog=this._prog=new _861({size:30,center:false});
_859.add(prog.domNode,this.progStyle);
}
_85a.place(prog.domNode,this.domNode,"first");
prog.start();
}else{
if(prog){
prog.stop();
}
}
this._set("busy",busy);
}});
return has("dojo-bidi")?_858("dojox.mobile.Heading",[_864,_863]):_864;
});
},"dojox/main":function(){
define(["dojo/_base/kernel"],function(dojo){
return dojo.dojox;
});
},"dojox/mobile/RoundRectList":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase"],function(_86e,_86f,_870,lang,win,_871,_872,_873,_874,_875){
return _86f("dojox.mobile.RoundRectList",[_875,_874,_873],{transition:"slide",iconBase:"",iconPos:"",select:"",stateful:false,syncWithViews:false,editable:false,tag:"ul",editableMixinClass:"dojox/mobile/_EditableListMixin",baseClass:"mblRoundRectList",filterBoxClass:"mblFilteredRoundRectListSearchBox",buildRendering:function(){
this.domNode=this.srcNodeRef||_871.create(this.tag);
if(this.select){
_872.set(this.domNode,"role","listbox");
if(this.select==="multiple"){
_872.set(this.domNode,"aria-multiselectable","true");
}
}
this.inherited(arguments);
},postCreate:function(){
if(this.editable){
require([this.editableMixinClass],lang.hitch(this,function(_876){
_86f.safeMixin(this,new _876());
}));
}
this.connect(this.domNode,"onselectstart",_870.stop);
if(this.syncWithViews){
var f=function(view,_877,dir,_878,_879,_87a){
var _87b=_86e.filter(this.getChildren(),function(w){
return w.moveTo==="#"+view.id||w.moveTo===view.id;
})[0];
if(_87b){
_87b.set("selected",true);
}
};
this.subscribe("/dojox/mobile/afterTransitionIn",f);
this.subscribe("/dojox/mobile/startView",f);
}
},resize:function(){
_86e.forEach(this.getChildren(),function(_87c){
if(_87c.resize){
_87c.resize();
}
});
},onCheckStateChanged:function(){
},_setStatefulAttr:function(_87d){
this._set("stateful",_87d);
this.selectOne=_87d;
_86e.forEach(this.getChildren(),function(_87e){
_87e.setArrow&&_87e.setArrow();
});
},deselectItem:function(item){
item.set("selected",false);
},deselectAll:function(){
_86e.forEach(this.getChildren(),function(_87f){
_87f.set("selected",false);
});
},selectItem:function(item){
item.set("selected",true);
}});
});
},"dojox/mobile/FixedSplitter":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","dojo/has"],function(_880,_881,win,_882,_883,_884,_885,_886,has){
return _881("dojox.mobile.FixedSplitter",[_886,_885,_884],{orientation:"H",variablePane:-1,screenSizeAware:false,screenSizeAwareClass:"dojox/mobile/ScreenSizeAware",baseClass:"mblFixedSplitter",startup:function(){
if(this._started){
return;
}
_882.add(this.domNode,this.baseClass+this.orientation);
var _887=this.getParent(),f;
if(!_887||!_887.resize){
var _888=this;
f=function(){
_888.defer(function(){
_888.resize();
});
};
}
if(this.screenSizeAware){
require([this.screenSizeAwareClass],function(_889){
_889.getInstance();
f&&f();
});
}else{
f&&f();
}
this.inherited(arguments);
},resize:function(){
var wh=this.orientation==="H"?"w":"h",tl=this.orientation==="H"?"l":"t",_88a={},_88b={},i,c,h,a=[],_88c=0,_88d=0,_88e=_880.filter(this.domNode.childNodes,function(node){
return node.nodeType==1;
}),idx=this.variablePane==-1?_88e.length-1:this.variablePane;
for(i=0;i<_88e.length;i++){
if(i!=idx){
a[i]=_883.getMarginBox(_88e[i])[wh];
_88d+=a[i];
}
}
if(this.orientation=="V"){
if(this.domNode.parentNode.tagName=="BODY"){
if(_880.filter(win.body().childNodes,function(node){
return node.nodeType==1;
}).length==1){
h=(win.global.innerHeight||win.doc.documentElement.clientHeight);
}
}
}
var l=(h||_883.getMarginBox(this.domNode)[wh])-_88d;
_88b[wh]=a[idx]=l;
c=_88e[idx];
_883.setMarginBox(c,_88b);
c.style[this.orientation==="H"?"height":"width"]="";
if(has("dojo-bidi")&&(this.orientation=="H"&&!this.isLeftToRight())){
_88c=l;
for(i=_88e.length-1;i>=0;i--){
c=_88e[i];
_88a[tl]=l-_88c;
_883.setMarginBox(c,_88a);
c.style[this.orientation==="H"?"top":"left"]="";
_88c-=a[i];
}
}else{
for(i=0;i<_88e.length;i++){
c=_88e[i];
_88a[tl]=_88c;
_883.setMarginBox(c,_88a);
c.style[this.orientation==="H"?"top":"left"]="";
_88c+=a[i];
}
}
_880.forEach(this.getChildren(),function(_88f){
if(_88f.resize){
_88f.resize();
}
});
},_setOrientationAttr:function(_890){
var s=this.baseClass;
_882.replace(this.domNode,s+_890,s+this.orientation);
this.orientation=_890;
if(this._started){
this.resize();
}
}});
});
},"dojo/Stateful":function(){
define(["./_base/declare","./_base/lang","./_base/array","./when"],function(_891,lang,_892,when){
return _891("dojo.Stateful",null,{_attrPairNames:{},_getAttrNames:function(name){
var apn=this._attrPairNames;
if(apn[name]){
return apn[name];
}
return (apn[name]={s:"_"+name+"Setter",g:"_"+name+"Getter"});
},postscript:function(_893){
if(_893){
this.set(_893);
}
},_get:function(name,_894){
return typeof this[_894.g]==="function"?this[_894.g]():this[name];
},get:function(name){
return this._get(name,this._getAttrNames(name));
},set:function(name,_895){
if(typeof name==="object"){
for(var x in name){
if(name.hasOwnProperty(x)&&x!="_watchCallbacks"){
this.set(x,name[x]);
}
}
return this;
}
var _896=this._getAttrNames(name),_897=this._get(name,_896),_898=this[_896.s],_899;
if(typeof _898==="function"){
_899=_898.apply(this,Array.prototype.slice.call(arguments,1));
}else{
this[name]=_895;
}
if(this._watchCallbacks){
var self=this;
when(_899,function(){
self._watchCallbacks(name,_897,_895);
});
}
return this;
},_changeAttrValue:function(name,_89a){
var _89b=this.get(name);
this[name]=_89a;
if(this._watchCallbacks){
this._watchCallbacks(name,_89b,_89a);
}
return this;
},watch:function(name,_89c){
var _89d=this._watchCallbacks;
if(!_89d){
var self=this;
_89d=this._watchCallbacks=function(name,_89e,_89f,_8a0){
var _8a1=function(_8a2){
if(_8a2){
_8a2=_8a2.slice();
for(var i=0,l=_8a2.length;i<l;i++){
_8a2[i].call(self,name,_89e,_89f);
}
}
};
_8a1(_89d["_"+name]);
if(!_8a0){
_8a1(_89d["*"]);
}
};
}
if(!_89c&&typeof name==="function"){
_89c=name;
name="*";
}else{
name="_"+name;
}
var _8a3=_89d[name];
if(typeof _8a3!=="object"){
_8a3=_89d[name]=[];
}
_8a3.push(_89c);
var _8a4={};
_8a4.unwatch=_8a4.remove=function(){
var _8a5=_892.indexOf(_8a3,_89c);
if(_8a5>-1){
_8a3.splice(_8a5,1);
}
};
return _8a4;
}});
});
},"dojox/mobile/viewRegistry":function(){
define(["dojo/_base/array","dojo/dom-class","dijit/registry"],function(_8a6,_8a7,_8a8){
var _8a9={length:0,hash:{},initialView:null,add:function(view){
this.hash[view.id]=view;
this.length++;
},remove:function(id){
if(this.hash[id]){
delete this.hash[id];
this.length--;
}
},getViews:function(){
var arr=[];
for(var i in this.hash){
arr.push(this.hash[i]);
}
return arr;
},getParentView:function(view){
for(var v=view.getParent();v;v=v.getParent()){
if(_8a7.contains(v.domNode,"mblView")){
return v;
}
}
return null;
},getChildViews:function(_8aa){
return _8a6.filter(this.getViews(),function(v){
return this.getParentView(v)===_8aa;
},this);
},getEnclosingView:function(node){
for(var n=node;n&&n.tagName!=="BODY";n=n.parentNode){
if(n.nodeType===1&&_8a7.contains(n,"mblView")){
return _8a8.byNode(n);
}
}
return null;
},getEnclosingScrollable:function(node){
for(var w=_8a8.getEnclosingWidget(node);w;w=w.getParent()){
if(w.scrollableParams&&w._v){
return w;
}
}
return null;
}};
return _8a9;
});
},"dojox/mobile/deviceTheme":function(){
(typeof define==="undefined"?function(deps,def){
def();
}:define)(["dojo/_base/config","dojo/_base/lang","dojo/_base/window","require"],function(_8ab,lang,win,_8ac){
var dm=lang&&lang.getObject("dojox.mobile",true)||{};
var _8ad=function(){
if(!win){
win=window;
win.doc=document;
win._no_dojo_dm=dm;
}
_8ab=_8ab||win.mblConfig||{};
var _8ae=win.doc.getElementsByTagName("script");
for(var i=0;i<_8ae.length;i++){
var n=_8ae[i];
var src=n.getAttribute("src")||"";
if(src.match(/\/deviceTheme\.js/i)){
_8ab.baseUrl=src.replace("deviceTheme.js","../../dojo/");
var conf=(n.getAttribute("data-dojo-config")||n.getAttribute("djConfig"));
if(conf){
var obj=eval("({ "+conf+" })");
for(var key in obj){
_8ab[key]=obj[key];
}
}
break;
}else{
if(src.match(/\/dojo\.js/i)){
_8ab.baseUrl=src.replace("dojo.js","");
break;
}
}
}
this.loadCssFile=function(file){
var link=win.doc.createElement("link");
link.href=file;
link.type="text/css";
link.rel="stylesheet";
var head=win.doc.getElementsByTagName("head")[0];
head.insertBefore(link,head.firstChild);
dm.loadedCssFiles.push(link);
};
this.toUrl=function(path){
return _8ac?_8ac.toUrl(path):_8ab.baseUrl+"../"+path;
};
this.setDm=function(_8af){
dm=_8af;
};
this.themeMap=_8ab.themeMap||[["Holodark","holodark",[]],["Android 3","holodark",[]],["Android 4","holodark",[]],["Android","android",[]],["BlackBerry","blackberry",[]],["BB10","blackberry",[]],["iPhone","iphone",[]],["iPad","iphone",[this.toUrl("dojox/mobile/themes/iphone/ipad.css")]],["MSIE 10","windows",[]],["WindowsPhone","windows",[]],["Custom","custom",[]],[".*","iphone",[]]];
dm.loadedCssFiles=[];
this.loadDeviceTheme=function(_8b0){
var t=_8ab.mblThemeFiles||dm.themeFiles||["@theme"];
var i,j;
var m=this.themeMap;
var ua=_8b0||_8ab.mblUserAgent||(location.search.match(/theme=(\w+)/)?RegExp.$1:navigator.userAgent);
for(i=0;i<m.length;i++){
if(ua.match(new RegExp(m[i][0]))){
var _8b1=m[i][1];
if(_8b1=="windows"&&_8ab.mblDisableWindowsTheme){
continue;
}
var cls=win.doc.documentElement.className;
cls=cls.replace(new RegExp(" *"+dm.currentTheme+"_theme"),"")+" "+_8b1+"_theme";
win.doc.documentElement.className=cls;
dm.currentTheme=_8b1;
var _8b2=[].concat(m[i][2]);
for(j=0;j<t.length;j++){
var _8b3=(t[j] instanceof Array||typeof t[j]=="array");
var path;
if(!_8b3&&t[j].indexOf("/")!==-1){
path=t[j];
}else{
var pkg=_8b3?(t[j][0]||"").replace(/\./g,"/"):"dojox/mobile";
var name=(_8b3?t[j][1]:t[j]).replace(/\./g,"/");
var f="themes/"+_8b1+"/"+(name==="@theme"?_8b1:name)+".css";
path=pkg+"/"+f;
}
_8b2.unshift(this.toUrl(path));
}
for(var k=0;k<dm.loadedCssFiles.length;k++){
var n=dm.loadedCssFiles[k];
n.parentNode.removeChild(n);
}
dm.loadedCssFiles=[];
for(j=0;j<_8b2.length;j++){
var _8b4=_8b2[j].toString();
if(_8ab["dojo-bidi"]==true&&_8b4.indexOf("_rtl")==-1){
var _8b5="android.css blackberry.css custom.css iphone.css holodark.css base.css Carousel.css ComboBox.css IconContainer.css IconMenu.css ListItem.css RoundRectCategory.css SpinWheel.css Switch.css TabBar.css ToggleButton.css ToolBarButton.css";
var _8b6=_8b4.substr(_8b4.lastIndexOf("/")+1);
if(_8b5.indexOf(_8b6)!=-1){
this.loadCssFile(_8b4.replace(".css","_rtl.css"));
}
}
this.loadCssFile(_8b2[j].toString());
}
if(_8b0&&dm.loadCompatCssFiles){
dm.loadCompatCssFiles();
}
break;
}
}
};
};
var _8b7=new _8ad();
_8b7.loadDeviceTheme();
window.deviceTheme=dm.deviceTheme=_8b7;
return _8b7;
});
},"dojox/mobile/Badge":function(){
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Badge"],function(_8b8,lang,_8b9,_8ba,_8bb,has,_8bc){
var _8bd=_8b8(has("dojo-bidi")?"dojox.mobile.NonBidiBadge":"dojox.mobile.Badge",null,{value:"0",className:"mblDomButtonRedBadge",fontSize:16,constructor:function(_8be,node){
if(_8be){
lang.mixin(this,_8be);
}
this.domNode=node?node:_8ba.create("div");
_8b9.add(this.domNode,"mblBadge");
if(this.domNode.className.indexOf("mblDomButton")===-1){
_8b9.add(this.domNode,this.className);
}
if(this.fontSize!==16){
this.domNode.style.fontSize=this.fontSize+"px";
}
_8bb.createDomButton(this.domNode);
this.setValue(this.value);
},getValue:function(){
return this.domNode.firstChild.innerHTML||"";
},setValue:function(_8bf){
this.domNode.firstChild.innerHTML=_8bf;
}});
return has("dojo-bidi")?_8b8("dojox.mobile.Badge",[_8bd,_8bc]):_8bd;
});
},"dojox/mobile/app/List":function(){
define(["dijit","dojo","dojox","dojo/require!dojo/string,dijit/_WidgetBase"],function(_8c0,dojo,_8c1){
dojo.provide("dojox.mobile.app.List");
dojo.experimental("dojox.mobile.app.List");
dojo.require("dojo.string");
dojo.require("dijit._WidgetBase");
(function(){
var _8c2={};
dojo.declare("dojox.mobile.app.List",_8c0._WidgetBase,{items:null,itemTemplate:"",emptyTemplate:"",dividerTemplate:"",dividerFunction:null,labelDelete:"Delete",labelCancel:"Cancel",controller:null,autoDelete:true,enableDelete:true,enableHold:true,formatters:null,_templateLoadCount:0,_mouseDownPos:null,baseClass:"list",constructor:function(){
this._checkLoadComplete=dojo.hitch(this,this._checkLoadComplete);
this._replaceToken=dojo.hitch(this,this._replaceToken);
this._postDeleteAnim=dojo.hitch(this,this._postDeleteAnim);
},postCreate:function(){
var _8c3=this;
if(this.emptyTemplate){
this._templateLoadCount++;
}
if(this.itemTemplate){
this._templateLoadCount++;
}
if(this.dividerTemplate){
this._templateLoadCount++;
}
this.connect(this.domNode,"onmousedown",function(_8c4){
var _8c5=_8c4;
if(_8c4.targetTouches&&_8c4.targetTouches.length>0){
_8c5=_8c4.targetTouches[0];
}
var _8c6=_8c3._getRowNode(_8c4.target);
if(_8c6){
_8c3._setDataInfo(_8c6,_8c4);
_8c3._selectRow(_8c6);
_8c3._mouseDownPos={x:_8c5.pageX,y:_8c5.pageY};
_8c3._dragThreshold=null;
}
});
this.connect(this.domNode,"onmouseup",function(_8c7){
if(_8c7.targetTouches&&_8c7.targetTouches.length>0){
_8c7=_8c7.targetTouches[0];
}
var _8c8=_8c3._getRowNode(_8c7.target);
if(_8c8){
_8c3._setDataInfo(_8c8,_8c7);
if(_8c3._selectedRow){
_8c3.onSelect(_8c8._data,_8c8._idx,_8c8);
}
this._deselectRow();
}
});
if(this.enableDelete){
this.connect(this.domNode,"mousemove",function(_8c9){
dojo.stopEvent(_8c9);
if(!_8c3._selectedRow){
return;
}
var _8ca=_8c3._getRowNode(_8c9.target);
if(_8c3.enableDelete&&_8ca&&!_8c3._deleting){
_8c3.handleDrag(_8c9);
}
});
}
this.connect(this.domNode,"onclick",function(_8cb){
if(_8cb.touches&&_8cb.touches.length>0){
_8cb=_8cb.touches[0];
}
var _8cc=_8c3._getRowNode(_8cb.target,true);
if(_8cc){
_8c3._setDataInfo(_8cc,_8cb);
}
});
this.connect(this.domNode,"mouseout",function(_8cd){
if(_8cd.touches&&_8cd.touches.length>0){
_8cd=_8cd.touches[0];
}
if(_8cd.target==_8c3._selectedRow){
_8c3._deselectRow();
}
});
if(!this.itemTemplate){
throw Error("An item template must be provided to "+this.declaredClass);
}
this._loadTemplate(this.itemTemplate,"itemTemplate",this._checkLoadComplete);
if(this.emptyTemplate){
this._loadTemplate(this.emptyTemplate,"emptyTemplate",this._checkLoadComplete);
}
if(this.dividerTemplate){
this._loadTemplate(this.dividerTemplate,"dividerTemplate",this._checkLoadComplete);
}
},handleDrag:function(_8ce){
var _8cf=_8ce;
if(_8ce.targetTouches&&_8ce.targetTouches.length>0){
_8cf=_8ce.targetTouches[0];
}
var diff=_8cf.pageX-this._mouseDownPos.x;
var _8d0=Math.abs(diff);
if(_8d0>10&&!this._dragThreshold){
this._dragThreshold=dojo.marginBox(this._selectedRow).w*0.6;
if(!this.autoDelete){
this.createDeleteButtons(this._selectedRow);
}
}
this._selectedRow.style.left=(_8d0>10?diff:0)+"px";
if(this._dragThreshold&&this._dragThreshold<_8d0){
this.preDelete(diff);
}
},handleDragCancel:function(){
if(this._deleting){
return;
}
dojo.removeClass(this._selectedRow,"hold");
this._selectedRow.style.left=0;
this._mouseDownPos=null;
this._dragThreshold=null;
this._deleteBtns&&dojo.style(this._deleteBtns,"display","none");
},preDelete:function(_8d1){
var self=this;
this._deleting=true;
dojo.animateProperty({node:this._selectedRow,duration:400,properties:{left:{end:_8d1+((_8d1>0?1:-1)*this._dragThreshold*0.8)}},onEnd:dojo.hitch(this,function(){
if(this.autoDelete){
this.deleteRow(this._selectedRow);
}
})}).play();
},deleteRow:function(row){
dojo.style(row,{visibility:"hidden",minHeight:"0px"});
dojo.removeClass(row,"hold");
this._deleteAnimConn=this.connect(row,"webkitAnimationEnd",this._postDeleteAnim);
dojo.addClass(row,"collapsed");
},_postDeleteAnim:function(_8d2){
if(this._deleteAnimConn){
this.disconnect(this._deleteAnimConn);
this._deleteAnimConn=null;
}
var row=this._selectedRow;
var _8d3=row.nextSibling;
var _8d4=row.previousSibling;
if(_8d4&&_8d4._isDivider){
if(!_8d3||_8d3._isDivider){
_8d4.parentNode.removeChild(_8d4);
}
}
row.parentNode.removeChild(row);
this.onDelete(row._data,row._idx,this.items);
while(_8d3){
if(_8d3._idx){
_8d3._idx--;
}
_8d3=_8d3.nextSibling;
}
dojo.destroy(row);
dojo.query("> *:not(.buttons)",this.domNode).forEach(this.applyClass);
this._deleting=false;
this._deselectRow();
},createDeleteButtons:function(_8d5){
var mb=dojo.marginBox(_8d5);
var pos=dojo._abs(_8d5,true);
if(!this._deleteBtns){
this._deleteBtns=dojo.create("div",{"class":"buttons"},this.domNode);
this.buttons=[];
this.buttons.push(new _8c1.mobile.Button({btnClass:"mblRedButton",label:this.labelDelete}));
this.buttons.push(new _8c1.mobile.Button({btnClass:"mblBlueButton",label:this.labelCancel}));
dojo.place(this.buttons[0].domNode,this._deleteBtns);
dojo.place(this.buttons[1].domNode,this._deleteBtns);
dojo.addClass(this.buttons[0].domNode,"deleteBtn");
dojo.addClass(this.buttons[1].domNode,"cancelBtn");
this._handleButtonClick=dojo.hitch(this._handleButtonClick);
this.connect(this._deleteBtns,"onclick",this._handleButtonClick);
}
dojo.removeClass(this._deleteBtns,"fade out fast");
dojo.style(this._deleteBtns,{display:"",width:mb.w+"px",height:mb.h+"px",top:(_8d5.offsetTop)+"px",left:"0px"});
},onDelete:function(data,_8d6,_8d7){
_8d7.splice(_8d6,1);
if(_8d7.length<1){
this.render();
}
},cancelDelete:function(){
this._deleting=false;
this.handleDragCancel();
},_handleButtonClick:function(_8d8){
if(_8d8.touches&&_8d8.touches.length>0){
_8d8=_8d8.touches[0];
}
var node=_8d8.target;
if(dojo.hasClass(node,"deleteBtn")){
this.deleteRow(this._selectedRow);
}else{
if(dojo.hasClass(node,"cancelBtn")){
this.cancelDelete();
}else{
return;
}
}
dojo.addClass(this._deleteBtns,"fade out");
},applyClass:function(node,idx,_8d9){
dojo.removeClass(node,"first last");
if(idx==0){
dojo.addClass(node,"first");
}
if(idx==_8d9.length-1){
dojo.addClass(node,"last");
}
},_setDataInfo:function(_8da,_8db){
_8db.item=_8da._data;
_8db.index=_8da._idx;
},onSelect:function(data,_8dc,_8dd){
},_selectRow:function(row){
if(this._deleting&&this._selectedRow&&row!=this._selectedRow){
this.cancelDelete();
}
if(!dojo.hasClass(row,"row")){
return;
}
if(this.enableHold||this.enableDelete){
dojo.addClass(row,"hold");
}
this._selectedRow=row;
},_deselectRow:function(){
if(!this._selectedRow||this._deleting){
return;
}
this.handleDragCancel();
dojo.removeClass(this._selectedRow,"hold");
this._selectedRow=null;
},_getRowNode:function(_8de,_8df){
while(_8de&&!_8de._data&&_8de!=this.domNode){
if(!_8df&&dojo.hasClass(_8de,"noclick")){
return null;
}
_8de=_8de.parentNode;
}
return _8de==this.domNode?null:_8de;
},applyTemplate:function(_8e0,data){
return dojo._toDom(dojo.string.substitute(_8e0,data,this._replaceToken,this.formatters||this));
},render:function(){
dojo.query("> *:not(.buttons)",this.domNode).forEach(dojo.destroy);
if(this.items.length<1&&this.emptyTemplate){
dojo.place(dojo._toDom(this.emptyTemplate),this.domNode,"first");
}else{
this.domNode.appendChild(this._renderRange(0,this.items.length));
}
if(dojo.hasClass(this.domNode.parentNode,"mblRoundRect")){
dojo.addClass(this.domNode.parentNode,"mblRoundRectList");
}
var divs=dojo.query("> .row",this.domNode);
if(divs.length>0){
dojo.addClass(divs[0],"first");
dojo.addClass(divs[divs.length-1],"last");
}
},_renderRange:function(_8e1,_8e2){
var rows=[];
var row,i;
var frag=document.createDocumentFragment();
_8e1=Math.max(0,_8e1);
_8e2=Math.min(_8e2,this.items.length);
for(i=_8e1;i<_8e2;i++){
row=this.applyTemplate(this.itemTemplate,this.items[i]);
dojo.addClass(row,"row");
row._data=this.items[i];
row._idx=i;
rows.push(row);
}
if(!this.dividerFunction||!this.dividerTemplate){
for(i=_8e1;i<_8e2;i++){
rows[i]._data=this.items[i];
rows[i]._idx=i;
frag.appendChild(rows[i]);
}
}else{
var _8e3=null;
var _8e4;
var _8e5;
for(i=_8e1;i<_8e2;i++){
rows[i]._data=this.items[i];
rows[i]._idx=i;
_8e4=this.dividerFunction(this.items[i]);
if(_8e4&&_8e4!=_8e3){
_8e5=this.applyTemplate(this.dividerTemplate,{label:_8e4,item:this.items[i]});
_8e5._isDivider=true;
frag.appendChild(_8e5);
_8e3=_8e4;
}
frag.appendChild(rows[i]);
}
}
return frag;
},_replaceToken:function(_8e6,key){
if(key.charAt(0)=="!"){
_8e6=dojo.getObject(key.substr(1),false,_this);
}
if(typeof _8e6=="undefined"){
return "";
}
if(_8e6==null){
return "";
}
return key.charAt(0)=="!"?_8e6:_8e6.toString().replace(/"/g,"&quot;");
},_checkLoadComplete:function(){
this._templateLoadCount--;
if(this._templateLoadCount<1&&this.get("items")){
this.render();
}
},_loadTemplate:function(url,_8e7,_8e8){
if(!url){
_8e8();
return;
}
if(_8c2[url]){
this.set(_8e7,_8c2[url]);
_8e8();
}else{
var _8e9=this;
dojo.xhrGet({url:url,sync:false,handleAs:"text",load:function(text){
_8c2[url]=dojo.trim(text);
_8e9.set(_8e7,_8c2[url]);
_8e8();
}});
}
},_setFormattersAttr:function(_8ea){
this.formatters=_8ea;
},_setItemsAttr:function(_8eb){
this.items=_8eb||[];
if(this._templateLoadCount<1&&_8eb){
this.render();
}
},destroy:function(){
if(this.buttons){
dojo.forEach(this.buttons,function(_8ec){
_8ec.destroy();
});
this.buttons=null;
}
this.inherited(arguments);
}});
})();
});
},"dojo/touch":function(){
define(["./_base/kernel","./aspect","./dom","./dom-class","./_base/lang","./on","./has","./mouse","./domReady","./_base/window"],function(dojo,_8ed,dom,_8ee,lang,on,has,_8ef,_8f0,win){
var _8f1=has("touch");
var ios4=has("ios")<5;
var _8f2=navigator.msPointerEnabled;
var _8f3,_8f4,_8f5,_8f6,_8f7,_8f8,_8f9,_8fa;
var _8fb;
function _8fc(_8fd,_8fe,_8ff){
if(_8f2&&_8ff){
return function(node,_900){
return on(node,_8ff,_900);
};
}else{
if(_8f1){
return function(node,_901){
var _902=on(node,_8fe,_901),_903=on(node,_8fd,function(evt){
if(!_8fb||(new Date()).getTime()>_8fb+1000){
_901.call(this,evt);
}
});
return {remove:function(){
_902.remove();
_903.remove();
}};
};
}else{
return function(node,_904){
return on(node,_8fd,_904);
};
}
}
};
function _905(node){
do{
if(node.dojoClick){
return node.dojoClick;
}
}while(node=node.parentNode);
};
function _906(e,_907,_908){
_8f4=!e.target.disabled&&_905(e.target);
if(_8f4){
_8f5=e.target;
_8f6=e.touches?e.touches[0].pageX:e.clientX;
_8f7=e.touches?e.touches[0].pageY:e.clientY;
_8f8=(typeof _8f4=="object"?_8f4.x:(typeof _8f4=="number"?_8f4:0))||4;
_8f9=(typeof _8f4=="object"?_8f4.y:(typeof _8f4=="number"?_8f4:0))||4;
if(!_8f3){
_8f3=true;
win.doc.addEventListener(_907,function(e){
_8f4=_8f4&&e.target==_8f5&&Math.abs((e.touches?e.touches[0].pageX:e.clientX)-_8f6)<=_8f8&&Math.abs((e.touches?e.touches[0].pageY:e.clientY)-_8f7)<=_8f9;
},true);
win.doc.addEventListener(_908,function(e){
if(_8f4){
_8fa=(new Date()).getTime();
var _909=e.target;
if(_909.tagName==="LABEL"){
_909=dom.byId(_909.getAttribute("for"))||_909;
}
setTimeout(function(){
on.emit(_909,"click",{bubbles:true,cancelable:true,_dojo_click:true});
});
}
},true);
function _90a(type){
win.doc.addEventListener(type,function(e){
if(!e._dojo_click&&(new Date()).getTime()<=_8fa+1000&&!(e.target.tagName=="INPUT"&&_8ee.contains(e.target,"dijitOffScreen"))){
e.stopPropagation();
e.stopImmediatePropagation&&e.stopImmediatePropagation();
if(type=="click"&&(e.target.tagName!="INPUT"||e.target.type=="radio"||e.target.type=="checkbox")&&e.target.tagName!="TEXTAREA"&&e.target.tagName!="AUDIO"&&e.target.tagName!="VIDEO"){
e.preventDefault();
}
}
},true);
};
_90a("click");
_90a("mousedown");
_90a("mouseup");
}
}
};
var _90b;
if(_8f1){
if(_8f2){
_8f0(function(){
win.doc.addEventListener("MSPointerDown",function(evt){
_906(evt,"MSPointerMove","MSPointerUp");
},true);
});
}else{
_8f0(function(){
_90b=win.body();
win.doc.addEventListener("touchstart",function(evt){
_8fb=(new Date()).getTime();
var _90c=_90b;
_90b=evt.target;
on.emit(_90c,"dojotouchout",{relatedTarget:_90b,bubbles:true});
on.emit(_90b,"dojotouchover",{relatedTarget:_90c,bubbles:true});
_906(evt,"touchmove","touchend");
},true);
function _90d(evt){
var _90e=lang.delegate(evt,{bubbles:true});
if(has("ios")>=6){
_90e.touches=evt.touches;
_90e.altKey=evt.altKey;
_90e.changedTouches=evt.changedTouches;
_90e.ctrlKey=evt.ctrlKey;
_90e.metaKey=evt.metaKey;
_90e.shiftKey=evt.shiftKey;
_90e.targetTouches=evt.targetTouches;
}
return _90e;
};
on(win.doc,"touchmove",function(evt){
_8fb=(new Date()).getTime();
var _90f=win.doc.elementFromPoint(evt.pageX-(ios4?0:win.global.pageXOffset),evt.pageY-(ios4?0:win.global.pageYOffset));
if(_90f){
if(_90b!==_90f){
on.emit(_90b,"dojotouchout",{relatedTarget:_90f,bubbles:true});
on.emit(_90f,"dojotouchover",{relatedTarget:_90b,bubbles:true});
_90b=_90f;
}
on.emit(_90f,"dojotouchmove",_90d(evt));
}
});
on(win.doc,"touchend",function(evt){
_8fb=(new Date()).getTime();
var node=win.doc.elementFromPoint(evt.pageX-(ios4?0:win.global.pageXOffset),evt.pageY-(ios4?0:win.global.pageYOffset))||win.body();
on.emit(node,"dojotouchend",_90d(evt));
});
});
}
}
var _910={press:_8fc("mousedown","touchstart","MSPointerDown"),move:_8fc("mousemove","dojotouchmove","MSPointerMove"),release:_8fc("mouseup","dojotouchend","MSPointerUp"),cancel:_8fc(_8ef.leave,"touchcancel",_8f1?"MSPointerCancel":null),over:_8fc("mouseover","dojotouchover","MSPointerOver"),out:_8fc("mouseout","dojotouchout","MSPointerOut"),enter:_8ef._eventHandler(_8fc("mouseover","dojotouchover","MSPointerOver")),leave:_8ef._eventHandler(_8fc("mouseout","dojotouchout","MSPointerOut"))};
1&&(dojo.touch=_910);
return _910;
});
},"dojox/mobile/Overlay":function(){
define(["dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/window","dijit/_WidgetBase","dojo/_base/array","dijit/registry","dojo/touch","./_css3"],function(_911,lang,has,win,_912,_913,_914,_915,_916,_917,_918,_919,css3){
return _911("dojox.mobile.Overlay",_916,{baseClass:"mblOverlay mblOverlayHidden",buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},_reposition:function(){
var _91a=_913.position(this.domNode);
var vp=_915.getBox();
if((_91a.y+_91a.h)!=vp.h||(_914.get(this.domNode,"position")!="absolute"&&has("android")<3)){
_91a.y=vp.t+vp.h-_91a.h;
_914.set(this.domNode,{position:"absolute",top:_91a.y+"px",bottom:"auto"});
}
return _91a;
},show:function(_91b){
_917.forEach(_918.findWidgets(this.domNode),function(w){
if(w&&w.height=="auto"&&typeof w.resize=="function"){
w.resize();
}
});
var _91c=this._reposition();
if(_91b){
var _91d=_913.position(_91b);
if(_91c.y<_91d.y){
win.global.scrollBy(0,_91d.y+_91d.h-_91c.y);
this._reposition();
}
}
var _91e=this.domNode;
_912.replace(_91e,["mblCoverv","mblIn"],["mblOverlayHidden","mblRevealv","mblOut","mblReverse","mblTransition"]);
this.defer(function(){
var _91f=this.connect(_91e,css3.name("transitionEnd"),function(){
this.disconnect(_91f);
_912.remove(_91e,["mblCoverv","mblIn","mblTransition"]);
this._reposition();
});
_912.add(_91e,"mblTransition");
},100);
var _920=false;
this._moveHandle=this.connect(win.doc.documentElement,_919.move,function(){
_920=true;
});
this._repositionTimer=setInterval(lang.hitch(this,function(){
if(_920){
_920=false;
return;
}
this._reposition();
}),50);
return _91c;
},hide:function(){
var _921=this.domNode;
if(this._moveHandle){
this.disconnect(this._moveHandle);
this._moveHandle=null;
clearInterval(this._repositionTimer);
this._repositionTimer=null;
}
if(has("css3-animations")){
_912.replace(_921,["mblRevealv","mblOut","mblReverse"],["mblCoverv","mblIn","mblOverlayHidden","mblTransition"]);
this.defer(function(){
var _922=this.connect(_921,css3.name("transitionEnd"),function(){
this.disconnect(_922);
_912.replace(_921,["mblOverlayHidden"],["mblRevealv","mblOut","mblReverse","mblTransition"]);
});
_912.add(_921,"mblTransition");
},100);
}else{
_912.replace(_921,["mblOverlayHidden"],["mblCoverv","mblIn","mblRevealv","mblOut","mblReverse"]);
}
},onBlur:function(e){
return false;
}});
});
},"dojo/require":function(){
define(["./_base/loader"],function(_923){
return {dynamic:0,normalize:function(id){
return id;
},load:_923.require};
});
},"dojox/mobile/IconItem":function(){
define(["dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./_ItemBase","./Badge","./TransitionEvent","./iconUtils","./lazyLoadUtils","./viewRegistry","./_css3","dojo/has!dojo-bidi?dojox/mobile/bidi/IconItem"],function(_924,_925,lang,has,win,_926,_927,_928,_929,_92a,_92b,_92c,_92d,_92e,_92f,css3,_930){
var _931=_924(has("dojo-bidi")?"dojox.mobile.NonBidiIconItem":"dojox.mobile.IconItem",_92a,{lazy:false,requires:"",timeout:10,content:"",badge:"",badgeClass:"mblDomButtonRedBadge",deletable:true,deleteIcon:"",tag:"li",paramsToInherit:"transition,icon,deleteIcon,badgeClass,deleteIconTitle,deleteIconRole",baseClass:"mblIconItem",_selStartMethod:"touch",_selEndMethod:"none",destroy:function(){
if(this.badgeObj){
delete this.badgeObj;
}
this.inherited(arguments);
},buildRendering:function(){
this.domNode=this.srcNodeRef||_927.create(this.tag);
if(this.srcNodeRef){
this._tmpNode=_927.create("div");
for(var i=0,len=this.srcNodeRef.childNodes.length;i<len;i++){
this._tmpNode.appendChild(this.srcNodeRef.firstChild);
}
}
this.iconDivNode=_927.create("div",{className:"mblIconArea"},this.domNode);
this.iconParentNode=_927.create("div",{className:"mblIconAreaInner"},this.iconDivNode);
this.labelNode=_927.create("span",{className:"mblIconAreaTitle"},this.iconDivNode);
this.inherited(arguments);
},startup:function(){
if(this._started){
return;
}
var p=this.getParent();
require([p.iconItemPaneClass],lang.hitch(this,function(_932){
var w=this.paneWidget=new _932(p.iconItemPaneProps);
this.containerNode=w.containerNode;
if(this._tmpNode){
for(var i=0,len=this._tmpNode.childNodes.length;i<len;i++){
w.containerNode.appendChild(this._tmpNode.firstChild);
}
this._tmpNode=null;
}
p.paneContainerWidget.addChild(w,this.getIndexInParent());
w.set("label",this.label);
this._clickCloseHandle=this.connect(w.closeIconNode,"onclick","_closeIconClicked");
this._keydownCloseHandle=this.connect(w.closeIconNode,"onkeydown","_closeIconClicked");
}));
this.inherited(arguments);
if(!this._isOnLine){
this._isOnLine=true;
this.set("icon",this._pendingIcon!==undefined?this._pendingIcon:this.icon);
delete this._pendingIcon;
}
if(!this.icon&&p.defaultIcon){
this.set("icon",p.defaultIcon);
}
this._dragstartHandle=this.connect(this.domNode,"ondragstart",_925.stop);
this.connect(this.domNode,"onkeydown","_onClick");
},highlight:function(_933){
_926.add(this.iconDivNode,"mblVibrate");
_933=(_933!==undefined)?_933:this.timeout;
if(_933>0){
var _934=this;
_934.defer(function(){
_934.unhighlight();
},_933*1000);
}
},unhighlight:function(){
_926.remove(this.iconDivNode,"mblVibrate");
},isOpen:function(e){
return this.paneWidget.isOpen();
},_onClick:function(e){
if(this.getParent().isEditing||e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
this.defaultClickAction(e);
},onClick:function(){
},_onNewWindowOpened:function(e){
this.set("selected",false);
},_prepareForTransition:function(e,_935){
if(_935){
this.defer(function(d){
this.set("selected",false);
},1500);
return true;
}else{
if(this.getParent().transition==="below"&&this.isOpen()){
this.close();
}else{
this.open(e);
}
return false;
}
},_closeIconClicked:function(e){
if(e){
if(e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.closeIconClicked(e)===false){
return;
}
this.defer(function(d){
this._closeIconClicked();
});
return;
}
this.close();
},closeIconClicked:function(){
},open:function(e){
var _936=this.getParent();
if(this.transition==="below"){
if(_936.single){
_936.closeAll();
}
this._open_1();
}else{
_936._opening=this;
if(_936.single){
this.paneWidget.closeHeaderNode.style.display="none";
if(!this.isOpen()){
_936.closeAll();
}
_936.appView._heading.set("label",this.label);
}
this.moveTo=_936.id+"_mblApplView";
new _92c(this.domNode,this.getTransOpts(),e).dispatch();
}
},_open_1:function(){
this.paneWidget.show();
this.unhighlight();
if(this.lazy){
_92e.instantiateLazyWidgets(this.containerNode,this.requires);
this.lazy=false;
}
this.scrollIntoView(this.paneWidget.domNode);
this.onOpen();
},scrollIntoView:function(node){
var s=_92f.getEnclosingScrollable(node);
if(s){
var dim=s.getDim();
if(dim.c.h>=dim.d.h){
s.scrollIntoView(node,true);
}
}else{
win.global.scrollBy(0,_928.position(node,false).y);
}
},close:function(_937){
if(!this.isOpen()){
return;
}
this.set("selected",false);
if(has("css3-animations")&&!_937){
var _938=this.paneWidget.domNode;
if(this.getParent().transition=="below"){
_926.add(_938,"mblCloseContent mblShrink");
var _939=_928.position(_938,true);
var _93a=_928.position(this.domNode,true);
var _93b=(_93a.x+_93a.w/2-_939.x)+"px "+(_93a.y+_93a.h/2-_939.y)+"px";
_929.set(_938,css3.add({},{transformOrigin:_93b}));
}else{
_926.add(_938,"mblCloseContent mblShrink0");
}
}else{
this.paneWidget.hide();
}
this.onClose();
},onOpen:function(){
},onClose:function(){
},_setLabelAttr:function(text){
this.label=text;
var s=this._cv?this._cv(text):text;
this.labelNode.innerHTML=s;
if(this.paneWidget){
this.paneWidget.set("label",text);
}
},_getBadgeAttr:function(){
return this.badgeObj?this.badgeObj.getValue():null;
},_setBadgeAttr:function(_93c){
if(!this.badgeObj){
this.badgeObj=new _92b({fontSize:14,className:this.badgeClass});
_929.set(this.badgeObj.domNode,{position:"absolute",top:"-2px",right:"2px"});
}
this.badgeObj.setValue(_93c);
if(_93c){
this.iconDivNode.appendChild(this.badgeObj.domNode);
}else{
this.iconDivNode.removeChild(this.badgeObj.domNode);
}
},_setDeleteIconAttr:function(icon){
if(!this.getParent()){
return;
}
this._set("deleteIcon",icon);
icon=this.deletable?icon:"";
this.deleteIconNode=_92d.setIcon(icon,this.deleteIconPos,this.deleteIconNode,this.deleteIconTitle||this.alt,this.iconDivNode);
if(this.deleteIconNode){
_926.add(this.deleteIconNode,"mblIconItemDeleteIcon");
if(this.deleteIconRole){
this.deleteIconNode.setAttribute("role",this.deleteIconRole);
}
}
},_setContentAttr:function(data){
var root;
if(!this.paneWidget){
if(!this._tmpNode){
this._tmpNode=_927.create("div");
}
root=this._tmpNode;
}else{
root=this.paneWidget.containerNode;
}
if(typeof data==="object"){
_927.empty(root);
root.appendChild(data);
}else{
root.innerHTML=data;
}
},_setSelectedAttr:function(_93d){
this.inherited(arguments);
_929.set(this.iconNode,"opacity",_93d?this.getParent().pressedIconOpacity:1);
}});
return has("dojo-bidi")?_924("dojox.mobile.IconItem",[_931,_930]):_931;
});
},"dojox/mobile/app/ListSelector":function(){
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx"],function(_93e,dojo,_93f){
dojo.provide("dojox.mobile.app.ListSelector");
dojo.experimental("dojox.mobile.app.ListSelector");
dojo.require("dojox.mobile.app._Widget");
dojo.require("dojo.fx");
dojo.declare("dojox.mobile.app.ListSelector",_93f.mobile.app._Widget,{data:null,controller:null,onChoose:null,destroyOnHide:false,_setDataAttr:function(data){
this.data=data;
if(this.data){
this.render();
}
},postCreate:function(){
dojo.addClass(this.domNode,"listSelector");
var _940=this;
this.connect(this.domNode,"onclick",function(_941){
if(!dojo.hasClass(_941.target,"listSelectorRow")){
return;
}
if(_940.onChoose){
_940.onChoose(_940.data[_941.target._idx].value);
}
_940.hide();
});
this.connect(this.domNode,"onmousedown",function(_942){
if(!dojo.hasClass(_942.target,"listSelectorRow")){
return;
}
dojo.addClass(_942.target,"listSelectorRow-selected");
});
this.connect(this.domNode,"onmouseup",function(_943){
if(!dojo.hasClass(_943.target,"listSelectorRow")){
return;
}
dojo.removeClass(_943.target,"listSelectorRow-selected");
});
this.connect(this.domNode,"onmouseout",function(_944){
if(!dojo.hasClass(_944.target,"listSelectorRow")){
return;
}
dojo.removeClass(_944.target,"listSelectorRow-selected");
});
var _945=this.controller.getWindowSize();
this.mask=dojo.create("div",{"class":"dialogUnderlayWrapper",innerHTML:"<div class=\"dialogUnderlay\"></div>"},this.controller.assistant.domNode);
this.connect(this.mask,"onclick",function(){
_940.onChoose&&_940.onChoose();
_940.hide();
});
},show:function(_946){
var _947;
var _948=this.controller.getWindowSize();
var _949;
if(_946){
_949=dojo._abs(_946);
_947=_949;
}else{
_947.x=_948.w/2;
_947.y=200;
}
dojo.style(this.domNode,{opacity:0,display:"",width:Math.floor(_948.w*0.8)+"px"});
var _94a=0;
dojo.query(">",this.domNode).forEach(function(node){
dojo.style(node,{"float":"left"});
_94a=Math.max(_94a,dojo.marginBox(node).w);
dojo.style(node,{"float":"none"});
});
_94a=Math.min(_94a,Math.round(_948.w*0.8))+dojo.style(this.domNode,"paddingLeft")+dojo.style(this.domNode,"paddingRight")+1;
dojo.style(this.domNode,"width",_94a+"px");
var _94b=dojo.marginBox(this.domNode).h;
var _94c=this;
var _94d=_949?Math.max(30,_949.y-_94b-10):this.getScroll().y+30;
var _94e=dojo.animateProperty({node:this.domNode,duration:400,properties:{width:{start:1,end:_94a},height:{start:1,end:_94b},top:{start:_947.y,end:_94d},left:{start:_947.x,end:(_948.w/2-_94a/2)},opacity:{start:0,end:1},fontSize:{start:1}},onEnd:function(){
dojo.style(_94c.domNode,"width","inherit");
}});
var _94f=dojo.fadeIn({node:this.mask,duration:400});
dojo.fx.combine([_94e,_94f]).play();
},hide:function(){
var _950=this;
var _951=dojo.animateProperty({node:this.domNode,duration:500,properties:{width:{end:1},height:{end:1},opacity:{end:0},fontSize:{end:1}},onEnd:function(){
if(_950.get("destroyOnHide")){
_950.destroy();
}
}});
var _952=dojo.fadeOut({node:this.mask,duration:400});
dojo.fx.combine([_951,_952]).play();
},render:function(){
dojo.empty(this.domNode);
dojo.style(this.domNode,"opacity",0);
var row;
for(var i=0;i<this.data.length;i++){
row=dojo.create("div",{"class":"listSelectorRow "+(this.data[i].className||""),innerHTML:this.data[i].label},this.domNode);
row._idx=i;
if(i==0){
dojo.addClass(row,"first");
}
if(i==this.data.length-1){
dojo.addClass(row,"last");
}
}
},destroy:function(){
this.inherited(arguments);
dojo.destroy(this.mask);
}});
});
},"dojo/hccss":function(){
define(["require","./_base/config","./dom-class","./dom-style","./has","./domReady","./_base/window"],function(_953,_954,_955,_956,has,_957,win){
has.add("highcontrast",function(){
var div=win.doc.createElement("div");
div.style.cssText="border: 1px solid; border-color:red green; position: absolute; height: 5px; top: -999px;"+"background-image: url("+(_954.blankGif||_953.toUrl("./resources/blank.gif"))+");";
win.body().appendChild(div);
var cs=_956.getComputedStyle(div),_958=cs.backgroundImage,hc=(cs.borderTopColor==cs.borderRightColor)||(_958&&(_958=="none"||_958=="url(invalid-url:)"));
if(has("ie")<=8){
div.outerHTML="";
}else{
win.body().removeChild(div);
}
return hc;
});
_957(function(){
if(has("highcontrast")){
_955.add(win.body(),"dj_a11y");
}
});
return has;
});
},"dojo/string":function(){
define(["./_base/kernel","./_base/lang"],function(_959,lang){
var _95a={};
lang.setObject("dojo.string",_95a);
_95a.rep=function(str,num){
if(num<=0||!str){
return "";
}
var buf=[];
for(;;){
if(num&1){
buf.push(str);
}
if(!(num>>=1)){
break;
}
str+=str;
}
return buf.join("");
};
_95a.pad=function(text,size,ch,end){
if(!ch){
ch="0";
}
var out=String(text),pad=_95a.rep(ch,Math.ceil((size-out.length)/ch.length));
return end?out+pad:pad+out;
};
_95a.substitute=function(_95b,map,_95c,_95d){
_95d=_95d||_959.global;
_95c=_95c?lang.hitch(_95d,_95c):function(v){
return v;
};
return _95b.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g,function(_95e,key,_95f){
var _960=lang.getObject(key,false,map);
if(_95f){
_960=lang.getObject(_95f,false,_95d).call(_95d,_960,key);
}
return _95c(_960,key).toString();
});
};
_95a.trim=String.prototype.trim?lang.trim:function(str){
str=str.replace(/^\s+/,"");
for(var i=str.length-1;i>=0;i--){
if(/\S/.test(str.charAt(i))){
str=str.substring(0,i+1);
break;
}
}
return str;
};
return _95a;
});
},"dojox/mobile/EdgeToEdgeCategory":function(){
define(["dojo/_base/declare","./RoundRectCategory"],function(_961,_962){
return _961("dojox.mobile.EdgeToEdgeCategory",_962,{buildRendering:function(){
this.inherited(arguments);
this.domNode.className="mblEdgeToEdgeCategory";
if(this.type&&this.type=="long"){
this.domNode.className+=" mblEdgeToEdgeCategoryLong";
}
}});
});
},"dojox/mobile/TextBox":function(){
define(["dojo/_base/declare","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_FormValueMixin","dijit/form/_TextBoxMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TextBox"],function(_963,_964,_965,_966,_967,has,_968){
var _969=_963(has("dojo-bidi")?"dojox.mobile.NonBidiTextBox":"dojox.mobile.TextBox",[_965,_966,_967],{baseClass:"mblTextBox",_setTypeAttr:null,_setPlaceHolderAttr:function(_96a){
_96a=this._cv?this._cv(_96a):_96a;
this._set("placeHolder",_96a);
this.textbox.setAttribute("placeholder",_96a);
},buildRendering:function(){
if(!this.srcNodeRef){
this.srcNodeRef=_964.create("input",{"type":this.type});
}
this.inherited(arguments);
this.textbox=this.focusNode=this.domNode;
},postCreate:function(){
this.inherited(arguments);
this.connect(this.textbox,"onmouseup",function(){
this._mouseIsDown=false;
});
this.connect(this.textbox,"onmousedown",function(){
this._mouseIsDown=true;
});
this.connect(this.textbox,"onfocus",function(e){
this._onFocus(this._mouseIsDown?"mouse":e);
this._mouseIsDown=false;
});
this.connect(this.textbox,"onblur","_onBlur");
}});
return has("dojo-bidi")?_963("dojox.mobile.TextBox",[_969,_968]):_969;
});
},"dojox/mobile/TextArea":function(){
define(["dojo/_base/declare","dojo/dom-construct","./TextBox"],function(_96b,_96c,_96d){
return _96b("dojox.mobile.TextArea",_96d,{baseClass:"mblTextArea",postMixInProperties:function(){
if(!this.value&&this.srcNodeRef){
this.value=this.srcNodeRef.value;
}
this.inherited(arguments);
},buildRendering:function(){
if(!this.srcNodeRef){
this.srcNodeRef=_96c.create("textarea",{});
}
this.inherited(arguments);
}});
});
},"dijit/registry":function(){
define(["dojo/_base/array","dojo/sniff","dojo/_base/window","./main"],function(_96e,has,win,_96f){
var _970={},hash={};
var _971={length:0,add:function(_972){
if(hash[_972.id]){
throw new Error("Tried to register widget with id=="+_972.id+" but that id is already registered");
}
hash[_972.id]=_972;
this.length++;
},remove:function(id){
if(hash[id]){
delete hash[id];
this.length--;
}
},byId:function(id){
return typeof id=="string"?hash[id]:id;
},byNode:function(node){
return hash[node.getAttribute("widgetId")];
},toArray:function(){
var ar=[];
for(var id in hash){
ar.push(hash[id]);
}
return ar;
},getUniqueId:function(_973){
var id;
do{
id=_973+"_"+(_973 in _970?++_970[_973]:_970[_973]=0);
}while(hash[id]);
return _96f._scopeName=="dijit"?id:_96f._scopeName+"_"+id;
},findWidgets:function(root,_974){
var _975=[];
function _976(root){
for(var node=root.firstChild;node;node=node.nextSibling){
if(node.nodeType==1){
var _977=node.getAttribute("widgetId");
if(_977){
var _978=hash[_977];
if(_978){
_975.push(_978);
}
}else{
if(node!==_974){
_976(node);
}
}
}
}
};
_976(root);
return _975;
},_destroyAll:function(){
_96f._curFocus=null;
_96f._prevFocus=null;
_96f._activeStack=[];
_96e.forEach(_971.findWidgets(win.body()),function(_979){
if(!_979._destroyed){
if(_979.destroyRecursive){
_979.destroyRecursive();
}else{
if(_979.destroy){
_979.destroy();
}
}
}
});
},getEnclosingWidget:function(node){
while(node){
var id=node.nodeType==1&&node.getAttribute("widgetId");
if(id){
return hash[id];
}
node=node.parentNode;
}
return null;
},_hash:hash};
_96f.registry=_971;
return _971;
});
},"dijit/Destroyable":function(){
define(["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(_97a,_97b,_97c){
return _97c("dijit.Destroyable",null,{destroy:function(_97d){
this._destroyed=true;
},own:function(){
_97a.forEach(arguments,function(_97e){
var _97f="destroyRecursive" in _97e?"destroyRecursive":"destroy" in _97e?"destroy":"remove";
var odh=_97b.before(this,"destroy",function(_980){
_97e[_97f](_980);
});
var hdh=_97b.after(_97e,_97f,function(){
odh.remove();
hdh.remove();
},true);
},this);
return arguments;
}});
});
},"dijit/_base/manager":function(){
define(["dojo/_base/array","dojo/_base/config","dojo/_base/lang","../registry","../main"],function(_981,_982,lang,_983,_984){
var _985={};
_981.forEach(["byId","getUniqueId","findWidgets","_destroyAll","byNode","getEnclosingWidget"],function(name){
_985[name]=_983[name];
});
lang.mixin(_985,{defaultDuration:_982["defaultDuration"]||200});
lang.mixin(_984,_985);
return _984;
});
},"dijit/_base/place":function(){
define(["dojo/_base/array","dojo/_base/lang","dojo/window","../place","../main"],function(_986,lang,_987,_988,_989){
var _98a={};
_98a.getViewport=function(){
return _987.getBox();
};
_98a.placeOnScreen=_988.at;
_98a.placeOnScreenAroundElement=function(node,_98b,_98c,_98d){
var _98e;
if(lang.isArray(_98c)){
_98e=_98c;
}else{
_98e=[];
for(var key in _98c){
_98e.push({aroundCorner:key,corner:_98c[key]});
}
}
return _988.around(node,_98b,_98e,true,_98d);
};
_98a.placeOnScreenAroundNode=_98a.placeOnScreenAroundElement;
_98a.placeOnScreenAroundRectangle=_98a.placeOnScreenAroundElement;
_98a.getPopupAroundAlignment=function(_98f,_990){
var _991={};
_986.forEach(_98f,function(pos){
var ltr=_990;
switch(pos){
case "after":
_991[_990?"BR":"BL"]=_990?"BL":"BR";
break;
case "before":
_991[_990?"BL":"BR"]=_990?"BR":"BL";
break;
case "below-alt":
ltr=!ltr;
case "below":
_991[ltr?"BL":"BR"]=ltr?"TL":"TR";
_991[ltr?"BR":"BL"]=ltr?"TR":"TL";
break;
case "above-alt":
ltr=!ltr;
case "above":
default:
_991[ltr?"TL":"TR"]=ltr?"BL":"BR";
_991[ltr?"TR":"TL"]=ltr?"BR":"BL";
break;
}
});
return _991;
};
lang.mixin(_989,_98a);
return _989;
});
},"dijit/form/_ExpandingTextAreaMixin":function(){
define(["dojo/_base/declare","dojo/dom-construct","dojo/has","dojo/_base/lang","dojo/on","dojo/_base/window","../Viewport"],function(_992,_993,has,lang,on,win,_994){
has.add("textarea-needs-help-shrinking",function(){
var body=win.body(),te=_993.create("textarea",{rows:"5",cols:"20",value:" ",style:{zoom:1,fontSize:"12px",height:"96px",overflow:"hidden",visibility:"hidden",position:"absolute",border:"5px solid white",margin:"0",padding:"0",boxSizing:"border-box",MsBoxSizing:"border-box",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box"}},body,"last");
var _995=te.scrollHeight>=te.clientHeight;
body.removeChild(te);
return _995;
});
return _992("dijit.form._ExpandingTextAreaMixin",null,{_setValueAttr:function(){
this.inherited(arguments);
this.resize();
},postCreate:function(){
this.inherited(arguments);
var _996=this.textbox;
_996.style.overflowY="hidden";
this.own(on(_996,"focus, resize",lang.hitch(this,"_resizeLater")));
},startup:function(){
this.inherited(arguments);
this.own(_994.on("resize",lang.hitch(this,"_resizeLater")));
this._resizeLater();
},_onInput:function(e){
this.inherited(arguments);
this.resize();
},_estimateHeight:function(){
var _997=this.textbox;
_997.rows=(_997.value.match(/\n/g)||[]).length+1;
},_resizeLater:function(){
this.defer("resize");
},resize:function(){
var _998=this.textbox;
function _999(){
var _99a=false;
if(_998.value===""){
_998.value=" ";
_99a=true;
}
var sh=_998.scrollHeight;
if(_99a){
_998.value="";
}
return sh;
};
if(_998.style.overflowY=="hidden"){
_998.scrollTop=0;
}
if(this.busyResizing){
return;
}
this.busyResizing=true;
if(_999()||_998.offsetHeight){
var newH=_999()+Math.max(_998.offsetHeight-_998.clientHeight,0);
var _99b=newH+"px";
if(_99b!=_998.style.height){
_998.style.height=_99b;
_998.rows=1;
}
if(has("textarea-needs-help-shrinking")){
var _99c=_999(),_99d=_99c,_99e=_998.style.minHeight,_99f=4,_9a0,_9a1=_998.scrollTop;
_998.style.minHeight=_99b;
_998.style.height="auto";
while(newH>0){
_998.style.minHeight=Math.max(newH-_99f,4)+"px";
_9a0=_999();
var _9a2=_99d-_9a0;
newH-=_9a2;
if(_9a2<_99f){
break;
}
_99d=_9a0;
_99f<<=1;
}
_998.style.height=newH+"px";
_998.style.minHeight=_99e;
_998.scrollTop=_9a1;
}
_998.style.overflowY=_999()>_998.clientHeight?"auto":"hidden";
if(_998.style.overflowY=="hidden"){
_998.scrollTop=0;
}
}else{
this._estimateHeight();
}
this.busyResizing=false;
}});
});
},"dojox/mobile/View":function(){
define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./ViewController","./common","./transition","./viewRegistry","./_css3"],function(_9a3,_9a4,_9a5,_9a6,lang,has,win,_9a7,dom,_9a8,_9a9,_9aa,_9ab,_9ac,_9ad,_9ae,_9af,_9b0,_9b1,_9b2,_9b3,css3){
var dm=lang.getObject("dojox.mobile",true);
return _9a6("dojox.mobile.View",[_9af,_9ae,_9ad],{selected:false,keepScrollPos:true,tag:"div",baseClass:"mblView",constructor:function(_9b4,node){
if(node){
dom.byId(node).style.visibility="hidden";
}
},destroy:function(){
_9b3.remove(this.id);
this.inherited(arguments);
},buildRendering:function(){
if(!this.templateString){
this.domNode=this.containerNode=this.srcNodeRef||_9a9.create(this.tag);
}
this._animEndHandle=this.connect(this.domNode,css3.name("animationEnd"),"onAnimationEnd");
this._animStartHandle=this.connect(this.domNode,css3.name("animationStart"),"onAnimationStart");
if(!_9a4["mblCSS3Transition"]){
this._transEndHandle=this.connect(this.domNode,css3.name("transitionEnd"),"onAnimationEnd");
}
if(has("mblAndroid3Workaround")){
_9ab.set(this.domNode,css3.name("transformStyle"),"preserve-3d");
}
_9b3.add(this);
this.inherited(arguments);
},startup:function(){
if(this._started){
return;
}
if(this._visible===undefined){
var _9b5=this.getSiblingViews();
var ids=location.hash&&location.hash.substring(1).split(/,/);
var _9b6,_9b7,_9b8;
_9a3.forEach(_9b5,function(v,i){
if(_9a3.indexOf(ids,v.id)!==-1){
_9b6=v;
}
if(i==0){
_9b8=v;
}
if(v.selected){
_9b7=v;
}
v._visible=false;
},this);
(_9b6||_9b7||_9b8)._visible=true;
}
if(this._visible){
this.show(true,true);
this.defer(function(){
this.onStartView();
_9a5.publish("/dojox/mobile/startView",[this]);
});
}
if(this.domNode.style.visibility!="visible"){
this.domNode.style.visibility="visible";
}
this.inherited(arguments);
var _9b9=this.getParent();
if(!_9b9||!_9b9.resize){
this.resize();
}
if(!this._visible){
this.hide();
}
},resize:function(){
_9a3.forEach(this.getChildren(),function(_9ba){
if(_9ba.resize){
_9ba.resize();
}
});
},onStartView:function(){
},onBeforeTransitionIn:function(_9bb,dir,_9bc,_9bd,_9be){
},onAfterTransitionIn:function(_9bf,dir,_9c0,_9c1,_9c2){
},onBeforeTransitionOut:function(_9c3,dir,_9c4,_9c5,_9c6){
},onAfterTransitionOut:function(_9c7,dir,_9c8,_9c9,_9ca){
},_clearClasses:function(node){
if(!node){
return;
}
var _9cb=[];
_9a3.forEach(lang.trim(node.className||"").split(/\s+/),function(c){
if(c.match(/^mbl\w*View$/)||c.indexOf("mbl")===-1){
_9cb.push(c);
}
},this);
node.className=_9cb.join(" ");
},_fixViewState:function(_9cc){
var _9cd=this.domNode.parentNode.childNodes;
for(var i=0;i<_9cd.length;i++){
var n=_9cd[i];
if(n.nodeType===1&&_9a8.contains(n,"mblView")){
this._clearClasses(n);
}
}
this._clearClasses(_9cc);
var _9ce=_9ac.byNode(_9cc);
if(_9ce){
_9ce._inProgress=false;
}
},convertToId:function(_9cf){
if(typeof (_9cf)=="string"){
return _9cf.replace(/^#?([^&?]+).*/,"$1");
}
return _9cf;
},_isBookmarkable:function(_9d0){
return _9d0.moveTo&&(_9a4["mblForceBookmarkable"]||_9d0.moveTo.charAt(0)==="#")&&!_9d0.hashchange;
},performTransition:function(_9d1,_9d2,_9d3,_9d4,_9d5){
if(this._inProgress){
return;
}
this._inProgress=true;
var _9d6,_9d7;
if(_9d1&&typeof (_9d1)==="object"){
_9d6=_9d1;
_9d7=_9d2;
}else{
_9d6={moveTo:_9d1,transitionDir:_9d2,transition:_9d3,context:_9d4,method:_9d5};
_9d7=[];
for(var i=5;i<arguments.length;i++){
_9d7.push(arguments[i]);
}
}
this._detail=_9d6;
this._optArgs=_9d7;
this._arguments=[_9d6.moveTo,_9d6.transitionDir,_9d6.transition,_9d6.context,_9d6.method];
if(_9d6.moveTo==="#"){
return;
}
var _9d8;
if(_9d6.moveTo){
_9d8=this.convertToId(_9d6.moveTo);
}else{
if(!this._dummyNode){
this._dummyNode=win.doc.createElement("div");
win.body().appendChild(this._dummyNode);
}
_9d8=this._dummyNode;
}
if(this.addTransitionInfo&&typeof (_9d6.moveTo)=="string"&&this._isBookmarkable(_9d6)){
this.addTransitionInfo(this.id,_9d6.moveTo,{transitionDir:_9d6.transitionDir,transition:_9d6.transition});
}
var _9d9=this.domNode;
var _9da=_9d9.offsetTop;
_9d8=this.toNode=dom.byId(_9d8);
if(!_9d8){
return;
}
_9d8.style.visibility="hidden";
_9d8.style.display="";
this._fixViewState(_9d8);
var _9db=_9ac.byNode(_9d8);
if(_9db){
if(_9a4["mblAlwaysResizeOnTransition"]||!_9db._resized){
_9b1.resizeAll(null,_9db);
_9db._resized=true;
}
if(_9d6.transition&&_9d6.transition!="none"){
_9db._addTransitionPaddingTop(_9da);
}
_9db.load&&_9db.load();
_9db.movedFrom=_9d9.id;
}
if(has("mblAndroidWorkaround")&&!_9a4["mblCSS3Transition"]&&_9d6.transition&&_9d6.transition!="none"){
_9ab.set(_9d8,css3.name("transformStyle"),"preserve-3d");
_9ab.set(_9d9,css3.name("transformStyle"),"preserve-3d");
_9a8.add(_9d8,"mblAndroidWorkaround");
}
this.onBeforeTransitionOut.apply(this,this._arguments);
_9a5.publish("/dojox/mobile/beforeTransitionOut",[this].concat(lang._toArray(this._arguments)));
if(_9db){
if(this.keepScrollPos&&!this.getParent()){
var _9dc=win.body().scrollTop||win.doc.documentElement.scrollTop||win.global.pageYOffset||0;
_9d9._scrollTop=_9dc;
var _9dd=(_9d6.transitionDir==1)?0:(_9d8._scrollTop||0);
_9d8.style.top="0px";
if(_9dc>1||_9dd!==0){
_9d9.style.top=_9dd-_9dc+"px";
if(_9a4["mblHideAddressBar"]!==false){
this.defer(function(){
win.global.scrollTo(0,(_9dd||1));
});
}
}
}else{
_9d8.style.top="0px";
}
_9db.onBeforeTransitionIn.apply(_9db,this._arguments);
_9a5.publish("/dojox/mobile/beforeTransitionIn",[_9db].concat(lang._toArray(this._arguments)));
}
_9d8.style.display="none";
_9d8.style.visibility="visible";
_9b1.fromView=this;
_9b1.toView=_9db;
this._doTransition(_9d9,_9d8,_9d6.transition,_9d6.transitionDir);
},_addTransitionPaddingTop:function(_9de){
this.containerNode.style.paddingTop=_9de+"px";
},_removeTransitionPaddingTop:function(){
this.containerNode.style.paddingTop="";
},_toCls:function(s){
return "mbl"+s.charAt(0).toUpperCase()+s.substring(1);
},_doTransition:function(_9df,_9e0,_9e1,_9e2){
var rev=(_9e2==-1)?" mblReverse":"";
_9e0.style.display="";
if(!_9e1||_9e1=="none"){
this.domNode.style.display="none";
this.invokeCallback();
}else{
if(_9a4["mblCSS3Transition"]){
_9a7.when(_9b2,lang.hitch(this,function(_9e3){
var _9e4=_9ab.get(_9e0,"position");
_9ab.set(_9e0,"position","absolute");
_9a7.when(_9e3(_9df,_9e0,{transition:_9e1,reverse:(_9e2===-1)?true:false}),lang.hitch(this,function(){
_9ab.set(_9e0,"position",_9e4);
_9e0.style.paddingTop="";
this.invokeCallback();
}));
}));
}else{
if(_9e1.indexOf("cube")!=-1){
if(has("ipad")){
_9ab.set(_9e0.parentNode,{webkitPerspective:1600});
}else{
if(has("ios")){
_9ab.set(_9e0.parentNode,{webkitPerspective:800});
}
}
}
var s=this._toCls(_9e1);
if(has("mblAndroidWorkaround")){
var _9e5=this;
_9e5.defer(function(){
_9a8.add(_9df,s+" mblOut"+rev);
_9a8.add(_9e0,s+" mblIn"+rev);
_9a8.remove(_9e0,"mblAndroidWorkaround");
_9e5.defer(function(){
_9a8.add(_9df,"mblTransition");
_9a8.add(_9e0,"mblTransition");
},30);
},70);
}else{
_9a8.add(_9df,s+" mblOut"+rev);
_9a8.add(_9e0,s+" mblIn"+rev);
this.defer(function(){
_9a8.add(_9df,"mblTransition");
_9a8.add(_9e0,"mblTransition");
},100);
}
var _9e6="50% 50%";
var _9e7="50% 50%";
var _9e8,posX,posY;
if(_9e1.indexOf("swirl")!=-1||_9e1.indexOf("zoom")!=-1){
if(this.keepScrollPos&&!this.getParent()){
_9e8=win.body().scrollTop||win.doc.documentElement.scrollTop||win.global.pageYOffset||0;
}else{
_9e8=-_9aa.position(_9df,true).y;
}
posY=win.global.innerHeight/2+_9e8;
_9e6="50% "+posY+"px";
_9e7="50% "+posY+"px";
}else{
if(_9e1.indexOf("scale")!=-1){
var _9e9=_9aa.position(_9df,true);
posX=((this.clickedPosX!==undefined)?this.clickedPosX:win.global.innerWidth/2)-_9e9.x;
if(this.keepScrollPos&&!this.getParent()){
_9e8=win.body().scrollTop||win.doc.documentElement.scrollTop||win.global.pageYOffset||0;
}else{
_9e8=-_9e9.y;
}
posY=((this.clickedPosY!==undefined)?this.clickedPosY:win.global.innerHeight/2)+_9e8;
_9e6=posX+"px "+posY+"px";
_9e7=posX+"px "+posY+"px";
}
}
_9ab.set(_9df,css3.add({},{transformOrigin:_9e6}));
_9ab.set(_9e0,css3.add({},{transformOrigin:_9e7}));
}
}
},onAnimationStart:function(e){
},onAnimationEnd:function(e){
var name=e.animationName||e.target.className;
if(name.indexOf("Out")===-1&&name.indexOf("In")===-1&&name.indexOf("Shrink")===-1){
return;
}
var _9ea=false;
if(_9a8.contains(this.domNode,"mblOut")){
_9ea=true;
this.domNode.style.display="none";
_9a8.remove(this.domNode,[this._toCls(this._detail.transition),"mblIn","mblOut","mblReverse"]);
}else{
this._removeTransitionPaddingTop();
}
_9ab.set(this.domNode,css3.add({},{transformOrigin:""}));
if(name.indexOf("Shrink")!==-1){
var li=e.target;
li.style.display="none";
_9a8.remove(li,"mblCloseContent");
var p=_9b3.getEnclosingScrollable(this.domNode);
p&&p.onTouchEnd();
}
if(_9ea){
this.invokeCallback();
}
this._clearClasses(this.domNode);
this.clickedPosX=this.clickedPosY=undefined;
if(name.indexOf("Cube")!==-1&&name.indexOf("In")!==-1&&has("ios")){
this.domNode.parentNode.style[css3.name("perspective")]="";
}
},invokeCallback:function(){
this.onAfterTransitionOut.apply(this,this._arguments);
_9a5.publish("/dojox/mobile/afterTransitionOut",[this].concat(this._arguments));
var _9eb=_9ac.byNode(this.toNode);
if(_9eb){
_9eb.onAfterTransitionIn.apply(_9eb,this._arguments);
_9a5.publish("/dojox/mobile/afterTransitionIn",[_9eb].concat(this._arguments));
_9eb.movedFrom=undefined;
if(this.setFragIds&&this._isBookmarkable(this._detail)){
this.setFragIds(_9eb);
}
}
if(has("mblAndroidWorkaround")){
this.defer(function(){
if(_9eb){
_9ab.set(this.toNode,css3.name("transformStyle"),"");
}
_9ab.set(this.domNode,css3.name("transformStyle"),"");
});
}
var c=this._detail.context,m=this._detail.method;
if(c||m){
if(!m){
m=c;
c=null;
}
c=c||win.global;
if(typeof (m)=="string"){
c[m].apply(c,this._optArgs);
}else{
if(typeof (m)=="function"){
m.apply(c,this._optArgs);
}
}
}
this._detail=this._optArgs=this._arguments=undefined;
this._inProgress=false;
},isVisible:function(_9ec){
var _9ed=function(node){
return _9ab.get(node,"display")!=="none";
};
if(_9ec){
for(var n=this.domNode;n.tagName!=="BODY";n=n.parentNode){
if(!_9ed(n)){
return false;
}
}
return true;
}else{
return _9ed(this.domNode);
}
},getShowingView:function(){
var _9ee=this.domNode.parentNode.childNodes;
for(var i=0;i<_9ee.length;i++){
var n=_9ee[i];
if(n.nodeType===1&&_9a8.contains(n,"mblView")&&n.style.display!=="none"){
return _9ac.byNode(n);
}
}
return null;
},getSiblingViews:function(){
if(!this.domNode.parentNode){
return [this];
}
return _9a3.map(_9a3.filter(this.domNode.parentNode.childNodes,function(n){
return n.nodeType===1&&_9a8.contains(n,"mblView");
}),function(n){
return _9ac.byNode(n);
});
},show:function(_9ef,_9f0){
var out=this.getShowingView();
if(!_9ef){
if(out){
out.onBeforeTransitionOut(out.id);
_9a5.publish("/dojox/mobile/beforeTransitionOut",[out,out.id]);
}
this.onBeforeTransitionIn(this.id);
_9a5.publish("/dojox/mobile/beforeTransitionIn",[this,this.id]);
}
if(_9f0){
this.domNode.style.display="";
}else{
_9a3.forEach(this.getSiblingViews(),function(v){
v.domNode.style.display=(v===this)?"":"none";
},this);
}
this.load&&this.load();
if(!_9ef){
if(out){
out.onAfterTransitionOut(out.id);
_9a5.publish("/dojox/mobile/afterTransitionOut",[out,out.id]);
}
this.onAfterTransitionIn(this.id);
_9a5.publish("/dojox/mobile/afterTransitionIn",[this,this.id]);
}
},hide:function(){
this.domNode.style.display="none";
}});
});
},"dojox/mobile/Slider":function(){
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/sniff","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/touch","dijit/_WidgetBase","dijit/form/_FormValueMixin"],function(_9f1,_9f2,_9f3,lang,win,has,_9f4,_9f5,_9f6,_9f7,keys,_9f8,_9f9,_9fa){
return _9f3("dojox.mobile.Slider",[_9f9,_9fa],{value:0,min:0,max:100,step:1,baseClass:"mblSlider",flip:false,orientation:"auto",halo:"8pt",buildRendering:function(){
if(!this.templateString){
this.focusNode=this.domNode=_9f5.create("div",{});
this.valueNode=_9f5.create("input",(this.srcNodeRef&&this.srcNodeRef.name)?{type:"hidden",name:this.srcNodeRef.name}:{type:"hidden"},this.domNode,"last");
var _9fb=_9f5.create("div",{style:{position:"relative",height:"100%",width:"100%"}},this.domNode,"last");
this.progressBar=_9f5.create("div",{style:{position:"absolute"},"class":"mblSliderProgressBar"},_9fb,"last");
this.touchBox=_9f5.create("div",{style:{position:"absolute"},"class":"mblSliderTouchBox"},_9fb,"last");
this.handle=_9f5.create("div",{style:{position:"absolute"},"class":"mblSliderHandle"},_9fb,"last");
}
this.inherited(arguments);
if(typeof this.domNode.style.msTouchAction!="undefined"){
this.domNode.style.msTouchAction="none";
}
},_setValueAttr:function(_9fc,_9fd){
_9fc=Math.max(Math.min(_9fc,this.max),this.min);
var _9fe=(this.value-this.min)*100/(this.max-this.min);
this.valueNode.value=_9fc;
this.inherited(arguments);
if(!this._started){
return;
}
this.focusNode.setAttribute("aria-valuenow",_9fc);
var _9ff=(_9fc-this.min)*100/(this.max-this.min);
var _a00=this.orientation!="V";
if(_9fd===true){
_9f4.add(this.handle,"mblSliderTransition");
_9f4.add(this.progressBar,"mblSliderTransition");
}else{
_9f4.remove(this.handle,"mblSliderTransition");
_9f4.remove(this.progressBar,"mblSliderTransition");
}
_9f7.set(this.handle,this._attrs.handleLeft,(this._reversed?(100-_9ff):_9ff)+"%");
_9f7.set(this.progressBar,this._attrs.width,_9ff+"%");
},postCreate:function(){
this.inherited(arguments);
function _a01(e){
function _a02(e){
_a13=_a03?e[this._attrs.pageX]:(e.touches?e.touches[0][this._attrs.pageX]:e[this._attrs.clientX]);
_a14=_a13-_a04;
_a14=Math.min(Math.max(_a14,0),_a05);
var _a06=this.step?((this.max-this.min)/this.step):_a05;
if(_a06<=1||_a06==Infinity){
_a06=_a05;
}
var _a07=Math.round(_a14*_a06/_a05);
_a0d=(this.max-this.min)*_a07/_a06;
_a0d=this._reversed?(this.max-_a0d):(this.min+_a0d);
};
function _a08(e){
e.preventDefault();
lang.hitch(this,_a02)(e);
this.set("value",_a0d,false);
};
function _a09(e){
e.preventDefault();
_9f1.forEach(_a0a,lang.hitch(this,"disconnect"));
_a0a=[];
this.set("value",this.value,true);
};
e.preventDefault();
var _a03=e.type=="mousedown";
var box=_9f6.position(node,false);
var _a0b=has("ie")?1:(_9f7.get(win.body(),"zoom")||1);
if(isNaN(_a0b)){
_a0b=1;
}
var _a0c=has("ie")?1:(_9f7.get(node,"zoom")||1);
if(isNaN(_a0c)){
_a0c=1;
}
var _a04=box[this._attrs.x]*_a0c*_a0b+_9f6.docScroll()[this._attrs.x];
var _a05=box[this._attrs.w]*_a0c*_a0b;
lang.hitch(this,_a02)(e);
if(e.target==this.touchBox){
this.set("value",_a0d,true);
}
_9f1.forEach(_a0a,_9f2.disconnect);
var root=win.doc.documentElement;
var _a0a=[this.connect(root,_9f8.move,_a08),this.connect(root,_9f8.release,_a09)];
};
function _a0e(e){
if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){
return;
}
var step=this.step,_a0f=1,_a10;
switch(e.keyCode){
case keys.HOME:
_a10=this.min;
break;
case keys.END:
_a10=this.max;
break;
case keys.RIGHT_ARROW:
_a0f=-1;
case keys.LEFT_ARROW:
_a10=this.value+_a0f*((flip&&_a11)?step:-step);
break;
case keys.DOWN_ARROW:
_a0f=-1;
case keys.UP_ARROW:
_a10=this.value+_a0f*((!flip||_a11)?step:-step);
break;
default:
return;
}
e.preventDefault();
this._setValueAttr(_a10,false);
};
function _a12(e){
if(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey){
return;
}
this._setValueAttr(this.value,true);
};
var _a13,_a14,_a0d,node=this.domNode;
if(this.orientation=="auto"){
this.orientation=node.offsetHeight<=node.offsetWidth?"H":"V";
}
_9f4.add(this.domNode,_9f1.map(this.baseClass.split(" "),lang.hitch(this,function(c){
return c+this.orientation;
})));
var _a11=this.orientation!="V",ltr=_a11?this.isLeftToRight():false,flip=!!this.flip;
this._reversed=!((_a11&&((ltr&&!flip)||(!ltr&&flip)))||(!_a11&&flip));
this._attrs=_a11?{x:"x",w:"w",l:"l",r:"r",pageX:"pageX",clientX:"clientX",handleLeft:"left",left:this._reversed?"right":"left",width:"width"}:{x:"y",w:"h",l:"t",r:"b",pageX:"pageY",clientX:"clientY",handleLeft:"top",left:this._reversed?"bottom":"top",width:"height"};
this.progressBar.style[this._attrs.left]="0px";
this.connect(this.touchBox,_9f8.press,_a01);
this.connect(this.handle,_9f8.press,_a01);
this.connect(this.domNode,"onkeypress",_a0e);
this.connect(this.domNode,"onkeyup",_a12);
this.startup();
this.set("value",this.value);
}});
});
},"dijit/WidgetSet":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/kernel","./registry"],function(_a15,_a16,_a17,_a18){
var _a19=_a16("dijit.WidgetSet",null,{constructor:function(){
this._hash={};
this.length=0;
},add:function(_a1a){
if(this._hash[_a1a.id]){
throw new Error("Tried to register widget with id=="+_a1a.id+" but that id is already registered");
}
this._hash[_a1a.id]=_a1a;
this.length++;
},remove:function(id){
if(this._hash[id]){
delete this._hash[id];
this.length--;
}
},forEach:function(func,_a1b){
_a1b=_a1b||_a17.global;
var i=0,id;
for(id in this._hash){
func.call(_a1b,this._hash[id],i++,this._hash);
}
return this;
},filter:function(_a1c,_a1d){
_a1d=_a1d||_a17.global;
var res=new _a19(),i=0,id;
for(id in this._hash){
var w=this._hash[id];
if(_a1c.call(_a1d,w,i++,this._hash)){
res.add(w);
}
}
return res;
},byId:function(id){
return this._hash[id];
},byClass:function(cls){
var res=new _a19(),id,_a1e;
for(id in this._hash){
_a1e=this._hash[id];
if(_a1e.declaredClass==cls){
res.add(_a1e);
}
}
return res;
},toArray:function(){
var ar=[];
for(var id in this._hash){
ar.push(this._hash[id]);
}
return ar;
},map:function(func,_a1f){
return _a15.map(this.toArray(),func,_a1f);
},every:function(func,_a20){
_a20=_a20||_a17.global;
var x=0,i;
for(i in this._hash){
if(!func.call(_a20,this._hash[i],x++,this._hash)){
return false;
}
}
return true;
},some:function(func,_a21){
_a21=_a21||_a17.global;
var x=0,i;
for(i in this._hash){
if(func.call(_a21,this._hash[i],x++,this._hash)){
return true;
}
}
return false;
}});
_a15.forEach(["forEach","filter","byClass","map","every","some"],function(func){
_a18[func]=_a19.prototype[func];
});
return _a19;
});
},"dojo/fx/easing":function(){
define(["../_base/lang"],function(lang){
var _a22={linear:function(n){
return n;
},quadIn:function(n){
return Math.pow(n,2);
},quadOut:function(n){
return n*(n-2)*-1;
},quadInOut:function(n){
n=n*2;
if(n<1){
return Math.pow(n,2)/2;
}
return -1*((--n)*(n-2)-1)/2;
},cubicIn:function(n){
return Math.pow(n,3);
},cubicOut:function(n){
return Math.pow(n-1,3)+1;
},cubicInOut:function(n){
n=n*2;
if(n<1){
return Math.pow(n,3)/2;
}
n-=2;
return (Math.pow(n,3)+2)/2;
},quartIn:function(n){
return Math.pow(n,4);
},quartOut:function(n){
return -1*(Math.pow(n-1,4)-1);
},quartInOut:function(n){
n=n*2;
if(n<1){
return Math.pow(n,4)/2;
}
n-=2;
return -1/2*(Math.pow(n,4)-2);
},quintIn:function(n){
return Math.pow(n,5);
},quintOut:function(n){
return Math.pow(n-1,5)+1;
},quintInOut:function(n){
n=n*2;
if(n<1){
return Math.pow(n,5)/2;
}
n-=2;
return (Math.pow(n,5)+2)/2;
},sineIn:function(n){
return -1*Math.cos(n*(Math.PI/2))+1;
},sineOut:function(n){
return Math.sin(n*(Math.PI/2));
},sineInOut:function(n){
return -1*(Math.cos(Math.PI*n)-1)/2;
},expoIn:function(n){
return (n==0)?0:Math.pow(2,10*(n-1));
},expoOut:function(n){
return (n==1)?1:(-1*Math.pow(2,-10*n)+1);
},expoInOut:function(n){
if(n==0){
return 0;
}
if(n==1){
return 1;
}
n=n*2;
if(n<1){
return Math.pow(2,10*(n-1))/2;
}
--n;
return (-1*Math.pow(2,-10*n)+2)/2;
},circIn:function(n){
return -1*(Math.sqrt(1-Math.pow(n,2))-1);
},circOut:function(n){
n=n-1;
return Math.sqrt(1-Math.pow(n,2));
},circInOut:function(n){
n=n*2;
if(n<1){
return -1/2*(Math.sqrt(1-Math.pow(n,2))-1);
}
n-=2;
return 1/2*(Math.sqrt(1-Math.pow(n,2))+1);
},backIn:function(n){
var s=1.70158;
return Math.pow(n,2)*((s+1)*n-s);
},backOut:function(n){
n=n-1;
var s=1.70158;
return Math.pow(n,2)*((s+1)*n+s)+1;
},backInOut:function(n){
var s=1.70158*1.525;
n=n*2;
if(n<1){
return (Math.pow(n,2)*((s+1)*n-s))/2;
}
n-=2;
return (Math.pow(n,2)*((s+1)*n+s)+2)/2;
},elasticIn:function(n){
if(n==0||n==1){
return n;
}
var p=0.3;
var s=p/4;
n=n-1;
return -1*Math.pow(2,10*n)*Math.sin((n-s)*(2*Math.PI)/p);
},elasticOut:function(n){
if(n==0||n==1){
return n;
}
var p=0.3;
var s=p/4;
return Math.pow(2,-10*n)*Math.sin((n-s)*(2*Math.PI)/p)+1;
},elasticInOut:function(n){
if(n==0){
return 0;
}
n=n*2;
if(n==2){
return 1;
}
var p=0.3*1.5;
var s=p/4;
if(n<1){
n-=1;
return -0.5*(Math.pow(2,10*n)*Math.sin((n-s)*(2*Math.PI)/p));
}
n-=1;
return 0.5*(Math.pow(2,-10*n)*Math.sin((n-s)*(2*Math.PI)/p))+1;
},bounceIn:function(n){
return (1-_a22.bounceOut(1-n));
},bounceOut:function(n){
var s=7.5625;
var p=2.75;
var l;
if(n<(1/p)){
l=s*Math.pow(n,2);
}else{
if(n<(2/p)){
n-=(1.5/p);
l=s*Math.pow(n,2)+0.75;
}else{
if(n<(2.5/p)){
n-=(2.25/p);
l=s*Math.pow(n,2)+0.9375;
}else{
n-=(2.625/p);
l=s*Math.pow(n,2)+0.984375;
}
}
}
return l;
},bounceInOut:function(n){
if(n<0.5){
return _a22.bounceIn(n*2)/2;
}
return (_a22.bounceOut(n*2-1)/2)+0.5;
}};
lang.setObject("dojo.fx.easing",_a22);
return _a22;
});
},"dijit/a11y":function(){
define(["dojo/_base/array","dojo/dom","dojo/dom-attr","dojo/dom-style","dojo/_base/lang","dojo/sniff","./main"],function(_a23,dom,_a24,_a25,lang,has,_a26){
var a11y={_isElementShown:function(elem){
var s=_a25.get(elem);
return (s.visibility!="hidden")&&(s.visibility!="collapsed")&&(s.display!="none")&&(_a24.get(elem,"type")!="hidden");
},hasDefaultTabStop:function(elem){
switch(elem.nodeName.toLowerCase()){
case "a":
return _a24.has(elem,"href");
case "area":
case "button":
case "input":
case "object":
case "select":
case "textarea":
return true;
case "iframe":
var body;
try{
var _a27=elem.contentDocument;
if("designMode" in _a27&&_a27.designMode=="on"){
return true;
}
body=_a27.body;
}
catch(e1){
try{
body=elem.contentWindow.document.body;
}
catch(e2){
return false;
}
}
return body&&(body.contentEditable=="true"||(body.firstChild&&body.firstChild.contentEditable=="true"));
default:
return elem.contentEditable=="true";
}
},isTabNavigable:function(elem){
if(_a24.get(elem,"disabled")){
return false;
}else{
if(_a24.has(elem,"tabIndex")){
return _a24.get(elem,"tabIndex")>=0;
}else{
return a11y.hasDefaultTabStop(elem);
}
}
},_getTabNavigable:function(root){
var _a28,last,_a29,_a2a,_a2b,_a2c,_a2d={};
function _a2e(node){
return node&&node.tagName.toLowerCase()=="input"&&node.type&&node.type.toLowerCase()=="radio"&&node.name&&node.name.toLowerCase();
};
var _a2f=a11y._isElementShown,_a30=a11y.isTabNavigable;
var _a31=function(_a32){
for(var _a33=_a32.firstChild;_a33;_a33=_a33.nextSibling){
if(_a33.nodeType!=1||(has("ie")<=9&&_a33.scopeName!=="HTML")||!_a2f(_a33)){
continue;
}
if(_a30(_a33)){
var _a34=+_a24.get(_a33,"tabIndex");
if(!_a24.has(_a33,"tabIndex")||_a34==0){
if(!_a28){
_a28=_a33;
}
last=_a33;
}else{
if(_a34>0){
if(!_a29||_a34<_a2a){
_a2a=_a34;
_a29=_a33;
}
if(!_a2b||_a34>=_a2c){
_a2c=_a34;
_a2b=_a33;
}
}
}
var rn=_a2e(_a33);
if(_a24.get(_a33,"checked")&&rn){
_a2d[rn]=_a33;
}
}
if(_a33.nodeName.toUpperCase()!="SELECT"){
_a31(_a33);
}
}
};
if(_a2f(root)){
_a31(root);
}
function rs(node){
return _a2d[_a2e(node)]||node;
};
return {first:rs(_a28),last:rs(last),lowest:rs(_a29),highest:rs(_a2b)};
},getFirstInTabbingOrder:function(root,doc){
var _a35=a11y._getTabNavigable(dom.byId(root,doc));
return _a35.lowest?_a35.lowest:_a35.first;
},getLastInTabbingOrder:function(root,doc){
var _a36=a11y._getTabNavigable(dom.byId(root,doc));
return _a36.last?_a36.last:_a36.highest;
}};
1&&lang.mixin(_a26,a11y);
return a11y;
});
},"dijit/typematic":function(){
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/lang","dojo/on","dojo/sniff","./main"],function(_a37,_a38,lang,on,has,_a39){
var _a3a=(_a39.typematic={_fireEventAndReload:function(){
this._timer=null;
this._callback(++this._count,this._node,this._evt);
this._currentTimeout=Math.max(this._currentTimeout<0?this._initialDelay:(this._subsequentDelay>1?this._subsequentDelay:Math.round(this._currentTimeout*this._subsequentDelay)),this._minDelay);
this._timer=setTimeout(lang.hitch(this,"_fireEventAndReload"),this._currentTimeout);
},trigger:function(evt,_a3b,node,_a3c,obj,_a3d,_a3e,_a3f){
if(obj!=this._obj){
this.stop();
this._initialDelay=_a3e||500;
this._subsequentDelay=_a3d||0.9;
this._minDelay=_a3f||10;
this._obj=obj;
this._node=node;
this._currentTimeout=-1;
this._count=-1;
this._callback=lang.hitch(_a3b,_a3c);
this._evt={faux:true};
for(var attr in evt){
if(attr!="layerX"&&attr!="layerY"){
var v=evt[attr];
if(typeof v!="function"&&typeof v!="undefined"){
this._evt[attr]=v;
}
}
}
this._fireEventAndReload();
}
},stop:function(){
if(this._timer){
clearTimeout(this._timer);
this._timer=null;
}
if(this._obj){
this._callback(-1,this._node,this._evt);
this._obj=null;
}
},addKeyListener:function(node,_a40,_a41,_a42,_a43,_a44,_a45){
var type="keyCode" in _a40?"keydown":"charCode" in _a40?"keypress":_a38._keypress,attr="keyCode" in _a40?"keyCode":"charCode" in _a40?"charCode":"charOrCode";
var _a46=[on(node,type,lang.hitch(this,function(evt){
if(evt[attr]==_a40[attr]&&(_a40.ctrlKey===undefined||_a40.ctrlKey==evt.ctrlKey)&&(_a40.altKey===undefined||_a40.altKey==evt.altKey)&&(_a40.metaKey===undefined||_a40.metaKey==(evt.metaKey||false))&&(_a40.shiftKey===undefined||_a40.shiftKey==evt.shiftKey)){
evt.stopPropagation();
evt.preventDefault();
_a3a.trigger(evt,_a41,node,_a42,_a40,_a43,_a44,_a45);
}else{
if(_a3a._obj==_a40){
_a3a.stop();
}
}
})),on(node,"keyup",lang.hitch(this,function(){
if(_a3a._obj==_a40){
_a3a.stop();
}
}))];
return {remove:function(){
_a37.forEach(_a46,function(h){
h.remove();
});
}};
},addMouseListener:function(node,_a47,_a48,_a49,_a4a,_a4b){
var _a4c=[on(node,"mousedown",lang.hitch(this,function(evt){
evt.preventDefault();
_a3a.trigger(evt,_a47,node,_a48,node,_a49,_a4a,_a4b);
})),on(node,"mouseup",lang.hitch(this,function(evt){
if(this._obj){
evt.preventDefault();
}
_a3a.stop();
})),on(node,"mouseout",lang.hitch(this,function(evt){
if(this._obj){
evt.preventDefault();
}
_a3a.stop();
})),on(node,"dblclick",lang.hitch(this,function(evt){
evt.preventDefault();
if(has("ie")<9){
_a3a.trigger(evt,_a47,node,_a48,node,_a49,_a4a,_a4b);
setTimeout(lang.hitch(this,_a3a.stop),50);
}
}))];
return {remove:function(){
_a37.forEach(_a4c,function(h){
h.remove();
});
}};
},addListener:function(_a4d,_a4e,_a4f,_a50,_a51,_a52,_a53,_a54){
var _a55=[this.addKeyListener(_a4e,_a4f,_a50,_a51,_a52,_a53,_a54),this.addMouseListener(_a4d,_a50,_a51,_a52,_a53,_a54)];
return {remove:function(){
_a37.forEach(_a55,function(h){
h.remove();
});
}};
}});
return _a3a;
});
},"dojox/mobile/_PickerChooser":function(){
define(["dojo/_base/lang","dojo/_base/window"],function(lang,win){
return {load:function(id,_a56,_a57){
var dm=win.global._no_dojo_dm||lang.getObject("dojox.mobile",true);
_a56([(dm.currentTheme==="android"||dm.currentTheme==="holodark"?"./ValuePicker":"./SpinWheel")+id],_a57);
}};
});
},"dojox/mobile/app/ImageView":function(){
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/app/_Widget,dojo/fx/easing"],function(_a58,dojo,_a59){
dojo.provide("dojox.mobile.app.ImageView");
dojo.experimental("dojox.mobile.app.ImageView");
dojo.require("dojox.mobile.app._Widget");
dojo.require("dojo.fx.easing");
dojo.declare("dojox.mobile.app.ImageView",_a59.mobile.app._Widget,{zoom:1,zoomCenterX:0,zoomCenterY:0,maxZoom:5,autoZoomLevel:3,disableAutoZoom:false,disableSwipe:false,autoZoomEvent:null,_leftImg:null,_centerImg:null,_rightImg:null,_leftSmallImg:null,_centerSmallImg:null,_rightSmallImg:null,constructor:function(){
this.panX=0;
this.panY=0;
this.handleLoad=dojo.hitch(this,this.handleLoad);
this._updateAnimatedZoom=dojo.hitch(this,this._updateAnimatedZoom);
this._updateAnimatedPan=dojo.hitch(this,this._updateAnimatedPan);
this._onAnimPanEnd=dojo.hitch(this,this._onAnimPanEnd);
},buildRendering:function(){
this.inherited(arguments);
this.canvas=dojo.create("canvas",{},this.domNode);
dojo.addClass(this.domNode,"mblImageView");
},postCreate:function(){
this.inherited(arguments);
this.size=dojo.marginBox(this.domNode);
dojo.style(this.canvas,{width:this.size.w+"px",height:this.size.h+"px"});
this.canvas.height=this.size.h;
this.canvas.width=this.size.w;
var _a5a=this;
this.connect(this.domNode,"onmousedown",function(_a5b){
if(_a5a.isAnimating()){
return;
}
if(_a5a.panX){
_a5a.handleDragEnd();
}
_a5a.downX=_a5b.targetTouches?_a5b.targetTouches[0].clientX:_a5b.clientX;
_a5a.downY=_a5b.targetTouches?_a5b.targetTouches[0].clientY:_a5b.clientY;
});
this.connect(this.domNode,"onmousemove",function(_a5c){
if(_a5a.isAnimating()){
return;
}
if((!_a5a.downX&&_a5a.downX!==0)||(!_a5a.downY&&_a5a.downY!==0)){
return;
}
if((!_a5a.disableSwipe&&_a5a.zoom==1)||(!_a5a.disableAutoZoom&&_a5a.zoom!=1)){
var x=_a5c.targetTouches?_a5c.targetTouches[0].clientX:_a5c.pageX;
var y=_a5c.targetTouches?_a5c.targetTouches[0].clientY:_a5c.pageY;
_a5a.panX=x-_a5a.downX;
_a5a.panY=y-_a5a.downY;
if(_a5a.zoom==1){
if(Math.abs(_a5a.panX)>10){
_a5a.render();
}
}else{
if(Math.abs(_a5a.panX)>10||Math.abs(_a5a.panY)>10){
_a5a.render();
}
}
}
});
this.connect(this.domNode,"onmouseout",function(_a5d){
if(!_a5a.isAnimating()&&_a5a.panX){
_a5a.handleDragEnd();
}
});
this.connect(this.domNode,"onmouseover",function(_a5e){
_a5a.downX=_a5a.downY=null;
});
this.connect(this.domNode,"onclick",function(_a5f){
if(_a5a.isAnimating()){
return;
}
if(_a5a.downX==null||_a5a.downY==null){
return;
}
var x=(_a5f.targetTouches?_a5f.targetTouches[0].clientX:_a5f.pageX);
var y=(_a5f.targetTouches?_a5f.targetTouches[0].clientY:_a5f.pageY);
if(Math.abs(_a5a.panX)>14||Math.abs(_a5a.panY)>14){
_a5a.downX=_a5a.downY=null;
_a5a.handleDragEnd();
return;
}
_a5a.downX=_a5a.downY=null;
if(!_a5a.disableAutoZoom){
if(!_a5a._centerImg||!_a5a._centerImg._loaded){
return;
}
if(_a5a.zoom!=1){
_a5a.set("animatedZoom",1);
return;
}
var pos=dojo._abs(_a5a.domNode);
var _a60=_a5a.size.w/_a5a._centerImg.width;
var _a61=_a5a.size.h/_a5a._centerImg.height;
_a5a.zoomTo(((x-pos.x)/_a60)-_a5a.panX,((y-pos.y)/_a61)-_a5a.panY,_a5a.autoZoomLevel);
}
});
dojo.connect(this.domNode,"flick",this,"handleFlick");
},isAnimating:function(){
return this._anim&&this._anim.status()=="playing";
},handleDragEnd:function(){
this.downX=this.downY=null;
if(this.zoom==1){
if(!this.panX){
return;
}
var _a62=(this._leftImg&&this._leftImg._loaded)||(this._leftSmallImg&&this._leftSmallImg._loaded);
var _a63=(this._rightImg&&this._rightImg._loaded)||(this._rightSmallImg&&this._rightSmallImg._loaded);
var _a64=!(Math.abs(this.panX)<this._centerImg._baseWidth/2)&&((this.panX>0&&_a62?1:0)||(this.panX<0&&_a63?1:0));
if(!_a64){
this._animPanTo(0,dojo.fx.easing.expoOut,700);
}else{
this.moveTo(this.panX);
}
}else{
if(!this.panX&&!this.panY){
return;
}
this.zoomCenterX-=(this.panX/this.zoom);
this.zoomCenterY-=(this.panY/this.zoom);
this.panX=this.panY=0;
}
},handleFlick:function(_a65){
if(this.zoom==1&&_a65.duration<500){
if(_a65.direction=="ltr"){
this.moveTo(1);
}else{
if(_a65.direction=="rtl"){
this.moveTo(-1);
}
}
this.downX=this.downY=null;
}
},moveTo:function(_a66){
_a66=_a66>0?1:-1;
var _a67;
if(_a66<1){
if(this._rightImg&&this._rightImg._loaded){
_a67=this._rightImg;
}else{
if(this._rightSmallImg&&this._rightSmallImg._loaded){
_a67=this._rightSmallImg;
}
}
}else{
if(this._leftImg&&this._leftImg._loaded){
_a67=this._leftImg;
}else{
if(this._leftSmallImg&&this._leftSmallImg._loaded){
_a67=this._leftSmallImg;
}
}
}
this._moveDir=_a66;
var _a68=this;
if(_a67&&_a67._loaded){
this._animPanTo(this.size.w*_a66,null,500,function(){
_a68.panX=0;
_a68.panY=0;
if(_a66<0){
_a68._switchImage("left","right");
}else{
_a68._switchImage("right","left");
}
_a68.render();
_a68.onChange(_a66*-1);
});
}else{
this._animPanTo(0,dojo.fx.easing.expoOut,700);
}
},_switchImage:function(_a69,_a6a){
var _a6b="_"+_a69+"SmallImg";
var _a6c="_"+_a69+"Img";
var _a6d="_"+_a6a+"SmallImg";
var _a6e="_"+_a6a+"Img";
this[_a6c]=this._centerImg;
this[_a6b]=this._centerSmallImg;
this[_a6c]._type=_a69;
if(this[_a6b]){
this[_a6b]._type=_a69;
}
this._centerImg=this[_a6e];
this._centerSmallImg=this[_a6d];
this._centerImg._type="center";
if(this._centerSmallImg){
this._centerSmallImg._type="center";
}
this[_a6e]=this[_a6d]=null;
},_animPanTo:function(to,_a6f,_a70,_a71){
this._animCallback=_a71;
this._anim=new dojo.Animation({curve:[this.panX,to],onAnimate:this._updateAnimatedPan,duration:_a70||500,easing:_a6f,onEnd:this._onAnimPanEnd});
this._anim.play();
return this._anim;
},onChange:function(_a72){
},_updateAnimatedPan:function(_a73){
this.panX=_a73;
this.render();
},_onAnimPanEnd:function(){
this.panX=this.panY=0;
if(this._animCallback){
this._animCallback();
}
},zoomTo:function(_a74,_a75,zoom){
this.set("zoomCenterX",_a74);
this.set("zoomCenterY",_a75);
this.set("animatedZoom",zoom);
},render:function(){
var cxt=this.canvas.getContext("2d");
cxt.clearRect(0,0,this.canvas.width,this.canvas.height);
this._renderImg(this._centerSmallImg,this._centerImg,this.zoom==1?(this.panX<0?1:this.panX>0?-1:0):0);
if(this.zoom==1&&this.panX!=0){
if(this.panX>0){
this._renderImg(this._leftSmallImg,this._leftImg,1);
}else{
this._renderImg(this._rightSmallImg,this._rightImg,-1);
}
}
},_renderImg:function(_a76,_a77,_a78){
var img=(_a77&&_a77._loaded)?_a77:_a76;
if(!img||!img._loaded){
return;
}
var cxt=this.canvas.getContext("2d");
var _a79=img._baseWidth;
var _a7a=img._baseHeight;
var _a7b=_a79*this.zoom;
var _a7c=_a7a*this.zoom;
var _a7d=Math.min(this.size.w,_a7b);
var _a7e=Math.min(this.size.h,_a7c);
var _a7f=this.dispWidth=img.width*(_a7d/_a7b);
var _a80=this.dispHeight=img.height*(_a7e/_a7c);
var _a81=this.zoomCenterX-(this.panX/this.zoom);
var _a82=this.zoomCenterY-(this.panY/this.zoom);
var _a83=Math.floor(Math.max(_a7f/2,Math.min(img.width-_a7f/2,_a81)));
var _a84=Math.floor(Math.max(_a80/2,Math.min(img.height-_a80/2,_a82)));
var _a85=Math.max(0,Math.round((img.width-_a7f)/2+(_a83-img._centerX)));
var _a86=Math.max(0,Math.round((img.height-_a80)/2+(_a84-img._centerY)));
var _a87=Math.round(Math.max(0,this.canvas.width-_a7d)/2);
var _a88=Math.round(Math.max(0,this.canvas.height-_a7e)/2);
var _a89=_a7d;
var _a8a=_a7f;
if(this.zoom==1&&_a78&&this.panX){
if(this.panX<0){
if(_a78>0){
_a7d-=Math.abs(this.panX);
_a87=0;
}else{
if(_a78<0){
_a7d=Math.max(1,Math.abs(this.panX)-5);
_a87=this.size.w-_a7d;
}
}
}else{
if(_a78>0){
_a7d=Math.max(1,Math.abs(this.panX)-5);
_a87=0;
}else{
if(_a78<0){
_a7d-=Math.abs(this.panX);
_a87=this.size.w-_a7d;
}
}
}
_a7f=Math.max(1,Math.floor(_a7f*(_a7d/_a89)));
if(_a78>0){
_a85=(_a85+_a8a)-(_a7f);
}
_a85=Math.floor(_a85);
}
try{
cxt.drawImage(img,Math.max(0,_a85),_a86,Math.min(_a8a,_a7f),_a80,_a87,_a88,Math.min(_a89,_a7d),_a7e);
}
catch(e){
}
},_setZoomAttr:function(_a8b){
this.zoom=Math.min(this.maxZoom,Math.max(1,_a8b));
if(this.zoom==1&&this._centerImg&&this._centerImg._loaded){
if(!this.isAnimating()){
this.zoomCenterX=this._centerImg.width/2;
this.zoomCenterY=this._centerImg.height/2;
}
this.panX=this.panY=0;
}
this.render();
},_setZoomCenterXAttr:function(_a8c){
if(_a8c!=this.zoomCenterX){
if(this._centerImg&&this._centerImg._loaded){
_a8c=Math.min(this._centerImg.width,_a8c);
}
this.zoomCenterX=Math.max(0,Math.round(_a8c));
}
},_setZoomCenterYAttr:function(_a8d){
if(_a8d!=this.zoomCenterY){
if(this._centerImg&&this._centerImg._loaded){
_a8d=Math.min(this._centerImg.height,_a8d);
}
this.zoomCenterY=Math.max(0,Math.round(_a8d));
}
},_setZoomCenterAttr:function(_a8e){
if(_a8e.x!=this.zoomCenterX||_a8e.y!=this.zoomCenterY){
this.set("zoomCenterX",_a8e.x);
this.set("zoomCenterY",_a8e.y);
this.render();
}
},_setAnimatedZoomAttr:function(_a8f){
if(this._anim&&this._anim.status()=="playing"){
return;
}
this._anim=new dojo.Animation({curve:[this.zoom,_a8f],onAnimate:this._updateAnimatedZoom,onEnd:this._onAnimEnd});
this._anim.play();
},_updateAnimatedZoom:function(_a90){
this._setZoomAttr(_a90);
},_setCenterUrlAttr:function(_a91){
this._setImage("center",_a91);
},_setLeftUrlAttr:function(_a92){
this._setImage("left",_a92);
},_setRightUrlAttr:function(_a93){
this._setImage("right",_a93);
},_setImage:function(name,_a94){
var _a95=null;
var _a96=null;
if(dojo.isString(_a94)){
_a96=_a94;
}else{
_a96=_a94.large;
_a95=_a94.small;
}
if(this["_"+name+"Img"]&&this["_"+name+"Img"]._src==_a96){
return;
}
var _a97=this["_"+name+"Img"]=new Image();
_a97._type=name;
_a97._loaded=false;
_a97._src=_a96;
_a97._conn=dojo.connect(_a97,"onload",this.handleLoad);
if(_a95){
var _a98=this["_"+name+"SmallImg"]=new Image();
_a98._type=name;
_a98._loaded=false;
_a98._conn=dojo.connect(_a98,"onload",this.handleLoad);
_a98._isSmall=true;
_a98._src=_a95;
_a98.src=_a95;
}
_a97.src=_a96;
},handleLoad:function(evt){
var img=evt.target;
img._loaded=true;
dojo.disconnect(img._conn);
var type=img._type;
switch(type){
case "center":
this.zoomCenterX=img.width/2;
this.zoomCenterY=img.height/2;
break;
}
var _a99=img.height;
var _a9a=img.width;
if(_a9a/this.size.w<_a99/this.size.h){
img._baseHeight=this.canvas.height;
img._baseWidth=_a9a/(_a99/this.size.h);
}else{
img._baseWidth=this.canvas.width;
img._baseHeight=_a99/(_a9a/this.size.w);
}
img._centerX=_a9a/2;
img._centerY=_a99/2;
this.render();
this.onLoad(img._type,img._src,img._isSmall);
},onLoad:function(type,url,_a9b){
}});
});
},"dijit/_base/focus":function(){
define(["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/topic","dojo/_base/window","../focus","../selection","../main"],function(_a9c,dom,lang,_a9d,win,_a9e,_a9f,_aa0){
var _aa1={_curFocus:null,_prevFocus:null,isCollapsed:function(){
return _aa0.getBookmark().isCollapsed;
},getBookmark:function(){
var sel=win.global==window?_a9f:new _a9f.SelectionManager(win.global);
return sel.getBookmark();
},moveToBookmark:function(_aa2){
var sel=win.global==window?_a9f:new _a9f.SelectionManager(win.global);
return sel.moveToBookmark(_aa2);
},getFocus:function(menu,_aa3){
var node=!_a9e.curNode||(menu&&dom.isDescendant(_a9e.curNode,menu.domNode))?_aa0._prevFocus:_a9e.curNode;
return {node:node,bookmark:node&&(node==_a9e.curNode)&&win.withGlobal(_aa3||win.global,_aa0.getBookmark),openedForWindow:_aa3};
},_activeStack:[],registerIframe:function(_aa4){
return _a9e.registerIframe(_aa4);
},unregisterIframe:function(_aa5){
_aa5&&_aa5.remove();
},registerWin:function(_aa6,_aa7){
return _a9e.registerWin(_aa6,_aa7);
},unregisterWin:function(_aa8){
_aa8&&_aa8.remove();
}};
_a9e.focus=function(_aa9){
if(!_aa9){
return;
}
var node="node" in _aa9?_aa9.node:_aa9,_aaa=_aa9.bookmark,_aab=_aa9.openedForWindow,_aac=_aaa?_aaa.isCollapsed:false;
if(node){
var _aad=(node.tagName.toLowerCase()=="iframe")?node.contentWindow:node;
if(_aad&&_aad.focus){
try{
_aad.focus();
}
catch(e){
}
}
_a9e._onFocusNode(node);
}
if(_aaa&&win.withGlobal(_aab||win.global,_aa0.isCollapsed)&&!_aac){
if(_aab){
_aab.focus();
}
try{
win.withGlobal(_aab||win.global,_aa0.moveToBookmark,null,[_aaa]);
}
catch(e2){
}
}
};
_a9e.watch("curNode",function(name,_aae,_aaf){
_aa0._curFocus=_aaf;
_aa0._prevFocus=_aae;
if(_aaf){
_a9d.publish("focusNode",_aaf);
}
});
_a9e.watch("activeStack",function(name,_ab0,_ab1){
_aa0._activeStack=_ab1;
});
_a9e.on("widget-blur",function(_ab2,by){
_a9d.publish("widgetBlur",_ab2,by);
});
_a9e.on("widget-focus",function(_ab3,by){
_a9d.publish("widgetFocus",_ab3,by);
});
lang.mixin(_aa0,_aa1);
return _aa0;
});
},"dojox/mobile/ListItem":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dijit/registry","dijit/_WidgetBase","./iconUtils","./_ItemBase","./ProgressIndicator","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/ListItem"],function(_ab4,_ab5,lang,_ab6,_ab7,_ab8,_ab9,_aba,_abb,_abc,_abd,_abe,has,_abf){
var _ac0=_ab5(has("dojo-bidi")?"dojox.mobile.NonBidiListItem":"dojox.mobile.ListItem",_abd,{rightText:"",rightIcon:"",rightIcon2:"",deleteIcon:"",anchorLabel:false,noArrow:false,checked:false,arrowClass:"",checkClass:"",uncheckClass:"",variableHeight:false,rightIconTitle:"",rightIcon2Title:"",header:false,tag:"li",busy:false,progStyle:"",paramsToInherit:"variableHeight,transition,deleteIcon,icon,rightIcon,rightIcon2,uncheckIcon,arrowClass,checkClass,uncheckClass,deleteIconTitle,deleteIconRole",baseClass:"mblListItem",_selStartMethod:"touch",_selEndMethod:"timer",_delayedSelection:true,_selClass:"mblListItemSelected",buildRendering:function(){
this._templated=!!this.templateString;
if(!this._templated){
this.domNode=this.containerNode=this.srcNodeRef||_ab7.create(this.tag);
}
this.inherited(arguments);
if(this.selected){
_ab6.add(this.domNode,this._selClass);
}
if(this.header){
_ab6.replace(this.domNode,"mblEdgeToEdgeCategory",this.baseClass);
}
if(!this._templated){
this.labelNode=_ab7.create("div",{className:"mblListItemLabel"});
var ref=this.srcNodeRef;
if(ref&&ref.childNodes.length===1&&ref.firstChild.nodeType===3){
this.labelNode.appendChild(ref.firstChild);
}
this.domNode.appendChild(this.labelNode);
}
this._layoutChildren=[];
},startup:function(){
if(this._started){
return;
}
var _ac1=this.getParent();
var opts=this.getTransOpts();
if((!this._templated||this.labelNode)&&this.anchorLabel){
this.labelNode.style.display="inline";
this.labelNode.style.cursor="pointer";
this.connect(this.labelNode,"onclick","_onClick");
this.onTouchStart=function(e){
return (e.target!==this.labelNode);
};
}
if(opts.moveTo||opts.href||opts.url||this.clickable||(_ac1&&_ac1.select)){
this.connect(this.domNode,"onkeydown","_onClick");
}else{
this._handleClick=false;
}
this.inherited(arguments);
if(_ab6.contains(this.domNode,"mblVariableHeight")){
this.variableHeight=true;
}
if(this.variableHeight){
_ab6.add(this.domNode,"mblVariableHeight");
this.defer("layoutVariableHeight");
}
if(!this._isOnLine){
this._isOnLine=true;
this.set({icon:this._pending_icon!==undefined?this._pending_icon:this.icon,deleteIcon:this._pending_deleteIcon!==undefined?this._pending_deleteIcon:this.deleteIcon,rightIcon:this._pending_rightIcon!==undefined?this._pending_rightIcon:this.rightIcon,rightIcon2:this._pending_rightIcon2!==undefined?this._pending_rightIcon2:this.rightIcon2,uncheckIcon:this._pending_uncheckIcon!==undefined?this._pending_uncheckIcon:this.uncheckIcon});
delete this._pending_icon;
delete this._pending_deleteIcon;
delete this._pending_rightIcon;
delete this._pending_rightIcon2;
delete this._pending_uncheckIcon;
}
if(_ac1&&_ac1.select){
this.set("checked",this._pendingChecked!==undefined?this._pendingChecked:this.checked);
_ab9.set(this.domNode,"role","option");
if(this._pendingChecked||this.checked){
_ab9.set(this.domNode,"aria-selected","true");
}
delete this._pendingChecked;
}
this.setArrow();
this.layoutChildren();
},_updateHandles:function(){
var _ac2=this.getParent();
var opts=this.getTransOpts();
if(opts.moveTo||opts.href||opts.url||this.clickable||(_ac2&&_ac2.select)){
if(!this._keydownHandle){
this._keydownHandle=this.connect(this.domNode,"onkeydown","_onClick");
}
this._handleClick=true;
}else{
if(this._keydownHandle){
this.disconnect(this._keydownHandle);
this._keydownHandle=null;
}
this._handleClick=false;
}
this.inherited(arguments);
},layoutChildren:function(){
var _ac3;
_ab4.forEach(this.domNode.childNodes,function(n){
if(n.nodeType!==1){
return;
}
var _ac4=n.getAttribute("layout")||n.getAttribute("data-mobile-layout")||(_aba.byNode(n)||{}).layout;
if(_ac4){
_ab6.add(n,"mblListItemLayout"+_ac4.charAt(0).toUpperCase()+_ac4.substring(1));
this._layoutChildren.push(n);
if(_ac4==="center"){
_ac3=n;
}
}
},this);
if(_ac3){
this.domNode.insertBefore(_ac3,this.domNode.firstChild);
}
},resize:function(){
if(this.variableHeight){
this.layoutVariableHeight();
}
if(!this._templated||this.labelNode){
this.labelNode.style.display=this.labelNode.firstChild?"block":"inline";
}
},_onTouchStart:function(e){
if(e.target.getAttribute("preventTouch")||e.target.getAttribute("data-mobile-prevent-touch")||(_aba.getEnclosingWidget(e.target)||{}).preventTouch){
return;
}
this.inherited(arguments);
},_onClick:function(e){
if(this.getParent().isEditing||e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
var n=this.labelNode;
if((this._templated||n)&&this.anchorLabel&&e.currentTarget===n){
_ab6.add(n,"mblListItemLabelSelected");
this.defer(function(){
_ab6.remove(n,"mblListItemLabelSelected");
},this._duration);
this.onAnchorLabelClicked(e);
return;
}
var _ac5=this.getParent();
if(_ac5.select){
if(_ac5.select==="single"){
if(!this.checked){
this.set("checked",true);
}
}else{
if(_ac5.select==="multiple"){
this.set("checked",!this.checked);
}
}
}
this.defaultClickAction(e);
},onClick:function(){
},onAnchorLabelClicked:function(e){
},layoutVariableHeight:function(){
var h=this.domNode.offsetHeight;
if(h===this.domNodeHeight){
return;
}
this.domNodeHeight=h;
_ab4.forEach(this._layoutChildren.concat([this.rightTextNode,this.rightIcon2Node,this.rightIconNode,this.uncheckIconNode,this.iconNode,this.deleteIconNode,this.knobIconNode]),function(n){
if(n){
var _ac6=this.domNode;
var f=function(){
var t=Math.round((_ac6.offsetHeight-n.offsetHeight)/2)-_ab8.get(_ac6,"paddingTop");
n.style.marginTop=t+"px";
};
if(n.offsetHeight===0&&n.tagName==="IMG"){
n.onload=f;
}else{
f();
}
}
},this);
},setArrow:function(){
if(this.checked){
return;
}
var c="";
var _ac7=this.getParent();
var opts=this.getTransOpts();
if(opts.moveTo||opts.href||opts.url||this.clickable){
if(!this.noArrow&&!(_ac7&&_ac7.selectOne)){
c=this.arrowClass||"mblDomButtonArrow";
_ab9.set(this.domNode,"role","button");
}
}
if(c){
this._setRightIconAttr(c);
}
},_findRef:function(type){
var i,node,list=["deleteIcon","icon","rightIcon","uncheckIcon","rightIcon2","rightText"];
for(i=_ab4.indexOf(list,type)+1;i<list.length;i++){
node=this[list[i]+"Node"];
if(node){
return node;
}
}
for(i=list.length-1;i>=0;i--){
node=this[list[i]+"Node"];
if(node){
return node.nextSibling;
}
}
return this.domNode.firstChild;
},_setIcon:function(icon,type){
if(!this._isOnLine){
this["_pending_"+type]=icon;
return;
}
this._set(type,icon);
this[type+"Node"]=_abc.setIcon(icon,this[type+"Pos"],this[type+"Node"],this[type+"Title"]||this.alt,this.domNode,this._findRef(type),"before");
if(this[type+"Node"]){
var cap=type.charAt(0).toUpperCase()+type.substring(1);
_ab6.add(this[type+"Node"],"mblListItem"+cap);
}
var role=this[type+"Role"];
if(role){
this[type+"Node"].setAttribute("role",role);
}
},_setDeleteIconAttr:function(icon){
this._setIcon(icon,"deleteIcon");
},_setIconAttr:function(icon){
this._setIcon(icon,"icon");
},_setRightTextAttr:function(text){
if(!this._templated&&!this.rightTextNode){
this.rightTextNode=_ab7.create("div",{className:"mblListItemRightText"},this.labelNode,"before");
}
this.rightText=text;
this.rightTextNode.innerHTML=this._cv?this._cv(text):text;
},_setRightIconAttr:function(icon){
this._setIcon(icon,"rightIcon");
},_setUncheckIconAttr:function(icon){
this._setIcon(icon,"uncheckIcon");
},_setRightIcon2Attr:function(icon){
this._setIcon(icon,"rightIcon2");
},_setCheckedAttr:function(_ac8){
if(!this._isOnLine){
this._pendingChecked=_ac8;
return;
}
var _ac9=this.getParent();
if(_ac9&&_ac9.select==="single"&&_ac8){
_ab4.forEach(_ac9.getChildren(),function(_aca){
_aca!==this&&_aca.checked&&_aca.set("checked",false)&&_ab9.set(_aca.domNode,"aria-selected","false");
},this);
}
this._setRightIconAttr(this.checkClass||"mblDomButtonCheck");
this._setUncheckIconAttr(this.uncheckClass);
_ab6.toggle(this.domNode,"mblListItemChecked",_ac8);
_ab6.toggle(this.domNode,"mblListItemUnchecked",!_ac8);
_ab6.toggle(this.domNode,"mblListItemHasUncheck",!!this.uncheckIconNode);
this.rightIconNode.style.position=(this.uncheckIconNode&&!_ac8)?"absolute":"";
if(_ac9&&this.checked!==_ac8){
_ac9.onCheckStateChanged(this,_ac8);
}
this._set("checked",_ac8);
_ab9.set(this.domNode,"aria-selected",_ac8?"true":"false");
},_setBusyAttr:function(busy){
var prog=this._prog;
if(busy){
if(!this._progNode){
this._progNode=_ab7.create("div",{className:"mblListItemIcon"});
prog=this._prog=new _abe({size:25,center:false,removeOnStop:false});
_ab6.add(prog.domNode,this.progStyle);
this._progNode.appendChild(prog.domNode);
}
if(this.iconNode){
this.domNode.replaceChild(this._progNode,this.iconNode);
}else{
_ab7.place(this._progNode,this._findRef("icon"),"before");
}
prog.start();
}else{
if(this._progNode){
if(this.iconNode){
this.domNode.replaceChild(this.iconNode,this._progNode);
}else{
this.domNode.removeChild(this._progNode);
}
prog.stop();
}
}
this._set("busy",busy);
},_setSelectedAttr:function(_acb){
this.inherited(arguments);
_ab6.toggle(this.domNode,this._selClass,_acb);
},_setClickableAttr:function(_acc){
this._set("clickable",_acc);
this._updateHandles();
},_setMoveToAttr:function(_acd){
this._set("moveTo",_acd);
this._updateHandles();
},_setHrefAttr:function(href){
this._set("href",href);
this._updateHandles();
},_setUrlAttr:function(url){
this._set("url",url);
this._updateHandles();
}});
_ac0.ChildWidgetProperties={layout:"",preventTouch:false};
lang.extend(_abb,_ac0.ChildWidgetProperties);
return has("dojo-bidi")?_ab5("dojox.mobile.ListItem",[_ac0,_abf]):_ac0;
});
},"dojo/regexp":function(){
define(["./_base/kernel","./_base/lang"],function(dojo,lang){
var _ace={};
lang.setObject("dojo.regexp",_ace);
_ace.escapeString=function(str,_acf){
return str.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,function(ch){
if(_acf&&_acf.indexOf(ch)!=-1){
return ch;
}
return "\\"+ch;
});
};
_ace.buildGroupRE=function(arr,re,_ad0){
if(!(arr instanceof Array)){
return re(arr);
}
var b=[];
for(var i=0;i<arr.length;i++){
b.push(re(arr[i]));
}
return _ace.group(b.join("|"),_ad0);
};
_ace.group=function(_ad1,_ad2){
return "("+(_ad2?"?:":"")+_ad1+")";
};
return _ace;
});
},"dojox/mobile/app/StageController":function(){
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/app/SceneController"],function(_ad3,dojo,_ad4){
dojo.provide("dojox.mobile.app.StageController");
dojo.experimental("dojox.mobile.app.StageController");
dojo.require("dojox.mobile.app.SceneController");
dojo.declare("dojox.mobile.app.StageController",null,{scenes:null,effect:"fade",constructor:function(node){
this.domNode=node;
this.scenes=[];
if(dojo.config.mobileAnim){
this.effect=dojo.config.mobileAnim;
}
},getActiveSceneController:function(){
return this.scenes[this.scenes.length-1];
},pushScene:function(_ad5,_ad6){
if(this._opInProgress){
return;
}
this._opInProgress=true;
var node=dojo.create("div",{"class":"scene-wrapper",style:{visibility:"hidden"}},this.domNode);
var _ad7=new _ad4.mobile.app.SceneController({},node);
if(this.scenes.length>0){
this.scenes[this.scenes.length-1].assistant.deactivate();
}
this.scenes.push(_ad7);
var _ad8=this;
dojo.forEach(this.scenes,this.setZIndex);
_ad7.stageController=this;
_ad7.init(_ad5,_ad6).addCallback(function(){
if(_ad8.scenes.length==1){
_ad7.domNode.style.visibility="visible";
_ad8.scenes[_ad8.scenes.length-1].assistant.activate(_ad6);
_ad8._opInProgress=false;
}else{
_ad8.scenes[_ad8.scenes.length-2].performTransition(_ad8.scenes[_ad8.scenes.length-1].domNode,1,_ad8.effect,null,function(){
_ad8.scenes[_ad8.scenes.length-1].assistant.activate(_ad6);
_ad8._opInProgress=false;
});
}
});
},setZIndex:function(_ad9,idx){
dojo.style(_ad9.domNode,"zIndex",idx+1);
},popScene:function(data){
if(this._opInProgress){
return;
}
var _ada=this;
if(this.scenes.length>1){
this._opInProgress=true;
this.scenes[_ada.scenes.length-2].assistant.activate(data);
this.scenes[_ada.scenes.length-1].performTransition(_ada.scenes[this.scenes.length-2].domNode,-1,this.effect,null,function(){
_ada._destroyScene(_ada.scenes[_ada.scenes.length-1]);
_ada.scenes.splice(_ada.scenes.length-1,1);
_ada._opInProgress=false;
});
}else{
}
},popScenesTo:function(_adb,data){
if(this._opInProgress){
return;
}
while(this.scenes.length>2&&this.scenes[this.scenes.length-2].sceneName!=_adb){
this._destroyScene(this.scenes[this.scenes.length-2]);
this.scenes.splice(this.scenes.length-2,1);
}
this.popScene(data);
},_destroyScene:function(_adc){
_adc.assistant.deactivate();
_adc.assistant.destroy();
_adc.destroyRecursive();
}});
});
},"dijit/place":function(){
define(["dojo/_base/array","dojo/dom-geometry","dojo/dom-style","dojo/_base/kernel","dojo/_base/window","./Viewport","./main"],function(_add,_ade,_adf,_ae0,win,_ae1,_ae2){
function _ae3(node,_ae4,_ae5,_ae6){
var view=_ae1.getEffectiveBox(node.ownerDocument);
if(!node.parentNode||String(node.parentNode.tagName).toLowerCase()!="body"){
win.body(node.ownerDocument).appendChild(node);
}
var best=null;
_add.some(_ae4,function(_ae7){
var _ae8=_ae7.corner;
var pos=_ae7.pos;
var _ae9=0;
var _aea={w:{"L":view.l+view.w-pos.x,"R":pos.x-view.l,"M":view.w}[_ae8.charAt(1)],h:{"T":view.t+view.h-pos.y,"B":pos.y-view.t,"M":view.h}[_ae8.charAt(0)]};
var s=node.style;
s.left=s.right="auto";
if(_ae5){
var res=_ae5(node,_ae7.aroundCorner,_ae8,_aea,_ae6);
_ae9=typeof res=="undefined"?0:res;
}
var _aeb=node.style;
var _aec=_aeb.display;
var _aed=_aeb.visibility;
if(_aeb.display=="none"){
_aeb.visibility="hidden";
_aeb.display="";
}
var bb=_ade.position(node);
_aeb.display=_aec;
_aeb.visibility=_aed;
var _aee={"L":pos.x,"R":pos.x-bb.w,"M":Math.max(view.l,Math.min(view.l+view.w,pos.x+(bb.w>>1))-bb.w)}[_ae8.charAt(1)],_aef={"T":pos.y,"B":pos.y-bb.h,"M":Math.max(view.t,Math.min(view.t+view.h,pos.y+(bb.h>>1))-bb.h)}[_ae8.charAt(0)],_af0=Math.max(view.l,_aee),_af1=Math.max(view.t,_aef),endX=Math.min(view.l+view.w,_aee+bb.w),endY=Math.min(view.t+view.h,_aef+bb.h),_af2=endX-_af0,_af3=endY-_af1;
_ae9+=(bb.w-_af2)+(bb.h-_af3);
if(best==null||_ae9<best.overflow){
best={corner:_ae8,aroundCorner:_ae7.aroundCorner,x:_af0,y:_af1,w:_af2,h:_af3,overflow:_ae9,spaceAvailable:_aea};
}
return !_ae9;
});
if(best.overflow&&_ae5){
_ae5(node,best.aroundCorner,best.corner,best.spaceAvailable,_ae6);
}
var l=_ade.isBodyLtr(node.ownerDocument),top=best.y,side=l?best.x:view.w-best.x-best.w;
if(/relative|absolute/.test(_adf.get(win.body(node.ownerDocument),"position"))){
top-=_adf.get(win.body(node.ownerDocument),"marginTop");
side-=(l?1:-1)*_adf.get(win.body(node.ownerDocument),l?"marginLeft":"marginRight");
}
var s=node.style;
s.top=top+"px";
s[l?"left":"right"]=side+"px";
s[l?"right":"left"]="auto";
return best;
};
var _af4={"TL":"BR","TR":"BL","BL":"TR","BR":"TL"};
var _af5={at:function(node,pos,_af6,_af7,_af8){
var _af9=_add.map(_af6,function(_afa){
var c={corner:_afa,aroundCorner:_af4[_afa],pos:{x:pos.x,y:pos.y}};
if(_af7){
c.pos.x+=_afa.charAt(1)=="L"?_af7.x:-_af7.x;
c.pos.y+=_afa.charAt(0)=="T"?_af7.y:-_af7.y;
}
return c;
});
return _ae3(node,_af9,_af8);
},around:function(node,_afb,_afc,_afd,_afe){
var _aff;
if(typeof _afb=="string"||"offsetWidth" in _afb){
_aff=_ade.position(_afb,true);
if(/^(above|below)/.test(_afc[0])){
var _b00=_ade.getBorderExtents(_afb),_b01=_afb.firstChild?_ade.getBorderExtents(_afb.firstChild):{t:0,l:0,b:0,r:0},_b02=_ade.getBorderExtents(node),_b03=node.firstChild?_ade.getBorderExtents(node.firstChild):{t:0,l:0,b:0,r:0};
_aff.y+=Math.min(_b00.t+_b01.t,_b02.t+_b03.t);
_aff.h-=Math.min(_b00.t+_b01.t,_b02.t+_b03.t)+Math.min(_b00.b+_b01.b,_b02.b+_b03.b);
}
}else{
_aff=_afb;
}
if(_afb.parentNode){
var _b04=_adf.getComputedStyle(_afb).position=="absolute";
var _b05=_afb.parentNode;
while(_b05&&_b05.nodeType==1&&_b05.nodeName!="BODY"){
var _b06=_ade.position(_b05,true),pcs=_adf.getComputedStyle(_b05);
if(/relative|absolute/.test(pcs.position)){
_b04=false;
}
if(!_b04&&/hidden|auto|scroll/.test(pcs.overflow)){
var _b07=Math.min(_aff.y+_aff.h,_b06.y+_b06.h);
var _b08=Math.min(_aff.x+_aff.w,_b06.x+_b06.w);
_aff.x=Math.max(_aff.x,_b06.x);
_aff.y=Math.max(_aff.y,_b06.y);
_aff.h=_b07-_aff.y;
_aff.w=_b08-_aff.x;
}
if(pcs.position=="absolute"){
_b04=true;
}
_b05=_b05.parentNode;
}
}
var x=_aff.x,y=_aff.y,_b09="w" in _aff?_aff.w:(_aff.w=_aff.width),_b0a="h" in _aff?_aff.h:(_ae0.deprecated("place.around: dijit/place.__Rectangle: { x:"+x+", y:"+y+", height:"+_aff.height+", width:"+_b09+" } has been deprecated.  Please use { x:"+x+", y:"+y+", h:"+_aff.height+", w:"+_b09+" }","","2.0"),_aff.h=_aff.height);
var _b0b=[];
function push(_b0c,_b0d){
_b0b.push({aroundCorner:_b0c,corner:_b0d,pos:{x:{"L":x,"R":x+_b09,"M":x+(_b09>>1)}[_b0c.charAt(1)],y:{"T":y,"B":y+_b0a,"M":y+(_b0a>>1)}[_b0c.charAt(0)]}});
};
_add.forEach(_afc,function(pos){
var ltr=_afd;
switch(pos){
case "above-centered":
push("TM","BM");
break;
case "below-centered":
push("BM","TM");
break;
case "after-centered":
ltr=!ltr;
case "before-centered":
push(ltr?"ML":"MR",ltr?"MR":"ML");
break;
case "after":
ltr=!ltr;
case "before":
push(ltr?"TL":"TR",ltr?"TR":"TL");
push(ltr?"BL":"BR",ltr?"BR":"BL");
break;
case "below-alt":
ltr=!ltr;
case "below":
push(ltr?"BL":"BR",ltr?"TL":"TR");
push(ltr?"BR":"BL",ltr?"TR":"TL");
break;
case "above-alt":
ltr=!ltr;
case "above":
push(ltr?"TL":"TR",ltr?"BL":"BR");
push(ltr?"TR":"TL",ltr?"BR":"BL");
break;
default:
push(pos.aroundCorner,pos.corner);
}
});
var _b0e=_ae3(node,_b0b,_afe,{w:_b09,h:_b0a});
_b0e.aroundNodePos=_aff;
return _b0e;
}};
return _ae2.place=_af5;
});
},"dojo/date":function(){
define(["./has","./_base/lang"],function(has,lang){
var date={};
date.getDaysInMonth=function(_b0f){
var _b10=_b0f.getMonth();
var days=[31,28,31,30,31,30,31,31,30,31,30,31];
if(_b10==1&&date.isLeapYear(_b0f)){
return 29;
}
return days[_b10];
};
date.isLeapYear=function(_b11){
var year=_b11.getFullYear();
return !(year%400)||(!(year%4)&&!!(year%100));
};
date.getTimezoneName=function(_b12){
var str=_b12.toString();
var tz="";
var _b13;
var pos=str.indexOf("(");
if(pos>-1){
tz=str.substring(++pos,str.indexOf(")"));
}else{
var pat=/([A-Z\/]+) \d{4}$/;
if((_b13=str.match(pat))){
tz=_b13[1];
}else{
str=_b12.toLocaleString();
pat=/ ([A-Z\/]+)$/;
if((_b13=str.match(pat))){
tz=_b13[1];
}
}
}
return (tz=="AM"||tz=="PM")?"":tz;
};
date.compare=function(_b14,_b15,_b16){
_b14=new Date(+_b14);
_b15=new Date(+(_b15||new Date()));
if(_b16=="date"){
_b14.setHours(0,0,0,0);
_b15.setHours(0,0,0,0);
}else{
if(_b16=="time"){
_b14.setFullYear(0,0,0);
_b15.setFullYear(0,0,0);
}
}
if(_b14>_b15){
return 1;
}
if(_b14<_b15){
return -1;
}
return 0;
};
date.add=function(date,_b17,_b18){
var sum=new Date(+date);
var _b19=false;
var _b1a="Date";
switch(_b17){
case "day":
break;
case "weekday":
var days,_b1b;
var mod=_b18%5;
if(!mod){
days=(_b18>0)?5:-5;
_b1b=(_b18>0)?((_b18-5)/5):((_b18+5)/5);
}else{
days=mod;
_b1b=parseInt(_b18/5);
}
var strt=date.getDay();
var adj=0;
if(strt==6&&_b18>0){
adj=1;
}else{
if(strt==0&&_b18<0){
adj=-1;
}
}
var trgt=strt+days;
if(trgt==0||trgt==6){
adj=(_b18>0)?2:-2;
}
_b18=(7*_b1b)+days+adj;
break;
case "year":
_b1a="FullYear";
_b19=true;
break;
case "week":
_b18*=7;
break;
case "quarter":
_b18*=3;
case "month":
_b19=true;
_b1a="Month";
break;
default:
_b1a="UTC"+_b17.charAt(0).toUpperCase()+_b17.substring(1)+"s";
}
if(_b1a){
sum["set"+_b1a](sum["get"+_b1a]()+_b18);
}
if(_b19&&(sum.getDate()<date.getDate())){
sum.setDate(0);
}
return sum;
};
date.difference=function(_b1c,_b1d,_b1e){
_b1d=_b1d||new Date();
_b1e=_b1e||"day";
var _b1f=_b1d.getFullYear()-_b1c.getFullYear();
var _b20=1;
switch(_b1e){
case "quarter":
var m1=_b1c.getMonth();
var m2=_b1d.getMonth();
var q1=Math.floor(m1/3)+1;
var q2=Math.floor(m2/3)+1;
q2+=(_b1f*4);
_b20=q2-q1;
break;
case "weekday":
var days=Math.round(date.difference(_b1c,_b1d,"day"));
var _b21=parseInt(date.difference(_b1c,_b1d,"week"));
var mod=days%7;
if(mod==0){
days=_b21*5;
}else{
var adj=0;
var aDay=_b1c.getDay();
var bDay=_b1d.getDay();
_b21=parseInt(days/7);
mod=days%7;
var _b22=new Date(_b1c);
_b22.setDate(_b22.getDate()+(_b21*7));
var _b23=_b22.getDay();
if(days>0){
switch(true){
case aDay==6:
adj=-1;
break;
case aDay==0:
adj=0;
break;
case bDay==6:
adj=-1;
break;
case bDay==0:
adj=-2;
break;
case (_b23+mod)>5:
adj=-2;
}
}else{
if(days<0){
switch(true){
case aDay==6:
adj=0;
break;
case aDay==0:
adj=1;
break;
case bDay==6:
adj=2;
break;
case bDay==0:
adj=1;
break;
case (_b23+mod)<0:
adj=2;
}
}
}
days+=adj;
days-=(_b21*2);
}
_b20=days;
break;
case "year":
_b20=_b1f;
break;
case "month":
_b20=(_b1d.getMonth()-_b1c.getMonth())+(_b1f*12);
break;
case "week":
_b20=parseInt(date.difference(_b1c,_b1d,"day")/7);
break;
case "day":
_b20/=24;
case "hour":
_b20/=60;
case "minute":
_b20/=60;
case "second":
_b20/=1000;
case "millisecond":
_b20*=_b1d.getTime()-_b1c.getTime();
}
return Math.round(_b20);
};
1&&lang.mixin(lang.getObject("dojo.date",true),date);
return date;
});
},"dojox/mobile/ExpandingTextArea":function(){
define(["dojo/_base/declare","dijit/form/_ExpandingTextAreaMixin","./TextArea"],function(_b24,_b25,_b26){
return _b24("dojox.mobile.ExpandingTextArea",[_b26,_b25],{baseClass:"mblTextArea mblExpandingTextArea"});
});
},"dijit/form/_CheckBoxMixin":function(){
define(["dojo/_base/declare","dojo/dom-attr"],function(_b27,_b28){
return _b27("dijit.form._CheckBoxMixin",null,{type:"checkbox",value:"on",readOnly:false,_aria_attr:"aria-checked",_setReadOnlyAttr:function(_b29){
this._set("readOnly",_b29);
_b28.set(this.focusNode,"readOnly",_b29);
},_setLabelAttr:undefined,_getSubmitValue:function(_b2a){
return (_b2a==null||_b2a==="")?"on":_b2a;
},_setValueAttr:function(_b2b){
_b2b=this._getSubmitValue(_b2b);
this._set("value",_b2b);
_b28.set(this.focusNode,"value",_b2b);
},reset:function(){
this.inherited(arguments);
this._set("value",this._getSubmitValue(this.params.value));
_b28.set(this.focusNode,"value",this.value);
},_onClick:function(e){
if(this.readOnly){
e.stopPropagation();
e.preventDefault();
return false;
}
return this.inherited(arguments);
}});
});
},"dojox/mobile/app/_event":function(){
define(["dijit","dojo","dojox"],function(_b2c,dojo,_b2d){
dojo.provide("dojox.mobile.app._event");
dojo.experimental("dojox.mobile.app._event.js");
dojo.mixin(_b2d.mobile.app,{eventMap:{},connectFlick:function(_b2e,_b2f,_b30){
var _b31;
var _b32;
var _b33=false;
var _b34;
var _b35;
var _b36;
var _b37;
var _b38;
var time;
var _b39=dojo.connect("onmousedown",_b2e,function(_b3a){
_b33=false;
_b31=_b3a.targetTouches?_b3a.targetTouches[0].clientX:_b3a.clientX;
_b32=_b3a.targetTouches?_b3a.targetTouches[0].clientY:_b3a.clientY;
time=(new Date()).getTime();
_b36=dojo.connect(_b2e,"onmousemove",_b3b);
_b37=dojo.connect(_b2e,"onmouseup",onUp);
});
var _b3b=function(_b3c){
dojo.stopEvent(_b3c);
_b34=_b3c.targetTouches?_b3c.targetTouches[0].clientX:_b3c.clientX;
_b35=_b3c.targetTouches?_b3c.targetTouches[0].clientY:_b3c.clientY;
if(Math.abs(Math.abs(_b34)-Math.abs(_b31))>15){
_b33=true;
_b38=(_b34>_b31)?"ltr":"rtl";
}else{
if(Math.abs(Math.abs(_b35)-Math.abs(_b32))>15){
_b33=true;
_b38=(_b35>_b32)?"ttb":"btt";
}
}
};
var onUp=function(_b3d){
dojo.stopEvent(_b3d);
_b36&&dojo.disconnect(_b36);
_b37&&dojo.disconnect(_b37);
if(_b33){
var _b3e={target:_b2e,direction:_b38,duration:(new Date()).getTime()-time};
if(_b2f&&_b30){
_b2f[_b30](_b3e);
}else{
_b30(_b3e);
}
}
};
}});
_b2d.mobile.app.isIPhone=(dojo.isSafari&&(navigator.userAgent.indexOf("iPhone")>-1||navigator.userAgent.indexOf("iPod")>-1));
_b2d.mobile.app.isWebOS=(navigator.userAgent.indexOf("webOS")>-1);
_b2d.mobile.app.isAndroid=(navigator.userAgent.toLowerCase().indexOf("android")>-1);
if(_b2d.mobile.app.isIPhone||_b2d.mobile.app.isAndroid){
_b2d.mobile.app.eventMap={onmousedown:"ontouchstart",mousedown:"ontouchstart",onmouseup:"ontouchend",mouseup:"ontouchend",onmousemove:"ontouchmove",mousemove:"ontouchmove"};
}
dojo._oldConnect=dojo._connect;
dojo._connect=function(obj,_b3f,_b40,_b41,_b42){
_b3f=_b2d.mobile.app.eventMap[_b3f]||_b3f;
if(_b3f=="flick"||_b3f=="onflick"){
if(dojo.global["Mojo"]){
_b3f=Mojo.Event.flick;
}else{
return _b2d.mobile.app.connectFlick(obj,_b40,_b41);
}
}
return dojo._oldConnect(obj,_b3f,_b40,_b41,_b42);
};
});
},"dojox/mobile/app/_FormWidget":function(){
define(["dijit","dojo","dojox","dojo/require!dojo/window,dijit/_WidgetBase,dijit/focus"],function(_b43,dojo,_b44){
dojo.provide("dojox.mobile.app._FormWidget");
dojo.experimental("dojox.mobile.app._FormWidget");
dojo.require("dojo.window");
dojo.require("dijit._WidgetBase");
dojo.require("dijit.focus");
dojo.declare("dojox.mobile.app._FormWidget",_b43._WidgetBase,{name:"",alt:"",value:"",type:"text",disabled:false,intermediateChanges:false,scrollOnFocus:false,attributeMap:dojo.delegate(_b43._WidgetBase.prototype.attributeMap,{value:"focusNode",id:"focusNode",alt:"focusNode",title:"focusNode"}),postMixInProperties:function(){
this.nameAttrSetting=this.name?("name=\""+this.name.replace(/'/g,"&quot;")+"\""):"";
this.inherited(arguments);
},postCreate:function(){
this.inherited(arguments);
this.connect(this.domNode,"onmousedown","_onMouseDown");
},_setDisabledAttr:function(_b45){
this.disabled=_b45;
dojo.attr(this.focusNode,"disabled",_b45);
if(this.valueNode){
dojo.attr(this.valueNode,"disabled",_b45);
}
},_onFocus:function(e){
if(this.scrollOnFocus){
dojo.window.scrollIntoView(this.domNode);
}
this.inherited(arguments);
},isFocusable:function(){
return !this.disabled&&!this.readOnly&&this.focusNode&&(dojo.style(this.domNode,"display")!="none");
},focus:function(){
this.focusNode.focus();
},compare:function(val1,val2){
if(typeof val1=="number"&&typeof val2=="number"){
return (isNaN(val1)&&isNaN(val2))?0:val1-val2;
}else{
if(val1>val2){
return 1;
}else{
if(val1<val2){
return -1;
}else{
return 0;
}
}
}
},onChange:function(_b46){
},_onChangeActive:false,_handleOnChange:function(_b47,_b48){
this._lastValue=_b47;
if(this._lastValueReported==undefined&&(_b48===null||!this._onChangeActive)){
this._resetValue=this._lastValueReported=_b47;
}
if((this.intermediateChanges||_b48||_b48===undefined)&&((typeof _b47!=typeof this._lastValueReported)||this.compare(_b47,this._lastValueReported)!=0)){
this._lastValueReported=_b47;
if(this._onChangeActive){
if(this._onChangeHandle){
clearTimeout(this._onChangeHandle);
}
this._onChangeHandle=setTimeout(dojo.hitch(this,function(){
this._onChangeHandle=null;
this.onChange(_b47);
}),0);
}
}
},create:function(){
this.inherited(arguments);
this._onChangeActive=true;
},destroy:function(){
if(this._onChangeHandle){
clearTimeout(this._onChangeHandle);
this.onChange(this._lastValueReported);
}
this.inherited(arguments);
},_onMouseDown:function(e){
if(this.isFocusable()){
var _b49=this.connect(dojo.body(),"onmouseup",function(){
if(this.isFocusable()){
this.focus();
}
this.disconnect(_b49);
});
}
},selectInputText:function(_b4a,_b4b,stop){
var _b4c=dojo.global;
var _b4d=dojo.doc;
_b4a=dojo.byId(_b4a);
if(isNaN(_b4b)){
_b4b=0;
}
if(isNaN(stop)){
stop=_b4a.value?_b4a.value.length:0;
}
_b43.focus(_b4a);
if(_b4c["getSelection"]&&_b4a.setSelectionRange){
_b4a.setSelectionRange(_b4b,stop);
}
}});
dojo.declare("dojox.mobile.app._FormValueWidget",_b44.mobile.app._FormWidget,{readOnly:false,attributeMap:dojo.delegate(_b44.mobile.app._FormWidget.prototype.attributeMap,{value:"",readOnly:"focusNode"}),_setReadOnlyAttr:function(_b4e){
this.readOnly=_b4e;
dojo.attr(this.focusNode,"readOnly",_b4e);
},postCreate:function(){
this.inherited(arguments);
if(this._resetValue===undefined){
this._resetValue=this.value;
}
},_setValueAttr:function(_b4f,_b50){
this.value=_b4f;
this._handleOnChange(_b4f,_b50);
},_getValueAttr:function(){
return this._lastValue;
},undo:function(){
this._setValueAttr(this._lastValueReported,false);
},reset:function(){
this._hasBeenBlurred=false;
this._setValueAttr(this._resetValue,true);
}});
});
},"dojox/mobile/_base":function(){
define(["./common","./View","./Heading","./RoundRect","./RoundRectCategory","./EdgeToEdgeCategory","./RoundRectList","./EdgeToEdgeList","./ListItem","./Container","./Pane","./Switch","./ToolBarButton","./ProgressIndicator"],function(_b51,View,_b52,_b53,_b54,_b55,_b56,_b57,_b58,_b59,_b5a,_b5b){
return _b51;
});
},"dojox/mobile/Button":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_ButtonMixin","dijit/form/_FormWidgetMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Button"],function(_b5c,_b5d,_b5e,_b5f,_b60,_b61,_b62,has,_b63){
var _b64=_b5d(has("dojo-bidi")?"dojox.mobile.NonBidiButton":"dojox.mobile.Button",[_b60,_b62,_b61],{baseClass:"mblButton",_setTypeAttr:null,duration:1000,_onClick:function(e){
var ret=this.inherited(arguments);
if(ret&&this.duration>=0){
var _b65=this.focusNode||this.domNode;
var _b66=(this.baseClass+" "+this["class"]).split(" ");
_b66=_b5c.map(_b66,function(c){
return c+"Selected";
});
_b5e.add(_b65,_b66);
this.defer(function(){
_b5e.remove(_b65,_b66);
},this.duration);
}
return ret;
},isFocusable:function(){
return false;
},buildRendering:function(){
if(!this.srcNodeRef){
this.srcNodeRef=_b5f.create("button",{"type":this.type});
}else{
if(this._cv){
var n=this.srcNodeRef.firstChild;
if(n&&n.nodeType===3){
n.nodeValue=this._cv(n.nodeValue);
}
}
}
this.inherited(arguments);
this.focusNode=this.domNode;
},postCreate:function(){
this.inherited(arguments);
this.connect(this.domNode,"onclick","_onClick");
},_setLabelAttr:function(_b67){
this.inherited(arguments,[this._cv?this._cv(_b67):_b67]);
}});
return has("dojo-bidi")?_b5d("dojox.mobile.Button",[_b64,_b63]):_b64;
});
},"dojox/mobile/_ScrollableMixin":function(){
define(["dojo/_base/kernel","dojo/_base/config","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom","dojo/dom-class","dijit/registry","./scrollable"],function(dojo,_b68,_b69,lang,win,dom,_b6a,_b6b,_b6c){
var cls=_b69("dojox.mobile._ScrollableMixin",_b6c,{fixedHeader:"",fixedFooter:"",_fixedAppFooter:"",scrollableParams:null,allowNestedScrolls:true,appBars:true,constructor:function(){
this.scrollableParams={};
},destroy:function(){
this.cleanup();
this.inherited(arguments);
},startup:function(){
if(this._started){
return;
}
if(this._fixedAppFooter){
this._fixedAppFooter=dom.byId(this._fixedAppFooter);
}
this.findAppBars();
var node,_b6d=this.scrollableParams;
if(this.fixedHeader){
node=dom.byId(this.fixedHeader);
if(node.parentNode==this.domNode){
this.isLocalHeader=true;
}
_b6d.fixedHeaderHeight=node.offsetHeight;
}
if(this.fixedFooter){
node=dom.byId(this.fixedFooter);
if(node.parentNode==this.domNode){
this.isLocalFooter=true;
node.style.bottom="0px";
}
_b6d.fixedFooterHeight=node.offsetHeight;
}
this.scrollType=this.scrollType||_b68["mblScrollableScrollType"]||0;
this.init(_b6d);
if(this.allowNestedScrolls){
for(var p=this.getParent();p;p=p.getParent()){
if(p&&p.scrollableParams){
this.dirLock=true;
p.dirLock=true;
break;
}
}
}
this._resizeHandle=this.subscribe("/dojox/mobile/afterResizeAll",function(){
if(this.domNode.style.display==="none"){
return;
}
var elem=win.doc.activeElement;
if(this.isFormElement(elem)&&dom.isDescendant(elem,this.containerNode)){
this.scrollIntoView(elem);
}
});
this.inherited(arguments);
},findAppBars:function(){
if(!this.appBars){
return;
}
var i,len,c;
for(i=0,len=win.body().childNodes.length;i<len;i++){
c=win.body().childNodes[i];
this.checkFixedBar(c,false);
}
if(this.domNode.parentNode){
for(i=0,len=this.domNode.parentNode.childNodes.length;i<len;i++){
c=this.domNode.parentNode.childNodes[i];
this.checkFixedBar(c,false);
}
}
this.fixedFooterHeight=this.fixedFooter?this.fixedFooter.offsetHeight:0;
},checkFixedBar:function(node,_b6e){
if(node.nodeType===1){
var _b6f=node.getAttribute("fixed")||node.getAttribute("data-mobile-fixed")||(_b6b.byNode(node)&&_b6b.byNode(node).fixed);
if(_b6f==="top"){
_b6a.add(node,"mblFixedHeaderBar");
if(_b6e){
node.style.top="0px";
this.fixedHeader=node;
}
return _b6f;
}else{
if(_b6f==="bottom"){
_b6a.add(node,"mblFixedBottomBar");
if(_b6e){
this.fixedFooter=node;
}else{
this._fixedAppFooter=node;
}
return _b6f;
}
}
}
return null;
}});
return cls;
});
},"dojox/mobile/Switch":function(){
define(["dojo/_base/array","dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","dojo/touch","dijit/_Contained","dijit/_WidgetBase","./sniff","./_maskUtils","./common","dojo/has!dojo-bidi?dojox/mobile/bidi/Switch"],function(_b70,_b71,_b72,_b73,win,_b74,_b75,_b76,_b77,_b78,_b79,_b7a,has,_b7b,dm,_b7c){
var _b7d=_b72(has("dojo-bidi")?"dojox.mobile.NonBidiSwitch":"dojox.mobile.Switch",[_b7a,_b79],{value:"on",name:"",leftLabel:"ON",rightLabel:"OFF",shape:"mblSwDefaultShape",tabIndex:"0",_setTabIndexAttr:"",baseClass:"mblSwitch",role:"",buildRendering:function(){
if(!this.templateString){
this.domNode=(this.srcNodeRef&&this.srcNodeRef.tagName==="SPAN")?this.srcNodeRef:_b75.create("span");
}
if(typeof this.domNode.style.msTouchAction!="undefined"){
this.domNode.style.msTouchAction="none";
}
this.inherited(arguments);
if(!this.templateString){
var c=(this.srcNodeRef&&this.srcNodeRef.className)||this.className||this["class"];
if((c=c.match(/mblSw.*Shape\d*/))){
this.shape=c;
}
_b74.add(this.domNode,this.shape);
var _b7e=this.name?" name=\""+this.name+"\"":"";
this.domNode.innerHTML="<div class=\"mblSwitchInner\">"+"<div class=\"mblSwitchBg mblSwitchBgLeft\">"+"<div class=\"mblSwitchText mblSwitchTextLeft\"></div>"+"</div>"+"<div class=\"mblSwitchBg mblSwitchBgRight\">"+"<div class=\"mblSwitchText mblSwitchTextRight\"></div>"+"</div>"+"<div class=\"mblSwitchKnob\"></div>"+"<input type=\"hidden\""+_b7e+"></div>"+"</div>";
var n=this.inner=this.domNode.firstChild;
this.left=n.childNodes[0];
this.right=n.childNodes[1];
this.knob=n.childNodes[2];
this.input=n.childNodes[3];
}
_b77.set(this.domNode,"role","checkbox");
_b77.set(this.domNode,"aria-checked",(this.value==="on")?"true":"false");
this.switchNode=this.domNode;
if(has("windows-theme")){
var _b7f=_b75.create("div",{className:"mblSwitchContainer"});
this.labelNode=_b75.create("label",{"class":"mblSwitchLabel","for":this.id},_b7f);
_b7f.appendChild(this.domNode.cloneNode(true));
this.domNode=_b7f;
this.focusNode=_b7f.childNodes[1];
this.labelNode.innerHTML=(this.value=="off")?this.rightLabel:this.leftLabel;
this.switchNode=this.domNode.childNodes[1];
var _b80=this.inner=this.domNode.childNodes[1].firstChild;
this.left=_b80.childNodes[0];
this.right=_b80.childNodes[1];
this.knob=_b80.childNodes[2];
this.input=_b80.childNodes[3];
}
},postCreate:function(){
this.connect(this.switchNode,"onclick","_onClick");
this.connect(this.switchNode,"onkeydown","_onClick");
this._startHandle=this.connect(this.switchNode,_b78.press,"onTouchStart");
this._initialValue=this.value;
},_changeState:function(_b81,anim){
var on=(_b81==="on");
this.left.style.display="";
this.right.style.display="";
this.inner.style.left="";
if(anim){
_b74.add(this.switchNode,"mblSwitchAnimation");
}
_b74.remove(this.switchNode,on?"mblSwitchOff":"mblSwitchOn");
_b74.add(this.switchNode,on?"mblSwitchOn":"mblSwitchOff");
_b77.set(this.switchNode,"aria-checked",on?"true":"false");
var _b82=this;
_b82.defer(function(){
_b82.left.style.display=on?"":"none";
_b82.right.style.display=!on?"":"none";
_b74.remove(_b82.switchNode,"mblSwitchAnimation");
},anim?300:0);
},_createMaskImage:function(){
if(this._timer){
this._timer.remove();
delete this._timer;
}
if(this._hasMaskImage){
return;
}
this._width=this.switchNode.offsetWidth-this.knob.offsetWidth;
this._hasMaskImage=true;
if(!(has("webkit")||has("svg"))){
return;
}
var rDef=_b76.get(this.left,"borderTopLeftRadius");
if(rDef=="0px"){
return;
}
var _b83=rDef.split(" ");
var rx=parseFloat(_b83[0]),ry=(_b83.length==1)?rx:parseFloat(_b83[1]);
var w=this.switchNode.offsetWidth,h=this.switchNode.offsetHeight;
var id=(this.shape+"Mask"+w+h+rx+ry).replace(/\./,"_");
_b7b.createRoundMask(this.switchNode,0,0,0,0,w,h,rx,ry,1);
},_onClick:function(e){
if(e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
if(this._moved){
return;
}
this.value=this.input.value=(this.value=="on")?"off":"on";
this._changeState(this.value,true);
this.onStateChanged(this.value);
},onClick:function(){
},onTouchStart:function(e){
this._moved=false;
this.innerStartX=this.inner.offsetLeft;
if(!this._conn){
this._conn=[this.connect(this.inner,_b78.move,"onTouchMove"),this.connect(win.doc,_b78.release,"onTouchEnd")];
if(has("windows-theme")){
this._conn.push(this.connect(win.doc,"MSPointerCancel","onTouchEnd"));
}
}
this.touchStartX=e.touches?e.touches[0].pageX:e.clientX;
this.left.style.display="";
this.right.style.display="";
_b73.stop(e);
this._createMaskImage();
},onTouchMove:function(e){
e.preventDefault();
var dx;
if(e.targetTouches){
if(e.targetTouches.length!=1){
return;
}
dx=e.targetTouches[0].clientX-this.touchStartX;
}else{
dx=e.clientX-this.touchStartX;
}
var pos=this.innerStartX+dx;
var d=10;
if(pos<=-(this._width-d)){
pos=-this._width;
}
if(pos>=-d){
pos=0;
}
this.inner.style.left=pos+"px";
if(Math.abs(dx)>d){
this._moved=true;
}
},onTouchEnd:function(e){
_b70.forEach(this._conn,_b71.disconnect);
this._conn=null;
if(this.innerStartX==this.inner.offsetLeft){
if(has("touch")&&has("clicks-prevented")){
dm._sendClick(this.inner,e);
}
return;
}
var _b84=(this.inner.offsetLeft<-(this._width/2))?"off":"on";
_b84=this._newState(_b84);
this._changeState(_b84,true);
if(_b84!=this.value){
this.value=this.input.value=_b84;
this.onStateChanged(_b84);
}
},_newState:function(_b85){
return _b85;
},onStateChanged:function(_b86){
if(this.labelNode){
this.labelNode.innerHTML=_b86=="off"?this.rightLabel:this.leftLabel;
}
},_setValueAttr:function(_b87){
this._changeState(_b87,false);
if(this.value!=_b87){
this.onStateChanged(_b87);
}
this.value=this.input.value=_b87;
},_setLeftLabelAttr:function(_b88){
this.leftLabel=_b88;
this.left.firstChild.innerHTML=this._cv?this._cv(_b88):_b88;
},_setRightLabelAttr:function(_b89){
this.rightLabel=_b89;
this.right.firstChild.innerHTML=this._cv?this._cv(_b89):_b89;
},reset:function(){
this.set("value",this._initialValue);
}});
return has("dojo-bidi")?_b72("dojox.mobile.Switch",[_b7d,_b7c]):_b7d;
});
},"dijit/form/_ToggleButtonMixin":function(){
define(["dojo/_base/declare","dojo/dom-attr"],function(_b8a,_b8b){
return _b8a("dijit.form._ToggleButtonMixin",null,{checked:false,_aria_attr:"aria-pressed",_onClick:function(evt){
var _b8c=this.checked;
this._set("checked",!_b8c);
var ret=this.inherited(arguments);
this.set("checked",ret?this.checked:_b8c);
return ret;
},_setCheckedAttr:function(_b8d,_b8e){
this._set("checked",_b8d);
var node=this.focusNode||this.domNode;
if(this._created){
if(_b8b.get(node,"checked")!=!!_b8d){
_b8b.set(node,"checked",!!_b8d);
}
}
node.setAttribute(this._aria_attr,String(_b8d));
this._handleOnChange(_b8d,_b8e);
},postCreate:function(){
this.inherited(arguments);
var node=this.focusNode||this.domNode;
if(this.checked){
node.setAttribute("checked","checked");
}
},reset:function(){
this._hasBeenBlurred=false;
this.set("checked",this.params.checked||false);
}});
});
},"dijit/focus":function(){
define(["dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/Evented","dojo/_base/lang","dojo/on","dojo/domReady","dojo/sniff","dojo/Stateful","dojo/_base/window","dojo/window","./a11y","./registry","./main"],function(_b8f,_b90,dom,_b91,_b92,_b93,lang,on,_b94,has,_b95,win,_b96,a11y,_b97,_b98){
var _b99;
var _b9a=_b90([_b95,_b93],{curNode:null,activeStack:[],constructor:function(){
var _b9b=lang.hitch(this,function(node){
if(dom.isDescendant(this.curNode,node)){
this.set("curNode",null);
}
if(dom.isDescendant(this.prevNode,node)){
this.set("prevNode",null);
}
});
_b8f.before(_b92,"empty",_b9b);
_b8f.before(_b92,"destroy",_b9b);
},registerIframe:function(_b9c){
return this.registerWin(_b9c.contentWindow,_b9c);
},registerWin:function(_b9d,_b9e){
var _b9f=this,body=_b9d.document&&_b9d.document.body;
if(body){
var mdh=on(_b9d.document,"mousedown, touchstart",function(evt){
_b9f._justMouseDowned=true;
setTimeout(function(){
_b9f._justMouseDowned=false;
},0);
if(evt&&evt.target&&evt.target.parentNode==null){
return;
}
_b9f._onTouchNode(_b9e||evt.target,"mouse");
});
var fih=on(body,"focusin",function(evt){
_b99=(new Date()).getTime();
if(!evt.target.tagName){
return;
}
var tag=evt.target.tagName.toLowerCase();
if(tag=="#document"||tag=="body"){
return;
}
if(a11y.isTabNavigable(evt.target)){
_b9f._onFocusNode(_b9e||evt.target);
}else{
_b9f._onTouchNode(_b9e||evt.target);
}
});
var foh=on(body,"focusout",function(evt){
if((new Date()).getTime()<_b99+100){
return;
}
_b9f._onBlurNode(_b9e||evt.target);
});
return {remove:function(){
mdh.remove();
fih.remove();
foh.remove();
mdh=fih=foh=null;
body=null;
}};
}
},_onBlurNode:function(node){
if(this._clearFocusTimer){
clearTimeout(this._clearFocusTimer);
}
this._clearFocusTimer=setTimeout(lang.hitch(this,function(){
this.set("prevNode",this.curNode);
this.set("curNode",null);
}),0);
if(this._justMouseDowned){
return;
}
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
}
this._clearActiveWidgetsTimer=setTimeout(lang.hitch(this,function(){
delete this._clearActiveWidgetsTimer;
this._setStack([]);
}),0);
},_onTouchNode:function(node,by){
if(this._clearActiveWidgetsTimer){
clearTimeout(this._clearActiveWidgetsTimer);
delete this._clearActiveWidgetsTimer;
}
var _ba0=[];
try{
while(node){
var _ba1=_b91.get(node,"dijitPopupParent");
if(_ba1){
node=_b97.byId(_ba1).domNode;
}else{
if(node.tagName&&node.tagName.toLowerCase()=="body"){
if(node===win.body()){
break;
}
node=_b96.get(node.ownerDocument).frameElement;
}else{
var id=node.getAttribute&&node.getAttribute("widgetId"),_ba2=id&&_b97.byId(id);
if(_ba2&&!(by=="mouse"&&_ba2.get("disabled"))){
_ba0.unshift(id);
}
node=node.parentNode;
}
}
}
}
catch(e){
}
this._setStack(_ba0,by);
},_onFocusNode:function(node){
if(!node){
return;
}
if(node.nodeType==9){
return;
}
if(this._clearFocusTimer){
clearTimeout(this._clearFocusTimer);
delete this._clearFocusTimer;
}
this._onTouchNode(node);
if(node==this.curNode){
return;
}
this.set("prevNode",this.curNode);
this.set("curNode",node);
},_setStack:function(_ba3,by){
var _ba4=this.activeStack,_ba5=_ba4.length-1,_ba6=_ba3.length-1;
if(_ba3[_ba6]==_ba4[_ba5]){
return;
}
this.set("activeStack",_ba3);
var _ba7,i;
for(i=_ba5;i>=0&&_ba4[i]!=_ba3[i];i--){
_ba7=_b97.byId(_ba4[i]);
if(_ba7){
_ba7._hasBeenBlurred=true;
_ba7.set("focused",false);
if(_ba7._focusManager==this){
_ba7._onBlur(by);
}
this.emit("widget-blur",_ba7,by);
}
}
for(i++;i<=_ba6;i++){
_ba7=_b97.byId(_ba3[i]);
if(_ba7){
_ba7.set("focused",true);
if(_ba7._focusManager==this){
_ba7._onFocus(by);
}
this.emit("widget-focus",_ba7,by);
}
}
},focus:function(node){
if(node){
try{
node.focus();
}
catch(e){
}
}
}});
var _ba8=new _b9a();
_b94(function(){
var _ba9=_ba8.registerWin(_b96.get(document));
if(has("ie")){
on(window,"unload",function(){
if(_ba9){
_ba9.remove();
_ba9=null;
}
});
}
});
_b98.focus=function(node){
_ba8.focus(node);
};
for(var attr in _ba8){
if(!/^_/.test(attr)){
_b98.focus[attr]=typeof _ba8[attr]=="function"?lang.hitch(_ba8,attr):_ba8[attr];
}
}
_ba8.watch(function(attr,_baa,_bab){
_b98.focus[attr]=_bab;
});
return _ba8;
});
},"dojox/mobile/SpinWheelSlot":function(){
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/SpinWheelSlot","dojo/touch","dojo/on","dijit/_Contained","dijit/_WidgetBase","./scrollable","./common"],function(dojo,_bac,_bad,win,_bae,_baf,has,_bb0,_bb1,on,_bb2,_bb3,_bb4){
var _bb5=_bad(has("dojo-bidi")?"dojox.mobile.NonBidiSpinWheelSlot":"dojox.mobile.SpinWheelSlot",[_bb3,_bb2,_bb4],{items:[],labels:[],labelFrom:0,labelTo:0,zeroPad:0,value:"",step:1,tabIndex:"0",_setTabIndexAttr:"",baseClass:"mblSpinWheelSlot",maxSpeed:500,minItems:15,centerPos:0,scrollBar:false,constraint:false,propagatable:false,androidWorkaroud:false,buildRendering:function(){
this.inherited(arguments);
this.initLabels();
var i,j;
if(this.labels.length>0){
this.items=[];
for(i=0;i<this.labels.length;i++){
this.items.push([i,this.labels[i]]);
}
}
this.containerNode=_baf.create("div",{className:"mblSpinWheelSlotContainer"});
this.containerNode.style.height=(win.global.innerHeight||win.doc.documentElement.clientHeight)*2+"px";
this.panelNodes=[];
for(var k=0;k<3;k++){
this.panelNodes[k]=_baf.create("div",{className:"mblSpinWheelSlotPanel"});
var len=this.items.length;
if(len>0){
var n=Math.ceil(this.minItems/len);
for(j=0;j<n;j++){
for(i=0;i<len;i++){
_baf.create("div",{className:"mblSpinWheelSlotLabel",name:this.items[i][0],"data-mobile-val":this.items[i][1],innerHTML:this._cv?this._cv(this.items[i][1]):this.items[i][1]},this.panelNodes[k]);
}
}
}
this.containerNode.appendChild(this.panelNodes[k]);
}
this.domNode.appendChild(this.containerNode);
this.touchNode=_baf.create("div",{className:"mblSpinWheelSlotTouch"},this.domNode);
this.setSelectable(this.domNode,false);
if(this.value===""&&this.items.length>0){
this.value=this.items[0][1];
}
this._initialValue=this.value;
if(has("windows-theme")){
var self=this,_bb6=this.containerNode,_bb7=5;
this.own(on(self.touchNode,_bb1.press,function(e){
var posY=e.pageY,_bb8=self.getParent().getChildren();
for(var i=0,ln=_bb8.length;i<ln;i++){
var _bb9=_bb8[i].containerNode;
if(_bb6!==_bb9){
_bae.remove(_bb9,"mblSelectedSlot");
_bb9.selected=false;
}else{
_bae.add(_bb6,"mblSelectedSlot");
}
}
var _bba=on(self.touchNode,_bb1.move,function(e){
if(Math.abs(e.pageY-posY)<_bb7){
return;
}
_bba.remove();
_bbb.remove();
_bb6.selected=true;
var item=self.getCenterItem();
if(item){
_bae.remove(item,"mblSelectedSlotItem");
}
});
var _bbb=on(self.touchNode,_bb1.release,function(){
_bbb.remove();
_bba.remove();
_bb6.selected?_bae.remove(_bb6,"mblSelectedSlot"):_bae.add(_bb6,"mblSelectedSlot");
_bb6.selected=!_bb6.selected;
});
}));
this.on("flickAnimationEnd",function(){
var item=self.getCenterItem();
if(self.previousCenterItem){
_bae.remove(self.previousCenterItem,"mblSelectedSlotItem");
}
_bae.add(item,"mblSelectedSlotItem");
self.previousCenterItem=item;
});
}
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
this.noResize=true;
if(this.items.length>0){
this.init();
this.centerPos=this.getParent().centerPos;
var _bbc=this.panelNodes[1].childNodes;
this._itemHeight=_bbc[0].offsetHeight;
this.adjust();
this.connect(this.domNode,"onkeydown","_onKeyDown");
}
if(has("windows-theme")){
this.previousCenterItem=this.getCenterItem();
if(this.previousCenterItem){
_bae.add(this.previousCenterItem,"mblSelectedSlotItem");
}
}
},initLabels:function(){
if(this.labelFrom!==this.labelTo){
var a=this.labels=[],_bbd=this.zeroPad&&Array(this.zeroPad).join("0");
for(var i=this.labelFrom;i<=this.labelTo;i+=this.step){
a.push(this.zeroPad?(_bbd+i).slice(-this.zeroPad):i+"");
}
}
},adjust:function(){
var _bbe=this.panelNodes[1].childNodes;
var _bbf;
for(var i=0,len=_bbe.length;i<len;i++){
var item=_bbe[i];
if(item.offsetTop<=this.centerPos&&this.centerPos<item.offsetTop+item.offsetHeight){
_bbf=this.centerPos-(item.offsetTop+Math.round(item.offsetHeight/2));
break;
}
}
var h=this.panelNodes[0].offsetHeight;
this.panelNodes[0].style.top=-h+_bbf+"px";
this.panelNodes[1].style.top=_bbf+"px";
this.panelNodes[2].style.top=h+_bbf+"px";
},setInitialValue:function(){
this.set("value",this._initialValue);
},_onKeyDown:function(e){
if(!e||e.type!=="keydown"){
return;
}
if(e.keyCode===40){
this.spin(-1);
}else{
if(e.keyCode===38){
this.spin(1);
}
}
},_getCenterPanel:function(){
var pos=this.getPos();
for(var i=0,len=this.panelNodes.length;i<len;i++){
var top=pos.y+this.panelNodes[i].offsetTop;
if(top<=this.centerPos&&this.centerPos<top+this.panelNodes[i].offsetHeight){
return this.panelNodes[i];
}
}
return null;
},setColor:function(_bc0,_bc1){
_bac.forEach(this.panelNodes,function(_bc2){
_bac.forEach(_bc2.childNodes,function(node,i){
_bae.toggle(node,_bc1||"mblSpinWheelSlotLabelBlue",node.innerHTML===_bc0);
},this);
},this);
},disableValues:function(n){
_bac.forEach(this.panelNodes,function(_bc3){
for(var i=0;i<_bc3.childNodes.length;i++){
_bae.toggle(_bc3.childNodes[i],"mblSpinWheelSlotLabelGray",i>=n);
}
});
},getCenterItem:function(){
var pos=this.getPos();
var _bc4=this._getCenterPanel();
if(_bc4){
var top=pos.y+_bc4.offsetTop;
var _bc5=_bc4.childNodes;
for(var i=0,len=_bc5.length;i<len;i++){
if(top+_bc5[i].offsetTop<=this.centerPos&&this.centerPos<top+_bc5[i].offsetTop+_bc5[i].offsetHeight){
return _bc5[i];
}
}
}
return null;
},_getKeyAttr:function(){
if(!this._started){
if(this.items){
var v=this.value;
for(var i=0;i<this.items.length;i++){
if(this.items[i][1]==this.value){
return this.items[i][0];
}
}
}
return null;
}
var item=this.getCenterItem();
return (item&&item.getAttribute("name"));
},_getValueAttr:function(){
if(!this._started){
return this.value;
}
if(this.items.length>0){
var item=this.getCenterItem();
return (item&&item.getAttribute("data-mobile-val"));
}else{
return this._initialValue;
}
},_setValueAttr:function(_bc6){
if(this.items.length>0){
this._spinToValue(_bc6,true);
}
},_spinToValue:function(_bc7,_bc8){
var idx0,idx1;
var _bc9=this.get("value");
if(!_bc9){
this._pendingValue=_bc7;
return;
}
if(_bc9==_bc7){
return;
}
this._pendingValue=undefined;
if(_bc8){
this._set("value",_bc7);
}
var n=this.items.length;
for(var i=0;i<n;i++){
if(this.items[i][1]===String(_bc9)){
idx0=i;
}
if(this.items[i][1]===String(_bc7)){
idx1=i;
}
if(idx0!==undefined&&idx1!==undefined){
break;
}
}
var d=idx1-(idx0||0);
var m;
if(d>0){
m=(d<n-d)?-d:n-d;
}else{
m=(-d<n+d)?-d:-(n+d);
}
this.spin(m);
},onFlickAnimationStart:function(e){
this._onFlickAnimationStartCalled=true;
this.inherited(arguments);
},onFlickAnimationEnd:function(e){
this._duringSlideTo=false;
this._onFlickAnimationStartCalled=false;
this.inherited(arguments);
},spin:function(_bca){
if(!this._started||this._duringSlideTo){
return;
}
var to=this.getPos();
to.y+=_bca*this._itemHeight;
this.slideTo(to,1);
},getSpeed:function(){
var y=0,n=this._time.length;
var _bcb=(new Date()).getTime()-this.startTime-this._time[n-1];
if(n>=2&&_bcb<200){
var dy=this._posY[n-1]-this._posY[(n-6)>=0?n-6:0];
var dt=this._time[n-1]-this._time[(n-6)>=0?n-6:0];
y=this.calcSpeed(dy,dt);
}
return {x:0,y:y};
},calcSpeed:function(d,t){
var _bcc=this.inherited(arguments);
if(!_bcc){
return 0;
}
var v=Math.abs(_bcc);
var ret=_bcc;
if(v>this.maxSpeed){
ret=this.maxSpeed*(_bcc/v);
}
return ret;
},adjustDestination:function(to,pos,dim){
var h=this._itemHeight;
var j=to.y+Math.round(h/2);
var r=j>=0?j%h:j%h+h;
to.y=j-r;
return true;
},resize:function(e){
var _bcd=this.panelNodes[1].childNodes;
if(_bcd.length>0&&!has("windows-theme")){
this._itemHeight=_bcd[0].offsetHeight;
this.centerPos=this.getParent().centerPos;
this.adjust();
}
if(this._pendingValue){
this.set("value",this._pendingValue);
}
},slideTo:function(to,_bce,_bcf){
this._duringSlideTo=true;
var pos=this.getPos();
var top=pos.y+this.panelNodes[1].offsetTop;
var _bd0=top+this.panelNodes[1].offsetHeight;
var vh=this.domNode.parentNode.offsetHeight;
var t;
if(pos.y<to.y){
if(_bd0>vh){
t=this.panelNodes[2];
t.style.top=this.panelNodes[0].offsetTop-this.panelNodes[0].offsetHeight+"px";
this.panelNodes[2]=this.panelNodes[1];
this.panelNodes[1]=this.panelNodes[0];
this.panelNodes[0]=t;
}
}else{
if(pos.y>to.y){
if(top<0){
t=this.panelNodes[0];
t.style.top=this.panelNodes[2].offsetTop+this.panelNodes[2].offsetHeight+"px";
this.panelNodes[0]=this.panelNodes[1];
this.panelNodes[1]=this.panelNodes[2];
this.panelNodes[2]=t;
}
}
}
if(this.getParent()._duringStartup){
_bce=0;
}else{
if(Math.abs(this._speed.y)<40){
_bce=0.2;
}
}
this.inherited(arguments,[to,_bce,_bcf]);
if(this.getParent()._duringStartup&&!this._onFlickAnimationStartCalled){
this.onFlickAnimationEnd();
}else{
if(!this._onFlickAnimationStartCalled){
this._duringSlideTo=false;
}
}
}});
return has("dojo-bidi")?_bad("dojox.mobile.SpinWheelSlot",[_bb5,_bb0]):_bb5;
});
},"dojox/mobile/TabBar":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/dom-attr","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./TabBarButton","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBar"],function(_bd1,_bd2,win,_bd3,_bd4,_bd5,_bd6,_bd7,_bd8,_bd9,_bda,_bdb,has,_bdc){
var _bdd=_bd2(has("dojo-bidi")?"dojox.mobile.NonBidiTabBar":"dojox.mobile.TabBar",[_bda,_bd9,_bd8],{iconBase:"",iconPos:"",barType:"tabBar",closable:false,center:true,syncWithViews:false,tag:"ul",fill:"auto",selectOne:true,baseClass:"mblTabBar",_fixedButtonWidth:76,_fixedButtonMargin:17,_largeScreenWidth:500,buildRendering:function(){
this.domNode=this.srcNodeRef||_bd4.create(this.tag);
_bd7.set(this.domNode,"role","tablist");
this.reset();
this.inherited(arguments);
},postCreate:function(){
if(this.syncWithViews){
var f=function(view,_bde,dir,_bdf,_be0,_be1){
var _be2=_bd1.filter(this.getChildren(),function(w){
return w.moveTo==="#"+view.id||w.moveTo===view.id;
})[0];
if(_be2){
_be2.set("selected",true);
}
};
this.subscribe("/dojox/mobile/afterTransitionIn",f);
this.subscribe("/dojox/mobile/startView",f);
}
},startup:function(){
if(this._started){
return;
}
this.inherited(arguments);
this.resize();
},reset:function(){
var prev=this._barType;
if(typeof this.barType==="object"){
this._barType=this.barType["*"];
for(var c in this.barType){
if(_bd3.contains(win.doc.documentElement,c)){
this._barType=this.barType[c];
break;
}
}
}else{
this._barType=this.barType;
}
var cap=function(s){
return s.charAt(0).toUpperCase()+s.substring(1);
};
if(prev){
_bd3.remove(this.domNode,this.baseClass+cap(prev));
}
_bd3.add(this.domNode,this.baseClass+cap(this._barType));
},resize:function(size){
var i,w;
if(size&&size.w){
w=size.w;
}else{
w=_bd5.getMarginBox(this.domNode).w;
}
var bw=this._fixedButtonWidth;
var bm=this._fixedButtonMargin;
var arr=_bd1.map(this.getChildren(),function(w){
return w.domNode;
});
_bd3.toggle(this.domNode,"mblTabBarNoIcons",!_bd1.some(this.getChildren(),function(w){
return w.iconNode1;
}));
_bd3.toggle(this.domNode,"mblTabBarNoText",!_bd1.some(this.getChildren(),function(w){
return w.label;
}));
var _be3=0;
if(this._barType=="tabBar"){
this.containerNode.style.paddingLeft="";
_be3=Math.floor((w-(bw+bm*2)*arr.length)/2);
if(this.fill=="always"||(this.fill=="auto"&&(w<this._largeScreenWidth||_be3<0))){
_bd3.add(this.domNode,"mblTabBarFill");
for(i=0;i<arr.length;i++){
arr[i].style.width=(100/arr.length)+"%";
arr[i].style.margin="0";
}
}else{
for(i=0;i<arr.length;i++){
arr[i].style.width=bw+"px";
arr[i].style.margin="0 "+bm+"px";
}
if(arr.length>0){
if(has("dojo-bidi")&&!this.isLeftToRight()){
arr[0].style.marginLeft="0px";
arr[0].style.marginRight=_be3+bm+"px";
}else{
arr[0].style.marginLeft=_be3+bm+"px";
}
}
this.containerNode.style.padding="0px";
}
}else{
for(i=0;i<arr.length;i++){
arr[i].style.width=arr[i].style.margin="";
}
var _be4=this.getParent();
if(this.fill=="always"){
_bd3.add(this.domNode,"mblTabBarFill");
for(i=0;i<arr.length;i++){
arr[i].style.width=(100/arr.length)+"%";
if(this._barType!="segmentedControl"&&this._barType!="standardTab"){
arr[i].style.margin="0";
}
}
}else{
if(this.center&&(!_be4||!_bd3.contains(_be4.domNode,"mblHeading"))){
_be3=w;
for(i=0;i<arr.length;i++){
_be3-=_bd5.getMarginBox(arr[i]).w;
}
_be3=Math.floor(_be3/2);
}
if(has("dojo-bidi")&&!this.isLeftToRight()){
this.containerNode.style.paddingLeft="0px";
this.containerNode.style.paddingRight=_be3?_be3+"px":"";
}else{
this.containerNode.style.paddingLeft=_be3?_be3+"px":"";
}
}
}
if(size&&size.w){
_bd5.setMarginBox(this.domNode,size);
}
},getSelectedTab:function(){
return _bd1.filter(this.getChildren(),function(w){
return w.selected;
})[0];
},onCloseButtonClick:function(tab){
return true;
}});
return has("dojo-bidi")?_bd2("dojox.mobile.TabBar",[_bdd,_bdc]):_bdd;
});
},"dijit/_base/sniff":function(){
define(["dojo/uacss"],function(){
});
},"dojox/mobile/IconContainer":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/_base/window","dojo/dom-construct","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./IconItem","./Heading","./View"],function(_be5,_be6,lang,win,_be7,_be8,_be9,_bea,_beb,_bec,View){
return _be6("dojox.mobile.IconContainer",[_bea,_be9,_be8],{defaultIcon:"",transition:"below",pressedIconOpacity:0.4,iconBase:"",iconPos:"",back:"Home",label:"My Application",single:false,editable:false,tag:"ul",baseClass:"mblIconContainer",editableMixinClass:"dojox/mobile/_EditableIconMixin",iconItemPaneContainerClass:"dojox/mobile/Container",iconItemPaneContainerProps:null,iconItemPaneClass:"dojox/mobile/_IconItemPane",iconItemPaneProps:null,buildRendering:function(){
this.domNode=this.containerNode=this.srcNodeRef||_be7.create(this.tag);
this._terminator=_be7.create(this.tag==="ul"?"li":"div",{className:"mblIconItemTerminator"},this.domNode);
this.inherited(arguments);
},postCreate:function(){
if(this.editable&&!this.startEdit){
require([this.editableMixinClass],lang.hitch(this,function(_bed){
_be6.safeMixin(this,new _bed());
this.set("editable",this.editable);
}));
}
},startup:function(){
if(this._started){
return;
}
require([this.iconItemPaneContainerClass],lang.hitch(this,function(_bee){
this.paneContainerWidget=new _bee(this.iconItemPaneContainerProps);
if(this.transition==="below"){
_be7.place(this.paneContainerWidget.domNode,this.domNode,"after");
}else{
var view=this.appView=new View({id:this.id+"_mblApplView"});
var _bef=this;
view.onAfterTransitionIn=function(_bf0,dir,_bf1,_bf2,_bf3){
_bef._opening._open_1();
};
view.domNode.style.visibility="hidden";
var _bf4=view._heading=new _bec({back:this._cv?this._cv(this.back):this.back,label:this._cv?this._cv(this.label):this.label,moveTo:this.domNode.parentNode.id,transition:this.transition=="zoomIn"?"zoomOut":this.transition});
view.addChild(_bf4);
view.addChild(this.paneContainerWidget);
var _bf5;
for(var w=this.getParent();w;w=w.getParent()){
if(w instanceof View){
_bf5=w.domNode.parentNode;
break;
}
}
if(!_bf5){
_bf5=win.body();
}
_bf5.appendChild(view.domNode);
view.startup();
}
}));
this.inherited(arguments);
},closeAll:function(){
_be5.forEach(this.getChildren(),function(w){
w.close(true);
},this);
},addChild:function(_bf6,_bf7){
this.inherited(arguments);
if(this._started&&_bf6.paneWidget&&!_bf6.paneWidget.getParent()){
this.paneContainerWidget.addChild(_bf6.paneWidget,_bf7);
}
this.domNode.appendChild(this._terminator);
},removeChild:function(_bf8){
var _bf9=(typeof _bf8=="number")?_bf8:_bf8.getIndexInParent();
this.paneContainerWidget.removeChild(_bf9);
this.inherited(arguments);
},_setLabelAttr:function(text){
if(!this.appView){
return;
}
this.label=text;
var s=this._cv?this._cv(text):text;
this.appView._heading.set("label",s);
}});
});
},"dojox/mobile/Pane":function(){
define(["dojo/_base/array","dojo/_base/declare","dijit/_Contained","dijit/_WidgetBase"],function(_bfa,_bfb,_bfc,_bfd){
return _bfb("dojox.mobile.Pane",[_bfd,_bfc],{baseClass:"mblPane",buildRendering:function(){
this.inherited(arguments);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},resize:function(){
_bfa.forEach(this.getChildren(),function(_bfe){
if(_bfe.resize){
_bfe.resize();
}
});
}});
});
},"dijit/main":function(){
define(["dojo/_base/kernel"],function(dojo){
return dojo.dijit;
});
},"dojo/date/stamp":function(){
define(["../_base/lang","../_base/array"],function(lang,_bff){
var _c00={};
lang.setObject("dojo.date.stamp",_c00);
_c00.fromISOString=function(_c01,_c02){
if(!_c00._isoRegExp){
_c00._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
}
var _c03=_c00._isoRegExp.exec(_c01),_c04=null;
if(_c03){
_c03.shift();
if(_c03[1]){
_c03[1]--;
}
if(_c03[6]){
_c03[6]*=1000;
}
if(_c02){
_c02=new Date(_c02);
_bff.forEach(_bff.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(prop){
return _c02["get"+prop]();
}),function(_c05,_c06){
_c03[_c06]=_c03[_c06]||_c05;
});
}
_c04=new Date(_c03[0]||1970,_c03[1]||0,_c03[2]||1,_c03[3]||0,_c03[4]||0,_c03[5]||0,_c03[6]||0);
if(_c03[0]<100){
_c04.setFullYear(_c03[0]||1970);
}
var _c07=0,_c08=_c03[7]&&_c03[7].charAt(0);
if(_c08!="Z"){
_c07=((_c03[8]||0)*60)+(Number(_c03[9])||0);
if(_c08!="-"){
_c07*=-1;
}
}
if(_c08){
_c07-=_c04.getTimezoneOffset();
}
if(_c07){
_c04.setTime(_c04.getTime()+_c07*60000);
}
}
return _c04;
};
_c00.toISOString=function(_c09,_c0a){
var _c0b=function(n){
return (n<10)?"0"+n:n;
};
_c0a=_c0a||{};
var _c0c=[],_c0d=_c0a.zulu?"getUTC":"get",date="";
if(_c0a.selector!="time"){
var year=_c09[_c0d+"FullYear"]();
date=["0000".substr((year+"").length)+year,_c0b(_c09[_c0d+"Month"]()+1),_c0b(_c09[_c0d+"Date"]())].join("-");
}
_c0c.push(date);
if(_c0a.selector!="date"){
var time=[_c0b(_c09[_c0d+"Hours"]()),_c0b(_c09[_c0d+"Minutes"]()),_c0b(_c09[_c0d+"Seconds"]())].join(":");
var _c0e=_c09[_c0d+"Milliseconds"]();
if(_c0a.milliseconds){
time+="."+(_c0e<100?"0":"")+_c0b(_c0e);
}
if(_c0a.zulu){
time+="Z";
}else{
if(_c0a.selector!="time"){
var _c0f=_c09.getTimezoneOffset();
var _c10=Math.abs(_c0f);
time+=(_c0f>0?"-":"+")+_c0b(Math.floor(_c10/60))+":"+_c0b(_c10%60);
}
}
_c0c.push(time);
}
return _c0c.join("T");
};
return _c00;
});
},"dojox/mobile/RoundRect":function(){
define(["dojo/_base/declare","dojo/dom-class","./Container"],function(_c11,_c12,_c13){
return _c11("dojox.mobile.RoundRect",_c13,{shadow:false,baseClass:"mblRoundRect",buildRendering:function(){
this.inherited(arguments);
if(this.shadow){
_c12.add(this.domNode,"mblShadow");
}
}});
});
},"dojox/mobile/TabBarButton":function(){
define(["dojo/_base/connect","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/dom-attr","./View","./iconUtils","./_ItemBase","./Badge","./sniff","dojo/has!dojo-bidi?dojox/mobile/bidi/TabBarButton"],function(_c14,_c15,_c16,lang,dom,_c17,_c18,_c19,_c1a,View,_c1b,_c1c,_c1d,has,_c1e){
var _c1f=_c15(has("dojo-bidi")?"dojox.mobile.NonBidiTabBarButton":"dojox.mobile.TabBarButton",_c1c,{icon1:"",icon2:"",iconPos1:"",iconPos2:"",selected:false,transition:"none",tag:"li",badge:"",baseClass:"mblTabBarButton",closeIcon:"mblDomButtonWhiteCross",_selStartMethod:"touch",_selEndMethod:"touch",_moveTo:"",destroy:function(){
if(this.badgeObj){
delete this.badgeObj;
}
this.inherited(arguments);
},inheritParams:function(){
if(this.icon&&!this.icon1){
this.icon1=this.icon;
}
var _c20=this.getParent();
if(_c20){
if(!this.transition){
this.transition=_c20.transition;
}
if(this.icon1&&_c20.iconBase&&_c20.iconBase.charAt(_c20.iconBase.length-1)==="/"){
this.icon1=_c20.iconBase+this.icon1;
}
if(!this.icon1){
this.icon1=_c20.iconBase;
}
if(!this.iconPos1){
this.iconPos1=_c20.iconPos;
}
if(this.icon2&&_c20.iconBase&&_c20.iconBase.charAt(_c20.iconBase.length-1)==="/"){
this.icon2=_c20.iconBase+this.icon2;
}
if(!this.icon2){
this.icon2=_c20.iconBase||this.icon1;
}
if(!this.iconPos2){
this.iconPos2=_c20.iconPos||this.iconPos1;
}
if(_c20.closable){
if(!this.icon1){
this.icon1=this.closeIcon;
}
if(!this.icon2){
this.icon2=this.closeIcon;
}
_c17.add(this.domNode,"mblTabBarButtonClosable");
}
}
},buildRendering:function(){
this.domNode=this.srcNodeRef||_c18.create(this.tag);
if(this.srcNodeRef){
if(!this.label){
this.label=lang.trim(this.srcNodeRef.innerHTML);
}
this.srcNodeRef.innerHTML="";
}
this.labelNode=this.box=_c18.create("div",{className:"mblTabBarButtonLabel"},this.domNode);
_c1a.set(this.domNode,"role","tab");
_c1a.set(this.domNode,"aria-selected","false");
this._moveTo=this._getMoveToId();
if(this._moveTo){
var _c21=dom.byId(this._moveTo);
if(_c21){
_c1a.set(this.domNode,"aria-controls",this._moveTo);
_c1a.set(_c21,"role","tabpanel");
_c1a.set(_c21,"aria-labelledby",this.id);
}
}
this.inherited(arguments);
},startup:function(){
if(this._started){
return;
}
this._dragstartHandle=this.connect(this.domNode,"ondragstart",_c16.stop);
this.connect(this.domNode,"onkeydown","_onClick");
var _c22=this.getParent();
if(_c22&&_c22.closable){
this._clickCloseHandler=this.connect(this.iconDivNode,"onclick","_onCloseButtonClick");
this._keydownCloseHandler=this.connect(this.iconDivNode,"onkeydown","_onCloseButtonClick");
this.iconDivNode.tabIndex="0";
}
this.inherited(arguments);
if(!this._isOnLine){
this._isOnLine=true;
this.set({icon:this._pendingIcon!==undefined?this._pendingIcon:this.icon,icon1:this.icon1,icon2:this.icon2});
delete this._pendingIcon;
}
dom.setSelectable(this.domNode,false);
},onClose:function(e){
_c14.publish("/dojox/mobile/tabClose",[this]);
return this.getParent().onCloseButtonClick(this);
},_onCloseButtonClick:function(e){
if(e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onCloseButtonClick(e)===false){
return;
}
if(this.onClose()){
this.destroy();
}
},onCloseButtonClick:function(){
},_onClick:function(e){
if(e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
this.defaultClickAction(e);
},onClick:function(){
},_setIcon:function(icon,n){
if(!this.getParent()){
return;
}
this._set("icon"+n,icon);
if(!this.iconDivNode){
this.iconDivNode=_c18.create("div",{className:"mblTabBarButtonIconArea"},this.domNode,"first");
}
if(!this["iconParentNode"+n]){
this["iconParentNode"+n]=_c18.create("div",{className:"mblTabBarButtonIconParent mblTabBarButtonIconParent"+n},this.iconDivNode);
}
this["iconNode"+n]=_c1b.setIcon(icon,this["iconPos"+n],this["iconNode"+n],this.alt,this["iconParentNode"+n]);
this["icon"+n]=icon;
_c17.toggle(this.domNode,"mblTabBarButtonHasIcon",icon&&icon!=="none");
},_getMoveToId:function(){
if(this.moveTo){
if(this.moveTo==="#"){
return "";
}
var toId="";
if(typeof (this.moveTo)==="object"&&this.moveTo.moveTo){
toId=this.moveTo.moveTo;
}else{
toId=this.moveTo;
}
if(toId){
toId=View.prototype.convertToId(toId);
}
return toId;
}
},_setIcon1Attr:function(icon){
this._setIcon(icon,1);
},_setIcon2Attr:function(icon){
this._setIcon(icon,2);
},_getBadgeAttr:function(){
return this.badgeObj&&this.badgeObj.domNode.parentNode&&this.badgeObj.domNode.parentNode.nodeType==1?this.badgeObj.getValue():null;
},_setBadgeAttr:function(_c23){
if(!this.badgeObj){
this.badgeObj=new _c1d({fontSize:11});
_c19.set(this.badgeObj.domNode,{position:"absolute",top:"0px",right:"0px"});
}
this.badgeObj.setValue(_c23);
if(_c23){
this.domNode.appendChild(this.badgeObj.domNode);
}else{
if(this.domNode===this.badgeObj.domNode.parentNode){
this.domNode.removeChild(this.badgeObj.domNode);
}
}
},_setSelectedAttr:function(_c24){
this.inherited(arguments);
_c17.toggle(this.domNode,"mblTabBarButtonSelected",_c24);
_c1a.set(this.domNode,"aria-selected",_c24?"true":"false");
if(this._moveTo){
var _c25=dom.byId(this._moveTo);
if(_c25){
_c1a.set(_c25,"aria-hidden",_c24?"false":"true");
}
}
}});
return has("dojo-bidi")?_c15("dojox.mobile.TabBarButton",[_c1f,_c1e]):_c1f;
});
},"dojox/mobile/CheckBox":function(){
define(["dojo/_base/declare","dojo/dom-construct","dijit/form/_CheckBoxMixin","./ToggleButton","./sniff"],function(_c26,_c27,_c28,_c29,has){
return _c26("dojox.mobile.CheckBox",[_c29,_c28],{baseClass:"mblCheckBox",_setTypeAttr:function(){
},buildRendering:function(){
if(!this.templateString&&!this.srcNodeRef){
this.srcNodeRef=_c27.create("input",{type:this.type});
}
this.inherited(arguments);
if(!this.templateString){
this.focusNode=this.domNode;
}
if(has("windows-theme")){
var _c2a=_c27.create("span",{className:"mblCheckableInputContainer"});
_c2a.appendChild(this.domNode.cloneNode());
this.labelNode=_c27.create("span",{className:"mblCheckableInputDecorator"},_c2a);
this.domNode=_c2a;
this.focusNode=_c2a.firstChild;
}
},_getValueAttr:function(){
return (this.checked?this.value:false);
}});
});
},"dojox/mobile/ValuePicker":function(){
define(["dojo/_base/declare","./_PickerBase","./ValuePickerSlot"],function(_c2b,_c2c){
return _c2b("dojox.mobile.ValuePicker",_c2c,{baseClass:"mblValuePicker",onValueChanged:function(slot){
}});
});
},"dijit/form/_ButtonMixin":function(){
define(["dojo/_base/declare","dojo/dom","dojo/has","../registry"],function(_c2d,dom,has,_c2e){
var _c2f=_c2d("dijit.form._ButtonMixin"+(has("dojo-bidi")?"_NoBidi":""),null,{label:"",type:"button",__onClick:function(e){
e.stopPropagation();
e.preventDefault();
if(!this.disabled){
this.valueNode.click(e);
}
return false;
},_onClick:function(e){
if(this.disabled){
e.stopPropagation();
e.preventDefault();
return false;
}
if(this.onClick(e)===false){
e.preventDefault();
}
cancelled=e.defaultPrevented;
if(!cancelled&&this.type=="submit"&&!(this.valueNode||this.focusNode).form){
for(var node=this.domNode;node.parentNode;node=node.parentNode){
var _c30=_c2e.byNode(node);
if(_c30&&typeof _c30._onSubmit=="function"){
_c30._onSubmit(e);
e.preventDefault();
cancelled=true;
break;
}
}
}
return !cancelled;
},postCreate:function(){
this.inherited(arguments);
dom.setSelectable(this.focusNode,false);
},onClick:function(){
return true;
},_setLabelAttr:function(_c31){
this._set("label",_c31);
var _c32=this.containerNode||this.focusNode;
_c32.innerHTML=_c31;
}});
if(has("dojo-bidi")){
_c2f=_c2d("dijit.form._ButtonMixin",_c2f,{_setLabelAttr:function(){
this.inherited(arguments);
var _c33=this.containerNode||this.focusNode;
this.applyTextDir(_c33);
}});
}
return _c2f;
});
},"dojox/mobile/app/TextBox":function(){
define(["dijit","dojo","dojox","dojo/require!dojox/mobile/TextBox"],function(_c34,dojo,_c35){
dojo.provide("dojox.mobile.app.TextBox");
dojo.deprecated("dojox.mobile.app.TextBox is deprecated","dojox.mobile.app.TextBox moved to dojox.mobile.TextBox",1.8);
dojo.require("dojox.mobile.TextBox");
_c35.mobile.app.TextBox=_c35.mobile.TextBox;
});
},"dijit/_base/typematic":function(){
define(["../typematic"],function(){
});
},"dojox/mobile/RoundRectCategory":function(){
define(["dojo/_base/declare","dojo/_base/window","dojo/dom-construct","dijit/_Contained","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/RoundRectCategory"],function(_c36,win,_c37,_c38,_c39,has,_c3a){
var _c3b=_c36(has("dojo-bidi")?"dojox.mobile.NonBidiRoundRectCategory":"dojox.mobile.RoundRectCategory",[_c39,_c38],{label:"",tag:"h2",baseClass:"mblRoundRectCategory",buildRendering:function(){
var _c3c=this.domNode=this.containerNode=this.srcNodeRef||_c37.create(this.tag);
this.inherited(arguments);
if(!this.label&&_c3c.childNodes.length===1&&_c3c.firstChild.nodeType===3){
this.label=_c3c.firstChild.nodeValue;
}
},_setLabelAttr:function(_c3d){
this.label=_c3d;
this.domNode.innerHTML=this._cv?this._cv(_c3d):_c3d;
}});
return has("dojo-bidi")?_c36("dojox.mobile.RoundRectCategory",[_c3b,_c3a]):_c3b;
});
},"dojox/mobile/_DatePickerMixin":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/date","dojo/date/locale","dojo/date/stamp"],function(_c3e,_c3f,lang,_c40,_c41,_c42){
var _c43={format:function(d){
return _c41.format(d,{datePattern:this.pattern,selector:"date"});
}};
var _c44=lang.mixin({initLabels:function(){
this.labels=[];
if(this.labelFrom!==this.labelTo){
var d=new Date(this.labelFrom,0,1);
var i,idx;
for(i=this.labelFrom,idx=0;i<=this.labelTo;i++,idx++){
d.setFullYear(i);
this.labels.push(this.format(d));
}
}
}},_c43);
var _c45=lang.mixin({initLabels:function(){
this.labels=[];
var d=new Date(2000,0,16);
for(var i=0;i<12;i++){
d.setMonth(i);
this.labels.push(this.format(d));
}
}},_c43);
var _c46=lang.mixin({initLabels:function(){
this.labels=[];
var d=new Date(2000,0,1);
for(var i=1;i<=31;i++){
d.setDate(i);
this.labels.push(this.format(d));
}
}},_c43);
return _c3f("dojox.mobile._DatePickerMixin",null,{yearPattern:"yyyy",monthPattern:"MMM",dayPattern:"d",initSlots:function(){
var c=this.slotClasses,p=this.slotProps;
c[0]=_c3f(c[0],_c44);
c[1]=_c3f(c[1],_c45);
c[2]=_c3f(c[2],_c46);
p[0].pattern=this.yearPattern;
p[1].pattern=this.monthPattern;
p[2].pattern=this.dayPattern;
this.reorderSlots();
},reorderSlots:function(){
if(this.slotOrder.length){
return;
}
var a=_c41._parseInfo().bundle["dateFormat-short"].toLowerCase().split(/[^ymd]+/,3);
this.slotOrder=_c3e.map(a,function(pat){
return {y:0,m:1,d:2}[pat.charAt(0)];
});
},reset:function(){
var now=new Date();
var v=_c3e.map(this.slots,function(w){
return w.format(now);
});
this.set("colors",v);
this._disableEndDaysOfMonth();
if(this.value){
this.set("value",this.value);
this.value=null;
}else{
if(this.values){
this.set("values",this.values);
this.values=null;
}else{
this.set("values",v);
}
}
},_onYearSet:function(){
var slot=this.slots[0];
var _c47=slot.get("value");
if(!(slot._previousValue&&_c47==slot._previousValue)){
this._disableEndDaysOfMonth();
slot._previousValue=_c47;
slot._set("value",_c47);
this.onYearSet();
}
},onYearSet:function(){
},_onMonthSet:function(){
var slot=this.slots[1];
var _c48=slot.get("value");
if(!(slot._previousValue&&_c48==slot._previousValue)){
this._disableEndDaysOfMonth();
slot._previousValue=_c48;
slot._set("value",_c48);
this.onMonthSet();
}
},onMonthSet:function(){
},_onDaySet:function(){
var slot=this.slots[2];
var _c49=slot.get("value");
if(!(slot._previousValue&&_c49==slot._previousValue)){
if(!this._disableEndDaysOfMonth()){
slot._previousValue=_c49;
slot._set("value",_c49);
this.onDaySet();
}
}
},onDaySet:function(){
},_disableEndDaysOfMonth:function(){
var pat=this.slots[0].pattern+"/"+this.slots[1].pattern,v=this.get("values"),date=_c41.parse(v[0]+"/"+v[1],{datePattern:pat,selector:"date"}),_c4a=_c40.getDaysInMonth(date);
var _c4b=false;
if(_c4a<v[2]){
_c4b=true;
this.slots[2]._spinToValue(_c4a,false);
}
this.disableValues(_c4a);
return _c4b;
},_getDateAttr:function(){
var v=this.get("values"),s=this.slots,pat=s[0].pattern+"/"+s[1].pattern+"/"+s[2].pattern;
return _c41.parse(v[0]+"/"+v[1]+"/"+v[2],{datePattern:pat,selector:"date"});
},_setValuesAttr:function(_c4c){
_c3e.forEach(this.getSlots(),function(w,i){
var v=_c4c[i];
if(typeof v=="number"){
var arr=[1970,1,1];
arr.splice(i,1,v-0);
v=w.format(new Date(arr[0],arr[1]-1,arr[2]));
}
w.set("value",v);
});
},_setValueAttr:function(_c4d){
var date=_c42.fromISOString(_c4d);
this.set("values",_c3e.map(this.slots,function(w){
return w.format(date);
}));
},_getValueAttr:function(){
return _c42.toISOString(this.get("date"),{selector:"date"});
}});
});
},"dojox/mobile/app/SceneAssistant":function(){
define(["dijit","dojo","dojox"],function(_c4e,dojo,_c4f){
dojo.provide("dojox.mobile.app.SceneAssistant");
dojo.experimental("dojox.mobile.app.SceneAssistant");
dojo.declare("dojox.mobile.app.SceneAssistant",null,{constructor:function(){
},setup:function(){
},activate:function(_c50){
},deactivate:function(){
},destroy:function(){
var _c51=dojo.query("> [widgetId]",this.containerNode).map(_c4e.byNode);
dojo.forEach(_c51,function(_c52){
_c52.destroyRecursive();
});
this.disconnect();
},connect:function(obj,_c53,_c54){
if(!this._connects){
this._connects=[];
}
this._connects.push(dojo.connect(obj,_c53,_c54));
},disconnect:function(){
dojo.forEach(this._connects,dojo.disconnect);
this._connects=[];
}});
});
},"dijit/_base/popup":function(){
define(["dojo/dom-class","dojo/_base/window","../popup","../BackgroundIframe"],function(_c55,win,_c56){
var _c57=_c56._createWrapper;
_c56._createWrapper=function(_c58){
if(!_c58.declaredClass){
_c58={_popupWrapper:(_c58.parentNode&&_c55.contains(_c58.parentNode,"dijitPopup"))?_c58.parentNode:null,domNode:_c58,destroy:function(){
},ownerDocument:_c58.ownerDocument,ownerDocumentBody:win.body(_c58.ownerDocument)};
}
return _c57.call(this,_c58);
};
var _c59=_c56.open;
_c56.open=function(args){
if(args.orient&&typeof args.orient!="string"&&!("length" in args.orient)){
var ary=[];
for(var key in args.orient){
ary.push({aroundCorner:key,corner:args.orient[key]});
}
args.orient=ary;
}
return _c59.call(this,args);
};
return _c56;
});
},"dojox/mobile/transition":function(){
define(["dojo/_base/Deferred","dojo/_base/config"],function(_c5a,_c5b){
if(_c5b["mblCSS3Transition"]){
var _c5c=new _c5a();
require([_c5b["mblCSS3Transition"]],function(_c5d){
_c5c.resolve(_c5d);
});
return _c5c;
}
return null;
});
},"dojox/mobile/ToggleButton":function(){
define(["dojo/_base/declare","dojo/dom-class","dijit/form/_ToggleButtonMixin","./Button"],function(_c5e,_c5f,_c60,_c61){
return _c5e("dojox.mobile.ToggleButton",[_c61,_c60],{baseClass:"mblToggleButton",_setCheckedAttr:function(){
this.inherited(arguments);
var _c62=(this.baseClass+" "+this["class"]).replace(/(\S+)\s*/g,"$1Checked ").split(" ");
_c5f[this.checked?"add":"remove"](this.focusNode||this.domNode,_c62);
}});
});
},"dojox/mobile/_IconItemPane":function(){
define(["dojo/_base/declare","dojo/dom-construct","./Pane","./iconUtils","./sniff"],function(_c63,_c64,Pane,_c65,has){
return _c63("dojox.mobile._IconItemPane",Pane,{iconPos:"",closeIconRole:"",closeIconTitle:"",label:"",closeIcon:"mblDomButtonBlueMinus",baseClass:"mblIconItemPane",tabIndex:"0",_setTabIndexAttr:"closeIconNode",buildRendering:function(){
this.inherited(arguments);
this.hide();
this.closeHeaderNode=_c64.create("h2",{className:"mblIconItemPaneHeading"},this.domNode);
this.closeIconNode=_c64.create("div",{className:"mblIconItemPaneIcon",role:this.closeIconRole,title:this.closeIconTitle},this.closeHeaderNode);
this.labelNode=_c64.create("span",{className:"mblIconItemPaneTitle"},this.closeHeaderNode);
this.containerNode=_c64.create("div",{className:"mblContent"},this.domNode);
},show:function(){
this.domNode.style.display="";
},hide:function(){
this.domNode.style.display="none";
},isOpen:function(e){
return this.domNode.style.display!=="none";
},_setLabelAttr:function(text){
this._set("label",text);
this.labelNode.innerHTML=this._cv?this._cv(text):text;
},_setCloseIconAttr:function(icon){
this._set("closeIcon",icon);
this.closeIconNode=_c65.setIcon(icon,this.iconPos,this.closeIconNode,null,this.closeHeaderNode);
if(has("windows-theme")&&this.closeIconTitle!==""){
this.closeButtonNode=_c64.create("span",{className:"mblButton mblCloseButton",innerHTML:this.closeIconTitle,style:{display:"none"}},this.closeIconNode);
}
}});
});
},"dojox/mobile/lazyLoadUtils":function(){
define(["dojo/_base/kernel","dojo/_base/array","dojo/_base/config","dojo/_base/window","dojo/_base/Deferred","dojo/ready"],function(dojo,_c66,_c67,win,_c68,_c69){
var _c6a=function(){
this._lazyNodes=[];
var _c6b=this;
if(_c67.parseOnLoad){
_c69(90,function(){
var _c6c=_c66.filter(win.body().getElementsByTagName("*"),function(n){
return n.getAttribute("lazy")==="true"||(n.getAttribute("data-dojo-props")||"").match(/lazy\s*:\s*true/);
});
var i,j,_c6d,s,n;
for(i=0;i<_c6c.length;i++){
_c66.forEach(["dojoType","data-dojo-type"],function(a){
_c6d=_c66.filter(_c6c[i].getElementsByTagName("*"),function(n){
return n.getAttribute(a);
});
for(j=0;j<_c6d.length;j++){
n=_c6d[j];
n.setAttribute("__"+a,n.getAttribute(a));
n.removeAttribute(a);
_c6b._lazyNodes.push(n);
}
});
}
});
}
_c69(function(){
for(var i=0;i<_c6b._lazyNodes.length;i++){
var n=_c6b._lazyNodes[i];
_c66.forEach(["dojoType","data-dojo-type"],function(a){
if(n.getAttribute("__"+a)){
n.setAttribute(a,n.getAttribute("__"+a));
n.removeAttribute("__"+a);
}
});
}
delete _c6b._lazyNodes;
});
this.instantiateLazyWidgets=function(root,_c6e,_c6f){
var d=new _c68();
var req=_c6e?_c6e.split(/,/):[];
var _c70=root.getElementsByTagName("*");
var len=_c70.length;
for(var i=0;i<len;i++){
var s=_c70[i].getAttribute("dojoType")||_c70[i].getAttribute("data-dojo-type");
if(s){
req.push(s);
var m=_c70[i].getAttribute("data-dojo-mixins"),_c71=m?m.split(/, */):[];
req=req.concat(_c71);
}
}
if(req.length===0){
return true;
}
if(dojo.require){
_c66.forEach(req,function(c){
dojo["require"](c);
});
dojo.parser.parse(root);
if(_c6f){
_c6f(root);
}
return true;
}else{
req=_c66.map(req,function(s){
return s.replace(/\./g,"/");
});
require(req,function(){
dojo.parser.parse(root);
if(_c6f){
_c6f(root);
}
d.resolve(true);
});
}
return d;
};
};
return new _c6a();
});
},"dijit/_base/wai":function(){
define(["dojo/dom-attr","dojo/_base/lang","../main","../hccss"],function(_c72,lang,_c73){
var _c74={hasWaiRole:function(elem,role){
var _c75=this.getWaiRole(elem);
return role?(_c75.indexOf(role)>-1):(_c75.length>0);
},getWaiRole:function(elem){
return lang.trim((_c72.get(elem,"role")||"").replace("wairole:",""));
},setWaiRole:function(elem,role){
_c72.set(elem,"role",role);
},removeWaiRole:function(elem,role){
var _c76=_c72.get(elem,"role");
if(!_c76){
return;
}
if(role){
var t=lang.trim((" "+_c76+" ").replace(" "+role+" "," "));
_c72.set(elem,"role",t);
}else{
elem.removeAttribute("role");
}
},hasWaiState:function(elem,_c77){
return elem.hasAttribute?elem.hasAttribute("aria-"+_c77):!!elem.getAttribute("aria-"+_c77);
},getWaiState:function(elem,_c78){
return elem.getAttribute("aria-"+_c78)||"";
},setWaiState:function(elem,_c79,_c7a){
elem.setAttribute("aria-"+_c79,_c7a);
},removeWaiState:function(elem,_c7b){
elem.removeAttribute("aria-"+_c7b);
}};
lang.mixin(_c73,_c74);
return _c73;
});
},"dojo/window":function(){
define(["./_base/lang","./sniff","./_base/window","./dom","./dom-geometry","./dom-style","./dom-construct"],function(lang,has,_c7c,dom,geom,_c7d,_c7e){
has.add("rtl-adjust-position-for-verticalScrollBar",function(win,doc){
var body=_c7c.body(doc),_c7f=_c7e.create("div",{style:{overflow:"scroll",overflowX:"visible",direction:"rtl",visibility:"hidden",position:"absolute",left:"0",top:"0",width:"64px",height:"64px"}},body,"last"),div=_c7e.create("div",{style:{overflow:"hidden",direction:"ltr"}},_c7f,"last"),ret=geom.position(div).x!=0;
_c7f.removeChild(div);
body.removeChild(_c7f);
return ret;
});
has.add("position-fixed-support",function(win,doc){
var body=_c7c.body(doc),_c80=_c7e.create("span",{style:{visibility:"hidden",position:"fixed",left:"1px",top:"1px"}},body,"last"),_c81=_c7e.create("span",{style:{position:"fixed",left:"0",top:"0"}},_c80,"last"),ret=geom.position(_c81).x!=geom.position(_c80).x;
_c80.removeChild(_c81);
body.removeChild(_c80);
return ret;
});
var _c82={getBox:function(doc){
doc=doc||_c7c.doc;
var _c83=(doc.compatMode=="BackCompat")?_c7c.body(doc):doc.documentElement,_c84=geom.docScroll(doc),w,h;
if(has("touch")){
var _c85=_c82.get(doc);
w=_c85.innerWidth||_c83.clientWidth;
h=_c85.innerHeight||_c83.clientHeight;
}else{
w=_c83.clientWidth;
h=_c83.clientHeight;
}
return {l:_c84.x,t:_c84.y,w:w,h:h};
},get:function(doc){
if(has("ie")&&_c82!==document.parentWindow){
doc.parentWindow.execScript("document._parentWindow = window;","Javascript");
var win=doc._parentWindow;
doc._parentWindow=null;
return win;
}
return doc.parentWindow||doc.defaultView;
},scrollIntoView:function(node,pos){
try{
node=dom.byId(node);
var doc=node.ownerDocument||_c7c.doc,body=_c7c.body(doc),html=doc.documentElement||body.parentNode,isIE=has("ie"),isWK=has("webkit");
if(node==body||node==html){
return;
}
if(!(has("mozilla")||isIE||isWK||has("opera"))&&("scrollIntoView" in node)){
node.scrollIntoView(false);
return;
}
var _c86=doc.compatMode=="BackCompat",_c87=Math.min(body.clientWidth||html.clientWidth,html.clientWidth||body.clientWidth),_c88=Math.min(body.clientHeight||html.clientHeight,html.clientHeight||body.clientHeight),_c89=(isWK||_c86)?body:html,_c8a=pos||geom.position(node),el=node.parentNode,_c8b=function(el){
return (isIE<=6||(isIE==7&&_c86))?false:(has("position-fixed-support")&&(_c7d.get(el,"position").toLowerCase()=="fixed"));
};
if(_c8b(node)){
return;
}
while(el){
if(el==body){
el=_c89;
}
var _c8c=geom.position(el),_c8d=_c8b(el),rtl=_c7d.getComputedStyle(el).direction.toLowerCase()=="rtl";
if(el==_c89){
_c8c.w=_c87;
_c8c.h=_c88;
if(_c89==html&&isIE&&rtl){
_c8c.x+=_c89.offsetWidth-_c8c.w;
}
if(_c8c.x<0||!isIE||isIE>=9){
_c8c.x=0;
}
if(_c8c.y<0||!isIE||isIE>=9){
_c8c.y=0;
}
}else{
var pb=geom.getPadBorderExtents(el);
_c8c.w-=pb.w;
_c8c.h-=pb.h;
_c8c.x+=pb.l;
_c8c.y+=pb.t;
var _c8e=el.clientWidth,_c8f=_c8c.w-_c8e;
if(_c8e>0&&_c8f>0){
if(rtl&&has("rtl-adjust-position-for-verticalScrollBar")){
_c8c.x+=_c8f;
}
_c8c.w=_c8e;
}
_c8e=el.clientHeight;
_c8f=_c8c.h-_c8e;
if(_c8e>0&&_c8f>0){
_c8c.h=_c8e;
}
}
if(_c8d){
if(_c8c.y<0){
_c8c.h+=_c8c.y;
_c8c.y=0;
}
if(_c8c.x<0){
_c8c.w+=_c8c.x;
_c8c.x=0;
}
if(_c8c.y+_c8c.h>_c88){
_c8c.h=_c88-_c8c.y;
}
if(_c8c.x+_c8c.w>_c87){
_c8c.w=_c87-_c8c.x;
}
}
var l=_c8a.x-_c8c.x,t=_c8a.y-_c8c.y,r=l+_c8a.w-_c8c.w,bot=t+_c8a.h-_c8c.h;
var s,old;
if(r*l>0&&(!!el.scrollLeft||el==_c89||el.scrollWidth>el.offsetHeight)){
s=Math[l<0?"max":"min"](l,r);
if(rtl&&((isIE==8&&!_c86)||isIE>=9)){
s=-s;
}
old=el.scrollLeft;
el.scrollLeft+=s;
s=el.scrollLeft-old;
_c8a.x-=s;
}
if(bot*t>0&&(!!el.scrollTop||el==_c89||el.scrollHeight>el.offsetHeight)){
s=Math.ceil(Math[t<0?"max":"min"](t,bot));
old=el.scrollTop;
el.scrollTop+=s;
s=el.scrollTop-old;
_c8a.y-=s;
}
el=(el!=_c89)&&!_c8d&&el.parentNode;
}
}
catch(error){
console.error("scrollIntoView: "+error);
node.scrollIntoView(false);
}
}};
1&&lang.setObject("dojo.window",_c82);
return _c82;
});
},"dojox/mobile/Tooltip":function(){
define(["dojo/_base/array","dijit/registry","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/place","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Tooltip"],function(_c90,_c91,_c92,lang,_c93,_c94,_c95,_c96,_c97,_c98,has,_c99){
var _c9a=_c92(has("dojo-bidi")?"dojox.mobile.NonBidiTooltip":"dojox.mobile.Tooltip",_c98,{baseClass:"mblTooltip mblTooltipHidden",buildRendering:function(){
this.inherited(arguments);
this.anchor=_c94.create("div",{"class":"mblTooltipAnchor"},this.domNode,"first");
this.arrow=_c94.create("div",{"class":"mblTooltipArrow"},this.anchor);
this.innerArrow=_c94.create("div",{"class":"mblTooltipInnerArrow"},this.anchor);
if(!this.containerNode){
this.containerNode=this.domNode;
}
},show:function(_c9b,_c9c){
var _c9d=this.domNode;
var _c9e={"MRM":"mblTooltipAfter","MLM":"mblTooltipBefore","BMT":"mblTooltipBelow","TMB":"mblTooltipAbove","BLT":"mblTooltipBelow","TLB":"mblTooltipAbove","BRT":"mblTooltipBelow","TRB":"mblTooltipAbove","TLT":"mblTooltipBefore","TRT":"mblTooltipAfter","BRB":"mblTooltipAfter","BLB":"mblTooltipBefore"};
_c93.remove(_c9d,["mblTooltipAfter","mblTooltipBefore","mblTooltipBelow","mblTooltipAbove"]);
_c90.forEach(_c91.findWidgets(_c9d),function(_c9f){
if(_c9f.height=="auto"&&typeof _c9f.resize=="function"){
if(!_c9f._parentPadBorderExtentsBottom){
_c9f._parentPadBorderExtentsBottom=_c95.getPadBorderExtents(_c9d).b;
}
_c9f.resize();
}
});
if(_c9c){
_c9c=_c90.map(_c9c,function(pos){
return {after:"after-centered",before:"before-centered"}[pos]||pos;
});
}
var best=_c97.around(_c9d,_c9b,_c9c||["below-centered","above-centered","after-centered","before-centered"],this.isLeftToRight());
var _ca0=_c9e[best.corner+best.aroundCorner.charAt(0)]||"";
_c93.add(_c9d,_ca0);
var pos=_c95.position(_c9b,true);
_c96.set(this.anchor,(_ca0=="mblTooltipAbove"||_ca0=="mblTooltipBelow")?{top:"",left:Math.max(0,pos.x-best.x+(pos.w>>1)-(this.arrow.offsetWidth>>1))+"px"}:{left:"",top:Math.max(0,pos.y-best.y+(pos.h>>1)-(this.arrow.offsetHeight>>1))+"px"});
_c93.replace(_c9d,"mblTooltipVisible","mblTooltipHidden");
this.resize=lang.hitch(this,"show",_c9b,_c9c);
return best;
},hide:function(){
this.resize=undefined;
_c93.replace(this.domNode,"mblTooltipHidden","mblTooltipVisible");
},onBlur:function(e){
return true;
},destroy:function(){
if(this.anchor){
this.anchor.removeChild(this.innerArrow);
this.anchor.removeChild(this.arrow);
this.domNode.removeChild(this.anchor);
this.anchor=this.arrow=this.innerArrow=undefined;
}
this.inherited(arguments);
}});
return has("dojo-bidi")?_c92("dojox.mobile.Tooltip",[_c9a,_c99]):_c9a;
});
},"dojox/mobile/_TimePickerMixin":function(){
define(["dojo/_base/declare","dojo/dom-class","dojo/date/locale"],function(_ca1,_ca2,_ca3){
return _ca1("dojox.mobile._TimePickerMixin",null,{reset:function(){
var now=new Date(),h=now.getHours()+"",m=now.getMinutes();
m=(m<10?"0":"")+m;
this.set("colors",[h,m]);
if(this.values){
this.set("values",this.values);
this.values=null;
}else{
if(this.values12){
this.set("values12",this.values12);
this.values12=null;
}else{
this.set("values",[h,m]);
}
}
},_getDateAttr:function(){
var v=this.get("values");
return _ca3.parse(v[0]+":"+v[1],{timePattern:"H:m",selector:"time"});
}});
});
},"dojox/mobile/SpinWheel":function(){
define(["dojo/_base/declare","dojo/_base/array","dojo/dom-construct","./_PickerBase","./SpinWheelSlot"],function(_ca4,_ca5,_ca6,_ca7){
return _ca4("dojox.mobile.SpinWheel",_ca7,{baseClass:"mblSpinWheel",buildRendering:function(){
this.inherited(arguments);
_ca6.create("div",{className:"mblSpinWheelBar"},this.domNode);
},startup:function(){
if(this._started){
return;
}
this.centerPos=Math.round(this.domNode.offsetHeight/2);
this.inherited(arguments);
},resize:function(){
this.centerPos=Math.round(this.domNode.offsetHeight/2);
_ca5.forEach(this.getChildren(),function(_ca8){
_ca8.resize&&_ca8.resize();
});
},addChild:function(_ca9,_caa){
this.inherited(arguments);
if(this._started){
_ca9.setInitialValue();
}
}});
});
},"dojox/mobile/_css3":function(){
define(["dojo/_base/window","dojo/_base/array","dojo/has"],function(win,arr,has){
var _cab=[],_cac=[];
var _cad=win.doc.createElement("div").style;
var _cae=["webkit"];
has.add("css3-animations",function(_caf,_cb0,_cb1){
var _cb2=_cb1.style;
return (_cb2["animation"]!==undefined&&_cb2["transition"]!==undefined)||arr.some(_cae,function(p){
return _cb2[p+"Animation"]!==undefined&&_cb2[p+"Transition"]!==undefined;
});
});
var css3={name:function(p,_cb3){
var n=(_cb3?_cac:_cab)[p];
if(!n){
if(/End|Start/.test(p)){
var idx=p.length-(p.match(/End/)?3:5);
var s=p.substr(0,idx);
var pp=this.name(s);
if(pp==s){
n=p.toLowerCase();
}else{
n=pp+p.substr(idx);
}
}else{
if(p=="keyframes"){
var pk=this.name("animation",_cb3);
if(pk=="animation"){
n=p;
}else{
if(_cb3){
n=pk.replace(/animation/,"keyframes");
}else{
n=pk.replace(/Animation/,"Keyframes");
}
}
}else{
var cn=_cb3?p.replace(/-(.)/g,function(_cb4,p1){
return p1.toUpperCase();
}):p;
if(_cad[cn]!==undefined){
n=p;
}else{
cn=cn.charAt(0).toUpperCase()+cn.slice(1);
arr.some(_cae,function(_cb5){
if(_cad[_cb5+cn]!==undefined){
if(_cb3){
n="-"+_cb5+"-"+p;
}else{
n=_cb5+cn;
}
}
});
}
}
}
if(!n){
n=p;
}
(_cb3?_cac:_cab)[p]=n;
}
return n;
},add:function(_cb6,_cb7){
for(var p in _cb7){
if(_cb7.hasOwnProperty(p)){
_cb6[css3.name(p)]=_cb7[p];
}
}
return _cb6;
}};
return css3;
});
},"dijit/selection":function(){
define(["dojo/_base/array","dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","dijit/focus"],function(_cb8,dom,lang,has,_cb9,_cba){
var _cbb=function(win){
var doc=win.document;
this.getType=function(){
if(doc.getSelection){
var _cbc="text";
var oSel;
try{
oSel=win.getSelection();
}
catch(e){
}
if(oSel&&oSel.rangeCount==1){
var _cbd=oSel.getRangeAt(0);
if((_cbd.startContainer==_cbd.endContainer)&&((_cbd.endOffset-_cbd.startOffset)==1)&&(_cbd.startContainer.nodeType!=3)){
_cbc="control";
}
}
return _cbc;
}else{
return doc.selection.type.toLowerCase();
}
};
this.getSelectedText=function(){
if(doc.getSelection){
var _cbe=win.getSelection();
return _cbe?_cbe.toString():"";
}else{
if(this.getType()=="control"){
return null;
}
return doc.selection.createRange().text;
}
};
this.getSelectedHtml=function(){
if(doc.getSelection){
var _cbf=win.getSelection();
if(_cbf&&_cbf.rangeCount){
var i;
var html="";
for(i=0;i<_cbf.rangeCount;i++){
var frag=_cbf.getRangeAt(i).cloneContents();
var div=doc.createElement("div");
div.appendChild(frag);
html+=div.innerHTML;
}
return html;
}
return null;
}else{
if(this.getType()=="control"){
return null;
}
return doc.selection.createRange().htmlText;
}
};
this.getSelectedElement=function(){
if(this.getType()=="control"){
if(doc.getSelection){
var _cc0=win.getSelection();
return _cc0.anchorNode.childNodes[_cc0.anchorOffset];
}else{
var _cc1=doc.selection.createRange();
if(_cc1&&_cc1.item){
return doc.selection.createRange().item(0);
}
}
}
return null;
};
this.getParentElement=function(){
if(this.getType()=="control"){
var p=this.getSelectedElement();
if(p){
return p.parentNode;
}
}else{
if(doc.getSelection){
var _cc2=doc.getSelection();
if(_cc2){
var node=_cc2.anchorNode;
while(node&&(node.nodeType!=1)){
node=node.parentNode;
}
return node;
}
}else{
var r=doc.selection.createRange();
r.collapse(true);
return r.parentElement();
}
}
return null;
};
this.hasAncestorElement=function(_cc3){
return this.getAncestorElement.apply(this,arguments)!=null;
};
this.getAncestorElement=function(_cc4){
var node=this.getSelectedElement()||this.getParentElement();
return this.getParentOfType(node,arguments);
};
this.isTag=function(node,tags){
if(node&&node.tagName){
var _cc5=node.tagName.toLowerCase();
for(var i=0;i<tags.length;i++){
var _cc6=String(tags[i]).toLowerCase();
if(_cc5==_cc6){
return _cc6;
}
}
}
return "";
};
this.getParentOfType=function(node,tags){
while(node){
if(this.isTag(node,tags).length){
return node;
}
node=node.parentNode;
}
return null;
};
this.collapse=function(_cc7){
if(doc.getSelection){
var _cc8=win.getSelection();
if(_cc8.removeAllRanges){
if(_cc7){
_cc8.collapseToStart();
}else{
_cc8.collapseToEnd();
}
}else{
_cc8.collapse(_cc7);
}
}else{
var _cc9=doc.selection.createRange();
_cc9.collapse(_cc7);
_cc9.select();
}
};
this.remove=function(){
var sel=doc.selection;
if(doc.getSelection){
sel=win.getSelection();
sel.deleteFromDocument();
return sel;
}else{
if(sel.type.toLowerCase()!="none"){
sel.clear();
}
return sel;
}
};
this.selectElementChildren=function(_cca,_ccb){
var _ccc;
_cca=dom.byId(_cca);
if(doc.getSelection){
var _ccd=win.getSelection();
if(has("opera")){
if(_ccd.rangeCount){
_ccc=_ccd.getRangeAt(0);
}else{
_ccc=doc.createRange();
}
_ccc.setStart(_cca,0);
_ccc.setEnd(_cca,(_cca.nodeType==3)?_cca.length:_cca.childNodes.length);
_ccd.addRange(_ccc);
}else{
_ccd.selectAllChildren(_cca);
}
}else{
_ccc=_cca.ownerDocument.body.createTextRange();
_ccc.moveToElementText(_cca);
if(!_ccb){
try{
_ccc.select();
}
catch(e){
}
}
}
};
this.selectElement=function(_cce,_ccf){
var _cd0;
_cce=dom.byId(_cce);
if(doc.getSelection){
var _cd1=doc.getSelection();
_cd0=doc.createRange();
if(_cd1.removeAllRanges){
if(has("opera")){
if(_cd1.getRangeAt(0)){
_cd0=_cd1.getRangeAt(0);
}
}
_cd0.selectNode(_cce);
_cd1.removeAllRanges();
_cd1.addRange(_cd0);
}
}else{
try{
var tg=_cce.tagName?_cce.tagName.toLowerCase():"";
if(tg==="img"||tg==="table"){
_cd0=_cb9.body(doc).createControlRange();
}else{
_cd0=_cb9.body(doc).createRange();
}
_cd0.addElement(_cce);
if(!_ccf){
_cd0.select();
}
}
catch(e){
this.selectElementChildren(_cce,_ccf);
}
}
};
this.inSelection=function(node){
if(node){
var _cd2;
var _cd3;
if(doc.getSelection){
var sel=win.getSelection();
if(sel&&sel.rangeCount>0){
_cd3=sel.getRangeAt(0);
}
if(_cd3&&_cd3.compareBoundaryPoints&&doc.createRange){
try{
_cd2=doc.createRange();
_cd2.setStart(node,0);
if(_cd3.compareBoundaryPoints(_cd3.START_TO_END,_cd2)===1){
return true;
}
}
catch(e){
}
}
}else{
_cd3=doc.selection.createRange();
try{
_cd2=node.ownerDocument.body.createTextRange();
_cd2.moveToElementText(node);
}
catch(e2){
}
if(_cd3&&_cd2){
if(_cd3.compareEndPoints("EndToStart",_cd2)===1){
return true;
}
}
}
}
return false;
},this.getBookmark=function(){
var bm,rg,tg,sel=doc.selection,cf=_cba.curNode;
if(doc.getSelection){
sel=win.getSelection();
if(sel){
if(sel.isCollapsed){
tg=cf?cf.tagName:"";
if(tg){
tg=tg.toLowerCase();
if(tg=="textarea"||(tg=="input"&&(!cf.type||cf.type.toLowerCase()=="text"))){
sel={start:cf.selectionStart,end:cf.selectionEnd,node:cf,pRange:true};
return {isCollapsed:(sel.end<=sel.start),mark:sel};
}
}
bm={isCollapsed:true};
if(sel.rangeCount){
bm.mark=sel.getRangeAt(0).cloneRange();
}
}else{
rg=sel.getRangeAt(0);
bm={isCollapsed:false,mark:rg.cloneRange()};
}
}
}else{
if(sel){
tg=cf?cf.tagName:"";
tg=tg.toLowerCase();
if(cf&&tg&&(tg=="button"||tg=="textarea"||tg=="input")){
if(sel.type&&sel.type.toLowerCase()=="none"){
return {isCollapsed:true,mark:null};
}else{
rg=sel.createRange();
return {isCollapsed:rg.text&&rg.text.length?false:true,mark:{range:rg,pRange:true}};
}
}
bm={};
try{
rg=sel.createRange();
bm.isCollapsed=!(sel.type=="Text"?rg.htmlText.length:rg.length);
}
catch(e){
bm.isCollapsed=true;
return bm;
}
if(sel.type.toUpperCase()=="CONTROL"){
if(rg.length){
bm.mark=[];
var i=0,len=rg.length;
while(i<len){
bm.mark.push(rg.item(i++));
}
}else{
bm.isCollapsed=true;
bm.mark=null;
}
}else{
bm.mark=rg.getBookmark();
}
}else{
console.warn("No idea how to store the current selection for this browser!");
}
}
return bm;
};
this.moveToBookmark=function(_cd4){
var mark=_cd4.mark;
if(mark){
if(doc.getSelection){
var sel=win.getSelection();
if(sel&&sel.removeAllRanges){
if(mark.pRange){
var n=mark.node;
n.selectionStart=mark.start;
n.selectionEnd=mark.end;
}else{
sel.removeAllRanges();
sel.addRange(mark);
}
}else{
console.warn("No idea how to restore selection for this browser!");
}
}else{
if(doc.selection&&mark){
var rg;
if(mark.pRange){
rg=mark.range;
}else{
if(lang.isArray(mark)){
rg=doc.body.createControlRange();
_cb8.forEach(mark,function(n){
rg.addElement(n);
});
}else{
rg=doc.body.createTextRange();
rg.moveToBookmark(mark);
}
}
rg.select();
}
}
}
};
this.isCollapsed=function(){
return this.getBookmark().isCollapsed;
};
};
var _cd5=new _cbb(window);
_cd5.SelectionManager=_cbb;
return _cd5;
});
},"dojox/mobile/EdgeToEdgeList":function(){
define(["dojo/_base/declare","./RoundRectList"],function(_cd6,_cd7){
return _cd6("dojox.mobile.EdgeToEdgeList",_cd7,{filterBoxClass:"mblFilteredEdgeToEdgeListSearchBox",buildRendering:function(){
this.inherited(arguments);
this.domNode.className="mblEdgeToEdgeList";
}});
});
},"dojox/mobile/ValuePickerSlot":function(){
define(["dojo/_base/array","dojo/_base/declare","dojo/_base/event","dojo/_base/lang","dojo/_base/window","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/touch","dijit/_WidgetBase","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/ValuePickerSlot"],function(_cd8,_cd9,_cda,lang,win,_cdb,_cdc,_cdd,_cde,_cdf,_ce0,has,_ce1){
var _ce2=_cd9(has("dojo-bidi")?"dojox.mobile.NonBidiValuePickerSlot":"dojox.mobile.ValuePickerSlot",_cdf,{items:[],labels:[],labelFrom:0,labelTo:0,zeroPad:0,value:"",step:1,readOnly:false,tabIndex:"0",plusBtnLabel:"",plusBtnLabelRef:"",minusBtnLabel:"",minusBtnLabelRef:"",baseClass:"mblValuePickerSlot",buildRendering:function(){
this.inherited(arguments);
this.initLabels();
if(this.labels.length>0){
this.items=[];
for(var i=0;i<this.labels.length;i++){
this.items.push([i,this.labels[i]]);
}
}
this.plusBtnNode=_cdc.create("div",{className:"mblValuePickerSlotPlusButton mblValuePickerSlotButton",title:"+"},this.domNode);
this.plusIconNode=_cdc.create("div",{className:"mblValuePickerSlotIcon"},this.plusBtnNode);
_ce0.createIcon("mblDomButtonGrayPlus",null,this.plusIconNode);
this.inputAreaNode=_cdc.create("div",{className:"mblValuePickerSlotInputArea"},this.domNode);
this.inputNode=_cdc.create("input",{className:"mblValuePickerSlotInput",readonly:this.readOnly},this.inputAreaNode);
this.minusBtnNode=_cdc.create("div",{className:"mblValuePickerSlotMinusButton mblValuePickerSlotButton",title:"-"},this.domNode);
this.minusIconNode=_cdc.create("div",{className:"mblValuePickerSlotIcon"},this.minusBtnNode);
_ce0.createIcon("mblDomButtonGrayMinus",null,this.minusIconNode);
_cdd.set(this.plusBtnNode,"role","button");
this._setPlusBtnLabelAttr(this.plusBtnLabel);
this._setPlusBtnLabelRefAttr(this.plusBtnLabelRef);
_cdd.set(this.inputNode,"role","textbox");
var _ce3=require("dijit/registry");
var _ce4=_ce3.getUniqueId("dojo_mobile__mblValuePickerSlotInput");
_cdd.set(this.inputNode,"id",_ce4);
_cdd.set(this.plusBtnNode,"aria-controls",_ce4);
_cdd.set(this.minusBtnNode,"role","button");
_cdd.set(this.minusBtnNode,"aria-controls",_ce4);
this._setMinusBtnLabelAttr(this.minusBtnLabel);
this._setMinusBtnLabelRefAttr(this.minusBtnLabelRef);
if(this.value===""&&this.items.length>0){
this.value=this.items[0][1];
}
this._initialValue=this.value;
},startup:function(){
if(this._started){
return;
}
this._handlers=[this.connect(this.plusBtnNode,_cde.press,"_onTouchStart"),this.connect(this.minusBtnNode,_cde.press,"_onTouchStart"),this.connect(this.plusBtnNode,"onkeydown","_onClick"),this.connect(this.minusBtnNode,"onkeydown","_onClick"),this.connect(this.inputNode,"onchange",lang.hitch(this,function(e){
this._onChange(e);
}))];
this.inherited(arguments);
this._set(this.plusBtnLabel);
},initLabels:function(){
if(this.labelFrom!==this.labelTo){
var a=this.labels=[],_ce5=this.zeroPad&&Array(this.zeroPad).join("0");
for(var i=this.labelFrom;i<=this.labelTo;i+=this.step){
a.push(this.zeroPad?(_ce5+i).slice(-this.zeroPad):i+"");
}
}
},spin:function(_ce6){
var pos=-1,v=this.get("value"),len=this.items.length;
for(var i=0;i<len;i++){
if(this.items[i][1]===v){
pos=i;
break;
}
}
if(v==-1){
return;
}
pos+=_ce6;
if(pos<0){
pos+=(Math.abs(Math.ceil(pos/len))+1)*len;
}
var _ce7=this.items[pos%len];
this.set("value",_ce7[1]);
},setInitialValue:function(){
this.set("value",this._initialValue);
},_onClick:function(e){
if(e&&e.type==="keydown"&&e.keyCode!==13){
return;
}
if(this.onClick(e)===false){
return;
}
var node=e.currentTarget;
if(node===this.plusBtnNode||node===this.minusBtnNode){
this._btn=node;
}
this.spin(this._btn===this.plusBtnNode?1:-1);
},onClick:function(){
},_onChange:function(e){
if(this.onChange(e)===false){
return;
}
var v=this.get("value"),a=this.validate(v);
this.set("value",a.length?a[0][1]:this.value);
},onChange:function(){
},validate:function(_ce8){
return _cd8.filter(this.items,function(a){
return (a[1]+"").toLowerCase()==(_ce8+"").toLowerCase();
});
},_onTouchStart:function(e){
this._conn=[this.connect(win.body(),_cde.move,"_onTouchMove"),this.connect(win.body(),_cde.release,"_onTouchEnd")];
this.touchStartX=e.touches?e.touches[0].pageX:e.clientX;
this.touchStartY=e.touches?e.touches[0].pageY:e.clientY;
_cdb.add(e.currentTarget,"mblValuePickerSlotButtonSelected");
this._btn=e.currentTarget;
if(this._timer){
this._timer.remove();
this._timer=null;
}
if(this._interval){
clearInterval(this._interval);
this._interval=null;
}
this._timer=this.defer(function(){
this._interval=setInterval(lang.hitch(this,function(){
this.spin(this._btn===this.plusBtnNode?1:-1);
}),60);
this._timer=null;
},1000);
_cda.stop(e);
},_onTouchMove:function(e){
var x=e.touches?e.touches[0].pageX:e.clientX;
var y=e.touches?e.touches[0].pageY:e.clientY;
if(Math.abs(x-this.touchStartX)>=4||Math.abs(y-this.touchStartY)>=4){
if(this._timer){
this._timer.remove();
this._timer=null;
}
if(this._interval){
clearInterval(this._interval);
this._interval=null;
}
_cd8.forEach(this._conn,this.disconnect,this);
_cdb.remove(this._btn,"mblValuePickerSlotButtonSelected");
}
},_onTouchEnd:function(e){
if(this._timer){
this._timer.remove();
this._timer=null;
}
_cd8.forEach(this._conn,this.disconnect,this);
_cdb.remove(this._btn,"mblValuePickerSlotButtonSelected");
if(this._interval){
clearInterval(this._interval);
this._interval=null;
}else{
this._onClick(e);
}
},_getKeyAttr:function(){
var val=this.get("value");
var item=_cd8.filter(this.items,function(item){
return item[1]===val;
})[0];
return item?item[0]:null;
},_getValueAttr:function(){
return this.inputNode.value;
},_setValueAttr:function(_ce9){
this._spinToValue(_ce9,true);
},_spinToValue:function(_cea,_ceb){
if(this.get("value")==_cea){
return;
}
this.inputNode.value=_cea;
if(_ceb){
this._set("value",_cea);
}
var _cec=this.getParent();
if(_cec&&_cec.onValueChanged){
_cec.onValueChanged(this);
}
},_setTabIndexAttr:function(_ced){
this.plusBtnNode.setAttribute("tabIndex",_ced);
this.minusBtnNode.setAttribute("tabIndex",_ced);
},_setAria:function(node,attr,_cee){
if(_cee){
_cdd.set(node,attr,_cee);
}else{
_cdd.remove(node,attr);
}
},_setPlusBtnLabelAttr:function(_cef){
this._setAria(this.plusBtnNode,"aria-label",_cef);
},_setPlusBtnLabelRefAttr:function(_cf0){
this._setAria(this.plusBtnNode,"aria-labelledby",_cf0);
},_setMinusBtnLabelAttr:function(_cf1){
this._setAria(this.minusBtnNode,"aria-label",_cf1);
},_setMinusBtnLabelRefAttr:function(_cf2){
this._setAria(this.minusBtnNode,"aria-labelledby",_cf2);
}});
return has("dojo-bidi")?_cd9("dojox.mobile.ValuePickerSlot",[_ce2,_ce1]):_ce2;
});
},"dijit/popup":function(){
define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/keys","dojo/_base/lang","dojo/on","./place","./BackgroundIframe","./Viewport","./main"],function(_cf3,_cf4,_cf5,dom,_cf6,_cf7,_cf8,_cf9,has,keys,lang,on,_cfa,_cfb,_cfc,_cfd){
function _cfe(){
if(this._popupWrapper){
_cf7.destroy(this._popupWrapper);
delete this._popupWrapper;
}
};
var _cff=_cf5(null,{_stack:[],_beginZIndex:1000,_idGen:1,_repositionAll:function(){
if(this._firstAroundNode){
var _d00=this._firstAroundPosition,_d01=_cf8.position(this._firstAroundNode,true),dx=_d01.x-_d00.x,dy=_d01.y-_d00.y;
if(dx||dy){
this._firstAroundPosition=_d01;
for(var i=0;i<this._stack.length;i++){
var _d02=this._stack[i].wrapper.style;
_d02.top=(parseInt(_d02.top,10)+dy)+"px";
if(_d02.right=="auto"){
_d02.left=(parseInt(_d02.left,10)+dx)+"px";
}else{
_d02.right=(parseInt(_d02.right,10)-dx)+"px";
}
}
}
this._aroundMoveListener=setTimeout(lang.hitch(this,"_repositionAll"),dx||dy?10:50);
}
},_createWrapper:function(_d03){
var _d04=_d03._popupWrapper,node=_d03.domNode;
if(!_d04){
_d04=_cf7.create("div",{"class":"dijitPopup",style:{display:"none"},role:"region","aria-label":_d03["aria-label"]||_d03.label||_d03.name||_d03.id},_d03.ownerDocumentBody);
_d04.appendChild(node);
var s=node.style;
s.display="";
s.visibility="";
s.position="";
s.top="0px";
_d03._popupWrapper=_d04;
_cf4.after(_d03,"destroy",_cfe,true);
}
return _d04;
},moveOffScreen:function(_d05){
var _d06=this._createWrapper(_d05);
var ltr=_cf8.isBodyLtr(_d05.ownerDocument),_d07={visibility:"hidden",top:"-9999px",display:""};
_d07[ltr?"left":"right"]="-9999px";
_d07[ltr?"right":"left"]="auto";
_cf9.set(_d06,_d07);
return _d06;
},hide:function(_d08){
var _d09=this._createWrapper(_d08);
_cf9.set(_d09,{display:"none",height:"auto",overflow:"visible",border:""});
var node=_d08.domNode;
if("_originalStyle" in node){
node.style.cssText=node._originalStyle;
}
},getTopPopup:function(){
var _d0a=this._stack;
for(var pi=_d0a.length-1;pi>0&&_d0a[pi].parent===_d0a[pi-1].widget;pi--){
}
return _d0a[pi];
},open:function(args){
var _d0b=this._stack,_d0c=args.popup,node=_d0c.domNode,_d0d=args.orient||["below","below-alt","above","above-alt"],ltr=args.parent?args.parent.isLeftToRight():_cf8.isBodyLtr(_d0c.ownerDocument),_d0e=args.around,id=(args.around&&args.around.id)?(args.around.id+"_dropdown"):("popup_"+this._idGen++);
while(_d0b.length&&(!args.parent||!dom.isDescendant(args.parent.domNode,_d0b[_d0b.length-1].widget.domNode))){
this.close(_d0b[_d0b.length-1].widget);
}
var _d0f=this.moveOffScreen(_d0c);
if(_d0c.startup&&!_d0c._started){
_d0c.startup();
}
var _d10,_d11=_cf8.position(node);
if("maxHeight" in args&&args.maxHeight!=-1){
_d10=args.maxHeight||Infinity;
}else{
var _d12=_cfc.getEffectiveBox(this.ownerDocument),_d13=_d0e?_cf8.position(_d0e,false):{y:args.y-(args.padding||0),h:(args.padding||0)*2};
_d10=Math.floor(Math.max(_d13.y,_d12.h-(_d13.y+_d13.h)));
}
if(_d11.h>_d10){
var cs=_cf9.getComputedStyle(node),_d14=cs.borderLeftWidth+" "+cs.borderLeftStyle+" "+cs.borderLeftColor;
_cf9.set(_d0f,{overflowY:"scroll",height:_d10+"px",border:_d14});
node._originalStyle=node.style.cssText;
node.style.border="none";
}
_cf6.set(_d0f,{id:id,style:{zIndex:this._beginZIndex+_d0b.length},"class":"dijitPopup "+(_d0c.baseClass||_d0c["class"]||"").split(" ")[0]+"Popup",dijitPopupParent:args.parent?args.parent.id:""});
if(_d0b.length==0&&_d0e){
this._firstAroundNode=_d0e;
this._firstAroundPosition=_cf8.position(_d0e,true);
this._aroundMoveListener=setTimeout(lang.hitch(this,"_repositionAll"),50);
}
if(has("config-bgIframe")&&!_d0c.bgIframe){
_d0c.bgIframe=new _cfb(_d0f);
}
var _d15=_d0c.orient?lang.hitch(_d0c,"orient"):null,best=_d0e?_cfa.around(_d0f,_d0e,_d0d,ltr,_d15):_cfa.at(_d0f,args,_d0d=="R"?["TR","BR","TL","BL"]:["TL","BL","TR","BR"],args.padding,_d15);
_d0f.style.visibility="visible";
node.style.visibility="visible";
var _d16=[];
_d16.push(on(_d0f,"keydown",lang.hitch(this,function(evt){
if(evt.keyCode==keys.ESCAPE&&args.onCancel){
evt.stopPropagation();
evt.preventDefault();
args.onCancel();
}else{
if(evt.keyCode==keys.TAB){
evt.stopPropagation();
evt.preventDefault();
var _d17=this.getTopPopup();
if(_d17&&_d17.onCancel){
_d17.onCancel();
}
}
}
})));
if(_d0c.onCancel&&args.onCancel){
_d16.push(_d0c.on("cancel",args.onCancel));
}
_d16.push(_d0c.on(_d0c.onExecute?"execute":"change",lang.hitch(this,function(){
var _d18=this.getTopPopup();
if(_d18&&_d18.onExecute){
_d18.onExecute();
}
})));
_d0b.push({widget:_d0c,wrapper:_d0f,parent:args.parent,onExecute:args.onExecute,onCancel:args.onCancel,onClose:args.onClose,handlers:_d16});
if(_d0c.onOpen){
_d0c.onOpen(best);
}
return best;
},close:function(_d19){
var _d1a=this._stack;
while((_d19&&_cf3.some(_d1a,function(elem){
return elem.widget==_d19;
}))||(!_d19&&_d1a.length)){
var top=_d1a.pop(),_d1b=top.widget,_d1c=top.onClose;
if(_d1b.onClose){
_d1b.onClose();
}
var h;
while(h=top.handlers.pop()){
h.remove();
}
if(_d1b&&_d1b.domNode){
this.hide(_d1b);
}
if(_d1c){
_d1c();
}
}
if(_d1a.length==0&&this._aroundMoveListener){
clearTimeout(this._aroundMoveListener);
this._firstAroundNode=this._firstAroundPosition=this._aroundMoveListener=null;
}
}});
return (_cfd.popup=new _cff());
});
},"dojox/mobile/uacss":function(){
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","./sniff"],function(dojo,lang,win,has){
var html=win.doc.documentElement;
html.className=lang.trim(html.className+" "+[has("bb")?"dj_bb":"",has("android")?"dj_android":"",has("ios")?"dj_ios":"",has("ios")>=6?"dj_ios6":"",has("ios")?"dj_iphone":"",has("ipod")?"dj_ipod":"",has("ipad")?"dj_ipad":"",has("ie")?"dj_ie":""].join(" ").replace(/ +/g," "));
return dojo;
});
},"dijit/_base/window":function(){
define(["dojo/window","../main"],function(_d1d,_d1e){
_d1e.getDocumentWindow=function(doc){
return _d1d.get(doc);
};
});
},"dijit/_WidgetBase":function(){
define(["require","dojo/_base/array","dojo/aspect","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/has","dojo/_base/kernel","dojo/_base/lang","dojo/on","dojo/ready","dojo/Stateful","dojo/topic","dojo/_base/window","./Destroyable","dojo/has!dojo-bidi?./_BidiMixin","./registry"],function(_d1f,_d20,_d21,_d22,_d23,_d24,dom,_d25,_d26,_d27,_d28,_d29,has,_d2a,lang,on,_d2b,_d2c,_d2d,win,_d2e,_d2f,_d30){
has.add("dijit-legacy-requires",!_d2a.isAsync);
has.add("dojo-bidi",false);
if(has("dijit-legacy-requires")){
_d2b(0,function(){
var _d31=["dijit/_base/manager"];
_d1f(_d31);
});
}
var _d32={};
function _d33(obj){
var ret={};
for(var attr in obj){
ret[attr.toLowerCase()]=true;
}
return ret;
};
function _d34(attr){
return function(val){
_d25[val?"set":"remove"](this.domNode,attr,val);
this._set(attr,val);
};
};
var _d35=_d24("dijit._WidgetBase",[_d2c,_d2e],{id:"",_setIdAttr:"domNode",lang:"",_setLangAttr:_d34("lang"),dir:"",_setDirAttr:_d34("dir"),"class":"",_setClassAttr:{node:"domNode",type:"class"},style:"",title:"",tooltip:"",baseClass:"",srcNodeRef:null,domNode:null,containerNode:null,ownerDocument:null,_setOwnerDocumentAttr:function(val){
this._set("ownerDocument",val);
},attributeMap:{},_blankGif:_d22.blankGif||_d1f.toUrl("dojo/resources/blank.gif"),_introspect:function(){
var ctor=this.constructor;
if(!ctor._setterAttrs){
var _d36=ctor.prototype,_d37=ctor._setterAttrs=[],_d38=(ctor._onMap={});
for(var name in _d36.attributeMap){
_d37.push(name);
}
for(name in _d36){
if(/^on/.test(name)){
_d38[name.substring(2).toLowerCase()]=name;
}
if(/^_set[A-Z](.*)Attr$/.test(name)){
name=name.charAt(4).toLowerCase()+name.substr(5,name.length-9);
if(!_d36.attributeMap||!(name in _d36.attributeMap)){
_d37.push(name);
}
}
}
}
},postscript:function(_d39,_d3a){
this.create(_d39,_d3a);
},create:function(_d3b,_d3c){
this._introspect();
this.srcNodeRef=dom.byId(_d3c);
this._connects=[];
this._supportingWidgets=[];
if(this.srcNodeRef&&(typeof this.srcNodeRef.id=="string")){
this.id=this.srcNodeRef.id;
}
if(_d3b){
this.params=_d3b;
lang.mixin(this,_d3b);
}
this.postMixInProperties();
if(!this.id){
this.id=_d30.getUniqueId(this.declaredClass.replace(/\./g,"_"));
if(this.params){
delete this.params.id;
}
}
this.ownerDocument=this.ownerDocument||(this.srcNodeRef?this.srcNodeRef.ownerDocument:document);
this.ownerDocumentBody=win.body(this.ownerDocument);
_d30.add(this);
this.buildRendering();
var _d3d;
if(this.domNode){
this._applyAttributes();
var _d3e=this.srcNodeRef;
if(_d3e&&_d3e.parentNode&&this.domNode!==_d3e){
_d3e.parentNode.replaceChild(this.domNode,_d3e);
_d3d=true;
}
this.domNode.setAttribute("widgetId",this.id);
}
this.postCreate();
if(_d3d){
delete this.srcNodeRef;
}
this._created=true;
},_applyAttributes:function(){
var _d3f={};
for(var key in this.params||{}){
_d3f[key]=this._get(key);
}
_d20.forEach(this.constructor._setterAttrs,function(key){
if(!(key in _d3f)){
var val=this._get(key);
if(val){
this.set(key,val);
}
}
},this);
for(key in _d3f){
this.set(key,_d3f[key]);
}
},postMixInProperties:function(){
},buildRendering:function(){
if(!this.domNode){
this.domNode=this.srcNodeRef||this.ownerDocument.createElement("div");
}
if(this.baseClass){
var _d40=this.baseClass.split(" ");
if(!this.isLeftToRight()){
_d40=_d40.concat(_d20.map(_d40,function(name){
return name+"Rtl";
}));
}
_d26.add(this.domNode,_d40);
}
},postCreate:function(){
},startup:function(){
if(this._started){
return;
}
this._started=true;
_d20.forEach(this.getChildren(),function(obj){
if(!obj._started&&!obj._destroyed&&lang.isFunction(obj.startup)){
obj.startup();
obj._started=true;
}
});
},destroyRecursive:function(_d41){
this._beingDestroyed=true;
this.destroyDescendants(_d41);
this.destroy(_d41);
},destroy:function(_d42){
this._beingDestroyed=true;
this.uninitialize();
function _d43(w){
if(w.destroyRecursive){
w.destroyRecursive(_d42);
}else{
if(w.destroy){
w.destroy(_d42);
}
}
};
_d20.forEach(this._connects,lang.hitch(this,"disconnect"));
_d20.forEach(this._supportingWidgets,_d43);
if(this.domNode){
_d20.forEach(_d30.findWidgets(this.domNode,this.containerNode),_d43);
}
this.destroyRendering(_d42);
_d30.remove(this.id);
this._destroyed=true;
},destroyRendering:function(_d44){
if(this.bgIframe){
this.bgIframe.destroy(_d44);
delete this.bgIframe;
}
if(this.domNode){
if(_d44){
_d25.remove(this.domNode,"widgetId");
}else{
_d27.destroy(this.domNode);
}
delete this.domNode;
}
if(this.srcNodeRef){
if(!_d44){
_d27.destroy(this.srcNodeRef);
}
delete this.srcNodeRef;
}
},destroyDescendants:function(_d45){
_d20.forEach(this.getChildren(),function(_d46){
if(_d46.destroyRecursive){
_d46.destroyRecursive(_d45);
}
});
},uninitialize:function(){
return false;
},_setStyleAttr:function(_d47){
var _d48=this.domNode;
if(lang.isObject(_d47)){
_d29.set(_d48,_d47);
}else{
if(_d48.style.cssText){
_d48.style.cssText+="; "+_d47;
}else{
_d48.style.cssText=_d47;
}
}
this._set("style",_d47);
},_attrToDom:function(attr,_d49,_d4a){
_d4a=arguments.length>=3?_d4a:this.attributeMap[attr];
_d20.forEach(lang.isArray(_d4a)?_d4a:[_d4a],function(_d4b){
var _d4c=this[_d4b.node||_d4b||"domNode"];
var type=_d4b.type||"attribute";
switch(type){
case "attribute":
if(lang.isFunction(_d49)){
_d49=lang.hitch(this,_d49);
}
var _d4d=_d4b.attribute?_d4b.attribute:(/^on[A-Z][a-zA-Z]*$/.test(attr)?attr.toLowerCase():attr);
if(_d4c.tagName){
_d25.set(_d4c,_d4d,_d49);
}else{
_d4c.set(_d4d,_d49);
}
break;
case "innerText":
_d4c.innerHTML="";
_d4c.appendChild(this.ownerDocument.createTextNode(_d49));
break;
case "innerHTML":
_d4c.innerHTML=_d49;
break;
case "class":
_d26.replace(_d4c,_d49,this[attr]);
break;
}
},this);
},get:function(name){
var _d4e=this._getAttrNames(name);
return this[_d4e.g]?this[_d4e.g]():this._get(name);
},set:function(name,_d4f){
if(typeof name==="object"){
for(var x in name){
this.set(x,name[x]);
}
return this;
}
var _d50=this._getAttrNames(name),_d51=this[_d50.s];
if(lang.isFunction(_d51)){
var _d52=_d51.apply(this,Array.prototype.slice.call(arguments,1));
}else{
var _d53=this.focusNode&&!lang.isFunction(this.focusNode)?"focusNode":"domNode",tag=this[_d53]&&this[_d53].tagName,_d54=tag&&(_d32[tag]||(_d32[tag]=_d33(this[_d53]))),map=name in this.attributeMap?this.attributeMap[name]:_d50.s in this?this[_d50.s]:((_d54&&_d50.l in _d54&&typeof _d4f!="function")||/^aria-|^data-|^role$/.test(name))?_d53:null;
if(map!=null){
this._attrToDom(name,_d4f,map);
}
this._set(name,_d4f);
}
return _d52||this;
},_attrPairNames:{},_getAttrNames:function(name){
var apn=this._attrPairNames;
if(apn[name]){
return apn[name];
}
var uc=name.replace(/^[a-z]|-[a-zA-Z]/g,function(c){
return c.charAt(c.length-1).toUpperCase();
});
return (apn[name]={n:name+"Node",s:"_set"+uc+"Attr",g:"_get"+uc+"Attr",l:uc.toLowerCase()});
},_set:function(name,_d55){
var _d56=this[name];
this[name]=_d55;
if(this._created&&_d55!==_d56){
if(this._watchCallbacks){
this._watchCallbacks(name,_d56,_d55);
}
this.emit("attrmodified-"+name,{detail:{prevValue:_d56,newValue:_d55}});
}
},_get:function(name){
return this[name];
},emit:function(type,_d57,_d58){
_d57=_d57||{};
if(_d57.bubbles===undefined){
_d57.bubbles=true;
}
if(_d57.cancelable===undefined){
_d57.cancelable=true;
}
if(!_d57.detail){
_d57.detail={};
}
_d57.detail.widget=this;
var ret,_d59=this["on"+type];
if(_d59){
ret=_d59.apply(this,_d58?_d58:[_d57]);
}
if(this._started&&!this._beingDestroyed){
on.emit(this.domNode,type.toLowerCase(),_d57);
}
return ret;
},on:function(type,func){
var _d5a=this._onMap(type);
if(_d5a){
return _d21.after(this,_d5a,func,true);
}
return this.own(on(this.domNode,type,func))[0];
},_onMap:function(type){
var ctor=this.constructor,map=ctor._onMap;
if(!map){
map=(ctor._onMap={});
for(var attr in ctor.prototype){
if(/^on/.test(attr)){
map[attr.replace(/^on/,"").toLowerCase()]=attr;
}
}
}
return map[typeof type=="string"&&type.toLowerCase()];
},toString:function(){
return "[Widget "+this.declaredClass+", "+(this.id||"NO ID")+"]";
},getChildren:function(){
return this.containerNode?_d30.findWidgets(this.containerNode):[];
},getParent:function(){
return _d30.getEnclosingWidget(this.domNode.parentNode);
},connect:function(obj,_d5b,_d5c){
return this.own(_d23.connect(obj,_d5b,this,_d5c))[0];
},disconnect:function(_d5d){
_d5d.remove();
},subscribe:function(t,_d5e){
return this.own(_d2d.subscribe(t,lang.hitch(this,_d5e)))[0];
},unsubscribe:function(_d5f){
_d5f.remove();
},isLeftToRight:function(){
return this.dir?(this.dir=="ltr"):_d28.isBodyLtr(this.ownerDocument);
},isFocusable:function(){
return this.focus&&(_d29.get(this.domNode,"display")!="none");
},placeAt:function(_d60,_d61){
var _d62=!_d60.tagName&&_d30.byId(_d60);
if(_d62&&_d62.addChild&&(!_d61||typeof _d61==="number")){
_d62.addChild(this,_d61);
}else{
var ref=_d62?(_d62.containerNode&&!/after|before|replace/.test(_d61||"")?_d62.containerNode:_d62.domNode):dom.byId(_d60,this.ownerDocument);
_d27.place(this.domNode,ref,_d61);
if(!this._started&&(this.getParent()||{})._started){
this.startup();
}
}
return this;
},defer:function(fcn,_d63){
var _d64=setTimeout(lang.hitch(this,function(){
if(!_d64){
return;
}
_d64=null;
if(!this._destroyed){
lang.hitch(this,fcn)();
}
}),_d63||0);
return {remove:function(){
if(_d64){
clearTimeout(_d64);
_d64=null;
}
return null;
}};
}});
if(has("dojo-bidi")){
_d35.extend(_d2f);
}
return _d35;
});
},"dojox/mobile/app/AlertDialog":function(){
define(["dijit","dojo","dojox","dojo/require!dijit/_WidgetBase"],function(_d65,dojo,_d66){
dojo.provide("dojox.mobile.app.AlertDialog");
dojo.experimental("dojox.mobile.app.AlertDialog");
dojo.require("dijit._WidgetBase");
dojo.declare("dojox.mobile.app.AlertDialog",_d65._WidgetBase,{title:"",text:"",controller:null,buttons:null,defaultButtonLabel:"OK",onChoose:null,constructor:function(){
this.onClick=dojo.hitch(this,this.onClick);
this._handleSelect=dojo.hitch(this,this._handleSelect);
},buildRendering:function(){
this.domNode=dojo.create("div",{"class":"alertDialog"});
var _d67=dojo.create("div",{"class":"alertDialogBody"},this.domNode);
dojo.create("div",{"class":"alertTitle",innerHTML:this.title||""},_d67);
dojo.create("div",{"class":"alertText",innerHTML:this.text||""},_d67);
var _d68=dojo.create("div",{"class":"alertBtns"},_d67);
if(!this.buttons||this.buttons.length==0){
this.buttons=[{label:this.defaultButtonLabel,value:"ok","class":"affirmative"}];
}
var _d69=this;
dojo.forEach(this.buttons,function(_d6a){
var btn=new _d66.mobile.Button({btnClass:_d6a["class"]||"",label:_d6a.label});
btn._dialogValue=_d6a.value;
dojo.place(btn.domNode,_d68);
_d69.connect(btn,"onClick",_d69._handleSelect);
});
var _d6b=this.controller.getWindowSize();
this.mask=dojo.create("div",{"class":"dialogUnderlayWrapper",innerHTML:"<div class=\"dialogUnderlay\"></div>",style:{width:_d6b.w+"px",height:_d6b.h+"px"}},this.controller.assistant.domNode);
this.connect(this.mask,"onclick",function(){
_d69.onChoose&&_d69.onChoose();
_d69.hide();
});
},postCreate:function(){
this.subscribe("/dojox/mobile/app/goback",this._handleSelect);
},_handleSelect:function(_d6c){
var node;
if(_d6c&&_d6c.target){
node=_d6c.target;
while(!_d65.byNode(node)){
node=node.parentNode;
}
}
if(this.onChoose){
this.onChoose(node?_d65.byNode(node)._dialogValue:undefined);
}
this.hide();
},show:function(){
this._doTransition(1);
},hide:function(){
this._doTransition(-1);
},_doTransition:function(dir){
var anim;
var h=dojo.marginBox(this.domNode.firstChild).h;
var _d6d=this.controller.getWindowSize().h;
var high=_d6d-h;
var low=_d6d;
var _d6e=dojo.fx.slideTo({node:this.domNode,duration:400,top:{start:dir<0?high:low,end:dir<0?low:high}});
var _d6f=dojo[dir<0?"fadeOut":"fadeIn"]({node:this.mask,duration:400});
var anim=dojo.fx.combine([_d6e,_d6f]);
var _d70=this;
dojo.connect(anim,"onEnd",this,function(){
if(dir<0){
_d70.domNode.style.display="none";
dojo.destroy(_d70.domNode);
dojo.destroy(_d70.mask);
}
});
anim.play();
},destroy:function(){
this.inherited(arguments);
dojo.destroy(this.mask);
},onClick:function(){
}});
});
},"*now":function(r){
r(["dojo/i18n!*preload*dojo/nls/egldojo*[\"ar\",\"ca\",\"cs\",\"da\",\"de\",\"el\",\"en-gb\",\"en-us\",\"es-es\",\"fi-fi\",\"fr-fr\",\"he-il\",\"hu\",\"it-it\",\"ja-jp\",\"ko-kr\",\"nl-nl\",\"nb\",\"pl\",\"pt-br\",\"pt-pt\",\"ru\",\"sk\",\"sl\",\"sv\",\"th\",\"tr\",\"zh-tw\",\"zh-cn\",\"ROOT\"]"]);
}}});
(function(){
var _d71=this.require;
_d71({cache:{}});
!_d71.async&&_d71(["dojo"]);
_d71.boot&&_d71.apply(null,_d71.boot);
})();
