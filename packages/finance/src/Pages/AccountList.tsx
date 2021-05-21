import React, { ReactElement } from 'react';
import { Box, AppBar, Sidebar, Flex } from '@namespace/common';

export const AccountList: React.FC = (): ReactElement => {
  return (
    <Box>
      <AppBar />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Box>
  );
};

export default AccountList;
