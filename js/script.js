console.log('Ваша оценка - 150 баллов\nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным\nВыполненные пункты:\n1) время выводится в 24-часовом формате, например: 21:01:00\n2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается)\n3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня"\n4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток\n5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется\n6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз\n7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке)\n8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке)\n9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения\n10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage\n11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел\n12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов)\n13) при загрузке страницы приложения отображается рандомная цитата и её автор\n14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую)\n15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause\n16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play\n17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev)\n18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем\n19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый.\n20) добавлен прогресс-бар в котором отображается прогресс проигрывания\n21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека\n22) над прогресс-баром отображается название трека\n23) отображается текущее и общее время воспроизведения трека\n24) есть кнопка звука при клике по которой можно включить/отключить звук\n25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука\n26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте\n27) переводится язык и меняется формат отображения даты\n28) переводится приветствие и placeholder\n29) переводится прогноз погоды в т.ч описание погоды и город по умолчанию\n30) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая\n31) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется\n32) в качестве источника изображений может использоваться Unsplash API\n33) в качестве источника изображений может использоваться Flickr API\n34) в настройках приложения можно указать язык приложения (en/ru или en/be)\n35) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API\n36) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото\n37) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал\n38) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их\n39) настройки приложения сохраняются при перезагрузке страницы');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
};
const flickrValues = {
  'night': '72157720062587146',
  'morning': '72157720069530982',
  'afternoon': '72157720111881805',
  'evening': '72157720111880160',
}
const greeting = document.querySelector('.greeting');
const namer = document.querySelector('.name');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
const descriptionContainer = document.querySelector('.description-container');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev ');
const playNext = document.querySelector('.play-next');
const ul = document.querySelector('.play-list');
const audioTitle = document.querySelector('.audio-title');
const playBox = document.querySelector('.play-list');
const language = document.querySelector('.language');
const languageButton = document.querySelector('.language__button');
const showenButton = document.querySelectorAll('.show__btn-box');
let lang = 'eng';
let playNum = 0;
let isPlay = false;
let randomNum = Math.floor(Math.random() * 20 + 1);
let hours;
let imagesAPI = 'github';
let tag = getTimeOfDay();
languageButton.textContent = lang;
/*================================================== Time and Date ==================================================*/
let greetingTranslation = {
  'eng': {
    'morning': `Good ${getTimeOfDay()},`,
    'afternoon': `Good ${getTimeOfDay()},`,
    'evening': `Good ${getTimeOfDay()},`,
    'night': `Good ${getTimeOfDay()},`
  },
  'ru': {
    'morning': `Доброе утро,`,
    'afternoon': `Добрый день,`,
    'evening': `Добрый вечер,`,
    'night': `Доброй ночи,`
  }
};

function getTimeOfDay() {
  hours = (new Date()).getHours();
  if (hours <= 5) {
    return 'night'
  } else if (hours <= 11) {
    return 'morning'
  } else if (hours <= 17) {
    return 'afternoon'
  } else {
    return 'evening'
  }
}

