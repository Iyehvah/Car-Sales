import React from 'react';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log("AddedFeatures props" , props)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature feature={item} key={item.id} removeItem={props.removeItem} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;