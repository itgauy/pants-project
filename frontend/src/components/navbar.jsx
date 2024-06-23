import { Link } from "react-router-dom"

const Navbar = () => {

  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <h1>PANTS</h1>
          </Link>
          <nav>
            <Link to="/htp">How To Play</Link>
            <Link to="about-us">About Us</Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar