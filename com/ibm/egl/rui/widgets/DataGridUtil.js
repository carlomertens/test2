egl.eze$$dataGridID=1;
egl.defineClass("com.ibm.egl.rui.widgets","DataGridUtil",{"constructor":function(){
this.start=new Date().getTime();
this.selectionKey="eze$$selected_"+this.start;
this.checkedKey="eze$$checked_"+this.start;
this.HTMLBuffer=new Array();
this.htmlStringCount=0;
},"getUniqueID":function(){
return "eze$$grid"+egl.eze$$dataGridID++;
},"getTextWidth":function(s){
var _2=egl.createChild(document.body,"span");
_2.innerHTML=s;
var w=egl.getWidthInPixels(_2);
document.body.removeChild(_2);
return w;
},"getOriginalTarget":function(e){
var _5=e.srcElement||e.target;
return _5.eze$$widget||egl.createWidget(_5);
},"getIntAttribute":function(_6,_7){
return _6.eze$$DOMElement.getAttribute(_7)||0;
},"setSelected":function(_8,_9){
if(_8){
_8[this.selectionKey]=_9;
}
},"getSelected":function(_a){
return (_a?_a[this.selectionKey]==true:false);
},"setChecked":function(_b,_c){
if(_b){
_b[this.checkedKey]=_c;
}
},"getChecked":function(_d){
return (_d?_d[this.checkedKey]==true:false);
},"sort":function(_e,_f,up,ic,_12){
try{
var row=_e[0];
if(!row){
return (_e);
}
if(_e[0][_f]==null){
var _14=false;
for(var p in row){
if(p.toLowerCase()==_f.toLowerCase()){
_f=p;
_14=true;
break;
}
}
if(!_14){
return (_e);
}
}
_e.sort(function(a,b){
var _18;
var _19=(a[_f]!=null)?(a[_f].eze$$value!=null?a[_f].eze$$value:a[_f]):null;
var _1a=(b[_f]!=null)?(b[_f].eze$$value!=null?b[_f].eze$$value:b[_f]):null;
if(_19==null){
return 1;
}
if(_1a==null){
return -1;
}
if(ic){
if(_19.toLowerCase){
_19=_19.toLowerCase();
}
if(_1a.toLowerCase){
_1a=_1a.toLowerCase();
}
}
if(_12){
_18=_12(egl.boxAny(_19),egl.boxAny(_1a));
}else{
_18=_19.compareTo(_1a);
}
return up?_18:-_18;
});
return (_e);
}
catch(e){
egl.println(e.message);
throw egl.createRuntimeException("CRRUI2102E",[]);
}
},"getFieldNames":function(_1b){
result=[];
for(f in _1b){
if(egl.isUserField(_1b,f)){
result.push(f);
}
}
return result;
},"setBiDiMarkersStr":function(_1c,_1d,_1e){
var _1f="",_20="";
if(_1c.charAt(0)>=egl.LRE&&_1c.charAt(0)<=egl.RLO){
_1c=_1c.substring(1);
}
if(_1d){
_20=(_1e)?egl.RLO:egl.LRO;
}
_1c=_20+_1c+_1f;
return (_1c);
},"destroyHeaderCell":function(_21){
if(_21&&_21.eze$$DOMElement&&_21.eze$$DOMElement.children&&_21.eze$$DOMElement.children.length>0){
var _22=_21.eze$$DOMElement.children[0];
var tds=_22.getElementsByTagName("span");
var _24=tds.length;
var _25=[];
for(var i=0;i<_24;i++){
_25.push(tds[i]);
}
for(var i=0;i<_24;i++){
row=_25[i].getAttribute("row")||0;
column=_25[i].getAttribute("column")||0;
if(row<1&&column>=1){
egl.doDestroyDomElement(_25[i]);
}
}
}
}});
egl.com.ibm.egl.rui.widgets.DataGridUtil.dataGridCheckboxClick=function(id,_28){
try{
var _29=document.getElementById(id).eze$$widget.eze$$container;
while(_29.eze$$DOMElement.eze$$widget.RUIDataGridID!="RUIDataGridID"){
_29=_29.eze$$container;
}
_29=_29.eze$$DOMElement.eze$$widget;
if(_29!=null){
_29.checkSelection(egl.createWidget(_28));
}
}
catch(e){
egl.printError("Could not publish checkbox event",e);
}
return 0;
};
