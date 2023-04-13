import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Login from './Login.js';
import Slidebar from './Slidebar.js';
import Sidebar from './Sidebar.js';
import Nav from 'react-bootstrap/Nav';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path = "/" element ={
        <div>
          <Nav className =" Header-all"
          
          >
            <Nav.Item className = "Header-Logo">
              <Nav.Link href="/" className = "Oz">5OzSoftware</Nav.Link>
            </Nav.Item>
          
            <Nav className ='Main-setting'>
              <Nav.Item className = "Nav-icon">
                <BsFillPersonFill/>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link href="/Login"><button className="Header-Login">Login</button></Nav.Link>
              </Nav.Item>          
            </Nav>   
          </Nav>
      
      <div className = "Main-Login">5Oz Sofware의 제품을 만나보세요! </div>
      <Slidebar></Slidebar>          
        </div>
      }/>
        
      <Route path ="/Login" element={<Login></Login>} />
      <Route path ="/Main" element={[
        <Header></Header>, 
        <Sidebar></Sidebar>
      ]} />
      
    </Routes>
    
  );
}

export default App;
