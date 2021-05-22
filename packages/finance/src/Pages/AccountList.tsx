import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { EntriesTable } from '../Components/EntriesTable';
import { useAccount } from '../Context/Account';

export const AccountList: React.FC = (): ReactElement => {
  const { id } = useParams();
  const { items } = useAccount();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    setAccount(items?.find(item => item.id === id))
  }, [id])

  return <EntriesTable title={account?.description} subtitle="Lançamentos" />;
};

export default AccountList;
