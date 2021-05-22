import React, { ReactElement } from 'react';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';

export const Sidebar: React.FC = ({ children }): ReactElement => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="8" align="flex-start">
        {children}
      </Stack>
    </Box>
  );
};

export default Sidebar;
