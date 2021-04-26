var d= ["anna","park","racecar","lmno",'12321'];
var pali=[];
for(var i=0;i<d.length;i++){
var e=d[i].split('').reverse().join("");
if(e === d[i]){
    pali.push(e);
}
}
console.log(pali);