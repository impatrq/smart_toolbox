import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BarcodeScanner, BarcodeScanResult } from "@awesome-cordova-plugins/barcode-scanner";
import "./Caja.css";
import { update, ref } from "firebase/database";
import db from "../../firebase.js";
import LoginButton from "../../login/LoginButton"

interface barCode {
  [url: string]: number;
}

//ionic build
//npx cap add android
//export CAPACITOR_ANDROID_STUDIO_PATH=/snap/bin/android-studio
//npx cap open android

const Caja: React.FC = () => {
  const nombre = "juan";
  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    const obj: barCode = {};
    const url: string = `/sector1/personas/${nombre}/caja`;
    obj[url] = Number(data.text);
    update(ref(db), obj);
  };

  return (
    <IonPage>
      <IonHeader style={{ display: "flex", justifyItems: "space-between" }}>
        <IonToolbar>
          <IonTitle>Caja</IonTitle>
        </IonToolbar>
        <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
          <LoginButton />
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton
          class="B_registro"
          color="warning"
          expand="full"
          shape="round"
          onClick={openScanner}
        >
          Ingrese una Caja
        </IonButton>
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
