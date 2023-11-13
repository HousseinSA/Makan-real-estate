import Image from "next/image"
import dynamic from "next/dynamic"
import Link from "next/link"
import {useEffect} from "react"
const Header_content = () => {
  // const noSSR = dynamic(()=>{})
  useEffect(() => {}, [])
  return (
    <div
      style={{marginTop: "2rem"}}
      className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-primary">Perfect Home</span> To Live
            With Your Family
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
            Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
          </p>
          <Link
            href="#"
            className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </Link>
        </div>
        <div className="col-md-6 animated fadeIn">
          {/* header-carousel belong in the div */}
          {/* <div className="owl-carousel "> */}
          <div className="owl-carousel-item">
            <Image
              src={"/img/carousel-1.jpg"}
              className="img-fluid"
              width={1000}
              height={600}
            />
          </div>
          {/* <div className="owl-carousel-item">
            <Image
              className="img-fluid"
              src={"/img/carousel-2.jpg"}
              width={1000}
              height={600}
              layout="responsive"
            />
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Header_content
