featureToggleFrontend.controller('ToggleDangerController', ['$scope', 'toggleService', '$location', function($scope, toggleService, $location) {

    $scope.canSeeDangerZone = true; // todo
    $scope.confirm = false;

    $scope.deleteToggle = function(){
        var application = $scope.applicationName;
        var featureName = $scope.featureName;

        if (!$scope.confirm){
            $scope.confirm = true;
            return;
        }

        toggleService.deleteToggle(application, featureName, function(err){
            if (err){
                $scope.$emit('error', 'Failed to delete toggle. See console for more detail.', err);
                return;
            }
            $location.path("/applications/" + application);
        });
    };
}]);