vidApp.factory("videoService", function($http){
    var _videos = [];

    var _getVideos = function(){
        $http.get("js/data/data2.json")
            .then(function(results){
                //Success
                angular.copy(results.data, _videos); //this is the preferred; instead of $scope.movies = result.data
            }, function(results){
                //Error
            })
    }

    var _addNewVideo = function(video){
        _videos.splice(0, 0, video);
    }

    return{
        videos: _videos,
        getVideos: _getVideos,
        addNewVideo: _addNewVideo
    };
});