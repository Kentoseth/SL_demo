vidApp.controller("videoControl", function ($scope, videoService){
 
    $scope.videos = videoService.videos;

    videoService.getVideos();

    $scope.addNewVideo = function(videoName){
    	var video = {title: videoName};
    	videoService.addNewVideo(video);
    }
});