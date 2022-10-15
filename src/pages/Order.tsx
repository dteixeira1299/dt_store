import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Order.css';
import Header from '../components/Header';

const Order: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Order</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Order page" />
      </IonContent>
    </IonPage>
  );
};

export default Order;
