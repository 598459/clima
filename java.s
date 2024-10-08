// Substitua 'YOUR_API_KEY' pela sua chave de API da OpenWeatherMap
const apiKey = 'YOUR_API_KEY';
const cidade = 'Arapoti';
const pais = 'br';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade},${pais}&appid=${apiKey}&units=metric`;

async function obterClima() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('temperatura').textContent = data.main.temp;
        document.getElementById('condicao').textContent = data.weather[0].description;

        // Exibir a previsão para os próximos 5 dias (implementar aqui)
    } catch (error) {
        console.error('Erro ao buscar dados do clima:', error);
    }
}

obterClima();