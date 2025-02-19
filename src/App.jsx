import './App.css'

//import dependencies
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//import layout
import Header from './components/Header';

//import pages
import Home from './pages/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
