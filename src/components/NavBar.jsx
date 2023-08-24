import React, { useState } from 'react'

const NavBar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-purple"> 
        <div className="container">
          <a className="navbar-brand" href="#">NAWALPUR<br/><h5>Dumkibas</h5></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success btn-style" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
