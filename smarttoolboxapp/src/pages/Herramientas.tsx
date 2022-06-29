import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Herramientas.css';

const Herramientas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Herramientas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Herramientas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Herramientas page" />
      </IonContent>
    </IonPage>
  );
};

export default Herramientas;
