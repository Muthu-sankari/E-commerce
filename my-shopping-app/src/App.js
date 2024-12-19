import React from './App.css';
import Navbar from './components/Navbar/Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kid_banner from './components/Assests/banner_kids.png'



function App  () {
  return (
    <div > <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Shop/>}/> 
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/> }/ > 
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/> }/ > 
        <Route path='/kids' element={<ShopCategory banner={kid_banner}category="kid"/>}/ >
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/login' element={<Login/>}/> 
        </Routes>
   

        </BrowserRouter>
    </div>
  )
}
export default App