<script>
/* Taking the help of the expression({1*1+2*2+3*3...} and {1*1*1+2*2*2+3*3*3...}) 
   as Abdul suggested in the session..
   I wrote the following functions to get the values of the expressions using functional programming */
function sumOfSquares(arr){
     return arr.length == 0 ? 0 : sum(square(arr[0]),sumOfSquares(arr.slice(1)))
}

function sumOfCubes(arr) {
  return arr.length == 0 ? 0 : sum(cube(arr[0]),sumOfCubes(arr.slice(1)))
}


function sumOfPowers(arr, power, sumOfPower) {
  return arr.length == 0 ? 0 : sum(power(arr[0]),sumOfPower(arr.slice(1)))
}


const square = (x) => x * x;

const cube = (x) => x * x * x;

const sum = (a,b) => a + b;

console.log(`Sum of SQUARES of 1,2,3 is ${sumOfPowers([1,2,3],square,sumOfSquares)}`);
console.log(`Sum of CUBEES of 1,2,3 is ${sumOfPowers([1,2,3],cube,sumOfCubes)}`);

/*Following is the code using map andd reduce
  map - to apply the required power (like square or cube)
  reeduce - to apply the sum of power values*/

const powerOf = (x,n) => x ** n
  
function SumOfPowers(arr,power)
{
  return arr.map(x =>powerOf(x,power)).reduce((powerSum,x) => powerSum + x)
}

console.log(`Sum of SQUARES using map and reduce of 1,2,3 is ${SumOfPowers([1,2,3],2)}`);
console.log(`Sum of CUBEES using map and reduce of 1,2,3 is ${SumOfPowers([1,2,3],3)}`);


</script>

