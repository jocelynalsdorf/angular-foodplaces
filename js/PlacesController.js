foodPlaces.controller('PlacesCtrl', function PlacesCtrl($scope){
  $scope.places = [];
  $scope.addPlace = function() {
    $scope.places.push({name: $scope.placeName, type: $scope.placeType});
    $scope.studentName = null;
  }
  $scope.deletePlace =  function(place) {
    var index = $scope.students.indexOf(student);
    $scope.places.splice(index,1);
  }
});