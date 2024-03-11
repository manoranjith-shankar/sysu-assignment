import MyRouts from "./routes/routes"
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"

function App(){
  return (
    <div className="box-border">
      <MyRouts />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Analytics />
    </div>
  )
}

export default App



