function buscarPrevisao() {
    const cidade = document.getElementById('cidade').value;
    const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Exibir os dados na página
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Sensação térmica: ${data.feels_like}°C</p>
                <p>Condições: ${data.weather[0].description}</p>
                `;
        })
        .catch(error => {
            console.error('Erro ao buscar a previsão:', error);
        });
}