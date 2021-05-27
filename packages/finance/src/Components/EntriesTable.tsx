import React, { ReactElement, useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { RiFileEditLine } from 'react-icons/ri';
import { Box, Flex, Text, Heading, Checkbox, PeriodDate, Stack, useSearch } from '@namespace/common';
import { useEntry } from '../Context/Entry';
import { ButtonDeleteEntry } from './ButtonDeleteEntry';
import { ButtonCreateEntry } from './ButtonCreateEntry';
import { EntryCard } from './EntryCard';

interface EntriesTableProps {
  title: string;
  subtitle?: string;
}

export const EntriesTable: React.FC<EntriesTableProps> = ({ title, subtitle }): React.ReactElement => {
  const { text } = useSearch();
  const { items } = useEntry();
  const [entries, setEntries] = useState([]);

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
          <Text color="pink.500" fontWeight="bold">
            {title}
          </Text>
          {subtitle && (
            <Text fontSize="small" fontWeight="light" color="gray.400">
              {subtitle}
            </Text>
          )}
        </Heading>
        <PeriodDate onSelected={(): void => {}} />
        <Stack direction="row">
          <ButtonDeleteEntry size="sm">Remover</ButtonDeleteEntry>
          <ButtonCreateEntry title="Criar lançamento" size="sm" colorScheme="pink">
            Criar novo
          </ButtonCreateEntry>
        </Stack>
      </Flex>
      {entries.map(entry => (
        <EntryCard key={entry.id} entry={entry} />
      ))}
    </Box>
  );
};

export default EntriesTable;
