import React from "react";
import Sidebar from "../components/sidebar";
import { User } from "lucide-react";

const Reportes = () => {
  const styles = {
    pageContainer: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontFamily: "sans-serif",
    },
    main: { flex: 1, padding: "40px" },
    topSection: { display: "flex", gap: "20px", marginBottom: "20px" },
    // Tarjetas oscuras
    card: {
      backgroundColor: "#1a1a1a",
      padding: "20px",
      borderRadius: "15px",
      flex: 1,
    },
    // Gráfica de barras manual
    chartContainer: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      height: "200px",
      padding: "20px 0",
    },
    bar: (height, isHighlight) => ({
      width: "40px",
      height: `${height}%`,
      backgroundColor: isHighlight ? "#d4af37" : "#333",
      borderRadius: "5px 5px 0 0",
    }),
    // Estilos de texto
    goldText: { color: "#d4af37" },
    incomeText: {
      fontSize: "42px",
      fontWeight: "bold",
      color: "#d4af37",
      marginTop: "10px",
    },
    barberoItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar />

      <main style={styles.main}>
        <h1
          style={{ color: "#d4af37", fontSize: "48px", marginBottom: "40px" }}
        >
          Reportes
        </h1>

        <div style={styles.topSection}>
          {/* Gráfica Semanal */}
          <section style={{ ...styles.card, flex: 2 }}>
            <div style={styles.chartContainer}>
              <div style={styles.bar(30, false)}></div>
              <div style={styles.bar(50, false)}></div>
              <div style={styles.bar(85, true)}></div>{" "}
              {/* El resaltado del miércoles */}
              <div style={styles.bar(45, false)}></div>
              <div style={styles.bar(90, false)}></div>
              <div style={styles.bar(60, false)}></div>
              <div style={styles.bar(40, false)}></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#666",
                fontSize: "12px",
              }}
            >
              <span>LUN</span>
              <span>MAR</span>
              <span>MIE</span>
              <span>JUE</span>
              <span>VIE</span>
              <span>SAB</span>
              <span>DOM</span>
            </div>
          </section>

          {/* Columna Derecha: Ingresos y Top Barberos */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <section style={styles.card}>
              <h3>Ingresos Hoy</h3>
              <p style={styles.incomeText}>$ 421.000</p>
            </section>

            <section style={styles.card}>
              <h3 style={{ marginBottom: "20px" }}>Top barberos</h3>
              <div style={styles.barberoItem}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <User size={20} /> <span>Julian Garcia</span>
                </div>
                <span style={styles.goldText}>#1</span>
              </div>
              <div style={styles.barberoItem}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <User size={20} /> <span>Jessica Lopez</span>
                </div>
                <span style={styles.goldText}>#2</span>
              </div>
              <div style={styles.barberoItem}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <User size={20} /> <span>Carlos Romero</span>
                </div>
                <span style={styles.goldText}>#3</span>
              </div>
            </section>
          </div>
        </div>

        {/* Comentarios Recientes */}
        <section style={styles.card}>
          <h2 style={{ marginBottom: "20px" }}>Comentarios recientes</h2>
          <div style={{ display: "flex", gap: "40px" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>Andrés M.</strong>
                <span style={styles.goldText}>Calificacion 5/5</span>
              </div>
              <p style={{ color: "#ccc", lineHeight: "1.5" }}>
                "Buen ambiente y atención, aunque me tocó esperar un poco. Igual
                el corte clásico quedó como quería".
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <strong>Sebastián G.</strong>
                <span style={styles.goldText}>Calificacion 4/5</span>
              </div>
              <p style={{ color: "#ccc", lineHeight: "1.5" }}>
                "El corte urbano estuvo bien, aunque esperaba un poco más de
                asesoría sobre qué estilo me quedaba mejor".
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reportes;
