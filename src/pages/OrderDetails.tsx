import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid } from '@ionic/react';
import Header from '../components/Header';


const Order: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Order</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonTitle className='ion-title'>Order Details</IonTitle>



      </IonContent>
    </IonPage>
  );
};

export default Order;
