// import logo from './logo.svg';
import './App.css';
import Products from './ProductPage/product';
import Login from './LoginPage';
import Navigationbar from './Navigation';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './ProductDetailsPage/details';
// import addProduct from './Addproduct/addproduct';
function App() {
  return (
    <div>
      <Navigationbar/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/productdetails/:productId' element={<ProductDetails/>}/>
        {/* <Route path='/addproduct' element={<Addproduct/>}/> */}
      </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
