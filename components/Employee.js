import Image from "next/image"
import Link from "next/link"
const Employee = () => {
  return (
    // <!-- Team Start -->
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{maxWidth: "600px"}}>
          <h1 className="mb-3">Property Agents</h1>
          <p>
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
            lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum
            vero dolor duo.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <Image
                  className="img-fluid"
                  src="/img/team-1.jpg"
                  alt=""
                  width={500}
                  height={200}
                />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <Image
                  className="img-fluid"
                  src="/img/team-2.jpg"
                  alt=""
                  width={500}
                  height={200}
                />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <Image
                  className="img-fluid"
                  src="/img/team-3.jpg"
                  alt=""
                  width={500}
                  height={200}
                />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item rounded overflow-hidden">
              <div className="position-relative">
                <Image
                  className="img-fluid"
                  src="/img/team-4.jpg"
                  width={500}
                  height={200}
                  alt=""
                />
                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
              <div className="text-center p-4 mt-3">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- Team End --> //
  )
}

export default Employee
