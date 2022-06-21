/* eslint-disable react-hooks/rules-of-hooks */
import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';

import LayoutRoutes from './routes';
import { store } from './store/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <LayoutRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
