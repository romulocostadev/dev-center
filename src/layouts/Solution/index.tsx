import React from 'react';

import LayoutHeader1 from '../components/LayoutHeader1'; 
import { Outlet } from 'react-router-dom';


import {
Solution,
Content, Body,
Header,
} from './styles';

const SolutionPage = () => {









return (
        <Solution>
<Body>
<Header>
    <LayoutHeader1 />
</Header>
<Content>
<Outlet/>
</Content>
</Body>
</Solution>

    )

}

export default SolutionPage
