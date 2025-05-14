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
// L.marker([28.6000, 81.6333], {icon: greenIcon}).addTo(map).bindPopup("Community-Based Disaster Risk Management and Early Warning Activity, 2019 to 2021, World Bank");
// L.marker([15.3694, 44.1910], {icon: greenIcon}).addTo(map).bindPopup("Project - Sanaa");
// L.marker([31.1048, 77.1734], {icon: greenIcon}).addTo(map).bindPopup("Project - Shimla");
// L.marker([23.7271, 92.7176], {icon: greenIcon}).addTo(map).bindPopup("Project - Aizawl");

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

// Highlighted countries with project information (approximate center coordinates)
var projectHighlights = [
  {
    coords: [33.9391, 67.7100], // Afghanistan
    popup: `
      <b>Development Monitors Past Projects - Afghanistan</b><br><br>
      Community-Based Disaster Risk Management and Early Warning Activity, 2019 to 2021, World Bank<br>
      <i>Team Lead: Ms. Arati Belle</i><br><br>
      Technical Assistance for School Infrastructure Delivery in Afghanistan, 2018 to 2020, World Bank<br>
      <i>Team Lead: Ms. Ditte Fallesen</i><br><br>
      Disaster Risk Management Training for Government Officials, 2019, World Bank<br>
      <i>Team Lead: Ms. Ditte Fallesen</i>
    `
  },
  {
    coords: [51.1657, 10.4515], // Germany
    popup: `
      <b>Development Monitors Past Projects - Germany</b><br><br>
      Remote Management, Monitoring, and Verification Study, 2017-2018, German Bank for Reconstruction<br>
      <i>Team Lead: Mr. Michael Gruber</i>
    `
  },
  {
    coords: [20.5937, 78.9629], // India
    popup: `
      <b>Development Monitors Past Projects - India</b><br><br>
      Development of quality infrastructure diagnostic and planning toolkits for water supply systems in high-risk zones in India, 2022 to 2023, World Bank<br>
      <i>Task Team Lead: Mr. Anup Karanth</i>
    `
  },
  {
    coords: [28.3949, 84.1240], // Nepal
    popup: `
      <b>Development Monitors Past Projects - Nepal</b><br><br>
      Kickstarting Watershed Management Activities in Birendranagar, Nepal, 2024 to 2025, World Bank<br>
      <i>Team Lead: Ms. Amelia Midgley</i>
    `
  },
  {
    coords: [37.0902, -95.7129], // USA
    popup: `
      <b>Development Monitors Past Projects - USA</b><br><br>
      Development of a disaster risk assessment and recovery technology using low-cost UAVs, 2021 to 2023, Virginia Tech Uncrewed Systems Lab<br>
      <i>Director: Professor Kevin Kochersberger</i>
    `
  },
  {
    coords: [15.5527, 48.5164], // Yemen
    popup: `
      <b>Development Monitors Past Projects - Yemen</b><br><br>
      Yemen Agriculture Sector Study for Food and Nutrition Security – Economic Analysis, 2024 to 2025, World Bank<br>
      <i>Team Lead: Mr. Artavazd Hakobyan</i><br><br>
      Sustainability and resilience assessment of water and sanitation schemes in Yemen, 2023 to 2024, World Bank<br>
      <i>Team Lead: Mr. Naif Abu-Lohom</i><br><br>
      Enhancing the quality of climate-resilient infrastructure design approaches in seven Yemen Cities, 2022 to 2023, World Bank<br>
      <i>Team Lead: Mr. Hogeun Park</i><br><br>
      Planning for Future Climate-resilient and Low-Carbon Development in the Urban Context in Aden, Yemen, 2022, World Bank<br>
      <i>Team Lead: Ms. Emily Owen</i><br><br>
      Solid Waste Management and Gender Assessments for Yemen Integrated Urban Services Emergency Project II, 2022, World Bank<br>
      <i>Team Lead: Mr. Hogeun Park</i><br><br>
      Bringing Back Business in Yemen - Construction Sector Assessment, 2018 to 2019, World Bank<br>
      <i>Team Lead: Sami Sofan</i>
    `
  }
];

// Add markers with popups
projectHighlights.forEach(item => {
  L.marker(item.coords, {icon: greenIcon}).addTo(map).bindPopup(item.popup);
});

