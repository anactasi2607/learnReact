import React from 'react';

const About = () => {
  return (
    <div className="container">
      <h1>Учебный проект</h1>

      <p>
        Данный проект был создан с целью  освоения азов реакта по видеоуроку <a href="https://www.youtube.com/watch?v=GNrdg3PzpJQ&list=PL6DxKON1uLOHyPVa0XhcqcW2RhDytDpAI&index=5&t=4s&ab_channel=UlbiTV">(ссылка)</a>
      </p>

      <p>В рамках работы над проектом выполнена задача знакомства с хуками реакта: useState, useEffect, useMemo, useContext, useRef и другими.
        Практика создания собственных хуков, знакомства с роутингом, условным рендерингом.
      </p>

      <p>Сделать красивую и правильно оформленную стилизацию задачи не стояло, декомпозиция стилией почти отсутствует.
      </p>
    </div>
  );
}

export default About;
