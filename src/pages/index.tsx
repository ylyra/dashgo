import type { NextPage } from "next";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup.string().required("Senha obrigatória"),
});

const Home: NextPage = () => {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            label="E-mail"
            error={formState.errors.email}
            placeholder="Type your e-mail here"
            {...register("email")}
          />

          <Input
            type="password"
            label="Senha"
            error={formState.errors.password}
            placeholder="*****"
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          colorScheme="pink"
          mt="6"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
