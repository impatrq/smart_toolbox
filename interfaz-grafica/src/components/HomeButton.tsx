import { Link } from "react-router-dom";
import homeImg from "./img/home.svg";

export default function HomeButton() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        marginLeft: "0.5rem",
        marginTop: "0.5rem",
      }}
    >
      <Link
        style={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          color: "black",
          textDecoration: "none",
        }}
        to="/"
      >
        <img
          style={{ color: "white", height: "2rem" }}
          alt="home"
          src={homeImg}
        />
      </Link>
    </div>
  );
}
