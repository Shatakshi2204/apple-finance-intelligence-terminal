import { useState } from "react";

function Valuation({ stock }) {

const [growth,setGrowth]=useState(8);

const [discount,setDiscount]=useState(10);


if(!stock){

return <div className="card">Loading...</div>

}


const fcf = stock.marketCap * 0.04;


const intrinsicValue =

fcf *

(1+growth/100) /

(discount/100-growth/100);


const fairPrice = intrinsicValue / 15000000000;


const upside =

((fairPrice-stock.price)/stock.price*100);


return(

<div className="page-container">

<div className="page-title">

DCF Valuation Model

</div>


<div className="valuation-card">


<div className="valuation-input-group">

<label>Growth Rate %</label>

<input
type="number"
value={growth}
onChange={(e)=>setGrowth(e.target.value)}
className="valuation-input"
/>

</div>


<div className="valuation-input-group">

<label>Discount Rate %</label>

<input
type="number"
value={discount}
onChange={(e)=>setDiscount(e.target.value)}
className="valuation-input"
/>

</div>



<div className="valuation-results">


<div className="valuation-box">

<div className="valuation-label">

Intrinsic Value

</div>

<div className="valuation-value">

${fairPrice.toFixed(2)}

</div>

</div>



<div className="valuation-box">

<div className="valuation-label">

Current Price

</div>

<div className="valuation-value">

${stock.price.toFixed(2)}

</div>

</div>



<div className="valuation-box">

<div className="valuation-label">

Upside

</div>

<div className="valuation-value">

{upside.toFixed(2)}%

</div>

</div>


</div>



{/* Analyst Recommendation */}


<div className="recommend-box">


<div className="recommend-title">

Analyst Recommendation

</div>


<div className={`recommend-value 
${upside>15?"buy":
upside>0?"hold":"sell"}`}>

{
upside>15
?
"BUY"

:
upside>0
?
"HOLD"

:
"SELL"

}

</div>


</div>



</div>

</div>

)

}

export default Valuation;