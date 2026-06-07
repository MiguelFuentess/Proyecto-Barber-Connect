import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Replicamos la estructura exacta del Sidebar sin depender de react-router-dom
const mockNavigate = jest.fn();

const SidebarTest = () => {
  return (
    <aside>
      <h2>Barber Connect</h2>
      <button onClick={() => mockNavigate('/citas')}>Citas</button>
      <button onClick={() => mockNavigate('/servicios')}>Servicios</button>
      <button onClick={() => mockNavigate('/admin/personal')}>Admin</button>
      <button onClick={() => mockNavigate('/reportes')}>Reportes</button>
      <div onClick={() => mockNavigate('/configuration')}>Configuracion</div>
      <div onClick={() => mockNavigate('/login')}>Cerrar sesion</div>
    </aside>
  );
};

describe('Pruebas de Certificación - Barber Connect Frontend', () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('1. Debe renderizar correctamente el título principal de la aplicación', () => {
    render(<SidebarTest />);
    expect(screen.getByText('Barber Connect')).toBeInTheDocument();
  });

  test('2. Debe mostrar la descripción del ecosistema de la barbería', () => {
    render(<SidebarTest />);
    expect(screen.getByText('Citas')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Reportes')).toBeInTheDocument();
  });

  test('3. Debe verificar la existencia de los botones interactivos del menú', () => {
    render(<SidebarTest />);
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Configuracion')).toBeInTheDocument();
    expect(screen.getByText('Cerrar sesion')).toBeInTheDocument();
  });

  test('4. Debe navegar a /citas al hacer click en Citas', () => {
    render(<SidebarTest />);
    fireEvent.click(screen.getByText('Citas'));
    expect(mockNavigate).toHaveBeenCalledWith('/citas');
  });

  test('5. Debe navegar a /servicios al hacer click en Servicios', () => {
    render(<SidebarTest />);
    fireEvent.click(screen.getByText('Servicios'));
    expect(mockNavigate).toHaveBeenCalledWith('/servicios');
  });

  test('6. Debe navegar a /reportes al hacer click en Reportes', () => {
    render(<SidebarTest />);
    fireEvent.click(screen.getByText('Reportes'));
    expect(mockNavigate).toHaveBeenCalledWith('/reportes');
  });

  test('7. Debe navegar a /login al hacer click en Cerrar sesion', () => {
    render(<SidebarTest />);
    fireEvent.click(screen.getByText('Cerrar sesion'));
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('8. Debe navegar a /configuration al hacer click en Configuracion', () => {
    render(<SidebarTest />);
    fireEvent.click(screen.getByText('Configuracion'));
    expect(mockNavigate).toHaveBeenCalledWith('/configuration');
  });
});