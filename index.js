const boxes = document.querySelectorAll(".box");
const resultElement = document.querySelector(".result");
const score0 = document.querySelector(".score-0");
const scorex = document.querySelector(".score-x")
const gameDiv = document.querySelector(".game-div");
var turnO = true;

let gamePattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



function toggleBorderColor() {
    boxes.forEach((box) => {
        if (turnO) {
            box.classList.add("border-blue");
            box.classList.remove("border-red");
        } else {
            box.classList.remove("border-blue");
            box.classList.add("border-red");
        }
    });
}

toggleBorderColor();

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turnO) {
            box.style.color = "blue";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "red";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        winCheck();
         toggleBorderColor();
    });
});

function winCheck() {
    for (let pattern of gamePattern) {
        let pat1 = boxes[pattern[0]].innerHTML;
        let pat2 = boxes[pattern[1]].innerHTML;
        let pat3 = boxes[pattern[2]].innerHTML;

        if (pat1 != "" && pat2 != "" && pat3 != "") {
            if (pat1 == pat2 && pat2 == pat3) {
                resultElement.innerText = `Winner is ${pat1}`;
                if (pat1 === "X") {
                    console.log("x");
                    let currentScorex = parseInt(scorex.textContent)
                    scorex.textContent = currentScorex + 1;
                } else {
                    console.log("bye");
                    let currentScoreo = parseInt(score0.textContent)
                    score0.textContent = currentScoreo + 1;
                }
                boxes.forEach((box) => {
                    box.disabled = true;
                })
            }
        }
    }
}

document.addEventListener("click", function (click) {
    if (click.target.classList.contains("fa-xmark")) {
        score0.textContent = 0;
        scorex.textContent = 0
        boxes.forEach((box) => {
            box.innerText = "";
            resultElement.innerText = "Winner is"
            box.disabled = false
        });
        // turnO = true;

    }
});


function reset() {
    boxes.forEach((box) => {
        box.innerText = "";
        resultElement.innerText = "winner is"
        box.disabled = false
    });
    // turnO = true;
}

