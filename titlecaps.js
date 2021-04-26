var str="hello world sorry fun flower sun";
console.log(str.split(" ").map(x => x[0].toUpperCase()+x.substr(1).toLowerCase()).join(" "));