

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
title: `Which of the following is not a feature of the Pearson's correlation coefficient ($r$)?`,
cellType: "html",
choices: [
"$r$ is not invariant to nonlinear transforms of the data",
"$r$ is easily affected by outliers",
"$r$ does not exist for variables that do not have a finite variance",
"$r$ changes when either variable is multiplied by a positive constant or shifted by any constant"
],
correctAnswer: "$r$ changes when either variable is multiplied by a positive constant or shifted by any constant"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `What is the difference between Pearson correlation and Spearman's rho correlation?`,
cellType: "html",
choices: [
"Pearson correlation is variant to linear transforms of the data whereas Spearman's rho correlation is not",
"Pearson correlation is symmetric between random variables whereas Spearman's rho correlation is not",
"Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated on ranks of the data",
"Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated using the concept of concordance",
"Pearson correlation ranges between -1 and 1 whereas Spearman's rho correlation can take a value outside of this range"
],
correctAnswer: "Pearson correlation is calculated on the data directly whereas Spearman's rho correlation is calculated on ranks of the data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is not true of tail dependent coefficients`,
cellType: "html",
choices: [
"Tail dependence coefficients must be between 0 and 1",
"Bivariate distributions often have sufficient observations at the tail end hence easy to find easy to estimate the tail dependence coefficient",
"The tail dependence coefficient is defined as a limit",
"Upper tail-independent suggests that the extreme values of the two variables are related to each other"
],
correctAnswer: "Bivariate distributions often have sufficient observations at the tail end hence easy to find easy to estimate the tail dependence coefficient"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary3EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz161Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult161');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement161").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
