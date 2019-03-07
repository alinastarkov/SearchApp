import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
    const videosList = videos.map((video)=> {
        return <VideoItem  key={video.id.videoID} video={video}/> 
    })

    return (<div className="">{videosList}</div>)
}

export default VideoList 