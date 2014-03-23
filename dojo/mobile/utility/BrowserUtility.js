define(["dojo/_base/declare","dojo/_base/lang"],function(_1,_2){
var _3={canBubble:true,cancelable:true,view:window,detail:0,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:false,altKey:false,shiftKey:false,metaKey:false,button:0,relatedTarget:null},_4=null,_5=_1(null,{"dispatchEvent":function(_6,_7,_8){
if(!_6){
return;
}
!_7&&(_7=document);
_4._dispatchEvent(_6,_7,_8);
},"getEvent":function(_9,_a){
var _b=null,_c=_2.mixin({},_3,_a);
switch(_9){
case "click":
case "mousedown":
case "mouseup":
case "mouseover":
case "mousemove":
case "mouseout":
_b=document.createEvent("MouseEvent");
_b.initMouseEvent(_9,_c.canBubble,_c.cancelable,_c.view,_c.detail,_c.screenX,_c.screenY,_c.clientX,_c.clientY,_c.ctrlKey,_c.altKey,_c.shiftKey,_c.metaKey,_c.button,_c.relatedTarget);
break;
case "resize":
_b=document.createEvent("HTMLEvents");
_b.initEvent(_9,_c.canBubble,_c.cancelable);
break;
}
return _b;
},"_dispatchEvent":function(_d,_e,_f){
var _10=null,_4=this;
if(document.createEvent){
var _11=_4.getEvent(_d,_f);
_11&&_e.dispatchEvent(_11,_3);
}else{
_10=_2.mixin({},_3,_f);
_d+="on";
_e.fireEvent&&_e.fireEvent(_d,_10);
}
}});
_4=new _5();
return _4;
});
