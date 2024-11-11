import axios from 'axios';  // Certifique-se de importar o axios aqui
import '@testing-library/jest-dom';  
import React from 'react'; 
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
    render(<App />);
    const linkElement_2 = screen.getByText(/aprenda react/i);
    expect(linkElement_2).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<App />);
    const imageElement = screen.getByAltText(/nees logo/i);  
    expect(imageElement).toBeInTheDocument();
  });

  test('renders button', () => {
    render(<App />);
    const buttonElement = screen.getByText(/Contagem/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('Data loading', () => {
    render(<App />);
    const dataElement = screen.getByText(/Carregando.../i);
    expect(dataElement).toBeInTheDocument();
  }
  );
 
  test('exibe os dados dos estados brasileiros na interface', async () => {
    render(<App />);
  
    // Espera que o carregamento aconteça
    await waitFor(() => screen.getByText(/Carregando.../i));
  
    // Agora, espera que o conteúdo do JSON seja renderizado
    const jsonContent = await screen.findByText(/"nome":/i);  // Espera que o campo 'nome' seja exibido, é mais genérico.
  
    // Verifica se pelo menos um dos estados aparece na tela, sem se preocupar com a formatação
    expect(jsonContent).toHaveTextContent("Acre");
    expect(jsonContent).toHaveTextContent("Alagoas");
    expect(jsonContent).toHaveTextContent("Amapá");
    expect(jsonContent).toHaveTextContent("Amazonas");
    expect(jsonContent).toHaveTextContent("Bahia");
    expect(jsonContent).toHaveTextContent("Ceará");
  });
  
  
  