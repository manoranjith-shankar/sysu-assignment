
import Navbar from "../Navbar"
import Popular from "../Popular"
import Story from "../Story"
import MyRouts from "../routes/routes"

function Home(){
  return (
    <div className="header">
      <Navbar />
        <Popular />
    </div>
  )
}

export default Home