// Substitua 'YOUR_API_KEY' pela sua chave API
const apiKey = 'YOUR_API_KEY';
const cidade = 'Arapoti';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Atualizar os elementos HTML com os dados da API
        document.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.querySelector('h2').textContent = `${data.main.temp}°C`;
        document.querySelector('.detalhes p:nth-child(1)').textContent = data.weather[0].description;
        document.querySelector('.detalhes p:nth-child(2)').textContent = `Vento: ${data.wind.speed} m/s`;
        document.querySelector('.detalhes p:nth-child(3)').textContent = `Umidade: ${data.main.humidity}%`;
    })
    .catch(error => {
        console.error('Erro ao buscar a previsão:', error);
    });