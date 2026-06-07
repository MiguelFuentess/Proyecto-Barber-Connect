import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock completo de react-router-dom
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

import Sidebar from './sidebar';

describe('Pruebas de Certificación - Barber Connect Frontend', () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('1. Debe renderizar correctamente el título principal de la aplicación', () => {
    render(<Sidebar />);
    expect(screen.getByText('Barber Connect')).toBeInTheDocument();
  });

  test('2. Debe mostrar la descripción del ecosistema de la barbería', () => {
    render(<Sidebar />);
    expect(screen.getByText('Citas')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Reportes')).toBeInTheDocument();
  });

  test('3. Debe verificar la existencia de los botones interactivos del menú', () => {
    render(<Sidebar />);
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Configuracion')).toBeInTheDocument();
    expect(screen.getByText('Cerrar sesion')).toBeInTheDocument();
  });

  test('4. Debe navegar a /citas al hacer click en Citas', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Citas'));
    expect(mockNavigate).toHaveBeenCalledWith('/citas');
  });

  test('5. Debe navegar a /servicios al hacer click en Servicios', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Servicios'));
    expect(mockNavigate).toHaveBeenCalledWith('/servicios');
  });

  test('6. Debe navegar a /reportes al hacer click en Reportes', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Reportes'));
    expect(mockNavigate).toHaveBeenCalledWith('/reportes');
  });

  test('7. Debe navegar a /login al hacer click en Cerrar sesion', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Cerrar sesion'));
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('8. Debe navegar a /configuration al hacer click en Configuracion', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Configuracion'));
    expect(mockNavigate).toHaveBeenCalledWith('/configuration');
  });
});