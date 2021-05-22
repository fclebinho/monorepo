import React, { createContext, useContext, useState, useEffect } from 'react';

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

interface EntryContextProps {
  items: EntryProps[];
  setItems: React.Dispatch<React.SetStateAction<EntryProps[]>>;
  selectedItems: EntryProps[];
  setSelectedItems: React.Dispatch<React.SetStateAction<EntryProps[]>>;
  clearSelected(): void;
  create(entry: EntryProps): Promise<EntryProps>;
  isCreating: boolean;
  remove(selecteds: EntryProps[]): Promise<void>;
  isRemoving: boolean;
}

const context = createContext<EntryContextProps>({} as EntryContextProps);

export const EntryProvider: React.FC = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<EntryProps[]>([]);
  const [items, setItems] = useState<EntryProps[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const clearSelected = (): void => setSelectedItems([]);

  const create = async (entry: EntryProps): Promise<EntryProps> =>
    new Promise(resolve => {
      setIsCreating(true);
      setTimeout(() => {
        setItems(values => [...values, entry]);
        resolve(entry);
        setIsCreating(false);
      }, 2000);
    });

  const remove = async (selecteds: EntryProps[]): Promise<void> =>
    new Promise(resolve => {
      setIsRemoving(true);
      setTimeout(() => {
        setItems(values => values.filter(item => !selecteds.filter(selected => selected.id === item.id).length > 0));
        clearSelected();
        resolve();
        setIsRemoving(false);
      }, 2000);
    });

  useEffect(() => {
    items.length <= 0 && setSelectedItems([]);
  }, [items]);

  return (
    <context.Provider
      value={{
        items,
        setItems,
        selectedItems,
        setSelectedItems,
        clearSelected,
        create,
        isCreating,
        remove,
        isRemoving,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useEntry = (): EntryContextProps => useContext(context);
