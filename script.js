const questionobj ={
    category: "food and drink",
    id: "qa-1",
    correctAnswer: "three",
    options: ["two","three","four","five"],
    question: "How many pieces of buns are in a Mcdonald's big Mac?"
};
const {correctAnswer, options, question} = questionobj;
const questionEl = document.getElementById("question");
questionEl.textContent = question;
