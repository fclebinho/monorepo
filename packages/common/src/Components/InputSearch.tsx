import React, { ReactElement, useState } from 'react';
import { Input, InputProps, Icon, Flex, useColorModeValue } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { useSearch } from '../Context/Search';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

export const InputSearch: React.FC<InputProps> = (props): ReactElement => {
  const { setText } = useSearch();
  const searchBackground = useColorModeValue('gray.200', 'gray.800');

  const [timer, setTimer] = useState(null);
  const [typing, setTyping] = useState('');

  const handleChange = value => {
    clearTimeout(timer);

    setTyping(value.target.value);

    // setTimer(setTimeout(triggerChange, WAIT_INTERVAL));
  };

  const handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      triggerChange();
    }
  };

  const triggerChange = () => {
    setText(typing);
  };

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
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    >
      <Input variant="unstyled" placeholder="Pesquise aqui..." px="2" mr="2" {...props} />
      <Icon as={RiSearchLine} fontSize={24} />
    </Flex>
  );
};

export default InputSearch;
