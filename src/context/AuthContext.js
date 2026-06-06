import React, { createContext, useContext, useState, useEffect } from 'react';
import API_URL from '../config';

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

  // ← Refresca el token automáticamente
  const refreshToken = async () => {
    try {
      const savedUser = JSON.parse(localStorage.getItem('barber_user'));
      if (!savedUser?.refreshToken) return null;

      const respuesta = await fetch(`${API_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${savedUser.refreshToken}`,
        },
      });

      if (!respuesta.ok) {
        logout();
        return null;
      }

      const datos = await respuesta.json();
      const updatedUser = { 
        ...savedUser, 
        token: datos.accessToken,
        refreshToken: datos.refreshToken || savedUser.refreshToken
      };
      setUser(updatedUser);
      localStorage.setItem('barber_user', JSON.stringify(updatedUser));
      return datos.accessToken;

    } catch (error) {
      logout();
      return null;
    }
  };

  // ← Fetch con refresh automático
  const fetchConToken = async (url, options = {}) => {
    const respuesta = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${user?.token}`,
      },
    });

    // Si el token expiró, refresca y reintenta
    if (respuesta.status === 401) {
      const nuevoToken = await refreshToken();
      if (!nuevoToken) return respuesta;

      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `Bearer ${nuevoToken}`,
        },
      });
    }

    return respuesta;
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('barber_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setCitas([]);
    localStorage.removeItem('barber_user');
    localStorage.removeItem('barber_citas');
  };

  const agregarCita = (cita) => {
    const nuevaCita = { ...cita, id: cita.id || Date.now(), estado: 'Pendiente' };
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

  const modificarCita = (id, datosNuevos) => {
    const nuevasCitas = citas.map(c => c.id === id ? { ...c, ...datosNuevos } : c);
    setCitas(nuevasCitas);
    localStorage.setItem('barber_citas', JSON.stringify(nuevasCitas));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, citas, agregarCita, cancelarCita, modificarCita, fetchConToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
