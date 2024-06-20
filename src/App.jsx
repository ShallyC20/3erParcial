import { useState } from 'react';
import './App.css';
import Ejercicio from './Componentes/Ejercicio';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Ejercicio />
    </>
  );
}

export default App;
