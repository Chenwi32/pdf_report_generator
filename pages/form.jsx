import { Container, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Form = () => {
    return (
      <Container maxW={1200}>
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder="First name" />
        </FormControl>
      </Container>
    );
}

export default Form;