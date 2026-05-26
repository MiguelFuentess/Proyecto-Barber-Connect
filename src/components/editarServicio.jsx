import React, { useState } from "react";
import CambiosGuardadosCorrectamente from "./cambiosGuardadosCorrec";

const EditarServicio = ({ isOpen, onClose }) => {
  const [isChangeOpen, setIsChangeOpen] = useState(false);
  if (!isOpen) return null;

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modalBox: {
      backgroundColor: "#262626",
      padding: "40px",
      borderRadius: "15px",
      width: "450px",
      border: "1px solid #444",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
    },
    title: {
      color: "#d4af37",
      fontSize: "32px",
      marginBottom: "30px",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#e5e7eb",
      boxSizing: "border-box",
      fontSize: "16px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#e5e7eb",
      boxSizing: "border-box",
      minHeight: "120px",
      resize: "none",
      fontSize: "16px",
    },
    row: {
      display: "flex",
      gap: "15px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "flex-end",
      marginTop: "20px",
    },
    btnSubmit: {
      backgroundColor: "#d4af37",
      color: "#000",
      border: "none",
      padding: "12px 40px",
      borderRadius: "8px",
      fontSize: "18px",
      cursor: "pointer",
      fontWeight: "bold",
      margin: "0 auto",
    },
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      {/* e.stopPropagation() evita que el clic dentro de la caja cierre el modal */}
      <div style={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        <h2 style={styles.title}>Editar Servicio</h2>
        <input style={styles.input} type="text" placeholder="Nombre" />
        <textarea style={styles.textarea} placeholder="Descripcion"></textarea>
        <div style={styles.row}>
          <input style={styles.input} type="text" placeholder="Precio" />
          <input style={styles.input} type="text" placeholder="Duracion" />
        </div>
        <div style={styles.buttonContainer}>
          <button
            style={styles.btnSubmit}
            onClick={() => setIsChangeOpen(true)}
          >
            Guardar
          </button>
        </div>
      </div>
      <CambiosGuardadosCorrectamente
        isOpen={isChangeOpen}
        onClose={() => setIsChangeOpen(false)}
      />
    </div>
  );
};

export default EditarServicio;
