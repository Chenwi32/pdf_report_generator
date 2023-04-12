import {
  Box,
  Button,
  Container,
  FormControl,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";

const Form = () => {
  const [S_T_name, setS_T_name] = useState();
  const [fifth_seq, setFifth_seq] = useState(0);
  const [sixth_seq, setSixth_seq] = useState(0);
  const [term_av, setTerm_av] = useState();
  const [coeff, setCoeff] = useState(0);
  const [total_score, setTotal_score] = useState(0);
  const [position, setPosition] = useState();
  const [teacher_remark_sign, setTeacher_remark_sign] = useState();
  const [first_term_av, setFirst_term_av] = useState();
  const [second_term_av, setSecond_term_av] = useState();
  const [total, setTotal] = useState();
  const [overall_position, setOverall_position] = useState();
  const [class_av, setClass_av] = useState();
  const [owner_id, setOwner_id] = useState();

  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitReport = async (e) => {
    e.preventDefault();
    try {
      const body = {
        S_T_name,
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
      };

      await fetch("/api/fill_report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/form");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTotal_score(sixth_seq * coeff + fifth_seq * coeff);
  }, [sixth_seq, fifth_seq, coeff]);

  return (
    <>
      <Head>
        <title>Form</title>
      </Head>
      <Container maxW={1200}>
        <FormControl isRequired>
          <SimpleGrid maxW={800} m="auto" columns={2} gap={5} mb={5}>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Subject / Teacher's Name :
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
                value={fifth_seq}
                onChange={(e) => {
                  setFifth_seq(e.target.value);
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
                value={sixth_seq}
                onChange={(e) => {
                  setSixth_seq(e.target.value);
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
                value={term_av}
                onChange={(e) => {
                  setTerm_av(e.target.value);
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
                value={coeff}
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
                {total_score}
              </Text>
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Position :
              </Text>
              <Input
                value={position}
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
                * Teacher's remark and signature :
              </Text>
              <Input
                value={teacher_remark_sign}
                onChange={(e) => {
                  setTeacher_remark_sign(e.target.value);
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
                value={first_term_av}
                onChange={(e) => {
                  setFirst_term_av(e.target.value);
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
                value={second_term_av}
                onChange={(e) => {
                  setSecond_term_av(e.target.value);
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
                value={total}
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
                value={overall_position}
                onChange={(e) => {
                  setOverall_position(e.target.value);
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
                value={class_av}
                onChange={(e) => {
                  setClass_av(e.target.value);
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
                * Student Id :
              </Text>
              <Input
                value={owner_id}
                onChange={(e) => {
                  setOwner_id(e.target.value);
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
              <Button
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
              >
                Cancel
              </Button>
            </Box>
            <Box align={"right"}>
              <Button
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                onClick={onOpen}
              >
                Save
              </Button>
            </Box>
          </SimpleGrid>
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
                  <Text> Subject / Teacher's Name :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {S_T_name}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Fifth Sequence :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {fifth_seq}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Sixth Sequence :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {sixth_seq}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Term Average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {term_av}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Coefficient :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {coeff}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Total Score :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {total_score}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Position :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {position}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Teacher's remark and signature :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {teacher_remark_sign}
                  </Text>
                </HStack>

                <HStack>
                  <Text>First term average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {first_term_av}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Second term average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {second_term_av}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Grand Total :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {total}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Overall Position :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {overall_position}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Class average :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {class_av}
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
                _hover={{
                  bg: "brand.200",
                }}
                bg={"brand.100"}
                color={"brand.400"}
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

export default Form;
