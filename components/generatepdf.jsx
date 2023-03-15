import { Button, Container } from "@chakra-ui/react";
import jsPDF from "jspdf";

const Generatepdf = () => {
    const generateFile = ({ html }) => {
        const doc = new jsPDF()
        
        let split = doc.splitTextToSize(
          document.getElementById("table").innerText,
          200
        );

        doc.text(document.getElementById("table_content").innerHTML, 75, 5);
        doc.text(split, 5, 75)
        doc.output("dataurlnewwindow")
  };
    return (
      <Container minW={1200}>
            <Button onClick={generateFile}>
                Get Pdf file
        </Button>
      </Container>
    );
};

export default Generatepdf;
