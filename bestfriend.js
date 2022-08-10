//তোমাকে একটি ফাংশন লিখতে হবে isBestFriend
//যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে ।
//তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা ।
//যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে ,
//না হলে false রিটার্ন করবে ।

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

// let obj1 = { name: 'babul', friend: 'abul' };
// let obj2 = { name: 'abul', friend: 'babul' };
// console.log(isBestFriend(obj1, obj2));


//|| Array.isArray(object1) != 'object' || Array.isArray(object1) != 'object'