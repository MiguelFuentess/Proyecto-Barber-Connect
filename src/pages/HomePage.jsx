import './HomePage.css';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBeer, FaCut, FaMapMarkerAlt, FaStar, FaUserTie } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';


const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAgendarCita = () => {
    if (!user) {
      navigate('/login');
    } else {
      navigate('/booking');
    }
  };  

  // Referencias para el scroll
  const nosotrosRef = useRef(null);
  const serviciosRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const specialities = [
    { 
      name: 'Barbería', 
      items: [
        { desc: 'SERVICIO DE BARBA TRADICIONAL', time: '45 min', price: '$48.000' },
        { desc: 'MASCARILLA BLACK MASK COMPLETA CON VAPOR', time: '45 min', price: '$69.000' },
        { desc: 'BLACK MASK VAPOR', time: '45 min', price: '$42.000' },
        { desc: 'BARBA CON VAPOR', time: '45 min', price: '$55.000' },
        { desc: 'CERA', time: '15 min', price: '$22.000' },
        { desc: 'TINTURA BARBA BIGEN', time: '30 min', price: '$57.000' },
        { desc: 'BARBA CON CERA', time: '45 min', price: '$85.000' },
        { desc: 'CERA COMPLETA', time: '15 min', price: '$40.000' },
      ]
    },
    { 
      name: 'Corte', 
      items: [
        { desc: 'CORTE CABELLO', time: '45 min', price: '$55.000' },
        { desc: 'CORTE Y BARBA TRADICIONAL', time: '1 h 30 min', price: '$103.000' },
        { desc: 'CORTE Y BARBA VAPOR', time: '1 h 30 min', price: '$110.000' },
        { desc: 'CORTE BONO EMPRESARIAL', time: '20 min', price: '$55.000' },
      ]
    },
    { 
      name: 'Peinados y tinturas', 
      items: [
        { desc: 'PEINADO Y SHAMPOO', time: '15 min', price: '$25.000' },
        { desc: 'SERVICIO DE KERATINA CORTO', time: '1 h', price: '$190.000' },
        { desc: 'SERVICIO DE KERATINA LARGO', time: '1 h 30 min', price: '$245.000' },
        { desc: 'TINTURA PARA CABELLO', time: '2 h', price: '$250.000' },
        { desc: 'AMPOLLETA ANTI CAÍDA O ANTI CASPA', time: '30 min', price: '$35.000' },
        { desc: 'TINTURA RAYITOS LARGO', time: '1 h', price: '$300.000' },
        { desc: 'SEMIPERMANENTE CORTO', time: '2 h', price: '$250.000' },
        { desc: 'SEMIPERMANENTE LARGO', time: '2 h', price: '$300.000' },
      ]
    },
    { 
      name: 'Combos', 
      items: [
        { desc: 'COMBO 1: CORTE + SPA FACIAL', time: '1 h', price: '$140.000' },
        { desc: 'COMBO 2: CORTE + SPA ANTIESTRÉS', time: '1 h 30 min', price: '$190.000' },
        { desc: 'COMBO 3: CORTE + RENOVACIÓN', time: '1 h', price: '$136.000' },
        { desc: 'COMBO 7: CORTE + BARBA TRADICIONAL + SPA FACIAL', time: '1 h 30 min', price: '$188.000' },
      ]
    },
  ];

  return (
    <div className="home-container">
      {/* Navbar con Funciones */}
      <nav className="navbar">
  <div className="navbar-logo">
    <h1 className="brand-logo">Barber Connect</h1>
  </div>
  <div className="navbar-links">
    <button className="nav-link-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Inicio</button>
    <button className="nav-link-btn" onClick={() => scrollToSection(nosotrosRef)}>Nosotros</button>
    <button className="nav-link-btn" onClick={() => scrollToSection(serviciosRef)}>Servicios</button>
    <button className="nav-link-btn" onClick={handleAgendarCita}>Agenda tu cita</button>

    {user ? (
      <button className="nav-profile-btn" onClick={() => navigate('/Settingspage')}>
        <FaUserCircle className="profile-icon" />
        <span className="profile-name">{user.nombre}</span>
      </button>
    ) : (
      <div className="navbar-auth">
        <button className="nav-btn-gold" onClick={() => navigate('/registro')}>Registrarse</button>
        <button className="nav-btn-outline" onClick={() => navigate('/login')}>Iniciar Sesión</button>
      </div>
    )}
  </div>
</nav>

      {/* Hero Section con palabra "Lujo" */}
      <header className="hero">
        <div className="hero-images-container">
    {/* Imagen 1 - angosta, con Lujo y botones */}
    <div className="hero-img-card img1">
    <span className="text-lujo">Lujo</span>
    {!user && (
        <div className="hero-actions">
            <button className="btn-gold" onClick={() => navigate('/registro')}>Registrarse</button>
            <button className="btn-outline" onClick={() => navigate('/login')}>Iniciar Sesion</button>
        </div>
    )}
</div>

    {/* Imagen 2 - más ancha, solo imagen */}
    <div className="hero-img-card img2"></div>

    {/* Imagen 3 - solo texto abajo */}
    <div className="hero-img-card img3">
        <div className="hero-floating-text">
            <h1>La barbería más exclusiva cerca de ti.</h1>
        </div>
    </div>
</div>
        <div className="hero-subtext">
            <div className="subtext-left">
                <h2>La barbería más exclusiva cerca de ti.</h2>
            </div>
            <div className="subtext-right">
                <p>Un refugio de estilo y lujo para el hombre moderno. Ven y sorpréndete con cada detalle que tenemos para ti.</p>
            </div>
        </div>
      </header>

      {/* Sección Nosotros (Imagen 2) */}
      <section className="features-section" ref={nosotrosRef}>
        <h2>Por qué elegirnos: Experiencia de lujo</h2>
        <div className="features-grid">
  <div className="feature-item">
    <div className="feature-icon-wrapper">
      <FaBeer className="feature-icon" />
    </div>
    <h3>Bebidas y Licores incluidos en tu corte</h3>
    <p>Disfruta de una bebida premium mientras te cuidamos.</p>
  </div>
  <div className="feature-item">
    <div className="feature-icon-wrapper">
      <FaUserTie className="feature-icon" />
    </div>
    <h3>Atención personalizada y profesional</h3>
    <p>Atención especializada para tu estilo único.</p>
  </div>
  <div className="feature-item">
    <div className="feature-icon-wrapper">
      <FaStar className="feature-icon" />
    </div>
    <h3>Cortes y estilos premium</h3>
    <p>Cortes únicos y exclusivos diseñados para ti.</p>
  </div>
</div>
        <div className="experts-content">
          <div className="experts-photos">
            <div className="experts-img-card expert1"></div>
            <div className="experts-img-card expert2"></div>
          </div>
          <div className="experts-text">
            <h2>NUESTROS EXPERTOS EN CUIDADO MASCULINO</h2>
            <p>Nuestro equipo de barberos altamente calificados está dedicado a perfeccionar su estilo. Ven a conocernos</p>
            <ul className="check-list">
              <li>✓ Profesionales a tu servicio.</li>
              <li>✓ Bebidas de cortesía incluidas.</li>
              <li>✓ Ambiente exclusivo y relajado.</li>
              <li>✓ Diseños de cortes únicos y personalizados</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección Servicios / Especialidades (Imagen 3 y 5) */}
      <section className="specialities-section" ref={serviciosRef}>
        <h2>Especialidades</h2>
        <div className="specialities-accordion">
          {specialities.map((category, index) => (
            <div key={index} className={`accordion-item ${openAccordion === index ? 'active' : ''}`}>
              <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                {category.name}
                {openAccordion === index ? <HiChevronUp /> : <HiChevronDown />}
              </div>
              {openAccordion === index && (
                <div className="accordion-body">
                  {category.items.map((service, idx) => (
                    <div key={idx} 
    className="service-row"
    onClick={handleAgendarCita}> {/* ← era navigate('/login') */}
    <div className="service-info">
        <span className="service-name">{service.desc}</span>
        <span className="service-time"><FaStar size={10}/> {service.time} | 💰 {service.price}</span>
    </div>
</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer y Mapa (Imagen 4) */}
      <section className="map-section">
  <div className="map-btn-container">
    <button className="btn-gold-large" onClick={handleAgendarCita}>Agenda tu cita</button>
  </div>
  <div className="map-wrapper">
    <iframe
      title="Barber Connect Ubicación"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127338.89!2d-74.1276!3d4.6482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C+Colombia!5e0!3m2!1ses!2sco!4v1699999999999"
      width="100%"
      height="400"
      style={{ border: 0, borderRadius: '20px' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>

      <footer className="footer-luxury">
        <div className="footer-bg-image">
            <div className="footer-content">
                <h2 className="footer-logo">Barber Connect</h2>
                <div className="footer-links">
                    <span>Política de privacidad</span>
                    <span>Términos y condiciones</span>
                    <span>Política de tratamiento de datos</span>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;