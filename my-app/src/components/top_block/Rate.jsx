import React from 'react';

// Компонент курса

const Rate = (props) => {
  return (
    <div className="rate">
      <div>{props.settings.name}</div><div>{props.settings.value}</div><div>{props.settings.shift}</div>
    </div>
  );
};

export default Rate;