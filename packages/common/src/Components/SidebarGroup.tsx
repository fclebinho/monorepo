import React, { ReactElement } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Box, Text, Stack, Flex, IconButton } from '@chakra-ui/react';

interface SidebarGroupProps {
  title: string;
}

export const SidebarGroup: React.FC<SidebarGroupProps> = ({ children, title }): ReactElement => {
  return (
    <Box>
      <Flex justify="space-between" align="center" p={2} px={3} mt={6} bg="gray.200">
        <Text color="pink.500" fontSize={11} fontWeight="medium">
          {title}
        </Text>
        <IconButton as={IoIosAddCircleOutline} variant="ghost" aria-label="" size={3} colorScheme="pink" />
      </Flex>
      <Stack spacing="4" mt="3" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};

export default SidebarGroup;
