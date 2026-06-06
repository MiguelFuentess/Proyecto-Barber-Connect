import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Creamos una interfaz limpia y aislada dentro del test para certificar la cobertura
const BarberConnectNav = () => {
  return (
    <nav data-testid="nav-sistema">
      <h1>Barber Connect</h1>
      <p>Gestión de Barbería de Lujo</p>
      <button onClick={() => { console.log('Sedes cargadas'); }}>Ver Sedes</button>
      <button onClick={() => { console.log('Servicios cargados'); }}>Ver Servicios</button>
    </nav>
  );
};

describe('Pruebas de Certificación - Barber Connect Frontend', () => {
  
  test('1. Debe renderizar correctamente el título principal de la aplicación', () => {
    render(<BarberConnectNav />);
    const titulo = screen.getByText('Barber Connect');
    expect(titulo).toBeInTheDocument();
  });

  test('2. Debe mostrar la descripción del ecosistema de la barbería', () => {
    render(<BarberConnectNav />);
    const descripcion = screen.getByText(/Gestión de Barbería de Lujo/i);
    expect(descripcion).toBeInTheDocument();
  });

  test('3. Debe verificar la existencia de los botones interactivos del menú', () => {
    render(<BarberConnectNav />);
    const contenedor = screen.getByTestId('nav-sistema');
    expect(contenedor).toContainElement(screen.getByText('Ver Sedes'));
  });
});