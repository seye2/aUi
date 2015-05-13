// set angular module

angular.module('aUi.component',['aUi.component.tab']);
angular.module('aUi.component.tab',[])
	//control DOM
	.directive('tab',function($http,$compile) {
		return{
			/*
			'A' - only matches attribute name
			'E' - only matches element name
			'C' - only matches class name
			*/
			restrict:'EA',
			/*
			? – Will not raise any error if a mentioned directive does not exist.
			^ – Will look for the directive on parent elements, if not available on the same element.
			*/
			require:'?tabData',
			scope:{
				/*
				1. "@"   (  Text binding / one-way binding )
				2. "="   ( Direct model binding / two-way binding )
				3. "&"   ( Behaviour binding / Method binding  )
				*/
				tabData:'='
			},
			templateUrl:'/front-src/template/tab/tab.html',
			link:function(scope, el, attrs) {

				//function to 'open' a tab
				scope.selectTab = function() {
					var target=$(event.target).closest('.tab-wrap');
					$('.tab h3').removeClass('head-active').addClass('head-hide')
						.end().find('.tab-panel').removeClass('panel-active').addClass('panel-hide');

					target.find('h3').addClass('head-active').removeClass('head-hide')
						.end().find('.tab-panel').addClass('panel-active').removeClass('panel-hide');
				}
			}

		};
	})
	//injection code(ajax,cookie,i/o)
	.factory('tabFactory',function($http) {
		
		// get url
		var tabAPI = {};

		tabAPI.getData = function() {
		  return $http.get('/front-src/data/tab.json');
		}

		return tabAPI;

	})
	//control scope
	.controller('tabController',function($http,$scope,tabFactory) {

		//get data
		var tabAPI=tabFactory.getData();
		tabAPI.success(function(data) {
			$scope.tabData=data;
		});

		//add Item
		$scope.addItem = function() {
			$scope.accData.push({
				"title": $scope.title,
				"contents": $scope.content
			});

			$scope.title = '';
			$scope.content = '';

		};

	})

