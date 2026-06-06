import React, { useEffect, useState } from 'react'; // ← agrega useEffect y useState
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './HistorialPage.css';
import API_URL from '../config';

const sedes = [
  { id: 1, nombre: 'Medellín', direccion: 'Calle 52 a 94 20', imagen: 'https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg' },
  { id: 2, nombre: 'Bogotá', direccion: 'Calle 52 a 94 20', imagen: 'https://images.pexels.com/photos/18173343/pexels-photo-18173343.jpeg' },
  { id: 3, nombre: 'Cartagena', direccion: 'Calle 52 A #94 20', imagen: 'https://images.pexels.com/photos/20785318/pexels-photo-20785318.jpeg' },
];

const HistorialPage = () => {
  const navigate = useNavigate();
  const { user, citas, cancelarCita } = useAuth();
  const [citasBackend, setCitasBackend] = useState([]); // ← citas del backend
  const [cargando, setCargando] = useState(true);

  // ← Carga las citas del backend al entrar
  useEffect(() => {
    const obtenerCitas = async () => {
      try {
        const respuesta = await fetch(`${API_URL}/citas`, {
          headers: {
            'Authorization': `Bearer ${user?.token}`,
          },
        });

        if (!respuesta.ok) throw new Error('Error al obtener citas');

        const datos = await respuesta.json();
        setCitasBackend(datos);
      } catch (error) {
        console.error('Error al cargar citas:', error);
        // Si falla el backend, usa las citas locales del contexto
        setCitasBackend(citas);
      } finally {
        setCargando(false);
      }
    };

    obtenerCitas();
  }, [user?.token]);

  const handleCancelar = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres cancelar esta cita?')) {
      try {
        const respuesta = await fetch(`${API_URL}/citas/${id}/cancelar`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${user?.token}`,
          },
        });

        if (!respuesta.ok) throw new Error('Error al cancelar la cita');

        // Actualiza localmente también
        cancelarCita(id);
        setCitasBackend(prev => prev.map(c => c.id === id ? { ...c, estado: 'Cancelada' } : c));

      } catch (error) {
        alert(error.message || 'Error al cancelar la cita.');
      }
    }
  };

  const handleModificar = (cita) => {
    const sedeObj = sedes.find(s => cita.sede.includes(`Sede ${s.id}`));
    navigate('/booking', {
      state: {
        citaEditar: {
          ...cita,
          sedeObj: {
            ...sedeObj,
            ciudad: sedeObj?.nombre,
            telefono: '(+57) 3222056788',
            horario: { lunes: '9:30 am - 8:00 pm', martes: '9:30 am - 8:00 pm', miercoles: '9:30 am - 8:00 pm', jueves: '9:30 am - 8:00 pm', viernes: '9:30 am - 8:00 pm', sabado: '9:30 am - 8:00 pm', domingo: '10:00 am - 4:00 pm' },
            especialistas: ['Wilmer Andres Chaparro', 'Kevin Rojas', 'Dauly Velasquez', 'Carmen Rodriguez'],
          }
        }
      }
    });
  };

  // Lista a mostrar: backend si cargó, local si falló
  const citasAMostrar = citasBackend.length > 0 ? citasBackend : citas;

  if (cargando) {
    return (
      <div className="historial-container">
        <p style={{color: '#c4a454', textAlign: 'center', marginTop: '50px'}}>Cargando citas...</p>
      </div>
    );
  }

  return (
    <div className="historial-container">
      <div className="historial-header">
        <button className="back-btn-historial" onClick={() => navigate('/Settingspage')}>
          <FaArrowLeft />
        </button>
        <h1 className="historial-title">Historial de citas</h1>
      </div>

      <p className="historial-usuario">Usuario: <strong>{user?.nombre}</strong></p>

      {citasAMostrar.length === 0 ? (
        <div className="historial-empty">
          <p>No tienes citas registradas aún.</p>
          <button className="btn-agendar" onClick={() => navigate('/booking')}>Agendar cita</button>
        </div>
      ) : (
        <div className="citas-list">
          {citasAMostrar.map(cita => (
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