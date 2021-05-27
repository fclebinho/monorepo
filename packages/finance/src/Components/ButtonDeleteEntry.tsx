import React from 'react';
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  ButtonProps,
} from '@namespace/common';
import { useEntry } from '../Context/Entry';

export const ButtonDeleteEntry: React.FC<ButtonProps> = ({ children, ...rest }): React.ReactElement => {
  const { remove, isRemoving, isCreating, selectedItems } = useEntry();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = (): void => setIsOpen(false);
  const cancelRef = React.useRef();

  const handleDelete = (): void => {
    onClose();
    remove(selectedItems);
  };

  return (
    <>
      <Button
        disabled={selectedItems.length <= 0 || isCreating}
        isLoading={isRemoving}
        onClick={(): void => setIsOpen(true)}
        {...rest}
      >
        {children}
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Remover lançamento
            </AlertDialogHeader>

            <AlertDialogBody>Tem certeza? Esta ação não poderá ser desfeita.</AlertDialogBody>

            <AlertDialogFooter>
              <Button size="sm" ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button size="sm" colorScheme="red" onClick={handleDelete} ml={3}>
                Remover
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ButtonDeleteEntry;
