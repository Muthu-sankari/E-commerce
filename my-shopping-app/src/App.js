import React from './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';

function App  () {
  return (
    <div > <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/mens' element={<ShopCategory category="men"/> }/ > 
        <Route path='/womens' element={<ShopCategory category="women"/> }/ > 
        <Route path='/kids' element={<ShopCategory category="kid"/>}/ >
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<Login/>}/> 
        </Routes>
        </BrowserRouter>
    </div>
  )
}
export default App