const translations = {
    am: {
      title: "ՌՈԶ-ՖՌՈՒՏ",
      title2: "ՊԱՀԱԾՈՆԵՐԻ ԳՈՐԾԱՐԱՆ",
      description: "Մեր գործարանն առաջարկում է մրգային խյուսերի, պահածոների, հյութերի, մուրաբաների և ջեմերի լայն ընտրանի, որոնք պատրաստվում են բնական բաղադրիչներից՝ ապահովելով անկրկնելի համ և բարձր որակ։",
      hpbutton1: "ՏԵՍՆԵԼ ԱՎԵԼԻՆ",
      hpbutton2: "ՀԵՏԱԴԱՐՁ ԿԱՊ",
      fontFamily: "'Noto Serif Armenian', serif"
    },
    ru: {
      title: "РОЗ-ФРУТ",
      title2: "КОНСЕРВНЫЙ ЗАВОД",
      description: "Наш завод предлагает широкий ассортимент фруктовых пюре, варений, соков, джемов и желе. Ассортимент продукции, изготовленной из натуральных ингредиентов, гарантирующих неповторимый вкус и высокое качество.",
      hpbutton1: "УВИДЕТЬ БОЛЬШЕ",
      hpbutton2: "ОБРАТНАЯ СВЯЗЬ",
      fontFamily: "'Roboto Condensed', sans-serif"
    },
    en: {
      title: "ROS-FRUIT",
      title2: "CANNED FACTORY",
      description: "Our factory offers a wide selection of fruit purees, preserves, juices, jams, and preserves, which are made from natural ingredients, ensuring a unique taste and high quality.",
      hpbutton1: "SEE MORE",
      hpbutton2: "FEEDBACK",
      fontFamily: "'Crismon Text', serif"
    }
  };
  
  const dropdown = document.getElementById('lang-dropdown');
  const currentBtn = document.getElementById('current-lang');
  
  currentBtn.addEventListener('click', () => {
    dropdown.classList.toggle('show');
  });
  
  document.querySelectorAll('.lang-dropdown a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const lang = link.getAttribute('data-lang');
  
      // Обновить текст
      document.querySelectorAll('[data-lang-text]').forEach(el => {
        const key = el.getAttribute('data-lang-text');
        el.textContent = translations[lang][key];
      });

      //   language
      document.body.style.fontFamily = data.fontFamily;
      document.body.style.fontOpticalSizing = 'auto';
      document.body.style.fontStyle = 'normal';
  
      // Обновить кнопку
      const img = link.querySelector('img').src;
      const text = link.textContent.trim();
      currentBtn.innerHTML = `<img src="${img}" width="20"> ${text} ▼`;
  
      dropdown.classList.remove('show');
    });
  });
  
  // Закрытие при клике вне
  window.addEventListener('click', e => {
    if (!e.target.closest('.lang-select')) {
      dropdown.classList.remove('show');
    }
  });
  
  const fronts = document.querySelectorAll('.product-front');

// Добавляем обработчик клика
fronts.forEach(front => {
    front.addEventListener('click', () => {
        const back = front.parentElement;
        back.classList.toggle('opened');
    });
});

