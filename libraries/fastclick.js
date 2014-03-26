function FastClick(_1){
"use strict";
var _2,_3=this;
this.trackingClick=false;
this.trackingClickStart=0;
this.targetElement=null;
this.touchStartX=0;
this.touchStartY=0;
this.lastTouchIdentifier=0;
this.layer=_1;
if(!_1||!_1.nodeType){
throw new TypeError("Layer must be a document node");
}
this.onClick=function(){
return FastClick.prototype.onClick.apply(_3,arguments);
};
this.onMouse=function(){
return FastClick.prototype.onMouse.apply(_3,arguments);
};
this.onTouchStart=function(){
return FastClick.prototype.onTouchStart.apply(_3,arguments);
};
this.onTouchEnd=function(){
return FastClick.prototype.onTouchEnd.apply(_3,arguments);
};
this.onTouchCancel=function(){
return FastClick.prototype.onTouchCancel.apply(_3,arguments);
};
if(FastClick.notNeeded(_1)){
return;
}
if(this.deviceIsAndroid){
_1.addEventListener("mouseover",this.onMouse,true);
_1.addEventListener("mousedown",this.onMouse,true);
_1.addEventListener("mouseup",this.onMouse,true);
}
_1.addEventListener("click",this.onClick,true);
_1.addEventListener("touchstart",this.onTouchStart,false);
_1.addEventListener("touchend",this.onTouchEnd,false);
_1.addEventListener("touchcancel",this.onTouchCancel,false);
if(!Event.prototype.stopImmediatePropagation){
_1.removeEventListener=function(_4,_5,_6){
var _7=Node.prototype.removeEventListener;
if(_4==="click"){
_7.call(_1,_4,_5.hijacked||_5,_6);
}else{
_7.call(_1,_4,_5,_6);
}
};
_1.addEventListener=function(_8,_9,_a){
var _b=Node.prototype.addEventListener;
if(_8==="click"){
_b.call(_1,_8,_9.hijacked||(_9.hijacked=function(_c){
if(!_c.propagationStopped){
_9(_c);
}
}),_a);
}else{
_b.call(_1,_8,_9,_a);
}
};
}
if(typeof _1.onclick==="function"){
_2=_1.onclick;
_1.addEventListener("click",function(_d){
_2(_d);
},false);
_1.onclick=null;
}
};
FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;
FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);
FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&(/OS 4_\d(_\d)?/).test(navigator.userAgent);
FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&(/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);
FastClick.prototype.needsClick=function(_e){
"use strict";
switch(_e.nodeName.toLowerCase()){
case "button":
case "select":
case "textarea":
if(_e.disabled){
return true;
}
break;
case "input":
if((this.deviceIsIOS&&_e.type==="file")||_e.disabled){
return true;
}
break;
case "label":
case "video":
return true;
}
return (/\bneedsclick\b/).test(_e.className);
};
FastClick.prototype.needsFocus=function(_f){
"use strict";
switch(_f.nodeName.toLowerCase()){
case "textarea":
case "select":
return true;
case "input":
switch(_f.type){
case "button":
case "checkbox":
case "file":
case "image":
case "radio":
case "submit":
return false;
}
return !_f.disabled&&!_f.readOnly;
default:
return (/\bneedsfocus\b/).test(_f.className);
}
};
FastClick.prototype.sendClick=function(_10,_11){
"use strict";
var _12,_13;
if(document.activeElement&&document.activeElement!==_10){
document.activeElement.blur();
}
_13=_11.changedTouches[0];
_12=document.createEvent("MouseEvents");
_12.initMouseEvent("click",true,true,window,1,_13.screenX,_13.screenY,_13.clientX,_13.clientY,false,false,false,false,0,null);
_12.forwardedTouchEvent=true;
_10.dispatchEvent(_12);
};
FastClick.prototype.focus=function(_14){
"use strict";
var _15;
if(this.deviceIsIOS&&_14.setSelectionRange){
_15=_14.value.length;
_14.setSelectionRange(_15,_15);
}else{
_14.focus();
}
};
FastClick.prototype.updateScrollParent=function(_16){
"use strict";
var _17,_18;
_17=_16.fastClickScrollParent;
if(!_17||!_17.contains(_16)){
_18=_16;
do{
if(_18.scrollHeight>_18.offsetHeight){
_17=_18;
_16.fastClickScrollParent=_18;
break;
}
_18=_18.parentElement;
}while(_18);
}
if(_17){
_17.fastClickLastScrollTop=_17.scrollTop;
}
};
FastClick.prototype.getTargetElementFromEventTarget=function(_19){
"use strict";
if(_19.nodeType===Node.TEXT_NODE){
return _19.parentNode;
}
return _19;
};
FastClick.prototype.onTouchStart=function(_1a){
"use strict";
var _1b,_1c,_1d;
if(_1a.targetTouches.length>1){
return true;
}
_1b=this.getTargetElementFromEventTarget(_1a.target);
_1c=_1a.targetTouches[0];
if(this.deviceIsIOS){
_1d=window.getSelection();
if(_1d.rangeCount&&!_1d.isCollapsed){
return true;
}
if(!this.deviceIsIOS4){
if(_1c.identifier===this.lastTouchIdentifier){
_1a.preventDefault();
return false;
}
this.lastTouchIdentifier=_1c.identifier;
this.updateScrollParent(_1b);
}
}
this.trackingClick=true;
this.trackingClickStart=_1a.timeStamp;
this.targetElement=_1b;
this.touchStartX=_1c.pageX;
this.touchStartY=_1c.pageY;
if((_1a.timeStamp-this.lastClickTime)<200){
_1a.preventDefault();
}
return true;
};
FastClick.prototype.touchHasMoved=function(_1e){
"use strict";
var _1f=_1e.changedTouches[0];
if(Math.abs(_1f.pageX-this.touchStartX)>10||Math.abs(_1f.pageY-this.touchStartY)>10){
return true;
}
return false;
};
FastClick.prototype.findControl=function(_20){
"use strict";
if(_20.control!==undefined){
return _20.control;
}
if(_20.htmlFor){
return document.getElementById(_20.htmlFor);
}
return _20.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
};
FastClick.prototype.onTouchEnd=function(_21){
"use strict";
var _22,_23,_24,_25,_26,_27=this.targetElement;
if(this.touchHasMoved(_21)){
this.trackingClick=false;
this.targetElement=null;
}
if(!this.trackingClick){
return true;
}
if((_21.timeStamp-this.lastClickTime)<200){
this.cancelNextClick=true;
return true;
}
this.lastClickTime=_21.timeStamp;
_23=this.trackingClickStart;
this.trackingClick=false;
this.trackingClickStart=0;
if(this.deviceIsIOSWithBadTarget){
_26=_21.changedTouches[0];
_27=document.elementFromPoint(_26.pageX-window.pageXOffset,_26.pageY-window.pageYOffset);
}
_24=_27.tagName.toLowerCase();
if(_24==="label"){
_22=this.findControl(_27);
if(_22){
this.focus(_27);
if(this.deviceIsAndroid){
return false;
}
_27=_22;
}
}else{
if(this.needsFocus(_27)){
if((_21.timeStamp-_23)>100||(this.deviceIsIOS&&window.top!==window&&_24==="input")){
this.targetElement=null;
return false;
}
this.focus(_27);
if(!this.deviceIsIOS4||_24!=="select"){
this.targetElement=null;
_21.preventDefault();
}
return false;
}
}
if(this.deviceIsIOS&&!this.deviceIsIOS4){
_25=_27.fastClickScrollParent;
if(_25&&_25.fastClickLastScrollTop!==_25.scrollTop){
return true;
}
}
if(!this.needsClick(_27)){
_21.preventDefault();
this.sendClick(_27,_21);
}
return false;
};
FastClick.prototype.onTouchCancel=function(){
"use strict";
this.trackingClick=false;
this.targetElement=null;
};
FastClick.prototype.onMouse=function(_28){
"use strict";
if(!this.targetElement){
return true;
}
if(_28.forwardedTouchEvent){
return true;
}
if(!_28.cancelable){
return true;
}
if(!this.needsClick(this.targetElement)||this.cancelNextClick){
if(_28.stopImmediatePropagation){
_28.stopImmediatePropagation();
}else{
_28.propagationStopped=true;
}
_28.stopPropagation();
_28.preventDefault();
return false;
}
return true;
};
FastClick.prototype.onClick=function(_29){
"use strict";
var _2a;
if(this.trackingClick){
this.targetElement=null;
this.trackingClick=false;
return true;
}
if(_29.target.type==="submit"&&_29.detail===0){
return true;
}
_2a=this.onMouse(_29);
if(!_2a){
this.targetElement=null;
}
return _2a;
};
FastClick.prototype.destroy=function(){
"use strict";
var _2b=this.layer;
if(this.deviceIsAndroid){
_2b.removeEventListener("mouseover",this.onMouse,true);
_2b.removeEventListener("mousedown",this.onMouse,true);
_2b.removeEventListener("mouseup",this.onMouse,true);
}
_2b.removeEventListener("click",this.onClick,true);
_2b.removeEventListener("touchstart",this.onTouchStart,false);
_2b.removeEventListener("touchend",this.onTouchEnd,false);
_2b.removeEventListener("touchcancel",this.onTouchCancel,false);
};
FastClick.notNeeded=function(_2c){
"use strict";
var _2d;
if(typeof window.ontouchstart==="undefined"){
return true;
}
if((/Chrome\/[0-9]+/).test(navigator.userAgent)){
if(FastClick.prototype.deviceIsAndroid){
_2d=document.querySelector("meta[name=viewport]");
if(_2d&&_2d.content.indexOf("user-scalable=no")!==-1){
return true;
}
}else{
return true;
}
}
if(_2c.style.msTouchAction==="none"){
return true;
}
return false;
};
FastClick.attach=function(_2e){
"use strict";
return new FastClick(_2e);
};
if(typeof define!=="undefined"&&define.amd){
define(function(){
"use strict";
return FastClick;
});
}else{
if(typeof module!=="undefined"&&module.exports){
module.exports=FastClick.attach;
module.exports.FastClick=FastClick;
}else{
window.FastClick=FastClick;
}
}
