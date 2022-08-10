//একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।
//প্রতিটি বাসের ক্যাপাসিটি ৫০ জন
//প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন
//পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।
//এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare
//যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে ।
//মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

function publicBusFare(personNumber) {

    //Error Check
    if (typeof (personNumber) != 'number') {
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

// console.log(publicBusFare(55));