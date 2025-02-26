function getUrlVariable(name) {
    let variables = new URLSearchParams(window.location.search);
    return variables.get(name);
}

const testId = getUrlVariable('test');
console.log(testId);
let test, currentQuestion;

function loadTest() {
    //TODO: доделать загрузку теста
    test = tests[testId];
    document.querySelector('.test_title').innerText = test.title;
    document.querySelector('.test_description').innerHTML = test.description;
    currentQuestion = 0;
}
loadTest();

function loadQuestion(number) {
    let question = test.questions[number];
    document.querySelector('.current-question-number').innerText = number + 1;
    document.querySelector('.total-questions').innerText = test.questions.length;
    document.querySelector('.question_title').innerHTML = question.name;

    let answersList = document.querySelector('.question_answers');
    answersList.innerHTML = ``;
    for (let i = 0; i < question.answers.length; i++) {
        let button = document.createElement('button');
        if (test.type == typeRightWrong) {
            button.innerHTML = question.answers[i];
        } else if (test.type == typeProgress) {
            button.innerHTML = question.answers[i].name;
        }
        button.onclick = function () {
            selectAnswer(i);
        };

        answersList.appendChild(button);
    }
}
loadQuestion(0);

const userAnswers = [];

function selectAnswer(number) {
    if (document.querySelector('.question_answers button.active')) {
        document.querySelector('.question_answers button.active').classList.remove('active');
    }
    document.querySelectorAll('.question_answers button')[number].classList.add('active');
    //TODO: сделать так, чтобы все варианты ответов пользователя записывались в массив
    userAnswers[currentQuestion] = number;
    console.log(userAnswers);
}

document.querySelector('.next_question').addEventListener('click', function () {
    if (userAnswers[currentQuestion] == undefined) {
        alert('Пожалуйста, выберите вариант ответа!');
        return;
    }
    //TODO: если все вопросы пройдены, то показываем секцию с результатами
    if (currentQuestion + 1 >= test.questions.length) {
        showResults();
    } else {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
});

function showResults() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    if (test.type == typeRightWrong) {
        let correctAnswers = 0;
        for (let i = 0; i < test.questions.length; i++) {
            if (userAnswers[i] == test.questions[i].correctAnswer) {
                correctAnswers++;
            }
        }

        let text = `Your communication with people may currently feel challenging at times. Perhaps you’re not always confident about how to handle certain situations. That’s completely normal — the key is to work on yourself, develop communication skills, and learn to set boundaries. Try to analyze your emotions and reactions to feel more confident and secure.`;
        if (correctAnswers == test.questions.length) {
            text = `You are a communication master! Your answers show that you are confident, have an excellent understanding of your behavior, and are skilled at interpreting the reactions of others. You know how to build healthy and harmonious relationships while staying true to yourself. Congratulations — this is an outstanding result!`;
        } else if (correctAnswers >= test.questions.length / 2) {
            text = `You already have a solid understanding of communication with others. You often act with confidence and know how to respond to challenging situations. However, there may still be moments when you doubt yourself or act impulsively. Keep developing your skills, and you’ll become even more confident!`;
        } else if (correctAnswers > 0) {
            text = `You are taking your first steps toward better understanding and improving your interactions with people. Sometimes you make the right choices, but there are still moments of uncertainty or difficulty. Focus on recognizing your feelings, don’t be afraid to be open, and work on building healthier communication.`;
        }

        document.querySelector('.results-text').innerText = `You answered correctly ${correctAnswers} out of ${test.questions.length} questions. ${text}`;

    } else if (test.type == typeProgress) {
        let totalPoints = 0;
        for (let i = 0; i < test.questions.length; i++) {
            let userAnswer = userAnswers[i];
            totalPoints += test.questions[i].answers[userAnswer].point;
        }

        let result = `"Your stress level in communication with others is very low." 
Your answers indicate that you feel comfortable and confident in such interactions. You understand your emotions, know how to handle challenges, and build harmonious relationships. Keep maintaining this balance and share your calmness with those around you.`;

if (totalPoints >= 20) {
    result = `"Your stress level in communication with others is quite high." 
Your answers suggest that such interactions often feel challenging and cause significant tension for you. You might experience insecurity, irritation, or even a sense of helplessness. Consider focusing on your emotional well-being, exploring stress management techniques, or seeking support to find effective strategies for improving the situation.`;
} else if (totalPoints >= 10) {
    result = `"Your stress level in communication with others is within a normal range." 
Sometimes you may find it difficult, but overall, you are capable of finding solutions and managing your emotions. You might notice moments that cause discomfort, but you are adaptable and able to maintain balance. Try incorporating relaxation techniques to feel even more confident.`;
}

document.querySelector('.results-text').innerText = `You scored ${totalPoints} points. ${result}`;
    }
};