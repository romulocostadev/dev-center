import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import LayoutRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <LayoutRoutes />
    </BrowserRouter>
  );
}

export default App;
