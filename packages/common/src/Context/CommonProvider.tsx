import React, { ReactElement } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import theme from '../Utils/Theme';
import { SearchProvider } from './Search';

export const CommonProvider: React.FC<ChakraProviderProps> = ({ children, ...rest }): ReactElement => {
  return (
    <ChakraProvider theme={theme} {...rest}>
      <SearchProvider>{children}</SearchProvider>
    </ChakraProvider>
  );
};

export default CommonProvider;
