import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-row gap-5 justify-center p-10 '>
            <NavLink to='/home' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>Home</NavLink>
            <NavLink to='/about' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>About</NavLink>
            <NavLink to='/product' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>Product</NavLink>
            <NavLink to='/users' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>Users</NavLink>
            <NavLink to='/posts' className={({isActive})=>
                isActive ? 'border-b-2 ': undefined
            }>Posts</NavLink>
        </div>
    );
};

export default Header;