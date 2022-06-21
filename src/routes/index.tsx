/* eslint-disable no-nested-ternary */
import { Routes, Route } from 'react-router-dom';
import Solution from '../layouts/Solution';
import List from '../pages/List';
import Application from '../layouts/Application';
import Home from '../pages/Home';
import CanvasLayout from '../layouts/CanvasLayout';
import DataCanvas from '../pages/DataCanvas';
import Index from '../pages/ComponentsExample';
import { setModalData } from '../store/modal/modalSlice';
import { useAppDispatch } from '../store/reduxHooks';

const Teste = () => {
  const dispatch = useAppDispatch();

  const handleClickModal = () => {
    dispatch(setModalData({ visible: true, title: 'Kairo' }));
  };

  const handleClickModal2 = () => {
    dispatch(setModalData({ visible: true, title: 'Romulo' }));
  };
  return (
    <>
      <button type="button" onClick={handleClickModal}>
        Abrir modal diferente
      </button>

      <button type="button" onClick={handleClickModal2}>
        Abrir modal diferente
      </button>
    </>
  );
};

const IndexRoutes = () => (
  <Routes>
    <Route path="/" element={<Solution />} />
    <Route path="/teste" element={<Teste />} />

    <Route path="/solutions" element={<Solution />}>
      <Route index element={<List />} />
    </Route>
    <Route path="/solution" element={<Application />}>
      <Route path=":id/home" element={<Home />} />
      <Route path=":id/data" element={<CanvasLayout />}>
        <Route index element={<DataCanvas />} />
      </Route>
    </Route>
    <Route path="/components-example" element={<Index />} />
  </Routes>
);
export default IndexRoutes;
