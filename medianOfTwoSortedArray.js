var arr = function(arr1,arr2){
    var merged=[];
    var one=arr1.length;
    var two=arr2.length;
    var i =0;
    var j =0;
    var median = 0;
    while(i<one && j<two){
        if(arr1[i]<arr2[j]){
            merged.push(arr1[i]);
            i++;
        }else{
            merged.push(arr2[j]);
            j++;
        }
    }
    if(i<one){
        for(var k=i;k<one;k++){
            merged.push(arr1[k]);
        }
    }
    if(j<two){
        for(var l=j;l<two;l++){
            merged.push(arr2[l]);
        }
    }
    if(merged.length%2===0){
        median=(merged[(merged.length/2)-1]+merged[merged.length/2])/2;
    }else{
        median=merged[math.floor(merged.length/2)];
    }
    return median;
}
console.log(arr([1,12,15,26,38],[2,13,17,30,45]));