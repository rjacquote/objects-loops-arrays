let lunch = [{ item: "Steak Fajitas", price: 9.95 },
{ item: "Chips and Guacamole", price: 5.25 },
{ item: "Sweet Tea", price: 2.79 }];

function getLunchCost(meal){
    let mealOrder = meal.length;
    let sum = 0;

    for(let i=0; i <mealOrder; i++){
        sum += meal[i].price;
        console.log(sum);
    }

    return sum;
}

let mealCost = getLunchCost(lunch);
let tip = mealCost * 0.18;

let tipWithTotal = mealCost + tip;
tipWithTotal = tipWithTotal.toFixed(2);
console.log(`The total cost is: $${tipWithTotal}`);