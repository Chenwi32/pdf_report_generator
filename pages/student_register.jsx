import {
  Box,
  Button,
  Checkbox,
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
import { useState } from "react";

const Form = () => {
  const [studentId, setStudentId] = useState();
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState();
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [repeater, setRepeater] = useState(false);
  const [parentOrGuardianAdress, setParentOrGuardianAdress] = useState("");


  /* Modal */
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitReport = async (e) => {
    e.preventDefault();
    try {
      const body = {
        studentId,
        studentName,
        studentClass,
        dateOfBirth,
        placeOfBirth,
        repeater,
        parentOrGuardianAdress,
      };

      await fetch("/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/student");
    } catch (error) {
      console.error(error);
    }
  };

 

  return (
    <>
      <Head>
        <title> Student Registry</title>
      </Head>
      <Container maxW={1200}>
        <FormControl isRequired>
          <SimpleGrid maxW={800} m="auto" columns={2} gap={5} mb={5}>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Student ID :
              </Text>
              <Input
                value={studentId}
                onChange={(e) => {
                  setStudentId(e.target.value);
                }}
                type="number"
                border={"1px"}
                placeholder="e.g: 202201"
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>

            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Student Name :
              </Text>
              <Input
                value={studentName}
                onChange={(e) => {
                  setStudentName(e.target.value);
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
                Student Class :
              </Text>
              <Input
                value={studentClass}
                onChange={(e) => {
                  setStudentClass(e.target.value);
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
                * Date of Birth :
              </Text>
              <Input
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                type="date"
                border={"1px"}
                _focusVisible={{
                  border: "2px solid #00ebc7",
                }}
                required
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Place of Birth :
              </Text>
              <Input
                value={placeOfBirth}
                onChange={(e) => {
                  setPlaceOfBirth(e.target.value);
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
                * Repeater :
              </Text>
              <Checkbox
                isChecked={repeater}
                value={repeater}
                onChange={(e) => {
                  setRepeater(e.target.checked);
                }}
              />
            </Box>
            <Box>
              <Text fontSize={"0.9rem"} mb={2}>
                * Parent or Guardian Adress :
              </Text>
              <Input
                value={parentOrGuardianAdress}
                onChange={(e) => {
                  setParentOrGuardianAdress(e.target.value);
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
                  <Text> Student ID :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {studentId}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Student Name :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {studentName}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Student Class :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {studentClass}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Date of Birth :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {dateOfBirth}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Place of Birth :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {placeOfBirth}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Repeater? :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {repeater?.toString()}
                  </Text>
                </HStack>

                <HStack>
                  <Text>Parent or Guardian Adress :</Text>
                  <Text fontWeight={600} color={"brand.400"}>
                    {parentOrGuardianAdress}
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
