let names = [1,2,3,2,6];
let k= 3;
for(var i=0;i<k;i++){
 names.unshift(names.pop());
}
console.log(names);