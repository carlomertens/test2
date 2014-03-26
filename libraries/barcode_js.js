egl.defineClass("libraries","barcode_js",{"constructor":function(){
},"scan":function(){
console.log("scanning");
var _1=cordova.require("cordova/plugin/BarcodeScanner");
_1.scan(function(_2){
alert("We got a barcode\n"+"Result: "+_2.text+"\n"+"Format: "+_2.format+"\n"+"Cancelled: "+_2.cancelled);
console.log("Scanner result: \n"+"text: "+_2.text+"\n"+"format: "+_2.format+"\n"+"cancelled: "+_2.cancelled+"\n");
console.log(_2);
return _2.text;
},function(_3){
console.log("Scanning failed: ",_3);
});
},"encode":function(){
var _4=cordova.require("cordova/plugin/BarcodeScanner");
_4.encode(_4.Encode.TEXT_TYPE,"http://www.nhl.com",function(_5){
alert("encode success: "+_5);
},function(_6){
alert("encoding failed: "+_6);
});
}});
