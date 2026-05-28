import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('barber_user');
    const savedCitas = localStorage.getItem('barber_citas');
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedCitas) setCitas(JSON.parse(savedCitas));
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('barber_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('barber_user');
  };

  const agregarCita = (cita) => {
    const nuevaCita = { ...cita, id: Date.now(), estado: 'Pendiente' };
    const nuevasCitas = [...citas, nuevaCita];
    setCitas(nuevasCitas);
    localStorage.setItem('barber_citas', JSON.stringify(nuevasCitas));
    return nuevaCita.id;
  };

  const cancelarCita = (id) => {
    const nuevasCitas = citas.map(c => c.id === id ? { ...c, estado: 'Cancelada' } : c);
    setCitas(nuevasCitas);
    localStorage.setItem('barber_citas', JSON.stringify(nuevasCitas));
  };

  const modificarCita = (id, datosnuevos) => {
    const nuevasCitas = citas.map(c => c.id === id ? { ...c, ...datosnuevos } : c);
    setCitas(nuevasCitas);
    localStorage.setItem('barber_citas', JSON.stringify(nuevasCitas));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, citas, agregarCita, cancelarCita, modificarCita }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);