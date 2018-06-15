'use strict';

//document.querySelector('.setup').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
document.querySelector('.setup-similar').classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARDS = 4;

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomValue = function (array) {
  var rand = getRandomInt(0, array.length - 1);
  return array[rand];
};

var fullName = function (firstName, lastName) {
  var name = getRandomValue(firstName) + ' ' + getRandomValue(lastName);
  var nameReverse = getRandomValue(lastName) + ' ' + getRandomValue(firstName);
  return (getRandomInt(0, 1)) ? name : nameReverse;
};

var createWizard = function () {
  return {
    name: fullName(firstNames, surnames),
    coatColor: getRandomValue(coatColors),
    eyesColor: getRandomValue(eyesColors)
  };
};

var wizards = [];
for (var j = 0; j < QUANTITY_WIZARDS; j++) {
  wizards.push(createWizard());
}

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

// Открытие/закрытие окна настройки персонажа:
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var coatColorInput = document.querySelector('input[name=coat-color]');
var eyesColorInput = document.querySelector('input[name=eyes-color]');
var fireballColorInput = document.querySelector('input[name=fireball-color]');
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Изменение цвета мантии персонажа по нажатию.
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomValue(coatColors);
  coatColorInput.value = wizardCoat.style.fill;
});

// Изменение цвета глаз персонажа по нажатию.
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomValue(eyesColors);
  eyesColorInput.value = wizardEyes.style.fill;
});

// Изменение цвета фаерболов по нажатию.
wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomValue(fireballColor);
  fireballColorInput.value = wizardFireball.style.background;
});
