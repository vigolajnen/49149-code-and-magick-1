'use strict';

document.querySelector('.setup').classList.remove('hidden');
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

var renderWizard = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < QUANTITY_WIZARDS; i++) {
  fragment.appendChild(renderWizard(createWizard()));
}
similarListElement.appendChild(fragment);
