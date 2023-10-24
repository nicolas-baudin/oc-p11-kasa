import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './layouts/Landing';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Leasing from './pages/Leasing';
import Error404 from './pages/Error404';
import "./app.scss"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "leasing/:leasingId",
        element: <Leasing />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;