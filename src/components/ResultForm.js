import React from "react";
import "./ResultForm.css";

function displayWeatherInfo(displayData) {
  const { cityName, stationId, stationName, dateAndTime, actualTemperature, actualWindSpeed, windDirection, actualPreassuse, rainfall, humidity } = displayData;

  let markup = null;
  if (cityName !== "") {
    markup = (
      <div>
        <h3>
          Oto dane pogodowe dla miasta: <em>{stationName}</em>
        </h3>
        <h4>Id stacji: {stationId}</h4>
        <h4>Data i godzina pomiaru: {dateAndTime}</h4>
        <h4>Aktualna temperatura: {actualTemperature} &#176;C</h4>
        <h4>Aktualna prędkość wiatru: {actualWindSpeed} m/s</h4>
        <h4>Kierunek wiatru: {windDirection} &#176;</h4>
        <h4>Aktualne ciśnienie: {actualPreassuse} hPa</h4>
        <h4>Suma opadu: {rainfall} mm</h4>
        <h4>Wilgotność względna: {humidity} %</h4>
      </div>
    );
  }

  return markup;
}

function displayErrorInfo() {
  return <div>Wystąpił problem podczas pobierania danych.</div>;
}

const ResultForm = props => {
  return (
    <React.Fragment>
      <div className="Result">{props.displayData.error ? displayErrorInfo() : displayWeatherInfo(props.displayData)}</div>
    </React.Fragment>
  );
};

export default ResultForm;
