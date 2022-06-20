import React from 'react';

import LayoutSider1 from '../components/LayoutSider1'; 
import LayoutHeader3 from '../components/LayoutHeader3'; 
import { Outlet } from 'react-router-dom';


import {
Application,
Content, Body,
Sider,
Header,
} from './styles';

const ApplicationPage = () => {







function handlePublish() {
}



return (
        <Application>
<Sider>
    <LayoutSider1 />
</Sider>
<Body>
<Header>
    <LayoutHeader3 />
</Header>
<Content>
<Outlet/>
</Content>
</Body>
</Application>

    )

}

export default ApplicationPage
