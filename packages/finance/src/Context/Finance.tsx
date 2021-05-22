import React, { ReactElement } from 'react';
import { EntryProvider } from './Entry';
import { AccountProvider } from './Account';

export const FinanceProvider: React.FC = ({ children }): ReactElement => {
  return (
    <EntryProvider>
      <AccountProvider>{children}</AccountProvider>
    </EntryProvider>
  );
};

export default FinanceProvider;
