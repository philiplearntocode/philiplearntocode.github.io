var headerBar = document.getElementById('header-bar');

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    headerBar.classList.add('shadow-2xl');
  } else {
    headerBar.classList.remove('shadow-2xl');
  }
});


var autoWrapStudioLogo = document.getElementById('auto-wrap-studio-logo');

autoWrapStudioLogo.addEventListener('click', (_) => {
  // scroll to the most top
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    // If already on index.html, scroll to the top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Otherwise, go to index.html
    window.location.href = "index.html";
  }
});

// services, our work, visit us
var serviceBtn = document.getElementById('service-btn');
var ourWorkBtn = document.getElementById('our-work-btn');
var visitUsBtn = document.getElementById('visit-us-btn');

const normalUI = ['before:border-border-main', 'before:w-1/2'];
const hoverUI = ['before:border-aws-yellow'];

function navButtonMouseOver(element) {
  element.classList.remove(...normalUI);
  element.classList.add(...hoverUI);
};

function navButtonMouseOut(element) {
  element.classList.remove(...hoverUI);
  element.classList.add(...normalUI);
}

function scrollToTopOfSection(elementId, extraPadding) {
  // TODO: check on is on current page, else then navigate to the index page and scroll to section.
  var top = headerBar.clientHeight;
  var serviceSection = document.getElementById(elementId);
  window.scrollTo({ top: serviceSection.offsetTop - top - extraPadding, behavior: "smooth" });
}

serviceBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(serviceBtn);
});
serviceBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(serviceBtn);
});
serviceBtn.addEventListener('click', (_) => {
  scrollToTopOfSection('services-section', 25);
});

ourWorkBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(ourWorkBtn);
});
ourWorkBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(ourWorkBtn);
});
ourWorkBtn.addEventListener('click', (_) => {
  scrollToTopOfSection('our-works-section', 65);
});

visitUsBtn.addEventListener('mouseover', (_) => {
  navButtonMouseOver(visitUsBtn);
});
visitUsBtn.addEventListener('mouseout', (_) => {
  navButtonMouseOut(visitUsBtn);
});
visitUsBtn.addEventListener('click', (_) => {
  scrollToTopOfSection('visit-us-section', 0);
});

var navSidebarBtn = document.getElementById('nav-sidebar-button');
var navSideBar = document.getElementById('nav-sidebar');
var navSideBarOverlay = document.getElementById('nav-sidebar-overlay');

navSidebarBtn.addEventListener('click', (_) => {
  openCloseNavSideBar();
});

navSideBarOverlay.addEventListener('click', (_) => {
  openCloseNavSideBar();
});

// TODO: add on when resize too (if needed)

function openCloseNavSideBar() {
  navSideBarOverlay.classList.toggle('hidden');
  navSideBar.classList.toggle('hidden');
  navSideBar.classList.toggle('flex');
  // navSideBar.classList.toggle('w-[175px]');
}


var igButton = document.getElementsByClassName('ig-button');
var fbButton = document.getElementsByClassName('fb-button');
var tiktokButton = document.getElementsByClassName('tiktok-button');
var igImg = document.getElementsByClassName('ig-img');
var fbImg = document.getElementsByClassName('fb-img');
var tiktokImg = document.getElementsByClassName('tiktok-img');

var whatsappButton = document.getElementsByClassName('whatsapp-button')[0];
var whatsappImg = document.getElementById('whatsapp-img');

function hoverChangeIcon(buttons, images, initialImg, hoverImg) {
  Array.from(buttons).forEach((button, index) => {
    button.addEventListener('mouseover', () => {
      images[index].src = hoverImg;
    });
    button.addEventListener('mouseout', () => {
      images[index].src = initialImg;
    });
  });
}

hoverChangeIcon(
  igButton,
  igImg,
  './assets/icons/insta/insta_initial.svg',
  './assets/icons/insta/insta_hover.svg',
);

hoverChangeIcon(
  fbButton,
  fbImg,
  './assets/icons/fb/fb_initial.svg',
  './assets/icons/fb/fb_hover.svg',
);

hoverChangeIcon(
  tiktokButton,
  tiktokImg,
  './assets/icons/tiktok/tiktok_initial.svg',
  './assets/icons/tiktok/tiktok_hover.svg',
);

// Get Whatsapp Button, & whatsappImg
whatsappButton.addEventListener('mouseover', (_) => {
  whatsappImg.src = './assets/icons/whatsapp/whatsapp_hover.svg';
});
whatsappButton.addEventListener('mouseout', (_) => {
  whatsappImg.src = './assets/icons/whatsapp/whatsapp_initial.svg';
});

