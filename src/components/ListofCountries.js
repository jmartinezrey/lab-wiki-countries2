import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
//import CountryDetails from './CountryDetails';

class listOfCountries extends Component {

    render(){
        return(   
      <div id="root">
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              <Link to={`/country-detail/${this.props.code}`} className="list-group-item list-group-item-action">{this.props.name.common}{this.props.flag}</Link>
            </div>  
          </div>
        </div>
      </div>
      </div>
        )
    }
}

export default listOfCountries;