import React from 'react';
import { Stack, FormControl, Input } from '@namespace/common';

type EntryFormProps = {};

export const EntryForm: React.FC<EntryFormProps> = ({}): React.ReactElement => {
  return (
    <Stack>
      <FormControl>
        <Input placeholder="date" />
      </FormControl>
      <FormControl>
        <Input placeholder="dueDate" />
      </FormControl>
      <FormControl>
        <Input placeholder="description" />
      </FormControl>
      <FormControl>
        <Input placeholder="expectedValue" />
      </FormControl>
      <FormControl>
        <Input placeholder="value" />
      </FormControl>
    </Stack>
  );
};

export default EntryForm;
