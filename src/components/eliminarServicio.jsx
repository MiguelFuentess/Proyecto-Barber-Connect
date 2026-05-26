import React, { useState } from "react";
import { TriangleAlert } from "lucide-react";
import ServicioEliminado from "./servicioEliminado";

const EliminarServicio = ({ isOpen, onClose, onConfirm }) => {
  const [isChangeOpen, setIsChangeOpen] = useState(false);
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
        <TriangleAlert size={70} color="#fff" />
        <h2 style={styles.text}>¿Está seguro de eliminar este servicio?</h2>
        <h4>esta accion no se puede deshacer</h4>

        <div style={styles.buttonContainer}>
          <button style={styles.btn} onClick={onClose}>
            Cancelar
          </button>
          <button style={styles.btn} onClick={() => setIsChangeOpen(true)}>
            Aceptar
          </button>
        </div>
      </div>
      <ServicioEliminado
        isOpen={isChangeOpen}
        onClose={() => {
          setIsChangeOpen(false);
          onClose();
        }}
      />
    </div>
  );
};

export default EliminarServicio;
