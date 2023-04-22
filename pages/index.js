import {
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import prisma from "../lib/prisma";

const Generatepdf = dynamic(() => import("../components/generatepdf"), {
  //this deactivates server side rendering since we need to initialize this only in the frontend
  ssr: false,
});

export default function Home(props) {
  const Router = useRouter();
  const ref = useRef();
  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [recordId, setRecordId] = useState();

  async function deleteRecord(id) {
    await fetch(`/api/${id}`, {
      method: "DELETE",
    });
    onClose()
    Router.push("/");
  }

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container mt={10} id="table" ref={ref} maxW={1200}>
        <TableContainer textAlign={"center"}>
          <Table id="table_content">
            <Thead m={20} bg="black">
              <Tr>
                <Th color="white" border="2px">
                  Subject / Tutor name <br /> Discipline et Nom du Prof
                </Th>
                <Th color="white" border="2px">
                  <Text>
                    5<sup>th</sup> seq
                  </Text>
                </Th>
                <Th color="white" border="2px">
                  6<sup>th</sup> seq
                </Th>
                <Th color="white" border="2px">
                  Term, AV <br /> Moy. Tr
                </Th>
                <Th color="white" border="2px">
                  Coeff
                </Th>
                <Th color="white" border="2px">
                  Total <br /> (NXC)
                </Th>
                <Th color="white" border="2px">
                  position <br /> Rang
                </Th>
                <Th color="white" border="2px">
                  Tutor remark <br /> Signature
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {props.student_record.map((record) => (
                <Tooltip
                      hasArrow
                      label={`Click to edit ${record.subject_and_teacher_name} record`}
                      aria-label="A tooltip"
                      p={3}
                      mt={-15}
                      ml={-20}
                    >
                  <Tr
                  key={record.record_id}
                  onClick={() => {
                    setRecordId(record.record_id);
                    onOpen();
                  }}
                >
                  <Td border="1px">{record.subject_and_teacher_name}</Td>
                  <Td border="1px">{record.fifth_seq}</Td>
                  <Td border="1px">{record.sixth_seq}</Td>
                  <Td border="1px">{record.term_av}</Td>
                  <Td border="1px">{record.coeff}</Td>
                  <Td border="1px">{record.total_score} </Td>
                  <Td border="1px">
                    {record.position}
                    <sup>th</sup>
                  </Td>
                  <Td border="1px">{record.teacher_remark_sign} </Td>

                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>
                        What would you like to do on record {recordId} ?
                      </ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Button mr={3} onClick={()=> Router.push(`/edit/${recordId}`)}>Edit</Button>
                        <Button
                          onClick={() => {
                            deleteRecord(recordId);
                          }}
                        >
                          Delete
                        </Button>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                          Cancel
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Tr>
                    </Tooltip>
                
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Generatepdf html={ref} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const student_record = await prisma.student_record.findMany();
  return {
    props: { student_record },
    revalidate: 10,
  };
};
