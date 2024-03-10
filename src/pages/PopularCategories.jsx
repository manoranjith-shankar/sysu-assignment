
import Navbar from "../Navbar"
import Popular from "../Popular"
import StoriesOfPopCategory from "../StoriesOfPopCategory"

function PopularCategories({ category }){
  return (
    <div className="header">
      <Navbar />
      <Popular />
      <StoriesOfPopCategory />
    </div>
  )
}

export default PopularCategories