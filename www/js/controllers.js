angular.module('starter.controllers', ['cordovaVibrationModule'])
//               do i put 'test here'^?                         
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})

//.......................................................

.controller('TodoBizCtrl', function($scope, $localStorage) {
  $scope.todobiz = {
    task : ''
  };

  if ($localStorage.biztasks) {
    $scope.tasks = $localStorage.biztasks;
  } else {
    $scope.tasks = ['Item 1', 'Item 2', 'Item 3'];
  }

  $scope.addTask = function() {
    if ($scope.todobiz.task) {

      $scope.tasks.push($scope.todobiz.task);

      $localStorage.biztasks = $scope.tasks;

      $scope.todobiz.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.biztasks = $scope.tasks;

  }
  
  $scope.vibrate = function(ms) {
    cordovaVibrationService.vibrate(ms);
};

})

.controller('TodoHomeCtrl', function($scope, $localStorage) {
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
})

.controller('TodoJobsCtrl', function($scope, $localStorage) {
  $scope.todojobs = {
    task : ''
  };

  if ($localStorage.jobstasks) {
    $scope.tasks = $localStorage.jobstasks;
  } else {
    $scope.tasks = ['Item 1', 'Item 2', 'Item 3'];
  }

  $scope.addTask = function() {
    if ($scope.todojobs.task) {

      $scope.tasks.push($scope.todojobs.task);

      $localStorage.jobstasks = $scope.tasks;

      $scope.todojobs.task = '';
    } else {
      alert('Please enter a valid todo task!');
    }
  }

  $scope.removeTask = function(index) {
    delete $scope.tasks[index];

    $localStorage.jobstasks = $scope.tasks;

  }
  $scope.vibrate = function(ms) {
    cordovaVibrationService.vibrate(ms);
};
})

////the vibration thing that didnt work
//.controller('MyCtrl', function($scope, $cordovaVibration) {
//
//  // Vibrate 100ms
//  $cordovaVibration.vibrate(100);
//
//});