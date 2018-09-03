import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      list: []
    };
  }

  componentDidMount() {
    this.getWeathers();
  }

  renderWeathers = () => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date();
    const month = monthNames[d.getMonth()];
    let cnt = -1;

    const weathers = this.state.list.map((item, index) => {
      if(index % 8 === 0) {
        cnt++;
        
        let date = d.getDate() + cnt;
        let week = weekNames[d.getDay() + cnt];

        return <Weather
        key = { index }
        temp = { item.main.temp }
        weather = { item.weather[0].main }
        week = { week }
        month = { month }
        date = { date }
      />
      }
    })
    return weathers
  }

  getWeathers() {
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=1835848&APPID=a336385c657fecf7c9c2880e407123ba")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            list: result.list
          });
        }
      )
      .catch(err => console.log(err))
  }
   
  render() {
    const { isLoaded } = this.state;
    return (
      <div className = {isLoaded ? 'App' : 'App-loading'}>
        {isLoaded ? this.renderWeathers() : 'Loading...'}
      </div>
    )
  }
}

export default App;
