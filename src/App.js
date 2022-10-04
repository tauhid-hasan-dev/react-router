import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import UserDetails from './components/UserDetails/UserDetails';
import Users from './components/Users/Users';

function App() {
 const router = createBrowserRouter([
      {path: '/', 
       element: <Main></Main>, 
       children:[
        {path: '/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/about', element: <About></About>},
        {path: '/product', element: <Products></Products>},
        {path: '/users',
        loader: async()=>{
          return fetch('https://jsonplaceholder.typicode.com/users');
        }, 
        element:<Users></Users>},
        {path: '/users/:userId',
          loader:async({params})=>{
              //console.log(params.userId)
              return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
          }, 
        element: <UserDetails></UserDetails>
      }
      ]},
      {path: '*', element: <div className='text-5xl font-semibold '>Vaire kisu nai</div>}   
 ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
