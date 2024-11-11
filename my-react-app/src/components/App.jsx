import React, { useState, useEffect } from 'react';
import axios from 'axios';
import neeslogo from "../assets/neeslogo.jpg";
import './App.css'; // Assegure-se de que o CSS esteja configurado corretamente

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setData(response.data);  
      })
      .catch(error => {
        setError(error.message);  
      });
  }, []);   

  return (
    <>
      <img 
        src={neeslogo} 
        alt="nees logo" 
        className="image" 
        style={{
          width: '150px', // Ajustando o tamanho da imagem
          height: 'auto', // Mantendo a proporção da imagem
          display: 'block',
          margin: '0 auto',
        }}
      />
      <h1>Meu App React + Vite</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Contagem {count}
        </button>
      </div>

      <p>learn react</p>
      <p>aprenda react</p>

      <div>
        <h1>Dados dos Estados Brasileiros:</h1>
        {error && <p>Erro: {error}</p>}
        <div 
          style={{
            padding: '20px',
            backgroundColor: '#333',  
            color: '#fff', 
            borderRadius: '8px',
            border: '1px solid #ddd',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            marginTop: '20px',
            maxHeight: '400px',
            overflowY: 'auto',
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word'
          }}
        >
          {data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
