const {moneyConver }= require("../helper/moneyConver")

function sortingTermurah(arr) {
    // let array = [];

    for(let i = 0; i < arr.length; i++) {
        let temp = [i, arr[i]];
        for(let j = i; j < arr.length; j++) {
            if(Number(moneyConver(arr[j].price)) <  Number(moneyConver(temp[1].price))) {
                temp = [j, arr[j]];
            }
        }

        if(i !== temp[0]) {
            let tempArr = arr[i]
            arr[i] = arr[temp[0]];
            arr[temp[0]] = tempArr
        }

        
    }
    return arr

}


function sortingTermahal(arr) {
    // let array = [];

    for(let i = 0; i < arr.length; i++) {
        let temp = [i, arr[i]];
        for(let j = i; j < arr.length; j++) {
            if(Number(moneyConver(arr[j].price)) > Number(moneyConver(temp[1].price))) {
                temp = [j, arr[j]];
            }
        }

        if(i !== temp[0]) {
            let tempArr = arr[i]
            arr[i] = arr[temp[0]];
            arr[temp[0]] = tempArr
        }

        
    }
    return arr;

}



module.exports = {
    sortingTermurah, 
    sortingTermahal
}




const data = [
    {
        price: "1.000"
    }, 
    {
        price: "30.000"
    },
    {
        price: "10.000"
    },
    {
        price: "100.000"
    },
    {
        price: "20.000"
    }
]


// console.log(data);
// console.log(sortingTermurah(data))