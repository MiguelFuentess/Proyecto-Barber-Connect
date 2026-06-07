import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './sidebar';

// Mock de useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pruebas de Certificación - Barber Connect Frontend', () => {

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('1. Debe renderizar correctamente el título principal de la aplicación', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    const titulo = screen.getByText('Barber Connect');
    expect(titulo).toBeInTheDocument();
  });

  test('2. Debe mostrar la descripción del ecosistema de la barbería', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Citas')).toBeInTheDocument();
    expect(screen.getByText('Servicios')).toBeInTheDocument();
    expect(screen.getByText('Reportes')).toBeInTheDocument();
  });

  test('3. Debe verificar la existencia de los botones interactivos del menú', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    expect(screen.getByText('Citas')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Configuracion')).toBeInTheDocument();
    expect(screen.getByText('Cerrar sesion')).toBeInTheDocument();
  });

  test('4. Debe navegar a /citas al hacer click en Citas', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Citas'));
    expect(mockNavigate).toHaveBeenCalledWith('/citas');
  });

  test('5. Debe navegar a /servicios al hacer click en Servicios', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Servicios'));
    expect(mockNavigate).toHaveBeenCalledWith('/servicios');
  });

  test('6. Debe navegar a /reportes al hacer click en Reportes', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Reportes'));
    expect(mockNavigate).toHaveBeenCalledWith('/reportes');
  });

  test('7. Debe navegar a /login al hacer click en Cerrar sesion', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Cerrar sesion'));
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });

  test('8. Debe navegar a /configuration al hacer click en Configuracion', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByText('Configuracion'));
    expect(mockNavigate).toHaveBeenCalledWith('/configuration');
  });
});