import React from 'react';

// Компонент баннера

const Banner = (props) => {
  return (
    <div className="banner">
      <a href={props.settings.link}>Баннер<img src={props.settings.img}/></a>
    </div>
  );
};

export default Banner;