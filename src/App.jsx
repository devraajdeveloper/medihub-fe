import DoctorList from "./pages/Department/DoctorList";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/LoginPage/Login";
import Registration from "./pages/Registration/Registration";
import AdminLogin from "./pages/AdminLoginPage/Login"
import AdminRegistration from "./pages/AdminLoginPage/Registration"
import AdminNavbar from "./pages/AdminPanel/AdminNavbar";
import Patients from "./pages/AdminPanel/Patients";
import Doctors from "./pages/AdminPanel/Doctors";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/DoctorList" element={<DoctorList/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
        <Route path="/AdminRegistration" element={<AdminRegistration/>}/>
        <Route path="/AdminNavbar" element={<AdminNavbar/>}/>
        <Route path="/Patients" element={<Patients/>}/>
        <Route path="/Doctors" element={<Doctors/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;




