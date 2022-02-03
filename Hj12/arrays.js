array = ["one", "two", "three", "four", 'five'];
let i = 0;
let j = array.length - 1;

while(j>i){
   let a = array[j]
   array[j]=array[i] 
   array[i]=a
   j--
   i++
}
console.log(array)
