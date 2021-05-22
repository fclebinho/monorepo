import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  ButtonProps,
  Input,
  useDisclosure,
} from '@namespace/common';
import { useEntry } from '../Context/Entry';

interface ButtonCreateEntryProps extends ButtonProps {
  title?: string;
}

export const ButtonCreateEntry: React.FC<ButtonCreateEntryProps> = ({
  title,
  children,
  ...rest
}): React.ReactElement => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { create, isCreating, isRemoving } = useEntry();
  const btnRef = React.useRef();

  const handleCreate = (): void => {
    onClose();
    create({
      expectedValue: 10.0,
      value: 698.36,
      dueDate: '2021-05-21',
      date: '2021-05-21',
      financialType: 0,
      description: 'Novo lançamento',
      id: 'e4da3b7fbbce2345d7772b0674a318d5',
      createdAt: '2021-05-21',
    });
  };

  return (
    <>
      <Button isLoading={isCreating} disabled={isRemoving} ref={btnRef} onClick={onOpen} {...rest}>
        {children}
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> {title || 'Create your account'}</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button size="sm" variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button size="sm" onClick={handleCreate} colorScheme="pink">
              Salvar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ButtonCreateEntry;
