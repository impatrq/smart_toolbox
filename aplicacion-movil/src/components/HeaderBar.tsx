import {
    IonHeader,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import LoginButton from "../auth/LoginButton";

type Props = {
    name: string
}

export default function HeaderBar({ name }: Props) {
    return (
        <IonHeader style={{ display: "flex", justifyItems: "space-between" }}>
            <IonToolbar>
                <IonTitle>{ name }</IonTitle>
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
    )
}