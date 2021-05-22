import React, { ReactElement, useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiFileEditLine } from 'react-icons/ri';
import {
  Box,
  AppBar,
  Sidebar,
  Flex,
  Text,
  Heading,
  Button,
  Checkbox,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  DataEmpty,
  useSearch,
} from '@namespace/common';
import { useEntry } from '../Context/Entry';
import { ButtonDeleteEntry } from './ButtonDeleteEntry';
import { ButtonCreateEntry } from './ButtonCreateEntry';
import { ButtonEditEntry } from './ButtonEditEntry';
import { IconButtonDeleteEntry } from './IconButtonDeleteEntry';

interface EntriesTableProps {
  title: string;
  subtitle?: string;
}

export const EntriesTable: React.FC<EntriesTableProps> = ({ title, subtitle }): React.ReactElement => {
  const { text } = useSearch();
  const { items, selectedItems, setSelectedItems, create, remove, isRemoving, isCreating } = useEntry();
  const [entries, setEntries] = useState([]);

  const handAddEntry = (): void => {
    create({
      expectedValue: 10.0,
      value: 698.36,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Novo lançamento',
      id: 'e4da3b7fbbce2345d7772b0674a318d5',
      createdAt: '2021-05-21',
    });
  };

  const handleCheckedEntry = ({ checked, entry }): void => {
    checked
      ? setSelectedItems(entries => [...entries, entry])
      : setSelectedItems(entries => entries.filter(item => item.id !== entry.id));
  };

  useEffect(() => setEntries(items), [items]);
  useEffect(() => {
    setEntries(
      text.length <= 0 ? items : items.filter(item => item.description.toLowerCase().indexOf(text.toLowerCase()) > -1),
    );
  }, [items, text]);

  return (
    <Box flex="1">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="md" fontWeight="normal">
          <Text>{title}</Text>
          {subtitle && (
            <Text fontSize="small" fontWeight="light">
              {subtitle}
            </Text>
          )}
        </Heading>
        <Stack direction="row">
          <ButtonDeleteEntry size="sm">Remover</ButtonDeleteEntry>
          <ButtonCreateEntry title="Criar lançamento" size="sm" colorScheme="pink">
            Criar novo
          </ButtonCreateEntry>
        </Stack>
      </Flex>
      {entries.length <= 0 ? (
        <DataEmpty />
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th px="6" />
              <Th />
              <Th />
              <Th />
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            {entries.map(entry => (
              <Tr key={entry.id}>
                <Td px="6" width="8">
                  <Checkbox
                    onChange={e => handleCheckedEntry({ checked: e.target.checked, entry })}
                    colorScheme="pink"
                  />
                </Td>
                <Td>
                  <Box>
                    <Text>{entry.description}</Text>
                    <Text fontSize="sm" fontWeight="light">
                      Descrição breve do lançamento
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text>{entry.dueDate}</Text>
                    <Text fontSize="sm" fontWeight="light">
                      há 3 dias atrás
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontSize="lg" textAlign="right">
                      {entry.value}
                    </Text>
                  </Box>
                </Td>
                <Td width={12}>
                  <Stack direction="row">
                    <ButtonEditEntry size="sm" title="Editar lançamento" entry={entry} icon={<RiFileEditLine />}>
                      Editar
                    </ButtonEditEntry>
                    <IconButtonDeleteEntry entry={entry} size="sm" aria-label="Search database" icon={<FiTrash2 />} />
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default EntriesTable;
