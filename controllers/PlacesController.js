foodPlaces.controller('PlacesCtrl', function PlacesCtrl($scope, PlacesFactory){
  $scope.places = PlacesFactory.places;
  $scope.PlacesFactory = PlacesFactory;
  // $scope.addPlace = function() {
  //   $scope.places.push({name: $scope.placeName, type: $scope.placeType, openNow: $scope.openNow});
  //   $scope.placeName = null;
  //   $scope.placeType = null;
  // }
  // $scope.deletePlace =  function(place) {
  //   var index = $scope.places.indexOf(place);
  //   $scope.places.splice(index,1);
  // }
});