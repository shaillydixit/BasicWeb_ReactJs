import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import About from './components/about';
import Blog from './components/blog';
import Contact from './components/contact';
import App from './App';
import Post from './components/writepost';

export default class header extends Component{
render(){
return(
<Router>
  <div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink exact to="/" activeStyle={{color:'red'}}>Shailly Dixit</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link>
              <NavLink to="/" activeStyle={{color:'red'}}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" activeStyle={{color:'red'}}>About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/blog" activeStyle={{color:'red'}}>Blog</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact" activeStyle={{color:'red'}}>Contact</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  <Routes>
    <Route path='/about' element={<About />}/>
    <Route path='/blog' element={<Blog />}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/' element={<App />}/>
    <Route path='/post' element={<Post />}/>

  </Routes>
</Router>


)
}


}