import { useEffect, useRef, useState } from "react";
import prisma from "../../lib/prisma";
import { Box, Button, Container, Flex, FormControl, HStack, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, VStack, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";

const Edit = (props) => {
  const ref = useRef();

                  
  const {
    record_id,
    subject_and_teacher_name,
    fifth_seq,
    sixth_seq,
    term_av,
    coeff,
    total_score,
    position,
    teacher_remark_sign,
    first_term_av,
    second_term_av,
    total,
    overall_position,
    class_av,
    owner_id,
  } = props.report;


  const [S_T_name, setS_T_name] = useState(subject_and_teacher_name);
  const [fifthSeq, setFifthSeq] = useState(fifth_seq);
  const [sixthSeq, setSixthSeq] = useState(sixth_seq);
  const [termAv, setTermAv] = useState(term_av);
  const [coefficient, setCoeff] = useState(coeff);
  const [totalScore, setTotalScore] = useState(total_score);
  const [positionInput, setPosition] = useState(position);
  const [teacherRemarkSign, setTeacherRemarkSign] = useState(teacher_remark_sign);
  const [firstTermAv, setFirstTermAv] = useState(first_term_av);
  const [secondTermAv, setSecondTermAv] = useState(second_term_av);
  const [totalInput, setTotal] = useState(total);
  const [overallPosition, setOverallPosition] = useState(overall_position);
  const [classAv, setClassAv] = useState(class_av);
  

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitReport = async (e) => {
    e.preventDefault();
    try {
      const body = {
        record_id,
        S_T_name,
        fifthSeq,
        sixthSeq,
        termAv,
        coefficient,
        totalScore,
        positionInput,
        teacherRemarkSign,
        firstTermAv,
        secondTermAv,
        totalInput,
        overallPosition,
        classAv,
        owner_id,
      };

      await fetch("/api/edit_report", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/form");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTotalScore(sixthSeq * coeff + fifthSeq * coefficient);
  }, [sixthSeq, fifthSeq, coefficient]);

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container maxW={800} ref={ref}>
        <Heading mb={5}>Student Report</Heading>

        

        <FormControl isRequired>
          <SimpleGrid columns={2} gap={5} mb={5}>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Subject / Teacher Name :
              </Text>
              <Input
                value={S_T_name}
                onChange={(e) => {
                  setS_T_name(e.target.value);
                }}
                type="text"
                border={"1px"}
                placeholder="e.g: English / Mrs. Megarn"
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>

            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Fifth Sequence :
              </Text>
              <Input
                value={fifthSeq}
                onChange={(e) => {
                  setFifthSeq(e.target.value);
                }}
                type="text"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>

            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                Sixth Sequence :
              </Text>
              <Input
                value={sixthSeq}
                onChange={(e) => {
                  setSixthSeq(e.target.value);
                }}
                type="text"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Term Average :
              </Text>
              <Input
                value={termAv}
                onChange={(e) => {
                  setTermAv(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Coefficient :
              </Text>
              <Input
                value={coefficient}
                onChange={(e) => {
                  setCoeff(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Total Score :
              </Text>
              <Text border={"1px"} p={2} textAlign={"center"}>
                {totalScore}
              </Text>
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Position :
              </Text>
              <Input
                value={positionInput}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
                type="text"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Teacher remark and signature :
              </Text>
              <Input
                value={teacherRemarkSign}
                onChange={(e) => {
                  setTeacherRemarkSign(e.target.value);
                }}
                type="text"
                border={"1px"}
                placeholder="Very good / Jonh"
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * First term average :
              </Text>
              <Input
                value={firstTermAv}
                onChange={(e) => {
                  setFirstTermAv(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Second term average :
              </Text>
              <Input
                value={secondTermAv}
                onChange={(e) => {
                  setSecondTermAv(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Grand Total :
              </Text>
              <Input
                value={totalInput}
                onChange={(e) => {
                  setTotal(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Overall Position :
              </Text>
              <Input
                value={overallPosition}
                onChange={(e) => {
                  setOverallPosition(e.target.value);
                }}
                type="text"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Class average :
              </Text>
              <Input
                value={classAv}
                onChange={(e) => {
                  setClassAv(e.target.value);
                }}
                type="number"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
          </SimpleGrid>
          <Flex justifyContent={"space-between"}>
            <Button
              border={"1px"}
              _focusVisible={{
                border: "2px solid #00ebc7",
              }}
            >
              Cancel
            </Button>

            <Button
              bg={"blue"}
              color={"white"}
              border={"1px"}
              _hover={{
                bg: "",
              }}
              onClick={onOpen}
            >
              Save
            </Button>
          </Flex>
        </FormControl>

        {/* Modal */}

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Check if everything is okay</ModalHeader>
            <ModalCloseButton
              color={"brand.400"}
              _hover={{
                bg: "brand.200",
              }}
            />
            <ModalBody>
              <VStack alignItems={"flex-start"}>
                <HStack>
                  <Text> Subject / Teacher Name :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {S_T_name}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Fifth Sequence :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {fifthSeq}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Sixth Sequence :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {sixthSeq}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Term Average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {termAv}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Coefficient :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {coefficient}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Total Score :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {totalScore}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Position :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {positionInput}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Teacher remark and signature :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {teacherRemarkSign}
                  </Text>
                </HStack>

                <HStack>
                  <Text>First term average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {firstTermAv}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Second term average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {secondTermAv}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Grand Total :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {totalInput}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Overall Position :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {overallPosition}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Class average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {classAv}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Student Id :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {owner_id}
                  </Text>
                </HStack>
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                color={"brand.400"}
                bg={"brand.200"}
                _hover={{
                  bg: "brand.100",
                }}
                mr={3}
                onClick={onClose}
              >
                Edit
              </Button>
              <Button
                onClick={submitReport}
                bg={"blue"}
                color={"white"}
                border={"1px"}
                _hover={{
                  bg: "",
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { edit } = context.query;

  const report = await prisma.student_record.findFirst({
    where: {
      record_id: parseInt(edit),
    },
  });

  return {
    props: {
      report: JSON.parse(JSON.stringify(report)),
    },
  };
};

export default Edit
