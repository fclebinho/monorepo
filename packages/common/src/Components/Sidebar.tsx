import React, { ReactElement } from 'react';
import { Box, Stack } from '@chakra-ui/react';

export const Sidebar: React.FC = ({ children }): ReactElement => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack align="flex-start">{children}</Stack>
    </Box>
  );
};

export default Sidebar;
