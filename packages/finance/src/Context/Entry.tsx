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
  update(entry: EntryProps): Promise<EntryProps>;
  isUpdating: boolean;
  remove(selecteds: EntryProps[]): Promise<void>;
  isRemoving: boolean;

  enabledLoadMonitoring: boolean;
  setEnabledLoadMonitoring: React.Dispatch<React.SetStateAction<boolean>>;
}

const context = createContext<EntryContextProps>({} as EntryContextProps);

export const EntryProvider: React.FC = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<EntryProps[]>([]);
  const [items, setItems] = useState<EntryProps[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [enabledLoadMonitoring, setEnabledLoadMonitoring] = useState(true);

  const clearSelected = (): void => setSelectedItems([]);

  const create = async (entry: EntryProps): Promise<EntryProps> =>
    new Promise(resolve => {
      enabledLoadMonitoring && setIsCreating(true);
      setTimeout(() => {
        setItems(values => [...values, { ...entry, id: 'hello', financialType: 0 }]);
        resolve(entry);
        enabledLoadMonitoring && setIsCreating(false);
      }, 2000);
    });

  const update = async (entry: EntryProps): Promise<EntryProps> =>
    new Promise(resolve => {
      enabledLoadMonitoring && setIsUpdating(true);
      setTimeout(() => {
        setItems(values => values.map(item => (item.id === entry.id ? entry : item)));
        resolve(entry);
        enabledLoadMonitoring && setIsUpdating(false);
      }, 2000);
    });

  const remove = async (selecteds: EntryProps[]): Promise<void> =>
    new Promise(resolve => {
      enabledLoadMonitoring && setIsRemoving(true);
      setTimeout(() => {
        setItems(values => values.filter(item => !selecteds.filter(selected => selected.id === item.id).length > 0));
        clearSelected();
        resolve();
        enabledLoadMonitoring && setIsRemoving(false);
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
        update,
        isUpdating,
        remove,
        isRemoving,
        setEnabledLoadMonitoring,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useEntry = (): EntryContextProps => useContext(context);
