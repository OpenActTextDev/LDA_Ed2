

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
title: `Which of the following is correct regarding structured data?`,
cellType: "html",
choices: [
"It has a predictable and regularly occurring format",
"Most units of structured data can be located quickly and easily",
"Some common forms of structured data are text, videos and audio files",
"It can be organised into a table consists of rows and columns",
"The SQL can be used to access and modify structured data easily and efficiently"
],
correctAnswer: "Some common forms of structured data are text, videos and audio files"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following describes the term "data mining"?`,
cellType: "html",
choices: [
"The field concerning collecting, cleaning, analyzing and gaining useful insights from data",
"The process of collecting data and making it available to to the public",
"The process of using special methods and tools that can extract information rapidly from a massive data set",
"The process of synchronizing the documentation of the data analysis with the analysis",
"The field where data mechanism is treated as unknown and algorithmic models are used"
],
correctAnswer: "The field concerning collecting, cleaning, analyzing and gaining useful insights from data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is the definition of key-value databases?`,
cellType: "html",
choices: [
"Key-value databases store and process data according to columns",
"Key-value databases use simple data model and store data according to key-values",
"Key-value databases support very complex data forms such as SimpleDB",
"Key-value databases store data in tables consisting of rows and columns",
"Key-value databases store data in rows and columns segmented in multiple notes to achieve expandability"
],
correctAnswer: "Key-value databases use simple data model and store data according to key-values"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: `Which of the following terms is the name of a big data analysis method that partitions data in order to spread up reading?`,
cellType: "html",
choices: [
"Bloom filter",
"Hashing",
"Indexing",
"Tries.",
"Parallel computing"
],
correctAnswer: "Indexing"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: `Which of the following is not an ethical concern for data analysis in the insurance sector?`,
cellType: "html",
choices: [
"Is it appropriate to use political affilation for data analysis?",
"Can we use gender for pricing auto in some states yet not in others?",
"Does the use of a variable imply discriminatory behavior that go against public policy?",
"Can I earn excessive profits for my company by using a set of variables that mimic variables restricted by regulators?",
"Which set of variables and models produces the best predictors of future insurance losses?"
],
correctAnswer: "Which set of variables and models produces the best predictors of future insurance losses?"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary5EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz2Data5Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult2Data5');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement2Data5").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
