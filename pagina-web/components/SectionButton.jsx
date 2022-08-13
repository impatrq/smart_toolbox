import { Button } from "react-bootstrap";

export default function SectionButton({ variant, text }) {
  return (
    <Button
      size="lg"
      className="container-fluid fs-3 my-5 h-50 fw-bold"
      style={{ "font-size": "1rem" }}
      variant={variant}
    >
      {text}
    </Button>
  );
}
