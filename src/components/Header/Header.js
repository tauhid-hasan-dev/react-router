import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-row gap-5 justify-center p-10 '>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    );
};

export default Header;