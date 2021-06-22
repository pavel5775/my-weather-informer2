import React from 'react';
import '../static/css/main.css';
  
export const Main = (props) => (
  <div className="main"> 
    <div className="form"> 
      <form onSubmit={props.getWeatherMethod}>
        <label>City:</label>
        <br/>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter the city:"
          required
        />
        <br/>
        <button id="run">Get weather</button>
      </form>
    </div>
  </div>
);