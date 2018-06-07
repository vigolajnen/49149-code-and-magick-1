'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarList = document.querySelector('.setup-similar-list');

var userName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var userSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var userCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var userEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

// функция генерации случайного значения из массива
var getRandomValue = function (array) {
  for (var i = 0; i < array.length; ++i) {
    var rand = Math.floor(Math.random() * array.length);
    array[i] = array[rand];
  }
  // console.log(array[rand]);
  return array[rand];
};

// функция генерации случайного имени и фамилии волшебника
var wizardName = function (arrayName, arraySurname) {
  wizardName = getRandomValue(arrayName) + ' ' + getRandomValue(arraySurname);
  // console.log(wizardName);
  return;
};

wizardName(userName, userSurname);
getRandomValue(userCoatColor);
getRandomValue(userEyesColor);

// функция генерации объекта wizard со случайными параметрами
// - name
// - coatColor
// - eyesColor

// var renderWizard = function (nameRand, coatColorRand, eyesColorRand) {

// };

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  similarList.appendChild(wizardElement);
}
