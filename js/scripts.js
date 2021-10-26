const x = 4, y = 9;
const R = 10;
const lengthA = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
const checkA = lengthA < R ? alert('Точка А лежит в окружности') : alert('Точка А лежит за пределами окружности');