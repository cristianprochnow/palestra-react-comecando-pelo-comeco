import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

function Button(props) {
  return (
    <div type={props.type} className={props.className} onClick={props.onClick}>{props.children}</div>
  );
}

// Versão inicial ______________________________________________________________
/* function App() {
  const httpStatusCodesList = [
    100, 101, 102, 103,
    
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 
    410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 
    422, 423, 424, 425, 426, 428, 429, 431, 451,
    
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ];
  let selectedHttpCode = null;

  function setHttpCode() {
    const randomDecimal = Math.random();

    const scaledRandom = randomDecimal * httpStatusCodesList.length;
    const randomIndex = Math.floor(scaledRandom);

    selectedHttpCode = httpStatusCodesList[randomIndex];
  }

  return (
    <main>
      <span>Código HTTP escolhido: {selectedHttpCode}</span>
      <Button type="button" className="button" onClick={setHttpCode}>Botão Componente</Button>
    </main>
  )
} */

// Usando useState _____________________________________________________________
/* function App() {
  const httpStatusCodesList = [
    100, 101, 102, 103,
    
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 
    410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 
    422, 423, 424, 425, 426, 428, 429, 431, 451,
    
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ];
  const [selectedHttpCode, setSelectedHttpCode] = useState(null);

  function setHttpCode() {
    const randomDecimal = Math.random();

    const scaledRandom = randomDecimal * httpStatusCodesList.length;
    const randomIndex = Math.floor(scaledRandom);

    setSelectedHttpCode(httpStatusCodesList[randomIndex]);
  }

  return (
    <main>
      <span>Código HTTP escolhido: {selectedHttpCode}</span>
      <Button type="button" className="button" onClick={setHttpCode}>Botão Componente</Button>
    </main>
  )
} */

// Usando useEffect ____________________________________________________________
/* function App() {
  const httpStatusCodesList = [
    100, 101, 102, 103,
    
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 
    410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 
    422, 423, 424, 425, 426, 428, 429, 431, 451,
    
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ];
  const [selectedHttpCode, setSelectedHttpCode] = useState(null);

  useEffect(() => {
    setHttpCode();
  }, []);

  useEffect(() => {
    if (selectedHttpCode % 2 === 0) {
      alert('HTTP code is even')
    }
  }, [selectedHttpCode])

  function setHttpCode() {
    const randomDecimal = Math.random();

    const scaledRandom = randomDecimal * httpStatusCodesList.length;
    const randomIndex = Math.floor(scaledRandom);

    setSelectedHttpCode(httpStatusCodesList[randomIndex]);
  }

  return (
    <main>
      <span>Código HTTP escolhido: {selectedHttpCode}</span>
      <Button type="button" className="button" onClick={setHttpCode}>Botão Componente</Button>
    </main>
  )
} */

// Usando useMemo ______________________________________________________________
/* function App() {
  const httpStatusCodesList = useMemo(() => [
    100, 101, 102, 103,
    
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 
    410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 
    422, 423, 424, 425, 426, 428, 429, 431, 451,
    
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ], []);
  const [selectedHttpCode, setSelectedHttpCode] = useState(null);

  useEffect(() => {
    setHttpCode();
  }, []);

  useEffect(() => {
    if (selectedHttpCode % 2 === 0) {
      alert('HTTP code is even')
    }
  }, [selectedHttpCode])

  function setHttpCode() {
    const randomDecimal = Math.random();

    const scaledRandom = randomDecimal * httpStatusCodesList.length;
    const randomIndex = Math.floor(scaledRandom);

    setSelectedHttpCode(httpStatusCodesList[randomIndex]);
  }

  return (
    <main>
      <span>Código HTTP escolhido: {selectedHttpCode}</span>
      <Button type="button" className="button" onClick={setHttpCode}>Botão Componente</Button>
    </main>
  )
} */

// Usando useCallback __________________________________________________________
function App() {
  const httpStatusCodesList = useMemo(() => [
    100, 101, 102, 103,
    
    200, 201, 202, 203, 204, 205, 206, 207, 208, 226,
    
    300, 301, 302, 303, 304, 305, 306, 307, 308,
    
    400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 
    410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 
    422, 423, 424, 425, 426, 428, 429, 431, 451,
    
    500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
  ], []);
  const [selectedHttpCode, setSelectedHttpCode] = useState(null);

  useEffect(() => {
    setHttpCode();
  }, []);

  useEffect(() => {
    if (selectedHttpCode % 2 === 0) {
      alert('HTTP code is even')
    }
  }, [selectedHttpCode])

  const setHttpCode = useCallback(() => {
    const randomDecimal = Math.random();

    const scaledRandom = randomDecimal * httpStatusCodesList.length;
    const randomIndex = Math.floor(scaledRandom);

    setSelectedHttpCode(httpStatusCodesList[randomIndex]);
  }, []);

  return (
    <main>
      <span>Código HTTP escolhido: {selectedHttpCode}</span>
      <Button type="button" className="button" onClick={setHttpCode}>Botão Componente</Button>
    </main>
  )
}

export default App
