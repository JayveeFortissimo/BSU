
import {AiFillMail,AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import '../styles/FORGOT.css'
import { useRef, useState } from 'react'





const CLICK = ({BACK}) => {


        const input = useRef();

        const [setie,setTI] = useState("");
        const [LIST,setList] = useState([]);


        const [Error,setError] = useState('')

let inputs = (e) =>{
e.preventDefault();
if(setie){
    setList([...LIST,setie]);
}



if(setie ===  ""){
   setError("Need to fill up")
}else{
    setError("")
}



}



  return (
    <>
    
   <div className="FORGOT">
    
    <div className="FOFO">

    <div className='FOR'>
        <h1>Forgot your password?</h1>
    </div>

    <div className='HII'>
        <p>Enter your e-mail address below to reset your password.
           
             </p>
    </div>

    <div>
        <form onClick={inputs}>

       <div>
        {Error ? <p style={{color:"red"}}>{Error}</p> : null}
        <span><AiFillMail id="mail"/></span>
        <input type="email" placeholder="Email"  id="ESS" ref={input} value={setie} onChange={()=> setTI(input.current.value) }/>
       </div>

       <div>
        <span><AiOutlineArrowLeft id="LL"/></span>
        <button id="back1" onClick={()=>BACK()}>Back</button>

        <button id="back2"type='submit'>Submit</button>
        <span><AiOutlineArrowRight id='RR'/></span>
       </div>

        </form>
    </div>

    </div>

    <div className='JOJO'>
        <dt>Choose Language</dt>
        <span><select name="Language" id="">
            <option value="English">English</option>
            <option value="Chinese">ni hou</option>
            
            
            </select></span>
    </div>

    <div>
        <h4>Powered by: Prince Technologies Corporation</h4>
    </div>
    

   </div>

 
    
    
    </>
  )
}

export default CLICK