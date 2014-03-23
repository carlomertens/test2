egl.defineWidget("dojo.mobile.widgets","DojoMobileSwitch","dojo.mobile.widgets","DojoMobileBase","span",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout","change"],"eglBaseClass":"eglMblSwitch","constructor":function(){
var _1=this;
require(["dojo/mobile/extended/ExtendedSwitch"],function(){
_1._safeRender();
});
_1.value="off";
},"createDojoWidget":function(_2){
var _3=this;
this.dojoWidget=new ExtendedSwitch({value:this.value,leftLabel:this.left||"ON",rightLabel:this.right||"OFF"},_2);
this.synchronor.trigger(this,"SYN_READY");
dojo.style(this.dojoWidget.domNode,"display","inline-block");
if(this.className){
dojo.addClass(this.dojoWidget.domNode,this.className);
}
this.dojoWidget.onStateChanged=function(_4){
_3.handleEvent(_3.getOnChange(),"onChange");
};
},"setValue":function(_5){
this.value=_5?"on":"off";
if(this.dojoWidget){
if(this.isValue()==_5){
return;
}
var e={targetTouches:null};
this.dojoWidget.onTouchStart(e);
this.dojoWidget.onClick(null);
}
},"getValue":function(){
return this.isValue();
},"isValue":function(){
var _7=this.value;
if(this.dojoWidget){
_7=this.dojoWidget.get("value");
}
return _7=="on"?true:false;
},"setOnText":function(_8){
this.left=_8;
if(this.dojoWidget){
this.dojoWidget.set("leftLabel",_8);
var _9=this.dojoWidget.domNode.getElementsByTagName("div");
var _a;
for(var n=0;n<_9.length;n++){
if(_9[n].className=="mblSwitchText mblSwitchTextLeft"){
_a=_9[n];
break;
}
}
if(_a){
_a.innerHTML=this.left;
}
}
},"getOnText":function(){
return this.left;
},"setOffText":function(_c){
this.right=_c;
if(this.dojoWidget){
this.dojoWidget.set("rightLabel",_c);
var _d=this.dojoWidget.domNode.getElementsByTagName("div");
var _e;
for(var n=0;n<_d.length;n++){
if(_d[n].className=="mblSwitchText mblSwitchTextRight"){
_e=_d[n];
break;
}
}
if(_e){
_e.innerHTML=this.right;
}
}
},"getOffText":function(){
return this.right;
},"setClass":function(_10){
this.className=_10;
}});
