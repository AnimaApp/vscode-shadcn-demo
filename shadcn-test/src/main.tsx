import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import KitchenSinkPage from './pages/sink/page.tsx';
import ExamplesPage from './pages/examples/page.tsx';
import FormsPage from './pages/examples/forms/page.tsx'
import MusicPage from './pages/examples/music/page.tsx'

const router = createBrowserRouter([
  {
    path: "/sink",
    element: <KitchenSinkPage />,
  },
  {
    path: "/examples",
    element: <ExamplesPage />,
    children: [
      {
        path: "forms",
        element: <FormsPage />
      },
      {
        path: "music",
        element: <MusicPage />
      },
      {
        path: "",
        element: <FormsPage />
      },
    ]
  },
  {
    path: "/",
    element: <KitchenSinkPage />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
