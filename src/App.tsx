/* eslint-disable react-hooks/rules-of-hooks */
import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/global';

import LayoutRoutes from './routes';
import { persistor, store } from './store/store';

import Modal from './components/Modal/Index';
import './locales/i18n.js';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <GlobalStyle />
        <LayoutRoutes />
        <Modal />
        {/* </PersistGate> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
