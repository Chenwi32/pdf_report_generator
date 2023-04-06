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

const Generatepdf = dynamic(() => import("../components/generatepdf"), {
  //this deactivates server side rendering since we need to initialize this only in the frontend
  ssr: false,
});

export default function Home() {
  const ref = useRef();

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container mt={10} id="table" ref={ref} maxW={1200}>
        <TableContainer>
          <Table colorScheme="teal" id="table_content">
            <Thead m={20} bg="blue.100">
              <Tr>
                <Th border="2px">To convert</Th>
                <Th border="2px">into</Th>
                <Th border="2px" isNumeric>
                  multiply by
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td border="1px">inches</Td>
                <Td border="1px">millimetres (mm)</Td>
                <Td border="1px" isNumeric>
                  25.4
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">feet</Td>
                <Td border="1px">centimetres (cm)</Td>
                <Td border="1px" isNumeric>
                  30.48
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
              <Tr>
                <Td border="1px">yards</Td>
                <Td border="1px">metres (m)</Td>
                <Td border="1px" isNumeric>
                  0.91444
                </Td>
              </Tr>
             
            </Tbody>
          </Table>
        </TableContainer>
        <Generatepdf html={ref} />
      </Container>
    </>
  );
}
