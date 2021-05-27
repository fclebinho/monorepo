import React, { useState } from 'react';
import { format } from 'date-fns';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  ButtonProps,
  Stack,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from '@namespace/common';
import { useEntry, EntryProps } from '../Context/Entry';

interface ButtonEditOrCreateEntryProps extends ButtonProps {
  title?: string;
  item?: EntryProps;
}

const schemaCreate = yup.object().shape({
  expectedValue: yup.number().required(),
  value: yup.number().required(),
  dueDate: yup.string().required(),
  date: yup.string().required(),
  financialType: yup.number(),
  description: yup.string().required(),
});

const schemaUpdate = yup.object().shape({
  expectedValue: yup.number(),
  value: yup.number(),
  dueDate: yup.string(),
  date: yup.string(),
  financialType: yup.number(),
  description: yup.string(),
});

type CreateFormData = {
  expectedValue: number;
  value: number;
  dueDate: string;
  date: string;
  financialType: number;
  description: string;
};

export const ButtonEditOrCreateEntry: React.FC<ButtonEditOrCreateEntryProps> = ({
  title,
  item,
  children,
  ...rest
}): React.ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(item ? schemaUpdate : schemaCreate),
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { create, update, isRemoving } = useEntry();
  const btnRef = React.useRef();

  const handleSubmitCreate: SubmitHandler<CreateFormData> = async values => {
    if (item) {
      const updated = JSON.parse(JSON.stringify(values));
      await update({ ...item, ...updated });
    } else {
      await create(values);
    }
    onClose();
  };

  return (
    <>
      {item ? (
        <IconButton ref={btnRef} onClick={onOpen} {...rest}>
          {children}
        </IconButton>
      ) : (
        <Button disabled={isRemoving} ref={btnRef} onClick={onOpen} {...rest}>
          {children}
        </Button>
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <form onSubmit={handleSubmit(handleSubmitCreate)}>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> {title || 'Create your account'}</DrawerHeader>

            <DrawerBody>
              <Stack>
                <FormControl isInvalid={errors.date} isDisabled={isSubmitting}>
                  <FormLabel>Data</FormLabel>
                  <Input defaultValue={item && item.date} {...register('date')} />
                  {errors.date && <FormErrorMessage>{errors.date.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.dueDate} isDisabled={isSubmitting}>
                  <FormLabel>Vencimento</FormLabel>
                  <Input defaultValue={item && item.dueDate} {...register('dueDate')} />
                  {errors.dueDate && <FormErrorMessage>{errors.dueDate.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.description} isDisabled={isSubmitting}>
                  <FormLabel>Descrição</FormLabel>
                  <Input defaultValue={item && item.description} {...register('description')} />
                  {errors.description && <FormErrorMessage>{errors.description.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.expectedValue} isDisabled={isSubmitting}>
                  <FormLabel>Valor devido</FormLabel>
                  <Input defaultValue={item && item.expectedValue} {...register('expectedValue')} />
                  {errors.expectedValue && <FormErrorMessage>{errors.expectedValue.message}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={errors.value} isDisabled={isSubmitting}>
                  <FormLabel>Valor</FormLabel>
                  <Input defaultValue={item && item.value} {...register('value')} />
                  {errors.value && <FormErrorMessage>{errors.value.message}</FormErrorMessage>}
                </FormControl>
              </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button size="sm" isDisabled={isSubmitting} variant="outline" mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" isLoading={isSubmitting} size="sm" colorScheme="pink">
                Salvar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </form>
      </Drawer>
    </>
  );
};

export default ButtonEditOrCreateEntry;
