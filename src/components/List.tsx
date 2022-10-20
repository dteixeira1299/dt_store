import React from 'react';
import { IonItem, IonLabel, IonList} from '@ionic/react';
import { Link } from 'react-router-dom';
import './List.css';

interface ContainerProps {
    ord: number;
    name: string;
  }

  
  const List: React.FC<ContainerProps> = ({ ord, name }) => {
    return (
        
      <IonList>
      <IonItem>
        <IonLabel>Ord #<Link to={"/order/"+ord}>{ord}</Link> - {name}</IonLabel>
      </IonItem>
    </IonList>
    


    );
  };
  
  export default List;
