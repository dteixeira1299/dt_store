import React from 'react';
import { IonItem, IonLabel, IonList} from '@ionic/react';
import './List.css';

interface ContainerProps {
    title: string;
  }
  
  const List: React.FC<ContainerProps> = ({ title }) => {
    return (
        
      <IonList>
      <IonItem>
        <IonLabel>{title}</IonLabel>
      </IonItem>
    </IonList>
    


    );
  };
  
  export default List;