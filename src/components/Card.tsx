import React from 'react';
import { IonCard, IonCardContent, IonItem, IonIcon, IonLabel} from '@ionic/react';
import './Card.css';

interface ContainerProps {
    title: string;
    subtitle: string;
    icon: string;
  }
  
  const Card: React.FC<ContainerProps> = ({ title, subtitle, icon }) => {
    return (
        
        <IonCard>
          <IonItem>
            <IonIcon icon={icon} slot="start" />
            <IonLabel>{title}</IonLabel>
          </IonItem>

          <IonCardContent>
            {subtitle}
      </IonCardContent>
        </IonCard>

    


    );
  };
  
  export default Card;