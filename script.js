// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.
// let str = "LIGHTCODE PROGRAMMING"
// console.log(str.length -12)

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// let str = "Максимально УЖАСНО"
// console.log(str.substring(12,18).toLowerCase())

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// let str = "максимально УЖАСНО"
// console.log(str.substr(0,11).toUpperCase())

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// let str = "Максимально Ужасно"
// console.log(str.slice(5,18))

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки
// let str = "Максимально "
// let str2 = "Ужасно"
// console.log(str + str2)

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// let str = "Максимально Ужасно"
// console.log(str.indexOf("У"))
// console.log(str.lastIndexOf("о"))

// 7. Вам дана переменная str = 'Максимально Ужасно'.

//     Выведите в консоль "встречается более 1 раза",

//     если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = "Максимально Ужасно"
// if(str.lastIndexOf("a") === str.indexOf("a") && str.lastIndexOf("a") !== -1){
//     console.log("встречается менее одного раза")
// }else{
//     console.log("встречается более 1 раза")
// }

//    8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// let str = "Максимально Ужасно"
// console.log(str.indexOf("а"))

//    9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// let str = "Максимально Ужасно"
// console.log(str.indexOf("о"))
// console.log(str.lastIndexOf("о"))


// 10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.
// let str = "aaa bbb ccc"
// console.log(str.substr(4,3))
// console.log(str.substring(4,7))
// console.log(str.slice(4,8))