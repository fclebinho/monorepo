import React, { ReactElement } from 'react';
import { SimpleGrid, Box, Text } from '@namespace/common';

export const Dashboard: React.FC = (): ReactElement => {
  return (
    <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
      <Box p="8" bg="gray.200" borderRadius={8} height={64}>
        <Text>Inscritos da semana</Text>
      </Box>
      <Box p="8" bg="gray.200" borderRadius={8} height={64}>
        <Text>Taxa de abertura</Text>
      </Box>
    </SimpleGrid>
  );
};

export default Dashboard;
