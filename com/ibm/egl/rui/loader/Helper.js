egl.helperStart=new Date().getTime();
egl.defineClass("com.ibm.egl.rui.loader","Helper",{"eval":function(_1){
try{
if(_1==""){
return;
}
_1=_1.replace(/<!-- Generated[^-]*-->/g,"");
var _2=_1.indexOf("<script>");
if(_2!=-1){
_1=_1.substring(_2+8);
}
try{
if(egl.IE&&egl.IEVersion<9){
window.execScript(_1);
}else{
var _3=function(){
window.eval.call(window,_1);
};
_3();
}
}
catch(e){
egl.println("oops: "+e);
_1=_1.replace(/</g,"&lt;");
egl.println("<pre>"+_1+"</pre>");
}
}
catch(e){
throw "could not eval script: "+e.message;
}
},"createHandler":function(_4){
var _5;
try{
_5=eval("new egl."+_4+"()");
}
catch(e){
throw "Cannot instantiate handler '"+_4+"' due to "+e.message;
}
return _5;
},"getField":function(_6,_7){
if(_7 in _6){
return _6[_7];
}else{
throw "No field with name "+_7+" declared in "+_6;
}
},"getContext":function(){
var _8=document.location.toString();
_8=_8.substring(_8.indexOf("/",8)+1);
_8=_8.substring(0,_8.indexOf("/"));
return (_8);
},"getPortNumber":function(){
var _9=window.location.protocol.indexOf("https")==0?443:80;
return document.location.port?document.location.port:_9;
},"getCurrentMillis":function(){
return new Date().getTime();
},"getStartMillis":function(){
return egl.helperStart;
},"getBrowserName":function(){
return window.navigator.userAgent;
},"notYetLoaded":function(_a){
if(_a.match(/.*.js/)){
_a=_a.replace(/(.*).js$/,"$1");
_a=_a.replace(/\//g,".");
if(this.handlerLoaded(_a)){
return (false);
}
}
return true;
},"unload":function(_b){
if(_b.match(/.*.js/)){
_b=_b.replace(/(.*).js$/,"$1");
_b=_b.replace(/\//g,".");
var _c=this.getPackage(_b);
_b=this.getHandlerName(_b);
if(null!=_c[_b]&&_c[_b].eze$isLibrary){
return false;
}
_c[_b]=null;
return true;
}
},"setDefaultConstructor":function(_d){
var _e=_d.replace(/(.*)\.[^\.]*/g,"$1");
var _f=this.getHandlerName(_d);
egl.initDynamicLoadingHandler(_e,_f);
},"getLocale":function(){
return window.egl__htmlLocale;
},"alert":function(_10){
alert(_10);
},"getBaseURL":function(){
var _11=window.location.pathname;
var _12=_11.indexOf("/",1);
return (window.location.protocol+"//"+window.location.host+_11.substring(0,_12+1));
},"replaceAll":function(_13,_14,_15){
var len=_14.length;
var _17=_13.indexOf(_14);
while(_17!=-1){
_13=_13.substring(0,_17)+_15+_13.substring(_17+len);
_17=_13.indexOf(_14);
}
return _13;
},"inDeploymentMode":function(){
return !("egl__contextAware" in window);
},"supportsHTML5":function(){
return typeof (window.openDatabase)!=="undefined";
},"loadFile":function(url,_19){
var _1a=egl.eze$$dynamicLoadAsynch==undefined?true:egl.eze$$dynamicLoadAsynch;
var _1b=egl.newXMLHttpRequest();
if(_1b&&_1a){
_1b.onreadystatechange=function(){
if(_1b.readyState==4){
_19(_1b.responseText);
}
};
}
_1b.open("GET",url,_1a);
_1b.send(null);
if(!_1a){
_19(_1b.responseText);
}
},"getDynamicLoadingList":function(){
return (window.egl__dynamicLoadHandlers);
},"split":function(_1c,_1d){
return (_1c.split(_1d));
},"handlerLoaded":function(_1e){
var pkg=this.getPackage(_1e);
var _20=this.getHandlerName(_1e);
if(pkg[_20]&&(!pkg[_20]["needDynamicLoading"])){
return (true);
}
return (false);
},"getPackage":function(_21){
var _22=_21.replace(/(.*)\.[^\.]*/g,"$1");
var pkg=egl.makePackage(_22);
return (pkg);
},"getHandlerName":function(_24){
return (_24.replace(/.*\.([^\.]*)/g,"$1"));
},"deleteDefaultConstructor":function(_25){
var pkg=this.getPackage(_25);
var _27=this.getHandlerName(_25);
if(pkg[_27]&&pkg[_27]["needDynamicLoading"]){
pkg[_27]=null;
}
},"configureServiceWrapper":function(_28){
_28.eze$$asynch=egl.eze$$dynamicLoadAsynch==undefined?true:egl.eze$$dynamicLoadAsynch;
}});
