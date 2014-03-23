define(["dojo/_base/declare","dojo/_base/lang","dojox/mobile/_DatePickerMixin","dojox/mobile/SpinWheelDatePicker","dojox/mobile/SpinWheelSlot","dojo/mobile/utility/DisplayController","dojo/ready","dojo/has","dojox/mobile/SpinWheel","dojox/mobile/ListItem","dojo/on","dojo/_base/sniff","dojo/dom-class","dojo/dom-construct","dojox/mobile/iconUtils","dojox/mobile/View","dojo/_base/array","dojo/_base/connect"],function(_1,_2,_3,_4,_5,dc,_7,_8,sw,li,on,_8,_c,_d,_e,_f,_10,_11){
_f.extend({"startup":function(){
if(this._started){
return;
}
if(this._visible===undefined){
var _12=this.getSiblingViews();
var ids=location.hash&&location.hash.substring(1).split(/,/);
var _14,_15,_16;
_10.forEach(_12,function(v,i){
if(_10.indexOf(ids,v.id)!==-1){
_14=v;
}
if(i==0){
_16=v;
}
if(v.selected){
_15=v;
}
v._visible=false;
},this);
(_14||_15||_16)._visible=true;
}
if(this._visible){
this.show(true,true);
this.defer(function(){
this.onStartView();
_11.publish("/dojox/mobile/startView",[this]);
});
}
if(this.domNode.className.indexOf("eglMblView")<0&&this.domNode.style.visibility!="visible"){
this.domNode.style.visibility="visible";
}
this.inherited(arguments);
var _19=this.getParent();
if(!_19||!_19.resize){
this.resize();
}
if(!this._visible){
this.hide();
}
}});
sw.extend({"startup":function(){
var _1a=this,_1b=false,_1c=true,_1d=this.domNode.parentNode;
if(this._started){
return;
}
this.centerPos=Math.round(this.domNode.offsetHeight/2);
if(this.centerPos<=0&&!_1a._eglAdjusted){
_1c=dc.isInDomTree(this.domNode);
if(_1c){
_1b=dc.checkOffsetHeightZeroForDisplayNone(_1a.domNode,_1a,true);
if(_1b){
dc.makeVisibilityHidden(_1a);
_1a._eglAdjusted=true;
}else{
dc.switchToInvisibleEle(_1a.domNode);
_1a._eglAdjusted=true;
_1c=false;
}
}else{
dc.switchToInvisibleEle(_1a.domNode);
_1a._eglAdjusted=true;
}
this.centerPos=Math.round(this.domNode.offsetHeight/2);
}
this.inherited(arguments);
if(!_1c){
dc.switchBack(this.domNode,_1d);
_1a._eglAdjusted=false;
}else{
if(_1b&&_1a._eglAdjusted){
dc.makeDisplayNone(_1a);
_1a._eglAdjusted=false;
}
}
}});
_5.extend({"startup":function(){
var _1e=this;
var _1f=_1e.getParent();
if(_1e._started){
return;
}
_1e._eglAdjusted=dc.checkOffsetHeightZeroForDisplayNone(_1f.domNode,_1e,true);
if(_1e._eglAdjusted){
dc.makeVisibilityHidden(_1e);
}
_1e.inherited(arguments);
_1e.noResize=true;
if(_1e.items.length>0){
_1e.init();
_1e.centerPos=_1e.getParent().centerPos;
var _20=_1e.panelNodes[1].childNodes;
_1e._itemHeight=_20[0].offsetHeight;
_1e.adjust();
_1e.connect(_1e.domNode,"onkeydown","_onKeyDown");
}
if(_8("windows-theme")){
_1e.previousCenterItem=_1e.getCenterItem();
if(_1e.previousCenterItem){
_c.add(_1e.previousCenterItem,"mblSelectedSlotItem");
}
}
if(_1e._eglAdjusted){
dc.makeDisplayNone(_1e);
}
},"_spinToValue":function(_21,_22){
var _23=this;
if(_23._eglAdjusted){
dc.makeVisibilityHidden(_23);
}
var _24,_25;
var _26=this.get("value");
if(!_26){
_23._pendingValue=_21;
return;
}
if(_26==_21){
return;
}
_23._pendingValue=undefined;
if(_22){
_23._set("value",_21);
}
var n=_23.items.length;
for(var i=0;i<n;i++){
if(_23.items[i][1]===String(_26)){
_24=i;
}
if(_23.items[i][1]===String(_21)){
_25=i;
}
if(_24!==undefined&&_25!==undefined){
break;
}
}
var d=_25-(_24||0);
var m;
if(d>0){
m=(d<n-d)?-d:n-d;
}else{
m=(-d<n+d)?-d:-(n+d);
}
_23.spin(m);
if(_23._eglAdjusted){
dc.makeDisplayNone(_23);
}
}});
li.extend({"startup":function(){
var _2b=this;
if(this._started){
return;
}
_2b.adjusted=dc.checkOffsetHeightZeroForDisplayNone(_2b.domNode,_2b,true);
if(_2b.adjusted){
dc.makeVisibilityHidden(_2b);
}
var _2c=this.getParent();
var _2d=this.getTransOpts();
if((!this._templated||this.labelNode)&&this.anchorLabel){
this.labelNode.style.display="inline";
this.labelNode.style.cursor="pointer";
this.connect(this.labelNode,"onclick","_onClick");
this.onTouchStart=function(e){
return (e.target!==this.labelNode);
};
}
if(_2d.moveTo||_2d.href||_2d.url||this.clickable||(_2c&&_2c.select)){
this.connect(this.domNode,"onkeydown","_onClick");
}else{
this._handleClick=false;
}
this.inherited(arguments);
if(_c.contains(this.domNode,"mblVariableHeight")){
this.variableHeight=true;
}
if(this.variableHeight){
_c.add(this.domNode,"mblVariableHeight");
this.defer("layoutVariableHeight");
}
if(!this._isOnLine){
this._isOnLine=true;
this.set({icon:this._pending_icon!==undefined?this._pending_icon:this.icon,deleteIcon:this._pending_deleteIcon!==undefined?this._pending_deleteIcon:this.deleteIcon,rightIcon:this._pending_rightIcon!==undefined?this._pending_rightIcon:this.rightIcon,rightIcon2:this._pending_rightIcon2!==undefined?this._pending_rightIcon2:this.rightIcon2,uncheckIcon:this._pending_uncheckIcon!==undefined?this._pending_uncheckIcon:this.uncheckIcon});
delete this._pending_icon;
delete this._pending_deleteIcon;
delete this._pending_rightIcon;
delete this._pending_rightIcon2;
delete this._pending_uncheckIcon;
}
if(_2c&&_2c.select){
this.set("checked",this._pendingChecked!==undefined?this._pendingChecked:this.checked);
domAttr.set(this.domNode,"role","option");
if(this._pendingChecked||this.checked){
domAttr.set(this.domNode,"aria-selected","true");
}
delete this._pendingChecked;
}
this.setArrow();
this.layoutChildren();
if(_2b.adjusted){
dc.makeDisplayNone(_2b);
}
}});
});
