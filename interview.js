set numbers = { 1, 2, 3, 4}
{
    { 1 }, { 2 }, { 3 }, { 4 },
    { 1, 2 }, { 1, 3 }, { 1, 4 }, { 2, 3 }, { 2, 4 }, { 3, 4 },
    { 1, 2, 3 }, { 1, 2, 4 }, { 1, 3, 4 }, { 2, 3, 4 },
    { 1, 2, 3, 4 }
}
let hashTwoSum = (array, sum) => {
    let obj = {}
    let nums = []    
    for (let i = 0; i < array.length; i++) {
      let addend = sum - array[i]  
        if (addend in obj){
            nums.push([addend, array[i]])
        }
        obj[array[i]] = i
    }
    return nums
}

 
// hr good answer
// on call center you know a good listener // ترتيب افكار // الذكاء العاطفي // من نبرة الشخص بميز
// السؤال تاع التيم ليدر انه كيف تقنعه بكود الجواب انه ما صار تيم ليدر الا لانه عنده معرفه اكثر منك

// Technical => 

/*
في ال OOP كان ممتاز

 CDN  اقرا عنه 
 copmonent lifecycle اقار عنهم 
 web back and babel  اقرا عنه 
 http & https اقرا عنه 
 Two binding in angualer
 dependancy injection in angualr

 افضل طريقة طريقة لتفريغ الArray 

*/
// convert str to an array 
// we need to reverse array 

// we convert array to string agian 
// and compare if reversed string  is equal original string 

const palindrome = (str) => {
    arrStr = str.split('');
    lastIndex = arrStr.length - 1;
    for (let i = 0; i < lastIndex / 2; i++) {
        [arrStr[i], arrStr[lastIndex - i]] = [arrStr[lastIndex - i], arrStr[i]]
    }
    return (str === arrStr.join('')) ? true : false;
};

palindrome("dad");

// 1. في البداية كان في ضغط
// 2. احكي عن قصة المي الزرقاء
// medical situation

// 3. احكي عن اسوء انواع الموظفين
// جاوب بشكل ايجابي وما تحكي اشي سلبي

// 4. كوكيز اقل سيكور

// 5. ادرس عن الدوكت تايب

// 6. CSS box model ?
//     descripe area element

// 7. read more about sticky position
// 8. CORS ?
//     9. CDN ? content delivery content
// 10. Mysql يجب ذكر انها اوبن سورس و ريليشنال داتا بيس
// 11. relational dabases
// 12. ادرس عن الداتابيس كويري
// 13. ادرس على  Redux

// 14. react hooks you must know version
// 15. OOP ??????????????????????????????????????

//     OOP interview questions

// 16. syncro do block to instrections
// async will dont

// 17. Software development lifecylce
// plan
// development
// test
// deploy
// manage

// const brimaryOrNotNum = (num) => {
//     if (num === 1) return 'NO';
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) return "NO";
//     }
//     return "YES";
// }

// brimaryOrNotNum(5);


// Dont ask q you can know answer on description and instead it in another q for wxample 
// no specific q
// what meholodigy

// write sodoucode

// talk about hours lectures, more than details

// not TL you can achieve a person have a good knoladge as TL

// Time mangemant opposite work in extra houres outside main attendence

// ************************************************ Multiples of 3 and 5 *************************************************************** // 
const multiplesOf3And5 = (num) => {
    let multiples = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples += i;
        };
    }
    return multiples;
};

/* Examples : 
multiplesOf3And5(9); // => 14
multiplesOf3And5(10); // => 23
multiplesOf3And5(1000); // => 233168
*/

// ************************************************ Even Fibonacci numbers *************************************************************** // 
const evenFibonacci = () => {
    const fibonacciSeries = [1, 2];
    let a = 1, b = 2, c;
    for (let i = 2; i < 10; i++) {
        c = b + a;
        fibonacciSeries.push(c);
        a = b;
        b = c;
    }
    let multiples = 0;
    for (let i = 0; i < fibonacciSeries.length; i++) {
        if (i % 2 === 0) {
            multiples += fibonacciSeries[i];
        };
    }
    return multiples;
};

/* Examples :
evenFibonacci(); // =>
*/