async function getWeatherData() {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=57a96f5c53d54707a7d212508241403&q=Paris');
  const data = await response.json();
  return data;
}

getWeatherData().then(data => {
  console.log(data);
});