define(["dojo/_base/declare","dojo/dom-style","dojox/mobile/Switch"],function(_1,_2,_3){
var _4=_1("ExtendedSwitch",[_3],{_createMaskImage:function(){
try{
this.inherited(arguments);
}
catch(ex){
var _5=_2.get(this.left,"borderTopLeftRadius");
if(_5==null){
return;
}else{
throw ex;
}
}
},});
return _4;
});
