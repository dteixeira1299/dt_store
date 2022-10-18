import { IonContent, IonHeader, IonPage, IonTitle, IonRow, IonCol, IonGrid } from '@ionic/react';
import Card from '../components/Card';
import Header from '../components/Header';
import './Home.css';
import { cube, list, cart, people } from 'ionicons/icons';
import ChartSales from '../components/ChartSales';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className='ion-no-border'>
          <IonTitle size="large">
            Welcome, <strong>Diogo Teixeira</strong>!
            <hr
              style={{
                background: 'white',
                color: 'white',
                borderColor: 'white',
                height: '1px',
                marginTop: '20px',
              }}
            /></IonTitle>
        </IonHeader>

        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <Card title="4" subtitle="Total Product" icon={cube} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <Card title="10" subtitle="Total Categories" icon={list} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <Card title="13" subtitle="Total Orders" icon={cart} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <Card title="30" subtitle="Total Users" icon={people} />
            </IonCol>
          </IonRow>
        </IonGrid>

        <ChartSales/>



      </IonContent>
    </IonPage>
  );
};

export default Home;
