import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Products from './components/Products/Products';

function App() {
 const router = createBrowserRouter([
      {path: '/', 
       element: <Main></Main>, 
       children:[
        {path: '/home', element: <Home></Home>},
        {path: '/about', element: <About></About>},
        {path: '/product', element:<Products></Products>},
      ]},
      
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
