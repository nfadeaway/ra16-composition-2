import React from 'react';
import Services from './Services.jsx';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Banner from './Banner.jsx';

// Компонент средннго блока, аккумулирующий все блоки среднего сегмента

const MiddleBlock = () => {
  const bannerSettings = {
    link: "#",
    img: '',
  }

  return (
    <div className="middle-block">
      <Services/>
      <Logo/>
      <Search/>
      <Banner settings={bannerSettings}/>
    </div>
  );
};

export default MiddleBlock;