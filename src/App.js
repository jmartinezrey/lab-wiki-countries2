import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import ListofCountries from './components/ListofCountries'
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import axios from "axios"


class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get("https://countries.tech-savvy.tech/countries")
    .then(response => {
        this.setState({countries: response.data})
    })
    .catch((err)=> {
    })
}

render(){
  let countriesvar = this.state.countries.map((countriesvar, index) =>
  <ListofCountries
      name={countriesvar.name} 
      flag={countriesvar.flag}
      capital={countriesvar.capital}
      area={countriesvar.area}
      code={countriesvar.cca3}
  />
  );

  return(
    <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <Route path={`/country-detail/:cca3`} render={(props) => <CountryDetails {...props} countries={this.state.countries}/>}
        />
           {countriesvar}
    </div>
      
  )
}
}

export default App;