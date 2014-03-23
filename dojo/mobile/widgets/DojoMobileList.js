egl.defineWidget("dojo.mobile.widgets","DojoMobileList","dojo.mobile.widgets","DojoMobileContainer","ul",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"eglBaseClass":"eglMblList","constructor":function(){
var _1=this;
_1.style="Rounded Rectangle";
_1.acceptChildrenTypes={"dojo.mobile.widgets.DojoMobileListCategory":true,"dojo.mobile.widgets.DojoMobileListItem":true};
_1._safeRender();
},"createDojoWidget":function(_2,_3){
this.eglParent=_2;
if(this.style){
this._createDojoWidget(_2,_3);
}
},"_createDojoWidget":function(_4,_5){
var _6=this;
var _4=_6.eglParent;
if(!_6.style){
return;
}
_6.dojoWidget={"domNode":_4};
if(_6.style=="Edge to Edge"||(_6.style=="Rounded Rectangle"&&egl.IE)){
_6.dojoWidget=new dojox.mobile.EdgeToEdgeList(_5,_4);
}else{
if(_6.style=="Rounded Rectangle"){
_6.dojoWidget=new dojox.mobile.RoundRectList(_5,_4);
if(typeof (window.eze$$device)=="string"&&window.eze$$device=="Android"){
_6.dojoWidget.domNode.style.backgroundColor="transparent";
}
}else{
throw _6.eze$$typename+".construction: Cannot create Dojo Mobile List with this style "+_6.style;
}
}
_6.containerWidget=_6.dojoWidget;
_6.synchronor.trigger(_6,"SYN_READY");
_6.synchronor.wait(_6.children,"SYN_READY",function(){
_6.setChildren(_6.children,_6.containerWidget);
});
},"setChildren":function(_7,_8){
var _9=this;
egl.dojo.mobile.widgets.DojoMobileContainer.prototype.setChildren.call(this,_7,_8);
if(_9.dojoWidget&&_9.children&&_9.children.length>0){
require(["dojo/ready"],function(_a){
_a(function(){
for(var i=0;i<_9.children.length;++i){
if(_9.children[i].dojoWidget&&_9.children[i].dojoWidget.startup){
_9.children[i].dojoWidget.startup();
}
}
});
});
}
},"setStyle":function(_c){
if(this.dojoWidget){
if(this.style!=_c){
throw this.eze$$typename+".setStyle: Cannot change style after construction";
}
}else{
this.style=_c;
}
},"getStyle":function(){
return this.style;
},"_appendChild":function(_d){
egl.dojo.mobile.widgets.DojoMobileContainer.prototype._appendChild.call(this,_d);
_d.setLogicalParent(this);
}});
