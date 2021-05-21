import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CommonProvider } from '@namespace/common';
import { Routes } from './Router';

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <CommonProvider>
        <Routes />
      </CommonProvider>
    </BrowserRouter>
  );
};

export default App;
