


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
title: `How do supervised learning methods differ from unsupervised learning methods?`,
cellType: "html",
choices: [
"Supervised learning methods work with a target variable and explanatory variables whereas unsupervised learning methods work with explanatory variables only",
"Supervised learning methods requires close supervision in the implementation of statistical analyses whereas unsupervised learning methods do not",
"Supervised learning methods are also called descriptive modeling methods whereas unsupervised learning methods are called statistical methods of inference",
"Supervised learning methods are called classification methods whereas unsupervised learning methods are called regression methods",
"Supervised learning methods work with unlabeled data whereas unsupervised learning methods work with labeled data"
],
correctAnswer: "Supervised learning methods work with a target variable and explanatory variables whereas unsupervised learning methods work with explanatory variables only"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following describes the term "machine learning"?`,
cellType: "html",
choices: [
"The process of using data to make decisions",
"The process of using special methods and tools that can extract information rapidly from a massive data set",
"The process of cleaning data before useful analysis can be conducted",
"A broad field of study where computational methods use experience to improve performance or to make accurate predictions",
"The process of learning about computational programming"
],
correctAnswer: "A broad field of study where computational methods use experience to improve performance or to make accurate predictions"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `What is the primary advantage of lasso regression when compared to ridge regression?`,
cellType: "html",
choices: [
"The lasso ensures that trivial regression coefficients become zero",
"With lasso regression, we can utilize millions of variables as potential inputs to develop predictive models",
"When the number of explanatory variables equals the sample size, one gets an exact match between the targets and the predictor function",
"With lasso  regression, one uses and absolution deviation for the loss function",
"None of these choices represent a primary advantage"
],
correctAnswer: "The lasso ensures that trivial regression coefficients become zero."
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following is not a feature of the generalized linear model (GLM)?`,
cellType: "html",
choices: [
"The mean of the dependent variable is assumed to be a function of linear combinations of the explanatory variables",
"The dependent variable is assumed to follow a distribution from the exponential dispersion family",
"Linear regression is a special case of the GLM",
"The GLM provides a unifying framework for the modeling of observations in a dataset with various features",
"The Pareto distribution can be used within the GLM context"
],
correctAnswer: "The Pareto distribution can be used within the GLM context"
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

document.getElementById("Quiz2Data4Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult2Data4');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement2Data4").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}
  
