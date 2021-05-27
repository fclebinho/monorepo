import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Input,
  Flex,
  Heading,
  Logo,
  Stack,
  FormControl,
  FormErrorMessage,
  useColorMode,
  useColorModeValue,
} from '@namespace/common';

type SignInFormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup.string().required(),
});

export const Login: React.FC = (): ReactElement => {
  const { push } = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    push('/dashboard');
  };

  return (
    <Flex height="100vh" align="center" justify="center">
      <Flex
        as="form"
        direction="column"
        background={formBackground}
        p={12}
        rounded={6}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Heading mb={6} pt={8} pb={6} textAlign="center">
          <Logo />
        </Heading>
        <Stack spacing={3}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              isDisabled={isSubmitting}
              placeholder="dear.john@mail.com"
              variant="filled"
              type="email"
              {...register('email')}
            />
            {!!errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <Input
              isDisabled={isSubmitting}
              placeholder="********"
              variant="filled"
              type="password"
              {...register('password')}
            />
            {!!errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </FormControl>
          <Button type="submit" isLoading={isSubmitting} colorScheme="pink" fontWeight="normal">
            Log in
          </Button>
          <Button onClick={toggleColorMode} fontWeight="normal">
            Toggle Color Mode
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Login;
