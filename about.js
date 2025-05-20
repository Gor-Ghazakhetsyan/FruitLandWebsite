const right = document.getElementsByClassName("right");
let si = right.length;
let z = 1;

// Էջ թերթել աջ (առաջ)
function turnRight() {
  if (si >= 1) {
    si--;
  } else {
    si = right.length - 1;
    function sttmot(i) {
      setTimeout(() => {
        right[i].style.zIndex = "auto";
      }, 300);
    }
    for (let i = 0; i < right.length; i++) {
      right[i].className = "right";
      sttmot(i);
      z = 1;
    }
  }
  right[si].classList.add("flip");
  z++;
  right[si].style.zIndex = z;
}

// Էջ թերթել ձախ (հետ)
function turnLeft() {
  if (si < right.length) {
    si++;
  } else {
    si = 1;
    for (let i = right.length - 1; i > 0; i--) {
      right[i].classList.add("flip");
      right[i].style.zIndex = right.length + 1 - i;
    }
  }
  right[si - 1].className = "right";
  setTimeout(() => {
    right[si - 1].style.zIndex = "auto";
  }, 350);
}

// Թերթել էջը սեղմելով
for (let i = 0; i < right.length; i++) {
  right[i].addEventListener("click", function () {
    // Եթե արդեն թերթված է՝ հետ շրջենք
    if (right[i].classList.contains("flip")) {
      turnLeft();
    } else {
      turnRight();
    }
  });
}

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

function resetBook() {
  for (let i = 0; i < right.length; i++) {
    right[i].classList.remove("flip");
    right[i].style.zIndex = "auto";
  }
}

function flipToPage(pageIndex) {
  resetBook();
  for (let i = right.length - 1; i >= pageIndex; i--) {
    right[i].classList.add("flip");
    z++;
            right[i].style.zIndex = z;
  }
}

function contentPage1() {
  flipToPage(4);
}
function contentPage2() {
  flipToPage(3);
}
function contentPage3() {
  flipToPage(2);
}
function contentPage4() {
  flipToPage(1);
}

for (let i = 0; i < right.length; i++) {
  right[i].addEventListener("click", function () {
    if (right[i].classList.contains("flip")) {
      resetBook();
    } else {
      flipToPage(i);
    }
  });
}
function updateMenuActive(index) {
  menuButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (parseInt(btn.dataset.page) === index) {
      btn.classList.add("active");
    }
  });
}



