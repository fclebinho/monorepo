import React, { createContext, useContext, useState } from 'react';

export type AccountProps = {
  description: string;
  accountType: number;
  id?: string;
  createdAt?: string;
};

interface AccountContextProps {
  items: AccountProps[];
  setItems: React.Dispatch<React.SetStateAction<AccountProps[]>>;
  selectedItems: AccountProps[];
  setSelectedItems: React.Dispatch<React.SetStateAction<AccountProps[]>>;
  clearSelected(): void;
}

const context = createContext<AccountContextProps>({} as AccountContextProps);

export const AccountProvider: React.FC = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<AccountProps[]>([]);
  const [items, setItems] = useState<AccountProps[]>([
    {
      description: 'Carteira',
      accountType: 0,
      id: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
      createdAt: '2021-05-21',
    },
    {
      description: 'Santander',
      accountType: 1,
      id: 'a87ff679a2f3e71d9181a67b7542122c',
      createdAt: '2021-05-21',
    },
    {
      description: 'CEF',
      accountType: 1,
      id: 'c81e728d9d4c2f636f067f89cc14862c',
      createdAt: '2021-05-21',
    },
    {
      description: 'Nubank',
      accountType: 1,
      id: 'c4ca4238a0b923820dcc509a6f75849b',
      createdAt: '2021-05-21',
    },
  ]);

  const clearSelected = (): void => setSelectedItems([]);

  return (
    <context.Provider value={{ items, setItems, selectedItems, setSelectedItems, clearSelected }}>
      {children}
    </context.Provider>
  );
};

export const useAccount = () => useContext(context);
