var apikey = '0628757f340b81ef5ce474df5593eca7';
var ur = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';

document.querySelector('.btn').addEventListener('click', () => {
    runit();
});

document.querySelector('.inp').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') runit();
});

async function runit() {
    var city = document.querySelector('.inp').value;
    if (city.trim() === "") {
        alert("Please enter a city name.");
        return;
    }
    try {
        const thisone = await fetch(ur + `&appid=${apikey}` + `&q=${city}`);
        var data = await thisone.json();

        if (data.cod !== 200) {
            document.querySelector('.show').innerHTML = `<p class="text-white text-2xl">City not found. Try again.</p>`;
            return;
        }

        let currentTime = data.dt; 
        let sunrise = data.sys.sunrise; 
        let sunset = data.sys.sunset;
        let isNight = currentTime < sunrise || currentTime > sunset;
        let weatherCondition = data.weather[0].main;
        let weatherIcon = isNight ? `${weatherCondition}_night.png` : `${weatherCondition}.png`;

        document.querySelector('.show').innerHTML = `
            <img class="w-28 md:w-36 mt-4" src="images/${weatherIcon}">
            <p class="text-4xl md:text-5xl font-bold">${Math.round(data.main.temp)}°C</p>
            <p class="text-2xl mt-1 font-medium">${data.name}</p>
            <div class="flex flex-col md:flex-row mt-7 justify-center gap-6 w-full">
                <div class="flex items-center gap-2">
                    <img class="w-6 md:w-8" src="images/humidity.png">
                    <div>
                        <p class="text-lg">${data.main.humidity}%</p>
                        <p class="text-sm text-gray-200">Humidity</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <img class="w-6 md:w-8" src="images/wind.png">
                    <div>
                        <p class="text-lg">${data.wind.speed} km/h</p>
                        <p class="text-sm text-gray-200">Wind Speed</p>
                    </div>
                </div>
            </div>`;
    } catch (error) {
        document.querySelector('.show').innerHTML = `<p class="text-white-400 text-2xl">Error fetching data.</p>`;
    }
}