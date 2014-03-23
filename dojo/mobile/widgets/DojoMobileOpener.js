egl.defineWidget("dojo.mobile.widgets","DojoMobileOpener","dojo.mobile.widgets","DojoMobileContainer","div",{"eglBaseClass":"eglMblOpener","constructor":function(){
var _1=this;
_1.isModal=false;
_1.children=[];
require(["dojox/mobile/Opener"],function(op){
_1._safeRender();
});
},"createDojoWidget":function(_3,_4){
var _5=this;
_3.style.minHeight="2em";
_3.style.zIndex="10001";
_5._addTabIndex(_3);
if(_5.isModal){
_5.dojoWidget=new dojox.mobile.Opener(_4,_3);
}else{
_5.dojoWidget=new dojox.mobile.Overlay(_4,_3);
}
_5.containerWidget=_5.dojoWidget;
_5.synchronor.trigger(_5,"SYN_READY");
_5.synchronor.wait(_5.children,"SYN_READY",function(){
if(_5.children){
_5.setChildren(_5.children);
}
if(_5.dojoWidget.startup){
_5.dojoWidget.startup();
}
});
},"removeChildren":function(_6){
var _7=this._getContainerWidget(_6);
this._removeChildren(1,_7);
},"showOpener":function(_8,_9){
var _a=this;
try{
if(_a.dojoWidget){
_a.dojoWidget.show(_8?(_8.domNode||(_8.dojoWidget&&_8.dojoWidget.domNode)):null,[_9]);
require(["dojo/sniff","dojo/mobile/utility/DisplayController","dojo/mobile/utility/BrowserUtility"],function(_b,dc,bu){
if(_a.dojoWidget instanceof dojox.mobile.Tooltip){
if(_b("ios")||_b("webkit")){
dc.forceWidthUpdate(_a);
}
}
});
}
}
catch(e){
console.error(e);
}
},"hideOpener":function(){
var _e=this;
if(_e.dojoWidget){
_e.dojoWidget.hide();
}
},"setIsModal":function(_f){
this.isModal=_f||false;
},"getIsModal":function(){
return this.isModal;
}});
