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

const videoPlayer = document.querySelector('.about-app__video')
const video = videoPlayer.querySelector('#main-video')
const playButton = videoPlayer.querySelector('#playpause')
const mute = videoPlayer.querySelector('.about-app__video-controls-mute')
const volume = videoPlayer.querySelector('.about-app__video-controls-volume')
const currentTimeElement = videoPlayer.querySelector('.about-app__video-current')
const durationTimeElement = videoPlayer.querySelector('.about-app__video-duration')
const progress = videoPlayer.querySelector('.about-app__video-progress')
const progressBar = videoPlayer.querySelector('.about-app__video-progress-filled')
const fs = videoPlayer.querySelector('#fs')

videoPlayer.addEventListener('click', (e) => {
  if(window.screen.width <= 769) {
    if(videoPlayer.timerID){
      clearTimeout(videoPlayer.timerID);
      videoPlayer.timerID=null;
      if (e.target.closest('.right')) {
        e.target.closest('.right').classList.add('show')
        video.currentTime += 10
        setTimeout(() => {
          e.target.closest('.right').classList.remove('show')
        },500);
      }
      if (e.target.closest('.left')) {
        e.target.closest('.left').classList.add('show')
        video.currentTime -= 10
        setTimeout(() => {
          e.target.closest('.left').classList.remove('show')
        },500);
      }
     }
   else{
    videoPlayer.timerID=setTimeout(() => {
        playStop(e)
        videoPlayer.timerID=null;
      },300)
    }
  } else {
    playStop(e)
  }
})

function playStop(e){
  if(videoPlayer.getAttribute('data-state') == 'not-started') videoPlayer.setAttribute('data-state', 'started')
  if(!e.target.closest('.about-app__video-controls') || e.target.closest('#playpause'))
  if(video.paused){
    video.play()
    playButton.setAttribute('data-state', 'pause')
    videoPlayer.setAttribute('data-state', 'started')
  } else {
    video.pause()
    playButton.setAttribute('data-state', 'play')
    videoPlayer.setAttribute('data-state', 'stopped')
  }
}

volume.addEventListener('mousemove', (e)=> {
  video.volume = e.target.value
  e.target.value == 0 ? mute.setAttribute('data-state', 'on-mute') : mute.setAttribute('data-state', 'mute')
})
mute.addEventListener('click', (e)=> {
  if(mute.getAttribute('data-state') == 'mute') {
    video.volume = 0
    volume.value = 0
    mute.setAttribute('data-state', 'on-mute')
  } else {
    video.volume = 1
    volume.value = 1
    mute.setAttribute('data-state', 'mute')
  }
})

const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60)
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60)
  let durationMinutes = Math.floor(video.duration / 60)
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60)

  currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? '0'+currentSeconds : currentSeconds}`
  durationTimeElement.innerHTML = `${durationMinutes}:${durationSeconds}`
}

video.addEventListener('timeupdate', currentTime)

video.addEventListener('timeupdate', () =>{
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.width = `${percentage}%`
})

progress.addEventListener('click', (e) =>{
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = progressTime
})

var waypoint = new Waypoint({
  element: document.querySelector('.about-app'),
  handler: function(direction) {
    document.querySelector('.header__link').classList.toggle('active')
    document.querySelector('.fixed-link').classList.toggle('show')
  }
})
var waypoint1 = new Waypoint({
  element: document.querySelector('.about-us'),
  handler: function(direction) {
    document.querySelector('.fixed-link').classList.toggle('show')
  }
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

$('.header__right a, .frames__main-link, .fixed-link__main').on('click', function() {

  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 370,
      easing: "linear"
  });

  return false;
});
