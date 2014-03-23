egl.defineWidget("dojo.mobile.widgets","DojoMobileTab","dojo.mobile.widgets","DojoMobileContainer","li",{"eglBaseClass":"eglMblTab","constructor":function(){
var _1=this;
_1.started=false;
_1.selected=false;
_1.containerWidget=null;
_1.text="";
_1.children=[];
require(["dojox/mobile/TabBarButton","dojox/mobile/View"],function(){
_1._safeRender();
});
},"_setTab":function(){
this.setTitle(this.text);
if(this.icon){
this.setIcon(this.icon);
}
},"setText":function(_2){
this.text=_2;
if(this.tabViewWidget){
this.tabViewWidget.domNode.innerText=_2;
}
},"getText":function(){
return this.text||"";
},"createDojoWidget":function(_3){
var _4=this;
var _5=_3;
var _6=document.createElement("div");
var _7={};
_4.eze$$eventNodes=[_5,_6];
this.moveTo="eze$$innerView"+(++egl._dojoSerial);
if(!_5||!_6){
egl.createRuntimeException("ERROR CREATING TAB WIDGET");
}
this.tabViewWidget=new dojox.mobile.View({id:this.moveTo,selected:this.getSelected()},_6);
_6.innerText=this.text;
if(_4.icon1){
_7.icon1=this.icon1;
}
if(_4.icon2){
_7.icon2=this.icon2;
}
if(_4.moveTo){
_7.moveTo=this.moveTo;
}
if(_4.title){
_7.label=this.title;
}else{
_7.label="eze$$innerView"+egl._dojoSerial;
}
this.tabBtnWidget=new dojox.mobile.TabBarButton(_7,_5);
var _8=_4.tabBtnWidget.startup;
_4.tabBtnWidget.startup=function(){
if(typeof _8==="function"){
_8.apply(_4.tabBtnWidget,arguments);
}
_4.synchronor.trigger(_4,"DJ_STARTUP");
};
if(_4.parent&&_4.parent.tabBarWidget.getIndexOfChild(_4.children[i].tabBtnWidget)==-1){
_4.parent.tabBarWidget.addChild(this.tabBtnWidget);
_4.parent.ContainerNode.appendChild(this.tabViewWidget.domNode);
_4.tabBtnWidget.startup();
_4.tabViewWidget.startup();
}
_4.dojoWidget=_4.tabBtnWidget;
_4.containerWidget=_4.tabViewWidget;
_4.synchronor.trigger(_4,"SYN_READY");
_4.synchronor.wait(_4.children,"SYN_READY",function(){
_4.setChildren(_4.children,_4.containerWidget);
});
_4.started=true;
},"startup":function(_9){
var _a=this;
require(["dojo/mobile/utility/Synchronor"],function(_b){
_b.wait([_a],"SYN_READY",function(){
if(_a.dojoWidget&&_a.dojoWidget.startup){
if(_9){
_a.tabBtnWidget._started=false;
_a.tabViewWidget._started=false;
}
_a.tabBtnWidget.startup();
_a.tabViewWidget.startup();
}
if(_a.containerWidget&&(_a.containerWidget!=_a.dojoWidget)&&_a.containerWidget.startup){
if(_9){
_a.tabBtnWidget._started=false;
_a.tabViewWidget._started=false;
}
_a.tabBtnWidget.startup();
_a.tabViewWidget.startup();
}
});
});
},"destroy":function(){
dojo.removeAttr(this.eze$$DOMElement,"id");
try{
this.dojoWidget&&this.dojoWidget.destroy();
}
catch(e){
}
try{
this.dojoWidget&&this.dojoWidget.destroyRecursive();
}
catch(e){
}
try{
this.tabViewWidget&&this.tabViewWidget.destroy();
}
catch(e){
}
try{
this.tabViewWidget&&this.tabViewWidget.destroyRecursive();
}
catch(e){
}
this.dojoWidget=null;
this.tabViewWidget=null;
this.tabBtnWidget=null;
},"setTitle":function(_c){
this._safeSet("title",_c,"label");
},"getTitle":function(){
return this.title;
},"setSelectedIcon":function(_d){
this._safeSet("icon1",_d);
},"setDeselectedIcon":function(_e){
this._safeSet("icon2",_e);
},"getDeselectedIcon":function(){
return this.icon2;
},"getSelectedIcon":function(){
return this.icon1;
},"removeChildren":function(_f){
var _10=_f?_f:this.dojoWidget;
this._removeChildren(1,_10);
},"setChildren":function(_11,_12){
var _13=this.containerWidget;
if(_13){
this.removeChildren(_13);
if(_11){
for(var n=0;n<_11.length;n++){
this._appendChild(_11[n],_13);
}
}
}
this.children=_11;
},"getChildren":function(){
return this.children;
},"setSelected":function(_15){
this.selected=_15?true:false;
},"getSelected":function(){
return this.selected;
}});
