import { IonButton, useIonAlert } from '@ionic/react';
import { useState } from 'react';

function Example() {
    const [presentAlert] = useIonAlert();
    const [usuario, setUsuario] = useState("");
    return (
        <IonButton
            onClick={() =>
                presentAlert({
                    header: 'Ingrese su nombre y apellido',
                    buttons: [{
                        text: 'Guardar',
                        role: 'guardar',
                        handler: (e) => {
                            setUsuario(e[0] + e[1]);
                        },
                    },],
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