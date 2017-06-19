angular
  .module('Comment')
  .directive('comment', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        commentId: '=',
        name: '=',
        email: '='
      },templateUrl: 'app/components/templates/directives/comment.html'
    }
  });
