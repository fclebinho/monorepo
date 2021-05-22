import React, { ReactElement } from 'react';
import { RiDashboardLine } from 'react-icons/ri';
import { Sidebar as CommonSidebar, SidebarItem } from '@namespace/common';
import { FinanceSidebarGroup } from '@namespace/finance';

export const Sidebar: React.FC = (): ReactElement => {
  return (
    <CommonSidebar>
      <SidebarItem to="/dashboard" icon={RiDashboardLine}>
        Dashboard
      </SidebarItem>

      <FinanceSidebarGroup />
    </CommonSidebar>
  );
};

export default Sidebar;
