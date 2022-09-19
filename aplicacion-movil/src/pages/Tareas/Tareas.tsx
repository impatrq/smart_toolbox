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
import LoginButton from "../../login/LoginButton"
import { useUsuarioContext } from "../../contexts/UsuarioContext"

const checkboxList: Array<{ val: String; isChecked: boolean }> = [];

const Tareas: React.FC = () => {
  const { user, setUser } = useUsuarioContext();
  const [list, setList] = useState(checkboxList);
  const updateCheckbox = (i: number) => {
    const lista = JSON.parse(JSON.stringify(list));
    const item = lista[i];
    item.isChecked = !item.isChecked;
    console.log(lista);
    setList(lista);
  };

  useEffect(() => {
    const persona = user;

    const starCountRef = ref(db, "sector1/personas/" + persona + "/tareas");
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
  }, [user]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tareas</IonTitle>
        </IonToolbar>
        <LoginButton />
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
