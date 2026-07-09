import { Outlet, Link } from "react-router"

function Header(){
  return (
    <div>
      <nav className="home-link" key="home-button">
        <Link style={{ color: "white" }} to="/">
            Home
        </Link>
      </nav>

      <p>&nbsp;</p>
      
      <Outlet />
    </div>
  )
}

export default Header