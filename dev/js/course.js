// set angular module
angular.module('aUi.component',['aUi.component.courseApp']);
angular.module('aUi.component.courseApp',['ngRoute','ngAnimate'])
	.config(function($locationProvider,$routeProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider.when('/course',{
			templateUrl:'/front-src/template/course/home.html',
			controller:'HomeCtrl'
		})
		.when('/course/:id',{
			templateUrl:'/front-src/template/course/course.html',
			controller:'ViewCourseCtrl'
		})
	})
	.factory('coursesDataSvc',function(){
		var courses=[
			{
				'id':1,
				'title':'Introduction to Angular JS',
				'rating':4,
				'category':'JavaScript',
				'level':'100',
				'topics':[
					'What is Angular JS?',
					'Basics and Data binding',
					'Building blocks',
					'Services, Values and Factories',
					'AJAX and Promises',
					'Routing'
				]
			},
			{
				'id':2,
				'title':'Advanced Angular JS',
				'rating':4.5,
				'category':'JavaScript',
				'level':'300',
				'topics':[
					'Directives',
					'Animations',
					'Unit Testing',
					'End-to-end Testing'
				]
			},
			{
				'id':3,
				'title':'ASP.NET MVC Fundamentals',
				'rating':4,
				'category':'ASP.NET',
				'level':'200',
				'topics':[
					'Web forms vs MVC',
					'Why MVC?',
					'Model',
					'View',
					'Controller',
					'Going further...'
				]
			},
			{
				'id':4,
				'title':'ASP.NET in VS 2013',
				'rating':4,
				'category':'ASP.NET',
				'level':'300',
				'topics':[
					'Overview',
					'OWIN and Katana',
					'Updates to Web Forms',
					'Updates to MVC and Razor Views',
					'Web API 2 and OData',
					'Tooling Support'
				]
			},
			{
				'id':5,
				'title':'Async in C#',
				'rating':4.2,
				'category':'C#',
				'level':'400',
				'topics':[
					'Introduction',
					'Evolution of async with C# and .NET',
					'Task Parallel Library',
					'Using async and await',
					'Patterns and Best Practices'
				]
			},
			{
				'id':6,
				'title':'LINQ',
				'rating':3.8,
				'category':'C#',
				'level':'200',
				'topics':[
					'C# Language improvements',
					'Basic LINQ Queries',
					'Queries in Lambda Expression Syntax',
					'Deferred and Immediate Execution',
					'LINQ in Layered Applications',
					'Expressions and LINQ to Remote'
				]
			}
		];

		//HomeCtrl
		function getAllCourses() {
			return courses;
		}

		function getCourse(id) {
			//use underscore _.filter
			var filtered = _.filter(courses,function(c) {
				return c.id===id;
			});

			return filtered[0];
		}

		return {
			getAllCourses:getAllCourses,
			getCourse:getCourse
		}
	})
	.controller('HomeCtrl',function($scope, coursesDataSvc) {
		console.log('ddd');
		$scope.courses=coursesDataSvc.getAllCourses();
	})
	.controller('ViewCourseCtrl',function($scope,$routeParams,coursesDataSvc) {
		if($routeParams.id) {
			console.log($routeParams.id);
			$scope.course=coursesDataSvc.getCourse(parseInt($routeParams.id));
		} else {
			$scope.course=coursesDataSvc.getCourse(1);
		}
	});
