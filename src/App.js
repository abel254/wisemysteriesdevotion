import './App.css';
import LandingPage from './landingpage/LandingPage'
import AdminPage from './adminpage/AdminPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


function App() {
  const route = createBrowserRouter([
   {
     path:"/",
    element: <LandingPage/>,
   },
   {
     path:"/admin",
    element: <AdminPage/>,
   },
  ])


  return (
    <div className="App">
     <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
