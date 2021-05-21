import React, { ReactElement } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';
import theme from './Utils/Theme';

export const CommonProvider: React.FC<ChakraProviderProps> = ({ children, ...rest }): ReactElement => {
  return (
    <ChakraProvider theme={theme} {...rest}>
      {children}
    </ChakraProvider>
  );
};

export default CommonProvider;
