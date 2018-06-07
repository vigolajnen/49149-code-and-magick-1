'use strict';

document.querySelector('.setup').classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
document.querySelector('.setup-similar').classList.remove('hidden');

var FIRSTNANE = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var QUANTITY_WIZARDS = 4;


var getRandomValue = function (array) {
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

var createWizard = function () {
  return {
    name: getRandomValue(FIRSTNANE).concat(' ').concat(getRandomValue(SURNAME)),
    coatColor: getRandomValue(COAT_COLOR),
    eyesColor: getRandomValue(EYES_COLOR)
  };
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_WIZARDS; i++) {
  fragment.appendChild(renderWizard(createWizard()));
}
similarListElement.appendChild(fragment);
