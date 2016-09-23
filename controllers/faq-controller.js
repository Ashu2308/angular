app.controller('faq-controller', function($scope){
	$scope.msg = "I have new faq controller";
	$scope.number = {
               
               summation: function() {
                  var sum;
                  sum = $scope.number;
                  return parseInt(sum.first) + parseInt(sum.last);
               }
            };
			
	$scope.checking = function(){
		alert($scope.user);
	};
})