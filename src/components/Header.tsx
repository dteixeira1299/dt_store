import React from 'react';
import { IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Header.css';


  
  const Header: React.FC = () => (

        
    <IonHeader>
    <IonToolbar>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonTitle>DT Store</IonTitle>
          </IonCol>
          <IonCol  style={{ alignSelf: 'flex-start', textAlign: 'right' }}>
            Logged as Diogo Teixeira
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonToolbar>
  </IonHeader>

    


    );

  
  export default Header;