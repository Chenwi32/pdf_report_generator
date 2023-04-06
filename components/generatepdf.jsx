import { Button, Container, Flex } from "@chakra-ui/react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useEffect, useState } from "react";

const Generatepdf = ({ html }) => {
  const [download, setDownload] = useState();
  const [preview, setPreview] = useState();
  const [studentName, setStudentName] = useState('Eugene_report');

  const generateFile = () => {
    const doc = new jsPDF();

    autoTable(doc, { html: "#table_content" });

    if (download === true) {
      doc.save(`${studentName}.pdf`);
    } else if (preview === true) {
      doc.output("dataurlnewwindow");
    } else return;
      
      setDownload(false)
      setPreview(false)
  };

  useEffect(() => {
    generateFile();
  }, [download, preview]);

  return (
    <Container maxW={1200} mt={5} mb={10} p={0}>
      <Flex gap={5}>
        <Button
          onClick={() => {
            setPreview(true);
          }}
        >
          Preview Pdf
        </Button>
        <Button
          onClick={() => {
            setDownload(true);
          }}
        >
          Download Pdf file
        </Button>
      </Flex>
    </Container>
  );
};

export default Generatepdf;
