import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tareas from "./pages/Tareas/Tareas";
import Herramientas from "./pages/Herramientas/Herramientas";
import Caja from "./pages/Caja/Caja";
import { UsuarioContextProvider } from "./contexts/UsuarioContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { CajaContextProvider } from "./contexts/CajaContext";

setupIonicReact();

const App: React.FC = () => (
  <CajaContextProvider>
    <UsuarioContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            {/*Rutas de react*/}
            <IonRouterOutlet>
              <Route exact path="/Tareas">
                <Tareas />
              </Route>
              <Route exact path="/Herramientas">
                <Herramientas />
              </Route>
              <Route path="/Caja">
                <Caja />
              </Route>
              <Route exact path="/">
                <Redirect to="/Tareas" />
              </Route>
            </IonRouterOutlet>

            {/* Tabs inferiores */}
            <IonTabBar slot="bottom">
              <IonTabButton tab="Tareas" href="/Tareas">
                <IonIcon icon={triangle} />
                <IonLabel>Tareas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Herramientas" href="/Herramientas">
                <IonIcon icon={ellipse} />
                <IonLabel>Herramientas</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Caja" href="/Caja">
                <IonIcon icon={square} />
                <IonLabel>Caja</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    </UsuarioContextProvider>
  </CajaContextProvider>
);

export default App;
