'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var FIRSTNANE = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARDS = 4;
var wizards = [];

// функция генерации случайных данных из массива
var getRandomValue = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// функция создания DOM-элемента на основе JS-объекта
var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = getRandomValue(FIRSTNANE).concat(' ') + getRandomValue(SURNAME);
  wizardElement.querySelector('.wizard-coat').style.fill = getRandomValue(COAT_COLOR);
  wizardElement.querySelector('.wizard-eyes').style.fill = getRandomValue(EYES_COLOR);

  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов
var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_WIZARDS; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
