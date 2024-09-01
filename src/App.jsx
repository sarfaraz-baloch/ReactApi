import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Componets/Home";
import Product from "./Componets/Product";
import NotFound from "./Componets/NotFound";
import Layout from "./Componets/Layout";
import About from "./Componets/About";
import Login from "./Componets/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
     </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App;
