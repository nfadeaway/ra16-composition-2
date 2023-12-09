import React from 'react';

// Компонент общего виджета

const WidgetCommon = (props) => {
  return (
    <div className={`widget ${props.settings.class}`}>
      <div className="widget__title"><a href={props.settings.titleLink}>{props.settings.title}</a></div>

      {props.settings.rows.map(row =>
        <div className="row">
          {row.ico && <div className="ico">{row.ico}</div>}
          <div className="text"><a href={row.link}>{row.text}</a></div>
        </div>
      )}
    </div>
  );
};

export default WidgetCommon;