

import { useRef, useState } from 'react';
import '../styles/ACTIVE.css'



const ACTIVATED = ({BACK2}) => {

    const inso = useRef();

const [ye,setye] = useState("");

const [errors,seterrors] = useState("")


let click = (e) =>{
e.preventDefault();
    if(ye === ""){
seterrors("need to fill up or wrong")
    }else{
        seterrors("")
    }

}


  return (
<>

<div className='ACT1'>

<div className='ACT2'>

    <div>
        <h1>Re-send Activation Code?</h1>
        <p>Enter your e-mail address below to resend activation code</p>
    </div>


    <form onSubmit={click}>
        <div className='INSO'>
            <input type="text" placeholder='Email' id="EM"  
            ref={inso}  onChange={()=> setye(inso.current.value)}    />
        </div>

        {errors ? <p style={{color:"red"}}>{errors}</p>: null}

  <div className='BTN2'>
    <button onClick={()=> BACK2()}>Back</button>
    <span>
    <button type='submit'>send</button>
    </span>
 
  </div>


    </form>

</div>

</div>






</>
  )
}

export default ACTIVATED