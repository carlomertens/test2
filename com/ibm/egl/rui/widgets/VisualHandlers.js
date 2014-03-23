egl.defineClass("com.ibm.egl.rui.widgets","VisualHandlers",{"ReverseText":function(_1){
reverseText(_1.eze$$DOMElement);
},"BidiReorder":function(_2,_3,_4){
return doBidiReorder(_2,_3,_4);
},"AttachHandlers":function(_5){
if(_5.textLayoutThis=="Visual"){
if(!_5.eze$$DOMElement.maxLength||_5.eze$$DOMElement.maxLength<0||_5.eze$$DOMElement.maxLength>10000000){
_5.eze$$DOMElement.maxLength=10000000;
}
_5.eze$$DOMElement.maxLength++;
if(_5.eze$$DOMElement.tagName=="TEXTAREA"){
_5.eze$$DOMElement.style.overflow="hidden";
if(egl.IE){
_5.eze$$DOMElement.style.wordWrap="normal";
}else{
_5.eze$$DOMElement.setAttribute("wrap","off");
}
}
egl.addEventListener(_5.eze$$DOMElement,"copy",handleCopy,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"cut",handleCut,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"paste",handlePaste,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"dblclick",handleDblClick,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"mousedown",handleMouseDown,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"mouseup",handleMouseUp,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"blur",handleBlur,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"focus",handleFocus,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"mouseout",handleMouseOut,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"keydown",handleKeyDown,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"keyup",handleKeyUp,_5.eze$$DOMElement);
egl.addEventListener(_5.eze$$DOMElement,"keypress",handleKeyPress,_5.eze$$DOMElement);
}else{
egl.removeEventListener(_5.eze$$DOMElement,"copy",handleCopy);
egl.removeEventListener(_5.eze$$DOMElement,"cut",handleCut);
egl.removeEventListener(_5.eze$$DOMElement,"paste",handlePaste);
egl.removeEventListener(_5.eze$$DOMElement,"dblclick",handleDblClick);
egl.removeEventListener(_5.eze$$DOMElement,"mousedown",handleMouseDown);
egl.removeEventListener(_5.eze$$DOMElement,"mouseup",handleMouseUp);
egl.removeEventListener(_5.eze$$DOMElement,"blur",handleBlur);
egl.removeEventListener(_5.eze$$DOMElement,"focus",handleFocus);
egl.removeEventListener(_5.eze$$DOMElement,"mouseout",handleMouseOut);
egl.removeEventListener(_5.eze$$DOMElement,"keydown",handleKeyDown);
egl.removeEventListener(_5.eze$$DOMElement,"keyup",handleKeyUp);
egl.removeEventListener(_5.eze$$DOMElement,"keypress",handleKeyPress);
}
}});
var CODE_BACKSPACE=8;
var CODE_TAB=9;
var CODE_ENTER=13;
var CODE_PAGEUP=33;
var CODE_PAGEDOWN=34;
var CODE_END=35;
var CODE_HOME=36;
var CODE_ARROWLEFT=37;
var CODE_ARROWRIGHT=39;
var CODE_ARROWUP=38;
var CODE_ARROWDOWN=40;
var CODE_INSERT=45;
var CODE_DELETE=46;
var CODE_A=65;
var CODE_Z=90;
var CODE_CTRL=17;
var adjustCaretOnKeyUp=false;
var isFldreversed=false;
var curPos=1;
var selectionStart;
var autoPush=false;
var pushMode=false;
var rightPushBound=0;
var leftPushBound=0;
var layerGuess=false;
var swapChar=0;
var hadnoFocus=true;
var preventAltNumpad=false;
var isOverwriteMozilla=false;
var isArabic=false;
var isLinux=false;
var isIE=false;
var fieldStart=0;
var CR;
var hint;
var LF="\n";
var Reorderer=null;
isLinux=(navigator.platform.indexOf("Linux")!=-1)?true:false;
if(isLinux){
if(navigator.appName.indexOf("Netscape")==-1){
alert("Use Firefox/Mozilla browser");
}else{
index=navigator.userAgent.indexOf("Netscape/");
if((index>0)&&(parseInt(navigator.userAgent.substring(index+9,index+10))<7)){
alert("To have full Bidi support use Netscape version 8 or above");
}
}
}
CR=(egl.IE)?"\r\n":"\n";
isArabic=false;
var hint;
if(egl.IE){
var hint=document.createElement("<div dir='ltr' id='hint' style=\"BACKGROUND-COLOR: rgb(255,255,128); COLOR: black; BORDER-BOTTOM-STYLE: groove; BORDER-LEFT-STYLE: groove; BORDER-RIGHT-STYLE: groove; BORDER-TOP-STYLE: groove; FONT-FAMILY: serif; FONT-SIZE: xx-small; HEIGHT: 100px; LEFT: 1px; POSITION: absolute; TOP: 1px; VISIBILITY: hidden; WIDTH: 320px; Z-INDEX: 1\"></div>");
hint.innerText="Field reverse-'Alt+Numpad Numlock'\nAuto push-'Alt+Numpad /'\nPush on-'Shift+Numpad Numlock'\nPush off-'Shift+Numpad /'";
}else{
hint=document.createElement("div");
hint.setAttribute("dir","ltr");
hint.setAttribute("id","hint");
hint.setAttribute("style","BACKGROUND-COLOR: rgb(255,255,128); COLOR: black; BORDER-BOTTOM-STYLE: groove; BORDER-LEFT-STYLE: groove; BORDER-RIGHT-STYLE: groove; BORDER-TOP-STYLE: groove; FONT-FAMILY: serif; FONT-SIZE: small; HEIGHT: 100px; LEFT: 1px; POSITION: absolute; TOP: 1px; VISIBILITY: hidden; WIDTH: 320px; Z-INDEX: 1");
if(isLinux){
hint.innerHTML="Field reverse-'Shift+Numpad 4'<br>Auto push-'Shift+Numpad 6'<br>Push on-'Shift+Numpad 7'<br>Push off-'Shift+Numpad 8'";
}else{
hint.innerHTML="Field reverse-'Alt+Numpad Numlock'<br>Auto push-'Alt+Numpad /'<br>Push on-'Shift+Numpad Numlock'<br>Push off-'Shift+Numpad /'";
}
}
var body=document.getElementsByTagName("BODY");
body[0].appendChild(hint);
function isOverWriteMode(){
if(egl.IE){
return document.queryCommandValue("OverWrite");
}else{
return isOverwriteMozilla;
}
};
function doBidiReorder(_6,_7,_8){
if(_7==_8){
return _6;
}
var _9=_7.substring(0,1);
var _a=_7.substring(1,4);
var _b=_8.substring(0,1);
var _c=_8.substring(1,4);
if((_9=="L")&&(_b=="V")&&(_c=="LTR")){
if(_a=="LTR"){
return reorderTextLTR(null,_6,false);
}
if(_a=="RTL"){
return reorderTextRTL(null,_6,false);
}
}
if((_9=="V")&&(_b=="V")){
return invertStr(_6);
}
if((_9=="L")&&(_b=="V")&&(_c=="RTL")){
if(_a==LTR){
_6=reorderTextLTR(null,_6,false);
}else{
_6=reorderTextRTL(null,_6,false);
}
return invertStr(_6);
}
if((_9=="V")&&(_a=="LTR")&&(_b=="L")&&(_c=="LTR")){
return reorderTextLTR(null,_6,false);
}
if((_9=="V")&&(_b=="L")&&(_a!=_c)){
_6=invertStr(_6);
if(_a="RTL"){
return doBidiReorder(_6,"LLTR","VLTR");
}else{
return doBidiReorder(_6,"LRTL","VRTL");
}
}
if((_9=="V")&&(_b=="L")&&(_a=="RTL")&&(_c=="RTL")){
return doBidiReorder(_6,"LRTL","VRTL");
}
if((_9=="L")&&(_b=="L")&&(_a!=_c)){
if(_a=="RTL"){
_6=reorderTextRTL(null,_6,false);
return doBidiReorder(_6,"VLTR","LLTR");
}else{
_6=reorderTextLTR(null,_6,false);
return doBidiReorder(_6,"VLTR","LRTL");
}
}
};
function reorderTextLTR(_d,_e,_f){
Reorderer=new JSReorder(0);
return reorderText(_d,_e,_f);
};
function reorderTextRTL(obj,_11,_12){
Reorderer=new JSReorder(1);
return reorderText(obj,_11,_12);
};
function reorderText(obj,_14,_15){
if(Reorderer==null){
Reorderer=new JSReorder(0);
}
var _16="";
if(_15&&((obj!=null)&&(obj.style.direction=="rtl"))){
var len=_14.length;
for(i=0;i<len;i++){
symbol=_14.charAt(len-i-1);
symbol=doSymSwap(symbol);
_16+=symbol;
}
}else{
_16=_14;
}
_16=Reorderer.doReorder(_16);
if(!_15&&((obj!=null)&&(obj.style.direction=="rtl"))){
var len=_14.length;
_14=_16;
_16="";
for(i=0;i<len;i++){
symbol=_14.charAt(len-i-1);
symbol=doSymSwap(symbol);
_16+=symbol;
}
}
return _16;
};
function processCopy(obj){
var _19;
if(egl.IE){
var _1a=document.selection.createRange();
_19=_1a.text;
}else{
_19=obj.value.substring(obj.selectionStart,obj.selectionEnd);
}
if((_19.charAt(0)==egl.LRO)||(_19.charAt(0)==egl.RLO)){
_19=_19.substring(1);
}
var _1b=reorderText(obj,_19,true);
if(egl.IE){
window.clipboardData.setData("Text",_1b);
return true;
}
};
function ajustCaretPositions(_1c,obj){
if((fieldStart>0)&&(selectionStart==curPos)){
preventEraseMarker(obj);
var _1e=getCaretPos(_1c,obj);
if(_1e){
selectionStart=Math.min(_1e[0],_1e[1]);
curPos=Math.max(_1e[0],_1e[1]);
}
}
};
function handleSelect(e){
var obj=this;
if(egl.IE){
if(document.selection.createRange().text.length==obj.value.length){
e=window.event;
handleDblClick(e);
preventDefault(e);
}
}else{
if((obj.selectionEnd-obj.selectionStart)==obj.value.length){
handleDblClick(e);
preventDefault(e);
}
}
};
function handleCopy(e){
if(egl.IE){
e=window.event;
preventDefault(e);
ajustCaretPositions(e,this);
return processCopy(this);
}
};
function handleCut(e){
var obj=this;
ajustCaretPositions(e,obj);
if(pushMode){
if(egl.IE){
leftPushBound-=Math.abs(selectionStart-curPos);
}else{
leftPushBound-=Math.abs(obj.selectionStart-obj.selectionEnd);
}
}
var ret=processCopy(obj);
if(!ret){
return false;
}
if(egl.IE){
e=window.event;
curPos=Math.min(selectionStart,curPos);
selectionStart=curPos;
preventDefault(e);
var _25=document.selection.clear();
}else{
curPos=obj.selectionStart;
obj.value=obj.value.substring(0,curPos)+obj.value.substring(obj.selectionEnd);
obj.setSelectionRange(curPos,curPos);
}
return true;
};
function handlePaste(e){
if(egl.IE){
e=window.event;
var obj=this;
ajustCaretPositions(e,obj);
preventDefault(e);
var _28=document.selection.createRange();
var _29=window.clipboardData.getData("Text");
selectionStart=Math.min(selectionStart,curPos);
_28.text=reorderText(obj,_29,false);
selectionStart=curPos=selectionStart+_29.length;
if(fieldStart>0){
adjustCaretOnKeyUp=true;
}
if(pushMode){
toggleFieldOrient(obj,true,false);
}
}
};
function handleDblClick(e){
var obj=this;
if(!obj.type&&egl.IE){
obj=e.srcElement;
}
fieldStart=(obj.type.toLowerCase()=="textarea")?0:1;
selectionStart=fieldStart;
curPos=obj.value.length;
if(pushMode){
toggleFieldOrient(obj,false,false);
pushMode=false;
}
setSelectedRange(obj,selectionStart,curPos);
preventDefault(e);
};
function getCaretPos(_2c,obj){
if(!egl.IE){
return new Array(_2c.target.selectionStart,_2c.target.selectionEnd);
}else{
var _2e=document.selection.createRange().duplicate();
var _2f=_2e.duplicate();
var _30=_2e.text.length;
if(obj.type=="textarea"){
_2f.moveToElementText(obj);
}else{
_2f.expand("textedit");
}
var _31=_2f.offsetLeft==_2e.offsetLeft;
while(_2e.compareEndPoints("StartToStart",_2f)>0){
_2e.moveStart("character",-1);
}
var _32=_2e.text.length;
if(obj.type=="textarea"&&(obj.value.charAt(_32)=="\r")){
if(((_2c.type!="mouseup"||_30==0)&&_31)||(_2c.type=="mouseup"&&!_31&&(_2c.offsetX<5)&&(_2c.offsetX>0))){
_32+=2;
}
}
return new Array(_32-_30,_32);
}
};
function handleMouseDown(e){
if(egl.IE){
e=window.event;
fieldStart=(this.type=="textarea")?0:1;
if(selectionStart!=curPos){
setSelectedRange(this,fieldStart,fieldStart);
}
}
if(e.button==2){
var _34=document.getElementById("hint");
if(_34!=null){
var _35=(_34.length>0)?_34[0]:_34;
_35.style.left=((e.clientX>=_34.scrollWidth)?(e.clientX-_34.scrollWidth):0)+"px";
_35.style.top=e.clientY+"px";
_35.style.visibility="visible";
}
}
};
function handleMouseUp(e){
var _37=document.getElementById("hint");
if(_37!=null){
if(_37.length>0){
_37[0].style.visibility="hidden";
}else{
_37.style.visibility="hidden";
}
}
if(egl.IE){
e=window.event;
}
obj=this;
var _38=getCaretPos(e,obj);
if(_38&&(!egl.IE||e.button!=2)){
selectionStart=Math.min(_38[0],_38[1]);
curPos=Math.max(_38[0],_38[1]);
if(fieldStart>0&&selectionStart==0){
if(egl.IE){
var rng=document.selection.createRange();
rng.moveStart("character",fieldStart);
selectionStart=fieldStart;
if(curPos==0){
curPos=fieldStart;
}
rng.select();
}else{
if(curPos!=selectionStart){
obj.setSelectionRange(selectionStart+1,curPos);
}else{
obj.setSelectionRange(selectionStart+1,curPos+1);
}
}
}
}
if(pushMode&&((curPos>leftPushBound)||(selectionStart<rightPushBound))){
toggleFieldOrient(obj,true,false);
}
};
function handleContextmenu(e,obj){
if(egl.IE){
try{
obj=this;
e=window.event;
var _3c=getCaretPos(e,obj);
if(_3c){
selectionStart=Math.min(_3c[0],_3c[1]);
curPos=Math.max(_3c[0],_3c[1]);
}
}
catch(_e){
}
}
};
function handleBlur(){
var obj=this;
if(!isLinux||!preventAltNumpad){
if(pushMode){
toggleFieldOrient(obj,false,false);
pushMode=false;
}
if(isFldreversed){
processFieldReverse(obj,false);
}
}
};
function handleFocus(){
var obj=this;
var _3f=obj.value;
isFldreversed=false;
fieldStart=(obj.type=="textarea")?0:1;
if(egl.IE){
e=window.event;
var _40=getCaretPos(e,obj);
if(_40){
selectionStart=Math.min(_40[0],_40[1]);
curPos=Math.max(_40[0],_40[1]);
if(selectionStart==0&&fieldStart>0){
var rng=document.selection.createRange();
rng.moveStart("character",fieldStart);
rng.select();
selectionStart=curPos=fieldStart;
}
}
}
if(_3f.length==0){
obj.style.textAlign=(obj.style.direction=="ltr")?"left":"right";
}
if(isLinux&&(curPos>0)){
obj.setSelectionRange(curPos,curPos);
}
};
function handleMouseOut(){
var _42=document.getElementById("hint");
if(_42!=null){
if(_42.length>0){
_42[0].style.visibility="hidden";
}else{
_42.style.visibility="hidden";
}
}
};
function swapBrackets(_43,_44,_45){
if(isLinux){
if(_44^(layerGuess&&!isArabic)){
if(_45==40){
_45=41;
}else{
if(_45==41){
_45=40;
}else{
if(_45==60){
_45=62;
}else{
if(_45==62){
_45=60;
}else{
if(_45==91){
_45=93;
}else{
if(_45==93){
_45=91;
}else{
if(_45==123){
_45=125;
}else{
if(_45==125){
_45=123;
}
}
}
}
}
}
}
}
}
return _45;
}else{
if(!_44&&layerGuess){
if(swapChar==219){
if(!this.isArabic){
_45=(_43.shiftKey)?123:91;
}
}else{
if(swapChar==221){
if(!this.isArabic){
_45=(_43.shiftKey)?125:93;
}
}else{
if(_43.shiftKey&&(swapChar==48)){
_45=41;
}else{
if(_43.shiftKey&&(swapChar==57)){
_45=40;
}else{
if(!this.isArabic&&_43.shiftKey&&(swapChar==188)){
_45=60;
}else{
if(!this.isArabic&&_43.shiftKey&&(swapChar==190)){
_45=62;
}else{
if(this.isArabic){
if(swapChar==68){
_45=91;
}else{
if(swapChar==70){
_45=93;
}
}
if(swapChar==67){
_45=123;
}else{
if(swapChar==86){
_45=125;
}
}
}
}
}
}
}
}
}
}else{
if(_44&&!layerGuess){
if(swapChar==219){
_45=(_43.shiftKey)?125:93;
}else{
if(swapChar==221){
_45=(_43.shiftKey)?123:91;
}else{
if(_43.shiftKey&&(swapChar==48)){
_45=40;
}else{
if(_43.shiftKey&&(swapChar==57)){
_45=41;
}else{
if(_43.shiftKey&&(swapChar==188)){
_45=62;
}else{
if(_43.shiftKey&&(swapChar==190)){
_45=60;
}
}
}
}
}
}
}else{
if(this.isArabic&&_44&&layerGuess){
if(swapChar==219){
_45=62;
}else{
if(swapChar==221){
_45=60;
}
}
}
}
}
}
swapChar=0;
return _45;
};
function handleKeyPress(e){
if(egl.IE){
e=window.event;
}
var obj=this;
if(preventAltNumpad||(e.returnValue==false)){
preventDefault(e);
return;
}
var _48=null;
var _49;
var _4a=_49=(obj.style.direction=="rtl");
if(egl.IE){
e.keyCode=swapBrackets(e,_49,e.keyCode);
ieKey=e.keyCode;
if(isArabic&&layerGuess&&(ieKey>47)&&(ieKey<58)){
ieKey=e.keyCode=ieKey+1584;
}
}else{
ieKey=e.charCode;
if(e.keyCode==CODE_INSERT){
isOverwriteMozilla=!isOverwriteMozilla;
}else{
if((ieKey>31)&!e.altKey&!e.ctrlKey){
charCode=swapBrackets(e,_49,e.charCode);
if(charCode!=ieKey){
_48=charCode;
}else{
if(isArabic&&layerGuess&&(ieKey>47)&&(ieKey<58)){
_48=ieKey+1584;
}
}
}
}
}
if((e.keyCode==CODE_ENTER)&&(obj.rows==1)){
preventDefault(e);
return;
}
if(!egl.IE&&((e.keyCode==8)||(e.keyCode==46))){
return;
}
if(((ieKey>64)&(ieKey<91))||((ieKey>96)&(ieKey<123))){
layerGuess=_4a=false;
}else{
if(ieKey>1487){
layerGuess=_4a=true;
isArabic=(ieKey>1547)?true:false;
}else{
if(ieKey==32){
_4a=layerGuess;
}else{
if(_49&&((ieKey>47)&&(ieKey<58))){
_4a=false;
}
}
}
}
if(autoPush){
if(_49!=_4a){
curPos=(egl.IE)?curPos:obj.selectionEnd;
toggleFieldOrient(obj,true,pushMode&&(curPos==leftPushBound));
}
}
if((ieKey>31)&&!e.altKey&&!e.ctrlKey){
preventEraseMarker(obj);
var _4b=(egl.IE)?curPos:obj.selectionStart;
var _4c=(egl.IE)?Math.abs(selectionStart-curPos):obj.selectionEnd-obj.selectionStart;
if(!isOverWriteMode()||(_4c>0)){
if(obj.value.length-_4c>=obj.maxLength){
preventDefault(e);
return;
}
}else{
if(_4b>=obj.maxLength){
preventDefault(e);
return;
}
}
if(pushMode){
if(!isOverWriteMode()||(leftPushBound==_4b)||(_4c>0)){
leftPushBound+=1-_4c;
}
}
if(egl.IE){
if(_4c>0){
preventDefault(e);
var _4d=document.selection.createRange();
_4d.text=String.fromCharCode(ieKey);
_4d.select();
}
selectionStart=curPos=Math.min(selectionStart,curPos)+1;
}else{
if(isLinux&&_49&&isArabic&&(ieKey>1487)){
_48=(_48!=null)?_48:ieKey;
e.preventDefault();
curPos=obj.selectionStart;
if(isOverWriteMode()&&(obj.selectionStart==obj.selectionEnd)){
text=obj.value.substring(0,obj.selectionStart)+String.fromCharCode(_48)+obj.value.substring(obj.selectionEnd+1);
}else{
text=obj.value.substring(0,obj.selectionStart)+String.fromCharCode(_48)+obj.value.substring(obj.selectionEnd);
}
obj.value=ara_type(obj.selectionStart,text,_49);
obj.setSelectionRange(curPos+1,curPos+1);
}else{
if((_48!=null)||isOverWriteMode()){
_48=(_48!=null)?_48:ieKey;
e.preventDefault();
replaceFieldText(obj,_48);
}
}
}
}
};
function replaceFieldText(obj,_4f){
curPos=obj.selectionStart;
if(isOverWriteMode()&&(obj.selectionStart==obj.selectionEnd)){
obj.value=obj.value.substring(0,obj.selectionStart)+String.fromCharCode(_4f)+obj.value.substring(obj.selectionEnd+1);
}else{
obj.value=obj.value.substring(0,obj.selectionStart)+String.fromCharCode(_4f)+obj.value.substring(obj.selectionEnd);
}
obj.setSelectionRange(curPos+1,curPos+1);
};
function handleKeyUp(e){
if(egl.IE){
e=window.event;
}
var obj=this;
var _52=e.keyCode;
var _53=(obj.style.direction=="ltr")?false:true;
if(!egl.IE){
curPos=obj.selectionStart;
}
if(((_52==CODE_ARROWLEFT)&&(_53==false))||((_52==CODE_ARROWRIGHT)&&(_53==true))){
if(pushMode&&(curPos<rightPushBound)){
toggleFieldOrient(obj,true,false);
}
}else{
if(((_52==CODE_ARROWRIGHT)&&(_53==false))||((_52==CODE_ARROWLEFT)&&(_53==true))){
if(pushMode&&(curPos>leftPushBound)){
toggleFieldOrient(obj,true,false);
}
}
}
if(_52==CODE_ARROWUP||_52==CODE_ARROWDOWN||(e.shiftKey&&(_52==CODE_HOME||_52==CODE_END))||(egl.IE&&(e.ctrlKey||adjustCaretOnKeyUp)&&(_52==CODE_Z||_52==CODE_CTRL))){
if(pushMode&&!adjustCaretOnKeyUp){
toggleFieldOrient(obj,true,false);
}
var _54=getCaretPos(e,obj);
if(_54){
selectionStart=Math.min(_54[0],_54[1]);
curPos=Math.max(_54[0],_54[1]);
}
adjustCaretOnKeyUp=false;
}else{
if(_52==CODE_HOME||_52==CODE_PAGEUP){
processHome(obj,e);
}else{
if(_52==CODE_END||_52==CODE_PAGEDOWN){
processEnd(obj,e);
}else{
if(adjustCaretOnKeyUp){
setSelectedRange(obj,selectionStart,curPos);
adjustCaretOnKeyUp=false;
}
}
}
}
};
function handleKeyDown(e){
if(egl.IE){
e=window.event;
}
var obj=this;
var _57=e.keyCode;
if(_57==18){
preventAltNumpad=true;
}else{
if(!e.altKey){
preventAltNumpad=false;
}
}
fieldDirection=(obj.style.direction=="ltr")?false:true;
swapChar=_57;
if(e.shiftKey){
processPush(obj,_57);
}
if((!isLinux&&e.shiftKey&&e.altKey)||(isLinux&&(_57==18))){
layerGuess=!layerGuess;
}
if((e.altKey&&!isLinux)||(e.shiftKey&&isLinux)){
if(((_57==111)&&!isLinux)||((_57==102)&&isLinux)){
autoPush=!autoPush;
if(pushMode){
toggleFieldOrient(obj,true,false);
}
preventAltNumpad=true;
}else{
if(((_57==144)&&!isLinux)||((_57==100)&&isLinux)){
processFieldReverse(obj,true);
preventAltNumpad=true;
}
}
}else{
if(_57==CODE_BACKSPACE){
processBackspace(obj,e);
}else{
if(_57==CODE_DELETE){
processDelete(obj);
}else{
if(egl.IE){
if(e.ctrlKey){
if(_57==CODE_A){
handleDblClick(e);
}else{
if(_57==CODE_Z){
adjustCaretOnKeyUp=true;
}
}
}else{
if(_57==CODE_ENTER){
if(pushMode){
toggleFieldOrient(obj,false,false);
}
if(obj.type=="textarea"){
selectionStart=curPos=curPos+2;
}
}else{
if((_57==CODE_HOME)||(_57==CODE_END)||(_57==CODE_PAGEUP)||(_57==CODE_PAGEDOWN)){
if(!e.shiftKey){
preventDefault(e);
}
}else{
if(((_57==37)&(fieldDirection==0))|((_57==39)&(fieldDirection==1))){
processLeftarrow(obj,e);
}else{
if(((_57==39)&(fieldDirection==0))|((_57==37)&(fieldDirection==1))){
processRightarrow(obj,e);
}
}
}
}
}
}else{
if(e.ctrlKey&&(_57==88||_57==67||_57==86)){
preventEraseMarker(obj);
}
}
}
}
}
};
function preventDefault(_58){
if(egl.IE){
_58.returnValue=false;
}else{
_58.preventDefault();
}
};
function doSymSwap(_59){
switch(_59){
case "(":
_59=")";
break;
case ")":
_59="(";
break;
case "{":
_59="}";
break;
case "}":
_59="{";
break;
case "[":
_59="]";
break;
case "]":
_59="[";
break;
case "<":
_59=">";
break;
case ">":
_59="<";
break;
}
return _59;
};
function setSelectedRange(obj,_5b,_5c){
if(egl.IE){
var _5d=obj.createTextRange();
if(_5d){
if(obj.type=="textarea"){
_5d.moveToElementText(obj);
len=_5c;
for(var i=fieldStart;i<len;i++){
if((obj.value.charAt(i)=="\r")){
_5b--;
_5c--;
}
}
}else{
_5d.expand("textedit");
}
_5d.collapse();
_5d.moveEnd("character",_5c);
_5d.moveStart("character",_5b);
_5d.select();
}
}else{
obj.setSelectionRange(_5b,_5c);
}
};
function processHome(obj,_60){
var _61=getLineBoundaries(obj);
var _62=(obj.type=="textarea")?_61[0]+1:_61[0];
var _63=(obj.type=="textarea")?_61[1]:_61[1]+1;
if(pushMode){
selectionStart=curPos=_63;
}else{
selectionStart=curPos=_62;
}
setSelectedRange(obj,selectionStart,curPos);
if(pushMode&(curPos>leftPushBound)){
toggleFieldOrient(obj,true,false);
}
preventDefault(_60);
};
function processEnd(obj,_65){
var _66=getLineBoundaries(obj);
var _67=(obj.type=="textarea")?_66[0]+1:_66[0];
var _68=(obj.type=="textarea")?_66[1]:_66[1]+1;
if(pushMode){
selectionStart=curPos=_67;
}else{
selectionStart=curPos=_68;
}
setSelectedRange(obj,selectionStart,curPos);
if(pushMode&(curPos<rightPushBound)){
toggleFieldOrient(obj,true,false);
}
preventDefault(_65);
};
function getLineBoundaries(obj){
var len=obj.value.length;
var _6b=(egl.IE)?selectionStart:obj.selectionStart;
var _6c=fieldStart,_6d=len-1;
if(obj.type=="textarea"){
for(_6c=_6b;_6c>=fieldStart;_6c--){
if(obj.value.charAt(_6c)==LF){
break;
}
}
for(_6d=curPos;_6d<len;_6d++){
if((obj.value.charAt(_6d)==LF)||(obj.value.charAt(_6d)=="\r")){
break;
}
}
}
return new Array(_6c,_6d);
};
function toggleFieldOrient(obj,_6f,_70){
var _71=0;
if(!egl.IE){
selectionStart=obj.selectionStart;
curPos=obj.selectionEnd;
}
obj.style.direction=(obj.style.direction=="rtl")?"ltr":"rtl";
if(obj.value.charAt(0)==egl.LRO){
obj.value=egl.RLO+obj.value.substring(1);
}else{
if(obj.value.charAt(0)==egl.RLO){
obj.value=egl.LRO+obj.value.substring(1);
}
}
var _72=getLineBoundaries(obj);
reverseText(obj);
if(_6f){
var _73=_72[0];
var _74=_72[1];
pushMode=!pushMode;
if(pushMode){
_71=Math.abs(selectionStart-curPos);
leftPushBound=rightPushBound=selectionStart=_74+1-Math.max(selectionStart,curPos)+_73;
curPos=selectionStart+_71;
}else{
if(_70){
curPos=rightPushBound;
}
selectionStart=curPos=_74+1-curPos+_73;
}
setSelectedRange(obj,selectionStart,curPos);
}
};
function processPush(obj,_76){
if(((_76==144)&&!isLinux)||((_76==103)&&isLinux)){
preventAltNumpad=true;
if(!pushMode){
toggleFieldOrient(obj,true,true);
}
}else{
if(((_76==111)&&!isLinux)||((_76==104)&&isLinux)){
preventAltNumpad=true;
if(pushMode){
toggleFieldOrient(obj,true,true);
}
}
}
};
function reverse(_77){
var len=_77.length;
var _79="";
for(i=0;i<len;i++){
symbol=_77.charAt(len-i-1);
symbol=doSymSwap(symbol);
_79+=symbol;
}
return _79;
};
function reverseText(obj){
var _7b=obj.value;
var _7c="";
if(_7b.charAt(0)==egl.LRO||_7b.charAt(0)==egl.RLO){
_7c=_7b.charAt(0)+reverse(_7b.substring(1));
}else{
textPool=_7b.split(CR);
_7c+=reverse(textPool[0]);
for(var j=1;j<textPool.length;j++){
_7c+=CR+reverse(textPool[j]);
}
}
if(isLinux&&isArabic){
obj.value=ara_type(0,_7c,(obj.style.direction=="rtl"));
}else{
obj.value=_7c;
}
};
function processFieldReverse(obj,_7f){
isFldreversed=!isFldreversed;
var len=obj.value.length;
if(!egl.IE){
curPos=obj.selectionStart;
}
if(len==fieldStart){
obj.style.textAlign=(obj.style.direction=="rtl")?"left":"right";
_7f=false;
}
var _81=getLineBoundaries(obj);
toggleFieldOrient(obj,false,false);
if(_7f){
var _82=_81[0];
var _83=_81[1];
selectionStart=curPos=_83+1-curPos+_82;
setSelectedRange(obj,selectionStart,curPos);
}
};
function preventEraseMarker(obj){
if(fieldStart>0){
if(egl.IE){
var rng=document.selection.createRange();
var _86=rng.text.charAt(0);
if((_86==egl.LRO)||(_86==egl.RLO)){
rng.moveStart("character",fieldStart);
rng.select();
curPos=fieldStart;
}
}else{
if(obj.selectionStart<fieldStart){
if(obj.selectionStart!=obj.selectionEnd){
obj.setSelectionRange(obj.selectionStart+1,obj.selectionEnd);
}else{
obj.setSelectionRange(obj.selectionStart+1,obj.selectionEnd+1);
}
}
}
}
};
function processDelete(obj){
if(!egl.IE){
selectionStart=obj.selectionStart;
curPos=obj.selectionEnd;
}
if(pushMode&&(selectionStart<leftPushBound)){
if(selectionStart==curPos){
leftPushBound--;
}else{
leftPushBound-=Math.abs(selectionStart-curPos);
}
}
preventEraseMarker(obj);
if(egl.IE){
selectionStart=curPos=Math.min(selectionStart,curPos);
}
};
function processBackspace(obj,_89){
var _8a;
if(egl.IE){
var _8b=document.selection.createRange();
_8a=((_8b.text).length==0);
}else{
selectionStart=obj.selectionStart;
curPos=obj.selectionEnd;
_8a=(selectionStart==curPos);
}
if(_8a){
if(curPos>fieldStart){
if(pushMode&&(curPos<=rightPushBound)){
if(egl.IE){
_89.returnValue=false;
}else{
_89.preventDefault();
preventAltNumpad=true;
}
return;
}
curPos=(egl.IE&&(obj.value.charAt(curPos-1)==LF))?curPos-2:curPos-1;
if(pushMode){
leftPushBound--;
}
}else{
preventDefault(_89);
return;
}
}else{
if(pushMode){
leftPushBound-=Math.abs(selectionStart-curPos);
}
preventEraseMarker(obj);
curPos=Math.min(selectionStart,curPos);
}
selectionStart=curPos;
};
function processLeftarrow(obj,_8d){
if(curPos>fieldStart){
if(_8d.shiftKey){
if(selectionStart==curPos){
selectionStart=curPos;
}
curPos=(egl.IE&&(obj.value.charAt(curPos-1)==LF))?curPos-2:curPos-1;
}else{
if(selectionStart!=curPos){
selectionStart=curPos=Math.min(selectionStart,curPos);
}else{
selectionStart=curPos=(egl.IE&&(obj.value.charAt(curPos-1)==LF))?curPos-2:curPos-1;
}
}
}else{
preventDefault(_8d);
}
};
function processRightarrow(obj,_8f){
var _90=obj.value;
if(curPos<_90.length){
if(_8f.shiftKey){
if(selectionStart==curPos){
selectionStart=curPos;
}
curPos=(egl.IE&&(obj.value.charAt(curPos+1)==LF))?curPos+2:curPos+1;
}else{
if(selectionStart!=curPos){
selectionStart=curPos=Math.max(selectionStart,curPos);
}else{
selectionStart=curPos=(egl.IE&&(obj.value.charAt(curPos+1)==LF))?curPos+2:curPos+1;
}
}
}else{
preventDefault(_8f);
}
};
function JSReorder(_91){
if(_91==null){
this.LogicalRTL=0;
}else{
this.LogicalRTL=_91;
}
this.INIT=0;
this.LATIN=1;
this.LOCAL=2;
this.NEUTRAL=3;
this.LOCALNUMBER=4;
this.LATINNUMBER=5;
this.LATINNUMERICTERMINATOR=6;
this.NUMERICSEPARATOR=8;
this.ENDOFLINE=9;
this.CARRIAGERETURN=10;
this.LINEFEED=11;
this.SPACE=12;
this.ARABICDIGIT=13;
this.SEGMENTSEPARATOR=14;
this.BLOCKSEPARATOR=15;
this.BIDISPECIAL=16;
this.NONSEGMENTMARKER=17;
this.LATIN_STATE=0;
this.LOCAL_STATE=1;
this.LATIN_NUM_STATE=2;
this.LOCAL_NUM_STATE=3;
this.NEUTRAL_STATE=4;
this.EOL_STATE=5;
this.MASK_STATE=255;
this.MASK_ACTION=65280;
this.ACTION=16384;
this.NL=16640;
this.NR=16896;
this.LN=17152;
this.LocalInvert=1;
this.LocalNumInvert=2;
this.LatinInvert=3;
this.AllLineInvert=4;
var NL=this.NL;
var NR=this.NR;
var LN=this.LN;
this.StateTable=new Table(6,10);
if(this.LogicalRTL==1){
this.StateTable.initTable(1,0,1,4,-1,2,-1,-1,4,5,1,0,1,1,-1,LN|3,-1,-1,1,5,1,0,1,4,-1,2,-1,-1,0,5,1,0,1,1,-1,3,-1,-1,1,5,NR|1,NL|0,NR|1,4,-1,NL|2,-1,-1,4,NR|5,1,0,1,1,-1,3,-1,-1,1,5);
}else{
this.StateTable.initTable(0,0,1,0,-1,2,-1,-1,0,5,0,0,1,4,-1,3,-1,-1,4,5,0,0,1,0,-1,2,-1,-1,0,5,0,0,1,4,-1,3,-1,-1,4,5,NL|0,NL|0,NR|1,4,-1,NR|3,-1,-1,4,NL|5,0,0,1,0,-1,2,-1,-1,0,5);
}
function getUnicodeSymmSwap(){
return this.UnicodeSymmSwap;
};
function DoSymSwap(_95){
var i,mid,low,_99;
var ss=this.getUnicodeSymmSwap().getArray();
for(i=0;i<_95.length;i++){
if(this.stringAsClasses[i]!=this.LOCAL){
continue;
}
low=0;
_99=this.SIZE_OF_UNISYMM-1;
while(low<_99){
mid=Math.ceil((low+_99)/2);
if(_95[i]<ss[mid][0]){
_99=mid-1;
}else{
if(_95[i]>ss[mid][0]){
low=mid+1;
}else{
_95[i]=ss[mid][1];
break;
}
}
}
if(low==_99&&_95[i]==ss[low][0]){
_95[i]=ss[low][1];
}
}
};
this.getStateTable=getStateTable;
this.StateToClass=new Array(this.LATIN,this.LOCAL,this.LATINNUMBER,this.LOCALNUMBER,this.NEUTRAL,this.ENDOFLINE);
var I=this.INIT;
var L=this.LATIN;
var R=this.LOCAL;
var D=this.LATINNUMBER;
var X=this.LATINNUMERICTERMINATOR;
var E=this.NUMERICSEPARATOR;
var N=this.NEUTRAL;
var S=this.SPACE;
var C=this.CARRIAGERETURN;
var F=this.LINEFEED;
var A=this.ARABICDIGIT;
var G=this.SEGMENTSEPARATOR;
var B=this.BLOCKSEPARATOR;
var H=this.BIDISPECIAL;
var M=this.NONSEGMENTMARKER;
this.UnicodeTable=new Table(9,256);
this.UnicodeTable.initTable(N,N,N,N,N,N,N,N,N,I,F,N,N,C,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,S,N,N,X,X,X,N,N,N,N,N,N,E,N,E,E,D,D,D,D,D,D,D,D,D,D,E,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,S,N,X,X,X,X,N,N,N,N,N,N,N,N,N,N,X,X,D,D,N,N,N,N,N,D,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,L,L,L,L,L,L,L,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,L,N,N,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,R,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,N,N,A,A,A,A,A,A,A,A,A,A,X,A,A,R,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,R,R,R,R,R,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,D,D,D,D,D,D,D,D,D,D,N,N,N,N,N,N,S,S,S,S,S,S,S,E,S,S,S,S,N,N,L,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,B,B,H,N,N,N,H,N,X,X,X,X,X,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,H,H,H,H,D,N,N,N,D,D,D,D,D,D,X,X,N,N,N,N,D,D,D,D,D,D,D,D,D,D,X,X,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,X,X,X,X,X,X,X,X,X,X,X,X,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,S,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,L,L,L,L,L,L,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,N,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,R,R,R,R,R,N,R,N,R,R,N,R,R,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,R,R,R,N,R,N,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,D,D,D,D,D,D,D,D,D,D,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,N,N,N,N,N,N,N,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,L,N,N,N,L,L,L,L,L,L,N,N,L,L,L,L,L,L,N,N,L,L,L,L,L,L,N,N,L,L,L,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N,N);
this.SIZE_OF_UNISYMM=24;
this.UnicodeSymmSwap=new Table(this.SIZE_OF_UNISYMM,2);
this.UnicodeSymmSwap.initTable("(",")",")","(","<",">",">","<","[","]","]","[","{","}","}","{","«","»","»","«","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?","?");
this.getUnicodeSymmSwap=getUnicodeSymmSwap;
this.DoSymSwap=DoSymSwap;
this.getUnicodeTable=getUnicodeTable;
this.stringAsClasses=new Array();
this.terminatorFlag=0;
this.doReorder=doReorder;
this.stringToClass=stringToClass;
this.applyClass=applyClass;
this.getCharClass=getCharClass;
this.getCharacterType=getCharacterType;
this.doAction=doAction;
this.invertSegment=invertSegment;
this.needInvert=needInvert;
};
function getStateTable(){
return this.StateTable;
};
function getUnicodeTable(){
return this.UnicodeTable;
};
function getCharacterType(ch){
var _ab=this.getUnicodeTable().getArray();
var str=new String(ch);
var _ad=str.charCodeAt(0);
var _ae=(_ad&65280)>>8;
switch(_ae){
case 0:
break;
case 5:
_ae=1;
break;
case 6:
_ae=2;
break;
case 32:
_ae=3;
break;
case 33:
_ae=4;
break;
case 48:
_ae=5;
break;
case 251:
_ae=6;
break;
case 254:
_ae=7;
break;
case 255:
_ae=8;
break;
default:
return (this.NEUTRAL);
}
return (_ab[_ae][_ad&255]);
};
function doReorder(str){
var _b0=new Array(str.length);
var Str=new String("");
var i;
for(i=0;i<str.length;i++){
_b0[i]=str.charAt(i);
}
this.stringToClass(str);
this.DoSymSwap(_b0);
if(this.LogicalRTL==1){
this.invertSegment(_b0,this.LatinInvert);
this.invertSegment(_b0,this.LocalNumInvert);
this.invertSegment(_b0,this.AllLineInvert);
}else{
this.invertSegment(_b0,this.LocalNumInvert);
this.invertSegment(_b0,this.LocalInvert);
}
for(i=0;i<_b0.length;i++){
Str+=_b0[i];
}
return (Str);
};
function stringToClass(str){
var _b4=this.getStateTable().getArray();
var _b5=0;
var _b6=this.LATIN;
if(this.LogicalRTL==1){
_b6=this.LOCAL;
}
var _b7=_b4[_b5][_b6];
var _b8;
var i;
for(i=0;i<str.length;i++){
_b5=_b7;
_b8=this.getCharClass(str,i);
_b7=_b4[_b5][_b8];
this.stringAsClasses[i]=this.StateToClass[_b7&this.MASK_STATE]|this.terminatorFlag;
this.doAction(_b7,i);
_b7&=this.MASK_STATE;
}
for(i=0;i<str.length;i++){
if((this.stringAsClasses[i]&this.MASK_ACTION)==this.ACTION){
this.stringAsClasses[i]&=this.MASK_STATE;
}
}
};
function getCharClass(str,_bb){
var _bc=this.NEUTRAL;
var _bd=this.NEUTRAL;
var _be;
var _bf;
this.terminatorFlag=0;
if(_bb>0){
_bc=this.getCharacterType(str.charAt(_bb-1));
}
_be=this.getCharacterType(str.charAt(_bb));
switch(_be){
case this.BLOCKSEPARATOR:
case this.SEGMENTSEPARATOR:
_bf=this.LATIN;
break;
case this.NONSEGMENTMARKER:
_bf=_bc;
break;
case this.ARABICDIGIT:
_bf=this.LATINNUMBER;
break;
case this.LATINNUMERICTERMINATOR:
if(_bb>0){
_bc=this.stringAsClasses[_bb-1];
}
var j;
for(j=_bb+1;j<str.length;j++){
_bd=this.getCharacterType(str.charAt(j));
if(_bd!=this.LATINNUMERICTERMINATOR){
break;
}
}
if(_bc==this.LATINNUMBER||_bc==this.LOCALNUMBER||_bd==this.LATINNUMBER||_bd==this.LOCALNUMBER){
_bf=this.LATINNUMBER;
}else{
this.terminatorFlag=this.ACTION;
_bf=this.NEUTRAL;
}
break;
case this.LATINNUMBER:
var j;
for(j=_bb+1;j<str.length;j++){
_bd=this.getCharacterType(str.charAt(j));
if(_bd!=this.LATINNUMBER&&_bd!=this.NEUTRAL){
break;
}
}
if(_bd==this.LATIN&&this.LogicalRTL==1){
_bf=this.LATIN;
}else{
_bf=_be;
}
break;
case this.NUMERICSEPARATOR:
_bf=this.NEUTRAL;
if(_bc==this.LATINNUMBER){
if(_bb<str.length-1){
_bd=this.getCharacterType(str.charAt(_bb+1));
}
switch(_bd){
case this.LATINNUMBER:
_bf=_bd;
break;
case this.LOCAL:
case this.NEUTRAL:
_bf=_be;
break;
}
}
break;
case this.BIDISPECIAL:
case this.SPACE:
_bf=this.NEUTRAL;
break;
case this.CARRIAGERETURN:
case this.LINEFEED:
_bf=this.ENDOFLINE;
break;
default:
_bf=_be;
}
return (_bf);
};
function doAction(_c1,_c2){
var _c3=_c1&this.MASK_ACTION;
var _c4;
switch(_c3){
case this.NL:
case this.NR:
_c4=(_c3&this.MASK_ACTION&~this.ACTION)>>8;
while(_c2-->0){
if((this.stringAsClasses[_c2]&this.MASK_STATE)==this.NEUTRAL){
if((this.stringAsClasses[_c2]&this.MASK_ACTION)&&(this.stringAsClasses[_c2+1]==this.LOCALNUMBER||this.stringAsClasses[_c2+1]==this.LATINNUMBER)){
this.stringAsClasses[_c2]=this.stringAsClasses[_c2+1];
}else{
this.stringAsClasses[_c2]=_c4;
}
}else{
break;
}
}
break;
}
};
function applyClass(str){
var _c6=new Array(str.length);
var Str=new String("");
var i;
for(i=0;i<str.length;i++){
_c6[i]=str.charAt(i);
}
if(this.LogicalRTL==1){
this.invertSegment(_c6,this.IsLatinInvert);
this.invertSegment(_c6,this.IsLocalNumInvert);
}else{
this.invertSegment(_c6,this.LocalNumInvert);
this.invertSegment(_c6,this.LocalInvert);
}
if(this.LogicalRTL==1){
this.invertSegment(_c6,this.IsAllLineInvert);
}
for(i=0;i<_c6.length;i++){
Str+=_c6[i];
}
return (Str);
};
function needInvert(_c9,_ca){
switch(_c9){
case this.LocalInvert:
return (this.stringAsClasses[_ca]==this.LOCAL||this.stringAsClasses[_ca]==this.LOCALNUMBER);
case this.LocalNumInvert:
return (this.stringAsClasses[_ca]==this.LOCALNUMBER);
case this.LatinInvert:
return ((this.stringAsClasses[_ca]==this.LATIN)||(this.stringAsClasses[_ca]==this.LATINNUMBER));
case this.AllLineInvert:
return (this.stringAsClasses[_ca]!=this.ENDOFLINE);
default:
return (false);
}
};
function invertSegment(s,_cc){
var _cd=0;
var end;
var sum;
var tmp;
var i;
while(_cd<s.length){
if(this.needInvert(_cc,_cd)){
end=_cd+1;
while(end<s.length){
if(!this.needInvert(_cc,end)){
break;
}
end++;
}
sum=end-1+_cd;
for(;_cd<sum-_cd;_cd++){
tmp=doSymSwap(s[_cd]);
s[_cd]=doSymSwap(s[sum-_cd]);
s[sum-_cd]=tmp;
}
_cd=end-1;
}
_cd++;
}
};
function Table(_d2,_d3){
var i=0;
this.trows=_d2;
this.tcols=_d3;
this.rows=new Array(_d2);
for(i=0;i<_d2;i++){
this.rows[i]=new Array(_d3);
}
this.initTable=initTable;
this.getArray=getArray;
};
function getArray(){
return this.rows;
};
function initTable(){
var i=0;
var j=0;
var k=0;
var l=0;
var m=Math.min(this.trows*this.tcols,initTable.arguments.length);
for(k=0;k<m;k++,l++){
if(l==this.tcols){
i++;
j=0;
l=0;
}
this.rows[i][j++]=this.initTable.arguments[k];
}
};
var INIT=2147483648;
var LEVEL=1879048192;
var TEXTTYPE=16777216;
var TEXT_ORIENTATION=196608;
var NUMERALS=12288;
var SYM_SWAP=256;
var WORD_BREAK=512;
var TEXT_SHAPE=255;
var ROUND_TRIP=1048576;
var TEXT_VISUAL=0;
var TEXT_IMPLICIT=16777216;
var ORIENTATION_LTR=0;
var ORIENTATION_RTL=65536;
var ORIENTATION_CONTEXT_LTR=131072;
var ORIENTATION_CONTEXT_RTL=196608;
var NUMERALS_NOMINAL=0;
var NUMERALS_NATIONAL=8192;
var NUMERALS_CONTEXTUAL=12288;
var BREAK=512;
var NO_BREAK=0;
var SWAPPING=256;
var NO_SWAPPING=0;
var TEXT_SHAPED=0;
var TEXT_NOMINAL=16;
var TEXT_INITIAL=17;
var TEXT_MIDDLE=18;
var TEXT_FINAL=19;
var TEXT_ISOLATED=20;
var TAIL=8203;
var ROUND_TRIP_ON=0;
var ROUND_TRIP_OFF=1048576;
var formatedAttributes=0;
function setAttribute(_da,_db){
formatedAttributes=((formatedAttributes&(~(_da)))|(_db&(_da)));
};
function getAttribute(_dc,_dd){
return ((_dc)&(_dd));
};
var LINKR=1;
var LINKL=2;
var IRRELEVANT=4;
var LAMTYPE=16;
var ALEFTYPE=32;
var LINKFIELD=3;
var lamAlphCount=0;
var shapeTable=[[[0,0,0,0],[0,0,0,0],[0,1,0,3],[0,1,0,1]],[[0,0,2,2],[0,0,1,2],[0,1,1,2],[0,1,1,3]],[[0,0,0,0],[0,0,0,0],[0,1,0,3],[0,1,0,3]],[[0,0,1,2],[0,0,1,2],[0,1,1,2],[0,1,1,3]]];
var convertFEto06=[1611,1611,1612,1612,1613,1613,1614,1614,1615,1615,1616,1616,1617,1617,1618,1618,1569,1570,1570,1571,1571,1572,1572,1573,1573,1574,1574,1574,1574,1575,1575,1576,1576,1576,1576,1577,1577,1578,1578,1578,1578,1579,1579,1579,1579,1580,1580,1580,1580,1581,1581,1581,1581,1582,1582,1582,1582,1583,1583,1584,1584,1585,1585,1586,1586,1587,1587,1587,1587,1588,1588,1588,1588,1589,1589,1589,1589,1590,1590,1590,1590,1591,1591,1591,1591,1592,1592,1592,1592,1593,1593,1593,1593,1594,1594,1594,1594,1601,1601,1601,1601,1602,1602,1602,1602,1603,1603,1603,1603,1604,1604,1604,1604,1605,1605,1605,1605,1606,1606,1606,1606,1607,1607,1607,1607,1608,1608,1609,1609,1610,1610,1610,1610,1628,1628,1629,1629,1630,1630,1631,1631];
var Link06=[1+32+256*17,1+32+256*19,1+256*21,1+32+256*23,1+2+256*25,1+32+256*29,1+2+256*31,1+256*35,1+2+256*37,1+2+256*41,1+2+256*45,1+2+256*49,1+2+256*53,1+256*57,1+256*59,1+256*61,1+256*63,1+2+256*65,1+2+256*69,1+2+256*73,1+2+256*77,1+2+256*81,1+2+256*85,1+2+256*89,1+2+256*93,0,0,0,0,0,1+2,1+2+256*97,1+2+256*101,1+2+256*105,1+2+16+256*109,1+2+256*113,1+2+256*117,1+2+256*121,1+256*125,1+256*127,1+2+256*129,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,1+256*133,1+256*135,1+256*137,1+256*139,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,1+32,1+32,0,1+32,1,1,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1,1+2,1,1,1,1,1,1,1,1,1,1,1+2,1,1+2,1+2,1+2,1+2,1,1];
var LinkFE=[1+2,1+2,1+2,0,1+2,0,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,1+2,0,0+32,1+32,0+32,1+32,0,1,0+32,1+32,0,2,1+2,1,0+32,1+32,0,2,1+2,1,0,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,1,0,1,0,1,0,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0+16,2+16,1+2+16,1+16,0,2,1+2,1,0,2,1+2,1,0,2,1+2,1,0,1,0,1,0,2,1+2,1,0,1,0,1,0,1,0,1];
var IrreleventPos=[0,2,4,6,8,10,12,14,];
var AlefTable=[1570,1571,1573,1575];
var LamAlefTable=[65269,65271,65273,65275];
var AlefTableFE=[65153,65154,65155,65156,65159,65160,65165,65166];
var LamTableFE=[65245,65246,65247,65248];
var LamAlefTableFE=[65269,65271,65273,65275,65270,65272,65274,65276];
function uba_getLink(x){
if(x>=1570&&x<=1747){
return (Link06[x-1570]);
}else{
if(x==8205){
return (3);
}else{
if(x>=8301&&x<=8303){
return (4);
}else{
if(x>=65136&&x<=65276){
return (LinkFE[x-65136]);
}else{
return (0);
}
}
}
}
};
function LamAlef(_df){
for(var i=0;i<AlefTable.length;i++){
if(AlefTable[i]==_df){
return LamAlefTable[i];
}
}
return 0;
};
function isAlef(c){
for(var i=0;i<AlefTable.length;i++){
if(AlefTable[i]==c){
return true;
}
}
return false;
};
function isAlefFE(c){
for(var i=0;i<AlefTableFE.length;i++){
if(AlefTableFE[i]==c){
return true;
}
}
return false;
};
function isLamFE(c){
for(var i=0;i<LamTableFE.length;i++){
if(LamTableFE[i]==c){
return true;
}
}
return false;
};
function isLamAlefFE(c){
for(var i=0;i<LamAlefTableFE.length;i++){
if(LamAlefTableFE[i]==c){
return true;
}
}
return false;
};
function LamAlefFE(_e9){
for(var i=0;i<AlefTableFE.length;i++){
if(AlefTableFE[i]==_e9){
return LamAlefTableFE[i/2];
}
}
return 0;
};
function specialChar(ch){
if((ch>=1569&&ch<1574)||(ch==1575)||(ch>1582&&ch<1587)||(ch>1607&&ch<1610)||(ch==1577)||(ch>=1628&&ch<=1631)){
return (1);
}else{
return (0);
}
};
function YeehHamzaChar(ch){
if((ch==65161)||(ch==65162)){
return (true);
}else{
return (false);
}
};
function Lamalef(x){
if(x==1570){
return (1628);
}else{
if(x==1571){
return (1629);
}else{
if(x==1573){
return (1630);
}else{
if(x==1575){
return (1631);
}else{
return (0);
}
}
}
}
};
function SeenChar(ch){
if((ch==65201)||(ch==65202)||(ch==65205)||(ch==65206)||(ch==65209)||(ch==65210)||(ch==65213)||(ch==65214)){
return (true);
}else{
return (false);
}
};
function CompressLamAlef(_ef,_f0,_f1){
var _f2=new Array(_f0);
var i=0;
var j=0;
var Lam=1604;
for(i=0;i<_f0-1;i++){
if((_f1&&isAlef(_ef[i])&&_ef[i+1]==Lam)||(!_f1&&isAlef(_ef[i+1])&&_ef[i]==Lam)){
_f2[j++]=LamAlef((_f1)?_ef[i]:_ef[i+1]);
i++;
}else{
_f2[j++]=_ef[i];
}
}
if(i<_f0){
_f2[j++]=_ef[i];
}
return _f2;
};
function invertStr(str){
var _f7=new Array(str.length);
var Str=new String("");
var i;
for(i=0;i<str.length;i++){
_f7[i]=str.charAt(str.length-i-1);
}
for(i=0;i<_f7.length;i++){
Str+=_f7[i];
}
return (Str);
};
function shape(_fa,_fb){
shape(_fa,_fb,true);
};
function shape(_fc,_fd,_fe){
var _ff;
var _100=0;
var _101=0;
var _102=0;
var _103;
var Nx;
var _105;
var iEnd,Nw,step,_109,i,Ix;
var _10c;
var wBuf;
var j,x;
var flag;
var _111=0;
var RTL=true;
var _113=false;
var size;
if(_fd.length==0){
return;
}
var _115=new Array(_fd.length);
_115=_fd;
if(_fc){
RTL=true;
}else{
RTL=false;
}
_113=true;
for(var idx=0;idx<_115.length;idx++){
var _117=_115[idx];
if((_117>=65136)&&(_117<=65276)){
_115[_111]=convertFEto06[(_117-65136)];
}else{
_115[_111]=_117;
}
_111++;
}
if(RTL&&_113){
Ix=0;
iEnd=_115.length;
step=+1;
}else{
Ix=_115.length-1;
iEnd=-1;
step=-1;
}
size=_115.length;
_102=0;
_100=0;
_ff=uba_getLink(_115[Ix]);
_105=Ix;
_103=Ix;
Nx=-2;
while(Ix!=iEnd){
if((_ff&65280)>0){
Nw=Ix+step;
while(Nx<0){
if(Nw==iEnd){
_101=0;
Nx=30000;
}else{
_101=uba_getLink(_115[Nw]);
if((_101&IRRELEVANT)==0){
Nx=Nw;
}else{
Nw+=step;
}
}
}
if(((_ff&ALEFTYPE)>0)&&((_100&LAMTYPE)>0)){
_10c=Lamalef(_115[Ix]);
if(_10c!=0){
if(RTL&&_113){
_115[_103]=_10c;
_115[Ix]=32;
Ix=_103;
}else{
_115[Ix]=32;
_115[_103]=_10c;
Ix=_103;
}
}
_100=_102;
_ff=uba_getLink(_10c);
}
flag=specialChar(_115[Ix]);
if(getAttribute(formatedAttributes,TEXT_SHAPE)==TEXT_INITIAL){
if(flag==0){
_109=2;
}else{
_109=0;
}
}else{
if(getAttribute(formatedAttributes,TEXT_SHAPE)==TEXT_MIDDLE){
if(flag==0){
_109=3;
}else{
_109=1;
}
}else{
if(getAttribute(formatedAttributes,TEXT_SHAPE)==TEXT_FINAL){
if(flag==0){
_109=1;
}else{
_109=1;
}
}else{
if(getAttribute(formatedAttributes,TEXT_SHAPE)==TEXT_ISOLATED){
_109=0;
}else{
_109=shapeTable[_101&(LINKR+LINKL)][_100&(LINKR+LINKL)][_ff&(LINKR+LINKL)];
}
}
}
}
_115[Ix]=(65136+(_ff>>8)+_109);
}
if((_ff&IRRELEVANT)==0){
_102=_100;
_100=_ff;
_105=_103;
_103=Ix;
}
if((_ff&IRRELEVANT)>0){
var _118=_115[Ix]-1611;
var _119=0;
var next=(_101&(LINKR+LINKL));
var last=_100&(LINKR+LINKL);
if(((last==3)&&(next==1))||((last==3)&&(next==3))){
_119=1;
}
if(((_101&ALEFTYPE)>0)&&((_100&LAMTYPE)>0)){
_119=0;
}
if((_115[Ix]==1612)||(_115[Ix]==1613)){
_119=0;
}
_115[Ix]=(65136+IrreleventPos[_118]+_119);
}
Ix+=step;
if(Ix==Nx){
_ff=_101;
Nx=-2;
}else{
if(Ix!=iEnd){
_ff=uba_getLink(_115[Ix]);
}
}
}
if(_fe){
for(var idx=0;idx<_115.length;idx++){
if(RTL&&_113){
if((SeenChar(_115[idx]))&&((idx+1<_115.length)&&(_115[idx+1]==32))){
_115[idx+1]=TAIL;
}
if((!SeenChar(_115[idx]))&&((idx+1<_115.length)&&(_115[idx+1]==TAIL))){
_115[idx+1]=32;
}
if(YeehHamzaChar(_115[idx])){
if((idx+1<_115.length)&&(_115[idx+1]==32)){
if(_115[idx]==65161){
_115[idx]=65263;
}else{
_115[idx]=65264;
}
_115[idx+1]=65152;
}else{
if(_115[idx]==65161){
_115[idx]=65163;
}else{
_115[idx]=65164;
}
}
}
}else{
if((SeenChar(_115[idx]))&&((idx-1>=0)&&(_115[idx-1]==32))){
_115[idx-1]=TAIL;
}
if((!SeenChar(_115[idx]))&&((idx-1>=0)&&(_115[idx-1]==TAIL))){
_115[idx-1]=32;
}
if(YeehHamzaChar(_115[idx])){
if((idx-1>=0)&&(_115[idx-1]==32)){
if(_115[idx]==65161){
_115[idx]=65263;
}else{
_115[idx]=65264;
}
_115[idx-1]=65152;
}else{
if(_115[idx]==65161){
_115[idx]=65163;
}else{
_115[idx]=65164;
}
}
}
}
}
}
return _115;
};
function ara_type(_11c,_11d,_11e){
var _11f=0;
var _120=0;
var _121=0;
var _122=0;
var len=_11d.length;
var _124=new Array(len);
for(var idx0=0;idx0<len;idx0++){
_124[idx0]=_11d.charCodeAt(idx0);
}
if(len>_11c+4){
_120=_11c+4;
_122=_11c+2;
}else{
if(len>_11c+3){
_120=_11c+3;
_122=_11c+2;
}else{
if(len>_11c+2){
_120=_11c+2;
_122=_11c+2;
}else{
if(len>_11c+1){
_120=_11c+1;
_122=_11c+1;
}else{
if(len>_11c){
_120=_11c;
_122=_11c;
}
}
}
}
}
if(_11c-4>=0){
_11f=_11c-4;
_121=_11c-2;
}else{
if(_11c-3>=0){
_11f=_11c-3;
_121=_11c-2;
}else{
if(_11c-2>=0){
_11f=_11c-2;
_121=_11c-2;
}else{
if(_11c-1>=0){
_11f=_11c-1;
_121=_11c-1;
}else{
if(_11c>=0){
_11f=_11c;
_121=_11c;
}
}
}
}
}
_124=shape(_11e,_124);
var _126=new Array(len);
for(var idx0=0;idx0<len;idx0++){
_126[idx0]=_11d.charCodeAt(idx0);
}
var _127=_120-_11f+1;
if(_120-_11f>0){
for(var indx=_11f;indx<=_120;indx++){
_126[indx]=_124[indx];
}
}
var _129="";
for(var idxt=0;idxt<_126.length;idxt++){
_129+=String.fromCharCode(_126[idxt]);
}
return _129;
};
