import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import db from "../../firebase.js";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import LoginButton from "../../auth/LoginButton";
import { useUsuarioContext } from "../../contexts/UsuarioContext";

const checkboxList: Array<{ val: String; isChecked: boolean }> = [];

const Tareas: React.FC = () => {
  const { user } = useUsuarioContext();
  const [list, setList] = useState(checkboxList);
  const updateCheckbox = (i: number) => {
    const lista = JSON.parse(JSON.stringify(list));
    const item = lista[i];
    item.isChecked = !item.isChecked;
    setList(lista);
    console.log(lista);
  };

  useEffect(() => {
    if (user !== "") {
      const starCountRef = ref(db, "sector1/personas/" + user + "/tareas");
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
  }, [user]);

  return (
    <IonPage>
      <IonHeader style={{ display: "flex", justifyItems: "space-between" }}>
        <IonToolbar>
          <IonTitle>Tareas</IonTitle>
        </IonToolbar>
        <div
          style={{
            backgroundColor: "#1f1f1f",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <LoginButton />
        </div>
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
