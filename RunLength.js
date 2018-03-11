function stringsort(str){
var output = 0;

for(var i = 0; i < str.length; i++){
    var enlen = 1;
    while (i + 1 < str.length
    && str.charAt(i) == str.charAt(i + 1)){
        enlen++;
        i++;
    } 
    
    output += str.charAt(i);
    output += enlen;
}
return output.toString();
}

var value = 'tttaaahhdffbb';
var newout = stringsort(value);
console.log(newout);