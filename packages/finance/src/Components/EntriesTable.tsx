import React, { ReactElement, useState, useEffect } from 'react';
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
import { FinanceSidebarGroup } from './FinanceSidebarGroup';

interface EntriesTableProps {
  title: string;
  subtitle?: string;
}

export const EntriesTable: React.FC<EntriesTableProps> = ({ title, subtitle }): React.ReactElement => {
  const { text } = useSearch();
  const { items, setItems, selectedItems, setSelectedItems, clearSelected } = useEntry();
  const [entries, setEntries] = useState([]);
  const [creating, setCreating] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handAddEntry = (): void => {
    setCreating(true);
    setTimeout(() => {
      setItems(items => [
        ...items,
        {
          expectedValue: 10.0,
          value: 698.36,
          dueDate: '2021-05-21',
          date: '2021-05-21',
          financialType: 0,
          description: 'Novo lançamento',
          id: 'e4da3b7fbbce2345d7772b0674a318d5',
          createdAt: '2021-05-21',
        },
      ]);
      setCreating(false);
    }, 2000);
  };

  const handleCheckedEntry = ({ checked, entry }): void => {
    checked
      ? setSelectedItems(entries => [...entries, entry])
      : setSelectedItems(entries => entries.filter(item => item.id !== entry.id));
  };

  const handleRemoveItems = () => {
    setDeleting(true);
    setTimeout(() => {
      setItems(entries =>
        entries.filter(item => !selectedItems.filter(selected => selected.id === item.id).length > 0),
      );
      clearSelected();
      setDeleting(false);
    }, 2000);
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
          <Button
            isLoading={deleting}
            disabled={selectedItems.length <= 0}
            onClick={handleRemoveItems}
            size="sm"
            fontSize="sm"
          >
            Remover
          </Button>
          <Button
            disabled={deleting}
            isLoading={creating}
            onClick={handAddEntry}
            size="sm"
            fontSize="sm"
            colorScheme="pink"
          >
            Criar novo
          </Button>
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
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
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
