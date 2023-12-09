import React from 'react';

// Компонент новости

const News = (props) => {
  return (
    <div className="news">
      <a href={props.settings.link}>{props.settings.icon} {props.settings.text}</a>
    </div>
  );
};

export default News;