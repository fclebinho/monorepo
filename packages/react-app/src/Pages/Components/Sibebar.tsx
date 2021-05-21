import React, { ReactElement } from 'react';
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from 'react-icons/ri';
import { Box, Stack, Text, Link, Icon } from '@namespace/common';

export const Sidebar: React.FC = (): ReactElement => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text color="pink.400" fontSize="small" fontWeight="medium">
            Geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Users
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text color="pink.400" fontSize="small" fontWeight="medium">
            Automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Formulários
              </Text>
            </Link>
            <Link display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
