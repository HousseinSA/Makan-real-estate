import Footer from "./Footer"
import NavBar from "../components/navbar"

const Main_container = ({children}) => {
  return (
    <div className="container-xxl bg-white p-0">
      <NavBar />
      {/* <!-- Spinner Start --> */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div
          className="spinner-border text-primary"
          style={{width: "3rem", height: "3rem"}}
          role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <!-- Spinner End --> */}
      {children}
      <Footer />
    </div>
  )
}

export default Main_container
