import React from "react";

function displayWeatherInfo(displayData) {
  const { cityName, stationId, dateAndTime, actualTemperature, actualWindSpeed, windDirection, actualPreassuse, rainfall, humidity, error, formSubmitted } = displayData;
  return formSubmitted && cityName != "" ? <div>Oto dane pogodowe:</div> : <div></div>;
}

function displayErrorInfo() {
  return <div>Wystąpił problem podczas pobierania danych.</div>;
}

const ResultForm = props => {
  return <React.Fragment>{props.displayData.error ? displayErrorInfo() : displayWeatherInfo(props.displayData)}</React.Fragment>;
};

export default ResultForm;
