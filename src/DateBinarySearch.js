function DateBinarySearch(objArr, dateString){
    let start = 0, end = objArr.length-1, targetDate = new Date(dateString);
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        let arrDate = new Date(objArr[mid].date)

        if(arrDate < targetDate){
            start = mid + 1;
        }
        else if(arrDate > targetDate){
            end = mid - 1;
        }
        else if(arrDate.getTime() === targetDate.getTime())
    }
}

let test = new Date("8-7-2020");
console.log(test.getTime())