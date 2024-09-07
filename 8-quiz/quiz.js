const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Charles Dickens"],
        answer: "Harper Lee"
    },
    {
        question: "Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["China", "India", "Japan", "South Korea"],
        answer: "Japan"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "Which gas makes up the majority of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Nitrogen"
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Rosalind Franklin", "Dorothy Hodgkin", "Barbara McClintock"],
        answer: "Marie Curie"
    }
];





const que = document.querySelector('.que');
const ans = document.querySelector('.answers');
const nxtBtn = document.querySelector('.nxt');
let currentIndex = 0;
let score=0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    nxtBtn.textContent='Next'
    que.textContent = questions[currentIndex].question; 
    ans.innerHTML = ''; // Clear existing answer buttons

    questions[currentIndex].options.forEach(option => {
        const btn = document.createElement('button');
        btn.textContent = option;
        btn.classList.add('btn');
        ans.appendChild(btn);

        if (option === questions[currentIndex].answer) {
            btn.dataset.correct = true;
        }

        btn.addEventListener('click', function() {
            if (btn.dataset.correct === 'true') {
                btn.classList.add('correct');
                score++;
                
            } else {
                btn.classList.add('false');
                
                
            }
            Array.from(ans.children).forEach(btn=>{
                if(btn.dataset.correct==='true')
                {
                    btn.classList.add('correct')
                }
                btn.disabled=true
            })
            
        });
        
    });
}

nxtBtn.addEventListener('click', function() {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion(); 
    } else {
        showScore();
    }
});

function reset()
{
    nxtBtn.style.display='none'
    while(ans.firstChild)
    {
        ans.removeChild(ans.firstChild)
    }
}


function showScore() {
    reset()
    que.innerHTML = `You scored ${score} out of ${questions.length}`;
    nxtBtn.innerHTML = 'Play again';
    nxtBtn.style.display='block'
    currentIndex=-1;
    nxtBtn.addEventListener('click',showQuestion)


    
  

}

startQuiz();
