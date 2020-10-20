import "./videoitem.css";
import React from "react";

const VideoItem = ({video, selected}) => {
    return(
        <div className="ui container">
            <div className="video-item">
                <div onClick={()=>selected(video)} className="item">
                    <div className="content">
                        <h4> {video.snippet.title} </h4>
                    </div>
                    <img alt={video.snippet.title} style={{maxWidth: 180 }} className="ui image" src={video.snippet.thumbnails.medium.url}  />
                </div>
            </div>
        </div>
    )
}
export default VideoItem;