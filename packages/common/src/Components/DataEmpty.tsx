import React, { ReactElement } from 'react';
import { Flex, Text } from '@chakra-ui/react';

export const DataEmpty: React.FC = (props): ReactElement => {
  return (
    <Flex justify="center" align="center">
      <Text>Ops! Não encontramos registros</Text>
    </Flex>
  );
};

export default DataEmpty;
