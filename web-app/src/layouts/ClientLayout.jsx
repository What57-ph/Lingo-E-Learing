import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import AuthContext from '../contexts/AuthContext';
import { Button } from 'antd';
import Cookies from 'js-cookie';
import { refreshToken } from '../config/AxiosConfig';

export default function ClientLayout() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        console.log("Logout clicked");
    }

    const handleRefresh = () => {
        refreshToken();
    }

    const refresh = Cookies.get('refresh_token');


    return (
        <div>
            <h1>{localStorage.getItem('user_name') ? localStorage.getItem('user_name') : 'not register'}</h1>
            <Outlet />

            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleRefresh}>Get refresh</Button>
            <div>This is cookie:  {refresh}</div>

            <div></div>
        </div>
    );
}
