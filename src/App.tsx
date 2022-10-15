import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cube, list, home, cart, people } from 'ionicons/icons';
import Home from './pages/Home';
import Products from './pages/Products';
import Category from './pages/Category';
import Order from './pages/Order';
import Users from './pages/Users';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="products" href="/products">
            <IonIcon icon={cube} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="category" href="/category">
            <IonIcon icon={list} />
            <IonLabel>Category</IonLabel>
          </IonTabButton>
          <IonTabButton tab="order" href="/order">
            <IonIcon icon={cart} />
            <IonLabel>Order</IonLabel>
          </IonTabButton>
          <IonTabButton tab="users" href="/users">
            <IonIcon icon={people} />
            <IonLabel>Users</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
