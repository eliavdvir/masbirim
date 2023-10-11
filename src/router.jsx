import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import Platform from "./Platform"
import MainPage from "./MainPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "report",
        element: <Platform />,
        children: [{ path: ":platform", element: <MainPage /> }],
      },
      {
        path: "share",
        element: <Platform />,
        children: [{ path: ":platform", element: <MainPage /> }],
      },
    ],
  },
])
