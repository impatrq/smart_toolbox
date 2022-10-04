import { ParallaxLayer } from "@react-spring/parallax";
import classes from "../styles/SocialSection.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SpaceAppsIcon from "@mui/icons-material/RocketLaunch";
import { Row, Col } from "react-bootstrap";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialSection() {
  const sx = {
    fontSize: "5.5em",
    "&:hover": {
      scale: "120%",
    },
    transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  };
  return (
    <>
      <ParallaxLayer offset={2} speed={1.5} className={classes.redes}>
        <Row className="text-center">
          <h1 className="display-1 text-white fw-bold">Redes Sociales</h1>
        </Row>
        <Row>
          <Col
            className="text-center mx-3"
            style={{ width: "100%", height: "auto" }}
          >
            <a href="mailto:Smart.Toolbox@proton.me">
              <EmailIcon htmlColor="#ffffffb3" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="text-center mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/impatrq/722b_smart_toolbox"
            >
              <GitHubIcon htmlColor="#ffffffb3" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="text-center mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://2022.spaceappschallenge.org/challenges/2022-challenges/create-your-own-challenge/teams/smart-toolbox/project"
            >
              <SpaceAppsIcon htmlColor="#ffffffb3" sx={sx} fontSize="large" />
            </a>
          </Col>
          <Col className="text-center mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/smart.toolbox.2022"
            >
              <InstagramIcon htmlColor="#ffffffb3" sx={sx} fontSize="large" />
            </a>
          </Col>
        </Row>
      </ParallaxLayer>
    </>
  );
}
