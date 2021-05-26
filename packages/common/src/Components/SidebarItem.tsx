import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Text, Button, Box, Stack, LinkProps, Icon } from '@chakra-ui/react';

export interface SidebarItemProps extends LinkProps {
  icon?: IconType;
  to: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ children, icon, to, ...rest }): ReactElement => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Box
      cursor="pointer"
      onClick={(): void => push(to)}
      borderLeftWidth={3}
      borderLeftColor={to === pathname ? 'pink.500' : 'none'}
      _hover={{
        background: 'gray.50',
      }}
    >
      <Stack direction="row" mx={3}>
        {icon && <Icon as={icon} fontSize="20" />}
        {children}
      </Stack>
    </Box>
  );
};

export default SidebarItem;
