import React, { ReactElement } from 'react';
import { Box, Flex, NavHeader } from '@namespace/common';
import { Sidebar } from './Components';

export const AccountList: React.FC = (): ReactElement => {
  return (
    <Box>
      <NavHeader />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Box>
  );
};

export default AccountList;
