import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <ul className="space-y-4">
            {videos.map((video, index) => (
                <VideoItem key={index} video={video} />
            ))}
        </ul>
    );
};

export default VideoList;
