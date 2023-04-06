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
import prisma from "../lib/prisma";

const Generatepdf = dynamic(() => import("../components/generatepdf"), {
  //this deactivates server side rendering since we need to initialize this only in the frontend
  ssr: false,
});

export default function Home({ student }) {
  const ref = useRef();

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container mt={10} id="table" ref={ref} maxW={1200}>
        <TableContainer>
          <Table id="table_content">
            <Thead m={20} bg="black" color="white">
              <Tr>
                <Th border="2px">
                  Subject / Tutor's name <br /> Discipline et Nom du Prof
                </Th>
                <Th border="2px">
                  5<sup>th</sup> seq
                </Th>
                <Th border="2px">
                  6<sup>th</sup> seq
                </Th>
                <Th border="2px" isNumeric>
                  Term, AV <br /> Moy. Tr
                </Th>
                <Th border="2px" isNumeric>
                  Coeff
                </Th>
                <Th border="2px" isNumeric>
                  Total <br /> (NXC)
                </Th>
                <Th border="2px" isNumeric>
                  position <br /> Rang
                </Th>
                <Th border="2px" isNumeric>
                  Tutor's remark <br /> Signature
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td border="1px">English / Victorine </Td>
                <Td border="1px">16</Td>
                <Td border="1px">14</Td>
                <Td border="1px">12</Td>
                <Td border="1px">3</Td>
                <Td border="1px">30</Td>
                <Td border="1px">5<sup>th</sup></Td>
                <Td border="1px">Fair</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Generatepdf html={ref} />
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const Student_record = await prisma.Student_record.findMany();
  console.log(Student_record);
  return {
    props: { Student_record },
    revalidate: 10,
  };
};
