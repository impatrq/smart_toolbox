import Link from "next/link";
import { Button } from "react-bootstrap";

export default function SectionButton({ variant, text, link }) {
  return (
    <Link href={link}>
      <Button
        size="lg"
        className="h-4 container-fluid fs-3 my-5 h-50 fw-bold border-3"
        variant={variant}
      >
        {text}
      </Button>
    </Link>
  );
}
