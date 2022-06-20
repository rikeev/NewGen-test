// Заменил "левый null" на 0 и "правый null" на Infinity для сравнения.

let courses = [
   { name: "Courses in England", prices: [0, 100] }, 
   { name: "Courses in Germany", prices: [500, Infinity] }, 
   { name: "Courses in Italy", prices: [100, 200] }, 
   { name: "Courses in Russia", prices: [0, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, Infinity] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [0, Infinity] },
];

let requiredRange1 = [0, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, Infinity];

// Я использовал цикл for для перебора массива
for( let i=0; i<courses.length; i++) {

let pr = courses[i].prices;

// Создал функцию для фильтрации диапазона
   function filterRange(pr, a, b) {

      return pr.filter(item => (a <= item && item <= b));
   };

let filtered = filterRange(pr, 0, 200); // В аргумент можно подставить любой диапозон. В дальнейшем можно сделать input + button для ввода пользователем значений

// После фильтрации мы получаем список массивов и отсекаем пустые. 

   if (filtered.length > 0){

   alert ("Appropriate course:" +" " + courses[i].name + "." + " " + "Price range:" + " " +courses[i].prices.join("-"))

   }; 
};
// Выводим по одному название курса + диапозон цен отфильтрованных вариантов.




