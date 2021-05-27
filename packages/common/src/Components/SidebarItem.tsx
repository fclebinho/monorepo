import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { IconButton, Box, Flex, Stack, LinkProps, Icon } from '@chakra-ui/react';

export interface SidebarItemProps extends LinkProps {
  icon?: IconType;
  to: string;
  onDeleteClick?: void;
  onEditClick?: void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  icon,
  to,
  onDeleteClick,
  onEditClick,
  ...rest
}): ReactElement => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Box
      colorScheme="pink"
      cursor="pointer"
      onClick={(): void => push(to)}
      borderLeftWidth={3}
      borderLeftColor={to === pathname ? 'pink.500' : 'none'}
      _hover={{
        borderColor: 'pink.200',
      }}
    >
      <Flex justify="space-between" align="center">
        <Stack direction="row" mx={3}>
          {icon && <Icon as={icon} fontSize="20" />}
          {children}
        </Stack>

        <Stack direction="row" display={!onEditClick && !onDeleteClick ? 'none' : 'flex'}>
          <IconButton as={FiEdit} aria-label="" size={3} variant="ghost" onClick={onEditClick} color="gray.300" />
          <IconButton as={FiTrash2} aria-label="" size={3} variant="ghost" onClick={onDeleteClick} color="gray.300" />
        </Stack>
      </Flex>
    </Box>
  );
};

export default SidebarItem;
