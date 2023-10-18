

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
title: `Which of the following describes a "heavy tailed distribution"?`,
cellType: "html",
choices: [
"A distribution whose probability density/mass function increasing as the value of random variable goes to infinity",
"A distribution which assigns high probabilities to large values of a random variable",
"A distribution that is a mixture of discrete and continuous distributions",
"A distribution that is the limiting/asymptotic distribution of a sequence of distributions",
"A distribution that is defined for positive values only"
],
correctAnswer: "A distribution which assigns high probabilities to large values of a random variable"
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `Which of the following is not a limitation of the moment-based method?`,
cellType: "html",
choices: [
"The $k$-th raw moment of some distributions can be challenging or impossible to derive",
"It does not well comply with main body of the well established heavy tail theory in the literature",
"The results from the moment-based method are usually not intuitive",
"The comparison of tail weights between two light tailed distributions is not informative",
"Moment generating functions cannot always be used to calculate moments for tail weight assessment"
],
correctAnswer: "The results from the moment-based method are usually not intuitive"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Which of the following is true of comparisons based on limiting tail behavior?`,
cellType: "html",
choices: [
"The comparison is based on the asymptotic value of the ratio of survival curves",
"The comparison is based on the asymptotic value of the ratio of conditional means",
"The comparison is based on the asymptotic value of the ratio of cumulative distribution functions",
"The comparison is based on the asymptotic value of the ratio of variances",
"All choices are correct"
],
correctAnswer: "The comparison is based on the asymptotic value of the ratio of survival curves" 
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

document.getElementById("Quiz13A2Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult13A2');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement13A2").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
