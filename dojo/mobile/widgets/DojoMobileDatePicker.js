egl.defineWidget("dojo.mobile.widgets","DojoMobileDatePicker","dojo.mobile.widgets","DojoMobileBase","div",{"standardEvents":["click","mouseup","mouseover","mousemove","mouseout","change"],"touchEvents":[],"dateFormat":{selector:"date",datePattern:"yyyy-MM-dd"},"eglBaseClass":"eglMblDatePicker","constructor":function(){
var _1=this;
this.year=null;
this.month=null;
this.day=null;
this.datelocale=null;
require(["dojo/date/locale"],function(_2){
_1.datelocale=_2;
_1.renderWhenDojoIsDoneLoading();
});
},"createDojoWidget":function(_3,_4){
var _5=this,_6=this.datelocale,_7="",_8=new Date(),_9=[_8.getFullYear(),_8.getMonth()+1,_8.getDate()];
_5.dojoWidget={"domNode":_3};
_5.containerNode=_3;
require(["dojo/ready","dojo/dom-attr","dojo/_base/lang"],function(_a,_b,_c){
setTimeout(function(){
_a(function(){
_7=_6.format(_8,{datePattern:"MMM",selector:"date"});
if(_5.value instanceof Date){
_7=_6.format(_5.value,{datePattern:"MMM",selector:"date"});
_9=[_5.value.getFullYear(),_7,_5.value.getDate()];
}
if(_5.month){
_7=_5.datelocale.format(new Date(2012,_5.month-1),{datePattern:"MMM",selector:"date"});
_9[1]=_7;
}
if(_5.year){
_9[0]=_5.year;
}
if(_5.day){
_9[2]=_5.day;
}
_4.values=_9;
_5._addTabIndex(_3);
_5.dojoWidget=new dojox.mobile.SpinWheelDatePicker(_4,_3);
_5.dojoWidget.connect(_5.dojoWidget.slots[0],"onFlickAnimationEnd",_c.hitch(_5,_5._onChange));
_5.dojoWidget.connect(_5.dojoWidget.slots[1],"onFlickAnimationEnd",_c.hitch(_5,_5._onChange));
_5.dojoWidget.connect(_5.dojoWidget.slots[2],"onFlickAnimationEnd",_c.hitch(_5,_5._onChange));
_5.containerWidget=_5.dojoWidget;
_5.synchronor.trigger(_5,"SYN_READY");
_5.containerWidget._started=false;
_5.containerWidget.startup();
_5.synchronor.trigger(_5,"SYN_STARTUP");
_5.getValue();
});
},1);
});
},"_onChange":function(){
var _d=this,_e=_d.value,_f;
if(_d.dojoWidget&&_d.SYN_STARTUP){
_f=_d.dojoWidget.get("value");
if(_f){
_f=_d.datelocale.parse(_f,_d.dateFormat);
if((_f+"")!=(_e+"")){
_d.handleEvent(_d.getOnChange(),"onChange");
_d.value=_f;
}
}
}
},"setYear":function(_10){
var _11=this;
if(_10>=1970&&_10<2038){
_11.year=_10;
if(_11.dojoWidget){
_11.isSettingYear=true;
_11.dojoWidget.slots&&_11.dojoWidget.slots[0].set("value",_11.year);
}
}
},"setMonth":function(_12){
var _13=this;
_13.month=_12;
if(_13.datelocale&&_12>0&&_12<=12){
if(_13.dojoWidget){
_13.isSettingMonth=true;
_13.month=_13.datelocale.format(new Date(_13.year,_12-1),{datePattern:"MMM",selector:"date"});
_13.dojoWidget.slots&&_13.dojoWidget.slots[1].set("value",_13.month);
}
}
},"setDay":function(_14){
var _15=this;
if(_14>=1&&_14<=31){
_15.day=_14;
if(_15.dojoWidget){
_15.isSettingDay=true;
_15.dojoWidget.slots&&_15.dojoWidget.slots[2].set("value",_15.day);
}
}
},"setValue":function(_16){
var _17=this;
if(_16 instanceof Date){
_17.value=_16;
if(_17.dojoWidget){
_17.isSettingValue=true;
_17.setYear(_16.getFullYear());
_17.setMonth(_16.getMonth());
_17.setDay(_16.getDate());
}
}
},"getValue":function(){
var _18=this,_19="";
if(_18._isShowing()){
_19=_18.dojoWidget.get("value");
}else{
_19=_18.getYear()+"-"+_18.getMonth()+"-"+_18.getDay();
}
if(_18.datelocale){
_18.value=_18.datelocale.parse(_19,_18.dateFormat);
}
return _18.value;
},"_isShowing":function(){
return this.dojoWidget&&this.dojoWidget.domNode&&this.dojoWidget.domNode.offsetHeight>=1&&this.dojoWidget.domNode.offsetWidth>=1;
},"getYear":function(){
if(this._isShowing()){
var _1a=this.dojoWidget.get("value");
return _1a?_1a.split("-")[0]:this.year;
}
return this.year;
},"getMonth":function(){
if(this._isShowing()){
var _1b=this.dojoWidget.get("value");
return _1b?_1b.split("-")[1]:this.month;
}
return this.month;
},"getDay":function(){
if(this._isShowing()){
var _1c=this.dojoWidget.get("value");
return _1c?_1c.split("-")[2]:this.day;
}
return this.day;
},"reset":function(){
var _1d=this;
require(["dojo/mobile/utility/Synchronor"],function(_1e){
_1e.wait([_1d],"SYN_STARTUP",function(){
var _1f=new Date();
if(_1d.dojoWidget){
_1d.dojoWidget.reset();
}
_1d.year=_1f.getFullYear();
_1d.day=_1f.getDay();
_1d.value=_1f;
if(_1d.datelocale){
_1d.month=_1d.datelocale.format(_1f,{datePattern:"MMM",selector:"date"});
}else{
_1d.month=Date.getMonth();
}
});
});
}});
