import React, { ReactElement } from 'react';
import { Flex } from '@chakra-ui/react';
import { InputSearch } from './InputSearch';
import { Logo } from './Logo';
import { Navbar } from './Navbar';

export const NavHeader: React.FC = (): ReactElement => {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <InputSearch />
      <Navbar />
    </Flex>
  );
};

export default NavHeader;
