import React, { useContext } from 'react';

import ComponentC from './ComponentC';
import { Data } from './ComponentA';

function ComponentC() {
  const Mydata = useContext(Data);
  return (
    <div>
      <div className="container">
        <h1>Hi this is ComponentC</h1>
        <h2>{Mydata}</h2>
      </div>
    </div>
  );
}
export default ComponentC;
