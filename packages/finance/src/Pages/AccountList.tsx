import React, { ReactElement, useState } from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { EntriesTable } from '../Components/EntriesTable';
import { useAccount } from '../Context/Account';
import { useEntry } from '../Context/Entry';

interface ParamsProps {
  id?: string
}

export const AccountList: React.FC = (): ReactElement => {
  const { id } = useParams<ParamsProps>();
  const { items } = useAccount();
  const { setItems } = useEntry();
  const [account, setAccount] = useState(null);

  useEffect(() => {
    setAccount(items?.find(item => item.id === id))
  }, [id])

  useEffect(() => {
    setItems([
      {
        expectedValue: -64.89,
        value: -64.89,
        dueDate: '2021-05-21',
        date: '2021-05-21',
        financialType: 0,
        description: 'Fort Atacadista',
        id: 'c81e728d9d4c2f636f067f89cc14862c',
        createdAt: '2021-05-21',
      },
      {
        expectedValue: -64.89,
        value: 698.36,
        dueDate: '2021-05-21',
        date: '2021-05-21',
        financialType: 0,
        description: 'Pagamento de fatura',
        id: 'c4ca4238a0b923820dcc509a6f75849b',
        createdAt: '2021-05-21',
      },
    ]);
  }, [setItems]);

  return <EntriesTable title={`${account?.description}`} subtitle="Créditos e Débitos" />;
};

export default AccountList;
