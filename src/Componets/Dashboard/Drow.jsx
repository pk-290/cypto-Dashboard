import React, { useState, useEffect } from "react";
import Linechart from "../Chart2";
import axios from "axios";

function dashboardRow(props) {

  const [charData, setCharData] = useState();

  useEffect(() => {
    axios
      .get(
        // "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=15&interval=daily"
        `https://api.coingecko.com/api/v3/coins/${props.TokenId}/market_chart?vs_currency=inr&days=15&interval=daily`
      )
      .then((res) => {
      

        setCharData({
          labels: ["15d", "14d", "13d", "12d", "11d", "10d", "9d", "8d", "7d", "6d", "5d", "4d", "3d", "2d", "1d"],
        
          datasets: [
            {
              label: "",
              data:res.data?.prices.map((coin) => {return coin[1]}),
              
              backgroundColor: [],
            
              borderColor: "#ff0000",
              borderWidth: 3,
            },
          ],
        });
      })
      .catch((error) => console.log(error));

    // setting chartdata function
  }, []);
 
  return (
    <>
      <div className="dashboard_itmes first_item">
        <p>{props.TokenNo}</p>
      </div>
      <div className="dashboard_itmes">
        <div className="dash_coin_name">
          <img src={props.TokenSymbol} className="currency_images"></img>{" "}
          <p>{props.TokenName}</p>
          <p style={{ color: "gray" }}>{props.TokenNameSF}</p>
        </div>
      </div>
      <div className="dashboard_itmes">
        <p>₹{props.TokenValue}</p>
      </div>
      <div className="dashboard_itmes">
        {props.TokenChange > 0 ? (
          <p style={{ color: "green" }}>{props.TokenChange}%</p>
        ) : (
          <p style={{ color: "red" }}>{props.TokenChange}%</p>
        )}
      </div>
       <div className="dashboard_itmes last_element">
       {charData &&   <Linechart charData={charData} />}
      </div>
    </>
  );
}

export default dashboardRow;
