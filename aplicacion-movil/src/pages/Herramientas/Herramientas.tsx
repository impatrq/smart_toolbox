import {
  IonAlert,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import db from "../../firebase.js";

const checkboxList: Array<{ val: String}> = [];

const Herramientas: React.FC = () => {
  const [list, setList] = useState(checkboxList);

  useEffect(() => {
    const caja = "12537865";

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
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Herramientas</IonTitle>
        </IonToolbar>
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
