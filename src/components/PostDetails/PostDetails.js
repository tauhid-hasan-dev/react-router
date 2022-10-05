import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {title, body, id, userId} = postDetails;
    const nevigate = useNavigate();
    const handleAuthor =()=>{
         nevigate(`/users/${userId}`)
    }

    
    return (
        <div className='flex flex-col justify-center items-center mt-5 shadow-lg p-10'>
            <h1 className='text-3xl font-bold'>Post details: {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={handleAuthor} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-5">
                   Get the Author
                </button>
        </div>
    );
};

export default PostDetails;