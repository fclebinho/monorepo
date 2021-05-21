import React, { ReactElement } from 'react';
import { Text, Flex, Box, Avatar, Icon, Stack } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export const Navbar: React.FC = (props): ReactElement => {
  return (
    <Flex align="center" ml="auto">
      <Stack spacing="8" direction="row" mx="8" pr="8" py="8" borderRightWidth={1}>
        <Icon as={RiNotificationLine} fontSize={20} />
        <Icon as={RiUserAddLine} fontSize={20} />
      </Stack>
      <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>John Doe</Text>
          <Text color="gray.500" fontSize="small">
            john.doe@mail.com
          </Text>
        </Box>
        <Avatar size="md" name="John Doe" />
      </Flex>
    </Flex>
  );
};

export default Navbar;
