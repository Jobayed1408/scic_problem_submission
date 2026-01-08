let nameHello = 'hello' 

let reverseStr = ''

for(let i=nameHello.length -1; i>=0; i--){
    reverseStr = reverseStr+ nameHello[i]
}
console.log(reverseStr)

// prolem2

let name = 'programming'
let count = 0
for(let i=0; i<name.length; i++){
    if(name[i]==='a' || name[i]==='e' || name[i]==='i' || name[i]==='o' || name[i]==='u'){
        count += 1;
        
    }
}
console.log(count)

// problem3

let str = 'madam'
let flag = true 
for(let i=str.length-1, j=0; i>=str.length/2, j<str.length/2; i--,j++){
   
        if(str[i] !== str[j]){
            flag=false 
        }
    
}
if(flag) {
    console.log(`${str} is a palindrome`)
}
else {
    console.log(`${str} is not a palindrome`)
}

// problem4 

let num = [5, 1, 9, 3]
let max = num[0]
for(let i=1; i<num.length; i++){
    if(num[i]>max){
        max = num[i]
    }
}
console.log(max)

// problem5

let numbers = [1, 2, 2, 3, 4, 4]
let frequency = {}
let uniqueNumbers = []

for(let i=0; i<numbers.length; i++){
    let num = numbers[i]
    if(frequency[num]){
        frequency[num] += 1
    } else {
        frequency[num] = 1
        uniqueNumbers.push(num)
    }
}
console.log(uniqueNumbers)

// problem6

let numbersArray =  [1, 2, 3, 4]
let sum = 0 
for(let i=0; i<numbersArray.length; i++){
    sum += numbersArray[i]
}
console.log(sum)

// problem7
let evenArray = [1, 2, 3, 4, 5, 6]
let evenNumbers = []
for(let i=0; i<evenArray.length; i++){
    if(evenArray[i] % 2 === 0){
        evenNumbers.push(evenArray[i])
    }
}
console.log(evenNumbers)

// problem8

let capitalizeStr = "hello world"
let resultStr = ''
for(let i=0; i<capitalizeStr.length; i++){
    if(i===0 || capitalizeStr[i-1] === ' '){
        resultStr += capitalizeStr[i].toUpperCase()
    }
    else{
        resultStr += capitalizeStr[i]
    } 
}
console.log(resultStr)

// problem9

let factorialNum = 5
let factorialResult = 1
for(let i=1; i<=factorialNum; i++){
    factorialResult *= i
}
console.log(factorialResult)

// problem10
let pingpongNum = 20
let resultStrPingPong = []
for(let i=1; i<=pingpongNum; i++){
    if(i%5==0 && i%3==0){
        resultStrPingPong.push('PingPong');
        
    }
    else if(i%3==0){
        resultStrPingPong.push('Ping');
    }
    else if(i%5==0){
        resultStrPingPong.push('Pong');
    }
    else{
        resultStrPingPong.push(i);
    }
}

console.log(resultStrPingPong.join(', '))
