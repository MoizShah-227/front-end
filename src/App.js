import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'
import Featured from './components/Featured';
import Ourstory from './components/Ourstory';
import Products from './components/Products';
function App() {
  return (
    <div className="contain-components" >
      <BrowserRouter>
     <Navbar/>
     <Home/>
     <Featured/>
     <Ourstory/>
     <Products/>
      </BrowserRouter>
    </div>
  );
}

export default App;
