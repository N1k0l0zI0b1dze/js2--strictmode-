import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import img1 from './assets/path.png'
import img2 from './assets/img2.png'
import './App.css'

function App() {

  const [isubmited, setIsSubmited] = useState(false)

  // console.log(isubmited)

  // const handleToggle = () => {
  //   setToggle(true)
  // }

  return (
    <>
      {!isubmited &&
        <div className='container_1'>
          <div className='img_div'>
            <img src={img1} alt="" />
          </div>
          <div className="txts">
            <h1 className='heading_txt'>How did we do?</h1>
            <p className='paragraph_txt'>Please let us know how we did with your support request.
              All feedback is appreciated
              to help us improve our offering!
            </p>
          </div>
          <div className='numbers'>
            <Number number={1} />
            <Number number={2} />
            <Number number={3} />
            <Number number={4} />
            <Number number={5} />
          </div>
          <button onClick={setIsSubmited} className='button_1'>submit</button>
        </div>
      }
      {isubmited && <ThankYou />}

    </>
  )
}

export default App

function Number({ number }) {
  return (
    <div className='numer_div'>{number}</div>
  )
}

function ThankYou() {
  return (
    <div className="container2">
      <img src={img2} alt="" />
      <h3 className='cont2_h3'>You selected 4 out of 5</h3>
    </div>
  )
}
