import { Box, Container, HStack, Heading, Text } from "@chakra-ui/react";
import prisma from "../lib/prisma";
import { useRef } from "react";

const Form = (props) => {
  const ref = useRef();

  return (
    <Container ref={ref}>
      <Heading>Dynamic Form</Heading>

      {
        <HStack>
          <Text>Student Name:</Text>
          <Text fontWeight={800}>{props.student.student_name}</Text>
        </HStack>
      }
    </Container>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.query;

  const student = await prisma.student.findFirst({
    where: {
      student_id: parseInt(id),
    },
  });

  return {
    props: {
      student: JSON.parse(JSON.stringify(student)),
    },
  };
};

export default Form;
