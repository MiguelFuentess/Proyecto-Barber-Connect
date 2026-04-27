import React from "react";
import Sidebar from "../components/sidebar";

const Configuracion = () => {
  // Aquí defines tus estilos (puedes mover esto a un archivo .css luego)
  const styles = {
    pageContainer: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
    },
    main: { flex: 1, padding: "40px" },
    card: {
      backgroundColor: "#1a1a1a",
      padding: "30px",
      borderRadius: "15px",
      marginBottom: "20px",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#e5e7eb",
      boxSizing: "border-box",
    },
    row: { display: "flex", gap: "15px" },
    saveBtn: {
      backgroundColor: "#d4af37",
      color: "#000",
      padding: "12px 40px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "bold",
      cursor: "pointer",
      float: "right",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar /> {/* 1. El Sidebar siempre a la izquierda */}
      <main style={styles.main}>
        {" "}
        {/* 2. El contenido a la derecha */}
        <h1
          style={{ color: "#d4af37", fontSize: "48px", marginBottom: "40px" }}
        >
          Configuración
        </h1>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {/* Perfil del negocio */}
          <section style={styles.card}>
            <h2 style={{ marginBottom: "25px", fontSize: "28px" }}>
              Perfil del negocio
            </h2>
            <input
              style={styles.input}
              type="text"
              placeholder="Nombre del local"
            />
            <div style={styles.row}>
              <input style={styles.input} type="email" placeholder="Correo" />
              <input
                style={styles.input}
                type="text"
                placeholder="Numero de contacto"
              />
            </div>
            <input style={styles.input} type="text" placeholder="Direccion" />
          </section>

          {/* Cuenta */}
          <section style={styles.card}>
            <h2 style={{ marginBottom: "25px", fontSize: "28px" }}>Cuenta</h2>
            <input style={styles.input} type="email" placeholder="Correo" />
            <input
              style={styles.input}
              type="password"
              placeholder="Contraseña"
            />
            <input
              style={styles.input}
              type="password"
              placeholder="Confirmar contraseña"
            />
          </section>
        </div>
        <button style={styles.saveBtn}>Guardar</button>
      </main>
    </div>
  );
};

export default Configuracion;
