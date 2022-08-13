import { Button } from "react-bootstrap";

export default function SectionButton({ variant, text }) {
  return (
    <Button
      size="lg"
      className="container-fluid my-5 h-50 fw-bold"
      style={{ "font-size": "1rem"}}
      variant={variant}
      disabled={text == "Materiales"}
    >
      {text}
    </Button>
  );
}
