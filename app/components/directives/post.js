angular
    .module('Post')
    .directive('post', function(){
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                userId: '=',
                postId: '=',
                title: '=',
                hideReadMore: '=',
                hideNameAndEmail: '='
            }, controller: function($scope, $http){
                $http
                    .get('https://jsonplaceholder.typicode.com/users/'+$scope.userId)
                    .then(function(response){
                        var data = response.data;
                        $scope.name = data.name;
                        $scope.email = data.email;
                    }, function(reason){
                        console.log(reason.status);
                    });
            },templateUrl: 'app/components/templates/directives/post.html'
        }
    });