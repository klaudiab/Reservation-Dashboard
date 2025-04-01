import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddReservationPage from './components/AddReservationPage/AddReservationPage.tsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx'
import EditReservationPage from './components/EditReservationPage/EditReservationPage.tsx'
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: '/add',
    element: <AddReservationPage/>
  },
  {
    path: '/edit/:reservationId',
    element: <EditReservationPage/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