const showTime = () => {
  time.textContent = (new Date()).toLocaleTimeString();
  date.textContent = (new Date()).toLocaleDateString(`${lang}`, options);
  greeting.textContent = greetingTranslation[lang][getTimeOfDay()];
  if (lang === 'ru') {
    namer.setAttribute('placeholder', '[Введите имя]');
  } else {
    namer.setAttribute('placeholder', '[Enter name]');
  }
  setTimeout(showTime, 1000);
}
showTime(lang);
/*================================================== Local Storage ==================================================*/
let showArr = [];
function setLocalStorage() {
  localStorage.setItem('name', namer.value);
  localStorage.setItem('lang', lang);
  localStorage.setItem('city', city.value);
  localStorage.setItem('imagesAPI', imagesAPI);
  localStorage.setItem('tag', tag);
  localStorage.setItem('showArr', showArr);
}
window.addEventListener('beforeunload', showArrCount)
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  /*------------------------ User name ------------------------*/
  if (localStorage.getItem('name')) {
    namer.value = localStorage.getItem('name');
  }
  /*------------------------ Lang ------------------------*/
  if (localStorage.getItem('lang') === 'ru') {
    lang = localStorage.getItem('lang');
  } else {
    lang = 'eng';
  }
  languageButton.textContent = lang;
  languageButton.classList.add(`language__button--${lang}`);
  if (lang === 'eng') {
    city.value = "Minsk";
  } else {
    city.value = "Минск";
  }
  getQuotes();
  changeSettingsLanguage();
  /*------------------------ User city ------------------------*/
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
    getWeather();
  }
  /*------------------------ Image API ------------------------*/
  if (localStorage.getItem('tag')) {
    tag = localStorage.getItem('tag');
    tagItem.forEach((item) => {
      if (item.textContent === tag) item.classList.add('tag__item--active');
    })
  }
  if (localStorage.getItem('imagesAPI')) {
    imagesAPI = localStorage.getItem('imagesAPI');
    setBg();
    sourceItem.forEach((item) => {
      if (item.textContent === imagesAPI) item.classList.add('source__item--active');
    })
  } else {
    imagesAPI = 'github';
    setBg();
  }
  /*------------------------ Show ------------------------*/
  showenButton.forEach((item, index) => {
    showArr = localStorage.getItem('showArr');
    if (showArr.includes(index)) {
      item.classList.toggle('show__button--off');
      hideBlock(item);
    }
  })

}
window.addEventListener('load', getLocalStorage);
/*================================================== Background and Slider ==================================================*/
let bgRef;
async function setBg() {
  let bgNum = String(randomNum).padStart(2, "0");
  switch (imagesAPI) {
    case 'github':
      bgRef = `https://donstacky.github.io/stage0-tasks/images/${getTimeOfDay()}/${bgNum}.jpg`;
      break;
    case 'unsplash':
      await getLinkToUnsplash();
      break;
    case 'flickr':
      await getLinkToFlickr();
  }
  const img = new Image();
  img.src = bgRef;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${bgRef})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';
  };
}
if (imagesAPI === 'github') setBg();
console.log(`Посмотреть номер изображения можно здесь → ${randomNum}`);

function getSlideNext() {
  randomNum === 20 ? randomNum = 1 : randomNum++;
console.log(`Посмотреть номер изображения можно здесь → ${randomNum}`);
  setBg();
}
slideNext.addEventListener('click', getSlideNext);

function getSlidePrev() {
  randomNum === 1 ? randomNum = 20 : randomNum--;
console.log(`Посмотреть номер изображения можно здесь → ${randomNum}`);
  setBg();
}
slidePrev.addEventListener('click', getSlidePrev);

/*================================================== Weather ==================================================*/
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=663d5fe2eacc878f0afedc5d18a315b9&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod === '404' || data.cod === '400') {
    weatherError.textContent = `Error! city not found for '${city.value}'!`;
    wind.classList.add('hider');
    humidity.classList.add('hider');
    descriptionContainer.classList.add('hider');
  } else {
    wind.classList.remove('hider');
    humidity.classList.remove('hider');
    descriptionContainer.classList.remove('hider');
    weatherError.textContent = '';
  }
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  if (lang === 'eng') {
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].main;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`
    city.setAttribute('placeholder', '[Enter city]');
  } else {
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
    humidity.textContent = `Влажность: ${data.main.humidity}%`;
    wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`
    city.setAttribute('placeholder', '[Введите город]');
  }
}
getWeather()

city.addEventListener('change', getWeather)

