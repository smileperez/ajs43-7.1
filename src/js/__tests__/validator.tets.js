import Validator from '../validator';

test.each([
  ['smile-perez', true],
  ['smile_perez', true],
  ['привет', false],
  ['smile-per3z', true],
  ['-smileperez', false],
  ['smileperez-', false],
  ['_smileperez', false],
  ['smileperez_', false],
  ['smil3333perez', false],
  ['33smileperez', false],
  ['smileperez33', false],
  ['netology123', false],
  ['lol---lol', true],
  ['Fra#ggg%er', false],
])(('Тестирование регулярного выражения'), (name, bool) => {
  expect(Validator.validateUsername(name)).toBe(bool);
});