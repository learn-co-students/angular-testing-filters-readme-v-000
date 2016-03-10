describe('ContactController', function() {
  var $controller;

  beforeEach(module('app'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  it('should filter the results correctly.. man', function() {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});

    expect($scope.vm.filteredList[0]).toEqual({name: 'Tom'})
  });

  it('should re-filter the results correctly when search term is changed', function() {
    var $scope = {};
    $controller('ContactController as vm', {$scope: $scope});

    $scope.vm.search = "B";
    $scope.vm.changeFilter();
    expect($scope.vm.filteredList[0]).toEqual({name:'Bob'});
  });
});
