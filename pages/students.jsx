import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import prisma from "../lib/prisma";
import { useRouter } from "next/router";

const Students = (props) => {
  const { students } = props;
  const [studentClass, setStudentClass] = useState("");
  const router = useRouter();

  const [classStudents, setStudents] = useState(students);
  const ref = useRef();

  const handleSearch = async () => {
    const classStudents = props.students.filter(
      (student) => student.student_class === studentClass
    );

    setStudents(classStudents);
  };

  useEffect(() => {
    handleSearch();
  }, [studentClass]);

  return (
    <Container ref={ref} maxW={1200}>
      <Flex flexDirection={"column"}>
        <Text mb={5}>Which class do you want?</Text>

        <Flex mb={5} gap={5}>
          <Button onClick={() => setStudentClass("Form 1")}>Form 1</Button>
          <Button onClick={() => setStudentClass("Form 2")}>Form 2</Button>
          <Button onClick={() => setStudentClass("Form 3")}>Form 3</Button>
          <Button onClick={() => setStudentClass("Form 4")}>Form 4</Button>
          <Button onClick={() => setStudentClass("Form 5")}>Form 5</Button>
        </Flex>
      </Flex>
      {classStudents.length === 0 && studentClass === "" ? (
        <Heading fontSize={"1rem"}>Chose a class to get the students</Heading>
      ) : (
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
            {classStudents.length === 0 ? (
              <Heading fontSize={"1rem"} mt={5}>
                {" "}
                Sorry, no student has been registered in this class.
              </Heading>
            ) : (
              <Tbody>
                {classStudents.map((student) => {
                  const date = student.date_of_birth
                    .toString()
                    .substring(0, 10);
                  const repeater = student.repeater === true;

                  return (
                    <Tooltip
                      hasArrow
                      label={`Click to fill ${student.student_name} marks`}
                      aria-label="A tooltip"
                      p={3}
                      mt={-15}
                      ml={-20}
                      key={student.student_id}
                    >
                      <Tr
                        onClick={() => router.push(`/${student.student_id}`)}
                        cursor={"pointer"}
                      >
                        <Td border="1px">{student.student_id}</Td>
                        <Td border="1px">{student.student_name}</Td>
                        <Td border="1px">{student.student_class}</Td>
                        <Td border="1px">{date}</Td>
                        <Td border="1px">{student.place_of_birth}</Td>
                        <Td border="1px">
                          {repeater ? "Repeater" : "New Student"}
                        </Td>
                      </Tr>
                    </Tooltip>
                  );
                })}
              </Tbody>
            )}
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export const getStaticProps = async () => {
  const students = await prisma.student.findMany();

  return {
    props: { students: JSON.parse(JSON.stringify(students)) },
    revalidate: 10,
  };
};

export default Students;
