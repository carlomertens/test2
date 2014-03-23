egl.defineWidget("dojo.mobile.widgets","DojoMobileTextArea","dojo.mobile.widgets","DojoMobileBase","textarea",{"standardEvents":["click","focus","blur","keydown","keypress","keyup","mousedown","mouseup","mouseover","mousemove","mouseout","change"],"eglBaseClass":"eglMblTextArea","constructor":function(){
var _1=this;
_1.isExpandable=false;
require(["dojo/mobile/utility/Synchronor","dojox/mobile/ExpandingTextArea","dojo/_base/sniff"],function(_2,_3,_4){
_1.synchronor=_2;
_1._safeRender();
});
},"createDojoWidget":function(_5,_6){
var _7=this;
_5.innerHTML=_7.text||"";
_7.domNode=_5;
_6.value=_7.text||"";
_6.readOnly=(_7.readOnly?_7.readOnly:false);
_6.maxLength=(_7.maxLength?_7.maxLength:-1);
_6.placeHolder=(_7.placeHolder?_7.placeHolder:"");
if(_7.isExpandable){
_7.dojoWidget=new dojox.mobile.ExpandingTextArea(_6,_5);
}else{
_7.dojoWidget=new dojox.mobile.TextArea(_6,_5);
}
var _8=(_7.cols>0)?_7.cols:20;
var _9=(_7.rows>0)?_7.rows:2;
_7.dojoWidget.domNode.innerHTML=_7.text||"";
_7.dojoWidget.domNode.cols=_8;
_7.dojoWidget.domNode.rows=_9;
var _a=_7.dojoWidget.onChange;
_7.dojoWidget.onChange=function(e){
if(typeof _a==="function"){
_a.apply(_7.dojoWidget,arguments);
}
_7.handleEvent(_7.getOnChange(),"onChange");
};
var _c=_7.dojoWidget.startup;
_7.dojoWidget.startup=function(){
if(typeof _c==="function"){
_c.apply(_7.dojoWidget,arguments);
}
_7.synchronor.trigger(_7,"DJ_STARTUP");
};
if(_7.dojoWidget.domNode.parentNode){
_7.dojoWidget.startup();
}
_7.synchronor.trigger(_7,"SYN_READY");
},"setIsExpandable":function(_d){
this.isExpandable=_d;
},"getIsExpandable":function(){
return this.isExpandable;
},"setText":function(_e){
this._safeSet("text",_e,"value");
},"getText":function(){
return this.text;
},"setCols":function(_f){
this._safeSet("cols",_f);
},"getCols":function(){
return this.cols;
},"getRows":function(){
return this.rows;
},"setRows":function(_10){
this._safeSet("rows",_10);
},"setReadOnly":function(_11){
this._safeSet("readOnly",_11);
},"getReadOnly":function(){
if(this.dojoWidget){
return this.dojoWidget.get("readOnly");
}else{
return this.readOnly;
}
},"setMaxLength":function(_12){
this._safeSet("maxLength",_12);
},"getMaxLength":function(){
if(this.dojoWidget){
return this.dojoWidget.get("maxLength");
}else{
return this.maxLength;
}
},"setPlaceHolder":function(_13){
this._safeSet("placeHolder",_13);
},"getPlaceHolder":function(){
if(this.dojoWidget){
return this.dojoWidget.get("placeHolder");
}else{
return this.placeHolder;
}
}});
