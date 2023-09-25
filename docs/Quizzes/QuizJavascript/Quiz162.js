

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
title: `Which of the following describes a copula?`,
cellType: "html",
choices: [
"A uniform marginal distribution",
"A bivariate distribution function for which the marginal distribution of each variable can be any type of choice",
"A bivariate distribution function for which the marginal distribution of each variable is uniform",
"A multivariate distribution function for which the marginal distribution of each variable is uniform",
"A term for a word that links the subject of a sentence to a subject complement"
],
correctAnswer: "A multivariate distribution function for which the marginal distribution of each variable is uniform"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statements is not true?`,
cellType: "html",
choices: [
"Any multivariate distribution function can be written using a copula representation",
"We can find a copula representation for the joint distribution of a gamma marginal variable and a log-normal marginal variable",
"There is always a unique copula representation for a multivariate distribution function",
"A bivariate copula has its domain on the unit square",
"A bivariate copula has its range between 0 and 1"
],
correctAnswer: "There is always a unique copula representation for a multivariate distribution function"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following statements is not true?`,
cellType: "html",
choices: [
"The independence copula is a special case of the Frank copula",
"The Frank copula can represent both positive and negative dependence",
"The product copula is also called the independence copula",
"The positive association in a Frank copula reduces as $\\gamma$, the dependence parameter, increases"
],
correctAnswer: "The positive association in a Frank copula reduces as $\\gamma$, the dependence parameter, increases"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following statements is not true of Sklar's theorem on copulas?`,
cellType: "html",
choices: [
"Copulas combine univariate marginal distributions to form a multivariate distribution",
"It is possible to model the marginal distributions and the dependence structure of any multivariate distribution separately",
"Sklar's theorem implies that the underlying unknown copula is unique",
"The arguments of any valid copula function $C$ with inputs $u\\_1$,$\\ldots$,$ u\\_p$ can be substituted with the univariate distribution functions $F\\_{X\\_1}(x\\_1)$,$\\ldots$,$F\\_{X_p}(x\\_p)$ to generate the multivariate distribution function"
],
correctAnswer: "Sklar's theorem implies that the underlying unknown copula is unique"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary4EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz162Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult162');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement162").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
