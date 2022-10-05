import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-row gap-5 justify-center p-10 '>
            <NavLink to='/home' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
        </div>
    );
};

export default Header;