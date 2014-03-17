function Video(questionIndex){
	
	var self = Ti.UI.createWindow({
		backgroundColor:'white',
    	barColor:'#940315'
	});

	/*
	var webVideo = Ti.UI.createWebView({
		url:'http://www.youtube.com/watch?v=3ovGokorQhA',
		height: Ti.UI.SIZE,
		width:Ti.UI.SIZE
	});*/
	
	var caseVideo;
	
	if(questionIndex ===0){
		caseVideo = 'videos/clip1.mp4';
	}
	else if(questionIndex ===1){
		caseVideo = 'videos/clip2.mp4';
	}
	else if (questionIndex===2){
		caseVideo = 'videos/clip3.mp4';
	};
	
	var videoPlayer = Titanium.Media.createVideoPlayer({
		top: '25%',
		url: caseVideo,
		autoplay: true,
		backgroundColor: 'blue',
		height: '50%',
		width: '100%',
		mediaControlStyle: Titanium.Media.VIDEO_CONTROL_DEFAULT
	});
	
	self.add(videoPlayer);
	//self.add(webVideo);
	return self;
	
};

module.exports = Video;
	
