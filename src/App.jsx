import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(()=> {
    AOS.init({duration:2000, once:true});
  },[])

  return (
    <RouterProvider router={Routes} />
  )
}

export default App
