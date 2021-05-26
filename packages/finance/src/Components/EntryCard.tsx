import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiFileEditLine } from 'react-icons/ri';
import { GrDocumentVerified } from 'react-icons/gr';
import { useDraggable } from '@dnd-kit/core';
import { Box, Flex, Checkbox, Text, Stack, Icon, useMousePosition } from '@namespace/common';
import { ButtonEditEntry } from './ButtonEditEntry';
import { IconButtonDeleteEntry } from './IconButtonDeleteEntry';
import { EntryProps, useEntry } from '../Context/Entry';
import { useEffect } from 'react';

interface EntryCardProps {
  entry: EntryProps;
}

export const EntryCard: React.FC<EntryCardProps> = ({ entry }): React.ReactElement => {
  const { setSelectedItems } = useEntry();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: entry.id,
    data: {
      supports: ['account'],
    },
  });

  const style = transform
    ? {
        card: {
          display: "none"
        }, icon: {
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          display: "inherit",
          width: "48px",
          height: "48px"  
        }
      }
    : {
      card: undefined,
      icon: {
        position: "absolute",
        display: "none"
      }
    };

  const handleCheckedEntry = ({ checked, entry }): void => {
    checked
      ? setSelectedItems(entries => [...entries, entry])
      : setSelectedItems(entries => entries.filter(item => item.id !== entry.id));
  };

  return (
    <>
      <Icon as={GrDocumentVerified} color="red.500" w={8} h={8} style={style?.icon}/>
      <Box key={entry.id} py="2" style={style?.card} >
        <Flex py="1">
          <Flex pr="6">
            <Checkbox onChange={e => handleCheckedEntry({ checked: e.target.checked, entry })} colorScheme="pink" />
          </Flex>
          <Flex justify="center" align="center" ref={setNodeRef} {...listeners} {...attributes}  flex="1">
            <Box mr="auto">
              <Text>{entry.description}</Text>
              <Text fontSize="sm" fontWeight="light">
                Descrição breve do lançamento
              </Text>
            </Box>
            <Box m="auto">
              <Text>{entry.dueDate}</Text>
              <Text fontSize="sm" fontWeight="light">
                há 3 dias atrás
              </Text>
            </Box>
            <Box ml="auto">
              <Text fontSize="lg" textAlign="right">
                {entry.value}
              </Text>
            </Box>
          </Flex>
          <Box ml="8">
            <Stack direction="row">
              <ButtonEditEntry size="sm" title="Editar lançamento" entry={entry} icon={<RiFileEditLine />} aria-label="Teste">
                Editar
              </ButtonEditEntry>
              <IconButtonDeleteEntry entry={entry} size="sm" aria-label="Search database" icon={<FiTrash2 />} />
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default EntryCard;
