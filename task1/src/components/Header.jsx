import React, { useState } from 'react';


function Header() {

  function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  const [first, setFirstStyle] = useState({ background: '#fff', color: '#000' });
  const [second, setSecondStyle] = useState({ background: '#fff', color: '#000' });

  const changeColorFirst = () => {
    setFirstStyle({ background: getRandomColor(), color: getRandomColor() });
  };

  const changeColorSecond = () => {
    setSecondStyle({ background: getRandomColor(), color: getRandomColor() });
  };

  return (
    <>
      <h2 onClick={changeColorFirst} style={first}>Ніколайчук Роман Вікторович</h2>
      <hr></hr>
      <p onClick={changeColorSecond} style={second}><b>Місце народження:</b> м. Рівне</p>
      <p><b>Дата народження:</b> 3 січня, 2003 року </p>
      <p><b>Загальна середня освіта:</b>  ЗОШ №5, м. Рівне <i>(11 класів)</i></p>
      <p><b>Вища освіта:</b> НТУУ "КПІ", м. Київ <i>(3-ій курс)</i></p>
    </>
  );
}

export default Header;