setTimeout(function(){
var _1=document.getElementById("egl_loader");
if(_1){
document.body.removeChild(_1);
}
},2000);
egl.startTime=new Date().getTime();
egl.startup=function(){
};
egl._dojoEventNames={"click":["click","Click","Click","click"],"focus":["focus","FocusGained","Focus","focus"],"blur":["blur","FocusLost","Blur","blur"],"keydown":["keydown","KeyDown","KeyDown","keydown"],"keypress":["keypress","KeyPress","KeyPress","keypress"],"keyup":["keyup","KeyUp","KeyUp","keyup"],"mousedown":["mousedown","MouseDown","MouseDown","mousedown"],"mouseup":["mouseup","MouseUp","MouseUp","mouseup"],"mouseover":["mouseenter","MouseOver","MouseEnter","mouseover"],"mousemove":["mousemove","MouseMove","MouseMove","mousemove"],"mouseout":["mouseleave","MouseOut","MouseLeave","mouseout"]};
egl._dojoSerial=0;
egl.defineClass("dojo.widgets","DojoBase","egl.ui.rui","Widget",{"render":function(){
this.renderingStep=1;
this.eze$$ready=false;
this.renderingStep=2;
var id=this.getID();
this.destroyAtRender();
var _3=null;
var _4=this.eze$$DOMElement.style;
this.renderingStep=4;
id&&this.eze$$DOMElement&&(this.eze$$DOMElement.id=id);
this.createDojoWidget(this.eze$$DOMElement);
this.copyAttribute();
this.eze$$DOMElement.eze$$widget=this;
id&&this.setID(id);
this.renderingStep=5;
this.copyStyle(_4);
this.eze$$ready=true;
this.printStartupMessage();
egl.startVEWidgetTimer();
var _5=this;
dojo.addOnLoad(_5.dojoWidget,function(){
_5.handleEvent(_5.getOnWidgetLoad(),"onWidgetLoad",null);
});
},"getDojoWidget":function(){
return this.dojoWidget;
},"getOnWidgetLoad":function(){
if(this.onWidgetLoad){
return this.onWidgetLoad;
}else{
return (this.onWidgetLoad=[]);
}
},"reportError":function(_6){
var s="<div style='padding:14px; width:350px; background: yellow; border: 2px solid red;'>"+"<font color=red><b>Error found in "+this.eze$$typename+"</b></font><br><br>"+"Parent hierarchy = "+this.getAncestry()+"<br><br>Could not create Dojo Widget. See "+this.eze$$typename+".createDojoWidget(), rendering step="+this.renderingStep+(_6?", error="+_6:"")+"</div>";
this.setInnerHTML(s);
},"destroyAtRender":function(){
this.destroy();
},"printStartupMessage":function(){
if(egl.dojo.widgets.DojoDiagnostics&&!egl.enableEditing&&!egl.debugg&&egl.contextAware&&!egl.dojoNow){
egl.dojoNow=new Date().getTime();
var _8=(egl.dojoNow-egl.startTime);
egl.println("<div style='border: 1px solid #555555; background-color: #E5F3FF; width:700px; padding: 9px;'><b>Dojo Statistics: </b>"+"Total startup (including loading of Dojo) took: <b>"+_8+"</b>ms.<hr>Dojo provider is: \""+egl.dojoProvider+"\".<br>Read <b>README_FIRST.html</b> in the <b>dojo.runtime</b> "+"project for more information.<br>"+"<hr>You are using: "+navigator.userAgent+(document.documentMode?", documentMode="+document.documentMode:"")+"<hr>This message is only printed in Preview mode, and not when you deploy or debug your application. See DojoDiagnostics.egl."+"</div>");
var _9="http:/";
if(navigator.userAgent.indexOf("MSIE 6")!=-1){
egl.println("<font color=red><b>You are using IE6. For performance and security reasons, upgrade your browser from Internet Explorer 6 to a newer version.");
}
}
},"renderWhenDojoIsDoneLoading":function(){
var _a=this;
require(["dojo/main","dojo/dom-class"],function(_b,_c){
_a.renderingStep=0;
_a.eze$$DOMElement&&_a.eglBaseClass&&_c.add(_a.eze$$DOMElement,_a.eglBaseClass);
if(egl.IE){
setTimeout(function(){
_a.renderWhenDojoIsDoneLoadingSafely();
},1);
}else{
_a.renderWhenDojoIsDoneLoadingSafely();
}
});
},"renderWhenDojoIsDoneLoadingSafely":function(){
var _d=this;
require(["dojo/main","dojo/dom-class"],function(_e,_f){
dojo.addOnLoad(function(){
_d.renderingStep=0;
_d.eze$$DOMElement&&_d.eglBaseClass&&_f.add(_d.eze$$DOMElement,_d.eglBaseClass);
_d.render();
});
_d.removeLoader();
});
},"getAncestry":function(){
var s="";
var _11=this.eze$$DOMElement;
while(_11&&_11!=document.body.parentNode){
if(_11==document.body){
s+="document.body";
}else{
if(_11.tagName){
s+=_11.tagName+" &gt; ";
}else{
s+="<font color=red><b>NO PARENT</b></font>";
}
}
_11=_11.parentNode;
}
return s;
},"removeLoader":function(){
var _12=document.getElementById("egl_loader");
if(_12){
document.body.removeChild(_12);
}
},"copyStyle":function(_13){
for(f in _13){
if(_13[f]!=""){
try{
this.eze$$DOMElement.style[f]=_13[f];
}
catch(e){
}
}
}
if(this.width){
egl.setWidth(this.dojoWidget.domNode,egl.toPX(this.width));
}
if(this.height){
egl.setHeight(this.dojoWidget.domNode,egl.toPX(this.height));
}
},"copyAttribute":function(){
var _14=this.dojoWidget.domNode||this.dojoWidget.node;
if(_14==this.eze$$DOMElement){
return;
}
try{
for(var _15 in this.eze$$DOMElement){
if(_14[_15]===undefined){
_14[_15]=this.eze$$DOMElement[_15];
}
}
}
catch(any){
}
this.eze$$DOMElement=_14;
if(egl.contextAware){
egl.elements.push(_14);
}
},"includeCSS":function(url){
var _17=document.createElement("link");
_17.type="text/css";
_17.rel="stylesheet";
_17.href=url;
document.getElementsByTagName("head")[0].appendChild(_17);
},"installEventHandlers":function(_18,_19,_1a){
var _1b=egl._dojoEventNames[_19];
if(_1b){
this._setEvent(_1b[0],_1b[1],_1b[2]);
}
_1b=egl._touchEventNames&&egl._touchEventNames[_19];
if(_1b){
this._setTouchEvent(_1b[1],_1b[2]);
}
return _1a||[];
},"handleEvent":function(_1c,_1d,_1e){
var e;
if(_1e){
e=egl.wrapEvent(_1e||window.event||null,this);
}else{
e=new egl.egl.ui.rui.Event();
e.widget=this;
}
for(var n=0;n<_1c.length;n++){
try{
_1c[n](e);
}
catch(e){
if(egl.egl.debug&&e instanceof egl.egl.debug.DebugTermination){
throw e;
}
egl.printError("Uncaught exception occurred during handling of "+this.eze$$type+"."+_1d+" event",e);
}
}
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
this.dojoWidget=null;
},"layout":function(){
try{
this.dojoWidget.layout();
}
catch(e){
}
},"assert":function(_21,_22){
if(!_21){
throw _22+". Race condition may have occurred.";
}
},"setData":function(_23){
this.data=_23;
var _24=this;
setTimeout(function(){
_24.renderWhenDojoIsDoneLoading();
},1);
},"getData":function(){
return this.data;
},"setText":function(_25){
this.text=_25;
},"getText":function(){
return this.text;
},"setWidth":function(_26){
this.width=_26;
egl.setWidth(this.eze$$DOMElement,egl.toPX(_26));
},"setHeight":function(_27){
this.height=_27;
egl.setHeight(this.eze$$DOMElement,egl.toPX(_27));
},"setColor":function(_28){
this.color=_28;
egl.egl.ui.rui.Widget.prototype.setColor.call(this,_28);
},"setFont":function(_29){
this.font=_29;
egl.egl.ui.rui.Widget.prototype.setFont.call(this,_29);
},"focus":function(){
if(this.dojoWidget){
this.dojoWidget.focus();
}else{
egl.egl.ui.rui.Widget.prototype.focus.call(this);
}
},"eze$$getChildVariables":function(){
var _2a=this.eze$$getBaseChildVariables();
if(egl&&egl.debugg){
var _2b=[];
for(var i=0;i<_2a.length;i++){
_2b.push(_2a[i].name);
}
var _2d=function _2d(_2e,_2f){
var i=_2e.length;
while(i--){
if(_2e[i]===_2f){
return true;
}
}
return false;
};
for(f in this){
if(typeof this[f]=="function"){
continue;
}
if(f.toString().indexOf("eze$$")==0){
continue;
}
if(f.toString()=="egl$isWidget"){
continue;
}
if(!_2d(_2b,f.toString())){
_2a.push({name:f.toString(),value:this[f],type:egl.getDebugType(this[f])});
}
}
}
return _2a;
},"_getProperty":function(_31,_32){
if(this.dojoWidget&&this.dojoWidget.get){
return this.dojoWidget.get(_32);
}
return this[_31];
},"_setProperty":function(_33,_34,_35){
this[_33]=_35;
if(this.dojoWidget&&this.dojoWidget.set){
this.dojoWidget.set(_34,_35);
}
},"_setEvent":function(_36,_37,_38){
var _39=this;
this._args=this._args||{};
var obj=this._args;
var _3b;
if(_36=="mouseup"){
_3b=function(e){
_39.handleEvent(_39["getOn"+_37](),"on"+_37,e);
if(e.button==2||e.button==3){
_39.handleEvent(_39.getOnContextMenu(),"onContextMenu",e);
}
};
}else{
_3b=function(e){
_39.handleEvent(_39["getOn"+_37](),"on"+_37,e);
};
}
if(this.containerNode){
dojo.connect(this.containerNode,"on"+_36,_3b);
}else{
if(this.dojoWidget){
dojo.connect(this.dojoWidget.domNode,"on"+_36,_3b);
}else{
obj["on"+_38]=_3b;
}
}
},"_setTouchEvent":function(_3e,_3f){
var _40=this,obj,_42;
_40._args||(_40._args={});
obj=this._args;
_42=function(e){
_40.handleEvent(_40["getOn"+_3e](),"on"+_3e,e);
};
if(this.dojoWidget instanceof dijit._WidgetBase){
require(["dojo/on","dojo/touch"],function(on,_45){
_45[_3f]&&on(_40.dojoWidget.domNode,_45[_3f],_42);
});
}else{
obj["on"+_3e]=_42;
}
},"_mergeArgs":function(obj){
this._args=this._args||{};
for(prop in obj){
this._args[prop]=obj[prop];
}
},"getShallowCopy":function(it){
var _48=null;
if(it&&(it instanceof Array||typeof it=="array")){
_48=[];
}else{
if(it!==undefined&&(it===null||typeof it=="object"||Object.prototype.toString.call(it)==="[object Function]")){
_48={};
}else{
return it;
}
}
for(key in it){
if(it.hasOwnProperty(key)){
_48[key]=it[key];
}
}
return _48;
}});
