vidApp.factory("videoService", function($http){
    var _videos = [];

    var _getVideos = function(){
        $http.get("http://127.0.0.1:5000/video/")
            .then(function(results){
                //Success
                //the results.data._items part is why the original API didn't work.
                angular.copy(results.data._items, _videos); 
            }, function(results){
                //Error
            })
    }

    /*var _addNewVideo = function(video){
        _videos.splice(0, 0, video);
    } */

    function _addDB(newVideo){
    return $http.post("http://127.0.0.1:5000/video",newVideo).then(function(res){
      return res.data;
    })
  }

    return{
        videos: _videos,
        getVideos: _getVideos,
        addDB: _addDB
        //addNewVideo: _addNewVideo
    };
});