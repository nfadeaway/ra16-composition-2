import React from 'react';
import Rate from './Rate.jsx';

// Компонент вывода курсов

const RatesBlock = () => {
  const ratesPull = [
    {name : 'USD MOEX', value: '63,52', shift: '+0,09'},
    {name : 'EUR MOEX', value: '70,86', shift: '+0,14'},
    {name : 'НЕФТЬ', value: '64,90', shift: '+1,63%'}
  ]

  return (
    <div className="rates-block">
      {ratesPull.map(news => <Rate settings={news}/>)}
    </div>
  );
};

export default RatesBlock;