/*================================================== Quotes ==================================================*/
async function getQuotes() {
  let randomQuote = Math.floor(Math.random() * 100);
  const quotes = `https://donstacky.github.io/stage0-tasks/images/quotes${lang}.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  quote.textContent = data[randomQuote].text;
  author.textContent = data[randomQuote].author;
}
getQuotes();
changeQuote.addEventListener('click', getQuotes);

/*================================================== Audio player ==================================================*/
const audio = new Audio();

function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if (isPlay === false) {
    audioTitle.textContent = playList[playNum].title;
    isPlay = true;
    audio.play();
    toggleBtn();
    itemSelection();
  } else {
    isPlay = false;
    audio.pause();
    toggleBtn();
    itemSelection();
  }
}
play.addEventListener('click', playAudio);

function toggleBtn() {
  if (isPlay === false) {
    play.classList.remove('pause');
  } else {
    play.classList.add('pause');
  }
}

import playList from './playList.js';

playPrev.addEventListener('click', prevAudio);

function prevAudio() {
  if (playNum === 0) {
    playNum = 3;
  } else {
    playNum = playNum - 1
  };
  isPlay = false;
  playAudio();
}

playNext.addEventListener('click', nextAudio);

function nextAudio() {
  if (playNum === 3) {
    playNum = 0;
  } else {
    playNum = playNum + 1
  };
  isPlay = false;
  playAudio();
}

playList.forEach(el => {
  let li = document.createElement('li');
  li.classList.add('play-item');
  li.classList.add('miniPlay');
  li.textContent = el.title;
  ul.append(li);
});
let playItem = document.querySelectorAll('.play-item');

function itemSelection() {
  document.querySelectorAll('.play-item').forEach(el => {
    if (el.textContent === playList[playNum].title) {
      el.classList.add('itemSelection');
      el.classList.add('item-active');
      if (isPlay === false) {
        el.classList.add('miniPlay');
        el.classList.remove('miniPause');
      } else {
        el.classList.remove('miniPlay');
        el.classList.add('miniPause')
      };
      // el.classList.add('miniPause');
    } else {
      el.classList.remove('itemSelection');
      el.classList.remove('item-active');
      el.classList.remove('miniPause');
      el.classList.add('miniPlay');
    }
  })
}

audio.addEventListener(
  "loadeddata",
  () => {
    document.querySelector(".length").textContent = getTimeCodeFromNum(audio.duration);
    audio.volume = .75;
  },
  false
);

const timeline = document.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

const volumeSlider = document.querySelector(".volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  document.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

setInterval(() => {
  const progressBar = document.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  document.querySelector(".current").textContent = getTimeCodeFromNum(audio.currentTime);
}, 500);

document.querySelector(".volume-button").addEventListener("click", () => {
  const volumeMedium = document.querySelector(".volumeMedium");
  const volumeMute = document.querySelector(".volumeMute");
  const volumeSlider = document.querySelector(".volume-slider")
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeMute.classList.add("volumeMute--active");
    volumeSlider.classList.add("volume-slider--mute");
    volumeMedium.classList.remove("volumeMedium--active");
  } else {
    volumeMute.classList.remove("volumeMute--active");
    volumeMedium.classList.add("volumeMedium--active");
    volumeSlider.classList.remove("volume-slider--mute");
  }
});

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;
  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

audio.addEventListener('ended', function () {
  nextSong();
});

function nextSong() {
  playNum++;
  if (playNum > 3) {
    playNum = 0;
  };
  isPlay = false;
  playAudio();
}

playBox.addEventListener('click', function checkPlayBox(event) {
  let target = event.target;
  playItem.forEach((el) => {
    if (el !== target) {
      el.classList.remove('miniPause');
      el.classList.add('miniPlay');
    }
  });
  for (let i = 0; i < playList.length; i++) {
    if (playList[i].title === target.textContent) {
      playNum = i;
      break;
    }
  }
  if (target.classList.contains('miniPause')) {
    target.classList.add('miniPlay');
    target.classList.remove('miniPause');
    isPlay = true;
    playAudio();
  } else {
    target.classList.remove('miniPlay');
    target.classList.add('miniPause');
    isPlay = false;
    playAudio()
  }
});

/*================================================== Image API ==================================================*/

async function getLinkToUnsplash() {
  const url = `https://api.unsplash.com/photos/random?query=${tag}&client_id=HEnGRmu08XMA0TosW56W582lCagtmx705uyXKsXeb6U`;
  const res = await fetch(url);
  const data = await res.json();
  bgRef = data.urls.regular;
}

