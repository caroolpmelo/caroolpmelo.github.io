angular
    .module('Post', []);
angular
	.module('User', []);
angular
	.module('Comment', []);
angular
	.module('angularAppRoutes', []);
angular
	.module('angularApp', [
		'ui.router',
		'Post',
		'User',
		'Comment',
		'angularAppRoutes'
		]);

angular
	.module('angularApp')
	.run(function($rootScope, $state) {
   		$rootScope.stateFac = $state;
  	});
  	
//Data binding in AngularJS is the synchronization between the model and the view.
//The data model is a collection of data available for the application.
//The HTML container where the AngularJS application is displayed, is called the view.