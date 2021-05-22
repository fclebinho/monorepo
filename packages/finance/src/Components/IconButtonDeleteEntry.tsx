import React, { useState } from 'react';
import { BsExclamationCircleFill } from 'react-icons/bs';
import { IconButton, IconButtonProps } from '@namespace/common';
import { EntryProps, useEntry } from '../Context/Entry';

interface IconButtonDeleteEntryProps extends IconButtonProps {
  entry: EntryProps;
}

export const IconButtonDeleteEntry: React.FC<IconButtonDeleteEntryProps> = ({
  entry,
  icon,
  onClick,
  colorScheme,
  ...rest
}): React.ReactElement => {
  const { remove, setEnabledLoadMonitoring } = useEntry();
  const [waiting, setWaiting] = useState(false);
  const [isDeleting, setIsRemoving] = useState(false);

  const handleClick = (e): void => {
    setEnabledLoadMonitoring(false);
    if (waiting) {
      onClick && onClick(e);
      setIsRemoving(true);
      remove([entry])
        .finally(() => setIsRemoving(false))
        .finally(() => setEnabledLoadMonitoring(true));
    }

    setWaiting(true);
    setTimeout(() => {
      setWaiting(false);
    }, 2000);
  };

  return (
    <IconButton
      isLoading={isDeleting}
      onClick={handleClick}
      colorScheme={waiting ? 'pink' : colorScheme}
      icon={waiting ? <BsExclamationCircleFill /> : icon}
      {...rest}
    />
  );
};

export default IconButtonDeleteEntry;
