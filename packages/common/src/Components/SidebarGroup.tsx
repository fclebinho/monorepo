import React, { ReactElement } from 'react';
import { RiDashboardLine, RiContactsLine } from 'react-icons/ri';
import { Box, Text, Stack, Link, Icon } from '@chakra-ui/react';

interface SidebarGroupProps {
  title: string;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({ children, title }): ReactElement => {
  return (
    <Box>
      <Text color="pink.500" fontSize="small" fontWeight="medium" mt={6}>
        {title}
      </Text>
      <Stack spacing="4" mt="3" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default SidebarGroup;
