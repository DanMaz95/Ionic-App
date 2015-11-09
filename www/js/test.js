angular.module('test')
.factory('List', function ItemsFactory($http){

    //not sure how to make this part work or work for all the lists. Not really even sure if this is this is what we are supposed to do for this part.
    
    $scope.todohome = {
    task : ''
  };

  if ($localStorage.hometasks) {
    $scope.tasks = $localStorage.hometasks;
  } else {
    $scope.tasks = ['Item 1', 'Item 2', 'Item 3'];
  }

  $scope.addTask = function() {
    if ($scope.todohome.task) {

      $scope.tasks.push($scope.todohome.task);

      $localStorage.hometasks = $scope.tasks;

      $scope.todohome.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.hometasks = $scope.tasks;

  }
  
  $scope.vibrate = function(ms) {
    cordovaVibrationService.vibrate(ms);
};
    
});
      