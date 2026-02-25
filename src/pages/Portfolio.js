import { useState } from "react";

function Portfolio({ stock }) {

const [portfolio, setPortfolio] = useState([
{ symbol: "AAPL", shares: 10, cost: 180 }
]);

const currentPrice = stock.price;

const totalInvested = portfolio.reduce(
(sum, item) => sum + item.shares * item.cost, 0
);

const totalCurrent = portfolio.reduce(
(sum, item) => sum + item.shares * currentPrice, 0
);

const totalProfit = totalCurrent - totalInvested;

const totalReturn = (totalProfit / totalInvested) * 100;

function updateShares(index, value){

const newPortfolio = [...portfolio];

newPortfolio[index].shares = value;

setPortfolio(newPortfolio);

}

return (

<div className="page">

<div className="card">

<div className="card-title">

Portfolio Manager

</div>


<table className="portfolio-table">

<thead>

<tr>

<th>Symbol</th>

<th>Shares</th>

<th>Cost</th>

<th>Value</th>

<th>P/L</th>

</tr>

</thead>


<tbody>

{portfolio.map((item, index)=>{

const value = item.shares * currentPrice;

const profit = value - (item.shares * item.cost);

return (

<tr key={index}>

<td>{item.symbol}</td>

<td>

<input

value={item.shares}

onChange={(e)=>updateShares(index, e.target.value)}

className="portfolio-input"

/>

</td>

<td>${item.cost}</td>

<td>${value.toFixed(2)}</td>

<td style={{color: profit>=0 ? "#00ffaa" : "#ff4d4d"}}>

${profit.toFixed(2)}

</td>

</tr>

);

})}

</tbody>

</table>


<div className="portfolio-summary">

<div>

Invested: ${totalInvested.toFixed(2)}

</div>

<div>

Current: ${totalCurrent.toFixed(2)}

</div>

<div style={{color: totalProfit>=0 ? "#00ffaa" : "#ff4d4d"}}>

Profit: ${totalProfit.toFixed(2)}

</div>

<div style={{color: totalProfit>=0 ? "#00ffaa" : "#ff4d4d"}}>

Return: {totalReturn.toFixed(2)}%

</div>

</div>

</div>

</div>

);

}

export default Portfolio;
