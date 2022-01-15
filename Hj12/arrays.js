function array_revers(numbers){
 numbers = ["one", "two", "three", "four"]
   let n = numbers.length
   console.log(n);
   for(let i = 0;i<n-1;i++){
const newStrucrute = numbers.unshift(numbers[n-1])
console.log(numbers);
   }

}

array_revers();
