import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <li className="bg-white shadow-md p-4 rounded-lg">
            <div className="flex flex-col space-y-2">
                <p className="text-lg font-semibold">Id: {video.id}</p>
                {video.url && (
                    <p className="text-blue-500">
                        URL: <a href={video.url} target="_blank" rel="noopener noreferrer">{video.url}</a>
                    </p>
                )}
                <p className="text-gray-700">Price: {video.price}</p>
                <p className="text-gray-700">End At: {video.endAt}</p>
            </div>
        </li>
    );
};

export default VideoItem;
