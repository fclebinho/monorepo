import React, { ReactElement } from 'react';
import { Flex, AppBar } from '@namespace/common';
import { Sidebar } from './Components/Sidebar';

export const Template: React.FC = ({ children }): ReactElement => {
  return (
    <Flex direction="column" h="100vh">
      <AppBar />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" height="100%">
        <Sidebar />
        {children}
      </Flex>
    </Flex>
  );
};

export default Template;
