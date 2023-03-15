import {
  Container,
  Heading,
  Table,

  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRef } from "react";


const Generatepdf = dynamic(()=> import('../components/generatepdf'))

export default function Home() {

  const ref = useRef()

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container id="table" ref={ref} minW={1200}>

        <TableContainer  id="table_content">
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Generatepdf html={ref} />
      </Container>
    </>
  );
}
