import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/productsSlice";

function App() {
  const products = useSelector(state=>state.products);
  const status = useSelector(state=>state.products.status);
  const error = useSelector(state=>state.products.error);

  const dispatch = useDispatch();
  console.log(products)
  console.log(status)
  console.log(error)

  useEffect(()=>{
    if(products?.products.length==0) {
      console.log('FetxhProfuct Call In UseEffect!')
      dispatch(fetchProducts())
    }
  },[dispatch]);

  return (
    <>
      <Header/>
      <Outlet/>
    </> 
  )
}
 
export default App
