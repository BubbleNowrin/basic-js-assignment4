//ফাংশন নেম দিতে হবে oilPrice। 
//এই ফাংশন তিনটা প্যারামিটার নিবে।

//Variable declare
//প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
//প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
//প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

//quantity
//এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় 

//total cost
//তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

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

// console.log(oilPrice(0, 1, 2));