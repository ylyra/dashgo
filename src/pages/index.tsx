import type { NextPage } from "next";
import { Button, Flex, Stack } from "@chakra-ui/react";

import { Input } from "../components/Form/Input";

const Home: NextPage = () => {
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
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            id="email"
            placeholder="Type your e-mail here"
          />

          <Input
            name="password"
            type="password"
            label="Senha"
            id="password"
            placeholder="*****"
          />
        </Stack>

        <Button type="submit" colorScheme="pink" mt="6" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
