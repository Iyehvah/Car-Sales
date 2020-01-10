import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { removeItem, addItem } from './Actions/actions';
import { connect } from 'react-redux';

const App = (props) => {

  const removeItem = item => {
    props.removeItem(item);
  };

  const addItem = item => {
    props.addItem(item);
  };

  return (
    
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures removeItem={removeItem} additionalFeatures={props.additionalFeatures} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures  addItem={addItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};



export default connect((state) => {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}, {removeItem, addItem})(App);
