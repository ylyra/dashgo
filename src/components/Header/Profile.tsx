import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

type ProfileProps = {
  showProfileData?: boolean;
};

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yan Lyra</Text>
          <Text color="gray.300" fontSize="small">
            yanlyra3@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Yan Lyra" src="https://github.com/ylyra.png" />
    </Flex>
  );
}
