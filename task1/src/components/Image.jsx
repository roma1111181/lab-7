import React, { useState } from 'react';

function Image() {

  const [imageSize, setImageSize] = useState(400);
  const [displayStyle, setDisplayStyle] = useState({display: 'inline-block'});

  const remove = () => {
    setDisplayStyle({display: 'none'});
  };

  const add = () =>  {
    if (displayStyle['display'] === 'inline-block') {
      alert("Немає сенсу додавати картинку, вона вже існує")
  }
  else {
    setImageSize(400);
    setDisplayStyle({display: 'inline-block'});
  }
  };

  const reduce = () => {
    if (imageSize > 100) {
      setImageSize(imageSize - 100);
    }
    else if (displayStyle['display'] === 'inline-block') {
      alert('Досягнуто мінімального розміру зображення')
  }
  };

  const increase = () => {
    if (imageSize < 700) {
      setImageSize(imageSize + 100);
    }
    else if (displayStyle['display'] === 'inline-block') {
      alert('Досягнуто максимального розміру зображення')
  }
  };

  return (
    <div>
      <a href="https://city-adm.lviv.ua/"><img id="picture" src="pic.jpg" alt="Фото Львова" height={imageSize} style={displayStyle}/></a>
      <p>
        <button onClick={add}>Додати</button>
        <button onClick={increase}>Збільшити</button>
        <button onClick={reduce}>Зменшити</button>
        <button onClick={remove}>Видалити</button>
      </p>
    </div>
  );
}

export default Image;