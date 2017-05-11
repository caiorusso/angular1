(function() {
  angular.module('firstApp').controller('DashboardCtrl', [
  '$scope',
  '$http',
  DashboardController
])

function DashboardController($scope, $http) {
  const vm = $scope
  vm.getSummary = function() {
    const url = 'http://localhost:3003/api/billingSummary'
    $http.get(url).then(function(response) {
      const {credit = 0, debt = 0} = response.data
      $scope.credit = credit
      $scope.debt = debt
      $scope.total = credit - debt
    })
  }

  $scope.getSummary()
}
})()
