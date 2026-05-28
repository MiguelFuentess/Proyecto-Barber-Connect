import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './HistorialPage.css';

const sedes = [
  { id: 1, nombre: 'Medellín', direccion: 'Calle 52 a 94 20', imagen: 'https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg' },
  { id: 2, nombre: 'Bogotá', direccion: 'Calle 52 a 94 20', imagen: 'https://images.pexels.com/photos/18173343/pexels-photo-18173343.jpeg' },
  { id: 3, nombre: 'Cartagena', direccion: 'Calle 52 A #94 20', imagen: 'https://images.pexels.com/photos/20785318/pexels-photo-20785318.jpeg' },
];

const HistorialPage = () => {
  const navigate = useNavigate();
  const { user, citas, cancelarCita } = useAuth();

  const handleCancelar = (id) => {
    if (window.confirm('¿Estás seguro de que quieres cancelar esta cita?')) {
      cancelarCita(id);
    }
  };

  const handleModificar = (cita) => {
    // Busca el objeto sede completo para precargarlo
    const sedeObj = sedes.find(s => cita.sede.includes(`Sede ${s.id}`));
    navigate('/booking', { 
      state: { 
        citaEditar: { 
          ...cita, 
          sedeObj: { ...sedeObj, 
            ciudad: sedeObj?.nombre,
            telefono: '(+57) 3222056788',
            horario: { lunes: '9:30 am - 8:00 pm', martes: '9:30 am - 8:00 pm', miercoles: '9:30 am - 8:00 pm', jueves: '9:30 am - 8:00 pm', viernes: '9:30 am - 8:00 pm', sabado: '9:30 am - 8:00 pm', domingo: '10:00 am - 4:00 pm' },
            especialistas: ['Wilmer Andres Chaparro', 'Kevin Rojas', 'Dauly Velasquez', 'Carmen Rodriguez'],
          }
        } 
      } 
    });
  };

  return (
    <div className="historial-container">
      <div className="historial-header">
        <button className="back-btn-historial" onClick={() => navigate('/Settingspage')}>
          <FaArrowLeft />
        </button>
        <h1 className="historial-title">Historial de citas</h1>
      </div>

      <p className="historial-usuario">Usuario: <strong>{user?.nombre}</strong></p>

      {citas.length === 0 ? (
        <div className="historial-empty">
          <p>No tienes citas registradas aún.</p>
          <button className="btn-agendar" onClick={() => navigate('/booking')}>Agendar cita</button>
        </div>
      ) : (
        <div className="citas-list">
          {citas.map(cita => (
            <div key={cita.id} className="cita-card">
              <div className="cita-header">
                <span className="cita-fecha">📅 {cita.fecha} — {cita.hora}</span>
                <span className={`cita-estado ${cita.estado === 'Completada' ? 'completada' : cita.estado === 'Cancelada' ? 'cancelada' : 'pendiente'}`}>
                  {cita.estado}
                </span>
              </div>
              <div className="cita-body">
                <p>🏠 <strong>{cita.sede}</strong></p>
                <p>👤 <strong>Especialista:</strong> {cita.especialista}</p>
                <p>✂️ <strong>Servicios:</strong> {cita.servicios?.join(', ')}</p>
                <p>💰 <strong>Total:</strong> {cita.total}</p>
                {cita.notas && <p>📝 <strong>Notas:</strong> {cita.notas}</p>}
              </div>

              {/* BOTONES solo si no está cancelada */}
              {cita.estado !== 'Cancelada' && (
                <div className="cita-actions">
                  <button className="btn-modificar" onClick={() => handleModificar(cita)}>
                    ✏️ Modificar
                  </button>
                  <button className="btn-cancelar" onClick={() => handleCancelar(cita.id)}>
                    ✕ Cancelar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistorialPage;