var arr = [1,2,3,33,4,5,6,7,8,11,13,24,15,37,39];
var prime ="";
for(var i=0;i<arr.length;i++){
    var count= 0;
    for(var j=1;j<=arr[i];j++){
        if(arr[i]%j===0){
            count++;
        }
    }
    if(count===2){
        prime += arr[i]+ " ";
    }
}
console.log(prime);