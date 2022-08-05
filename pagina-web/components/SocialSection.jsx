import { ParallaxLayer } from "@react-spring/parallax";
export default function SocialSection() {
import { Row, Col } from "react-bootstrap";

export default function SocialMainPage() {
  return (
    <>
      <ParallaxLayer offset={2} speed={1.5} className={classes.redes}>
        <Row>
          <h1 className="display-1 text-white fw-normal">Redes Sociales</h1>
        </Row>
        <Row className={classes.iconCol}>
    <div>SocialSection</div>
  )
      </ParallaxLayer>
    </>
  );
}
