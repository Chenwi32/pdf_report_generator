import { Container, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useRef, useState } from "react";
import prisma from "../lib/prisma";

const Students = (props) => {

  const ref = useRef();

    return (
      <Container ref={ref} maxW={1200}>
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
              {props.students.map((student) => {
                const date = student.date_of_birth.toString().substring(0, 10);
                const repeater = student.repeater === true
                
          return (
            <Tr key={student.student_id}>
              <Td border="1px">{student.student_id}</Td>
              <Td border="1px">{student.student_name}</Td>
              <Td border="1px">{student.student_class}</Td>
              <Td border="1px">{date}</Td>
              <Td border="1px">{student.place_of_birth}</Td>
              <Td border="1px">{repeater? 'Repeater' : 'New Student'} </Td>
            </Tr>
          );})}
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
