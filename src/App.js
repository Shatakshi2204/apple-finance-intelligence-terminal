import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";

import { useState, useEffect } from "react";

import Overview from "./pages/Overview";
import Financials from "./pages/Financials";
import Risk from "./pages/Risk";
import Insights from "./pages/Insights";
import Reports from "./pages/Reports";
import Valuation from "./pages/Valuation";
import Portfolio from "./pages/Portfolio";

import "./index.css";


function App() {


const [stock, setStock] = useState({
price: 264.58,
change: 0,
volume: 0,
marketCap: 0,
high52: 0,
low52: 0,
previousClose: 0
});


const [chartData, setChartData] = useState([]);

const [page, setPage] = useState("Overview");



useEffect(() => {

async function fetchData(){

try{

const quote = await fetch(
"https://finnhub.io/api/v1/quote?symbol=AAPL&token=d6etmj1r01qvn4o11jp0d6etmj1r01qvn4o11jpg"
).then(res=>res.json());

const profile = await fetch(
"https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=d6etmj1r01qvn4o11jp0d6etmj1r01qvn4o11jpg"
).then(res=>res.json());


setStock({

price: quote.c,

change: quote.dp,

high: quote.h,

low: quote.l,

previousClose: quote.pc,

volume: profile.metric["10DayAverageTradingVolume"],

week52High: profile.metric["52WeekHigh"],

week52Low: profile.metric["52WeekLow"]

});

generateChart(quote.c);

}
catch{

generateChart(stock.price);

}

}

fetchData();

}, []); 



function renderPage(){

if(page==="Overview") return <Overview stock={stock}/>;

if(page==="Financials") return <Financials stock={stock}/>;

if(page==="Risk") return <Risk stock={stock}/>;

if(page==="Insights") return <Insights stock={stock}/>;

if(page==="Valuation") return <Valuation stock={stock}/>;

if(page==="Portfolio") return <Portfolio stock={stock}/>;

if(page==="Reports") return <Reports stock={stock}/>;

}




return(

<div>


<nav className="nav">


<div className="nav-logo">

AAPL Intelligence

</div>



<div className="nav-links">

<span onClick={()=>setPage("Overview")}>Overview</span>

<span onClick={()=>setPage("Financials")}>Financials</span>

<span onClick={()=>setPage("Risk")}>Risk</span>

<span onClick={()=>setPage("Insights")}>Insights</span>

<span onClick={()=>setPage("Valuation")}>Valuation</span>

<span onClick={()=>setPage("Portfolio")}>Portfolio</span>

<span onClick={()=>setPage("Reports")}>Reports</span>

</div>


</nav>




<div className="hero">


<div className="hero-title">

Apple Financial Intelligence Terminal

</div>



<div className="hero-price">

${stock.price.toFixed(2)}

<span className="hero-live">

LIVE

</span>

</div>


<div style={{

display:"flex",

gap:"40px",

marginTop:"20px",

color:"#86868b",

fontSize:"14px"

}}>

<div>

Volume: {stock.volume ? stock.volume.toLocaleString() : "-"}

</div>

<div>

Day High: {stock.high ? stock.high.toFixed(2) : "-"}

</div>

<div>

Day Low: {stock.low ? stock.low.toFixed(2) : "-"}

</div>

<div>

Prev Close: {stock.previousClose ? stock.previousClose.toFixed(2) : "-"}

</div>

</div>
  
</div>


<div className="metrics-container">

<div className="metric-card">

<div className="metric-label">Volume</div>

<div className="metric-value">

{stock.volume ? stock.volume.toLocaleString() : "--"}

</div>

</div>


<div className="metric-card">

<div className="metric-label">Day High</div>

<div className="metric-value">

{stock.high ? stock.high.toFixed(2) : "--"}

</div>

</div>


<div className="metric-card">

<div className="metric-label">Day Low</div>

<div className="metric-value">

{stock.low ? stock.low.toFixed(2) : "--"}

</div>

</div>


<div className="metric-card">

<div className="metric-label">Previous Close</div>

<div className="metric-value">

{stock.previousClose ? stock.previousClose.toFixed(2) : "--"}

</div>

</div>


</div>
  

<div className="chart-box">


<div className="chart-title">

Live Price Chart

</div>


<ResponsiveContainer width="100%" height={300}>


<LineChart data={chartData}>


<CartesianGrid stroke="#222"/>


<XAxis dataKey="time" stroke="#666"/>


<YAxis stroke="#666"/>


<Tooltip/>


<Line

type="monotone"

dataKey="price"

stroke="#00ffaa"

strokeWidth={2}

dot={false}

/>


</LineChart>


</ResponsiveContainer>


</div>



{renderPage()}


</div>

);

}


export default App;
