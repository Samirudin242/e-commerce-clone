function moneyConver(string) {
    let result = "";
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== ".") {
            result += string[i]
        }
    }
    return result;
}



function moneyFormat(input) {

    let string = input.toString();
    let temp = '';
    let count = 0; 
    for(let i = 0; i < string.length; i++) {
        temp += string[string.length - i - 1];
        count++;
        if(count === 3 && i !== string.length - 1) {
            temp += ".";
            count = 0;
        }
    }

    let result = "";

    for(let i = temp.length - 1; i >= 0; i--) {
        result += temp[i];
    }
    
    return result
    
}


module.exports = {
    moneyConver,
    moneyFormat
}

