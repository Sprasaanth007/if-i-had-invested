export default function calculateReturnsCrypto(price_data, time, investAmount) {
  let investDate = "";
  let investPrice = 0;
  let price_arr = Object.keys(price_data);
  let currentDate = price_arr[0].toString();
  let currentPrice = price_data[currentDate];
  switch (time) {
    case 1:
      investDate = price_arr[12].toString();
      investPrice = price_data[investDate];
      break;
    case 2:
      investDate = price_arr[24].toString();
      investPrice = price_data[investDate];
      break;
    case 3:
      investDate = price_arr[36].toString();
      investPrice = price_data[investDate];
      break;
  }
  let profitPercent =
    ((currentPrice["4b. close (USD)"] - investPrice["4b. close (USD)"]) /
      investPrice["4b. close (USD)"]) *
    100;
  let profit = investAmount * (profitPercent / 100);
  return [profitPercent, profit];
}
