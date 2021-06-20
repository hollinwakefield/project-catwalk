import React from 'react';

const Comparison = ({feature: {comparedFeature, currentFeature, feature}}) => (
  <tr>
    <td>{comparedFeature}</td>
    <td>{feature}</td>
    <td>{currentFeature}</td>
  </tr>
);

export default Comparison;
