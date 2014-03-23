egl.defineWidget("dojo.mobile.widgets","DojoMobileToolBarButton","dojo.mobile.widgets","DojoMobileBase","span",{"eglBaseClass":"eglMblToolBarBtn","constructor":function(){
var _1=this;
_1.options={};
require(["dojo/mobile/utility/Synchronor","dojox/mobile/ToolBarButton","dojo/_base/sniff"],function(_2,_3,_4){
_1.synchronor=_2;
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
});
},"createDojoWidget":function(_5){
var _6=this;
_6.dojoWidget={"domNode":_5};
_6.synchronor.wait([_6._actionView],"SYN_READY",function(){
if(_6._actionView){
_6.options.moveTo=_6._actionView.dojoWidget.id;
}
_6.dojoWidget=new dojox.mobile.ToolBarButton(_6.options,_5);
_6.containerWidget=_6.dojoWidget;
var _7=_6.dojoWidget.onClick;
_6.synchronor.trigger(_6,"SYN_READY");
_6.dojoWidget.startup();
});
},"getTransition":function(){
return this.options.transition||"";
},"setTransition":function(v){
this.options.transition=v;
},"getTransitionDir":function(){
return this.options.transitionDir||1;
},"setTransitionDir":function(v){
this.options.transitionDir=v;
},"getImagePath":function(){
return this.options.icon||"";
},"setImagePath":function(v){
this.options.icon=v;
},"getActionView":function(){
return this._actionView||null;
},"setActionView":function(v){
this._actionView=v;
},"getText":function(){
return this.options.label||"";
},"setText":function(v){
this.options.label=v;
},"getSelected":function(){
return this.options.selected||false;
},"setSelected":function(v){
this.options.selected=v;
}});
