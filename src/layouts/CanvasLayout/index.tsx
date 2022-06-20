import React from 'react';

import LayoutSider3 from '../components/LayoutSider3'; 
import { Outlet } from 'react-router-dom';


import {
CanvasLayout,
Content, Body,
Sider,
} from './styles';

const CanvasLayoutPage = () => {









return (
        <CanvasLayout>
<Sider>
    <LayoutSider3 />
</Sider>
<Body>
<Content>
<Outlet/>
</Content>
</Body>
</CanvasLayout>

    )

}

export default CanvasLayoutPage
