import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./component/layout/Student";
import Home from "./component/pages/Home";
import Contact from "./component/pages/Contact";
import About from "./component/pages/About";
import Courses from "./component/pages/Courses";
import Login from "./component/pages/Login";
import Teacher from "./component/layout/Teacher";
import Error from "./component/layout/Error";
import TLogin from "./component/pages/TLogin";
import Teacherhome from "./component/layout/Teacherhome";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Student/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/login" element={<Login/>}/>

            </Route>

            <Route path="/teacher" element={<Teacher/>}>
                <Route path="/teacher" element={<Teacherhome/>}/>
                <Route path="/teacher/Tlogin" element={<TLogin/>}/>
            </Route>

            <Route path="/*" element={<Error/>}/>
         </Routes>
      </BrowserRouter>
      
      <ToastContainer />
    </>
  );
}

export default App;
