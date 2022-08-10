//ফাংশন নেম দিতে হবে radianToDegree । 
//এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। 
//তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। 
//রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে। 

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
// console.log(radianToDegree(199));

