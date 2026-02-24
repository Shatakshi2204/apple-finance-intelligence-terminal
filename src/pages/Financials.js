import {

ResponsiveContainer,
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
CartesianGrid

} from "recharts";

import "../index.css";


function Financials() {


const data = [

{ year: "2019", revenue: 260, profit: 55 },

{ year: "2020", revenue: 274, profit: 57 },

{ year: "2021", revenue: 365, profit: 94 },

{ year: "2022", revenue: 394, profit: 99 },

{ year: "2023", revenue: 383, profit: 97 },

{ year: "2024", revenue: 402, profit: 104 }

];


return (

<div className="page">


<div className="chart-box">

<div className="chart-title">

Revenue Trend (Billions USD)

</div>


<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<CartesianGrid stroke="#222"/>

<XAxis dataKey="year" stroke="#888"/>

<YAxis stroke="#888"/>

<Tooltip/>


<Line

type="monotone"

dataKey="revenue"

stroke="#00ffa3"

strokeWidth={3}

/>


</LineChart>

</ResponsiveContainer>

</div>



<div className="chart-box">

<div className="chart-title">

Profit Trend (Billions USD)

</div>


<ResponsiveContainer width="100%" height={300}>

<LineChart data={data}>

<CartesianGrid stroke="#222"/>

<XAxis dataKey="year" stroke="#888"/>

<YAxis stroke="#888"/>

<Tooltip/>


<Line

type="monotone"

dataKey="profit"

stroke="#0071e3"

strokeWidth={3}

/>


</LineChart>

</ResponsiveContainer>

</div>


</div>

);

}


export default Financials; 