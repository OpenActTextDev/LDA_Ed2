


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
title: `Which of the following steps is not a component of a data analysis process?`,
cellType: "html",
choices: [
"Manually checking every data element using the original source of the data",
"Exploring the relationships within the data and figuring out which type of analysis makes sense",
"Performing statistical analysis",
"Interpreting the statistical results in the context of the overall study",
"Interpreting the data by connecting it to the study goals and the larger field of the study"
],
correctAnswer: "Manually checking every data element using the original source of the data"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following statements is correct?`,
cellType: "html",
choices: [
"Exploratory data analysis uses experimental data whereas confirmatory data analysis uses observational data",
"Exploratory data analysis aims to test hypotheses whereas confirmatory data analysis aims to formulate hypotheses",
"Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance",
"Exploratory data analysis uses traditional statistical tools of inference, significance testing and confidence intervals, whereas confirmatory data analysis uses descriptive statistics",
"All choices are correct"
],
correctAnswer: "Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `In training a model, what is the purpose of the data splitting procedure?`,
cellType: "html",
choices: [
"It guards against overfitting a model and emphasizes predictive aspects of a model",
"It reduces the sample size in the analysis",
"It provides additional work, and hence compensation, for data analysts",
"It provides additional work, and hence compensation, for computer programmers",
"It helps to verify the causal nature of a relationship"
],
correctAnswer: "It guards against overfitting a model and emphasizes predictive aspects of a model"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `What is diagnostic checking?`,
cellType: "html",
choices: [
"Especially in regression analysis, it is the process of using deviations from the model fit to suggest improvements to the candidate model",
"The process of interpreting a model fit in terms of a causal relationship",
"Especially in a medical setting, it is the process of verifying historical attitudes of a patient",
"The process of examining data that evolves over times",
"The process of examining stock market data"
],
correctAnswer: "Especially in regression analysis, it is the process of using deviations from the model fit to suggest improvements to the candidate model"
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

document.getElementById("Quiz2Data2Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult2Data2');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement2Data2").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
