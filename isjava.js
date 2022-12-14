//ফাংশন নেম দিতে হবে isJavaScriptFile । 
//এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। 
//যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে 
//আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

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

console.log(isJavaScriptFile(false));