import { ParallaxLayer } from "@react-spring/parallax";
import classes from "../styles/SocialSection.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Row, Col } from "react-bootstrap";

export default function SocialSection() {
  const sx = {
    fontSize: "5rem",
    "&:hover": {
      width: "10rem",
    },
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  };
  return (
    <>
      <ParallaxLayer offset={2} speed={1.5} className={classes.redes}>
        <Row>
          <h1 className="display-1 text-white fw-normal">Redes Sociales</h1>
        </Row>
        <Row className={classes.iconCol}>
          <Col className="mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hermes-cansat"
            >
              <GitHubIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:hermes-cansat@proton.me"
            >
              <EmailIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="mx-3">
            <YouTubeIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
          </Col>
          <Col className="mx-3">
            <InstagramIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
          </Col>
        </Row>
      </ParallaxLayer>
    </>
  );
}
