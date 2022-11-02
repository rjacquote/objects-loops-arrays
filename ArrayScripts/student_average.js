let students = [{name: "Zephaniah", scores: [100, 96, 99, 92]},
{name: "Pusalane", scores: [92, 89, 96, 100, 94]},
{name: "Siddalee", scores: [86, 72, 92]},
{name: "Ian", scores:[98, 84, 89, 100, 100, 76]},
{name: "Elisha", scores: [89, 100]},
{name: "Ezra", scores: [100, 99, 100, 87]}];

function studentAverageScores(list){
    let studentList = list.length;
    for(let i = 0; i < studentList; i++){
        let name = list[i].name;
        let average = 0;
        let sum = 0;
        let scoresLength = list[i].scores.length;
        for(let x = 0; x < scoresLength; x++){
             sum += list[i].scores[x];
        }
        average = (sum/scoresLength).toFixed(2);
        console.log(`${name} average is: ${average}`);
    }
}

studentAverageScores(students);