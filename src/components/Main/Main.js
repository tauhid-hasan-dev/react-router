import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet> {/* childrens will be stored in the outlet */}
        </div>
    );
};

export default Main;