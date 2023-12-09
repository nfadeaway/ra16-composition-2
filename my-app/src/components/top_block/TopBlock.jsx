import React from 'react';
import NewsBlock from './NewsBlock.jsx';
import RatesBlock from './RatesBlock.jsx';
import YandexAD from './YandexAD.jsx';

// Компонент верхнего блока, аккумулирующий в себе его компоненты

const TopBlock = () => {
  return (
    <div className="top-block">
      <NewsBlock/>
      <RatesBlock/>
      <YandexAD/>
    </div>
  );
};

export default TopBlock;