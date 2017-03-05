var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	// map = new L.Map('map');
	map = L.map('mapid').setView([51.3, 0.7],9);

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});

	// start the map in South-East England
	// map.setView(new L.LatLng(51.3, 0.7),9);
	map.addLayer(osm);
}

initmap();

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	maxZoom: 18,
// 	id: 'your.mapbox.project.id',
// 	accessToken: 'your.mapbox.public.access.token'
// }).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

var circle = L.circle([51.508, -0.11], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 500,
}).addTo(map);

var polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047],
]).addTo(map);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

var popup = L.popup()
	.setLatLng([51.5, -0.09])
	.setContent("I am a standalone popup.")
	.openOn(map);

function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
