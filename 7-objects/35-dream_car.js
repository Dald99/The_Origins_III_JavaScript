const car = {
    model: 'Honda',
    year: 2004,
    color: 'Gray',
    new: false,
}

if (car.new) {
    console.log(`I'm looking for a ${car.year} ${car.model} in ${car.color} color that is new`)
} else {
    console.log(`I'm looking for a ${car.year} ${car.model} in ${car.color} color that is used`)
}