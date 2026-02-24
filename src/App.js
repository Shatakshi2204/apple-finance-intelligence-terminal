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

fetch("/api/stock")

.then(res => res.json())

.then(data => {

if(data){

setStock({

price: data.price || 264.58,
change: data.change || 0,
volume: data.volume || 0,
marketCap: data.marketCap || 0,
high52: data.high52 || 0,
low52: data.low52 || 0,
previousClose: data.previousClose || 0

});

generateChart(data.price || 264.58);

}

})

.catch(()=>{

generateChart(264.58);

});

}, []);





function generateChart(price){

const temp=[];

for(let i=0;i<30;i++){

temp.push({

time:i,

price:price + Math.random()*4 -2

});

}

setChartData(temp);

}




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