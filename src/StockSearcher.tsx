import axios from "axios";
import { FormEvent, useState } from "react";

function StockSearcher() {
  const [stockCode, setStockCode] = useState("");
  const [stockValue, setStockValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    setStockValue("");
    setErrorMessage("");

    // These are API specific parameters.
    const alphaVantageParams = {
      function: "TIME_SERIES_INTRADAY",
      symbol: stockCode,
      interval: "5min",
      apikey: "UK6ZNP3MKPAOFNZG",
    };

    try {
      const response = await axios.get("https://www.alphavantage.co/query", {
        params: alphaVantageParams,
      });

      /* How the data is handled after it is returned depends on the API.
         The important bit is response?.data.
         This is how the data is accessed. */
      const timeSeries = response?.data["Time Series (5min)"];
      if (timeSeries) {
        const latestTime = Object.keys(timeSeries)[0];
        setStockValue(timeSeries[latestTime]["4. close"]);
      } else {
        setErrorMessage("Invalid response format.");
      }

      /* How you perform error handling may depend on the application.
         You may want to add specific behaviour for certain status codes. */
    } catch (error) {
      setErrorMessage(String(error));
    }
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="stockName">Stock Code (e.g. IBM):</label>
        <input
          type="text"
          id="stockName"
          autoComplete="off"
          onChange={(e) => setStockCode(e.target.value)}
          value={stockCode}
        />
        <button>Search Stock Value</button>
      </form>
      {stockValue && <p>The value is {stockValue}.</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default StockSearcher;
