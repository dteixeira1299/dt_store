import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/react';
import './CardProduct.css';

interface ContainerProps {
    title: string;
    details: string;
    image: string;
    price: number;
    id: number;
  }
  
    function viewProduct(name:any) {
      alert(`hello, ${name}`);
    }
  
  const CardProduct: React.FC<ContainerProps> = ({ title, details, image, price, id }) => {
    return (
        
      <IonCard className='CardProduct'>
      <img width="100%" src={image} />
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>TOTAL PRICE: {price} $</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        {details}
      </IonCardContent>
    </IonCard>

    


    );
  };
  
  export default CardProduct;