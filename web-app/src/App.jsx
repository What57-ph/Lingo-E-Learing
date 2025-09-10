import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLayout from './layouts/AdminLayout';


import AuthLayout from './layouts/AuthLayout';
import LoginPage from './pages/LoginPage';
import ClientLayout from './layouts/ClientLayout';
import HomePage from './pages/HomePage';
import CreateTestPage from './pages/admin/CreateTestPage';
import UserPage from './pages/admin/UserPage';
import TestPage from './pages/admin/TestPage';
import DashboardPage from './pages/admin/DashboardPage';
import HavingTestPage from './pages/client/HavingTestPage';
function App() {

  const router = createBrowserRouter([
    {
      path: "/admin",
      element: (
        <AdminLayout />
      ),
      children: [
        {
          index: true,
          element: <DashboardPage />

        },
        {
          path: "user",
          element: <UserPage />
        },
        {
          path: "test",
          element: <TestPage />
        }, {
          path: "createTest",
          element: <CreateTestPage />
        }
      ]
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        }
      ],
    },
    {
      path: "/",
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "test",
          children: [
            {
              path: "beforeTest",
              element: <></>
            },
            {
              path: "havingTest",
              element: <HavingTestPage />
            },
            {
              path: "afterTest",
              element: <></>
            }
          ]
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
