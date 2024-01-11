const questionobj ={
    category: "food and drink",
    id: "qa-1",
    correctAnswer: "three",
    options: ["two","three","four","five"],
    question: "How many pieces of buns are in a Mcdonald's big Mac?"
};
// destructuring the needy elements
const {correctAnswer, options, question} = questionobj;
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
// manipulating the dom 
questionEl.textContent = question;
//  adding buttons on the option div
options.forEach((opt) =>{
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);
})
