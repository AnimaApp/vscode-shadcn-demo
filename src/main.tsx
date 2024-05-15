import React from 'react'
import ReactDOM from'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import KitchenSinkPage from './pages/sink/page.tsx';
import ExamplesPage from './pages/examples/page.tsx';
import FormsPage from './pages/examples/forms/page.tsx'
import MusicPage from './pages/examples/music/page.tsx'
import AuthenticationPage from './pages/examples/authentication/page.tsx'
import CardsPage from './pages/examples/cards/page.tsx'
import DashboardPage from './pages/examples/dashboard/page.tsx';
import MailPage from './pages/examples/mail/page.tsx';
import TaskPage from './pages/examples/tasks/tasks/page.tsx';
import { PlaygroundPage } from './pages/examples/playground/page.tsx';
import TextEditorPage from './pages/examples/text-editor/page.tsx';
import { PlaygroundLayout } from './pages/examples/playground/layout.tsx';

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
        path: "authentication",
        element: <AuthenticationPage />
      },
      {
        path: "cards",
        element: <CardsPage />
      },
      {
        path: "dashboard",
        element: <DashboardPage />
      },
      {
        path: "mail",
        element: <MailPage />
      },
      {
        path: "tasks",
        element: <TaskPage />
      },
      {
        path: "text-editor",
        element: <TextEditorPage />
      },
      {
        path: "playground",
        element: (
          <PlaygroundLayout>
            <PlaygroundPage />
          </PlaygroundLayout>
        )
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
