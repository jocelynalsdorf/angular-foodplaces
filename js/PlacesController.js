foodPlaces.controller('PlacesCtrl', function PlacesCtrl($scope){
  $scope.places = [];
  $scope.addPlace = function() {
    $scope.places.push({name: $scope.placeName, type: $scope.placeType});
    $scope.placeName = null;
    $scope.placeType = null;
  }
  $scope.deletePlace =  function(place) {
    var index = $scope.places.indexOf(place);
    $scope.places.splice(index,1);
  }
});