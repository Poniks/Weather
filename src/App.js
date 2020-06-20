import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    city: "Buk",
  };
  handleCheckWeather = (e) => {
    // e.preventDefault();
    fetch(
      `api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=d5d322b13b4d9b28c56f700bc6e384f0`
    )
      .then((resp) => console.log(resp.json()))
      // .then((data) => console.log(data))
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };

  render() {
    return (
      <div className="App">
        {/* <form onSubmit={this.handleCheckWeather}>
          Enter City: <input type="text" />
          <input type="submit" />
        </form> */}

        <input type="text" onChange={this.handleCheckWeather} />
      </div>
    );
  }
}

export default App;

// d5d322b13b4d9b28c56f700bc6e384f0
