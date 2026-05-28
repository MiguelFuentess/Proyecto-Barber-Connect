import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaArrowLeft, FaHome } from 'react-icons/fa'; 
import './SettingsPage.css';
import { useAuth } from '../context/AuthContext';

const SettingsPage = () => {
  const navigate = useNavigate(); 
  const { user, logout } = useAuth();   

  const [notifSMS, setNotifSMS] = useState(true);
  const [notifEmail, setNotifEmail] = useState(false);

  const [userData, setUserData] = useState({
    username: user?.nombre || 'Nombre del usuario',
    phone: '',
    newPhone: '',
    newEmail: '',
    newPassword: ''
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
  <button className="back-btn" onClick={() => window.history.back()}>
    <FaArrowLeft />
  </button>
  <h1 className="brand-logo">Barber Connect</h1>
  <button className="home-btn" onClick={() => navigate('/')}> {/* ← nuevo */}
    <FaHome />
  </button>
</header>

      <main className="settings-content">
        <div className="settings-grid">
          
          <section className="settings-section profile-section">
            <div className="avatar-container">
              <div className="avatar-circle"></div>
              <button className="btn-change">Cambiar</button>
            </div>
            
            <div className="account-info">
              <h3>Cuenta</h3>
              <input 
                type="text" 
                name="username"
                className="dark-input" 
                value={userData.username} 
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="phone"
                placeholder="Teléfono" 
                className="dark-input" 
                value={userData.phone}
                onChange={handleChange}
              />
              <div className="danger-actions">
                {/* ← aquí está el logout conectado */}
                <button className="btn-text" onClick={handleLogout}>
                  Cerrar sesión
                </button>
                <button className="btn-text delete">Eliminar cuenta</button>
              </div>
            </div>
          </section>

          <section className="settings-section">
            <h3>Notificaciones</h3>
            <div className="switch-group">
              <span>Notificarme vía SMS</span>
              <label className="switch">
                <input type="checkbox" checked={notifSMS} onChange={() => setNotifSMS(!notifSMS)} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className="switch-group">
              <span>Notificarme vía correo</span>
              <label className="switch">
                <input type="checkbox" checked={notifEmail} onChange={() => setNotifEmail(!notifEmail)} />
                <span className="slider round"></span>
              </label>
            </div>
          </section>

          <section className="settings-section">
            <h3>Seguridad</h3>
            <div className="security-row">
              <span className="security-label">Nuevo Teléfono</span>
              <input type="text" name="newPhone" placeholder="Ingresar el nuevo teléfono" className="dark-input" onChange={handleChange}/>
            </div>
            <div className="security-row">
              <span className="security-label">Nuevo Correo</span>
              <input type="email" name="newEmail" placeholder="Ingresar el nuevo correo" className="dark-input" onChange={handleChange}/>
            </div>
            <div className="security-row">
              <span className="security-label">Nueva contraseña</span>
              <input type="password" name="newPassword" placeholder="Ingresar la nueva contraseña" className="dark-input" onChange={handleChange}/>
            </div>
          </section>
        </div>

        <div className="danger-actions">
          <button className="btn-text" onClick={() => navigate('/historial')}>
    📋 Ver historial de citas
  </button>
</div>

<button className="btn-save-main" onClick={() => navigate('/')}>Guardar</button>      </main>
    </div>
  );
};

export default SettingsPage;