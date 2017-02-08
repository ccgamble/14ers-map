mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FtYmxlY2MiLCJhIjoiY2ltcnYwb3pzMDE3M3Y3a2sxY3MyZmdhNCJ9.jhiY7nr5PpZ3SosSf16bIA'; // replace this with your access token
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/gamblecc/ciyx8t558001r2sjyv3u24g7m' // replace this with your style
});

map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['14ers'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<h3>' + feature.properties.Name + '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
