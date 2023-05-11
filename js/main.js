const sliderGallery = new Swiper(".student-work__swiper", {
    navigation: {
      nextEl: ".student-work__btn-next",
      prevEl: ".student-work__btn-prev",
    },
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(3.6),
        speed: 1500,
      }
    },
})

const sliderReviews = new Swiper(".reviews__swiper", {
    navigation: {
      nextEl: ".reviews__btn-next",
      prevEl: ".reviews__btn-prev",
    },
    loop: true,
    allowTouchMove: false,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -500],
      },
      next: {
        translate: ["110%", 0, 0],
      },
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
    breakpoints: {
      769: {
        slidesPerView: 1.6,
        spaceBetween: rem(3.6),
        speed: 1500,
      }
    },
})

const questionBox = document.querySelectorAll('.questions__item')

questionBox.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(!btn.className.split(' ')[1])
        questionBox.forEach((box) => {
            box.classList.remove('active')
        })
        btn.classList.toggle('active')
    });
});

const banerBtn = document.querySelector('.baner__btn')
const aboutApp = document.querySelector('.about-app')
banerBtn.addEventListener('click', () => {
  aboutApp.scrollIntoView();
});