// Explore More button
var exploreMoreBtn = document.getElementById('explore-more-btn');
var exploreMoreIcon = document.getElementById('explore-more-icon');

exploreMoreBtn.addEventListener('mouseover', (_) => {
  exploreMoreBtn.classList.add('bg-black');
  exploreMoreIcon.src = './assets/icons/arrow_right_white.svg';
});

exploreMoreBtn.addEventListener('mouseout', (_) => {
  exploreMoreBtn.classList.remove('bg-black');
  exploreMoreIcon.src = './assets/icons/arrow_right.svg';
});

////////////////////
/// CAROUSEL HERE
////////////////////

var sliderContainer = document.getElementById('slider-container');
var dotContainer = document.getElementById('dot-container');

function calculateImgHeight() {
  if (window.outerWidth < 1450) {
    if (sliderContainer.style.height) sliderContainer.style.height = '';
    return;
  }
  var newHeight = window.innerHeight - headerBar.clientHeight;
  sliderContainer.style.height = `${newHeight}px`;
}

// TODO: replace carousel image here
const carouselImgList = [
  './assets/dummy/carousel_test2.png',
  './assets/dummy/carousel_test2.png',
  './assets/dummy/carousel_test2.png',
  './assets/dummy/carousel_test2.png',
];

var carouselDisplayIndex = 0;

const dotActiveClass = Object.freeze({
  activeDotColor: 'bg-aws-yellow',
  activeDotHeight: 'h-1.5',
  inactiveDotColor: 'bg-white',
  inactiveDotHeight: 'h-1',
});

for (let i = 0; i < carouselImgList.length; i++) {
  var imgChild = document.createElement("img");
  imgChild.id = `carousel-${i + 1}`;
  // TODO: (P) make another type of image here. for mobile size.
  imgChild.classList.add('flex-1', 'object-cover', 'min-[426px]:h-full', 'h-svh', 'w-full', 'min-w-full');
  imgChild.src = carouselImgList[i];
  sliderContainer.appendChild(imgChild);

  var dotChild = document.createElement("span");
  dotChild.classList.add('w-[clamp(20px,10vw,140px)]', 'transition-all', 'duration-300', 'ease-in-out', 'cursor-pointer');

  if (carouselDisplayIndex == i) {
    dotChild.classList.add(dotActiveClass.activeDotColor, dotActiveClass.activeDotHeight);
  } else {
    dotChild.classList.add(dotActiveClass.inactiveDotColor, dotActiveClass.inactiveDotHeight);
  }

  dotContainer.appendChild(dotChild);
}

var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', (_) => {
  goPrevious();
});
nextBtn.addEventListener('click', (_) => {
  goNext();
});

function goPrevious() {
  if (carouselDisplayIndex == 0) {
    carouselDisplayIndex = carouselImgList.length - 1;
  } else {
    carouselDisplayIndex -= 1;
  }
  reloadSlider();
}

function goNext() {
  if (carouselDisplayIndex + 1 > carouselImgList.length - 1) {
    carouselDisplayIndex = 0;
  } else {
    carouselDisplayIndex += 1;
  }
  reloadSlider();
}

function reloadSlider() {
  let checkLeft = sliderContainer.children[carouselDisplayIndex];
  if (checkLeft instanceof HTMLElement) {
    let offset = checkLeft.offsetLeft;
    sliderContainer.style.transform = 'translateX(' + (-offset) + 'px)';
  }

  let oldActiveDot = dotContainer.querySelector(`.${dotActiveClass.activeDotColor}`);
  oldActiveDot.classList.remove(dotActiveClass.activeDotColor, dotActiveClass.activeDotHeight);
  oldActiveDot.classList.add(dotActiveClass.inactiveDotColor, dotActiveClass.inactiveDotHeight)

  let newActiveDot = dotContainer.children[carouselDisplayIndex];
  newActiveDot.classList.remove(dotActiveClass.inactiveDotColor, dotActiveClass.inactiveDotHeight);
  newActiveDot.classList.add(dotActiveClass.activeDotColor, dotActiveClass.activeDotHeight);
}

for (let i = 0; i < dotContainer.children.length; i++) {
  dotContainer.children[i].addEventListener('click', (_) => {
    if (carouselDisplayIndex == i) return;
    carouselDisplayIndex = i;
    reloadSlider();
  });
}

window.addEventListener('load', () => {
  calculateImgHeight();
});

