egl.defineWidget("dojo.mobile.widgets","DojoMobileCheckBox","dojo.mobile.widgets","DojoMobileBase","span",{"standardEvents":["click","mousedown","mouseup","mouseover","mousemove","mouseout","change"],"eglBaseClass":"eglMblCheckbox","constructor":function(){
var _1=this;
require(["dojox/mobile/CheckBox"],function(_2){
_1._safeRender();
});
},"createDojoWidget":function(_3,_4){
var _5=this;
var _6=document.createElement("input");
_5.containerNode=_3;
require(["dojo/dom-attr","dojo/dom-class"],function(_7,_8){
_7.set(_6,{type:"checkbox"});
});
_5._addTabIndex(_3);
_4.onChange=function(){
_5.handleEvent(_5.getOnChange(),"onChange");
};
_5.dojoWidget=new dojox.mobile.CheckBox(_4,_6);
_3.appendChild(_6);
var _9=(_5.text)?_5.text:"";
_3.appendChild(document.createTextNode(_9));
_5.synchronor.trigger(_5,"SYN_READY");
var _a=_5.copyAttribute;
_5.copyAttribute=function(){
_a.apply(_5,arguments);
_5.eze$$DOMElement=_5.containerNode;
};
require(["dojo/on"],function(on){
on(_3,"click",function(_c){
if(_5.dojoWidget){
if(_c.target==_5.dojoWidget.domNode){
return;
}
var _d=_5.dojoWidget.checked;
_5.dojoWidget.set("checked",!_d);
}
});
});
_5.dojoWidget.startup();
},"setSelected":function(_e){
this._setArgProperty("selected","checked",_e);
if(this.eze$$DOMElement){
this.eze$$DOMElement.checked=_e;
}
},"isSelected":function(){
if(this.dojoWidget){
return this.dojoWidget.get("checked");
}else{
return this.selected||false;
}
},"setText":function(_f){
this.text=_f;
if(this.dojoWidget){
this.dojoWidget.domNode.nextSibling.textContent=_f;
}
},"getText":function(){
return this.text;
}});
