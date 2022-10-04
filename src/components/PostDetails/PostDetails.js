import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    console.log(details);
    return (
        <div>
            <h1>Post details</h1>
        </div>
    );
};

export default PostDetails;