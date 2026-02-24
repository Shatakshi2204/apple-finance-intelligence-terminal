import "../index.css";

function Overview({ stock }) {

  if (!stock) {

    return (

      <div className="page">

        Loading Apple financial data...

      </div>

    );

  }


  const marketCap =
    stock.marketCap
      ? `$${(stock.marketCap / 1000000000000).toFixed(2)}T`
      : "--";


  const change =
    stock.change !== undefined
      ? `${stock.change.toFixed(2)}%`
      : "--";


  const volume =
    stock.volume
      ? `${(stock.volume / 1000000).toFixed(2)}M`
      : "--";


  const high =
    stock.high !== undefined
      ? `$${stock.high.toFixed(2)}`
      : "--";


  const low =
    stock.low !== undefined
      ? `$${stock.low.toFixed(2)}`
      : "--";


  const prevClose =
    stock.previousClose !== undefined
      ? `$${stock.previousClose.toFixed(2)}`
      : "--";


  return (

    <div className="page">

      <div className="grid">


        <div className="card">

          <div className="card-title">Market Cap</div>

          <div className="card-value">{marketCap}</div>

        </div>



        <div className="card">

          <div className="card-title">Daily Change</div>

          <div className="card-value">{change}</div>

        </div>



        <div className="card">

          <div className="card-title">Volume</div>

          <div className="card-value">{volume}</div>

        </div>



        <div className="card">

          <div className="card-title">52W High</div>

          <div className="card-value">{high}</div>

        </div>



        <div className="card">

          <div className="card-title">52W Low</div>

          <div className="card-value">{low}</div>

        </div>



        <div className="card">

          <div className="card-title">Previous Close</div>

          <div className="card-value">{prevClose}</div>

        </div>


      </div>

    </div>

  );

}

export default Overview;