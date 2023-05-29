import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material';

// local modules
//import theme from '../theme';
import theme from '../theme/theme1.js';

import { persistor, store } from '../redux/store';
import ProjectRoutes from '../router';
import Login from '../pages/Login/login';

const App2 = () => {
  const userInfo = useSelector((state) => state.SliceDB.value);
  return userInfo.login.userId ? <ProjectRoutes /> : <Login />;
  // return true ? <ProjectRoutes /> : <Login />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App2 />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
