import React, { useState } from 'react';
import { IonItem, IonList, IonSearchbar } from '@ionic/react';
import './ProductsList.css';

function ProductsList() {
  const data = ['Product A', 'Product B', 'Product C', 'Product D'];
  let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }

  return (
    <>
      <IonSearchbar color="dark" debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>

      <IonList>
        { results.map(result => (
          <IonItem>{ result }</IonItem>
        ))}
      </IonList>
    </>
  );
}
export default ProductsList;

