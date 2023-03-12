import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Survey from './component/Survey';
import Success from './component/Thanks';
import Welcome from './component/Welcome';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Welcome />},
    {path:'/survey', element:<Survey />},
    {path:'/success', element:<Success />},
  ]);

  return(
   <RouterProvider router={router} />

  )
}


export default App;
