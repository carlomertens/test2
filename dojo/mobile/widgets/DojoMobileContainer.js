egl.defineWidget("dojo.mobile.widgets","DojoMobileContainer","dojo.mobile.widgets","DojoMobileBase","div",{"_appendChild":function(_1,_2){
var _3=this._getContainerWidget(_2);
var _4=this.eze$$DOMElement;
if(!_3){
throw egl.createRuntimeException("Can't append child to this dojoWidget. The dojoWidget has not been created.",[_4.tagName]);
}
_4=_3.domNode;
if(!_1){
throw egl.createRuntimeException("Can't append a null child.",[_4.tagName]);
}
if(_1==this){
throw egl.createRuntimeException("Can't append the widget itself as a child.",[_4.tagName]);
}
var _5=_1.eze$$DOMElement;
if(!_5){
throw egl.createRuntimeException("The child node does not exist.",[_4.tagName]);
}
try{
_1.eze$$parent=this;
}
catch(e){
throw egl.createRuntimeException("Append child error.",[_1.getTagName(),egl.inferSignature(this),this]);
}
_4.appendChild(_5);
if(_1 instanceof egl.dojo.mobile.widgets.DojoMobileBase){
_1.startup();
}
this.childrenChanged();
},"checkChildrenType":function(_6){
var _7=this;
var _8=true;
if(!_6&&_7.children&&_7.children.length>0&&_7.acceptChildrenTypes){
for(var i=0;i<_7.children.length;++i){
var _a=_7.children[i];
if((_a.eze$$package+"."+_a.eze$$typename) in _7.acceptChildrenTypes&&_7.acceptChildrenTypes[(_a.eze$$package+"."+_a.eze$$typename)]){
continue;
}else{
var _b=_7.id||(_7.dojoWidget&&_7.dojoWidget.id);
var _c=_a.id||(_a.dojoWidget&&_a.dojoWidget.id);
_b=_b?(_b+" "):"";
_c=_c?(_c+" "):"";
_7.log("<b>Warning: </b>"+_7.eze$$package+"."+_7.eze$$typename+" "+_b+"don't support child "+_c+"of type "+_a.eze$$package+"."+_a.eze$$typename+"<br>");
_8=false;
_7.children.splice(i,1);
--i;
}
}
}else{
if(_6&&_7.acceptChildrenTypes){
if((_6.eze$$package+"."+_6.eze$$typename) in _7.acceptChildrenTypes&&_7.acceptChildrenTypes[(_6.eze$$package+"."+_6.eze$$typename)]){
_8=true;
}else{
var _b=_7.id||(_7.dojoWidget&&_7.dojoWidget.id);
var _d=_6.id||(_6.dojoWidget&&_6.dojoWidget.id);
_b=_b?(_b+" "):"";
_d=_d?(_d+" "):"";
_7.log("<b>Warning: </b>"+_7.eze$$package+"."+_7.eze$$typename+" "+_b+"can't contain child "+_d+"of "+_a.eze$$package+"."+_a.eze$$typename+"<br>",true);
_8=false;
}
}
}
return _8;
},"appendChild":function(_e,_f){
if(!_e||!this.checkChildrenType(_e)){
return;
}
var _10=this._getContainerWidget(_f);
this.children=this.children||[];
this.children.push(_e);
if(_10){
this._appendChild(_e,_10);
}
},"appendChildren":function(_11,_12){
var _13=this._getContainerWidget(_12);
this.children=this.children||[];
this.checkChildrenType();
for(var n=0;n<_11.length;n++){
this.children.push(_11[n]);
if(_13){
this._appendChild(_11[n],_13);
}
}
},"setChildren":function(_15,_16){
var _17=this._getContainerWidget(_16);
_15=this.getShallowCopy(_15);
if(_17){
this.removeChildren(_17);
this.children=_15;
this.checkChildrenType();
if(_15){
for(var n=0;n<_15.length;n++){
this._appendChild(_15[n],_17);
}
}
}else{
this.children=_15;
this.checkChildrenType();
}
},"getChildren":function(){
return this.children;
},"_removeChild":function(_19,_1a){
var _1b=this._getContainerWidget(_1a);
if(!(_1b.domNode)){
alert("no dom");
}
for(var i=0;i<_1b.domNode.childNodes.length;++i){
if(_1b.domNode.childNodes[i]==_19.eze$$DOMElement){
_1b.domNode.removeChild(_19.eze$$DOMElement);
}
}
},"removeChild":function(_1d,_1e){
var _1f=this._getContainerWidget(_1e);
if(!this.children){
return;
}
for(var n=0;n<this.children.length;n++){
if(this.children[n]==_1d){
this.children.splice(n,1);
if(_1f){
this._removeChild(_1d,_1f);
}
return;
}
}
throw this.eze$$typename+".removeChild: the child is not found.";
},"removeChildren":function(_21){
this._removeChildren(0,_21);
},"_removeChildren":function(_22,_23){
if(!this.children){
return;
}
var _24=this._getContainerWidget(_23);
if(_24&&_24.domNode&&_24.domNode.childNodes.length>_22){
for(var n=0;n<this.children.length;n++){
this._removeChild(this.children[n],_24);
}
}
this.children=[];
},"_getContainerWidget":function(_26){
return _26?_26:(this.containerWidget?this.containerWidget:this.dojoWidget);
}});
