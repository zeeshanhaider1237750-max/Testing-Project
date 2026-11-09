export let analyzer = (array) => {
   let sum = 0;
   for(let i = 0; i <= array.length - 1; i++){
    sum = sum + array[i];
   }
   let Length = array.length;
   let Average = sum/Length;
   let Min = Math.min(...array);
   let Max = Math.max(...array);
   return {Average, Length, Min, Max};
}