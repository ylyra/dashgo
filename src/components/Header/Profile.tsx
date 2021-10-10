import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Yan Lyra</Text>
        <Text color="gray.300" fontSize="small">
          yanlyra3@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Yan Lyra"
        //src="https://github.com/ylyra.png"
      />
    </Flex>
  );
}
