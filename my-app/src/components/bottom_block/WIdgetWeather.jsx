import React from 'react';

// Компонент частного виджета для Погоды. По идее его можно и через common сделать, но я решил его вынести отдельно. Так как
// подразумеваю его отдельную логику

const WidgetWeather = (props) => {
  return (
    <div className="widget weather">
      <div className="weather__title"><a href={props.settings.link}>{props.settings.title}</a></div>
      <div className="weather__ico">{props.settings.ico} {props.settings.temperature}</div>
    </div>
  );
};

export default WidgetWeather;