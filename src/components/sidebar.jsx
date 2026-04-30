import React from "react";
import { Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const styles = {
    sidebar: {
      width: "250px",
      backgroundColor: "#0b0b0b",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      borderRight: "1px solid #333",
      minHeight: "100vh",
    },
    navButton: {
      backgroundColor: "#d4af37",
      color: "#000",
      border: "none",
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "16px",
      width: "100%",
    },
    footerItem: {
      color: "#d4af37",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };

  return (
    <aside style={styles.sidebar}>
      <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>Barber Connect</h2>

      {/* Usamos navigate para movernos entre tus interfaces de admin */}
      <button style={styles.navButton} onClick={() => navigate("/citas")}>
        Citas
      </button>
      <button style={styles.navButton} onClick={() => navigate("/servicios")}>
        Servicios
      </button>
      <button style={styles.navButton} onClick={() => navigate("/admin/personal")}>
        Admin
      </button>
      <button style={styles.navButton} onClick={() => navigate("/reportes")}>
        Reportes
      </button>

      <div style={{ marginTop: "auto" }}>
        <div
          style={styles.footerItem}
          onClick={() => navigate("/configuration")}
        >
          <Settings size={18} /> Configuracion
        </div>
        <div style={styles.footerItem} onClick={() => navigate("/login")}>
          <LogOut size={18} /> Cerrar sesion
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
