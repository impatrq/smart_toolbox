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
import { useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase.js";

const checkboxList = [
  { val: "Tarea 1", isChecked: false },
  { val: "Tarea 2", isChecked: false },
  { val: "Tarea 3", isChecked: false },
];

const Tareas: React.FC = () => {
  const [list, setList] = useState(checkboxList);
  const updateCheckbox = (i: number) => {
    const lista = JSON.parse(JSON.stringify(list));
    const item = lista[i];
    item.isChecked = !item.isChecked;
    console.log(lista);
    setList(lista);
  };

  const persona = "p1";

  const starCountRef = ref(db, "sector1/personas/" + persona + "/tareas");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(
      data.split(/\|/gi).map((i: String) => i.replace(/^\s+|\s+$/gi, "")).map((i:String)=>{return {val:i,isChecked:false}}),
      
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tareas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {list.map((item, i) => (
            <IonItem color={item.isChecked ? "success" : "danger"} key={i}>
              <IonLabel>{item.val}</IonLabel>
              <IonCheckbox
                value={item.val}
                onIonChange={() => updateCheckbox(i)}
              ></IonCheckbox>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tareas;
