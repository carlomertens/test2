define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-attr","dojo/dom-geometry","dojo/dom-construct","dojo/query"],function(_1,_2,_3,_4,_5,_6,_7){
var _8=_6.create("div",{style:{visibility:"hidden",position:"fixed",left:"9999px"}},document.body,"last");
var _9=0,_a="data-egl-nondom",_b={};
_1("DisplayNoneController",null,{"isInDomTree":function(_c){
var _d=_c;
while(_d.parentNode){
_d=_d.parentNode;
}
return _d==document;
},"switchToInvisibleEle":function(_e){
if(!_e){
return;
}
var _f=_e.parentNode||_e.parentElement,_10=null;
if(_f){
_10=_a+_9++;
_b[_10]=_6.create("div",{id:_10,style:{display:"none"}});
_6.place(_b[_10],_e,"replace");
_4.set(_e,_a,_10);
}
_e&&_6.place(_e,_8,"last");
},"switchBack":function(ele,_12){
if(!ele||!_12){
return;
}
var _13=_4.get(ele,_a),_14=_b[_13];
if(_14){
_6.place(ele,_14,"replace");
_4.remove(ele,_a);
delete _b[_13];
}
},"getEGLElement":function(_15){
if(!_15){
return null;
}
if(_15.containerWidget){
return _15.containerWidget.domNode;
}else{
if(_15.dojoWidget){
return _15.dojoWidget.domNode;
}else{
return _15.eze$$DOMElement;
}
}
},"forceWidthUpdate":function(_16){
if(!_16){
return;
}
var _17=this,box=null,_19=_17.getEGLElement(_16);
if(!_19){
return;
}
box=_5.getContentBox(_19);
_3.set(_19,"width",(box.w+1)+"px");
setTimeout(function(){
_3.set(_19,"width",box.w+"px");
},100);
},"restrictChildrenMaxWidth":function(_1a){
if(!_1a){
return;
}
var _1b=this,i=0,box=null,_1e=null,_1f=null,ele=null,_21=null,_22=_1b.getEGLElement(_1a);
if(!_22){
return;
}
box=_5.getContentBox(_22);
_1e=_1a.getChildren();
if(_1e){
for(i=0;i<_1e.length;i++){
_1f=_1e[i],ele=null;
ele=_1b.getEGLElement(_1e[i]);
if(!ele){
continue;
}
_21=_3.get(ele,"max-width");
if(!_21||(_21=="100"&&box.w!=_21)||parseInt(_21)>box.w){
_3.set(ele,"max-width",box.w+"px");
}
}
}
},"checkOffsetHeightZeroForDisplayNone":function(_23,_24,_25){
if(_25==undefined||_25==null){
_25=true;
}
if(_24==undefined){
_24=null;
}
var _26=_23;
var _27={};
var _28=_25?(_24?true:false):false;
var _29=0;
if(_26&&_26.offsetHeight!=0){
return false;
}
while(_23.offsetHeight==0&&_26){
if(_26.style.display=="none"){
if(_28){
_27[_29+""]={"node":_26,"originalVisibility":_26.style.visibility?_26.style.visibility:"visible"};
}
_26.style.visibility="hidden";
_26.style.display="";
++_29;
if(_26.offsetHeight==0){
_26=_26.parentElement;
}else{
if(_28){
_24["__CHECK_DISPLAY_NONE__"]=_27;
}
for(var key in _27){
_27[key]["node"].style.display="none";
_27[key]["node"].style.visibility=_27[key]["originalVisibility"];
}
return true;
}
}else{
++_29,_26=_26.parentElement?_26.parentElement:_26.parentNode;
}
}
for(var key in _27){
_27[key].node.style.display="none";
_27[key].node.style.visibility=_27[key].visibility;
}
return false;
},"makeVisibilityHidden":function(_2b){
if(!_2b["__CHECK_DISPLAY_NONE__"]){
return;
}
for(var key in _2b["__CHECK_DISPLAY_NONE__"]){
if(_2b["__CHECK_DISPLAY_NONE__"][key]["node"]){
_2b["__CHECK_DISPLAY_NONE__"][key]["node"].style.visibility="hidden";
_2b["__CHECK_DISPLAY_NONE__"][key]["node"].style.display="";
}
}
},"makeDisplayNone":function(_2d){
if(!_2d["__CHECK_DISPLAY_NONE__"]){
return;
}
for(var key in _2d["__CHECK_DISPLAY_NONE__"]){
if(_2d["__CHECK_DISPLAY_NONE__"][key]["node"]){
_2d["__CHECK_DISPLAY_NONE__"][key]["node"].style.display="none";
_2d["__CHECK_DISPLAY_NONE__"][key]["node"].style.visibility=_2d["__CHECK_DISPLAY_NONE__"][key]["originalVisibility"];
}
}
},"waitDoucmentCssLoaded":function(_2f,_30,_31){
if(!_2.isFunction(_2f)){
return;
}
var _32=_30?_30:document;
var _33=_2.isArray(_31)?_31:[];
if(document.readyState==="complete"){
_2f.apply(_32,_33);
return;
}
var _34=setInterval(function(){
if(document.readyState==="complete"){
_2f.apply(_32,_33);
clearInterval(_34);
}
},20);
}});
var _35=new DisplayNoneController();
return _35;
});
