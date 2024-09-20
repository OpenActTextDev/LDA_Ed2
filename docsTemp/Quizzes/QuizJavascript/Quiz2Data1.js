

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
title: `Which of the following does not fall within the scope of data analysis?`,
cellType: "html",
choices: [
"Using procedures to analyze data",
"Interpreting results obtained from analyzing data",
"Planning the gathering of data to make its analysis easier, more precise or more accurate",
"Obtaining useful information to suggest conclusions and make decisions",
"Updating software used to store data"
],
correctAnswer: "Updating software used to store data"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following describes the term "big data analysis"?`,
cellType: "html",
choices: [
"The process of examining data sets to draw conclusions about the information they contain",
"The process of looking for patterns and formulating hypotheses using observational data",
"The process of exploring the causal relationships between the input variables and the response variable using observational data",
"The process of predicting the responses given the input variables",
"The process of using special methods and tools that can extract information rapidly from massive data"
],
correctAnswer: "The process of using special methods and tools that can extract information rapidly from massive data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: 'Which of the following does not fall within the scope of model complexity?',
cellType: "html",
choices: [
"The number of parameters used to define the model",
"The number of variables upon which it relies",
"The intricacies of relationships among the parameters and variables",
"The more complex is the model, the better it fares in fitting a set of data (and hence at estimation) but the worse it fares in predicting new outcomes",
"The process of using methods and tools that can extract information rapidly from massive data"
],
correctAnswer: "The process of using methods and tools that can extract information rapidly from massive data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: 'Which of the following is not correct?',
cellType: "html",
choices: [
"Algorithmic modeling is designed to explain causal features of a theory",
"Algorithmic modeling treats the data mechanism as unknown",
"Algorithmic modeling allows analysts to deal with a wide range of problems",
"Algorithmic modeling aims to provide predictive accuracy",
"The theory in algorithmic modeling focuses on the properties of algorithms"
],
correctAnswer: "Algorithmic modeling is designed to explain causal features of a theory"
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

document.getElementById("Quiz2Data1Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult2Data1');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement2Data1").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
