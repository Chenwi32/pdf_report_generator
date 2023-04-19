import { Button, Container, Flex, HStack, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import prisma from "../lib/prisma";


 
const Students = (props) => {

  const {students} = props
  const [studentClass, setStudentClass] = useState()

  const [classStudents, setStudents] = useState(students)
  const ref = useRef();

  const handleSearch = async () => {
    const classStudents = props.students.filter((student) => student.student_class === studentClass)
    
    setStudents(classStudents)
  }; 
  
  useEffect(() => {
    
   handleSearch();
   
  }, [studentClass])
  

    return (
      <Container ref={ref} maxW={1200}>
        <Flex flexDirection={'column'}>
          <Text mb={5}>Which class do you want?</Text>

          <Flex mb={5} gap={5}>
            <Button onClick={() => setStudentClass("Form 1")}>Form 1</Button>
            <Button onClick={() => setStudentClass("Form 2")}>Form 2</Button>
            <Button onClick={() => setStudentClass("Form 3")}>Form 3</Button>
            <Button onClick={() => setStudentClass("Form 4")}>Form 4</Button>
            <Button onClick={() => setStudentClass("Form 5")}>Form 5</Button>
          </Flex>
        </Flex>

        <TableContainer textAlign={"center"}>
          <Table id="table_content">
            <Thead m={20} bg="black">
              <Tr>
                <Th color="white" border="2px">
                  Student ID
                </Th>
                <Th color="white" border="2px">
                  Student Name
                </Th>
                <Th color="white" border="2px">
                  Class
                </Th>
                <Th color="white" border="2px">
                  Date of birth
                </Th>
                <Th color="white" border="2px">
                  Place of birth
                </Th>
                <Th color="white" border="2px">
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {classStudents.map((student) => {
                const date = student.date_of_birth.toString().substring(0, 10);
                const repeater = student.repeater === true;

                return (
                  <Tr key={student.student_id}>
                    <Td border="1px">{student.student_id}</Td>
                    <Td border="1px">{student.student_name}</Td>
                    <Td border="1px">{student.student_class}</Td>
                    <Td border="1px">{date}</Td>
                    <Td border="1px">{student.place_of_birth}</Td>
                    <Td border="1px">
                      {repeater ? "Repeater" : "New Student"}{" "}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    );
}


export const getStaticProps = async () => {
  const students = await prisma.student.findMany();
  
  return {
    props: { students: JSON.parse(JSON.stringify(students)) },
    revalidate: 10,
  };
};

export default Students;
