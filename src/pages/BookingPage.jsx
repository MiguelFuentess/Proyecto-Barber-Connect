import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaArrowLeft, FaTimes, FaSearch } from 'react-icons/fa';
import './BookingPage.css';

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
  { nombre: 'WILMER ANDRES CHAPARRO', servicios: [
    { desc: '+ SERVICIO DE BARBA TRADICIONAL', time: '45m', price: '$48,000' },
    { desc: '+ CORTE CABELLO', time: '45m', price: '$55,000' },
    { desc: '+ BLACK MASK TRADICIONAL', time: '1h', price: '$35,000' },
    { desc: '+ PEINADO', time: '20m', price: '$25,000' },
  ]},
  { nombre: 'KEVIN ROJAS', servicios: [
    { desc: '+ SERVICIO DE BARBA TRADICIONAL', time: '45m', price: '$48,000' },
    { desc: '+ CORTE CABELLO', time: '45m', price: '$55,000' },
    { desc: '+ BLACK MASK TRADICIONAL', time: '1h', price: '$35,000' },
    { desc: '+ PEINADO', time: '20m', price: '$25,000' },
  ]},
  { nombre: 'DAULY VELASQUEZ', servicios: [
    { desc: '+ SERVICIO DE BARBA TRADICIONAL', time: '45m', price: '$48,000' },
    { desc: '+ CORTE CABELLO', time: '45m', price: '$55,000' },
    { desc: '+ BLACK MASK TRADICIONAL', time: '1h', price: '$35,000' },
    { desc: '+ PEINADO', time: '20m', price: '$25,000' },
  ]},
  { nombre: 'CARMEN RODRIGUEZ', servicios: [
    { desc: '+ SERVICIO DE BARBA TRADICIONAL', time: '45m', price: '$48,000' },
    { desc: '+ CORTE CABELLO', time: '45m', price: '$55,000' },
    { desc: '+ BLACK MASK TRADICIONAL', time: '1h', price: '$35,000' },
    { desc: '+ PEINADO', time: '20m', price: '$25,000' },
  ]},
];

