/* eslint-disable react-hooks/rules-of-hooks */
import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GlobalStyle from './styles/global';

import LayoutRoutes from './routes';

function App() {
  const [test, useTest] = useState();

  const fetchData = async () => {
    await axios.get('https://localhost/test').then(response => {
      useTest(response.data.test);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <span>romulo</span>
      {test && <span>{test}</span>}
      <GlobalStyle />
      <LayoutRoutes />
    </BrowserRouter>
  );
}

export default App;
