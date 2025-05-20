window.addEventListener('scroll', function () {
    var header = document.querySelector("header");
    if (window.scrollY > 80) { // Change 50 to any value where you want the effect to start

        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});








const text = "Մեր գործարանն առաջարկում է մրգային խյուսերի, պահածոների, հյութերի, մուրաբաների և ջեմերի լայն ընտրանի, որոնք պատրաստվում են բնական բաղադրիչներից՝ ապահովելով անկրկնելի համ և բարձր որակ։";
const target = document.getElementById("p3");
let i = 0;

function printText() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(printText, 25); // скорость печати
  }
}

printText();


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (entry.target.id === 'leave-1-1') {
              entry.target.classList.add('animate-leave-1-1');
          } else if (entry.target.id === 'leave-1-2') {
              entry.target.classList.add('animate-leave-1-2');
          } else if (entry.target.id === 'second-button') {
              entry.target.classList.add('animate-second-button');
          } else if (entry.target.id === 'second-page-text-about-us') {
              entry.target.classList.add('animate-second-page-text-about-us');
          } else if (entry.target.id === 'second-page-text-slogan') {
              entry.target.classList.add('animate-second-page-text-slogan');
          } else if (entry.target.id === 'second-page-text-story') {
              entry.target.classList.add('animate-second-page-text-story');
          } else if (entry.target.id === 'third-page-text-products') {
              entry.target.classList.add('animate-third-page-text-products');
          } else if (entry.target.id === 'third-page-text-slogan') {
              entry.target.classList.add('animate-third-page-text-slogan');
          } else if (entry.target.id === 'third-page-text-story') {
              entry.target.classList.add('animate-third-page-text-slogan');
          } else if (entry.target.id === 'leave-2-1') {
              entry.target.classList.add('animate-leave-2-1');
          } else if (entry.target.id === 'leave-2-2') {
            entry.target.classList.add('animate-leave-2-2');
          } else if (entry.target.id === 'leave-3-1') {
              entry.target.classList.add('animate-leave-3-1');
          } else if (entry.target.id === 'leave-3-2') {
            entry.target.classList.add('animate-leave-3-2');
          }if (entry.target.id === 'truck') {
            entry.target.classList.add('animate-truck');
        }
          observer.unobserve(entry.target); // чтобы анимация запускалась один раз
      }
  });
});

// Назначаем наблюдение каждому нужному элементу
observer.observe(document.getElementById('leave-1-1'));
observer.observe(document.getElementById('leave-1-2'));
observer.observe(document.getElementById('second-button'));
observer.observe(document.getElementById('second-page-text-about-us'));
observer.observe(document.getElementById('second-page-text-slogan'));
observer.observe(document.getElementById('second-page-text-story'));
observer.observe(document.getElementById('third-page-text-products'));
observer.observe(document.getElementById('third-page-text-slogan'));
observer.observe(document.getElementById('third-page-text-story'));;
observer.observe(document.getElementById('truck'));
observer.observe(document.getElementById('leave-2-1'));
observer.observe(document.getElementById('leave-2-2'));
observer.observe(document.getElementById('leave-3-1'));
observer.observe(document.getElementById('leave-3-2'));

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
  

  
  const track = document.querySelector('.marquee-track');
  const img = track.querySelector('img');
  const repeatCount = Math.ceil(window.innerWidth / img.offsetWidth) + 10;

  for (let i = 0; i < repeatCount; i++) {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
  }




  
