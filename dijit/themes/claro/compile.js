var fs=require("fs"),path=require("path"),less=require("../../../util/less/lib/less");
var options={compress:false,optimization:1,silent:false};
var allFiles=[].concat(fs.readdirSync("."),fs.readdirSync("form").map(function(_1){
return "form/"+_1;
}),fs.readdirSync("layout").map(function(_2){
return "layout/"+_2;
})),lessFiles=allFiles.filter(function(_3){
return _3&&_3!="variables.less"&&/\.less$/.test(_3);
});
lessFiles.forEach(function(_4){
console.log("=== "+_4);
fs.readFile(_4,"utf-8",function(e,_6){
if(e){
console.error("lessc: "+e.message);
process.exit(1);
}
new (less.Parser)({paths:[path.dirname(_4)],optimization:options.optimization,filename:_4}).parse(_6,function(_7,_8){
if(_7){
less.writeError(_7,options);
process.exit(1);
}else{
try{
var _9=_8.toCSS({compress:options.compress}),_a=_4.replace(".less",".css");
var fd=fs.openSync(_a,"w");
fs.writeSync(fd,_9,0,"utf8");
}
catch(e){
less.writeError(e,options);
process.exit(2);
}
}
});
});
});
