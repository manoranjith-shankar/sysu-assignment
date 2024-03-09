
import Navbar from "./Navbar"
import Popular from "./Popular"
import Story from "./Story"
import MyRouts from "./routes/routes"
import { Toaster } from 'react-hot-toast';

function App(){
  return (
    <div className="box-border">
      <MyRouts />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default App



