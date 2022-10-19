import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid } from '@ionic/react';
import './Order.css';
import Header from '../components/Header';
import List from '../components/List';

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

        <IonTitle className='ion-title'>Overview</IonTitle>

        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders PENDING</IonTitle>
              <List title="ENC #1978 - José Silva" />
              <List title="ENC #1977 - António Costa" />
              <List title="ENC #1976 - Artur Rocha" />
              <List title="ENC #1975 - Mário Soares" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders AWAITING PAYMENT</IonTitle>
              <List title="ENC #1680 - André Ribeiro" />
              <List title="ENC #1679 - Mário Vaz" />
              <List title="ENC #1678 - Joana Santos" />
              <List title="ENC #1677 - Diana Chaves" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders SENT</IonTitle>
              <List title="ENC #1599 - Carlos Gomes" />
              <List title="ENC #1598 - Olga Duarte" />
              <List title="ENC #1597 - Bruno Carvalho" />
              <List title="ENC #1596 - João Duarte" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders AWAITING FEEDBACK</IonTitle>
              <List title="ENC #1444 - Daniel Oliveira" />
              <List title="ENC #1443 - Filipa Lúcio" />
              <List title="ENC #1442 - Serafim Saudade" />
              <List title="ENC #1441 - Paulo Ferreira Coixão" />
            </IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Order;
