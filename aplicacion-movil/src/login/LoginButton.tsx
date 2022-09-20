import { IonButton, useIonAlert } from '@ionic/react';
import { useUsuarioContext } from "../contexts/UsuarioContext"

function LoginButton() {
    const [presentAlert] = useIonAlert();
    const { setUser } = useUsuarioContext();
    return (
        <IonButton
            onClick={() =>
                presentAlert({
                    header: 'Ingrese su nombre y apellido',
                    buttons: [{
                        text: 'Guardar',
                        role: 'guardar',
                        handler: (e) => {
                            e[1]==="" ? setUser(e[0]) : setUser(e[0] + " " + e[1])
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
export default LoginButton;