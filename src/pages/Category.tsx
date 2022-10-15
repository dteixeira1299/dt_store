import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Category.css';
import Header from '../components/Header';

const Category: React.FC = () => {
  return (
    <IonPage>
      <Header/>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Category</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Category page" />
      </IonContent>
    </IonPage>
  );
};

export default Category;
