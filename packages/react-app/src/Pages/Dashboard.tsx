import React, { ReactElement } from 'react';
import { Flex, SimpleGrid, Box, Text, AppBar, Sidebar } from '@namespace/common';

export const Dashboard: React.FC = (): ReactElement => {
  return (
    <Flex direction="column" h="100vh">
      <AppBar />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.200" borderRadius={8}>
            <Text>Inscritos da semana</Text>
          </Box>
          <Box p="8" bg="gray.200" borderRadius={8}>
            <Text>Taxa de abertura</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
