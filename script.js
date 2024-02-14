async function fetchWeatherData(cityName){
	let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ee513ed53b85cc8301df2f7ae8a1d1f2`
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
// demo()

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter a city name")
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}
