import React from "react";
import VideoItem from "./videoitem";

const VideoList = ({videos, selected}) => {
    const renderedList = videos.map( (video) => {
        return <VideoItem video={video} selected={selected}/>
    })
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}
export default VideoList;