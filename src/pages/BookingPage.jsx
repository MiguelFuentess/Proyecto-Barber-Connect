import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaArrowLeft, FaTimes, FaSearch, FaHome } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import './BookingPage.css';
import API_URL from '../config';

const sedes = [
  {
    id: 1,
    nombre: 'Medellín',
    direccion: 'Calle 52 a 94 20',
    ciudad: 'Medellín',
    telefono: '(+57) 3222056788',
    descripcion: 'Ubicados en el corazón de Medellín, somos una barbería que combina tradición y estilo moderno.',
    horario: { lunes: '9:30 am - 8:00 pm', martes: '9:30 am - 8:00 pm', miercoles: '9:30 am - 8:00 pm', jueves: '9:30 am - 8:00 pm', viernes: '9:30 am - 8:00 pm', sabado: '9:30 am - 8:00 pm', domingo: '10:00 am - 4:00 pm' },
    imagen: 'https://images.pexels.com/photos/9146943/pexels-photo-9146943.jpeg',
    especialistas: ['Wilmer Andres Chaparro', 'Kevin Rojas', 'Dauly Velasquez', 'Carmen Rodriguez'],
  },
  {
    id: 2,
    nombre: 'Bogotá',
    direccion: 'Calle 52 a 94 20',
    ciudad: 'Bogotá',
    telefono: '(+57) 3222056789',
    descripcion: 'Ubicados en Bogotá, somos una barbería diseñada para quienes viven al ritmo de la ciudad.',
    horario: { lunes: '9:30 am - 8:00 pm', martes: '9:30 am - 8:00 pm', miercoles: '9:30 am - 8:00 pm', jueves: '9:30 am - 8:00 pm', viernes: '9:30 am - 8:00 pm', sabado: '9:30 am - 8:00 pm', domingo: '10:00 am - 4:00 pm' },
    imagen: 'https://images.pexels.com/photos/18173343/pexels-photo-18173343.jpeg',
    especialistas: ['Wilmer Andres Chaparro', 'Kevin Rojas', 'Dauly Velasquez', 'Carmen Rodriguez'],
  },
  {
    id: 3,
    nombre: 'Cartagena',
    direccion: 'Calle 52 A #94 20',
    ciudad: 'Cartagena',
    telefono: '(+57) 3222056788',
    descripcion: 'En nuestra sede de Cartagena encontrarás estilo, frescura y buena energía caribeña.',
    horario: { lunes: '9:30 am - 8:00 pm', martes: '9:30 am - 8:00 pm', miercoles: '9:30 am - 8:00 pm', jueves: '9:30 am - 8:00 pm', viernes: '9:30 am - 8:00 pm', sabado: '9:30 am - 8:00 pm', domingo: '10:00 am - 4:00 pm' },
    imagen: 'https://images.pexels.com/photos/20785318/pexels-photo-20785318.jpeg',
    especialistas: ['Wilmer Andres Chaparro', 'Kevin Rojas', 'Dauly Velasquez', 'Carmen Rodriguez'],
  },
];

const servicios = [
  { name: 'Barbería', items: [
    { desc: 'SERVICIO DE BARBA TRADICIONAL', time: '45 min', price: '$48.000' },
    { desc: 'MASCARILLA BLACK MASK COMPLETA CON VAPOR', time: '45 min', price: '$69.000' },
    { desc: 'BLACK MASK VAPOR', time: '45 min', price: '$42.000' },
    { desc: 'BARBA CON VAPOR', time: '45 min', price: '$55.000' },
    { desc: 'CERA', time: '15 min', price: '$22.000' },
  ]},
  { name: 'Corte', items: [
    { desc: 'CORTE CABELLO', time: '45 min', price: '$55.000' },
    { desc: 'CORTE Y BARBA TRADICIONAL', time: '1 h 30 min', price: '$103.000' },
    { desc: 'CORTE Y BARBA VAPOR', time: '1 h 30 min', price: '$110.000' },
  ]},
  { name: 'Peinados y tinturas', items: [
    { desc: 'PEINADO Y SHAMPOO', time: '15 min', price: '$25.000' },
    { desc: 'SERVICIO DE KERATINA CORTO', time: '1 h', price: '$190.000' },
  ]},
  { name: 'Combos', items: [
    { desc: 'COMBO 1: CORTE + SPA FACIAL', time: '1 h', price: '$140.000' },
    { desc: 'COMBO 2: CORTE + SPA ANTIESTRÉS', time: '1 h 30 min', price: '$190.000' },
  ]},
];

