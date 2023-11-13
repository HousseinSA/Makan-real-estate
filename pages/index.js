import Header_content from "../components/Header-content"
import Main_container from "../components/Main_container"
import Search_bar from "../components/Search_bar"
import Category from "../components/Category"
import About from "../components/About"
import Property_list from "../components/Property_component/Property_list"
import Call_to_action from "../lib-test/Call_to_action"
import Employee from "../components/Employee"
import Testimonials from "../components/Testimonials"

const Homepage = () => {
  return (
    <Main_container>

      <Header_content />
      <Search_bar />
      <Category />
      <About />
      <Property_list />
      <Call_to_action />
      <Employee />
      <Testimonials />
    </Main_container>
  )
}

export default Homepage
