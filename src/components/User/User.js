import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, username, email, id} = user;
    return (
        <div className='border border-5 p-5 shadow-md'>
            <h3 className='text-2xl'>Name: {name}</h3>
            <h3 className='hover:bg-red-500' >Username: <Link to={`/users/${id}`} >{username}</Link></h3>
            <h3>Email: {email}</h3>
        </div>
    );
};

export default User;