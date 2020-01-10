import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  console.log('props', props)

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeItem(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};


export default connect((state => {
  return state
}))(AddedFeature);
