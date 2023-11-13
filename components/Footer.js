import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  return (
    // <!-- Footer Start -->
    <>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Get In Touch</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, New
                York, USA
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+41401147
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>nejihoussein1@gmail.com
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" href="/about">
                About Us
              </Link>
              <Link className="btn btn-link text-white-50" href="">
                Contact Us
              </Link>
              <Link className="btn btn-link text-white-50" href="">
                Our Services
              </Link>
              <Link className="btn btn-link text-white-50" href="">
                Privacy Policy
              </Link>
              <Link className="btn btn-link text-white-50" href="">
                Terms & Condition
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Photo Gallery</h5>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-2.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-3.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-4.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-5.jpg"
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <Image
                    width={200}
                    height={200}
                    className="img-fluid rounded bg-light p-1"
                    src="/img/property-6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{maxWidth: "400px"}}>
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" href="#">
                  Makan
                </Link>
                , All Right Reserved. Designed By
                <Link
                  className="border-bottom"
                  href="https://google.com/houssein sedoum">
                  Hussein
                </Link>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link href="">Home</Link>
                  <Link href="">Cookies</Link>
                  <Link href="">Help</Link>
                  <Link href="">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  )
}

export default Footer
