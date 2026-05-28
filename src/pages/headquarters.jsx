import React from "react";
import { Search } from "lucide-react";

const HeadquartersList = () => {
  const sedes = [
    {
      nombre: "Medellin",
      descripcion:
        "Ubicados en el corazón de Medellín, somos una barbería que combina tradición y estilo moderno. Ofrecemos cortes de cabello, arreglo de barba y experiencias de grooming personalizadas.",
      direccion: "Calle 52 # 94 20",
      imagen:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
    },
    {
      nombre: "Bogotá",
      descripcion:
        "Ubicados en Bogotá, somos una barbería diseñada para quienes viven el ritmo de la ciudad. Especialistas en cortes modernos, fades y barbería clásica.",
      direccion: "Calle 52 # 94 20",
      imagen:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
    },
    {
      nombre: "Cartagena",
      descripcion:
        "En nuestra sede de Cartagena combinamos estilo, frescura y buena energía caribeña. Experiencias únicas en barbería con atención personalizada.",
      direccion: "Calle 52 # 94 20",
      imagen:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      padding: "40px",
    },
    title: {
      color: "#d4af37",
      fontSize: "40px",
      marginBottom: "20px",
    },

    searchContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#ccc",
      borderRadius: "8px",
      padding: "8px 12px",
      marginBottom: "30px",
    },
    searchInput: {
      flex: 1,
      border: "none",
      background: "transparent",
      outline: "none",
      marginLeft: "10px",
    },

    card: {
      display: "flex",
      gap: "20px",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #2a2a2a, #1c1c1c)",
    },

    image: {
      width: "160px",
      height: "120px",
      objectFit: "cover",
      borderRadius: "10px",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    name: {
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "8px",
    },

    description: {
      fontSize: "14px",
      color: "#ccc",
      marginBottom: "10px",
      maxWidth: "700px",
    },

    address: {
      fontSize: "13px",
      color: "#aaa",
    },

    more: {
      textAlign: "center",
      marginTop: "30px",
      color: "#ccc",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuestras sedes</h1>

      {/* Buscador */}
      <div style={styles.searchContainer}>
        <Search size={18} color="#000" />
        <input
          type="text"
          placeholder="Buscar"
          style={styles.searchInput}
        />
      </div>

      {/* Cards */}
      {sedes.map((sede, index) => (
        <div key={index} style={styles.card}>
          <img src={sede.imagen} alt={sede.nombre} style={styles.image} />

          <div style={styles.content}>
            <div style={styles.name}>{sede.nombre}</div>
            <div style={styles.description}>{sede.descripcion}</div>
            <div style={styles.address}>
              <strong>Dirección:</strong> {sede.direccion}
            </div>
          </div>
        </div>
      ))}

      {/* Más */}
      <div style={styles.more}>Más...</div>
    </div>
  );
};

export default HeadquartersList;