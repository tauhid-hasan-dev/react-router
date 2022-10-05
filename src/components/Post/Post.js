import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title, body} = post;
    const nevigate = useNavigate();
    const handleNevigate = () =>{
         nevigate(`/posts/${id}`)
    }
    return (
        <div className='flex flex-col justify-center gap-4 bg-orange-50 items-center shadow-md p-3 '>
            <h1 className='text-lg font-bold'>{title}</h1>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    See Details
                </button>
            </Link>
            
            <Link to={`/posts/${id}`}>See Details </Link>

            <button onClick={handleNevigate}  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    See Details2
            </button>
          
        </div>
    );
};

export default Post;