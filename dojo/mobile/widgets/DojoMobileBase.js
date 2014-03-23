egl._DJMEvents={standard:{"onClick":["click"],"onFocus":["focus"],"onBlur":["blur"],"onKeyDown":["keydown"],"onKeyPress":["keypress"],"onKeyUp":["keyup"],"onMouseDown":["mousedown"],"onMouseUp":["mouseup"],"onMouseEnter":["mouseover"],"onMouseMove":["mousemove"],"onMouseLeave":["mouseout"]},touch:{"onPress":["press"],"onRelease":["release"],"onOver":["over"],"onOut":["out"],"onEnter":["enter"],"onLeave":["leave"],"onMove":["move"],"onCancel":["cancel"]}};
egl._touchEventNames={"press":["press","Press","press"],"release":["release","Release","release"],"over":["over","Over","over"],"out":["out","Out","out"],"enter":["enter","Enter","enter"],"leave":["leave","Leave","leave"],"move":["move","Move","move"],"cancel":["cancel","Cancel","cancel"]};
egl.wrapEvent=function(e,_2){
e=e||window.event;
var _3=e.srcElement||e.target;
if(_2){
e.widget=_2;
_3=_2.eze$$DOMElement;
}else{
while(_3&&!_3.eze$$widget){
_3=_3.parentNode;
}
if(_3){
e.widget=_3.eze$$widget;
}
}
e.stopPropagation=e.stopPropagation||egl.stopPropagation;
e.preventDefault=e.preventDefault||egl.preventDefault;
e.getX=egl.getEventX;
e.getY=egl.getEventY;
e.ch=e.keyCode||e.charCode||0;
e.mouseButton=e.which?e.which:0;
if(e.screenX==null){
e.screenX=0;
}
if(e.screenY==null){
e.screenY=0;
}
if(e.clientX==null){
e.clientX=0;
}
if(e.clientY==null){
e.clientY=0;
}
if(e.pageX==null){
e.pageX=e.clientX-egl.getClientX(document.body);
}
if(e.pageY==null){
e.pageY=e.clientY-egl.getClientY(document.body);
}
if(e.pageX==null){
e.pageX=0;
}
if(e.pageY==null){
e.pageY=0;
}
switch(e.button){
case 1:
e.mouseButton=1;
break;
case 4:
e.mouseButton=2;
break;
case 2:
case 3:
e.mouseButton=3;
break;
}
return e;
};
egl.defineWidget("dojo.mobile.widgets","DojoMobileBase","dojo.widgets","DojoBase","div",{"standardEvents":["click","focus","blur","keydown","keypress","keyup","mousedown","mouseup","mouseover","mousemove","mouseout"],"touchEvents":["press","release","over","out","enter","leave","move","cancel"],"constructor":function(){
this._args={};
},"render":function(){
var _4=this,_5=[],_6=[],i=0,_8,_9;
_4.renderingStep=1;
_4.eze$$ready=false;
_4.renderingStep=2;
var id=_4.getID();
_4.destroyAtRender();
var _b=null;
var _c=_4.eze$$DOMElement.style;
_4.renderingStep=4;
id&&_4.eze$$DOMElement&&(_4.eze$$DOMElement.id=id);
_8=_4.getShallowCopy(_4._args);
for(_9 in _8){
if(_9 in egl._DJMEvents.standard){
_5.push(_9);
_8[_9]=null;
}else{
if(_9 in egl._DJMEvents.touch){
_6.push(_9);
_8[_9]=null;
}
}
}
_4.createDojoWidget(_4.eze$$DOMElement,_8);
_4.copyAttribute();
_4.eze$$DOMElement.eze$$widget=this;
require(["dojo/on","dojo/touch"],function(on,_e){
_4.synchronor.wait([_4],"SYN_READY",function(){
for(i=0;i<_5.length;++i){
_4._installStandardEvent(_5[i]);
}
for(i=0;i<_6.length;++i){
_4._installTouchEvent(_6[i],_e);
}
});
});
id&&_4.setID(id);
_4.renderingStep=5;
_4.copyStyle(_c);
_4.eze$$ready=true;
_4.printStartupMessage();
egl.startVEWidgetTimer();
dojo.addOnLoad(_4.dojoWidget,function(){
_4.handleEvent(_4.getOnWidgetLoad(),"onWidgetLoad",null);
});
},"_setEvent":function(_f,_10,_11){
var _12=this;
this._args=this._args||{};
var obj=this._args;
var _14;
if(_f=="mouseup"){
_14=function(e){
_12.handleEvent(_12["getOn"+_10](),"on"+_10,e);
if(e.button==2||e.button==3){
_12.handleEvent(_12.getOnContextMenu(),"onContextMenu",e);
}
};
}else{
_14=function(e){
_12.handleEvent(_12["getOn"+_10](),"on"+_10,e);
};
}
if(this.dojoWidget){
_12._installStandardEvent("on"+_11,_14);
}else{
obj["on"+_11]=_14;
}
},"_setTouchEvent":function(_17,_18){
var _19=this,obj,_1b;
_19._args||(_19._args={});
obj=this._args;
_1b=function(e){
_19.handleEvent(_19["getOn"+_17](),"on"+_17,e);
};
if(this.dojoWidget instanceof dijit._WidgetBase){
require(["dojo/on","dojo/touch"],function(on,_1e){
_19._installTouchEvent("on"+_17,_1e,_1b);
});
}else{
obj["on"+_17]=_1b;
}
},"_installStandardEvent":function(_1f,_20){
var _21=this,j=0;
if(_1f=="onClick"&&_21.dojoWidget instanceof dijit._WidgetBase){
_21.djOn(_21.dojoWidget,"click",function(){
});
}
if(_21.eze$$eventNodes&&_21.eze$$eventNodes.length>0){
for(j=0;j<_21.eze$$eventNodes.length;++j){
if(_21.eze$$eventNodes[j]){
_21.djOn(_21.eze$$eventNodes[j],egl._DJMEvents.standard[_1f][0],_20?_20:_21._args[_1f]);
}
}
}else{
if(_21.containerNode){
_21.djOn(_21.containerNode,egl._DJMEvents.standard[_1f][0],_20?_20:_21._args[_1f]);
}else{
if(_21.dojoWidget){
_21.djOn(_21.dojoWidget.domNode,egl._DJMEvents.standard[_1f][0],_20?_20:_21._args[_1f]);
}
}
}
},"_installTouchEvent":function(_23,_24,_25){
var _26=this,j=0;
if(_26.eze$$eventNodes&&_26.eze$$eventNodes.length>0){
for(j=0;j<_26.eze$$eventNodes.length;++j){
if(_26.eze$$eventNodes[j]){
_26.djOn(_26.eze$$eventNodes[j],_24[egl._DJMEvents.touch[_23][0]],_25?_25:_26._args[_23]);
}
}
}else{
if(_26.containerNode){
_26.djOn(_26.containerNode,_24[egl._DJMEvents.touch[_23][0]],_25?_25:_26._args[_23]);
}else{
if(_26.dojoWidget){
_26.djOn(_26.dojoWidget.domNode,_24[egl._DJMEvents.touch[_23][0]],_25?_25:_26._args[_23]);
}
}
}
},"getOnPress":function(){
return this.onPress||this.installEventHandlers(this,"press",this.onPress=[]);
},"getOnRelease":function(){
return this.onRelease||this.installEventHandlers(this,"release",this.onRelease=[]);
},"getOnOver":function(){
return this.onOver||this.installEventHandlers(this,"over",this.onOver=[]);
},"getOnOut":function(){
return this.onOut||this.installEventHandlers(this,"out",this.onOut=[]);
},"getOnEnter":function(){
return this.onEnter||this.installEventHandlers(this,"enter",this.onEnter=[]);
},"getOnLeave":function(){
return this.onLeave||this.installEventHandlers(this,"leave",this.onLeave=[]);
},"getOnMove":function(){
return this.onMove||this.installEventHandlers(this,"move",this.onMove=[]);
},"getOnCancel":function(){
return this.onCancel||this.installEventHandlers(this,"cancel",this.onCancel=[]);
},"getOnStartDrag":function(){
return this.startDrag;
},"getOnDrag":function(){
return this.drag;
},"getOnDropOnTarget":function(){
return this.dropOnDrag;
},"renderWhenDojoIsDoneLoading":function(){
var _28=this;
require(["dojo/mobile/utility/Synchronor","dojo/mobile/utility/DisplayController","dojo/on"],function(_29,dc,on){
_28.synchronor=_29;
_28.djOn=on;
dc.waitDoucmentCssLoaded(function(){
_28.renderingStep=0;
_28.renderWhenDojoIsDoneLoadingSafely();
},_28);
});
},"resize":function(){
var _2c=this;
require(["dojo/mobile/utility/Synchronor"],function(_2d){
_2d.wait([_2c],"SYN_READY",function(){
_2c.dojoWidget&&_2c.dojoWidget.resize&&_2c.dojoWidget.resize();
_2c.containerWidget&&(_2c.containerWidget!=_2c.dojoWidget)&&_2c.containerWidget.resize&&_2c.containerWidget.resize();
});
});
},"startup":function(_2e){
var _2f=this;
require(["dojo/mobile/utility/Synchronor"],function(_30){
_30.wait([_2f],"SYN_READY",function(){
if(_2f.dojoWidget&&_2f.dojoWidget.startup){
_2e&&(_2f.dojoWidget._started=false);
_2f.dojoWidget.startup();
}
if(_2f.containerWidget&&(_2f.containerWidget!=_2f.dojoWidget)&&_2f.containerWidget.startup){
_2e&&(_2f.containerWidget._started=false);
_2f.containerWidget.startup();
}
});
});
},"log":function(msg,_32,_33,_34,_35){
_32=!!_32,_33=!!_33,_34=!!_34,_35=!!_35;
function logToDom(msg){
var _37=document.getElementById("egl-mobile-msg-box");
var _38=document.createElement("DIV");
if(!_37){
_37=document.createElement("DIV");
_37.id="egl-mobile-msg-box";
_37.style["border"]="1px solid #555555";
_37.style["background"]="#E5F3FF";
_37.style["width"]="90%";
_37.style["padding"]="4%";
_37.style["margin"]="5px auto";
var _39=document.getElementsByTagName("body")[0];
if(_39.firstChild){
_39.insertBefore(_37,_39.firstChild);
}else{
_39.appendChild(_37);
}
}
_37.innerHTML=_37.innerHTML?(_37.innerHTML+"<hr>"+msg):msg;
};
if((egl.enableEditing&&!_33)||(egl.debugg&&!_35)||(!egl.enableEditing&&!egl.debugg&&egl.contextAware&&!_34)||(!egl.debugg&&!egl.enableEditing&&!egl.contextAware&&!_32)){
logToDom(msg);
}else{
console.warn(msg);
}
},"printStartupMessage":function(){
if(egl.dojo.widgets.DojoDiagnostics&&!egl.enableEditing&&!egl.debugg&&egl.contextAware&&!egl.dojoNow){
egl.dojoNow=new Date().getTime();
var _3a=(egl.dojoNow-egl.startTime);
egl.println("<div style='border: 1px solid #555555; background-color: #E5F3FF; width:700px; padding: 9px;'><b>Dojo Statistics: </b>"+"Total startup (including loading of Dojo) took: <b>"+_3a+"</b>ms.<hr>Dojo provider is: \""+egl.dojoProvider+"\".<br>Read <b>README_FIRST.html</b> in the <b>dojo.runtime</b> "+"project for more information.<br>"+"<hr>You are using: "+navigator.userAgent+(document.documentMode?", documentMode="+document.documentMode:"")+"<hr>This message is only printed in Preview mode, and not when you deploy or debug your application. See DojoDiagnostics.egl."+"</div>");
var _3b="http:/";
if(navigator.userAgent.indexOf("MSIE 6")!=-1){
egl.println("<font color=red><b>You are using IE6. For performance and security reasons, upgrade your browser from Internet Explorer 6 to a newer version.");
}
}
if(!egl.dectectOldIE){
var _3c="";
navigator.userAgent.indexOf("MSIE 6")!=-1&&(_3c="MSIE 6");
navigator.userAgent.indexOf("MSIE 7")!=-1&&(_3c="MSIE 7");
navigator.userAgent.indexOf("MSIE 8")!=-1&&(_3c="MSIE 8");
if(_3c){
this.log("<b>Warning: </b>You are using "+_3c+". For performance and stability reasons, please use a morden HTML5 browser to render this page.<br>"+"<hr>This message is only printed in development mode, and not when you deploy application.",true);
}
egl.dectectOldIE=true;
}
},"appendChild":function(_3d){
throw eze$$typename+": appendChild is not implemented on this dojo widget";
},"appendChildren":function(_3e){
throw eze$$typename+": appendChildren is not implemented on this dojo widget";
},"setChildren":function(_3f){
throw eze$$typename+": setChildren is not implemented on this dojo widget";
},"getChildren":function(){
},"removeChild":function(_40){
throw eze$$typename+": removeChild is not implemented on this dojo widget";
},"removeChildren":function(){
throw eze$$typename+": removeChildren is not implemented on this dojo widget";
},"setID":function(id){
if(id!=null){
this._setProperty("id","id",id);
}
},"getID":function(){
return this._getProperty("id","id");
},"eglStartup":function(){
var i=0,_43=this;
_43.dojoWidget&&_43.dojoWidget.startup&&_43.dojoWidget.startup();
_43.containerWidget&&(_43.dojoWidget!=_43.containerWidget)&&_43.containerWidget.startup&&_43.dojoWidget.startup();
if(_43.children){
for(i=0;i<_43.children.length;i++){
if(_43.children[i].dojoWidget&&_43.children[i].dojoWidget.startup){
_43.children[i].dojoWidget.startup();
}else{
if(_43.children[i].containerWidget&&_43.children[i].containerWidget.startup){
_43.children[i].containerWidget.startup();
}
}
}
}
},"_safeSet":function(key,_45,_46){
var _47=this;
if(!key){
return;
}
if(!_47._args){
_47._args={};
}
_47._args[_46?_46:key]=_45;
_47[key]=_45;
if(_47.dojoWidget){
require(["dojo/mobile/utility/Synchronor"],function(_48){
_48.wait([_47],"DJ_STARTUP",function(){
_47.dojoWidget.set(_46?_46:key,_45);
});
});
}
},"_safeRender":function(){
var _49=this;
setTimeout(function(){
_49.renderWhenDojoIsDoneLoading();
},1);
},"getTypeName":function(){
return this.eze$$typename;
},"getPackageName":function(){
return this.eze$$package;
},"getFullName":function(){
return this.eze$$package+"."+this.eze$$typename;
},"setTypeName":function(){
},"setPackageName":function(){
},"setFullName":function(){
},"_applySafeStartup":function(_4a,_4b){
var _4c=this;
if(!(_4a&&_4a.startup)&&!(_4c.dojoWidget&&_4c.dojoWidget.startup)){
return;
}
if(!_4a){
_4a=_4c.dojoWidget;
}
if(_4a._appliedSafeStartup){
return;
}
_4a.eze$$widget=_4c;
require(["dojo/mobile/utility/Synchronor"],function(_4d){
var _4e=_4a.startup;
_4a.startup=function(){
if(typeof _4e==="function"){
_4e.apply(_4a,arguments);
}
_4d.trigger(_4b?_4b:_4c,"DJ_STARTUP");
};
_4a._appliedSafeStartup=true;
});
},"_setArgProperty":function(_4f,_50,_51){
this[_4f]=_51;
this._args[_50]=_51;
if(this.dojoWidget&&this.dojoWidget.set){
this.dojoWidget.set(_50,_51);
}
},"_addTabIndex":function(_52){
require(["dojo/dom-attr"],function(_53){
_53.set(_52,"tabindex",0);
});
}});
