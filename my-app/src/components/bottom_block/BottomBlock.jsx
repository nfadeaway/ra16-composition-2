import React from 'react';
import WidgetWeather from './WIdgetWeather.jsx';
import WidgetCommon from './WidgetCommon.jsx';

// Нижний блок, в котором аккумулируются все виджеты

const BottomBlock = () => {
  const weatherSettings = {
    title: "Погода",
    link: "#",
    ico: "ico",
    temperature: '+17',
  }

  const visitedSettings = {
    class: "visited",
    title: "Посещаемое",
    titleLink: "#",
    rows: [
      {link: "#", text: "Недвижимость о сталинках"},
      {link: "#", text: "Маркет - люстры и светильники"},
      {link: "#", text: "Авто.ру - привод 4х4 до 500 000"},
    ]
  }

  const germany = {
    class: "germany",
    title: "Карта Германии",
    titleLink: "#",
    rows: [
      {link: "#", text: "Расписания"},
    ]
  }

  const tvProgram = {
    class: "tv-program",
    title: "Телепрограмма",
    titleLink: "#",
    rows: [
      {link: "#", text: "02:00 ТНТ.Best"},
      {link: "#", text: "02:15 Джинглики"},
      {link: "#", text: "02:25 Наедине со всеми"},
    ]
  }

  const tvBroadcast = {
    class: "tv-broadcast",
    title: "Эфир",
    titleLink: "#",
    rows: [
      {link: "#", ico: "ico", text: "Управление как искусство"},
      {link: "#", ico: "ico", text: "Ночь. Мир в это время"},
      {link: "#", ico: "ico", text: "Андрей Возн..."},
    ]
  }

  return (
    <div className="bottom-block">
      <WidgetWeather settings={weatherSettings}/>
      <WidgetCommon settings={visitedSettings}/>
      <WidgetCommon settings={germany}/>
      <WidgetCommon settings={tvProgram}/>
      <WidgetCommon settings={tvBroadcast}/>
    </div>
  );
};

export default BottomBlock;