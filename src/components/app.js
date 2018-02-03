import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
		<h3>Please Search in egypt governorates</h3>
		<span>examples: Cairo, Giza, Alexandria, Aswan, Suez</span>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
