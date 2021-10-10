import {
  FormControl,
  FormLabel,
  Input as FormInput,
  InputProps as FormInputProps,
} from "@chakra-ui/react";

type InputProps = FormInputProps & {
  name: string;
  label?: string;
};

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <FormInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: "gray.900",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
