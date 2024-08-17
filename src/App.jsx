import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/productsSlice";
import Footer from "./components/Footer";

function App() {
  const products = useSelector(state=>state.products);
  const status = useSelector(state=>state.products.status);
  const error = useSelector(state=>state.products.error);

  const dispatch = useDispatch();

  useEffect(()=>{
    if(products?.products.length==0) {
      dispatch(fetchProducts(1))
    }
  },[dispatch]);

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </> 
  )
}
 
export default App
