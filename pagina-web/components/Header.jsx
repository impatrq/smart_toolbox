import { ParallaxLayer } from "@react-spring/parallax";
import classes from "../styles/Header.module.css"

export default function Header() {
  return (
    <>
      <ParallaxLayer speed={1}>
        <video className={classes.backgroundvideo} autoPlay loop muted>
          <source
            src="https://user-images.githubusercontent.com/80338247/180584520-3d8891c8-a111-44a8-bb05-4191fb9ca174.mp4"
            type="video/mp4"
          />
        </video>{" "}
      </ParallaxLayer>
      <ParallaxLayer speed={2}></ParallaxLayer>
      <ParallaxLayer speed={5}></ParallaxLayer>
    </>
  );
}
