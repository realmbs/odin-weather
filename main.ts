const KEY = '57a96f5c53d54707a7d212508241403';
// Event listeners
const submitButton = document.getElementById('submit') as HTMLButtonElement;

const getLocation = () => {
  const cityInput = document.getElementById('city') as HTMLInputElement;
  const countryInput = document.getElementById('country') as HTMLInputElement;
  const city = cityInput.value;
  const country = countryInput.value;
}

const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}`;



async function getWeatherData() {
  const response = await fetch('https://api.weatherapi.com/v1/current.json?key=57a96f5c53d54707a7d212508241403&q=Paris');
  const data = await response.json();
  return data;
}

getWeatherData().then(data => {
  console.log(data);
});