async function moduleProject4() {

  // 👇 WORK WORK BELOW THIS LINE 👇
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  let descriptions = [
    ["Sunny", "☀️"],
    ["Cloudy", "☁️"],
    ["Rainy", "🌧️"],
    ["Thunderstorm", "⛈️"],
    ["Snowy", "❄️"],
    ["Partly Cloudy", "⛅️"]
  ]

  // 👉 Tasks 1 - 5 go here
 document.querySelector('#weatherWidget').style.display = 'none';
 document.querySelector('#citySelect').addEventListener("change", async evt => {
  console.log('slection changed' )
  try {
evt.target.setAttribute('disabled', 'disabled')
document.querySelector('#weatherWidget').style.display = 'none';
document.querySelector('.info').textContent = 'Fetching weather data...'
console.log(evt.target.value)
let city = evt.target.value
let url = `http://localhost:3003/api/weather?city=${city}`

const res = await axios.get(url)
console.log(res)
document.querySelector('#weatherWidget').style.display = 'block';
 document.querySelector('.info').textContent = ''
 evt.target.removeAttribute('disabled')


let { data } = res
document.querySelector('#apparantTemp div:nth-child(2)').textContent = `${data.apparant_temperature}°`
document.querySelector('#todayDescription').textContent = descriptions.find(d => d[0] === data.current.weather_description)[1]
document.querySelector('#todayStatus div:nth-child(1)').textContent = `${data.apparant_temperature}°`
document.querySelector('#todayStatus div:nth-child(2)').textContent = `Precipitation: ${data.current.precipitation_probability *100}%`
document.querySelector('#todayStatus div:nth-child(3)').textContent = `Humidity: ${data.current.humidity}%`
document.querySelector('#todayStatus div:nth-child(4)').textContent = `Wind: ${data.current.wind_speed}m/s`
} 

catch (err) {
console.log(' Promise rejected with an err.message ---> ', err.message)

}
 });
  // 👆 WORK WORK ABOVE THIS LINE 👆

}

// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject4 }
else moduleProject4()

