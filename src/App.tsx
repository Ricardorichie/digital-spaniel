import logo from "./logo.svg"
import { Counter } from "./features/counter/Counter"
import "./App.css"
import { DatePicker } from "antd"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./theme/theme"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Home from "./Views/Home"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
      </Route>,
    ),
  )
  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
