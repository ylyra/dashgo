import { NextPage } from "next";
import {
  Button,
  Box,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Thead,
  Tr,
  Td,
  Th,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

const Users: NextPage = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              href="/users/create"
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Yan Lyra</Text>
                    <Text fontSize="sm" color="gray.300">
                      yanlyra3@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>30 de Março, 2021</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
};

export default Users;
