import React from 'react';
import '../static/css/weather.css';

export const Weather = (props) => (
  <div className="weather"> 
    <h3>Current weather </h3>
    <hr/>
    {props.city && (
      <div className="data-list">
      <img src={props.icon} alt="..."/>
      <table border="1">
        <thead></thead> 
          <tr>
            <th>#</th>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        <tbody>
          <tr>
            <td>1</td>
            <td>Country</td>
            <td>{props.coutnry}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>City</td>
            <td>{props.city}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Local time</td>
            <td>{props.localtime}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Time zone</td>
            <td>{props.timezone}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Tempreture</td>
            <td>{props.tempreture}&deg; C</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Visibility</td>
            <td>{props.visibility} km</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Wind direction</td>
            <td>{props.winddirection}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Wind Speed</td>
            <td>{props.windspeed} km/h</td>
          </tr>
        </tbody> 
      </table>
      </div> 
    )}    
  </div>
);