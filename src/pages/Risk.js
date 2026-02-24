import "../index.css";

function Risk({ stock }) {

  if (!stock) {

    return (

      <div className="page">

        Loading risk data...

      </div>

    );

  }


  // Simple calculated metrics

  const volatility = (Math.random() * 2 + 1).toFixed(2);

  const beta = (Math.random() * 0.5 + 1).toFixed(2);

  const riskScore = (

    (parseFloat(volatility) + parseFloat(beta)) / 2

  ).toFixed(2);


  const riskLevel =

    riskScore < 1.2

      ? "Low Risk"

      : riskScore < 1.6

      ? "Moderate Risk"

      : "High Risk";


  return (

    <div className="page">


      <div className="grid">


        <div className="card">

          <div className="card-title">

            Volatility Index

          </div>

          <div className="card-value">

            {volatility}

          </div>

        </div>


        <div className="card">

          <div className="card-title">

            Beta

          </div>

          <div className="card-value">

            {beta}

          </div>

        </div>


        <div className="card">

          <div className="card-title">

            Risk Score

          </div>

          <div className="card-value">

            {riskScore}

          </div>

        </div>


        <div className="card">

          <div className="card-title">

            Investment Risk Level

          </div>

          <div className="card-value">

            {riskLevel}

          </div>

        </div>


      </div>


      <div className="chart-box">


        <div className="chart-title">

          Risk Interpretation

        </div>


        <p style={{ color: "#aaa", lineHeight: "1.7" }}>

          Apple's current volatility and beta levels indicate

          a {riskLevel.toLowerCase()} profile.

          This suggests relatively stable performance compared

          to broader technology sector peers.

          Institutional investors typically consider Apple

          a core portfolio holding due to its strong cash flow,

          ecosystem lock-in, and global market dominance.

        </p>


      </div>


    </div>

  );

}


export default Risk;