import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ContactUsPage from './pages/ContactUsPage.jsx'
import MuscleGroupsPage from './pages/MuscleGroupsPage.jsx'
import NutritionPage from './pages/NutritionPage.jsx';
import TrackerPage from './pages/TrackerPage.jsx';
import GlossaryPage from './pages/GlossaryPage.jsx';
import BMIPage from './pages/bmiPage.jsx'
import TutorialsPage from './pages/TutorialsPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  }, 
  {
    path: "/bmi",
    element: <BMIPage />,
  }, 
  {
    path: "/musclegroupsandworkoutplan",
    element: <MuscleGroupsPage/>
  },
  {
    path: "/nutritionandmealplan",
    element: <NutritionPage/>
  },
  {
    path: "/tracker",
    element: <TrackerPage/>
  },
  {
    path: "/glossary",
    element: <GlossaryPage/>
  },
  {
    path: "/contactus",
    element: <ContactUsPage/>
  },
  {
    path: "/tutorials",
    element: <TutorialsPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/signin",
    element: <SignInPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
