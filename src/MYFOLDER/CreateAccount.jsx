
import { useRef, useState } from 'react'
import '../styles/FORGOT.css'


const CreateAccount = ({BACK1}) => {


const Firstname = useRef();
const Lastname = useRef();
const Email = useRef();
const Username = useRef();
const Password = useRef();
const Retype = useRef();



const [Fname,setname] = useState("");
const [Lname,setLname] = useState("");
const [Emails,setEmail] = useState("");
const [Usernames,setUsername] = useState("");
const [Passwords,setPassword] = useState("");
const [Retypes, setRetype] = useState("");


const [Fname1,setname1] = useState([]);
const [Lname1,setLame1] = useState([]);
const [Email1,setEmail1] = useState([]);
const [Username1,setUsername1] = useState([]);
const [Password1,setPassword1] = useState([]);
const [Retype1, setRetype1] = useState([]);







  return (
   <>
   

   <div className="Pcreations">

<div className="Ccreations">


    <div className='bibi'>
        <h1>Sign Up</h1>
        <p>Enter your account setails below:</p>
    </div>



<form >

<div className='selects'>
<select name="selects" id="selecta">
<option value="Student">Student</option>
<option value="parent">Parent/Guardians</option>
<option value="Faculty">Faculty</option>
</select>

</div>

<div className='names'>
    <input type="text" placeholder="Lastname"  id="lastname"  value={Lname}  ref={Lastname}  onChange={()=> setLname(Lastname.current.value)}  />
    <input type="text" placeholder="First Name"  id="firstname" value={Fname} ref={Firstname} onChange={()=> setname(Firstname.current.value)}  />
</div>


<div className='Emai'>
    <input type="email" placeholder="Email"  id='Emails' ref={Email}  value={Emails} onChange={()=> setEmail(Email.current.value)}    />
</div>

<div className='Us'>
    <input type="text" placeholder="Username"  id='Users' ref={Username}  value ={Usernames} onChange={() => setUsername(Username.current.value)}  />
</div>

<div className='pas'>
    <input type="password"placeholder="password" id="Pass"  ref={Password} value={Passwords} onChange={()=> setPassword(Password.current.value)} />
</div>

<div className='RE'>
<input type="text" placeholder="Re-type your password" id="retype" ref={Retype}  value={Retypes} onChange={() => setRetype(Retype.current.value)}  />
</div>

<div className='CHECKS'>
    <input type="checkbox"     />
    <span> agree to the Terms of Service</span>
  
  <div className='ONE'>
  <input type="checkbox"     />
    <span>I agree to the Data Privacy Policy</span>
  </div>
  
</div>

<div className="BTN1">

   <button>Back</button>
   <span id='BBS'><button>Sign Up</button></span>
</div>



</form>







    </div>

   </div>
   
   
   
   </>
  )
}

export default CreateAccount