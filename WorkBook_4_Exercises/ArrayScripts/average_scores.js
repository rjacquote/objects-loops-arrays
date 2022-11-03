let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAvergae(scores){
    let sum = 0;
    let average = 0;
    let scoreNum = scores.length;

    for(let i = 0; i < scoreNum; i++){
        sum += scores[i];
        console.log(sum);
    }

    average = (sum/scoreNum).toFixed(2);
    console.log(average);

    return average;
}

console.log(`The average is: ${getAvergae(myScores)}`);
console.log(`The average is: ${getAvergae(yourScores)}`);