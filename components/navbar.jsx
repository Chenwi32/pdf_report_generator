import { Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container p={0} >
      <Flex gap={5} p={5}>
        <Link href="/form">Form</Link>

        <Link href="/">Record</Link>
      </Flex>
    </Container>
  );
};

export default Navbar;
