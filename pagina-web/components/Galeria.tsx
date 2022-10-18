import { useState, useEffect } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function Galeria({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-2 gap-4">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GaleriaCard imageUrl={imageUrl} show={imagesShownArray[index]} />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GaleriaCard({ imageUrl, show }) {
  const [windowSize, setWindowSize] = useState(0);
  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, [windowSize]);

  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="rounded-xl shadow-md absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        {windowSize > 640 ? (
          <div className="rounded-xl absolute inset-0 bg-black opacity-70"></div>
        ) : null}
        <div
          className={
            "text-center mx-auto text-white z-10 self-center uppercase tracking-widest text-sm" +
            `${windowSize < 640 ? " font-bold" : ""}`
          }
        >
          {imageUrl
            .replace(/\/pictures\//gi, "")
            .replace(/\.jpg/gi, "")
            .replace(/[0-9]/gi, "")}
          {/* {imageUrl == "/pictures/LogoSinFondo.png" ? "Foto 1" : null} */}
        </div>
      </div>
      <img
        className="rounded-xl object-contain h-full w-full"
        src={imageUrl}
        alt=""
      />
    </div>
  );
}
