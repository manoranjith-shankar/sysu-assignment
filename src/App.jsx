import MyRouts from "./routes/routes"
import { Toaster } from 'react-hot-toast';
import { inject } from '@vercel/analytics';
 
inject();

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



