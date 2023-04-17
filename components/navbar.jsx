import { Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container p={0}>
      <Flex gap={5} p={5}>
        {/* <Link href="/students">List of Students</Link> */}
        <Link href="/student_record">Fill Report</Link>
        <Link href="/student_register">Register Student</Link>
        <Link href="/">Report Card</Link>
      </Flex>
    </Container>
  );
};

export default Navbar;
