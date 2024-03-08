import toast from 'react-hot-toast';

function Test(){
  return (
    <div className="">
        <p className="text-center text-xl font-extralight">
            test route
        </p>
        <button onClick={() => toast('This is a toast')}>Render my toast</button>
    </div>
  )
}

export default Test