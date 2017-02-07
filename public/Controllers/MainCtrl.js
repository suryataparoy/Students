var app = angular.module('SchoolApp', []);
var showTable=false;

app.controller('MainCtrl', function($scope) {
   $scope.studs=[{}];
    $scope.addItem = function(stud) {
        $scope.studs.push(stud);
        $scope.stud = {};
    };
    console.log($scope.studs);
    $scope.mystuds = [];
    
    $scope.addmember = function(stud)
    {
      $scope.mystuds.push(stud);
      $scope.studs=[{}];
      $scope.showTable=showTable;
      $scope.showTable=true;
    }
    $scope.deleteRow=function(stud){
      var index = -1;
    var studentArray = eval($scope.mystuds);

    for (var i = 0; i < studentArray.legnth; i++) {
        if (studentArray[i].Name == stud.Name) {
            index = i;

        console.log(studentArray[i].Name);
        }
    }
    if (index === -1) {
        alert("Are you sure you want to delete this entry?");
    }

    $scope.mystuds.splice(index, 1);

    }
    $scope.searchschool = function(){
           $scope.studs=[{}];

        if($scope.myschool == $scope.stud.school){
            $scope.mystuds.push(stud);               
        }
    }
});
