export default async function handler(req, res) {

try {

const API_KEY = "d6etmj1r01qvn4o11jp0d6etmj1r01qvn4o11jpg";

const quote = await fetch(
`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${API_KEY}`
);

const metric = await fetch(
`https://finnhub.io/api/v1/stock/metric?symbol=AAPL&metric=all&token=${API_KEY}`
);

const profile = await fetch(
`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL&token=${API_KEY}`
);

const quoteData = await quote.json();
const metricData = await metric.json();
const profileData = await profile.json();

res.status(200).json({

price: quoteData.c,

change: quoteData.dp,

volume: quoteData.v,

marketCap: profileData.marketCapitalization * 1000000,

high52: metricData.metric["52WeekHigh"],

low52: metricData.metric["52WeekLow"],

previousClose: quoteData.pc

});

}

catch {

res.status(200).json({

price: null

});

}

}