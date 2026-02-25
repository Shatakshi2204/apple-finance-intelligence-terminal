import { useState } from "react";

function Portfolio({ stock }) {

const [shares, setShares] = useState(10);

const costPrice = 180;

const currentValue = shares * stock.price;

const investedValue = shares * costPrice;

const profit = currentValue - investedValue;

const returnPercent = (profit / investedValue) * 100;

return (

<div className="page">

<div className="card">

<div className="card-title">

Portfolio Tracker

</div>


<div className="portfolio-grid">

<div className="metric">

<span>Shares Owned</span>

<input

value={shares}

onChange={(e)=>setShares(e.target.value)}

className="portfolio-input"

/>

</div>


<div className="metric">

<span>Invested Value</span>

<b>

${investedValue.toFixed(2)}

</b>

</div>


<div className="metric">

<span>Current Value</span>

<b>

${currentValue.toFixed(2)}

</b>

</div>


<div className="metric">

<span>Profit / Loss</span>

<b style={{color: profit>=0 ? "#00ffaa" : "#ff4d4d"}}>

${profit.toFixed(2)}

</b>

</div>


<div className="metric">

<span>Return %</span>

<b style={{color: profit>=0 ? "#00ffaa" : "#ff4d4d"}}>

{returnPercent.toFixed(2)}%

</b>

</div>

</div>

</div>

</div>

);

}

export default Portfolio;
