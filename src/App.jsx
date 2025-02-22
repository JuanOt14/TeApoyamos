import './App.css'

//import dependencies
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import layout
import Header from './components/Header';
import Footer from './components/Footer';

//import pages
import Home from './pages/Home/Home';
import Nosotros from './pages/Nosotros/Nosotros';
import Aliados from './pages/Aliados/Aliados';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/aliados' element={<Aliados />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
