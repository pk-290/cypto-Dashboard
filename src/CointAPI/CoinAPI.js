//id symbol name
//bitcoin	btc	Bitcoin
import axios from 'axios'

async function getUser() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%20&vs_currencies=INR&include_24hr_change=true');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  getUser();