import './App.css'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Header/Header'
import { Prato } from './pages/Prato/Prato'
import pratos from '../src/assets/pratos.json'


function App() {

  return (
    <div className="container">
     <Navbar/>
        <div className='itensMenu'>
          
            <div className='secao'>
              <h2>Lanches</h2>
              <hr></hr>
            </div>
            <div className='subsecao'>
              <h3>Lanches prensados</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.Lanches} subcategoria={"Xis"}/>
            <div className='subsecao'>
              <h3>Porções</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.Lanches} subcategoria={"porcoes"}/>
            <div className='secao'>
              <h2>Pratos</h2>
              <hr></hr>
            </div>
            <div className='subsecao'>
              <h3>Comida brasileira</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.pratos}  subcategoria={"brasileira"}/>
            <div className='subsecao'>
              <h3>Massas</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.pratos}  subcategoria={"massas"}/>
            <div className='secao'>
              <h2>Bebidas</h2>
              <hr></hr>
            </div>
            <div className='subsecao'>
              <h3>Refrigerantes</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.bebidas} subcategoria={"refrigerantes"}/>
            <div className='subsecao'>
              <h3>Cervejas</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.bebidas} subcategoria={"cervejas"}/>
            <div className='subsecao'>
              <h3>Vinhos</h3>
              <hr></hr>
            </div>
            <Prato pratos={pratos.bebidas} subcategoria={"vinhos"}/>

        </div>
     <Footer/>
    </div>
  )
}

export default App
