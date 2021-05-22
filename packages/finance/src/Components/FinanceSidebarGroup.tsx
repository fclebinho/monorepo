import React, { ReactElement } from 'react';
import { FiClipboard } from 'react-icons/fi';
import { BiWalletAlt } from 'react-icons/bi';
import { BsCreditCard } from 'react-icons/bs';
import { SidebarGroup, SidebarItem, Text } from '@namespace/common';
import { useAccount } from '../Context/Account';

export const FinanceSidebarGroup: React.FC = (): ReactElement => {
  const { items } = useAccount();

  return (
    <>
      <SidebarGroup title="Transações">
        <SidebarItem to="/entries" icon={FiClipboard}>
          Lançamentos
        </SidebarItem>
      </SidebarGroup>
      <SidebarGroup title="Contas">
        {items.map(item => (
          <SidebarItem
            key={item.id}
            to={`/accounts/${item.id}`}
            icon={item.accountType === 0 ? BiWalletAlt : BsCreditCard}
          >
            <Text>{item.description}</Text>
            <Text fontSize="small" fontWeight="light">
              {item.description}
            </Text>
          </SidebarItem>
        ))}
      </SidebarGroup>
    </>
  );
};

export default FinanceSidebarGroup;
