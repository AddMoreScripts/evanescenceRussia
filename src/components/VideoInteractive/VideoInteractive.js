import React, { useState } from 'react'
import VideoThumb from '../VideoThumb'
import './VideoInteractive.css'

const VideoInteractive = ({urlOrId}) => {

    function youtube_parser(url){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : false;
    }

    let youtId = "";
    if(youtube_parser(urlOrId)){
        youtId = youtube_parser(urlOrId);
    } else {
        youtId = urlOrId;
    }

    const [videoIsLoad, loadVideo] = useState(false);

    const videoHandler = (e) => {
        e.preventDefault();
        loadVideo(true);
    }

    
    if(videoIsLoad) {
        return (
            <span className="page__videoframe">
                <iframe 
                    title={urlOrId}
                    src={"https://www.youtube.com/embed/" + youtId + "?autoplay=1&showinfo=0"}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </span>
        )
    } else {
        return (
            <VideoThumb
            thumb={"https://img.youtube.com/vi/" + youtId  + "/maxresdefault.jpg"}
            link={false}
            big={true}
            red={true}
            onClick={videoHandler}
        />
        )
    }
};


VideoThumb.defaultProps = {
    urlOrId: "",
}



export default VideoInteractive