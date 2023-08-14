import { useRef, useState } from 'react';
import './BULSU.css';
import {AiFillLock,AiFillHome,AiOutlineArrowRight} from 'react-icons/ai';



const Mains = ({FORGOT,CREATE,ACTIVATE}) => {


const username = useRef();
const password = useRef();

const [user,setuser] = useState("");
const [Pass,setpass] = useState("");



  const [wrong,setwrong] = useState("");


  let login = (e) =>
  {

    e.preventDefault();
    if(user === "" || Pass ===""){
      setwrong("Fill up The form please?")
    }else{
      setwrong("")
    }


  }

  return (
<>


<div className="Parent">
<div className="Child">
   <div className='text'>
    <h1>Login to your account</h1>
    {wrong ? <h6 style={{color:"red"}}>{wrong}</h6> : null}
   </div>

<form onSubmit={login}>

<div className='Email'>
<span><AiFillHome id="home"/></span>
  <input type="text" placeholder='Email' id="username" value={user} ref={username} onChange={()=> setuser(username.current.value) }/>
</div>



<div className='Password'>
<span><AiFillLock id="lock"/></span>
  <input type="Password" placeholder='Password' id='password' value={Pass} ref={password} onChange={()=>setpass(password.current.value)} />
</div>



<div className='UNDER'>
  <input type="checkbox" /> 
  <span id='Remember'>Remember me</span>
  <span id="buttons"><button id="BTN" type='submit'>Log in</button></span>
  <span><AiOutlineArrowRight id='arrow'/></span>
</div>

</form>

<div className='middle'>

  <div>
    <h2>Forgot your password?</h2>
  </div>

  <div className='TT'>
    <p>no worries, <span id="LINK" onClick={()=>FORGOT()}>Please click here</span> to reset your
    <br />
    <span>password.</span>
     </p>
  </div>

</div>


<div className='foot'>

<div>
  <p>Don't have account yet?</p>
</div>

<div className='CREATE' onClick={()=> CREATE()}>
  <p>Create an Account (old student, parent or faculty)</p>
</div>

<div>
  <p>Existing account but not yet <span id="LINK2" onClick={()=> ACTIVATE()}>Activated?</span></p>
</div>


</div>

</div>

<div className='JOJO1'>
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

export default Mains