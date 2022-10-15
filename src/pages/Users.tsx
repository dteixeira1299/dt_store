import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Users.css';
import Header from '../components/Header';

const Users: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Users</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Users page" />
      </IonContent>
    </IonPage>
  );
};

export default Users;
