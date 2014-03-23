egl.defineWidget("dojo.mobile.widgets","DojoMobileIconItem","dojo.mobile.widgets","DojoMobileBase","li",{"eglBaseClass":"eglMblIconItem","constructor":function(){
var _1=this;
_1.children=[];
_1._args.transition="slide";
_1._args.transitionDir=1;
_1._args.icon="dojo/mobile/images/i-imagePath-1.png";
_1._args.lazy=true;
require(["dojox/mobile/IconItem"],function(_2){
_1._safeRender();
});
},"createDojoWidget":function(_3,_4){
var _5=this;
_5.dojoWidget={"domNode":_3};
_5._addTabIndex(_3);
function callback(){
_5.dojoWidget=new dojox.mobile.IconItem(_4,_3);
_5.containerWidget=_5.dojoWidget;
var _6=_5.dojoWidget.startup;
_5.dojoWidget.startup=function(){
if(typeof _6==="function"){
_6.apply(_5.dojoWidget,arguments);
}
_5.synchronor.trigger(_5,"DJ_STARTUP");
};
_5.synchronor.trigger(_5,"SYN_READY");
};
if(_5._args.moveWidget){
_5.synchronor.wait([_5._args.moveWidget],"SYN_READY",function(){
_5._args.moveTo=_5._args.moveWidget.dojoWidget.id;
callback();
});
}else{
callback();
}
},"removeChildren":function(_7){
var _8=this._getContainerWidget(_7);
this._removeChildren(1,_8);
},"setImagePath":function(_9){
this._safeSet("icon",_9);
},"setTargetView":function(_a){
var _b=this;
if(_a&&_a.dojoWidget){
_b._safeSet("moveTo",_a.dojoWidget.id);
}else{
_b._args.moveWidget=_a;
}
},"getImagePath":function(){
return this._args.icon;
},"getTargetView":function(){
return this._args.moveTo;
},"setUrlString":function(_c){
this._safeSet("url",_c);
},"getUrlString":function(){
return this._args.url;
},"setLazy":function(_d){
this._args.lazy=_d;
},"getLazy":function(){
return this._args.lazy;
},"setText":function(_e){
this._safeSet("label",_e);
},"getText":function(){
return this._args.label;
}});
