foodPlaces.factory('PlacesFactory', function PlacesFactory() {
  var factory = {};
  factory.places = [];

  factory.addPlace = function() {
    var place = { name: factory.placeName, type: factory.placeType, openNow: factory.openNow };
    factory.places.push(place);
    factory.placeName = null;
    factory.placeType = null;
    
  };

  factory.deletePlace = function(place) {
    var index = factory.places.indexOf(place);
    factory.places.splice(index, 1);
  };
  return factory;
});