// ─── PASO 1: Lista de sedes ───────────────────────────────────────────────────
const StepSedes = ({ onSelect }) => {
  const [search, setSearch] = useState('');
  const filtered = sedes.filter(s => s.nombre.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="booking-container">
      <div className="booking-header-simple">
        <h2 className="booking-title-gold">Nuestras sedes</h2>
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

// ─── PASO 2: Detalle de sede ──────────────────────────────────────────────────
const StepDetalle = ({ sede, onBack, onContinue }) => {
  const [activeTab, setActiveTab] = useState('servicios');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openEspecialista, setOpenEspecialista] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedEspecialista, setSelectedEspecialista] = useState(null);

  const handleContinue = () => {
    if (!selectedService) { alert('Por favor selecciona un servicio.'); return; }
    if (!selectedEspecialista) { alert('Por favor selecciona un especialista.'); return; }
    onContinue(selectedService, selectedEspecialista);
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-btn-booking" onClick={onBack}><FaArrowLeft /></button>
        <h2 className="booking-title-gold">Barber Connect sede {sede.id}</h2>
        <button className="close-btn-booking" onClick={() => window.history.back()}><FaTimes /></button>
      </div>

      <div className="sede-detalle-top">
        <img src={sede.imagen} alt={sede.nombre} className="sede-detalle-img" />
        <div className="sede-detalle-info">
          <p><strong>Dirección:</strong> {sede.direccion}</p>
          <p>{sede.ciudad}</p>
        </div>
      </div>

      {/* RESUMEN DE SELECCIÓN */}
      {(selectedService || selectedEspecialista) && (
        <div className="seleccion-resumen-bar">
          {selectedService && (
            <span>✂️ <strong>{selectedService.desc}</strong> — {selectedService.time} | {selectedService.price}</span>
          )}
          {selectedEspecialista && (
            <span>👤 <strong>{selectedEspecialista}</strong></span>
          )}
        </div>
      )}

      <div className="tabs-container">
        <button className={`tab-btn ${activeTab === 'servicios' ? 'active' : ''}`} onClick={() => setActiveTab('servicios')}>Servicios</button>
        <button className={`tab-btn ${activeTab === 'especialistas' ? 'active' : ''}`} onClick={() => setActiveTab('especialistas')}>Especialistas</button>
        <button className={`tab-btn ${activeTab === 'informacion' ? 'active' : ''}`} onClick={() => setActiveTab('informacion')}>Información</button>
        <button className="tab-btn-green">Escríbenos</button>
      </div>

      {/* TAB SERVICIOS */}
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
                      className={`service-row-booking ${selectedService?.desc === item.desc ? 'selected' : ''}`}
                      onClick={() => { setSelectedService(item); setActiveTab('especialistas'); }}
                    >
                      <div className="service-info">
                        <span className="service-name">{item.desc}</span>
                        <span className="service-time">⏱ {item.time} | 💰 {item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB ESPECIALISTAS */}
      {activeTab === 'especialistas' && (
        <div className="tab-content">
          {especialistasData.map((esp, i) => (
            <div key={i} className="accordion-item">
              <div className={`accordion-header ${selectedEspecialista === esp.nombre ? 'esp-header-selected' : ''}`}
                onClick={() => setOpenEspecialista(openEspecialista === i ? null : i)}>
                {esp.nombre}
                {openEspecialista === i ? <HiChevronUp /> : <HiChevronDown />}
              </div>
              {openEspecialista === i && (
                <div className="accordion-body especialista-servicios">
                  {esp.servicios.map((srv, idx) => (
                    <div key={idx}
                      className={`especialista-servicio-card ${selectedEspecialista === esp.nombre ? 'esp-selected' : ''}`}
                      onClick={() => setSelectedEspecialista(esp.nombre)}
                    >
                      <span className="esp-srv-nombre">{srv.desc}</span>
                      <div className="esp-srv-detalle">
                        <span>{srv.time}</span>
                        <span>{srv.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* TAB INFORMACIÓN */}
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

// ─── PASO 3: Fecha y hora ─────────────────────────────────────────────────────
const StepFecha = ({ sede, servicio, especialista, onBack, onContinue }) => {
  const hoy = new Date();
  const [mes, setMes] = useState(hoy.getMonth());
  const [anio, setAnio] = useState(hoy.getFullYear());
  const [diaSeleccionado, setDiaSeleccionado] = useState(hoy.getDate());
  const [hora, setHora] = useState('08');
  const [minuto, setMinuto] = useState('00');
  const [ampm, setAmpm] = useState('AM');

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
        <button className="close-btn-booking"><FaTimes /></button>
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

      {/* BARRA CON SERVICIO Y ESPECIALISTA */}
      <div className="servicio-seleccionado-bar">
        <div>✂️ <strong>Servicio:</strong> {servicio.desc} — {servicio.time} | {servicio.price}</div>
        <div>👤 <strong>Especialista:</strong> {especialista}</div>
      </div>

      <button className="btn-continuar" onClick={handleContinue}>Continuar</button>
    </div>
  );
};

// ─── PASO 4: Confirmar reserva ────────────────────────────────────────────────
const StepConfirmar = ({ sede, servicio, especialista, fecha, hora, onBack }) => {
  const navigate = useNavigate();
  const [notas, setNotas] = useState('');

  const handleConfirmar = () => {
    alert('¡Reserva confirmada!');
    navigate('/');
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <button className="back-btn-booking" onClick={onBack}><FaArrowLeft /></button>
        <h2 className="booking-title-gold">Tu reserva</h2>
        <button className="close-btn-booking" onClick={() => navigate('/')}><FaTimes /></button>
      </div>

      <div className="confirmar-content">
        <p><strong>El {fecha}</strong></p>
        <p>En Barber Connect Sede {sede.id}</p>
        <p><strong>Total {servicio.price} ({servicio.time})</strong></p>

        <h4>Servicios seleccionados</h4>
        <div className="servicio-resumen">
          <p><strong>{servicio.desc} ({servicio.time})</strong></p>
          <p>{servicio.price}</p>
          <p>👤 {especialista}</p>
          <p>🕐 {hora}</p>
        </div>

        <h4>Notas de Reserva</h4>
        <textarea className="notas-input" placeholder="Notas de reserva"
          value={notas} onChange={(e) => setNotas(e.target.value)} />

        <h4>Política de cancelación</h4>
        <div className="politica-box">
          <p>Recuerde que pasado 10 minutos del tiempo de la reserva su cita sera cancelada</p>
        </div>
      </div>

      <button className="btn-continuar" onClick={handleConfirmar}>Confirmar reserva</button>
    </div>
  );
};

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(null);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);
  const [especialistaSeleccionado, setEspecialistaSeleccionado] = useState(null);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);

  if (step === 1) return <StepSedes onSelect={(sede) => { setSedeSeleccionada(sede); setStep(2); }} />;
  if (step === 2) return <StepDetalle sede={sedeSeleccionada} onBack={() => setStep(1)}
    onContinue={(servicio, especialista) => { setServicioSeleccionado(servicio); setEspecialistaSeleccionado(especialista); setStep(3); }} />;
  if (step === 3) return <StepFecha sede={sedeSeleccionada} servicio={servicioSeleccionado} especialista={especialistaSeleccionado}
    onBack={() => setStep(2)} onContinue={({ fecha, hora }) => { setFechaSeleccionada(fecha); setHoraSeleccionada(hora); setStep(4); }} />;
  if (step === 4) return <StepConfirmar sede={sedeSeleccionada} servicio={servicioSeleccionado} especialista={especialistaSeleccionado}
    fecha={fechaSeleccionada} hora={horaSeleccionada} onBack={() => setStep(3)} />;
};

export default BookingPage;