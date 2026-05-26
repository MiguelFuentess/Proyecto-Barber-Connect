import React, { useState } from "react"; // Importamos useState
import { Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CerrarSesion from "./cerrarSesion"; // Importamos el nuevo componente

const Sidebar = () => {
  const navigate = useNavigate();

  // Este estado controla si el modal está visible (true) o no (false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función que se ejecuta al darle "Aceptar" en el modal
  const handleCerrarSesion = () => {
    setIsModalOpen(false); // Cerramos el modal
    navigate("/login"); // Redirigimos al login
  };

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
    <>
      {" "}
      {/* Usamos este fragmento vacío para agrupar el Sidebar y el Modal */}
      <aside style={styles.sidebar}>
        <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
          Barber Connect
        </h2>

        <button style={styles.navButton} onClick={() => navigate("/citas")}>
          Citas
        </button>
        <button style={styles.navButton} onClick={() => navigate("/servicios")}>
          Servicios
        </button>
        <button style={styles.navButton} onClick={() => navigate("/admin")}>
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

          {/* Aquí cambiamos el onClick para que abra el modal en lugar de redirigir */}
          <div style={styles.footerItem} onClick={() => setIsModalOpen(true)}>
            <LogOut size={18} /> Cerrar sesion
          </div>
        </div>
      </aside>
      {/* Aquí colocamos el Modal. Le pasamos el estado y las funciones por 'props' */}
      <CerrarSesion
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCerrarSesion}
      />
    </>
  );
};

export default Sidebar;
