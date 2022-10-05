import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About/About';
import Home from '../components/Home/Home';
import Main from '../components/Main/Main';
import PostDetails from '../components/PostDetails/PostDetails';
import Posts from '../components/Posts/Posts';
import Products from '../components/Products/Products';
import UserDetails from '../components/UserDetails/UserDetails';
import Users from '../components/Users/Users';


export const router = createBrowserRouter([
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
        },

        {path: '/posts',
        loader: async()=>{
            return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element:<Posts></Posts>
        },

        {path: '/posts/:postId',
        loader: async({params})=>{
            console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element:<PostDetails></PostDetails>
        }
    ]},
    {path: '*', element: <div className='text-5xl font-semibold flex justify-center items-center p-20 text-red-600'>Nothing found! Please try agian</div>}   
])