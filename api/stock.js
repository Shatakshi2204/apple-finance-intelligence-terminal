export default async function handler(req, res) {

const API_KEY = "d6etmj1r01qvn4o11jp0d6etmj1r01qvn4o11jpg";

try {

// CURRENT DATA

const quote = await fetch(
`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_KEY}`
);

const quoteData = await quote.json();


// HISTORICAL DATA

const today = Math.floor(Date.now()/1000);

const past = today - (60*60*24*30);

const history = await fetch(
`https://finnhub.io/api/v1/stock/candle?symbol=AAPL&resolution=D&from=${past}&to=${today}&token=${API_KEY}`
);

const historyData = await history.json();


const chart = historyData.c.map((price,index)=>({

price:price,

time:index

}));



res.status(200).json({

price: quoteData.c,

change: quoteData.dp,

volume: quoteData.v,

high: quoteData.h,

low: quoteData.l,

open: quoteData.o,

previousClose: quoteData.pc,

chart: chart

});

}

catch{

res.status(200).json({

price:null

});

}

}

