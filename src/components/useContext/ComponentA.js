import React from 'react';
import {createContext} from 'react'
import ComponentB from './ComponentB'

const Data=createContext();
function ComponentA() {
  return (
    <div>
      <Data.Provider value={"Nithish"}>
      <div className="container">
        <h1>Hi this is ComponentA</h1>
        <ComponentB />
      </div>
      </Data.Provider>
    </div>
  );
}
export default ComponentA;
export {Data}