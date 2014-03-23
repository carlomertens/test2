egl.defineWidget("dojo.mobile.widgets","DojoMobileButton","dojo.mobile.widgets","DojoMobileBase","button",{"eglBaseClass":"eglMblBtn","standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout","change"],"constructor":function(){
var _1=this;
require(["dojox/mobile/Button"],function(){
_1._safeRender();
});
},"createDojoWidget":function(_2,_3){
var _4=this;
_2.innerHTML=_4.text||"";
_4.domNode=_2;
_4.dojoWidget=new dojox.mobile.Button(_3,_2);
this.dojoWidget.domNode.innerHTML=this.text||"";
_4.synchronor.trigger(_4,"SYN_READY");
_4.dojoWidget.startup();
},"setText":function(_5){
this.text=_5;
if(this.domNode){
this.domNode.innerHTML=this.text;
}
}});
