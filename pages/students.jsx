import { Container, HStack, Text } from "@chakra-ui/react";
import { useRef } from "react";

const Students = (props) => {

    const ref = useRef();

    return (
      <Container ref={ref}>
        {props.student.map((student) => (
          <HStack key={student.student_id}>
            <Text>{student.student_name}</Text>
            <Text>{student.student_class}</Text>
          
            <Text>{student.place_of_birth}</Text>
          </HStack>
        ))}
      </Container>
    );
}


export const getStaticProps = async () => {
  const students = await prisma.student.findMany();
  return {
    props: { students },
    revalidate: 10,
  };
};

export default Students;