window.addEventListener('resize', () => {
  reloadSlider();
  calculateImgHeight();
});

var servicesContent = document.getElementsByClassName('service-content');

// Default serviceContent
var selectedServiceContent = 1;
var selectedPrevServiceContent = -1;

const servicesTextList = [
  `We offer expert PPF installation, premium car wraps, and custom designs to enhance and protect your
          vehicle's style.
          Transform your ride with our top-notch services!`,
  `PPF installation protects against scratches and UV damage, keeping your car looking new while simplifying
              maintenance!`,
  `Car wraps provide a cost-effective way to change your vehicle's appearance without a permanent paint job,
  allowing for creative designs and colours.They also protect the original paint from scratches and UV
damage!`,
  ``,
];
// transition-all duration-700
const servicesHoverTransition = Object.freeze({
  textOpacityHover: 'opacity-100',
  textDisplaysTranslate: 'translate-x-[50%]',
  textDisplaysMargin: 'mx-6',
  textChildrenTranslate: 'translate-x-[-50%]',
  textTitleScaleHover: 'scale-125',
  bgOpacityHover: 'bg-black/50',
  sizeHover: 'grow-[1.5]',
});

showCurrentServiceContentEffect(selectedServiceContent);

// all servicesContent, when hover to any, set the
for (let i = 0; i < servicesContent.length; i++) {
  servicesContent[i].addEventListener('mouseover', (_) => {
    // on hover on specific index
    if (selectedServiceContent == i) return;
    selectedPrevServiceContent = selectedServiceContent;
    selectedServiceContent = i;

    showCurrentServiceContentEffect(i);
  });
}

// #(onHover)
// grow 1 -> 1.5, 
// text opacity 0 -> 100 (non visible to visible), [ADD TRANSITION ANIMATION]
// bg opacity 20 -> 30 (darker), [ADD OPACITY ANIMATION]
// NEW: text scale animation, text appear animation
function showCurrentServiceContentEffect(currentIndex) {
  var blackBg = servicesContent[currentIndex].children[0];
  var textDisplays = servicesContent[currentIndex].children[1];

  textDisplays.classList.toggle(servicesHoverTransition.textDisplaysTranslate);
  textDisplays.classList.toggle(servicesHoverTransition.textDisplaysMargin);

  blackBg.classList.toggle(servicesHoverTransition.bgOpacityHover);

  var textTitle = textDisplays.children[0];
  var textSubtitle = textDisplays.children[1];

  textTitle.classList.toggle(servicesHoverTransition.textChildrenTranslate);
  textTitle.classList.toggle(servicesHoverTransition.textTitleScaleHover);

  textSubtitle.textContent = servicesTextList[currentIndex];
  textSubtitle.classList.toggle(servicesHoverTransition.textChildrenTranslate);
  textSubtitle.classList.toggle(servicesHoverTransition.textOpacityHover);

  servicesContent[currentIndex].classList.toggle(servicesHoverTransition.sizeHover);

  if (selectedPrevServiceContent != -1) {
    var blackBgPrev = servicesContent[selectedPrevServiceContent].children[0];
    var textDisplaysPrev = servicesContent[selectedPrevServiceContent].children[1];

    textDisplaysPrev.classList.toggle(servicesHoverTransition.textDisplaysTranslate);
    textDisplaysPrev.classList.toggle(servicesHoverTransition.textDisplaysMargin);

    blackBgPrev.classList.toggle(servicesHoverTransition.bgOpacityHover);

    var textTitlePrev = textDisplaysPrev.children[0];
    var textSubtitlePrev = textDisplaysPrev.children[1];

    textTitlePrev.classList.toggle(servicesHoverTransition.textChildrenTranslate);
    textTitlePrev.classList.toggle(servicesHoverTransition.textTitleScaleHover);

    textSubtitlePrev.textContent = '';
    textSubtitlePrev.classList.toggle(servicesHoverTransition.textChildrenTranslate);
    textSubtitlePrev.classList.toggle(servicesHoverTransition.textOpacityHover);

    servicesContent[selectedPrevServiceContent].classList.toggle(servicesHoverTransition.sizeHover);
  }
}

// Copyright © 2025 Auto Wrap Studio Sdn. Bhd. (business no.)
var copyrightText = document.getElementById('copyright-text');
// full year
const d = new Date();
var year = d.getFullYear();
copyrightText.innerText = `Copyright © ${year} Auto Wrap Studio Sdn. Bhd. (business no.)`


// TODO: make appear animation like panels.art
// TODO: animate carousel index change
