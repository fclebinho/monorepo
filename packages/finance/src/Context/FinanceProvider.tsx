import React, { createContext, useContext, useState } from 'react';

export type EntryProps = {
  expectedValue: number;
  value: number;
  dueDate: string;
  date: string;
  financialType: number;
  description: string;
  id?: string;
  createdAt?: string;
};

interface FinanceContextProps {
  items: EntryProps[];
  setItems: React.Dispatch<React.SetStateAction<EntryProps[]>>;
  selectedItems: EntryProps[];
  setSelectedItems: React.Dispatch<React.SetStateAction<EntryProps[]>>;
  clearSelected(): void;
}

const context = createContext<FinanceContextProps>({} as FinanceContextProps);

export const FinanceProvider: React.FC = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<EntryProps[]>([]);
  const [items, setItems] = useState<EntryProps[]>([
    {
      expectedValue: -64.89,
      value: -64.89,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Farmácia São Fidelis',
      id: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
      createdAt: '2021-05-21',
    },
    {
      expectedValue: -64.89,
      value: -64.89,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Cassol Center Lar',
      id: 'a87ff679a2f3e71d9181a67b7542122c',
      createdAt: '2021-05-21',
    },
    {
      expectedValue: -64.89,
      value: -64.89,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Fort Atacadista',
      id: 'c81e728d9d4c2f636f067f89cc14862c',
      createdAt: '2021-05-21',
    },
    {
      expectedValue: -64.89,
      value: 698.36,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Pagamento de fatura',
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

export const useFinance = () => useContext(context);
