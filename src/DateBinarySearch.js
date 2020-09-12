function DateBinarySearch(objArr, dateString){
    let start = 0, end = objArr.length-1, targetDate = new Date(dateString);
    let mid;
    while(start <= end){
        //get the middle indices of the array
        mid = Math.floor((start + end) / 2);

        if(objArr[end] <= targetDate){
            mid = end + 1;
            console.log(mid);
            break;
        }
        let arrDate = new Date(objArr[mid])

        if(arrDate < targetDate){
            start = mid + 1;
        }
        else if(arrDate > targetDate){
            end = mid - 1;
        }
        else {
            break;
        }
    }
    return mid;
}

let test = ["1-2-20", "5-23-20", "6-2-20", "8-23-20", "9-12-20"];
DateBinarySearch(test, "12-2-20");
