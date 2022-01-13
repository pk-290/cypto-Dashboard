import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import Drow from "./Drow";
import Dtitle from "./Dtitle";
import axios from "axios";

function dashboard() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=bitcoin%2Cethereum%2Csolana%2Ccardano&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="dashboard">
        <Dtitle />
        {coins.map((coin,idx) => {
          return (
            <Drow
              key = {coin.id}
              TokenId={coin.id}
              TokenNo={idx+1}
              TokenSymbol={coin.image}
              TokenName={coin.name}
              TokenNameSF={coin.symbol.toUpperCase()}
              TokenValue={coin.current_price}
              TokenChange = {coin.price_change_percentage_24h.toFixed(2)}
    
            />
          );
        })}
        
      </div>
    </div>
  );
}

export default dashboard;
