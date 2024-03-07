import React, { useState } from "react";
import "../css/sidebar.css";
import "../css/home.css"

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar open/close state

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className={`sidebar ${sidebarOpen ? "open" : "close"} shadow p-3 mb-5 bg-white rounded`}>
      {/* Sidebar content goes here */}
      <div>
        <header className="">
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>
            <div className="text logo-text">
              <span className="sidebar-title text-uppercase text-truncate app-brand-text demo menu-text fw-bold ms-2">
                BigHut
              </span>
            </div>
          </div>
          <i className="bx bx-chevron-right toggle" onClick={toggleSidebar} />
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li>
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2">
                  <i className="menu-icon tf-icons bx bx-home-circle" />
                  <div className="text-truncate ml-3" data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Home
                  </div>
                </a>
              </li>

              <li className="nav-link">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                    <i className="menu-icon tf-icons bx bx-book" ></i>
                    <div className="text-truncate ml-3" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                      Subject 1
                      <i />
                    </div>
                  </div>
                </div>
              </li>

              <div>
                <ul
                  className="btn-toggle-nav list-unstyled fw-normal pb-1 small"
                  style={{ marginBottom: "10px" }}
                ></ul>
              </div>

              <li className="nav-link">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                    <i className="menu-icon tf-icons bx bx-book"></i>
                    <div className="text-truncate ml-3" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                      Subject 2
                    </div>
                  </div>
                </div>
              </li>

              <div>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
              </div>

              <li className="nav-link">
                <div>
                  <div className="d-inline-flex align-items-center d-flex p-2">
                    <i class="menu-icon tf-icons bx bx-book"></i>{" "}
                    <div className="text-truncate ml-3" data-i18n="Employee" style={{paddingLeft:"12px"}}>
                      Subject 3
                    </div>
                  </div>
                </div>
              </li>

              <div>
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small"></ul>
              </div>

              <li>
                <a className="d-inline-flex align-items-center rounded border-0 collapsed d-flex p-2 ">
                  <i class="bx bx-book me-2"></i>
                  <div className="text-truncate ml-3 " data-i18n="Dashboard" style={{paddingLeft:"12px"}}>
                    Subject 4
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
