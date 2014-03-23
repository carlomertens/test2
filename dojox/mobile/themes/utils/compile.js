var fs=require("fs");
var path=require("path");
var less=require("less");
var themeFolders=["../android","../iphone","../blackberry","../holodark","../windows","../custom"];
var commonFolders=["../common/domButtons","../common/transitions"];
var batchQueue=[];
var batchIndex=0;
var processProgress=0;
themeFolders.forEach(function(_1){
batchQueue.push(function(){
processFolder(_1,true);
processFolder(_1+"/dijit",false);
});
});
commonFolders.forEach(function(_2){
batchQueue.push(function(){
processFolder(_2,false);
});
});
batch();
function batch(){
if(batchIndex<batchQueue.length){
batchQueue[batchIndex]();
batchIndex++;
}
};
function beginProcess(){
processProgress++;
};
function endProcess(){
processProgress--;
if(processProgress==0){
batch();
}
};
function processFolder(_3,_4){
var _5=getLessFiles(_3);
if(_4){
var _6=getLessFiles("../common");
var _7;
_6.array.forEach(function(_8){
var _9=_5.dic[_6.dic[_8]];
if(_9){
_7=_9.replace(".less",".css");
applyLess(_9,null,_7);
}else{
var _a=_6.dic[_8];
_7=_3+"/"+_a.replace(".less",".css");
if(_a.indexOf("_rtl")==-1){
applyLess(_8,"@import \""+_3+"/variables.less\";",_7);
}else{
applyLess(_8,"@import \""+_3+"/variables_rtl.less\";",_7);
}
}
});
}else{
_5.array.forEach(function(_b){
applyLess(_b,null,_b.replace(".less",".css"));
});
}
};
function applyLess(_c,_d,_e){
beginProcess();
console.log("compiling:",_c);
var _f=new (less.Parser)({paths:[path.dirname(_c)],filename:_c,optimization:1});
var _10=fs.readFileSync(_c,"utf-8");
if(_d){
_10=_d+_10;
}
_f.parse(_10,function(_11,_12){
if(_11){
less.writeError(_11);
process.exit(1);
}
var fd=fs.openSync(_e,"w");
fs.write(fd,_12.toCSS({compress:false}).replace(/\n/g,"\r\n"),0,"utf-8",function(f){
fs.close(fd);
console.log("writing:",_e);
endProcess();
});
});
};
function getLessFiles(_15){
var _16={};
var _17=fs.readdirSync(_15);
_17=_17.filter(function(_18){
return _18&&/\.less$/.test(_18)&&!/variables\.less$/.test(_18)&&!/css3\.less$/.test(_18)&&!/variables_rtl\.less$/.test(_18);
});
_17=_17.map(function(_19){
_16[_19]=_15+"/"+_19;
_16[_15+"/"+_19]=_19;
return _16[_19];
});
return {array:_17,dic:_16};
};
