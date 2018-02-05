import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import "../node_modules/bootswatch/dist/journal/bootstrap.css";
import { Button } from "react-bootstrap";

const PLACES = [
  { name: "Kiev, UA", cityName: "Kiev", lat: '47.82', lon: '35.18' },
  { name: "Zaporizhzhya, UA", cityName: "Zaporizhzhya", lat: '47.82', lon: '35.18'},
  { name: "Los Angeles, US", cityName: "Los Angeles", countryCode: "us", lat: '47.82', lon: '35.18' },
  { name: "Toronto, CA", cityName: "Toronto", countryCode: "ca", lat: '47.82', lon: '35.18' }
];



class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    const cityName = this.props.cityName;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json });
    });
  }
  render() {
    const weatherData = this.state.weatherData;
    if (!weatherData) return <div>Loading</div>;
    const weather = weatherData.weather[0];
    const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    return (
      <div>
        <h1>
          {weather.main} in {weatherData.name}
          <img src={iconUrl} alt={weatherData.description} />
        </h1>
        <p>Current: {weatherData.main.temp}°C</p>
        <p>High: {weatherData.main.temp_max}°C</p>
        <p>Low: {weatherData.main.temp_min}°C</p>
        <p>Wind Speed: {weatherData.wind.speed} mi/hr</p>

      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        {PLACES.map((place, index) => (
          <button className="btn btn-primary"
            key={index}
            onClick={() => {
              this.setState({ activePlace: index });
            }}
          >
            {place.name}
          </button>
        ))}
        <WeatherDisplay key={activePlace} cityName={PLACES[activePlace].cityName} />
      </div>
    );
  }
}


export default App;
