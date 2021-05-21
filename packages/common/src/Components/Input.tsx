import React, { ReactElement } from 'react';
import { Input as ChakraInput, InputProps, useColorModeValue } from '@chakra-ui/react';

export const Input: React.FC<InputProps> = (props): ReactElement => {
  const background = useColorModeValue('gray.200', undefined);

  return <ChakraInput background={background} {...props} />;
};

export default Input;
