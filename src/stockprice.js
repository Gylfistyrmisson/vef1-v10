import axios from 'axios';

export async function getStockPrice(arr) {
    let stck = arr[0];
    for(let i = 1; i < arr.length;i++) {
        stck += ',' + arr[i];
    }
    const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/price',
        params: {
          format: 'json',
          outputsize: '30',
          symbol: stck
        },
        headers: {
          'x-rapidapi-key': 'bd760bee7fmsh9bcbe972b8c4ceap149f47jsn44e84238770e',
          'x-rapidapi-host': 'twelve-data1.p.rapidapi.com'
        }
      };

    try {
        const response = await axios.request(options);
        let returnArray = [];
        for(let j = 0;j < arr.length;j++) {
            const respo = response.data[arr[j]].price
            returnArray.push(respo);
        }
        console.log(returnArray);

    } catch (error) {
        console.log('error')
    }
}

const stocks = ['AMZN','AAPL','MSFT','META','TSLA','GOOG','NVDA'];
let priceStocks = getStockPrice(stocks);
for (let i = 0; i < priceStocks.length; i++) {
    console.log(priceStocks[i])
};