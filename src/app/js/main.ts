import Map = require('esri/map');
import MapWidget = require('widgets/map/Widget');
import Search = require('esri/dijit/Search');

var node:any = document.getElementById('mapDiv');

var options:any = {
  mapOptions: {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  }
};

var mapWidget:MapWidget = new MapWidget(options, node);

var search:Search = new Search({ map: mapWidget.map  }, 'searchDiv');
search.startup();

