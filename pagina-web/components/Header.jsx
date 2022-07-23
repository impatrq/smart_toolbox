import { ParallaxLayer } from "@react-spring/parallax";
import classes from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <ParallaxLayer speed={1}>
        <video className={classes.backgroundvideo} autoPlay loop muted>
          <source
            src="https://user-images.githubusercontent.com/80338247/180585381-5793c629-095d-4f5e-99e1-923dc61815c0.mp4"
            type="video/mp4"
          />
        </video>{" "}
      </ParallaxLayer>
      <ParallaxLayer
        speed={2}
        className="text-white text-monospace text-center h-100"
      >
        <h2 className="pt-5 display-5 fw-bold">Te damos la bienvenida a</h2>
        <h1 className="display-1 fw-bold">Smart Toolbox</h1>
        <div className="opacity-75 h-75">
          <img
            className="img-fluid h-100"
            src={"/LogoSinFondo.png"}
            alt="logo"
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer speed={5}></ParallaxLayer>
    </>
  );
}
