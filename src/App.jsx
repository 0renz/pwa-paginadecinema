import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from "./componentes/Menu";
import Home from "./componentes/telas/Home";
import Sobre from "./componentes/telas/Sobre";
import Filmes from "./componentes/telas/filme/Filme";
import Diretores from "./componentes/telas/diretor/Diretor";
import Series from "./componentes/telas/serie/Serie";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Menu/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : "/sobre",
        element : <Sobre/>
      },
      {
        path : "filmes", 
        element : <Filmes/>
      },
      {
        path : "series",
        element : <Series/>
      },
      {
        path : "diretores",
        element : <Diretores/>
      },
      {
        path : "*",
        element : <h1>404 - Página não encontrada</h1>
      }      
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;