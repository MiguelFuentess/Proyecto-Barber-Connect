import React from "react";
import { X } from "lucide-react";

const ServicioEliminado = ({ isOpen, onClose, onConfirm }) => {
  // Si isOpen es falso, no renderizamos nada (el modal se oculta)
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalBox: {
      backgroundColor: "#d4af37",
      padding: "40px",
      borderRadius: "10px",
      textAlign: "center",
      width: "600px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
    },
    text: {
      color: "#fff",
      fontSize: "32px",
      fontWeight: "bold",
      margin: "20px 0",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginTop: "30px",
    },
    btn: {
      backgroundColor: "#7a631c",
      color: "#fff",
      border: "none",
      padding: "12px 30px",
      borderRadius: "8px",
      fontSize: "20px",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modalBox}>
        <X size={70} color="#fff" />
        <h2 style={styles.text}>Servicio Eliminado</h2>

        <div style={styles.buttonContainer}>
          <button style={styles.btn} onClick={onClose}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicioEliminado;
