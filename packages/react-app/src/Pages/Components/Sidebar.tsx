import React, { ReactElement } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { Sidebar as CommonSidebar, SidebarItem, Text } from '@namespace/common';
import { FinanceSidebarGroup } from '@namespace/finance';

export const Sidebar: React.FC = (): ReactElement => {
  return (
    <CommonSidebar>
      <SidebarItem to="/dashboard">
        <Text>Dashboard</Text>
      </SidebarItem>

      <FinanceSidebarGroup />
    </CommonSidebar>
  );
};

export default Sidebar;
