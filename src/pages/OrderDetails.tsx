import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid, IonItem, IonLabel, IonButton } from '@ionic/react';
import Header from '../components/Header';
import './OrderDetails.css';


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

      

        <IonGrid className='ion-grid'>
          <IonRow>
            <IonCol size="12" size-md="6">
            <IonTitle className='ion-title'>Order #1978 - José Silva</IonTitle>
            </IonCol>
            <IonCol size="12" size-md="6" style={{ alignSelf: 'flex-start', textAlign: 'right' }}>
            <IonButton color="dark">Invoice</IonButton>
            <IonButton color="warning">PENDING</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>



        <IonGrid className='ion-grid'>
        <IonTitle>Client Data:</IonTitle>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonItem>
                <IonLabel><strong>Name:</strong> José Silva</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><strong>Address:</strong> Rua Dom Francisco Manuel de Melo, 15 1070-085</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><strong>City:</strong> Lisbon</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="12" size-md="6">
            <IonItem>
                <IonLabel><strong>Email:</strong> jose.silva@gmail.com</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><strong>Phone:</strong> 912423888</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>


        <hr
          style={{
            background: 'white',
            color: 'white',
            borderColor: 'white',
            height: '1px',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        />

<IonGrid className='ion-grid'>
        <IonTitle>Payment Data:</IonTitle>
          <IonRow>
            <IonCol size="12" size-md="6">
              <IonItem>
                <IonLabel><strong>Payment Method Name:</strong> Mastercard</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel><strong>Payment Method Status:</strong> paid</IonLabel>
              </IonItem>
            </IonCol>
            <IonCol size="12" size-md="6">
            <IonItem>
                <IonLabel><strong>Payment Transaction ID:</strong> 4928980340280828492</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>


      </IonContent>
    </IonPage>
  );
};

export default Order;
