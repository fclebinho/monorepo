import React, { ReactElement } from 'react';
import { Flex, Text, Box, Logo } from '@namespace/common';

export const NotFound: React.FC = (): ReactElement => {
  return (
    <Flex height="100vh" align="center" justify="center">
      <Box>
        <Logo />
        <Text>Page not found</Text>
      </Box>
    </Flex>
  );
};

export default NotFound;
