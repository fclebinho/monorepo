import React, { ReactElement } from 'react';
import { EntriesTable } from '../Components/EntriesTable';

export const EntryList: React.FC = (): ReactElement => {
  return <EntriesTable title="Lançamentos" />;
};

export default EntryList;
