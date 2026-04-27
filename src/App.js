import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configuracion from "./pages/configuration";
import Reportes from "./pages/reportes";
import AdminCitas from "./pages/adminCitas";
import Servicios from "./pages/servicios";

function App() {
  return (
    <Router>
      <Routes>
        {/* Aquí puedes tener tus otras rutas */}
        <Route path="/configuration" element={<Configuracion />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/citas" element={<AdminCitas />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  );
}

export default App;
