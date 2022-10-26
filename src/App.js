
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Register/Register';
import Blog from './Pages/Blog/Blog';
import FAQ from './Pages/FAQ/FAQ';
import CourseDetails from './Pages/Courses/CourseDetails';
import PrivateRoute from './Pages/Shared/privateRoute/PrivateRoute';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <PrivateRoute><Courses></Courses></PrivateRoute>,
          loader: () => fetch(`http://localhost:5000/courses`)
        },
        {
          path: '/courses/:id',
          element: <CourseDetails></CourseDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
