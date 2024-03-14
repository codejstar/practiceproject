import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Student from "./component/layout/Student";
// import Home from "./component/pages/Home";
// import Contact from "./component/pages/Contact";
// import About from "./component/pages/About";
// import Courses from "./component/pages/Courses";
// import Login from "./component/pages/Login";
// import Teacher from "./component/layout/Teacher";
import Error from "./component/layout/Error";
// import TLogin from "./component/pages/TLogin";
// import Teacherhome from "./component/layout/Teacherhome";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
// import Adminhome from "./component/admin/Adminhome";
// import AdminMaster from "./component/admin/AdminMaster";
// import Subcategory from "./component/user/Subcategory";
// import Product from "./component/user/Product";
// import Registration from "./component/user/Registration";
import ContactRegister from "./component/user/ContactRegister";
import LoginForm from "./component/user/LoginForm";
import StudentRegister from "./component/user/StudentRegister";


function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            {/* <Route path="/" element={<Student/>}>

            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/login" element={<Login/>}/>
            </Route> */}
            {/* <Route path="/subcat" element={<Subcategory/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/register" element={<Registration/>}/>
            <Route path="/conregister" element={<ContactRegister/>}/> */}

            {/* <Route path="/teacher" element={<Teacher/>}>
                <Route path="/teacher" element={<Teacherhome/>}/>
                <Route path="/teacher/Tlogin" element={<TLogin/>}/>
            </Route> */}

            {/* <Route path="/admin" element={<AdminMaster/>}>
                <Route path="/admin" element={<Adminhome/>}/>
            </Route> */}
             
            <Route path="/admin/register" element={<ContactRegister/>}/>
            <Route path="/admin/studentregister" element={<StudentRegister/>}/>
            <Route path="/admin/stulogin" element={<LoginForm/>}/>

            <Route path="/*" element={<Error/>}/>
         </Routes>
      </BrowserRouter>
      
      <ToastContainer />
    </>
  );
}

export default App;
