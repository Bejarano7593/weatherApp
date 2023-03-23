import Info from "./components/Info";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import WEATHER_KEYS from "./Keys";
import { Component} from "react";

class App extends Component {

  state = {
    temperature: '',
    temp_min: "",
    temp_max: "",
    description: '',
    humidity: '',
    wind_speed: 0,
    city: '',
    country: '',
    error: null
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    //ciudad y pais llenados
    if (cityValue && countryValue) {
      // consulta API
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEYS}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        error: null
      });
    } else {
      this.setState({
        error: 'Please enter a City and a Country.'
      });
    }

  }


  render() {
    return (
      <div className="h-screen flex flex-col">
        <Navbar getWeather={this.getWeather} {...this.state}/>
        <div className={`md:grid lq:grid lg:grid xl:grid 2xl:grid md:grid-cols-3 lq:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 h-full m-full py-2 bg-[url('/luna.jpg')] bg-cover flex items-center `}>
          <div className="xs:hidden sm:hidden mq:hidden">
            <Form getWeather={this.getWeather} {...this.state} />
          </div>
          <Info {...this.state}  />
        </div>
      </div >
    );
  }

};
export default App;
