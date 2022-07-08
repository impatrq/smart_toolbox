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

const checkboxList = [
  {val: 'Tarea 1', isChecked: false},
  {val: 'Tarea 2', isChecked: false},
  {val: 'Tarea 3', isChecked: false},
];

const Tareas: React.FC = () => {

  
  const [list, setList] = useState(checkboxList)
  const updateCheckbox = (i:number) => {
    const lista = JSON.parse(JSON.stringify(list))
    const item = lista[i]
    item.isChecked = !item.isChecked
    console.log(lista)
    setList(lista)
  }
  
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
            <IonItem color={item.isChecked ? 'success' : 'danger'} key={i}>
              <IonLabel>{item.val}</IonLabel>
              <IonCheckbox value={item.val} onIonChange={() => updateCheckbox(i)}></IonCheckbox>
            </IonItem>
            ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tareas;
