const departTripTicket = {
    name: 'Daniel',
    from: 'Lagos',
    to: 'Abuja',
    businessClass: false,
    upgrade: () => {
        if (departTripTicket.businessClass) {
            console.log('You are already in business class')
        } else {
            departTripTicket.businessClass = true
            console.log('Upgrade successful')
        }
    }
}

const returnTripTicket = {
    name: 'Bianca',
    from: 'New York',
    to: 'Lagos',
    businessClass: true,
    upgrade: () => {
        if (returnTripTicket.businessClass) {
            console.log('You are already in business class')
        } else {
            returnTripTicket.businessClass = true
            console.log('Upgrade successful')
        }
    }
}

departTripTicket.upgrade()
returnTripTicket.upgrade()


//Bonus
departTripTicket.leaveTime = 10
departTripTicket.arriveTime = 23

returnTripTicket.leaveTime = 2
returnTripTicket.arriveTime = 12

departTripTicket.flightTime = () => console.log(`Your flight time is ${departTripTicket.arriveTime - departTripTicket.leaveTime} hours`)
returnTripTicket.flightTime = () => console.log(`Your flight time is ${returnTripTicket.arriveTime - returnTripTicket.leaveTime} hours`)

departTripTicket.flightTime()
returnTripTicket.flightTime()