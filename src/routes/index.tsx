/* eslint-disable no-nested-ternary */
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Solution from '../layouts/Solution';
import List from '../pages/List';
import Application from '../layouts/Application';
import Home from '../pages/Home';
import CanvasLayout from '../layouts/CanvasLayout';
import Workspace from '../pages/Workspace';
import Index from '../pages/ComponentsExample';

const IndexRoutes = () => (
  <Routes>
    <Route path="/settings" element={<h1>settings</h1>} />
    <Route path="/help" element={<h1>help</h1>} />
    <Route path="/" element={<Solution />} />
    <Route path="/solutions" element={<Solution />}>
      <Route index element={<List />} />
    </Route>
    <Route path="/solution" element={<Application />}>
      <Route path=":id/home" element={<Home />} />
      <Route path=":id/design" element={<Home />} />
      <Route path=":id/workflow" element={<Home />} />
      <Route path=":id/plugins" element={<Home />} />
      <Route path=":id/data" element={<CanvasLayout />}>
        <Route index element={<Workspace />} />
      </Route>
    </Route>

    <Route path="/components-example" element={<Index />} />
  </Routes>
);
export default IndexRoutes;
