import { Outlet } from "react-router-dom"
import TopSection from "./TopSection"

function App() {
  return (
    <>
      <TopSection />
      <Outlet />
    </>
  )
}

export default App
