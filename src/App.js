import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './Reducers/appReducer';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const addItem = item => {
    // dipsatch an action here to add an item
  };

  const store = createStore(appReducer);
    console.log('INSIDE REDUCER', store);

  return (
    <Provider store={store}>
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures  />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total/>
      </div>
    </div>
    </Provider>
  );
};

export default App;
