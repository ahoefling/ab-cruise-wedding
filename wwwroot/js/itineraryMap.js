itineraryMap = {
    $newYork: null,
    $florida: null,
    $cococay: null,
    $nassau: null,
    $map: null,
    $view: null,
    $zoom: null,
    initialize: function(){
        itineraryMap.$newYork = ol.proj.fromLonLat([-74.072564, 40.665126]);
        itineraryMap.$florida = ol.proj.fromLonLat([-80.627721, 28.416275]);
        itineraryMap.$cococay = ol.proj.fromLonLat([-77.938920, 25.819369]);
        itineraryMap.$nassau = ol.proj.fromLonLat([-77.340213, 25.079547]);
        itineraryMap.$zoom = 7;

        itineraryMap.$view = new ol.View({
            center: itineraryMap.$newYork,
            zoom: itineraryMap.$zoom
        });

        itineraryMap.$map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            preload: 4,
            source: new ol.source.OSM()
          })
        ],
        loadTilesWhileAnimating: true,
        view: itineraryMap.$view
      });

      var height = $('.itinerary .columns:first').height();
      $('#map').height(height);
      itineraryMap.$map.updateSize();
    },
    panMap: function(location, zoom){
        var currentZoom = null;
        if(zoom != undefined){
            currentZoom = zoom;
        } else {
            currentZoom = itineraryMap.$zoom;
        }

        itineraryMap.$view.animate({
            center: location,
            duration:3000,
            zoom: currentZoom
        });
    }
};