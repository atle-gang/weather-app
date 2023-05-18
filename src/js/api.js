// Create function that hit API
// Function should take location and return weather data for that location.
export async function fetchWeatherData(location) {
    try {
        const apiKey = 'f7d08dafee3f42bd92c101550231105';
        const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        
        // Make API request 
        const response = await fetch(apiURL, { mode: 'cors' });
        const data = await response.json();

        // Log selected data
        console.log('Selected Weather Data:', data);

        // Return the selected data
        return data;

    }   catch (error) {
        // Handle any errors that occured during the fetch
        console.error('Error fetching weather data:', error);
    }
}

