const quizList = document.getElementById("quiz-list");

fetch("https://raw.githubusercontent.com/curiousily/simple-quiz/master/script/statements-data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.statement;
            quizList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
