import Image from "next/image"
import Link from "next/link"
import Main_container from "../components/Main_container"
import Search_bar from "../components/Search_bar"
import Employee from "../components/Employee"
import Call_to_action from "../lib-test/Call_to_action"
const Property_agents = () => {
  return (
    //     <!-- Header Start -->
    <Main_container>
      <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 p-5 mt-lg-5">
            <h1 className="display-5 animated fadeIn mb-4">Property agnets</h1>
            <nav aria-label="breadcrumb animated fadeIn">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="#">Pages</Link>
                </li>
                <li
                  className="breadcrumb-item text-body active"
                  aria-current="page">
                  Property agents
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-6 animated fadeIn">
            <Image
              className="img-fluid"
              width={1000}
              height={600}
              src="/img/header.jpg"
              alt="header"
            />
          </div>
        </div>
      </div>
      <Search_bar />
      <Employee />
      <Call_to_action />
    </Main_container>
  )
}

export default Property_agents
