// components/NavBar.js
import Link from "next/link"
import React from "react"

const NavBar = () => {
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center text-center">
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="img/icon-deal.png"
              alt="Icon"
              style={{width: "30px", height: "30px"}}
            />
          </div>
          <h1 className="m-0 text-primary">Makaan</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link href="/" className="nav-item nav-link active">
              الرئيسية
            </Link>
            <Link href="/about" className="nav-item nav-link">
              حول
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown">
                العقار
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link href="/property-list" className="dropdown-item">
                  Property List
                </Link>
                <Link href="/property-types" className="dropdown-item">
                  قائمة العقارات
                </Link>
                <Link href="/property-agents" className="dropdown-item">
                  Property Agent
                </Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown">
                Pages
              </Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link href="/testimonial" className="dropdown-item">
                  Testimonial
                </Link>
              </div>
            </div>
            <Link href="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link href="" className="btn btn-primary px-3 d-none d-lg-flex">
            Add Property
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
