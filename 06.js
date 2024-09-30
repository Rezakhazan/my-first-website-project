function celciusTemp() {
  fahrenheitTemp = document.getElementById("temperature");
  fahrenheitTempInt = parseInt(fahrenheitTemp.value);
  let celcius = (5 / 9) * (fahrenheitTempInt - 32);
  window.alert(celcius);
}
