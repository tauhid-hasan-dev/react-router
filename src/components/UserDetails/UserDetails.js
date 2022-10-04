import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name, phone, address} = user;
    const {street, suite, city , zipcode} = address;
    return (
        <div className='flex flex-col items-center p-10'>
            <div className='border shadow-2xl p-20'>
                <h1 className='text-3xl font-bold'>{name}</h1>
                <p>{phone}</p>
                <p>{website}</p>
                <div className='mt-5'>
                    <p className='text-lg font-semibold'> Adress</p>
                    <p>City: {city}</p>
                    <p>Zipcode: {zipcode}</p>
                    <p>Street: {street}</p>
                    <p>Suite: {suite}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;