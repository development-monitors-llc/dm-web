// Initialize map
var map = L.map('map').setView([20, 0], 2); // world view

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Custom icons
var blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Blue markers - Offices
L.marker([38.89511, -77.03637], {icon: blueIcon}).addTo(map).bindPopup("Office - Washington DC");
L.marker([28.6139, 77.2090], {icon: blueIcon}).addTo(map).bindPopup("Office - New Delhi");

// Green markers - Projects
L.marker([28.6000, 81.6333], {icon: greenIcon}).addTo(map).bindPopup("Project - Birendranagar");
L.marker([15.3694, 44.1910], {icon: greenIcon}).addTo(map).bindPopup("Project - Sanaa");
L.marker([31.1048, 77.1734], {icon: greenIcon}).addTo(map).bindPopup("Project - Shimla");
L.marker([23.7271, 92.7176], {icon: greenIcon}).addTo(map).bindPopup("Project - Aizawl");

// Legend
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML += "<h4>Legend</h4>";
  div.innerHTML += '<i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png); background-size: contain; width: 20px; height: 30px; display: inline-block;"></i> Offices<br>';
  div.innerHTML += '<i style="background-image: url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png); background-size: contain; width: 20px; height: 30px; display: inline-block;"></i> Projects<br>';
  return div;
};

legend.addTo(map);
