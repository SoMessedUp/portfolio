// Функция для переключения темы
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const logos = document.querySelectorAll('.header__logo')
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    // Установка новой темы
    document.documentElement.setAttribute('data-theme', newTheme);
    // Сохранение темы в локальном хранилище, чтобы она сохранялась после перезагрузки страницы
    localStorage.setItem('theme', newTheme);
    // Изменение кнопки и логотипа
    if (newTheme === 'light') {
        document.getElementById('ic_fluent_dark_theme_24_regular').style.fill='#000'
        logos.forEach(function(logo) {
            logo.style.backgroundImage = "url('img/cat-light.png')";
        });
    } else {
        document.getElementById('ic_fluent_dark_theme_24_regular').style.fill='#fff'
        logos.forEach(function(logo) {
            logo.style.backgroundImage = "url('img/cat-dark.png')";
        });
    }  
}


var swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    infinite: true,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
