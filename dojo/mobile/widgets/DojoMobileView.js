egl.defineWidget("dojo.mobile.widgets","DojoMobileView","dojo.mobile.widgets","DojoMobileContainer","div",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout"],"eglBaseClass":"eglMblView","constructor":function(){
var _1=this;
_1.eglBaseClass="eglMblView";
_1.backText="";
_1.headerTitle="";
_1.id="";
_1.refs=[];
_1._containerWidth="100%";
_1._scrollBar=true;
_1._class="";
_1.scrollableHeight="";
_1.toolBar=null;
_1.children=[];
_1.setSelected(undefined);
require(["dojo/mobile/utility/Synchronor","dojox/mobile/ScrollableView","dojox/mobile/SwapView","dojo/_base/sniff"],function(_2,_3,_4,_5){
_1.synchronor=_2;
_1._safeRender();
});
},"_checkPropsAllSet":function(){
},"createDojoWidget":function(_6,_7){
var _8=this;
var _9="";
var _a=[];
var _b=function(_c){
if(_9.length>0){
var _d=_a.length==1?_6:document.createElement("div");
_8.dojoWidget=new dojox.mobile.ScrollableView({selected:_8.selected||false,scrollDir:_9,height:_8.scrollableHeight},_d);
_8.containerWidget=_8.dojoWidget;
if(_8.containerWidget.domNode.childNodes[0]){
_8.containerWidget.domNode.childNodes[0].style.width=_8._containerWidth;
}
}
if(_8.isSwappable){
var _e=new dojox.mobile.SwapView({selected:_8.selected||false},_6);
if(_8.dojoWidget){
_e.addChild(_8.dojoWidget);
}else{
_8.containerWidget=_e;
}
_8.dojoWidget=_e;
_8._applySafeStartup();
_c.trigger(_8,"SYN_READY");
}else{
if(!_8.dojoWidget){
_8.dojoWidget=new dojox.mobile.View({selected:_8.selected||false},_6);
_8.containerWidget=_8.dojoWidget;
_8._applySafeStartup();
_c.trigger(_8,"SYN_READY");
}else{
_8._applySafeStartup();
_c.trigger(_8,"SYN_READY");
}
}
if(_8.id){
_8.dojoWidget.set("id",_8.id);
}
_8._addHeading();
if(_8.refs){
for(var n=0;n<_8.refs.length;n++){
_8.refs[n]._setMoveto(_8.getID());
}
_8.refs.length=0;
}
_8.dojoWidget.onBeforeTransitionOut=function(_10,dir,_12,_13,_14){
var _15=dojo.byId(_10);
if(_15){
_15.style.top="0px";
}
};
_8.synchronor.wait(_8.children,"SYN_READY",function(){
_8.setChildren(_8.children,_8.containerWidget);
if(_8.dojoWidget.domNode&&_8.dojoWidget.domNode.parentNode){
_8.dojoWidget.startup();
}else{
if(_8.containerWidget.domNode&&_8.containerWidget.domNode.parentNode){
_8.containerWidget.startup();
}
}
});
};
if(_8.scrollHorizontally){
_9=_9+"h";
}
if(_8.scrollVertically){
_9=_9+"v";
}
if(_8.isSwappable){
_a.push("dojox/mobile/SwapView");
}
if(_9.indexOf("h")!=-1||_9.indexOf("v")!=-1){
_a.push("dojox/mobile/ScrollableView");
}
_b(_8.synchronor);
},"_addHeading":function(){
var _16=this;
var _17=_16._getContainerWidget();
if(_16.backText||_16.backView||_16.moveTo||_16.headerTitle||(_16.toolBar&&_16.toolBar.length)){
var _18={};
if(_16.headerTitle){
_18.label=_16.headerTitle;
}
if(_16.backText){
_18.back=_16.backText;
}
if(_16.moveTo){
_18.moveTo=_16.moveTo;
}else{
if(_16.backView&&_16.backView.getID()){
_18.moveTo=_16.backView.getID();
}
}
if(_18.moveTo&&!_18.back){
_18.back=" ";
}
if(_18.moveTo==_16.getID()){
delete _18.moveTo;
}
_16.heading=new dojox.mobile.Heading(_18);
_17.addChild(_16.heading);
if(_16.toolBar&&_16.toolBar.length&&_16.synchronor){
_16.synchronor.wait(_16.toolBar,"SYN_READY",function(){
for(var i=0;i<_16.toolBar.length;++i){
if(_16.toolBar[i].dojoWidget){
_16.heading.addChild(_16.toolBar[i].dojoWidget);
}
}
});
}
}
},"_show":function(){
if(this.eze$$parent){
return;
}else{
this.setLogicalParent(egl.Document);
this.setParent(egl.Document);
}
},"setHeaderTitle":function(_1a){
this.headerTitle=_1a;
if(this.dojoWidget&&this.headerTitle){
if(this.heading){
this.heading.set({"label":this.headerTitle});
}else{
this._addHeading();
}
}
},"getHeaderTitle":function(){
return this.headerTitle;
},"setBackText":function(_1b){
this.backText=_1b;
if(this.dojoWidget&&this.backText){
if(this.heading){
this.heading.set("back",this.backText);
var _1c=this.heading.domNode.getElementsByTagName("div");
if(_1c.length>=3){
_1c[1].innerHTML=this.backText;
this.heading.set({"label":this.headerTitle});
}else{
}
}
}
},"getBackText":function(){
return this.backText;
},"setBackView":function(_1d){
this.backView=_1d;
if(this.backView){
this.moveTo=this.backView.getID();
if(!this.moveTo&&this!=this.backView){
this.backView._addRef(this);
}
}
if(this.dojoWidget&&this.backView&&this.backView.getID()){
this._setMoveto(this.moveTo);
}
},"_setMoveto":function(_1e){
if(this.heading){
this.heading.set("moveTo",_1e);
}else{
this.moveTo=_1e;
}
},"_addRef":function(_1f){
this.refs.push(_1f);
},"getBackView":function(){
return this.backView;
},"_setSelected":function(){
var _20=this;
if(_20.dojoWidget){
if(_20.selected){
if(_20.dojoWidget.domNode.parentNode){
_20.dojoWidget.show();
}else{
_20.dojoWidget.domNode.style.display="";
}
if(_20.dojoWidget.domNode.style.visibility!="visible"){
_20.dojoWidget.domNode.style.visibility="";
}
_20.resize();
_20.dojoWidget.set("selected",true);
}else{
_20.dojoWidget.set("selected",false);
_20.dojoWidget.domNode.style.visibility="";
_20.dojoWidget.hide();
}
}
},"setSelected":function(s,_22){
var _23=this;
_23.selected=s;
!_22&&(_23.eze$$needSelect=Date.now());
require(["dojo/mobile/utility/Synchronor"],function(_24){
_24.wait([_23],"SYN_READY",function(){
var _25=_23.dojoWidget.getSiblingViews(),_26=[];
for(var i=0;i<_25.length;++i){
if(_25[i].eze$$widget){
_26.push(_25[i].eze$$widget);
}
}
_24.wait(_26,"DJ_STARTUP",function(){
setTimeout(function(){
var i=0,_29=[],_2a=[];
_25=_23.dojoWidget.getSiblingViews();
for(var i=0;i<_25.length;++i){
if(_25[i].eze$$widget&&_25[i].eze$$widget.eze$$needSelect){
_29.push(_25[i].eze$$widget);
_2a.push(_25[i].eze$$widget);
}
}
if(_29.length==0){
return;
}
_29.sort(function(a,b){
if(a.eze$$needSelect<b.eze$$needSelect){
return -1;
}else{
if(a.eze$$needSelect==b.eze$$needSelect){
return 0;
}else{
return 1;
}
}
});
var ids=[],_2e=0,_2f=true,_30=0,_31=0;
for(i=0;i<_29.length;++i){
ids.push(_29[i].getID());
_29[i].selected&&_2e++;
_29[i].selected===undefined&&_30++;
_29[i].selected===false&&_31++;
}
if(_31==_2a.length){
for(i=0;i<_2a.length;++i){
delete _2a[i].eze$$needSelect;
_2a[i]._setSelected&&_2a[i]._setSelected();
}
}else{
if(_30>0&&_2e==0){
for(i=0,_2f=true;i<_2a.length;++i){
delete _2a[i].eze$$needSelect;
if(_2a[i].selected===undefined&&_2f){
_2a[i].selected=true;
_2a[i]._setSelected&&_2a[i]._setSelected();
_2f=false;
continue;
}
_2a[i]._setSelected&&_2a[i]._setSelected();
}
}else{
if(_2e>0){
for(i=_29.length-1;i>=0;--i){
delete _29[i].eze$$needSelect;
if(_29[i].selected&&_2f){
_29[i]._setSelected&&_29[i]._setSelected();
_2f=false;
continue;
}
(_29[i].selected===true)&&(_29[i].selected=false);
_29[i]._setSelected&&_29[i]._setSelected();
}
}
}
}
},1);
});
});
});
},"getSelected":function(){
return this.selected;
},"showView":function(){
this.selected=true;
if(this.dojoWidget){
this.showView();
}
},"removeChildren":function(_32){
var _33=this._getContainerWidget(_32);
this._removeChildren(1,_33);
},"_appendChild":function(_34,_35){
var _36=this._getContainerWidget(_35);
var _37=null;
if(!_36){
throw egl.createRuntimeException("Can't append child to this dojoWidget. The dojoWidget has not been created.",[_37.tagName]);
}
_37=_36.domNode;
if(!_34){
throw egl.createRuntimeException("Can't append a null child.",[_37.tagName]);
}
if(_34==this){
throw egl.createRuntimeException("Can't append the widget itself as a child.",[_37.tagName]);
}
var _38=_34.eze$$DOMElement;
if(!_38){
throw egl.createRuntimeException("The child node does not exist.",[_37.tagName]);
}
try{
_34.eze$$parent=this;
}
catch(e){
throw egl.createRuntimeException("Append child error.",[_34.getTagName(),egl.inferSignature(this),this]);
}
var _39=false;
for(var i=0;i<_37.childNodes.length;++i){
if(_37.childNodes[i].className&&_37.childNodes[i].className.indexOf("mblScrollableViewContainer")!=-1){
_37.childNodes[i].appendChild(_38);
_39=true;
break;
}
}
if(_39==false){
_37.appendChild(_38);
}
if(_34 instanceof egl.dojo.mobile.widgets.DojoMobileBase){
_34.startup();
}
this.childrenChanged();
},"setScrollableHeight":function(_3b){
if(_3b=="screen"){
_3b="";
}
this.scrollableHeight=_3b;
},"getScrollableHeight":function(){
return this.scrollableHeight===""?"screen":this.scrollableHeight;
},"setScrollVertically":function(_3c){
this.scrollVertically=_3c;
},"getScrollVertically":function(){
return this.scrollVertically||false;
},"setScrollHorizontally":function(_3d){
this.scrollHorizontally=_3d;
},"getScrollHorizontally":function(){
return this.scrollHorizontally||false;
},"setIsSwappable":function(_3e){
this.isSwappable=_3e;
},"getIsSwappable":function(){
return this.isSwappable||false;
},"getToolBar":function(){
return this.toolBar;
},"setToolBar":function(v){
var _40=this,i=0,j=0,_43=null,_44=[],_45=true;
_40.toolBar=v;
if(_40.heading){
_40.synchronor&&_40.synchronor.wait(_40.toolBar,"SYN_READY",function(){
_43=_40.heading.getChildren();
if(_43){
for(i=0;i<_43.length;++i){
if(_43[i] instanceof dojox.mobile.ToolBarButton&&(_43[i]!=_40.heading.backButton)){
_45=true;
for(j=0;j<v.length;++j){
if(v[j].dojoWidget&&_43[i]==v[j].dojoWidget){
_45=false;
break;
}
}
_45&&(_44.push(_43[i]));
}
}
}
for(i=0;i<_40.toolBar.length;++i){
if(_40.toolBar[i].dojoWidget){
_40.heading.addChild(_40.toolBar[i].dojoWidget);
}
}
for(i=0;i<_44.length;++i){
_40.heading.removeChild(_44[i]);
}
});
}
},"_applySafeStartup":function(_46,_47){
var _48=this;
if(!(_46&&_46.startup)&&!(_48.dojoWidget&&_48.dojoWidget.startup)){
return;
}
if(!_46){
_46=_48.dojoWidget;
}
if(_46._appliedSafeStartup){
return;
}
_46.eze$$widget=_48;
require(["dojo/mobile/utility/Synchronor"],function(_49){
var _4a=_46.startup;
_46.startup=function(){
var _4b=_46._started;
if(typeof _4a==="function"){
_4a.apply(_46,arguments);
}
_46.domNode.style.visibility="hidden";
if(_4b==true&&_48.eze$$needSelect){
_48.setSelected(_48.selected,true);
}else{
_48.setSelected(_48.selected,false);
}
_49.trigger(_47?_47:_48,"DJ_STARTUP");
};
_46._appliedSafeStartup=true;
});
}});
