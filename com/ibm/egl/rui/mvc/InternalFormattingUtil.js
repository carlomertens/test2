egl.defineClass("com.ibm.egl.rui.mvc","InternalFormattingUtil",{"decimalValueIsValid":function(_1,_2,_3){
if(_1 instanceof egl.javascript.BigDecimal){
var _4="";
for(var _5=_2;_5>0;_5--){
_4+="9";
}
if(_3>0){
_4=_4.substring(0,_2-_3)+"."+_4.substring(_2-_3);
}
_4=new egl.javascript.BigDecimal(_4);
if(_1.scale()>_3){
_1=_1.setScale(_3,egl.javascript.BigDecimal.prototype.ROUND_DOWN);
}
if(_1.compareTo(_4)>0||_1.compareTo(_4.negate())<0){
return false;
}
}
return true;
},"getCurrencySymbol":function(){
return egl.getCurrencySymbol();
},"getDecimalSeparator":function(){
return egl.getDecimalSymbol();
},"getGroupingSeparator":function(){
return egl.getSeparatorSymbol();
},"getLongGregorianDateMask":function(){
if(!this.longGregorianDateMask){
var _6=egl.egl.core.$SysLib.getProperty("egl.datemask.gregorian.long."+egl.localeInfo.nlsCode,null);
if(_6=="short"){
this.longGregorianDateMask=egl.localeInfo.shortMask;
}else{
if(_6=="medium"){
this.longGregorianDateMask=egl.localeInfo.mediumMask;
}else{
if(_6=="long"){
this.longGregorianDateMask=egl.localeInfo.longMask;
}else{
if(this.isGregorianDateMask(_6)){
this.longGregorianDateMask=_6;
}else{
this.longGregorianDateMask="MM-dd-yyyy";
}
}
}
}
}
return this.longGregorianDateMask;
},"isGregorianDateMask":function(_7){
if(_7==null){
return false;
}
var _8="'";
var _9=0,_a=0,_b=0,_c=0;
var _d=false;
var _e=_7.length;
for(var i=0;i<_e;){
var ch=_7.charAt(i++);
if(ch==_8){
if(i<_e){
ch=_7.charAt(i);
if(ch==_8){
_c++;
i++;
continue;
}
}
_d=!_d;
continue;
}
if(_d){
_c++;
}else{
if(ch=="y"){
_9++;
}else{
if(ch=="M"){
_a++;
}else{
if(ch=="d"){
_b++;
}else{
if((ch>="a"&&ch<="z")||(ch>="A"&&ch<="Z")){
return false;
}else{
_c++;
}
}
}
}
}
}
return _b==2&&_a==2&&_9==4&&_c==2;
},"isValidDateInput":function(_11,_12){
if(_11==null||_12==null){
return false;
}
var _13=egl.stringToDateInternal(_11,_12,true);
return (_13!=null);
}});
