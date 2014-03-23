egl.defineClass("dojo.mobile.utility","BrowserLibNative",{"getDJConf":function(_1){
if(!_1){
return null;
}
var _2=_1.split("."),i=0,_4=((typeof dojo!="undefined")&&dojo.config)||((typeof dojoConfig!="undefined")&&dojoConfig),_5=null;
if(!_4){
return null;
}
for(_5=_4;i<_2.length;++i){
if(_2[i] in _5){
_5=_5[_2[i]];
}else{
return null;
}
}
if(_5!=_4&&_5){
return _5+"";
}
return null;
},"redirect":function(_6){
if(self){
self.location=_6;
}else{
if(window&&window.navigate){
window.navigate(_6);
}else{
if(window&&window.location){
if(window.location.href){
window.location.href=_6;
}else{
window.location=_6;
}
}else{
}
}
}
},"getParams":function(){
return this._getLocationProp("search");
},"getParam":function(_7){
var _8=this._getParamHash();
return _8[_7]?_8[_7]:null;
},"setGetParams":function(_9,_a){
var _b=this._getParamHash(),_c="?",_d=true;
_9&&(_b[_9]=(_a===null?"":_a));
for(var _9 in _b){
if(_d){
_c+=(_9+"="+_b[_9]);
_d=false;
}else{
_c+=("&"+_9+"="+_b[_9]);
}
}
return _c.length>1?_c:null;
},"_getParamHash":function(){
var i=0,_f=this.getParams(),_10={};
if(_f){
_f=_f.substr(1);
_f=_f.split("&");
for(i=0;i<_f.length;++i){
if(_f[i].indexOf("=")>0){
_f[i]=_f[i].split("=");
if(_f[i][0]){
_10[_f[i][0]]=_f[i][1];
}
}
}
}
return _10;
},"getHost":function(){
return this._getLocationProp("host");
},"getOrigin":function(){
var _11=this._getLocationProp("origin"),_12=this.getHost();
if(_11==null&&_12){
_11=this._getLocationProp("protocol");
if(_11){
if(_11.indexOf("https")>=0){
_11=("https://"+_12);
}else{
if(_11.indexOf("http")>=0){
_11=("http://"+_12);
}else{
_11+=(orgin+"//"+_12);
}
}
}
}
return _11;
},"getPath":function(){
return this._getLocationProp("pathname");
},"getURL":function(){
return this._getLocationProp("href");
},"_getLocationProp":function(_13){
if(window.location){
return window.location[_13]?window.location[_13]:null;
}
return null;
}});
