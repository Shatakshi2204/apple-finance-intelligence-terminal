import { useState } from "react";

function Landing({enter}){

return(

<div style={{

height:"100vh",

display:"flex",

flexDirection:"column",

justifyContent:"center",

alignItems:"center",

background:"#000"

}}>

<div className="apple-gradient"

style={{

fontSize:"60px",

marginBottom:"20px"

}}>

Apple Intelligence

</div>


<div style={{

color:"#888",

marginBottom:"40px"

}}>

Executive-level financial intelligence platform

</div>


<button

onClick={enter}

className="glass smooth"

style={{

padding:"15px 40px",

color:"#fff",

cursor:"pointer"

}}>

Enter

</button>

</div>

);

}

export default Landing;
