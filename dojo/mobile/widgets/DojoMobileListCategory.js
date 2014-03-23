egl.defineWidget("dojo.mobile.widgets","DojoMobileListCategory","dojo.mobile.widgets","DojoMobileBase","li",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"eglBaseClass":"eglMblListCategory","constructor":function(){
var _1=this;
this.style="Rounded Rectangle";
_1._safeRender();
},"createDojoWidget":function(_2,_3){
var _4=this;
if(this.style=="Edge to Edge"){
this.dojoWidget=new dojox.mobile.EdgeToEdgeCategory(_3,_2);
}else{
this.dojoWidget=new dojox.mobile.RoundRectCategory(_3,_2);
}
this.dojoWidget.domNode.style.listStyleType="none";
_4.synchronor.trigger(_4,"SYN_READY");
},"setTitle":function(_5){
this._safeSet("label",_5);
if(this.dojoWidget){
this.dojoWidget.domNode.innerHTML=_5;
}
},"getTitle":function(){
return this.label;
},"setLogicalParent":function(_6){
var _7=this;
this.logicalParent=_6;
if(_6.style){
this.style=_6.style;
}
}});
