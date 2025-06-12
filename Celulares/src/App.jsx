import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Contacto from './pages/Contacto';
import ProductoDetalle from './pages/ProductoDetalle';
import QuienesSomos from './pages/QuienesSomos';
import Productos from './pages/Productos';

function App() {

  return (
   <BrowserRouter>
<Routes>
<Route path="/" element={<MainLayout />} >
<Route index element={<Home />}></Route>
<Route path="/productos/:idMarca" element={<Productos />}></Route>
<Route path="/productos/producto-detalle/:idCelular" element={<ProductoDetalle />}></Route>
<Route path="/quienes-somos" element={<QuienesSomos />}></Route>
<Route path="/contacto" element={<Contacto />}></Route>
<Route path="*" element={<h1>404 😢</h1>}></Route>
</Route>
</Routes>
   </BrowserRouter>
  )
}

export default App
