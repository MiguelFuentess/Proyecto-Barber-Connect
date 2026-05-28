import React from "react";
import Sidebar from "../components/sidebar";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
} from "lucide-react";

const AdminCitas = () => {
  
  const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];
  const horas = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];

  const styles = {
    pageContainer: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
    },
    main: {
      flex: 1,
      padding: "40px",
      display: "flex",
      flexDirection: "column",
    },
    headerTitle: { color: "#d4af37", fontSize: "48px", marginBottom: "30px" },
    // Barra de controles (flechas, hoy, botones dia/semana)
    controlsRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    navGroup: { display: "flex", alignItems: "center", gap: "15px" },
    btnIcon: {
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
      cursor: "pointer",
    },
    btnHoy: {
      backgroundColor: "#fff",
      color: "#000",
      border: "none",
      padding: "5px 15px",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
    },
    btnToggle: {
      backgroundColor: "#333",
      color: "#fff",
      border: "none",
      padding: "8px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    },

    // Contenedor del Calendario
    calendarContainer: {
      display: "grid",
      gridTemplateColumns: "80px repeat(7, 1fr)", // 1era columna para horas, luego 7 para dias
      border: "1px solid #444",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "#111",
    },
    headerCell: {
      padding: "15px",
      textAlign: "center",
      borderBottom: "2px solid #444",
      borderLeft: "1px solid #444",
      fontWeight: "bold",
    },
    timeCell: {
      padding: "15px 5px",
      textAlign: "center",
      borderBottom: "1px solid #333",
      fontSize: "14px",
      fontWeight: "bold",
    },
    emptyCell: {
      borderBottom: "1px solid #222",
      borderLeft: "1px solid #222",
      height: "50px", 
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar />

      <main style={styles.main}>
        <h1 style={styles.headerTitle}>Administracion citas</h1>

        <div style={styles.controlsRow}>
          <div style={styles.navGroup}>
            <button style={styles.btnIcon}>
              <ChevronLeft size={30} />
            </button>
            <button style={styles.btnIcon}>
              <ChevronRight size={30} />
            </button>
            <button style={styles.btnHoy}>Hoy</button>
            <button style={styles.btnIcon}>
              <CalendarIcon size={25} />
            </button>
          </div>

          <button style={styles.btnToggle}>
            Dia | <strong>Semana</strong>
          </button>
        </div>

        {/* CALENDARIO */}
        <div style={styles.calendarContainer}>

          <div style={{ ...styles.headerCell, borderLeft: "none" }}></div>
          {dias.map((dia) => (
            <div key={dia} style={styles.headerCell}>
              {dia}
            </div>
          ))}

          {/* Filas de Horas y Celdas vacías */}
          {horas.map((hora) => (
            <React.Fragment key={hora}>
              {/* Celda de la Hora */}
              <div style={styles.timeCell}>{hora}</div>
              {/* 7 Celdas vacías para los días */}
              {dias.map((_, index) => (
                <div key={index} style={styles.emptyCell}></div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminCitas;
