import { IonContent, IonHeader, IonPage, IonTitle, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import './Products.css';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';
import CardProduct from '../components/CardProduct';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const data = ['Product A', 'Product B', 'Product C', 'Product D'];

const Products: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <IonHeader className='ion-header'>
          <IonTitle size="large">Products List</IonTitle>
        </IonHeader>
        <ProductsList />

        <IonText color="dark">
          <h5>Most popular products</h5>
        </IonText>

        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="4">
              <CardProduct
                id={1}
                title={"Product A"}
                details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                image={image1}
                price={100} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <CardProduct
                id={2}
                title={"Product B"}
                details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                image={image2}
                price={300} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <CardProduct
                id={3}
                title={"Product C"}
                details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                image={image3}
                price={150} />
            </IonCol>
            <IonCol size="12" size-md="4">
              <CardProduct
                id={4}
                title={"Product D"}
                details={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                image={image4}
                price={200} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Products;
