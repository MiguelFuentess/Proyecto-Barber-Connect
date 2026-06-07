// src/routerStub.js
const mockNavigate = jest.fn();

module.exports = {
  // Simulamos el hook para que devuelva nuestra función espía
  useNavigate: () => mockNavigate,
  // Simulamos los componentes visuales por si acaso
  MemoryRouter: ({ children }) => children,
  Link: ({ children }) => children,
  NavLink: ({ children }) => children,
  // Exportamos el espía para poder usar el expect() en nuestras pruebas
  __mockNavigate: mockNavigate
};