
import './App.css';
import Header from "./containers/Header"
import ProductDetails from "./containers/ProductDetails"
import ProductAll from "./containers/ProductAll"

import {BrowserRouter, Routes, Route} from "react-router-dom" 

function App() {
  return (
    <div className="">
     <BrowserRouter>
     
      <Header/>
      <Routes>

      <Route path="/"  element={<ProductAll/>}/>

      <Route path="/product/:productId"  element={<ProductDetails/>}/>

      
      </Routes>
       


     </BrowserRouter>

    </div>
  );
}

export default App;
