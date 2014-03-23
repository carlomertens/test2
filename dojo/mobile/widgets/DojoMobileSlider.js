egl.defineWidget("dojo.mobile.widgets","DojoMobileSlider","dojo.mobile.widgets","DojoMobileBase","input",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout","change"],"eglBaseClass":"eglMblSlider","constructor":function(){
var _1=this;
require(["dojox/mobile/Slider"],function(){
_1._safeRender();
});
},"createDojoWidget":function(_2,_3){
var _4=this;
_3.type="range",_3.value=this.value?this.value:0,_3.max=this.maximum?this.maximum:100,_3.min=this.minimum?this.minimum:0,_3.step=this.step?this.step:1,_3.orientation=this.orientation?this.orientation:"auto";
_4._addTabIndex(_2);
this.dojoWidget=new dojox.mobile.Slider(_3,_2);
this.dojoWidget.onChange=function(){
_4.handleEvent(_4.getOnChange(),"onChange");
};
if(_2.className){
dojo.addClass(_4.dojoWidget.domNode,_2.className);
}
_4.synchronor.trigger(_4,"SYN_READY");
},"getValue":function(){
if(this.dojoWidget){
return this.dojoWidget.value;
}else{
return this.value;
}
},"setValue":function(_5){
if(_5>this.maximum){
this.value=this.maximum;
}else{
if(_5<this.minimum){
this.value=this.minimum;
}else{
this.value=_5;
}
}
if(this.dojoWidget){
this.dojoWidget.set({"value":this.value});
}
},"setOrientation":function(_6){
this.orientation=_6;
if(this.dojoWidget){
this.dojoWidget.orientation=_6;
}
},"getOrientation":function(){
if(this.dojoWidget){
return this.dojoWidget.orientation;
}else{
return this.orientation;
}
}});
