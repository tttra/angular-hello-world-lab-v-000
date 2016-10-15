function MainController($scope) {
  $scope.personality = "funny"
  $scope.lovebeingmarried = "of course!"
}

angular
  .module('app')
  .controller('MainController', MainController)