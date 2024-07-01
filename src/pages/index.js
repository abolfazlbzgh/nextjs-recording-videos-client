import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">Home Page</h1>
            <Link href="/recording-videos">
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Go to Recording Videos
                </button>
            </Link>
        </div>
    );
};

export default Home;
