var mapInstance=1;
egl.defineWidget("egl.map","GoogleMapWidget","egl.ui.rui","Widget","div",{"constructor":function(){
this.eze$$DOMElement.id="map_"+mapInstance;
mapInstance++;
this.eze$$DOMElement.style.width="100%";
this.eze$$DOMElement.style.height="100%";
if(mapWidgets.length==0){
appendBootstrap();
}
if(typeof (google)!="undefined"&&typeof (google.map)!="undefined"){
this.createMap();
}else{
mapWidgets.appendElement(this);
}
},"destroy":function(){
},"createMap":function(){
var _1=this;
if(!_1.map){
var _2=new google.maps.LatLng(_1.centerLat||35.7575731,_1.centerLng||-79.0192997);
var _3={zoom:_1.zoom||8,center:(_1.center?null:_2),mapTypeId:_1.mapType||google.maps.MapTypeId.ROADMAP};
_1.geocoder=new google.maps.Geocoder();
_1.directionsService=new google.maps.DirectionsService();
_1.map=new google.maps.Map(_1.eze$$DOMElement,_3);
_1.map.eglWidget=_1;
_1.directionsDisplay=new google.maps.DirectionsRenderer();
_1.directionsDisplay.setMap(_1.map);
if(_1.center){
_1.setCenter(_1.center);
}
if(_1.markersOnInit){
for(var i=0;i<_1.markersOnInit.length;i++){
if(_1.markersOnInit[i]!=null){
_1.addMarker(_1.markersOnInit[i]);
}
}
}
}
},"setWidth":function(_5){
this.width=_5;
egl.setWidth(this.eze$$DOMElement,egl.toPX(_5));
if(this.map){
google.maps.event.trigger(this.map,"resize");
}
},"setHeight":function(_6){
this.height=_6;
egl.setHeight(this.eze$$DOMElement,egl.toPX(_6));
if(this.map){
google.maps.event.trigger(this.map,"resize");
}
},"getCenter":function(){
return (this.center?this.center:null);
},"setCenter":function(_7){
this.center=_7;
if(!this.map){
return;
}
var _8=this;
var _9=this.map;
this.geocoder.geocode({"address":_7},function(_a,_b){
if(_b==google.maps.GeocoderStatus.OK){
_9.setCenter(_a[0].geometry.location);
_8.centerLat=_a[0].geometry.location.lat();
_8.centerLng=_a[0].geometry.location.lng();
}else{
alert("Could not find this address. "+_b);
}
});
},"getCenterPosition":function(){
if(this.map){
var _c=this.map.getCenter();
return [_c.lat(),_c.lng()];
}else{
return [this.centerLat,this.centerLng];
}
},"setCenterPosition":function(_d){
this.centerLat=_d[0];
this.centerLng=_d[1];
if(!this.map){
return;
}else{
this.map.setCenter(new google.maps.LatLng(_d[0],_d[1]));
}
},"addMarker":function(m){
var _f=this;
var _10=this.map;
if(!this.map){
if(!this.markersOnInit){
this.markersOnInit=new Array();
}
this.markersOnInit.push(m);
return;
}
if(m.latitude&&m.latitude!=0&&m.longitude&&m.longitude!=0){
_f._addMarker(m,new google.maps.LatLng(m.latitude,m.longitude));
}else{
this.geocoder.geocode({"address":m.address},function(_11,_12){
if(_12==google.maps.GeocoderStatus.OK){
_f._addMarker(m,_11[0].geometry.location);
}else{
alert("Could not find this address. "+_12);
}
});
}
},"_addMarker":function(m,_14){
var _15=this;
var _16=this.map;
var _17=new google.maps.Marker({map:_16,position:_14,title:m.description,animation:google.maps.Animation.DROP});
m.latitude=_14.lat();
m.longitude=_14.lng();
m.marker=_17;
if(!_15.markers){
_15.markers=new Array();
}
_15.markers.push(_17);
var _18=new google.maps.InfoWindow({content:m.widget!=null?m.widget.eze$$DOMElement:m.description});
google.maps.event.addListener(_17,"click",function(){
_18.open(_16,_17);
});
_16.setCenter(_14);
},"removeMarker":function(m){
if(m.marker!=null){
m.marker.setMap(null);
}
},"removeAllMarkers":function(){
if(this.markers){
for(var i=0;i<this.markers.length;i++){
if(this.markers[i]!=null){
this.markers[i].setMap(null);
}
}
}
},"showRoute":function(_1b,end){
var _1d=this;
var _1e={origin:_1b,destination:end,travelMode:google.maps.DirectionsTravelMode.DRIVING};
_1d.directionsService.route(_1e,function(_1f,_20){
if(_20==google.maps.DirectionsStatus.OK){
_1d.directionsDisplay.setDirections(_1f);
}
});
},"getChildren":function(){
return null;
},"getZoom":function(){
return this.zoom;
},"setZoom":function(_21){
this.zoom=_21;
if(this.map){
this.map.setZoom(this.zoom);
}
},"getMapType":function(){
return this.mapType;
},"setMapType":function(_22){
this.mapType=_22;
if(this.map){
this.map.setMapTypeId(_22);
}
},"showCurrentLocation":function(_23){
var _24=this;
var _25=this.map;
var _26=false;
if(navigator.geolocation){
try{
navigator.geolocation.getCurrentPosition(function(_27){
var _28=new google.maps.LatLng(_27.coords.latitude,_27.coords.longitude);
_24.showMarkerAtPosition(_28,_23);
},function(){
alert("Location not found.");
});
}
catch(ex){
_26=true;
}
}else{
if(google.gears){
var geo=google.gears.factory.create("beta.geolocation");
geo.getCurrentPosition(function(_2a){
var _2b=new google.maps.LatLng(_2a.coords.latitude,_2a.coords.longitude);
_24.showMarkerAtPosition(_2b,_23);
},function(){
alert("Location not found.");
});
}else{
_26=true;
}
}
if(_26){
alert("This browser does not support geolocation.");
}
},"showAddress":function(_2c,_2d){
var _2e={address:_2c,description:_2d,openInfoWindowOnCreate:true};
this.addMarker(_2e);
},"refresh":function(){
if(this.map){
google.maps.event.trigger(this.map,"resize");
}
}});
