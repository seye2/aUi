// set angular module
// reference url : http://subliminalsources.com/97/angularjs-bootstrap-components-part-2-building-collapse-accordion-directive/
angular.module('aUi.component',['aUi.component.accordion']);
angular.module('aUi.component.accordion',[])
	.directive('collapse',function() {
		return{
			restrict:'EA',
			templateUrl:'../../template/accordion/accordion.html',
			link:function(scope, el, attrs) {
				scope.panelBaseId=attrs.collapsePanelBodyId;
				scope.panelId=attrs.collapsePanelId
			}

		};
	});
