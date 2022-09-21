// This array contains the coordinates for all bus stops between Rutherford and NY Penn Station
const busStops = [
  [-74.075836, 40.761409],
  [-73.993297, 40.752368],
];


//40.752368007485074, -73.99329755828835
// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiYmRvbjE0IiwiYSI6ImNsOGF6NjR3ZjAwYWQzdnNzN3Z2emI5c3UifQ.mc57OV6zq7IfVa9zA2BMJg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.106812, 40.826488],
  zoom: 11,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

let marker = new mapboxgl.Marker()
  .setLngLat([-74.100833, 40.828314])
  .addTo(map);

  //40.82831404697321, -74.10083304856896


// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
