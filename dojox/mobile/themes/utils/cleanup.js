var fs=require("fs");
clean("../android");
clean("../android/dijit");
clean("../iphone");
clean("../iphone/dijit");
clean("../blackberry");
clean("../blackberry/dijit");
clean("../holodark");
clean("../holodark/dijit");
clean("../windows");
clean("../windows/dijit");
clean("../custom");
clean("../custom/dijit");
clean("../common/transitions");
clean("../common/domButtons");
function clean(_1){
var _2=[];
getFiles(_1,/.*.css$/,_2);
var _3={};
getFiles("../common/",/.*.less$/,_3);
getFiles(_1,/.*.less$/,_3);
for(var i=0;i<_2.length;i++){
if(_3[_2[i].replace(".css",".less")]){
console.log("deleting",_1+"/"+_2[i]);
fs.unlink(_1+"/"+_2[i],function(_5){
if(_5){
console.log(_5);
}
});
}
}
};
function getFiles(_6,_7,_8){
fs.readdirSync(_6).map(function(_9){
if(_7.test(_9)){
if(_8 instanceof Array){
_8.push(_9);
}else{
_8[_9]=true;
}
}
});
};
