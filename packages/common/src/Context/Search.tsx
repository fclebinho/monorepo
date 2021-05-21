import React, { createContext, useContext, useState } from 'react';

interface SearchContextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const context = createContext<SearchContextProps>({} as SearchContextProps);

export const SearchProvider: React.FC = ({ children }) => {
  const [text, setText] = useState<string>('');

  return <context.Provider value={{ text, setText }}>{children}</context.Provider>;
};

export const useSearch = () => useContext(context);
