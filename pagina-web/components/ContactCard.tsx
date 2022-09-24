import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import GitHub from "@mui/icons-material/GitHub";
import Email from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function ContactCard({ person, text, github, email, ig, li }) {
  const sx = {
    fontSize: "2rem",
    "&:hover": {
      scale: "120%",
    },
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  };
  return (
    <Col className="my-5 sm:mx-4 md:mx-36 w-full">
      <Card className="w-full h-full opacity-80 hover:opacity-100 shadow-sm hover:shadow-sm hover:shadow-white">
        <Card.Header className="text-black" as="h5">
          {person}
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-black font-semibold">{text}</Card.Text>
          <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className="hover:scale-110"
          >
            <GitHub htmlColor="#000000" sx={sx} fontSize="large" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={email}
            className="ml-3 hover:scale-110"
          >
            <Email htmlColor="#000000" sx={sx} fontSize="large" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={ig}
            className="ml-3 hover:scale-110"
          >
            <Instagram htmlColor="#000000" sx={sx} fontSize="large" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={li}
            className="ml-3 hover:scale-110"
          >
            <LinkedIn htmlColor="#000000" sx={sx} fontSize="large" />
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
}
