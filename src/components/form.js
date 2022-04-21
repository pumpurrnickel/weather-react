import React from "react";

const Form = ({getWeather}) => (

    <form className="form" onSubmit={getWeather}>
      <input
        type="text"
        className="searchBar"
        placeholder="Enter Zip Code..."
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>

);

export default Form;