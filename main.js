//დავალება 1

// function customReplace(string, valueToReplace, valueToReplaceWith) {
//     let result = '';
//     let currentIndex = 0;
//     const targetLength = valueToReplace.length;

//     for (let i = 0; i < string.length; i++) {
//         if (string.slice(i, i + targetLength) === valueToReplace) {
//             result += string.slice(currentIndex, i) + valueToReplaceWith;
//             i += targetLength - 1;
//             currentIndex = i + 1;
//         }
//     }

//     if (currentIndex < string.length) {
//         result += string.slice(currentIndex);
//     }

//     return result;
// }

// const string = "Hello world!";
// const replacedString = customReplace(string, "Hello", "Hi");
// console.log(replacedString);


//დავალება 2

// function capitalizeWords(sentence) {
    
//     const words = sentence.split(" ");
//     const capitalizedWords = words.map(word => {
//             return word.charAt(0).toUpperCase() + word.slice(1);
//     });

//     return capitalizedWords.join(" ");
// }

// const sentence = "hello world this is a test sentence";
// const capitalizedSentence = capitalizeWords(sentence);
// console.log(capitalizedSentence);

//დავალება 3

function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

const users = [{name: 'Lasha', age: 30},{name: 'luka', age:15}, {name: 'Saba', age: 20}];
const sortedUsers = sortByAge(users);
console.log(sortedUsers);





