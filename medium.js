function sharePizza(totalSlices , numberOfPeople){

    const slicesPerPerson = totalSlices / numberOfPeople;

    const roundedSlices = Math.floor(slicesPerPerson);

    return `Each person gets ${roundedSlices} slices of pizzas; from our ${totalSlices} slice pizza`

}

console.log(sharePizza(10 , 4))