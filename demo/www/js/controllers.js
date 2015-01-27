

angular.module('starter.controllers', ["angles"])


.service('sharedProperties', function () {
        var property;
        var timer
        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            },
            setTimer:function(argument) {
              timer=argument;
            },
            getTimer:function(){
              return timer;
            }

        };
    })

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
/*
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

*/

.controller('TimeRemaining', function($scope,sharedProperties) {
  $scope.timeremaining = 25;
  sharedProperties.setTimer($scope.timeremaining);
  $scope.date="12/11/2014";
  $scope.duration="11.30 am - 5.00 pm";
  $scope.area="Area 1";
  $scope.loc="25566 yy";
})


/*
api call for the details of ticket here..
*/

.controller("FeedController", function($http, $scope,sharedProperties) {
 
    $scope.init = function() {

        $http.get("http://echo.jsontest.com/conditions/frightful")
            .success(function(data) {
               data=[
                        { title: 'JHN123A', id: 1 , parkingdate: '12/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'300',area1:'wereq',area2:'rpty'},
                        { title: 'JHG123A', id: 2 , parkingdate: '13/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'200',area1:'wertq',area2:'iety'},
                        { title: 'JHN126A', id: 3 , parkingdate: '17/10/2013',starttime:'12.00 pm',endtime:'2.00 pm',length:'2',feepaid:'100',area1:'aereq',area2:'reyy'},
                        { title: 'JHN113A', id: 4 , parkingdate: '12/10/2014',starttime:'1.00 pm',endtime:'2.00 pm',length:'1',feepaid:'240',area1:'werwq',area2:'reoy'},
                        { title: 'GHN326A', id: 5 , parkingdate: '13/10/2014',starttime:'11.00 am',endtime:'5.00 pm',length:'6',feepaid:'170',area1:'weteq',area2:'remy'},
                        { title: 'JFN123A', id: 6 , parkingdate: '14/10/2013',starttime:'11.00 am',endtime:'3.00 pm',length:'4',feepaid:'390',area1:'wermq',area2:'rkty'}
                    ];
                $scope.entries = data;
                sharedProperties.setProperty($scope.entries);
               

            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }
 
})
/*
api call to get the historical data.
*/
.controller('ChartCtrl', function($scope, $stateParams,sharedProperties) {
   $scope.chart = {
    labels : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets : [
        {
            fillColor : "rgba(151,187,205,0)",
            strokeColor : "#e67e22",
            pointColor : "rgba(151,187,205,0)",
            pointStrokeColor : "#e67e22",
            data : [4, 3, 5, 4, 6]
        }
       
    ], 
};
  $scope.area1usage='10';
  $scope.area2usage='30';
  $scope.area3usage='15';
  $scope.recplan="6 months parking for all areas";
  $scope.amountsave="50";
})


.controller('MyCtrl', function($scope, $stateParams,sharedProperties) {
  $scope.areas = [
  {name:'Area1', id:'1'},
  {name:'WereNam', id:'2'},
  {name:'Namen', id:'3'},
  {name:'Tammaa', id:'4'},
  {name:'Sean',id:'5'}
];
$scope.dosth = function(vari) {
  console.log(vari.name);
};
})


.controller('PlaylistCtrl', function($scope, $stateParams,sharedProperties) {
    $scope.contid=sharedProperties.getProperty()[$stateParams.playlistId-1];
    console.log(sharedProperties.getProperty()[$stateParams.playlistId-1]);
    $scope.timer=sharedProperties.getTimer();
});


