import React from 'react'

const VideoItem = ({ video }) => {
    const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSource}/>
            </div>
            <div className="ui segment">
            {video.snippet.title}
            </div>
        </div>
    )
}

export default VideoItem