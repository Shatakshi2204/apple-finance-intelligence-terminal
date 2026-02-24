import { useState, useRef } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2canvas from "html2canvas";

import {
LineChart,
Line,
XAxis,
YAxis,
Tooltip,
ResponsiveContainer,
CartesianGrid
} from "recharts";

import "../index.css";


function Reports({ stock }) {

const reportRef = useRef();
const chartRef = useRef();

const [report, setReport] = useState(null);



/* GENERATE LIVE REPORT DATA */

const generateReport = () => {

if (!stock) return;

const price = stock.price || 0;
const change = stock.change || 0;
const volume = stock.volume || 0;
const marketCap = stock.marketCap || 0;


/* Recommendation Engine */

let recommendation = "HOLD";
let riskLevel = "Moderate";

if (change > 1) {
recommendation = "BUY";
riskLevel = "Low";
}

if (change < -1) {
recommendation = "SELL";
riskLevel = "High";
}


/* Executive Analysis */

const summary =

`Apple Inc. (AAPL) is currently trading at $${price.toFixed(2)}.

The company maintains a market capitalization of $${(marketCap/1000000000000).toFixed(2)} trillion.

Daily change of ${change.toFixed(2)}% with volume of ${(volume/1000000).toFixed(2)}M shares indicates current institutional activity.

Apple continues to demonstrate strong financial positioning, supported by its ecosystem, services growth, and global brand dominance.`;



/* Chart Data */

const chartData = [];

for (let i = 0; i < 30; i++) {

chartData.push({

day: i + 1,
price: price + Math.random() * 6 - 3

});

}



setReport({

price,
change,
volume,
marketCap,
recommendation,
riskLevel,
summary,
chartData

});

};




/* DOWNLOAD PDF */

const downloadPDF = async () => {

const doc = new jsPDF();

doc.setFontSize(20);
doc.text("Apple Inc. Equity Research Report", 14, 20);


/* Summary */

doc.setFontSize(12);
doc.text(report.summary, 14, 40, { maxWidth: 180 });


/* KPI Table */

autoTable(doc, {

startY: 80,

head: [["Metric", "Value"]],

body: [

["Stock Price", `$${report.price.toFixed(2)}`],

["Market Cap", `$${(report.marketCap/1000000000000).toFixed(2)}T`],

["Daily Change", `${report.change.toFixed(2)}%`],

["Volume", `${(report.volume/1000000).toFixed(2)}M`],

["Risk Level", report.riskLevel],

["Recommendation", report.recommendation]

]

});


/* Capture Chart */

const chartCanvas = await html2canvas(chartRef.current);

const chartImage = chartCanvas.toDataURL("image/png");

doc.addPage();

doc.text("Price Trend Analysis", 14, 20);

doc.addImage(chartImage, "PNG", 15, 30, 180, 100);


/* Final Recommendation */

doc.addPage();

doc.text("Investment Recommendation", 14, 20);

doc.text(

`Based on current financial strength, risk profile, and market momentum, Apple Inc. is rated as:

${report.recommendation}

This recommendation reflects Apple's strong fundamentals, global leadership, and consistent institutional confidence.`,

14,
40,
{ maxWidth: 180 }

);


doc.save("Apple_Equity_Research_Report.pdf");

};



return (

<div className="page">


<h2>Apple Equity Research Terminal</h2>


<button

onClick={generateReport}

className="generate-btn"

>

Generate Institutional Report

</button>



{report && (

<>


<div ref={reportRef} className="card">


<h3>Executive Summary</h3>

<p>{report.summary}</p>


<h3>Recommendation: {report.recommendation}</h3>


</div>



<div

ref={chartRef}

className="chart-box"

>

<h3>Price Trend</h3>


<ResponsiveContainer width="100%" height={300}>


<LineChart data={report.chartData}>


<CartesianGrid stroke="#333"/>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>


<Line

type="monotone"
dataKey="price"
stroke="#00ffaa"
strokeWidth={3}
dot={false}

/>


</LineChart>


</ResponsiveContainer>


</div>



<button

onClick={downloadPDF}

className="generate-btn"

>

Download Apple-Level Research PDF

</button>


</>

)}


</div>

);

}


export default Reports;