import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './componants/HomePage';
import RegisterUser from './componants/RegisterUser';
import LoginUser from './componants/LoginUser';


function App() {

  const router = createBrowserRouter(
    [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/login",
        element:<LoginUser/>
      },
      {
        path:"/register",
        element:<RegisterUser/>
      }
    ]
  )

  return (
    < div className = " flex items-center justify-center p-4 h-screen ">
  < RouterProvider router= {router}/>
  
    </ div>
  )
}

export default App
