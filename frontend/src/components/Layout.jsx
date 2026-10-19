
import Navbar from "./navbar"
import {Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <div>
        <Navbar />
        <main className="container my-4">
            <Outlet />
        </main>
        <footer className="text-center text-muted py-3 border-top">
            @ 2026-2027 MPDAM-1 : BookShelf
        </footer>
    </div>
  )
}

export default Layout