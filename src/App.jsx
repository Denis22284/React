import "./style/main.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project-2";

import ScrollToTop from "./Utils/scrollToTop";



import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {   
  return (

    <div className="App" > 

   <Router>

    <ScrollToTop/>

   <Navbar/>

<Routes> 

  <Route path="/" element={<Home/>}/>
  <Route path="/projects" element = {<Projects/>} />
<Route path="/project/:id" element = {<Project/>} />
  <Route path="/contacts" element={<Contacts/>} />

   </Routes>

<Footer/>

   </Router>

</div>

);

}

export default App
