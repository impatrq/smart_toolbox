import { ParallaxLayer } from "@react-spring/parallax";
import classes from "../styles/SocialSection.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
          <h1 className="display-1 text-white fw-bold">Redes Sociales</h1>
        </Row>
        <Row>
          <Col className="mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/impatrq/722b_smart_toolbox"
            >
              <GitHubIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="mx-3">
            <a target="_blank" rel="noreferrer" href="Smart.Toolbox@proton.me">
              <EmailIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="mx-3">
            <LinkedInIcon htmlColor="#4b4d6e" sx={sx} fontSize="large" />
          </Col>
        </Row>
      </ParallaxLayer>
    </>
  );
}
