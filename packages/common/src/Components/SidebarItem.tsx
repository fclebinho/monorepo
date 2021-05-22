import React, { ReactElement } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Text, Link, Icon } from '@chakra-ui/react';

interface SidebarItemProps {
  icon?: IconType;
  to: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ children, icon, to }): ReactElement => {
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <Link color={to === pathname ? 'gray.800' : 'gray.400'} onClick={() => push(to)} display="flex" alignItems="center">
      {icon && <Icon as={icon} fontSize="20" />}
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

export default SidebarItem;
