import React from 'react';
import News from './News.jsx';

// Компонрент вывода новостей

const NewsBlock = () => {
  const newsPull = [
    {link : '#', icon: 'ico_1', text: 'текст текст текст'},
    {link : '#', icon: 'ico_2', text: 'текст текст текст'},
    {link : '#', icon: 'ico_3', text: 'текст текст текст'}
  ]

  return (
    <div className="news-block">
        <div className="top">
          <div>Ссылка на раздел 1</div><div>Ссылка на раздел 2</div><div>Ссылка на раздел 3</div><div>дата</div>
        </div>
        {newsPull.map(news => <News settings={news}/>)}
    </div>
  );
};

export default NewsBlock;