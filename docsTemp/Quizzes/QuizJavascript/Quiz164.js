

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
title: `Which of the following statements is correct?`,
cellType: "html",
choices: [
"Elliptical copulas are copulas corresponding to multivariate normal distributions",
"Elliptical copula can only capture tail dependency",
"The generator function of an elliptical copula is convex and decreasing with domain $[0,1]$ and range $[0,\\infty)$",
"An elliptical copula can be constructed from a multivariate distribution with a normal marginal and a gamma marginal",
"Elliptical copulas decompose multivariate elliptical distributions into their univariate elliptical marginal distributions by Sklar's theorem"
],
correctAnswer: "Elliptical copulas decompose multivariate elliptical distributions into their univariate elliptical marginal distributions by Sklar's theorem"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not an Archimedean copula?`,
cellType: "html",
choices: [
"Frank copula",
"Clayton copula",
"Gumbel-Hougaard copula",
"$t$ copula"
],
correctAnswer: "$t$ copula"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following defines the distribution function $C(u,v)$ of the Clayton copula`,
cellType: "html",
choices: [
"$C(u, v)=-\\frac{1}{\\alpha} \\log \\left[1-\\frac{\\left(1-e^{-\\alpha u}\\right)\\left(1-e^{-\\alpha v}\\right)}{1-e^{-\\alpha}}\\right]$",
"$C(u, v)=\\exp \\left[-\\left[(-\\log u)^\\alpha+(-\\log v)^\\alpha\\right]^{1 / \\alpha}\\right]$",
"$C(u, v)=\\left(u^{-\\alpha}+v^{-\\alpha}-1\\right)^{-1 / \\alpha}$",
"$C(u, v)=uv$"
],
correctAnswer: "$C(u, v)=\\left(u^{-\\alpha}+v^{-\\alpha}-1\\right)^{-1 / \\alpha}$"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following is not true?`,
cellType: "html",
choices: [
"Both the $t$ and the normal copula are special cases of a family known as elliptical copulas",
"The normal and the $t$ distributions are examples of symmetric distributions",
"$t$ copulas are useful for modeling the dependency in the tails of bivariate distributions",
"The $t$ copulas with same association parameter in varying the degrees of freedom parameter show the same tail dependency structures"
],
correctAnswer: "The $t$ copulas with same association parameter in varying the degrees of freedom parameter show the same tail dependency structures"
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

document.getElementById("Quiz164Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult164');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement164").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
