import "../index.css";

function Insights({ stock }) {

  if (!stock) {

    return <div className="page">Loading insights...</div>;

  }


  const change = stock.change || 0;

  const price = stock.price || 0;

  const high = stock.high || price;

  const low = stock.low || price;


  let trend = "";

  if (change > 1)

    trend = "Strong Bullish";

  else if (change > 0)

    trend = "Moderate Bullish";

  else if (change < -1)

    trend = "Strong Bearish";

  else if (change < 0)

    trend = "Moderate Bearish";

  else

    trend = "Neutral";



  let valuation = "";

  if (price > high * 0.9)

    valuation = "Near Year High";

  else if (price < low * 1.1)

    valuation = "Near Year Low";

  else

    valuation = "Fairly Valued";



  const insightText =

`Apple stock is currently showing ${trend} momentum.

The stock is ${valuation}.

Apple remains financially strong with dominant market position and consistent institutional confidence.`;


  return (

    <div className="page">


      <div className="grid">


        <div className="card">

          <div className="card-title">

            Recommendation

          </div>

          <div className="card-value">

            {trend}

          </div>

        </div>


        <div className="card">

          <div className="card-title">

            Valuation

          </div>

          <div className="card-value">

            {valuation}

          </div>

        </div>


        <div className="card">

          <div className="card-title">

            Confidence Level

          </div>

          <div className="card-value">

            High

          </div>

        </div>


      </div>



      <div className="chart-box">


        <div className="chart-title">

          Live Market Insight

        </div>


        <p style={{ color: "#aaa", lineHeight: "1.7" }}>

          {insightText}

        </p>


      </div>


    </div>

  );

}

export default Insights;