import React from "react";
import Sidebar from "../components/sidebar";
import { Pencil, Trash2, Plus } from "lucide-react";

const Servicios = () => {
  // Datos estáticos para simular el catálogo de la barbería
  const servicios = [
    {
      id: 1,
      nombre: "Corte clásico",
      precio: "18.000",
      tiempo: "30 min",
      desc: "Corte tradicional con tijera y máquina, ideal para un look limpio y profesional.",
    },
    {
      id: 2,
      nombre: "Corte urbano / moderno",
      precio: "28.000",
      tiempo: "50 min",
      desc: "Incluye estilos como crop, texturizados o tendencias actuales.",
    },
    {
      id: 3,
      nombre: "Corte + Barba",
      precio: "35.000",
      tiempo: "60 min",
      desc: "Corte completo con perfilado y arreglo de barba para un estilo definido.",
    },
    {
      id: 4,
      nombre: "Fade alto",
      precio: "25.000",
      tiempo: "45 min",
      desc: "Degradado marcado desde arriba, ideal para un look más atrevido y fresco.",
    },
    {
      id: 5,
      nombre: "Corte barba",
      precio: "15.000",
      tiempo: "20 min",
      desc: "Perfilado, recorte y definición de barba con máquina y navaja.",
    },
    {
      id: 6,
      nombre: "Servicio completo",
      precio: "45.000",
      tiempo: "75 min",
      desc: "Corte + barba + cejas + lavado + styling profesional.",
    },
    {
      id: 7,
      nombre: "Corte Infantil",
      precio: "15.000",
      tiempo: "30 min",
      desc: "Corte adaptado para niños, rápido y cómodo.",
    },
    {
      id: 8,
      nombre: "Barba Premium (con toalla caliente)",
      precio: "25.000",
      tiempo: "30 min",
      desc: "Experiencia completa con toalla caliente, aceites y acabado preciso.",
    },
    {
      id: 9,
      nombre: "Corte Militar (Buzz Cut)",
      precio: "25.000",
      tiempo: "25 min",
      desc: "Corte uniforme con máquina, práctico y de bajo mantenimiento.",
    },
    {
      id: 10,
      nombre: "Crop Francés (French Crop)",
      precio: "25.000",
      tiempo: "40 min",
      desc: "Flequillo corto con textura, fácil de peinar y moderno.",
    },
    {
      id: 11,
      nombre: "Corte con Tijera (Solo Tijera)",
      precio: "30.000",
      tiempo: "40 min",
      desc: "Corte detallado sin máquina, ideal para estilos naturales y clásicos.",
    },
    {
      id: 12,
      nombre: "Mullet Moderno",
      precio: "30.000",
      tiempo: "35 min",
      desc: "Corto adelante y largo atrás, adaptado a tendencias actuales.",
    },
  ];

  const styles = {
    pageContainer: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
    },
    main: { flex: 1, padding: "40px" },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
    },
    title: { color: "#d4af37", fontSize: "48px" },
    btnAdd: {
      backgroundColor: "#d4af37",
      color: "#000",
      padding: "10px 25px",
      borderRadius: "10px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "18px",
    },
    // Grid de servicios
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "25px",
    },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "25px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    priceTag: { color: "#d4af37", fontWeight: "bold", margin: "10px 0" },
    desc: {
      color: "#ccc",
      fontSize: "14px",
      lineHeight: "1.4",
      marginBottom: "20px",
    },
    actions: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "15px",
      color: "#aaa",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar />

      <main style={styles.main}>
        <div style={styles.header}>
          <h1 style={styles.title}>Servicios</h1>
          <button style={styles.btnAdd}>
            <Plus size={20} /> Agregar
          </button>
        </div>

        <div style={styles.grid}>
          {servicios.map((servicio) => (
            <div key={servicio.id} style={styles.card}>
              <div>
                <h2 style={{ fontSize: "24px", marginBottom: "5px" }}>
                  {servicio.nombre}
                </h2>
                <p style={styles.priceTag}>
                  $ {servicio.precio} - {servicio.tiempo}
                </p>
                <p style={styles.desc}>{servicio.desc}</p>
              </div>

              <div style={styles.actions}>
                <Pencil size={20} style={{ cursor: "pointer" }} />
                <Trash2 size={20} style={{ cursor: "pointer" }} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Servicios;
