
import './App.css';
import Footer from './Componentes/Footer';
import Navegacion from './Componentes/Navegacion';
import Alta from './Alta/Alta'
import Contacto from './Contacto/Contacto';
import Nosotros from './Nosotros/Nosotros';
import Home from './Home/Home';
import Login from './Login/Login'
import Admin from './Admin/Admin';
import Tienda from './Tienda/Tienda';
import Carrito from './Carrito/Carrito'
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Navegacion />

    <Routes>
      <Route path='/' element = {<Home />}  />
      <Route path='Tienda' element = {<Tienda />}  />
      <Route path='Alta' element = {<Alta />}  />
      <Route path='Contacto' element = {<Contacto />}  />
      <Route path='Nosotros' element = {<Nosotros />}  />
      <Route path='Login' element = {<Login />}  />
      <Route path='Admin' element = {<Admin />}  />
      <Route path='Carrito' element = {<Carrito />}  />
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
