/*eslint-disable */
import React from 'react'
import { Link } from 'react-router-dom'

const THeader = () => {
  return (
    <>
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a href="index.html">Mentor</a>
      </h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <Link className="active" to={"/teacher"}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/about"}>Add Student</Link>
          </li>
          <li>
            <a href="courses.html">College Placement</a>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
      <a href="courses.html" className="get-started-btn">
        Get Started
      </a>
    </div>
  </header>
  </>
  )
}

export default THeader