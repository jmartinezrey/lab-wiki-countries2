import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function CountryDetails(props){
  var countryCode = props.match.params.cca3;

  var country = props.countries.filter((element) => element.cca3 === countryCode)[0]

        return(
          <>
          { country ? 
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <h1>{country.common}</h1>
                  <table className="table">
                    <thead></thead>
                    <tbody>
                      <tr>
                        <td style={{width: "30%"}}>Capital</td>
                        <td>{country.capital}</td>
                      </tr>
                      <tr>
                        <td>Area</td>
                        <td>{country.area}
                          <sup>2</sup>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            : <h1>Loading</h1>
          }
      </>

        )
    }

export default CountryDetails;