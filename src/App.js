import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Survey from './component/Survey';
import Welcome from './component/Welcome';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Welcome />},
    {path:'/survey', element:<Survey />}
  ]);

  return(
   <RouterProvider router={router} />

  )
}


export default App;
