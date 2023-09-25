

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
title: `Which of the following statements is not correct?`,
cellType: "html",
choices: [
"Gumbel may exhibit upper dependence whereas Frank copula exhibit no tail dependence",
"Tail dependency concentration function captures the probability of two random variables both catching up extreme value",
"Spearman's rho, Kendall's tau and Pearson correlation are all dependent on the choice of marginals",
"Spearman's correlation and Kendall's tau correlation can be expressed solely in terms of the copula function",
"A copula is bounded below when two random variables are perfectly negatively related and is bounded above when two variables are perfectly positively related"
],
correctAnswer: "Spearman's rho, Kendall's tau and Pearson correlation are all dependent on the choice of marginals"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The bivariate distribution function $C(u,v)=uv$. What is the upper tail dependence coefficient of this copula?`,
cellType: "html",
choices: [
"0",
"0.1",
"0.5",
"1"
],
correctAnswer: "0"
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

document.getElementById("Quiz165Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult165');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement165").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
