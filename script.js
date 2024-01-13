const questionobj ={
    category: "food and drink",
    id: "qa-1",
    correctAnswer: "three",
    options: ["two","three","four","five"],
    question: "How many pieces of buns are in a Mcdonald's big Mac?"
};
// destructuring the needy elements
let score = 0;
const {correctAnswer, options, question} = questionobj;
// fetching the content
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

    // event handling on the button
    btn.addEventListener("click", ()=>{
        if(opt == correctAnswer){
            score++;
        }else{
            score = score-0.25;
        }
        console.log(score);
        scoreEl.textContent = `Score: ${score}`;
        questionEl.textContent = `quiz completed!!!`
        optionEl.textContent = "";
    })
});



