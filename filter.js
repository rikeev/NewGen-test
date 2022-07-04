let courses = [
   { name: "Courses in England", prices: [0, 100] }, 
   { name: "Courses in Germany", prices: [500, null] }, 
   { name: "Courses in Italy", prices: [100, 200] }, 
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Создал функцию для фильтрации диапазона
function findRangeIntersection(prices, range) {

// Прописал условия для замены null (Необходимо для сравнения)
   prices[0] = prices[0] === null ? -Infinity : prices[0]
   prices[1] = prices[1] === null ? Infinity : prices[1]

   range[0] = range[0] === null ? -Infinity : range[0]
   range[1] = range[1] === null ? Infinity : range[1]

   let filtered = prices.filter(item => (range[0] <= item && item <= range[1]));
   return filtered.length > 0;
};

//Создал функцию для отбора курсов, соответствующих заданным диапазонам  
function selectGoodCourses(requiredRange){
   console.log('=======================================') // Для наглядности разделения вариантов сортировки в консоли
   let selectedCourses = []
   for( let course of courses) {
      if (findRangeIntersection(course.prices, requiredRange)){
         selectedCourses.push(course)
      }; 
   };

   //С помощью метода .sort() сделал сортировку по минимальной цене 
   selectedCourses.sort((a, b) => a.prices[0] - b.prices[0])
   //Идем по массиву из подобранных курсов и выводим в консоль название и цену курса от мин к макс
   for (let selectedCourse of selectedCourses){
      console.log(`name ${selectedCourse.name} price ${selectedCourse.prices[0]}`);
   }
}

//Вызываем функцию для фильтрации согласно каждому заданному диапазону
selectGoodCourses(requiredRange1)
selectGoodCourses(requiredRange2)
selectGoodCourses(requiredRange3)

