import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CommonProvider } from '@namespace/common';
import { FinanceProvider } from '@namespace/finance';
import { Routes } from './Router';

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <CommonProvider>
        <FinanceProvider>
          <Routes />
        </FinanceProvider>
      </CommonProvider>
    </BrowserRouter>
  );
};

export default App;
