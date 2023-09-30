// MoedaContext.js
import React, { createContext, useState } from 'react';

const MoedaContext = createContext();

export function MoedaProvider({ children }) {
  const [moeda, setMoeda] = useState('Real');

  return (
    <MoedaContext.Provider value={{ moeda, setMoeda }}>
      {children}
    </MoedaContext.Provider>
  );
}

export default MoedaContext;
