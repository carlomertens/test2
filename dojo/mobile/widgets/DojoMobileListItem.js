egl.defineWidget("dojo.mobile.widgets","DojoMobileListItem","dojo.mobile.widgets","DojoMobileContainer","li",{"eglBaseClass":"eglMblListItem","constructor":function(){
var _1=this;
_1.children=[];
_1.text="";
_1._args={transition:"slide"};
setTimeout(function(){
_1.renderWhenDojoIsDoneLoading();
},1);
},"createDojoWidget":function(_2,_3){
var _4=this;
_4.dom=_2;
_4.text&&(_3.label=_4.text);
_4.actionText&&(_3.rightText=_4.actionText);
_4.moveTo&&(_3.moveTo=_4.moveTo);
_4.icon&&(_3.icon=_4.icon);
_4.transition&&(_3.transition=_4.transition);
_4.dojoWidget=new dojox.mobile.ListItem(_3,_2);
_4.synchronor.trigger(_4,"SYN_READY");
_4.textBox=_4._getTextBox();
_4.setChildren(_4.children,_4.dojoWidget);
if(_4.children.length>0){
_4._setIconStyle(true);
}
var _5=_4.dojoWidget.onClick;
_4.dojoWidget.onClick=function(_6){
if(typeof _5==="function"&&_4.moveTo){
_5.apply(_4.dojoWidget,arguments);
}
_4.handleEvent(_4.getOnClick(),"onClick");
};
},"_setIconStyle":function(_7){
var _8=this.dojoWidget.domNode.firstChild;
if(_8&&_8.className=="mblListItemIcon"){
if(_7){
_8.style.marginLeft=0;
_8.style.marginTop=0;
}else{
_8.style.marginLeft="18px";
_8.style.marginTop="7px";
}
}
},"_getTextBox":function(){
if(this.dojoWidget){
var _9=this.dojoWidget.domNode.getElementsByTagName("div");
var _a;
for(var n=0;n<_9.length;n++){
if(_9[n].className=="mblListItemLabel"){
_a=_9[n];
break;
}
}
if(_a){
_a.innerHTML="";
}else{
throw this.eze$$typename+".setChildren: Cannot find the parent widget";
}
return _a;
}
},"_appendChild":function(_c){
if(this.dojoWidget){
if(!dojo.hasClass(this.dojoWidget.domNode,"mblVariableHeight")){
dojo.addClass(this.dojoWidget.domNode,"mblVariableHeight");
}
this.dojoWidget.domNode.appendChild(_c.eze$$DOMElement);
}
},"_removeChild":function(_d){
var _e=this.textBox;
this.dojoWidget.domNode&&this.dojoWidget.domNode.removeChild(_d.eze$$DOMElement);
if(this.children||this.children.length<=0){
this._showText();
}
},"_showText":function(){
if(this.dojoWidget){
var _f=this.textBox;
if(dojo.hasClass(this.dojoWidget.domNode,"mblVariableHeight")){
dojo.removeClass(this.dojoWidget.domNode,"mblVariableHeight");
this._setIconStyle(false);
}
_f.innerHTML=this.text;
}
},"removeChildren":function(){
if(!this.children){
return;
}
if(this.dojoWidget&&this.textBox.childNodes.length>1){
for(var n=0;n<this.children.length;n++){
this._removeChild(this.children[n]);
}
}
this.children=[];
this._showText();
},"setText":function(_11){
this.text=_11;
if(this.dojoWidget){
this.dojoWidget.set("label",this.text);
}
},"getText":function(){
return this.text;
},"setImagePath":function(_12){
var _13=this;
_13.icon=_12;
require(["dojo/mobile/utility/Synchronor"],function(_14){
_14.wait([_13],"SYN_READY",function(){
if(_13.dojoWidget){
_13.dojoWidget.set({icon:_13.icon});
}
});
});
},"getImagePath":function(){
return this.icon;
},"setActionText":function(_15){
this.actionText=_15;
if(this.dojoWidget){
this.dojoWidget.set("rightText",_15);
var _16=this.dojoWidget.domNode.getElementsByTagName("div");
var _17;
for(var n=0;n<_16.length;n++){
if(_16[n].className=="mblListItemRightText"){
_17=_16[n];
break;
}
}
if(_17){
if(_15){
_17.innerHTML=_15;
}else{
_17.parentNode.removeChild(_17);
}
}else{
var txt=dojo.create("DIV");
txt.className="mblRightText";
txt.innerHTML=_15;
this.dojoWidget.domNode.getElementsByTagName("a")[0].appendChild(txt);
}
}
},"getActionText":function(){
return this.actionText;
},"_setMoveto":function(_1a){
if(this.dojoWidget){
this.dojoWidget.set("moveTo",_1a);
}else{
this.moveTo=_1a;
}
},"_getIconNode":function(){
var _1b=this.dojoWidget.domNode.getElementsByTagName("div");
var _1c;
for(var n=0;n<_1b.length;n++){
if(_1b[n].className=="mblListItemRightIcon"){
_1c=_1b[n];
break;
}
}
return _1c;
},"_setActionView":function(){
this.actionView._show();
this.moveTo=this.actionView.getID();
if(!this.moveTo){
this.actionView._addRef(this);
this.moveTo="stub";
}else{
this._setMoveto(this.moveTo);
}
},"setActionView":function(_1e){
var _1f=this;
_1f.actionView=_1e;
if(_1f.dojoWidget){
if(_1f.actionView){
var _20=_1f._getIconNode();
if(!_20){
var _21=dojo.create("div");
var _22=dojo.create("div");
_21.className="mblListItemRightIcon";
_22.className="mblDomButtonArrow mblDomButton";
var a=_1f.dojoWidget.domNode.getElementsByTagName("a")[0];
if(a.childNodes.length>1){
a.insertBefore(_21,a.childNodes[0]);
}else{
a.appendChild(_21);
}
_21.appendChild(_22);
_22.appendChild(dojo.create("div"));
var _24=_1f;
if(_24.onClick){
_1f.dojoWidget.connect(a,"onclick",_24.onClick);
}else{
_1f.dojoWidget.connect(a,"onclick",_24.dojoWidget.onClick);
}
}
_1f._setActionView();
}else{
var _20=_1f._getIconNode();
if(_20){
_1f.onClick=_1f.dojoWidget.onClick;
_1f.dojoWidget.onClick=function(){
};
_20.parentNode.removeChild(_20);
}
}
}else{
if(_1f.actionView){
_1f._setActionView();
}
}
},"getActionView":function(){
return this.actionView;
},"setActionTransition":function(_25){
this.transition=_25;
if(this.dojoWidget&&_25){
this.dojoWidget.set("transition",_25);
}
},"getActionTransition":function(){
return this.transition;
}});
