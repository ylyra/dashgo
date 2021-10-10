import { ReactNode } from "react";
import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine } from "react-icons/ri";

type NavSectionProps = {
  title: string;
  children: ReactNode;
};

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title.toLocaleUpperCase()}
      </Text>

      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
