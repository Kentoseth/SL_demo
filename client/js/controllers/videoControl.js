/* The controller uses functionality from Service. A great way to separate concerns and understand what is happening.
These 2 things can be combined into 1 document, but keeping them separate makes Angular much easier. */

vidApp.controller("videoControl", function ($scope, videoService){
 
    $scope.videos = videoService.videos;

    videoService.getVideos();

    //empty object for new videos
    $scope.newVideo = {};

    $scope.addNewVideo = function(){
    	
    	videoService.addDB($scope.newVideo).then(function(result){
    	$scope.stuff.push(result);
    })
    	//The code written below was the initial code, it worked/works, but I struggled with the CORS issue/s.
    	
    	//var video = {title: videoTitle, description: videoDesc, url: videoUrl};
    	//videoService.addDB(video);

    	//This part was a bit sketchy though, not sure it helped (it basically sent output to the screen only)
    	//videoService.addNewVideo(video);
    }
});