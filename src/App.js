import {Navbar, Nav,Container} from 'react-bootstrap'
import Parties from './Components/Parties';
import { Route, Switch } from 'react-router';
import Major from './Components/Major';
import Mayor from './Components/Mayor';
import { Link } from 'react-router-dom';
function App() {


  
  return (
    <div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Link to='/'><Navbar.Brand className='mobileBrand text-white'>მთვლელი</Navbar.Brand></Link>
    <span className='text-white info'>ინფორმაცია განახლდება ყოველ 5 წუთში</span>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand className='text-white'><Link to='/' className='text-white text-decoration-none'>მთვლელი</Link></Navbar.Brand>
      <Nav className="ms-auto">
        <Link className='text-decoration-none' to='/'><Nav className='nav-link text-white ' >პარტიული</Nav></Link>
        <Link className='text-decoration-none' to='/major'><Nav className='nav-link text-white'>მაჟორიტარული</Nav></Link>
        <Link className='text-decoration-none' to='/mayor'><Nav className='nav-link text-white' >მერი</Nav></Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
<Route path='/' exact>
    <Parties />
    </Route>
    <Route path='/major'>
      <Major />
    </Route>
    <Route path='/mayor'>
      <Mayor />
    </Route>
</Switch>
 
    </div>
  );
}

export default App;
