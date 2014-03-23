egl.defineWidget("dojo.mobile.widgets","DojoMobileIconContainer","dojo.mobile.widgets","DojoMobileContainer","div",{"standardEvents":[],"touchEvents":[],"eglBaseClass":"eglMblIconContainer","constructor":function(){
var _1=this;
this.children=[];
this.acceptChildrenTypes={"dojo.mobile.widgets.DojoMobileIconItem":true};
require(["dojox/mobile/IconContainer"],function(_2){
_1._safeRender();
});
},"createDojoWidget":function(_3,_4){
var _5=this;
_5.dojoWidget=new dojox.mobile.IconContainer(_4,_3);
_5.containerWidget=_5.dojoWidget;
require(["dojo/mobile/utility/Synchronor"],function(_6){
_6.trigger(_5,"SYN_READY");
_6.wait(_5.children,"SYN_READY",function(){
_5.dojoWidget&&_5.dojoWidget.startup();
if(_5.children){
_5.setChildren(_5.children,_5.containerWidget,true);
}
_5._fixTerminator();
});
});
},"_fixTerminator":function(){
var _7=this,_8=null,_9=null;
if(!_7.dojoWidget){
return;
}
for(var i=0;i<_7.dojoWidget.domNode.childNodes.length;++i){
if(_7.dojoWidget.domNode.childNodes[i].className.indexOf("mblIconItemTerminator")!=-1){
_8=_7.dojoWidget.domNode.childNodes[i];
}else{
if(_8&&_7.dojoWidget.domNode.childNodes[i].className.indexOf("mblIconItem")!=-1){
_9=i+1;
}
}
}
if(_8&&_9){
_7.dojoWidget.domNode.removeChild(_8);
--_9;
if(_9!=_7.dojoWidget.domNode.childNodes.length){
document.insertBefore(_8,_7.dojoWidget.domNode.childNodes[_9]);
}else{
if(_9==_7.dojoWidget.domNode.childNodes.length){
_7.dojoWidget.domNode.appendChild(_8);
}
}
}
},"setChildren":function(_b,_c,_d){
egl.dojo.mobile.widgets.DojoMobileContainer.prototype.setChildren.call(this,_b,_c);
if(_d){
this._fixTerminator();
}
},"removeChildren":function(_e){
var _f=this._getContainerWidget(_e);
this._removeChildren(1,_f);
}});
