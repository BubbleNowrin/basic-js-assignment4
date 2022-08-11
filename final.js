//==============Assignment-4===============

//============Problem-01==============

function radianToDegree(radian) {

    // Error Check
    if (typeof (radian) != 'number') {
        return 'Enter a valid number';
    }

    //Radian to Degree Calculation
    let degree = radian * (180 / Math.PI);

    //Count Two Value After (.)
    let degreeTwoDot = degree.toFixed(2);

    //String Type to Number Type Convert
    let degreeFloat = parseFloat(degreeTwoDot);
    return degreeFloat;

}


//===========Problem-02==============

function isJavaScriptFile(string) {

    //Error Check
    if (typeof (string) != 'string') {
        return 'Enter a Valid String';
    }

    //Convert to lowercase
    let lowerString = string.toLowerCase();

    //Conditions Check
    if (lowerString.endsWith('.js')) {
        return true;
    }
    else {
        return false;
    }
}

//==========Problem-03=============

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {

    //Error Check
    if (typeof (dieselQuantity) != 'number' || typeof (petrolQuantity) != 'number' || typeof (octaneQuantity) != 'number') {
        return 'Enter a valid Quantity';
    }

    //Variable Declaration
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    //Count the Specific Oil Price
    let totalDieselPrice = dieselPrice * dieselQuantity;
    let totalPetrolPrice = petrolPrice * petrolQuantity;
    let totalOctanePrice = octanePrice * octaneQuantity;

    //Total Oil Price Calculation
    let totalOilPrice = totalDieselPrice + totalPetrolPrice + totalOctanePrice;

    return totalOilPrice;
}

//========Problem-04==========

function publicBusFare(personNumber) {

    //Error Check
    if (typeof (personNumber) != 'number' || personNumber < 0) {
        return 'Enter a valid person number';
    }

    //Variable Declaration
    const busCapacity = 50;
    const microCapacity = 11;
    const publicBusTicketPrice = 250;

    //Count the Remaining Person
    let busRemaining = personNumber % busCapacity;
    let microRemaining = busRemaining % microCapacity;

    //Calculate the Cost of Remaining Person
    let publicBusCost = microRemaining * publicBusTicketPrice;
    return publicBusCost;
}

//============Problem-05==============

function isBestFriend(object1, object2) {

    //Error Check
    if (typeof (object1) != 'object' || typeof (object2) != 'object') {
        return 'Enter a valid object';
    }

    //Conditions Check
    if (object1.name === object2.friend && object1.friend === object2.name) {
        return true;
    } else {
        return false;
    }
}