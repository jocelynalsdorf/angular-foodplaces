foodPlaces.controller('OpenCtrl', function OpenCtrl($scope, PlacesFactory) {
  $scope.places = PlacesFactory.places;
  $scope.PlacesFactory = PlacesFactory;
});