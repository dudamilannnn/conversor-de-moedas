const exchangeRates = {
  BRL: 1,
  USD: 5.25,
  EUR: 6.0,
  JPY: 0.038,
};

document.getElementById("convertButton").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const currencyFrom = document.getElementById("currencyFrom").value;
  const currencyTo = document.getElementById("currencyTo").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  const convertedAmount = (
    (amount * exchangeRates[currencyTo]) /
    exchangeRates[currencyFrom]
  ).toFixed(2);
  document.getElementById(
    "result"
  ).innerText = `${amount} ${currencyFrom} é igual a ${convertedAmount} ${currencyTo}`;
});
