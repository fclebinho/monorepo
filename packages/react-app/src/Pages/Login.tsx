import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Input, Flex, Heading, Logo, useColorMode, useColorModeValue } from '@namespace/common';

export const Login: React.FC = (): ReactElement => {
  const { push } = useHistory();
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex height="100vh" align="center" justify="center">
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6} pt={8} pb={6} textAlign="center">
          <Logo />
        </Heading>
        <Input placeholder="dear.john@mail.com" variant="filled" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button onClick={(): void => push('/dashboard')} mb={6} colorScheme="pink" fontWeight="normal">
          Log in
        </Button>
        <Button onClick={toggleColorMode} fontWeight="normal">
          Toggle Color Mode
        </Button>
      </Flex>
    </Flex>
  );
};

export default Login;