const especialistasData = [
  { nombre: 'WILMER ANDRES CHAPARRO' },
  { nombre: 'KEVIN ROJAS' },
  { nombre: 'DAULY VELASQUEZ' },
  { nombre: 'CARMEN RODRIGUEZ' },
];

// ─── PASO 1 ───────────────────────────────────────────────────────────────────
const StepSedes = ({ onSelect }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const filtered = sedes.filter(s => s.nombre.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h2 className="booking-title-gold" style={{flex: 1}}>Nuestras sedes</h2>
        <button className="home-btn-booking" onClick={() => navigate('/')}><FaHome /></button>
      </div>
      <div className="search-bar-container">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Buscar" value={search}
          onChange={(e) => setSearch(e.target.value)} className="search-input" />
      </div>
      <div className="sedes-list">
        {filtered.map(sede => (
          <div key={sede.id} className="sede-card" onClick={() => onSelect(sede)}>
            <img src={sede.imagen} alt={sede.nombre} className="sede-img" />
            <div className="sede-info">
              <h3>{sede.nombre}</h3>
              <p>{sede.descripcion}</p>
              <span className="sede-direccion">Dirección: {sede.direccion}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="btn-mas">Más...</button>
    </div>
  );
};

// ─── PASO 2 ───────────────────────────────────────────────────────────────────
const StepDetalle = ({ sede, onBack, onContinue, initialServices, initialEspecialista }) => {
  const [activeTab, setActiveTab] = useState('servicios');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedServices, setSelectedServices] = useState(initialServices || []);
  const [selectedEspecialista, setSelectedEspecialista] = useState(initialEspecialista || null);
  const navigate = useNavigate();

  const toggleService = (item) => {
    setSelectedServices(prev => {
      const exists = prev.find(s => s.desc === item.desc);
      if (exists) return prev.filter(s => s.desc !== item.desc);
      else return [...prev, item];
    });
  };

  const handleContinue = () => {
    if (selectedServices.length === 0) { alert('Por favor selecciona al menos un servicio.'); return; }
    if (!selectedEspecialista) { alert('Por favor selecciona un especialista.'); return; }
    onContinue(selectedServices, selectedEspecialista);
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-btn-booking" onClick={onBack}><FaArrowLeft /></button>
        <h2 className="booking-title-gold">Barber Connect sede {sede.id}</h2>
        <button className="home-btn-booking" onClick={() => navigate('/')}><FaHome /></button>
      </div>

      <div className="sede-detalle-top">
        <img src={sede.imagen} alt={sede.nombre} className="sede-detalle-img" />
        <div className="sede-detalle-info">
          <p><strong>Dirección:</strong> {sede.direccion}</p>
          <p>{sede.ciudad}</p>
        </div>
      </div>

      {(selectedServices.length > 0 || selectedEspecialista) && (
        <div className="seleccion-resumen-bar">
          {selectedServices.length > 0 && (
            <div>
              <strong>✂️ Servicios ({selectedServices.length}):</strong>
              {selectedServices.map((s, i) => (
                <div key={i} className="resumen-servicio-item">• {s.desc} — {s.time} | {s.price}</div>
              ))}
            </div>
          )}
          {selectedEspecialista && <span>👤 <strong>{selectedEspecialista}</strong></span>}
        </div>
      )}

      <div className="tabs-container">
        <button className={`tab-btn ${activeTab === 'servicios' ? 'active' : ''}`} onClick={() => setActiveTab('servicios')}>Servicios</button>
        <button className={`tab-btn ${activeTab === 'especialistas' ? 'active' : ''}`} onClick={() => setActiveTab('especialistas')}>Especialistas</button>
        <button className={`tab-btn ${activeTab === 'informacion' ? 'active' : ''}`} onClick={() => setActiveTab('informacion')}>Información</button>
      </div>

      {activeTab === 'servicios' && (
        <div className="tab-content">
          {servicios.map((cat, i) => (
            <div key={i} className="accordion-item">
              <div className="accordion-header" onClick={() => setOpenAccordion(openAccordion === i ? null : i)}>
                {cat.name}
                {openAccordion === i ? <HiChevronUp /> : <HiChevronDown />}
              </div>
              {openAccordion === i && (
                <div className="accordion-body">
                  {cat.items.map((item, idx) => (
                    <div key={idx}
                      className={`service-row-booking ${selectedServices.find(s => s.desc === item.desc) ? 'selected' : ''}`}
                      onClick={() => toggleService(item)}
                    >
                      <div className="service-info">
                        <span className="service-name">{item.desc}</span>
                        <span className="service-time">⏱ {item.time} | 💰 {item.price}</span>
                      </div>
                      {selectedServices.find(s => s.desc === item.desc) && (
                        <span className="check-selected">✓</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'especialistas' && (
        <div className="tab-content">
          {especialistasData.map((esp, i) => (
            <div key={i} className="accordion-item">
              <div
                className={`accordion-header ${selectedEspecialista === esp.nombre ? 'esp-header-selected' : ''}`}
                onClick={() => setSelectedEspecialista(esp.nombre)}
              >
                {esp.nombre}
                {selectedEspecialista === esp.nombre && <span style={{color: '#c4a454'}}>✓</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'informacion' && (
        <div className="tab-content info-content">
          <p><strong>Barber Connect Sede {sede.id}</strong></p>
          <p>📞 {sede.telefono}</p>
          <p>📍 {sede.direccion}, {sede.ciudad}</p>
          <h4>Horario</h4>
          {Object.entries(sede.horario).map(([dia, hora]) => (
            <div key={dia} className="horario-row">
              <span className="dia">{dia.charAt(0).toUpperCase() + dia.slice(1)}</span>
              <span className="hora">{hora}</span>
            </div>
          ))}
        </div>
      )}

      <button className="btn-continuar" onClick={handleContinue}>Continuar</button>
    </div>
  );
};

// ─── PASO 3 ───────────────────────────────────────────────────────────────────
const StepFecha = ({ servicios: serviciosSeleccionados, especialista, onBack, onContinue }) => {
  const hoy = new Date();
  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());
  const [diaSeleccionado, setDiaSeleccionado] = useState(hoy.getDate());
  const [hora, setHora] = useState('08');
  const [minuto, setMinuto] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const navigate = useNavigate();

  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
  const diasEnMes = new Date(anio, mes + 1, 0).getDate();
  const primerDia = new Date(anio, mes, 1).getDay();

  const prevMes = () => { if (mes === 0) { setMes(11); setAnio(anio - 1); } else setMes(mes - 1); };
  const nextMes = () => { if (mes === 11) { setMes(0); setAnio(anio + 1); } else setMes(mes + 1); };

  const handleContinue = () => {
    const fecha = `${diaSeleccionado} de ${meses[mes]}`;
    onContinue({ fecha, hora: `${hora}:${minuto} ${ampm}` });
  };

  const dias = [];
  for (let i = 0; i < primerDia; i++) dias.push(null);
  for (let i = 1; i <= diasEnMes; i++) dias.push(i);

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-btn-booking" onClick={onBack}><FaArrowLeft /></button>
        <h2 className="booking-title-gold">Selecciona fecha y hora</h2>
        <button className="home-btn-booking" onClick={() => navigate('/')}><FaHome /></button>
      </div>

      <div className="fecha-hora-container">
        <div className="calendario">
          <div className="cal-header">
            <button onClick={prevMes}>‹</button>
            <span>{meses[mes]} {anio}</span>
            <button onClick={nextMes}>›</button>
          </div>
          <div className="cal-dias-semana">
            {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => <span key={d}>{d}</span>)}
          </div>
          <div className="cal-dias">
            {dias.map((dia, i) => (
              <span key={i}
                className={`cal-dia ${dia === diaSeleccionado ? 'selected' : ''} ${!dia ? 'empty' : ''}`}
                onClick={() => dia && setDiaSeleccionado(dia)}
              >{dia}</span>
            ))}
          </div>
        </div>

        <div className="time-picker">
          <div className="time-scroll">
            <button onClick={() => setHora(h => String(parseInt(h) < 12 ? parseInt(h) + 1 : 1).padStart(2,'0'))}>▲</button>
            <span className="time-value">{hora}</span>
            <button onClick={() => setHora(h => String(parseInt(h) > 1 ? parseInt(h) - 1 : 12).padStart(2,'0'))}>▼</button>
          </div>
          <span className="time-sep">:</span>
          <div className="time-scroll">
            <button onClick={() => setMinuto(m => String((parseInt(m) + 15) % 60).padStart(2,'0'))}>▲</button>
            <span className="time-value">{minuto}</span>
            <button onClick={() => setMinuto(m => String((parseInt(m) - 15 + 60) % 60).padStart(2,'0'))}>▼</button>
          </div>
          <div className="time-scroll ampm">
            <button onClick={() => setAmpm(a => a === 'AM' ? 'PM' : 'AM')}>▲</button>
            <span className="time-value">{ampm}</span>
            <button onClick={() => setAmpm(a => a === 'AM' ? 'PM' : 'AM')}>▼</button>
          </div>
        </div>
      </div>

      <div className="servicio-seleccionado-bar">
        <div><strong>✂️ Servicios ({serviciosSeleccionados.length}):</strong></div>
        {serviciosSeleccionados.map((s, i) => (
          <div key={i} className="resumen-servicio-item">• {s.desc} — {s.time} | {s.price}</div>
        ))}
        <div style={{marginTop: '8px'}}>👤 <strong>Especialista:</strong> {especialista}</div>
      </div>

      <button className="btn-continuar" onClick={handleContinue}>Continuar</button>
    </div>
  );
};

// ─── PASO 4 ───────────────────────────────────────────────────────────────────
const StepConfirmar = ({ sede, servicios: serviciosSeleccionados, especialista, fecha, hora, onBack, citaEditandoId }) => {
  const navigate = useNavigate();
  const { agregarCita, modificarCita, user } = useAuth();
  const [notas, setNotas] = useState('');

  const handleConfirmar = async () => {
  try {
    const horaLimpia = hora.replace(' AM', '').replace(' PM', '');

    const respuesta = await fetch(`${API_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user?.token}`,
      },
      body: JSON.stringify({
        clientId: 'b0920726-d7c7-4116-98a0-433bcde30676',
        employeeId: '6d91ca68-923f-4e47-a6c4-561942910492',
        branchId: '9818ff19-d685-4f88-99dc-5ab5a7227f5c',
        appointmentDate: new Date().toISOString().split('T')[0],
        startTime: horaLimpia,
        endTime: horaLimpia,
        services: [{ 
          serviceId: '4718a85d-002d-49a8-b4a1-bc41bf48607a', 
          quantity: 1 
        }],
        status: 'PENDING',
        companyId: '6bc9e118-99c2-4c46-aa86-5aa0e4749b7c',
      }),
    });

    if (!respuesta.ok) {
      const error = await respuesta.json();
      throw new Error(error.message || 'Error al crear la cita');
    }

    const citaCreada = await respuesta.json();
    agregarCita({ 
      ...citaCreada,
      sede: `Barber Connect Sede 1`,
      especialista: especialista,
      servicios: serviciosSeleccionados.map(s => s.desc),
      fecha, hora 
    });
    alert('¡Reserva confirmada!');
    navigate('/historial');

  } catch (error) {
    alert(error.message || 'Error al conectar con el servidor.');
  }
};

    try {
      if (citaEditandoId) {
        // ← PATCH /api/appointments/{id}
        const respuesta = await fetch(`${API_URL}/api/appointments/${citaEditandoId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`,
          },
          body: JSON.stringify(datosCita),
        });

        if (!respuesta.ok) throw new Error('Error al modificar la cita');
        modificarCita(citaEditandoId, { ...datosCita, estado: 'Pendiente' });
        alert('¡Cita modificada exitosamente!');

      } else {
        // ← POST /api/appointments
        const respuesta = await fetch(`${API_URL}/api/appointments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}`,
          },
          body: JSON.stringify(datosCita),
        });

        if (!respuesta.ok) throw new Error('Error al crear la cita');
        const citaCreada = await respuesta.json();
        agregarCita({ ...datosCita, id: citaCreada.id });
        alert('¡Reserva confirmada!');
      }

      navigate('/historial');

    } catch (error) {
      alert(error.message || 'Error al conectar con el servidor.');
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-btn-booking" onClick={onBack}><FaArrowLeft /></button>
        <h2 className="booking-title-gold">Tu reserva</h2>
        <button className="home-btn-booking" onClick={() => navigate('/')}><FaHome /></button>
      </div>

      <div className="confirmar-content">
        <p><strong>El {fecha}</strong></p>
        <p>En Barber Connect Sede {sede.id}</p>
        <p><strong>Total: {serviciosSeleccionados.reduce((acc, s) => {
          const num = parseInt(s.price.replace(/\./g, '').replace('$', ''));
          return acc + (isNaN(num) ? 0 : num);
        }, 0).toLocaleString('es-CO')} COP</strong></p>

        <h4>Servicios seleccionados</h4>
        {serviciosSeleccionados.map((s, i) => (
          <div key={i} className="servicio-resumen">
            <p><strong>{s.desc} ({s.time})</strong></p>
            <p>{s.price}</p>
          </div>
        ))}
        <p>👤 <strong>Especialista:</strong> {especialista}</p>
        <p>🕐 <strong>Hora:</strong> {hora}</p>

        <h4>Notas de Reserva</h4>
        <textarea className="notas-input" placeholder="Notas de reserva"
          value={notas} onChange={(e) => setNotas(e.target.value)} />

        <h4>Política de cancelación</h4>
        <div className="politica-box">
          <p>Recuerde que pasado 10 minutos del tiempo de la reserva su cita sera cancelada</p>
        </div>
      </div>

      <button className="btn-continuar" onClick={handleConfirmar}>
        {citaEditandoId ? 'Guardar cambios' : 'Confirmar reserva'}
      </button>
    </div>
  );
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
const BookingPage = () => {
  const location = useLocation();
  const citaEditar = location.state?.citaEditar || null;

  const [step, setStep] = useState(citaEditar ? 2 : 1);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(citaEditar?.sedeObj || null);
  const [serviciosSeleccionados, setServiciosSeleccionados] = useState(citaEditar?.serviciosCompletos || []);
  const [especialistaSeleccionado, setEspecialistaSeleccionado] = useState(citaEditar?.especialista || null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(citaEditar?.fecha || null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(citaEditar?.hora || null);
  const [citaEditandoId] = useState(citaEditar?.id || null);

  if (step === 1) return <StepSedes onSelect={(sede) => { setSedeSeleccionada(sede); setStep(2); }} />;
  if (step === 2) return <StepDetalle
    sede={sedeSeleccionada}
    onBack={() => setStep(1)}
    initialServices={serviciosSeleccionados}
    initialEspecialista={especialistaSeleccionado}
    onContinue={(servicios, especialista) => {
      setServiciosSeleccionados(servicios);
      setEspecialistaSeleccionado(especialista);
      setStep(3);
    }}
  />;
  if (step === 3) return <StepFecha
    servicios={serviciosSeleccionados}
    especialista={especialistaSeleccionado}
    onBack={() => setStep(2)}
    onContinue={({ fecha, hora }) => {
      setFechaSeleccionada(fecha);
      setHoraSeleccionada(hora);
      setStep(4);
    }}
  />;
  if (step === 4) return <StepConfirmar
    sede={sedeSeleccionada}
    servicios={serviciosSeleccionados}
    especialista={especialistaSeleccionado}
    fecha={fechaSeleccionada}
    hora={horaSeleccionada}
    onBack={() => setStep(3)}
    citaEditandoId={citaEditandoId}
  />;
};

export default BookingPage;
