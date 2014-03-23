egl.defineClass("com.ibm.egl.rui.widgets","UtilLibNative",{"getWidgetVariableName":function(_1){
if(_1!=null&&_1.eze$$variableName!=undefined){
return _1.eze$$variableName;
}
return "";
},"destroyWidget":function(_2){
egl.destroyWidget(_2);
},"destroyWidgetChildren":function(_3){
egl.destroyWidgetChildren(_3);
},"destroyRUIHandler":function(_4){
if(_4==null){
return;
}
if(_4.eze$$superClass==egl.egl.ui.rui.View){
egl.destroyRUIHandler(_4);
}else{
throw egl.createRuntimeException("CRRUI2007E",["UtilLib.destroyRUIHandler("+_4+")"]);
}
},"clearHTMLString":function(){
this.HTMLBuffer=[];
this.htmlStringCount=0;
},"appendHTMLString":function(_5){
this.HTMLBuffer[this.htmlStringCount++]=_5;
},"getHTMLString":function(){
return this.HTMLBuffer.join("");
}});
