import { IonButton, useIonAlert } from '@ionic/react';

function Example() {
    const [presentAlert] = useIonAlert();

    return (
        <IonButton
            onClick={() =>
                presentAlert({
                    header: 'Ingrese su nombre y apellido',
                    buttons: ['OK'],
                    inputs: [
                        {
                            placeholder: 'Nombre',
                        },
                        {
                            placeholder: 'Apellido',
                        },
                    ],
                })
            }
        >
            Usuario
        </IonButton>
    );
}
export default Example;