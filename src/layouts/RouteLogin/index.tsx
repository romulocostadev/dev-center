import React from 'react';

import { Outlet } from 'react-router-dom';


import {
RouteLogin,
Content, Body,
} from './styles';

const RouteLoginPage = () => {









return (
        <RouteLogin>
<Body>
<Content>
<Outlet/>
</Content>
</Body>
</RouteLogin>

    )

}

export default RouteLoginPage