async function getLinkToFlickr() {
  let url;
  let TimeOfDay = getTimeOfDay();
  let gallery_id = flickrValues[TimeOfDay];
  if (['night', 'morning', 'afternoon', 'evening'].includes(tag)) {
  url = `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=49329db4ca07c7c26732f9690f94742b&tags=morning&extras=url_l&format=json&nojsoncallback=1&gallery_id=${gallery_id}&format=json&nojsoncallback=1`;
  } else {
    url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f15ff623f1198a1f7f52550f8c36057&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`};
  const res = await fetch(url);
  const data = await res.json();
  bgRef = data.photos.photo[randomNum].url_l;
}

/*================================================== Setting ==================================================*/
/*================================================== Setting ==================================================*/
/*================================================== Setting ==================================================*/

const settingButton = document.querySelector('.settings__button');
const settingBlock = document.querySelector('.settings__block');
const overlay = document.querySelector('.overlay');
const settingsBlockRight = document.querySelector('.settings__block-right');

settingButton.addEventListener('click', () => {
  if (settingsBlockRight.classList.contains('settings__block-right--active')) {
    settingsBlockRight.classList.remove('settings__block-right--active');
    settingButton.classList.toggle('settings__button--active');
    for (let i = 0; i < 4; i++) {
      settingsArr[i][1].classList.remove('show');
    }
    setTimeout(() => {
      settingBlock.classList.remove('settings__block--active');
      overlay.classList.remove('overlay--active');
    }, 300)
  } else {
    settingBlock.classList.toggle('settings__block--active');
    settingButton.classList.toggle('settings__button--active');
    overlay.classList.toggle('overlay--active');
  }
})
overlay.addEventListener('click', () => {
  overlay.classList.remove('overlay--active');
  settingButton.classList.remove('settings__button--active');
  if (settingsBlockRight.classList.contains('settings__block-right--active')) {
    setTimeout(() => {
      settingBlock.classList.toggle('settings__block--active');
    }, 300)
  } else {
    settingBlock.classList.toggle('settings__block--active');
    settingButton.classList.toggle('settings__button--active');
  }
  settingsBlockRight.classList.remove('settings__block-right--active');
  for (let i = 0; i < 4; i++) {
    settingsArr[i][1].classList.remove('show');
  }
})
const settingsBlockLeft = document.querySelector('.settings__block-left');

const settingsArr = {
  0: [document.querySelector('.settings__language'),
    document.querySelector('.language')
  ],
  1: [document.querySelector('.settings__source'),
    document.querySelector('.source')
  ],
  2: [document.querySelector('.settings__tag'),
    document.querySelector('.tag')
  ],
  3: [document.querySelector('.settings__show'),
    document.querySelector('.showen')
  ]
};

settingsBlockLeft.addEventListener('click', function (event) {
  let target = event.target;
  if (!target.matches('a')) return;
  settingsBlockRight.classList.add('settings__block-right--active');
  for (let i = 0; i < 4; i++) {
    if (settingsArr[i][0] === target) {
      setTimeout(() => settingsArr[i][1].classList.add('show'), 200)
    } else {
      settingsArr[i][1].classList.remove('show');
    };
  }
})

/*============================ Choose language ============================*/
const languageButtonBox = document.querySelector('.language__btn-box');
languageButtonBox.addEventListener('click', changeLang);

function changeLang() {
  if (languageButton.textContent === 'eng') {
    languageButton.classList.remove('language__button--eng');
    languageButton.classList.add('language__button--ru');
    languageButton.textContent = 'ru';
    lang = 'ru';
    if (city.value === 'Minsk') city.value = 'Минск';
    showTime();
    changeSettingsLanguage();
    getWeather();
    getQuotes();
  } else {
    languageButton.classList.remove('language__button--ru');
    languageButton.classList.add('language__button--eng');
    languageButton.textContent = 'eng';
    lang = 'eng';
    if (city.value === 'Минск') city.value = 'Minsk';
    changeSettingsLanguage();
    showTime();
    getWeather();
    getQuotes();
  }
}

/*============================ Select Image API ============================*/
const sourceSelect = document.querySelector('.source');
const sourceItem = document.querySelectorAll('.source__item');
sourceSelect.addEventListener('click', changeImageAPI);

function changeImageAPI(event) {
  let target = event.target;
  if (target.tagName != 'LI') return;
  for (let i = 0; i < 3; i++) {
    if (sourceItem[i] === target) {
      sourceItem[i].classList.add('source__item--active');
      imagesAPI = `${sourceItem[i].textContent}`;
      setBg();
    } else {
      sourceItem[i].classList.remove('source__item--active');
    };
  }
}

/*============================ Select tag ============================*/
const tagSelect = document.querySelector('.tag');
const tagItem = document.querySelectorAll('.tag__item');
tagSelect.addEventListener('click', changeImageTag);

function changeImageTag(event) {
  tag = '';
  let target = event.target;
  if (target.tagName != 'LI') return;
  if (imagesAPI === 'github') {
    alert('github is selected as current API, choose another API!')
    for (let i = 0; i < 9; i++) {
    tagItem[i].classList.remove('tag__item--active');
    }
  } else {
    for (let i = 0; i < 9; i++) {
      if (tagItem[i] === target) {
        tagItem[i].classList.add('tag__item--active');
        tag = target.textContent;
        setBg();
      } else {
        tagItem[i].classList.remove('tag__item--active');
      };
    }
  }
}
/*============================ Select show ============================*/
const showen = document.querySelector('.showen');
showen.addEventListener('click', changeShowen);
function changeShowen(event) {
  let target = event.target;
  if (target.tagName != 'DIV') return;
  showenButton.forEach((item) => {
    if (item === target || item.firstElementChild === target) {
      item.classList.toggle('show__button--off');
      hideBlock(item);
    }
  })
}
function hideBlock (item) {
  if (item.getAttribute('value') === 'time') {
    time.classList.toggle('hider')
  } else if (item.getAttribute('value') === 'date') {
    date.classList.toggle('hider')
  } else if (item.getAttribute('value') === 'greet') {
    document.querySelector('.greeting-container').classList.toggle('hider')
  } else if (item.getAttribute('value') === 'quote') {
    document.querySelector('.quote__block').classList.toggle('hider');
    document.querySelector('.change-quote').classList.toggle('hider');
  } else if (item.getAttribute('value') === 'weather') {
    document.querySelector('.weather').classList.toggle('hider');
  } else if (item.getAttribute('value') === 'audio') {
    document.querySelector('.player').classList.toggle('hider');
  } else if (item.getAttribute('value') === 'todo') {
    document.querySelector('.todo').classList.toggle('hider');
  }
}
function showArrCount () {
showArr = [];
showenButton.forEach((item, index) => {
  if (item.classList.contains('show__button--off')) {
    showArr.push(index);
  }
})
}

function changeSettingsLanguage() {
  if (lang === 'ru') {
  document.querySelector('.settings__language').textContent = 'Выбор языка';
  document.querySelector('.settings__source').textContent = 'API фона';
  document.querySelector('.settings__tag').textContent = 'Выбрать тег';
  document.querySelector('.settings__show').textContent = 'Убрать блок';
  document.querySelector('.language span').textContent = 'Выберите язык';
  document.querySelector('.source span').textContent = 'Выберите API для фоновой картинки';
  document.querySelector('.tag span').textContent = 'Выберите тег';
  document.querySelector('.showen').classList.add('translate');
  // document.querySelector('span[lang="pt"]').textContent = 'Убрать блок';
}
  else {
  document.querySelector('.settings__language').textContent = 'Language';
  document.querySelector('.settings__source').textContent = 'Source';
  document.querySelector('.settings__tag').textContent = 'Tag';
  document.querySelector('.settings__show').textContent = 'Show';
  document.querySelector('.language span').textContent = 'Choose language';
  document.querySelector('.source span').textContent = 'Select image API';
  document.querySelector('.tag span').textContent = 'Choose tag';

  }
}