// set angular module

angular.module('aUi.component',['aUi.component.carousel']);
angular.module('aUi.component.carousel',[]).directive('slick',function($timeout) {
    return {
        restrict: 'AE',
        scope: {
            accessibility: '@',
            arrows: '@',
            autoplay: '@',
            autoplaySpeed: '@',
            centerMode: '@',
            centerPadding: '@',
            cssEase: '@',
            dots: '@',
            draggable: '@',
            easing: '@',
            fade: '@',
            infinite: '@',
            lazyLoad: '@',
            onBeforeChange: '@',
            onAfterChange: '@',
            onInit: '@',
            onReInit: '@',
            pauseOnHover: '@',
            responsive: '@',
            slide: '@',
            slidesToShow: '@',
            slidesToScroll: '@',
            speed: '@',
            swipe: '@',
            touchMove: '@',
            touchThreshold: '@',
            vertical: '@'
        },
        link: function (scope, element, attrs) {
            return $(element).slick({
                accessibility: scope.accessibility != null ? Boolean(scope.accessibility) : true,
                arrows: scope.arrows != null ? Boolean(scope.arrows) : true,
                autoplay: Boolean(scope.autoplay),
                autoplaySpeed: scope.autoplaySpeed != null ? parseInt(scope.autoplaySpeed, 10) : 3000,
                centerMode: Boolean(scope.centerMode),
                centerPadding: scope.centerPadding || '50px',
                cssEase: scope.cssEase || 'ease',
                dots: Boolean(scope.dots),
                draggable: scope.draggable != null ? Boolean(scope.draggable) : true,
                easing: scope.easing || 'linear',
                fade: Boolean(scope.fade),
                infinite: scope.infinite != null ? Boolean(scope.infinite) : true,
                lazyLoad: scope.lazyLoad || 'ondemand',
                onBeforeChange: scope.onBeforeChange || null,
                onAfterChange: scope.onAfterChange || null,
                onInit: scope.onInit || null,
                onReInit: scope.onReInit || null,
                pauseOnHover: scope.pauseOnHover != null ? scope.pauseOnHover : true,
                responsive: scope.responsive || null,
                slide: scope.slide || 'div',
                slidesToShow: scope.slidesToShow != null ? parseInt(scope.slidesToShow, 10) : 1,
                slidesToScroll: scope.slidesToScroll != null ? parseInt(scope.slidesToScroll, 10) : 1,
                speed: scope.speed != null ? parseInt(scope.speed, 10) : 300,
                swipe: scope.swipe != null ? scope.swipe : true,
                touchMove: scope.touchMove != null ? scope.touchMove : true,
                touchThreshold: scope.touchThreshold ? parseInt(scope.touchThreshold, 10) : 5,
                vertical: scope.vertical != null ? scope.vertical : false
            });
        }
    };
});

