import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import db from "../../firebase.js";
import LoginButton from "../../login/LoginButton";
import { useCajaContext } from "../../contexts/CajaContext";

const checkboxList: Array<{ val: String }> = [];

const Herramientas: React.FC = () => {
  const { caja } = useCajaContext();
  const [list, setList] = useState(checkboxList);

  useEffect(() => {
    if (caja !== "") {
      const starCountRef = ref(db, "sector1/cajas/" + caja + "/missing_tools");
      onValue(starCountRef, (snapshot) => {
        const raw_data = snapshot.val();
        const data = raw_data
          .split(/\|/gi)
          .map((i: String) => i.replace(/^\s+|\s+$/gi, ""))
          .map((i: String) => {
            return { val: i, isChecked: false };
          });
        setList(data);
      });
    }
  }, [caja]);

  return (
    <IonPage>
      <IonHeader style={{ display: "flex", justifyItems: "space-between" }}>
        <IonToolbar>
          <IonTitle>Herramientas</IonTitle>
        </IonToolbar>
        <div style={{ height: "100%", display: "grid", placeItems: "center" }}>
          <LoginButton />
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {list.map((item, i) => (
            <IonItem color="secondary" key={i}>
              <IonLabel>{item.val}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Herramientas;
