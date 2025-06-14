const quizData = [
    {
      question: "1. What is the capital of India?",
      a: "Mumbai",
      b: "New Delhi",
      c: "Chennai",
      d: "Kolkata",
      correct: "b"
    },
    {
      question: "2. Who invented JavaScript?",
      a: "Tim Berners-Lee",
      b: "Brendan Eich",
      c: "Elon Musk",
      d: "Bill Gates",
      correct: "b"
    },
    {
      question: "3. HTML stands for?",
      a: "HighText Machine Language",
      b: "HyperText and Markup Language",
      c: "HyperText Markup Language",
      d: "None of these",
      correct: "c"
    },
    {
      question: "4. What is the correct syntax for an array in JavaScript?",
      a: "var arr = (1,2,3)",
      b: "var arr = [1,2,3]",
      c: "var arr = {1,2,3}",
      d: "var arr = 1,2,3",
      correct: "b"
    },
    {
      question: "5. CSS stands for?",
      a: "Creative Style Sheets",
      b: "Computer Style Sheets",
      c: "Cascading Style Sheets",
      d: "Colorful Style Sheets",
      correct: "c"
    },
    {
      question: "6. What does JS stand for?",
      a: "JavaSyntax",
      b: "JavaSource",
      c: "JavaScript",
      d: "JustScript",
      correct: "c"
    },
    {
      question: "7. Which operator is used to assign a value?",
      a: "=",
      b: "==",
      c: "===",
      d: ":=",
      correct: "a"
    },
    {
      question: "8. Which HTML tag is used for inserting a line break?",
      a: "<lb>",
      b: "<break>",
      c: "<br>",
      d: "<newline>",
      correct: "c"
    },
    {
      question: "9. Which symbol is used for comments in JavaScript?",
      a: "//",
      b: "#",
      c: "<!-- -->",
      d: "**",
      correct: "a"
    },
    {
      question: "10. How do you call a function in JavaScript?",
      a: "callFunction()",
      b: "functionName[]",
      c: "functionName()",
      d: "call functionName",
      correct: "c"
    },
    {
      question: "11. Which of the following is a JavaScript data type?",
      a: "float",
      b: "number",
      c: "decimal",
      d: "real",
      correct: "b"
    },
    {
      question: "12. What keyword is used to declare a variable in JS?",
      a: "define",
      b: "new",
      c: "var",
      d: "constant",
      correct: "c"
    },
    {
      question: "13. Which event occurs when the user clicks on an HTML element?",
      a: "onhover",
      b: "onchange",
      c: "onmouseclick",
      d: "onclick",
      correct: "d"
    },
    {
      question: "14. Which tag is used to define a JavaScript in HTML?",
      a: "<js>",
      b: "<script>",
      c: "<code>",
      d: "<javascript>",
      correct: "b"
    },
    {
      question: "15. Which method adds a new element to the end of an array?",
      a: "append()",
      b: "push()",
      c: "addToEnd()",
      d: "insert()",
      correct: "b"
    },
    {
      question: "16. How to comment multiple lines in JS?",
      a: "// line 1 // line 2",
      b: "# line 1 \n # line 2",
      c: "/* line 1 \n line 2 */",
      d: "<!-- line 1 -->",
      correct: "c"
    },
    {
      question: "17. What is the result of 2 + '2' in JS?",
      a: "4",
      b: "22",
      c: "NaN",
      d: "Error",
      correct: "b"
    },
    {
      question: "18. How do you round a number in JS?",
      a: "Math.floor()",
      b: "Math.round()",
      c: "Math.ceil()",
      d: "round()",
      correct: "b"
    },
    {
      question: "19. Which method converts JSON to JS object?",
      a: "JSON.toObject()",
      b: "JSON.parse()",
      c: "JSON.convert()",
      d: "parse.JSON()",
      correct: "b"
    },
    {
      question: "20. What does DOM stand for?",
      a: "Document Object Model",
      b: "Data Object Mode",
      c: "Document Oriented Mode",
      d: "Data Oriented Method",
      correct: "a"
    }
  ];
  
  let currentQuiz = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answersEls = document.querySelectorAll(".answer");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  function loadQuiz() {
    deselectAnswers();
    const current = quizData[currentQuiz];
    questionEl.innerText = current.question;
    a_text.innerText = current.a;
    b_text.innerText = current.b;
    c_text.innerText = current.c;
    d_text.innerText = current.d;
  }
  
  function deselectAnswers() {
    answersEls.forEach(el => el.checked = false);
  }
  
  function getSelected() {
    let selected;
    answersEls.forEach(el => {
      if (el.checked) selected = el.value;
    });
    return selected;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        document.getElementById("quiz").innerHTML = `
          <h2>You scored ${score} out of ${quizData.length}</h2>
          <button onclick="location.reload()">Play Again</button>
        `;
      }
    } else {
      alert("Please select an answer before submitting.");
    }
  });
  
  loadQuiz();
  