import React, { ReactElement } from 'react';
import { Input, InputProps, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';

export const InputSearch: React.FC<InputProps> = (props): ReactElement => {
  const searchBackground = useColorModeValue('gray.200', 'gray.800');

  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="4"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      position="relative"
      bg={searchBackground}
      borderRadius={6}
    >
      <Input variant="unstyled" placeholder="Search here..." px="2" mr="2" {...props} />
      <Icon as={RiSearchLine} fontSize={24} />
    </Flex>
  );
};

export default InputSearch;
