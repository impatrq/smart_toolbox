import { Button } from "react-bootstrap";

export default function SectionButton({ variant, text }) {
  return (
    <Button
      size="lg"
      className="my-5 w-50 h-50 fw-bold"
      variant={variant}
      disabled={text == "Materiales"}
    >
      {text}
    </Button>
  );
}
