import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BarcodeScanner } from "@awesome-cordova-plugins/barcode-scanner";
import "./Caja.css";
import { update } from "firebase/database";
import db from "../../firebase.js";
import { useState } from "react";

//ionic build
//npx cap add android
//export CAPACITOR_ANDROID_STUDIO_PATH=/snap/bin/android-studio 
//npx cap open android

const Caja: React.FC = () => {

  const [code, setCode] = useState("")
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    setCode(data.text)
  };

// const Update = () => {
    

//       const postData = {
//         uid: uid,
//       };

//       const newUpdateKey = update(uid)

//   };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Caja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton class="B_registro" color="warning" expand="full" shape="round" onClick={openScanner}>Ingrese una Caja</IonButton>
          <IonTitle>{code}</IonTitle>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Caja</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Caja;
