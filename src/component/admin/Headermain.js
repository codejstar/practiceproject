import React from 'react'
import { Link } from 'react-router-dom'

const Headermain = () => {
  return (
    <>
 <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="d-flex align-items-center justify-content-between">
    <Link href="index.html" className="logo d-flex align-items-center">
      <img src="assets/img/logo.png" alt="" />
      <span className="d-none d-lg-block">NiceAdmin</span>
    </Link>
    <i className="bi bi-list toggle-sidebar-btn" />
  </div>
  {/* End Logo */}
  <div className="search-bar">
    <form
      className="search-form d-flex align-items-center"
      method="POST"
      action="#"
    >
      <input
        type="text"
        name="query"
        placeholder="Search"
        title="Enter search keyword"
      />
      <button type="submit" title="Search">
        <i className="bi bi-search" />
      </button>
    </form>
  </div>
  {/* End Search Bar */}
  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
      <li className="nav-item d-block d-lg-none">
        <Link className="nav-link nav-icon search-bar-toggle " href="#">
          <i className="bi bi-search" />
        </Link>
      </li>
      {/* End Search Icon*/}
      <li className="nav-item dropdown">
        <Link className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-bell" />
          <span className="badge bg-primary badge-number">4</span>
        </Link>
        {/* End Notification Icon */}
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
          <li className="dropdown-header">
            You have 4 new notifications
            <Link href="#">
              <span className="badge rounded-pill bg-primary p-2 ms-2">
                View all
              </span>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="notification-item">
            <i className="bi bi-exclamation-circle text-warning" />
            <div>
              <h4>Lorem Ipsum</h4>
              <p>Quae dolorem earum veritatis oditseno</p>
              <p>30 min. ago</p>
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="notification-item">
            <i className="bi bi-x-circle text-danger" />
            <div>
              <h4>Atque rerum nesciunt</h4>
              <p>Quae dolorem earum veritatis oditseno</p>
              <p>1 hr. ago</p>
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="notification-item">
            <i className="bi bi-check-circle text-success" />
            <div>
              <h4>Sit rerum fuga</h4>
              <p>Quae dolorem earum veritatis oditseno</p>
              <p>2 hrs. ago</p>
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="notification-item">
            <i className="bi bi-info-circle text-primary" />
            <div>
              <h4>Dicta reprehenderit</h4>
              <p>Quae dolorem earum veritatis oditseno</p>
              <p>4 hrs. ago</p>
            </div>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="dropdown-footer">
            <Link href="#">Show all notifications</Link>
          </li>
        </ul>
        {/* End Notification Dropdown Items */}
      </li>
      {/* End Notification Nav */}
      <li className="nav-item dropdown">
        <Link className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
          <i className="bi bi-chat-left-text" />
          <span className="badge bg-success badge-number">3</span>
        </Link>
        {/* End Messages Icon */}
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
          <li className="dropdown-header">
            You have 3 new messages
            <Link href="#">
              <span className="badge rounded-pill bg-primary p-2 ms-2">
                View all
              </span>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="message-item">
            <Link href="#">
              <img
                src="assets/img/messages-1.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>Maria Hudson</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>4 hrs. ago</p>
              </div>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="message-item">
            <Link href="#">
              <img
                src="assets/img/messages-2.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>Anna Nelson</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>6 hrs. ago</p>
              </div>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="message-item">
            <Link href="#">
              <img
                src="assets/img/messages-3.jpg"
                alt=""
                className="rounded-circle"
              />
              <div>
                <h4>David Muldon</h4>
                <p>
                  Velit asperiores et ducimus soluta repudiandae labore officia
                  est ut...
                </p>
                <p>8 hrs. ago</p>
              </div>
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li className="dropdown-footer">
            <Link href="#">Show all messages</Link>
          </li>
        </ul>
        {/* End Messages Dropdown Items */}
      </li>
      {/* End Messages Nav */}
      <li className="nav-item dropdown pe-3">
        <Link
          className="nav-link nav-profile d-flex align-items-center pe-0"
          href="#"
          data-bs-toggle="dropdown"
        >
          <img
            src="assets/img/profile-img.jpg"
            alt="Profile"
            className="rounded-circle"
          />
          <span className="d-none d-md-block dropdown-toggle ps-2">
            K. Anderson
          </span>
        </Link>
        {/* End Profile Iamge Icon */}
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Kevin Anderson</h6>
            <span>Web Designer</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="users-profile.html"
            >
              <i className="bi bi-person" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="users-profile.html"
            >
              <i className="bi bi-gear" />
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a
              className="dropdown-item d-flex align-items-center"
              href="pages-faq.html"
            >
              <i className="bi bi-question-circle" />
              <span>Need Help?</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item d-flex align-items-center" href="#">
              <i className="bi bi-box-arrow-right" />
              <span>Sign Out</span>
            </Link>
          </li>
        </ul>
        {/* End Profile Dropdown Items */}
      </li>
      {/* End Profile Nav */}
    </ul>
  </nav>
  {/* End Icons Navigation */}
</header>

  {/* ======= Sidebar ======= */}
  <aside id="sidebar" className="sidebar">
    <ul className="sidebar-nav" id="sidebar-nav">
      <li className="nav-item">
        <a className="nav-link " href="index.html">
          <i className="bi bi-grid" />
          <span>Dashboard</span>
        </a>
      </li>
      {/* End Dashboard Nav */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#components-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-person" />
          <span>Student</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="components-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="components-alerts.html">
              <i className="bi bi-circle" />
              <span>Add Student</span>
            </a>
          </li>
          <li>
            <a href="components-accordion.html">
              <i className="bi bi-circle" />
              <span>Manage Student</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Components Nav */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#forms-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-journal-text" />
          <span>Forms</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="forms-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="forms-elements.html">
              <i className="bi bi-circle" />
              <span>Form Elements</span>
            </a>
          </li>
          <li>
            <a href="forms-layouts.html">
              <i className="bi bi-circle" />
              <span>Form Layouts</span>
            </a>
          </li>
          <li>
            <a href="forms-editors.html">
              <i className="bi bi-circle" />
              <span>Form Editors</span>
            </a>
          </li>
          <li>
            <a href="forms-validation.html">
              <i className="bi bi-circle" />
              <span>Form Validation</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Forms Nav */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#tables-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-layout-text-window-reverse" />
          <span>Tables</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="tables-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="tables-general.html">
              <i className="bi bi-circle" />
              <span>General Tables</span>
            </a>
          </li>
          <li>
            <a href="tables-data.html">
              <i className="bi bi-circle" />
              <span>Data Tables</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Tables Nav */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#charts-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-bar-chart" />
          <span>Charts</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="charts-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="charts-chartjs.html">
              <i className="bi bi-circle" />
              <span>Chart.js</span>
            </a>
          </li>
          <li>
            <a href="charts-apexcharts.html">
              <i className="bi bi-circle" />
              <span>ApexCharts</span>
            </a>
          </li>
          <li>
            <a href="charts-echarts.html">
              <i className="bi bi-circle" />
              <span>ECharts</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Charts Nav */}
      <li className="nav-item">
        <Link
          className="nav-link collapsed"
          data-bs-target="#icons-nav"
          data-bs-toggle="collapse"
          href="#"
        >
          <i className="bi bi-gem" />
          <span>Icons</span>
          <i className="bi bi-chevron-down ms-auto" />
        </Link>
        <ul
          id="icons-nav"
          className="nav-content collapse "
          data-bs-parent="#sidebar-nav"
        >
          <li>
            <a href="icons-bootstrap.html">
              <i className="bi bi-circle" />
              <span>Bootstrap Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-remix.html">
              <i className="bi bi-circle" />
              <span>Remix Icons</span>
            </a>
          </li>
          <li>
            <a href="icons-boxicons.html">
              <i className="bi bi-circle" />
              <span>Boxicons</span>
            </a>
          </li>
        </ul>
      </li>
      {/* End Icons Nav */}
      <li className="nav-heading">Pages</li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="users-profile.html">
          <i className="bi bi-person" />
          <span>Profile</span>
        </a>
      </li>
      {/* End Profile Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle" />
          <span>F.A.Q</span>
        </a>
      </li>
      {/* End F.A.Q Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope" />
          <span>Contact</span>
        </a>
      </li>
      {/* End Contact Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-register.html">
          <i className="bi bi-card-list" />
          <span>Register</span>
        </a>
      </li>
      {/* End Register Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right" />
          <span>Login</span>
        </a>
      </li>
      {/* End Login Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-error-404.html">
          <i className="bi bi-dash-circle" />
          <span>Error 404</span>
        </a>
      </li>
      {/* End Error 404 Page Nav */}
      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-blank.html">
          <i className="bi bi-file-earmark" />
          <span>Blank</span>
        </a>
      </li>
      {/* End Blank Page Nav */}
    </ul>
  </aside>
    </>
  )
}

export default Headermain