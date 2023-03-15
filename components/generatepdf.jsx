import { Button, Container } from "@chakra-ui/react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Generatepdf = ({ html }) => {
    const generateFile = () => {
        const doc = new jsPDF()

        autoTable(doc, { html: "#table_content" });
    
        doc.output("dataurlnewwindow") 

        doc.save("table.pdf");
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
