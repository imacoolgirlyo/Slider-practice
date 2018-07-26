// 좌우 btn에 click listener 추가
// currnetSlideNum을 찾는다,
// totalSlides 갯수 찾기
// 좌면, -1 / 우면, +1해서
// 다음 슬라이드에 active class 추가

//ul 안에서 li 찾는거 말고, 아예 전체에서 li 찾으면 안댐 ?

const prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  slideList = document.querySelector(".slider__list"), //ul
  slides = slideList.querySelectorAll(".slider__content"), //li
  totalNum = Array.from(slides).length;

//document.querySelector(`li:nth:child(${num}))

const getCurrentSlide = () =>
  slideList.querySelector(`li:nth-child(${currentSlideNum})`);

const toNextSlide = () => {
  console.log(currentSlideNum);
  currentSlide.classList.remove("active");
  currentSlide = getCurrentSlide();
  console.log("is current is changed ? " + currentSlide);
  currentSlide.classList.add("active");
};

let currentSlideNum = 1;
let currentSlide = getCurrentSlide();
console.log(currentSlide);

const prevBtnhandler = () => {
  currentSlideNum = currentSlideNum === 1 ? totalNum : currentSlideNum - 1;
  console.log(
    "prev Btn clicked " +
      currentSlideNum +
      "when num changed, getCurrentSlide call ?"
  );
  toNextSlide();
};

const nextBtnhandler = () => {
  currentSlideNum = currentSlideNum === totalNum ? 1 : currentSlideNum + 1;
  toNextSlide();
};

prevBtn.addEventListener("click", prevBtnhandler);
nextBtn.addEventListener("click", nextBtnhandler);
