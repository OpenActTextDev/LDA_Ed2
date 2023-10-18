

function init() {

var json = { 
pages: [{questions: [{
type: "html",
html: 
"<h3>Does This Make Sense?</h3>Quiz questions allow for immediate assessment of your understanding of a section. Try them out. Click on <b>'Start Quiz'</b> button when you are ready."
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 1</b>",
choicesOrder: "random",
title: `Which is not an important actuarial task to be undertaken at the portfolio level?`,
cellType: "html",
choices: [
"Quantifying the impact of extreme events",
"Determining overall portfolio risk",
"Managing insurance portfolios through reinsurance",
"Studying the probability of zero claims"
],
correctAnswer: "Studying the probability of zero claims" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `What is a reinsurer?`,
cellType: "html",
choices: [
"An insurance company that serves insurers",
"An insurance company focusing on residual markets",
"A subsidiary of an insurance company",
"An insurance company domiciled in a foreign country",
"An insurance company specializing sales via social media"
],
correctAnswer: "An insurance company that serves insurers"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary2EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz13A1Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult13A1');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement13A1").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
