angular
    .module('User')
    .directive('user', function(){
        return {
            restrict: 'E',//E for element, A for attribute
            //transclude: true,
            scope: {
                userId: '=',
                name: '=',
                username: '=',
                email: '=',
            }, controller: function($scope, $http){
                $scope.posts = [];
                $http
                    .get('https://jsonplaceholder.typicode.com/users/'+$scope.userId+'/posts')
                    .then(function(response){
                        var data = response.data;
                        $scope.posts = data;
                    }, function(reason){
                        console.log(reason.status);
                    });
            },templateUrl: 'app/components/templates/directives/user.html'
        }
    });