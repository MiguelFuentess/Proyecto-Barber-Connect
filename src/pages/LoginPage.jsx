import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useAuth } from '../context/AuthContext'; // ← corregido el path

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // ← corregido, destructuring del objeto
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (role) => {
    if (!username.trim() || !password.trim()) {
      alert("Por favor, rellena todos los campos para iniciar sesión.");
      return;
    }

    // ← Aquí se guarda el usuario en el contexto
    login({ 
      nombre: username, 
      role: role 
    });

    console.log(`Intentando iniciar sesión como ${role}`);
    if (role === 'admin') {
      navigate('/configuration');
    } else {
      navigate('/');
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