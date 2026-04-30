import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './RegisterPage.css'; // Asegúrate de importar el CSS que crearemos

const RegisterPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
  // 1. Validar que nada esté vacío
  if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // 2. Validar que las contraseñas sean iguales
  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden.");
    return;
  }

    login({
      nombre: username,
      email: email,
      role: 'user'
    });

  // Si pasa las dos pruebas, entonces registra
  console.log("Registro exitoso");
  navigate('/');  
};

  return (
    <div className="register-page-container">
      {/* Contenedor principal que centra todo, igual que en el Login */}
      
      {/* 1. Logo dorado arriba (fuera de la tarjeta) */}
      <div className="register-header-logo">
        <h1 className="brand-logo-gold">Barber Connect</h1>
      </div>

      {/* 2. Título principal grande */}
      <h2 className="register-main-title">Registrarse</h2>

      {/* 3. La tarjeta gris oscuro (Register Card) */}
      <div className="register-card-luxury">
        
        {/* Subtítulo dorado dentro de la tarjeta, como en tu diseño */}
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

        {/* Nuevo campo de Confirmar Contraseña */}
        <div className="input-group-luxury">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* 4. Botón de Registrarse (grande y dorado, dentro de la tarjeta) */}
        <div className="action-button-container">
          <button className="btn-gold-large" onClick={handleRegister}>
            Registrarse
          </button>
        </div>

        {/* 5. Enlace para ir al Login */}
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