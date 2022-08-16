import Link from "next/link";
import { Button } from "react-bootstrap";

export default function SectionButton({ variant, text, link }) {
  return (
    <Link href={link}>
      <Button
        size="lg"
        className="container-fluid fs-3 my-5 h-50 fw-bold"
        style={{ "font-size": "1rem" }}
        variant={variant}
      >
        {text}
      </Button>
    </Link>
  );
}
