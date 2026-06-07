import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './sidebar';
// Importamos nuestro espía directamente desde el stub
import { __mockNavigate } from '../routerStub';

describe('Pruebas de Certificación - Barber Connect Frontend', () => {

  // Limpiamos el historial de clics antes de cada prueba
  beforeEach(() => {
    __mockNavigate.mockClear();
  });

  test('1. Debe renderizar correctamente el título principal de la aplicación', () => {
    render(<Sidebar />);
    expect(screen.getByText('Barber Connect')).toBeInTheDocument();
  });

  test('2. Debe navegar a /citas al hacer click en Citas', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Citas'));
    expect(__mockNavigate).toHaveBeenCalledWith('/citas');
  });

  test('3. Debe navegar a /servicios al hacer click en Servicios', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Servicios'));
    expect(__mockNavigate).toHaveBeenCalledWith('/servicios');
  });

  test('4. Debe navegar a /admin/personal al hacer click en Admin', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Admin'));
    expect(__mockNavigate).toHaveBeenCalledWith('/admin/personal');
  });

  test('5. Debe navegar a /reportes al hacer click en Reportes', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Reportes'));
    expect(__mockNavigate).toHaveBeenCalledWith('/reportes');
  });

  test('6. Debe navegar a /configuration al hacer click en Configuracion', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Configuracion'));
    expect(__mockNavigate).toHaveBeenCalledWith('/configuration');
  });

  test('7. Debe navegar a /login al hacer click en Cerrar sesion', () => {
    render(<Sidebar />);
    fireEvent.click(screen.getByText('Cerrar sesion'));
    expect(__mockNavigate).toHaveBeenCalledWith('/login');
  });
});