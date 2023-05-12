const sliderApp = new Swiper(".app-look__swiper", {
  pagination: {
    el: ".app-look__pagination",
  },
  autoplay: {
    delay: 5000,
  },
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: rem(0),
  speed: 1500,
  breakpoints: {
    769: {
      allowTouchMove: false,
      slidesPerView: 4.2,
      spaceBetween: rem(1.8),
      speed: 1500,
    }
  },
})

const sliderGallery = new Swiper(".student-work__swiper", {
  pagination: {
    el: ".student-work__pagination",
  },
  navigation: {
    nextEl: ".student-work__btn-next",
    prevEl: ".student-work__btn-prev",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1500,
  breakpoints: {
    769: {
      allowTouchMove: false,
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
  spaceBetween: rem(0),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 1.6,
      spaceBetween: rem(3.6),
      speed: 1500,
    }
  },
})
const sliderReviewsMob = new Swiper(".reviews__swiper-mobile", {
  pagination: {
    el: ".reviews__pagination",
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: rem(1),
  speed: 1500,
  breakpoints: {
    769: {
      slidesPerView: 1,
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
  aboutApp.scrollIntoView()
});

const popUpBox = document.querySelector('.popup')
document.querySelector(".student-work__swiper").addEventListener('click', (btn) => {
  const targetPop = btn.target.closest('.student-work__slide')
  if (!targetPop) return
  const popUpContainer = popUpBox.querySelector('.popup__container')
  popUpContainer.innerHTML = ''
  for (const child of targetPop.children) {
    const div = child.cloneNode(true)
    popUpContainer.append(div);
  }
  popUpBox.classList.add('active')
  popUpContainer.querySelector('.student-work__link').innerHTML = 'Закрыть'
  popUpContainer.querySelector('.student-work__link').addEventListener('click', (btn) => {
    popUpBox.classList.remove('active')
  })
})
popUpBox.addEventListener('click', (btn) => {
  const targetPop = btn.target.closest('.popup__container')
  if(!targetPop) popUpBox.classList.remove('active')
})
