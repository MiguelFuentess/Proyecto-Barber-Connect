import React from "react";
import Sidebar from "../../components/sidebar";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminSchedules = () => {
  const navigate = useNavigate();
  const data = Array.from({ length: 8 });

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
    headerTitle: {
      color: "#d4af37",
      fontSize: "42px",
      marginBottom: "20px",
    },

    // Tabs
    tabs: {
      display: "flex",
      gap: "15px",
      marginBottom: "20px",
    },
    tab: {
      padding: "8px 20px",
      borderRadius: "10px",
      backgroundColor: "#333",
      border: "none",
      color: "#fff",
      cursor: "pointer",
      minWidth: "120px",
    },
    activeTab: {
      padding: "8px 20px",
      borderRadius: "10px",
      backgroundColor: "#222",
      border: "1px solid #d4af37",
      color: "#fff",
      cursor: "pointer",
      minWidth: "120px",
    },

    // Top bar
    topBar: {
      display: "flex",
      gap: "15px",
      marginBottom: "15px",
    },
    search: {
      flex: 1,
      padding: "10px",
      borderRadius: "6px",
      border: "none",
      backgroundColor: "#ccc",
      color: "#000",
    },
    btnNew: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 18px",
      borderRadius: "8px",
      border: "1px solid #d4af37",
      backgroundColor: "transparent",
      color: "#fff",
      cursor: "pointer",
    },

    // Table container
    tableContainer: {
      borderRadius: "10px",
      overflow: "hidden",
      border: "1px solid #333",
    },

    table: {
      width: "100%",
      borderCollapse: "collapse",
    },

    // Header
    thead: {
      backgroundColor: "#d4af37",
      color: "#000",
    },
    th: {
      padding: "12px",
      textAlign: "center",
      fontSize: "14px",
      borderRight: "1px solid #000",
    },

    // Rows
    tr: {
      background: "linear-gradient(90deg, #2a2a2a, #1c1c1c)",
      borderBottom: "1px solid #222",
    },
    td: {
      padding: "12px",
      textAlign: "center",
      fontSize: "14px",
      borderRight: "1px solid #111",
    },

    // Estado badge
    statusActive: {
      color: "#00ff88",
      fontWeight: "bold",
    },
    statusInactive: {
      color: "#ff4d4d",
      fontWeight: "bold",
    },

    // Actions
    actions: {
      display: "flex",
      justifyContent: "center",
      gap: "12px",
    },
    iconBtn: {
      background: "none",
      border: "none",
      color: "#ccc",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Sidebar />

      <main style={styles.main}>
        <h1 style={styles.headerTitle}>Horarios</h1>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={styles.tab}
            onClick={() => navigate("/admin/personal")}
          >
            Personal
          </button>

          <button
            style={styles.tab}
            onClick={() => navigate("/admin/sedes")}
          >
            Sedes
          </button>

          <button style={styles.activeTab}>Horarios</button>
        </div>

        {/* Search + Button */}
        <div style={styles.topBar}>
          <input
            type="text"
            placeholder="Buscar"
            style={styles.search}
          />

          <button style={styles.btnNew}>
            <Plus size={16} /> Nuevo
          </button>
        </div>

        {/* Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead style={styles.thead}>
              <tr>
                <th style={styles.th}>Día</th>
                <th style={styles.th}>Hora inicio</th>
                <th style={styles.th}>Hora fin</th>
                <th style={styles.th}>Sede</th>
                <th style={styles.th}>Estado</th>
                <th style={styles.th}>Opciones</th>
              </tr>
            </thead>

            <tbody>
              {data.map((_, i) => (
                <tr key={i} style={styles.tr}>
                  <td style={styles.td}></td>
                  <td style={styles.td}></td>
                  <td style={styles.td}></td>
                  <td style={styles.td}></td>

                  <td style={styles.td}>
                    <span style={styles.statusActive}>Activo</span>
                  </td>

                  <td style={styles.td}>
                    <div style={styles.actions}>
                      <button style={styles.iconBtn}>
                        <Pencil size={16} />
                      </button>
                      <button style={styles.iconBtn}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminSchedules;