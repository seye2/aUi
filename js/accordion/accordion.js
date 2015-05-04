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
				accData:'='
			},
			templateUrl:'../../template/accordion/accordion.html',
			link:function(scope, el, attrs) {
				scope.panelBaseId=attrs.collapsePanelBodyId;
				scope.panelId=attrs.collapsePanelId;
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
		$scope.activeTabs=[];

		//get data
		var accAPI=accFactory.getData();
		accAPI.success(function(data) {
			$scope.accData=data;
		});

		//check if the tab is active
		$scope.isOpenTab=function(tab) {
			if($scope.activeTabs.indexOf(tab) > -1) {
				return true;
			} else {
				return false;
			}
		}
		
		//function to 'open' a tab
		$scope.openTab = function(tab) {
			if($scope.isOpenTab(tab)) {
				//if it is, remove it from the activeTabs array
				$scope.activeTabs.splice($scope.activeTabs.indexOf(tab),1);
			} else {
				//if it's not, add it!
				$scope.activeTabs.push(tab);
			}
		}

	})

