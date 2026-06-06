import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RegisterPage.css';
import API_URL from '../config';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => { // ← async
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const respuesta = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const datos = await respuesta.json();

      if (!respuesta.ok) {
        throw new Error(datos.message || 'Error al registrar usuario');
      }

      login({
        nombre: datos.username || username,
        email: datos.email || email,
        role: datos.role || 'user',
        token: datos.token
      });

      console.log("Registro exitoso");
      navigate('/');

    } catch (error) {
      alert(error.message || "Error al conectar con el servidor.");
    }
  };

  return (
    <div className="register-page-container">
      <div className="register-header-logo">
        <h1 className="brand-logo-gold">Barber Connect</h1>
      </div>

      <h2 className="register-main-title">Registrarse</h2>

      <div className="register-card-luxury">
        <h3 className="section-subtitle-gold">Registrarse</h3>

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
            type="email"
            placeholder="Ingresar Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="input-group-luxury">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="action-button-container">
          <button className="btn-gold-large" onClick={handleRegister}>
            Registrarse
          </button>
        </div>

        <div className="form-footer-link">
          <span className="footer-text">Ya tengo cuenta:</span>
          <a href="/login" className="forgot-password-luxury">
            Iniciar Sesion
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;