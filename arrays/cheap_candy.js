let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   function getPrice(candy){
    let product = [];
    for(let i = 0; i < candy.length; i++){
        if(candy[i].price < 4.00){
            product.push(candy[i]);
            console.log(`${candy[i].product} is less than $4.00`);
        }
    }
    console.log(product);
   }

   function getMandM(candy){
    let product = [];
    for(let i = 0; i < candy.length; i++){
        if(candy[i].product.substring(candy[i].product.indexOf(" ") + 1) == "M&Ms"){
            product.push(candy[i]);
            console.log(`${candy[i].product} contains M&Ms`);
        }
        
    }
    console.log(product);
   }

   function getSwedishFish(candy){
    let confirm = false;
    for(let i = 0; i < candy.length; i++){
        if(candy[i].product == "Swedish Fish"){
            confirm = true; 
            break;
        }
    }
    
    console.log(confirm);

    if(confirm)
    {
        console.log('We do carry Swedish Fish.');
    } else {
        console.log('We do not carry Swedish Fish');
    }
    
   }

   getPrice(products);
   getMandM(products);
   getSwedishFish(products);