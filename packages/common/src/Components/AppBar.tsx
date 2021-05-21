import React, { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import { InputSearch } from './InputSearch';
import { Logo } from './Logo';
import { AppBarNavbar } from './AppBarNavbar';

export const AppBar: React.FC = (): ReactElement => {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <InputSearch />
      <AppBarNavbar />
    </Flex>
  );
};

export default AppBar;
