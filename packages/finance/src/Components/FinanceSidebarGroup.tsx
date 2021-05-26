import React, { ReactElement } from 'react';
import { FiClipboard } from 'react-icons/fi';
import { BiWalletAlt } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { Droppable, SidebarGroup, SidebarItem, Stack, Text } from '@namespace/common';
import { useAccount } from '../Context/Account';
import { DroppableEntry } from './DroppableEntry';

export const FinanceSidebarGroup: React.FC = (): ReactElement => {
  const { items } = useAccount();

  return (
    <>
      <SidebarItem to="/entries">
        <Text>Lançamentos</Text>
      </SidebarItem>
      <SidebarGroup title="Contas">
        {items.map(item => (
          <Droppable key={item.id} id={item.id} description={item.description}>
            <SidebarItem to={`/accounts/${item.id}`}>
              <Stack spacing={0}>
                <Text>{item.description}</Text>
                <Text fontSize="small" fontWeight="light">
                  {item.accountType === 0 ? 'Carteira' : 'Bancária'}
                </Text>
              </Stack>
            </SidebarItem>
          </Droppable>
        ))}
      </SidebarGroup>
    </>
  );
};

export default FinanceSidebarGroup;
