import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      // { index: true, element: <Home /> },
      // {
      //   path: "/courses",
      //   element: <Courses />,
      //   children: [
      //     { index: true, element: <CoursesIndex /> },
      //     { path: "/courses/:id", element: <Course /> },
      //   ],
      // },
      // { path: "*", element: <NoMatch /> },
    ],
  },
]);
export default function AppRouter() {
  window.scroll(0, 0);
  <RouterProvider router={routes}></RouterProvider>;
}
