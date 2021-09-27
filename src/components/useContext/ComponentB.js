import React, { useContext } from 'react';
import ComponentC from './ComponentC';

function ComponentB() {
  return (
    <div>
      <div className="container">
        <h1>Hi this is ComponentB</h1>
        <ComponentC />
      </div>
    </div>
  );
}
export default ComponentB;
