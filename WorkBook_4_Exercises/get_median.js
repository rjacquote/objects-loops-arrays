let grades = [80, 90, 92, 100, 83, 86];
let grades2 = [80, 90, 92, 100, 83];
let grades3 = [76, 59, 80, 89, 100, 92, 79];
function sortNumberAscending(x, y){
    return x - y;
}

function getMedian(grades){
    grades.sort(sortNumberAscending);
    console.log(grades);
    if(grades.length%2 == 0){
        let grade1 = grades[grades.length/2];
        let grade2 = grades[(grades.length/2)-1]
        let median = ((grade1 + grade2)/2).toFixed(2);
        console.log(`The grade median is: ${median}`)
    }
    else{
        let median = grades[(grades.length-1)/2];
        console.log(median);
        console.log(`The grade median is: ${median}`);
    }
    
}

getMedian(grades);
getMedian(grades2);
getMedian(grades3);