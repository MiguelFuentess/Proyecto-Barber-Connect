import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useAuth } from '../context/AuthContext'; 
import API_URL from '../config'; // ← usa este, borra el del try

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (role) => { // ← agrega async aquí
    if (!username.trim() || !password.trim()) {
      alert("Por favor, rellena todos los campos para iniciar sesión.");
      return;
    }

    try {
      // ← borra la línea "const API_URL = process.env..." que tenías aquí
      const respuesta = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(datos.message || 'Usuario o contraseña incorrectos');
      }

      login({ 
        nombre: datos.username || username, 
        role: datos.role || role,
        token: datos.token
      });

      if (role === 'admin') {
        navigate('/configuration');
      } else {
        navigate('/');
      }

    } catch (error) {
      alert(error.message || "Error al conectar con el servidor.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-header-logo">
        <h1 className="brand-logo-gold">Barber Connect</h1>
      </div>

      <h2 className="login-main-title">Iniciar Sesion</h2>

      <div className="login-card-luxury">
        <div className="input-group-luxury">
          <input
            type="text"
            placeholder="Ingresar Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        
        <div className="input-group-luxury">
          <input
            type="password"
            placeholder="Ingresar Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-options-luxury">
          <label className="remember-me-luxury">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Recordarme
          </label>
          <a href="/olvidaste-contrasena" className="forgot-password-luxury">
            Olvidaste la contraseña ?
          </a>
        </div>

        <h3 className="section-subtitle-gold">Ingresar</h3>

        <div className="role-buttons-container">
          <button className="btn-gold-luxury" onClick={() => handleLogin('user')}>
            Usuario
          </button>
          <button className="btn-gold-luxury" onClick={() => handleLogin('admin')}>
            Admin
          </button>
        </div>
      </div>

      <button className="btn-outline-gold" onClick={() => navigate('/registro')}>
        Registrarse
      </button>
    </div>
  );
};

export default LoginPage;