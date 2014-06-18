crewlink.controller('SliderController', function($scope) {

  // http://www.sitepoint.com/creating-slide-show-plugin-angularjs/ 

  $scope.images = [{
    src: 'img1.png',
    title: 'Pic 1'
  }, {
    src: 'img2.jpg',
    title: 'Pic 2'
  }, {
    src: 'img3.jpg',
    title: 'Pic 3'
  }, {
    src: 'img4.png',
    title: 'Pic 4'
  }, {
    src: 'img5.png',
    title: 'Pic 5'
  }];
}).directive('slideshowDirective' ,function(){

  link: 
  scope.currentIndex = 0; // Initially the index is at the first image
 
scope.next = function() {
  scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
};
 
scope.prev = function() {
  scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
};
});