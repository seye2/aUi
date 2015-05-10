// set angular module

angular.module('aUi.component',['aUi.component.accordion']);
angular.module('aUi.component.accordion',[])
	//control DOM
	.directive('collapse',function($http,$compile) {
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
			require:'?accData',
			scope:{
				/*
				1. "@"   (  Text binding / one-way binding )
				2. "="   ( Direct model binding / two-way binding )
				3. "&"   ( Behaviour binding / Method binding  )
				*/
				accData:'=',
				ngModel:'='
			},
			templateUrl:'../../template/accordion/accordion.html',
			link:function(scope, el, attrs) {
				scope.panelBaseId=attrs.collapsePanelBodyId;
				scope.panelId=attrs.collapsePanelId;
		
				//function to 'open' a tab
				scope.tabStatus = function() {
					var target=$(event.target).closest('.panel').find('.panel-collapse');
					
					if(target.attr('class').match('expand')) {
						target.removeClass('expand');
					} else {
						target.addClass('expand');
					}
				}
			}

		};
	})
	//injection code(ajax,cookie,i/o)
	.factory('accFactory',function($http) {
		
		// get url
		var accAPI = {};

		accAPI.getData = function() {
		  return $http.get('../../data/accordion.json');
		}

		return accAPI;

	})
	//control scope
	.controller('accController',function($http,$scope,accFactory) {

		//get data
		var accAPI=accFactory.getData();
		accAPI.success(function(data) {
			$scope.accData=data;
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

