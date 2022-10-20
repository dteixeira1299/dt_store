import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid } from '@ionic/react';
import './Order.css';
import Header from '../components/Header';
import List from '../components/List';
import Card from '../components/Card';
import { cube } from 'ionicons/icons';
import { useLocation } from "react-router-dom";


const Order: React.FC = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('order_id');
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
              <List ord={1978} name="José Silva" />
              <List ord={1977} name="António Costa" />
              <List ord={1976} name="Artur Rocha" />
              <List ord={1975} name="Mário Soares" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders AWAITING PAYMENT</IonTitle>
              <List ord={1680} name="André Ribeiro" />
              <List ord={1679} name="Mário Vaz" />
              <List ord={1678} name="Joana Santos" />
              <List ord={1677} name="Diana Chaves" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders SENT</IonTitle>
              <List ord={1599} name="Carlos Gomes" />
              <List ord={1598} name="Olga Duarte" />
              <List ord={1597} name="Bruno Carvalho" />
              <List ord={1596} name="João Duarte" />
            </IonCol>
            <IonCol size="12" size-md="4" className='ion-col'>
              <IonTitle>Last orders AWAITING FEEDBACK</IonTitle>
              <List ord={1444} name="Daniel Oliveira" />
              <List ord={1443} name="Filipa Lúcio" />
              <List ord={1442} name="Serafim Saudade" />
              <List ord={1441} name="Paulo Ferreira Coixão" />
            </IonCol>
          </IonRow>
        </IonGrid>



      </IonContent>
    </IonPage>
  );
};

export default Order;
