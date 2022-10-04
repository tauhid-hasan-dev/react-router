import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    //console.log(users);
    return (
            <div className='px-20  grid grid-cols-3 gap-5 mt-8'>
            {
                users.map(user => <User user={user} key={user.id}></User>)
            }
            </div>
           
    );
};

export default Users;