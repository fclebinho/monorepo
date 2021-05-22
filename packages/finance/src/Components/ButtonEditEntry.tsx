import React, { useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  Input,
  useDisclosure,
} from '@namespace/common';
import { useEntry, EntryProps } from '../Context/Entry';

interface ButtonEditEntryProps extends IconButtonProps {
  title?: string;
  entry: EntryProps;
}

export const ButtonEditEntry: React.FC<ButtonEditEntryProps> = ({ children, entry, ...rest }): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { update } = useEntry();
  const [entryUpdated, setEntryUpdated] = useState<EntryProps>(entry);
  const [isUpdating, setIsUpdating] = useState(false);
  const btnRef = React.useRef();

  const handleEdit = (): void => {
    setIsUpdating(true);
    onClose();
    update({ ...entryUpdated, description: 'Alterado!' }).finally(() => setIsUpdating(false));
  };

  return (
    <>
      <IconButton isLoading={isUpdating} ref={btnRef} onClick={onOpen} {...rest}>
        {children}
      </IconButton>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button size="sm" variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleEdit} size="sm" colorScheme="pink">
              Salvar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ButtonEditEntry;
