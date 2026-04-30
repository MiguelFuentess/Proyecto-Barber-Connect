import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Configuracion from "./pages/configuration";
import Reportes from "./pages/reportes";
import AdminCitas from "./pages/adminCitas";
import Servicios from "./pages/servicios";
import LoginPage from './pages/LoginPage';
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import HomePage from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
import BookingPage from "./pages/BookingPage";
import HeadquartersList from "./pages/headquarters";
import AdminPeoples from "./pages/admin/peoples";
import AdminHeadquarters from "./pages/admin/headquarters";
import AdminSchedules from "./pages/admin/schedules";

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* Aquí puedes tener tus otras rutas */}
        {<Route path="/booking" element={<BookingPage/>} /> }
        {<Route path="/login" element={<LoginPage />} />}
        {<Route path="/registro" element={<RegisterPage />} /> }
        {<Route path="/" element={<HomePage />} />}   
        {<Route path="/configuration" element={<Configuracion />} />}
        {<Route path="/reportes" element={<Reportes />} />}
        {<Route path="/citas" element={<AdminCitas />} />}
        {<Route path="/servicios" element={<Servicios />} />}
        {<Route path="/Settingspage" element={<SettingsPage />} />}
        <Route path="/lista-sedes" element={<HeadquartersList />} />
        <Route path="/admin/personal" element={<AdminPeoples />} />
        <Route path="/admin/sedes" element={<AdminHeadquarters />} />
        <Route path="/admin/horarios" element={<AdminSchedules />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
