import React, { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';

export const Logo: React.FC = (props): ReactElement => {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      dashgo
      <Text as="span" color="pink.500">
        .
      </Text>
    </Text>
  );
};

export default Logo;
