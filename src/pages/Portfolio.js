import { useState } from "react";


function Portfolio({ stock }){


const [amount,setAmount]=useState(10000);


const shares = stock?.price
? amount / stock.price
: 0;


const futurePrice = stock?.price
? stock.price * 1.12
: 0;


const futureValue = shares * futurePrice;


const profit = futureValue - amount;



return(

<div className="page-container">


<div className="page-title">

Portfolio Simulator

</div>


<div className="valuation-card">


<div className="valuation-input-group">


<label>

Investment Amount ($)

</label>


<input

type="number"

value={amount}

onChange={(e)=>setAmount(e.target.value)}

className="valuation-input"

/>


</div>



<div className="valuation-results">



<div className="valuation-box">

<div className="valuation-label">

Shares Owned

</div>

<div className="valuation-value">

{shares.toFixed(2)}

</div>

</div>



<div className="valuation-box">

<div className="valuation-label">

Future Value

</div>

<div className="valuation-value">

${futureValue.toFixed(2)}

</div>

</div>



<div className="valuation-box">

<div className="valuation-label">

Profit

</div>

<div className="valuation-value">

${profit.toFixed(2)}

</div>

</div>



</div>



</div>



</div>

);

}


export default Portfolio; 