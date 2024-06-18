
const array = [1,3,3,67,34,56,33,2,2,1,7,7]
const newArrayPayred = [];

array.forEach((n,i,array)=> {
  if (array.indexOf(n) !== i) {
    newArrayPayred.push(n);
  }
}
)
console.log(newArrayPayred);