foodPlaces.controller('OpenCtrl', function OpenCtrl($scope, PlacesFactory) {
  $scope.places = PlacesFactory.places;
  // $scope.addPlaceNowOpen = function(place) {
  //   place.openNow = true;
  // };
  $scope.PlacesFactory = PlacesFactory;
});