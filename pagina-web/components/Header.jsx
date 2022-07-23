import { ParallaxLayer } from "@react-spring/parallax";

export default function Header() {
  return (
    <>
      <ParallaxLayer speed={1}></ParallaxLayer>
      <ParallaxLayer speed={2}></ParallaxLayer>
      <ParallaxLayer speed={5}></ParallaxLayer>
    </>
  );
}
