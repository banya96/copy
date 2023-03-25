document.title="인생이 쉽냐?";

title.innerText ="get you";




const tobuy = ["e","l","h"];

console.log(tobuy[0]);
tobuy[3] = "d";
console.log(tobuy[3]);
tobuy.push("i");
console.log(tobuy[4]);

const player = {
    name:"jujin",
    age:28,


};
console.log(player);
player.name = "kimjujin";
console.log(player);
player.age = 27;
console.log(player);


const calculator= {
    plus:function(a,b){
        return a+b;
    },
    minus:function(a,b){
        return a-b;
    },
    divide:function(a,b){
        return a/b;
    },
    powerOf:function(a,b){
        return a**b;
    },

}
const plusresult=calculator.plus(3, 5);
const minusresult=calculator.minus(3, 5);
const divideresult=calculator.divide(minusresult, 10);
const powerOfresult=calculator.powerOf(minusresult, plusresult);

const age = parseInt(prompt("How old are you?"));
console.log(isNaN(age));

if(isNaN(age) || age < 0) {
    // condition ===true
    console.log("Please write a real positive number");
}else if (age < 18) {
    console.log("your too young.");
} else if(age >= 18 && age <=50) {
    console.log("you can dirnk");
}else if(age === 100){
    console.log("You are wiser.");
}
 else if(age > 50 && age <=80){
    console.log("You should exercise.");
} else if (age > 80){
    console.log("you can do whatever you want.")
};
const Todo=["coding","exersise","fund menigement"];
console.log(Todo[2]);
