import React from 'react';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import VideoList from '../components/VideoList';

const RecordingVideos = ({ videos, error }) => {
    if (error) {
        return <p className="text-red-500 text-center mt-8">Failed to load videos: {error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Recording Videos</title>
                <meta name="description" content="List of recording videos" />
            </Head>
            <h1 className="text-3xl font-bold text-center mb-8 p-4 rounded">Recording Videos</h1>
            <VideoList videos={videos} />
        </div>
    );
};

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:4000/api/recording-videos');
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const videos = await res.json();
        return { props: { videos } };
    } catch (error) {
        return { props: { error: error.message } };
    }
}

export default RecordingVideos;
