foodPlaces.controller('PlacesCtrl', function PlacesCtrl($scope, PlacesFactory){
  $scope.places = PlacesFactory.places;
  $scope.PlacesFactory = PlacesFactory;
});