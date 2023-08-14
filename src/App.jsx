

import ACTIVATED from './MYFOLDER/ACTIVATED';
import CLICK from './MYFOLDER/CLICK'
import CreateAccount from './MYFOLDER/CreateAccount';
import Main from './MYFOLDER/Mains'

import { useState } from 'react'



function App() {

  const [forgot,setforgot] = useState("Mains");




  let FORGOT = () =>{
    setforgot("FORGOT");
}


let CREATE = () =>{
   setforgot("CREATE")
}

let BACK1 = () =>{
  setforgot("Mains")
}

let BACK = () =>{
  setforgot("Mains");
}

let BACK2 = () =>{
  setforgot("Mains")
}

let ACTIVATE = () =>{
  setforgot("AC");
}


 

  return (
    <>





{forgot === 'Mains' &&

<div className='Mains'>
<Main FORGOT={FORGOT} CREATE={CREATE} ACTIVATE={ACTIVATE}  />
  
</div>

}


{forgot === 'FORGOT' && 

<div className='FORGOT'>
<CLICK  BACK={BACK}  />
</div>

}

{forgot === 'CREATE' &&

<div className='CREATE'>
  <CreateAccount BACK1 = {BACK1} />
</div>

}



{forgot === 'AC' &&


<div className='AC'>

<ACTIVATED  BACK2={BACK2} /></div>


}







    </>
  )
}

export default App
